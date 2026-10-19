"use client";

import { useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DxpDocumentDisplay, DxpStatusBadge } from "@/components/dxp-document-view";
import { DxpConsentArtifactView } from "@/components/dxp-consent-artifact-view";
import { DxpNoticeView } from "@/components/dxp-notice-view";
import { viewDxpDocument } from "./actions";

type DocumentRow = { id: string; event: string; requestRef: string; consentId: string | null; receivedAt: string };
type ViewedDocument = Awaited<ReturnType<typeof viewDxpDocument>>;

export function DxpDocumentsClient({ documents, kind = "all", header, footer }: {
  documents: DocumentRow[];
  kind?: "notices" | "consents" | "all";
  header?: ReactNode;
  footer?: ReactNode;
}) {
  const showConsentId = kind !== "notices";
  const [selected, setSelected] = useState<DocumentRow | null>(null);
  const [viewed, setViewed] = useState<ViewedDocument | null>(null);
  const [error, setError] = useState(false);
  const requestVersion = useRef(0);

  async function view(document: DocumentRow) {
    const version = ++requestVersion.current;
    // Clear previous data/status before every view, including repeat clicks.
    setSelected(document);
    setViewed(null);
    setError(false);
    try {
      const result = await viewDxpDocument(document.id);
      if (version === requestVersion.current) setViewed(result);
    } catch {
      if (version === requestVersion.current) setError(true);
    }
  }

  if (selected?.event === "consent.issued") {
    const back = () => { requestVersion.current++; setSelected(null); setViewed(null); setError(false); };
    if (viewed?.artifact) return <DxpConsentArtifactView artifact={viewed.artifact} status={viewed.status ?? { checked: false }} onBack={back} />;
    return <section className="space-y-5 rounded-2xl border bg-white p-6">
      <Button variant="outline" onClick={back}>← Consents</Button>
      <div className="flex flex-wrap items-center gap-3"><h2 className="text-3xl font-bold">Consent artefact</h2><DxpStatusBadge status={error || viewed ? { checked: false } : "checking"} /></div>
      <p className="break-all text-sm text-muted-foreground">{selected.consentId}</p>
      {error ? <p role="alert">The stored document could not be loaded. Please try again.</p>
        : viewed ? <DxpDocumentDisplay display={viewed.display} /> : <p>Loading stored artifact and checking live status…</p>}
    </section>;
  }

  return <>
    {header}
    <div className="overflow-x-auto rounded-xl border bg-background">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted"><tr>
          {["Request reference", "Document", ...(showConsentId ? ["Consent ID"] : []), "Received (UTC)", "Action"].map((heading) => (
            <th key={heading} scope="col" className="p-4">{heading}</th>
          ))}
        </tr></thead>
        <tbody>{documents.map((document) => <tr key={document.id} className="border-t">
          <td className="p-4">{document.requestRef}</td>
          <td className="p-4">{document.event === "consent.issued" ? "Consent artifact" : "Accepted notice"}</td>
          {showConsentId && <td className="break-all p-4">{document.consentId || "—"}</td>}
          <td className="p-4">{document.receivedAt.replace("T", " ").replace("Z", "")}</td>
          <td className="p-4"><Button variant="outline" onClick={() => view(document)}>
            {document.event === "consent.issued" ? "View consent" : "View notice"}
          </Button></td>
        </tr>)}</tbody>
      </table>
      {documents.length === 0 && <p className="p-8 text-center text-muted-foreground">{kind === "notices"
        ? "No DXP notices found. Accepted notices appear here after DXP delivers them to CMS."
        : kind === "consents" ? "No DXP consent artifacts found. Issued consent artifacts appear here after DXP delivers them to CMS."
          : "No DXP documents found."}</p>}
    </div>
    {footer}
    <Dialog open={selected !== null} onOpenChange={(open) => {
      if (!open) { requestVersion.current++; setSelected(null); setViewed(null); }
    }}>
      <DialogContent className="h-[85vh] grid-rows-[auto_minmax(0,1fr)] gap-0 overflow-hidden p-0 sm:max-w-6xl">
        <DialogHeader className="border-b px-5 py-4 pr-14">
          <DialogTitle className="text-xl">Notice accepted for {selected?.requestRef}</DialogTitle>
          <DialogDescription className="sr-only">The notice accepted in DXP for {selected?.requestRef}</DialogDescription>
        </DialogHeader>
        <div className="min-h-0 overflow-y-auto p-5">
          {error ? <p role="alert">The stored document could not be loaded. Please try again.</p>
            : viewed?.notice ? <DxpNoticeView notice={viewed.notice} />
              : viewed ? <DxpDocumentDisplay display={viewed.display} />
                : <p className="text-muted-foreground">Loading stored document…</p>}
        </div>
      </DialogContent>
    </Dialog>
  </>;
}
