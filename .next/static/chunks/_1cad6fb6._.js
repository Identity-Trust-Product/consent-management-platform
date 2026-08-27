(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Dialog(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 40,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent(param) {
    let { className, children, showCloseButton = true, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] sm:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/cms/data-fiduciary/consent-timeline/[id]/data:1836ad [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60def500e7ee6eb70c6e7de64bc873246f7e5472e3":"getConsentHistoryDetail"},"app/cms/data-fiduciary/consent-timeline/[id]/actions.ts",""] */ __turbopack_context__.s([
    "getConsentHistoryDetail",
    ()=>getConsentHistoryDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getConsentHistoryDetail = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60def500e7ee6eb70c6e7de64bc873246f7e5472e3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getConsentHistoryDetail"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuLyoqXHJcbiAqIE9wZW4gQmhhcmF0IERpZ2l0YWwgQ29uc2VudCBieSBJRGZ5XHJcbiAqIENvcHlyaWdodCAoYykgMjAyNSBCYWxkb3IgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCAoSURmeSlcclxuICogXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFByaXZ5IFB1YmxpYyBMaWNlbnNlLlxyXG4gKiBTZWUgTElDRU5TRS5tZCBmb3IgdGhlIGZ1bGwgdGVybXMgb2YgdXNlLlxyXG4gKiBcclxuICogVW5hdXRob3JpemVkIGNvcHlpbmcsIG1vZGlmaWNhdGlvbiwgZGlzdHJpYnV0aW9uLCBvciBjb21tZXJjaWFsIHVzZVxyXG4gKiBpcyBzdHJpY3RseSBwcm9oaWJpdGVkIHdpdGhvdXQgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uIGZyb20gSURmeS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQsIFByaXNtYSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIFRpbWVsaW5lRXZlbnQsXHJcbiAgQ29uc2VudEhpc3RvcnlSb3csXHJcbiAgSGlzdG9yeVJlc3BvbnNlLFxyXG4gIEZpbHRlck9wdGlvbixcclxuICBSZWNlaXB0T3B0aW9uLFxyXG59IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIkAvbGliL3N0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlQ29uc2VudFJlY2VpcHQgfSBmcm9tIFwiQC9saWIvc2VydmljZXMvY29uc2VudC1yZWNlaXB0LXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RvcmFnZUZhY3RvcnkgfSBmcm9tIFwiQC9saWIvc2VydmljZXMvc3RvcmFnZS9zdG9yYWdlLWZhY3RvcnlcIjtcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbnR5cGUgSGlzdG9yeVNlYXJjaFBhcmFtcyA9IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgXCJkYXRhX3ByaW5jaXBhbF9pZHNbXVwiPzogc3RyaW5nW10gfCBzdHJpbmc7XHJcbiAgXCJyZWZlcmVuY2VfaWRzW11cIj86IHN0cmluZ1tdIHwgc3RyaW5nO1xyXG4gIFwiYnVzaW5lc3NfcHJvY2Vzc19pZHNbXVwiPzogc3RyaW5nW10gfCBzdHJpbmc7XHJcbiAgc3RhcnRfZGF0ZT86IHN0cmluZztcclxuICBlbmRfZGF0ZT86IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn07XHJcblxyXG4vKipcclxuICogRmV0Y2hlcyB0aGUgZGV0YWlsZWQgaGlzdG9yeSBmb3IgdGhlIFRpbWVsaW5lIGFuZCBUYWJsZSB2aWV3cy5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb25zZW50SGlzdG9yeURldGFpbChcclxuICBwYXRoSWQ6IHN0cmluZyxcclxuICBzZWFyY2hQYXJhbXM6IEhpc3RvcnlTZWFyY2hQYXJhbXNcclxuKTogUHJvbWlzZTxIaXN0b3J5UmVzcG9uc2U+IHtcclxuICBjb25zdCB7IHR5cGUsIHN0YXJ0X2RhdGUsIGVuZF9kYXRlIH0gPSBzZWFyY2hQYXJhbXM7XHJcblxyXG4gIGlmICghdHlwZSB8fCAodHlwZSAhPT0gXCJyZWZlcmVuY2VfaWRcIiAmJiB0eXBlICE9PSBcImRhdGFfcHJpbmNpcGFsX2lkXCIpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9yIG1pc3NpbmcgdHlwZSBwYXJhbWV0ZXIuXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tIDEuIEZFVENIIERST1BET1dOIEZJTFRFUiBPUFRJT05TIChVbmZpbHRlcmVkIGxpc3QgZm9yIHRoZSBVSSkgLS0tXHJcblxyXG4gIGxldCBkcm9wZG93bk9wdGlvbnM6IEZpbHRlck9wdGlvbltdID0gW107XHJcbiAgbGV0IGJwT3B0aW9uczogRmlsdGVyT3B0aW9uW10gPSBbXTtcclxuXHJcbiAgaWYgKHR5cGUgPT09IFwicmVmZXJlbmNlX2lkXCIpIHtcclxuICAgIC8vIDEuIERhdGEgUHJpbmNpcGFsc1xyXG4gICAgY29uc3QgZHBzID0gYXdhaXQgcHJpc21hLm5vdGljZS5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHJlZmVyZW5jZUlkOiBwYXRoSWQgfSxcclxuICAgICAgc2VsZWN0OiB7IGRhdGFQcmluY2lwYWxJZDogdHJ1ZSB9LFxyXG4gICAgICBkaXN0aW5jdDogW1wiZGF0YVByaW5jaXBhbElkXCJdLFxyXG4gICAgfSk7XHJcbiAgICBkcm9wZG93bk9wdGlvbnMgPSBkcHMubWFwKChkKSA9PiAoe1xyXG4gICAgICBsYWJlbDogZC5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgIHZhbHVlOiBkLmRhdGFQcmluY2lwYWxJZCxcclxuICAgIH0pKTtcclxuXHJcbiAgICAvLyAyLiBCdXNpbmVzcyBQcm9jZXNzZXNcclxuICAgIGNvbnN0IGJwcyA9IGF3YWl0IHByaXNtYS5jb25zZW50LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgcmVmZXJlbmNlSWQ6IHBhdGhJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBidXNpbmVzc1Byb2Nlc3NJZDogdHJ1ZSxcclxuICAgICAgICBidXNpbmVzc1Byb2Nlc3M6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGNvZGU6IHRydWUgfSB9LFxyXG4gICAgICB9LFxyXG4gICAgICBkaXN0aW5jdDogW1wiYnVzaW5lc3NQcm9jZXNzSWRcIl0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBicE9wdGlvbnMgPSBicHMubWFwKChiKSA9PiAoe1xyXG4gICAgICBsYWJlbDogYi5idXNpbmVzc1Byb2Nlc3MubmFtZSxcclxuICAgICAgdmFsdWU6IGIuYnVzaW5lc3NQcm9jZXNzSWQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBiLmJ1c2luZXNzUHJvY2Vzcy5jb2RlLFxyXG4gICAgfSkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyAxLiBSZWZlcmVuY2VzXHJcbiAgICBjb25zdCByZWZzID0gYXdhaXQgcHJpc21hLm5vdGljZS5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IGRhdGFQcmluY2lwYWxJZDogcGF0aElkIH0sXHJcbiAgICAgIHNlbGVjdDogeyByZWZlcmVuY2VJZDogdHJ1ZSB9LFxyXG4gICAgICBkaXN0aW5jdDogW1wicmVmZXJlbmNlSWRcIl0sXHJcbiAgICB9KTtcclxuICAgIGRyb3Bkb3duT3B0aW9ucyA9IHJlZnNcclxuICAgICAgLmZpbHRlcigocikgPT4gci5yZWZlcmVuY2VJZClcclxuICAgICAgLm1hcCgocikgPT4gKHsgbGFiZWw6IHIucmVmZXJlbmNlSWQhLCB2YWx1ZTogci5yZWZlcmVuY2VJZCEgfSkpO1xyXG5cclxuICAgIC8vIDIuIEJ1c2luZXNzIFByb2Nlc3Nlc1xyXG4gICAgY29uc3QgYnBzID0gYXdhaXQgcHJpc21hLmNvbnNlbnQuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBkYXRhUHJpbmNpcGFsSWQ6IHBhdGhJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBidXNpbmVzc1Byb2Nlc3NJZDogdHJ1ZSxcclxuICAgICAgICBidXNpbmVzc1Byb2Nlc3M6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGNvZGU6IHRydWUgfSB9LFxyXG4gICAgICB9LFxyXG4gICAgICBkaXN0aW5jdDogW1wiYnVzaW5lc3NQcm9jZXNzSWRcIl0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBicE9wdGlvbnMgPSBicHMubWFwKChiKSA9PiAoe1xyXG4gICAgICBsYWJlbDogYi5idXNpbmVzc1Byb2Nlc3MubmFtZSxcclxuICAgICAgdmFsdWU6IGIuYnVzaW5lc3NQcm9jZXNzSWQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBiLmJ1c2luZXNzUHJvY2Vzcy5jb2RlLFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tIDIuIFBBUlNFIEZJTFRFUlMgLS0tXHJcbiAgY29uc3Qgbm9ybWFsaXplQXJyYXkgPSAodmFsOiBzdHJpbmcgfCBzdHJpbmdbXSB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gICAgaWYgKCF2YWwpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsIDogW3ZhbF07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyRHBJZHMgPSBub3JtYWxpemVBcnJheShzZWFyY2hQYXJhbXNbXCJkYXRhX3ByaW5jaXBhbF9pZHNbXVwiXSk7XHJcbiAgY29uc3QgZmlsdGVyUmVmSWRzID0gbm9ybWFsaXplQXJyYXkoc2VhcmNoUGFyYW1zW1wicmVmZXJlbmNlX2lkc1tdXCJdKTtcclxuICBjb25zdCBmaWx0ZXJCcElkcyA9IG5vcm1hbGl6ZUFycmF5KHNlYXJjaFBhcmFtc1tcImJ1c2luZXNzX3Byb2Nlc3NfaWRzW11cIl0pO1xyXG5cclxuICBjb25zdCBkYXRlRmlsdGVyOiBQcmlzbWEuRGF0ZVRpbWVGaWx0ZXIgfCB1bmRlZmluZWQgPVxyXG4gICAgc3RhcnRfZGF0ZSB8fCBlbmRfZGF0ZSA/IHt9IDogdW5kZWZpbmVkO1xyXG4gIGlmIChkYXRlRmlsdGVyKSB7XHJcbiAgICBpZiAoc3RhcnRfZGF0ZSkgZGF0ZUZpbHRlci5ndGUgPSBuZXcgRGF0ZShzdGFydF9kYXRlKTtcclxuICAgIGlmIChlbmRfZGF0ZSkge1xyXG4gICAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZShlbmRfZGF0ZSk7XHJcbiAgICAgIGVuZC5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xyXG4gICAgICBkYXRlRmlsdGVyLmx0ZSA9IGVuZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLSAzLiBCVUlMRCBTSEFSRUQgV0hFUkUgQ0xBVVNFIC0tLVxyXG4gIC8vIFdlIGJ1aWxkIG9uZSAnQ29uc2VudFdoZXJlSW5wdXQnIG9iamVjdCB0byBlbnN1cmUgQ09OU0lTVEVOQ1kgYmV0d2VlblxyXG4gIC8vIHRoZSBUaW1lbGluZSAoQXVkaXRUcmFpbCkgYW5kIHRoZSBSZWNlaXB0IERyb3Bkb3duIChDb25zZW50cykuXHJcblxyXG4gIGNvbnN0IGNvbnNlbnRXaGVyZTogUHJpc21hLkNvbnNlbnRXaGVyZUlucHV0ID0ge307XHJcblxyXG4gIC8vIEJhc2UgQ29udGV4dCAoUmVmZXJlbmNlIHZzIERhdGEgUHJpbmNpcGFsKVxyXG4gIGlmICh0eXBlID09PSBcInJlZmVyZW5jZV9pZFwiKSB7XHJcbiAgICBjb25zZW50V2hlcmUucmVmZXJlbmNlSWQgPSBwYXRoSWQ7XHJcbiAgICAvLyBBcHBseSBEYXRhIFByaW5jaXBhbCBGaWx0ZXIgaWYgc2VsZWN0ZWRcclxuICAgIGlmIChmaWx0ZXJEcElkcykge1xyXG4gICAgICBjb25zZW50V2hlcmUuZGF0YVByaW5jaXBhbElkID0geyBpbjogZmlsdGVyRHBJZHMgfTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc2VudFdoZXJlLmRhdGFQcmluY2lwYWxJZCA9IHBhdGhJZDtcclxuICAgIC8vIEFwcGx5IFJlZmVyZW5jZSBJRCBGaWx0ZXIgaWYgc2VsZWN0ZWRcclxuICAgIGlmIChmaWx0ZXJSZWZJZHMpIHtcclxuICAgICAgY29uc2VudFdoZXJlLnJlZmVyZW5jZUlkID0geyBpbjogZmlsdGVyUmVmSWRzIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBcHBseSBCdXNpbmVzcyBQcm9jZXNzIEZpbHRlclxyXG4gIGlmIChmaWx0ZXJCcElkcykge1xyXG4gICAgY29uc2VudFdoZXJlLmJ1c2luZXNzUHJvY2Vzc0lkID0geyBpbjogZmlsdGVyQnBJZHMgfTtcclxuICB9XHJcblxyXG4gIC8vIC0tLSA0LiBGRVRDSCBUSU1FTElORSAoQVVESVQgVFJBSUxTKSAtLS1cclxuICBjb25zdCBhdWRpdFRyYWlscyA9IGF3YWl0IHByaXNtYS5jb25zZW50QXVkaXRUcmFpbC5maW5kTWFueSh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICAvLyBXZSBmaWx0ZXIgdGhlIGF1ZGl0IHRyYWlsIHZpYSB0aGUgcmVsYXRpb24gdG8gQ29uc2VudCB1c2luZyB0aGUgc2hhcmVkIGxvZ2ljXHJcbiAgICAgIGNvbnNlbnQ6IGNvbnNlbnRXaGVyZSxcclxuICAgICAgLi4uKGRhdGVGaWx0ZXIgJiYgeyB0aW1lc3RhbXA6IGRhdGVGaWx0ZXIgfSksXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZToge1xyXG4gICAgICBjb25zZW50OiB7XHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgY29uc2VudFB1cnBvc2U6IHRydWUsXHJcbiAgICAgICAgICBwcm9jZXNzaW5nUHVycG9zZTogdHJ1ZSxcclxuICAgICAgICAgIGJ1c2luZXNzUHJvY2VzczogeyBpbmNsdWRlOiB7IGJ1c2luZXNzVW5pdDogdHJ1ZSB9IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvcmRlckJ5OiB7IHRpbWVzdGFtcDogXCJkZXNjXCIgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gLS0tIDUuIFRSQU5TRk9STSBUSU1FTElORSBEQVRBIC0tLVxyXG4gIGNvbnN0IHRpbWVsaW5lRXZlbnRzOiBUaW1lbGluZUV2ZW50W10gPSBbXTtcclxuICBjb25zdCBncm91cGVkQXVkaXRzOiBSZWNvcmQ8c3RyaW5nLCB0eXBlb2YgYXVkaXRUcmFpbHM+ID0ge307XHJcblxyXG4gIGF1ZGl0VHJhaWxzLmZvckVhY2goKHRyYWlsKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lS2V5ID0gdHJhaWwudGltZXN0YW1wLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTYpO1xyXG4gICAgY29uc3Qgc2VydmljZUtleSA9IHRyYWlsLmNvbnNlbnQuYnVzaW5lc3NQcm9jZXNzSWQ7XHJcbiAgICBjb25zdCBhY3Rpb25LZXkgPSB0cmFpbC5hY3Rpb247XHJcblxyXG4gICAgY29uc3QgY29tcG9zaXRlS2V5ID0gYCR7dGltZUtleX18JHtzZXJ2aWNlS2V5fXwke2FjdGlvbktleX1gO1xyXG5cclxuICAgIGlmICghZ3JvdXBlZEF1ZGl0c1tjb21wb3NpdGVLZXldKSBncm91cGVkQXVkaXRzW2NvbXBvc2l0ZUtleV0gPSBbXTtcclxuICAgIGdyb3VwZWRBdWRpdHNbY29tcG9zaXRlS2V5XS5wdXNoKHRyYWlsKTtcclxuICB9KTtcclxuXHJcbiAgT2JqZWN0LmVudHJpZXMoZ3JvdXBlZEF1ZGl0cykuZm9yRWFjaCgoW2tleSwgZ3JvdXBdKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGdyb3VwWzBdO1xyXG4gICAgbGV0IHVpVHlwZTogXCJHUkFOVEVEXCIgfCBcIlJFVk9LRURcIiB8IFwiVVBEQVRFRFwiIHwgXCJFWFBJUkVEXCIgPSBcIlVQREFURURcIjtcclxuXHJcbiAgICBzd2l0Y2ggKGZpcnN0LmFjdGlvbikge1xyXG4gICAgICBjYXNlIFwiR1JBTlRFRFwiOlxyXG4gICAgICAgIHVpVHlwZSA9IFwiR1JBTlRFRFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiUkVWT0tFRFwiOlxyXG4gICAgICAgIHVpVHlwZSA9IFwiUkVWT0tFRFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiRVhQSVJFRFwiOlxyXG4gICAgICAgIHVpVHlwZSA9IFwiRVhQSVJFRFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiVkVSU0lPTl9VUERBVEVEXCI6XHJcbiAgICAgIGNhc2UgXCJSRU5FV0VEXCI6XHJcbiAgICAgIGNhc2UgXCJTVVBFUkNFREVEXCI6XHJcbiAgICAgICAgdWlUeXBlID0gXCJVUERBVEVEXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGltZWxpbmVFdmVudHMucHVzaCh7XHJcbiAgICAgIGlkOiBgYXVkaXRfJHtmaXJzdC5pZH1gLFxyXG4gICAgICBkYXRlOiBmaXJzdC50aW1lc3RhbXAudG9JU09TdHJpbmcoKSxcclxuICAgICAgdHlwZTogdWlUeXBlLFxyXG4gICAgICBkYXRhUHJpbmNpcGFsOiBmaXJzdC5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgIHNlcnZpY2VOYW1lOiBmaXJzdC5jb25zZW50LmJ1c2luZXNzUHJvY2Vzcy5uYW1lIHx8IFwiU2VydmljZVwiLFxyXG4gICAgICBjb3VudDogZ3JvdXAubGVuZ3RoLFxyXG4gICAgICBkZXRhaWxzOiB7XHJcbiAgICAgICAgc2VjdGlvbnM6IGdyb3VwLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgICAgIHRpdGxlOiBgUHVycG9zZSBvZiBQcm9jZXNzaW5nOiAke2l0ZW0uY29uc2VudC5wcm9jZXNzaW5nUHVycG9zZS5uYW1lfWAsXHJcbiAgICAgICAgICBjb25zZW50UHVycG9zZU5hbWU6IGBQdXJwb3NlIG9mIENvbnNlbnQ6ICR7aXRlbS5jb25zZW50LmNvbnNlbnRQdXJwb3NlLm5hbWV9YCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmNvbnNlbnQucHJvY2Vzc2luZ1B1cnBvc2UuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICAgIGlzRXNzZW50aWFsOiBmYWxzZSxcclxuICAgICAgICAgIGF0dHJpYnV0ZXM6IGl0ZW0uY29uc2VudC51c2VyQXR0cmlidXRlTmFtZXMubWFwKChuYW1lKSA9PiAoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBzdGF0dXM6IHVpVHlwZSA9PT0gXCJHUkFOVEVEXCIgPyBcImFkZGVkXCIgOiBcInJlbW92ZWRcIixcclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICB9KSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgdGltZWxpbmVFdmVudHMuc29ydChcclxuICAgIChhLCBiKSA9PiBuZXcgRGF0ZShiLmRhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGEuZGF0ZSkuZ2V0VGltZSgpXHJcbiAgKTtcclxuXHJcbiAgLy8gLS0tIDYuIEZFVENIIFRBQkxFIERBVEEgJiBSRUNFSVBUUyAtLS1cclxuICAvLyBVc2VzIHRoZSBleGFjdCBzYW1lIGBjb25zZW50V2hlcmVgIGZpbHRlcnMgdG8gZW5zdXJlIHRoZSBSZWNlaXB0IERyb3Bkb3duIG1hdGNoZXMgdGhlIGFwcGxpZWQgZmlsdGVycy5cclxuICBjb25zdCBjb25zZW50c0ZvclRhYmxlID0gYXdhaXQgcHJpc21hLmNvbnNlbnQuZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgLi4uY29uc2VudFdoZXJlLFxyXG4gICAgICAuLi4oZGF0ZUZpbHRlciAmJiB7IGluc2VydGVkQXQ6IGRhdGVGaWx0ZXIgfSksXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZToge1xyXG4gICAgICBwcm9jZXNzaW5nUHVycG9zZTogdHJ1ZSxcclxuICAgICAgYnVzaW5lc3NQcm9jZXNzOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIG9yZGVyQnk6IHsgaW5zZXJ0ZWRBdDogXCJkZXNjXCIgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdGFibGVEYXRhOiBDb25zZW50SGlzdG9yeVJvd1tdID0gY29uc2VudHNGb3JUYWJsZS5tYXAoKGMpID0+ICh7XHJcbiAgICBjb25zZW50SWQ6IGMucHVibGljSWQsXHJcbiAgICByZWZlcmVuY2VJZDogYy5yZWZlcmVuY2VJZCB8fCBcIlwiLFxyXG4gICAgZGF0YVByaW5jaXBhbElkOiBjLmRhdGFQcmluY2lwYWxJZCxcclxuICAgIGNvbnNlbnRlZEF0OiBjLmluc2VydGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIHB1cnBvc2VPZlByb2Nlc3Npbmc6IGMucHJvY2Vzc2luZ1B1cnBvc2UubmFtZSxcclxuICAgIHB1cnBvc2VDb2RlOiBjLnByb2Nlc3NpbmdQdXJwb3NlLmlkLnRvU3RyaW5nKCksXHJcbiAgICB1c2VyQXR0cmlidXRlczogYy51c2VyQXR0cmlidXRlTmFtZXMuam9pbihcIiwgXCIpLFxyXG4gICAgc3RhdHVzOiBjLnN0YXR1cyxcclxuICB9KSk7XHJcblxyXG4gIC8vIC0tLSA3LiBFWFRSQUNUIFVOSVFVRSBSRUNFSVBUIFBBSVJTIC0tLVxyXG4gIGNvbnN0IHJlY2VpcHRNYXAgPSBuZXcgTWFwPHN0cmluZywgUmVjZWlwdE9wdGlvbj4oKTtcclxuXHJcbiAgY29uc2VudHNGb3JUYWJsZS5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICBjb25zdCBrZXkgPSBgJHtjLnJlZmVyZW5jZUlkfXwke2MuZGF0YVByaW5jaXBhbElkfXwke2MuYnVzaW5lc3NQcm9jZXNzLmNvZGV9fCR7Yy5idXNpbmVzc1Byb2Nlc3MudmVyc2lvbn1gO1xyXG5cclxuICAgIGlmICghcmVjZWlwdE1hcC5oYXMoa2V5KSkge1xyXG4gICAgICByZWNlaXB0TWFwLnNldChrZXksIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogYy5yZWZlcmVuY2VJZCB8fCBcIlwiLFxyXG4gICAgICAgIGRhdGFQcmluY2lwYWxJZDogYy5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgICAgcHJvY2Vzc0NvZGU6IGMuYnVzaW5lc3NQcm9jZXNzLmNvZGUsXHJcbiAgICAgICAgdmVyc2lvbjogYy5idXNpbmVzc1Byb2Nlc3MudmVyc2lvbixcclxuICAgICAgICBsYXN0VXBkYXRlZDogYy51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlY2VpcHRPcHRpb25zID0gQXJyYXkuZnJvbShyZWNlaXB0TWFwLnZhbHVlcygpKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGV2ZW50czogdGltZWxpbmVFdmVudHMsXHJcbiAgICB0YWJsZURhdGEsXHJcbiAgICByZWZlcmVuY2VJZDogcGF0aElkLFxyXG4gICAgZHJvcGRvd25PcHRpb25zLFxyXG4gICAgYnBPcHRpb25zLFxyXG4gICAgcmVjZWlwdE9wdGlvbnMsXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHNpZ25lZCBVUkwgZm9yIGRvd25sb2FkaW5nIHRoZSBKU09OIGFydGlmYWN0LlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlQXJ0aWZhY3REb3dubG9hZFVybChvcHRpb246IFJlY2VpcHRPcHRpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IFN0b3JhZ2VGYWN0b3J5LmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgLy8gMS4gQ29uc3RydWN0IHRoZSBmaWxlIHBhdGggKE9iamVjdCBLZXkpIG1hbnVhbGx5IGhlcmUuXHJcbiAgICAvLyBUaGlzIG1hdGNoZXMgdGhlIGZvcm1hdDogbWVpdHkvYXJ0aWZhY3RzL3ticF9jb2RlfS17cmVmX2lkfS17ZHBfaWR9Lmpzb25cclxuICAgIGNvbnN0IG9iamVjdE5hbWUgPSBgbWVpdHkvYXJ0aWZhY3RzLyR7b3B0aW9uLnByb2Nlc3NDb2RlfS0ke29wdGlvbi5yZWZlcmVuY2VJZH0tJHtvcHRpb24uZGF0YVByaW5jaXBhbElkfS5qc29uYDtcclxuXHJcbiAgICAvLyAyLiBVc2UgdGhlIGdlbmVyaWMgZ2V0VXJsIG1ldGhvZCBwcm92aWRlZCBieSB0aGUgU3RvcmFnZUFkYXB0ZXIgaW50ZXJmYWNlXHJcbiAgICAvLyBQYXNzaW5nIDkwMCAoc2Vjb25kcykgZm9yIDE1IG1pbnV0ZXMgZXhwaXJ5XHJcbiAgICBjb25zdCB1cmwgPSBhd2FpdCBzdG9yYWdlLmdldFVybChvYmplY3ROYW1lLCA5MDApO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVybCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2VuZXJhdGUgZG93bmxvYWQgVVJMOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gZ2VuZXJhdGUgZG93bmxvYWQgbGlua1wiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGZXRjaGVzIHRoZSBpZGVudGlmaWVycyByZXF1aXJlZCB0byB2aWV3IHRoZSBSZWNlaXB0IGluIHRoZSBDTVMuXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjZWlwdFZpZXdEZXRhaWxzKG9wdGlvbjogUmVjZWlwdE9wdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBidXNpbmVzc1Byb2Nlc3MgPSBhd2FpdCBwcmlzbWEuYnVzaW5lc3NQcm9jZXNzLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGNvZGVfdmVyc2lvbjoge1xyXG4gICAgICAgICAgY29kZTogb3B0aW9uLnByb2Nlc3NDb2RlLFxyXG4gICAgICAgICAgdmVyc2lvbjogb3B0aW9uLnZlcnNpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0OiB7IGlkOiB0cnVlIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWJ1c2luZXNzUHJvY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQnVzaW5lc3MgUHJvY2VzcyBub3QgZm91bmRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdGljZSA9IGF3YWl0IHByaXNtYS5ub3RpY2UuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgbm90aWNlX2FjY2VwdGVkX3VuaXF1ZV9pbmRleDoge1xyXG4gICAgICAgICAgcmVmZXJlbmNlSWQ6IG9wdGlvbi5yZWZlcmVuY2VJZCxcclxuICAgICAgICAgIGRhdGFQcmluY2lwYWxJZDogb3B0aW9uLmRhdGFQcmluY2lwYWxJZCxcclxuICAgICAgICAgIGJ1c2luZXNzUHJvY2Vzc0lkOiBidXNpbmVzc1Byb2Nlc3MuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgcHVibGljSWQ6IHRydWUsXHJcbiAgICAgICAgZGF0YVByaW5jaXBhbElkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFub3RpY2UpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlY2VpcHQvTm90aWNlIG5vdCBmb3VuZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgbm90aWNlUHVibGljSWQ6IG5vdGljZS5wdWJsaWNJZCxcclxuICAgICAgYWNjZXNzVG9rZW46IG5vdGljZS5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyByZWNlaXB0IGRldGFpbHM6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gcmV0cmlldmUgcmVjZWlwdCBkZXRhaWxzLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjZWlwdERhdGFGb3JNb2RhbChvcHRpb246IFJlY2VpcHRPcHRpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gVXNlIHRoZSBzYW1lIGxvZ2ljIHlvdSB1c2VkIHRvIGdldCBJRHMsIGJ1dCByZXRyaWV2ZSB0aGUgZnVsbCBkYXRhIG9iamVjdFxyXG4gICAgLy8gQXNzdW1pbmcgJ29wdGlvbicgY29udGFpbnMgdGhlIG5lY2Vzc2FyeSBJRHMgdG8gZmluZCB0aGUgbm90aWNlUHVibGljSWRcclxuICAgIC8vIG9yIGlmIHlvdSBjYW4gZGVyaXZlIHRoZSBJRCBuZWVkZWQgZm9yIGdlbmVyYXRlQ29uc2VudFJlY2VpcHQ6XHJcblxyXG4gICAgLy8gMS4gRmV0Y2ggdGhlIHB1YmxpYyBJRCAoUmV1c2UgeW91ciBleGlzdGluZyBsb2dpYyBmcm9tIGdldFJlY2VpcHRWaWV3RGV0YWlscylcclxuICAgIGNvbnN0IHsgbm90aWNlUHVibGljSWQgfSA9IGF3YWl0IGdldFJlY2VpcHRWaWV3RGV0YWlscyhvcHRpb24pOyAvLyBkZXRhaWxzIGxvZ2ljXHJcblxyXG4gICAgaWYgKCFub3RpY2VQdWJsaWNJZCkgdGhyb3cgbmV3IEVycm9yKFwiTm90aWNlIElEIG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAvLyAyLiBHZW5lcmF0ZSB0aGUgYWN0dWFsIHJlY2VpcHQgSlNPTiBkYXRhXHJcbiAgICBjb25zdCByZWNlaXB0RGF0YSA9IGF3YWl0IGdlbmVyYXRlQ29uc2VudFJlY2VpcHQobm90aWNlUHVibGljSWQpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlY2VpcHREYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHJlY2VpcHQgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcbmltcG9ydCB7IGdlbmVyYXRlQXJ0aWZhY3RQYXlsb2FkIH0gZnJvbSBcIkAvbGliL3NlcnZpY2VzL2FydGlmYWN0LWNyZWF0aW9uLXNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcnRpZmFjdERhdGEob3B0aW9uOiBSZWNlaXB0T3B0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIEdlbmVyYXRlIHRoZSBDb25zZW50IEFydGlmYWN0IG9uLXRoZS1mbHlcclxuICAgIC8vIFRoaXMgYWxsb3dzIGRvd25sb2FkaW5nIGV2ZW4gaWYgdGhlIGZpbGUgaXMgbWlzc2luZyBmcm9tIHN0b3JhZ2UgKGUuZy4gbG9jYWwgZGV2KVxyXG4gICAgY29uc3QgYXJ0aWZhY3REYXRhID0gYXdhaXQgZ2VuZXJhdGVBcnRpZmFjdFBheWxvYWQoXHJcbiAgICAgIG9wdGlvbi5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgIG9wdGlvbi5yZWZlcmVuY2VJZCB8fCBcIlJFRl9VTktOT1dOXCIsXHJcbiAgICAgIG9wdGlvbi5wcm9jZXNzQ29kZVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBhcnRpZmFjdERhdGEgfTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2VuZXJhdGluZyBhcnRpZmFjdCBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGdlbmVyYXRlIGFydGlmYWN0LlwiIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoid1VBdUNzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/cms/data-fiduciary/consent-timeline/[id]/data:eda265 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ccf53ae5aa2e92f13082de398f1417c8c2bde319":"getReceiptDataForModal"},"app/cms/data-fiduciary/consent-timeline/[id]/actions.ts",""] */ __turbopack_context__.s([
    "getReceiptDataForModal",
    ()=>getReceiptDataForModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getReceiptDataForModal = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40ccf53ae5aa2e92f13082de398f1417c8c2bde319", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getReceiptDataForModal"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuLyoqXHJcbiAqIE9wZW4gQmhhcmF0IERpZ2l0YWwgQ29uc2VudCBieSBJRGZ5XHJcbiAqIENvcHlyaWdodCAoYykgMjAyNSBCYWxkb3IgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCAoSURmeSlcclxuICogXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFByaXZ5IFB1YmxpYyBMaWNlbnNlLlxyXG4gKiBTZWUgTElDRU5TRS5tZCBmb3IgdGhlIGZ1bGwgdGVybXMgb2YgdXNlLlxyXG4gKiBcclxuICogVW5hdXRob3JpemVkIGNvcHlpbmcsIG1vZGlmaWNhdGlvbiwgZGlzdHJpYnV0aW9uLCBvciBjb21tZXJjaWFsIHVzZVxyXG4gKiBpcyBzdHJpY3RseSBwcm9oaWJpdGVkIHdpdGhvdXQgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uIGZyb20gSURmeS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQsIFByaXNtYSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIFRpbWVsaW5lRXZlbnQsXHJcbiAgQ29uc2VudEhpc3RvcnlSb3csXHJcbiAgSGlzdG9yeVJlc3BvbnNlLFxyXG4gIEZpbHRlck9wdGlvbixcclxuICBSZWNlaXB0T3B0aW9uLFxyXG59IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIkAvbGliL3N0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlQ29uc2VudFJlY2VpcHQgfSBmcm9tIFwiQC9saWIvc2VydmljZXMvY29uc2VudC1yZWNlaXB0LXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RvcmFnZUZhY3RvcnkgfSBmcm9tIFwiQC9saWIvc2VydmljZXMvc3RvcmFnZS9zdG9yYWdlLWZhY3RvcnlcIjtcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbnR5cGUgSGlzdG9yeVNlYXJjaFBhcmFtcyA9IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgXCJkYXRhX3ByaW5jaXBhbF9pZHNbXVwiPzogc3RyaW5nW10gfCBzdHJpbmc7XHJcbiAgXCJyZWZlcmVuY2VfaWRzW11cIj86IHN0cmluZ1tdIHwgc3RyaW5nO1xyXG4gIFwiYnVzaW5lc3NfcHJvY2Vzc19pZHNbXVwiPzogc3RyaW5nW10gfCBzdHJpbmc7XHJcbiAgc3RhcnRfZGF0ZT86IHN0cmluZztcclxuICBlbmRfZGF0ZT86IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn07XHJcblxyXG4vKipcclxuICogRmV0Y2hlcyB0aGUgZGV0YWlsZWQgaGlzdG9yeSBmb3IgdGhlIFRpbWVsaW5lIGFuZCBUYWJsZSB2aWV3cy5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb25zZW50SGlzdG9yeURldGFpbChcclxuICBwYXRoSWQ6IHN0cmluZyxcclxuICBzZWFyY2hQYXJhbXM6IEhpc3RvcnlTZWFyY2hQYXJhbXNcclxuKTogUHJvbWlzZTxIaXN0b3J5UmVzcG9uc2U+IHtcclxuICBjb25zdCB7IHR5cGUsIHN0YXJ0X2RhdGUsIGVuZF9kYXRlIH0gPSBzZWFyY2hQYXJhbXM7XHJcblxyXG4gIGlmICghdHlwZSB8fCAodHlwZSAhPT0gXCJyZWZlcmVuY2VfaWRcIiAmJiB0eXBlICE9PSBcImRhdGFfcHJpbmNpcGFsX2lkXCIpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9yIG1pc3NpbmcgdHlwZSBwYXJhbWV0ZXIuXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tIDEuIEZFVENIIERST1BET1dOIEZJTFRFUiBPUFRJT05TIChVbmZpbHRlcmVkIGxpc3QgZm9yIHRoZSBVSSkgLS0tXHJcblxyXG4gIGxldCBkcm9wZG93bk9wdGlvbnM6IEZpbHRlck9wdGlvbltdID0gW107XHJcbiAgbGV0IGJwT3B0aW9uczogRmlsdGVyT3B0aW9uW10gPSBbXTtcclxuXHJcbiAgaWYgKHR5cGUgPT09IFwicmVmZXJlbmNlX2lkXCIpIHtcclxuICAgIC8vIDEuIERhdGEgUHJpbmNpcGFsc1xyXG4gICAgY29uc3QgZHBzID0gYXdhaXQgcHJpc21hLm5vdGljZS5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHJlZmVyZW5jZUlkOiBwYXRoSWQgfSxcclxuICAgICAgc2VsZWN0OiB7IGRhdGFQcmluY2lwYWxJZDogdHJ1ZSB9LFxyXG4gICAgICBkaXN0aW5jdDogW1wiZGF0YVByaW5jaXBhbElkXCJdLFxyXG4gICAgfSk7XHJcbiAgICBkcm9wZG93bk9wdGlvbnMgPSBkcHMubWFwKChkKSA9PiAoe1xyXG4gICAgICBsYWJlbDogZC5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgIHZhbHVlOiBkLmRhdGFQcmluY2lwYWxJZCxcclxuICAgIH0pKTtcclxuXHJcbiAgICAvLyAyLiBCdXNpbmVzcyBQcm9jZXNzZXNcclxuICAgIGNvbnN0IGJwcyA9IGF3YWl0IHByaXNtYS5jb25zZW50LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgcmVmZXJlbmNlSWQ6IHBhdGhJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBidXNpbmVzc1Byb2Nlc3NJZDogdHJ1ZSxcclxuICAgICAgICBidXNpbmVzc1Byb2Nlc3M6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGNvZGU6IHRydWUgfSB9LFxyXG4gICAgICB9LFxyXG4gICAgICBkaXN0aW5jdDogW1wiYnVzaW5lc3NQcm9jZXNzSWRcIl0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBicE9wdGlvbnMgPSBicHMubWFwKChiKSA9PiAoe1xyXG4gICAgICBsYWJlbDogYi5idXNpbmVzc1Byb2Nlc3MubmFtZSxcclxuICAgICAgdmFsdWU6IGIuYnVzaW5lc3NQcm9jZXNzSWQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBiLmJ1c2luZXNzUHJvY2Vzcy5jb2RlLFxyXG4gICAgfSkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyAxLiBSZWZlcmVuY2VzXHJcbiAgICBjb25zdCByZWZzID0gYXdhaXQgcHJpc21hLm5vdGljZS5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IGRhdGFQcmluY2lwYWxJZDogcGF0aElkIH0sXHJcbiAgICAgIHNlbGVjdDogeyByZWZlcmVuY2VJZDogdHJ1ZSB9LFxyXG4gICAgICBkaXN0aW5jdDogW1wicmVmZXJlbmNlSWRcIl0sXHJcbiAgICB9KTtcclxuICAgIGRyb3Bkb3duT3B0aW9ucyA9IHJlZnNcclxuICAgICAgLmZpbHRlcigocikgPT4gci5yZWZlcmVuY2VJZClcclxuICAgICAgLm1hcCgocikgPT4gKHsgbGFiZWw6IHIucmVmZXJlbmNlSWQhLCB2YWx1ZTogci5yZWZlcmVuY2VJZCEgfSkpO1xyXG5cclxuICAgIC8vIDIuIEJ1c2luZXNzIFByb2Nlc3Nlc1xyXG4gICAgY29uc3QgYnBzID0gYXdhaXQgcHJpc21hLmNvbnNlbnQuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBkYXRhUHJpbmNpcGFsSWQ6IHBhdGhJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBidXNpbmVzc1Byb2Nlc3NJZDogdHJ1ZSxcclxuICAgICAgICBidXNpbmVzc1Byb2Nlc3M6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGNvZGU6IHRydWUgfSB9LFxyXG4gICAgICB9LFxyXG4gICAgICBkaXN0aW5jdDogW1wiYnVzaW5lc3NQcm9jZXNzSWRcIl0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBicE9wdGlvbnMgPSBicHMubWFwKChiKSA9PiAoe1xyXG4gICAgICBsYWJlbDogYi5idXNpbmVzc1Byb2Nlc3MubmFtZSxcclxuICAgICAgdmFsdWU6IGIuYnVzaW5lc3NQcm9jZXNzSWQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBiLmJ1c2luZXNzUHJvY2Vzcy5jb2RlLFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tIDIuIFBBUlNFIEZJTFRFUlMgLS0tXHJcbiAgY29uc3Qgbm9ybWFsaXplQXJyYXkgPSAodmFsOiBzdHJpbmcgfCBzdHJpbmdbXSB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gICAgaWYgKCF2YWwpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsIDogW3ZhbF07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyRHBJZHMgPSBub3JtYWxpemVBcnJheShzZWFyY2hQYXJhbXNbXCJkYXRhX3ByaW5jaXBhbF9pZHNbXVwiXSk7XHJcbiAgY29uc3QgZmlsdGVyUmVmSWRzID0gbm9ybWFsaXplQXJyYXkoc2VhcmNoUGFyYW1zW1wicmVmZXJlbmNlX2lkc1tdXCJdKTtcclxuICBjb25zdCBmaWx0ZXJCcElkcyA9IG5vcm1hbGl6ZUFycmF5KHNlYXJjaFBhcmFtc1tcImJ1c2luZXNzX3Byb2Nlc3NfaWRzW11cIl0pO1xyXG5cclxuICBjb25zdCBkYXRlRmlsdGVyOiBQcmlzbWEuRGF0ZVRpbWVGaWx0ZXIgfCB1bmRlZmluZWQgPVxyXG4gICAgc3RhcnRfZGF0ZSB8fCBlbmRfZGF0ZSA/IHt9IDogdW5kZWZpbmVkO1xyXG4gIGlmIChkYXRlRmlsdGVyKSB7XHJcbiAgICBpZiAoc3RhcnRfZGF0ZSkgZGF0ZUZpbHRlci5ndGUgPSBuZXcgRGF0ZShzdGFydF9kYXRlKTtcclxuICAgIGlmIChlbmRfZGF0ZSkge1xyXG4gICAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZShlbmRfZGF0ZSk7XHJcbiAgICAgIGVuZC5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xyXG4gICAgICBkYXRlRmlsdGVyLmx0ZSA9IGVuZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLSAzLiBCVUlMRCBTSEFSRUQgV0hFUkUgQ0xBVVNFIC0tLVxyXG4gIC8vIFdlIGJ1aWxkIG9uZSAnQ29uc2VudFdoZXJlSW5wdXQnIG9iamVjdCB0byBlbnN1cmUgQ09OU0lTVEVOQ1kgYmV0d2VlblxyXG4gIC8vIHRoZSBUaW1lbGluZSAoQXVkaXRUcmFpbCkgYW5kIHRoZSBSZWNlaXB0IERyb3Bkb3duIChDb25zZW50cykuXHJcblxyXG4gIGNvbnN0IGNvbnNlbnRXaGVyZTogUHJpc21hLkNvbnNlbnRXaGVyZUlucHV0ID0ge307XHJcblxyXG4gIC8vIEJhc2UgQ29udGV4dCAoUmVmZXJlbmNlIHZzIERhdGEgUHJpbmNpcGFsKVxyXG4gIGlmICh0eXBlID09PSBcInJlZmVyZW5jZV9pZFwiKSB7XHJcbiAgICBjb25zZW50V2hlcmUucmVmZXJlbmNlSWQgPSBwYXRoSWQ7XHJcbiAgICAvLyBBcHBseSBEYXRhIFByaW5jaXBhbCBGaWx0ZXIgaWYgc2VsZWN0ZWRcclxuICAgIGlmIChmaWx0ZXJEcElkcykge1xyXG4gICAgICBjb25zZW50V2hlcmUuZGF0YVByaW5jaXBhbElkID0geyBpbjogZmlsdGVyRHBJZHMgfTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc2VudFdoZXJlLmRhdGFQcmluY2lwYWxJZCA9IHBhdGhJZDtcclxuICAgIC8vIEFwcGx5IFJlZmVyZW5jZSBJRCBGaWx0ZXIgaWYgc2VsZWN0ZWRcclxuICAgIGlmIChmaWx0ZXJSZWZJZHMpIHtcclxuICAgICAgY29uc2VudFdoZXJlLnJlZmVyZW5jZUlkID0geyBpbjogZmlsdGVyUmVmSWRzIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBcHBseSBCdXNpbmVzcyBQcm9jZXNzIEZpbHRlclxyXG4gIGlmIChmaWx0ZXJCcElkcykge1xyXG4gICAgY29uc2VudFdoZXJlLmJ1c2luZXNzUHJvY2Vzc0lkID0geyBpbjogZmlsdGVyQnBJZHMgfTtcclxuICB9XHJcblxyXG4gIC8vIC0tLSA0LiBGRVRDSCBUSU1FTElORSAoQVVESVQgVFJBSUxTKSAtLS1cclxuICBjb25zdCBhdWRpdFRyYWlscyA9IGF3YWl0IHByaXNtYS5jb25zZW50QXVkaXRUcmFpbC5maW5kTWFueSh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICAvLyBXZSBmaWx0ZXIgdGhlIGF1ZGl0IHRyYWlsIHZpYSB0aGUgcmVsYXRpb24gdG8gQ29uc2VudCB1c2luZyB0aGUgc2hhcmVkIGxvZ2ljXHJcbiAgICAgIGNvbnNlbnQ6IGNvbnNlbnRXaGVyZSxcclxuICAgICAgLi4uKGRhdGVGaWx0ZXIgJiYgeyB0aW1lc3RhbXA6IGRhdGVGaWx0ZXIgfSksXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZToge1xyXG4gICAgICBjb25zZW50OiB7XHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgY29uc2VudFB1cnBvc2U6IHRydWUsXHJcbiAgICAgICAgICBwcm9jZXNzaW5nUHVycG9zZTogdHJ1ZSxcclxuICAgICAgICAgIGJ1c2luZXNzUHJvY2VzczogeyBpbmNsdWRlOiB7IGJ1c2luZXNzVW5pdDogdHJ1ZSB9IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvcmRlckJ5OiB7IHRpbWVzdGFtcDogXCJkZXNjXCIgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gLS0tIDUuIFRSQU5TRk9STSBUSU1FTElORSBEQVRBIC0tLVxyXG4gIGNvbnN0IHRpbWVsaW5lRXZlbnRzOiBUaW1lbGluZUV2ZW50W10gPSBbXTtcclxuICBjb25zdCBncm91cGVkQXVkaXRzOiBSZWNvcmQ8c3RyaW5nLCB0eXBlb2YgYXVkaXRUcmFpbHM+ID0ge307XHJcblxyXG4gIGF1ZGl0VHJhaWxzLmZvckVhY2goKHRyYWlsKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lS2V5ID0gdHJhaWwudGltZXN0YW1wLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTYpO1xyXG4gICAgY29uc3Qgc2VydmljZUtleSA9IHRyYWlsLmNvbnNlbnQuYnVzaW5lc3NQcm9jZXNzSWQ7XHJcbiAgICBjb25zdCBhY3Rpb25LZXkgPSB0cmFpbC5hY3Rpb247XHJcblxyXG4gICAgY29uc3QgY29tcG9zaXRlS2V5ID0gYCR7dGltZUtleX18JHtzZXJ2aWNlS2V5fXwke2FjdGlvbktleX1gO1xyXG5cclxuICAgIGlmICghZ3JvdXBlZEF1ZGl0c1tjb21wb3NpdGVLZXldKSBncm91cGVkQXVkaXRzW2NvbXBvc2l0ZUtleV0gPSBbXTtcclxuICAgIGdyb3VwZWRBdWRpdHNbY29tcG9zaXRlS2V5XS5wdXNoKHRyYWlsKTtcclxuICB9KTtcclxuXHJcbiAgT2JqZWN0LmVudHJpZXMoZ3JvdXBlZEF1ZGl0cykuZm9yRWFjaCgoW2tleSwgZ3JvdXBdKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGdyb3VwWzBdO1xyXG4gICAgbGV0IHVpVHlwZTogXCJHUkFOVEVEXCIgfCBcIlJFVk9LRURcIiB8IFwiVVBEQVRFRFwiIHwgXCJFWFBJUkVEXCIgPSBcIlVQREFURURcIjtcclxuXHJcbiAgICBzd2l0Y2ggKGZpcnN0LmFjdGlvbikge1xyXG4gICAgICBjYXNlIFwiR1JBTlRFRFwiOlxyXG4gICAgICAgIHVpVHlwZSA9IFwiR1JBTlRFRFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiUkVWT0tFRFwiOlxyXG4gICAgICAgIHVpVHlwZSA9IFwiUkVWT0tFRFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiRVhQSVJFRFwiOlxyXG4gICAgICAgIHVpVHlwZSA9IFwiRVhQSVJFRFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiVkVSU0lPTl9VUERBVEVEXCI6XHJcbiAgICAgIGNhc2UgXCJSRU5FV0VEXCI6XHJcbiAgICAgIGNhc2UgXCJTVVBFUkNFREVEXCI6XHJcbiAgICAgICAgdWlUeXBlID0gXCJVUERBVEVEXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGltZWxpbmVFdmVudHMucHVzaCh7XHJcbiAgICAgIGlkOiBgYXVkaXRfJHtmaXJzdC5pZH1gLFxyXG4gICAgICBkYXRlOiBmaXJzdC50aW1lc3RhbXAudG9JU09TdHJpbmcoKSxcclxuICAgICAgdHlwZTogdWlUeXBlLFxyXG4gICAgICBkYXRhUHJpbmNpcGFsOiBmaXJzdC5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgIHNlcnZpY2VOYW1lOiBmaXJzdC5jb25zZW50LmJ1c2luZXNzUHJvY2Vzcy5uYW1lIHx8IFwiU2VydmljZVwiLFxyXG4gICAgICBjb3VudDogZ3JvdXAubGVuZ3RoLFxyXG4gICAgICBkZXRhaWxzOiB7XHJcbiAgICAgICAgc2VjdGlvbnM6IGdyb3VwLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgICAgIHRpdGxlOiBgUHVycG9zZSBvZiBQcm9jZXNzaW5nOiAke2l0ZW0uY29uc2VudC5wcm9jZXNzaW5nUHVycG9zZS5uYW1lfWAsXHJcbiAgICAgICAgICBjb25zZW50UHVycG9zZU5hbWU6IGBQdXJwb3NlIG9mIENvbnNlbnQ6ICR7aXRlbS5jb25zZW50LmNvbnNlbnRQdXJwb3NlLm5hbWV9YCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmNvbnNlbnQucHJvY2Vzc2luZ1B1cnBvc2UuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICAgIGlzRXNzZW50aWFsOiBmYWxzZSxcclxuICAgICAgICAgIGF0dHJpYnV0ZXM6IGl0ZW0uY29uc2VudC51c2VyQXR0cmlidXRlTmFtZXMubWFwKChuYW1lKSA9PiAoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBzdGF0dXM6IHVpVHlwZSA9PT0gXCJHUkFOVEVEXCIgPyBcImFkZGVkXCIgOiBcInJlbW92ZWRcIixcclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICB9KSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgdGltZWxpbmVFdmVudHMuc29ydChcclxuICAgIChhLCBiKSA9PiBuZXcgRGF0ZShiLmRhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGEuZGF0ZSkuZ2V0VGltZSgpXHJcbiAgKTtcclxuXHJcbiAgLy8gLS0tIDYuIEZFVENIIFRBQkxFIERBVEEgJiBSRUNFSVBUUyAtLS1cclxuICAvLyBVc2VzIHRoZSBleGFjdCBzYW1lIGBjb25zZW50V2hlcmVgIGZpbHRlcnMgdG8gZW5zdXJlIHRoZSBSZWNlaXB0IERyb3Bkb3duIG1hdGNoZXMgdGhlIGFwcGxpZWQgZmlsdGVycy5cclxuICBjb25zdCBjb25zZW50c0ZvclRhYmxlID0gYXdhaXQgcHJpc21hLmNvbnNlbnQuZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgLi4uY29uc2VudFdoZXJlLFxyXG4gICAgICAuLi4oZGF0ZUZpbHRlciAmJiB7IGluc2VydGVkQXQ6IGRhdGVGaWx0ZXIgfSksXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZToge1xyXG4gICAgICBwcm9jZXNzaW5nUHVycG9zZTogdHJ1ZSxcclxuICAgICAgYnVzaW5lc3NQcm9jZXNzOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIG9yZGVyQnk6IHsgaW5zZXJ0ZWRBdDogXCJkZXNjXCIgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdGFibGVEYXRhOiBDb25zZW50SGlzdG9yeVJvd1tdID0gY29uc2VudHNGb3JUYWJsZS5tYXAoKGMpID0+ICh7XHJcbiAgICBjb25zZW50SWQ6IGMucHVibGljSWQsXHJcbiAgICByZWZlcmVuY2VJZDogYy5yZWZlcmVuY2VJZCB8fCBcIlwiLFxyXG4gICAgZGF0YVByaW5jaXBhbElkOiBjLmRhdGFQcmluY2lwYWxJZCxcclxuICAgIGNvbnNlbnRlZEF0OiBjLmluc2VydGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIHB1cnBvc2VPZlByb2Nlc3Npbmc6IGMucHJvY2Vzc2luZ1B1cnBvc2UubmFtZSxcclxuICAgIHB1cnBvc2VDb2RlOiBjLnByb2Nlc3NpbmdQdXJwb3NlLmlkLnRvU3RyaW5nKCksXHJcbiAgICB1c2VyQXR0cmlidXRlczogYy51c2VyQXR0cmlidXRlTmFtZXMuam9pbihcIiwgXCIpLFxyXG4gICAgc3RhdHVzOiBjLnN0YXR1cyxcclxuICB9KSk7XHJcblxyXG4gIC8vIC0tLSA3LiBFWFRSQUNUIFVOSVFVRSBSRUNFSVBUIFBBSVJTIC0tLVxyXG4gIGNvbnN0IHJlY2VpcHRNYXAgPSBuZXcgTWFwPHN0cmluZywgUmVjZWlwdE9wdGlvbj4oKTtcclxuXHJcbiAgY29uc2VudHNGb3JUYWJsZS5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICBjb25zdCBrZXkgPSBgJHtjLnJlZmVyZW5jZUlkfXwke2MuZGF0YVByaW5jaXBhbElkfXwke2MuYnVzaW5lc3NQcm9jZXNzLmNvZGV9fCR7Yy5idXNpbmVzc1Byb2Nlc3MudmVyc2lvbn1gO1xyXG5cclxuICAgIGlmICghcmVjZWlwdE1hcC5oYXMoa2V5KSkge1xyXG4gICAgICByZWNlaXB0TWFwLnNldChrZXksIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogYy5yZWZlcmVuY2VJZCB8fCBcIlwiLFxyXG4gICAgICAgIGRhdGFQcmluY2lwYWxJZDogYy5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgICAgcHJvY2Vzc0NvZGU6IGMuYnVzaW5lc3NQcm9jZXNzLmNvZGUsXHJcbiAgICAgICAgdmVyc2lvbjogYy5idXNpbmVzc1Byb2Nlc3MudmVyc2lvbixcclxuICAgICAgICBsYXN0VXBkYXRlZDogYy51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlY2VpcHRPcHRpb25zID0gQXJyYXkuZnJvbShyZWNlaXB0TWFwLnZhbHVlcygpKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGV2ZW50czogdGltZWxpbmVFdmVudHMsXHJcbiAgICB0YWJsZURhdGEsXHJcbiAgICByZWZlcmVuY2VJZDogcGF0aElkLFxyXG4gICAgZHJvcGRvd25PcHRpb25zLFxyXG4gICAgYnBPcHRpb25zLFxyXG4gICAgcmVjZWlwdE9wdGlvbnMsXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHNpZ25lZCBVUkwgZm9yIGRvd25sb2FkaW5nIHRoZSBKU09OIGFydGlmYWN0LlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlQXJ0aWZhY3REb3dubG9hZFVybChvcHRpb246IFJlY2VpcHRPcHRpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IFN0b3JhZ2VGYWN0b3J5LmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgLy8gMS4gQ29uc3RydWN0IHRoZSBmaWxlIHBhdGggKE9iamVjdCBLZXkpIG1hbnVhbGx5IGhlcmUuXHJcbiAgICAvLyBUaGlzIG1hdGNoZXMgdGhlIGZvcm1hdDogbWVpdHkvYXJ0aWZhY3RzL3ticF9jb2RlfS17cmVmX2lkfS17ZHBfaWR9Lmpzb25cclxuICAgIGNvbnN0IG9iamVjdE5hbWUgPSBgbWVpdHkvYXJ0aWZhY3RzLyR7b3B0aW9uLnByb2Nlc3NDb2RlfS0ke29wdGlvbi5yZWZlcmVuY2VJZH0tJHtvcHRpb24uZGF0YVByaW5jaXBhbElkfS5qc29uYDtcclxuXHJcbiAgICAvLyAyLiBVc2UgdGhlIGdlbmVyaWMgZ2V0VXJsIG1ldGhvZCBwcm92aWRlZCBieSB0aGUgU3RvcmFnZUFkYXB0ZXIgaW50ZXJmYWNlXHJcbiAgICAvLyBQYXNzaW5nIDkwMCAoc2Vjb25kcykgZm9yIDE1IG1pbnV0ZXMgZXhwaXJ5XHJcbiAgICBjb25zdCB1cmwgPSBhd2FpdCBzdG9yYWdlLmdldFVybChvYmplY3ROYW1lLCA5MDApO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVybCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2VuZXJhdGUgZG93bmxvYWQgVVJMOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gZ2VuZXJhdGUgZG93bmxvYWQgbGlua1wiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGZXRjaGVzIHRoZSBpZGVudGlmaWVycyByZXF1aXJlZCB0byB2aWV3IHRoZSBSZWNlaXB0IGluIHRoZSBDTVMuXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjZWlwdFZpZXdEZXRhaWxzKG9wdGlvbjogUmVjZWlwdE9wdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBidXNpbmVzc1Byb2Nlc3MgPSBhd2FpdCBwcmlzbWEuYnVzaW5lc3NQcm9jZXNzLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGNvZGVfdmVyc2lvbjoge1xyXG4gICAgICAgICAgY29kZTogb3B0aW9uLnByb2Nlc3NDb2RlLFxyXG4gICAgICAgICAgdmVyc2lvbjogb3B0aW9uLnZlcnNpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0OiB7IGlkOiB0cnVlIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWJ1c2luZXNzUHJvY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQnVzaW5lc3MgUHJvY2VzcyBub3QgZm91bmRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdGljZSA9IGF3YWl0IHByaXNtYS5ub3RpY2UuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgbm90aWNlX2FjY2VwdGVkX3VuaXF1ZV9pbmRleDoge1xyXG4gICAgICAgICAgcmVmZXJlbmNlSWQ6IG9wdGlvbi5yZWZlcmVuY2VJZCxcclxuICAgICAgICAgIGRhdGFQcmluY2lwYWxJZDogb3B0aW9uLmRhdGFQcmluY2lwYWxJZCxcclxuICAgICAgICAgIGJ1c2luZXNzUHJvY2Vzc0lkOiBidXNpbmVzc1Byb2Nlc3MuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgcHVibGljSWQ6IHRydWUsXHJcbiAgICAgICAgZGF0YVByaW5jaXBhbElkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFub3RpY2UpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlY2VpcHQvTm90aWNlIG5vdCBmb3VuZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgbm90aWNlUHVibGljSWQ6IG5vdGljZS5wdWJsaWNJZCxcclxuICAgICAgYWNjZXNzVG9rZW46IG5vdGljZS5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyByZWNlaXB0IGRldGFpbHM6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gcmV0cmlldmUgcmVjZWlwdCBkZXRhaWxzLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjZWlwdERhdGFGb3JNb2RhbChvcHRpb246IFJlY2VpcHRPcHRpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gVXNlIHRoZSBzYW1lIGxvZ2ljIHlvdSB1c2VkIHRvIGdldCBJRHMsIGJ1dCByZXRyaWV2ZSB0aGUgZnVsbCBkYXRhIG9iamVjdFxyXG4gICAgLy8gQXNzdW1pbmcgJ29wdGlvbicgY29udGFpbnMgdGhlIG5lY2Vzc2FyeSBJRHMgdG8gZmluZCB0aGUgbm90aWNlUHVibGljSWRcclxuICAgIC8vIG9yIGlmIHlvdSBjYW4gZGVyaXZlIHRoZSBJRCBuZWVkZWQgZm9yIGdlbmVyYXRlQ29uc2VudFJlY2VpcHQ6XHJcblxyXG4gICAgLy8gMS4gRmV0Y2ggdGhlIHB1YmxpYyBJRCAoUmV1c2UgeW91ciBleGlzdGluZyBsb2dpYyBmcm9tIGdldFJlY2VpcHRWaWV3RGV0YWlscylcclxuICAgIGNvbnN0IHsgbm90aWNlUHVibGljSWQgfSA9IGF3YWl0IGdldFJlY2VpcHRWaWV3RGV0YWlscyhvcHRpb24pOyAvLyBkZXRhaWxzIGxvZ2ljXHJcblxyXG4gICAgaWYgKCFub3RpY2VQdWJsaWNJZCkgdGhyb3cgbmV3IEVycm9yKFwiTm90aWNlIElEIG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAvLyAyLiBHZW5lcmF0ZSB0aGUgYWN0dWFsIHJlY2VpcHQgSlNPTiBkYXRhXHJcbiAgICBjb25zdCByZWNlaXB0RGF0YSA9IGF3YWl0IGdlbmVyYXRlQ29uc2VudFJlY2VpcHQobm90aWNlUHVibGljSWQpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlY2VpcHREYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHJlY2VpcHQgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcbmltcG9ydCB7IGdlbmVyYXRlQXJ0aWZhY3RQYXlsb2FkIH0gZnJvbSBcIkAvbGliL3NlcnZpY2VzL2FydGlmYWN0LWNyZWF0aW9uLXNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcnRpZmFjdERhdGEob3B0aW9uOiBSZWNlaXB0T3B0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIEdlbmVyYXRlIHRoZSBDb25zZW50IEFydGlmYWN0IG9uLXRoZS1mbHlcclxuICAgIC8vIFRoaXMgYWxsb3dzIGRvd25sb2FkaW5nIGV2ZW4gaWYgdGhlIGZpbGUgaXMgbWlzc2luZyBmcm9tIHN0b3JhZ2UgKGUuZy4gbG9jYWwgZGV2KVxyXG4gICAgY29uc3QgYXJ0aWZhY3REYXRhID0gYXdhaXQgZ2VuZXJhdGVBcnRpZmFjdFBheWxvYWQoXHJcbiAgICAgIG9wdGlvbi5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgIG9wdGlvbi5yZWZlcmVuY2VJZCB8fCBcIlJFRl9VTktOT1dOXCIsXHJcbiAgICAgIG9wdGlvbi5wcm9jZXNzQ29kZVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBhcnRpZmFjdERhdGEgfTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2VuZXJhdGluZyBhcnRpZmFjdCBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGdlbmVyYXRlIGFydGlmYWN0LlwiIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoidVVBNFdzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/cms/data-fiduciary/consent-timeline/[id]/data:3ae5e5 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4063811c6d0c509c533b5563dfbbbcb8ca3688bbe1":"getArtifactData"},"app/cms/data-fiduciary/consent-timeline/[id]/actions.ts",""] */ __turbopack_context__.s([
    "getArtifactData",
    ()=>getArtifactData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getArtifactData = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4063811c6d0c509c533b5563dfbbbcb8ca3688bbe1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getArtifactData"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuLyoqXHJcbiAqIE9wZW4gQmhhcmF0IERpZ2l0YWwgQ29uc2VudCBieSBJRGZ5XHJcbiAqIENvcHlyaWdodCAoYykgMjAyNSBCYWxkb3IgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCAoSURmeSlcclxuICogXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFByaXZ5IFB1YmxpYyBMaWNlbnNlLlxyXG4gKiBTZWUgTElDRU5TRS5tZCBmb3IgdGhlIGZ1bGwgdGVybXMgb2YgdXNlLlxyXG4gKiBcclxuICogVW5hdXRob3JpemVkIGNvcHlpbmcsIG1vZGlmaWNhdGlvbiwgZGlzdHJpYnV0aW9uLCBvciBjb21tZXJjaWFsIHVzZVxyXG4gKiBpcyBzdHJpY3RseSBwcm9oaWJpdGVkIHdpdGhvdXQgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uIGZyb20gSURmeS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQsIFByaXNtYSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIFRpbWVsaW5lRXZlbnQsXHJcbiAgQ29uc2VudEhpc3RvcnlSb3csXHJcbiAgSGlzdG9yeVJlc3BvbnNlLFxyXG4gIEZpbHRlck9wdGlvbixcclxuICBSZWNlaXB0T3B0aW9uLFxyXG59IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIkAvbGliL3N0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlQ29uc2VudFJlY2VpcHQgfSBmcm9tIFwiQC9saWIvc2VydmljZXMvY29uc2VudC1yZWNlaXB0LXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RvcmFnZUZhY3RvcnkgfSBmcm9tIFwiQC9saWIvc2VydmljZXMvc3RvcmFnZS9zdG9yYWdlLWZhY3RvcnlcIjtcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbnR5cGUgSGlzdG9yeVNlYXJjaFBhcmFtcyA9IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgXCJkYXRhX3ByaW5jaXBhbF9pZHNbXVwiPzogc3RyaW5nW10gfCBzdHJpbmc7XHJcbiAgXCJyZWZlcmVuY2VfaWRzW11cIj86IHN0cmluZ1tdIHwgc3RyaW5nO1xyXG4gIFwiYnVzaW5lc3NfcHJvY2Vzc19pZHNbXVwiPzogc3RyaW5nW10gfCBzdHJpbmc7XHJcbiAgc3RhcnRfZGF0ZT86IHN0cmluZztcclxuICBlbmRfZGF0ZT86IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn07XHJcblxyXG4vKipcclxuICogRmV0Y2hlcyB0aGUgZGV0YWlsZWQgaGlzdG9yeSBmb3IgdGhlIFRpbWVsaW5lIGFuZCBUYWJsZSB2aWV3cy5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb25zZW50SGlzdG9yeURldGFpbChcclxuICBwYXRoSWQ6IHN0cmluZyxcclxuICBzZWFyY2hQYXJhbXM6IEhpc3RvcnlTZWFyY2hQYXJhbXNcclxuKTogUHJvbWlzZTxIaXN0b3J5UmVzcG9uc2U+IHtcclxuICBjb25zdCB7IHR5cGUsIHN0YXJ0X2RhdGUsIGVuZF9kYXRlIH0gPSBzZWFyY2hQYXJhbXM7XHJcblxyXG4gIGlmICghdHlwZSB8fCAodHlwZSAhPT0gXCJyZWZlcmVuY2VfaWRcIiAmJiB0eXBlICE9PSBcImRhdGFfcHJpbmNpcGFsX2lkXCIpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9yIG1pc3NpbmcgdHlwZSBwYXJhbWV0ZXIuXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tIDEuIEZFVENIIERST1BET1dOIEZJTFRFUiBPUFRJT05TIChVbmZpbHRlcmVkIGxpc3QgZm9yIHRoZSBVSSkgLS0tXHJcblxyXG4gIGxldCBkcm9wZG93bk9wdGlvbnM6IEZpbHRlck9wdGlvbltdID0gW107XHJcbiAgbGV0IGJwT3B0aW9uczogRmlsdGVyT3B0aW9uW10gPSBbXTtcclxuXHJcbiAgaWYgKHR5cGUgPT09IFwicmVmZXJlbmNlX2lkXCIpIHtcclxuICAgIC8vIDEuIERhdGEgUHJpbmNpcGFsc1xyXG4gICAgY29uc3QgZHBzID0gYXdhaXQgcHJpc21hLm5vdGljZS5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHJlZmVyZW5jZUlkOiBwYXRoSWQgfSxcclxuICAgICAgc2VsZWN0OiB7IGRhdGFQcmluY2lwYWxJZDogdHJ1ZSB9LFxyXG4gICAgICBkaXN0aW5jdDogW1wiZGF0YVByaW5jaXBhbElkXCJdLFxyXG4gICAgfSk7XHJcbiAgICBkcm9wZG93bk9wdGlvbnMgPSBkcHMubWFwKChkKSA9PiAoe1xyXG4gICAgICBsYWJlbDogZC5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgIHZhbHVlOiBkLmRhdGFQcmluY2lwYWxJZCxcclxuICAgIH0pKTtcclxuXHJcbiAgICAvLyAyLiBCdXNpbmVzcyBQcm9jZXNzZXNcclxuICAgIGNvbnN0IGJwcyA9IGF3YWl0IHByaXNtYS5jb25zZW50LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgcmVmZXJlbmNlSWQ6IHBhdGhJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBidXNpbmVzc1Byb2Nlc3NJZDogdHJ1ZSxcclxuICAgICAgICBidXNpbmVzc1Byb2Nlc3M6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGNvZGU6IHRydWUgfSB9LFxyXG4gICAgICB9LFxyXG4gICAgICBkaXN0aW5jdDogW1wiYnVzaW5lc3NQcm9jZXNzSWRcIl0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBicE9wdGlvbnMgPSBicHMubWFwKChiKSA9PiAoe1xyXG4gICAgICBsYWJlbDogYi5idXNpbmVzc1Byb2Nlc3MubmFtZSxcclxuICAgICAgdmFsdWU6IGIuYnVzaW5lc3NQcm9jZXNzSWQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBiLmJ1c2luZXNzUHJvY2Vzcy5jb2RlLFxyXG4gICAgfSkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyAxLiBSZWZlcmVuY2VzXHJcbiAgICBjb25zdCByZWZzID0gYXdhaXQgcHJpc21hLm5vdGljZS5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IGRhdGFQcmluY2lwYWxJZDogcGF0aElkIH0sXHJcbiAgICAgIHNlbGVjdDogeyByZWZlcmVuY2VJZDogdHJ1ZSB9LFxyXG4gICAgICBkaXN0aW5jdDogW1wicmVmZXJlbmNlSWRcIl0sXHJcbiAgICB9KTtcclxuICAgIGRyb3Bkb3duT3B0aW9ucyA9IHJlZnNcclxuICAgICAgLmZpbHRlcigocikgPT4gci5yZWZlcmVuY2VJZClcclxuICAgICAgLm1hcCgocikgPT4gKHsgbGFiZWw6IHIucmVmZXJlbmNlSWQhLCB2YWx1ZTogci5yZWZlcmVuY2VJZCEgfSkpO1xyXG5cclxuICAgIC8vIDIuIEJ1c2luZXNzIFByb2Nlc3Nlc1xyXG4gICAgY29uc3QgYnBzID0gYXdhaXQgcHJpc21hLmNvbnNlbnQuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBkYXRhUHJpbmNpcGFsSWQ6IHBhdGhJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBidXNpbmVzc1Byb2Nlc3NJZDogdHJ1ZSxcclxuICAgICAgICBidXNpbmVzc1Byb2Nlc3M6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGNvZGU6IHRydWUgfSB9LFxyXG4gICAgICB9LFxyXG4gICAgICBkaXN0aW5jdDogW1wiYnVzaW5lc3NQcm9jZXNzSWRcIl0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBicE9wdGlvbnMgPSBicHMubWFwKChiKSA9PiAoe1xyXG4gICAgICBsYWJlbDogYi5idXNpbmVzc1Byb2Nlc3MubmFtZSxcclxuICAgICAgdmFsdWU6IGIuYnVzaW5lc3NQcm9jZXNzSWQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBiLmJ1c2luZXNzUHJvY2Vzcy5jb2RlLFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tIDIuIFBBUlNFIEZJTFRFUlMgLS0tXHJcbiAgY29uc3Qgbm9ybWFsaXplQXJyYXkgPSAodmFsOiBzdHJpbmcgfCBzdHJpbmdbXSB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gICAgaWYgKCF2YWwpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsIDogW3ZhbF07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyRHBJZHMgPSBub3JtYWxpemVBcnJheShzZWFyY2hQYXJhbXNbXCJkYXRhX3ByaW5jaXBhbF9pZHNbXVwiXSk7XHJcbiAgY29uc3QgZmlsdGVyUmVmSWRzID0gbm9ybWFsaXplQXJyYXkoc2VhcmNoUGFyYW1zW1wicmVmZXJlbmNlX2lkc1tdXCJdKTtcclxuICBjb25zdCBmaWx0ZXJCcElkcyA9IG5vcm1hbGl6ZUFycmF5KHNlYXJjaFBhcmFtc1tcImJ1c2luZXNzX3Byb2Nlc3NfaWRzW11cIl0pO1xyXG5cclxuICBjb25zdCBkYXRlRmlsdGVyOiBQcmlzbWEuRGF0ZVRpbWVGaWx0ZXIgfCB1bmRlZmluZWQgPVxyXG4gICAgc3RhcnRfZGF0ZSB8fCBlbmRfZGF0ZSA/IHt9IDogdW5kZWZpbmVkO1xyXG4gIGlmIChkYXRlRmlsdGVyKSB7XHJcbiAgICBpZiAoc3RhcnRfZGF0ZSkgZGF0ZUZpbHRlci5ndGUgPSBuZXcgRGF0ZShzdGFydF9kYXRlKTtcclxuICAgIGlmIChlbmRfZGF0ZSkge1xyXG4gICAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZShlbmRfZGF0ZSk7XHJcbiAgICAgIGVuZC5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xyXG4gICAgICBkYXRlRmlsdGVyLmx0ZSA9IGVuZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLSAzLiBCVUlMRCBTSEFSRUQgV0hFUkUgQ0xBVVNFIC0tLVxyXG4gIC8vIFdlIGJ1aWxkIG9uZSAnQ29uc2VudFdoZXJlSW5wdXQnIG9iamVjdCB0byBlbnN1cmUgQ09OU0lTVEVOQ1kgYmV0d2VlblxyXG4gIC8vIHRoZSBUaW1lbGluZSAoQXVkaXRUcmFpbCkgYW5kIHRoZSBSZWNlaXB0IERyb3Bkb3duIChDb25zZW50cykuXHJcblxyXG4gIGNvbnN0IGNvbnNlbnRXaGVyZTogUHJpc21hLkNvbnNlbnRXaGVyZUlucHV0ID0ge307XHJcblxyXG4gIC8vIEJhc2UgQ29udGV4dCAoUmVmZXJlbmNlIHZzIERhdGEgUHJpbmNpcGFsKVxyXG4gIGlmICh0eXBlID09PSBcInJlZmVyZW5jZV9pZFwiKSB7XHJcbiAgICBjb25zZW50V2hlcmUucmVmZXJlbmNlSWQgPSBwYXRoSWQ7XHJcbiAgICAvLyBBcHBseSBEYXRhIFByaW5jaXBhbCBGaWx0ZXIgaWYgc2VsZWN0ZWRcclxuICAgIGlmIChmaWx0ZXJEcElkcykge1xyXG4gICAgICBjb25zZW50V2hlcmUuZGF0YVByaW5jaXBhbElkID0geyBpbjogZmlsdGVyRHBJZHMgfTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc2VudFdoZXJlLmRhdGFQcmluY2lwYWxJZCA9IHBhdGhJZDtcclxuICAgIC8vIEFwcGx5IFJlZmVyZW5jZSBJRCBGaWx0ZXIgaWYgc2VsZWN0ZWRcclxuICAgIGlmIChmaWx0ZXJSZWZJZHMpIHtcclxuICAgICAgY29uc2VudFdoZXJlLnJlZmVyZW5jZUlkID0geyBpbjogZmlsdGVyUmVmSWRzIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBcHBseSBCdXNpbmVzcyBQcm9jZXNzIEZpbHRlclxyXG4gIGlmIChmaWx0ZXJCcElkcykge1xyXG4gICAgY29uc2VudFdoZXJlLmJ1c2luZXNzUHJvY2Vzc0lkID0geyBpbjogZmlsdGVyQnBJZHMgfTtcclxuICB9XHJcblxyXG4gIC8vIC0tLSA0LiBGRVRDSCBUSU1FTElORSAoQVVESVQgVFJBSUxTKSAtLS1cclxuICBjb25zdCBhdWRpdFRyYWlscyA9IGF3YWl0IHByaXNtYS5jb25zZW50QXVkaXRUcmFpbC5maW5kTWFueSh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICAvLyBXZSBmaWx0ZXIgdGhlIGF1ZGl0IHRyYWlsIHZpYSB0aGUgcmVsYXRpb24gdG8gQ29uc2VudCB1c2luZyB0aGUgc2hhcmVkIGxvZ2ljXHJcbiAgICAgIGNvbnNlbnQ6IGNvbnNlbnRXaGVyZSxcclxuICAgICAgLi4uKGRhdGVGaWx0ZXIgJiYgeyB0aW1lc3RhbXA6IGRhdGVGaWx0ZXIgfSksXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZToge1xyXG4gICAgICBjb25zZW50OiB7XHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgY29uc2VudFB1cnBvc2U6IHRydWUsXHJcbiAgICAgICAgICBwcm9jZXNzaW5nUHVycG9zZTogdHJ1ZSxcclxuICAgICAgICAgIGJ1c2luZXNzUHJvY2VzczogeyBpbmNsdWRlOiB7IGJ1c2luZXNzVW5pdDogdHJ1ZSB9IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvcmRlckJ5OiB7IHRpbWVzdGFtcDogXCJkZXNjXCIgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gLS0tIDUuIFRSQU5TRk9STSBUSU1FTElORSBEQVRBIC0tLVxyXG4gIGNvbnN0IHRpbWVsaW5lRXZlbnRzOiBUaW1lbGluZUV2ZW50W10gPSBbXTtcclxuICBjb25zdCBncm91cGVkQXVkaXRzOiBSZWNvcmQ8c3RyaW5nLCB0eXBlb2YgYXVkaXRUcmFpbHM+ID0ge307XHJcblxyXG4gIGF1ZGl0VHJhaWxzLmZvckVhY2goKHRyYWlsKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lS2V5ID0gdHJhaWwudGltZXN0YW1wLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTYpO1xyXG4gICAgY29uc3Qgc2VydmljZUtleSA9IHRyYWlsLmNvbnNlbnQuYnVzaW5lc3NQcm9jZXNzSWQ7XHJcbiAgICBjb25zdCBhY3Rpb25LZXkgPSB0cmFpbC5hY3Rpb247XHJcblxyXG4gICAgY29uc3QgY29tcG9zaXRlS2V5ID0gYCR7dGltZUtleX18JHtzZXJ2aWNlS2V5fXwke2FjdGlvbktleX1gO1xyXG5cclxuICAgIGlmICghZ3JvdXBlZEF1ZGl0c1tjb21wb3NpdGVLZXldKSBncm91cGVkQXVkaXRzW2NvbXBvc2l0ZUtleV0gPSBbXTtcclxuICAgIGdyb3VwZWRBdWRpdHNbY29tcG9zaXRlS2V5XS5wdXNoKHRyYWlsKTtcclxuICB9KTtcclxuXHJcbiAgT2JqZWN0LmVudHJpZXMoZ3JvdXBlZEF1ZGl0cykuZm9yRWFjaCgoW2tleSwgZ3JvdXBdKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGdyb3VwWzBdO1xyXG4gICAgbGV0IHVpVHlwZTogXCJHUkFOVEVEXCIgfCBcIlJFVk9LRURcIiB8IFwiVVBEQVRFRFwiIHwgXCJFWFBJUkVEXCIgPSBcIlVQREFURURcIjtcclxuXHJcbiAgICBzd2l0Y2ggKGZpcnN0LmFjdGlvbikge1xyXG4gICAgICBjYXNlIFwiR1JBTlRFRFwiOlxyXG4gICAgICAgIHVpVHlwZSA9IFwiR1JBTlRFRFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiUkVWT0tFRFwiOlxyXG4gICAgICAgIHVpVHlwZSA9IFwiUkVWT0tFRFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiRVhQSVJFRFwiOlxyXG4gICAgICAgIHVpVHlwZSA9IFwiRVhQSVJFRFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiVkVSU0lPTl9VUERBVEVEXCI6XHJcbiAgICAgIGNhc2UgXCJSRU5FV0VEXCI6XHJcbiAgICAgIGNhc2UgXCJTVVBFUkNFREVEXCI6XHJcbiAgICAgICAgdWlUeXBlID0gXCJVUERBVEVEXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGltZWxpbmVFdmVudHMucHVzaCh7XHJcbiAgICAgIGlkOiBgYXVkaXRfJHtmaXJzdC5pZH1gLFxyXG4gICAgICBkYXRlOiBmaXJzdC50aW1lc3RhbXAudG9JU09TdHJpbmcoKSxcclxuICAgICAgdHlwZTogdWlUeXBlLFxyXG4gICAgICBkYXRhUHJpbmNpcGFsOiBmaXJzdC5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgIHNlcnZpY2VOYW1lOiBmaXJzdC5jb25zZW50LmJ1c2luZXNzUHJvY2Vzcy5uYW1lIHx8IFwiU2VydmljZVwiLFxyXG4gICAgICBjb3VudDogZ3JvdXAubGVuZ3RoLFxyXG4gICAgICBkZXRhaWxzOiB7XHJcbiAgICAgICAgc2VjdGlvbnM6IGdyb3VwLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgICAgIHRpdGxlOiBgUHVycG9zZSBvZiBQcm9jZXNzaW5nOiAke2l0ZW0uY29uc2VudC5wcm9jZXNzaW5nUHVycG9zZS5uYW1lfWAsXHJcbiAgICAgICAgICBjb25zZW50UHVycG9zZU5hbWU6IGBQdXJwb3NlIG9mIENvbnNlbnQ6ICR7aXRlbS5jb25zZW50LmNvbnNlbnRQdXJwb3NlLm5hbWV9YCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmNvbnNlbnQucHJvY2Vzc2luZ1B1cnBvc2UuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICAgIGlzRXNzZW50aWFsOiBmYWxzZSxcclxuICAgICAgICAgIGF0dHJpYnV0ZXM6IGl0ZW0uY29uc2VudC51c2VyQXR0cmlidXRlTmFtZXMubWFwKChuYW1lKSA9PiAoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBzdGF0dXM6IHVpVHlwZSA9PT0gXCJHUkFOVEVEXCIgPyBcImFkZGVkXCIgOiBcInJlbW92ZWRcIixcclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICB9KSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgdGltZWxpbmVFdmVudHMuc29ydChcclxuICAgIChhLCBiKSA9PiBuZXcgRGF0ZShiLmRhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGEuZGF0ZSkuZ2V0VGltZSgpXHJcbiAgKTtcclxuXHJcbiAgLy8gLS0tIDYuIEZFVENIIFRBQkxFIERBVEEgJiBSRUNFSVBUUyAtLS1cclxuICAvLyBVc2VzIHRoZSBleGFjdCBzYW1lIGBjb25zZW50V2hlcmVgIGZpbHRlcnMgdG8gZW5zdXJlIHRoZSBSZWNlaXB0IERyb3Bkb3duIG1hdGNoZXMgdGhlIGFwcGxpZWQgZmlsdGVycy5cclxuICBjb25zdCBjb25zZW50c0ZvclRhYmxlID0gYXdhaXQgcHJpc21hLmNvbnNlbnQuZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgLi4uY29uc2VudFdoZXJlLFxyXG4gICAgICAuLi4oZGF0ZUZpbHRlciAmJiB7IGluc2VydGVkQXQ6IGRhdGVGaWx0ZXIgfSksXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZToge1xyXG4gICAgICBwcm9jZXNzaW5nUHVycG9zZTogdHJ1ZSxcclxuICAgICAgYnVzaW5lc3NQcm9jZXNzOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIG9yZGVyQnk6IHsgaW5zZXJ0ZWRBdDogXCJkZXNjXCIgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdGFibGVEYXRhOiBDb25zZW50SGlzdG9yeVJvd1tdID0gY29uc2VudHNGb3JUYWJsZS5tYXAoKGMpID0+ICh7XHJcbiAgICBjb25zZW50SWQ6IGMucHVibGljSWQsXHJcbiAgICByZWZlcmVuY2VJZDogYy5yZWZlcmVuY2VJZCB8fCBcIlwiLFxyXG4gICAgZGF0YVByaW5jaXBhbElkOiBjLmRhdGFQcmluY2lwYWxJZCxcclxuICAgIGNvbnNlbnRlZEF0OiBjLmluc2VydGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIHB1cnBvc2VPZlByb2Nlc3Npbmc6IGMucHJvY2Vzc2luZ1B1cnBvc2UubmFtZSxcclxuICAgIHB1cnBvc2VDb2RlOiBjLnByb2Nlc3NpbmdQdXJwb3NlLmlkLnRvU3RyaW5nKCksXHJcbiAgICB1c2VyQXR0cmlidXRlczogYy51c2VyQXR0cmlidXRlTmFtZXMuam9pbihcIiwgXCIpLFxyXG4gICAgc3RhdHVzOiBjLnN0YXR1cyxcclxuICB9KSk7XHJcblxyXG4gIC8vIC0tLSA3LiBFWFRSQUNUIFVOSVFVRSBSRUNFSVBUIFBBSVJTIC0tLVxyXG4gIGNvbnN0IHJlY2VpcHRNYXAgPSBuZXcgTWFwPHN0cmluZywgUmVjZWlwdE9wdGlvbj4oKTtcclxuXHJcbiAgY29uc2VudHNGb3JUYWJsZS5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICBjb25zdCBrZXkgPSBgJHtjLnJlZmVyZW5jZUlkfXwke2MuZGF0YVByaW5jaXBhbElkfXwke2MuYnVzaW5lc3NQcm9jZXNzLmNvZGV9fCR7Yy5idXNpbmVzc1Byb2Nlc3MudmVyc2lvbn1gO1xyXG5cclxuICAgIGlmICghcmVjZWlwdE1hcC5oYXMoa2V5KSkge1xyXG4gICAgICByZWNlaXB0TWFwLnNldChrZXksIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogYy5yZWZlcmVuY2VJZCB8fCBcIlwiLFxyXG4gICAgICAgIGRhdGFQcmluY2lwYWxJZDogYy5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgICAgcHJvY2Vzc0NvZGU6IGMuYnVzaW5lc3NQcm9jZXNzLmNvZGUsXHJcbiAgICAgICAgdmVyc2lvbjogYy5idXNpbmVzc1Byb2Nlc3MudmVyc2lvbixcclxuICAgICAgICBsYXN0VXBkYXRlZDogYy51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlY2VpcHRPcHRpb25zID0gQXJyYXkuZnJvbShyZWNlaXB0TWFwLnZhbHVlcygpKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGV2ZW50czogdGltZWxpbmVFdmVudHMsXHJcbiAgICB0YWJsZURhdGEsXHJcbiAgICByZWZlcmVuY2VJZDogcGF0aElkLFxyXG4gICAgZHJvcGRvd25PcHRpb25zLFxyXG4gICAgYnBPcHRpb25zLFxyXG4gICAgcmVjZWlwdE9wdGlvbnMsXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHNpZ25lZCBVUkwgZm9yIGRvd25sb2FkaW5nIHRoZSBKU09OIGFydGlmYWN0LlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlQXJ0aWZhY3REb3dubG9hZFVybChvcHRpb246IFJlY2VpcHRPcHRpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IFN0b3JhZ2VGYWN0b3J5LmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgLy8gMS4gQ29uc3RydWN0IHRoZSBmaWxlIHBhdGggKE9iamVjdCBLZXkpIG1hbnVhbGx5IGhlcmUuXHJcbiAgICAvLyBUaGlzIG1hdGNoZXMgdGhlIGZvcm1hdDogbWVpdHkvYXJ0aWZhY3RzL3ticF9jb2RlfS17cmVmX2lkfS17ZHBfaWR9Lmpzb25cclxuICAgIGNvbnN0IG9iamVjdE5hbWUgPSBgbWVpdHkvYXJ0aWZhY3RzLyR7b3B0aW9uLnByb2Nlc3NDb2RlfS0ke29wdGlvbi5yZWZlcmVuY2VJZH0tJHtvcHRpb24uZGF0YVByaW5jaXBhbElkfS5qc29uYDtcclxuXHJcbiAgICAvLyAyLiBVc2UgdGhlIGdlbmVyaWMgZ2V0VXJsIG1ldGhvZCBwcm92aWRlZCBieSB0aGUgU3RvcmFnZUFkYXB0ZXIgaW50ZXJmYWNlXHJcbiAgICAvLyBQYXNzaW5nIDkwMCAoc2Vjb25kcykgZm9yIDE1IG1pbnV0ZXMgZXhwaXJ5XHJcbiAgICBjb25zdCB1cmwgPSBhd2FpdCBzdG9yYWdlLmdldFVybChvYmplY3ROYW1lLCA5MDApO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVybCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2VuZXJhdGUgZG93bmxvYWQgVVJMOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gZ2VuZXJhdGUgZG93bmxvYWQgbGlua1wiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGZXRjaGVzIHRoZSBpZGVudGlmaWVycyByZXF1aXJlZCB0byB2aWV3IHRoZSBSZWNlaXB0IGluIHRoZSBDTVMuXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjZWlwdFZpZXdEZXRhaWxzKG9wdGlvbjogUmVjZWlwdE9wdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBidXNpbmVzc1Byb2Nlc3MgPSBhd2FpdCBwcmlzbWEuYnVzaW5lc3NQcm9jZXNzLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGNvZGVfdmVyc2lvbjoge1xyXG4gICAgICAgICAgY29kZTogb3B0aW9uLnByb2Nlc3NDb2RlLFxyXG4gICAgICAgICAgdmVyc2lvbjogb3B0aW9uLnZlcnNpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0OiB7IGlkOiB0cnVlIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWJ1c2luZXNzUHJvY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQnVzaW5lc3MgUHJvY2VzcyBub3QgZm91bmRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdGljZSA9IGF3YWl0IHByaXNtYS5ub3RpY2UuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgbm90aWNlX2FjY2VwdGVkX3VuaXF1ZV9pbmRleDoge1xyXG4gICAgICAgICAgcmVmZXJlbmNlSWQ6IG9wdGlvbi5yZWZlcmVuY2VJZCxcclxuICAgICAgICAgIGRhdGFQcmluY2lwYWxJZDogb3B0aW9uLmRhdGFQcmluY2lwYWxJZCxcclxuICAgICAgICAgIGJ1c2luZXNzUHJvY2Vzc0lkOiBidXNpbmVzc1Byb2Nlc3MuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgcHVibGljSWQ6IHRydWUsXHJcbiAgICAgICAgZGF0YVByaW5jaXBhbElkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFub3RpY2UpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJlY2VpcHQvTm90aWNlIG5vdCBmb3VuZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgbm90aWNlUHVibGljSWQ6IG5vdGljZS5wdWJsaWNJZCxcclxuICAgICAgYWNjZXNzVG9rZW46IG5vdGljZS5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyByZWNlaXB0IGRldGFpbHM6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gcmV0cmlldmUgcmVjZWlwdCBkZXRhaWxzLlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjZWlwdERhdGFGb3JNb2RhbChvcHRpb246IFJlY2VpcHRPcHRpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gVXNlIHRoZSBzYW1lIGxvZ2ljIHlvdSB1c2VkIHRvIGdldCBJRHMsIGJ1dCByZXRyaWV2ZSB0aGUgZnVsbCBkYXRhIG9iamVjdFxyXG4gICAgLy8gQXNzdW1pbmcgJ29wdGlvbicgY29udGFpbnMgdGhlIG5lY2Vzc2FyeSBJRHMgdG8gZmluZCB0aGUgbm90aWNlUHVibGljSWRcclxuICAgIC8vIG9yIGlmIHlvdSBjYW4gZGVyaXZlIHRoZSBJRCBuZWVkZWQgZm9yIGdlbmVyYXRlQ29uc2VudFJlY2VpcHQ6XHJcblxyXG4gICAgLy8gMS4gRmV0Y2ggdGhlIHB1YmxpYyBJRCAoUmV1c2UgeW91ciBleGlzdGluZyBsb2dpYyBmcm9tIGdldFJlY2VpcHRWaWV3RGV0YWlscylcclxuICAgIGNvbnN0IHsgbm90aWNlUHVibGljSWQgfSA9IGF3YWl0IGdldFJlY2VpcHRWaWV3RGV0YWlscyhvcHRpb24pOyAvLyBkZXRhaWxzIGxvZ2ljXHJcblxyXG4gICAgaWYgKCFub3RpY2VQdWJsaWNJZCkgdGhyb3cgbmV3IEVycm9yKFwiTm90aWNlIElEIG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAvLyAyLiBHZW5lcmF0ZSB0aGUgYWN0dWFsIHJlY2VpcHQgSlNPTiBkYXRhXHJcbiAgICBjb25zdCByZWNlaXB0RGF0YSA9IGF3YWl0IGdlbmVyYXRlQ29uc2VudFJlY2VpcHQobm90aWNlUHVibGljSWQpO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlY2VpcHREYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHJlY2VpcHQgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcbmltcG9ydCB7IGdlbmVyYXRlQXJ0aWZhY3RQYXlsb2FkIH0gZnJvbSBcIkAvbGliL3NlcnZpY2VzL2FydGlmYWN0LWNyZWF0aW9uLXNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcnRpZmFjdERhdGEob3B0aW9uOiBSZWNlaXB0T3B0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIEdlbmVyYXRlIHRoZSBDb25zZW50IEFydGlmYWN0IG9uLXRoZS1mbHlcclxuICAgIC8vIFRoaXMgYWxsb3dzIGRvd25sb2FkaW5nIGV2ZW4gaWYgdGhlIGZpbGUgaXMgbWlzc2luZyBmcm9tIHN0b3JhZ2UgKGUuZy4gbG9jYWwgZGV2KVxyXG4gICAgY29uc3QgYXJ0aWZhY3REYXRhID0gYXdhaXQgZ2VuZXJhdGVBcnRpZmFjdFBheWxvYWQoXHJcbiAgICAgIG9wdGlvbi5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgIG9wdGlvbi5yZWZlcmVuY2VJZCB8fCBcIlJFRl9VTktOT1dOXCIsXHJcbiAgICAgIG9wdGlvbi5wcm9jZXNzQ29kZVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBhcnRpZmFjdERhdGEgfTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2VuZXJhdGluZyBhcnRpZmFjdCBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGdlbmVyYXRlIGFydGlmYWN0LlwiIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ1VBa1lzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/actions/data:2e7954 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"007ed7046051a367ea295f22958c88a5a2ad656873":"getFiduciaryConfig"},"actions/fiduciary-config.ts",""] */ __turbopack_context__.s([
    "getFiduciaryConfig",
    ()=>getFiduciaryConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getFiduciaryConfig = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("007ed7046051a367ea295f22958c88a5a2ad656873", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getFiduciaryConfig"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlkdWNpYXJ5LWNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuLyoqXHJcbiAqIE9wZW4gQmhhcmF0IERpZ2l0YWwgQ29uc2VudCBieSBJRGZ5XHJcbiAqIENvcHlyaWdodCAoYykgMjAyNSBCYWxkb3IgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCAoSURmeSlcclxuICogXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFByaXZ5IFB1YmxpYyBMaWNlbnNlLlxyXG4gKiBTZWUgTElDRU5TRS5tZCBmb3IgdGhlIGZ1bGwgdGVybXMgb2YgdXNlLlxyXG4gKiBcclxuICogVW5hdXRob3JpemVkIGNvcHlpbmcsIG1vZGlmaWNhdGlvbiwgZGlzdHJpYnV0aW9uLCBvciBjb21tZXJjaWFsIHVzZVxyXG4gKiBpcyBzdHJpY3RseSBwcm9oaWJpdGVkIHdpdGhvdXQgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uIGZyb20gSURmeS5cclxuICovXHJcblxyXG4vKipcclxuICogU2VydmVyIGFjdGlvbiB0byBnZXQgZmlkdWNpYXJ5IGJyYW5kaW5nIGNvbmZpZ3VyYXRpb24gYXQgcnVudGltZS5cclxuICogVGhpcyBhbGxvd3MgcnVudGltZSBjb25maWd1cmF0aW9uIG9mIGxvZ28gYW5kIG5hbWUgd2l0aG91dCByZWJ1aWxkaW5nLlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpZHVjaWFyeUNvbmZpZygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgbG9nb1VybDogcHJvY2Vzcy5lbnYuREFUQV9GSURVQ0lBUllfTE9HT19VUkwgfHwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREFUQV9GSURVQ0lBUllfTE9HT19VUkwgfHwgbnVsbCxcclxuICAgIGZpZHVjaWFyeU5hbWU6IHByb2Nlc3MuZW52LkRBVEFfRklEVUNJQVJZX05BTUUgfHwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREFUQV9GSURVQ0lBUllfTkFNRSB8fCBudWxsLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ1U0FnQnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/fiduciary-logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "FiduciaryLogo",
    ()=>FiduciaryLogo,
    "FiduciaryLogoMobile",
    ()=>FiduciaryLogoMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$2e7954__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:2e7954 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FiduciaryName(param) {
    let { name } = param;
    if (!name) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold text-xl",
                    children: "Penguin "
                }, void 0, false, {
                    fileName: "[project]/components/fiduciary-logo.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold text-xl bg-blue-700 text-white p-1 ml-px leading-5",
                    children: "Bank."
                }, void 0, false, {
                    fileName: "[project]/components/fiduciary-logo.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: name
    }, void 0, false);
}
_c = FiduciaryName;
/**
 * Hook to fetch fiduciary config from server action.
 * This ensures runtime env vars work in production.
 */ function useFiduciaryConfig() {
    _s();
    const [config, setConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        logoUrl: null,
        fiduciaryName: null
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFiduciaryConfig.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$2e7954__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getFiduciaryConfig"])().then({
                "useFiduciaryConfig.useEffect": (data)=>{
                    setConfig(data);
                    setIsLoading(false);
                }
            }["useFiduciaryConfig.useEffect"]);
        }
    }["useFiduciaryConfig.useEffect"], []);
    return {
        ...config,
        isLoading
    };
}
_s(useFiduciaryConfig, "yfrPYjLzkma5oY6dE2xUsPSydz4=");
function FiduciaryLogo(param) {
    let { className, isHighContrast = false } = param;
    _s1();
    const { logoUrl, fiduciaryName, isLoading } = useFiduciaryConfig();
    // Show placeholder while loading to prevent layout shift
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center", className),
            style: {
                width: 150,
                height: 40
            }
        }, void 0, false, {
            fileName: "[project]/components/fiduciary-logo.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    }
    if (!logoUrl) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex text-blue-800 items-center font-bold text-xl", isHighContrast && "text-white!", className),
            style: {
                width: 150,
                height: 40
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiduciaryName, {
                name: fiduciaryName
            }, void 0, false, {
                fileName: "[project]/components/fiduciary-logo.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/fiduciary-logo.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: logoUrl,
            alt: fiduciaryName || "Logo",
            width: 150,
            height: 40,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("object-contain", isHighContrast && "hc-filter-invert"),
            priority: true,
            unoptimized: true
        }, void 0, false, {
            fileName: "[project]/components/fiduciary-logo.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/fiduciary-logo.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s1(FiduciaryLogo, "HnRpXfJtB5CG49pgA5r4bkWh1h8=", false, function() {
    return [
        useFiduciaryConfig
    ];
});
_c1 = FiduciaryLogo;
function FiduciaryLogoMobile(param) {
    let { className, isHighContrast = false } = param;
    _s2();
    const { logoUrl, fiduciaryName, isLoading } = useFiduciaryConfig();
    // Show placeholder while loading to prevent layout shift
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center", className),
            style: {
                width: 120,
                height: 32
            }
        }, void 0, false, {
            fileName: "[project]/components/fiduciary-logo.tsx",
            lineNumber: 120,
            columnNumber: 7
        }, this);
    }
    if (!logoUrl) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center font-bold text-lg", className),
            style: {
                width: 120,
                height: 32
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiduciaryName, {
                name: fiduciaryName
            }, void 0, false, {
                fileName: "[project]/components/fiduciary-logo.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/fiduciary-logo.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: logoUrl,
            alt: fiduciaryName || "Logo",
            width: 120,
            height: 32,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("object-contain", isHighContrast && "hc-filter-invert"),
            priority: true,
            unoptimized: true
        }, void 0, false, {
            fileName: "[project]/components/fiduciary-logo.tsx",
            lineNumber: 140,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/fiduciary-logo.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_s2(FiduciaryLogoMobile, "HnRpXfJtB5CG49pgA5r4bkWh1h8=", false, function() {
    return [
        useFiduciaryConfig
    ];
});
_c2 = FiduciaryLogoMobile;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FiduciaryName");
__turbopack_context__.k.register(_c1, "FiduciaryLogo");
__turbopack_context__.k.register(_c2, "FiduciaryLogoMobile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils/consent-receipt-translations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "RECEIPT_TRANSLATIONS",
    ()=>RECEIPT_TRANSLATIONS,
    "getDpdpaRights",
    ()=>getDpdpaRights,
    "getReceiptTranslation",
    ()=>getReceiptTranslation,
    "localizeDigits",
    ()=>localizeDigits
]);
const RECEIPT_TRANSLATIONS = {
    en: {
        numerals: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
        ],
        header: "Consent Receipt",
        receiptId: "Receipt ID:",
        dateTime: "Date & Time:",
        dataPrincipalId: "Data Principal ID:",
        dataFiduciaryName: "Data Fiduciary Name:",
        nameOfGoodsService: "Name of Goods/Service:",
        legalStatementLabel: "Legal Statement:",
        purposeHeader: "Purpose",
        purposeColumn: "Purpose",
        dataCollectedColumn: "Personal Data Collected",
        noPurposes: "No purposes accepted",
        rightsHeader: "Rights:",
        rightsDescription: "As per the Digital Personal Data Protection Act (DPDPA), you have the following rights regarding your personal data:",
        exerciseRightsHeader: "How can I exercise my rights:",
        exerciseRightsDescription: "To exercise your rights, please follow these steps:",
        contactText: "For any requests regarding your data, please contact -",
        footerNote: "Note: Your request will be processed within 90 days, subject to legal and contractual obligations.",
        legalStatementTemplate: "I acknowledge that I have given my consent to {DF_NAME} for {BP_NAME}.",
        dpdpaRights: [
            "Right to Access Information about Personal Data",
            "Right to Correction and Erasure of Personal Data",
            "Right of Grievance Redressal",
            "Right to Nominate"
        ],
        exerciseSteps: {
            step1: "Submit an Access Request – Click",
            step2: "View your consents provided to {DF_NAME} – Click",
            step3: "Submit grievances – Click",
            step4: "Contact the DPO of {DF_NAME} – Click"
        },
        clickHere: "here",
        successTitle: "Your Consent has been submitted",
        successDesc: "Thank you for your consent and trust",
        manageConsentsBtn: "Manage Your Consents",
        viewReceiptBtn: "View Consent Receipt"
    },
    hi: {
        numerals: [
            "०",
            "१",
            "२",
            "३",
            "४",
            "५",
            "६",
            "७",
            "८",
            "९"
        ],
        header: "सहमति रसीद",
        receiptId: "रसीद आईडी:",
        dateTime: "दिनांक और समय:",
        dataPrincipalId: "डेटा प्रिंसिपल आईडी:",
        dataFiduciaryName: "डेटा फिड्यूशियरी नाम:",
        nameOfGoodsService: "वस्तु/सेवा का नाम:",
        legalStatementLabel: "कानूनी बयान:",
        purposeHeader: "उद्देश्य",
        purposeColumn: "उद्देश्य",
        dataCollectedColumn: "एकत्रित व्यक्तिगत डेटा",
        noPurposes: "कोई उद्देश्य स्वीकार नहीं किया गया",
        rightsHeader: "अधिकार:",
        rightsDescription: "डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम (DPDPA) के अनुसार, आपके पास अपने व्यक्तिगत डेटा के संबंध में निम्नलिखित अधिकार हैं:",
        exerciseRightsHeader: "मैं अपने अधिकारों का प्रयोग कैसे कर सकता हूँ:",
        exerciseRightsDescription: "अपने अधिकारों का प्रयोग करने के लिए, कृपया इन चरणों का पालन करें:",
        contactText: "अपने डेटा के संबंध में किसी भी अनुरोध के लिए, कृपया संपर्क करें -",
        footerNote: "नोट: आपके अनुरोध को कानूनी और संविदात्मक दायित्वों के अधीन 90 दिनों के भीतर संसाधित किया जाएगा।",
        legalStatementTemplate: "मैं स्वीकार करता हूं कि मैंने {BP_NAME} के लिए {DF_NAME} को अपनी सहमति दी है।",
        dpdpaRights: [
            "व्यक्तिगत डेटा के बारे में जानकारी तक पहुंचने का अधिकार",
            "व्यक्तिगत डेटा के सुधार और उन्मूलन का अधिकार",
            "शिकायत निवारण का अधिकार",
            "नामित करने का अधिकार"
        ],
        exerciseSteps: {
            step1: "एक्सेस अनुरोध जमा करें – क्लिक करें",
            step2: "{DF_NAME} को दी गई अपनी सहमतियां देखें – क्लिक करें",
            step3: "शिकायतें जमा करें – क्लिक करें",
            step4: "{DF_NAME} के डीपीओ से संपर्क करें – क्लिक करें"
        },
        clickHere: "यहाँ",
        successTitle: "आपकी सहमति जमा कर दी गई है",
        successDesc: "आपकी सहमति और विश्वास के लिए धन्यवाद",
        manageConsentsBtn: "अपनी सहमतियाँ प्रबंधित करें",
        viewReceiptBtn: "सहमति रसीद देखें"
    },
    as: {
        header: "সন্মতি ৰচিদ",
        receiptId: "ৰচিদ নং:",
        dateTime: "তাৰিখ আৰু সময়:",
        dataPrincipalId: "তথ্য অধ্যক্ষ আই ডি:",
        dataFiduciaryName: "তথ্য ন্যাসৰক্ষীৰ নাম:",
        nameOfGoodsService: "সামগ্ৰী/সেৱাৰ নাম:",
        legalStatementLabel: "আইনগত বিবৃতি:",
        purposeHeader: "উদ্দেশ্য",
        purposeColumn: "উদ্দেশ্য",
        dataCollectedColumn: "সংগ্ৰহ কৰা ব্যক্তিগত তথ্য",
        noPurposes: "কোনো উদ্দেশ্য গ্ৰহণ কৰা হোৱা নাই",
        rightsHeader: "অধিকাৰসমূহ:",
        rightsDescription: "ডিজিটেল ব্যক্তিগত তথ্য সুৰক্ষা আইন (DPDPA) অনুসৰি, আপোনাৰ ব্যক্তিগত তথ্যৰ সন্দৰ্ভত আপোনাৰ তলত দিয়া অধিকাৰসমূহ আছে:",
        exerciseRightsHeader: "মই মোৰ অধিকাৰসমূহ কেনেকৈ সাব্যস্ত কৰিব পাৰো:",
        exerciseRightsDescription: "আপোনাৰ অধিকাৰসমূহ সাব্যস্ত কৰিবলৈ, অনুগ্ৰহ কৰি তলত দিয়া পদক্ষেপসমূহ অনুসৰণ কৰক:",
        contactText: "আপোনাৰ তথ্য সংক্ৰান্তীয় যিকোনো অনুৰোধৰ বাবে, অনুগ্ৰহ কৰি যোগাযোগ কৰক -",
        footerNote: "টোকা: আপোনাৰ অনুৰোধ আইনী আৰু চুক্তিভিত্তিক বাধ্যবাধকতাৰ সাপেক্ষে ৯০ দিনৰ ভিতৰত প্ৰক্ৰিয়াকৰণ কৰা হ’ব।",
        legalStatementTemplate: "মই স্বীকাৰ কৰো যে মই {BP_NAME} ৰ বাবে {DF_NAME} ক মোৰ সন্মতি প্ৰদান কৰিছো।",
        dpdpaRights: [
            "ব্যক্তিগত তথ্যৰ বিষয়ে তথ্য আহৰণৰ অধিকাৰ",
            "ব্যক্তিগত তথ্য শুধৰণি আৰু মচি পেলোৱাৰ অধিকাৰ",
            "অজুহাতে নিবাৰণৰ অধিকাৰ",
            "মনোনীত কৰাৰ অধিকাৰ"
        ],
        exerciseSteps: {
            step1: "এটা প্ৰৱেশ অনুৰোধ দাখিল কৰক – ক্লিক কৰক",
            step2: "{DF_NAME} ক প্ৰদান কৰা আপোনাৰ সন্মতিসমূহ চাওক – ক্লিক কৰক",
            step3: "অজুহাতে দাখিল কৰক – ক্লিক কৰক",
            step4: "{DF_NAME} ৰ DPO ৰ সৈতে যোগাযোগ কৰক – ক্লিক কৰক"
        },
        clickHere: "ইয়াত",
        successTitle: "আপোনাৰ সন্মতি দাখিল কৰা হৈছে",
        successDesc: "আপোনাৰ সন্মতি আৰু বিশ্বাসৰ বাবে ধন্যবাদ",
        manageConsentsBtn: "আপোনাৰ সন্মতিসমূহ পৰিচালনা কৰক",
        viewReceiptBtn: "সন্মতি ৰচিদ চাওক"
    },
    bn: {
        numerals: [
            "০",
            "১",
            "২",
            "৩",
            "৪",
            "৫",
            "৬",
            "৭",
            "৮",
            "৯"
        ],
        header: "সম্মতি রসিদ",
        receiptId: "রসিদ আইডি:",
        dateTime: "তারিখ ও সময়:",
        dataPrincipalId: "ডেটা প্রিন্সিপাল আইডি:",
        dataFiduciaryName: "ডেটা ফিডিউশিয়ারি নাম:",
        nameOfGoodsService: "পণ্য/সেবার নাম:",
        legalStatementLabel: "আইনি বিবৃতি:",
        purposeHeader: "উদ্দেশ্য",
        purposeColumn: "উদ্দেশ্য",
        dataCollectedColumn: "সংগৃহীত ব্যক্তিগত ডেটা",
        noPurposes: "কোনো উদ্দেশ্য গৃহীত হয়নি",
        rightsHeader: "অধিকার:",
        rightsDescription: "ডিজিটাল ব্যক্তিগত ডেটা সুরক্ষা আইন (DPDPA) অনুযায়ী, আপনার ব্যক্তিগত ডেটা সম্পর্কে আপনার নিম্নলিখিত অধিকারগুলি রয়েছে:",
        exerciseRightsHeader: "আমি কীভাবে আমার অধিকার প্রয়োগ করতে পারি:",
        exerciseRightsDescription: "আপনার অধিকার প্রয়োগ করার জন্য, অনুগ্রহ করে নিম্নলিখিত পদক্ষেপগুলি অনুসরণ করুন:",
        contactText: "আপনার ডেটা সংক্রান্ত যেকোনো অনুরোধের জন্য, অনুগ্রহ করে যোগাযোগ করুন -",
        footerNote: "দ্রষ্টব্য: আইনগত এবং চুক্তিভিত্তিক বাধ্যবাধকতা সাপেক্ষে ৯০ দিনের মধ্যে আপনার অনুরোধ প্রক্রিয়া করা হবে।",
        legalStatementTemplate: "আমি স্বীকার করছি যে আমি {BP_NAME} এর জন্য {DF_NAME} কে আমার সম্মতি দিয়েছি।",
        dpdpaRights: [
            "ব্যক্তিগত ডেটা সম্পর্কে তথ্য অ্যাক্সেস করার অধিকার",
            "ব্যক্তিগত ডেটা সংশোধন এবং মুছে ফেলার অধিকার",
            "অভিযোগ নিষ্পত্তির অধিকার",
            "মনোনীত করার অধিকার"
        ],
        exerciseSteps: {
            step1: "একটি অ্যাক্সেস অনুরোধ জমা দিন – ক্লিক করুন",
            step2: "{DF_NAME} কে দেওয়া আপনার সম্মতিগুলি দেখুন – ক্লিক করুন",
            step3: "অভিযোগ জমা দিন – ক্লিক করুন",
            step4: "{DF_NAME} এর ডিপিও-এর সাথে যোগাযোগ করুন – ক্লিক করুন"
        },
        clickHere: "এখানে",
        successTitle: "আপনার সম্মতি জমা দেওয়া হয়েছে",
        successDesc: "আপনার সম্মতি এবং বিশ্বাসের জন্য ধন্যবাদ",
        manageConsentsBtn: "আপনার সম্মতিগুলি পরিচালনা করুন",
        viewReceiptBtn: "সম্মতি রসিদ দেখুন"
    },
    brx: {
        header: "गनायथि रसिद",
        receiptId: "रसिद ID:",
        dateTime: "तारीख आरो सम:",
        dataPrincipalId: "रोगा गाहाय ID:",
        dataFiduciaryName: "रोगा जिम्मादारि नाम:",
        nameOfGoodsService: "माल/सिबिथायनि नाम:",
        legalStatementLabel: "आइनि बिबुंथि:",
        purposeHeader: "थांखि",
        purposeColumn: "थांखि",
        dataCollectedColumn: "जथुमनाय गावआरि रोगा",
        noPurposes: "जेबो थांखि गनायनाय जायाखै",
        rightsHeader: "मोनथायफोर:",
        rightsDescription: "डिजिटल गावआरि रोगा रैखाथि आइन (DPDPA) बादियै, नोंथांनि गावआरि रोगानि सोमोन्दै थाहनाय मोनथायफोर दं:",
        exerciseRightsHeader: "आं आंनि मोनथायफोरखौ माबोरै बाहाय‌नो हायो:",
        exerciseRightsDescription: "नोंथांनि मोनथायफोरखौ बाहाय‌नो, अननानै गाहायनि नेरसोनफोरखौ मानि:",
        contactText: "नोंथांनि रोगानि सोमोन्दै जायखिजाया आरजगाबनायनि थाखाय, अननानै जगाजग खालाम -",
        footerNote: "सिग: नोंथांनि आरजगाबनायखौ आइनि आरो रादायनामानि दायबद्धताफोरनि सिङाव 90 साननि गेजेराव मावफुंनाय जागोन।",
        legalStatementTemplate: "आं मानिना लादों दि आं {BP_NAME} नि थाखाय {DF_NAME} नो आंनि गनायथि होबाय।",
        dpdpaRights: [
            "गावआरि रोगानि बागै मिथिनो मोननायनि मोनथाय",
            "गावआरि रोगाखौ सुद्रायनाय आरो हुखुमोरनायनि मोनथाय",
            "अजद सुस्रांनायनि मोनथाय",
            "साखोनो सायখनायनि मोनथाय"
        ],
        exerciseSteps: {
            step1: "होगारनाय आरजगाबनाय जमा खालाम - क्लिक",
            step2: "{DF_NAME} नो होनाय नोंथांनि गनायथि - क्लिक",
            step3: "अजदफोर जमा खालाम - क्लिक",
            step4: "{DF_NAME} नि DPO जों जगाजग खालाम - क्लिक"
        },
        clickHere: "बेयाव",
        successTitle: "नोंथांनि गनायथि होनायखौ जमा खालामनाय जाबाय",
        successDesc: "नोंथांनि गनायथि आरो फोथायनायनि थाखाय गोजोननाय थाबाय",
        manageConsentsBtn: "नोंथांनि गनायथिफोरखौ परिचालना खालाम",
        viewReceiptBtn: "गनायथि रसिद नाय"
    },
    doi: {
        header: "सहमति रसीद",
        receiptId: "रसीद आईडी:",
        dateTime: "तरीक ते समां:",
        dataPrincipalId: "डेटा प्रिंसिपल आईडी:",
        dataFiduciaryName: "डेटा फिड्यूशियरी नां:",
        nameOfGoodsService: "चीजें/सेवा दा नां:",
        legalStatementLabel: "कानूनी बयान:",
        purposeHeader: "मकसद",
        purposeColumn: "मकसद",
        dataCollectedColumn: "इकट्ठा कीता गेदा निजी डेटा",
        noPurposes: "कोई मकसद मंजूर नेईं कीता गेदा",
        rightsHeader: "अधिकार:",
        rightsDescription: "डिजिटल निजी डेटा संरक्षण अधिनियम (डीपीडीपीए) दे मताबक, थुआड़े निजी डेटा दे बारे च थुआड़े कोल हेठ दित्ते दे अधिकार न:",
        exerciseRightsHeader: "मैं अपने अधिकारें दा इस्तेमाल किय्यां करी सकना/सकनी आं:",
        exerciseRightsDescription: "अपने अधिकारें दा इस्तेमाल करने लेई, किरपा करियै एह् कदम चक्को:",
        contactText: "थुआड़े डेटा दे बारे च कुसै बी बिनती लेई, किरपा करियै स्र्पक करो -",
        footerNote: "नोट: थुआड़ी बिनती गी कानूनी ते इकरारनामे दी पाबंदी दे तहत 90 दिनें दे अंदर पूरा कीता जाग।",
        legalStatementTemplate: "मैं मनना/मननी आं जे मैं {BP_NAME} लेई {DF_NAME} गी अपनी सहमति दित्ती ऐ।",
        dpdpaRights: [
            "निजी डेटा दे बारे च जानकारी हासल करने दा अधिकार",
            "निजी डेटा गी ठीक करने ते मिटाने दा अधिकार",
            "शिकायत निवारण दा अधिकार",
            "नामित करने दा अधिकार"
        ],
        exerciseSteps: {
            step1: "पहुंच बिनती जमा करो – क्लिक करो",
            step2: "{DF_NAME} गी दित्ती गेदी अपनी सहमति देखो – क्लिक करो",
            step3: "शिकायतां जमा करो – क्लिक करो",
            step4: "{DF_NAME} दे डीपीओ कन्नै स्र्पक करो – क्लिक करो"
        },
        clickHere: "इत्थें",
        successTitle: "तुंदी रजामंदी जमा होई गेई ऐ",
        successDesc: "तुंदी रजामंदी ते भरोसे लेई धन्यावाद",
        manageConsentsBtn: "अपनी रजामंदी दा प्रबंधन करो",
        viewReceiptBtn: "रजामंदी रसीद दिक्खो"
    },
    gu: {
        numerals: [
            "૦",
            "૧",
            "૨",
            "૩",
            "૪",
            "૫",
            "૬",
            "૭",
            "૮",
            "૯"
        ],
        header: "સંમતિ રસીદ",
        receiptId: "રસીદ આઈડી:",
        dateTime: "તારીખ અને સમય:",
        dataPrincipalId: "ડેટા પ્રિન્સિપાલ આઈડી:",
        dataFiduciaryName: "ડેટા ફિડ્યુશિયરી નામ:",
        nameOfGoodsService: "વસ્તુ/સેવાનું નામ:",
        legalStatementLabel: "કાયદાકીય નિવેદન:",
        purposeHeader: "હેતુ",
        purposeColumn: "હેતુ",
        dataCollectedColumn: "એકત્રિત વ્યક્તિગત ડેટા",
        noPurposes: "કોઈ હેતુ સ્વીકારવામાં આવ્યો નથી",
        rightsHeader: "અધિકારો:",
        rightsDescription: "ડિજિટલ પર્સનલ ડેટા પ્રોટેક્શન એક્ટ (DPDPA) મુજબ, તમારા વ્યક્તિગત ડેટા અંગે તમારી પાસે નીચે મુજબના અધિકારો છે:",
        exerciseRightsHeader: "હું મારા અધિકારોનો ઉપયોગ કેવી રીતે કરી શકું:",
        exerciseRightsDescription: "તમારા અધિકારોનો ઉપયોગ કરવા માટે, કૃપા કરીને નીચેના પગલાં અનુસરો:",
        contactText: "તમારા ડેટા અંગેની કોઈપણ વિનંતી માટે, કૃપા કરીને સંપર્ક કરો -",
        footerNote: "નોંધ: તમારી વિનંતી કાયદાકીય અને કરારબદ્ધ જવાબદારીઓને આધીન 90 દિવસની અંદર પ્રક્રિયા કરવામાં આવશે.",
        legalStatementTemplate: "હું સ્વીકારું છું કે મેં {BP_NAME} માટે {DF_NAME} ને મારી સંમતિ આપી છે.",
        dpdpaRights: [
            "વ્યક્તિગત ડેટા વિશે માહિતી મેળવવાનો અધિકાર",
            "વ્યક્તિગત ડેટા સુધારણા અને ભૂંસી નાખવાનો અધિકાર",
            "ફરિયાદ નિવારણનો અધિકાર",
            "નોમિનેટ કરવાનો અધિકાર"
        ],
        exerciseSteps: {
            step1: "એક્સેસ વિનંતી સબમિટ કરો – ક્લિક કરો",
            step2: "{DF_NAME} ને આપેલી તમારી સંમતિઓ જુઓ – ક્લિક કરો",
            step3: "ફરિયાદો સબમિટ કરો – ક્લિક કરો",
            step4: "{DF_NAME} ના DPO નો સંપર્ક કરો – ક્લિક કરો"
        },
        clickHere: "અહીં",
        successTitle: "તમારી સંમતિ સબમિટ કરવામાં આવી છે",
        successDesc: "તમારી સંમતિ અને વિશ્વાસ બદલ આભાર",
        manageConsentsBtn: "તમારી સંમતિઓનું સંચાલન કરો",
        viewReceiptBtn: "સંમતિ રસીદ જુઓ"
    },
    kn: {
        numerals: [
            "೦",
            "೧",
            "೨",
            "೩",
            "೪",
            "೫",
            "೬",
            "೭",
            "೮",
            "೯"
        ],
        header: "ಒಪ್ಪಿಗೆ ರಶೀದಿ",
        receiptId: "ರಶೀದಿ ಐಡಿ:",
        dateTime: "ದಿನಾಂಕ ಮತ್ತು ಸಮಯ:",
        dataPrincipalId: "ಡೇಟಾ ಪ್ರಿನ್ಸಿಪಾಲ್ ಐಡಿ:",
        dataFiduciaryName: "ಡೇಟಾ ಫಿಡ್ಯೂಷಿಯರಿ ಹೆಸರು:",
        nameOfGoodsService: "ಸರಕು/ಸೇವೆಯ ಹೆಸರು:",
        legalStatementLabel: "ಕಾನೂನು ಹೇಳಿಕೆ:",
        purposeHeader: "ಉದ್ದೇಶ",
        purposeColumn: "ಉದ್ದೇಶ",
        dataCollectedColumn: "ಸಂಗ್ರಹಿಸಲಾದ ವೈಯಕ್ತಿಕ ಡೇಟಾ",
        noPurposes: "ಯಾವುದೇ ಉದ್ದೇಶಗಳನ್ನು ಸ್ವೀಕರಿಸಲಾಗಿಲ್ಲ",
        rightsHeader: "ಹಕ್ಕುಗಳು:",
        rightsDescription: "ಡಿಜಿಟಲ್ ವೈಯಕ್ತಿಕ ಡೇಟಾ ಸಂರಕ್ಷಣಾ ಕಾಯ್ದೆ (DPDPA) ಪ್ರಕಾರ, ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ ನೀವು ಈ ಕೆಳಗಿನ ಹಕ್ಕುಗಳನ್ನು ಹೊಂದಿದ್ದೀರಿ:",
        exerciseRightsHeader: "ನನ್ನ ಹಕ್ಕುಗಳನ್ನು ನಾನು ಹೇಗೆ ಚಲಾಯಿಸಬಹುದು:",
        exerciseRightsDescription: "ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ಚಲಾಯಿಸಲು, ದಯವಿಟ್ಟು ಈ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ:",
        contactText: "ನಿಮ್ಮ ಡೇಟಾಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಯಾವುದೇ ವಿನಂತಿಗಳಿಗಾಗಿ, ದಯವಿಟ್ಟು ಸಂಪರ್ಕಿಸಿ -",
        footerNote: "ಟಿಪ್ಪಣಿ: ಕಾನೂನು ಮತ್ತು ಒಪ್ಪಂದದ ಕರಾರುಗಳಿಗೆ ಒಳಪಟ್ಟು 90 ದಿನಗಳ ಒಳಗೆ ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುತ್ತದೆ.",
        legalStatementTemplate: "ನಾನು {BP_NAME} ಗಾಗಿ {DF_NAME} ಗೆ ನನ್ನ ಒಪ್ಪಿಗೆಯನ್ನು ನೀಡಿದ್ದೇನೆ ಎಂದು ನಾನು ಒಪ್ಪಿಕೊಳ್ಳುತ್ತೇನೆ.",
        dpdpaRights: [
            "ವೈಯಕ್ತಿಕ ಡೇಟಾ ಬಗ್ಗೆ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯುವ ಹಕ್ಕು",
            "ವೈಯಕ್ತಿಕ ಡೇಟಾ ತಿದ್ದುಪಡಿ ಮತ್ತು ಅಳಿಸುವ ಹಕ್ಕು",
            "ಕುಂದುಕೊರತೆ ನಿವಾರಣೆಯ ಹಕ್ಕು",
            "ನಾಮನಿರ್ದೇಶನ ಮಾಡುವ ಹಕ್ಕು"
        ],
        exerciseSteps: {
            step1: "ಪ್ರವೇಶ ವಿನಂತಿಯನ್ನು ಸಲ್ಲಿಸಿ – ಕ್ಲಿಕ್ ಮಾಡಿ",
            step2: "{DF_NAME} ಗೆ ನೀಡಲಾದ ನಿಮ್ಮ ಒಪ್ಪಿಗೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ – ಕ್ಲಿಕ್ ಮಾಡಿ",
            step3: "ಕುಂದುಕೊರತೆಗಳನ್ನು ಸಲ್ಲಿಸಿ – ಕ್ಲಿಕ್ ಮಾಡಿ",
            step4: "{DF_NAME} ನ DPO ಅವರನ್ನು ಸಂಪರ್ಕಿಸಿ – ಕ್ಲಿಕ್ ಮಾಡಿ"
        },
        clickHere: "ಇಲ್ಲಿ",
        successTitle: "ನಿಮ್ಮ ಒಪ್ಪಿಗೆಯನ್ನು ಸಲ್ಲಿಸಲಾಗಿದೆ",
        successDesc: "ನಿಮ್ಮ ಒಪ್ಪಿಗೆ ಮತ್ತು ನಂಬಿಕೆಗೆ ಧನ್ಯವಾದಗಳು",
        manageConsentsBtn: "ನಿಮ್ಮ ಒಪ್ಪಿಗೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
        viewReceiptBtn: "ಒಪ್ಪಿಗೆ ರಶೀದಿಯನ್ನು ವೀಕ್ಷಿಸಿ"
    },
    ks: {
        header: "رضامندی ہنٛز رسید",
        receiptId: "رسیدِ آیی ڈی:",
        dateTime: "تأریخ تہٕ وقت:",
        dataPrincipalId: "ڈیٹا پرنسپل آیی ڈی:",
        dataFiduciaryName: "ڈیٹا فیڈوشری سنٛد ناو:",
        nameOfGoodsService: "سامان/خدماتن ہنٛد ناو:",
        legalStatementLabel: "قونونی بیان:",
        purposeHeader: "مقصود",
        purposeColumn: "مقصود",
        dataCollectedColumn: "جمع کرنہٕ آمت ذاتی ڈیٹا",
        noPurposes: "کانہہ تہِ مقصود آو نہٕ قبول کرنہٕ",
        rightsHeader: "حقوق:",
        rightsDescription: "ڈیجیٹل ذاتی ڈیٹا تحفظ ایکٹ (DPDPA) مطابق، چھِ تہیہِ پننس ذاتی ڈیٹا سٟتۍ متعلق یم حقوق حاصل:",
        exerciseRightsHeader: "بہٕ کِتھ کن ہِکہٕ پننۍ حقوق استعمال کٔرتھ:",
        exerciseRightsDescription: "پننۍ حقوق استعمال کرنہٕ خأطرٕ، مہربأنی کٔرتھ کٔریو یم اقدامات:",
        contactText: "تہنٛدِس ڈیٹا ہس متعلق کسی بھی درخواست خأطرٕ، مہربأنی کٔرتھ کٔریو رابطہ -",
        footerNote: "نوٹ: تہنٛز درخواست ییہِ قونونی تہٕ معاہدہ کین ذمہ دارین تحت 90 دۄہن منٛز پروسیس کرنہٕ۔",
        legalStatementTemplate: "بہٕ چھُس اعتراف کران زِ میں دیت {BP_NAME} خأطرٕ {DF_NAME} دٕرِیہِ رضامندی۔",
        dpdpaRights: [
            "ذاتی ڈیٹا متعلق معلومات حأصل کرنک حق",
            "ذاتی ڈیٹا صحیح تہٕ مٹاونُک حق",
            "شکایت دور کرنُک حق",
            "نامزد کرنُک حق"
        ],
        exerciseSteps: {
            step1: "ایکسس درخواست جمع کٔریو – کلک کٔریو",
            step2: "{DF_NAME} حوالہٕ کٔرمژ رضامندی وچھو – کلک کٔریو",
            step3: "شکایت جمع کٔریو – کلک کٔریو",
            step4: "{DF_NAME} سٕنٛدِس DPO سٟتۍ رابطہ کٔریو – کلک کٔریو"
        },
        clickHere: "یتیتھ",
        successTitle: "तुहंज़ रज़ामंदी गेय जमा",
        successDesc: "तुहंज़ रज़ामंदी तॖ भरोसा करनॖ बापत शुक्रिया",
        manageConsentsBtn: "पनॖन रज़ामंदी करिव मैनेज",
        viewReceiptBtn: "رज़ामंदी रसीद वुछिव"
    },
    kok: {
        header: "संमती पावती",
        receiptId: "पावती आयडी:",
        dateTime: "तारीख आनी वेळ:",
        dataPrincipalId: "डेटा प्रिन्सिपल आयडी:",
        dataFiduciaryName: "डेटा फिड्यूशरीचें नांव:",
        nameOfGoodsService: "म्हाल/सेवेचें नांव:",
        legalStatementLabel: "कायदेशीर विधान:",
        purposeHeader: "उद्देश",
        purposeColumn: "उद्देश",
        dataCollectedColumn: "एकठांय केल्लो वैयक्तीक डेटा",
        noPurposes: "खंयचोच उद्देश स्वीकारूंक ना",
        rightsHeader: "हक्क:",
        rightsDescription: "डिजिटल वैयक्तीक डेटा राखण कायदो (DPDPA) प्रमाण, तुमच्या वैयक्तीक डेटा विशीं तुमकां सकयल दिल्ले हक्क आसात:",
        exerciseRightsHeader: "हांव म्हजे हक्क कसो वापरूंक शकतां:",
        exerciseRightsDescription: "तुमचे हक्क वापरपा खातीर, उपकार करून हीं पावलां अनुसरात:",
        contactText: "तुमच्या डेटा विशीं खंयच्याय विनवणे खातीर, उपकार करून संपर्क करात -",
        footerNote: "टीप: तुमची विनवणी कायदेशीर आनी करारी जबाबदाऱ्यांच्या अधीन रावून 90 दिसांच्या भितर प्रोसेस करतले.",
        legalStatementTemplate: "हांव मान्य करतां की {BP_NAME} खातीर हांवें {DF_NAME} क म्हजी संमती दिली आसा.",
        dpdpaRights: [
            "वैयक्तीक डेटा विशीं म्हायती मेळोवपाचो हक्क",
            "वैयक्तीक डेटा सुदारपाचो आनी पुसून उडोवपाचो हक्क",
            "गाऱ्हाणीं निवारण हक्क",
            "नामित करपाचो हक्क"
        ],
        exerciseSteps: {
            step1: "येरादारी विनवणी सादर करात – क्लिक करात",
            step2: "{DF_NAME} क दिल्ल्यो तुमच्यो संमती पळयात – क्लिक करात",
            step3: "गाऱ्हाणीं सादर करात – क्लिक करात",
            step4: "{DF_NAME} च्या DPO क संपर्क करात – क्लिक करात"
        },
        clickHere: "हांगा",
        successTitle: "तुमची संमती जमा केल्या",
        successDesc: "तुमच्या संमती आनी विश्वासा खातीर देव बरें करूं",
        manageConsentsBtn: "तुमच्यो संमती व्यवस्थापीत करात",
        viewReceiptBtn: "संमती पावती पळयात"
    },
    mai: {
        header: "सहमति रसीद",
        receiptId: "रसीद आईडी:",
        dateTime: "तारीख आ समय:",
        dataPrincipalId: "डेटा प्रिंसिपल आईडी:",
        dataFiduciaryName: "डेटा फिड्यूशियरी के नाम:",
        nameOfGoodsService: "माल/सेवा के नाम:",
        legalStatementLabel: "कानूनी बयान:",
        purposeHeader: "उद्देश्य",
        purposeColumn: "उद्देश्य",
        dataCollectedColumn: "जमा कैल गेल व्यक्तिगत डेटा",
        noPurposes: "कोनो उद्देश्य स्वीकार नहि कैल गेल",
        rightsHeader: "अधिकार:",
        rightsDescription: "डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम (DPDPA) के अनुसार, अहाँक व्यक्तिगत डेटा के संबंध में अहाँ लेल निम्नलिखित अधिकार अछि:",
        exerciseRightsHeader: "हम अपन अधिकारक प्रयोग कोना कऽ सकैत छी:",
        exerciseRightsDescription: "अपन अधिकारक प्रयोग करबाक लेल, कृपया ई चरण सब अनुसरण करू:",
        contactText: "अहाँक डेटा के संबंध में कोनो अनुरोध लेल, कृपया संपर्क करू -",
        footerNote: "नोट: अहाँक अनुरोध के कानूनी आ संविदात्मक दायित्वक अधीन 90 दिनक भीतर संसाधित कैल जायत।",
        legalStatementTemplate: "हम स्वीकार करैत छी जे हम {BP_NAME} लेल {DF_NAME} के अपन सहमति देने छी।",
        dpdpaRights: [
            "व्यक्तिगत डेटा के जानकारी प्राप्त करबाक अधिकार",
            "व्यक्तिगत डेटा के सुधार आ मेटाब के अधिकार",
            "शिकायत निवारण के अधिकार",
            "नामित करबाक अधिकार"
        ],
        exerciseSteps: {
            step1: "एक्सेस अनुरोध जमा करू – क्लिक करू",
            step2: "{DF_NAME} के देल गेल अपन सहमति देखू – क्लिक करू",
            step3: "शिकायत जमा करू – क्लिक करू",
            step4: "{DF_NAME} के डीपीओ सँ संपर्क करू – क्लिक करू"
        },
        clickHere: "एतय",
        successTitle: "अहाँक सहमति जमा कएल गेल अछि",
        successDesc: "अहाँक सहमति आ विश्वास लेल धन्यवाद",
        manageConsentsBtn: "अपन सहमतिक प्रबंधन करू",
        viewReceiptBtn: "सहमति रसीद देखू"
    },
    ml: {
        numerals: [
            "൦",
            "൧",
            "൨",
            "൩",
            "൪",
            "൫",
            "൬",
            "൭",
            "൮",
            "൯"
        ],
        header: "സമ്മത രസീത്",
        receiptId: "രസീത് ഐഡി:",
        dateTime: "തീയതിയും സമയവും:",
        dataPrincipalId: "ഡാറ്റ പ്രിൻസിപ്പൽ ഐഡി:",
        dataFiduciaryName: "ഡാറ്റ ഫിഡ്യൂഷ്യറി പേര്:",
        nameOfGoodsService: "സാധനത്തിൻ്റെ/സേവനത്തിൻ്റെ പേര്:",
        legalStatementLabel: "നിയമപരമായ പ്രസ്താവന:",
        purposeHeader: "ഉദ്ദേശ്യം",
        purposeColumn: "ഉദ്ദേശ്യം",
        dataCollectedColumn: "ശേഖരിച്ച വ്യക്തിഗത വിവരങ്ങൾ",
        noPurposes: "ഉദ്ദേശ്യങ്ങളൊന്നും അംഗീകരിച്ചിട്ടില്ല",
        rightsHeader: "അവകാശങ്ങൾ:",
        rightsDescription: "ഡിജിറ്റൽ പേഴ്സണൽ ഡാറ്റ പ്രൊട്ടക്ഷൻ ആക്ട് (DPDPA) പ്രകാരം, നിങ്ങളുടെ വ്യക്തിഗത വിവരങ്ങൾ സംബന്ധിച്ച് നിങ്ങൾക്ക് താഴെ പറയുന്ന അവകാശങ്ങളുണ്ട്:",
        exerciseRightsHeader: "എനിക്ക് എൻ്റെ അവകാശങ്ങൾ എങ്ങനെ വിനിയോഗിക്കാം:",
        exerciseRightsDescription: "നിങ്ങളുടെ അവകാശങ്ങൾ വിനിയോഗിക്കുന്നതിന്, ദയവായി ഈ ഘട്ടങ്ങൾ പാലിക്കുക:",
        contactText: "നിങ്ങളുടെ ഡാറ്റ സംബന്ധിച്ച ഏത് അഭ്യർത്ഥനകൾക്കും, ദയവായി ബന്ധപ്പെടുക -",
        footerNote: "ശ്രദ്ധിക്കുക: നിയമപരവും കരാർപരവുമായ ബാധ്യതകൾക്ക് വിധേയമായി 90 ദിവസത്തിനുള്ളിൽ നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നതാണ്.",
        legalStatementTemplate: "{BP_NAME}-ന് വേണ്ടി {DF_NAME}-ന് ഞാൻ എൻ്റെ സമ്മതം നൽകിയതായി ഞാൻ സമ്മതിക്കുന്നു.",
        dpdpaRights: [
            "വ്യക്തിഗത വിവരങ്ങളെക്കുറിച്ചുള്ള വിവരങ്ങൾ അറിയാനുള്ള അവകാശം",
            "വ്യക്തിഗത വിവരങ്ങൾ തിരുത്താനും നീക്കം ചെയ്യാനുമുള്ള അവകാശം",
            "പരാതി പരിഹാരത്തിനുള്ള അവകാശം",
            "നോമിനേറ്റ് ചെയ്യാനുള്ള അവകാശം"
        ],
        exerciseSteps: {
            step1: "ആക്സസ് അഭ്യർത്ഥന സമർപ്പിക്കുക – ക്ലിക്ക് ചെയ്യുക",
            step2: "{DF_NAME}-ന് നൽകിയ നിങ്ങളുടെ സമ്മതങ്ങൾ കാണുക – ക്ലിക്ക് ചെയ്യുക",
            step3: "പരാതികൾ സമർപ്പിക്കുക – ക്ലിക്ക് ചെയ്യുക",
            step4: "{DF_NAME}-ൻ്റെ DPO-യുമായി ബന്ധപ്പെടുക – ക്ലിക്ക് ചെയ്യുക"
        },
        clickHere: "ഇവിടെ",
        successTitle: "നിങ്ങളുടെ സമ്മതം സമർപ്പിച്ചു",
        successDesc: "നിങ്ങളുടെ സമ്മതത്തിനും വിശ്വാസത്തിനും നന്ദി",
        manageConsentsBtn: "നിങ്ങളുടെ സമ്മതങ്ങൾ നിയന്ത്രിക്കുക",
        viewReceiptBtn: "സമ്മത രസീത് കാണുക"
    },
    mni: {
        numerals: [
            "꯰",
            "꯱",
            "꯲",
            "꯳",
            "꯴",
            "꯵",
            "꯶",
            "꯷",
            "꯸",
            "꯹"
        ],
        header: "অয়াবা রেসিপ্ট",
        receiptId: "রেসিপ্ট আইডি:",
        dateTime: "তাং অমসুং মতম:",
        dataPrincipalId: "দেতা প্রিন্সিপাল আইডি:",
        dataFiduciaryName: "দেতা ফিদুসিয়ারি মিং:",
        nameOfGoodsService: "পোৎলম/সেবগী মিং:",
        legalStatementLabel: "আইনগী ৱারোল:",
        purposeHeader: "পান্দম",
        purposeColumn: "পান্দম",
        dataCollectedColumn: "খোমসিনখিবা মমিংদগী দেতা",
        noPurposes: "অয়াবা পীবগী পান্দম লৈতে",
        rightsHeader: "হকশিং:",
        rightsDescription: "দিজিতেল পার্সুনেল দেতা প্রোতেক্সন এক্ট (DPDPA) গী মতুং ইন্না, নহাক্কী মমিংদগী দেতাগী মতাংদা নহাক্কী মখাগী হকশিং অসি লৈ:",
        exerciseRightsHeader: "ঐহাক্না ঐহাক্কী হকশিং করম্না শীজিন্নগনি:",
        exerciseRightsDescription: "নহাক্কী হকশিং শীজিন্ননবা, চানবীদুনা মখাগী খোংথাংশিং অসি ইনবীয়ু:",
        contactText: "নহাক্কী দেতাগী মতাংদা হংবিনিংবা লৈরবদি, চানবীদুনা পাউ ফাওবীয়ু -",
        footerNote: "খঙজিনবীয়ু: নহাক্কী অপাম্বা অদু আইনগী অমসুং কনত্রেক্টকী ওইবা বাধ্যতশিংগী মনুং চন্না নুমিৎ ৯০ গী মনুংদা থবক পাংথোক্কনি।",
        legalStatementTemplate: "ঐহাক্না {BP_NAME} গীদমক {DF_NAME} দা অয়াবা পীখ্রে হায়না শক্ খঙলে।",
        dpdpaRights: [
            "মমিংদগী দেতাগী মরমদা ইনফোর্মেসন ফংবগী হক",
            "মমিংদগী দেতা চুমথোকপা অমসুং মুত্থৎপগী হক",
            "ৱাকৎ কোকপগী হক",
            "মিং চনবগী হক"
        ],
        exerciseSteps: {
            step1: "এক্সেস রিকুয়েস্ত থাজিনবীয়ু – ক্লিক তৌবীয়ু",
            step2: "{DF_NAME} দা পীখিবা নহাক্কী অয়াবশিং য়েংবীয়ু – ক্লিক তৌবীয়ু",
            step3: "ৱাকৎশিং থাজিনবীয়ু – ক্লিক তৌবীয়ু",
            step4: "{DF_NAME} গী DPO গা পাউ ফাওবীয়ু – ক্লিক তৌবীয়ু"
        },
        clickHere: "মফম অসিদা",
        successTitle: "ꯅꯍꯥꯛꯀꯤ ꯑꯌꯥꯕ ꯄꯤꯁꯤꯟꯈ꯭ꯔꯦ",
        successDesc: "ꯅꯍꯥꯛꯀꯤ ꯑꯌꯥꯕ ꯑꯃꯁꯨꯡ ꯊꯥꯖꯕꯒꯤꯗꯃꯛ ꯊꯥꯒꯠꯆꯔꯤ",
        manageConsentsBtn: "ꯅꯍꯥꯛꯀꯤ ꯑꯌꯥꯕꯁꯤꯡ ꯃꯦꯅꯦꯖ ꯇꯧꯕꯤꯌꯨ",
        viewReceiptBtn: "ꯑꯌꯥꯕ ꯔꯁꯤꯗ ꯌꯦꯡꯕꯤꯌꯨ"
    },
    mr: {
        header: "संमती पावती",
        receiptId: "पावती आयडी:",
        dateTime: "तारीख आणि वेळ:",
        dataPrincipalId: "डेटा प्रिन्सिपल आयडी:",
        dataFiduciaryName: "डेटा फिड्यूशरीचे नाव:",
        nameOfGoodsService: "वस्तू/सेवेचे नाव:",
        legalStatementLabel: "कायदेशीर विधान:",
        purposeHeader: "उद्देश",
        purposeColumn: "उद्देश",
        dataCollectedColumn: "गोळा केलेला वैयक्तिक डेटा",
        noPurposes: "कोणतेही उद्देश स्वीकारले नाहीत",
        rightsHeader: "हक्क:",
        rightsDescription: "डिजिटल वैयक्तिक डेटा संरक्षण कायदा (DPDPA) नुसार, तुमच्या वैयक्तिक डेटाच्या संदर्भात तुम्हाला खालील हक्क आहेत:",
        exerciseRightsHeader: "मी माझे हक्क कसे वापरू शकतो:",
        exerciseRightsDescription: "तुमचे हक्क वापरण्यासाठी, कृपया खालील पायऱ्या फॉलो करा:",
        contactText: "तुमच्या डेटाच्या संदर्भात कोणत्याही विनंतीसाठी, कृपया संपर्क करा -",
        footerNote: "टीप: तुमची विनंती कायदेशीर आणि करारविषयक जबाबदाऱ्यांच्या अधीन राहून 90 दिवसांच्या आत प्रोसेस केली जाईल.",
        legalStatementTemplate: "मी मान्य करतो की मी {BP_NAME} साठी {DF_NAME} ला माझी संमती दिली आहे.",
        dpdpaRights: [
            "वैयक्तिक डेटाबद्दल माहिती मिळवण्याचा हक्क",
            "वैयक्तिक डेटा दुरुस्ती आणि नष्ट करण्याचा हक्क",
            "तक्रार निवारणाचा हक्क",
            "नामित करण्याचा हक्क"
        ],
        exerciseSteps: {
            step1: "प्रवेश विनंती सबमिट करा – क्लिक करा",
            step2: "{DF_NAME} ला दिलेल्या तुमच्या संमती पहा – क्लिक करा",
            step3: "तक्रारी सबमिट करा – क्लिक करा",
            step4: "{DF_NAME} च्या DPO शी संपर्क साधा – क्लिक करा"
        },
        clickHere: "येथे",
        successTitle: "आपली संमती जमा केली आहे",
        successDesc: "आपल्या संमती आणि विश्वासाबद्दल धन्यवाद",
        manageConsentsBtn: "आपल्या संमतींचे व्यवस्थापन करा",
        viewReceiptBtn: "संमती पावती पहा"
    },
    ne: {
        header: "सहमति रसिद",
        receiptId: "रसिद आईडी:",
        dateTime: "मिति र समय:",
        dataPrincipalId: "डेटा प्रिन्सिपल आईडी:",
        dataFiduciaryName: "डेटा फिड्युसियरी नाम:",
        nameOfGoodsService: "सामान/सेवाको नाम:",
        legalStatementLabel: "कानुनी बयान:",
        purposeHeader: "उद्देश्य",
        purposeColumn: "उद्देश्य",
        dataCollectedColumn: "संकलन गरिएको व्यक्तिगत डेटा",
        noPurposes: "कुनै उद्देश्य स्वीकार गरिएको छैन",
        rightsHeader: "अधिकारहरू:",
        rightsDescription: "डिजिटल व्यक्तिगत डेटा संरक्षण ऐन (DPDPA) अनुसार, तपाईंको व्यक्तिगत डेटाको सम्बन्धमा तपाईंसँग निम्न अधिकारहरू छन्:",
        exerciseRightsHeader: "म मेरा अधिकारहरू कसरी प्रयोग गर्न सक्छु:",
        exerciseRightsDescription: "आफ्ना अधिकारहरू प्रयोग गर्न, कृपया यी चरणहरू पालना गर्नुहोस्:",
        contactText: "तपाईंको डेटाको सम्बन्धमा कुनै अनुरोधका लागि, कृपया सम्पर्क गर्नुहोस् -",
        footerNote: "नोट: तपाईंको अनुरोध कानुनी र सम्झौता दायित्वहरूको अधीनमा रही 90 दिन भित्र प्रशोधन गरिनेछ।",
        legalStatementTemplate: "म स्वीकार गर्दछु कि मैले {BP_NAME} को लागि {DF_NAME} लाई मेरो सहमति दिएको छु।",
        dpdpaRights: [
            "व्यक्तिगत डेटा बारे जानकारी प्राप्त गर्ने अधिकार",
            "व्यक्तिगत डेटा सुधार र मेटाउने अधिकार",
            "गुनासो निवारणको अधिकार",
            "नामित गर्ने अधिकार"
        ],
        exerciseSteps: {
            step1: "पहुँच अनुरोध पेश गर्नुहोस् – क्लिक गर्नुहोस्",
            step2: "{DF_NAME} लाई दिएका आफ्ना सहमतिहरू हेर्नुहोस् – क्लिक गर्नुहोस्",
            step3: "गुनासोहरू पेश गर्नुहोस् – क्लिक गर्नुहोस्",
            step4: "{DF_NAME} को डीपीओसँग सम्पर्क गर्नुहोस् – क्लिक गर्नुहोस्"
        },
        clickHere: "यहाँ",
        successTitle: "तपाईंको सहमति पेश गरिएको छ",
        successDesc: "तपाईंको सहमति र विश्वासको लागि धन्यवाद",
        manageConsentsBtn: "तपाईंका सहमतिहरू व्यवस्थापन गर्नुहोस्",
        viewReceiptBtn: "सहमति रसीद हेर्नुहोस्"
    },
    or: {
        numerals: [
            "୦",
            "୧",
            "୨",
            "୩",
            "୪",
            "୫",
            "୬",
            "୭",
            "୮",
            "୯"
        ],
        header: "ସମ୍ମତି ରସିଦ",
        receiptId: "ରସିଦ ଆଇଡି:",
        dateTime: "ତାରିଖ ଏବଂ ସମୟ:",
        dataPrincipalId: "ଡାଟା ପ୍ରିନ୍ସିପାଲ୍ ଆଇଡି:",
        dataFiduciaryName: "ଡାଟା ଫିଡ୍ୟୁସିଆରୀ ନାମ:",
        nameOfGoodsService: "ସାମଗ୍ରୀ/ସେବା ନାମ:",
        legalStatementLabel: "ଆଇନଗତ ବିବୃତ୍ତି:",
        purposeHeader: "ଉଦ୍ଦେଶ୍ୟ",
        purposeColumn: "ଉଦ୍ଦେଶ୍ୟ",
        dataCollectedColumn: "ସଂଗୃହିତ ବ୍ୟକ୍ତିଗତ ଡାଟା",
        noPurposes: "କୌଣସି ଉଦ୍ଦେଶ୍ୟ ଗ୍ରହଣ କରାଯାଇ ନାହିଁ",
        rightsHeader: "ଅଧିକାର:",
        rightsDescription: "ଡିଜିଟାଲ୍ ବ୍ୟକ୍ତିଗତ ଡାଟା ସୁରକ୍ଷା ଅଧିନିୟମ (DPDPA) ଅନୁଯାୟୀ, ଆପଣଙ୍କ ବ୍ୟକ୍ତିଗତ ଡାଟା ସମ୍ବନ୍ଧରେ ଆପଣଙ୍କର ନିମ୍ନଲିଖିତ ଅଧିକାର ଅଛି:",
        exerciseRightsHeader: "ମୁଁ ମୋର ଅଧିକାର କିପରି ବ୍ୟବହାର କରିପାରିବି:",
        exerciseRightsDescription: "ଆପଣଙ୍କର ଅଧିକାର ବ୍ୟବହାର କରିବାକୁ, ଦୟାକରି ନିମ୍ନଲିଖିତ ପଦକ୍ଷେପଗୁଡିକ ଅନୁସରଣ କରନ୍ତୁ:",
        contactText: "ଆପଣଙ୍କର ଡାଟା ସମ୍ବନ୍ଧୀୟ ଯେକୌଣସି ଅନୁରୋଧ ପାଇଁ, ଦୟାକରି ଯୋଗାଯୋଗ କରନ୍ତୁ -",
        footerNote: "ଦ୍ରଷ୍ଟବ୍ୟ: ଆଇନଗତ ଏବଂ ଚୁକ୍ତିଭିତ୍ତିକ ବାଧ୍ୟତା ଅଧୀନରେ ଆପଣଙ୍କର ଅନୁରୋଧ 90 ଦିନ ମଧ୍ୟରେ ପ୍ରକ୍ରିୟାକରଣ କରାଯିବ।",
        legalStatementTemplate: "ମୁଁ ସ୍ୱୀକାର କରୁଛି ଯେ ମୁଁ {BP_NAME} ପାଇଁ {DF_NAME} କୁ ମୋର ସମ୍ମତି ପ୍ରଦାନ କରିଛି।",
        dpdpaRights: [
            "ବ୍ୟକ୍ତିଗତ ଡାଟା ବିଷୟରେ ସୂଚନା ପାଇବାର ଅଧିକାର",
            "ବ୍ୟକ୍ତିଗତ ଡାଟା ସଂଶୋଧନ ଏବଂ ଲିଭାଇବାର ଅଧିକାର",
            "ଅଭିଯୋଗ ନିବାରଣର ଅଧିକାର",
            "ମନୋନୀତ କରିବାର ଅଧିକାର"
        ],
        exerciseSteps: {
            step1: "ଏକ ଆକ୍ସେସ୍ ଅନୁରୋଧ ଦାଖଲ କରନ୍ତୁ – କ୍ଲିକ୍ କରନ୍ତୁ",
            step2: "{DF_NAME} କୁ ଦିଆଯାଇଥିବା ଆପଣଙ୍କର ସମ୍ମତି ଦେଖନ୍ତୁ – କ୍ଲିକ୍ କରନ୍ତୁ",
            step3: "ଅଭିଯୋଗ ଦାଖଲ କରନ୍ତୁ – କ୍ଲିକ୍ କରନ୍ତୁ",
            step4: "{DF_NAME} ର DPO ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ – କ୍ଲିକ୍ କରନ୍ତୁ"
        },
        clickHere: "ଏଠାରେ",
        successTitle: "ଆପଣଙ୍କ ସମ୍ମତି ଦାଖଲ କରାଯାଇଛି",
        successDesc: "ଆପଣଙ୍କ ସମ୍ମତି ଏବଂ ବିଶ୍ୱାସ ପାଇଁ ଧନ୍ୟବାଦ",
        manageConsentsBtn: "ଆପଣଙ୍କ ସମ୍ମତି ପରିଚାଳନା କରନ୍ତୁ",
        viewReceiptBtn: "ସମ୍ମତି ରସିଦ ଦେଖନ୍ତୁ"
    },
    pa: {
        numerals: [
            "੦",
            "੧",
            "੨",
            "੩",
            "੪",
            "੫",
            "੬",
            "੭",
            "੮",
            "੯"
        ],
        header: "ਸਹਿਮਤੀ ਰਸੀਦ",
        receiptId: "ਰਸੀਦ ਆਈਡੀ:",
        dateTime: "ਮਿਤੀ ਅਤੇ ਸਮਾਂ:",
        dataPrincipalId: "ਡਾਟਾ ਪ੍ਰਿੰਸੀਪਲ ਆਈਡੀ:",
        dataFiduciaryName: "ਡਾਟਾ ਫਿਡਿਊਸ਼ਰੀ ਨਾਮ:",
        nameOfGoodsService: "ਵਸਤੂ/ਸੇਵਾ ਦਾ ਨਾਮ:",
        legalStatementLabel: "ਕਾਨੂੰਨੀ ਬਿਆਨ:",
        purposeHeader: "ਉਦੇਸ਼",
        purposeColumn: "ਉਦੇਸ਼",
        dataCollectedColumn: "ਇਕੱਠਾ ਕੀਤਾ ਨਿੱਜੀ ਡਾਟਾ",
        noPurposes: "ਕੋਈ ਉਦੇਸ਼ ਸਵੀਕਾਰ ਨਹੀਂ ਕੀਤਾ ਗਿਆ",
        rightsHeader: "ਅਧਿਕਾਰ:",
        rightsDescription: "ਡਿਜੀਟਲ ਨਿੱਜੀ ਡਾਟਾ ਸੁਰੱਖਿਆ ਐਕਟ (DPDPA) ਦੇ ਅਨੁਸਾਰ, ਤੁਹਾਡੇ ਨਿੱਜੀ ਡਾਟਾ ਦੇ ਸੰਬੰਧ ਵਿੱਚ ਤੁਹਾਡੇ ਕੋਲ ਹੇਠ ਲਿਖੇ ਅਧਿਕਾਰ ਹਨ:",
        exerciseRightsHeader: "ਮੈਂ ਆਪਣੇ ਅਧਿਕਾਰਾਂ ਦੀ ਵਰਤੋਂ ਕਿਵੇਂ ਕਰ ਸਕਦਾ ਹਾਂ:",
        exerciseRightsDescription: "ਆਪਣੇ ਅਧਿਕਾਰਾਂ ਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ ਇਹ ਕਦਮ ਚੁੱਕੋ:",
        contactText: "ਤੁਹਾਡੇ ਡਾਟਾ ਸੰਬੰਧੀ ਕਿਸੇ ਵੀ ਬੇਨਤੀ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ ਸੰਪਰਕ ਕਰੋ -",
        footerNote: "ਨੋਟ: ਤੁਹਾਡੀ ਬੇਨਤੀ ਕਾਨੂੰਨੀ ਅਤੇ ਇਕਰਾਰਨਾਮੇ ਦੀਆਂ ਜ਼ਿੰਮੇਵਾਰੀਆਂ ਦੇ ਅਧੀਨ 90 ਦਿਨਾਂ ਦੇ ਅੰਦਰ ਪ੍ਰੋਸੈਸ ਕੀਤੀ ਜਾਵੇਗੀ।",
        legalStatementTemplate: "ਮੈਂ ਮੰਨਦਾ ਹਾਂ ਕਿ ਮੈਂ {BP_NAME} ਲਈ {DF_NAME} ਨੂੰ ਆਪਣੀ ਸਹਿਮਤੀ ਦਿੱਤੀ ਹੈ।",
        dpdpaRights: [
            "ਨਿੱਜੀ ਡਾਟਾ ਬਾਰੇ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰਨ ਦਾ ਅਧਿਕਾਰ",
            "ਨਿੱਜੀ ਡਾਟਾ ਸੁਧਾਰ ਅਤੇ ਮਿਟਾਉਣ ਦਾ ਅਧਿਕਾਰ",
            "ਸ਼ਿਕਾਇਤ ਨਿਵਾਰਣ ਦਾ ਅਧਿਕਾਰ",
            "ਨਾਮਜ਼ਦ ਕਰਨ ਦਾ ਅਧਿਕਾਰ"
        ],
        exerciseSteps: {
            step1: "ਪਹੁੰਚ ਬੇਨਤੀ ਜਮ੍ਹਾਂ ਕਰੋ – ਕਲਿੱਕ ਕਰੋ",
            step2: "{DF_NAME} ਨੂੰ ਦਿੱਤੀਆਂ ਆਪਣੀਆਂ ਸਹਿਮਤੀਆਂ ਦੇਖੋ – ਕਲਿੱਕ ਕਰੋ",
            step3: "ਸ਼ਿਕਾਇਤਾਂ ਜਮ੍ਹਾਂ ਕਰੋ – ਕਲਿੱਕ ਕਰੋ",
            step4: "{DF_NAME} ਦੇ DPO ਨਾਲ ਸੰਪਰਕ ਕਰੋ – ਕਲਿੱਕ ਕਰੋ"
        },
        clickHere: "ਇੱਥੇ",
        successTitle: "ਤੁਹਾਡੀ ਸਹਿਮਤੀ ਜਮ੍ਹਾਂ ਕਰ ਦਿੱਤੀ ਗਈ ਹੈ",
        successDesc: "ਤੁਹਾਡੀ ਸਹਿਮਤੀ ਅਤੇ ਭਰੋਸੇ ਲਈ ਧੰਨਵਾਦ",
        manageConsentsBtn: "ਆਪਣੀਆਂ ਸਹਿਮਤੀਆਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ",
        viewReceiptBtn: "ਸਹਿਮਤੀ ਰਸੀਦ ਦੇਖੋ"
    },
    sa: {
        header: "सहमति रसीद",
        receiptId: "रसीद आईडी:",
        dateTime: "दिनाङ्कः समयः च:",
        dataPrincipalId: "डेटा प्रिन्सिपल आईडी:",
        dataFiduciaryName: "डेटा फिड्यूशियरी नाम:",
        nameOfGoodsService: "वस्तु/सेवा नाम:",
        legalStatementLabel: "न्यायिकं कथनम्:",
        purposeHeader: "उद्देश्यम्",
        purposeColumn: "उद्देश्यम्",
        dataCollectedColumn: "सङ्गृहीतः व्यक्तिगतदत्तांशः",
        noPurposes: "कोऽपि उद्देश्यः न स्वीकृतः",
        rightsHeader: "अधिकाराणि:",
        rightsDescription: "डिजिटल व्यक्तिगतदत्तांशसंरक्षणअधिनियम (DPDPA) अनुसारं, भवतः/भवत्याः व्यक्तिगतदत्तांशविषये अधोलिखिताः अधिकाराः सन्ति:",
        exerciseRightsHeader: "अहं मम अधिकारान् कथं प्रयोक्तुं शक्नोमि:",
        exerciseRightsDescription: "भवतः/भवत्याः अधिकारान् प्रयोक्तुं, कृपया एतानि पदानि अनुसरतु:",
        contactText: "भवतः/भवत्याः दत्तांशविषये कस्यापि अनुरोधस्य कृते, कृपया संपर्कं करोतु -",
        footerNote: "टिप्पणी: भवतः/भवत्याः अनुरोधः न्यायिक-संविदा-बाध्यतानाम् अधीनं 90 दिनेषु संसाधितः भविष्यति।",
        legalStatementTemplate: "अहं स्वीकरोमि यत् मया {BP_NAME} कृते {DF_NAME} इत्यस्मै मम सहमतिः प्रदत्ता।",
        dpdpaRights: [
            "व्यक्तिगतदत्तांशविषये सूचनां प्राप्तुं अधिकारः",
            "व्यक्तिगतदत्तांशस्य संशोधनस्य मार्जनस्य च अधिकारः",
            "शिकायतनिवारणस्य अधिकारः",
            "नामितस्य अधिकारः"
        ],
        exerciseSteps: {
            step1: "अभिगमन-अनुरोधं प्रस्तौतु – क्लिक् करोतु",
            step2: "{DF_NAME} इत्यस्मै प्रदत्तां र्भवतः/भवत्याः सहमतिं पश्यतु – क्लिक् करोतु",
            step3: "शिकायतं प्रस्तौतु – क्लिक् करोतु",
            step4: "{DF_NAME} इत्यस्य DPO इत्यनेन सह संपर्कं करोतु – क्लिक् करोतु"
        },
        clickHere: "अत्र",
        successTitle: "भवतां स्वीकृतिः समர்ப்பिता",
        successDesc: "भवतां स्वीकृतिः विश्वासः च इत्यर्थं धन्यवादः",
        manageConsentsBtn: "स्वस्य स्वीकृतीः प्रबंधयन्तु",
        viewReceiptBtn: "स्वीकृति-रसीदं पश्यन्तु"
    },
    sat: {
        numerals: [
            "᱐",
            "᱑",
            "᱒",
            "᱓",
            "᱔",
            "᱕",
            "᱖",
            "᱗",
            "᱘",
            "᱙"
        ],
        header: "ᱥᱚᱦᱚᱢᱚᱛᱤ ᱨᱟᱥᱤᱫᱽ",
        receiptId: "ᱨᱟᱥᱤᱫᱽ ID:",
        dateTime: "ᱢᱟᱹᱦᱤᱛ ᱟᱨ ᱚᱠᱛᱚ:",
        dataPrincipalId: "ᱰᱮᱴᱟ ᱯᱨᱤᱱᱥᱤᱯᱟᱞ ID:",
        dataFiduciaryName: "ᱰᱮᱴᱟ ᱯᱷᱤᱰᱭᱩᱥᱤᱭᱟᱨᱤ ᱧᱩᱛᱩᱢ:",
        nameOfGoodsService: "ᱡᱤᱱᱤᱥ/ᱥᱮᱵᱟ ᱨᱮᱱᱟᱜ ᱧᱩᱛᱩᱢ:",
        legalStatementLabel: "ᱟᱹᱭᱤᱱ ᱨᱮᱱᱟᱜ ᱠᱟᱛᱷᱟ:",
        purposeHeader: "ᱡᱚᱥ",
        purposeColumn: "ᱡᱚᱥ",
        dataCollectedColumn: "ᱡᱟᱣᱨᱟ ᱟᱠᱟᱱ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱮᱴᱟ",
        noPurposes: "ᱡᱟᱦᱟᱸ ᱡᱚᱥ ᱦᱚᱸ ᱵᱟᱝ ᱟᱛᱟᱝ ᱟᱠᱟᱱᱟ",
        rightsHeader: "ᱦᱚᱠ ᱠᱚ:",
        rightsDescription: "ᱰᱤᱡᱤᱴᱟᱞ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱮᱴᱟ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱟᱹᱨᱤ (DPDPA) ᱞᱮᱠᱟᱛᱮ, ᱟᱢᱟᱜ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱮᱴᱟ ᱵᱟᱵᱚᱛ ᱛᱮ ᱞᱟᱛᱟᱨ ᱨᱮ ᱮᱢ ᱟᱠᱟᱱ ᱦᱚᱠ ᱠᱚ ᱢᱮᱱᱟᱜᱼᱟ:",
        exerciseRightsHeader: "ᱤᱧ ᱨᱮᱱᱟᱜ ᱦᱚᱠ ᱤᱧ ᱪᱮᱠᱟᱛᱮᱧ ᱵᱮᱵᱷᱟᱨ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ:",
        exerciseRightsDescription: "ᱟᱢᱟᱜ ᱦᱚᱠ ᱠᱚ ᱵᱮᱵᱷᱟᱨ ᱞᱟᱹᱜᱤᱫ, ᱫᱟᱭᱟᱠᱟᱛᱮ ᱱᱚᱣᱟ ᱠᱚ ᱢᱟᱱᱟᱣ ᱢᱮ:",
        contactText: "ᱟᱢᱟᱜ ᱰᱮᱴᱟ ᱵᱟᱵᱚᱛ ᱛᱮ ᱡᱟᱦᱟᱸ ᱱᱮᱦᱚᱨ ᱞᱟᱹᱜᱤᱫ, ᱫᱟᱭᱟᱠᱟᱛᱮ ᱥᱟᱹᱜᱟᱹᱭ ᱡᱚᱲᱟᱣ ᱢᱮ -",
        footerNote: "ᱱᱚᱴ: ᱟᱢᱟᱜ ᱱᱮᱦᱚᱨ ᱫᱚ ᱟᱹᱭᱤᱱ ᱟᱨ ᱪᱩᱠᱛᱤ ᱨᱮᱱᱟᱜ ᱟᱹᱨᱤ ᱞᱮᱠᱟᱛᱮ ᱙᱐ ᱢᱟᱦᱟ ᱵᱷᱤᱛᱨᱤ ᱨᱮ ᱠᱟᱹᱢᱤ ᱦᱩᱭᱩᱜᱼᱟ᱾",
        legalStatementTemplate: "ᱤᱧ ᱥᱤᱠᱟᱹᱨᱮᱫᱟᱹᱧ ᱡᱮ ᱤᱧ {BP_NAME} ᱞᱟᱹᱜᱤᱫ {DF_NAME} ᱴᱷᱮᱱ ᱥᱚᱦᱚᱢᱚᱛᱤᱧ ᱮᱢ ᱟᱠᱟᱫᱟ᱾",
        dpdpaRights: [
            "ᱱᱤᱡᱮᱨᱟᱜ ᱰᱮᱴᱟ ᱵᱟᱵᱚᱛ ᱛᱮ ᱵᱟᱰᱟᱭ ᱧᱟᱢ ᱨᱮᱱᱟᱜ ᱦᱚᱠ",
            "ᱱᱤᱡᱮᱨᱟᱜ ᱰᱮᱴᱟ ᱥᱩᱫᱷᱟᱹᱨ ᱟᱨ ᱢᱮᱴᱟᱣ ᱨᱮᱱᱟᱜ ᱦᱚᱠ",
            "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱥᱚᱞᱦᱮ ᱨᱮᱱᱟᱜ ᱦᱚᱠ",
            "ᱧᱩᱛᱩᱢ ᱮᱢ ᱨᱮᱱᱟᱜ ᱦᱚᱠ"
        ],
        exerciseSteps: {
            step1: "ᱮᱠᱥᱮᱥ ᱱᱮᱦᱚᱨ ᱡᱚᱢᱟᱭ ᱢᱮ – ᱠᱞᱤᱠ ᱢᱮ",
            step2: "{DF_NAME} ᱴᱷᱮᱱ ᱮᱢ ᱟᱠᱟᱱ ᱟᱢᱟᱜ ᱥᱚᱦᱚᱢᱚᱛᱤ ᱧᱮᱞ ᱢᱮ – ᱠᱞᱤᱠ ᱢᱮ",
            step3: "ᱮᱴᱠᱮᱴᱚᱬᱮ ᱡᱚᱢᱟᱭ ᱢᱮ – ᱠᱞᱤᱠ ᱢᱮ",
            step4: "{DF_NAME} ᱨᱤᱱᱤᱡ DPO ᱥᱟᱞᱟᱜ ᱥᱟᱹᱜᱟᱹᱭ ᱡᱚᱲᱟᱣ ᱢᱮ – ᱠᱞᱤᱠ ᱢᱮ"
        },
        clickHere: "ᱱᱚᱸᱰᱮ",
        successTitle: "ᱟᱢᱟᱜ ᱥᱚᱦᱚᱢᱚᱛᱤ ᱡᱚᱢᱟ ᱟᱠᱟᱱᱟ",
        successDesc: "ᱟᱢᱟᱜ ᱥᱚᱦᱚᱢᱚᱛᱤ ᱟᱨ ᱯᱟᱹᱛᱭᱟᱹᱣ ᱞᱟᱹᱜᱤᱫ ᱥᱟᱨᱦᱟᱣ",
        manageConsentsBtn: "ᱟᱢᱟᱜ ᱥᱚᱦᱚᱢᱚᱛᱤ ᱠᱚ ᱥᱟᱢᱵᱽᱲᱟᱣ ᱢᱮ",
        viewReceiptBtn: "ᱥᱚᱦᱚᱢᱚᱛᱤ ᱨᱟᱹᱥᱤᱫᱽ ᱧᱮᱞ ᱢᱮ"
    },
    sd: {
        header: "رضامندي رسيد",
        receiptId: "رسيد ي سڃاڻپ:",
        dateTime: "تاريخ ۽ وقت:",
        dataPrincipalId: "ڊيٽا پرنسپل سڃاڻپ:",
        dataFiduciaryName: "ڊيٽا فيڊيوشري جو نالو:",
        nameOfGoodsService: "شيءِ/خدمت جو نالو:",
        legalStatementLabel: "قانوني بيان:",
        purposeHeader: "مقصد",
        purposeColumn: "مقصد",
        dataCollectedColumn: "گڏ ڪيل ذاتي ڊيٽا",
        noPurposes: "ڪوبه مقصد قبول نه ڪيو ويو",
        rightsHeader: "حق:",
        rightsDescription: "ڊجيٽل پرسنل ڊيٽا پروٽيڪشن ايڪٽ (DPDPA) موجب، توهان جي ذاتي ڊيٽا بابت توهان کي هيٺيان حق حاصل آهن:",
        exerciseRightsHeader: "مان پنهنجا حق ڪيئن استعمال ڪري سگهان ٿو:",
        exerciseRightsDescription: "پنهنجا حق استعمال ڪرڻ لاءِ، مهرباني ڪري هيٺين مرحلن تي عمل ڪريو:",
        contactText: "توهان جي ڊيٽا بابت ڪنهن به درخواست لاءِ، مهرباني ڪري رابطو ڪريو -",
        footerNote: "نوٽ: توهان جي درخواست قانوني ۽ معاهدي جي ذميوارين تحت 90 ڏينهن اندر پروسيس ڪئي ويندي.",
        legalStatementTemplate: "مان اقرار ڪريان ٿو ته مان {BP_NAME} لاءِ {DF_NAME} کي پنهنجي رضامندي ڏني آهي.",
        dpdpaRights: [
            "ذاتي ڊيٽا بابت معلومات حاصل ڪرڻ جو حق",
            "ذاتي ڊيٽا جي درستگي ۽ ختم ڪرڻ جو حق",
            "شڪايت جي حل جو حق",
            "نامزد ڪرڻ جو حق"
        ],
        exerciseSteps: {
            step1: "رسائي جي درخواست جمع ڪريو – ڪلڪ ڪريو",
            step2: "{DF_NAME} کي ڏنل رضامنديون ڏسو – ڪلڪ ڪريو",
            step3: "شڪايتون جمع ڪريو – ڪلڪ ڪريو",
            step4: "{DF_NAME} جي DPO سان رابطو ڪريو – ڪلڪ ڪريو"
        },
        clickHere: "هتي",
        successTitle: "توهان جي رضامندي جمع ڪرائي وئي آهي",
        successDesc: "توهان جي رضامندي ۽ ڀروسي جي مهرباني",
        manageConsentsBtn: "پنهنجي رضامندين جو انتظام كريو",
        viewReceiptBtn: "رضامندي رسيد ڏسو"
    },
    ta: {
        numerals: [
            "௦",
            "௧",
            "௨",
            "௩",
            "௪",
            "௫",
            "௬",
            "௭",
            "௮",
            "௯"
        ],
        header: "இசைவு ரசீது",
        receiptId: "ரசீது ஐடி:",
        dateTime: "தேதி மற்றும் நேரம்:",
        dataPrincipalId: "டேட்டா பிரின்சிபல் ஐடி:",
        dataFiduciaryName: "டேட்டா பிட்யூஷியரி பெயர்:",
        nameOfGoodsService: "பொருள்/சேவையின் பெயர்:",
        legalStatementLabel: "சட்ட அறிக்கை:",
        purposeHeader: "நோக்கம்",
        purposeColumn: "நோக்கம்",
        dataCollectedColumn: "சேகரிக்கப்பட்ட தனிப்பட்ட தரவு",
        noPurposes: "எந்த நோக்கங்களும் ஏற்கப்படவில்லை",
        rightsHeader: "உரிமைகள்:",
        rightsDescription: "டிஜிட்டல் தனிப்பட்ட தரவு பாதுகாப்புச் சட்டம் (DPDPA) படி, உங்கள் தனிப்பட்ட தரவு தொடர்பாக உங்களுக்கு பின்வரும் உரிமைகள் உள்ளன:",
        exerciseRightsHeader: "எனது உரிமைகளை நான் எவ்வாறு பயன்படுத்தலாம்:",
        exerciseRightsDescription: "உங்கள் உரிமைகளைப் பயன்படுத்த, தயவுசெய்து இந்த வழிமுறைகளைப் பின்பற்றவும்:",
        contactText: "உங்கள் தரவு தொடர்பான எந்தவொரு கோரிக்கைக்கும், தயவுசெய்து தொடர்பு கொள்ளவும் -",
        footerNote: "குறிப்பு: உங்கள் கோரிக்கை சட்ட மற்றும் ஒப்பந்த கடமைகளுக்கு உட்பட்டு 90 நாட்களுக்குள் செயல்படுத்தப்படும்.",
        legalStatementTemplate: "{BP_NAME}-க்காக {DF_NAME}-க்கு நான் எனது இசைவை அளித்துள்ளேன் என்பதை நான் உறுதிசெய்கிறேன்.",
        dpdpaRights: [
            "தனிப்பட்ட தரவு பற்றிய தகவலை அணுகும் உரிமை",
            "தனிப்பட்ட தரவை திருத்துதல் மற்றும் அழிப்பதற்கான உரிமை",
            "குறைதீர்க்கும் உரிமை",
            "நியமனம் செய்யும் உரிமை"
        ],
        exerciseSteps: {
            step1: "அணுகல் கோரிக்கையை சமர்ப்பிக்கவும் – கிளிக் செய்யவும்",
            step2: "{DF_NAME}-க்கு வழங்கப்பட்ட உங்கள் இசைவுகளைப் பார்க்கவும் – கிளிக் செய்யவும்",
            step3: "குறைகளைச் சமர்ப்பிக்கவும் – கிளிக் செய்யவும்",
            step4: "{DF_NAME}-இன் DPO-ஐத் தொடர்பு கொள்ளவும் – கிளிக் செய்யவும்"
        },
        clickHere: "இங்கே",
        successTitle: "உங்கள் ஒப்புதல் சமர்ப்பிக்கப்பட்டது",
        successDesc: "உங்கள் ஒப்புதல் மற்றும் நம்பிக்கைக்கு நன்றி",
        manageConsentsBtn: "உங்கள் ஒப்புதல்களை நிர்வகிக்கவும்",
        viewReceiptBtn: "ஒப்புதல் ரசீதைப் பார்க்கவும்"
    },
    te: {
        numerals: [
            "౦",
            "౧",
            "౨",
            "౩",
            "౪",
            "౫",
            "౬",
            "౭",
            "౮",
            "౯"
        ],
        header: "సమ్మతి రశీదు",
        receiptId: "రశీదు ID:",
        dateTime: "తేదీ మరియు సమయం:",
        dataPrincipalId: "డేటా ప్రిన్సిపల్ ID:",
        dataFiduciaryName: "డేటా ఫిడ్యూషరీ పేరు:",
        nameOfGoodsService: "వస్తువు/సేవ పేరు:",
        legalStatementLabel: "చట్టపరమైన ప్రకటన:",
        purposeHeader: "ఉద్దేశ్యం",
        purposeColumn: "ఉద్దేశ్యం",
        dataCollectedColumn: "సేకరించిన వ్యక్తిగత డేటా",
        noPurposes: "ఏ ఉద్దేశాలు స్వీకరించబడలేదు",
        rightsHeader: "హక్కులు:",
        rightsDescription: "డిజిటల్ పర్సనల్ డేటా ప్రొటెక్షన్ యాక్ట్ (DPDPA) ప్రకారం, మీ వ్యక్తిగత డేటాకు సంబంధించి మీకు ఈ క్రింది హక్కులు ఉన్నాయి:",
        exerciseRightsHeader: "నా హక్కులను నేను ఎలా వినియోగించుకోవచ్చు:",
        exerciseRightsDescription: "మీ హక్కులను వినియోగించుకోవడానికి, దయచేసి ఈ అడుగులు అనుసరించండి:",
        contactText: "మీ డేటాకు సంబంధించిన ఏవైనా అభ్యర్థనల కోసం, దయచేసి సంప్రదించండి -",
        footerNote: "గమనిక: మీ అభ్యర్థన చట్టపరమైన మరియు కాంట్రాక్టు బాధ్యతలకు లోబడి 90 రోజుల్లోగా ప్రాసెస్ చేయబడుతుంది.",
        legalStatementTemplate: "నేను {BP_NAME} కోసం {DF_NAME} కు నా సమ్మతిని ఇచ్చానని అంగీకరిస్తున్నాను.",
        dpdpaRights: [
            "వ్యక్తిగత డేటా గురించి సమాచారం పొందే హక్కు",
            "వ్యక్తిగత డేటా సవరణ మరియు తొలగింపు హక్కు",
            "ఫిర్యాదు పరిష్కార హక్కు",
            "నామినేట్ చేసే హక్కు"
        ],
        exerciseSteps: {
            step1: "యాక్సెస్ అభ్యర్థనను సమర్పించండి – క్లిక్ చేయండి",
            step2: "{DF_NAME} కు ఇచ్చిన మీ సమ్మతిని చూడండి – క్లిక్ చేయండి",
            step3: "ఫిర్యాదులను సమర్పించండి – క్లిక్ చేయండి",
            step4: "{DF_NAME} యొక్క DPO ని సంప్రదించండి – క్లిక్ చేయండి"
        },
        clickHere: "ఇక్కడ",
        successTitle: "మీ సమ్మతి సమర్పించబడింది",
        successDesc: "మీ సమ్మతి మరియు నమ్మకానికి ధన్యవాదాలు",
        manageConsentsBtn: "మీ సమ్మతులను నిర్వహించండి",
        viewReceiptBtn: "సమ్మతి రశీదును చూడండి"
    },
    ur: {
        numerals: [
            "۰",
            "۱",
            "۲",
            "۳",
            "۴",
            "۵",
            "۶",
            "۷",
            "۸",
            "۹"
        ],
        header: "رضامندی کی رسید",
        receiptId: "رسید آئی ڈی:",
        dateTime: "تاریخ اور وقت:",
        dataPrincipalId: "ڈیٹا پرنسپل آئی ڈی:",
        dataFiduciaryName: "ڈیٹا فیڈوشری نام:",
        nameOfGoodsService: "اشیاء/سروس کا نام:",
        legalStatementLabel: "قانونی بیان:",
        purposeHeader: "مقصد",
        purposeColumn: "مقصد",
        dataCollectedColumn: "جمع کردہ ذاتی ڈیٹا",
        noPurposes: "کوئی مقصد قبول نہیں کیا گیا",
        rightsHeader: "حقوق:",
        rightsDescription: "ڈیجیٹل پرسنل ڈیٹا پروٹیکشن ایکٹ (DPDPA) کے مطابق، آپ کے ذاتی ڈیٹا کے حوالے سے آپ کو درج ذیل حقوق حاصل ہیں:",
        exerciseRightsHeader: "میں اپنے حقوق کیسے استعمال کر سکتا ہوں:",
        exerciseRightsDescription: "اپنے حقوق استعمال کرنے کے لیے، براہ کرم ان اقدامات پر عمل کریں:",
        contactText: "اپنے ڈیٹا سے متعلق کسی بھی درخواست کے لیے، براہ کرم رابطہ کریں -",
        footerNote: "نوٹ: آپ کی درخواست پر قانونی اور معاہدے کی ذمہ داریوں کے تحت 90 دنوں کے اندر کارروائی کی جائے گی۔",
        legalStatementTemplate: "میں تسلیم کرتا ہوں کہ میں نے {BP_NAME} کے لیے {DF_NAME} کو اپنی رضامندی دی ہے۔",
        dpdpaRights: [
            "ذاتی ڈیٹا کے بارے میں معلومات حاصل کرنے کا حق",
            "ذاتی ڈیٹا کی اصلاح اور مٹانے کا حق",
            "شکایت کے ازالے کا حق",
            "نامزد کرنے کا حق"
        ],
        exerciseSteps: {
            step1: "رسائی کی درخواست جمع کروائیں – کلک کریں",
            step2: "{DF_NAME} کو دی گئی اپنی رضامنیاں دیکھیں – کلک کریں",
            step3: "شکایات جمع کروائیں – کلک کریں",
            step4: "{DF_NAME} کے DPO سے رابطہ کریں – کلک کریں"
        },
        clickHere: "یہاں",
        successTitle: "آپ کی رضامندی جمع کر دی گئی ہے",
        successDesc: "آپ کی رضامندی اور اعتماد کا شکریہ",
        manageConsentsBtn: "اپنی رضامندیوں کا انتظام کریں",
        viewReceiptBtn: "رضامندی کی رسید دیکھیں"
    }
};
function getReceiptTranslation(lang) {
    // Check if lang exists in mapping, otherwise default to 'en'
    const language = lang in RECEIPT_TRANSLATIONS ? lang : "en";
    return RECEIPT_TRANSLATIONS[language];
}
function getDpdpaRights(lang) {
    const t = getReceiptTranslation(lang);
    return [
        ...t.dpdpaRights
    ];
}
/**
 * Maps ASCII digits (0-9) to native script digits for supported languages.
 */ const DIGIT_MAPS = {
    // Devanagari numerals (Hindi, Marathi, Nepali, Konkani, Sanskrit, Maithili, Bodo, Dogri)
    hi: [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    mr: [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    ne: [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    kok: [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    sa: [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    mai: [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    brx: [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    doi: [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    // Bengali numerals (Bengali, Assamese, Manipuri)
    bn: [
        "০",
        "১",
        "২",
        "৩",
        "৪",
        "৫",
        "৬",
        "৭",
        "৮",
        "৯"
    ],
    as: [
        "০",
        "১",
        "২",
        "৩",
        "৪",
        "৫",
        "৬",
        "৭",
        "৮",
        "৯"
    ],
    mni: [
        "০",
        "১",
        "২",
        "৩",
        "৪",
        "৫",
        "৬",
        "৭",
        "৮",
        "৯"
    ],
    // Gujarati numerals
    gu: [
        "૦",
        "૧",
        "૨",
        "૩",
        "૪",
        "૫",
        "૬",
        "૭",
        "૮",
        "૯"
    ],
    // Gurmukhi numerals (Punjabi)
    pa: [
        "੦",
        "੧",
        "੨",
        "੩",
        "੪",
        "੫",
        "੬",
        "੭",
        "੮",
        "੯"
    ],
    // Kannada numerals
    kn: [
        "೦",
        "೧",
        "೨",
        "೩",
        "೪",
        "೫",
        "೬",
        "೭",
        "೮",
        "೯"
    ],
    // Telugu numerals
    te: [
        "౦",
        "౧",
        "౨",
        "౩",
        "౪",
        "౫",
        "౬",
        "౭",
        "౮",
        "౯"
    ],
    // Malayalam numerals
    ml: [
        "൦",
        "൧",
        "൨",
        "൩",
        "൪",
        "൫",
        " ",
        "൭",
        "൮",
        "൯"
    ],
    // Odia numerals
    or: [
        "୦",
        "୧",
        "୨",
        "୩",
        "୪",
        "୫",
        "୬",
        "୭",
        "୮",
        "୯"
    ],
    // Urdu/Sindhi usually use Eastern Arabic numerals (۰-۹)
    ur: [
        "۰",
        "۱",
        "۲",
        "۳",
        "۴",
        "۵",
        "۶",
        "۷",
        "۸",
        "۹"
    ],
    sd: [
        "۰",
        "۱",
        "۲",
        "۳",
        "۴",
        "۵",
        "۶",
        "۷",
        "۸",
        "۹"
    ],
    ks: [
        "۰",
        "۱",
        "۲",
        "۳",
        "۴",
        "۵",
        "۶",
        "۷",
        "۸",
        "۹"
    ]
};
function localizeDigits(str, lang) {
    if (!str) return str;
    // If language isn't in our map, return original string (English/ASCII)
    if (!(lang in DIGIT_MAPS)) return str;
    const digits = DIGIT_MAPS[lang];
    return str.replace(/[0-9]/g, (d)=>digits[parseInt(d)]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/consent-receipt/consent-receipt.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ /**
 * Consent Receipt Component
 *
 * Displays a formatted consent receipt matching the design specification.
 * This component is reusable and can be embedded in modals, pages, or email templates.
 */ __turbopack_context__.s([
    "ConsentReceipt",
    ()=>ConsentReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$fiduciary$2d$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/fiduciary-logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$consent$2d$receipt$2d$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/consent-receipt-translations.ts [app-client] (ecmascript)");
;
;
;
;
function ConsentReceipt(param) {
    let { data, className } = param;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$consent$2d$receipt$2d$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReceiptTranslation"])(data.language);
    const formatDateTime = (date)=>{
        // specific formatting preference with fallback to en-GB style if needed
        // but using the data.language for locale
        let formattedDate = "";
        try {
            formattedDate = new Date(date).toLocaleString(data.language || "en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            });
        } catch (e) {
            formattedDate = new Date(date).toLocaleString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            });
        }
        // Ensure digits are localized even if browser locale implementation doesn't do it
        // or does it inconsistently
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$consent$2d$receipt$2d$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeDigits"])(formattedDate, data.language);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("consent-receipt-printable bg-white text-black p-8 max-w-4xl mx-auto", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 relative pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-1/2 transform -translate-y-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$fiduciary$2d$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiduciaryLogo"], {
                            className: "text-xl"
                        }, void 0, false, {
                            fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-blue-600",
                            children: t.header
                        }, void 0, false, {
                            fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 mb-8 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetadataRow, {
                        label: t.receiptId,
                        value: data.receiptId
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetadataRow, {
                        label: t.dateTime,
                        value: formatDateTime(data.dateTime)
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetadataRow, {
                        label: t.dataPrincipalId,
                        value: data.dataPrincipalId
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetadataRow, {
                        label: t.dataFiduciaryName,
                        value: data.dataFiduciaryName
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetadataRow, {
                        label: t.nameOfGoodsService,
                        value: data.serviceDescription
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetadataRow, {
                        label: t.legalStatementLabel,
                        value: data.legalStatement,
                        isMultiline: true
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold mb-4",
                        children: t.purposeHeader
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full border-collapse border border-gray-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "bg-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 px-4 py-3 text-left font-semibold",
                                            children: t.purposeColumn
                                        }, void 0, false, {
                                            fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 px-4 py-3 text-left font-semibold",
                                            children: t.dataCollectedColumn
                                        }, void 0, false, {
                                            fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: data.purposes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 2,
                                        className: "border border-gray-300 px-4 py-3 text-center text-gray-500",
                                        children: t.noPurposes
                                    }, void 0, false, {
                                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this) : data.purposes.map((purpose, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "border border-gray-300 px-4 py-3",
                                                children: purpose.purpose
                                            }, void 0, false, {
                                                fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "border border-gray-300 px-4 py-3",
                                                children: purpose.personalDataCollected.join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold mb-4",
                        children: t.rightsHeader
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-sm",
                        children: t.rightsDescription
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc pl-6 space-y-2 text-sm",
                        children: data.rights.map((right, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: right
                            }, index, false, {
                                fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold mb-4",
                        children: t.exerciseRightsHeader
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-sm",
                        children: t.exerciseRightsDescription
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "list-decimal pl-6 space-y-2 text-sm",
                        children: data.exerciseRightsSteps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    step.description,
                                    step.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: step.link,
                                                className: "text-primary-600 underline hover:text-primary-700",
                                                children: t.clickHere
                                            }, void 0, false, {
                                                fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                                                lineNumber: 178,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, step.step, true, {
                                fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-sm",
                        children: [
                            t.contactText,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:".concat(data.contactEmail),
                                className: "text-primary-600 underline hover:text-primary-700",
                                children: data.contactEmail
                            }, void 0, false, {
                                fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-6 mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600 italic",
                    children: t.footerNote
                }, void 0, false, {
                    fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c = ConsentReceipt;
/**
 * Helper component for metadata rows
 */ function MetadataRow(param) {
    let { label, value, isMultiline = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex", isMultiline ? "flex-col gap-1" : "gap-2"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-semibold min-w-[200px]",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isMultiline && "ml-0"),
                children: value
            }, void 0, false, {
                fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/consent-receipt/consent-receipt.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
}
_c1 = MetadataRow;
var _c, _c1;
__turbopack_context__.k.register(_c, "ConsentReceipt");
__turbopack_context__.k.register(_c1, "MetadataRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/consent-receipt/receipt-dropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReceiptDropdown",
    ()=>ReceiptDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ReceiptDropdown(param) {
    let { icon: Icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], label, options, onView, onDownload, showDownload = true } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReceiptDropdown.useEffect": ()=>{
            const handleClickOutside = {
                "ReceiptDropdown.useEffect.handleClickOutside": (event)=>{
                    if (containerRef.current && !containerRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["ReceiptDropdown.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "ReceiptDropdown.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["ReceiptDropdown.useEffect"];
        }
    }["ReceiptDropdown.useEffect"], []);
    const handleView = (opt)=>{
        if (onView) {
            setIsOpen(false);
            onView(opt);
        }
    };
    const handleDownload = async (opt)=>{
        if (onDownload) {
            setIsProcessing(true);
            try {
                await onDownload(opt);
            } finally{
                setIsProcessing(false);
                setIsOpen(false);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: containerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                onClick: ()=>setIsOpen(!isOpen),
                disabled: isProcessing,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-white text-blue-600 border-blue-200 hover:bg-blue-50 flex items-center gap-2 transition-all", isOpen && "ring-2 ring-blue-100"),
                children: [
                    isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-4 h-4 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-full mt-2 w-[400px] bg-white border border-gray-200 rounded-xl shadow-2xl z-[100] animate-in fade-in zoom-in-95 duration-100 p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[400px] overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-200",
                    children: options.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 text-center text-gray-400 text-sm",
                        children: "No receipts available"
                    }, void 0, false, {
                        fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                        lineNumber: 92,
                        columnNumber: 15
                    }, this) : options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>{
                                if (onView) handleView(opt);
                                else if (onDownload && showDownload) handleDownload(opt);
                            },
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 bg-gray-50/50 hover:bg-blue-50/50 rounded-lg border border-transparent hover:border-blue-200 transition-all group", onView || onDownload && showDownload ? "cursor-pointer" : ""),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold text-gray-900 w-32 shrink-0",
                                                    children: "Process Code:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-500 font-mono",
                                                    children: opt.processCode
                                                }, void 0, false, {
                                                    fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                            lineNumber: 109,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold text-gray-900 w-32 shrink-0",
                                                    children: "Version:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-500 font-mono",
                                                    children: opt.version
                                                }, void 0, false, {
                                                    fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                            lineNumber: 117,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold text-gray-900 w-32 shrink-0",
                                                    children: "Data Principal ID:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-500 font-mono truncate",
                                                    title: opt.dataPrincipalId,
                                                    children: opt.dataPrincipalId
                                                }, void 0, false, {
                                                    fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                            lineNumber: 125,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold text-gray-900 w-32 shrink-0",
                                                    children: "Reference ID:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-500 font-mono truncate",
                                                    title: opt.referenceId,
                                                    children: opt.referenceId
                                                }, void 0, false, {
                                                    fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                            lineNumber: 136,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                    lineNumber: 108,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 pt-3 border-t border-gray-200/60 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity",
                                    children: [
                                        showDownload && onDownload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                handleDownload(opt);
                                            },
                                            className: "text-xs font-bold text-gray-600 hover:text-blue-600 flex items-center gap-1 transition-colors",
                                            children: "Download JSON"
                                        }, void 0, false, {
                                            fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                            lineNumber: 152,
                                            columnNumber: 23
                                        }, this),
                                        onView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                handleView(opt);
                                            },
                                            className: "text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors",
                                            children: [
                                                "View Receipt ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 38
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                            lineNumber: 165,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                                    lineNumber: 149,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                            lineNumber: 97,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/consent-receipt/receipt-dropdown.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(ReceiptDropdown, "HEHdZMFRgIUAPOxEJKCRZJCmTuI=");
_c = ReceiptDropdown;
var _c;
__turbopack_context__.k.register(_c, "ReceiptDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConsentDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-list.js [app-client] (ecmascript) <export default as LayoutList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$timeline$2f5b$id$5d2f$data$3a$1836ad__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/consent-timeline/[id]/data:1836ad [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$timeline$2f5b$id$5d2f$data$3a$eda265__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/consent-timeline/[id]/data:eda265 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$timeline$2f5b$id$5d2f$data$3a$3ae5e5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/consent-timeline/[id]/data:3ae5e5 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$consent$2d$receipt$2f$consent$2d$receipt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/consent-receipt/consent-receipt.tsx [app-client] (ecmascript)");
// --- REPLACED: ReceiptDropdown imported from components ---
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$consent$2d$receipt$2f$receipt$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/consent-receipt/receipt-dropdown.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
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
;
// --- FILTER COMPONENTS (Unchanged) ---
const FilterDropdown = (param)=>{
    let { icon: Icon, label, options, selectedValues, onChange, onClear, align = "start" } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilterDropdown.useEffect": ()=>{
            const handleClickOutside = {
                "FilterDropdown.useEffect.handleClickOutside": (event)=>{
                    if (containerRef.current && !containerRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["FilterDropdown.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "FilterDropdown.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["FilterDropdown.useEffect"];
        }
    }["FilterDropdown.useEffect"], []);
    const isActive = selectedValues.length > 0;
    const handleCheckboxChange = (value, e)=>{
        e.stopPropagation();
        if (selectedValues.includes(value)) {
            onChange(selectedValues.filter((v)=>v !== value));
        } else {
            onChange([
                ...selectedValues,
                value
            ]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block text-left",
        ref: containerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                onClick: ()=>setIsOpen(!isOpen),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full h-9 transition-colors flex items-center border", isActive || isOpen ? "bg-blue-50 border-blue-500 text-blue-700" : "bg-white text-gray-600 border-gray-300"),
                children: [
                    Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-3.5 h-3.5 mr-2", isActive || isOpen ? "text-blue-500" : "text-gray-500")
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    label,
                    isActive && !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-1.5 bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full",
                        children: selectedValues.length
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-2 w-3 h-3 transition-transform", isOpen ? "rotate-180" : "")
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl p-2 w-72 z-[100] animate-in fade-in zoom-in-95 duration-100", align === "end" ? "right-0 origin-top-right" : "left-0 origin-top-left"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-60 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-gray-200",
                        children: options.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 text-sm text-gray-400 text-center",
                            children: "No options available"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                            lineNumber: 162,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: (e)=>handleCheckboxChange(opt.value, e),
                                className: "flex items-start gap-3 p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-0.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer h-4 w-4",
                                            checked: selectedValues.includes(opt.value),
                                            readOnly: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold truncate", selectedValues.includes(opt.value) ? "text-blue-700" : "text-gray-700"),
                                                children: opt.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            opt.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-400 font-mono mt-0.5 group-hover:text-gray-500 truncate block",
                                                children: opt.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, opt.value, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 167,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 pt-2 border-t border-gray-100 flex justify-end px-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                onChange([]);
                                setIsOpen(false);
                            },
                            className: "text-xs text-red-500 hover:text-red-700 font-medium px-2 py-1 hover:bg-red-50 rounded transition-colors",
                            children: "Clear Selection"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                            lineNumber: 203,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 202,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                lineNumber: 152,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FilterDropdown, "S+VxyoOAGV/pXeK+kYNNNH3d2q4=");
_c = FilterDropdown;
const DateRangeFilter = (param)=>{
    let { startDate, endDate, onApply, onClear } = param;
    _s1();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [localStart, setLocalStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(startDate || "");
    const [localEnd, setLocalEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(endDate || "");
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DateRangeFilter.useEffect": ()=>{
            const handleClickOutside = {
                "DateRangeFilter.useEffect.handleClickOutside": (event)=>{
                    if (containerRef.current && !containerRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["DateRangeFilter.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "DateRangeFilter.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["DateRangeFilter.useEffect"];
        }
    }["DateRangeFilter.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DateRangeFilter.useEffect": ()=>{
            setLocalStart(startDate || "");
            setLocalEnd(endDate || "");
        }
    }["DateRangeFilter.useEffect"], [
        startDate,
        endDate,
        isOpen
    ]);
    const isActive = !!startDate || !!endDate;
    const label = isActive ? "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(startDate), "MMM dd"), " - ").concat(endDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(endDate), "MMM dd") : "...") : "Date Range";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block text-left",
        ref: containerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                onClick: ()=>setIsOpen(!isOpen),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full h-9 transition-colors", isActive ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-white text-gray-600 border-gray-300"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                        className: "w-3.5 h-3.5 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    label,
                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onClear();
                        },
                        className: "ml-2 hover:text-red-500 cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                            lineNumber: 283,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-4 w-72 z-[100] animate-in fade-in zoom-in-95 duration-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-gray-500",
                                    children: "Start Date"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    className: "w-full border rounded-md px-2 py-1.5 text-sm",
                                    value: localStart,
                                    onChange: (e)=>setLocalStart(e.target.value),
                                    max: localEnd
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                            lineNumber: 291,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-gray-500",
                                    children: "End Date"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 304,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    className: "w-full border rounded-md px-2 py-1.5 text-sm",
                                    value: localEnd,
                                    onChange: (e)=>setLocalEnd(e.target.value),
                                    min: localStart
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                            lineNumber: 303,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "h-8 text-xs",
                                    onClick: ()=>setIsOpen(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    className: "h-8 text-xs bg-blue-900 hover:bg-blue-800",
                                    onClick: ()=>{
                                        if (localStart && localEnd) {
                                            onApply(localStart, localEnd);
                                            setIsOpen(false);
                                        }
                                    },
                                    disabled: !localStart || !localEnd,
                                    children: "Apply"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 324,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                            lineNumber: 315,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                    lineNumber: 290,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                lineNumber: 289,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(DateRangeFilter, "iyIC5G/yrbMputCDkwuQ3Nz7/dY=");
_c1 = DateRangeFilter;
;
// --- TIMELINE DETAILS COMPONENTS (Unchanged) ---
function TimelineDetailPanel(param) {
    let { event } = param;
    const getStyles = (type)=>{
        switch(type){
            case "GRANTED":
                return {
                    bg: "bg-[#ECFDF5]",
                    border: "border-green-100",
                    text: "text-green-900",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "w-5 h-5 text-green-600"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 358,
                        columnNumber: 17
                    }, this),
                    label: "Consent Granted on"
                };
            case "REVOKED":
                return {
                    bg: "bg-[#FEF2F2]",
                    border: "border-red-100",
                    text: "text-red-900",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                        className: "w-5 h-5 text-red-600"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 366,
                        columnNumber: 17
                    }, this),
                    label: "Consents Withdrawn on"
                };
            case "UPDATED":
                return {
                    bg: "bg-[#FFFBF0]",
                    border: "border-[#FDE6C8]",
                    text: "text-[#433422]",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                        className: "w-5 h-5 text-[#D97706]"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 374,
                        columnNumber: 17
                    }, this),
                    label: "Consent Updated on"
                };
            default:
                return {
                    bg: "bg-gray-50",
                    border: "border-gray-200",
                    text: "text-gray-800",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-5 h-5 text-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 382,
                        columnNumber: 17
                    }, this),
                    label: "Event on"
                };
        }
    };
    const styles = getStyles(event.type);
    const essential = event.details.sections.filter((s)=>s.isEssential);
    const optional = event.details.sections.filter((s)=>!s.isEssential);
    const displaySections = essential.length > 0 ? essential : event.details.sections;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#F9FAFB] font-sans overflow-hidden rounded-t-3xl md:rounded-none border-l border-gray-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 border-b shrink-0", styles.bg, styles.border),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1",
                            children: styles.icon
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold text-lg", styles.text),
                                    children: styles.label
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 400,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 font-medium mt-1",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(event.date), "dd MMM, yy | h:mm a")
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 403,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base font-bold text-gray-900 mt-3",
                                    children: [
                                        "For ",
                                        event.serviceName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                            lineNumber: 399,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                    lineNumber: 397,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                lineNumber: 396,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-5 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PurposeGroup, {
                        title: "Essential Purposes",
                        sections: displaySections,
                        eventType: event.type
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    optional.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PurposeGroup, {
                        title: "Optional Purposes",
                        sections: optional,
                        eventType: event.type
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 419,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                lineNumber: 412,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 bg-[#F0FDF4] border-t border-green-100 flex justify-center items-center gap-2 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                        className: "w-4 h-4 text-green-700"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold text-green-800",
                        children: "Your information is safe with us"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
        lineNumber: 395,
        columnNumber: 5
    }, this);
}
_c2 = TimelineDetailPanel;
function PurposeGroup(param) {
    let { title, sections, eventType } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
        type: "single",
        collapsible: true,
        defaultValue: "item-1",
        className: "bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
            value: "item-1",
            className: "border-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                    className: "px-5 py-4 hover:bg-gray-50 border-b border-gray-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-sm text-gray-900",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 455,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-400 font-normal",
                                children: "will be used for"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 456,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "w-3.5 h-3.5 text-gray-300 ml-2"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 454,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                    lineNumber: 453,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                    className: "px-5 pb-5 pt-5 bg-gray-50/30 space-y-4",
                    children: sections.map((section, idx)=>{
                        var _section_changes;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-gray-200 rounded-xl p-5 bg-white shadow-[0_2px_4px_-2px_rgba(0,0,0,0.05)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-sm text-gray-900 mb-3",
                                    children: section.title
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 468,
                                    columnNumber: 15
                                }, this),
                                eventType === "UPDATED" && ((_section_changes = section.changes) === null || _section_changes === void 0 ? void 0 : _section_changes.summaryText) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#FFF7ED] border-l-4 border-[#F97316] p-3 mb-4 rounded-r-md",
                                    children: section.changes.summaryText.map((txt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-medium text-[#9A3412]",
                                            children: txt
                                        }, i, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                            lineNumber: 474,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 472,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 leading-relaxed mb-5",
                                    children: section.description || "Processing data to detect, prevent, and investigate fraudulent activities."
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 480,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PurposeAttributes, {
                                    attributes: section.attributes,
                                    eventType: eventType
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 484,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                            lineNumber: 464,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                    lineNumber: 462,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
            lineNumber: 452,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
        lineNumber: 446,
        columnNumber: 5
    }, this);
}
_c3 = PurposeGroup;
function PurposeAttributes(param) {
    let { attributes, eventType } = param;
    _s2();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const added = attributes.filter((a)=>a.status === "added").length;
    const removed = attributes.filter((a)=>a.status === "removed").length;
    const showAdded = eventType === "GRANTED" || eventType === "UPDATED";
    const showRemoved = eventType === "REVOKED" || eventType === "UPDATED";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-t border-gray-100 pt-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-full flex items-center justify-between group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-gray-800",
                                children: "Personal Data Used"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 516,
                                columnNumber: 11
                            }, this),
                            added > 0 && showAdded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FFF7ED] text-[#C2410C]",
                                children: [
                                    String(added).padStart(2, "0"),
                                    " Added"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 520,
                                columnNumber: 13
                            }, this),
                            removed > 0 && showRemoved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FEF2F2] text-[#B91C1C]",
                                children: [
                                    String(removed).padStart(2, "0"),
                                    " Removed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 525,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 515,
                        columnNumber: 9
                    }, this),
                    isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                        className: "w-4 h-4 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 531,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-4 h-4 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 533,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap gap-2",
                children: attributes.map((attr, idx)=>{
                    let pillClass = "bg-[#F3F4F6] text-[#374151] border-[#E5E7EB]";
                    if (attr.status === "added") pillClass = "bg-[#DCFCE7] text-[#166534] border-[#BBF7D0]";
                    if (attr.status === "removed" || eventType === "REVOKED") pillClass = "bg-[#FFF7ED] text-[#9A3412] border-[#FED7AA]";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1.5 rounded-full text-[11px] font-medium border", pillClass),
                        children: attr.name
                    }, idx, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 545,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                lineNumber: 537,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
        lineNumber: 510,
        columnNumber: 5
    }, this);
}
_s2(PurposeAttributes, "mEi83NlPXQzy/XIDfTYWzOSvaHw=");
_c4 = PurposeAttributes;
const TableView = (param)=>{
    let { data } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full text-sm text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "bg-gray-50 border-b border-gray-200 text-gray-500 font-medium",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-4",
                                    children: "Data Principal"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 567,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-4",
                                    children: "Process"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 568,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-4",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 569,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-4",
                                    children: "Date"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 570,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                            lineNumber: 566,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 565,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "divide-y divide-gray-100",
                        children: data.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "hover:bg-gray-50/50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4 font-medium text-gray-900",
                                        children: row.dataPrincipalId
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 579,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4 text-gray-600",
                                        children: row.purposeOfProcessing
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 582,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide border", row.status.toLowerCase() === "accepted" ? "bg-green-50 text-green-700 border-green-200" : row.status.toLowerCase() === "revoked" ? "bg-red-50 text-red-700 border-red-200" : "bg-gray-50 text-gray-700 border-gray-200"),
                                            children: row.status
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                            lineNumber: 584,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 583,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-4 text-gray-500",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(row.consentedAt), "MMM dd, yyyy")
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 597,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, row.consentId, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 575,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 573,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                lineNumber: 564,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            data.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 text-center text-gray-400 bg-gray-50/30",
                children: "No records found"
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                lineNumber: 605,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
        lineNumber: 563,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = TableView;
function ConsentDetailPage(param) {
    let { params } = param;
    _s3();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("timeline");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedEventId, setSelectedEventId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- Modal State ---
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [receiptLoading, setReceiptLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [receiptData, setReceiptData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // -------------------
    const [referenceId, setReferenceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tableData, setTableData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dropdownOptions, setDropdownOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bpOptions, setBpOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [receiptOptions, setReceiptOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConsentDetailPage.useEffect": ()=>{
            const loadData = {
                "ConsentDetailPage.useEffect.loadData": async ()=>{
                    const type = searchParams.get("type");
                    if (!type) {
                        setError("Missing mandatory parameter: type");
                        setLoading(false);
                        return;
                    }
                    setLoading(true);
                    setError(null);
                    try {
                        const payload = {
                            type,
                            start_date: searchParams.get("start_date"),
                            end_date: searchParams.get("end_date")
                        };
                        const dpIds = searchParams.getAll("data_principal_ids[]");
                        if (dpIds.length) payload["data_principal_ids[]"] = dpIds;
                        const refIds = searchParams.getAll("reference_ids[]");
                        if (refIds.length) payload["reference_ids[]"] = refIds;
                        const bpIds = searchParams.getAll("business_process_ids[]");
                        if (bpIds.length) payload["business_process_ids[]"] = bpIds;
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$timeline$2f5b$id$5d2f$data$3a$1836ad__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getConsentHistoryDetail"])(params.id, payload);
                        setReferenceId(res.referenceId);
                        setEvents(res.events);
                        setTableData(res.tableData);
                        setDropdownOptions(res.dropdownOptions);
                        setBpOptions(res.bpOptions);
                        setReceiptOptions(res.receiptOptions);
                        if (!selectedEventId && res.events.length > 0) {
                            const first = res.events.find({
                                "ConsentDetailPage.useEffect.loadData": (e)=>e.type !== "NOTICE"
                            }["ConsentDetailPage.useEffect.loadData"]) || res.events[0];
                            if (first) setSelectedEventId(first.id);
                        }
                    } catch (e) {
                        console.error(e);
                        setError(e.message || "Failed to load timeline");
                    } finally{
                        setLoading(false);
                    }
                }
            }["ConsentDetailPage.useEffect.loadData"];
            loadData();
        }
    }["ConsentDetailPage.useEffect"], [
        searchParams
    ]);
    const handleMultiSelect = (key, values)=>{
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.delete(key);
        values.forEach((v)=>current.append(key, v));
        router.push("".concat(window.location.pathname, "?").concat(current.toString()));
    };
    // --- NEW HANDLER FOR RECEIPT VIEW ---
    const handleViewReceipt = async (opt)=>{
        setReceiptLoading(true);
        setIsModalOpen(true); // Open modal immediately to show loading state
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$timeline$2f5b$id$5d2f$data$3a$eda265__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getReceiptDataForModal"])(opt);
            if (result.success && result.data) {
                setReceiptData(result.data);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(result.error || "Could not fetch receipt details");
                setIsModalOpen(false);
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load receipt");
            setIsModalOpen(false);
        } finally{
            setReceiptLoading(false);
        }
    };
    const handleDownloadReceipt = async (opt)=>{
        const toastId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("Preparing artifact for download...");
        try {
            // Fetch specifically the Artifact Data (signed JSON), not the Receipt View Data
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$timeline$2f5b$id$5d2f$data$3a$3ae5e5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getArtifactData"])(opt);
            if (result.success && result.data) {
                // Create a blob from the JSON data
                const jsonString = JSON.stringify(result.data, null, 2);
                const blob = new Blob([
                    jsonString
                ], {
                    type: "application/json"
                });
                const url = URL.createObjectURL(blob);
                // Trigger download
                const a = document.createElement("a");
                a.href = url;
                a.download = "consent-artifact-".concat(opt.processCode, "-").concat(opt.referenceId, ".json");
                document.body.appendChild(a);
                a.click();
                // Cleanup
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(toastId);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Artifact downloaded successfully");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(toastId);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(result.error || "Failed to generate artifact data");
            }
        } catch (e) {
            console.error(e);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(toastId);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("An unexpected error occurred during download.");
        }
    };
    const selectedEvent = events.find((e)=>e.id === selectedEventId);
    const currentType = searchParams.get("type");
    const selectedDpRefValues = currentType === "reference_id" ? searchParams.getAll("data_principal_ids[]") : searchParams.getAll("reference_ids[]");
    const selectedBpValues = searchParams.getAll("business_process_ids[]");
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10 text-center text-red-600 bg-red-50 rounded-lg m-4",
        children: error
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
        lineNumber: 759,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#F8F9FC] p-6 font-sans text-slate-800 print:bg-white print:p-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col", isModalOpen ? "print:hidden" : ""),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-[10]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.back(),
                                        className: "p-2 hover:bg-white rounded-full transition-colors border border-transparent hover:border-gray-200 shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "w-5 h-5 text-gray-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                            lineNumber: 774,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 770,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500 font-bold uppercase tracking-wide",
                                                children: "Consent Timeline"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                lineNumber: 777,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg font-bold text-slate-900",
                                                        children: currentType === "reference_id" ? "Reference ID:" : "Data Principal ID:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                        lineNumber: 781,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg font-mono text-gray-600",
                                                        children: referenceId
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                        lineNumber: 786,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                lineNumber: 780,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 776,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 769,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DateRangeFilter, {
                                        startDate: searchParams.get("start_date"),
                                        endDate: searchParams.get("end_date"),
                                        onApply: (s, e)=>{
                                            const c = new URLSearchParams(Array.from(searchParams.entries()));
                                            c.set("start_date", s);
                                            c.set("end_date", e);
                                            router.push("".concat(window.location.pathname, "?").concat(c.toString()));
                                        },
                                        onClear: ()=>{
                                            const c = new URLSearchParams(Array.from(searchParams.entries()));
                                            c.delete("start_date");
                                            c.delete("end_date");
                                            router.push("".concat(window.location.pathname, "?").concat(c.toString()));
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 794,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterDropdown, {
                                        icon: currentType === "reference_id" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"],
                                        label: currentType === "reference_id" ? "Data Principal IDs" : "Reference IDs",
                                        options: dropdownOptions,
                                        selectedValues: selectedDpRefValues,
                                        onChange: (vals)=>handleMultiSelect(currentType === "reference_id" ? "data_principal_ids[]" : "reference_ids[]", vals),
                                        align: "start"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 815,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterDropdown, {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                                        label: "Business Process",
                                        options: bpOptions,
                                        selectedValues: selectedBpValues,
                                        onChange: (vals)=>handleMultiSelect("business_process_ids[]", vals),
                                        align: "end"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 835,
                                        columnNumber: 13
                                    }, this),
                                    searchParams.toString().replace("type=".concat(currentType), "").length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: ()=>router.push("".concat(window.location.pathname, "?type=").concat(currentType)),
                                        className: "text-xs text-red-500 hover:bg-red-50",
                                        children: "Clear All"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 848,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 793,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 768,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 relative z-[10]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex bg-white p-1 rounded-lg border border-gray-200 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setView("timeline"),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all", view === "timeline" ? "bg-blue-50 text-blue-700 shadow-sm" : "text-gray-600 hover:bg-gray-50"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                lineNumber: 873,
                                                columnNumber: 15
                                            }, this),
                                            " Timeline View"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 864,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setView("table"),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all", view === "table" ? "bg-blue-50 text-blue-700 shadow-sm" : "text-gray-600 hover:bg-gray-50"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__["LayoutList"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                lineNumber: 884,
                                                columnNumber: 15
                                            }, this),
                                            " Table View"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 875,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 863,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$consent$2d$receipt$2f$receipt$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReceiptDropdown"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                                        label: "View Consent Receipt",
                                        options: receiptOptions,
                                        onView: handleViewReceipt,
                                        showDownload: false
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 889,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$consent$2d$receipt$2f$receipt$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReceiptDropdown"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"],
                                        label: "Download JSON",
                                        options: receiptOptions,
                                        onDownload: handleDownloadReceipt,
                                        showDownload: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 897,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 887,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 862,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-96 flex items-center justify-center text-gray-400",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 908,
                        columnNumber: 11
                    }, this) : view === "table" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableView, {
                        data: tableData
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 912,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-220px)] min-h-[500px] relative z-[0]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5 xl:col-span-4 overflow-y-auto pr-2 py-2 scrollbar-thin scrollbar-thumb-gray-200",
                                children: [
                                    events.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-gray-400 py-10",
                                        children: "No events found"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 917,
                                        columnNumber: 17
                                    }, this),
                                    events.map((event, idx)=>{
                                        const isSelected = selectedEventId === event.id;
                                        let Icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"];
                                        let styles = {
                                            bg: "bg-orange-100",
                                            text: "text-orange-600",
                                            border: "border-orange-200",
                                            badgeBg: "bg-orange-50",
                                            badgeText: "text-orange-700"
                                        };
                                        let title = "Consent Updated";
                                        if (event.type === "GRANTED") {
                                            Icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"];
                                            styles = {
                                                bg: "bg-green-100",
                                                text: "text-green-600",
                                                border: "border-green-200",
                                                badgeBg: "bg-green-50",
                                                badgeText: "text-green-700"
                                            };
                                            title = "Consent Granted";
                                        } else if (event.type === "REVOKED") {
                                            Icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"];
                                            styles = {
                                                bg: "bg-red-100",
                                                text: "text-red-600",
                                                border: "border-red-200",
                                                badgeBg: "bg-red-50",
                                                badgeText: "text-red-700"
                                            };
                                            title = "Consents Withdrawn";
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-500 mb-3 ml-[68px] font-medium",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(event.date), "dd MMM, yyyy"),
                                                        " |",
                                                        " ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(event.date), "h:mm a")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                    lineNumber: 957,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex relative",
                                                    children: [
                                                        idx !== events.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-[29px] top-[40px] h-[calc(100%+30px)] w-px bg-gray-200 z-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                            lineNumber: 963,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-[60px] flex-shrink-0 flex justify-center relative z-10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-10 h-10 rounded-full border-2 bg-white flex items-center justify-center shadow-sm", styles.border),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5", styles.text)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                                    lineNumber: 972,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                                lineNumber: 966,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                            lineNumber: 965,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 pl-2 pb-8",
                                                            onClick: ()=>setSelectedEventId(event.id),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-white p-5 rounded-2xl border cursor-pointer transition-all flex justify-between items-center group-hover:shadow-md", isSelected ? "border-blue-400 shadow-md ring-1 ring-blue-100" : "border-gray-200 hover:border-gray-300"),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-sm text-gray-600 font-medium",
                                                                                children: [
                                                                                    title,
                                                                                    " for"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                                                lineNumber: 988,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-base font-bold text-gray-900 mt-1",
                                                                                children: event.serviceName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                                                lineNumber: 991,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                                        lineNumber: 987,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2.5 py-1 text-xs font-extrabold rounded-md", styles.badgeBg, styles.badgeText),
                                                                                children: String(event.count || 1).padStart(2, "0")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                                                lineNumber: 996,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                                className: "w-5 h-5 text-gray-300"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                                                lineNumber: 1005,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                                        lineNumber: 995,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                                lineNumber: 979,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                            lineNumber: 975,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                                    lineNumber: 961,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, event.id, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                            lineNumber: 956,
                                            columnNumber: 19
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 915,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7 xl:col-span-8 h-full bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden",
                                children: selectedEvent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineDetailPanel, {
                                    event: selectedEvent
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 1017,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full flex flex-col items-center justify-center text-gray-400 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-12 h-12 opacity-20"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                            lineNumber: 1020,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Select an event from the timeline to view details"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                            lineNumber: 1021,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 1019,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 1015,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                        lineNumber: 914,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                lineNumber: 767,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isModalOpen,
                onOpenChange: setIsModalOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "min-w-3xl  h-[90vh] p-0 overflow-hidden flex flex-col bg-gray-50 print:h-auto print:w-full print:max-w-none print:overflow-visible print:shadow-none print:border-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            className: "px-6 py-4 bg-white border-b border-gray-200 flex-shrink-0 print:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Consent Receipt"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 1033,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                            lineNumber: 1032,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-6 print:p-0 print:overflow-visible",
                            children: receiptLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full flex flex-col items-center justify-center space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-10 h-10 text-blue-600 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 1039,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 font-medium",
                                        children: "Generating Receipt..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                        lineNumber: 1040,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 1038,
                                columnNumber: 15
                            }, this) : receiptData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white shadow-sm rounded-lg print:shadow-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$consent$2d$receipt$2f$consent$2d$receipt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentReceipt"], {
                                    data: receiptData
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 1046,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 1045,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-gray-500 mt-20",
                                children: "Unable to load receipt data."
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                lineNumber: 1049,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                            lineNumber: 1036,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-white border-t border-gray-200 flex justify-end gap-2 flex-shrink-0 print:hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setIsModalOpen(false),
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 1056,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>window.print(),
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                            lineNumber: 1063,
                                            columnNumber: 15
                                        }, this),
                                        " Print Receipt"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                                    lineNumber: 1059,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                            lineNumber: 1055,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                    lineNumber: 1031,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
                lineNumber: 1030,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/consent-timeline/[id]/page.tsx",
        lineNumber: 765,
        columnNumber: 5
    }, this);
}
_s3(ConsentDetailPage, "IqLB6xhJp+Rwtz+7iNXll5wA9Kk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c6 = ConsentDetailPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "FilterDropdown");
__turbopack_context__.k.register(_c1, "DateRangeFilter");
__turbopack_context__.k.register(_c2, "TimelineDetailPanel");
__turbopack_context__.k.register(_c3, "PurposeGroup");
__turbopack_context__.k.register(_c4, "PurposeAttributes");
__turbopack_context__.k.register(_c5, "TableView");
__turbopack_context__.k.register(_c6, "ConsentDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1cad6fb6._.js.map