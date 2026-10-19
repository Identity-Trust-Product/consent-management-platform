module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "cn",
    ()=>cn,
    "colorMap",
    ()=>colorMap,
    "cssVariableToHex",
    ()=>cssVariableToHex,
    "generateAccessToken",
    ()=>generateAccessToken,
    "generateHash",
    ()=>generateHash,
    "getCSSVariable",
    ()=>getCSSVariable,
    "verifyAccessToken",
    ()=>verifyAccessToken,
    "verifyDprmToken",
    ()=>verifyDprmToken,
    "verifyNoticeToken",
    ()=>verifyNoticeToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canonicalize$2f$lib$2f$canonicalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canonicalize/lib/canonicalize.js [app-ssr] (ecmascript)");
;
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
async function generateAccessToken(attrs, expiresAt) {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "your-secret-key");
    // Calculate expiry in seconds from now
    const expiryInSeconds = Math.floor(expiresAt.getTime() / 1000);
    const jwt = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignJWT"](attrs).setProtectedHeader({
        alg: "HS256"
    }).setExpirationTime(expiryInSeconds).setIssuedAt().sign(secret);
    return jwt;
}
async function verifyAccessToken(token) {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "your-secret-key");
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
        return payload;
    } catch (error) {
        console.error("Error verifying access token:", error);
        return null;
    }
}
async function verifyNoticeToken(token) {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "your-secret-key");
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
        // Check if token has the required public_id field
        if (!payload.public_id) {
            throw new Error("INVALID_TOKEN");
        }
        return payload;
    } catch (error) {
        // Check for specific JWT errors
        if (error.code === "ERR_JWT_EXPIRED" || error.message?.includes("expired")) {
            throw new Error("TOKEN_EXPIRED");
        }
        // For any other error, throw invalid token
        throw new Error("INVALID_TOKEN");
    }
}
async function verifyDprmToken(token) {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "your-secret-key");
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
        // Check if token has the required data_principal_id field
        if (!payload.data_principal_id) {
            throw new Error("INVALID_TOKEN");
        }
        return payload;
    } catch (error) {
        // Check for specific JWT errors
        if (error.code === "ERR_JWT_EXPIRED" || error.message?.includes("expired")) {
            throw new Error("TOKEN_EXPIRED");
        }
        // For any other error, throw invalid token
        throw new Error("INVALID_TOKEN");
    }
}
const colorMap = {
    primary: "primary",
    secondary: "info",
    success: "success",
    error: "destructive",
    warning: "warning",
    "shades-black": "shades-black",
    "shades-white": "shades-white",
    "neutral-shades": "neutral",
    "pick-color": "pick-color",
    default: "default"
};
const getCSSVariable = (color, colorNumber)=>{
    if (color === "default") return undefined;
    const mappedColor = colorMap[color];
    // Handle special cases where no color number is needed
    if (color === "shades-black" || color === "shades-white") {
        return `var(--${mappedColor})`;
    }
    return `var(--${mappedColor}-${colorNumber})`;
};
const cssVariableToHex = (cssVariable)=>{
    if (!cssVariable || !cssVariable.startsWith("var(--")) {
        return cssVariable; // Return as-is if not a CSS variable
    }
    // Create a temporary element to get computed style
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return "#23DA7F"; // Default fallback
};
function generateHash(data) {
    // canonicalize ensures keys are sorted and whitespace is removed per RFC 8785
    const encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canonicalize$2f$lib$2f$canonicalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data);
    if (!encoded) return "";
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash("sha256").update(encoded).digest("hex");
}
}),
"[project]/components/ui/breadcrumb.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "Breadcrumb",
    ()=>Breadcrumb,
    "BreadcrumbEllipsis",
    ()=>BreadcrumbEllipsis,
    "BreadcrumbItem",
    ()=>BreadcrumbItem,
    "BreadcrumbLink",
    ()=>BreadcrumbLink,
    "BreadcrumbList",
    ()=>BreadcrumbList,
    "BreadcrumbPage",
    ()=>BreadcrumbPage,
    "BreadcrumbSeparator",
    ()=>BreadcrumbSeparator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
