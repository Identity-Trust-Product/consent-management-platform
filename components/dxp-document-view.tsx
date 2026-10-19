import React from "react";
import type { DxpDisplay } from "@/lib/dxp-display";
import type { DxpStatusResult } from "@/lib/services/dxp-status-service";

export function DxpStatusBadge({ status }: { status: DxpStatusResult | "checking" }) {
  const label = status === "checking" ? "Checking status…"
    : status.checked === true
      ? `${status.value.display_status}${status.value.reason !== null ? `: ${status.value.reason}` : ""}`
      : "Status could not be checked";
  const liveCode = status !== "checking" && status.checked === true ? status.value.status.toUpperCase() : "";
  const color = liveCode === "ACTIVE" ? "border-emerald-200 bg-emerald-50 text-emerald-700"
    : ["REVOKED", "EXPIRED"].includes(liveCode) ? "border-red-200 bg-red-50 text-red-700"
      : liveCode === "SUSPENDED" ? "border-amber-200 bg-amber-50 text-amber-800"
        : "border-slate-200 bg-slate-100 text-slate-600";
  return <span role="status" className={`inline-flex max-w-full items-center gap-2 whitespace-pre-wrap break-words rounded-full border px-3 py-1 text-sm font-semibold ${color}`}>
    <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-current" />{label}
  </span>;
}

export function DxpDocumentDisplay({ display }: { display: DxpDisplay | null }) {
  if (!display) return <p role="alert">The stored document’s display format could not be read.</p>;
  return (
    <article className="space-y-6">
      <header>
        <h2 className="whitespace-pre-wrap break-words text-xl font-semibold">{display.title}</h2>
        <p className="whitespace-pre-wrap break-words text-muted-foreground">{display.subtitle}</p>
      </header>
      {display.sections.map((section, index) => (
        <section key={index} className="space-y-3">
          <h3 className="whitespace-pre-wrap break-words font-semibold">{section.heading}</h3>
          {section.rows && (
            <dl className="space-y-2">
              {section.rows.map((row, index) => (
                <div key={index} className="grid gap-1 border-b pb-2 sm:grid-cols-2">
                  <dt className="whitespace-pre-wrap break-words text-muted-foreground">{row.label}</dt>
                  <dd className="whitespace-pre-wrap break-words">{row.value === null ? "" : String(row.value)}</dd>
                </div>
              ))}
            </dl>
          )}
          {section.table && (
            <div className="overflow-x-auto rounded border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted"><tr>{section.table.columns.map((column, index) => (
                  <th key={index} scope="col" className="whitespace-pre-wrap p-3">{column}</th>
                ))}</tr></thead>
                <tbody>{section.table.rows.map((row, index) => (
                  <tr key={index} className="border-t">{section.table!.columns.map((column, columnIndex) => {
                    const value = Array.isArray(row) ? row[columnIndex] : row[column];
                    return <td key={columnIndex} className="whitespace-pre-wrap break-words p-3">{value == null ? "" : String(value)}</td>;
                  })}</tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {section.items && <ul className="list-disc space-y-1 pl-5">{section.items.map((item, index) => (
            <li key={index} className="whitespace-pre-wrap break-words">{item}</li>
          ))}</ul>}
        </section>
      ))}
    </article>
  );
}
