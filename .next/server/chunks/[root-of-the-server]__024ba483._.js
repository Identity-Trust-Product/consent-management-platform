module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/lib/services/email/adapters/postmark-adapter.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "PostmarkAdapter",
    ()=>PostmarkAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postmark$2f$dist$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postmark/dist/index.js [instrumentation] (ecmascript)");
;
class PostmarkAdapter {
    client;
    constructor(apiKey){
        if (!apiKey) {
            throw new Error("Postmark API key is required");
        }
        this.client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postmark$2f$dist$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ServerClient"](apiKey);
    }
    async send(options) {
        try {
            // Postmark only supports single recipient per call for transactional emails
            const recipients = Array.isArray(options.to) ? options.to : [
                options.to
            ];
            if (recipients.length === 0) {
                return {
                    success: false,
                    error: "No recipients specified"
                };
            }
            // If multiple recipients, send individually
            if (recipients.length > 1) {
                const results = await this.sendBulk(recipients.map((to)=>({
                        ...options,
                        to
                    })));
                const failed = results.filter((r)=>!r.success);
                if (failed.length > 0) {
                    return {
                        success: false,
                        error: `Failed to send to ${failed.length} recipients`
                    };
                }
                return {
                    success: true,
                    messageId: results[0].messageId
                };
            }
            const recipient = recipients[0];
            const from = options.from || {
                email: process.env.EMAIL_FROM_ADDRESS || "noreply@localhost",
                name: process.env.EMAIL_FROM_NAME
            };
            const message = {
                From: from.name ? `${from.name} <${from.email}>` : from.email,
                To: recipient.name ? `${recipient.name} <${recipient.email}>` : recipient.email,
                Subject: options.subject,
                HtmlBody: options.html,
                TextBody: options.text,
                ReplyTo: options.replyTo?.email,
                Cc: options.cc?.map((addr)=>addr.name ? `${addr.name} <${addr.email}>` : addr.email).join(","),
                Bcc: options.bcc?.map((addr)=>addr.name ? `${addr.name} <${addr.email}>` : addr.email).join(","),
                Attachments: options.attachments?.map((att)=>({
                        Name: att.filename,
                        Content: typeof att.content === "string" ? att.content : att.content.toString("base64"),
                        ContentType: att.contentType || "application/octet-stream",
                        ContentID: null
                    })),
                Tag: options.tags ? Object.keys(options.tags)[0] : undefined,
                Metadata: options.tags
            };
            const response = await this.client.sendEmail(message);
            return {
                success: true,
                messageId: response.MessageID
            };
        } catch (error) {
            console.error("[PostmarkAdapter] Send error:", error);
            return {
                success: false,
                error: error.message || "Failed to send email via Postmark"
            };
        }
    }
    async sendBulk(emails) {
        // Postmark has a batch API but for simplicity we'll send individually
        // In production, consider using client.sendEmailBatch() for better performance
        return Promise.all(emails.map((email)=>this.send(email)));
    }
}
}),
"[project]/lib/services/email/email-provider-factory.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "getEmailProvider",
    ()=>getEmailProvider
]);
/**
 * Simple in-memory/logging provider used as a default during development.
 * This allows the rest of the app to use the email facade before real
 * adapters (Resend/SES/SendGrid) are implemented.
 */ class LogEmailProvider {
    async send(options) {
        // Minimal serialization of recipients
        const recipients = Array.isArray(options.to) ? options.to.map((r)=>r.email).join(", ") : options.to.email;
        // Print a compact log so developers can see email content in logs
        // Do NOT log sensitive PII in production.
        // eslint-disable-next-line no-console
        console.info("[Email][LOG] ->", {
            to: recipients,
            subject: options.subject,
            text: options.text?.slice(0, 500),
            html: options.html ? "<html omitted>" : undefined,
            tags: options.tags
        });
        return {
            success: true,
            messageId: `log-${Date.now()}`
        };
    }
    async sendBulk(emails) {
        return Promise.all(emails.map((e)=>this.send(e)));
    }
}
function getEmailProvider() {
    const provider = (process.env.EMAIL_PROVIDER || "postmark").toLowerCase();
    if (provider === "log") {
        return new LogEmailProvider();
    }
    if (provider === "postmark") {
        const apiKey = process.env.POSTMARK_API_KEY;
        if (!apiKey) {
            throw new Error("EMAIL_PROVIDER=postmark configured but POSTMARK_API_KEY is not set. Please add POSTMARK_API_KEY to your environment variables.");
        }
        // Dynamic import to avoid loading Postmark when not needed
        const { PostmarkAdapter } = __turbopack_context__.r("[project]/lib/services/email/adapters/postmark-adapter.ts [instrumentation] (ecmascript)");
        return new PostmarkAdapter(apiKey);
    }
    if (provider === "resend") {
        // Placeholder: a Resend adapter should be implemented in
        // `lib/services/email/adapters/resend-adapter.ts` and registered here.
        throw new Error("EMAIL_PROVIDER=resend configured but Resend adapter is not implemented. Please add the adapter or change EMAIL_PROVIDER to 'log' for development.");
    }
    throw new Error(`Unsupported EMAIL_PROVIDER '${provider}'. Implement an adapter or set EMAIL_PROVIDER=log`);
}
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/prettier/plugins/html [external] (prettier/plugins/html, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("prettier/plugins/html");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/prettier/standalone [external] (prettier/standalone, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("prettier/standalone");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/lib/services/email/components/Button.tsx [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$button$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/button/dist/index.mjs [instrumentation] (ecmascript)");
;
;
function Button({ href, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$button$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Button"], {
        href: href,
        className: "inline-block rounded-xl bg-[#1766D6] px-10 py-4 text-center text-lg font-medium text-white no-underline",
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/services/email/components/Button.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/services/email/components/EmailIllustration.tsx [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "EmailIllustration",
    ()=>EmailIllustration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$img$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/img/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/section/dist/index.mjs [instrumentation] (ecmascript)");
;
;
function EmailIllustration({ baseUrl }) {
    const imageUrl = `${baseUrl}/email-illustration.png`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
        className: "py-8 text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$img$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Img"], {
            src: imageUrl,
            alt: "Email Notification",
            width: "auto",
            height: "auto",
            className: "mx-auto inline-block max-w-full h-auto"
        }, void 0, false, {
            fileName: "[project]/lib/services/email/components/EmailIllustration.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/lib/services/email/components/EmailIllustration.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/services/email/components/EmailLayout.tsx [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "EmailLayout",
    ()=>EmailLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$body$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/body/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$container$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/container/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$head$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/head/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$html$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/html/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$preview$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/preview/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$tailwind$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/tailwind/dist/index.mjs [instrumentation] (ecmascript)");
;
;
function EmailLayout({ preview, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$html$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Html"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$head$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Head"], {}, void 0, false, {
                fileName: "[project]/lib/services/email/components/EmailLayout.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$preview$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Preview"], {
                children: preview
            }, void 0, false, {
                fileName: "[project]/lib/services/email/components/EmailLayout.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$tailwind$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Tailwind"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$body$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Body"], {
                    className: "font-sans",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$container$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Container"], {
                        className: "mx-auto my-8 max-w-[600px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-3xl bg-[#2a4fc2] p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl bg-white p-4",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/lib/services/email/components/EmailLayout.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/lib/services/email/components/EmailLayout.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/components/EmailLayout.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/lib/services/email/components/EmailLayout.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/services/email/components/EmailLayout.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/services/email/components/EmailLayout.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/services/email/components/StatusBanner.tsx [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "StatusBanner",
    ()=>StatusBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$img$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/img/dist/index.mjs [instrumentation] (ecmascript)");
;
;
function StatusBanner({ type, title, baseUrl }) {
    const styles = {
        success: {
            bg: "bg-[#EFFBE7]",
            text: "text-[#08461B]",
            iconPath: "/icons/check-circle.png",
            iconWidth: 24,
            iconHeight: 24
        },
        info: {
            bg: "bg-[#E8FCFB]",
            text: "text-[#003464]",
            iconPath: "/icons/refresh-cw.png",
            iconWidth: 24,
            iconHeight: 24
        },
        error: {
            bg: "bg-[#FEE2E2]",
            text: "text-[#991B1B]",
            iconPath: "/icons/alert-circle.png",
            iconWidth: 24,
            iconHeight: 24
        },
        reminder: {
            bg: "bg-[#E8FCFB]",
            text: "text-[#003464]",
            iconPath: "/icons/bell.png",
            iconWidth: 24,
            iconHeight: 24
        }
    };
    const style = styles[type];
    const iconSrc = baseUrl ? `${baseUrl}${style.iconPath}` : style.iconPath;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${style.bg} mb-6 rounded-lg px-6 py-4`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center gap-3 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$img$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Img"], {
                    src: iconSrc,
                    alt: "",
                    width: style.iconWidth,
                    height: style.iconHeight,
                    className: "my-auto"
                }, void 0, false, {
                    fileName: "[project]/lib/services/email/components/StatusBanner.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `m-0 text-[17px] font-semibold leading-snug ${style.text} ml-2`,
                    children: title
                }, void 0, false, {
                    fileName: "[project]/lib/services/email/components/StatusBanner.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/lib/services/email/components/StatusBanner.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/lib/services/email/components/StatusBanner.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/services/email/templates/consent-expiring-reminder.tsx [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "ConsentExpiringReminder",
    ()=>ConsentExpiringReminder,
    "renderEmail",
    ()=>renderEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/components/node_modules/@react-email/render/dist/node/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/section/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/text/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/Button.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailIllustration.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailLayout.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/StatusBanner.tsx [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function ConsentExpiringReminder({ consents, businessProcessName, dprmLink, principalName = "User", daysUntilExpiry = 30, organizationName = "Open Bharart Digital Consent" }) {
    const preview = "Reminder: Your consent is about to expire";
    const baseUrl = process.env.BASE_PATH || "http://localhost:3000";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailLayout"], {
        preview: preview,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailIllustration"], {
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-expiring-reminder.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["StatusBanner"], {
                type: "reminder",
                title: "Reminder",
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-expiring-reminder.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                    className: "mb-4 text-lg leading-relaxed text-[#484E56]",
                    children: [
                        "Dear ",
                        principalName,
                        ","
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/services/email/templates/consent-expiring-reminder.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-expiring-reminder.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                    className: "mb-6 text-lg leading-relaxed text-[#484E56]",
                    children: [
                        "Your consent granted to ",
                        businessProcessName,
                        " will expire in ",
                        daysUntilExpiry,
                        " day",
                        daysUntilExpiry !== 1 ? 's' : '',
                        ". To continue receiving services without interruption, please renew your consent here:"
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/services/email/templates/consent-expiring-reminder.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-expiring-reminder.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                className: "mb-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["Button"], {
                    href: dprmLink,
                    children: "Renew consent"
                }, void 0, false, {
                    fileName: "[project]/lib/services/email/templates/consent-expiring-reminder.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-expiring-reminder.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                    className: "mb-4 text-lg leading-relaxed text-[#484E56]",
                    children: "If no action is taken, your consent will be treated as expired, and associated services may be impacted."
                }, void 0, false, {
                    fileName: "[project]/lib/services/email/templates/consent-expiring-reminder.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-expiring-reminder.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "text-lg leading-relaxed text-[#484E56]",
                        children: "Regards,"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-expiring-reminder.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "text-lg leading-relaxed text-[#484E56]",
                        children: "CMS (Privy)"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-expiring-reminder.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/consent-expiring-reminder.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/services/email/templates/consent-expiring-reminder.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
async function renderEmail(variables) {
    const subject = "Reminder: Your consent is about to expire";
    const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["render"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsentExpiringReminder, {
        ...variables
    }, void 0, false, {
        fileName: "[project]/lib/services/email/templates/consent-expiring-reminder.tsx",
        lineNumber: 87,
        columnNumber: 29
    }, this));
    const consentsList = variables.consents.map((c)=>`• ${c.consentPurposeName} - Expires on: ${c.expiryDate}`).join("\n");
    const text = `
Consent Expiring Soon

Your consent for ${variables.businessProcessName} is about to expire.

Expiring Consents:
${consentsList}

To continue using our services without interruption, please renew your consent using the link below:
${variables.dprmLink}

If you have any questions or concerns, please don't hesitate to contact us.

Regards,
${variables.organizationName || "Open Bharart Digital Consent"}
  `.trim();
    return {
        subject,
        html,
        text
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/services/email/templates/consent-granted-confirmation.tsx [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "ConsentGrantedConfirmation",
    ()=>ConsentGrantedConfirmation,
    "renderEmail",
    ()=>renderEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/components/node_modules/@react-email/render/dist/node/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/section/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/text/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/Button.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailIllustration.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailLayout.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/StatusBanner.tsx [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const TRANSLATIONS = {
    en: {
        title: "Consent Submitted Successfully!",
        greeting: "Thank you for sharing your consent. Your preferences have been securely recorded.",
        instruction: "You can view or update your consent anytime using the link below:",
        buttonText: "Click to manage your Consent",
        footer: "If you have any questions or concerns, please don't hesitate to contact us.",
        regards: "Regards,"
    },
    hi: {
        title: "सहमति सफलतापूर्वक जमा की गई!",
        greeting: "अनुमति साझा करने के लिए धन्यवाद। आपकी प्राथमिकताएं सुरक्षित रूप से दर्ज कर ली गई हैं।",
        instruction: "आप नीचे दिए गए लिंक का उपयोग करके कभी भी अपनी सहमति देख या अपडेट कर सकते हैं:",
        buttonText: "अपनी सहमति प्रबंधित करने के लिए क्लिक करें",
        footer: "यदि आपके कोई प्रश्न या चिंताएं हैं, तो कृपया हमसे संपर्क करने में संकोच न करें।",
        regards: "साभार,"
    },
    ml: {
        title: "സമ്മതം വിജയകരമായി സമർപ്പിച്ചു!",
        greeting: "നിങ്ങളുടെ സമ്മതം അറിയിച്ചതിന് നന്ദി. നിങ്ങളുടെ മുൻഗണനകൾ സുരക്ഷിതമായി രേഖപ്പെടുത്തിയിട്ടുണ്ട്.",
        instruction: "താഴെ നൽകിയിരിക്കുന്ന ലിങ്ക് ഉപയോഗിച്ച് നിങ്ങൾക്ക് എപ്പോൾ വേണമെങ്കിലും നിങ്ങളുടെ സമ്മതം കാണാനോ പുതുക്കാനോ കഴിയും:",
        buttonText: "നിങ്ങളുടെ സമ്മതം നിയന്ത്രിക്കാൻ ക്ലിക്ക് ചെയ്യുക",
        footer: "നിങ്ങൾക്ക് എന്തെങ്കിലും ചോദ്യങ്ങളോ ആശങ്കകളോ ഉണ്ടെങ്കിൽ, ഞങ്ങളെ ബന്ധപ്പെടാൻ മടിക്കരുത്.",
        regards: "ആശംസകളോടെ,"
    }
};
function ConsentGrantedConfirmation({ dprmLink, organizationName = "Open Bharart Digital Consent", language = "en" }) {
    const t = TRANSLATIONS[language] || TRANSLATIONS.en;
    const preview = t.title;
    const baseUrl = process.env.BASE_PATH || "http://localhost:3000";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailLayout"], {
        preview: preview,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailIllustration"], {
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-granted-confirmation.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["StatusBanner"], {
                type: "success",
                title: t.title,
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-granted-confirmation.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-4 text-lg leading-relaxed text-[#484E56]",
                        children: t.greeting
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-granted-confirmation.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-6 text-lg leading-relaxed text-[#484E56]",
                        children: t.instruction
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-granted-confirmation.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/consent-granted-confirmation.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["Button"], {
                    href: dprmLink,
                    children: t.buttonText
                }, void 0, false, {
                    fileName: "[project]/lib/services/email/templates/consent-granted-confirmation.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-granted-confirmation.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/services/email/templates/consent-granted-confirmation.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
async function renderEmail(variables) {
    const t = TRANSLATIONS[variables.language] || TRANSLATIONS.en;
    const subject = t.title;
    const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["render"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsentGrantedConfirmation, {
        ...variables
    }, void 0, false, {
        fileName: "[project]/lib/services/email/templates/consent-granted-confirmation.tsx",
        lineNumber: 92,
        columnNumber: 29
    }, this));
    const text = `
${t.title}

${t.greeting}

${t.instruction}
${variables.dprmLink}

${t.footer}

${t.regards}
${variables.organizationName || "Open Bharart Digital Consent"}
  `.trim();
    return {
        subject,
        html,
        text
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/services/email/templates/consent-updated-successfully.tsx [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "default",
    ()=>ConsentUpdatedSuccessfully,
    "renderEmail",
    ()=>renderEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/hr/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/components/node_modules/@react-email/render/dist/node/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/section/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/text/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/Button.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailIllustration.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailLayout.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/StatusBanner.tsx [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function ConsentUpdatedSuccessfully({ principalName, updateDate, updatedPurposes, dprmLink, baseUrl = process.env.BASE_PATH || "http://localhost:3000" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailLayout"], {
        preview: "Your consent has been successfully updated",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailIllustration"], {
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["StatusBanner"], {
                type: "success",
                title: "Consent Updated Successfully!",
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-4 text-[15px] leading-relaxed text-gray-700",
                        children: [
                            "Dear ",
                            principalName,
                            ","
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-4 text-[15px] leading-relaxed text-gray-700",
                        children: [
                            "We confirm that your consent has been successfully updated on",
                            " ",
                            updateDate
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-2 text-[15px] leading-relaxed text-gray-700",
                        children: "👉 This update applies to:"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    updatedPurposes.map((purpose, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                            className: "mb-2 ml-4 text-[15px] leading-relaxed text-gray-700",
                            children: [
                                "• ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: purpose.ppName
                                }, void 0, false, {
                                    fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                " (",
                                purpose.cpName,
                                ")"
                            ]
                        }, index, true, {
                            fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-6 text-[15px] leading-relaxed text-gray-700",
                        children: "👉 Your updated consent ensures continued lawful processing of your data."
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-6 text-[15px] leading-relaxed text-gray-700",
                        children: "For details or to manage your preferences, please click on below button."
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["Button"], {
                        href: dprmLink,
                        children: "Manage preferences"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Hr"], {
                className: "my-6 border-gray-300"
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-2 text-[15px] text-gray-700",
                        children: "Regards,"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "m-0 text-[15px] text-gray-700",
                        children: "CMS (Privy)"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
ConsentUpdatedSuccessfully.PreviewProps = {
    principalName: "Anita",
    businessProcessName: "Customer Service Portal",
    updateDate: "12-06-2025",
    updatedPurposes: [
        {
            cpName: "KYC",
            ppName: "Identity Verification"
        },
        {
            cpName: "Credit Assessment",
            ppName: "Credit Score Check"
        }
    ],
    dprmLink: "https://example.com/dprm/abc123",
    baseUrl: "http://localhost:3000"
};
async function renderEmail(variables) {
    const subject = "Consent Updated Successfully";
    const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["render"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsentUpdatedSuccessfully, {
        ...variables
    }, void 0, false, {
        fileName: "[project]/lib/services/email/templates/consent-updated-successfully.tsx",
        lineNumber: 106,
        columnNumber: 29
    }, this));
    const purposesList = variables.updatedPurposes.map((p)=>`  • ${p.ppName} (${p.cpName})`).join("\n");
    const text = `
Consent Updated Successfully!

Dear ${variables.principalName || "User"},

We confirm that your consent has been successfully updated on ${variables.updateDate || "[date]"}.

This update applies to:
${purposesList}

Your updated consent ensures continued lawful processing of your data.

For details or to manage your preferences, please visit:
${variables.dprmLink || "#"}

Regards,
CMS (Privy)
  `.trim();
    return {
        subject,
        html,
        text
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/services/email/templates/consent-version-changes.tsx [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "default",
    ()=>ConsentVersionChanges,
    "renderEmail",
    ()=>renderEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/hr/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/components/node_modules/@react-email/render/dist/node/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/section/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/text/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/Button.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailIllustration.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailLayout.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/StatusBanner.tsx [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function ConsentVersionChanges({ principalName, businessProcessName, newPurposes, modifiedPurposes, dprmLink, baseUrl = process.env.BASE_PATH || "http://localhost:3000" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailLayout"], {
        preview: "Important updates to your consent - Action required",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailIllustration"], {
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["StatusBanner"], {
                type: "reminder",
                title: "Action Required",
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-4 text-[15px] leading-relaxed text-gray-700",
                        children: [
                            "Dear ",
                            principalName,
                            ","
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-4 text-[15px] leading-relaxed text-gray-700",
                        children: [
                            "We've made important updates to",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: businessProcessName
                            }, void 0, false, {
                                fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            " that require your attention and consent."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    newPurposes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                className: "mb-2 mt-6 text-[16px] font-semibold text-gray-800",
                                children: "📋 New Processing Purposes Added"
                            }, void 0, false, {
                                fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                className: "mb-4 text-[15px] leading-relaxed text-gray-700",
                                children: [
                                    "We've introduced ",
                                    newPurposes.length,
                                    " new",
                                    " ",
                                    newPurposes.length === 1 ? "purpose" : "purposes",
                                    " for data processing:"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            newPurposes.map((purpose, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 ml-4 rounded-lg bg-blue-50 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                            className: "mb-2 text-[15px] font-semibold text-gray-800",
                                            children: [
                                                index + 1,
                                                ". ",
                                                purpose.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                            className: "mb-3 text-[14px] leading-relaxed text-gray-700",
                                            children: purpose.description
                                        }, void 0, false, {
                                            fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                            className: "mb-1 text-[14px] font-semibold text-gray-700",
                                            children: "Data to be used:"
                                        }, void 0, false, {
                                            fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        purpose.userAttributeNames.map((attr, attrIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                                className: "mb-1 ml-4 text-[14px] text-gray-600",
                                                children: [
                                                    "• ",
                                                    attr
                                                ]
                                            }, attrIdx, true, {
                                                fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true),
                    modifiedPurposes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                className: "mb-2 mt-6 text-[16px] font-semibold text-gray-800",
                                children: "✏️ Existing Purposes Modified"
                            }, void 0, false, {
                                fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                className: "mb-4 text-[15px] leading-relaxed text-gray-700",
                                children: [
                                    "We've updated ",
                                    modifiedPurposes.length,
                                    " existing",
                                    " ",
                                    modifiedPurposes.length === 1 ? "purpose" : "purposes",
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            modifiedPurposes.map((purpose, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 ml-4 rounded-lg bg-orange-50 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                            className: "mb-3 text-[15px] font-semibold text-gray-800",
                                            children: [
                                                index + 1,
                                                ". ",
                                                purpose.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        purpose.changes.map((change, changeIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                                        className: "mb-1 text-[14px] font-semibold text-gray-700",
                                                        children: [
                                                            change.field,
                                                            ":"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                                        className: "mb-1 ml-2 text-[14px] text-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: "Before:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                                                lineNumber: 118,
                                                                columnNumber: 23
                                                            }, this),
                                                            " ",
                                                            change.before
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                                        className: "mb-0 ml-2 text-[14px] text-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: "After:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                                                lineNumber: 122,
                                                                columnNumber: 23
                                                            }, this),
                                                            " ",
                                                            change.after
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, changeIdx, true, {
                                                fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-4 mt-6 text-[15px] leading-relaxed text-gray-700",
                        children: "In line with the DPDP Act 2023, we can proceed only after you review and provide your consent to these changes."
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-6 text-[15px] leading-relaxed text-gray-700",
                        children: "Click below to review the complete details and submit your consent:"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["Button"], {
                        href: dprmLink,
                        children: "Review & Consent"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Hr"], {
                className: "my-6 border-gray-300"
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-2 text-[15px] text-gray-700",
                        children: "Regards,"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "m-0 text-[15px] text-gray-700",
                        children: "CMS (Privy)"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
ConsentVersionChanges.PreviewProps = {
    principalName: "Rajan Sharma",
    businessProcessName: "Customer Service Portal",
    newPurposes: [
        {
            name: "Financial Profiling for Partner Offers",
            description: "This will allow us to analyze your purchase history and browsing patterns to offer you personalized financial products.",
            userAttributeNames: [
                "Purchase history",
                "Browsing behavior",
                "Contact details"
            ]
        }
    ],
    modifiedPurposes: [
        {
            name: "Identity Verification",
            changes: [
                {
                    field: "Description",
                    before: "Basic identity verification using government ID",
                    after: "Enhanced biometric identity verification using government ID and facial recognition"
                },
                {
                    field: "Purpose Attributes",
                    before: "Name, ID Number",
                    after: "Name, ID Number, Facial Biometrics"
                }
            ]
        }
    ],
    dprmLink: "https://example.com/dprm/abc123",
    baseUrl: "http://localhost:3000"
};
async function renderEmail(variables) {
    const subject = `Action Required: Updates to ${variables.businessProcessName}`;
    const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["render"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsentVersionChanges, {
        ...variables
    }, void 0, false, {
        fileName: "[project]/lib/services/email/templates/consent-version-changes.tsx",
        lineNumber: 195,
        columnNumber: 29
    }, this));
    let textContent = `
Action Required: Updates to ${variables.businessProcessName}

Dear ${variables.principalName},

We've made important updates to ${variables.businessProcessName} that require your attention and consent.
`;
    if (variables.newPurposes.length > 0) {
        textContent += `\n\n📋 NEW PROCESSING PURPOSES ADDED\nWe've introduced ${variables.newPurposes.length} new ${variables.newPurposes.length === 1 ? "purpose" : "purposes"}:\n\n`;
        variables.newPurposes.forEach((purpose, idx)=>{
            textContent += `${idx + 1}. ${purpose.name}\n${purpose.description}\n\nData to be used:\n`;
            purpose.userAttributeNames.forEach((attr)=>{
                textContent += `  • ${attr}\n`;
            });
            textContent += "\n";
        });
    }
    if (variables.modifiedPurposes.length > 0) {
        textContent += `\n✏️ EXISTING PURPOSES MODIFIED\nWe've updated ${variables.modifiedPurposes.length} existing ${variables.modifiedPurposes.length === 1 ? "purpose" : "purposes"}:\n\n`;
        variables.modifiedPurposes.forEach((purpose, idx)=>{
            textContent += `${idx + 1}. ${purpose.name}\n`;
            purpose.changes.forEach((change)=>{
                textContent += `  ${change.field}:\n    Before: ${change.before}\n    After: ${change.after}\n`;
            });
            textContent += "\n";
        });
    }
    textContent += `\nIn line with the DPDP Act 2023, we can proceed only after you review and provide your consent to these changes.\n\nReview and provide consent here:\n${variables.dprmLink}\n\nRegards,\nCMS (Privy)`;
    return {
        subject,
        html,
        text: textContent.trim()
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/services/email/templates/consent-version-modified-purpose.tsx [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "default",
    ()=>ConsentVersionModifiedPurpose,
    "renderEmail",
    ()=>renderEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/hr/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/components/node_modules/@react-email/render/dist/node/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/section/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/text/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/Button.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailIllustration.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailLayout.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/StatusBanner.tsx [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function ConsentVersionModifiedPurpose({ principalName, businessProcessName, purposeName, changes, dprmLink, baseUrl = process.env.BASE_PATH || "http://localhost:3000" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailLayout"], {
        preview: "Purpose modified - Please review the changes",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailIllustration"], {
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["StatusBanner"], {
                type: "reminder",
                title: "Need your attention",
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-4 text-[15px] leading-relaxed text-gray-700",
                        children: [
                            "Dear ",
                            principalName,
                            ","
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-4 text-[15px] leading-relaxed text-gray-700",
                        children: [
                            "We've made changes to an existing purpose:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: purposeName
                            }, void 0, false, {
                                fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-2 text-[15px] font-semibold leading-relaxed text-gray-700",
                        children: "What's changed?"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    changes.map((change, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 ml-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                    className: "mb-1 text-[14px] font-semibold text-gray-800",
                                    children: [
                                        change.field,
                                        ":"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                    className: "mb-1 ml-2 text-[14px] leading-relaxed text-gray-600",
                                    children: [
                                        "Before: ",
                                        change.before
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                    className: "mb-0 ml-2 text-[14px] leading-relaxed text-gray-600",
                                    children: [
                                        "After: ",
                                        change.after
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-6 mt-4 text-[15px] leading-relaxed text-gray-700",
                        children: "In line with DPDP Act 2023, we can proceed only after you review and provide your consent."
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-6 text-[15px] leading-relaxed text-gray-700",
                        children: "Click below to review the details and update your consent:"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["Button"], {
                        href: dprmLink,
                        children: "Review Changes"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Hr"], {
                className: "my-6 border-gray-300"
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-2 text-[15px] text-gray-700",
                        children: "Regards,"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "m-0 text-[15px] text-gray-700",
                        children: "CMS (Privy)"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
ConsentVersionModifiedPurpose.PreviewProps = {
    principalName: "Rajan Sharma",
    businessProcessName: "Customer Service Portal",
    purposeName: "Marketing and Promotions",
    changes: [
        {
            field: "Description",
            before: "Send promotional emails monthly",
            after: "Send promotional emails and SMS weekly"
        },
        {
            field: "Data Retention",
            before: "12 months",
            after: "24 months"
        }
    ],
    dprmLink: "https://example.com/dprm/abc123",
    baseUrl: "http://localhost:3000"
};
async function renderEmail(variables) {
    const subject = "Purpose Modified - Please Review Changes";
    const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["render"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsentVersionModifiedPurpose, {
        ...variables
    }, void 0, false, {
        fileName: "[project]/lib/services/email/templates/consent-version-modified-purpose.tsx",
        lineNumber: 120,
        columnNumber: 29
    }, this));
    const changesList = (variables.changes || []).map((change)=>`${change.field}:\n  Before: ${change.before}\n  After: ${change.after}`).join("\n\n");
    const text = `
Need your attention

Dear ${variables.principalName || "User"},

We've made changes to an existing purpose: ${variables.purposeName || "Data Processing Purpose"}

What's changed?
${changesList}

In line with DPDP Act 2023, we can proceed only after you review and provide your consent.

Click below to review the details and update your consent:
${variables.dprmLink || "#"}

Regards,
CMS (Privy)
  `.trim();
    return {
        subject,
        html,
        text
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/services/email/templates/consent-version-new-purpose.tsx [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "default",
    ()=>ConsentVersionNewPurpose,
    "renderEmail",
    ()=>renderEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/hr/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/components/node_modules/@react-email/render/dist/node/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/section/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/text/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/Button.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailIllustration.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailLayout.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/StatusBanner.tsx [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function ConsentVersionNewPurpose({ principalName, businessProcessName, newPurposeName, newPurposeDescription, dataUsed, dprmLink, baseUrl = process.env.BASE_PATH || "http://localhost:3000" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailLayout"], {
        preview: "New purpose added - Your consent is required",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailIllustration"], {
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["StatusBanner"], {
                type: "reminder",
                title: "Need your attention",
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-4 text-[15px] leading-relaxed text-gray-700",
                        children: [
                            "Dear ",
                            principalName,
                            ","
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-4 text-[15px] leading-relaxed text-gray-700",
                        children: [
                            "We've introduced a new purpose:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    newPurposeName,
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-4 text-[15px] leading-relaxed text-gray-700",
                        children: newPurposeDescription
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-2 text-[15px] font-semibold leading-relaxed text-gray-700",
                        children: "What data will be used?"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    dataUsed.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                            className: "mb-1 ml-4 text-[15px] leading-relaxed text-gray-700",
                            children: [
                                "• ",
                                item
                            ]
                        }, index, true, {
                            fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-6 mt-4 text-[15px] leading-relaxed text-gray-700",
                        children: "In line with DPDP Act 2023, we can proceed only after you review and provide your consent."
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-6 text-[15px] leading-relaxed text-gray-700",
                        children: "Click below to review the details and submit your consent:"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["Button"], {
                        href: dprmLink,
                        children: "Grant Consent"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Hr"], {
                className: "my-6 border-gray-300"
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-2 text-[15px] text-gray-700",
                        children: "Regards,"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "m-0 text-[15px] text-gray-700",
                        children: "CMS (Privy)"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
ConsentVersionNewPurpose.PreviewProps = {
    principalName: "Rajan Sharma",
    businessProcessName: "Customer Service Portal",
    newPurposeName: "Financial Profiling for Partner Offers",
    newPurposeDescription: "This will allow us to analyze your purchase history and browsing patterns to offer you personalized financial products, discounts, and services in collaboration with trusted third-party providers.",
    dataUsed: [
        "Purchase history",
        "Browsing behavior",
        "Contact details (email, phone)",
        "Demographic information (age group, location)"
    ],
    dprmLink: "https://example.com/dprm/abc123",
    baseUrl: "http://localhost:3000"
};
async function renderEmail(variables) {
    const subject = "New Purpose Added - Your Consent Required";
    const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["render"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsentVersionNewPurpose, {
        ...variables
    }, void 0, false, {
        fileName: "[project]/lib/services/email/templates/consent-version-new-purpose.tsx",
        lineNumber: 117,
        columnNumber: 29
    }, this));
    const dataList = (variables.dataUsed || []).map((item)=>`• ${item}`).join("\n");
    const text = `
Need your attention

Dear ${variables.principalName || "User"},

We've introduced a new purpose: ${variables.newPurposeName || "New Purpose"}.

${variables.newPurposeDescription || ""}

What data will be used?
${dataList}

In line with DPDP Act 2023, we can proceed only after you review and provide your consent.

Click below to review the details and submit your consent:
${variables.dprmLink || "#"}

Regards,
CMS (Privy)
  `.trim();
    return {
        subject,
        html,
        text
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "ConsentWithdrawnSuccessfully",
    ()=>ConsentWithdrawnSuccessfully,
    "renderEmail",
    ()=>renderEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/components/node_modules/@react-email/render/dist/node/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/section/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/text/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/Button.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailIllustration.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailLayout.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/StatusBanner.tsx [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function ConsentWithdrawnSuccessfully({ principalName, withdrawnPurposes, dprmLink, organizationName, organizationEmail, withdrawalDate }) {
    const preview = "Consent Withdrawn Successfully";
    const baseUrl = process.env.BASE_PATH || "http://localhost:3000";
    const dateStr = withdrawalDate || new Date().toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailLayout"], {
        preview: preview,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailIllustration"], {
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["StatusBanner"], {
                type: "success",
                title: "Consent Withdrawn Successfully!",
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-4 text-lg leading-relaxed text-[#484E56]",
                        children: [
                            "Dear ",
                            principalName,
                            ","
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-6 text-lg leading-relaxed text-[#484E56]",
                        children: [
                            "We confirm that your consent withdrawal request submitted on ",
                            dateStr,
                            " ",
                            "has been successfully processed."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-4 text-lg leading-relaxed text-[#484E56]",
                        children: "All associated data processing activities under this consent have been stopped."
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    withdrawnPurposes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                className: "mb-3 text-lg font-semibold text-[#484E56]",
                                children: "Withdrawn Purposes:"
                            }, void 0, false, {
                                fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            withdrawnPurposes.map((purpose, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        backgroundColor: "#FFF4ED",
                                        border: "1px solid #FDBA74",
                                        borderRadius: "8px",
                                        padding: "16px",
                                        marginBottom: "12px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                            className: "m-0 text-base font-semibold text-[#EA580C]",
                                            children: purpose.ppName
                                        }, void 0, false, {
                                            fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                                            className: "m-0 mt-1 text-sm text-[#9A3412]",
                                            children: purpose.cpName
                                        }, void 0, false, {
                                            fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mt-6 mb-6 text-lg leading-relaxed text-[#484E56]",
                        children: [
                            "Thank you for your request. If you have further questions, please contact our DPO team at ",
                            organizationEmail,
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["Button"], {
                    href: dprmLink,
                    children: "Manage your Consent"
                }, void 0, false, {
                    fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "text-lg leading-relaxed text-[#484E56]",
                        children: "Regards,"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "text-lg leading-relaxed text-[#484E56]",
                        children: [
                            organizationName,
                            " DPO"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
async function renderEmail(variables) {
    const subject = "Consent Withdrawn Successfully";
    const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["render"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsentWithdrawnSuccessfully, {
        ...variables
    }, void 0, false, {
        fileName: "[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx",
        lineNumber: 125,
        columnNumber: 29
    }, this));
    const purposesText = variables.withdrawnPurposes.map((p)=>`- ${p.ppName} (${p.cpName})`).join("\n");
    const dateStr = variables.withdrawalDate || new Date().toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    });
    const text = `
Consent Withdrawn Successfully

Dear ${variables.principalName},

We confirm that your consent withdrawal request submitted on ${dateStr} has been successfully processed.

All associated data processing activities under this consent have been stopped.

Withdrawn Purposes:
${purposesText}

You can view or manage your remaining consents anytime using the link below:
${variables.dprmLink}

Thank you for your request. If you have further questions, please contact our DPO team at ${variables.organizationEmail}.

Regards,
${variables.organizationName} DPO
  `.trim();
    return {
        subject,
        html,
        text
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/services/email/templates/grievance-resolved.tsx [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "GrievanceResolved",
    ()=>GrievanceResolved,
    "renderEmail",
    ()=>renderEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/components/node_modules/@react-email/render/dist/node/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/section/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/text/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/Button.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailIllustration.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailLayout.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/StatusBanner.tsx [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function GrievanceResolved({ grievanceId, resolutionComments, trackingLink, grievanceTitle, principalName = "User", actualStatus = "Closed", organizationName = "Open Bharart Digital Consent" }) {
    const preview = "Grievance Resolution Update";
    const baseUrl = process.env.BASE_PATH || "http://localhost:3000";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailLayout"], {
        preview: preview,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailIllustration"], {
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["StatusBanner"], {
                type: "success",
                title: "Grievance addressed",
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                    className: "mb-4 text-lg leading-relaxed text-[#484E56]",
                    children: [
                        "Dear ",
                        principalName,
                        ","
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-2 text-lg leading-relaxed text-[#484E56]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Grievance ID:"
                            }, void 0, false, {
                                fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            " ",
                            grievanceId
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-2 text-lg leading-relaxed text-[#484E56]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Status:"
                            }, void 0, false, {
                                fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            " ",
                            actualStatus
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-2 text-lg leading-relaxed text-[#484E56]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Resolution Date:"
                            }, void 0, false, {
                                fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            " ",
                            new Date().toLocaleDateString('en-US', {
                                month: '2-digit',
                                day: '2-digit',
                                year: 'numeric'
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-6 text-lg leading-relaxed text-[#484E56]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Remarks:"
                            }, void 0, false, {
                                fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            " ",
                            resolutionComments
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                className: "mb-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["Button"], {
                    href: trackingLink,
                    children: "View details"
                }, void 0, false, {
                    fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "text-lg leading-relaxed text-[#484E56]",
                        children: "Regards,"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "text-lg leading-relaxed text-[#484E56]",
                        children: "Privy CMP"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
async function renderEmail(variables) {
    const subject = variables.grievanceTitle ? `Grievance Resolution Update – ${variables.grievanceTitle}` : "Grievance Resolution Update";
    const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["render"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(GrievanceResolved, {
        ...variables
    }, void 0, false, {
        fileName: "[project]/lib/services/email/templates/grievance-resolved.tsx",
        lineNumber: 91,
        columnNumber: 29
    }, this));
    const text = `
Grievance Resolved

Great news! Your grievance #${variables.grievanceId} has been successfully resolved.

Resolution Details:
${variables.resolutionComments}

We appreciate your patience. You can view the full details using the link below:
${variables.trackingLink}

If you have any feedback or further concerns, please don't hesitate to reach out to us.

Regards,
${variables.organizationName || "Open Bharart Digital Consent"}
  `.trim();
    return {
        subject,
        html,
        text
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/services/email/templates/grievance-status-update.tsx [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "GrievanceStatusUpdate",
    ()=>GrievanceStatusUpdate,
    "renderEmail",
    ()=>renderEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/components/node_modules/@react-email/render/dist/node/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/section/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/text/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/Button.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailIllustration.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailLayout.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/StatusBanner.tsx [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function GrievanceStatusUpdate({ grievanceId, status, comments, trackingLink, grievanceTitle, principalName = "User", organizationName = "Open Bharart Digital Consent" }) {
    const preview = "Update: Your grievance request status has changed";
    const baseUrl = process.env.BASE_PATH || "http://localhost:3000";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailLayout"], {
        preview: preview,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailIllustration"], {
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/grievance-status-update.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["StatusBanner"], {
                type: "info",
                title: "An Update",
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/grievance-status-update.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                    className: "mb-4 text-lg leading-relaxed text-[#484E56]",
                    children: [
                        "Dear ",
                        principalName,
                        ","
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/services/email/templates/grievance-status-update.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/grievance-status-update.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                    className: "mb-6 text-lg leading-relaxed text-[#484E56]",
                    children: [
                        "Your grievance request",
                        grievanceTitle ? ` regarding "${grievanceTitle}"` : '',
                        ' is now marked as "',
                        status,
                        '" as of ',
                        new Date().toLocaleDateString('en-US', {
                            month: '2-digit',
                            day: '2-digit',
                            year: 'numeric'
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/services/email/templates/grievance-status-update.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/grievance-status-update.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            comments && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                    className: "mb-6 text-lg leading-relaxed text-[#484E56]",
                    children: comments
                }, void 0, false, {
                    fileName: "[project]/lib/services/email/templates/grievance-status-update.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/grievance-status-update.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                className: "mb-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["Button"], {
                    href: trackingLink,
                    children: "Track your request"
                }, void 0, false, {
                    fileName: "[project]/lib/services/email/templates/grievance-status-update.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/grievance-status-update.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "text-lg leading-relaxed text-[#484E56]",
                        children: "Regards,"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/grievance-status-update.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "text-lg leading-relaxed text-[#484E56]",
                        children: "Privy CMP"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/grievance-status-update.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/grievance-status-update.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/services/email/templates/grievance-status-update.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
async function renderEmail(variables) {
    const subject = variables.grievanceTitle ? `Update: Your grievance request regarding "${variables.grievanceTitle}"` : "Update: Your grievance request status has changed";
    const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["render"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(GrievanceStatusUpdate, {
        ...variables
    }, void 0, false, {
        fileName: "[project]/lib/services/email/templates/grievance-status-update.tsx",
        lineNumber: 90,
        columnNumber: 29
    }, this));
    const commentsText = variables.comments ? `\nUpdate Details:\n${variables.comments}\n` : "";
    const text = `
Grievance Status Update

Your grievance #${variables.grievanceId} has been updated.

Current Status: ${variables.status}
${commentsText}
You can track the progress of your grievance using the link below:
${variables.trackingLink}

If you have any questions or concerns, please don't hesitate to contact us.

Regards,
${variables.organizationName || "Open Bharart Digital Consent"}
  `.trim();
    return {
        subject,
        html,
        text
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/services/email/templates/sla-breach-escalation.tsx [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "SlaBreachEscalation",
    ()=>SlaBreachEscalation,
    "renderEmail",
    ()=>renderEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/components/node_modules/@react-email/render/dist/node/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/section/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-email/text/dist/index.mjs [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/Button.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailIllustration.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/EmailLayout.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/components/StatusBanner.tsx [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function SlaBreachEscalation({ grievanceId, grievanceSubject, severity, expectedResolutionDate, breachedAt, timeOverdue, assignedToName, businessProcessName, grievanceUrl, recipientName }) {
    const preview = `SLA Breach Alert: Grievance #${grievanceId} requires immediate attention`;
    const baseUrl = process.env.BASE_PATH || "http://localhost:3000";
    const severityColors = {
        HIGH: {
            bg: "#FEE2E2",
            border: "#EF4444",
            text: "#991B1B"
        },
        MEDIUM: {
            bg: "#FED7AA",
            border: "#F97316",
            text: "#9A3412"
        },
        LOW: {
            bg: "#FEF3C7",
            border: "#F59E0B",
            text: "#92400E"
        }
    };
    const colors = severityColors[severity] || severityColors.MEDIUM;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailLayout$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailLayout"], {
        preview: preview,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$EmailIllustration$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["EmailIllustration"], {
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$StatusBanner$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["StatusBanner"], {
                type: "error",
                title: "SLA Breach Alert!",
                baseUrl: baseUrl
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-4 text-lg leading-relaxed text-[#484E56]",
                        children: [
                            "Dear ",
                            recipientName,
                            ","
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "mb-6 text-lg leading-relaxed text-[#484E56]",
                        children: "This is an urgent escalation notification. A grievance has breached its SLA and requires immediate attention."
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: colors.bg,
                        border: `2px solid ${colors.border}`,
                        borderRadius: "8px",
                        padding: "16px",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                            className: "m-0 text-2xl font-bold",
                            style: {
                                color: colors.text
                            },
                            children: [
                                severity,
                                " SEVERITY"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                            className: "m-0 mt-2 text-sm",
                            style: {
                                color: colors.text
                            },
                            children: [
                                "Time Overdue: ",
                                timeOverdue
                            ]
                        }, void 0, true, {
                            fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                style: {
                    backgroundColor: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                    padding: "20px",
                    marginBottom: "24px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "m-0 mb-3 text-base font-semibold text-[#374151]",
                        children: "Grievance Details"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        style: {
                            width: "100%",
                            borderCollapse: "collapse"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "8px 0",
                                                color: "#6B7280",
                                                fontSize: "14px"
                                            },
                                            children: "Grievance ID:"
                                        }, void 0, false, {
                                            fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "8px 0",
                                                color: "#111827",
                                                fontSize: "14px",
                                                fontWeight: "600"
                                            },
                                            children: [
                                                "#",
                                                grievanceId
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "8px 0",
                                                color: "#6B7280",
                                                fontSize: "14px"
                                            },
                                            children: "Subject:"
                                        }, void 0, false, {
                                            fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "8px 0",
                                                color: "#111827",
                                                fontSize: "14px",
                                                fontWeight: "600"
                                            },
                                            children: grievanceSubject
                                        }, void 0, false, {
                                            fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "8px 0",
                                                color: "#6B7280",
                                                fontSize: "14px"
                                            },
                                            children: "Process:"
                                        }, void 0, false, {
                                            fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "8px 0",
                                                color: "#111827",
                                                fontSize: "14px"
                                            },
                                            children: businessProcessName
                                        }, void 0, false, {
                                            fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                assignedToName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "8px 0",
                                                color: "#6B7280",
                                                fontSize: "14px"
                                            },
                                            children: "Assigned To:"
                                        }, void 0, false, {
                                            fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "8px 0",
                                                color: "#111827",
                                                fontSize: "14px"
                                            },
                                            children: assignedToName
                                        }, void 0, false, {
                                            fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "8px 0",
                                                color: "#6B7280",
                                                fontSize: "14px"
                                            },
                                            children: "Expected Resolution:"
                                        }, void 0, false, {
                                            fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "8px 0",
                                                color: "#DC2626",
                                                fontSize: "14px",
                                                fontWeight: "600"
                                            },
                                            children: expectedResolutionDate
                                        }, void 0, false, {
                                            fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "8px 0",
                                                color: "#6B7280",
                                                fontSize: "14px"
                                            },
                                            children: "Breached At:"
                                        }, void 0, false, {
                                            fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "8px 0",
                                                color: "#DC2626",
                                                fontSize: "14px",
                                                fontWeight: "600"
                                            },
                                            children: breachedAt
                                        }, void 0, false, {
                                            fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                    className: "mb-6 text-lg leading-relaxed text-[#484E56]",
                    children: "Please review this grievance immediately and take necessary action to resolve the issue."
                }, void 0, false, {
                    fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$components$2f$Button$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__["Button"], {
                    href: grievanceUrl,
                    children: "View Grievance Details"
                }, void 0, false, {
                    fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Section"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "text-lg leading-relaxed text-[#484E56]",
                        children: "Regards,"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["Text"], {
                        className: "text-lg leading-relaxed text-[#484E56]",
                        children: "Privy CMP SLA Monitoring System"
                    }, void 0, false, {
                        fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
async function renderEmail(variables) {
    const subject = `🚨 SLA BREACH: Grievance #${variables.grievanceId} (${variables.severity} Severity)`;
    const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$email$2f$components$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["render"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["jsxDEV"])(SlaBreachEscalation, {
        ...variables
    }, void 0, false, {
        fileName: "[project]/lib/services/email/templates/sla-breach-escalation.tsx",
        lineNumber: 191,
        columnNumber: 29
    }, this));
    const text = `
SLA BREACH ALERT - IMMEDIATE ACTION REQUIRED

Grievance ID: #${variables.grievanceId}
Severity: ${variables.severity}
Time Overdue: ${variables.timeOverdue}

GRIEVANCE DETAILS:
Subject: ${variables.grievanceSubject}
Process: ${variables.businessProcessName}
${variables.assignedToName ? `Assigned To: ${variables.assignedToName}` : "Status: Unassigned"}
Expected Resolution: ${variables.expectedResolutionDate}
Breached At: ${variables.breachedAt}

This grievance has exceeded its SLA commitment and requires immediate attention.

Please review and take action:
${variables.grievanceUrl}

Regards,
Privy CMP SLA Monitoring System
  `.trim();
    return {
        subject,
        html,
        text
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/services/email/template-registry.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ /**
 * Email Template Registry
 * 
 * Centralized template management for email service.
 * All email templates must be statically imported here for Next.js production builds.
 * 
 * To add a new template:
 * 1. Create your template file in ./templates/ (e.g., my-template.tsx)
 * 2. Export a `renderEmail` function that returns { subject, html, text }
 * 3. Add import below: import * as myTemplate from "./templates/my-template";
 * 4. Add to registry: "my-template": myTemplate,
 */ // Consent-related templates
__turbopack_context__.s([
    "TEMPLATE_REGISTRY",
    ()=>TEMPLATE_REGISTRY,
    "getAvailableTemplates",
    ()=>getAvailableTemplates,
    "hasTemplate",
    ()=>hasTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$expiring$2d$reminder$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/templates/consent-expiring-reminder.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$granted$2d$confirmation$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/templates/consent-granted-confirmation.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$updated$2d$successfully$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/templates/consent-updated-successfully.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$version$2d$changes$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/templates/consent-version-changes.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$version$2d$modified$2d$purpose$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/templates/consent-version-modified-purpose.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$version$2d$new$2d$purpose$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/templates/consent-version-new-purpose.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$withdrawn$2d$successfully$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/templates/consent-withdrawn-successfully.tsx [instrumentation] (ecmascript)");
// Grievance-related templates
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$grievance$2d$resolved$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/templates/grievance-resolved.tsx [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$grievance$2d$status$2d$update$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/templates/grievance-status-update.tsx [instrumentation] (ecmascript)");
// SLA-related templates
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$sla$2d$breach$2d$escalation$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/templates/sla-breach-escalation.tsx [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$expiring$2d$reminder$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$granted$2d$confirmation$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$updated$2d$successfully$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$version$2d$changes$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$version$2d$modified$2d$purpose$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$version$2d$new$2d$purpose$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$withdrawn$2d$successfully$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$grievance$2d$resolved$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$grievance$2d$status$2d$update$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$sla$2d$breach$2d$escalation$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$expiring$2d$reminder$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$granted$2d$confirmation$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$updated$2d$successfully$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$version$2d$changes$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$version$2d$modified$2d$purpose$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$version$2d$new$2d$purpose$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$withdrawn$2d$successfully$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$grievance$2d$resolved$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$grievance$2d$status$2d$update$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$sla$2d$breach$2d$escalation$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
const TEMPLATE_REGISTRY = {
    // Consent templates
    "consent-expiring-reminder": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$expiring$2d$reminder$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    "consent-granted-confirmation": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$granted$2d$confirmation$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    "consent-updated-successfully": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$updated$2d$successfully$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    "consent-version-changes": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$version$2d$changes$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    "consent-version-modified-purpose": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$version$2d$modified$2d$purpose$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    "consent-version-new-purpose": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$version$2d$new$2d$purpose$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    "consent-withdrawn-successfully": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$consent$2d$withdrawn$2d$successfully$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    // Grievance templates
    "grievance-resolved": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$grievance$2d$resolved$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    "grievance-status-update": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$grievance$2d$status$2d$update$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    // SLA templates
    "sla-breach-escalation": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$templates$2f$sla$2d$breach$2d$escalation$2e$tsx__$5b$instrumentation$5d$__$28$ecmascript$29$__
};
function getAvailableTemplates() {
    return Object.keys(TEMPLATE_REGISTRY);
}
function hasTemplate(templateName) {
    return templateName in TEMPLATE_REGISTRY;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/services/email/email-service.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "emailService",
    ()=>emailService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$email$2d$provider$2d$factory$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/email-provider-factory.ts [instrumentation] (ecmascript)");
// Static imports for all email templates (required for Next.js production builds)
// When adding a new template:
// 1. Create the template in ./templates/
// 2. Add import and registry entry in template-registry.ts
// 3. No changes needed in this file!
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$template$2d$registry$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/email/template-registry.ts [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$template$2d$registry$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$template$2d$registry$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
class EmailService {
    provider;
    defaultFrom;
    constructor(){
        this.provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$email$2d$provider$2d$factory$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["getEmailProvider"])();
        this.defaultFrom = {
            email: process.env.EMAIL_FROM_ADDRESS,
            name: process.env.EMAIL_FROM_NAME
        };
    }
    async sendEmail(options) {
        const payload = {
            ...options,
            from: options.from || this.defaultFrom
        };
        const recipient = Array.isArray(options.to) ? options.to.map((addr)=>addr.email).join(", ") : options.to.email;
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Attempting to send email", {
            to: recipient,
            subject: options.subject,
            from: payload.from.email,
            hasCc: !!options.cc,
            hasBcc: !!options.bcc,
            hasAttachments: !!options.attachments?.length
        });
        try {
            const result = await this.provider.send(payload);
            if (result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Email sent successfully", {
                    to: recipient,
                    subject: options.subject,
                    messageId: result.messageId
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Email sending failed", {
                    to: recipient,
                    subject: options.subject,
                    error: result.error
                });
            }
            return result;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Email sending threw exception", {
                to: recipient,
                subject: options.subject,
                error: error.message,
                stack: error.stack
            });
            return {
                success: false,
                error: String(error?.message || error)
            };
        }
    }
    async sendTemplatedEmail(options) {
        const { templateName, variables = {} } = options;
        const recipient = Array.isArray(options.to) ? options.to.map((addr)=>addr.email).join(", ") : options.to.email;
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Rendering email template", {
            templateName,
            to: recipient,
            variableKeys: Object.keys(variables)
        });
        try {
            // Use static template registry instead of dynamic imports
            const templateModule = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$template$2d$registry$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["TEMPLATE_REGISTRY"][templateName];
            if (!templateModule || typeof templateModule.renderEmail !== "function") {
                const error = `Template '${templateName}' not found in registry or does not export a renderEmail function`;
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Template not found or invalid", {
                    templateName,
                    to: recipient,
                    availableTemplates: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$email$2f$template$2d$registry$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["TEMPLATE_REGISTRY"])
                });
                throw new Error(error);
            }
            const { subject, html, text } = await templateModule.renderEmail(variables);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].info("Email template rendered successfully", {
                templateName,
                to: recipient,
                subject
            });
            const sendOptions = {
                to: options.to,
                from: options.from || this.defaultFrom,
                subject,
                html,
                text,
                replyTo: options.replyTo,
                cc: options.cc,
                bcc: options.bcc,
                attachments: options.attachments,
                tags: options.tags
            };
            return this.sendEmail(sendOptions);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["logger"].error("Failed to render or send templated email", {
                templateName,
                to: recipient,
                error: error.message,
                stack: error.stack
            });
            return {
                success: false,
                error: `Failed to render email template: ${error.message}`
            };
        }
    }
}
const emailService = new EmailService();
const __TURBOPACK__default__export__ = emailService;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__024ba483._.js.map