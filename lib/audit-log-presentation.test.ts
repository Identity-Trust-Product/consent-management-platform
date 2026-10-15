import { test } from "node:test";
import assert from "node:assert/strict";
import { auditStatus, eventLabel, formatInIst, getAuditContext } from "./audit-log-presentation";

test("missing actor information is not inferred from the data principal", () => {
  const context = getAuditContext({ dataPrincipalId: "subject-42", consentStatus: "accepted" });
  assert.equal(context.actor, undefined);
  assert.equal(context.decision, undefined);
  assert.equal(getAuditContext(null).ip, undefined);
});
test("uses explicit recorded actor and event context without losing zero or false", () => {
  const context = getAuditContext({ actor: { email: "operator@example.test", role: "operator" }, entity: { id: 0 }, decision: false, request: { method: "POST" }, metadata: { ipAddress: "127.0.0.1", applicationId: "app-1" } });
  assert.equal(context.actor, "operator@example.test");
  assert.equal(context.role, "operator");
  assert.equal(context.entity, "0");
  assert.equal(context.decision, "false");
  assert.equal(context.method, "POST");
  assert.equal(context.ip, "127.0.0.1");
  assert.equal(context.application, "app-1");
});
test("delivery outcome labels keep pending and timeout distinct from success", () => {
  assert.equal(auditStatus("DELIVERED").label, "Success");
  assert.equal(auditStatus("PENDING").label, "Pending");
  assert.equal(auditStatus("TIMEOUT").label, "Timeout");
  assert.equal(auditStatus("NEW_STATE").label, "NEW_STATE");
  assert.equal(eventLabel("CONSENT_CREATED"), "Consent Created");
});
test("IST timestamps roll over to the next calendar day", () => {
  const formatted = formatInIst("2026-10-14T18:30:00Z");
  assert.match(formatted, /15 Oct 2026/);
  assert.match(formatted, /12:00/);
  assert.match(formatted, /IST$/);
});
