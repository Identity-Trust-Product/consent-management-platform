import { test } from "node:test";
import assert from "node:assert/strict";
import { getDxpConsentStatus } from "./dxp-status-service";

const payload = {
  consent_id: "consent-123", request_ref: "REQ-2026-000003",
  status: "ACTIVE", display_status: "Active", reason: null,
  status_changed_at: null, valid_until: "2026-11-14T07:07:17Z",
  access: "0 of 31 accesses used", checked_at: "2026-10-15T07:07:17Z",
};
const config = { platformUrl: "https://dxp.example.test", integrationKey: "test-key" };

test("fetches fresh status on every call with server key and no-store", async () => {
  let calls = 0;
  const fetcher: typeof fetch = async (url, init) => {
    calls++;
    assert.equal(String(url), "https://dxp.example.test/api/integration/consents/consent-123/status");
    assert.equal(init?.cache, "no-store");
    assert.equal(init?.redirect, "error");
    assert.equal(init?.method, "GET");
    assert.equal(new Headers(init?.headers).get("x-api-key"), "test-key");
    assert.ok(init?.signal);
    return Response.json(calls === 1 ? payload : {
      ...payload, status: "REVOKED", display_status: "Revoked", reason: "Review cycle closed",
    });
  };
  const options = { ...config, fetch: fetcher };
  const first = await getDxpConsentStatus(payload.consent_id, payload.request_ref, options);
  const second = await getDxpConsentStatus(payload.consent_id, payload.request_ref, options);
  assert.equal(calls, 2);
  assert.deepEqual(first, { checked: true, value: payload });
  assert.ok(second.checked === true);
  if (second.checked === true) assert.equal(second.value.display_status, "Revoked");
});

test("uses and encodes request reference when consent ID is unavailable", async () => {
  const fetcher: typeof fetch = async (url) => {
    assert.equal(String(url), "https://dxp.example.test/api/integration/consents/REQ%2F123%3F/status");
    return Response.json({ ...payload, request_ref: "REQ/123?" });
  };
  assert.equal((await getDxpConsentStatus(null, "REQ/123?", { ...config, fetch: fetcher })).checked, true);
});

test("failures never return a stored or previously active status", async () => {
  const failures: (typeof fetch)[] = [
    async () => new Response("unauthorized", { status: 401 }),
    async () => new Response("unavailable", { status: 503 }),
    async () => new Response("invalid JSON", { status: 200 }),
    async () => Response.json({ status: "ACTIVE" }),
    async () => Response.json({ ...payload, consent_id: "another-consent" }),
    async () => Response.json({ ...payload, request_ref: "another-request" }),
    async () => { throw new DOMException("Timed out", "TimeoutError"); },
    async () => { throw new Error("Network failed"); },
  ];
  for (const fetcher of failures) {
    assert.deepEqual(await getDxpConsentStatus(payload.consent_id, payload.request_ref, {
      ...config, fetch: fetcher,
    }), { checked: false });
  }
});

test("missing configuration makes no upstream request", async () => {
  const fetcher: typeof fetch = async () => assert.fail("must not fetch");
  for (const options of [
    { platformUrl: "", integrationKey: "test-key" },
    { platformUrl: config.platformUrl, integrationKey: "" },
    { platformUrl: "file:///secret", integrationKey: "test-key" },
    { platformUrl: "invalid-url", integrationKey: "test-key" },
  ]) {
    assert.deepEqual(await getDxpConsentStatus(payload.consent_id, payload.request_ref, {
      ...options, fetch: fetcher,
    }), { checked: false });
  }
});
