(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:cursor-pointer", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/actions/data:76d5b3 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40fa12081c7266dc8eecbe0fc9ae45397ca3dad4a2":"generateNoticeLink"},"actions/notices.ts",""] */ __turbopack_context__.s([
    "generateNoticeLink",
    ()=>generateNoticeLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generateNoticeLink = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40fa12081c7266dc8eecbe0fc9ae45397ca3dad4a2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateNoticeLink"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbm90aWNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuLyoqXHJcbiAqIE9wZW4gQmhhcmF0IERpZ2l0YWwgQ29uc2VudCBieSBJRGZ5XHJcbiAqIENvcHlyaWdodCAoYykgMjAyNSBCYWxkb3IgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCAoSURmeSlcclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgUHJpdnkgUHVibGljIExpY2Vuc2UuXHJcbiAqIFNlZSBMSUNFTlNFLm1kIGZvciB0aGUgZnVsbCB0ZXJtcyBvZiB1c2UuXHJcbiAqXHJcbiAqIFVuYXV0aG9yaXplZCBjb3B5aW5nLCBtb2RpZmljYXRpb24sIGRpc3RyaWJ1dGlvbiwgb3IgY29tbWVyY2lhbCB1c2VcclxuICogaXMgc3RyaWN0bHkgcHJvaGliaXRlZCB3aXRob3V0IHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbiBmcm9tIElEZnkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQWN0aW9ucywgUmVzb3VyY2VzIH0gZnJvbSBcIkAvbGliL2NvbnN0YW50cy9yYmFjXCI7XHJcbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTYWZlQWN0aW9uIH0gZnJvbSBcIkAvbGliL3NhZmUtYWN0aW9uXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU5vdGljZVNjaGVtYSB9IGZyb20gXCJAL2xpYi9zY2hlbWFzL25vdGljZS1zY2hlbWFzXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVsZXRlTm90aWNlIGFzIGRlbGV0ZU5vdGljZVNlcnZpY2UsXHJcbiAgZ2VuZXJhdGVOb3RpY2VMaW5rIGFzIGdlbmVyYXRlTm90aWNlTGlua1NlcnZpY2UsXHJcbiAgZ2V0QWxsTm90aWNlcyBhcyBnZXRBbGxOb3RpY2VzU2VydmljZSxcclxuICBnZXROb3RpY2VCeUlkIGFzIGdldE5vdGljZUJ5SWRTZXJ2aWNlLFxyXG4gIGdldE5vdGljZUJ5UHVibGljSWQgYXMgZ2V0Tm90aWNlQnlQdWJsaWNJZFNlcnZpY2UsXHJcbn0gZnJvbSBcIkAvbGliL3NlcnZpY2VzL25vdGljZXMtc2VydmljZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVHdWFyZGlhblZlcmlmaWNhdGlvbkV2aWRlbmNlIH0gZnJvbSBcIkAvbGliL3NlcnZpY2VzL2d1YXJkaWFuLXZlcmlmaWNhdGlvbi1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHRyaWdnZXJXZWJob29rRXZlbnQgfSBmcm9tIFwiQC9saWIvc2VydmljZXMvd2ViaG9vay1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdlYmhvb2tFdmVudFR5cGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnZlcnQgZHVyYXRpb24gdG8gaG91cnNcclxuZnVuY3Rpb24gY29udmVydFRvSG91cnMoXHJcbiAgZHVyYXRpb246IG51bWJlcixcclxuICB0eXBlOiBcImhvdXJzXCIgfCBcImRheXNcIiB8IFwid2Vla3NcIiB8IFwibW9udGhzXCIsXHJcbik6IG51bWJlciB7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIFwiaG91cnNcIjpcclxuICAgICAgcmV0dXJuIGR1cmF0aW9uO1xyXG4gICAgY2FzZSBcImRheXNcIjpcclxuICAgICAgcmV0dXJuIGR1cmF0aW9uICogMjQ7XHJcbiAgICBjYXNlIFwid2Vla3NcIjpcclxuICAgICAgcmV0dXJuIGR1cmF0aW9uICogMjQgKiA3O1xyXG4gICAgY2FzZSBcIm1vbnRoc1wiOlxyXG4gICAgICByZXR1cm4gZHVyYXRpb24gKiAyNCAqIDMwOyAvLyBBcHByb3hpbWF0ZSAzMCBkYXlzIHBlciBtb250aFxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGR1cmF0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBleHBpcnkgZGF0ZVxyXG5mdW5jdGlvbiBjYWxjdWxhdGVFeHBpcnlEYXRlKFxyXG4gIGR1cmF0aW9uOiBudW1iZXIsXHJcbiAgdHlwZTogXCJob3Vyc1wiIHwgXCJkYXlzXCIgfCBcIndlZWtzXCIgfCBcIm1vbnRoc1wiLFxyXG4pOiBEYXRlIHtcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGhvdXJzVG9BZGQgPSBjb252ZXJ0VG9Ib3VycyhkdXJhdGlvbiwgdHlwZSk7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgKyBob3Vyc1RvQWRkICogNjAgKiA2MCAqIDEwMDApO1xyXG59XHJcblxyXG4vLyBSZWFkIG9wZXJhdGlvbnMgLSBObyBSQkFDIHdyYXBwZXIgbmVlZGVkIChoYW5kbGVkIGF0IHBhZ2UgbGV2ZWwpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RpY2VzKHZpZXc/OiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGdldEFsbE5vdGljZXNTZXJ2aWNlKHZpZXcpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0Tm90aWNlcyBhY3Rpb246XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RpY2VCeUlkKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGdldE5vdGljZUJ5SWRTZXJ2aWNlKGlkKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdldE5vdGljZUJ5SWQgYWN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3RpY2VCeVB1YmxpY0lkKHB1YmxpY0lkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGdldE5vdGljZUJ5UHVibGljSWRTZXJ2aWNlKHB1YmxpY0lkKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdldE5vdGljZUJ5UHVibGljSWQgYWN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRlbGV0ZU5vdGljZVNjaGVtYSA9IHoub2JqZWN0KHtcclxuICBpZDogei5udW1iZXIoKSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlTm90aWNlID0gY3JlYXRlU2FmZUFjdGlvbihcclxuICB7IHJlc291cmNlOiBSZXNvdXJjZXMuTk9USUNFLCBhY3Rpb246IEFjdGlvbnMuREVMRVRFIH0sXHJcbiAgZGVsZXRlTm90aWNlU2NoZW1hLFxyXG4gIGFzeW5jIChpbnB1dCwgdXNlcikgPT4ge1xyXG4gICAgYXdhaXQgZGVsZXRlTm90aWNlU2VydmljZShpbnB1dC5pZCk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9jbXMvZGF0YS1maWR1Y2lhcnkvbm90aWNlc1wiKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0sXHJcbik7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVOb3RpY2VMaW5rKG5vdGljZUlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgLy8gVE9ETzogQWRkIFJCQUMgY2hlY2sgaGVyZVxyXG4gICAgY29uc3Qgbm90aWNlVXJsID0gYXdhaXQgZ2VuZXJhdGVOb3RpY2VMaW5rU2VydmljZShub3RpY2VJZCk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1cmw6IG5vdGljZVVybCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2VuZXJhdGVOb3RpY2VMaW5rIGFjdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byBnZW5lcmF0ZSBub3RpY2UgbGlua1wiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlTm90aWNlID0gY3JlYXRlU2FmZUFjdGlvbihcclxuICB7IHJlc291cmNlOiBSZXNvdXJjZXMuTk9USUNFLCBhY3Rpb246IEFjdGlvbnMuQ1JFQVRFIH0sXHJcbiAgY3JlYXRlTm90aWNlU2NoZW1hLFxyXG4gIGFzeW5jIChkYXRhLCB1c2VyKSA9PiB7XHJcbiAgICAvLyBDYWxjdWxhdGUgbGluayBleHBpcnkgZGF0ZVxyXG4gICAgY29uc3QgbGlua0V4cGlyZXNBdCA9IGNhbGN1bGF0ZUV4cGlyeURhdGUoXHJcbiAgICAgIGRhdGEubm90aWNlRHVyYXRpb24sXHJcbiAgICAgIGRhdGEubm90aWNlRHVyYXRpb25UeXBlLFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgY29uc2VudCBkdXJhdGlvbiBpbiBob3VycyBpZiBwcm92aWRlZFxyXG4gICAgY29uc3QgY29uc2VudER1cmF0aW9uSW5Ib3VycyA9XHJcbiAgICAgIGRhdGEuY29uc2VudER1cmF0aW9uICYmIGRhdGEuY29uc2VudER1cmF0aW9uVHlwZVxyXG4gICAgICAgID8gY29udmVydFRvSG91cnMoZGF0YS5jb25zZW50RHVyYXRpb24sIGRhdGEuY29uc2VudER1cmF0aW9uVHlwZSlcclxuICAgICAgICA6IG51bGw7XHJcblxyXG4gICAgLy8gUHJlcGFyZSBub3RpY2UgY29uZmlnXHJcbiAgICBjb25zdCBub3RpY2VDb25maWcgPSB7XHJcbiAgICAgIHZpZXdNb2RlOiBkYXRhLm5vdGljZVZpZXdNb2RlLFxyXG4gICAgICBhdHRyaWJ1dGVzRGVmYXVsdFNlbGVjdGlvbjogZGF0YS5hdHRyaWJ1dGVzRGVmYXVsdFNlbGVjdGlvbixcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBub3RpY2Ugd2l0aCBtZXRhZGF0YVxyXG4gICAgY29uc3Qgbm90aWNlID0gYXdhaXQgcHJpc21hLm5vdGljZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcmVmZXJlbmNlSWQ6IGRhdGEucmVmZXJlbmNlSWQsXHJcbiAgICAgICAgZGF0YVByaW5jaXBhbElkOiBkYXRhLmRhdGFQcmluY2lwYWxJZCxcclxuICAgICAgICBidXNpbmVzc1Byb2Nlc3NJZDogZGF0YS5idXNpbmVzc1Byb2Nlc3NJZCxcclxuICAgICAgICBsaW5rRXhwaXJlc0F0LFxyXG4gICAgICAgIGNvbnNlbnREdXJhdGlvbjogY29uc2VudER1cmF0aW9uSW5Ib3VycyxcclxuICAgICAgICBub3RpY2VDb25maWcsXHJcbiAgICAgICAgcmVkaXJlY3Rpb25Vcmw6IGRhdGEucmVkaXJlY3Rpb25FbmRwb2ludCB8fCBudWxsLFxyXG4gICAgICAgIGRlZmF1bHRMYW5ndWFnZTogXCJlblwiLFxyXG4gICAgICAgIGNyZWF0aW9uTWV0aG9kOiBcInVpXCIsXHJcbiAgICAgICAgY3JlYXRlZEJ5VXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICAgIG1hcmtDb21wbGV0ZWRUaW1lc3RhbXA6IG51bGwsXHJcbiAgICAgICAgZm9yTWlub3I6IGRhdGEuZm9yTWlub3IgfHwgZmFsc2UsXHJcbiAgICAgICAgbWV0YWRhdGE6IGRhdGEubWV0YWRhdGE/Lmxlbmd0aFxyXG4gICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgY3JlYXRlOiBkYXRhLm1ldGFkYXRhLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIGtleTogaXRlbS5rZXksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcclxuICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDogdW5kZWZpbmVkLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgYnVzaW5lc3NQcm9jZXNzOiB7XHJcbiAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29kZTogdHJ1ZSxcclxuICAgICAgICAgICAgdmVyc2lvbjogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChkYXRhLmZvck1pbm9yKSB7XHJcbiAgICAgIGF3YWl0IGNyZWF0ZUd1YXJkaWFuVmVyaWZpY2F0aW9uRXZpZGVuY2Uoe1xyXG4gICAgICAgIG5vdGljZUlkOiBub3RpY2UuaWQsXHJcbiAgICAgICAgbWlub3JEYXRhUHJpbmNpcGFsSWQ6IG5vdGljZS5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgICAgbWV0YWRhdGE6IGRhdGEubWV0YWRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRyaWdnZXIgTk9USUNFX0NSRUFURUQgd2ViaG9va1xyXG4gICAgdHJ5IHtcclxuICAgICAgdHJpZ2dlcldlYmhvb2tFdmVudChXZWJob29rRXZlbnRUeXBlLk5PVElDRV9DUkVBVEVELCB7XHJcbiAgICAgICAgbm90aWNlX2lkOiBub3RpY2UucHVibGljSWQsXHJcbiAgICAgICAgZGF0YV9wcmluY2lwYWxfaWQ6IG5vdGljZS5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgICAgcmVmZXJlbmNlX2lkOiBub3RpY2UucmVmZXJlbmNlSWQsXHJcbiAgICAgICAgYnVzaW5lc3NfcHJvY2Vzc19jb2RlOiBub3RpY2UuYnVzaW5lc3NQcm9jZXNzLmNvZGUsXHJcbiAgICAgICAgYnVzaW5lc3NfcHJvY2Vzc19uYW1lOiBub3RpY2UuYnVzaW5lc3NQcm9jZXNzLm5hbWUsXHJcbiAgICAgICAgYnVzaW5lc3NfcHJvY2Vzc192ZXJzaW9uOiBub3RpY2UuYnVzaW5lc3NQcm9jZXNzLnZlcnNpb24sXHJcbiAgICAgICAgc3RhdHVzOiBub3RpY2Uuc3RhdHVzLFxyXG4gICAgICAgIHJlc291cmNlX3R5cGU6IFwiZ3JhbnRfbm90aWNlXCIsXHJcbiAgICAgICAgaW5zZXJ0ZWRfYXQ6IG5vdGljZS5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB1cGRhdGVkX2F0OiBub3RpY2UudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgbGlua19leHBpcmVzX2F0OiBub3RpY2UubGlua0V4cGlyZXNBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKHdlYmhvb2tFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHRyaWdnZXIgTk9USUNFX0NSRUFURUQgd2ViaG9vazpcIiwgd2ViaG9va0Vycm9yKTtcclxuICAgICAgLy8gRG9uJ3QgZmFpbCB0aGUgbm90aWNlIGNyZWF0aW9uIGlmIHdlYmhvb2sgZmFpbHNcclxuICAgIH1cclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9jbXMvZGF0YS1maWR1Y2lhcnkvbm90aWNlc1wiKTtcclxuICAgIHJldHVybiBub3RpY2U7XHJcbiAgfSxcclxuKTtcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4UkFvR3NCIn0=
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
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$76d5b3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:76d5b3 [app-client] (ecmascript) <text/javascript>");
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
                        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$76d5b3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateNoticeLink"])(notice.id);
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
]);

//# sourceMappingURL=_41e7b027._.js.map