function Breadcrumb({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "breadcrumb",
        "data-slot": "breadcrumb",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
function BreadcrumbList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
        "data-slot": "breadcrumb-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground flex flex-wrap items-center gap-1 text-sm break-words sm:gap-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function BreadcrumbItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        "data-slot": "breadcrumb-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1.5", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
function BreadcrumbLink({ asChild, className, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "a";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "breadcrumb-link",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hover:text-foreground transition-colors", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
function BreadcrumbPage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "breadcrumb-page",
        role: "link",
        "aria-disabled": "true",
        "aria-current": "page",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-normal", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
function BreadcrumbSeparator({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        "data-slot": "breadcrumb-separator",
        role: "presentation",
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&>svg]:size-3.5", className),
        ...props,
        children: children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
            fileName: "[project]/components/ui/breadcrumb.tsx",
            lineNumber: 89,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
function BreadcrumbEllipsis({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "breadcrumb-ellipsis",
        role: "presentation",
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex size-9 items-center justify-center", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/components/ui/breadcrumb.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "More"
            }, void 0, false, {
                fileName: "[project]/components/ui/breadcrumb.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/breadcrumb-navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BreadcrumbNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/breadcrumb.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function BreadcrumbNavigation({ items }) {
    if (!items || items.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Breadcrumb"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbList"], {
            children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbItem"], {
                            children: item.type === "link" && item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbLink"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "text-primary-500 hover:text-primary-600 transition-colors",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/breadcrumb-navigation.tsx",
                                    lineNumber: 43,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/breadcrumb-navigation.tsx",
                                lineNumber: 42,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbPage"], {
                                className: "text-neutral-200",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/breadcrumb-navigation.tsx",
                                lineNumber: 51,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/breadcrumb-navigation.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this),
                        index < items.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbSeparator"], {}, void 0, false, {
                            fileName: "[project]/components/breadcrumb-navigation.tsx",
                            lineNumber: 56,
                            columnNumber: 42
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/components/breadcrumb-navigation.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/breadcrumb-navigation.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/breadcrumb-navigation.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/route-metadata.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "extractParams",
    ()=>extractParams,
    "matchRoute",
    ()=>matchRoute,
    "resolveBreadcrumbHrefs",
    ()=>resolveBreadcrumbHrefs,
    "routeMetadata",
    ()=>routeMetadata
]);
const routeMetadata = {
    "/cms": {
        title: "Home",
        breadcrumb_items: [
            {
                type: "page",
                label: "CMS"
            }
        ]
    },
    "/admin": {
        title: "Admin Panel",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Admin Panel"
            }
        ]
    },
    "/cms/data-fiduciary/users": {
        title: "Users and Roles",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/webhooks": {
        title: "Webhooks",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/webhooks/logs": {
        title: "Audit Logs",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Audit Logs"
            }
        ]
    },
    "/cms/data-fiduciary/api-keys": {
        title: "API Keys",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/sla": {
        title: "SLA Configuration",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/business-units": {
        title: "Organization",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/business-units/new": {
        title: "Add New Organization",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Organization",
                href: "/cms/data-fiduciary/business-units"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/business-units/:id": {
        title: "View Organization",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Organization",
                href: "/cms/data-fiduciary/business-units"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/business-units/:id/edit": {
        title: "Edit Organization",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Organization",
                href: "/cms/data-fiduciary/business-units"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/user-attributes": {
        title: "Data attributes",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/user-attributes/new": {
        title: "New Data attributes",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Data attributes",
                href: "/cms/data-fiduciary/user-attributes"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/user-attributes/:id": {
        title: "View Data attributes",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Data attributes",
                href: "/cms/data-fiduciary/user-attributes"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/user-attributes/:id/edit": {
        title: "Edit Data attributes",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Data attributes",
                href: "/cms/data-fiduciary/user-attributes"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/purposes-of-processing": {
        title: "Purpose Sub Master",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/purposes-of-processing/new": {
        title: "New Purpose Sub Master",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Purpose Sub Master",
                href: "/cms/data-fiduciary/purposes-of-processing"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/purposes-of-processing/:id": {
        title: "View Purpose Sub Master",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Purpose Sub Master",
                href: "/cms/data-fiduciary/purposes-of-processing"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/purposes-of-processing/:id/edit": {
        title: "Edit Purpose Sub Master",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Purpose Sub Master",
                href: "/cms/data-fiduciary/purposes-of-processing"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/data-processors": {
        title: "Processors",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/data-processors/new": {
        title: "New Processor",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Processors",
                href: "/cms/data-fiduciary/data-processors"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/data-processors/:ouId": {
        title: "View Processor",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Processors",
                href: "/cms/data-fiduciary/data-processors"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/data-processors/:ouId/edit": {
        title: "Edit Processor",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Processors",
                href: "/cms/data-fiduciary/data-processors"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/consent-purposes": {
        title: "Purpose Master",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/consent-purposes/new": {
        title: "New Purpose Master",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Purpose Master",
                href: "/cms/data-fiduciary/consent-purposes"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/consent-purposes/:id": {
        title: "View Purpose Master",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Purpose Master",
                href: "/cms/data-fiduciary/consent-purposes"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/consent-purposes/:id/edit": {
        title: "Edit Purpose Master",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Purpose Master",
                href: "/cms/data-fiduciary/consent-purposes"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/business-processes": {
        title: "Create Notice Template",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/business-processes/new": {
        title: "New Process",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Process",
                href: "/cms/data-fiduciary/business-processes"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/business-processes/:id": {
        title: "View Process",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Process",
                href: "/cms/data-fiduciary/business-processes"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/business-processes/:id/edit": {
        title: "Edit Process",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Process",
                href: "/cms/data-fiduciary/business-processes"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/notices": {
        title: "Notice Details",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/notices/new": {
        title: "New Notice Details",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Notice Details",
                href: "/cms/data-fiduciary/notices"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/notices/:public_id": {
        title: "Notice Details",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Notice Details",
                href: "/cms/data-fiduciary/notices"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/dashboard/active-consents": {
        title: "Active Consents",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Dashboard",
                href: "/cms/data-fiduciary/dashboard"
            },
            {
                type: "page",
                label: "Active Consents"
            }
        ]
    },
    "/cms/data-fiduciary/dashboard": {
        title: "Analytics Dashboard",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Dashboard"
            }
        ]
    },
    "/cms/data-fiduciary/consent-history": {
        title: "Consent History",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    // "/cms/data-fiduciary/dxp-documents": {
    //   title: "DXP Documents",
    //   breadcrumb_items: [
    //     { type: "link", label: "CMS", href: "/cms" },
    //     { type: "page", label: "DXP Documents" },
    //   ],
    // },
    "/cms/data-fiduciary/consent-timeline/:id": {
        title: "Consent Timeline",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/grievances/admin": {
        title: "Grievances",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/grievances/my-tickets": {
        title: "My Tickets",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/data-retention": {
        title: "Data Retention Policies",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/data-retention/new": {
        title: "New Data Retention Policy",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Data Retention Policies",
                href: "/cms/data-fiduciary/data-retention"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    },
    "/cms/data-fiduciary/data-retention/:id/edit": {
        title: "Edit Data Retention Policy",
        breadcrumb_items: [
            {
                type: "link",
                label: "CMS",
                href: "/cms"
            },
            {
                type: "link",
                label: "Data Retention Policies",
                href: "/cms/data-fiduciary/data-retention"
            },
            {
                type: "page",
                label: "Current Page"
            }
        ]
    }
};
function matchRoute(currentPath) {
    // First try exact match
    if (routeMetadata[currentPath]) {
        return routeMetadata[currentPath];
    }
    // Try pattern matching for dynamic routes
    for (const [pattern, metadata] of Object.entries(routeMetadata)){
        if (pattern.includes(":")) {
            const regex = pattern.replace(/:[^/]+/g, "[^/]+");
            const regexPattern = new RegExp(`^${regex}$`);
            if (regexPattern.test(currentPath)) {
                return metadata;
            }
        }
    }
    return null;
}
function resolveBreadcrumbHrefs(breadcrumbItems, currentPath, params) {
    return breadcrumbItems.map((item)=>{
        if (item.type === "link" && item.href) {
            let resolvedHref = item.href;
            // Replace dynamic segments with actual values
            for (const [key, value] of Object.entries(params)){
                resolvedHref = resolvedHref.replace(`:${key}`, value);
            }
            return {
                ...item,
                href: resolvedHref
            };
        }
        return item;
    });
}
function extractParams(currentPath, pattern) {
    const params = {};
    const patternParts = pattern.split("/cms");
    const pathParts = currentPath.split("/cms");
    if (patternParts.length !== pathParts.length) {
        return params;
    }
    for(let i = 0; i < patternParts.length; i++){
        const patternPart = patternParts[i];
        const pathPart = pathParts[i];
        if (patternPart.startsWith(":")) {
            const paramName = patternPart.slice(1);
            params[paramName] = pathPart;
        }
    }
    return params;
}
}),
"[project]/lib/route-metadata-parser.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "getRouteData",
    ()=>getRouteData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$route$2d$metadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/route-metadata.ts [app-ssr] (ecmascript)");
