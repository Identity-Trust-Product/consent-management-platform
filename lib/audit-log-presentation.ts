export function auditStatus(status: string) {
  const states: Record<string, { label: string; color: string; dot: string }> =
    {
      DELIVERED: {
        label: "Success",
        color: "bg-emerald-50 text-emerald-700",
        dot: "bg-emerald-600",
      },
      FAILED: {
        label: "Failed",
        color: "bg-red-50 text-red-700",
        dot: "bg-red-500",
      },
      TIMEOUT: {
        label: "Timeout",
        color: "bg-orange-50 text-orange-700",
        dot: "bg-orange-500",
      },
      PENDING: {
        label: "Pending",
        color: "bg-blue-50 text-blue-700",
        dot: "bg-blue-500",
      },
    };
  return (
    states[status] ?? {
      label: status || "Unknown",
      color: "bg-slate-100 text-slate-700",
      dot: "bg-slate-400",
    }
  );
}
export function eventLabel(event: string) {
  return event
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
export function formatInIst(date: Date | string) {
  return (
    new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(new Date(date)) + " IST"
  );
}
function read(value: unknown, path: string[]): unknown {
  for (const key of path) {
    if (!value || typeof value !== "object" || Array.isArray(value))
      return undefined;
    value = (value as Record<string, unknown>)[key];
  }
  return value;
}
export function getAuditContext(payload: unknown) {
  const first = (...paths: string[][]): string | undefined => {
    for (const path of paths) {
      const value = read(payload, path);
      if (
        (typeof value === "string" && value.trim()) ||
        typeof value === "number" ||
        typeof value === "boolean"
      )
        return String(value);
    }
  };
  return {
    // Data principal IDs identify subjects, not the actor who performed an action.
    actor: first(
      ["actor", "email"],
      ["actor", "name"],
      ["actorEmail"],
      ["actor"],
      ["metadata", "actorEmail"],
    ),
    role: first(["actor", "role"], ["role"], ["metadata", "role"]),
    entity: first(
      ["entity", "name"],
      ["entity", "id"],
      ["entityId"],
      ["consentId"],
      ["noticeId"],
    ),
    method: first(["method"], ["httpMethod"], ["request", "method"]),
    application: first(
      ["applicationId"],
      ["clientId"],
      ["metadata", "applicationId"],
    ),
    ip: first(["ipAddress"], ["ip_address"], ["metadata", "ipAddress"]),
    decision: first(["decision"], ["metadata", "decision"]),
    metadata: read(payload, ["metadata"]),
  };
}
