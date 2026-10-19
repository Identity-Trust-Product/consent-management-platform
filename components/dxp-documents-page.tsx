import Link from "next/link";
import prisma from "@/lib/prisma";
import { checkPermission } from "@/lib/rbac";
import { Forbidden } from "@/components/forbidden";
import { DxpDocumentsClient } from "@/app/cms/data-fiduciary/dxp-documents/documents-client";

export default async function DxpDocumentsPageContent({ searchParams, kind = "all" }: {
  searchParams: Promise<{ query?: string; page?: string }>;
  kind?: "notices" | "consents" | "all";
}) {
  if (!await checkPermission("CONSENT_RECORD", "READ")) return <Forbidden requiredRole="privy_cgp_user" />;
  const params = await searchParams;
  const query = typeof params.query === "string" ? params.query.trim() : "";
  const requestedPage = Number(params.page);
  const page = Number.isSafeInteger(requestedPage) && requestedPage > 0 && requestedPage <= 1000000 ? requestedPage : 1;
  const isNotice = kind === "notices";
  const title = isNotice ? "DXP Notices" : kind === "consents" ? "DXP Consent Artifacts" : "DXP Documents";
  const event = isNotice ? "notice.accepted" : kind === "consents" ? "consent.issued" : undefined;
  const pageSize = 25;
  const where = query ? { OR: [
    { requestRef: { contains: query, mode: "insensitive" as const } },
    { consentId: { contains: query, mode: "insensitive" as const } },
  ] } : {};
  const documents = await prisma.dxpDocument.findMany({
    where: { ...where, ...(event ? { event } : {}) },
    orderBy: [{ receivedAt: "desc" }, { id: "desc" }],
    skip: (page - 1) * pageSize,
    take: pageSize + 1,
    select: { id: true, event: true, requestRef: true, consentId: true, receivedAt: true },
  });
  const pageUrl = (number: number) => `?${new URLSearchParams({ query, page: String(number) })}`;
  const header = <>
    <div><h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-1 text-muted-foreground">{isNotice
        ? "View the notices accepted in DXP, with their original document sections."
        : "View consent artifacts issued by DXP. Live status is checked each time you open a consent."}</p>
    </div>
    <form className="flex flex-wrap gap-2">
      <label htmlFor="dxp-query" className="sr-only">{isNotice ? "Request reference" : "Request reference or consent ID"}</label>
      <input id="dxp-query" name="query" defaultValue={query} placeholder={isNotice ? "Search by request reference" : "Request reference or consent ID"}
        className="min-w-64 rounded-md border bg-background px-3 py-2" />
      <button type="submit" className="rounded-md bg-primary px-4 py-2 text-primary-foreground">Search</button>
    </form>
  </>;
  const footer = <nav aria-label="Document pages" className="flex items-center gap-4 text-sm">
    {page > 1 && <Link href={pageUrl(page - 1)}>Previous</Link>}
    <span>Page {page}</span>
    {documents.length > pageSize && <Link href={pageUrl(page + 1)}>Next</Link>}
  </nav>;
  return <main className="space-y-6 p-6">
    <DxpDocumentsClient kind={kind} header={header} footer={footer} documents={documents.slice(0, pageSize).map((document) => ({
      ...document, receivedAt: document.receivedAt.toISOString(),
    }))} />
  </main>;
}
