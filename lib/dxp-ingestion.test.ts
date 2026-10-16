import { test } from "node:test";
import assert from "node:assert/strict";
import { createDxpReceiver, isDxpEndpoint, type DxpStoredDocument } from "./dxp-ingestion";

const key = "test-integration-key";
const notice = {
  event: "notice.accepted",
  event_id: "5e245d75-72b4-41db-9524-e116f9c40728",
  occurred_at: "2026-10-15T07:07:17Z",
  request_ref: "REQ-2026-000003",
  consent_id: null,
  data_fiduciary: { id: 2, name: "Bank" },
  data_recipient: { id: 4, name: "Recipient", organization: "Credit Risk" },
  display: { title: "Notice", subtitle: "Request", sections: [] },
  notice: { text: "मराठी notice" },
  notice_hash: "a".repeat(64),
  accepted: {
    at: "2026-10-15T07:07:17Z",
    by: { name: "Recipient", email: "risk@example.test", organization: "Credit Risk", designation: "Officer" },
  },
  future_field: { value: false },
};
const consent = {
  ...notice,
  event: "consent.issued",
  event_id: "8fddbd25-e91f-4b86-b965-3369a974fd02",
  consent_id: "3ab96001-f833-4dac-ae45-fa8ca96298e5",
  artifact: { signed: true },
  signature: "c2lnbmF0dXJl",
  public_key_pem: "-----BEGIN PUBLIC KEY-----example",
};

function request(body: string | Uint8Array = JSON.stringify(notice), headers: Record<string, string> = {}) {
  return new Request("http://localhost/api/dxp/notices", {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8", "x-api-key": key, ...headers },
    body: typeof body === "string" ? body : Buffer.from(body),
  });
}

test("missing or wrong key returns 401 without reading or storing documents", async () => {
  const receive = createDxpReceiver("notice.accepted", async () => assert.fail("must not store"), () => key);
  for (const supplied of ["", "wrong", "x".repeat(100)]) {
    assert.equal((await receive(request("invalid json", { "x-api-key": supplied }))).status, 401);
  }
  const missing = request();
  missing.headers.delete("x-api-key");
  assert.equal((await receive(missing)).status, 401);
});

test("unconfigured integration fails closed", async () => {
  const receive = createDxpReceiver("notice.accepted", async () => assert.fail("must not store"), () => undefined);
  assert.equal((await receive(request())).status, 503);
});

test("preserves original UTF-8 bytes, whitespace, unknown fields and number spelling", async () => {
  let stored: DxpStoredDocument | undefined;
  const receive = createDxpReceiver("notice.accepted", async (doc) => { stored = doc; }, () => key);
  const raw = "  " + JSON.stringify({ ...notice, large: "RAW_NUMBER" }, null, 2)
    .replace('"RAW_NUMBER"', "9007199254740993") + "\n";
  assert.equal((await receive(request(raw))).status, 200);
  assert.deepEqual(stored?.rawBody, Buffer.from(raw));
  assert.equal(stored?.requestRef, notice.request_ref);
  assert.equal(stored?.consentId, null);
});

test("consent is indexed by its consent_id and request_ref", async () => {
  let stored: DxpStoredDocument | undefined;
  const receive = createDxpReceiver("consent.issued", async (doc) => { stored = doc; }, () => key);
  assert.equal((await receive(request(JSON.stringify(consent), {
    "x-dxp-event": consent.event, "x-dxp-event-id": consent.event_id,
  }))).status, 200);
  assert.equal(stored?.consentId, consent.consent_id);
  assert.equal(stored?.requestRef, consent.request_ref);
});

test("malformed JSON, UTF-8, envelopes and mismatched events return 400", async () => {
  const receive = createDxpReceiver("notice.accepted", async () => assert.fail("must not store"), () => key);
  for (const body of ["{", "null", "[]", "{}", JSON.stringify(consent),
    JSON.stringify({ ...notice, request_ref: "" }),
    JSON.stringify({ ...notice, notice: null }),
    JSON.stringify({ ...notice, event_id: "invalid" }),
    new Uint8Array([0xff, 0xfe]),
  ]) {
    assert.equal((await receive(request(body))).status, 400);
  }
  assert.equal((await receive(request(JSON.stringify(notice), { "content-type": "text/plain" }))).status, 400);
  assert.equal((await receive(request(JSON.stringify(notice), { "x-dxp-event": "consent.issued" }))).status, 400);
  assert.equal((await receive(request(JSON.stringify(notice), { "x-dxp-event-id": consent.event_id }))).status, 400);
  const receiveConsent = createDxpReceiver("consent.issued", async () => assert.fail("must not store"), () => key);
  assert.equal((await receiveConsent(request())).status, 400);
});

test("200 is withheld until storage completes", async () => {
  let finish!: () => void;
  const pendingStorage = new Promise<void>((resolve) => { finish = resolve; });
  let entered!: () => void;
  const enteredStorage = new Promise<void>((resolve) => { entered = resolve; });
  const receive = createDxpReceiver("notice.accepted", async () => { entered(); await pendingStorage; }, () => key);
  let answered = false;
  const pending = receive(request()).then((response) => { answered = true; return response; });
  await enteredStorage;
  assert.equal(answered, false);
  finish();
  assert.equal((await pending).status, 200);
});

test("storage failure returns a retryable non-2xx", async () => {
  const receive = createDxpReceiver("notice.accepted", async () => { throw new Error("database unavailable"); }, () => key);
  assert.equal((await receive(request())).status, 503);
});

test("session middleware exemption only covers the two DXP receiving paths", () => {
  assert.equal(isDxpEndpoint("/api/dxp/notices"), true);
  assert.equal(isDxpEndpoint("/api/dxp/consents"), true);
  for (const path of ["/api/dxp", "/api/dxp/admin", "/api/dxp/notices/extra", "/cms/api/v1/notices/grant"]) {
    assert.equal(isDxpEndpoint(path), false);
  }
});
