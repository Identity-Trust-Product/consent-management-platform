import React from "react";
import { test } from "node:test";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import { DxpDocumentDisplay, DxpStatusBadge } from "./dxp-document-view";
import { readDxpDisplay } from "../lib/dxp-display";

test("renders all section types in order and escapes document text", () => {
  const display = readDxpDisplay(Buffer.from(JSON.stringify({
    status: "ACTIVE",
    display: {
      title: '<script>alert("title")</script>', subtitle: "Request REQ-123",
      sections: [
        { heading: "First section", rows: [{ label: "<b>Label</b>", value: '<img src=x onerror="alert(1)">' }] },
        { heading: "Second section", table: { columns: ["Name", "Allowed"], rows: [["Alice", false], { Name: "Bob", Allowed: 0 }] } },
        { heading: "Third section", items: ["मराठी", "<a href=x>Link</a>"] },
      ],
    },
  })));
  assert.ok(display);
  const html = renderToStaticMarkup(<DxpDocumentDisplay display={display} />);
  assert.ok(html.indexOf("First section") < html.indexOf("Second section"));
  assert.ok(html.indexOf("Second section") < html.indexOf("Third section"));
  assert.match(html, /&lt;script&gt;/);
  assert.match(html, /&lt;img/);
  assert.doesNotMatch(html, /<script|<img|<a href/);
  assert.match(html, /Alice/);
  assert.match(html, /Bob/);
  assert.match(html, /false/);
  assert.match(html, />0</);
  assert.match(html, /मराठी/);
  assert.doesNotMatch(html, /ACTIVE/);
});

test("invalid sections fail gracefully instead of hiding or reinterpreting content", () => {
  for (const sections of [
    [{ heading: "Missing content" }],
    [{ heading: "Ambiguous content", rows: [], items: [] }],
    [{ heading: "Invalid value", rows: [{ label: "Name", value: { html: "<b>name</b>" } }] }],
  ]) {
    assert.equal(readDxpDisplay(Buffer.from(JSON.stringify({ display: { title: "Title", subtitle: "Subtitle", sections } }))), null);
  }
  assert.match(renderToStaticMarkup(<DxpDocumentDisplay display={null} />), /could not be read/);
});

test("badge shows the live label and reason as text", () => {
  const html = renderToStaticMarkup(<DxpStatusBadge status={{ checked: true, value: {
    consent_id: "id", request_ref: "REQ-123", status: "REVOKED", display_status: "Revoked",
    reason: "Review cycle closed <script>", status_changed_at: null, valid_until: null,
    access: "0 of 31 accesses used", checked_at: "2026-10-15T07:07:17Z",
  } }} />);
  assert.match(html, /Revoked: Review cycle closed &lt;script&gt;/);
  assert.doesNotMatch(html, /<script>/);
});

test("checking and failed badges never display active", () => {
  const checking = renderToStaticMarkup(<DxpStatusBadge status="checking" />);
  const failed = renderToStaticMarkup(<DxpStatusBadge status={{ checked: false }} />);
  assert.match(checking, /Checking status/);
  assert.match(failed, /Status could not be checked/);
  assert.doesNotMatch(checking + failed, /Active|ACTIVE/);
});
