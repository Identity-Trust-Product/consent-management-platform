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
"[project]/app/cms/data-fiduciary/notices/[public_id]/link-generated-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkGeneratedDialog",
    ()=>LinkGeneratedDialog
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function LinkGeneratedDialog(param) {
    let { isOpen, onClose, link } = param;
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LinkGeneratedDialog.useEffect": ()=>{
            if (copied) {
                const timer = setTimeout({
                    "LinkGeneratedDialog.useEffect.timer": ()=>setCopied(false)
                }["LinkGeneratedDialog.useEffect.timer"], 2000);
                return ({
                    "LinkGeneratedDialog.useEffect": ()=>clearTimeout(timer)
                })["LinkGeneratedDialog.useEffect"];
            }
        }
    }["LinkGeneratedDialog.useEffect"], [
        copied
    ]);
    const handleCopyLink = async ()=>{
        try {
            await navigator.clipboard.writeText(link);
            setCopied(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Link copied to clipboard!");
        } catch (error) {
            console.error("Failed to copy link:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to copy link");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "pt-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        className: "flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-5 w-5 text-green-600"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/link-generated-dialog.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Link Generated Successfully"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/link-generated-dialog.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/link-generated-dialog.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/link-generated-dialog.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-muted rounded-lg max-w-md w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block font-mono text-sm text-muted-foreground truncate",
                                children: link
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/link-generated-dialog.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/link-generated-dialog.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleCopyLink,
                            className: "w-fit",
                            disabled: copied,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/link-generated-dialog.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                copied ? "Copied!" : "Copy Link"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/link-generated-dialog.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/link-generated-dialog.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/link-generated-dialog.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/link-generated-dialog.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(LinkGeneratedDialog, "tYwv5uTSY0YuYQo/cPrkmqvP85Y=");
_c = LinkGeneratedDialog;
var _c;
__turbopack_context__.k.register(_c, "LinkGeneratedDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/actions/data:d0642a [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40fa12081c7266dc8eecbe0fc9ae45397ca3dad4a2":"generateNoticeLink"},"actions/notices.ts",""] */ __turbopack_context__.s([
    "generateNoticeLink",
    ()=>generateNoticeLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generateNoticeLink = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40fa12081c7266dc8eecbe0fc9ae45397ca3dad4a2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateNoticeLink"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbm90aWNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcbi8qKlxuICogT3BlbiBCaGFyYXQgRGlnaXRhbCBDb25zZW50IGJ5IElEZnlcbiAqIENvcHlyaWdodCAoYykgMjAyNSBCYWxkb3IgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCAoSURmeSlcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBQcml2eSBQdWJsaWMgTGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFLm1kIGZvciB0aGUgZnVsbCB0ZXJtcyBvZiB1c2UuXG4gKlxuICogVW5hdXRob3JpemVkIGNvcHlpbmcsIG1vZGlmaWNhdGlvbiwgZGlzdHJpYnV0aW9uLCBvciBjb21tZXJjaWFsIHVzZVxuICogaXMgc3RyaWN0bHkgcHJvaGliaXRlZCB3aXRob3V0IHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbiBmcm9tIElEZnkuXG4gKi9cblxuaW1wb3J0IHsgQWN0aW9ucywgUmVzb3VyY2VzIH0gZnJvbSBcIkAvbGliL2NvbnN0YW50cy9yYmFjXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGNyZWF0ZVNhZmVBY3Rpb24gfSBmcm9tIFwiQC9saWIvc2FmZS1hY3Rpb25cIjtcbmltcG9ydCB7IGNyZWF0ZU5vdGljZVNjaGVtYSB9IGZyb20gXCJAL2xpYi9zY2hlbWFzL25vdGljZS1zY2hlbWFzXCI7XG5pbXBvcnQge1xuICBkZWxldGVOb3RpY2UgYXMgZGVsZXRlTm90aWNlU2VydmljZSxcbiAgZ2VuZXJhdGVOb3RpY2VMaW5rIGFzIGdlbmVyYXRlTm90aWNlTGlua1NlcnZpY2UsXG4gIGdldEFsbE5vdGljZXMgYXMgZ2V0QWxsTm90aWNlc1NlcnZpY2UsXG4gIGdldE5vdGljZUJ5SWQgYXMgZ2V0Tm90aWNlQnlJZFNlcnZpY2UsXG4gIGdldE5vdGljZUJ5UHVibGljSWQgYXMgZ2V0Tm90aWNlQnlQdWJsaWNJZFNlcnZpY2UsXG59IGZyb20gXCJAL2xpYi9zZXJ2aWNlcy9ub3RpY2VzLXNlcnZpY2VcIjtcbmltcG9ydCB7IGNyZWF0ZUd1YXJkaWFuVmVyaWZpY2F0aW9uRXZpZGVuY2UgfSBmcm9tIFwiQC9saWIvc2VydmljZXMvZ3VhcmRpYW4tdmVyaWZpY2F0aW9uLXNlcnZpY2VcIjtcbmltcG9ydCB7IHRyaWdnZXJXZWJob29rRXZlbnQgfSBmcm9tIFwiQC9saWIvc2VydmljZXMvd2ViaG9vay1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBXZWJob29rRXZlbnRUeXBlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBkdXJhdGlvbiB0byBob3Vyc1xuZnVuY3Rpb24gY29udmVydFRvSG91cnMoXG4gIGR1cmF0aW9uOiBudW1iZXIsXG4gIHR5cGU6IFwiaG91cnNcIiB8IFwiZGF5c1wiIHwgXCJ3ZWVrc1wiIHwgXCJtb250aHNcIixcbik6IG51bWJlciB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgXCJob3Vyc1wiOlxuICAgICAgcmV0dXJuIGR1cmF0aW9uO1xuICAgIGNhc2UgXCJkYXlzXCI6XG4gICAgICByZXR1cm4gZHVyYXRpb24gKiAyNDtcbiAgICBjYXNlIFwid2Vla3NcIjpcbiAgICAgIHJldHVybiBkdXJhdGlvbiAqIDI0ICogNztcbiAgICBjYXNlIFwibW9udGhzXCI6XG4gICAgICByZXR1cm4gZHVyYXRpb24gKiAyNCAqIDMwOyAvLyBBcHByb3hpbWF0ZSAzMCBkYXlzIHBlciBtb250aFxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZHVyYXRpb247XG4gIH1cbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBleHBpcnkgZGF0ZVxuZnVuY3Rpb24gY2FsY3VsYXRlRXhwaXJ5RGF0ZShcbiAgZHVyYXRpb246IG51bWJlcixcbiAgdHlwZTogXCJob3Vyc1wiIHwgXCJkYXlzXCIgfCBcIndlZWtzXCIgfCBcIm1vbnRoc1wiLFxuKTogRGF0ZSB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGhvdXJzVG9BZGQgPSBjb252ZXJ0VG9Ib3VycyhkdXJhdGlvbiwgdHlwZSk7XG4gIHJldHVybiBuZXcgRGF0ZShub3cuZ2V0VGltZSgpICsgaG91cnNUb0FkZCAqIDYwICogNjAgKiAxMDAwKTtcbn1cblxuLy8gUmVhZCBvcGVyYXRpb25zIC0gTm8gUkJBQyB3cmFwcGVyIG5lZWRlZCAoaGFuZGxlZCBhdCBwYWdlIGxldmVsKVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5vdGljZXMoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IGdldEFsbE5vdGljZXNTZXJ2aWNlKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdldE5vdGljZXMgYWN0aW9uOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RpY2VCeUlkKGlkOiBudW1iZXIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgZ2V0Tm90aWNlQnlJZFNlcnZpY2UoaWQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBnZXROb3RpY2VCeUlkIGFjdGlvbjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RpY2VCeVB1YmxpY0lkKHB1YmxpY0lkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgZ2V0Tm90aWNlQnlQdWJsaWNJZFNlcnZpY2UocHVibGljSWQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBnZXROb3RpY2VCeVB1YmxpY0lkIGFjdGlvbjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmNvbnN0IGRlbGV0ZU5vdGljZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHoubnVtYmVyKCksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZU5vdGljZSA9IGNyZWF0ZVNhZmVBY3Rpb24oXG4gIHsgcmVzb3VyY2U6IFJlc291cmNlcy5OT1RJQ0UsIGFjdGlvbjogQWN0aW9ucy5ERUxFVEUgfSxcbiAgZGVsZXRlTm90aWNlU2NoZW1hLFxuICBhc3luYyAoaW5wdXQsIHVzZXIpID0+IHtcbiAgICBhd2FpdCBkZWxldGVOb3RpY2VTZXJ2aWNlKGlucHV0LmlkKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9jbXMvZGF0YS1maWR1Y2lhcnkvbm90aWNlc1wiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZU5vdGljZUxpbmsobm90aWNlSWQ6IG51bWJlcikge1xuICB0cnkge1xuICAgIC8vIFRPRE86IEFkZCBSQkFDIGNoZWNrIGhlcmVcbiAgICBjb25zdCBub3RpY2VVcmwgPSBhd2FpdCBnZW5lcmF0ZU5vdGljZUxpbmtTZXJ2aWNlKG5vdGljZUlkKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1cmw6IG5vdGljZVVybCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBnZW5lcmF0ZU5vdGljZUxpbmsgYWN0aW9uOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byBnZW5lcmF0ZSBub3RpY2UgbGlua1wiIH07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5vdGljZSA9IGNyZWF0ZVNhZmVBY3Rpb24oXG4gIHsgcmVzb3VyY2U6IFJlc291cmNlcy5OT1RJQ0UsIGFjdGlvbjogQWN0aW9ucy5DUkVBVEUgfSxcbiAgY3JlYXRlTm90aWNlU2NoZW1hLFxuICBhc3luYyAoZGF0YSwgdXNlcikgPT4ge1xuICAgIC8vIENhbGN1bGF0ZSBsaW5rIGV4cGlyeSBkYXRlXG4gICAgY29uc3QgbGlua0V4cGlyZXNBdCA9IGNhbGN1bGF0ZUV4cGlyeURhdGUoXG4gICAgICBkYXRhLm5vdGljZUR1cmF0aW9uLFxuICAgICAgZGF0YS5ub3RpY2VEdXJhdGlvblR5cGUsXG4gICAgKTtcblxuICAgIC8vIENhbGN1bGF0ZSBjb25zZW50IGR1cmF0aW9uIGluIGhvdXJzIGlmIHByb3ZpZGVkXG4gICAgY29uc3QgY29uc2VudER1cmF0aW9uSW5Ib3VycyA9XG4gICAgICBkYXRhLmNvbnNlbnREdXJhdGlvbiAmJiBkYXRhLmNvbnNlbnREdXJhdGlvblR5cGVcbiAgICAgICAgPyBjb252ZXJ0VG9Ib3VycyhkYXRhLmNvbnNlbnREdXJhdGlvbiwgZGF0YS5jb25zZW50RHVyYXRpb25UeXBlKVxuICAgICAgICA6IG51bGw7XG5cbiAgICAvLyBQcmVwYXJlIG5vdGljZSBjb25maWdcbiAgICBjb25zdCBub3RpY2VDb25maWcgPSB7XG4gICAgICB2aWV3TW9kZTogZGF0YS5ub3RpY2VWaWV3TW9kZSxcbiAgICAgIGF0dHJpYnV0ZXNEZWZhdWx0U2VsZWN0aW9uOiBkYXRhLmF0dHJpYnV0ZXNEZWZhdWx0U2VsZWN0aW9uLFxuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgdGhlIG5vdGljZSB3aXRoIG1ldGFkYXRhXG4gICAgY29uc3Qgbm90aWNlID0gYXdhaXQgcHJpc21hLm5vdGljZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICByZWZlcmVuY2VJZDogZGF0YS5yZWZlcmVuY2VJZCxcbiAgICAgICAgZGF0YVByaW5jaXBhbElkOiBkYXRhLmRhdGFQcmluY2lwYWxJZCxcbiAgICAgICAgYnVzaW5lc3NQcm9jZXNzSWQ6IGRhdGEuYnVzaW5lc3NQcm9jZXNzSWQsXG4gICAgICAgIGxpbmtFeHBpcmVzQXQsXG4gICAgICAgIGNvbnNlbnREdXJhdGlvbjogY29uc2VudER1cmF0aW9uSW5Ib3VycyxcbiAgICAgICAgbm90aWNlQ29uZmlnLFxuICAgICAgICByZWRpcmVjdGlvblVybDogZGF0YS5yZWRpcmVjdGlvbkVuZHBvaW50IHx8IG51bGwsXG4gICAgICAgIGRlZmF1bHRMYW5ndWFnZTogXCJlblwiLFxuICAgICAgICBjcmVhdGlvbk1ldGhvZDogXCJ1aVwiLFxuICAgICAgICBjcmVhdGVkQnlVc2VySWQ6IHVzZXIuaWQsXG4gICAgICAgIG1hcmtDb21wbGV0ZWRUaW1lc3RhbXA6IG51bGwsXG4gICAgICAgIGZvck1pbm9yOiBkYXRhLmZvck1pbm9yIHx8IGZhbHNlLFxuICAgICAgICBtZXRhZGF0YTogZGF0YS5tZXRhZGF0YT8ubGVuZ3RoXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGNyZWF0ZTogZGF0YS5tZXRhZGF0YS5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAgICAgICAgICAga2V5OiBpdGVtLmtleSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgYnVzaW5lc3NQcm9jZXNzOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgY29kZTogdHJ1ZSxcbiAgICAgICAgICAgIHZlcnNpb246IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoZGF0YS5mb3JNaW5vcikge1xuICAgICAgYXdhaXQgY3JlYXRlR3VhcmRpYW5WZXJpZmljYXRpb25FdmlkZW5jZSh7XG4gICAgICAgIG5vdGljZUlkOiBub3RpY2UuaWQsXG4gICAgICAgIG1pbm9yRGF0YVByaW5jaXBhbElkOiBub3RpY2UuZGF0YVByaW5jaXBhbElkLFxuICAgICAgICBtZXRhZGF0YTogZGF0YS5tZXRhZGF0YSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXIgTk9USUNFX0NSRUFURUQgd2ViaG9va1xuICAgIHRyeSB7XG4gICAgICB0cmlnZ2VyV2ViaG9va0V2ZW50KFdlYmhvb2tFdmVudFR5cGUuTk9USUNFX0NSRUFURUQsIHtcbiAgICAgICAgbm90aWNlX2lkOiBub3RpY2UucHVibGljSWQsXG4gICAgICAgIGRhdGFfcHJpbmNpcGFsX2lkOiBub3RpY2UuZGF0YVByaW5jaXBhbElkLFxuICAgICAgICByZWZlcmVuY2VfaWQ6IG5vdGljZS5yZWZlcmVuY2VJZCxcbiAgICAgICAgYnVzaW5lc3NfcHJvY2Vzc19jb2RlOiBub3RpY2UuYnVzaW5lc3NQcm9jZXNzLmNvZGUsXG4gICAgICAgIGJ1c2luZXNzX3Byb2Nlc3NfbmFtZTogbm90aWNlLmJ1c2luZXNzUHJvY2Vzcy5uYW1lLFxuICAgICAgICBidXNpbmVzc19wcm9jZXNzX3ZlcnNpb246IG5vdGljZS5idXNpbmVzc1Byb2Nlc3MudmVyc2lvbixcbiAgICAgICAgc3RhdHVzOiBub3RpY2Uuc3RhdHVzLFxuICAgICAgICByZXNvdXJjZV90eXBlOiBcImdyYW50X25vdGljZVwiLFxuICAgICAgICBpbnNlcnRlZF9hdDogbm90aWNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgICB1cGRhdGVkX2F0OiBub3RpY2UudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICAgIGxpbmtfZXhwaXJlc19hdDogbm90aWNlLmxpbmtFeHBpcmVzQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKHdlYmhvb2tFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB0cmlnZ2VyIE5PVElDRV9DUkVBVEVEIHdlYmhvb2s6XCIsIHdlYmhvb2tFcnJvcik7XG4gICAgICAvLyBEb24ndCBmYWlsIHRoZSBub3RpY2UgY3JlYXRpb24gaWYgd2ViaG9vayBmYWlsc1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS9ub3RpY2VzXCIpO1xuICAgIHJldHVybiBub3RpY2U7XG4gIH0sXG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4UkFvR3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShowNoticeClient",
    ()=>ShowNoticeClient
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$notices$2f5b$public_id$5d2f$link$2d$generated$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/notices/[public_id]/link-generated-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$d0642a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:d0642a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Reusable copy field component
function CopyField(param) {
    let { value, label } = param;
    const handleCopy = async ()=>{
        if (!value) return;
        try {
            await navigator.clipboard.writeText(value);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("".concat(label, " copied to clipboard!"));
        } catch (error) {
            console.error("Error copying ".concat(label, ":"), error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to copy ".concat(label));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm font-semibold",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: value || "-"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        onClick: handleCopy,
                        className: "h-6 w-6 p-0 text-muted-foreground hover:text-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c = CopyField;
function ShowNoticeClient(param) {
    let { notice, shouldShowDialog = false } = param;
    _s();
    const [dialogOpen, setDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noticeLink, setNoticeLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShowNoticeClient.useEffect": ()=>{
            // Generate the notice link when component mounts and shouldShowDialog is true
            const generateLink = {
                "ShowNoticeClient.useEffect.generateLink": async ()=>{
                    try {
                        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$d0642a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateNoticeLink"])(notice.id);
                        if (result.success && result.url) {
                            setNoticeLink(result.url);
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(result.error || "Failed to generate notice link");
                        }
                    } catch (error) {
                        console.error("Error generating notice link:", error);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to generate notice link");
                    }
                }
            }["ShowNoticeClient.useEffect.generateLink"];
            generateLink();
            if (shouldShowDialog) {
                setDialogOpen(true);
            }
        }
    }["ShowNoticeClient.useEffect"], [
        notice.id,
        shouldShowDialog
    ]);
    const formatDate = (date)=>{
        if (!date) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    date.toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric"
                    }),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-muted-foreground",
                        children: date.toLocaleTimeString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pb-4 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold",
                                children: [
                                    "Notice ",
                                    notice.publicId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "This is a notice record from your database."
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyField, {
                                value: notice.dataPrincipalId,
                                label: "User ID"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyField, {
                                value: notice.referenceId,
                                label: "Reference ID"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyField, {
                                value: notice.publicId,
                                label: "Notice ID"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold",
                                        children: "Notice Link"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 font-mono text-sm break-all text-muted-foreground max-w-2xl",
                                        children: noticeLink || "-"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold",
                                        children: "Created At"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 text-sm",
                                        children: notice.createdAt.toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric"
                                        }) + " " + notice.createdAt.toLocaleTimeString("en-GB", {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            second: "2-digit",
                                            hour12: false
                                        }) + "Z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold",
                                        children: "Expires At"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 text-sm",
                                        children: notice.linkExpiresAt ? formatDate(notice.linkExpiresAt) : "-"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 text-sm",
                                        children: notice.status.charAt(0).toUpperCase() + notice.status.slice(1)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold",
                                        children: "For Minor"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 text-sm",
                                        children: notice.forMinor ? "True" : "False"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "secondary",
                            size: "lg",
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/cms/data-fiduciary/notices",
                                children: "Back to Notices"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$notices$2f5b$public_id$5d2f$link$2d$generated$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkGeneratedDialog"], {
                isOpen: dialogOpen,
                onClose: ()=>setDialogOpen(false),
                link: noticeLink
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/notices/[public_id]/show-notice-client.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_s(ShowNoticeClient, "7SbJkxyXvE5SPql8s909mJtGBZI=");
_c1 = ShowNoticeClient;
var _c, _c1;
__turbopack_context__.k.register(_c, "CopyField");
__turbopack_context__.k.register(_c1, "ShowNoticeClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Copy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }
    ],
    [
        "path",
        {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }
    ]
];
const Copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("copy", __iconNode);
;
 //# sourceMappingURL=copy.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Copy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_626f7255._.js.map