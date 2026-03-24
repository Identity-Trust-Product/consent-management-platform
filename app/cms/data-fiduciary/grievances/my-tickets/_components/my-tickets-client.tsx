"use client";
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */

import { getMyAssignedGrievances } from "@/actions/grievances";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useGrievancePolling } from "@/hooks/use-grievance-polling";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { Session } from "next-auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import TicketDetailView from "./ticket-detail-view";
import { StatusBadge } from "@/app/cms/data-fiduciary/grievances/_components/status-badge";
import { Badge } from "@/components/ui/badge";
import { checkSlaStatus, getSlaStatusColor } from "@/lib/utils/sla";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { GRIEVANCE_STATUS_LABELS } from "@/lib/constants/grievances";
import { GrievanceStatus } from "@prisma/client";

type Ticket = Awaited<
  ReturnType<typeof import("@/actions/grievances").getMyAssignedGrievances>
>["data"][number];

interface MyTicketsClientProps {
  tickets: Ticket[];
  session: Session;
}

export default function MyTicketsClient({
  tickets: initialTickets,
  session,
}: MyTicketsClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ticketIdParam = searchParams.get("id");

  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [selectedTicketId, setSelectedTicketId] = useState<number | null>(
    ticketIdParam ? parseInt(ticketIdParam) : initialTickets[0]?.id || null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const selectedTicket = tickets.find((t) => t.id === selectedTicketId);

  // Filter tickets based on search and status
  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      searchQuery === "" ||
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.publicId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ticket.metadata as any)?.name
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      (ticket.metadata as any)?.email
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || ticket.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  useEffect(() => {
    if (ticketIdParam) {
      const id = parseInt(ticketIdParam);
      if (!isNaN(id)) {
        setSelectedTicketId(id);
      }
    }
  }, [ticketIdParam]);

  // Poll for ticket list updates every 10 seconds
  const fetchTickets = useCallback(async () => {
    const result = await getMyAssignedGrievances();
    if (result.success && result.data) {
      setTickets(result.data);
    }
  }, []);

  useGrievancePolling(fetchTickets, {
    enabled: true,
    interval: 10000, // Poll every 10 seconds for list view
  });

  useEffect(() => {
    if (ticketIdParam) {
      const id = parseInt(ticketIdParam);
      if (!isNaN(id)) {
        setSelectedTicketId(id);
      }
    }
  }, [ticketIdParam]);

  const handleTicketSelect = (ticketId: number) => {
    setSelectedTicketId(ticketId);
    router.push(`/cms/data-fiduciary/grievances/my-tickets?id=${ticketId}`, {
      scroll: false,
    });
  };

  if (tickets.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-2">No Tickets Assigned</h2>
          <p className="text-muted-foreground">
            You don&apos;t have any tickets assigned to you at the moment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-[calc(100vh-4rem)]"
    >
      {/* Left Sidebar - Ticket List */}
      <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
        <div className="h-full border-r bg-muted/30 flex flex-col">
          <div className="p-4 border-b bg-background space-y-3">
            <div>
              <h2 className="text-lg font-semibold">My Tickets</h2>
              <p className="text-sm text-muted-foreground">
                {filteredTickets.length} of {tickets.length}
              </p>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search tickets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Status Filter */}
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                {Object.values(GrievanceStatus).map((status) => (
                  <SelectItem key={status} value={status}>
                    {GRIEVANCE_STATUS_LABELS[status]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div>
              {filteredTickets.map((ticket) => {
                const metadata =
                  typeof ticket.metadata === "object" &&
                    ticket.metadata !== null
                    ? (ticket.metadata as Record<string, any>)
                    : {};
                const lastMessage = ticket.messages[0];
                const lastMessageTime = lastMessage?.createdAt;
                const isActive = ticket.id === selectedTicketId;

                // Check SLA status
                const slaStatusInfo = ticket.slaTracker
                  ? checkSlaStatus(
                    ticket.slaTracker.startedAt,
                    ticket.slaTracker.expectedResolutionAt,
                    ticket.slaTracker.resolvedAt,
                    ticket.slaTracker.isBreached
                  )
                  : null;
                const slaColor = slaStatusInfo ? getSlaStatusColor(slaStatusInfo.status) : null;

                return (
                  <button
                    key={ticket.id}
                    onClick={() => handleTicketSelect(ticket.id)}
                    className={cn(
                      "w-full text-left p-3 transition-colors",
                      "hover:bg-accent",
                      isActive && "bg-blue-50 border-l-4 border-primary"
                    )}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <span className="font-medium text-sm truncate">
                          {ticket.subject}
                        </span>
                        {ticket.hasUnread && (
                          <div className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-xs text-muted-foreground flex-1">
                        {metadata.name || "Data Principal"}
                      </p>
                      <div className="scale-75 origin-right">
                        <StatusBadge status={ticket.status} />
                      </div>
                    </div>
                    {lastMessage ? (
                      <p className="text-xs text-muted-foreground line-clamp-1 mb-2">
                        {lastMessage.message}
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground italic mb-2">
                        No messages yet
                      </p>
                    )}
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground font-mono">
                        #{ticket.publicId.slice(0, 8).toUpperCase()}
                      </span>
                      <div className="flex items-center gap-2">
                        {slaStatusInfo && slaColor && (
                          <Badge
                            variant="outline"
                            className={`text-[10px] px-1.5 py-0.5 ${slaColor}`}
                          >
                            {slaStatusInfo.status.toUpperCase()}
                          </Badge>
                        )}
                        {lastMessageTime && (
                          <span className="text-muted-foreground">
                            {formatDistanceToNow(new Date(lastMessageTime), {
                              addSuffix: true,
                            })}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            {filteredTickets.length === 0 && (
              <div className="p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  No tickets match your filters
                </p>
              </div>
            )}
          </div>
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      {/* Main Content Area */}
      <ResizablePanel defaultSize={75} minSize={60}>
        <div className="h-full flex flex-col overflow-hidden">
          {selectedTicket ? (
            <TicketDetailView ticket={selectedTicket} session={session} />
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-muted-foreground">
                Select a ticket to view details
              </p>
            </div>
          )}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
