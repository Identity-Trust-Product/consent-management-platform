import { test } from "node:test";
import assert from "node:assert/strict";
import { storeDxpDocument } from "./dxp-document-service";
import type { DxpStoredDocument } from "../dxp-ingestion";

const document: DxpStoredDocument = {
  event: "notice.accepted",
  eventId: "5e245d75-72b4-41db-9524-e116f9c40728",
  requestRef: "REQ-2026-000003",
  consentId: null,
  rawBody: Buffer.from('{ "event": "notice.accepted" }'),
};
type Database = Parameters<typeof storeDxpDocument>[1];

test("new delivery awaits an atomic insert with duplicate protection", async () => {
  const db = { dxpDocument: {
    async createMany(args: unknown) {
      assert.deepEqual(args, { data: [document], skipDuplicates: true });
      return { count: 1 };
    },
    async findUnique() { assert.fail("new insert does not need a duplicate lookup"); },
  } } as unknown as Database;
  await storeDxpDocument(document, db);
});

test("duplicate event/request_ref is acknowledged without updating the document", async () => {
  const db = { dxpDocument: {
    async createMany() { return { count: 0 }; },
    async findUnique(args: unknown) {
      assert.deepEqual(args, {
        where: { event_requestRef: { event: document.event, requestRef: document.requestRef } },
        select: { id: true },
      });
      return { id: "first-document" };
    },
  } } as unknown as Database;
  await storeDxpDocument(document, db);
});

test("conflicting identifiers for another request are never acknowledged as stored", async () => {
  const db = { dxpDocument: {
    async createMany() { return { count: 0 }; },
    async findUnique() { return null; },
  } } as unknown as Database;
  await assert.rejects(storeDxpDocument(document, db), /identifier conflict/);
});
