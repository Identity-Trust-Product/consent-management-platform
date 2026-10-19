import React from "react";
import { test } from "node:test";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import { DxpConsentArtifactView } from "./dxp-consent-artifact-view";
import { formatArtifactDate, readDxpConsentArtifact } from "../lib/dxp-consent-artifact";

const fixture = {
  event: "consent.issued", consent_id: "consent-1", request_ref: "REQ-1",
  display: { title: "Consent artefact", subtitle: "Request REQ-1", sections: [
    { heading: "History", items: ["A history entry that must not appear"] },
    { heading: "Extra DXP terms", items: ["Extra term <script>alert(1)</script>"] },
  ] },
  artifact: {
    consent_id: "consent-1", data_fiduciary: { name: "Test Bank" },
    data_recipient: { name: "Recipient", organization: "AML Cell", designation: "Officer", org_type: "internal" },
    dataset: { name: "Transaction Ledger" }, purpose: { code: "AML", description: "Detect patterns" },
    purpose_profile: { name: "Structuring detection", summary: "Profile summary" },
    approval: { mode: "auto", basis: "Standing purpose", review: "Quarterly review", schedule: "Daily" },
    validity: { from: "2026-10-19T06:15:00Z", to: "2026-10-24T06:15:00Z", duration_days: 5 },
    max_access_count: 500, onward_sharing: false, revocable: true,
    issuer: "DXP", issued_at: "2026-10-19T06:15:00Z",
    notice: { version: "1.2", hash: "notice-hash", accepted_at: "2026-10-19T06:15:00Z" },
    scope: { row_filter: { field: "amount", op: "gt", value: 100 } },
    data_items: [
      { field: "account_no", label: "Account (token)", pii_category: "personal", treatment: "token", delivered_as: "account_token", why: "Repeat patterns" },
      { field: "name", label: "Counterparty name", pii_category: "personal", treatment: "exclude", why: "Not needed" },
    ],
    recipient_obligations: { retention_and_erasure: "Erase on expiry" },
    parameters: { window_hours: 24 },
  },
  signature: "test-signature", public_key_pem: "test-public-key",
};

function model() {
  const raw = " " + JSON.stringify(fixture) + "\n";
  const artifact = readDxpConsentArtifact(Buffer.from(raw));
  assert.ok(artifact);
  assert.equal(artifact.rawDocument, raw);
  return artifact;
}

test("maps all artifact details and keeps the complete signed document for download", () => {
  const artifact = model();
  assert.equal(artifact.dataItems[0].deliveredAs, "account_token");
  assert.equal(artifact.dataItems[0].treatment, "Tokenised");
  assert.equal(artifact.dataItems[1].deliveredAs, "—");
  assert.equal(artifact.dataItems[1].excluded, true);
  assert.match(artifact.scopeItems[0], /amount/);
  assert.ok(artifact.terms.some((term) => term.label === "Approval" && term.detail?.includes("Quarterly review")));
  assert.ok(artifact.obligations.some((term) => term.value === "Erase on expiry"));
  assert.deepEqual(JSON.parse(artifact.signedArtifactJson), fixture.artifact);
  assert.equal(formatArtifactDate("2026-10-19T06:15:00Z"), "19 Oct 2026, 11:45 am");
});

test("matches the screenshot sections, renders the live status and excludes history", () => {
  const html = renderToStaticMarkup(<DxpConsentArtifactView artifact={model()} onBack={() => {}} status={{ checked: true, value: {
    consent_id: "consent-1", request_ref: "REQ-1", status: "REVOKED", display_status: "Revoked", reason: "Review cycle closed",
    status_changed_at: null, valid_until: "2026-10-24T06:15:00Z", access: "7 of 500 accesses used", checked_at: "2026-10-19T07:00:00Z",
  } }} />);
  for (const heading of ["Consent terms", "Scope", "Consented data items", "Recipient obligations", "Signed artefact", "Download artefact"]) assert.ok(html.includes(heading));
  assert.match(html, /Revoked: Review cycle closed/);
  assert.doesNotMatch(html, /Accesses used|7 \/ 500/);
  assert.match(html, /account_token/);
  assert.match(html, /test-signature/);
  assert.match(html, /test-public-key/);
  assert.doesNotMatch(html, /A history entry|>History<|<script>/);
  assert.match(html, /&lt;script&gt;/);
  assert.doesNotMatch(html, /signature verified|Consent key active/);
});

test("live-status failure leaves the stored artifact visible without an access usage card", () => {
  const html = renderToStaticMarkup(<DxpConsentArtifactView artifact={model()} status={{ checked: false }} onBack={() => {}} />);
  assert.match(html, /Status could not be checked/);
  assert.doesNotMatch(html, /Accesses used|Unknown \/ 500/);
  assert.match(html, /Test Bank/);
  assert.doesNotMatch(html, /text-emerald-700|>Active</);
});

test("invalid artifact bodies fail without dropping back to invented defaults", () => {
  assert.equal(readDxpConsentArtifact(Buffer.from("invalid JSON")), null);
  assert.equal(readDxpConsentArtifact(Buffer.from(JSON.stringify({ ...fixture, artifact: null }))), null);
  assert.equal(readDxpConsentArtifact(Buffer.from(JSON.stringify({ ...fixture, event: "notice.accepted" }))), null);
});