;
function getRouteData(pathname) {
    // Get route metadata
    const routeData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$route$2d$metadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchRoute"])(pathname);
    if (!routeData) {
        return {
            title: "Page",
            breadcrumbItems: []
        };
    }
    // Find the matching pattern to extract params
    let params = {};
    for (const [pattern] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$route$2d$metadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routeMetadata"])){
        if (pattern.includes(":")) {
            const regex = pattern.replace(/:[^/]+/g, "[^/]+");
            const regexPattern = new RegExp(`^${regex}$`);
            if (regexPattern.test(pathname)) {
                params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$route$2d$metadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractParams"])(pathname, pattern);
                break;
            }
        }
    }
    // Resolve dynamic segments in breadcrumb hrefs
    const resolvedBreadcrumbItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$route$2d$metadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveBreadcrumbHrefs"])(routeData.breadcrumb_items, pathname, params);
    return {
        title: routeData.title,
        breadcrumbItems: resolvedBreadcrumbItems
    };
}
}),
"[project]/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$breadcrumb$2d$navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/breadcrumb-navigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$route$2d$metadata$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/route-metadata-parser.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Header() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { title, breadcrumbItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$route$2d$metadata$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRouteData"])(pathname);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-5 pb-2 pt-20 sm:px-8 lg:px-10 lg:pt-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$breadcrumb$2d$navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        items: breadcrumbItems
                    }, void 0, false, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-2 text-3xl font-bold tracking-tight text-foreground",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/header.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/header.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/accordion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Accordion({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "accordion",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/accordion.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
function AccordionItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "accordion-item",
        className: className,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/accordion.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function AccordionTrigger({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "accordion-trigger",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
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
function AccordionContent({ className, children, style, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "accordion-content",
        className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pt-0 pb-4", className),
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
;
}),
"[project]/actions/data:12ff15 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"008a1212120f9a3422af095421d549786cc5068805":"logout"},"actions/auth.ts",""] */ __turbopack_context__.s([
    "logout",
    ()=>logout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var logout = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("008a1212120f9a3422af095421d549786cc5068805", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "logout"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuLyoqXHJcbiAqIE9wZW4gQmhhcmF0IERpZ2l0YWwgQ29uc2VudCBieSBJRGZ5XHJcbiAqIENvcHlyaWdodCAoYykgMjAyNSBCYWxkb3IgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCAoSURmeSlcclxuICogXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFByaXZ5IFB1YmxpYyBMaWNlbnNlLlxyXG4gKiBTZWUgTElDRU5TRS5tZCBmb3IgdGhlIGZ1bGwgdGVybXMgb2YgdXNlLlxyXG4gKiBcclxuICogVW5hdXRob3JpemVkIGNvcHlpbmcsIG1vZGlmaWNhdGlvbiwgZGlzdHJpYnV0aW9uLCBvciBjb21tZXJjaWFsIHVzZVxyXG4gKiBpcyBzdHJpY3RseSBwcm9oaWJpdGVkIHdpdGhvdXQgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uIGZyb20gSURmeS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcIkAvYXV0aFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICBhd2FpdCBzaWduT3V0KHsgcmVkaXJlY3RUbzogXCIvY21zL2xvZ2luXCIgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrUUFjc0IifQ==
}),
"[project]/components/icons/sidebar-icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "AdminCenterIcon",
    ()=>AdminCenterIcon,
    "ConsentCenterIcon",
    ()=>ConsentCenterIcon,
    "DPOCenterIcon",
    ()=>DPOCenterIcon,
    "PolicyCenterIcon",
    ()=>PolicyCenterIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const PolicyCenterIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "17",
        viewBox: "0 0 16 16",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7.99877 0L8.09329 0.00559997L8.14055 0.0120001L8.18941 0.0224001L8.27833 0.0496C8.33974 0.0722105 8.39812 0.102305 8.45215 0.1392L8.53546 0.2048L8.73972 0.3792C10.3556 1.71965 12.3979 2.43944 14.4983 2.4088L14.7722 2.4008C14.9513 2.39264 15.128 2.44472 15.2739 2.54872C15.4199 2.65271 15.5267 2.8026 15.5773 2.9744C15.9709 4.31166 16.0913 5.7143 15.9314 7.09897C15.7716 8.48364 15.3346 9.82209 14.6466 11.0348C13.9585 12.2475 13.0334 13.3096 11.9262 14.1582C10.819 15.0068 9.55235 15.6244 8.20143 15.9744C8.06957 16.0085 7.93117 16.0085 7.79932 15.9744C6.44833 15.6245 5.18155 15.0069 4.07426 14.1584C2.96698 13.3099 2.04178 12.2477 1.35366 11.035C0.665534 9.82231 0.228522 8.48383 0.0685929 7.09912C-0.0913362 5.7144 0.0290814 4.31171 0.42269 2.9744C0.473242 2.8026 0.580042 2.65271 0.725995 2.54872C0.871948 2.44472 1.04861 2.39264 1.22772 2.4008C3.42049 2.50091 5.57172 1.77999 7.26023 0.3792L7.4709 0.1992L7.5478 0.1392C7.60182 0.102305 7.66021 0.0722105 7.72162 0.0496L7.81133 0.0224001C7.84273 0.014827 7.87456 0.009216 7.90665 0.00559997L7.99877 0ZM10.9706 5.8344C10.8962 5.76002 10.8078 5.70101 10.7106 5.66075C10.6133 5.62049 10.5091 5.59977 10.4038 5.59977C10.2986 5.59977 10.1943 5.62049 10.0971 5.66075C9.99986 5.70101 9.91151 5.76002 9.83712 5.8344L7.19935 8.46799L6.16363 7.43439L6.08833 7.36799C5.92733 7.24367 5.72498 7.1852 5.52239 7.20448C5.31979 7.22375 5.13213 7.31932 4.99753 7.47177C4.86294 7.62422 4.79149 7.82213 4.7977 8.02529C4.80391 8.22845 4.88732 8.42163 5.03098 8.56559L6.63303 10.1656L6.70832 10.232C6.86244 10.3514 7.05489 10.4105 7.24956 10.3983C7.44423 10.3861 7.62774 10.3033 7.76567 10.1656L10.9698 6.96559L11.0363 6.8904C11.1558 6.73647 11.215 6.54427 11.2028 6.34985C11.1905 6.15543 11.1085 5.97215 10.9706 5.8344Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons/sidebar-icons.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/sidebar-icons.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const DPOCenterIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "17",
        viewBox: "0 0 16 17",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.77111 6.85383H7.77766L10.9872 5.71536C11.0003 5.654 11.0003 5.59265 11.0003 5.53811C11.0018 5.4801 10.9929 5.42232 10.9741 5.36768C10.9217 5.21088 10.8235 5.04045 10.6859 4.91774V3.42478C10.6859 2.32039 10.306 1.88409 9.91301 1.63185C9.70995 0.991038 8.86498 0.0843506 7.20779 0.0843506C5.24275 0.0843506 3.76241 2.10906 3.76241 3.42478C3.76241 3.97015 3.74276 4.39964 3.72311 4.72686C3.72311 4.79503 3.71656 4.85639 3.71656 4.91093C3.57246 5.04727 3.4742 5.23133 3.42835 5.40858C3.4218 5.44949 3.41525 5.49039 3.41525 5.53811C3.41525 6.06985 3.70346 6.84019 3.74276 6.92882C3.78206 7.04471 3.86721 7.14015 3.97857 7.19469C3.98512 7.22196 3.99167 7.26286 3.99167 7.34467C3.99167 8.06729 4.58773 8.74901 4.91524 9.07623C4.88249 9.82613 4.67943 10.3442 4.39122 10.4738L1.82356 11.36C1.46679 11.4836 1.14581 11.699 0.890442 11.9862C0.635072 12.2734 0.453598 12.6232 0.362878 13.0029L0.0157194 14.4482C-0.00166833 14.5236 -0.00244747 14.6021 0.0134403 14.6778C0.0293282 14.7536 0.0614714 14.8246 0.107464 14.8856C0.153456 14.9465 0.212107 14.9959 0.279024 15.03C0.345942 15.064 0.419394 15.0819 0.493881 15.0822H7.83661C7.6401 14.8231 7.4567 14.5368 7.2864 14.23C6.80783 13.3578 6.55505 12.3712 6.55278 11.3668V8.63312C6.55278 7.82869 7.04404 7.1197 7.77111 6.85383Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/components/icons/sidebar-icons.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.6585 8.25959L12.159 7.11167C12.0549 7.07695 11.9417 7.07695 11.8377 7.11167L8.33819 8.25959C8.23917 8.29178 8.15315 8.35315 8.09227 8.43503C8.0314 8.51692 7.99873 8.61517 7.9989 8.71592V11.2984C7.9989 14.4504 11.6477 15.9826 11.803 16.0462C11.8648 16.0714 11.9312 16.0843 11.9983 16.0843C12.0654 16.0843 12.1318 16.0714 12.1936 16.0462C12.3489 15.982 15.9977 14.4504 15.9977 11.2984V8.71592C15.9979 8.61517 15.9653 8.51692 15.9044 8.43503C15.8435 8.35315 15.7575 8.29178 15.6585 8.25959ZM14.1887 10.6968L12.3556 12.9464C12.3001 13.0146 12.2308 13.0712 12.152 13.1129C12.0731 13.1546 11.9864 13.1805 11.8969 13.1891C11.8074 13.1976 11.717 13.1886 11.6313 13.1625C11.5455 13.1365 11.466 13.094 11.3977 13.0376L10.2312 12.0735C10.162 12.0195 10.1047 11.9526 10.0628 11.8768C10.0208 11.801 9.99505 11.7179 9.98699 11.6323C9.97892 11.5468 9.98872 11.4605 10.0158 11.3787C10.0429 11.2969 10.0867 11.2211 10.1447 11.1559C10.2027 11.0906 10.2736 11.0373 10.3533 10.9989C10.4331 10.9606 10.52 10.9381 10.6089 10.9327C10.6978 10.9273 10.7869 10.9391 10.871 10.9675C10.9551 10.9958 11.0324 11.0402 11.0985 11.0979L11.737 11.6256L13.1402 9.90369C13.1942 9.83721 13.2612 9.78167 13.3375 9.74025C13.4138 9.69883 13.4979 9.67235 13.5848 9.66231C13.6718 9.65228 13.7599 9.6589 13.8442 9.68179C13.9285 9.70468 14.0073 9.7434 14.076 9.79571C14.145 9.84761 14.2026 9.91214 14.2456 9.98559C14.2886 10.059 14.3161 10.1399 14.3266 10.2237C14.3371 10.3074 14.3303 10.3923 14.3066 10.4735C14.2829 10.5547 14.2429 10.6306 14.1887 10.6968Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/components/icons/sidebar-icons.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons/sidebar-icons.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ConsentCenterIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "17",
        viewBox: "0 0 16 17",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12.0001 1.15626C13.2068 1.85295 14.2105 2.85268 14.912 4.0565C15.6135 5.26032 15.9885 6.62648 15.9997 8.01973C16.011 9.41299 15.6582 10.785 14.9762 12C14.2942 13.215 13.3068 14.2308 12.1115 14.9469C10.9163 15.663 9.55481 16.0545 8.16178 16.0827C6.76875 16.1109 5.39251 15.7748 4.16929 15.1077C2.94608 14.4405 1.91832 13.4655 1.18775 12.2791C0.457175 11.0927 0.049128 9.73603 0.00400014 8.34346L0 8.08426L0.00400014 7.82506C0.0488032 6.44346 0.450844 5.09703 1.17093 3.91706C1.89101 2.73708 2.90456 1.76383 4.11276 1.09217C5.32097 0.420515 6.6826 0.073382 8.0649 0.0846148C9.44721 0.0958476 10.803 0.465063 12.0001 1.15626ZM8.0001 3.28426C7.80415 3.28429 7.61502 3.35623 7.46859 3.48644C7.32216 3.61664 7.22861 3.79606 7.20569 3.99066L7.20009 4.08426V8.08426L7.20729 8.18906C7.22553 8.32786 7.27987 8.45944 7.36489 8.57066L7.43449 8.65066L9.83452 11.0507L9.90972 11.1163C10.05 11.2251 10.2226 11.2842 10.4001 11.2842C10.5777 11.2842 10.7502 11.2251 10.8905 11.1163L10.9657 11.0499L11.0321 10.9747C11.141 10.8344 11.2001 10.6618 11.2001 10.4843C11.2001 10.3067 11.141 10.1342 11.0321 9.99386L10.9657 9.91866L8.80011 7.75226V4.08426L8.79451 3.99066C8.77158 3.79606 8.67803 3.61664 8.5316 3.48644C8.38517 3.35623 8.19605 3.28429 8.0001 3.28426Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons/sidebar-icons.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/sidebar-icons.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const AdminCenterIcon = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10 2C10.5523 2 11 2.44772 11 3V4.17071C11.8841 4.37764 12.6959 4.80009 13.364 5.39062L14.2929 4.46172C14.6834 4.07119 15.3166 4.07119 15.7071 4.46172L16.5355 5.29015C16.926 5.68067 16.926 6.31384 16.5355 6.70436L15.6066 7.63327C16.197 8.30139 16.6195 9.11319 16.8264 9.99733H18C18.5523 9.99733 19 10.445 19 10.9973C19 11.5496 18.5523 11.9973 18 11.9973H16.8264C16.6195 12.8815 16.197 13.6933 15.6066 14.3614L16.5355 15.2903C16.926 15.6808 16.926 16.314 16.5355 16.7045L15.7071 17.5329C15.3166 17.9235 14.6834 17.9235 14.2929 17.5329L13.364 16.6041C12.6959 17.1946 11.8841 17.617 11 17.824V19C11 19.5523 10.5523 20 10 20C9.44772 20 9 19.5523 9 19V17.824C8.11586 17.617 7.30406 17.1946 6.63595 16.6041L5.70711 17.5329C5.31658 17.9235 4.68342 17.9235 4.29289 17.5329L3.46447 16.7045C3.07394 16.314 3.07394 15.6808 3.46447 15.2903L4.39337 14.3614C3.80302 13.6933 3.38057 12.8815 3.17363 11.9973H2C1.44772 11.9973 1 11.5496 1 10.9973C1 10.445 1.44772 9.99733 2 9.99733H3.17363C3.38057 9.11319 3.80302 8.30139 4.39337 7.63327L3.46447 6.70436C3.07394 6.31384 3.07394 5.68067 3.46447 5.29015L4.29289 4.46172C4.68342 4.07119 5.31658 4.07119 5.70711 4.46172L6.63595 5.39062C7.30406 4.80009 8.11586 4.37764 9 4.17071V3C9 2.44772 9.44772 2 10 2ZM10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons/sidebar-icons.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/sidebar-icons.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
;
}),
"[project]/components/cms-sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 *
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 *
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/accordion.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$12ff15__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:12ff15 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$sidebar$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/sidebar-icons.tsx [app-ssr] (ecmascript)");
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
// Menu items configuration
const getDataFiduciaryItems = ()=>{
    // Build DPO Center items conditionally
    const dpoCenterItems = [
        {
            title: "Dashboard",
            href: "/cms/data-fiduciary/dashboard"
        },
        {
            title: "Consent History",
            href: "/cms/data-fiduciary/consent-history"
        }
    ];
    // Only add Grievances admin if user has GRIEVANCE_ADMIN:READ permission
    // if (canAccessGrievanceAdmin) {
    //   dpoCenterItems.push({
    //     title: "Grievances",
    //     href: "/cms/data-fiduciary/grievances/admin",
    //   });
    // }
    // Only add My Tickets if user has GRIEVANCE:READ permission
    // if (canAccessGrievance) {
    //   dpoCenterItems.push({
    //     title: "My Tickets",
    //     href: "/cms/data-fiduciary/grievances/my-tickets",
    //   });
    // }
    const sections = [
        {
            title: "DATA ELEMENT REPOSITORY",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$sidebar$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolicyCenterIcon"],
            defaultOpen: false,
            items: [
                {
                    title: "Organization",
                    href: "/cms/data-fiduciary/business-units"
                },
                {
                    title: "Data attributes",
                    href: "/cms/data-fiduciary/user-attributes"
                },
                {
                    title: "Purpose Sub Master",
                    href: "/cms/data-fiduciary/purposes-of-processing"
                },
                {
                    title: "Purpose Master",
                    href: "/cms/data-fiduciary/consent-purposes"
                }
            ]
        },
        {
            title: "CREATE NOTICE TEMPLATE",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$sidebar$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsentCenterIcon"],
            defaultOpen: false,
            items: [
                {
                    title: "Create Notice Template",
                    href: "/cms/data-fiduciary/business-processes"
                }
            ]
        },
        {
            title: "ADMIN DEPARTMENT",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$sidebar$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DPOCenterIcon"],
            defaultOpen: false,
            items: dpoCenterItems
        },
        {
            title: "NOTICE DETAILS",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$sidebar$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsentCenterIcon"],
            defaultOpen: false,
            items: [
                {
                    title: "View Notice Details",
                    href: "/cms/data-fiduciary/notices"
                }
            ]
        },
        {
            title: "DEVELOPER CENTER",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$sidebar$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DPOCenterIcon"],
            defaultOpen: false,
            items: [
                {
                    title: "API Keys",
                    href: "/cms/data-fiduciary/api-keys"
                },
                {
                    title: "Audit Logs",
                    href: "/cms/data-fiduciary/webhooks/logs"
                }
            ]
        }
    ];
    return sections;
};
function Sidebar({ userName, organizationName }) {
    const [mobileOpen, setMobileOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const sidebarItems = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>getDataFiduciaryItems(), []);
    const currentSection = sidebarItems.find((section)=>section.items.some((item)=>pathname === item.href || pathname.startsWith(item.href + "/")))?.title;
    const [openSections, setOpenSections] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (currentSection) {
            setOpenSections((sections)=>Array.from(new Set([
                    ...sections,
                    currentSection
                ])));
        }
        setMobileOpen(false);
    }, [
        pathname,
        currentSection
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "fixed left-4 top-4 z-50 grid size-10 place-items-center rounded-lg bg-sidebar text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden",
                "aria-label": mobileOpen ? "Close navigation" : "Open navigation",
                "aria-expanded": mobileOpen,
                "aria-controls": "cms-navigation",
                onClick: ()=>setMobileOpen(!mobileOpen),
                children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/components/cms-sidebar.tsx",
                    lineNumber: 187,
                    columnNumber: 23
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/components/cms-sidebar.tsx",
                    lineNumber: 187,
                    columnNumber: 41
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/cms-sidebar.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Close navigation",
                className: "fixed inset-0 z-30 bg-black/40 lg:hidden",
                onClick: ()=>setMobileOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/cms-sidebar.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                id: "cms-navigation",
                "aria-label": "Main navigation",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-y-0 left-0 z-40 flex w-[19.5rem] max-w-[85vw] flex-col bg-sidebar text-sidebar-foreground transition-transform duration-200 motion-reduce:transition-none lg:translate-x-0", mobileOpen ? "visible translate-x-0" : "invisible -translate-x-full lg:visible"),
                onKeyDown: (event)=>{
                    if (event.key === "Escape") setMobileOpen(false);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/cms/data-fiduciary/dashboard",
                        className: "flex shrink-0 flex-col items-center gap-4 px-4 pb-6 pt-20 lg:pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/cms/images/cdac-wordmark.jpg",
                                alt: "C-DAC — Centre for Development of Advanced Computing",
                                width: 192,
                                height: 135,
                                sizes: "96px",
                                className: "h-auto w-24 rounded-md bg-white p-1 object-contain"
                            }, void 0, false, {
                                fileName: "[project]/components/cms-sidebar.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "whitespace-nowrap text-center text-sm font-bold leading-6 text-white sm:text-[15px]",
                                children: "Consent Management Platform"
                            }, void 0, false, {
                                fileName: "[project]/components/cms-sidebar.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cms-sidebar.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "min-h-0 flex-1 overflow-y-auto px-3 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Accordion"], {
                            type: "multiple",
                            value: openSections,
                            onValueChange: setOpenSections,
                            className: "space-y-2",
                            children: sidebarItems.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                    value: section.title,
                                    className: "border-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                            className: "gap-2 rounded-xl px-3 py-4 text-sidebar-foreground hover:bg-white/5 hover:text-white hover:no-underline [&>svg]:text-sidebar-foreground",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex min-w-0 items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(section.icon, {
                                                        className: "size-5 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/cms-sidebar.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-left text-sm font-semibold",
                                                        children: section.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/cms-sidebar.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/cms-sidebar.tsx",
                                                lineNumber: 227,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/cms-sidebar.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                            className: "pb-2 pt-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: section.items.map((item)=>{
                                                    const active = pathname === item.href || pathname.startsWith(item.href + "/");
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        "aria-current": active ? "page" : undefined,
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex min-h-12 items-center rounded-xl py-3 pl-11 pr-3 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary", active ? "bg-primary text-white" : "text-sidebar-foreground hover:bg-white/5 hover:text-white"),
                                                        children: item.title
                                                    }, item.href, false, {
                                                        fileName: "[project]/components/cms-sidebar.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/cms-sidebar.tsx",
                                                lineNumber: 233,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/cms-sidebar.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, section.title, true, {
                                    fileName: "[project]/components/cms-sidebar.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/cms-sidebar.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/cms-sidebar.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-4 border-t border-sidebar-border py-5 text-sm leading-6",
                        children: [
                            userName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-white",
                                children: userName
                            }, void 0, false, {
                                fileName: "[project]/components/cms-sidebar.tsx",
                                lineNumber: 257,
                                columnNumber: 24
                            }, this),
                            organizationName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "break-words",
                                children: organizationName
                            }, void 0, false, {
                                fileName: "[project]/components/cms-sidebar.tsx",
                                lineNumber: 258,
                                columnNumber: 32
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Data Fiduciary"
                            }, void 0, false, {
                                fileName: "[project]/components/cms-sidebar.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                action: __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$12ff15__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["logout"],
                                className: "mt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "h-10 w-full rounded-xl border border-white/15 font-semibold transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                                    children: "Sign out"
                                }, void 0, false, {
                                    fileName: "[project]/components/cms-sidebar.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/cms-sidebar.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cms-sidebar.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cms-sidebar.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c98c6af6._.js.map