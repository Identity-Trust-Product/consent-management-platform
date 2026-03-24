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

import { useInfiniteQuery } from "@tanstack/react-query";
import {
  getGrievanceMessages,
  getPrincipalGrievanceMessages,
} from "@/actions/grievances";

interface UseInfiniteMessagesOptions {
  grievanceId: number;
  token?: string; // For principal view
  isPrincipal?: boolean;
  enabled?: boolean;
}

export function useInfiniteMessages({
  grievanceId,
  token,
  isPrincipal = false,
  enabled = true,
}: UseInfiniteMessagesOptions) {
  return useInfiniteQuery({
    queryKey: isPrincipal
      ? ["principal-messages", grievanceId, token]
      : ["agent-messages", grievanceId],
    queryFn: async ({ pageParam }) => {
      if (isPrincipal && token) {
        const result = await getPrincipalGrievanceMessages(
          token,
          grievanceId,
          pageParam as number | undefined,
          10
        );
        if (!result.success) {
          throw new Error(result.error);
        }
        return result.data!;
      } else {
        const result = await getGrievanceMessages(
          grievanceId,
          pageParam as number | undefined,
          20
        );
        if (!result.success) {
          throw new Error(result.error);
        }
        return result.data!;
      }
    },
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (lastPage) => {
      return lastPage.hasMore ? lastPage.nextCursor : undefined;
    },
    enabled,
    refetchInterval: 5000, // Refetch every 5 seconds for real-time updates
    staleTime: 0, // Always consider data stale for chat
  });
}
