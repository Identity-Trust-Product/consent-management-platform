import React from "react";
import type { DxpNotice } from "@/lib/dxp-notice";

const references: Record<string, string[]> = {
  "dataset and purpose": ["s.4", "s.6(1)"],
  "scope of the data": ["s.6(1)"],
  "data items to be shared": ["s.5", "s.6(1)"],
  "conditions of processing": ["s.8(5)", "s.8(7)", "s.16"],
  "revocation and grievances": ["s.6(6)", "s.8(10)"],
  "processing by the platform": ["s.8(1)"],
};

function References({ values }: { values: string[] }) {
  return <span className="ml-2 inline-flex flex-wrap gap-1 align-middle">{values.map((value) => <span key={value} className="rounded bg-blue-50 px-1.5 py-0.5 text-xs font-semibold text-blue-600">{value}</span>)}</span>;
}

export function DxpNoticeView({ notice }: { notice: DxpNotice }) {
  return <article className="space-y-5 text-[15px] leading-7 text-slate-800">
    <header className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-blue-800">
      <h3 className="font-bold">{notice.title}</h3>
      {(notice.version || notice.issuer) && <p className="text-sm">{[
        notice.version ? `Notice version ${notice.version}` : "",
        notice.issuer ? `issued via ${notice.issuer}` : "",
      ].filter(Boolean).join(" · ")}</p>}
      <References values={["s.5"]} />
    </header>

    {notice.summary && <div className="rounded-xl border border-slate-200 border-l-4 border-l-blue-600 bg-slate-50 px-5 py-3 whitespace-pre-wrap break-words"><strong>In short: </strong>{notice.summary}</div>}

    <div className="grid gap-5 md:grid-cols-2">
      <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="mb-3 font-bold">Data Fiduciary</h3>
        <p className="whitespace-pre-wrap break-words">{notice.fiduciaryName || "Not supplied"}</p>
        {notice.fiduciaryContact && <p className="text-sm text-slate-500">Data protection and grievance contact: {notice.fiduciaryContact}</p>}
      </section>
      <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="mb-3 font-bold">Data recipient</h3>
        <p className="whitespace-pre-wrap break-words">{notice.recipientName || "Not supplied"}</p>
        {notice.recipientEmail && <p className="text-sm text-slate-500">{notice.recipientEmail}</p>}
      </section>
    </div>

    {notice.sections.map((section, index) => <section key={index} className="space-y-3">
      <h3 className="font-bold">{section.heading}<References values={references[section.heading.toLowerCase()] ?? []} /></h3>
      {section.rows && <dl className="space-y-3">{section.rows.map((row, index) => <div key={index} className="grid gap-1 sm:grid-cols-[200px_1fr] sm:gap-6">
        <dt className="font-medium text-slate-500">{row.label}</dt>
        <dd className={`min-w-0 whitespace-pre-wrap break-words ${row.label.toLowerCase() === "purpose profile" ? "font-semibold" : ""}`}>{row.value == null ? "" : String(row.value)}</dd>
      </div>)}</dl>}
      {section.items && <ul className="list-disc space-y-1 pl-6">{section.items.map((item, index) => <li key={index} className="whitespace-pre-wrap break-words">{item}</li>)}</ul>}
      {section.table && <div className="overflow-x-auto"><table className="w-full text-left text-sm">
        <thead className="border-y bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr>{section.table.columns.map((column, index) => <th key={index} scope="col" className="px-4 py-4 font-semibold">{column}</th>)}</tr></thead>
        <tbody>{section.table.rows.map((row, index) => <tr key={index} className="border-b">{section.table!.columns.map((column, columnIndex) => {
          const value = Array.isArray(row) ? row[columnIndex] : row[column];
          const content = value == null ? "" : String(value);
          const isPersonalData = /personal data/i.test(column);
          return <td key={columnIndex} className="min-w-32 whitespace-pre-wrap px-4 py-4 align-top">{isPersonalData ? <span className={`inline-block whitespace-nowrap rounded-lg px-2.5 py-0.5 text-xs ${/^not personal|^non.personal/i.test(content) ? "bg-slate-100 text-slate-500" : "bg-amber-50 text-amber-700"}`}>{content}</span> : content}</td>;
        })}</tr>)}</tbody>
      </table></div>}
    </section>)}

    {(notice.acceptedAt || notice.noticeHash) && <footer className="border-t pt-4 text-sm text-slate-500">
      <p className="break-all">{notice.acceptedAt ? `Accepted ${notice.acceptedAt} IST` : ""}{notice.acceptedAt && notice.noticeHash ? " · " : ""}{notice.noticeHash ? `SHA-256 ${notice.noticeHash}` : ""}</p>
    </footer>}
  </article>;
}
