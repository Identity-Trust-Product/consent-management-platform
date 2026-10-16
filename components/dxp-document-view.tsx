import React from "react";
import type { DxpDisplay } from "@/lib/dxp-display";
import type { DxpStatusResult } from "@/lib/services/dxp-status-service";

export function DxpStatusBadge({ status }: { status: DxpStatusResult | "checking" }) {
  const label = status === "checking" ? "Checking status…"
    : status.checked === true
      ? `${status.value.display_status}${status.value.reason !== null ? `: ${status.value.reason}` : ""}`
      : "Status could not be checked";
  return <span role="status" className="inline-flex max-w-full whitespace-pre-wrap break-words rounded-full border bg-muted px-3 py-1 text-sm font-medium">{label}</span>;
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
