"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DxpDocumentDisplay, DxpStatusBadge } from "@/components/dxp-document-view";
import { formatArtifactDate, type ArtifactTerm, type DxpConsentArtifact } from "@/lib/dxp-consent-artifact";
import type { DxpStatusResult } from "@/lib/services/dxp-status-service";

const card = "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm";

function Terms({ terms }: { terms: ArtifactTerm[] }) {
  return <dl className="space-y-4">{terms.map((term, index) => (
    <div key={index} className="grid gap-1 sm:grid-cols-[minmax(150px,230px)_1fr] sm:gap-6">
      <dt className="font-medium text-slate-500">{term.label}</dt>
      <dd className="min-w-0 whitespace-pre-wrap break-words text-slate-800">
        <span className={term.label === "Purpose profile" ? "font-semibold" : ""}>{term.value}</span>
        {term.detail && <p className="mt-1 whitespace-pre-wrap break-words text-sm leading-6 text-slate-500">{term.detail}</p>}
      </dd>
    </div>
  ))}</dl>;
}

export function DxpConsentArtifactView({ artifact, status, onBack }: {
  artifact: DxpConsentArtifact;
  status: DxpStatusResult;
  onBack: () => void;
}) {
  const live = status.checked === true ? status.value : null;
  const validUntil = live?.valid_until || artifact.validUntil;

  function downloadArtifact() {
    const url = URL.createObjectURL(new Blob([artifact.rawDocument], { type: "application/json;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `consent-artifact-${artifact.consentId.replace(/[^a-zA-Z0-9_-]/g, "_")}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return <div className="space-y-6 text-slate-800">
    <header className="flex flex-wrap items-start justify-between gap-5">
      <div className="min-w-0">
        <button type="button" onClick={onBack} className="mb-2 text-sm text-primary hover:underline">← Consents</button>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-3xl font-bold tracking-tight">{artifact.title}</h2>
          <DxpStatusBadge status={status} />
        </div>
        <p className="mt-2 break-all text-sm font-medium text-slate-500">{artifact.consentId}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" asChild><Link href={`/cms/data-fiduciary/dxp-notices?${new URLSearchParams({ query: artifact.requestRef })}`}>Request {artifact.requestRef}</Link></Button>
        <Button variant="outline" onClick={downloadArtifact}>Download artefact</Button>
      </div>
    </header>

    <div className="rounded-xl border border-sky-200 bg-sky-50 px-5 py-4 text-sky-800">
      Ed25519 signed artefact. The original signature and public key are retained below; signature verification has not been performed by CMS.
    </div>

    <div className="grid gap-5 md:grid-cols-3">
      {[
        { label: "Valid from", value: formatArtifactDate(artifact.validFrom), detail: "IST" },
        { label: "Valid until", value: formatArtifactDate(validUntil), detail: "IST" },
        { label: "Data items", value: String(artifact.dataItems.length), detail: "" },
      ].map((stat) => <section key={stat.label} className={card}>
        <h3 className="text-sm font-medium text-slate-500">{stat.label}</h3>
        <p className="mt-3 break-words text-3xl font-bold leading-snug">{stat.value}</p>
        {stat.detail && <p className="mt-2 text-sm text-slate-500">{stat.detail}</p>}
      </section>)}
    </div>

    <section className={card}>
      <h3 className="mb-6 text-xl font-bold">Consent terms</h3>
      <Terms terms={artifact.terms} />
    </section>

    <section className={card}>
      <h3 className="mb-4 text-xl font-bold">Scope</h3>
      <ul className="list-disc space-y-2 pl-5">{artifact.scopeItems.map((item, index) => <li key={index} className="whitespace-pre-wrap break-words">{item}</li>)}</ul>
    </section>

    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <h3 className="p-6 text-xl font-bold">Consented data items</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-y bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr>
            {["Field", "Personal data", "Delivered as", "Treatment", "Why"].map((label) => <th key={label} scope="col" className="px-6 py-4 font-semibold">{label}</th>)}
          </tr></thead>
          <tbody>{artifact.dataItems.map((item, index) => <tr key={index} className={`border-b last:border-0 ${item.excluded ? "text-slate-500" : ""}`}>
            <td className="min-w-44 px-6 py-4"><p className="font-semibold">{item.label}</p><p className="mt-1 break-all text-slate-500">{item.field}</p></td>
            <td className="px-6 py-4"><span className={`inline-block whitespace-nowrap rounded-lg px-2.5 py-1 text-xs ${item.personalData.startsWith("Personal data") ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-500"}`}>{item.personalData}</span></td>
            <td className="break-words px-6 py-4">{item.deliveredAs}</td>
            <td className="px-6 py-4"><span className={`inline-block whitespace-nowrap rounded-lg px-2.5 py-1 text-xs ${item.excluded ? "bg-red-50 text-red-600" : item.treatment === "As-is" ? "bg-slate-100 text-slate-500" : "bg-violet-50 text-violet-600"}`}>{item.treatment}</span></td>
            <td className="min-w-64 whitespace-pre-wrap px-6 py-4 leading-6">{item.why || "—"}</td>
          </tr>)}</tbody>
        </table>
      </div>
      {artifact.dataItems.length === 0 && <p className="px-6 pb-6 text-slate-500">No data items were supplied in the artifact.</p>}
    </section>

    <section className={card}>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3"><h3 className="text-xl font-bold">Recipient obligations</h3><DxpStatusBadge status={status} /></div>
      <Terms terms={artifact.obligations} />
      {artifact.obligations.length === 0 && <p className="text-slate-500">Recipient obligations were not supplied in the artifact.</p>}
    </section>

    {artifact.parameters.length > 0 && <section className={card}><h3 className="mb-6 text-xl font-bold">Parameters</h3><Terms terms={artifact.parameters} /></section>}
    {artifact.extraDisplay && <section className={card}><DxpDocumentDisplay display={artifact.extraDisplay} /></section>}

    <section className={card}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2"><h3 className="text-xl font-bold">Signed artefact</h3><span className="text-sm text-slate-500">Ed25519</span></div>
      <pre className="max-h-[32rem] overflow-auto rounded-xl bg-slate-900 p-5 text-sm leading-6 text-slate-200"><code>{artifact.signedArtifactJson}</code></pre>
      <p className="mt-4 break-all text-sm text-slate-500"><span className="font-semibold">Signature: </span>{artifact.signature || "Not supplied"}</p>
      <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-slate-600">Public key</summary><pre className="mt-3 overflow-x-auto rounded-lg bg-slate-50 p-4 text-sm">{artifact.publicKeyPem || "Not supplied"}</pre></details>
    </section>
  </div>;
}
