import React from "react";
import { test } from "node:test";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import { DxpNoticeView } from "./dxp-notice-view";
import { readDxpNotice } from "../lib/dxp-notice";

const fixture = {
  event: "notice.accepted", request_ref: "REQ-2026-000004",
  data_fiduciary: { name: "Test Bank" },
  data_recipient: { name: "Recipient", organization: "AML Cell" },
  notice: { version: "1.2", issuer: "DXP", grievance_contact: { name: "Officer", email: "dpo@example.test" } },
  notice_hash: "notice-sha256",
  accepted: { at: "2026-10-19T06:15:00Z", by: { email: "recipient@example.test" } },
  display: { title: "Accepted notice", subtitle: "Request REQ-2026-000004", sections: [
    { heading: "Parties", rows: [{ label: "Data Fiduciary", value: "Test Bank" }, { label: "Data recipient", value: "Recipient · AML Cell" }, { label: "Recipient role", value: "Officer" }] },
    { heading: "Purpose", rows: [{ label: "Dataset", value: "Ledger" }, { label: "Specified purpose", value: "AML" }, { label: "Duration", value: "5 days" }] },
    { heading: "Scope", items: ["All rows of the dataset are in scope."] },
    { heading: "Data items", table: { columns: ["Data item", "Category", "Personal data", "Treatment"], rows: [["Account", "Financial", "Personal data", "Tokenised"], ["Channel", "Transactional", "Not personal data", "Shared as provided"]] } },
    { heading: "Conditions of processing", items: ["Only the approved purpose."] },
    { heading: "Revocation and grievances", items: ["Contact the Data Fiduciary."] },
    { heading: "Processing by the platform", items: ["Recorded by DXP <script>alert(1)</script>"] },
  ] },
};

test("notice view uses the screenshot structure and retains all supplied sections", () => {
  const notice = readDxpNotice(Buffer.from(JSON.stringify(fixture)));
  assert.ok(notice);
  const html = renderToStaticMarkup(<DxpNoticeView notice={notice} />);
  for (const text of ["Notice version 1.2", "In short:", "2 data items", "Data Fiduciary", "Data recipient", "Dataset and purpose", "Scope of the data", "Data items to be shared", "Conditions of processing", "Revocation and grievances", "Processing by the platform", "dpo@example.test", "recipient@example.test", "notice-sha256"]) assert.ok(html.includes(text), text);
  assert.match(html, /19 Oct 2026, 11:45 am IST/);
  assert.match(html, /&lt;script&gt;/);
  assert.doesNotMatch(html, /<script>|role="status"/);
  assert.ok(html.indexOf("Dataset and purpose") < html.indexOf("Scope of the data"));
  assert.ok(html.indexOf("Scope of the data") < html.indexOf("Data items to be shared"));
});

test("explicit summaries remain authoritative and notices do not require a consent", () => {
  const notice = readDxpNotice(Buffer.from(JSON.stringify({ ...fixture, notice: { ...fixture.notice, summary: "DXP supplied summary" }, consent_id: null })));
  assert.ok(notice);
  assert.equal(notice.summary, "DXP supplied summary");
  assert.equal(notice.requestRef, fixture.request_ref);
});

test("malformed and non-notice documents fail safely", () => {
  assert.equal(readDxpNotice(Buffer.from("invalid JSON")), null);
  assert.equal(readDxpNotice(Buffer.from(JSON.stringify({ ...fixture, event: "consent.issued" }))), null);
});
