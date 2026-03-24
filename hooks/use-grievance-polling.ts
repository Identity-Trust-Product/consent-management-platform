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

import { useCallback, useEffect, useRef } from "react";

interface PollingOptions {
  enabled?: boolean;
  interval?: number; // milliseconds
  onUpdate?: () => void;
}

/**
 * Smart polling hook for grievance updates
 * - Polls only when tab is visible
 * - Automatically stops when disabled
 * - Exponential backoff on errors
 */
export function useGrievancePolling(
  pollFn: () => Promise<void>,
  options: PollingOptions = {}
) {
  const {
    enabled = true,
    interval = 5000, // 5 seconds default
    onUpdate,
  } = options;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPollingRef = useRef(false);
  const errorCountRef = useRef(0);

  const poll = useCallback(async () => {
    if (isPollingRef.current) return; // Prevent concurrent polls

    isPollingRef.current = true;
    try {
      await pollFn();
      errorCountRef.current = 0; // Reset error count on success
      onUpdate?.();
    } catch (error) {
      console.error("Polling error:", error);
      errorCountRef.current++;

      // Exponential backoff on errors (max 60 seconds)
      const backoffInterval = Math.min(
        interval * Math.pow(2, errorCountRef.current),
        60000
      );

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(poll, backoffInterval);
      }
    } finally {
      isPollingRef.current = false;
    }
  }, [pollFn, interval, onUpdate]);

  useEffect(() => {
    if (!enabled) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Start polling
    intervalRef.current = setInterval(poll, interval);

    // Visibility change detection - pause when tab is hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      } else {
        // Resume polling when tab becomes visible
        poll(); // Immediate poll on visibility
        if (!intervalRef.current) {
          intervalRef.current = setInterval(poll, interval);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initial poll
    poll();

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [enabled, interval, poll]);

  // Return manual trigger function
  return { poll };
}
