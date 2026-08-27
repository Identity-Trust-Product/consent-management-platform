(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Tabs(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(param) {
    let { className, variant, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/accordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Accordion(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "accordion",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/accordion.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c = Accordion;
function AccordionItem(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "accordion-item",
        className: className,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/accordion.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c1 = AccordionItem;
function AccordionTrigger(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "accordion-trigger",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/components/ui/accordion.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/accordion.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/accordion.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c2 = AccordionTrigger;
function AccordionContent(param) {
    let { className, children, style, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "accordion-content",
        className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pt-0 pb-4", className),
            style: style,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/accordion.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/accordion.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_c3 = AccordionContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Accordion");
__turbopack_context__.k.register(_c1, "AccordionItem");
__turbopack_context__.k.register(_c2, "AccordionTrigger");
__turbopack_context__.k.register(_c3, "AccordionContent");
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
"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/DataProcessorOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ // FILE: app/consent-wallet/DataProcessorOverlay.tsx
__turbopack_context__.s([
    "DataProcessorOverlay",
    ()=>DataProcessorOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-notice-translation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function DataProcessorOverlay(param) {
    let { attributeName, processors } = param;
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeTranslation"])("dprm");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "ml-1 inline-flex text-gray-400 hover:text-gray-600 focus:outline-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "w-3.5 h-3.5"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/DataProcessorOverlay.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/DataProcessorOverlay.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/DataProcessorOverlay.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "max-w-sm rounded-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        className: "border-b pb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "text-lg font-semibold",
                            children: t("More Information")
                        }, void 0, false, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/DataProcessorOverlay.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/DataProcessorOverlay.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-sm font-semibold text-gray-900 mb-3",
                                children: t("Data Processors")
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/DataProcessorOverlay.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            processors.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: processors.map((proc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "secondary",
                                        className: "bg-gray-100 text-gray-700 hover:bg-gray-200 font-normal px-3 py-1.5",
                                        children: proc
                                    }, idx, false, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/DataProcessorOverlay.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/DataProcessorOverlay.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: [
                                    t("No external data processors listed for this attribute"),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/DataProcessorOverlay.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/DataProcessorOverlay.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/DataProcessorOverlay.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/DataProcessorOverlay.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(DataProcessorOverlay, "uAE2S7Yh8TZCOodDFi+Om6eDyII=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeTranslation"]
    ];
});
_c = DataProcessorOverlay;
var _c;
__turbopack_context__.k.register(_c, "DataProcessorOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLocalizedContent",
    ()=>getLocalizedContent
]);
function getLocalizedContent(obj, fallback, languageCode) {
    let field = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "name";
    if (!obj) return fallback;
    const getValue = (data, path)=>{
        return path.split(".").reduce((acc, part)=>acc && acc[part], data);
    };
    // Try to find translation for the current language
    if (obj.translations && typeof obj.translations === "object" && obj.translations[languageCode]) {
        const val = getValue(obj.translations[languageCode], field);
        if (val) return val;
    }
    // Fallback to English if available in translations
    if (obj.translations && typeof obj.translations === "object" && obj.translations["en"]) {
        const val = getValue(obj.translations["en"], field);
        if (val) return val;
    }
    // Final fallback to the provided string (usually the default DB value)
    return fallback;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ // FILE: app/consent-wallet/ConsentList.tsx
__turbopack_context__.s([
    "ConsentList",
    ()=>ConsentList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$DataProcessorOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/DataProcessorOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-notice-translation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/notice-language-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
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
function ConsentList(param) {
    let { consents, status, userAttributes } = param;
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeTranslation"])("dprm");
    const { currentLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeLanguage"])();
    if (consents.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-10 text-gray-500",
            children: [
                t("No consents found"),
                "."
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    // 1. Group Consents by CONSENT PURPOSE Name
    // Example Map: { "Marketing": [Consent1, Consent2], "Strictly Necessary": [Consent3] }
    const groupedConsents = consents.reduce((acc, consent)=>{
        var _consent_consentPurpose;
        const purposeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedContent"])(consent.consentPurpose, ((_consent_consentPurpose = consent.consentPurpose) === null || _consent_consentPurpose === void 0 ? void 0 : _consent_consentPurpose.name) || "General Consent", currentLanguage);
        if (!acc[purposeName]) {
            acc[purposeName] = [];
        }
        acc[purposeName].push(consent);
        return acc;
    }, {});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-semibold text-sm text-gray-900 mb-2",
                children: t("Purpose of Consent")
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                type: "multiple",
                defaultValue: Object.keys(groupedConsents),
                className: "space-y-4",
                children: Object.entries(groupedConsents).map((param, idx)=>{
                    let [purposeName, groupConsents] = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                        value: "item-".concat(idx),
                        className: "bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                className: "px-4 py-4 hover:no-underline hover:bg-gray-50/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base font-semibold text-gray-900",
                                    children: purposeName
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                className: "px-0 pb-0 border-t border-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "divide-y divide-gray-100",
                                    children: groupConsents.map((consent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsentItem, {
                                            consent: consent,
                                            status: status,
                                            userAttributes: userAttributes,
                                            currentLanguage: currentLanguage,
                                            t: t
                                        }, consent.publicId, false, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                                            lineNumber: 92,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(ConsentList, "OW2Oxuiq1GG0OLMzLE81ZA12mwA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeLanguage"]
    ];
});
_c = ConsentList;
// --- Individual Row Component ---
function ConsentItem(param) {
    let { consent, status, userAttributes, currentLanguage, t } = param;
    var _pp_processingPurposeToDataProcessors;
    const pp = consent.processingPurpose;
    const ppName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedContent"])(pp, (pp === null || pp === void 0 ? void 0 : pp.name) || "Data Processing", currentLanguage);
    const description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedContent"])(pp, (pp === null || pp === void 0 ? void 0 : pp.description) || "To allow the service provider to process your data for this purpose.", currentLanguage, "description");
    // Extract Data Processors for the Overlay
    // We collect ALL processors attached to this processing purpose
    const processors = (pp === null || pp === void 0 ? void 0 : (_pp_processingPurposeToDataProcessors = pp.processingPurposeToDataProcessors) === null || _pp_processingPurposeToDataProcessors === void 0 ? void 0 : _pp_processingPurposeToDataProcessors.map((rel)=>rel.dataProcessor.brandName || rel.dataProcessor.legalName)) || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-5 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-base font-medium text-gray-900",
                        children: ppName
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    status !== "active" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "secondary",
                        className: "text-[10px] h-5",
                        children: t(status === "expired" ? "Expired" : "Revoked")
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-500 leading-relaxed mb-2",
                children: description
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        className: "text-xs font-semibold text-gray-900 mb-2",
                        children: t("Personal Data")
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: consent.userAttributeNames.map((attr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center bg-gray-100 rounded-full px-3 py-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-700 font-medium mr-1",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedContent"])(userAttributes[attr], attr, currentLanguage)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$DataProcessorOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataProcessorOverlay"], {
                                        attributeName: attr,
                                        processors: processors
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, attr, true, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-500 font-medium pt-2",
                children: [
                    t("Consent Provided On"),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                        lineNumber: 198,
                        columnNumber: 36
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-700 text-sm",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(consent.insertedAt), "dd/MM/yyyy")
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_c1 = ConsentItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "ConsentList");
__turbopack_context__.k.register(_c1, "ConsentItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimelineList",
    ()=>TimelineList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-notice-translation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/notice-language-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$hi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/hi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/bn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$gu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/gu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$kn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/kn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$ta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/ta.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$te$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/te.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/baby.js [app-client] (ecmascript) <export default as Baby>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const localeMap = {
    hi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$hi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hi"],
    bn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn"],
    gu: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$gu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gu"],
    kn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$kn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kn"],
    ta: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$ta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ta"],
    te: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$te$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["te"],
    en: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enUS"]
};
;
// Custom Icon Component to match screenshot exact styles
function TimelineIcon(param) {
    let { type } = param;
    const base = "w-6 h-6 rounded-full flex items-center justify-center z-10 border-[1.5px] bg-white";
    switch(type){
        case "GRANTED":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(base, "border-green-600"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-3.5 h-3.5 text-green-600 stroke-[3]"
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this);
        case "UPDATED":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(base, "border-orange-500"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                    className: "w-3.5 h-3.5 text-orange-500"
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this); // Refresh icon
        case "REVOKED":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(base, "border-red-500"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                    className: "w-3.5 h-3.5 text-red-500"
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this);
        case "EXPIRED":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(base, "border-red-500"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "w-3.5 h-3.5 text-red-500"
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(base, "border-gray-500"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                    className: "w-3.5 h-3.5 fill-gray-500 text-gray-500"
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this);
    }
}
_c = TimelineIcon;
function TimelineList(param) {
    let { events, selectedId, onSelect } = param;
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeTranslation"])("dprm");
    const { currentLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative pb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[1.65rem] top-3 bottom-0 w-[1.5px] bg-gray-200"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: events.map((event)=>{
                    const isSelected = selectedId === event.id;
                    const totalCount = event.details.sections.reduce((sum, s)=>sum + s.attributes.length, 0);
                    // Badge Colors based on screenshot
                    const badgeStyle = event.type === "GRANTED" ? "bg-[#E8F5E9] text-[#2E7D32]" // Green
                     : event.type === "UPDATED" ? "bg-[#FFF3E0] text-[#EF6C00]" // Orange
                     : "bg-[#FFEBEE] text-[#C62828]"; // Red
                    const dateLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(event.date, "d MMM, yyyy | h:mm a", {
                        locale: localeMap[currentLanguage] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enUS"]
                    });
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative pl-12 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-4 top-0 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineIcon, {
                                            type: event.type
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                            lineNumber: 110,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-medium text-gray-500 whitespace-nowrap pt-0.5",
                                        children: dateLabel
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>onSelect(event.id),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-white border rounded-2xl p-4 cursor-pointer transition-all relative overflow-hidden hover:shadow-sm", isSelected ? "shadow-md border-gray-300" : "border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-1",
                                                        children: [
                                                            event.isMinor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-6 h-6 rounded-full bg-[#4E342E] flex items-center justify-center text-white shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__["Baby"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                                                    lineNumber: 134,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500",
                                                                children: [
                                                                    event.isMinor ? "".concat(event.dataPrincipal, " - ") : "",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-gray-900",
                                                                        children: [
                                                                            event.type === "GRANTED" && t("Consent Granted"),
                                                                            event.type === "UPDATED" && t("Consent Updated"),
                                                                            event.type === "REVOKED" && t("Consents Withdrawn"),
                                                                            event.type === "EXPIRED" && t("Consent Expired")
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                                                        lineNumber: 140,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-500 font-normal ml-1",
                                                                        children: event.isMinor ? t("of minor for") : t("for")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium text-gray-900",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedContent"])({
                                                            translations: event.serviceTranslations
                                                        }, event.serviceName, currentLanguage)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                                lineNumber: 129,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 pl-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2.5 py-1 rounded-md text-xs font-bold min-w-[2rem] text-center", badgeStyle),
                                                        children: String(totalCount).padStart(2, "0")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-4 h-4 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                                lineNumber: 159,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                        lineNumber: 128,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                    lineNumber: 119,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this)
                        ]
                    }, event.id, true, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(TimelineList, "OW2Oxuiq1GG0OLMzLE81ZA12mwA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeLanguage"]
    ];
});
_c1 = TimelineList;
var _c, _c1;
__turbopack_context__.k.register(_c, "TimelineIcon");
__turbopack_context__.k.register(_c1, "TimelineList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ScrollArea(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/scroll-area.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/components/ui/scroll-area.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/components/ui/scroll-area.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/scroll-area.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = ScrollArea;
function ScrollBar(param) {
    let { className, orientation = "vertical", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/components/ui/scroll-area.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/scroll-area.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c1 = ScrollBar;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollArea");
__turbopack_context__.k.register(_c1, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimelineDetailPanel",
    ()=>TimelineDetailPanel
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/baby.js [app-client] (ecmascript) <export default as Baby>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-notice-translation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/notice-language-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$hi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/hi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/bn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$gu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/gu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$kn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/kn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$ta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/ta.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$te$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/te.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
const localeMap = {
    hi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$hi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hi"],
    bn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn"],
    gu: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$gu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gu"],
    kn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$kn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kn"],
    ta: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$ta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ta"],
    te: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$te$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["te"],
    en: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enUS"]
};
// --- Helper: Event Styles matching the screenshot ---
const getEventStyles = (type)=>{
    switch(type){
        case "GRANTED":
            return {
                bg: "bg-[#ECFDF5]",
                border: "border-green-100",
                text: "text-green-900",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "w-5 h-5 text-green-600"
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                    lineNumber: 53,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                labelKey: "Consent Granted on"
            };
        case "UPDATED":
            return {
                bg: "bg-[#FFFBF0]",
                border: "border-[#FDE6C8]",
                text: "text-[#433422]",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                    className: "w-5 h-5 text-[#D97706]"
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                    lineNumber: 61,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                labelKey: "Consent Updated on"
            };
        case "REVOKED":
            return {
                bg: "bg-[#FEF2F2]",
                border: "border-red-100",
                text: "text-red-900",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                    className: "w-5 h-5 text-red-600"
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                    lineNumber: 69,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                labelKey: "Consents Withdrawn on"
            };
        case "EXPIRED":
            return {
                bg: "bg-[#FEF2F2]",
                border: "border-red-100",
                text: "text-red-900",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "w-5 h-5 text-red-600"
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                    lineNumber: 77,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                labelKey: "Consent Expired on"
            };
        default:
            return {
                bg: "bg-gray-50",
                border: "border-gray-200",
                text: "text-gray-800",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "w-5 h-5 text-gray-600"
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                    lineNumber: 85,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                labelKey: "Event on"
            };
    }
};
function TimelineDetailPanel(param) {
    let { event, isMobileView, userAttributes } = param;
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeTranslation"])("dprm");
    const { currentLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeLanguage"])();
    const styles = getEventStyles(event.type);
    const essentialSections = event.details.sections.filter((s)=>s.isEssential);
    const optionalSections = event.details.sections.filter((s)=>!s.isEssential);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#F9FAFB] font-sans overflow-hidden rounded-t-3xl md:rounded-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-5 border-b shrink-0", styles.bg, styles.border),
                children: [
                    event.isMinor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 inline-flex items-center gap-2 bg-[#6D5646] rounded-full px-3 py-1 w-fit shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__["Baby"], {
                                className: "w-3.5 h-3.5 text-white"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium text-white",
                                children: event.dataPrincipal || "Minor Account"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-0.5",
                                children: styles.icon
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold text-base", styles.text),
                                        children: t(styles.labelKey)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1 font-medium",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(event.date), "dd MMM, yy | h:mm a", {
                                            locale: localeMap[currentLanguage] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enUS"]
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-900 mt-2",
                                        children: [
                                            t("For"),
                                            " ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedContent"])({
                                                translations: event.serviceTranslations
                                            }, event.serviceName, currentLanguage)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                className: "flex-1 min-h-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-4 pb-8",
                    children: [
                        essentialSections.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PurposeGroup, {
                            title: t("Essential Purposes"),
                            sections: essentialSections,
                            defaultOpen: true,
                            eventType: event.type,
                            userAttributes: userAttributes,
                            currentLanguage: currentLanguage,
                            t: t
                        }, void 0, false, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this),
                        optionalSections.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PurposeGroup, {
                            title: t("Optional Purposes"),
                            sections: optionalSections,
                            defaultOpen: true,
                            eventType: event.type,
                            userAttributes: userAttributes,
                            currentLanguage: currentLanguage,
                            t: t
                        }, void 0, false, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 bg-[#F0FDF4] border-t border-green-100 flex justify-center items-center gap-2 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                        className: "w-4 h-4 text-green-700"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold text-green-800",
                        children: t("Your information is safe with us")
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(TimelineDetailPanel, "OW2Oxuiq1GG0OLMzLE81ZA12mwA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeLanguage"]
    ];
});
_c = TimelineDetailPanel;
// --- Group Component ---
function PurposeGroup(param) {
    let { title, sections, defaultOpen, eventType, userAttributes, currentLanguage, t } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
        type: "single",
        collapsible: true,
        defaultValue: defaultOpen ? "item-1" : undefined,
        className: "bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
            value: "item-1",
            className: "border-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                    className: "px-4 py-3 bg-white hover:bg-gray-50 transition-colors group border-b border-gray-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-sm text-gray-900",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-400 font-normal",
                                children: t("will be used for")
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "w-3.5 h-3.5 text-gray-300 ml-auto"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                    className: "px-4 pb-4 pt-4 bg-gray-50/30",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: sections.map((section, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PurposeCard, {
                                section: section,
                                eventType: eventType,
                                userAttributes: userAttributes,
                                currentLanguage: currentLanguage,
                                t: t
                            }, idx, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                lineNumber: 218,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
            lineNumber: 205,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
_c1 = PurposeGroup;
// --- Card Component ---
function PurposeCard(param) {
    let { section, eventType, userAttributes, currentLanguage, t } = param;
    var _section_changes;
    _s1();
    const [isDataOpen, setIsDataOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // Default open to show attributes as per screenshot
    // Calculate Diff Stats
    const addedCount = section.attributes.filter((a)=>a.status === "added").length;
    const removedCount = section.attributes.filter((a)=>a.status === "removed").length;
    const hasDiffs = addedCount > 0 || removedCount > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-gray-200 rounded-xl p-5 bg-white shadow-[0_2px_4px_-2px_rgba(0,0,0,0.05)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-bold text-sm text-gray-900",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedContent"])({
                        translations: section.translations
                    }, section.title, currentLanguage)
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                    lineNumber: 264,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            eventType === "UPDATED" && ((_section_changes = section.changes) === null || _section_changes === void 0 ? void 0 : _section_changes.summaryText) && section.changes.summaryText.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#ED8E001A] border-l border-[#AA5800] p-4 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "list-decimal list-inside space-y-1.5",
                    children: section.changes.summaryText.map((txt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "text-xs font-medium text-[#92400E]",
                            children: txt
                        }, i, false, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                            lineNumber: 276,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                    lineNumber: 274,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                lineNumber: 273,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-500 leading-relaxed mb-4",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedContent"])({
                    translations: section.translations
                }, section.description || "We use this data to provide you with relevant services and updates based on your preferences.", currentLanguage, "description")
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-100 pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsDataOpen(!isDataOpen),
                        className: "w-full flex items-center justify-between group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-gray-800",
                                        children: t("Personal Data Used")
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this),
                                    hasDiffs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1 ml-1",
                                        children: [
                                            addedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FFF7ED] text-[#C2410C]",
                                                children: [
                                                    String(addedCount).padStart(2, "0"),
                                                    " ",
                                                    t("Added")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                                lineNumber: 308,
                                                columnNumber: 19
                                            }, this),
                                            removedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FFF7ED] text-[#C2410C]",
                                                children: [
                                                    String(removedCount).padStart(2, "0"),
                                                    " ",
                                                    t("Removed")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                                lineNumber: 313,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this),
                            isDataOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                className: "w-4 h-4 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "w-4 h-4 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    isDataOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex flex-wrap gap-2",
                        children: section.attributes.map((attr, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttributePill, {
                                attr: attr,
                                userAttributes: userAttributes,
                                currentLanguage: currentLanguage
                            }, idx, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                                lineNumber: 331,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_s1(PurposeCard, "dXIKtQuBufSG2D2KjDJvHrz9pag=");
_c2 = PurposeCard;
// --- Pill Component ---
function AttributePill(param) {
    let { attr, userAttributes, currentLanguage } = param;
    const baseClass = "px-3 py-1.5 rounded-full text-[11px] font-medium border transition-colors cursor-default";
    const displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedContent"])(userAttributes[attr.name], attr.name, currentLanguage);
    if (attr.status === "added") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClass, "bg-[#DCFCE7] text-[#166534] border-[#BBF7D0]"),
            children: displayName
        }, void 0, false, {
            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
            lineNumber: 350,
            columnNumber: 7
        }, this);
    }
    if (attr.status === "removed") {
        // Matching the "Company Address" style in screenshot (Orange background, no strikethrough usually for just 'removed' tag unless explicitly revoked context, but based on screenshot 2 it looks solid orange)
        // Screenshot 2 shows "Company Address" as orange-ish background.
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClass, "bg-[#FFEDD5] text-[#9A3412] border-[#FED7AA]"),
            children: displayName
        }, void 0, false, {
            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
            lineNumber: 365,
            columnNumber: 7
        }, this);
    }
    // Default / Unchanged / Granted
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClass, "bg-[#F3F4F6] text-[#374151] border-[#E5E7EB]"),
        children: displayName
    }, void 0, false, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx",
        lineNumber: 378,
        columnNumber: 5
    }, this);
}
_c3 = AttributePill;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TimelineDetailPanel");
__turbopack_context__.k.register(_c1, "PurposeGroup");
__turbopack_context__.k.register(_c2, "PurposeCard");
__turbopack_context__.k.register(_c3, "AttributePill");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
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
function Sheet(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
_c = Sheet;
function SheetTrigger(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
_c1 = SheetTrigger;
function SheetClose(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 32,
        columnNumber: 10
    }, this);
}
_c2 = SheetClose;
function SheetPortal(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 38,
        columnNumber: 10
    }, this);
}
_c3 = SheetPortal;
function SheetOverlay(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c4 = SheetOverlay;
function SheetContent(param) {
    let { className, children, side = "right", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/sheet.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "sheet-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sheet.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sheet.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/sheet.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/sheet.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = SheetContent;
function SheetHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1.5 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c6 = SheetHeader;
function SheetFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_c7 = SheetFooter;
function SheetTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c8 = SheetTitle;
function SheetDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c9 = SheetDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetClose");
__turbopack_context__.k.register(_c3, "SheetPortal");
__turbopack_context__.k.register(_c4, "SheetOverlay");
__turbopack_context__.k.register(_c5, "SheetContent");
__turbopack_context__.k.register(_c6, "SheetHeader");
__turbopack_context__.k.register(_c7, "SheetFooter");
__turbopack_context__.k.register(_c8, "SheetTitle");
__turbopack_context__.k.register(_c9, "SheetDescription");
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
"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/data:129e52 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"788fc4bd2d8c3d7ef4a01379cb9bdcd71e167e52ef":"getReceiptData"},"app/cms/principal/dprm/[access_token]/consent-wallet/actions.ts",""] */ __turbopack_context__.s([
    "getReceiptData",
    ()=>getReceiptData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getReceiptData = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("788fc4bd2d8c3d7ef4a01379cb9bdcd71e167e52ef", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getReceiptData"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuLyoqXHJcbiAqIE9wZW4gQmhhcmF0IERpZ2l0YWwgQ29uc2VudCBieSBJRGZ5XHJcbiAqIENvcHlyaWdodCAoYykgMjAyNSBCYWxkb3IgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCAoSURmeSlcclxuICogXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFByaXZ5IFB1YmxpYyBMaWNlbnNlLlxyXG4gKiBTZWUgTElDRU5TRS5tZCBmb3IgdGhlIGZ1bGwgdGVybXMgb2YgdXNlLlxyXG4gKiBcclxuICogVW5hdXRob3JpemVkIGNvcHlpbmcsIG1vZGlmaWNhdGlvbiwgZGlzdHJpYnV0aW9uLCBvciBjb21tZXJjaWFsIHVzZVxyXG4gKiBpcyBzdHJpY3RseSBwcm9oaWJpdGVkIHdpdGhvdXQgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uIGZyb20gSURmeS5cclxuICovXHJcblxyXG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgQ29uc2VudFdpdGhSZWxhdGlvbnMgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBQcmlzbWEsIENvbnNlbnRBY3Rpb24gfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbi8vIDEuIERlZmluZSB0aGUgaW5jbHVkZSBvYmplY3QgYXMgYSBwbGFpbiBjb25zdCAoVHlwZSBJbmZlcmVuY2Ugd2lsbCBoYW5kbGUgdGhlIHJlc3QpXHJcbmNvbnN0IGRiSW5jbHVkZSA9IHtcclxuICBidXNpbmVzc1Byb2Nlc3M6IHRydWUsXHJcbiAgYnVzaW5lc3NQcm9jZXNzUnVsZToge1xyXG4gICAgaW5jbHVkZToge1xyXG4gICAgICBwcm9jZXNzaW5nUHVycG9zZToge1xyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIHB1cnBvc2VPZlByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgICBwcm9jZXNzaW5nUHVycG9zZVRvRGF0YVByb2Nlc3NvcnM6IHtcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBkYXRhUHJvY2Vzc29yOiB0cnVlIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnNlbnRQdXJwb3NlOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByb2Nlc3NpbmdQdXJwb3NlOiB7XHJcbiAgICBpbmNsdWRlOiB7XHJcbiAgICAgIHB1cnBvc2VPZlByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgIHByb2Nlc3NpbmdQdXJwb3NlVG9EYXRhUHJvY2Vzc29yczoge1xyXG4gICAgICAgIGluY2x1ZGU6IHsgZGF0YVByb2Nlc3NvcjogdHJ1ZSB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnNlbnRQdXJwb3NlOiB0cnVlLFxyXG5cclxuICAvLyAtLS0gRklYIElTIEhFUkUgLS0tXHJcbiAgY2hpbGRDb25zZW50czoge1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgYXVkaXRUcmFpbDoge1xyXG4gICAgICAgIHNvbWU6IHtcclxuICAgICAgICAgIGFjdGlvbjoge1xyXG4gICAgICAgICAgICBpbjogW1xyXG4gICAgICAgICAgICAgIENvbnNlbnRBY3Rpb24uVkVSU0lPTl9VUERBVEVELFxyXG4gICAgICAgICAgICAgIENvbnNlbnRBY3Rpb24uUkVORVdFRCxcclxuICAgICAgICAgICAgICBDb25zZW50QWN0aW9uLlNVUEVSQ0VERURcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWxlY3Q6IHsgaWQ6IHRydWUgfSxcclxuICB9LFxyXG59IHNhdGlzZmllcyBQcmlzbWEuQ29uc2VudEluY2x1ZGU7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRVc2VyQXR0cmlidXRlc0RpY3Rpb25hcnkoKSB7XHJcbiAgY29uc3QgYXR0cmlidXRlcyA9IGF3YWl0IHByaXNtYS51c2VyQXR0cmlidXRlLmZpbmRNYW55KHtcclxuICAgIHNlbGVjdDoge1xyXG4gICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICB0cmFuc2xhdGlvbnM6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYXR0cmlidXRlcy5yZWR1Y2UoKGFjYywgYXR0cikgPT4ge1xyXG4gICAgYWNjW2F0dHIubmFtZV0gPSB7XHJcbiAgICAgIG5hbWU6IGF0dHIubmFtZSxcclxuICAgICAgdHJhbnNsYXRpb25zOiBhdHRyLnRyYW5zbGF0aW9ucyBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxyXG4gICAgfTtcclxuICAgIHJldHVybiBhY2M7XHJcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgeyBuYW1lOiBzdHJpbmc7IHRyYW5zbGF0aW9uczogUmVjb3JkPHN0cmluZywgYW55PiB9Pik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb25zZW50V2FsbGV0RGF0YShcclxuICBkYXRhUHJpbmNpcGFsSWQ6IHN0cmluZyxcclxuICBtYWpvckRhdGFQcmluY2lwYWxJZD86IHN0cmluZ1xyXG4pIHtcclxuICB0cnkge1xyXG4gICAgLy8gMi4gUmVtb3ZlIGV4cGxpY2l0IHR5cGUgYW5ub3RhdGlvbi5cclxuICAgIC8vICdhbGxDb25zZW50cycgYXV0b21hdGljYWxseSBpbmZlcnMgdGhlIHNoYXBlIGJhc2VkIG9uICdkYkluY2x1ZGUnIGFib3ZlLlxyXG4gICAgY29uc3QgYWxsQ29uc2VudHMgPSBhd2FpdCBwcmlzbWEuY29uc2VudC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgZGF0YVByaW5jaXBhbElkLFxyXG4gICAgICAgIC4uLihtYWpvckRhdGFQcmluY2lwYWxJZCAmJiB7IG1ham9yRGF0YVByaW5jaXBhbElkIH0pLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiBkYkluY2x1ZGUsXHJcbiAgICAgIG9yZGVyQnk6IHtcclxuICAgICAgICBpbnNlcnRlZEF0OiBcImRlc2NcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHVzZXJBdHRyaWJ1dGVzID0gYXdhaXQgZ2V0VXNlckF0dHJpYnV0ZXNEaWN0aW9uYXJ5KCk7XHJcblxyXG4gICAgY29uc3Qgc2VydmljZXNNYXAgPSBuZXcgTWFwPFxyXG4gICAgICBzdHJpbmcsXHJcbiAgICAgIHtcclxuICAgICAgICBzZXJ2aWNlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIHNlcnZpY2VUcmFuc2xhdGlvbnM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xyXG4gICAgICAgIHNlcnZpY2VQdWJsaWNJZDogc3RyaW5nO1xyXG4gICAgICAgIGNvbnNlbnRzOiBDb25zZW50V2l0aFJlbGF0aW9uc1tdO1xyXG4gICAgICB9XHJcbiAgICA+KCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBkYkNvbnNlbnQgb2YgYWxsQ29uc2VudHMpIHtcclxuICAgICAgLy8gVFMga25vd3MgYnVzaW5lc3NQcm9jZXNzIGV4aXN0cyBiZWNhdXNlIG9mIHRoZSBpbmZlcnJlZCAnZGJJbmNsdWRlJ1xyXG4gICAgICBpZiAoIWRiQ29uc2VudC5idXNpbmVzc1Byb2Nlc3MpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gVFMga25vd3MgY2hpbGRDb25zZW50cyBleGlzdHMgYW5kIGlzIGFuIGFycmF5XHJcbiAgICAgIGNvbnN0IGlzU3VwZXJzZWRlZCA9XHJcbiAgICAgICAgZGJDb25zZW50LnN0YXR1cyA9PT0gXCJyZXZva2VkXCIgJiZcclxuICAgICAgICBkYkNvbnNlbnQuY2hpbGRDb25zZW50cyAmJlxyXG4gICAgICAgIGRiQ29uc2VudC5jaGlsZENvbnNlbnRzLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICBpZiAoaXNTdXBlcnNlZGVkKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE1hcCB0byBmcm9udGVuZCB0eXBlXHJcbiAgICAgIGNvbnN0IGNvbnNlbnRGb3JGcm9udGVuZDogQ29uc2VudFdpdGhSZWxhdGlvbnMgPSB7XHJcbiAgICAgICAgLi4uZGJDb25zZW50LFxyXG4gICAgICAgIHZlcnNpb25VcGRhdGVzOiBkYkNvbnNlbnQuY2hpbGRDb25zZW50cyxcclxuICAgICAgICBjaGlsZENvbnNlbnRzOiB1bmRlZmluZWQsXHJcbiAgICAgIH0gYXMgdW5rbm93biBhcyBDb25zZW50V2l0aFJlbGF0aW9ucztcclxuXHJcbiAgICAgIGNvbnN0IGJwSWQgPSBjb25zZW50Rm9yRnJvbnRlbmQuYnVzaW5lc3NQcm9jZXNzLnB1YmxpY0lkO1xyXG5cclxuICAgICAgaWYgKCFzZXJ2aWNlc01hcC5oYXMoYnBJZCkpIHtcclxuICAgICAgICBzZXJ2aWNlc01hcC5zZXQoYnBJZCwge1xyXG4gICAgICAgICAgc2VydmljZU5hbWU6IGNvbnNlbnRGb3JGcm9udGVuZC5idXNpbmVzc1Byb2Nlc3MubmFtZSxcclxuICAgICAgICAgIHNlcnZpY2VUcmFuc2xhdGlvbnM6IChjb25zZW50Rm9yRnJvbnRlbmQuYnVzaW5lc3NQcm9jZXNzIGFzIGFueSkudHJhbnNsYXRpb25zLFxyXG4gICAgICAgICAgc2VydmljZVB1YmxpY0lkOiBicElkLFxyXG4gICAgICAgICAgY29uc2VudHM6IFtdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXJ2aWNlc01hcC5nZXQoYnBJZCkhLmNvbnNlbnRzLnB1c2goY29uc2VudEZvckZyb250ZW5kKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBzZXJ2aWNlczogQXJyYXkuZnJvbShzZXJ2aWNlc01hcC52YWx1ZXMoKSksXHJcbiAgICAgIHVzZXJBdHRyaWJ1dGVzLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNvbnNlbnQgd2FsbGV0IGRhdGE6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBzZXJ2aWNlczogW10sIHVzZXJBdHRyaWJ1dGVzOiB7fSB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEZldGNoZXMgdGhlIGlkZW50aWZpZXJzIHJlcXVpcmVkIHRvIHZpZXcgdGhlIFJlY2VpcHQgaW4gdGhlIENNUy5cclxuICogUmVzb2x2ZXMgdGhlIE5vdGljZSBQdWJsaWMgSUQgYmFzZWQgb24gdGhlIEJ1c2luZXNzIFByb2Nlc3MsIFJlZmVyZW5jZSBJRCwgYW5kIERhdGEgUHJpbmNpcGFsIElELlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2VpcHRWaWV3RGV0YWlscyhcclxuICByZWZlcmVuY2VJZDogc3RyaW5nLFxyXG4gIGRhdGFQcmluY2lwYWxJZDogc3RyaW5nLFxyXG4gIHByb2Nlc3NDb2RlOiBzdHJpbmcsXHJcbiAgdmVyc2lvbjogbnVtYmVyXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBidXNpbmVzc1Byb2Nlc3MgPSBhd2FpdCBwcmlzbWEuYnVzaW5lc3NQcm9jZXNzLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGNvZGVfdmVyc2lvbjoge1xyXG4gICAgICAgICAgY29kZTogcHJvY2Vzc0NvZGUsXHJcbiAgICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFidXNpbmVzc1Byb2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkJ1c2luZXNzIFByb2Nlc3Mgbm90IGZvdW5kXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub3RpY2UgPSBhd2FpdCBwcmlzbWEubm90aWNlLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIG5vdGljZV9hY2NlcHRlZF91bmlxdWVfaW5kZXg6IHtcclxuICAgICAgICAgIHJlZmVyZW5jZUlkOiByZWZlcmVuY2VJZCxcclxuICAgICAgICAgIGRhdGFQcmluY2lwYWxJZDogZGF0YVByaW5jaXBhbElkLFxyXG4gICAgICAgICAgYnVzaW5lc3NQcm9jZXNzSWQ6IGJ1c2luZXNzUHJvY2Vzcy5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBwdWJsaWNJZDogdHJ1ZSxcclxuICAgICAgICBkYXRhUHJpbmNpcGFsSWQ6IHRydWUsIC8vIFRoaXMgc2VydmVzIGFzIHRoZSBhY2Nlc3MgdG9rZW5cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghbm90aWNlKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJSZWNlaXB0L05vdGljZSBub3QgZm91bmRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIG5vdGljZVB1YmxpY0lkOiBub3RpY2UucHVibGljSWQsXHJcbiAgICAgIGFjY2Vzc1Rva2VuOiBub3RpY2UuZGF0YVByaW5jaXBhbElkLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcmVjZWlwdCBkZXRhaWxzOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIHJldHJpZXZlIHJlY2VpcHQgZGV0YWlscy5cIiB9O1xyXG4gIH1cclxufVxyXG5cclxuaW1wb3J0IHsgZ2VuZXJhdGVDb25zZW50UmVjZWlwdCB9IGZyb20gXCJAL2xpYi9zZXJ2aWNlcy9jb25zZW50LXJlY2VpcHQtc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2VpcHREYXRhKFxyXG4gIHJlZmVyZW5jZUlkOiBzdHJpbmcsXHJcbiAgZGF0YVByaW5jaXBhbElkOiBzdHJpbmcsXHJcbiAgcHJvY2Vzc0NvZGU6IHN0cmluZyxcclxuICB2ZXJzaW9uOiBudW1iZXJcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIDEuIFJlc29sdmUgTm90aWNlIFB1YmxpYyBJRCB1c2luZyB0aGUgZXhpc3RpbmcgaGVscGVyXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZWNlaXB0Vmlld0RldGFpbHMoXHJcbiAgICAgIHJlZmVyZW5jZUlkLFxyXG4gICAgICBkYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgIHByb2Nlc3NDb2RlLFxyXG4gICAgICB2ZXJzaW9uXHJcbiAgICApO1xyXG5cclxuICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MgfHwgIXJlc3VsdC5ub3RpY2VQdWJsaWNJZCkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IHJlc3VsdC5lcnJvciB8fCBcIk5vdGljZSBub3QgZm91bmRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIEdlbmVyYXRlIHRoZSByZWNlaXB0IEpTT04gZGF0YVxyXG4gICAgY29uc3QgcmVjZWlwdERhdGEgPSBhd2FpdCBnZW5lcmF0ZUNvbnNlbnRSZWNlaXB0KHJlc3VsdC5ub3RpY2VQdWJsaWNJZCk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVjZWlwdERhdGEgfTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcmVjZWlwdCBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGxvYWQgcmVjZWlwdCBkYXRhLlwiIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoidVVBa05zQiJ9
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
"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimelineClientPage",
    ()=>TimelineClientPage
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$TimelineList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$TimelineDetailPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineDetailPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-notice-translation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$consent$2d$receipt$2f$receipt$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/consent-receipt/receipt-dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$data$3a$129e52__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/data:129e52 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$consent$2d$receipt$2f$consent$2d$receipt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/consent-receipt/consent-receipt.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/notice-language-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
;
function TimelineClientPage(param) {
    let { events, userAttributes, services } = param;
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeTranslation"])("dprm");
    const { currentLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeLanguage"])();
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMobileOpen, setIsMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDesktop, setIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Receipt Modal State
    const [isReceiptModalOpen, setIsReceiptModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [receiptLoading, setReceiptLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [receiptData, setReceiptData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Responsive Check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelineClientPage.useEffect": ()=>{
            const check = {
                "TimelineClientPage.useEffect.check": ()=>setIsDesktop(window.innerWidth >= 1024)
            }["TimelineClientPage.useEffect.check"];
            check();
            window.addEventListener("resize", check);
            return ({
                "TimelineClientPage.useEffect": ()=>window.removeEventListener("resize", check)
            })["TimelineClientPage.useEffect"];
        }
    }["TimelineClientPage.useEffect"], []);
    // Auto-select first event on Desktop only
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelineClientPage.useEffect": ()=>{
            if (isDesktop && events.length > 0 && !selectedId) {
                setSelectedId(events[0].id);
            }
        }
    }["TimelineClientPage.useEffect"], [
        isDesktop,
        events
    ]);
    const handleSelect = (id)=>{
        setSelectedId(id);
        if (!isDesktop) {
            setIsMobileOpen(true);
        }
    };
    // --- RECEIPT LOGIC ---
    const receiptOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TimelineClientPage.useMemo[receiptOptions]": ()=>{
            const map = new Map();
            // Flatten consents from all services
            const allConsents = services.flatMap({
                "TimelineClientPage.useMemo[receiptOptions].allConsents": (s)=>s.consents
            }["TimelineClientPage.useMemo[receiptOptions].allConsents"]);
            allConsents.forEach({
                "TimelineClientPage.useMemo[receiptOptions]": (c)=>{
                    const bp = c.businessProcess;
                    if (!bp) return;
                    const key = "".concat(c.referenceId, "|").concat(c.dataPrincipalId, "|").concat(bp.code, "|").concat(bp.version);
                    if (!map.has(key)) {
                        map.set(key, {
                            referenceId: c.referenceId || "",
                            dataPrincipalId: c.dataPrincipalId,
                            processCode: bp.code,
                            version: bp.version,
                            lastUpdated: c.updatedAt.toString()
                        });
                    }
                }
            }["TimelineClientPage.useMemo[receiptOptions]"]);
            return Array.from(map.values());
        }
    }["TimelineClientPage.useMemo[receiptOptions]"], [
        services
    ]);
    const handleViewReceipt = async (opt)=>{
        setReceiptLoading(true);
        setIsReceiptModalOpen(true);
        setReceiptData(null); // Clear previous data
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$data$3a$129e52__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getReceiptData"])(opt.referenceId, opt.dataPrincipalId, opt.processCode, opt.version);
            if (result.success && result.data) {
                setReceiptData(result.data);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(result.error || t("Failed to load receipt"));
                setIsReceiptModalOpen(false);
            }
        } catch (error) {
            console.error("Error loading receipt:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("An unexpected error occurred"));
            setIsReceiptModalOpen(false);
        } finally{
            setReceiptLoading(false);
        }
    };
    const activeEvent = events.find((e)=>e.id === selectedId);
    if (events.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-64 bg-white border rounded-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                    className: "w-10 h-10 text-gray-300 mb-2"
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: [
                        t("No timeline activity found"),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4 px-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-gray-800 hidden lg:block",
                        children: t("Activity History")
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$consent$2d$receipt$2f$receipt$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReceiptDropdown"], {
                            label: t("Consent Receipt"),
                            options: receiptOptions,
                            onView: handleViewReceipt,
                            showDownload: false
                        }, void 0, false, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-6 items-start relative flex-1 min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:flex-1 min-w-0 h-full overflow-y-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$TimelineList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelineList"], {
                            events: events,
                            selectedId: selectedId,
                            onSelect: handleSelect
                        }, void 0, false, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:block w-[450px] shrink-0 sticky top-0 h-[calc(100vh-180px)]",
                        children: activeEvent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full border border-gray-200 bg-white rounded-xl shadow-sm overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$TimelineDetailPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelineDetailPanel"], {
                                event: activeEvent,
                                userAttributes: userAttributes
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 bg-gray-50",
                            children: t("Select an event to view details")
                        }, void 0, false, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                        open: isMobileOpen,
                        onOpenChange: setIsMobileOpen,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                            side: "bottom",
                            className: "h-[85vh] p-0 rounded-t-2xl flex flex-col z-50 focus:outline-none",
                            children: activeEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$TimelineDetailPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelineDetailPanel"], {
                                event: activeEvent,
                                userAttributes: userAttributes,
                                isMobileView: true
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isReceiptModalOpen,
                onOpenChange: setIsReceiptModalOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-[1000px] min-w-3xl h-[90vh] p-0 overflow-hidden flex flex-col bg-gray-50 print:h-auto print:w-full print:max-w-none print:overflow-visible print:shadow-none print:border-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            className: "px-6 py-4 bg-white border-b border-gray-200 flex-shrink-0 print:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: t("Consent Receipt")
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                            lineNumber: 197,
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
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                                        lineNumber: 204,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 font-medium",
                                        children: t("Generating Receipt...")
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                                lineNumber: 203,
                                columnNumber: 15
                            }, this) : receiptData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white shadow-sm rounded-lg print:shadow-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$consent$2d$receipt$2f$consent$2d$receipt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentReceipt"], {
                                    data: {
                                        ...receiptData,
                                        language: currentLanguage
                                    },
                                    className: "border-none shadow-none"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                                lineNumber: 210,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-gray-500 mt-20",
                                children: t("Unable to load receipt data.")
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                                lineNumber: 214,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-white border-t border-gray-200 flex justify-end gap-2 flex-shrink-0 print:hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setIsReceiptModalOpen(false),
                                    children: t("Close")
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>window.print(),
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        t("Print Receipt")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_s(TimelineClientPage, "WMw5D5+mMqNsU0S9vBsWnDY9IRw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeLanguage"]
    ];
});
_c = TimelineClientPage;
var _c;
__turbopack_context__.k.register(_c, "TimelineClientPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsentWalletClientPage",
    ()=>ConsentWalletClientPage
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$ConsentList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$TimelineClientPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/TimelineClientPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dprm$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dprm-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-notice-translation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/notice-language-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/consent-wallet/utils.ts [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
function ConsentWalletClientPage(param) {
    let { services, timelineEvents, userAttributes } = param;
    var _services_;
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeTranslation"])("dprm");
    const { currentLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeLanguage"])();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("list");
    const [selectedServiceId, setSelectedServiceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(((_services_ = services[0]) === null || _services_ === void 0 ? void 0 : _services_.servicePublicId) || "");
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const homeUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dprm$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDprmLink"])(pathname.split("/").slice(0, 5).join("/"), searchParams);
    const [statusTab, setStatusTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("active");
    const [filterType, setFilterType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [filterUser, setFilterUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const currentServiceData = services.find((s)=>s.servicePublicId === selectedServiceId);
    const currentConsents = (currentServiceData === null || currentServiceData === void 0 ? void 0 : currentServiceData.consents) || [];
    const { activeConsents, expiredConsents, withdrawnConsents } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConsentWalletClientPage.useMemo": ()=>{
            const now = new Date();
            const active = [];
            const expired = [];
            const withdrawn = [];
            for (const consent of currentConsents){
                if (consent.status === "accepted") {
                    active.push(consent);
                } else if (consent.status === "expired") {
                    expired.push(consent);
                } else if (consent.status === "revoked") {
                    if (!consent.successors || consent.successors.length === 0) {
                        withdrawn.push(consent);
                    }
                }
            }
            return {
                activeConsents: active,
                expiredConsents: expired,
                withdrawnConsents: withdrawn
            };
        }
    }["ConsentWalletClientPage.useMemo"], [
        currentConsents
    ]);
    const tabTriggerClass = "relative h-10 rounded-none  px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none text-sm";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#F8F9FA] font-sans text-gray-900 flex flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "hidden md:flex h-18 bg-white border-b border-gray-200 items-center px-4 shrink-0 z-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "mr-2 text-gray-700 hover:bg-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: homeUrl,
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[1.5px] bg-gray-200"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center ml-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-bold text-[#181F32] leading-tight",
                                children: t("My Consent Wallet")
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 text-sm text-gray-500 mt-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[0.75rem]",
                                        children: t("Home")
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[0.75rem] text-gray-800 font-medium",
                                        children: view === "list" ? t("List View") : t("Timeline History")
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "md:hidden bg-white border-b border-gray-200 sticky top-0 z-30 flex-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 h-16 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "-ml-2 text-gray-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: homeUrl,
                                className: "flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-lg font-bold text-gray-900",
                            children: t("My Consent Wallet")
                        }, void 0, false, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 overflow-hidden relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "hidden md:flex w-80 bg-white border-r border-gray-200 flex-col flex-shrink-0 z-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex bg-gray-100 p-1 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setView("list"),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-2 text-sm font-medium rounded-md transition-all", view === "list" ? "bg-white shadow-sm text-blue-600" : "text-gray-500 hover:text-gray-900"),
                                            children: t("List View")
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setView("timeline"),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-2 text-sm font-medium rounded-md transition-all", view === "timeline" ? "bg-white shadow-sm text-blue-600" : "text-gray-500 hover:text-gray-900"),
                                            children: t("Timeline View")
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            view === "list" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto py-2 animate-in fade-in duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 pb-3 text-xs font-bold text-gray-400 uppercase tracking-wider",
                                        children: [
                                            t("Opted Services"),
                                            " (",
                                            services.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 space-y-2",
                                        children: services.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedServiceId(s.servicePublicId),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all border-2 relative", selectedServiceId === s.servicePublicId ? "bg-blue-50 border-blue-500 text-blue-700 shadow-sm" : "bg-white border-transparent hover:bg-gray-50 text-gray-600 hover:text-gray-900"),
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedContent"])({
                                                    translations: s.serviceTranslations
                                                }, s.serviceName, currentLanguage)
                                            }, s.servicePublicId, false, {
                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                lineNumber: 203,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this),
                            view === "timeline" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-gray-50/30"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                lineNumber: 219,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 flex flex-col min-w-0 bg-[#F8F9FA] relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-hidden p-4 md:p-6 md:pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:hidden bg-white p-1 rounded-lg border border-gray-200 flex shadow-sm mb-6 flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setView("list"),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-2 rounded-md text-sm font-medium transition-all", view === "list" ? "bg-blue-50 text-blue-700 shadow-sm" : "text-gray-500"),
                                            children: t("List View")
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setView("timeline"),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-2 rounded-md text-sm font-medium transition-all", view === "timeline" ? "bg-blue-50 text-blue-700 shadow-sm" : "text-gray-500"),
                                            children: t("Timeline View")
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this),
                                view === "list" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:hidden p-4 pb-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-2 font-semibold text-sm",
                                                    children: t("Opted Service")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    value: selectedServiceId,
                                                    onValueChange: setSelectedServiceId,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                            className: "w-full h-auto py-6 mb-4 bg-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedContent"])({
                                                                            translations: currentServiceData === null || currentServiceData === void 0 ? void 0 : currentServiceData.serviceTranslations
                                                                        }, (currentServiceData === null || currentServiceData === void 0 ? void 0 : currentServiceData.serviceName) || "", currentLanguage)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                                        lineNumber: 296,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-gray-500",
                                                                        children: [
                                                                            t("Consent Provided On"),
                                                                            ": 03/01/2025"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                                        lineNumber: 299,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            children: services.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: s.servicePublicId,
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedContent"])({
                                                                        translations: s.serviceTranslations
                                                                    }, s.serviceName, currentLanguage)
                                                                }, s.servicePublicId, false, {
                                                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                            lineNumber: 286,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                                            value: statusTab,
                                            onValueChange: setStatusTab,
                                            className: "w-full h-full flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col md:flex-row md:items-center justify-between px-4 md:px-6 pt-2 border-b border-gray-100 shrink-0 bg-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                                        className: "bg-transparent p-0 gap-8 h-auto w-full md:w-auto grid grid-cols-3 md:flex",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                                value: "active",
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(tabTriggerClass, "px-0"),
                                                                children: [
                                                                    t("Active"),
                                                                    " (",
                                                                    activeConsents.length,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                                value: "expired",
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(tabTriggerClass, "px-0"),
                                                                children: [
                                                                    t("Expired"),
                                                                    " (",
                                                                    expiredConsents.length,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                                value: "withdrawn",
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(tabTriggerClass, "px-0"),
                                                                children: [
                                                                    t("Revoked"),
                                                                    " (",
                                                                    withdrawnConsents.length,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                                lineNumber: 336,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 overflow-y-auto p-4 md:p-6 bg-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                                            value: "active",
                                                            className: "mt-0 h-full",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$ConsentList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentList"], {
                                                                consents: activeConsents,
                                                                status: "active",
                                                                userAttributes: userAttributes
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                                            value: "expired",
                                                            className: "mt-0 h-full",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$ConsentList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentList"], {
                                                                consents: expiredConsents,
                                                                status: "expired",
                                                                userAttributes: userAttributes
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                                            value: "withdrawn",
                                                            className: "mt-0 h-full",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$ConsentList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentList"], {
                                                                consents: withdrawnConsents,
                                                                status: "withdrawn",
                                                                userAttributes: userAttributes
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                            lineNumber: 317,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                    lineNumber: 284,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full md:overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$consent$2d$wallet$2f$TimelineClientPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelineClientPage"], {
                                        events: timelineEvents,
                                        userAttributes: userAttributes,
                                        services: services
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                        lineNumber: 369,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                                    lineNumber: 367,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(ConsentWalletClientPage, "dGpnL355VGyY+Y+rQcbdiNTENCE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ConsentWalletClientPage;
function FilterSelect(param) {
    let { value, onChange, label } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
        value: value,
        onValueChange: onChange,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                className: "h-9 min-w-[130px] bg-white border-gray-300 text-xs font-medium rounded-md text-gray-600",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                            className: "w-3 h-3 text-gray-400 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                            lineNumber: 384,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "truncate",
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                            lineNumber: 385,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "all",
                    className: "text-xs",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                    lineNumber: 389,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
                lineNumber: 388,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/consent-wallet/ConsentWalletClientPage.tsx",
        lineNumber: 381,
        columnNumber: 5
    }, this);
}
_c1 = FilterSelect;
var _c, _c1;
__turbopack_context__.k.register(_c, "ConsentWalletClientPage");
__turbopack_context__.k.register(_c1, "FilterSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_74b353db._.js.map