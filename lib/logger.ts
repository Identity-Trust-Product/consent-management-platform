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

/**
 * Application Logger
 * Centralized logging utility to replace direct console calls.
 * Allows for future integration with logging services (e.g., Datadog, Sentry).
 */

type LogLevel = "info" | "warn" | "error" | "debug";

interface LogEntry {
  level: LogLevel;
  message: string;
  context?: Record<string, any>;
  timestamp: string;
}

class Logger {
  private log(level: LogLevel, message: string, context?: Record<string, any>) {
    const entry: LogEntry = {
      level,
      message,
      context,
      timestamp: new Date().toISOString(),
    };

    // In development, print pretty logs
    if (process.env.NODE_ENV === "development") {
      const color =
        level === "error"
          ? "\x1b[31m" // Red
          : level === "warn"
            ? "\x1b[33m" // Yellow
            : level === "info"
              ? "\x1b[36m" // Cyan
              : "\x1b[90m"; // Gray

      console.log(
        `${color}[${level.toUpperCase()}]\x1b[0m ${message}`,
        context ? context : ""
      );
    } else {
      // In production, print JSON for log aggregators
      console.log(JSON.stringify(entry));
    }
  }

  info(message: string, context?: Record<string, any>) {
    this.log("info", message, context);
  }

  warn(message: string, context?: Record<string, any>) {
    this.log("warn", message, context);
  }

  error(message: string, error?: unknown, context?: Record<string, any>) {
    const errorContext =
      error instanceof Error
        ? { name: error.name, message: error.message, stack: error.stack }
        : { error };

    this.log("error", message, { ...context, ...errorContext });
  }

  debug(message: string, context?: Record<string, any>) {
    this.log("debug", message, context);
  }
}

export const logger = new Logger();
