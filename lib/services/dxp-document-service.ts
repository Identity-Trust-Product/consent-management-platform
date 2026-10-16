import prisma from "@/lib/prisma";
import type { DxpStoredDocument } from "@/lib/dxp-ingestion";

export async function storeDxpDocument(
  document: DxpStoredDocument,
  db: Pick<typeof prisma, "dxpDocument"> = prisma,
): Promise<void> {
  // PostgreSQL ON CONFLICT DO NOTHING handles concurrent deliveries atomically.
  // A repeat never overwrites the first immutable document.
  const result = await db.dxpDocument.createMany({
    data: [document],
    skipDuplicates: true,
  });
  if (result.count === 0) {
    const existing = await db.dxpDocument.findUnique({
      where: { event_requestRef: { event: document.event, requestRef: document.requestRef } },
      select: { id: true },
    });
    // A reused event_id/consent_id for another request must not be acknowledged as stored.
    if (!existing) throw new Error("DXP document identifier conflict");
  }
}
