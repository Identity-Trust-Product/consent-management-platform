"use client";
import { Button } from "@/components/ui/button";
export default function DashboardError({ reset }: { reset: () => void }) {
  return (
    <div role="alert" className="m-8 rounded-2xl border bg-white p-8">
      <h2 className="text-xl font-semibold">Dashboard data is unavailable</h2>
      <p className="my-3 text-muted-foreground">
        We could not load the latest records. Try refreshing the dashboard.
      </p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
