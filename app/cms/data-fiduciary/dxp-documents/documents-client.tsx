"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DxpDocumentDisplay, DxpStatusBadge } from "@/components/dxp-document-view";
import { viewDxpDocument } from "./actions";

type DocumentRow = { id: string; event: string; requestRef: string; consentId: string | null; receivedAt: string };
type ViewedDocument = Awaited<ReturnType<typeof viewDxpDocument>>;

export function DxpDocumentsClient({ documents }: { documents: DocumentRow[] }) {
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

  return <>
    <div className="overflow-x-auto rounded-xl border bg-background">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted"><tr>
          {["Request reference", "Document", "Consent ID", "Received (UTC)", "Action"].map((heading) => (
            <th key={heading} scope="col" className="p-4">{heading}</th>
          ))}
        </tr></thead>
        <tbody>{documents.map((document) => <tr key={document.id} className="border-t">
          <td className="p-4">{document.requestRef}</td>
          <td className="p-4">{document.event === "consent.issued" ? "Consent" : "Accepted notice"}</td>
          <td className="break-all p-4">{document.consentId || "—"}</td>
          <td className="p-4">{document.receivedAt.replace("T", " ").replace("Z", "")}</td>
          <td className="p-4"><Button variant="outline" onClick={() => view(document)}>
            {document.event === "consent.issued" ? "View consent" : "View notice"}
          </Button></td>
        </tr>)}</tbody>
      </table>
      {documents.length === 0 && <p className="p-8 text-center text-muted-foreground">No DXP documents found.</p>}
    </div>
    <Dialog open={selected !== null} onOpenChange={(open) => {
      if (!open) { requestVersion.current++; setSelected(null); setViewed(null); }
    }}>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>{selected?.event === "consent.issued" ? "Stored consent" : "Accepted notice"}</DialogTitle>
          <DialogDescription>{selected?.requestRef}</DialogDescription>
        </DialogHeader>
        {selected?.event === "consent.issued" && <DxpStatusBadge status={
          error ? { checked: false } : viewed ? (viewed.status ?? { checked: false }) : "checking"
        } />}
        {error ? <p role="alert">The stored document could not be loaded. Please try again.</p>
          : viewed ? <DxpDocumentDisplay display={viewed.display} />
            : <p className="text-muted-foreground">Loading stored document…</p>}
      </DialogContent>
    </Dialog>
  </>;
}
