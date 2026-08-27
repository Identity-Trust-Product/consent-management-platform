(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$crypto$2d$browserify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canonicalize$2f$lib$2f$canonicalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canonicalize/lib/canonicalize.js [app-client] (ecmascript)");
;
;
;
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
async function generateAccessToken(attrs, expiresAt) {
    const secret = new TextEncoder().encode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_SECRET || "your-secret-key");
    // Calculate expiry in seconds from now
    const expiryInSeconds = Math.floor(expiresAt.getTime() / 1000);
    const jwt = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignJWT"](attrs).setProtectedHeader({
        alg: "HS256"
    }).setExpirationTime(expiryInSeconds).setIssuedAt().sign(secret);
    return jwt;
}
async function verifyAccessToken(token) {
    const secret = new TextEncoder().encode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_SECRET || "your-secret-key");
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
        return payload;
    } catch (error) {
        console.error("Error verifying access token:", error);
        return null;
    }
}
async function verifyNoticeToken(token) {
    const secret = new TextEncoder().encode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_SECRET || "your-secret-key");
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
        // Check if token has the required public_id field
        if (!payload.public_id) {
            throw new Error("INVALID_TOKEN");
        }
        return payload;
    } catch (error) {
        var _error_message;
        // Check for specific JWT errors
        if (error.code === "ERR_JWT_EXPIRED" || ((_error_message = error.message) === null || _error_message === void 0 ? void 0 : _error_message.includes("expired"))) {
            throw new Error("TOKEN_EXPIRED");
        }
        // For any other error, throw invalid token
        throw new Error("INVALID_TOKEN");
    }
}
async function verifyDprmToken(token) {
    const secret = new TextEncoder().encode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_SECRET || "your-secret-key");
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
        // Check if token has the required data_principal_id field
        if (!payload.data_principal_id) {
            throw new Error("INVALID_TOKEN");
        }
        return payload;
    } catch (error) {
        var _error_message;
        // Check for specific JWT errors
        if (error.code === "ERR_JWT_EXPIRED" || ((_error_message = error.message) === null || _error_message === void 0 ? void 0 : _error_message.includes("expired"))) {
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
        return "var(--".concat(mappedColor, ")");
    }
    return "var(--".concat(mappedColor, "-").concat(colorNumber, ")");
};
const cssVariableToHex = (cssVariable)=>{
    if (!cssVariable || !cssVariable.startsWith("var(--")) {
        return cssVariable; // Return as-is if not a CSS variable
    }
    // Create a temporary element to get computed style
    if ("TURBOPACK compile-time truthy", 1) {
        try {
            const tempElement = document.createElement("div");
            tempElement.style.color = cssVariable;
            tempElement.style.position = "absolute";
            tempElement.style.visibility = "hidden";
            tempElement.style.pointerEvents = "none";
            tempElement.style.top = "-9999px";
            document.body.appendChild(tempElement);
            // Force a reflow to ensure styles are applied
            tempElement.offsetHeight;
            const computedColor = window.getComputedStyle(tempElement).color;
            document.body.removeChild(tempElement);
            // Convert rgb() to hex
            if (computedColor && computedColor.startsWith("rgb")) {
                const rgbMatch = computedColor.match(/\d+/g);
                if (rgbMatch && rgbMatch.length >= 3) {
                    const r = parseInt(rgbMatch[0]);
                    const g = parseInt(rgbMatch[1]);
                    const b = parseInt(rgbMatch[2]);
                    const hex = "#".concat(r.toString(16).padStart(2, "0")).concat(g.toString(16).padStart(2, "0")).concat(b.toString(16).padStart(2, "0"));
                    return hex;
                }
            }
        } catch (error) {
            console.warn("Failed to convert CSS variable to hex:", error);
        }
    }
    return "#23DA7F"; // Default fallback
};
function generateHash(data) {
    // canonicalize ensures keys are sorted and whitespace is removed per RFC 8785
    const encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canonicalize$2f$lib$2f$canonicalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data);
    if (!encoded) return "";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$crypto$2d$browserify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createHash("sha256").update(encoded).digest("hex");
}
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
"[project]/lib/constants/languages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * Language Constants
 * Supported languages for India's 22 scheduled languages + English
 * Sorted alphabetically by English name (English first, then A-Z)
 */ /**
 * Supported language codes (ISO 639-1/639-3)
 */ __turbopack_context__.s([
    "DEFAULT_LANGUAGE",
    ()=>DEFAULT_LANGUAGE,
    "LANGUAGE_CODES",
    ()=>LANGUAGE_CODES,
    "SUPPORTED_LANGUAGES",
    ()=>SUPPORTED_LANGUAGES
]);
const SUPPORTED_LANGUAGES = {
    en: {
        code: 'en',
        name: 'English',
        nativeName: 'English',
        rtl: false
    },
    as: {
        code: 'as',
        name: 'Assamese',
        nativeName: 'অসমীয়া',
        rtl: false
    },
    bn: {
        code: 'bn',
        name: 'Bengali',
        nativeName: 'বাংলা',
        rtl: false
    },
    brx: {
        code: 'brx',
        name: 'Bodo',
        nativeName: 'बड़ो',
        rtl: false
    },
    doi: {
        code: 'doi',
        name: 'Dogri',
        nativeName: 'डोगरी',
        rtl: false
    },
    gu: {
        code: 'gu',
        name: 'Gujarati',
        nativeName: 'ગુજરાતી',
        rtl: false
    },
    hi: {
        code: 'hi',
        name: 'Hindi',
        nativeName: 'हिन्दी',
        rtl: false
    },
    kn: {
        code: 'kn',
        name: 'Kannada',
        nativeName: 'ಕನ್ನಡ',
        rtl: false
    },
    ks: {
        code: 'ks',
        name: 'Kashmiri',
        nativeName: 'کٲشُر',
        rtl: true
    },
    kok: {
        code: 'kok',
        name: 'Konkani',
        nativeName: 'कोंकणी',
        rtl: false
    },
    mai: {
        code: 'mai',
        name: 'Maithili',
        nativeName: 'मैथिली',
        rtl: false
    },
    ml: {
        code: 'ml',
        name: 'Malayalam',
        nativeName: 'മലയാളം',
        rtl: false
    },
    mni: {
        code: 'mni',
        name: 'Manipuri',
        nativeName: 'ꯃꯩꯇꯩꯂꯣꯟ',
        rtl: false
    },
    mr: {
        code: 'mr',
        name: 'Marathi',
        nativeName: 'मराठी',
        rtl: false
    },
    ne: {
        code: 'ne',
        name: 'Nepali',
        nativeName: 'नेपाली',
        rtl: false
    },
    or: {
        code: 'or',
        name: 'Odia',
        nativeName: 'ଓଡ଼ିଆ',
        rtl: false
    },
    pa: {
        code: 'pa',
        name: 'Punjabi',
        nativeName: 'ਪੰਜਾਬੀ',
        rtl: false
    },
    sa: {
        code: 'sa',
        name: 'Sanskrit',
        nativeName: 'संस्कृतम्',
        rtl: false
    },
    sat: {
        code: 'sat',
        name: 'Santali',
        nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ',
        rtl: false
    },
    sd: {
        code: 'sd',
        name: 'Sindhi',
        nativeName: 'سنڌي',
        rtl: true
    },
    ta: {
        code: 'ta',
        name: 'Tamil',
        nativeName: 'தமிழ்',
        rtl: false
    },
    te: {
        code: 'te',
        name: 'Telugu',
        nativeName: 'తెలుగు',
        rtl: false
    },
    ur: {
        code: 'ur',
        name: 'Urdu',
        nativeName: 'اردو',
        rtl: true
    }
};
const DEFAULT_LANGUAGE = 'en';
const LANGUAGE_CODES = Object.keys(SUPPORTED_LANGUAGES);
_c = LANGUAGE_CODES;
var _c;
__turbopack_context__.k.register(_c, "LANGUAGE_CODES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Select(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger(param) {
    let { className, size = "default", children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent(param) {
    let { className, children, position = "popper", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/select.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 179,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/cms/principal/receipt/[notice_id]/[access_token]/data:f4ae49 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"602349c6aadf2ef5890a7d0f204e2f890bf61f40f3":"refreshReceipt"},"app/cms/principal/receipt/[notice_id]/[access_token]/actions.ts",""] */ __turbopack_context__.s([
    "refreshReceipt",
    ()=>refreshReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var refreshReceipt = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("602349c6aadf2ef5890a7d0f204e2f890bf61f40f3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "refreshReceipt"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IGdlbmVyYXRlQ29uc2VudFJlY2VpcHQgfSBmcm9tIFwiQC9saWIvc2VydmljZXMvY29uc2VudC1yZWNlaXB0LXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTGFuZ3VhZ2VDb2RlIH0gZnJvbSBcIkAvbGliL3R5cGVzL2xhbmd1YWdlc1wiO1xyXG5cclxuLyoqXHJcbiAqIFNlcnZlciBhY3Rpb24gdG8gcmVmcmVzaCBjb25zZW50IHJlY2VpcHQgd2l0aCBhIG5ldyBsYW5ndWFnZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hSZWNlaXB0KFxyXG4gIG5vdGljZUlkOiBzdHJpbmcsXHJcbiAgbGFuZ3VhZ2VDb2RlOiBMYW5ndWFnZUNvZGVcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZW5lcmF0ZUNvbnNlbnRSZWNlaXB0KG5vdGljZUlkLCBsYW5ndWFnZUNvZGUpO1xyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZ2VuZXJhdGUgcmVjZWlwdFwiIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZWZyZXNoaW5nIHJlY2VpcHQ6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVVQVFzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/consent-receipt/print-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrintButton",
    ()=>PrintButton
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PrintButton() {
    _s();
    // Auto-print on load (optional - can be removed if not desired)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrintButton.useEffect": ()=>{
            // Small delay to ensure page is fully rendered
            const timer = setTimeout({
                "PrintButton.useEffect.timer": ()=>{
                // Uncomment to auto-print when page opens
                // window.print();
                }
            }["PrintButton.useEffect.timer"], 500);
            return ({
                "PrintButton.useEffect": ()=>clearTimeout(timer)
            })["PrintButton.useEffect"];
        }
    }["PrintButton.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>window.print(),
        className: "px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/components/consent-receipt/print-button.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            "Print / Save as PDF"
        ]
    }, void 0, true, {
        fileName: "[project]/components/consent-receipt/print-button.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(PrintButton, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = PrintButton;
var _c;
__turbopack_context__.k.register(_c, "PrintButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/consent-receipt/close-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseButton",
    ()=>CloseButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function CloseButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>window.close(),
        className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
        children: "Close"
    }, void 0, false, {
        fileName: "[project]/components/consent-receipt/close-button.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = CloseButton;
var _c;
__turbopack_context__.k.register(_c, "CloseButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/consent-receipt/receipt-page-client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReceiptPageClient",
    ()=>ReceiptPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$consent$2d$receipt$2f$consent$2d$receipt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/consent-receipt/consent-receipt.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/languages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$receipt$2f5b$notice_id$5d2f5b$access_token$5d2f$data$3a$f4ae49__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/cms/principal/receipt/[notice_id]/[access_token]/data:f4ae49 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$consent$2d$receipt$2f$print$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/consent-receipt/print-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$consent$2d$receipt$2f$close$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/consent-receipt/close-button.tsx [app-client] (ecmascript)");
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
function ReceiptPageClient(param) {
    let { initialData, noticeId } = param;
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData);
    const [currentLanguage, setCurrentLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData.language || "en");
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const handleLanguageChange = (value)=>{
        const newLang = value;
        setCurrentLanguage(newLang);
        startTransition(async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$receipt$2f5b$notice_id$5d2f5b$access_token$5d2f$data$3a$f4ae49__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["refreshReceipt"])(noticeId, newLang);
            if (result.success && result.data) {
                setData(result.data);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load translation");
                // Revert language selection if failed
                setCurrentLanguage(data.language);
            }
        });
    };
    // Convert supported languages object to array for the select
    const languages = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"]).map((param)=>{
        let [code, info] = param;
        return {
            code,
            name: info.name,
            nativeName: info.nativeName
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "no-print mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: currentLanguage,
                                    onValueChange: handleLanguageChange,
                                    disabled: isPending,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            className: "w-[180px] bg-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: "Select Language"
                                            }, void 0, false, {
                                                fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: lang.code,
                                                    children: [
                                                        lang.name,
                                                        " (",
                                                        lang.nativeName,
                                                        ")"
                                                    ]
                                                }, lang.code, true, {
                                                    fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-4 w-4 animate-spin text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
                                    lineNumber: 80,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$consent$2d$receipt$2f$print$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrintButton"], {}, void 0, false, {
                                    fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$consent$2d$receipt$2f$close$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseButton"], {}, void 0, false, {
                                    fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white shadow-sm relative min-h-[600px]",
                    children: [
                        isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-white/50 z-10 flex items-center justify-center backdrop-blur-[1px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-8 w-8 animate-spin text-primary"
                            }, void 0, false, {
                                fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$consent$2d$receipt$2f$consent$2d$receipt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsentReceipt"], {
                            data: data
                        }, void 0, false, {
                            fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/consent-receipt/receipt-page-client.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(ReceiptPageClient, "t2jBfjGZrugzj84/go78kAWGK+Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = ReceiptPageClient;
var _c;
__turbopack_context__.k.register(_c, "ReceiptPageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_5e60af3d._.js.map