import Link from "next/link";
import prisma from "@/lib/prisma";
import { checkPermission } from "@/lib/rbac";
import { Forbidden } from "@/components/forbidden";
import { DxpDocumentsClient } from "./documents-client";

export const dynamic = "force-dynamic";

export default async function DxpDocumentsPage({ searchParams }: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  if (!await checkPermission("CONSENT_RECORD", "READ")) return <Forbidden requiredRole="privy_cgp_user" />;
  const params = await searchParams;
  const query = typeof params.query === "string" ? params.query.trim() : "";
  const requestedPage = Number(params.page);
  const page = Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const pageSize = 25;
  const where = query ? { OR: [
    { requestRef: { contains: query, mode: "insensitive" as const } },
    { consentId: { contains: query, mode: "insensitive" as const } },
  ] } : {};
  const documents = await prisma.dxpDocument.findMany({
    where,
    orderBy: [{ receivedAt: "desc" }, { id: "desc" }],
    skip: (page - 1) * pageSize,
    take: pageSize + 1,
    select: { id: true, event: true, requestRef: true, consentId: true, receivedAt: true },
  });
  const pageUrl = (number: number) => `?${new URLSearchParams({ query, page: String(number) })}`;
  return <main className="space-y-6 p-6">
    <div><h1 className="text-2xl font-semibold">DXP Documents</h1>
      <p className="text-muted-foreground">View accepted notices and consent artefacts. Consent status is checked each time you open a consent.</p>
    </div>
    <form className="flex flex-wrap gap-2">
      <label htmlFor="dxp-query" className="sr-only">Request reference or consent ID</label>
      <input id="dxp-query" name="query" defaultValue={query} placeholder="Request reference or consent ID"
        className="min-w-64 rounded-md border bg-background px-3 py-2" />
      <button type="submit" className="rounded-md bg-primary px-4 py-2 text-primary-foreground">Search</button>
    </form>
    <DxpDocumentsClient documents={documents.slice(0, pageSize).map((document) => ({
      ...document, receivedAt: document.receivedAt.toISOString(),
    }))} />
    <nav aria-label="Document pages" className="flex items-center gap-4 text-sm">
      {page > 1 && <Link href={pageUrl(page - 1)}>Previous</Link>}
      <span>Page {page}</span>
      {documents.length > pageSize && <Link href={pageUrl(page + 1)}>Next</Link>}
    </nav>
  </main>;
}
