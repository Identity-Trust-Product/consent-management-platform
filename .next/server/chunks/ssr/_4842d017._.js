module.exports = [
"[project]/contexts/consent-purpose-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsentPurposeContext",
    ()=>ConsentPurposeContext,
    "ConsentPurposeProvider",
    ()=>ConsentPurposeProvider,
    "useConsentPurposeForm",
    ()=>useConsentPurposeForm
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const initialState = {
    step1Data: null,
    step2Data: {
        existing: [],
        new: [],
        modified: [],
        deleted: []
    },
    step3Data: {
        existing: [],
        new: [],
        modified: [],
        deleted: []
    },
    step4Data: {
        cpTranslations: {},
        ppTranslations: {}
    },
    baseline: null
};
function consentPurposeReducer(state, action) {
    let newState;
    switch(action.type){
        case "SET_STEP1_DATA":
            newState = {
                ...state,
                step1Data: action.payload
            };
            break;
        case "SET_STEP2_DATA":
            newState = {
                ...state,
                step2Data: action.payload
            };
            break;
        case "SET_STEP3_DATA":
            newState = {
                ...state,
                step3Data: action.payload
            };
            break;
        case "SET_STEP4_DATA":
            newState = {
                ...state,
                step4Data: action.payload
            };
            break;
        case "SET_BASELINE":
            newState = {
                ...state,
                baseline: {
                    ...action.payload,
                    baseline: null
                }
            };
            break;
        case "RESET":
            newState = initialState;
            break;
        default:
            newState = state;
    }
    return newState;
}
const ConsentPurposeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function ConsentPurposeProvider({ children }) {
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(consentPurposeReducer, initialState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsentPurposeContext.Provider, {
        value: {
            state,
            dispatch
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/consent-purpose-context.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
function useConsentPurposeForm() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(ConsentPurposeContext);
    if (!context) {
        throw new Error("useConsentPurposeForm must be used within a ConsentPurposeProvider");
    }
    return context;
}
}),
"[project]/components/step-progress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepProgress",
    ()=>StepProgress
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CirclePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as CirclePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CircleCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function StepProgress({ currentStep, totalSteps, steps }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // Build URL for step navigation
    const buildStepUrl = (stepNumber)=>{
        const params = new URLSearchParams(searchParams);
        params.set("step", stepNumber.toString());
        return `${pathname}?${params.toString()}`;
    };
    // Check if a step should be clickable (only completed steps)
    const isStepClickable = (stepNumber)=>{
        return stepNumber < currentStep;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full border-b pb-4 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        isStepClickable(step.number) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: buildStepUrl(step.number),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium transition-colors hover:bg-green-100", step.number < currentStep ? "border-green-500 bg-green-50 text-green-700" : step.number === currentStep ? "border-primary bg-primary/10 text-primary" : "border-muted bg-muted/50 text-muted-foreground"),
                            children: [
                                step.number < currentStep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheck$3e$__["CircleCheck"], {
                                    className: "h-4 w-4 text-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/components/step-progress.tsx",
                                    lineNumber: 64,
                                    columnNumber: 19
                                }, this) : step.number === currentStep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CirclePlus$3e$__["CirclePlus"], {
                                    className: "h-4 w-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/step-progress.tsx",
                                    lineNumber: 66,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CirclePlus$3e$__["CirclePlus"], {
                                    className: "h-4 w-4 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/components/step-progress.tsx",
                                    lineNumber: 68,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        step.number,
                                        ". ",
                                        step.title
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/step-progress.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/step-progress.tsx",
                            lineNumber: 51,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium", step.number < currentStep ? "border-green-500 bg-green-50 text-green-700" : step.number === currentStep ? "border-primary bg-primary/10 text-primary" : "border-muted bg-muted/50 text-muted-foreground"),
                            children: [
                                step.number < currentStep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheck$3e$__["CircleCheck"], {
                                    className: "h-4 w-4 text-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/components/step-progress.tsx",
                                    lineNumber: 89,
                                    columnNumber: 19
                                }, this) : step.number === currentStep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CirclePlus$3e$__["CirclePlus"], {
                                    className: "h-4 w-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/step-progress.tsx",
                                    lineNumber: 91,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CirclePlus$3e$__["CirclePlus"], {
                                    className: "h-4 w-4 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/components/step-progress.tsx",
                                    lineNumber: 93,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        step.number,
                                        ". ",
                                        step.title
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/step-progress.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/step-progress.tsx",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this),
                        index < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "mx-2 h-5 w-5 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/components/step-progress.tsx",
                            lineNumber: 105,
                            columnNumber: 15
                        }, this)
                    ]
                }, step.number, true, {
                    fileName: "[project]/components/step-progress.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/step-progress.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/step-progress.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Form",
    ()=>Form,
    "FormControl",
    ()=>FormControl,
    "FormDescription",
    ()=>FormDescription,
    "FormField",
    ()=>FormField,
    "FormItem",
    ()=>FormItem,
    "FormLabel",
    ()=>FormLabel,
    "FormMessage",
    ()=>FormMessage,
    "useFormField",
    ()=>useFormField
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormProvider"];
const FormFieldContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Controller"], {
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/form.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/form.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useFormField = ()=>{
    const fieldContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](FormFieldContext);
    const itemContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](FormItemContext);
    const { getFieldState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormContext"])();
    const formState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormState"])({
        name: fieldContext.name
    });
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};
const FormItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({});
function FormItem({ className, ...props }) {
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"]();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "form-item",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("grid gap-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/form.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/form.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
function FormLabel({ className, ...props }) {
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "form-label",
        "data-error": !!error,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[error=true]:text-destructive", className),
        htmlFor: formItemId,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/form.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
function FormControl({ ...props }) {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"], {
        "data-slot": "form-control",
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/form.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
function FormDescription({ className, ...props }) {
    const { formDescriptionId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        "data-slot": "form-description",
        id: formDescriptionId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/form.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
function FormMessage({ className, ...props }) {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message ?? "") : props.children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        "data-slot": "form-message",
        id: formMessageId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-destructive text-sm", className),
        ...props,
        children: body
    }, void 0, false, {
        fileName: "[project]/components/ui/form.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/textarea.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/schemas/consent-purpose-schemas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "consentPurposeSchema",
    ()=>consentPurposeSchema,
    "dataProcessorMappingSchema",
    ()=>dataProcessorMappingSchema,
    "generateRandomCode",
    ()=>generateRandomCode,
    "processingPurposeSchema",
    ()=>processingPurposeSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
const consentPurposeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, "Name should be at least 3 characters long").max(255, "Name must be less than 255 characters"),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Code is required").max(50, "Code must be less than 50 characters"),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8, "Description should be at least 8 characters long").max(1000, "Description must be less than 1000 characters")
});
const processingPurposeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8, "Description should be at least 8 characters long").max(2000),
    purposeOfProcessingId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1, "Purpose sub master is required"),
    userAttributeNames: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).min(1, "At least one purpose attribute is required")
});
const dataProcessorMappingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    dataProcessorId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Data processor is required"),
    userAttributeNames: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).min(1, "At least one purpose attribute is required"),
    processingPurposeId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1, "Processing purpose is required")
});
function generateRandomCode(length = 10) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for(let i = 0; i < length; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
}),
"[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Step1Form",
    ()=>Step1Form
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$consent$2d$purpose$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/consent-purpose-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$consent$2d$purpose$2d$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schemas/consent-purpose-schemas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
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
function Step1Form({ data, isEdit, consentPurposeId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$consent$2d$purpose$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConsentPurposeForm"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize form with context first, then database
    const getDefaultValues = ()=>{
        // Priority: context > database > empty
        if (state.step1Data) {
            return {
                name: state.step1Data.name,
                code: state.step1Data.code,
                description: state.step1Data.description
            };
        }
        return {
            name: data.consentPurpose?.name || "",
            code: data.consentPurpose?.code || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$consent$2d$purpose$2d$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomCode"])(),
            description: data.consentPurpose?.description || ""
        };
    };
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$consent$2d$purpose$2d$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["consentPurposeSchema"]),
        mode: "onChange",
        defaultValues: getDefaultValues()
    });
    const watchedCode = form.watch("code");
    const { isValid, errors } = form.formState;
    // Mark as initialized after first render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsInitialized(true);
    }, []);
    // Sync context data to form when navigating back to this step (not on first mount)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isInitialized) return; // Skip on first mount
        if (state.step1Data) {
            form.reset({
                name: state.step1Data.name,
                code: state.step1Data.code,
                description: state.step1Data.description
            });
        }
    }, [
        state.step1Data,
        form,
        isInitialized
    ]);
    // Generate a new random code if the current code is empty
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!watchedCode) {
            form.setValue("code", (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$consent$2d$purpose$2d$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomCode"])());
        }
    }, [
        watchedCode,
        form
    ]);
    const onSubmit = async (formData)=>{
        setIsLoading(true);
        try {
            // Store form data in client state
            dispatch({
                type: "SET_STEP1_DATA",
                payload: formData
            });
            // Navigate to step 2
            const params = new URLSearchParams();
            params.set("step", "2");
            if (consentPurposeId) {
                params.set("id", consentPurposeId);
            }
            const basePath = isEdit && consentPurposeId ? `/cms/data-fiduciary/consent-purposes/${consentPurposeId}/edit` : `/cms/data-fiduciary/consent-purposes/new`;
            router.push(`${basePath}?${params.toString()}`);
        } catch (error) {
            console.error("Error proceeding to step 2:", error);
        } finally{
            setIsLoading(false);
        }
    };
    const handleCancel = ()=>{
        dispatch({
            type: "RESET"
        });
        router.push("/cms/data-fiduciary/consent-purposes");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold tracking-tight border-b px-6 py-5 flex-shrink-0",
                children: "Step 1. General Settings"
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Form"], {
                    ...form,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: form.handleSubmit(onSubmit),
                        className: "h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-6 space-y-6",
                            children: [
                                isEdit && data.consentPurpose?.version && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-blue-200 bg-blue-50 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 w-2 rounded-full bg-blue-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-blue-800",
                                                            children: [
                                                                "Version ",
                                                                data.consentPurpose.version
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 21
                                                }, this),
                                                data.consentPurpose.publishedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-blue-600",
                                                    children: [
                                                        "Published on",
                                                        " ",
                                                        new Date(data.consentPurpose.publishedAt).toLocaleDateString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-blue-700 mt-1",
                                            children: [
                                                "Code:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono",
                                                    children: data.consentPurpose.code
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                    lineNumber: 157,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                    control: form.control,
                                    name: "name",
                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                    children: [
                                                        "Title of the Purpose",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-destructive",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "e.g. Open a Bank Account",
                                                        ...field
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 23
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                            lineNumber: 188,
                                            columnNumber: 19
                                        }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                    control: form.control,
                                    name: "code",
                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                    children: [
                                                        "Purpose ID",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-neutral-200",
                                                            children: "(Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-destructive",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 21
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "9HUttbeIL7",
                                                        ...field,
                                                        disabled: isEdit,
                                                        className: isEdit ? "bg-muted cursor-not-allowed" : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 23
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 21
                                                }, void 0),
                                                isEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mt-1",
                                                    children: "Purpose ID cannot be changed for existing consent purposes"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 23
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 21
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                            lineNumber: 209,
                                            columnNumber: 19
                                        }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                    control: form.control,
                                    name: "description",
                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                    children: [
                                                        "Description ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-destructive",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 35
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 21
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                                        placeholder: "Describe the purpose for which consent is being collected...",
                                                        rows: 4,
                                                        ...field
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 23
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 21
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 21
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                            lineNumber: 239,
                                            columnNumber: 19
                                        }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 px-6 py-4 border-t bg-background sticky bottom-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 justify-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            onClick: handleCancel,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            disabled: isLoading || !isValid,
                            className: "min-w-[100px]",
                            onClick: form.handleSubmit(onSubmit),
                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-4 w-4 mr-2 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                                        lineNumber: 273,
                                        columnNumber: 17
                                    }, this),
                                    "Processing..."
                                ]
                            }, void 0, true) : "Next"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                    lineNumber: 261,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step1-form.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/action-buttons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "ActionButtonsGroup",
    ()=>ActionButtonsGroup,
    "DeleteButton",
    ()=>DeleteButton,
    "EditButton",
    ()=>EditButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil-line.js [app-ssr] (ecmascript) <export default as PencilLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
function EditButton({ onClick, disabled = false, className, variant = "ghost", size = "sm", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        variant: variant,
        size: size,
        onClick: onClick,
        disabled: disabled,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hover:bg-primary/10", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilLine$3e$__["PencilLine"], {
                className: "h-4 w-4 text-primary"
            }, void 0, false, {
                fileName: "[project]/components/ui/action-buttons.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/action-buttons.tsx",
                lineNumber: 54,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/action-buttons.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
function DeleteButton({ onClick, disabled = false, className, variant = "ghost", size = "sm", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        variant: variant,
        size: size,
        onClick: onClick,
        disabled: disabled,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hover:bg-destructive/10", disabled && "opacity-50 cursor-not-allowed", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                className: "h-4 w-4 text-destructive"
            }, void 0, false, {
                fileName: "[project]/components/ui/action-buttons.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/action-buttons.tsx",
                lineNumber: 82,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/action-buttons.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
function ActionButtonsGroup({ onEdit, onDelete, editDisabled = false, deleteDisabled = false, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EditButton, {
                onClick: onEdit,
                disabled: editDisabled
            }, void 0, false, {
                fileName: "[project]/components/ui/action-buttons.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DeleteButton, {
                onClick: onDelete,
                disabled: deleteDisabled
            }, void 0, false, {
                fileName: "[project]/components/ui/action-buttons.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/action-buttons.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/table.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground mt-4 text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 40,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] sm:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/command.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Command",
    ()=>Command,
    "CommandDialog",
    ()=>CommandDialog,
    "CommandEmpty",
    ()=>CommandEmpty,
    "CommandGroup",
    ()=>CommandGroup,
    "CommandInput",
    ()=>CommandInput,
    "CommandItem",
    ()=>CommandItem,
    "CommandList",
    ()=>CommandList,
    "CommandSeparator",
    ()=>CommandSeparator,
    "CommandShortcut",
    ()=>CommandShortcut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cmdk/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as SearchIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Command({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"], {
        "data-slot": "command",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
function CommandDialog({ title = "Command Palette", description = "Search for a command to run...", children, className, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                className: "sr-only",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ui/command.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/ui/command.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/command.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden p-0", className),
                showCloseButton: showCloseButton,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Command, {
                    className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/command.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/command.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
function CommandInput({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "command-input-wrapper",
        className: "flex h-9 items-center gap-2 border-b px-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchIcon$3e$__["SearchIcon"], {
                className: "size-4 shrink-0 opacity-50"
            }, void 0, false, {
                fileName: "[project]/components/ui/command.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Input, {
                "data-slot": "command-input",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/components/ui/command.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
function CommandList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].List, {
        "data-slot": "command-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
function CommandEmpty({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Empty, {
        "data-slot": "command-empty",
        className: "py-6 text-center text-sm",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
function CommandGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Group, {
        "data-slot": "command-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
function CommandSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Separator, {
        "data-slot": "command-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
function CommandItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Item, {
        "data-slot": "command-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
function CommandShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "command-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/popover.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverAnchor",
    ()=>PopoverAnchor,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Popover({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "popover",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/popover.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
function PopoverTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "popover-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/popover.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
function PopoverContent({ className, align = "center", sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "popover-content",
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/popover.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/popover.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
function PopoverAnchor({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Anchor"], {
        "data-slot": "popover-anchor",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/popover.tsx",
        lineNumber: 55,
        columnNumber: 10
    }, this);
}
;
}),
"[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddProcessingPurposeDialog",
    ()=>AddProcessingPurposeDialog
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/command.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/popover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-ssr] (ecmascript) <export default as ChevronsUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
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
function AddProcessingPurposeDialog({ open, onOpenChange, onSave, purposesOfProcessing, userAttributes, editData = null, isEdit = false, existingProcessingPurposes = [] }) {
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [comboboxOpen, setComboboxOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [attributesComboboxOpen, setAttributesComboboxOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        purposeOfProcessingId: null,
        userAttributeNames: [],
        description: ""
    });
    // Initialize form data when dialog opens or editData changes
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (open) {
            if (isEdit && editData) {
                setFormData({
                    name: editData.name,
                    description: editData.description,
                    purposeOfProcessingId: editData.purposeOfProcessingId,
                    userAttributeNames: editData.userAttributeNames
                });
            } else {
                setFormData({
                    name: "",
                    description: "",
                    purposeOfProcessingId: null,
                    userAttributeNames: []
                });
            }
            setCurrentStep(1);
        }
    }, [
        open,
        isEdit,
        editData
    ]);
    // Filter out already used purposes of processing (except when editing)
    const usedPurposeIds = existingProcessingPurposes.map((pp)=>pp.purposeOfProcessingId);
    const availablePurposesOfProcessing = purposesOfProcessing.filter((purpose)=>{
        // If editing, include the current purpose to allow keeping the same selection
        if (isEdit && editData?.purposeOfProcessingId === purpose.id) {
            return true;
        }
        // Otherwise, only include purposes that haven't been used yet
        return !usedPurposeIds.includes(purpose.id);
    });
    const handleClose = ()=>{
        setCurrentStep(1);
        setFormData({
            name: "",
            description: "",
            purposeOfProcessingId: 0,
            userAttributeNames: []
        });
        setComboboxOpen(false);
        setAttributesComboboxOpen(false);
        onOpenChange(false);
    };
    const handleNext = ()=>{
        if (currentStep === 1 && formData.purposeOfProcessingId && formData.description.trim()) {
            setCurrentStep(2);
        }
    };
    const handlePrevious = ()=>{
        if (currentStep === 2) {
            setCurrentStep(1);
        }
    };
    const handleSave = ()=>{
        if (formData.description && formData.purposeOfProcessingId && formData.userAttributeNames.length > 0) {
            onSave(formData);
            handleClose();
        }
    };
    const handlePurposeSelect = (purposeId)=>{
        const selectedPurpose = purposesOfProcessing.find((p)=>p.id === purposeId);
        setFormData((prev)=>({
                ...prev,
                purposeOfProcessingId: purposeId,
                name: selectedPurpose?.name || "",
                // Pre-populate notice body with purpose of processing description
                description: selectedPurpose?.description || ""
            }));
        setComboboxOpen(false);
    };
    const handleUserAttributeToggle = (attributeName)=>{
        setFormData((prev)=>({
                ...prev,
                userAttributeNames: prev.userAttributeNames.includes(attributeName) ? prev.userAttributeNames.filter((name)=>name !== attributeName) : [
                    ...prev.userAttributeNames,
                    attributeName
                ]
            }));
    };
    const handleRemoveAttribute = (attributeName)=>{
        setFormData((prev)=>({
                ...prev,
                userAttributeNames: prev.userAttributeNames.filter((name)=>name !== attributeName)
            }));
    };
    const selectedPurpose = purposesOfProcessing.find((p)=>p.id === formData.purposeOfProcessingId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[700px] h-[600px] flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        children: [
                            isEdit ? "Edit" : "Add",
                            " Processing Purpose - Step ",
                            currentStep,
                            " of 2"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this),
                currentStep === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col space-y-6 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 space-y-4 overflow-y-auto pr-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium",
                                    children: "Select Purpose Sub Master"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Choose the legal basis and purpose for processing user data, and provide a notice body."
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "purpose-select",
                                            children: "Purpose Sub Master"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this),
                                        isEdit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full p-3 border rounded-md bg-muted",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: purposesOfProcessing.find((purpose)=>purpose.id === formData.purposeOfProcessingId)?.name || "Unknown Purpose"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mt-1",
                                                    children: "Purpose cannot be changed when editing"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                            lineNumber: 223,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                            open: comboboxOpen,
                                            onOpenChange: setComboboxOpen,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        role: "combobox",
                                                        "aria-expanded": comboboxOpen,
                                                        className: "w-full justify-between",
                                                        children: [
                                                            formData.purposeOfProcessingId ? availablePurposesOfProcessing.find((purpose)=>purpose.id === formData.purposeOfProcessingId)?.name : "Select a purpose sub master...",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__["ChevronsUpDown"], {
                                                                className: "ml-2 h-4 w-4 shrink-0 opacity-50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                    className: "w-full p-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandInput"], {
                                                                placeholder: "Search purposes..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandList"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandEmpty"], {
                                                                        children: availablePurposesOfProcessing.length === 0 ? "All purpose sub masters are already in use." : "No purpose found."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                                        lineNumber: 256,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandGroup"], {
                                                                        children: availablePurposesOfProcessing.map((purpose)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandItem"], {
                                                                                value: purpose.name,
                                                                                onSelect: ()=>handlePurposeSelect(purpose.id),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mr-2 h-4 w-4", formData.purposeOfProcessingId === purpose.id ? "opacity-100" : "opacity-0")
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                                                        lineNumber: 268,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    purpose.name
                                                                                ]
                                                                            }, purpose.id, true, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                                                lineNumber: 263,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                                        lineNumber: 261,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                            lineNumber: 235,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "notice-body",
                                            children: "Notice Body"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                            lineNumber: 289,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                            id: "notice-body",
                                            placeholder: "Enter the notice body text for this processing purpose...",
                                            value: formData.description || "",
                                            onChange: (e)=>setFormData((prev)=>({
                                                        ...prev,
                                                        description: e.target.value
                                                    })),
                                            rows: 4,
                                            className: "resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "This text will be shown to users as part of the consent notice for this processing purpose."
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 flex justify-end gap-2 pt-4 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: handleClose,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                    lineNumber: 311,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleNext,
                                    disabled: !formData.purposeOfProcessingId || !formData.description.trim() || availablePurposesOfProcessing.length === 0,
                                    children: [
                                        "Next: Select Attributes",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "h-4 w-4 ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                            lineNumber: 323,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                    lineNumber: 314,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                            lineNumber: 310,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                    lineNumber: 210,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col space-y-6 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: handlePrevious,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                            lineNumber: 332,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                        lineNumber: 331,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-medium",
                                                children: "Select Purpose Attributes"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                lineNumber: 335,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    "Choose which purpose attributes will be collected for:",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: formData.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                lineNumber: 338,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                        lineNumber: 334,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                lineNumber: 330,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                            lineNumber: 329,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 space-y-3 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    children: [
                                        "Purpose Attributes (",
                                        formData.userAttributeNames.length,
                                        " selected)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                    lineNumber: 347,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-y-auto",
                                    children: formData.userAttributeNames.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 p-3 border rounded-lg bg-muted/50",
                                        children: formData.userAttributeNames.map((attrName)=>{
                                            const attr = userAttributes.find((a)=>a.name === attrName);
                                            return attr ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "outline",
                                                className: "text-xs flex items-center gap-1 bg-white",
                                                children: [
                                                    attrName,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            handleRemoveAttribute(attrName);
                                                        },
                                                        className: "ml-1 hover:bg-destructive/20 rounded-full p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, attrName, true, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                lineNumber: 360,
                                                columnNumber: 25
                                            }, this) : null;
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                        lineNumber: 354,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 border rounded-lg bg-muted/20 text-center text-sm text-muted-foreground",
                                        children: "No attributes selected yet"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                        lineNumber: 381,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                    lineNumber: 352,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                    open: attributesComboboxOpen,
                                    onOpenChange: setAttributesComboboxOpen,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                role: "combobox",
                                                "aria-expanded": attributesComboboxOpen,
                                                className: "w-full justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground",
                                                        children: formData.userAttributeNames.length === 0 ? "Select purpose attributes..." : `${formData.userAttributeNames.length} attribute${formData.userAttributeNames.length === 1 ? "" : "s"} selected`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__["ChevronsUpDown"], {
                                                        className: "ml-2 h-4 w-4 shrink-0 opacity-50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                lineNumber: 393,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                            lineNumber: 392,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                            className: "w-full p-0",
                                            align: "start",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandInput"], {
                                                        placeholder: "Search attributes..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandList"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandEmpty"], {
                                                                children: "No attributes found."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandGroup"], {
                                                                children: userAttributes.map((attribute)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandItem"], {
                                                                        value: attribute.name,
                                                                        onSelect: ()=>handleUserAttributeToggle(attribute.name),
                                                                        className: "flex items-center justify-between",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", formData.userAttributeNames.includes(attribute.name) ? "opacity-100" : "opacity-0")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                                                    lineNumber: 424,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: attribute.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                                                    lineNumber: 434,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                attribute.pii && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: "secondary",
                                                                                    className: "text-xs",
                                                                                    children: "PII"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                                                    lineNumber: 436,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                                            lineNumber: 423,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, attribute.id, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                                        lineNumber: 415,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                                lineNumber: 409,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                            lineNumber: 408,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                    lineNumber: 388,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 flex justify-end gap-2 pt-4 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: handleClose,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                    lineNumber: 451,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleSave,
                                    disabled: formData.userAttributeNames.length === 0,
                                    children: [
                                        isEdit ? "Update" : "Add",
                                        " Processing Purpose"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                                    lineNumber: 454,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                            lineNumber: 450,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
                    lineNumber: 328,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
            lineNumber: 201,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Step2Form",
    ()=>Step2Form
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$action$2d$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/action-buttons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$consent$2d$purpose$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/consent-purpose-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$purposes$2f$_components$2f$dialogs$2f$add$2d$processing$2d$purpose$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-processing-purpose-dialog.tsx [app-ssr] (ecmascript)");
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
function Step2Form({ data, isEdit, consentPurposeId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const { state: providerState, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$consent$2d$purpose$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConsentPurposeForm"])();
    const { processingPurposes = [], userAttributes = [], purposesOfProcessing = [] } = data;
    // Helper function to convert context data to local state format
    const convertToLocalFormat = (pp)=>{
        const pop = purposesOfProcessing.find((p)=>p.id === pp.purposeOfProcessingId);
        return {
            id: pp.id,
            tempId: pp.tempId,
            name: pp.name,
            description: pp.description || "",
            purposeOfProcessingId: pp.purposeOfProcessingId,
            purposeOfProcessingCode: pp.purposeOfProcessingCode || pop?.code || "",
            userAttributeNames: pp.userAttributeNames || [],
            status: pp.status || "draft"
        };
    };
    // Client state for managing processing purposes
    // Check context first, then fall back to database data
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        // If we have data in context, use it (user has already filled this step)
        if (providerState.step2Data.existing.length > 0 || providerState.step2Data.new.length > 0 || providerState.step2Data.modified.length > 0 || providerState.step2Data.deleted.length > 0) {
            return {
                existing: providerState.step2Data.existing.map(convertToLocalFormat),
                new: providerState.step2Data.new.map(convertToLocalFormat),
                modified: providerState.step2Data.modified.map(convertToLocalFormat),
                deleted: providerState.step2Data.deleted
            };
        }
        // Otherwise, initialize from database data
        return {
            existing: processingPurposes.map((pp)=>{
                const pop = purposesOfProcessing.find((p)=>p.id === pp.purposeOfProcessingId);
                return {
                    id: pp.id,
                    tempId: undefined,
                    name: pp.name,
                    description: pp.description || "",
                    purposeOfProcessingId: pp.purposeOfProcessingId,
                    purposeOfProcessingCode: pop?.code || "",
                    userAttributeNames: pp.userAttributeNames || [],
                    status: pp.status
                };
            }),
            new: [],
            modified: [],
            deleted: []
        };
    });
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingItem, setEditingItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Sync context data to local state when navigating back to this step
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (providerState.step2Data.existing.length > 0 || providerState.step2Data.new.length > 0 || providerState.step2Data.modified.length > 0 || providerState.step2Data.deleted.length > 0) {
            setState({
                existing: providerState.step2Data.existing.map(convertToLocalFormat),
                new: providerState.step2Data.new.map(convertToLocalFormat),
                modified: providerState.step2Data.modified.map(convertToLocalFormat),
                deleted: providerState.step2Data.deleted
            });
        }
    }, [
        providerState.step2Data
    ]);
    // All processing purposes (existing + new)
    const allProcessingPurposes = [
        ...state.existing,
        ...state.new
    ];
    const handleNext = async ()=>{
        // Update provider state with Step 2 data
        dispatch({
            type: "SET_STEP2_DATA",
            payload: state
        });
        // Navigate to next step
        const params = new URLSearchParams();
        params.set("step", "3");
        if (consentPurposeId) {
            params.set("id", consentPurposeId);
        }
        const basePath = isEdit && consentPurposeId ? `/cms/data-fiduciary/consent-purposes/${consentPurposeId}/edit` : `/cms/data-fiduciary/consent-purposes/new`;
        router.push(`${basePath}?${params.toString()}`);
    };
    const handlePrevious = ()=>{
        // Save state before navigating back
        dispatch({
            type: "SET_STEP2_DATA",
            payload: state
        });
        const params = new URLSearchParams();
        params.set("step", "1");
        if (consentPurposeId) {
            params.set("id", consentPurposeId);
        }
        const basePath = isEdit && consentPurposeId ? `/cms/data-fiduciary/consent-purposes/${consentPurposeId}/edit` : `/cms/data-fiduciary/consent-purposes/new`;
        router.push(`${basePath}?${params.toString()}`);
    };
    const handleAddProcessingPurpose = (data)=>{
        if (data.purposeOfProcessingId === null) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please select a purpose sub master");
            return;
        }
        const pop = purposesOfProcessing.find((p)=>p.id === data.purposeOfProcessingId);
        const popCode = pop?.code || "";
        const tempId = `pop_${popCode}_${Date.now()}`;
        const newPurpose = {
            tempId,
            name: data.name,
            description: data.description,
            purposeOfProcessingId: data.purposeOfProcessingId,
            purposeOfProcessingCode: popCode,
            userAttributeNames: data.userAttributeNames,
            status: "draft"
        };
        setState((prev)=>({
                ...prev,
                new: [
                    ...prev.new,
                    newPurpose
                ]
            }));
        setIsDialogOpen(false);
    };
    const handleEditProcessingPurpose = (index, isNew)=>{
        const purpose = isNew ? state.new[index] : state.existing[index];
        setEditingItem({
            index,
            isNew,
            data: purpose
        });
        setIsDialogOpen(true);
    };
    const handleUpdateProcessingPurpose = (data)=>{
        if (!editingItem) return;
        const { index, isNew } = editingItem;
        const pop = purposesOfProcessing.find((p)=>p.id === data.purposeOfProcessingId);
        const popCode = pop?.code || "";
        const updatedPurpose = {
            id: editingItem.data.id,
            tempId: editingItem.data.tempId,
            name: data.name,
            description: data.description,
            purposeOfProcessingId: data.purposeOfProcessingId,
            purposeOfProcessingCode: popCode,
            userAttributeNames: data.userAttributeNames,
            status: editingItem.data.status
        };
        if (isNew) {
            setState((prev)=>({
                    ...prev,
                    new: prev.new.map((item, i)=>i === index ? updatedPurpose : item)
                }));
        } else {
            setState((prev)=>({
                    ...prev,
                    existing: prev.existing.map((item, i)=>i === index ? updatedPurpose : item),
                    modified: updatedPurpose.id ? [
                        ...prev.modified.filter((m)=>m.id !== updatedPurpose.id),
                        updatedPurpose
                    ] : prev.modified
                }));
        }
        setEditingItem(null);
        setIsDialogOpen(false);
    };
    const handleDeleteProcessingPurpose = (index, isNew)=>{
        if (isNew) {
            setState((prev)=>({
                    ...prev,
                    new: prev.new.filter((_, i)=>i !== index)
                }));
        } else {
            const purpose = state.existing[index];
            if (purpose.id) {
                setState((prev)=>({
                        ...prev,
                        existing: prev.existing.filter((_, i)=>i !== index),
                        deleted: [
                            ...prev.deleted,
                            purpose.id
                        ]
                    }));
            }
        }
    };
    const getPurposeOfProcessingName = (id)=>{
        const purpose = purposesOfProcessing.find((p)=>p.id === id);
        return purpose?.name || "Unknown";
    };
    const getUserAttributeName = (id)=>{
        const attr = userAttributes.find((a)=>a.id === id);
        return attr?.name || "Unknown";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b px-6 py-5 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold tracking-tight",
                    children: "Step 2. Add Purpose Sub Master"
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-6 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold",
                                            children: "Processing Purposes"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Define how user data will be processed and which attributes are involved"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                            lineNumber: 327,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this),
                                allProcessingPurposes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>{
                                        setEditingItem(null);
                                        setIsDialogOpen(true);
                                    },
                                    className: "flex items-center gap-2 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "h-4 w-4 group-hover:scale-125 transition-transform"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this),
                                        "Add Processing Purpose"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                    lineNumber: 334,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this),
                        allProcessingPurposes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                        className: "bg-muted",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    children: "Purpose Sub Master"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    className: "w-1/3",
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    children: "Attributes Included"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    className: "text-center w-24",
                                                    children: "Actions"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                            lineNumber: 352,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                        lineNumber: 351,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                        children: [
                                            state.existing.map((purpose, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            className: "font-medium border-r",
                                                            children: purpose.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                            lineNumber: 363,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            className: "border-r min-w-2xl",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground text-wrap",
                                                                children: purpose.description || "No description"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                                lineNumber: 367,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                            lineNumber: 366,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            className: "border-r",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-1",
                                                                children: purpose.userAttributeNames.map((attrName)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: "outline",
                                                                        className: "text-xs",
                                                                        children: attrName
                                                                    }, attrName, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                                        lineNumber: 374,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                                lineNumber: 372,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            className: "text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$action$2d$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionButtonsGroup"], {
                                                                onEdit: ()=>handleEditProcessingPurpose(index, false),
                                                                onDelete: ()=>handleDeleteProcessingPurpose(index, false),
                                                                className: "justify-center gap-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                                lineNumber: 385,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, purpose.id, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 21
                                                }, this)),
                                            state.new.map((purpose, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    className: "bg-muted/30 border-dashed",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            className: "font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        purpose.name,
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "secondary",
                                                                            className: "text-xs",
                                                                            children: "New"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                                            lineNumber: 407,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                                    lineNumber: 405,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-muted-foreground mt-1",
                                                                    children: getPurposeOfProcessingName(purpose.purposeOfProcessingId)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                                    lineNumber: 411,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            className: "max-w-xs",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "break-words whitespace-normal",
                                                                children: purpose.description || "No description"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                                lineNumber: 418,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-1",
                                                                children: purpose.userAttributeNames.map((attrName)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: "outline",
                                                                        className: "text-xs",
                                                                        children: attrName
                                                                    }, attrName, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                                        lineNumber: 425,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                                lineNumber: 423,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                            lineNumber: 422,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            className: "text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$action$2d$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionButtonsGroup"], {
                                                                onEdit: ()=>handleEditProcessingPurpose(index, true),
                                                                onDelete: ()=>handleDeleteProcessingPurpose(index, true),
                                                                className: "justify-center gap-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                                lineNumber: 436,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                            lineNumber: 435,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, `new-${index}`, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                        lineNumber: 359,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                lineNumber: 350,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                            lineNumber: 349,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-dashed p-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-12 w-12 text-muted-foreground mx-auto mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                    lineNumber: 453,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-medium mb-2",
                                    children: "No Processing Purposes Yet"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                    lineNumber: 454,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground mb-4",
                                    children: "Start by adding your first processing purpose to define how user data will be handled."
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                    lineNumber: 457,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>{
                                        setEditingItem(null);
                                        setIsDialogOpen(true);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                            lineNumber: 467,
                                            columnNumber: 17
                                        }, this),
                                        "Add First Processing Purpose"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                    lineNumber: 461,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                            lineNumber: 452,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 px-6 py-4 border-t bg-background sticky bottom-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 justify-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            onClick: handlePrevious,
                            children: "Previous"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                            lineNumber: 478,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            onClick: handleNext,
                            disabled: isPending || allProcessingPurposes.length === 0,
                            className: "min-w-[100px]",
                            children: isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-4 w-4 mr-2 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                                        lineNumber: 489,
                                        columnNumber: 17
                                    }, this),
                                    "Saving..."
                                ]
                            }, void 0, true) : "Next"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                            lineNumber: 481,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                    lineNumber: 477,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                lineNumber: 476,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$purposes$2f$_components$2f$dialogs$2f$add$2d$processing$2d$purpose$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddProcessingPurposeDialog"], {
                open: isDialogOpen,
                onOpenChange: (open)=>{
                    setIsDialogOpen(open);
                    if (!open) {
                        setEditingItem(null);
                    }
                },
                onSave: editingItem ? handleUpdateProcessingPurpose : handleAddProcessingPurpose,
                purposesOfProcessing: purposesOfProcessing,
                userAttributes: userAttributes,
                isEdit: !!editingItem,
                existingProcessingPurposes: allProcessingPurposes,
                editData: editingItem ? {
                    name: editingItem.data.name,
                    description: editingItem.data.description,
                    purposeOfProcessingId: editingItem.data.purposeOfProcessingId,
                    userAttributeNames: editingItem.data.userAttributeNames
                } : null
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
                lineNumber: 500,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step2-form.tsx",
        lineNumber: 312,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/components/ui/checkbox.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/checkbox.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/checkbox.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddDataProcessorDialog",
    ()=>AddDataProcessorDialog
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/command.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/popover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-ssr] (ecmascript) <export default as ChevronsUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
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
function AddDataProcessorDialog({ open, onOpenChange, onSave, dataProcessors, processingPurposes, userAttributes, editData, isEdit, existingMappings = [] }) {
    const [selectedDataProcessorId, setSelectedDataProcessorId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dataProcessorDropdownOpen, setDataProcessorDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [processingPurposeMappings, setProcessingPurposeMappings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Initialize form data when dialog opens or editData changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) {
            if (isEdit && editData) {
                setSelectedDataProcessorId(editData.dataProcessorId);
                const mappings = {};
                editData.processingPurposeMappings.forEach((mapping)=>{
                    mappings[mapping.processingPurposeRef] = mapping.userAttributeNames;
                });
                setProcessingPurposeMappings(mappings);
            } else {
                setSelectedDataProcessorId(null);
                setProcessingPurposeMappings({});
            }
            setDataProcessorDropdownOpen(false);
        }
    }, [
        open,
        isEdit,
        editData
    ]);
    const selectedDataProcessor = dataProcessors.find((dp)=>dp.ouId === selectedDataProcessorId);
    const handleSave = ()=>{
        if (!selectedDataProcessorId) return;
        const processingPurposeMappingsArray = Object.entries(processingPurposeMappings).filter(([_, userAttributeNames])=>userAttributeNames.length > 0).map(([processingPurposeRef, userAttributeNames])=>({
                processingPurposeRef,
                userAttributeNames
            }));
        if (processingPurposeMappingsArray.length === 0) {
            return; // Show error toast
        }
        onSave({
            dataProcessorId: selectedDataProcessorId,
            processingPurposeMappings: processingPurposeMappingsArray
        });
        // Reset form - only if not editing (for edit, parent handles dialog close)
        if (!isEdit) {
            setSelectedDataProcessorId(null);
            setProcessingPurposeMappings({});
        }
    };
    // Remove the processing purpose toggle function since we don't need it anymore
    const handleUserAttributeToggle = (processingPurposeRef, userAttributeName, checked)=>{
        setProcessingPurposeMappings((prev)=>{
            const newMappings = {
                ...prev
            };
            const currentNames = newMappings[processingPurposeRef] || [];
            if (checked) {
                newMappings[processingPurposeRef] = [
                    ...currentNames,
                    userAttributeName
                ];
            } else {
                newMappings[processingPurposeRef] = currentNames.filter((name)=>name !== userAttributeName);
            }
            return newMappings;
        });
    };
    // Get reference string for a processing purpose (id, tempId, or code)
    const getProcessingPurposeRef = (processingPurpose)=>{
        if (processingPurpose.id) return processingPurpose.id.toString();
        if (processingPurpose.tempId) return processingPurpose.tempId;
        return processingPurpose.purposeOfProcessingCode || processingPurpose.purposeOfProcessing?.code || "";
    };
    const getPurposeOfProcessingName = (id)=>{
        const processingPurpose = processingPurposes.find((pp)=>pp.id === id);
        return processingPurpose?.purposeOfProcessing?.name || "Unknown";
    };
    const getUserAttributeName = (id)=>{
        const attr = userAttributes.find((a)=>a.id === id);
        return attr?.name || "Unknown";
    };
    const getProcessingPurposeName = (id)=>{
        const processingPurpose = processingPurposes.find((pp)=>pp.id === id);
        return processingPurpose?.name || "Unknown";
    };
    // Check if a data processor is already mapped to avoid duplicates
    const isDataProcessorAlreadyMapped = (dataProcessorId)=>{
        return existingMappings.some((mapping)=>mapping.dataProcessorId === dataProcessorId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[700px] min-h-160 flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        className: "text-center",
                        children: [
                            isEdit ? "Edit" : "Add",
                            " Processor(s)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 flex-1 flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    children: "Select Data Processor *"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                    open: dataProcessorDropdownOpen,
                                    onOpenChange: setDataProcessorDropdownOpen,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                role: "combobox",
                                                "aria-expanded": dataProcessorDropdownOpen,
                                                className: "w-full justify-between",
                                                disabled: isEdit,
                                                children: [
                                                    selectedDataProcessor ? `${selectedDataProcessor.brandName} (${selectedDataProcessor.legalName})` : "Select a Data Processor",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__["ChevronsUpDown"], {
                                                        className: "ml-2 h-4 w-4 shrink-0 opacity-50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                            className: "w-full p-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandInput"], {
                                                        placeholder: "Search data processors..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandList"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandEmpty"], {
                                                                children: "No data processors found."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandGroup"], {
                                                                children: dataProcessors.filter((dp)=>isEdit || !isDataProcessorAlreadyMapped(dp.ouId) || dp.ouId === selectedDataProcessorId).map((dataProcessor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandItem"], {
                                                                        value: `${dataProcessor.brandName} ${dataProcessor.legalName}`,
                                                                        onSelect: ()=>{
                                                                            setSelectedDataProcessorId(dataProcessor.ouId);
                                                                            setDataProcessorDropdownOpen(false);
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mr-2 h-4 w-4", selectedDataProcessorId === dataProcessor.ouId ? "opacity-100" : "opacity-0")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                                lineNumber: 243,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "font-medium",
                                                                                        children: dataProcessor.brandName
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                                        lineNumber: 252,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-sm text-muted-foreground",
                                                                                        children: dataProcessor.legalName
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                                        lineNumber: 255,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                                lineNumber: 251,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, dataProcessor.ouId, true, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                        lineNumber: 235,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this),
                        selectedDataProcessorId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 flex-1 min-h-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-base font-medium",
                                            children: "Map Processing Purposes & Purpose Attributes"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Select which purpose attributes this data processor will handle for each processing purpose."
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                    lineNumber: 271,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border rounded-lg overflow-hidden flex-1 min-h-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-96 overflow-y-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                    className: "sticky top-0 bg-white z-10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                className: "bg-muted/30 border-r",
                                                                children: "Purpose Sub Master"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                className: "bg-muted/30 border-r",
                                                                children: "Attributes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                className: "bg-muted/30",
                                                                children: "Choose Purpose Attributes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                    children: processingPurposes.map((processingPurpose)=>{
                                                        const processingPurposeRef = getProcessingPurposeRef(processingPurpose);
                                                        const mappedUserAttributeNames = processingPurposeMappings[processingPurposeRef] || [];
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                            className: "hover:bg-muted/20",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "border-r",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-medium",
                                                                        children: processingPurpose.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                        lineNumber: 311,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "border-r",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-1",
                                                                        children: processingPurpose.userAttributeNames?.map((userAttributeName)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-sm",
                                                                                children: userAttributeName
                                                                            }, userAttributeName, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                                lineNumber: 321,
                                                                                columnNumber: 37
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                        lineNumber: 318,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-2",
                                                                        children: processingPurpose.userAttributeNames?.map((userAttributeName)=>{
                                                                            const isSelected = mappedUserAttributeNames.includes(userAttributeName);
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                                    id: `attr-${processingPurposeRef}-${userAttributeName}`,
                                                                                    checked: isSelected,
                                                                                    onCheckedChange: (checked)=>handleUserAttributeToggle(processingPurposeRef, userAttributeName, checked)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                                    lineNumber: 347,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            }, userAttributeName, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                                lineNumber: 343,
                                                                                columnNumber: 39
                                                                            }, this);
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                        lineNumber: 334,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                                    lineNumber: 333,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, processingPurposeRef, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 27
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                            lineNumber: 284,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                        lineNumber: 283,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                    lineNumber: 282,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                            lineNumber: 270,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 pt-4 flex-1 items-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    onClick: ()=>onOpenChange(false),
                                    children: "Previous"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                    lineNumber: 376,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    onClick: handleSave,
                                    disabled: !selectedDataProcessorId || Object.values(processingPurposeMappings).every((mappings)=>mappings.length === 0),
                                    children: isEdit ? "Update" : "Submit"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
            lineNumber: 192,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Step3Form",
    ()=>Step3Form
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$action$2d$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/action-buttons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$consent$2d$purpose$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/consent-purpose-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$purposes$2f$_components$2f$dialogs$2f$add$2d$data$2d$processor$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/consent-purposes/_components/dialogs/add-data-processor-dialog.tsx [app-ssr] (ecmascript)");
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
function Step3Form({ data, isEdit, consentPurposeId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const { state: providerState, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$consent$2d$purpose$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConsentPurposeForm"])();
    const { dataProcessorMappings = [], userAttributes = [], purposesOfProcessing = [], dataProcessors = [] } = data;
    // Get processing purposes from context (source of truth)
    const processingPurposes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // Build a map of modified PP IDs for quick lookup
        const modifiedPPIds = new Set(providerState.step2Data.modified.map((pp)=>pp.id).filter(Boolean));
        // Combine: use modified version if it exists, otherwise use existing, plus new ones
        const existingPPs = providerState.step2Data.existing.filter((pp)=>!modifiedPPIds.has(pp.id)) // Skip if modified version exists
        .filter((pp)=>!providerState.step2Data.deleted.includes(pp.id)); // Skip deleted
        const modifiedPPs = providerState.step2Data.modified.filter((pp)=>!providerState.step2Data.deleted.includes(pp.id)); // Skip deleted
        const newPPs = providerState.step2Data.new;
        const allPPs = [
            ...existingPPs,
            ...modifiedPPs,
            ...newPPs
        ];
        // Enrich with reference data
        return allPPs.map((pp)=>({
                ...pp,
                purposeOfProcessing: purposesOfProcessing.find((pop)=>pop.id === pp.purposeOfProcessingId)
            }));
    }, [
        providerState.step2Data,
        purposesOfProcessing
    ]);
    // Helper function to convert context data to local state format
    const convertToLocalFormat = (dpm)=>({
            id: dpm.id,
            dataProcessorId: dpm.dataProcessorId,
            userAttributeNames: dpm.userAttributeNames || [],
            processingPurposeRef: dpm.processingPurposeRef || dpm.processingPurposeId?.toString() || "",
            status: dpm.status || "draft"
        });
    // Client state for managing data processor mappings
    // Check context first, then fall back to database data
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        // If we have data in context, use it (user has already filled this step)
        if (providerState.step3Data.existing.length > 0 || providerState.step3Data.new.length > 0 || providerState.step3Data.modified.length > 0 || providerState.step3Data.deleted.length > 0) {
            return {
                existing: providerState.step3Data.existing.map(convertToLocalFormat),
                new: providerState.step3Data.new.map(convertToLocalFormat),
                modified: providerState.step3Data.modified.map(convertToLocalFormat),
                deleted: providerState.step3Data.deleted
            };
        }
        // Otherwise, initialize from database data
        return {
            existing: dataProcessorMappings.map((dpm)=>({
                    id: dpm.id,
                    dataProcessorId: dpm.dataProcessorId,
                    userAttributeNames: dpm.userAttributeNames || [],
                    processingPurposeRef: dpm.processingPurposeId.toString(),
                    status: dpm.status
                })),
            new: [],
            modified: [],
            deleted: []
        };
    });
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingItem, setEditingItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Sync context data to local state when navigating back to this step
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (providerState.step3Data.existing.length > 0 || providerState.step3Data.new.length > 0 || providerState.step3Data.modified.length > 0 || providerState.step3Data.deleted.length > 0) {
            setState({
                existing: providerState.step3Data.existing.map(convertToLocalFormat),
                new: providerState.step3Data.new.map(convertToLocalFormat),
                modified: providerState.step3Data.modified.map(convertToLocalFormat),
                deleted: providerState.step3Data.deleted
            });
        }
    }, [
        providerState.step3Data
    ]);
    // Group mappings by data processor for display
    const groupedMappings = [
        ...state.existing,
        ...state.new
    ].reduce((acc, mapping)=>{
        if (!acc[mapping.dataProcessorId]) {
            acc[mapping.dataProcessorId] = [];
        }
        acc[mapping.dataProcessorId].push(mapping);
        return acc;
    }, {});
    const handleNext = async ()=>{
        // Update provider state with Step 3 data
        dispatch({
            type: "SET_STEP3_DATA",
            payload: state
        });
        // Navigate to next step
        const params = new URLSearchParams();
        params.set("step", "4");
        if (consentPurposeId) {
            params.set("id", consentPurposeId);
        }
        const basePath = isEdit && consentPurposeId ? `/cms/data-fiduciary/consent-purposes/${consentPurposeId}/edit` : `/cms/data-fiduciary/consent-purposes/new`;
        router.push(`${basePath}?${params.toString()}`);
    };
    const handlePrevious = ()=>{
        // Save state before navigating back
        dispatch({
            type: "SET_STEP3_DATA",
            payload: state
        });
        const params = new URLSearchParams();
        params.set("step", "2");
        if (consentPurposeId) {
            params.set("id", consentPurposeId);
        }
        const basePath = isEdit && consentPurposeId ? `/cms/data-fiduciary/consent-purposes/${consentPurposeId}/edit` : `/cms/data-fiduciary/consent-purposes/new`;
        router.push(`${basePath}?${params.toString()}`);
    };
    const handleAddDataProcessorMapping = (data)=>{
        // Convert the grouped data to individual mappings
        const newMappings = data.processingPurposeMappings.map((mapping)=>({
                dataProcessorId: data.dataProcessorId,
                userAttributeNames: mapping.userAttributeNames,
                processingPurposeRef: mapping.processingPurposeRef,
                status: "draft"
            }));
        setState((prev)=>({
                ...prev,
                new: [
                    ...prev.new,
                    ...newMappings
                ]
            }));
        setIsDialogOpen(false);
    };
    const handleEditDataProcessorMapping = (dataProcessorId)=>{
        // Get all mappings for this data processor
        const mappings = groupedMappings[dataProcessorId] || [];
        const editData = {
            dataProcessorId,
            processingPurposeMappings: mappings.map((mapping)=>({
                    processingPurposeRef: mapping.processingPurposeRef,
                    userAttributeNames: mapping.userAttributeNames
                }))
        };
        setEditingItem({
            dataProcessorId,
            data: editData
        });
        setIsDialogOpen(true);
    };
    const handleUpdateDataProcessorMapping = (data)=>{
        if (!editingItem) return;
        const { dataProcessorId } = editingItem;
        // Remove all existing mappings for this data processor
        setState((prev)=>{
            // Get mappings to delete from existing
            const existingToDelete = prev.existing.filter((m)=>m.dataProcessorId === dataProcessorId).map((m)=>m.id).filter((id)=>id !== undefined);
            // Remove from new and existing arrays
            const filteredExisting = prev.existing.filter((m)=>m.dataProcessorId !== dataProcessorId);
            const filteredNew = prev.new.filter((m)=>m.dataProcessorId !== dataProcessorId);
            // Create new mappings
            const newMappings = data.processingPurposeMappings.map((mapping)=>({
                    dataProcessorId: data.dataProcessorId,
                    userAttributeNames: mapping.userAttributeNames,
                    processingPurposeRef: mapping.processingPurposeRef,
                    status: "draft"
                }));
            return {
                existing: filteredExisting,
                new: [
                    ...filteredNew,
                    ...newMappings
                ],
                modified: prev.modified.filter((m)=>m.dataProcessorId !== dataProcessorId),
                deleted: [
                    ...prev.deleted,
                    ...existingToDelete
                ]
            };
        });
        setEditingItem(null);
        setIsDialogOpen(false);
    };
    const handleDeleteDataProcessorMapping = (dataProcessorId)=>{
        setState((prev)=>{
            // Get mappings to delete from existing
            const existingToDelete = prev.existing.filter((m)=>m.dataProcessorId === dataProcessorId).map((m)=>m.id).filter((id)=>id !== undefined);
            return {
                existing: prev.existing.filter((m)=>m.dataProcessorId !== dataProcessorId),
                new: prev.new.filter((m)=>m.dataProcessorId !== dataProcessorId),
                modified: prev.modified.filter((m)=>m.dataProcessorId !== dataProcessorId),
                deleted: [
                    ...prev.deleted,
                    ...existingToDelete
                ]
            };
        });
    };
    const getDataProcessorName = (dataProcessorId)=>{
        const processor = dataProcessors.find((dp)=>dp.ouId === dataProcessorId);
        return processor?.brandName || processor?.legalName || "Unknown";
    };
    const getPurposeOfProcessingName = (processingPurposeRef)=>{
        // Find processing purpose by ref (id, tempId, or code)
        const processingPurpose = processingPurposes.find((pp)=>{
            if (pp.id && pp.id.toString() === processingPurposeRef) return true;
            if (pp.tempId && pp.tempId === processingPurposeRef) return true;
            if (pp.purposeOfProcessingCode === processingPurposeRef) return true;
            return false;
        });
        return processingPurpose?.purposeOfProcessing?.name || processingPurpose?.name || "Unknown";
    };
    const getUserAttributeName = (id)=>{
        const attr = userAttributes.find((a)=>a.id === id);
        return attr?.name || "Unknown";
    };
    const allMappings = Object.keys(groupedMappings);
    const hasAnyMappings = allMappings.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b px-6 py-5 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold tracking-tight",
                        children: "Step 3. Add Processor"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                        lineNumber: 356,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Map processing purposes to data processors with purpose attributes"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-6 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold",
                                            children: [
                                                "List of all Processors (",
                                                allMappings.length,
                                                " Entries)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                            lineNumber: 370,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Map data processors to handle specific processing purposes and purpose attributes"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                    lineNumber: 369,
                                    columnNumber: 13
                                }, this),
                                hasAnyMappings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>{
                                        setEditingItem(null);
                                        setIsDialogOpen(true);
                                    },
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this),
                                        "Add a Processor"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                    lineNumber: 379,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                            lineNumber: 368,
                            columnNumber: 11
                        }, this),
                        hasAnyMappings ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border rounded-lg overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    className: "bg-muted/30 border-r",
                                                    children: "Processors Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    className: "bg-muted/30 border-r",
                                                    children: "Purpose Sub Masters"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    className: "bg-muted/30 border-r",
                                                    children: "Attributes Included"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    className: "bg-muted/30",
                                                    children: "Action"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                            lineNumber: 397,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                        lineNumber: 396,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                        children: allMappings.map((dataProcessorId)=>{
                                            const mappings = groupedMappings[dataProcessorId];
                                            const uniquePurposes = [
                                                ...new Set(mappings.map((m)=>getPurposeOfProcessingName(m.processingPurposeRef)))
                                            ];
                                            const allUserAttributes = [
                                                ...new Set(mappings.flatMap((m)=>m.userAttributeNames))
                                            ];
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                className: "hover:bg-muted/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "border-r",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium",
                                                            children: getDataProcessorName(dataProcessorId)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "border-r",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1",
                                                            children: uniquePurposes.map((purpose, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "secondary",
                                                                    children: purpose
                                                                }, index, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                                                    lineNumber: 440,
                                                                    columnNumber: 31
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "border-r",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1",
                                                            children: allUserAttributes.map((attrName)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "outline",
                                                                    children: attrName
                                                                }, attrName, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                                                    lineNumber: 451,
                                                                    columnNumber: 31
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                                            lineNumber: 449,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$action$2d$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionButtonsGroup"], {
                                                            onEdit: ()=>handleEditDataProcessorMapping(dataProcessorId),
                                                            onDelete: ()=>handleDeleteDataProcessorMapping(dataProcessorId),
                                                            className: "px-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, dataProcessorId, true, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                                lineNumber: 425,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                        lineNumber: 410,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                lineNumber: 395,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                            lineNumber: 394,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-dashed p-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-12 w-12 text-muted-foreground mx-auto mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                    lineNumber: 478,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-medium mb-2",
                                    children: "No Processors yet!"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                    lineNumber: 479,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground mb-4",
                                    children: "Add Processors that you need for carrying out the Purpose by clicking the button below"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                    lineNumber: 480,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>{
                                        setEditingItem(null);
                                        setIsDialogOpen(true);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                            lineNumber: 490,
                                            columnNumber: 17
                                        }, this),
                                        "Add a Processor"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                    lineNumber: 484,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                            lineNumber: 477,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                    lineNumber: 367,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 px-6 py-4 border-t bg-background sticky bottom-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 justify-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            onClick: handlePrevious,
                            children: "Previous"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                            lineNumber: 501,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            onClick: handleNext,
                            disabled: isPending,
                            className: "min-w-[100px]",
                            children: isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-4 w-4 mr-2 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                                        lineNumber: 512,
                                        columnNumber: 17
                                    }, this),
                                    "Saving..."
                                ]
                            }, void 0, true) : "Next"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                            lineNumber: 504,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                    lineNumber: 500,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                lineNumber: 499,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$purposes$2f$_components$2f$dialogs$2f$add$2d$data$2d$processor$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddDataProcessorDialog"], {
                open: isDialogOpen,
                onOpenChange: (open)=>{
                    setIsDialogOpen(open);
                    if (!open) {
                        setEditingItem(null);
                    }
                },
                onSave: editingItem ? handleUpdateDataProcessorMapping : handleAddDataProcessorMapping,
                dataProcessors: dataProcessors,
                processingPurposes: processingPurposes,
                userAttributes: userAttributes,
                isEdit: !!editingItem,
                editData: editingItem?.data || null,
                existingMappings: [
                    ...state.existing,
                    ...state.new
                ]
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
                lineNumber: 523,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step3-form.tsx",
        lineNumber: 353,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/constants/languages.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/types/languages.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
 */ // Language types and helper functions
// Re-export constants from centralized location
__turbopack_context__.s([
    "getAllLanguages",
    ()=>getAllLanguages,
    "getLanguageInfo",
    ()=>getLanguageInfo,
    "getLanguageName",
    ()=>getLanguageName,
    "isRTL",
    ()=>isRTL,
    "isValidLanguageCode",
    ()=>isValidLanguageCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/languages.ts [app-ssr] (ecmascript)");
;
;
function getLanguageName(code, preferNative = false) {
    const lang = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][code];
    return preferNative ? lang.nativeName : lang.name;
}
function isRTL(code) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][code].rtl;
}
function getLanguageInfo(code) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][code];
}
function getAllLanguages() {
    return Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"]);
}
function isValidLanguageCode(code) {
    return code in __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"];
}
}),
"[project]/components/ui/progress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Progress({ className, value, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/components/ui/progress.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/progress.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/scroll-area.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/scroll-area.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/components/ui/scroll-area.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
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
function ScrollBar({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
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
;
}),
"[project]/lib/constants/google-translate-mapping.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 * Google Translate Language Code Mapping
 * Maps our internal language codes to Google Cloud Translation API language codes
 * 
 * Note: Some Indian languages may not have direct Google Translate support
 * In such cases, we map to the closest available language
 */ __turbopack_context__.s([
    "GOOGLE_TRANSLATE_LANG_MAP",
    ()=>GOOGLE_TRANSLATE_LANG_MAP,
    "UNSUPPORTED_LANGUAGES",
    ()=>UNSUPPORTED_LANGUAGES,
    "getFallbackLanguage",
    ()=>getFallbackLanguage,
    "getGoogleTranslateCode",
    ()=>getGoogleTranslateCode,
    "hasDirectTranslateSupport",
    ()=>hasDirectTranslateSupport
]);
const GOOGLE_TRANSLATE_LANG_MAP = {
    en: 'en',
    as: 'as',
    bn: 'bn',
    brx: 'hi',
    doi: 'doi',
    gu: 'gu',
    hi: 'hi',
    kn: 'kn',
    ks: 'ur',
    kok: 'gom',
    mai: 'mai',
    ml: 'ml',
    mni: 'mni-Mtei',
    mr: 'mr',
    ne: 'ne',
    or: 'or',
    pa: 'pa',
    sa: 'sa',
    sat: 'hi',
    sd: 'sd',
    ta: 'ta',
    te: 'te',
    ur: 'ur'
};
const UNSUPPORTED_LANGUAGES = [
    'brx',
    'ks',
    'sat'
];
function getGoogleTranslateCode(languageCode) {
    return GOOGLE_TRANSLATE_LANG_MAP[languageCode];
}
function hasDirectTranslateSupport(languageCode) {
    return !UNSUPPORTED_LANGUAGES.includes(languageCode);
}
function getFallbackLanguage(languageCode) {
    if (hasDirectTranslateSupport(languageCode)) {
        return null;
    }
    const googleCode = GOOGLE_TRANSLATE_LANG_MAP[languageCode];
    // Find a SUPPORTED language that uses this Google code
    for (const [code, gCode] of Object.entries(GOOGLE_TRANSLATE_LANG_MAP)){
        if (gCode === googleCode && code !== languageCode && hasDirectTranslateSupport(code)) {
            return code;
        }
    }
    return 'en'; // Ultimate fallback
}
}),
"[project]/components/translations/auto-translate-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoTranslateButton",
    ()=>AutoTranslateButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-ssr] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/types/languages.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/languages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$google$2d$translate$2d$mapping$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/google-translate-mapping.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
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
function AutoTranslateButton({ targetLanguages, existingLanguages = [], sourceLanguage = "en", onTranslate, onSuccess, variant = "outline", size = "default", showLabel = true, label = "Auto-Translate", disabled = false }) {
    const [isTranslating, setIsTranslating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmDialog, setShowConfirmDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentLanguage, setCurrentLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedLanguages, setSelectedLanguages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set(existingLanguages));
    const handleTranslate = async ()=>{
        const languagesToTranslate = Array.from(selectedLanguages);
        if (languagesToTranslate.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please select at least one language to translate");
            return;
        }
        setShowConfirmDialog(false);
        setIsTranslating(true);
        setProgress(0);
        setCurrentLanguage("");
        try {
            // Calculate progress based on actual translation count
            const totalLanguages = languagesToTranslate.length;
            let completed = 0;
            const progressInterval = setInterval(()=>{
                completed += 1;
                const newProgress = Math.min(completed / totalLanguages * 90, 90);
                setProgress(newProgress);
            }, 200);
            const result = await onTranslate(languagesToTranslate, sourceLanguage);
            clearInterval(progressInterval);
            setProgress(100);
            if (result.success) {
                const count = result.translatedCount || targetLanguages.length;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Successfully translated to ${count} language${count > 1 ? 's' : ''}`);
                if (result.errors && result.errors.length > 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning(`Some translations failed: ${result.errors.join(", ")}`);
                }
                onSuccess?.();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result.error || "Translation failed");
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("An error occurred during translation");
            console.error("Auto-translate error:", error);
        } finally{
            setIsTranslating(false);
            setProgress(0);
            setCurrentLanguage("");
        }
    };
    const openConfirmDialog = ()=>{
        if (targetLanguages.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("No target languages specified");
            return;
        }
        // Reset selection to existing languages (or none if no existing translations)
        setSelectedLanguages(new Set(existingLanguages));
        setShowConfirmDialog(true);
    };
    const toggleLanguage = (langCode)=>{
        setSelectedLanguages((prev)=>{
            const newSet = new Set(prev);
            if (newSet.has(langCode)) {
                newSet.delete(langCode);
            } else {
                newSet.add(langCode);
            }
            return newSet;
        });
    };
    const toggleAll = ()=>{
        if (selectedLanguages.size === targetLanguages.length) {
            setSelectedLanguages(new Set());
        } else {
            setSelectedLanguages(new Set(targetLanguages));
        }
    };
    // Get languages with approximations
    const getApproximations = ()=>{
        const approximations = [];
        targetLanguages.forEach((lang)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$google$2d$translate$2d$mapping$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasDirectTranslateSupport"])(lang)) {
                const fallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$google$2d$translate$2d$mapping$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFallbackLanguage"])(lang);
                if (fallback && fallback !== 'en') {
                    const fallbackName = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][fallback]?.name || fallback;
                    approximations.push({
                        lang,
                        fallback: fallbackName
                    });
                }
            }
        });
        return approximations;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                variant: variant,
                size: size,
                onClick: openConfirmDialog,
                disabled: disabled || isTranslating || targetLanguages.length === 0,
                children: [
                    isTranslating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-4 w-4 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/components/translations/auto-translate-button.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/translations/auto-translate-button.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this),
                    showLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2",
                        children: isTranslating ? "Translating..." : label
                    }, void 0, false, {
                        fileName: "[project]/components/translations/auto-translate-button.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/translations/auto-translate-button.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showConfirmDialog,
                onOpenChange: setShowConfirmDialog,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this),
                                        "Auto-Translate Confirmation"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: [
                                        "Select languages to automatically translate from",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][sourceLanguage].name
                                        }, void 0, false, {
                                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        " using Google Translate:"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 pb-2 border-b",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                            id: "select-all",
                                            checked: selectedLanguages.size === targetLanguages.length,
                                            onCheckedChange: toggleAll
                                        }, void 0, false, {
                                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "select-all",
                                            className: "font-medium cursor-pointer",
                                            children: [
                                                "Select All (",
                                                selectedLanguages.size,
                                                "/",
                                                targetLanguages.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                    className: "h-[250px] pr-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: targetLanguages.map((lang)=>{
                                            const isUnsupported = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$google$2d$translate$2d$mapping$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasDirectTranslateSupport"])(lang);
                                            const fallbackLang = isUnsupported ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$google$2d$translate$2d$mapping$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFallbackLanguage"])(lang) : null;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                        id: `lang-${lang}`,
                                                        checked: selectedLanguages.has(lang),
                                                        onCheckedChange: ()=>toggleLanguage(lang),
                                                        className: "mt-0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/translations/auto-translate-button.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: `lang-${lang}`,
                                                        className: "cursor-pointer flex-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][lang].nativeName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                                                    lineNumber: 261,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: [
                                                                        "(",
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][lang].name,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 27
                                                                }, this),
                                                                isUnsupported && fallbackLang && fallbackLang !== 'en' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "outline",
                                                                    className: "text-xs",
                                                                    children: [
                                                                        "→ ",
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][fallbackLang]?.name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/translations/auto-translate-button.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, lang, true, {
                                                fileName: "[project]/components/translations/auto-translate-button.tsx",
                                                lineNumber: 252,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/translations/auto-translate-button.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2 p-3 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 rounded-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "h-4 w-4 text-yellow-600 dark:text-yellow-500 mt-0.5 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-yellow-800 dark:text-yellow-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium",
                                                    children: "Important Notes:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-disc list-inside mt-1 space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Auto-translations may not be perfect"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Please review and edit translations as needed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Existing translations will be overwritten"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 19
                                                        }, this),
                                                        getApproximations().length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: "Language Approximations:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                                                    lineNumber: 289,
                                                                    columnNumber: 23
                                                                }, this),
                                                                getApproximations().map(({ lang, fallback }, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            idx === 0 ? ' ' : ', ',
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][lang].name,
                                                                            " uses ",
                                                                            fallback
                                                                        ]
                                                                    }, lang, true, {
                                                                        fileName: "[project]/components/translations/auto-translate-button.tsx",
                                                                        lineNumber: 291,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    onClick: ()=>setShowConfirmDialog(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    onClick: handleTranslate,
                                    disabled: selectedLanguages.size === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                                            lineNumber: 316,
                                            columnNumber: 15
                                        }, this),
                                        "Translate ",
                                        selectedLanguages.size > 0 ? `(${selectedLanguages.size})` : 'Now'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                    lineNumber: 219,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/translations/auto-translate-button.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isTranslating,
                onOpenChange: ()=>{},
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-5 w-5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                                            lineNumber: 328,
                                            columnNumber: 15
                                        }, this),
                                        "Translating..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Please wait while we translate your content."
                                }, void 0, false, {
                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                    value: progress,
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-muted-foreground text-center",
                                    children: progress === 100 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-2 text-green-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/translations/auto-translate-button.tsx",
                                                lineNumber: 342,
                                                columnNumber: 19
                                            }, this),
                                            "Translation complete!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/translations/auto-translate-button.tsx",
                                        lineNumber: 341,
                                        columnNumber: 17
                                    }, this) : `Translating to ${selectedLanguages.size} language${selectedLanguages.size > 1 ? 's' : ''}...`
                                }, void 0, false, {
                                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/translations/auto-translate-button.tsx",
                            lineNumber: 336,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/translations/auto-translate-button.tsx",
                    lineNumber: 325,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/translations/auto-translate-button.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/actions/data:aaf01d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7817f412d199e81c81597545fc9f54d9c77bdb0d92":"autoTranslateConsentPurpose"},"actions/auto-translate.ts",""] */ __turbopack_context__.s([
    "autoTranslateConsentPurpose",
    ()=>autoTranslateConsentPurpose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var autoTranslateConsentPurpose = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7817f412d199e81c81597545fc9f54d9c77bdb0d92", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "autoTranslateConsentPurpose"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXV0by10cmFuc2xhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcbi8qKlxyXG4gKiBPcGVuIEJoYXJhdCBEaWdpdGFsIENvbnNlbnQgYnkgSURmeVxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjUgQmFsZG9yIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQgKElEZnkpXHJcbiAqIFxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBQcml2eSBQdWJsaWMgTGljZW5zZS5cclxuICogU2VlIExJQ0VOU0UubWQgZm9yIHRoZSBmdWxsIHRlcm1zIG9mIHVzZS5cclxuICogXHJcbiAqIFVuYXV0aG9yaXplZCBjb3B5aW5nLCBtb2RpZmljYXRpb24sIGRpc3RyaWJ1dGlvbiwgb3IgY29tbWVyY2lhbCB1c2VcclxuICogaXMgc3RyaWN0bHkgcHJvaGliaXRlZCB3aXRob3V0IHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbiBmcm9tIElEZnkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IExhbmd1YWdlQ29kZSB9IGZyb20gXCJAL2xpYi90eXBlcy9sYW5ndWFnZXNcIjtcclxuaW1wb3J0IHsgdHJhbnNsYXRlT2JqZWN0IH0gZnJvbSBcIkAvbGliL3NlcnZpY2VzL2dvb2dsZS10cmFuc2xhdGUtc2VydmljZVwiO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tIFwiQC9saWIvdXRpbHMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbi8qKlxyXG4gKiBBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZSB0byBtdWx0aXBsZSBsYW5ndWFnZXNcclxuICogXHJcbiAqIEBwYXJhbSB1c2VyQXR0cmlidXRlSWQgLSBJRCBvZiB0aGUgdXNlciBhdHRyaWJ1dGUgdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB0YXJnZXRMYW5ndWFnZXMgLSBBcnJheSBvZiBsYW5ndWFnZSBjb2RlcyB0byB0cmFuc2xhdGUgdG9cclxuICogQHBhcmFtIHNvdXJjZUxhbmd1YWdlIC0gU291cmNlIGxhbmd1YWdlIChkZWZhdWx0cyB0byAnZW4nKVxyXG4gKiBAcmV0dXJucyBTdWNjZXNzIHdpdGggdHJhbnNsYXRpb25zIG9yIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0b1RyYW5zbGF0ZVVzZXJBdHRyaWJ1dGUoXHJcbiAgdXNlckF0dHJpYnV0ZUlkOiBudW1iZXIsXHJcbiAgdGFyZ2V0TGFuZ3VhZ2VzOiBMYW5ndWFnZUNvZGVbXSxcclxuICBzb3VyY2VMYW5ndWFnZTogTGFuZ3VhZ2VDb2RlID0gXCJlblwiXHJcbikge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGxvZ2dlci5pbmZvKFwiQXV0by10cmFuc2xhdGUgVXNlciBBdHRyaWJ1dGU6IFN0YXJ0aW5nXCIsIHtcclxuICAgICAgdXNlckF0dHJpYnV0ZUlkLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZXMsXHJcbiAgICAgIHNvdXJjZUxhbmd1YWdlLFxyXG4gICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIGlucHV0c1xyXG4gICAgaWYgKCF0YXJnZXRMYW5ndWFnZXMgfHwgdGFyZ2V0TGFuZ3VhZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJObyB0YXJnZXQgbGFuZ3VhZ2VzIHNwZWNpZmllZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmV0Y2ggdXNlciBhdHRyaWJ1dGVcclxuICAgIGNvbnN0IHVzZXJBdHRyaWJ1dGUgPSBhd2FpdCBwcmlzbWEudXNlckF0dHJpYnV0ZS5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHVzZXJBdHRyaWJ1dGVJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uczogdHJ1ZSxcclxuICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXVzZXJBdHRyaWJ1dGUpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiVXNlciBhdHRyaWJ1dGUgbm90IGZvdW5kXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgc291cmNlIHRyYW5zbGF0aW9uIChFbmdsaXNoIGJ5IGRlZmF1bHQpXHJcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb25zID0gKHVzZXJBdHRyaWJ1dGUudHJhbnNsYXRpb25zIGFzIGFueSkgfHwge307XHJcbiAgICBjb25zdCBzb3VyY2VUcmFuc2xhdGlvbiA9IGN1cnJlbnRUcmFuc2xhdGlvbnNbc291cmNlTGFuZ3VhZ2VdIHx8IHtcclxuICAgICAgbmFtZTogdXNlckF0dHJpYnV0ZS5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogbnVsbCxcclxuICAgICAgcGxhY2Vob2xkZXI6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHNvdXJjZSBoYXMgY29udGVudFxyXG4gICAgaWYgKCFzb3VyY2VUcmFuc2xhdGlvbi5uYW1lIHx8IHNvdXJjZVRyYW5zbGF0aW9uLm5hbWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBgU291cmNlIHRyYW5zbGF0aW9uICgke3NvdXJjZUxhbmd1YWdlfSkgaGFzIG5vIG5hbWVgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZTogVHJhbnNsYXRpbmcgZmllbGRzXCIsIHtcclxuICAgICAgdXNlckF0dHJpYnV0ZUlkLFxyXG4gICAgICBzb3VyY2VMYW5ndWFnZSxcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VzLFxyXG4gICAgICBmaWVsZHM6IE9iamVjdC5rZXlzKHNvdXJjZVRyYW5zbGF0aW9uKSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRyYW5zbGF0ZSB0byBlYWNoIHRhcmdldCBsYW5ndWFnZVxyXG4gICAgY29uc3QgdHJhbnNsYXRpb25SZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XHJcbiAgICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXJnZXRMYW5nIG9mIHRhcmdldExhbmd1YWdlcykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFNraXAgaWYgc291cmNlIGFuZCB0YXJnZXQgYXJlIHRoZSBzYW1lXHJcbiAgICAgICAgaWYgKHRhcmdldExhbmcgPT09IHNvdXJjZUxhbmd1YWdlKSB7XHJcbiAgICAgICAgICB0cmFuc2xhdGlvblJlc3VsdHNbdGFyZ2V0TGFuZ10gPSBzb3VyY2VUcmFuc2xhdGlvbjtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRoZSBvYmplY3RcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVkID0gYXdhaXQgdHJhbnNsYXRlT2JqZWN0KFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBzb3VyY2VUcmFuc2xhdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc291cmNlVHJhbnNsYXRpb24uZGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHNvdXJjZVRyYW5zbGF0aW9uLnBsYWNlaG9sZGVyIHx8IG51bGwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICAgIHNvdXJjZUxhbmd1YWdlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdHJhbnNsYXRpb25SZXN1bHRzW3RhcmdldExhbmddID0gdHJhbnNsYXRlZDtcclxuXHJcbiAgICAgICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZTogTGFuZ3VhZ2UgY29tcGxldGVkXCIsIHtcclxuICAgICAgICAgIHVzZXJBdHRyaWJ1dGVJZCxcclxuICAgICAgICAgIGxhbmd1YWdlOiB0YXJnZXRMYW5nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gYEZhaWxlZCB0byB0cmFuc2xhdGUgdG8gJHt0YXJnZXRMYW5nfWA7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyb3JNc2cpO1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihcIkF1dG8tdHJhbnNsYXRlIFVzZXIgQXR0cmlidXRlOiBMYW5ndWFnZSBmYWlsZWRcIiwge1xyXG4gICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgICB1c2VyQXR0cmlidXRlSWQsXHJcbiAgICAgICAgICBsYW5ndWFnZTogdGFyZ2V0TGFuZyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIGFsbCB0cmFuc2xhdGlvbnMgZmFpbGVkLCByZXR1cm4gZXJyb3JcclxuICAgIGlmIChPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJBbGwgdHJhbnNsYXRpb25zIGZhaWxlZFwiLCBkZXRhaWxzOiBlcnJvcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXJnZSB3aXRoIGV4aXN0aW5nIHRyYW5zbGF0aW9ucyAoZG9uJ3Qgb3ZlcndyaXRlIG1hbnVhbGx5IGVkaXRlZCBvbmVzIHVubGVzcyBleHBsaWNpdGx5IHJlcXVlc3RlZClcclxuICAgIGNvbnN0IHVwZGF0ZWRUcmFuc2xhdGlvbnMgPSB7XHJcbiAgICAgIC4uLmN1cnJlbnRUcmFuc2xhdGlvbnMsXHJcbiAgICAgIC4uLnRyYW5zbGF0aW9uUmVzdWx0cyxcclxuICAgIH07XHJcblxyXG4gICAgLy8gVXBkYXRlIHN1cHBvcnRlZCBsYW5ndWFnZXNcclxuICAgIGNvbnN0IG5ld0xhbmd1YWdlcyA9IE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uUmVzdWx0cykgYXMgTGFuZ3VhZ2VDb2RlW107XHJcbiAgICBjb25zdCBleGlzdGluZ0xhbmd1YWdlcyA9IHVzZXJBdHRyaWJ1dGUuc3VwcG9ydGVkTGFuZ3VhZ2VzIHx8IFtdO1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gQXJyYXkuZnJvbShcclxuICAgICAgbmV3IFNldChbLi4uZXhpc3RpbmdMYW5ndWFnZXMsIC4uLm5ld0xhbmd1YWdlc10pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNhdmUgdG8gZGF0YWJhc2VcclxuICAgIGF3YWl0IHByaXNtYS51c2VyQXR0cmlidXRlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB1c2VyQXR0cmlidXRlSWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRyYW5zbGF0aW9uczogdXBkYXRlZFRyYW5zbGF0aW9ucyxcclxuICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXMsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2dnZXIuaW5mbyhcIkF1dG8tdHJhbnNsYXRlIFVzZXIgQXR0cmlidXRlOiBDb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsIHtcclxuICAgICAgdXNlckF0dHJpYnV0ZUlkLFxyXG4gICAgICB0cmFuc2xhdGVkTGFuZ3VhZ2VzOiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLFxyXG4gICAgICB0b3RhbExhbmd1YWdlczogc3VwcG9ydGVkTGFuZ3VhZ2VzLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJldmFsaWRhdGUgY2FjaGVcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS91c2VyLWF0dHJpYnV0ZXNcIik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgdHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvblJlc3VsdHMsXHJcbiAgICAgIHRyYW5zbGF0ZWRDb3VudDogT2JqZWN0LmtleXModHJhbnNsYXRpb25SZXN1bHRzKS5sZW5ndGgsXHJcbiAgICAgIGVycm9yczogZXJyb3JzLmxlbmd0aCA+IDAgPyBlcnJvcnMgOiB1bmRlZmluZWQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2dnZXIuZXJyb3IoXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZTogRmFpbGVkXCIsIHtcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIHVzZXJBdHRyaWJ1dGVJZCxcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIGF1dG8tdHJhbnNsYXRlXCIsXHJcbiAgICAgIGRldGFpbHM6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCIsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEF1dG8tdHJhbnNsYXRlIHNwZWNpZmljIGZpZWxkcyBvZiBhIFVzZXIgQXR0cmlidXRlIHRvIGEgc2luZ2xlIGxhbmd1YWdlXHJcbiAqIFVzZWZ1bCBmb3IgcmV0cnlpbmcgZmFpbGVkIHRyYW5zbGF0aW9ucyBvciB0cmFuc2xhdGluZyBzcGVjaWZpYyBmaWVsZHNcclxuICogXHJcbiAqIEBwYXJhbSB1c2VyQXR0cmlidXRlSWQgLSBJRCBvZiB0aGUgdXNlciBhdHRyaWJ1dGVcclxuICogQHBhcmFtIHRhcmdldExhbmd1YWdlIC0gU2luZ2xlIHRhcmdldCBsYW5ndWFnZSBjb2RlXHJcbiAqIEBwYXJhbSBmaWVsZHMgLSBPYmplY3Qgd2l0aCBmaWVsZHMgdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSBzb3VyY2VMYW5ndWFnZSAtIFNvdXJjZSBsYW5ndWFnZSAoZGVmYXVsdHMgdG8gJ2VuJylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRvVHJhbnNsYXRlVXNlckF0dHJpYnV0ZUZpZWxkcyhcclxuICB1c2VyQXR0cmlidXRlSWQ6IG51bWJlcixcclxuICB0YXJnZXRMYW5ndWFnZTogTGFuZ3VhZ2VDb2RlLFxyXG4gIGZpZWxkczoge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nIHwgbnVsbDtcclxuICB9LFxyXG4gIHNvdXJjZUxhbmd1YWdlOiBMYW5ndWFnZUNvZGUgPSBcImVuXCJcclxuKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICBpZiAoIXNlc3Npb24/LnVzZXIpIHtcclxuICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gVmFsaWRhdGUgdXNlciBhdHRyaWJ1dGUgZXhpc3RzXHJcbiAgICBjb25zdCB1c2VyQXR0cmlidXRlID0gYXdhaXQgcHJpc21hLnVzZXJBdHRyaWJ1dGUuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB1c2VyQXR0cmlidXRlSWQgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgdHJhbnNsYXRpb25zOiB0cnVlLFxyXG4gICAgICAgIHN1cHBvcnRlZExhbmd1YWdlczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlckF0dHJpYnV0ZSkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJVc2VyIGF0dHJpYnV0ZSBub3QgZm91bmRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRyYW5zbGF0ZSB0aGUgcHJvdmlkZWQgZmllbGRzXHJcbiAgICBjb25zdCB0cmFuc2xhdGVkID0gYXdhaXQgdHJhbnNsYXRlT2JqZWN0KGZpZWxkcywgdGFyZ2V0TGFuZ3VhZ2UsIHNvdXJjZUxhbmd1YWdlKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgdHJhbnNsYXRpb25zXHJcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb25zID0gKHVzZXJBdHRyaWJ1dGUudHJhbnNsYXRpb25zIGFzIGFueSkgfHwge307XHJcbiAgICBjdXJyZW50VHJhbnNsYXRpb25zW3RhcmdldExhbmd1YWdlXSA9IHtcclxuICAgICAgLi4uKGN1cnJlbnRUcmFuc2xhdGlvbnNbdGFyZ2V0TGFuZ3VhZ2VdIHx8IHt9KSxcclxuICAgICAgLi4udHJhbnNsYXRlZCxcclxuICAgIH07XHJcblxyXG4gICAgLy8gVXBkYXRlIHN1cHBvcnRlZCBsYW5ndWFnZXNcclxuICAgIGNvbnN0IHN1cHBvcnRlZExhbmd1YWdlcyA9IHVzZXJBdHRyaWJ1dGUuc3VwcG9ydGVkTGFuZ3VhZ2VzIHx8IFtdO1xyXG4gICAgaWYgKCFzdXBwb3J0ZWRMYW5ndWFnZXMuaW5jbHVkZXModGFyZ2V0TGFuZ3VhZ2UpKSB7XHJcbiAgICAgIHN1cHBvcnRlZExhbmd1YWdlcy5wdXNoKHRhcmdldExhbmd1YWdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTYXZlIHRvIGRhdGFiYXNlXHJcbiAgICBhd2FpdCBwcmlzbWEudXNlckF0dHJpYnV0ZS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogdXNlckF0dHJpYnV0ZUlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IGN1cnJlbnRUcmFuc2xhdGlvbnMsXHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZSBGaWVsZHM6IENvbXBsZXRlZFwiLCB7XHJcbiAgICAgIHVzZXJBdHRyaWJ1dGVJZCxcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2UsXHJcbiAgICAgIGZpZWxkczogT2JqZWN0LmtleXMoZmllbGRzKSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS91c2VyLWF0dHJpYnV0ZXNcIik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgdHJhbnNsYXRpb246IHRyYW5zbGF0ZWQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2dnZXIuZXJyb3IoXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZSBGaWVsZHM6IEZhaWxlZFwiLCB7XHJcbiAgICAgIGVycm9yLFxyXG4gICAgICB1c2VyQXR0cmlidXRlSWQsXHJcbiAgICAgIHRhcmdldExhbmd1YWdlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIGF1dG8tdHJhbnNsYXRlIGZpZWxkc1wiLFxyXG4gICAgICBkZXRhaWxzOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2xhdGUgdGV4dCB0byBtdWx0aXBsZSBsYW5ndWFnZXMgKGZvciBjcmVhdGUgZm9ybXMpXHJcbiAqIFRoaXMgYWN0aW9uIHRyYW5zbGF0ZXMgdGV4dCB3aXRob3V0IHNhdmluZyB0byBkYXRhYmFzZVxyXG4gKiBcclxuICogQHBhcmFtIHRleHQgLSBUZXh0IHRvIHRyYW5zbGF0ZVxyXG4gKiBAcGFyYW0gdGFyZ2V0TGFuZ3VhZ2VzIC0gQXJyYXkgb2YgbGFuZ3VhZ2UgY29kZXMgdG8gdHJhbnNsYXRlIHRvXHJcbiAqIEBwYXJhbSBzb3VyY2VMYW5ndWFnZSAtIFNvdXJjZSBsYW5ndWFnZSAoZGVmYXVsdHMgdG8gJ2VuJylcclxuICogQHJldHVybnMgU3VjY2VzcyB3aXRoIHRyYW5zbGF0aW9ucyBvciBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYW5zbGF0ZVRleHRUb0xhbmd1YWdlcyhcclxuICB0ZXh0OiBzdHJpbmcsXHJcbiAgdGFyZ2V0TGFuZ3VhZ2VzOiBMYW5ndWFnZUNvZGVbXSxcclxuICBzb3VyY2VMYW5ndWFnZTogTGFuZ3VhZ2VDb2RlID0gXCJlblwiXHJcbikge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGxvZ2dlci5pbmZvKFwiVHJhbnNsYXRlIFRleHQ6IFN0YXJ0aW5nXCIsIHtcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VzLFxyXG4gICAgICBzb3VyY2VMYW5ndWFnZSxcclxuICAgICAgdGV4dExlbmd0aDogdGV4dC5sZW5ndGgsXHJcbiAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRzXHJcbiAgICBpZiAoIXRleHQgfHwgdGV4dC50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm8gdGV4dCBwcm92aWRlZCBmb3IgdHJhbnNsYXRpb25cIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGFyZ2V0TGFuZ3VhZ2VzIHx8IHRhcmdldExhbmd1YWdlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm8gdGFyZ2V0IGxhbmd1YWdlcyBzcGVjaWZpZWRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEltcG9ydCB0cmFuc2xhdGlvbiBzZXJ2aWNlXHJcbiAgICBjb25zdCB7IHRyYW5zbGF0ZVRleHQgfSA9IGF3YWl0IGltcG9ydChcIkAvbGliL3NlcnZpY2VzL2dvb2dsZS10cmFuc2xhdGUtc2VydmljZVwiKTtcclxuXHJcbiAgICAvLyBUcmFuc2xhdGUgdG8gZWFjaCB0YXJnZXQgbGFuZ3VhZ2VcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG4gICAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgdGFyZ2V0TGFuZyBvZiB0YXJnZXRMYW5ndWFnZXMpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBTa2lwIGlmIHNvdXJjZSBhbmQgdGFyZ2V0IGFyZSB0aGUgc2FtZVxyXG4gICAgICAgIGlmICh0YXJnZXRMYW5nID09PSBzb3VyY2VMYW5ndWFnZSkge1xyXG4gICAgICAgICAgdHJhbnNsYXRpb25zW3RhcmdldExhbmddID0gdGV4dDtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRoZSB0ZXh0XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZCA9IGF3YWl0IHRyYW5zbGF0ZVRleHQodGV4dCwgdGFyZ2V0TGFuZywgc291cmNlTGFuZ3VhZ2UpO1xyXG4gICAgICAgIHRyYW5zbGF0aW9uc1t0YXJnZXRMYW5nXSA9IHRyYW5zbGF0ZWQ7XHJcblxyXG4gICAgICAgIGxvZ2dlci5pbmZvKFwiVHJhbnNsYXRlIFRleHQ6IExhbmd1YWdlIGNvbXBsZXRlZFwiLCB7XHJcbiAgICAgICAgICB0YXJnZXRMYW5nLFxyXG4gICAgICAgICAgdGV4dExlbmd0aDogdHJhbnNsYXRlZC5sZW5ndGgsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBgRmFpbGVkIHRvIHRyYW5zbGF0ZSB0byAke3RhcmdldExhbmd9YDtcclxuICAgICAgICBsb2dnZXIuZXJyb3IoXCJUcmFuc2xhdGUgVGV4dDogTGFuZ3VhZ2UgZmFpbGVkXCIsIHtcclxuICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlcnJvcnMucHVzaChlcnJvck1zZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXModHJhbnNsYXRpb25zKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBlcnJvcjogXCJGYWlsZWQgdG8gdHJhbnNsYXRlIHRvIGFueSBsYW5ndWFnZVwiLFxyXG4gICAgICAgIGRldGFpbHM6IGVycm9ycy5qb2luKFwiLCBcIiksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJUcmFuc2xhdGUgVGV4dDogQ29tcGxldGVkXCIsIHtcclxuICAgICAgc3VjY2Vzc0NvdW50OiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvbnMpLmxlbmd0aCxcclxuICAgICAgZXJyb3JDb3VudDogZXJyb3JzLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIHRyYW5zbGF0aW9ucyxcclxuICAgICAgZXJyb3JzOiBlcnJvcnMubGVuZ3RoID4gMCA/IGVycm9ycyA6IHVuZGVmaW5lZCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGxvZ2dlci5lcnJvcihcIlRyYW5zbGF0ZSBUZXh0OiBGYWlsZWRcIiwge1xyXG4gICAgICBlcnJvcixcclxuICAgICAgc291cmNlTGFuZ3VhZ2UsXHJcbiAgICAgIHRhcmdldExhbmd1YWdlcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOiBcIkZhaWxlZCB0byB0cmFuc2xhdGUgdGV4dFwiLFxyXG4gICAgICBkZXRhaWxzOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBdXRvLXRyYW5zbGF0ZSBCdXNpbmVzcyBQcm9jZXNzIHRvIG11bHRpcGxlIGxhbmd1YWdlc1xyXG4gKiBcclxuICogQHBhcmFtIGJ1c2luZXNzUHJvY2Vzc0lkIC0gSUQgb2YgdGhlIGJ1c2luZXNzIHByb2Nlc3MgdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB0YXJnZXRMYW5ndWFnZXMgLSBBcnJheSBvZiBsYW5ndWFnZSBjb2RlcyB0byB0cmFuc2xhdGUgdG9cclxuICogQHBhcmFtIHNvdXJjZUxhbmd1YWdlIC0gU291cmNlIGxhbmd1YWdlIChkZWZhdWx0cyB0byAnZW4nKVxyXG4gKiBAcGFyYW0gZW5nbGlzaERhdGEgLSBPcHRpb25hbCBFbmdsaXNoIGRhdGEgZnJvbSBjb250ZXh0IChmb3IgbmV3bHkgYWRkZWQvZWRpdGVkIGZpZWxkcylcclxuICogQHJldHVybnMgU3VjY2VzcyB3aXRoIHRyYW5zbGF0aW9ucyBvciBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dG9UcmFuc2xhdGVCdXNpbmVzc1Byb2Nlc3MoXHJcbiAgYnVzaW5lc3NQcm9jZXNzSWQ6IG51bWJlcixcclxuICB0YXJnZXRMYW5ndWFnZXM6IExhbmd1YWdlQ29kZVtdLFxyXG4gIHNvdXJjZUxhbmd1YWdlOiBMYW5ndWFnZUNvZGUgPSBcImVuXCIsXHJcbiAgZW5nbGlzaERhdGE/OiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBncmFudERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICByZXZva2VEZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgICByZWNvbnNlbnREZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgfVxyXG4pIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gIGlmICghc2Vzc2lvbj8udXNlcikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBsb2dnZXIuaW5mbyhcIkF1dG8tdHJhbnNsYXRlIEJ1c2luZXNzIFByb2Nlc3M6IFN0YXJ0aW5nXCIsIHtcclxuICAgICAgYnVzaW5lc3NQcm9jZXNzSWQsXHJcbiAgICAgIHRhcmdldExhbmd1YWdlcyxcclxuICAgICAgc291cmNlTGFuZ3VhZ2UsXHJcbiAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICBoYXNFbmdsaXNoRGF0YTogISFlbmdsaXNoRGF0YSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdGFyZ2V0TGFuZ3VhZ2VzIHx8IHRhcmdldExhbmd1YWdlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm8gdGFyZ2V0IGxhbmd1YWdlcyBzcGVjaWZpZWRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1c2luZXNzUHJvY2VzcyA9IGF3YWl0IHByaXNtYS5idXNpbmVzc1Byb2Nlc3MuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBidXNpbmVzc1Byb2Nlc3NJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgIGdyYW50RGVzY3JpcHRpb246IHRydWUsXHJcbiAgICAgICAgcmV2b2tlRGVzY3JpcHRpb246IHRydWUsXHJcbiAgICAgICAgcmVjb25zZW50RGVzY3JpcHRpb246IHRydWUsXHJcbiAgICAgICAgdHJhbnNsYXRpb25zOiB0cnVlLFxyXG4gICAgICAgIHN1cHBvcnRlZExhbmd1YWdlczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghYnVzaW5lc3NQcm9jZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBcIkJ1c2luZXNzIHByb2Nlc3Mgbm90IGZvdW5kXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb25zID0gKGJ1c2luZXNzUHJvY2Vzcy50cmFuc2xhdGlvbnMgYXMgYW55KSB8fCB7fTtcclxuXHJcbiAgICAvLyBVc2UgcHJvdmlkZWQgZW5nbGlzaERhdGEgaWYgYXZhaWxhYmxlIChmb3IgbmV3bHkgYWRkZWQvZWRpdGVkIGZpZWxkcyksIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gREJcclxuICAgIGNvbnN0IHNvdXJjZVRyYW5zbGF0aW9uID0gZW5nbGlzaERhdGEgfHwgY3VycmVudFRyYW5zbGF0aW9uc1tzb3VyY2VMYW5ndWFnZV0gfHwge1xyXG4gICAgICBuYW1lOiBidXNpbmVzc1Byb2Nlc3MubmFtZSxcclxuICAgICAgZ3JhbnREZXNjcmlwdGlvbjogYnVzaW5lc3NQcm9jZXNzLmdyYW50RGVzY3JpcHRpb24sXHJcbiAgICAgIHJldm9rZURlc2NyaXB0aW9uOiBidXNpbmVzc1Byb2Nlc3MucmV2b2tlRGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgICAgcmVjb25zZW50RGVzY3JpcHRpb246IGJ1c2luZXNzUHJvY2Vzcy5yZWNvbnNlbnREZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIXNvdXJjZVRyYW5zbGF0aW9uLm5hbWUgfHwgc291cmNlVHJhbnNsYXRpb24ubmFtZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IGBTb3VyY2UgdHJhbnNsYXRpb24gKCR7c291cmNlTGFuZ3VhZ2V9KSBoYXMgbm8gbmFtZWAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmFuc2xhdGlvblJlc3VsdHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcclxuICAgIGNvbnN0IGVycm9yczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHRhcmdldExhbmcgb2YgdGFyZ2V0TGFuZ3VhZ2VzKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHRhcmdldExhbmcgPT09IHNvdXJjZUxhbmd1YWdlKSB7XHJcbiAgICAgICAgICB0cmFuc2xhdGlvblJlc3VsdHNbdGFyZ2V0TGFuZ10gPSBzb3VyY2VUcmFuc2xhdGlvbjtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZCA9IGF3YWl0IHRyYW5zbGF0ZU9iamVjdChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogc291cmNlVHJhbnNsYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgZ3JhbnREZXNjcmlwdGlvbjogc291cmNlVHJhbnNsYXRpb24uZ3JhbnREZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgICAgICAgICByZXZva2VEZXNjcmlwdGlvbjogc291cmNlVHJhbnNsYXRpb24ucmV2b2tlRGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgICAgICAgICAgcmVjb25zZW50RGVzY3JpcHRpb246IHNvdXJjZVRyYW5zbGF0aW9uLnJlY29uc2VudERlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICAgIHNvdXJjZUxhbmd1YWdlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdHJhbnNsYXRpb25SZXN1bHRzW3RhcmdldExhbmddID0gdHJhbnNsYXRlZDtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBlcnJvck1zZyA9IGBGYWlsZWQgdG8gdHJhbnNsYXRlIHRvICR7dGFyZ2V0TGFuZ31gO1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihcIkF1dG8tdHJhbnNsYXRlIEJ1c2luZXNzIFByb2Nlc3M6IExhbmd1YWdlIGZhaWxlZFwiLCB7XHJcbiAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgIHRhcmdldExhbmcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyb3JNc2cpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uUmVzdWx0cykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIHRyYW5zbGF0ZSB0byBhbnkgbGFuZ3VhZ2VcIixcclxuICAgICAgICBkZXRhaWxzOiBlcnJvcnMuam9pbihcIiwgXCIpLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1lcmdlIHdpdGggZXhpc3RpbmcgdHJhbnNsYXRpb25zXHJcbiAgICBjb25zdCB1cGRhdGVkVHJhbnNsYXRpb25zID0geyAuLi5jdXJyZW50VHJhbnNsYXRpb25zLCAuLi50cmFuc2xhdGlvblJlc3VsdHMgfTtcclxuXHJcbiAgICAvLyBVcGRhdGUgc3VwcG9ydGVkIGxhbmd1YWdlc1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gYnVzaW5lc3NQcm9jZXNzLnN1cHBvcnRlZExhbmd1YWdlcyB8fCBbXCJlblwiXTtcclxuICAgIHRhcmdldExhbmd1YWdlcy5mb3JFYWNoKChsYW5nKSA9PiB7XHJcbiAgICAgIGlmICghc3VwcG9ydGVkTGFuZ3VhZ2VzLmluY2x1ZGVzKGxhbmcpKSB7XHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLnB1c2gobGFuZyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHByaXNtYS5idXNpbmVzc1Byb2Nlc3MudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IGJ1c2luZXNzUHJvY2Vzc0lkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IHVwZGF0ZWRUcmFuc2xhdGlvbnMsXHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBCdXNpbmVzcyBQcm9jZXNzOiBDb21wbGV0ZWRcIiwge1xyXG4gICAgICBidXNpbmVzc1Byb2Nlc3NJZCxcclxuICAgICAgc3VjY2Vzc0NvdW50OiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLmxlbmd0aCxcclxuICAgICAgZXJyb3JDb3VudDogZXJyb3JzLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS9idXNpbmVzcy1wcm9jZXNzZXNcIik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgdHJhbnNsYXRpb25zOiB1cGRhdGVkVHJhbnNsYXRpb25zLFxyXG4gICAgICB0cmFuc2xhdGVkQ291bnQ6IE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uUmVzdWx0cykubGVuZ3RoLFxyXG4gICAgICBlcnJvcnM6IGVycm9ycy5sZW5ndGggPiAwID8gZXJyb3JzIDogdW5kZWZpbmVkLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbG9nZ2VyLmVycm9yKFwiQXV0by10cmFuc2xhdGUgQnVzaW5lc3MgUHJvY2VzczogRmFpbGVkXCIsIHtcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGJ1c2luZXNzUHJvY2Vzc0lkLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogXCJGYWlsZWQgdG8gYXV0by10cmFuc2xhdGUgYnVzaW5lc3MgcHJvY2Vzc1wiLFxyXG4gICAgICBkZXRhaWxzOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2UgdG8gbXVsdGlwbGUgbGFuZ3VhZ2VzXHJcbiAqIFxyXG4gKiBAcGFyYW0gY29uc2VudFB1cnBvc2VJZCAtIElEIG9mIHRoZSBjb25zZW50IHB1cnBvc2UgdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB0YXJnZXRMYW5ndWFnZXMgLSBBcnJheSBvZiBsYW5ndWFnZSBjb2RlcyB0byB0cmFuc2xhdGUgdG9cclxuICogQHBhcmFtIHNvdXJjZUxhbmd1YWdlIC0gU291cmNlIGxhbmd1YWdlIChkZWZhdWx0cyB0byAnZW4nKVxyXG4gKiBAcGFyYW0gZW5nbGlzaERhdGEgLSBPcHRpb25hbCBFbmdsaXNoIGRhdGEgZnJvbSBjb250ZXh0IChmb3IgbmV3bHkgYWRkZWQvZWRpdGVkIGZpZWxkcylcclxuICogQHJldHVybnMgU3VjY2VzcyB3aXRoIHRyYW5zbGF0aW9ucyBvciBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dG9UcmFuc2xhdGVDb25zZW50UHVycG9zZShcclxuICBjb25zZW50UHVycG9zZUlkOiBudW1iZXIsXHJcbiAgdGFyZ2V0TGFuZ3VhZ2VzOiBMYW5ndWFnZUNvZGVbXSxcclxuICBzb3VyY2VMYW5ndWFnZTogTGFuZ3VhZ2VDb2RlID0gXCJlblwiLFxyXG4gIGVuZ2xpc2hEYXRhPzoge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBudWxsO1xyXG4gIH1cclxuKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICBpZiAoIXNlc3Npb24/LnVzZXIpIHtcclxuICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2U6IFN0YXJ0aW5nXCIsIHtcclxuICAgICAgY29uc2VudFB1cnBvc2VJZCxcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VzLFxyXG4gICAgICBzb3VyY2VMYW5ndWFnZSxcclxuICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgIGhhc0VuZ2xpc2hEYXRhOiAhIWVuZ2xpc2hEYXRhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF0YXJnZXRMYW5ndWFnZXMgfHwgdGFyZ2V0TGFuZ3VhZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJObyB0YXJnZXQgbGFuZ3VhZ2VzIHNwZWNpZmllZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29uc2VudFB1cnBvc2UgPSBhd2FpdCBwcmlzbWEuY29uc2VudFB1cnBvc2UuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBjb25zZW50UHVycG9zZUlkIH0sXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIGlkOiB0cnVlLFxyXG4gICAgICAgIG5hbWU6IHRydWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHRydWUsXHJcbiAgICAgICAgdHJhbnNsYXRpb25zOiB0cnVlLFxyXG4gICAgICAgIHN1cHBvcnRlZExhbmd1YWdlczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghY29uc2VudFB1cnBvc2UpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiQ29uc2VudCBwdXJwb3NlIG5vdCBmb3VuZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudFRyYW5zbGF0aW9ucyA9IChjb25zZW50UHVycG9zZS50cmFuc2xhdGlvbnMgYXMgYW55KSB8fCB7fTtcclxuXHJcbiAgICAvLyBVc2UgcHJvdmlkZWQgZW5nbGlzaERhdGEgaWYgYXZhaWxhYmxlIChmb3IgbmV3bHkgYWRkZWQvZWRpdGVkIGZpZWxkcyksIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gREJcclxuICAgIGNvbnN0IHNvdXJjZVRyYW5zbGF0aW9uID0gZW5nbGlzaERhdGEgfHwgY3VycmVudFRyYW5zbGF0aW9uc1tzb3VyY2VMYW5ndWFnZV0gfHwge1xyXG4gICAgICBuYW1lOiBjb25zZW50UHVycG9zZS5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogY29uc2VudFB1cnBvc2UuZGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFzb3VyY2VUcmFuc2xhdGlvbi5uYW1lIHx8IHNvdXJjZVRyYW5zbGF0aW9uLm5hbWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBgU291cmNlIHRyYW5zbGF0aW9uICgke3NvdXJjZUxhbmd1YWdlfSkgaGFzIG5vIG5hbWVgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHJhbnNsYXRpb25SZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XHJcbiAgICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXJnZXRMYW5nIG9mIHRhcmdldExhbmd1YWdlcykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICh0YXJnZXRMYW5nID09PSBzb3VyY2VMYW5ndWFnZSkge1xyXG4gICAgICAgICAgdHJhbnNsYXRpb25SZXN1bHRzW3RhcmdldExhbmddID0gc291cmNlVHJhbnNsYXRpb247XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWQgPSBhd2FpdCB0cmFuc2xhdGVPYmplY3QoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IHNvdXJjZVRyYW5zbGF0aW9uLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzb3VyY2VUcmFuc2xhdGlvbi5kZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRhcmdldExhbmcsXHJcbiAgICAgICAgICBzb3VyY2VMYW5ndWFnZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRyYW5zbGF0aW9uUmVzdWx0c1t0YXJnZXRMYW5nXSA9IHRyYW5zbGF0ZWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBgRmFpbGVkIHRvIHRyYW5zbGF0ZSB0byAke3RhcmdldExhbmd9YDtcclxuICAgICAgICBsb2dnZXIuZXJyb3IoXCJBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2U6IExhbmd1YWdlIGZhaWxlZFwiLCB7XHJcbiAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgIHRhcmdldExhbmcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyb3JNc2cpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uUmVzdWx0cykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIHRyYW5zbGF0ZSB0byBhbnkgbGFuZ3VhZ2VcIixcclxuICAgICAgICBkZXRhaWxzOiBlcnJvcnMuam9pbihcIiwgXCIpLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1lcmdlIHdpdGggZXhpc3RpbmcgdHJhbnNsYXRpb25zXHJcbiAgICBjb25zdCB1cGRhdGVkVHJhbnNsYXRpb25zID0geyAuLi5jdXJyZW50VHJhbnNsYXRpb25zLCAuLi50cmFuc2xhdGlvblJlc3VsdHMgfTtcclxuXHJcbiAgICAvLyBVcGRhdGUgc3VwcG9ydGVkIGxhbmd1YWdlc1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gY29uc2VudFB1cnBvc2Uuc3VwcG9ydGVkTGFuZ3VhZ2VzIHx8IFtcImVuXCJdO1xyXG4gICAgdGFyZ2V0TGFuZ3VhZ2VzLmZvckVhY2goKGxhbmcpID0+IHtcclxuICAgICAgaWYgKCFzdXBwb3J0ZWRMYW5ndWFnZXMuaW5jbHVkZXMobGFuZykpIHtcclxuICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXMucHVzaChsYW5nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLmNvbnNlbnRQdXJwb3NlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBjb25zZW50UHVycG9zZUlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IHVwZGF0ZWRUcmFuc2xhdGlvbnMsXHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2U6IENvbXBsZXRlZFwiLCB7XHJcbiAgICAgIGNvbnNlbnRQdXJwb3NlSWQsXHJcbiAgICAgIHN1Y2Nlc3NDb3VudDogT2JqZWN0LmtleXModHJhbnNsYXRpb25SZXN1bHRzKS5sZW5ndGgsXHJcbiAgICAgIGVycm9yQ291bnQ6IGVycm9ycy5sZW5ndGgsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9jbXMvZGF0YS1maWR1Y2lhcnkvY29uc2VudC1wdXJwb3Nlc1wiKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB0cmFuc2xhdGlvbnM6IHVwZGF0ZWRUcmFuc2xhdGlvbnMsXHJcbiAgICAgIHRyYW5zbGF0ZWRDb3VudDogT2JqZWN0LmtleXModHJhbnNsYXRpb25SZXN1bHRzKS5sZW5ndGgsXHJcbiAgICAgIGVycm9yczogZXJyb3JzLmxlbmd0aCA+IDAgPyBlcnJvcnMgOiB1bmRlZmluZWQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2dnZXIuZXJyb3IoXCJBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2U6IEZhaWxlZFwiLCB7XHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBjb25zZW50UHVycG9zZUlkLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogXCJGYWlsZWQgdG8gYXV0by10cmFuc2xhdGUgY29uc2VudCBwdXJwb3NlXCIsXHJcbiAgICAgIGRldGFpbHM6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCIsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZSB0byBtdWx0aXBsZSBsYW5ndWFnZXNcclxuICogXHJcbiAqIEBwYXJhbSBwcm9jZXNzaW5nUHVycG9zZUlkIC0gSUQgb2YgdGhlIHByb2Nlc3NpbmcgcHVycG9zZSB0byB0cmFuc2xhdGVcclxuICogQHBhcmFtIHRhcmdldExhbmd1YWdlcyAtIEFycmF5IG9mIGxhbmd1YWdlIGNvZGVzIHRvIHRyYW5zbGF0ZSB0b1xyXG4gKiBAcGFyYW0gc291cmNlTGFuZ3VhZ2UgLSBTb3VyY2UgbGFuZ3VhZ2UgKGRlZmF1bHRzIHRvICdlbicpXHJcbiAqIEBwYXJhbSBlbmdsaXNoRGF0YSAtIE9wdGlvbmFsIEVuZ2xpc2ggZGF0YSBmcm9tIGNvbnRleHQgKGZvciBuZXdseSBhZGRlZC9lZGl0ZWQgZmllbGRzKVxyXG4gKiBAcmV0dXJucyBTdWNjZXNzIHdpdGggdHJhbnNsYXRpb25zIG9yIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0b1RyYW5zbGF0ZVByb2Nlc3NpbmdQdXJwb3NlKFxyXG4gIHByb2Nlc3NpbmdQdXJwb3NlSWQ6IG51bWJlcixcclxuICB0YXJnZXRMYW5ndWFnZXM6IExhbmd1YWdlQ29kZVtdLFxyXG4gIHNvdXJjZUxhbmd1YWdlOiBMYW5ndWFnZUNvZGUgPSBcImVuXCIsXHJcbiAgZW5nbGlzaERhdGE/OiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgfVxyXG4pIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gIGlmICghc2Vzc2lvbj8udXNlcikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBsb2dnZXIuaW5mbyhcIkF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZTogU3RhcnRpbmdcIiwge1xyXG4gICAgICBwcm9jZXNzaW5nUHVycG9zZUlkLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZXMsXHJcbiAgICAgIHNvdXJjZUxhbmd1YWdlLFxyXG4gICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcclxuICAgICAgaGFzRW5nbGlzaERhdGE6ICEhZW5nbGlzaERhdGEsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRhcmdldExhbmd1YWdlcyB8fCB0YXJnZXRMYW5ndWFnZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBcIk5vIHRhcmdldCBsYW5ndWFnZXMgc3BlY2lmaWVkXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9jZXNzaW5nUHVycG9zZSA9IGF3YWl0IHByaXNtYS5wcm9jZXNzaW5nUHVycG9zZS5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHByb2Nlc3NpbmdQdXJwb3NlSWQgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdHJ1ZSxcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IHRydWUsXHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwcm9jZXNzaW5nUHVycG9zZSkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJQcm9jZXNzaW5nIHB1cnBvc2Ugbm90IGZvdW5kXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb25zID0gKHByb2Nlc3NpbmdQdXJwb3NlLnRyYW5zbGF0aW9ucyBhcyBhbnkpIHx8IHt9O1xyXG5cclxuICAgIC8vIFVzZSBwcm92aWRlZCBlbmdsaXNoRGF0YSBpZiBhdmFpbGFibGUgKGZvciBuZXdseSBhZGRlZC9lZGl0ZWQgZmllbGRzKSwgb3RoZXJ3aXNlIGZhbGwgYmFjayB0byBEQlxyXG4gICAgY29uc3Qgc291cmNlVHJhbnNsYXRpb24gPSBlbmdsaXNoRGF0YSB8fCBjdXJyZW50VHJhbnNsYXRpb25zW3NvdXJjZUxhbmd1YWdlXSB8fCB7XHJcbiAgICAgIG5hbWU6IHByb2Nlc3NpbmdQdXJwb3NlLm5hbWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBwcm9jZXNzaW5nUHVycG9zZS5kZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIXNvdXJjZVRyYW5zbGF0aW9uLm5hbWUgfHwgc291cmNlVHJhbnNsYXRpb24ubmFtZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IGBTb3VyY2UgdHJhbnNsYXRpb24gKCR7c291cmNlTGFuZ3VhZ2V9KSBoYXMgbm8gbmFtZWAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmFuc2xhdGlvblJlc3VsdHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcclxuICAgIGNvbnN0IGVycm9yczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHRhcmdldExhbmcgb2YgdGFyZ2V0TGFuZ3VhZ2VzKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHRhcmdldExhbmcgPT09IHNvdXJjZUxhbmd1YWdlKSB7XHJcbiAgICAgICAgICB0cmFuc2xhdGlvblJlc3VsdHNbdGFyZ2V0TGFuZ10gPSBzb3VyY2VUcmFuc2xhdGlvbjtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZCA9IGF3YWl0IHRyYW5zbGF0ZU9iamVjdChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogc291cmNlVHJhbnNsYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHNvdXJjZVRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICAgIHNvdXJjZUxhbmd1YWdlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdHJhbnNsYXRpb25SZXN1bHRzW3RhcmdldExhbmddID0gdHJhbnNsYXRlZDtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBlcnJvck1zZyA9IGBGYWlsZWQgdG8gdHJhbnNsYXRlIHRvICR7dGFyZ2V0TGFuZ31gO1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihcIkF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZTogTGFuZ3VhZ2UgZmFpbGVkXCIsIHtcclxuICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlcnJvcnMucHVzaChlcnJvck1zZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXModHJhbnNsYXRpb25SZXN1bHRzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBlcnJvcjogXCJGYWlsZWQgdG8gdHJhbnNsYXRlIHRvIGFueSBsYW5ndWFnZVwiLFxyXG4gICAgICAgIGRldGFpbHM6IGVycm9ycy5qb2luKFwiLCBcIiksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWVyZ2Ugd2l0aCBleGlzdGluZyB0cmFuc2xhdGlvbnNcclxuICAgIGNvbnN0IHVwZGF0ZWRUcmFuc2xhdGlvbnMgPSB7IC4uLmN1cnJlbnRUcmFuc2xhdGlvbnMsIC4uLnRyYW5zbGF0aW9uUmVzdWx0cyB9O1xyXG5cclxuICAgIC8vIFVwZGF0ZSBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXHJcbiAgICBjb25zdCBzdXBwb3J0ZWRMYW5ndWFnZXMgPSBwcm9jZXNzaW5nUHVycG9zZS5zdXBwb3J0ZWRMYW5ndWFnZXMgfHwgW1wiZW5cIl07XHJcbiAgICB0YXJnZXRMYW5ndWFnZXMuZm9yRWFjaCgobGFuZykgPT4ge1xyXG4gICAgICBpZiAoIXN1cHBvcnRlZExhbmd1YWdlcy5pbmNsdWRlcyhsYW5nKSkge1xyXG4gICAgICAgIHN1cHBvcnRlZExhbmd1YWdlcy5wdXNoKGxhbmcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBwcmlzbWEucHJvY2Vzc2luZ1B1cnBvc2UudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHByb2Nlc3NpbmdQdXJwb3NlSWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRyYW5zbGF0aW9uczogdXBkYXRlZFRyYW5zbGF0aW9ucyxcclxuICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXMsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2dnZXIuaW5mbyhcIkF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZTogQ29tcGxldGVkXCIsIHtcclxuICAgICAgcHJvY2Vzc2luZ1B1cnBvc2VJZCxcclxuICAgICAgc3VjY2Vzc0NvdW50OiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLmxlbmd0aCxcclxuICAgICAgZXJyb3JDb3VudDogZXJyb3JzLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS9jb25zZW50LXB1cnBvc2VzXCIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIHRyYW5zbGF0aW9uczogdXBkYXRlZFRyYW5zbGF0aW9ucyxcclxuICAgICAgdHJhbnNsYXRlZENvdW50OiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLmxlbmd0aCxcclxuICAgICAgZXJyb3JzOiBlcnJvcnMubGVuZ3RoID4gMCA/IGVycm9ycyA6IHVuZGVmaW5lZCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGxvZ2dlci5lcnJvcihcIkF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZTogRmFpbGVkXCIsIHtcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIHByb2Nlc3NpbmdQdXJwb3NlSWQsXHJcbiAgICAgIHRhcmdldExhbmd1YWdlcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOiBcIkZhaWxlZCB0byBhdXRvLXRyYW5zbGF0ZSBwcm9jZXNzaW5nIHB1cnBvc2VcIixcclxuICAgICAgZGV0YWlsczogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlVua25vd24gZXJyb3JcIixcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFNBd2hCc0IifQ==
}),
"[project]/actions/data:377747 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"786fd342078d6b7afd66dc76df99e14c9e35cb1365":"autoTranslateProcessingPurpose"},"actions/auto-translate.ts",""] */ __turbopack_context__.s([
    "autoTranslateProcessingPurpose",
    ()=>autoTranslateProcessingPurpose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var autoTranslateProcessingPurpose = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("786fd342078d6b7afd66dc76df99e14c9e35cb1365", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "autoTranslateProcessingPurpose"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXV0by10cmFuc2xhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcbi8qKlxyXG4gKiBPcGVuIEJoYXJhdCBEaWdpdGFsIENvbnNlbnQgYnkgSURmeVxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjUgQmFsZG9yIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQgKElEZnkpXHJcbiAqIFxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBQcml2eSBQdWJsaWMgTGljZW5zZS5cclxuICogU2VlIExJQ0VOU0UubWQgZm9yIHRoZSBmdWxsIHRlcm1zIG9mIHVzZS5cclxuICogXHJcbiAqIFVuYXV0aG9yaXplZCBjb3B5aW5nLCBtb2RpZmljYXRpb24sIGRpc3RyaWJ1dGlvbiwgb3IgY29tbWVyY2lhbCB1c2VcclxuICogaXMgc3RyaWN0bHkgcHJvaGliaXRlZCB3aXRob3V0IHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbiBmcm9tIElEZnkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IExhbmd1YWdlQ29kZSB9IGZyb20gXCJAL2xpYi90eXBlcy9sYW5ndWFnZXNcIjtcclxuaW1wb3J0IHsgdHJhbnNsYXRlT2JqZWN0IH0gZnJvbSBcIkAvbGliL3NlcnZpY2VzL2dvb2dsZS10cmFuc2xhdGUtc2VydmljZVwiO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tIFwiQC9saWIvdXRpbHMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbi8qKlxyXG4gKiBBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZSB0byBtdWx0aXBsZSBsYW5ndWFnZXNcclxuICogXHJcbiAqIEBwYXJhbSB1c2VyQXR0cmlidXRlSWQgLSBJRCBvZiB0aGUgdXNlciBhdHRyaWJ1dGUgdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB0YXJnZXRMYW5ndWFnZXMgLSBBcnJheSBvZiBsYW5ndWFnZSBjb2RlcyB0byB0cmFuc2xhdGUgdG9cclxuICogQHBhcmFtIHNvdXJjZUxhbmd1YWdlIC0gU291cmNlIGxhbmd1YWdlIChkZWZhdWx0cyB0byAnZW4nKVxyXG4gKiBAcmV0dXJucyBTdWNjZXNzIHdpdGggdHJhbnNsYXRpb25zIG9yIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0b1RyYW5zbGF0ZVVzZXJBdHRyaWJ1dGUoXHJcbiAgdXNlckF0dHJpYnV0ZUlkOiBudW1iZXIsXHJcbiAgdGFyZ2V0TGFuZ3VhZ2VzOiBMYW5ndWFnZUNvZGVbXSxcclxuICBzb3VyY2VMYW5ndWFnZTogTGFuZ3VhZ2VDb2RlID0gXCJlblwiXHJcbikge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGxvZ2dlci5pbmZvKFwiQXV0by10cmFuc2xhdGUgVXNlciBBdHRyaWJ1dGU6IFN0YXJ0aW5nXCIsIHtcclxuICAgICAgdXNlckF0dHJpYnV0ZUlkLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZXMsXHJcbiAgICAgIHNvdXJjZUxhbmd1YWdlLFxyXG4gICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIGlucHV0c1xyXG4gICAgaWYgKCF0YXJnZXRMYW5ndWFnZXMgfHwgdGFyZ2V0TGFuZ3VhZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJObyB0YXJnZXQgbGFuZ3VhZ2VzIHNwZWNpZmllZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmV0Y2ggdXNlciBhdHRyaWJ1dGVcclxuICAgIGNvbnN0IHVzZXJBdHRyaWJ1dGUgPSBhd2FpdCBwcmlzbWEudXNlckF0dHJpYnV0ZS5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHVzZXJBdHRyaWJ1dGVJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uczogdHJ1ZSxcclxuICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXVzZXJBdHRyaWJ1dGUpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiVXNlciBhdHRyaWJ1dGUgbm90IGZvdW5kXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgc291cmNlIHRyYW5zbGF0aW9uIChFbmdsaXNoIGJ5IGRlZmF1bHQpXHJcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb25zID0gKHVzZXJBdHRyaWJ1dGUudHJhbnNsYXRpb25zIGFzIGFueSkgfHwge307XHJcbiAgICBjb25zdCBzb3VyY2VUcmFuc2xhdGlvbiA9IGN1cnJlbnRUcmFuc2xhdGlvbnNbc291cmNlTGFuZ3VhZ2VdIHx8IHtcclxuICAgICAgbmFtZTogdXNlckF0dHJpYnV0ZS5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogbnVsbCxcclxuICAgICAgcGxhY2Vob2xkZXI6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHNvdXJjZSBoYXMgY29udGVudFxyXG4gICAgaWYgKCFzb3VyY2VUcmFuc2xhdGlvbi5uYW1lIHx8IHNvdXJjZVRyYW5zbGF0aW9uLm5hbWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBgU291cmNlIHRyYW5zbGF0aW9uICgke3NvdXJjZUxhbmd1YWdlfSkgaGFzIG5vIG5hbWVgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZTogVHJhbnNsYXRpbmcgZmllbGRzXCIsIHtcclxuICAgICAgdXNlckF0dHJpYnV0ZUlkLFxyXG4gICAgICBzb3VyY2VMYW5ndWFnZSxcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VzLFxyXG4gICAgICBmaWVsZHM6IE9iamVjdC5rZXlzKHNvdXJjZVRyYW5zbGF0aW9uKSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRyYW5zbGF0ZSB0byBlYWNoIHRhcmdldCBsYW5ndWFnZVxyXG4gICAgY29uc3QgdHJhbnNsYXRpb25SZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XHJcbiAgICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXJnZXRMYW5nIG9mIHRhcmdldExhbmd1YWdlcykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFNraXAgaWYgc291cmNlIGFuZCB0YXJnZXQgYXJlIHRoZSBzYW1lXHJcbiAgICAgICAgaWYgKHRhcmdldExhbmcgPT09IHNvdXJjZUxhbmd1YWdlKSB7XHJcbiAgICAgICAgICB0cmFuc2xhdGlvblJlc3VsdHNbdGFyZ2V0TGFuZ10gPSBzb3VyY2VUcmFuc2xhdGlvbjtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRoZSBvYmplY3RcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVkID0gYXdhaXQgdHJhbnNsYXRlT2JqZWN0KFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBzb3VyY2VUcmFuc2xhdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc291cmNlVHJhbnNsYXRpb24uZGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHNvdXJjZVRyYW5zbGF0aW9uLnBsYWNlaG9sZGVyIHx8IG51bGwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICAgIHNvdXJjZUxhbmd1YWdlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdHJhbnNsYXRpb25SZXN1bHRzW3RhcmdldExhbmddID0gdHJhbnNsYXRlZDtcclxuXHJcbiAgICAgICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZTogTGFuZ3VhZ2UgY29tcGxldGVkXCIsIHtcclxuICAgICAgICAgIHVzZXJBdHRyaWJ1dGVJZCxcclxuICAgICAgICAgIGxhbmd1YWdlOiB0YXJnZXRMYW5nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gYEZhaWxlZCB0byB0cmFuc2xhdGUgdG8gJHt0YXJnZXRMYW5nfWA7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyb3JNc2cpO1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihcIkF1dG8tdHJhbnNsYXRlIFVzZXIgQXR0cmlidXRlOiBMYW5ndWFnZSBmYWlsZWRcIiwge1xyXG4gICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgICB1c2VyQXR0cmlidXRlSWQsXHJcbiAgICAgICAgICBsYW5ndWFnZTogdGFyZ2V0TGFuZyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIGFsbCB0cmFuc2xhdGlvbnMgZmFpbGVkLCByZXR1cm4gZXJyb3JcclxuICAgIGlmIChPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJBbGwgdHJhbnNsYXRpb25zIGZhaWxlZFwiLCBkZXRhaWxzOiBlcnJvcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXJnZSB3aXRoIGV4aXN0aW5nIHRyYW5zbGF0aW9ucyAoZG9uJ3Qgb3ZlcndyaXRlIG1hbnVhbGx5IGVkaXRlZCBvbmVzIHVubGVzcyBleHBsaWNpdGx5IHJlcXVlc3RlZClcclxuICAgIGNvbnN0IHVwZGF0ZWRUcmFuc2xhdGlvbnMgPSB7XHJcbiAgICAgIC4uLmN1cnJlbnRUcmFuc2xhdGlvbnMsXHJcbiAgICAgIC4uLnRyYW5zbGF0aW9uUmVzdWx0cyxcclxuICAgIH07XHJcblxyXG4gICAgLy8gVXBkYXRlIHN1cHBvcnRlZCBsYW5ndWFnZXNcclxuICAgIGNvbnN0IG5ld0xhbmd1YWdlcyA9IE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uUmVzdWx0cykgYXMgTGFuZ3VhZ2VDb2RlW107XHJcbiAgICBjb25zdCBleGlzdGluZ0xhbmd1YWdlcyA9IHVzZXJBdHRyaWJ1dGUuc3VwcG9ydGVkTGFuZ3VhZ2VzIHx8IFtdO1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gQXJyYXkuZnJvbShcclxuICAgICAgbmV3IFNldChbLi4uZXhpc3RpbmdMYW5ndWFnZXMsIC4uLm5ld0xhbmd1YWdlc10pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNhdmUgdG8gZGF0YWJhc2VcclxuICAgIGF3YWl0IHByaXNtYS51c2VyQXR0cmlidXRlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB1c2VyQXR0cmlidXRlSWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRyYW5zbGF0aW9uczogdXBkYXRlZFRyYW5zbGF0aW9ucyxcclxuICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXMsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2dnZXIuaW5mbyhcIkF1dG8tdHJhbnNsYXRlIFVzZXIgQXR0cmlidXRlOiBDb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsIHtcclxuICAgICAgdXNlckF0dHJpYnV0ZUlkLFxyXG4gICAgICB0cmFuc2xhdGVkTGFuZ3VhZ2VzOiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLFxyXG4gICAgICB0b3RhbExhbmd1YWdlczogc3VwcG9ydGVkTGFuZ3VhZ2VzLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJldmFsaWRhdGUgY2FjaGVcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS91c2VyLWF0dHJpYnV0ZXNcIik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgdHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvblJlc3VsdHMsXHJcbiAgICAgIHRyYW5zbGF0ZWRDb3VudDogT2JqZWN0LmtleXModHJhbnNsYXRpb25SZXN1bHRzKS5sZW5ndGgsXHJcbiAgICAgIGVycm9yczogZXJyb3JzLmxlbmd0aCA+IDAgPyBlcnJvcnMgOiB1bmRlZmluZWQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2dnZXIuZXJyb3IoXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZTogRmFpbGVkXCIsIHtcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIHVzZXJBdHRyaWJ1dGVJZCxcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIGF1dG8tdHJhbnNsYXRlXCIsXHJcbiAgICAgIGRldGFpbHM6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCIsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEF1dG8tdHJhbnNsYXRlIHNwZWNpZmljIGZpZWxkcyBvZiBhIFVzZXIgQXR0cmlidXRlIHRvIGEgc2luZ2xlIGxhbmd1YWdlXHJcbiAqIFVzZWZ1bCBmb3IgcmV0cnlpbmcgZmFpbGVkIHRyYW5zbGF0aW9ucyBvciB0cmFuc2xhdGluZyBzcGVjaWZpYyBmaWVsZHNcclxuICogXHJcbiAqIEBwYXJhbSB1c2VyQXR0cmlidXRlSWQgLSBJRCBvZiB0aGUgdXNlciBhdHRyaWJ1dGVcclxuICogQHBhcmFtIHRhcmdldExhbmd1YWdlIC0gU2luZ2xlIHRhcmdldCBsYW5ndWFnZSBjb2RlXHJcbiAqIEBwYXJhbSBmaWVsZHMgLSBPYmplY3Qgd2l0aCBmaWVsZHMgdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSBzb3VyY2VMYW5ndWFnZSAtIFNvdXJjZSBsYW5ndWFnZSAoZGVmYXVsdHMgdG8gJ2VuJylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRvVHJhbnNsYXRlVXNlckF0dHJpYnV0ZUZpZWxkcyhcclxuICB1c2VyQXR0cmlidXRlSWQ6IG51bWJlcixcclxuICB0YXJnZXRMYW5ndWFnZTogTGFuZ3VhZ2VDb2RlLFxyXG4gIGZpZWxkczoge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nIHwgbnVsbDtcclxuICB9LFxyXG4gIHNvdXJjZUxhbmd1YWdlOiBMYW5ndWFnZUNvZGUgPSBcImVuXCJcclxuKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICBpZiAoIXNlc3Npb24/LnVzZXIpIHtcclxuICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gVmFsaWRhdGUgdXNlciBhdHRyaWJ1dGUgZXhpc3RzXHJcbiAgICBjb25zdCB1c2VyQXR0cmlidXRlID0gYXdhaXQgcHJpc21hLnVzZXJBdHRyaWJ1dGUuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB1c2VyQXR0cmlidXRlSWQgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgdHJhbnNsYXRpb25zOiB0cnVlLFxyXG4gICAgICAgIHN1cHBvcnRlZExhbmd1YWdlczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlckF0dHJpYnV0ZSkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJVc2VyIGF0dHJpYnV0ZSBub3QgZm91bmRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRyYW5zbGF0ZSB0aGUgcHJvdmlkZWQgZmllbGRzXHJcbiAgICBjb25zdCB0cmFuc2xhdGVkID0gYXdhaXQgdHJhbnNsYXRlT2JqZWN0KGZpZWxkcywgdGFyZ2V0TGFuZ3VhZ2UsIHNvdXJjZUxhbmd1YWdlKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgdHJhbnNsYXRpb25zXHJcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb25zID0gKHVzZXJBdHRyaWJ1dGUudHJhbnNsYXRpb25zIGFzIGFueSkgfHwge307XHJcbiAgICBjdXJyZW50VHJhbnNsYXRpb25zW3RhcmdldExhbmd1YWdlXSA9IHtcclxuICAgICAgLi4uKGN1cnJlbnRUcmFuc2xhdGlvbnNbdGFyZ2V0TGFuZ3VhZ2VdIHx8IHt9KSxcclxuICAgICAgLi4udHJhbnNsYXRlZCxcclxuICAgIH07XHJcblxyXG4gICAgLy8gVXBkYXRlIHN1cHBvcnRlZCBsYW5ndWFnZXNcclxuICAgIGNvbnN0IHN1cHBvcnRlZExhbmd1YWdlcyA9IHVzZXJBdHRyaWJ1dGUuc3VwcG9ydGVkTGFuZ3VhZ2VzIHx8IFtdO1xyXG4gICAgaWYgKCFzdXBwb3J0ZWRMYW5ndWFnZXMuaW5jbHVkZXModGFyZ2V0TGFuZ3VhZ2UpKSB7XHJcbiAgICAgIHN1cHBvcnRlZExhbmd1YWdlcy5wdXNoKHRhcmdldExhbmd1YWdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTYXZlIHRvIGRhdGFiYXNlXHJcbiAgICBhd2FpdCBwcmlzbWEudXNlckF0dHJpYnV0ZS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogdXNlckF0dHJpYnV0ZUlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IGN1cnJlbnRUcmFuc2xhdGlvbnMsXHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZSBGaWVsZHM6IENvbXBsZXRlZFwiLCB7XHJcbiAgICAgIHVzZXJBdHRyaWJ1dGVJZCxcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2UsXHJcbiAgICAgIGZpZWxkczogT2JqZWN0LmtleXMoZmllbGRzKSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS91c2VyLWF0dHJpYnV0ZXNcIik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgdHJhbnNsYXRpb246IHRyYW5zbGF0ZWQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2dnZXIuZXJyb3IoXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZSBGaWVsZHM6IEZhaWxlZFwiLCB7XHJcbiAgICAgIGVycm9yLFxyXG4gICAgICB1c2VyQXR0cmlidXRlSWQsXHJcbiAgICAgIHRhcmdldExhbmd1YWdlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIGF1dG8tdHJhbnNsYXRlIGZpZWxkc1wiLFxyXG4gICAgICBkZXRhaWxzOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2xhdGUgdGV4dCB0byBtdWx0aXBsZSBsYW5ndWFnZXMgKGZvciBjcmVhdGUgZm9ybXMpXHJcbiAqIFRoaXMgYWN0aW9uIHRyYW5zbGF0ZXMgdGV4dCB3aXRob3V0IHNhdmluZyB0byBkYXRhYmFzZVxyXG4gKiBcclxuICogQHBhcmFtIHRleHQgLSBUZXh0IHRvIHRyYW5zbGF0ZVxyXG4gKiBAcGFyYW0gdGFyZ2V0TGFuZ3VhZ2VzIC0gQXJyYXkgb2YgbGFuZ3VhZ2UgY29kZXMgdG8gdHJhbnNsYXRlIHRvXHJcbiAqIEBwYXJhbSBzb3VyY2VMYW5ndWFnZSAtIFNvdXJjZSBsYW5ndWFnZSAoZGVmYXVsdHMgdG8gJ2VuJylcclxuICogQHJldHVybnMgU3VjY2VzcyB3aXRoIHRyYW5zbGF0aW9ucyBvciBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYW5zbGF0ZVRleHRUb0xhbmd1YWdlcyhcclxuICB0ZXh0OiBzdHJpbmcsXHJcbiAgdGFyZ2V0TGFuZ3VhZ2VzOiBMYW5ndWFnZUNvZGVbXSxcclxuICBzb3VyY2VMYW5ndWFnZTogTGFuZ3VhZ2VDb2RlID0gXCJlblwiXHJcbikge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGxvZ2dlci5pbmZvKFwiVHJhbnNsYXRlIFRleHQ6IFN0YXJ0aW5nXCIsIHtcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VzLFxyXG4gICAgICBzb3VyY2VMYW5ndWFnZSxcclxuICAgICAgdGV4dExlbmd0aDogdGV4dC5sZW5ndGgsXHJcbiAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRzXHJcbiAgICBpZiAoIXRleHQgfHwgdGV4dC50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm8gdGV4dCBwcm92aWRlZCBmb3IgdHJhbnNsYXRpb25cIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGFyZ2V0TGFuZ3VhZ2VzIHx8IHRhcmdldExhbmd1YWdlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm8gdGFyZ2V0IGxhbmd1YWdlcyBzcGVjaWZpZWRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEltcG9ydCB0cmFuc2xhdGlvbiBzZXJ2aWNlXHJcbiAgICBjb25zdCB7IHRyYW5zbGF0ZVRleHQgfSA9IGF3YWl0IGltcG9ydChcIkAvbGliL3NlcnZpY2VzL2dvb2dsZS10cmFuc2xhdGUtc2VydmljZVwiKTtcclxuXHJcbiAgICAvLyBUcmFuc2xhdGUgdG8gZWFjaCB0YXJnZXQgbGFuZ3VhZ2VcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG4gICAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgdGFyZ2V0TGFuZyBvZiB0YXJnZXRMYW5ndWFnZXMpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBTa2lwIGlmIHNvdXJjZSBhbmQgdGFyZ2V0IGFyZSB0aGUgc2FtZVxyXG4gICAgICAgIGlmICh0YXJnZXRMYW5nID09PSBzb3VyY2VMYW5ndWFnZSkge1xyXG4gICAgICAgICAgdHJhbnNsYXRpb25zW3RhcmdldExhbmddID0gdGV4dDtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRoZSB0ZXh0XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZCA9IGF3YWl0IHRyYW5zbGF0ZVRleHQodGV4dCwgdGFyZ2V0TGFuZywgc291cmNlTGFuZ3VhZ2UpO1xyXG4gICAgICAgIHRyYW5zbGF0aW9uc1t0YXJnZXRMYW5nXSA9IHRyYW5zbGF0ZWQ7XHJcblxyXG4gICAgICAgIGxvZ2dlci5pbmZvKFwiVHJhbnNsYXRlIFRleHQ6IExhbmd1YWdlIGNvbXBsZXRlZFwiLCB7XHJcbiAgICAgICAgICB0YXJnZXRMYW5nLFxyXG4gICAgICAgICAgdGV4dExlbmd0aDogdHJhbnNsYXRlZC5sZW5ndGgsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBgRmFpbGVkIHRvIHRyYW5zbGF0ZSB0byAke3RhcmdldExhbmd9YDtcclxuICAgICAgICBsb2dnZXIuZXJyb3IoXCJUcmFuc2xhdGUgVGV4dDogTGFuZ3VhZ2UgZmFpbGVkXCIsIHtcclxuICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlcnJvcnMucHVzaChlcnJvck1zZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXModHJhbnNsYXRpb25zKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBlcnJvcjogXCJGYWlsZWQgdG8gdHJhbnNsYXRlIHRvIGFueSBsYW5ndWFnZVwiLFxyXG4gICAgICAgIGRldGFpbHM6IGVycm9ycy5qb2luKFwiLCBcIiksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJUcmFuc2xhdGUgVGV4dDogQ29tcGxldGVkXCIsIHtcclxuICAgICAgc3VjY2Vzc0NvdW50OiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvbnMpLmxlbmd0aCxcclxuICAgICAgZXJyb3JDb3VudDogZXJyb3JzLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIHRyYW5zbGF0aW9ucyxcclxuICAgICAgZXJyb3JzOiBlcnJvcnMubGVuZ3RoID4gMCA/IGVycm9ycyA6IHVuZGVmaW5lZCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGxvZ2dlci5lcnJvcihcIlRyYW5zbGF0ZSBUZXh0OiBGYWlsZWRcIiwge1xyXG4gICAgICBlcnJvcixcclxuICAgICAgc291cmNlTGFuZ3VhZ2UsXHJcbiAgICAgIHRhcmdldExhbmd1YWdlcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOiBcIkZhaWxlZCB0byB0cmFuc2xhdGUgdGV4dFwiLFxyXG4gICAgICBkZXRhaWxzOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBdXRvLXRyYW5zbGF0ZSBCdXNpbmVzcyBQcm9jZXNzIHRvIG11bHRpcGxlIGxhbmd1YWdlc1xyXG4gKiBcclxuICogQHBhcmFtIGJ1c2luZXNzUHJvY2Vzc0lkIC0gSUQgb2YgdGhlIGJ1c2luZXNzIHByb2Nlc3MgdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB0YXJnZXRMYW5ndWFnZXMgLSBBcnJheSBvZiBsYW5ndWFnZSBjb2RlcyB0byB0cmFuc2xhdGUgdG9cclxuICogQHBhcmFtIHNvdXJjZUxhbmd1YWdlIC0gU291cmNlIGxhbmd1YWdlIChkZWZhdWx0cyB0byAnZW4nKVxyXG4gKiBAcGFyYW0gZW5nbGlzaERhdGEgLSBPcHRpb25hbCBFbmdsaXNoIGRhdGEgZnJvbSBjb250ZXh0IChmb3IgbmV3bHkgYWRkZWQvZWRpdGVkIGZpZWxkcylcclxuICogQHJldHVybnMgU3VjY2VzcyB3aXRoIHRyYW5zbGF0aW9ucyBvciBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dG9UcmFuc2xhdGVCdXNpbmVzc1Byb2Nlc3MoXHJcbiAgYnVzaW5lc3NQcm9jZXNzSWQ6IG51bWJlcixcclxuICB0YXJnZXRMYW5ndWFnZXM6IExhbmd1YWdlQ29kZVtdLFxyXG4gIHNvdXJjZUxhbmd1YWdlOiBMYW5ndWFnZUNvZGUgPSBcImVuXCIsXHJcbiAgZW5nbGlzaERhdGE/OiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBncmFudERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICByZXZva2VEZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgICByZWNvbnNlbnREZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgfVxyXG4pIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gIGlmICghc2Vzc2lvbj8udXNlcikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBsb2dnZXIuaW5mbyhcIkF1dG8tdHJhbnNsYXRlIEJ1c2luZXNzIFByb2Nlc3M6IFN0YXJ0aW5nXCIsIHtcclxuICAgICAgYnVzaW5lc3NQcm9jZXNzSWQsXHJcbiAgICAgIHRhcmdldExhbmd1YWdlcyxcclxuICAgICAgc291cmNlTGFuZ3VhZ2UsXHJcbiAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICBoYXNFbmdsaXNoRGF0YTogISFlbmdsaXNoRGF0YSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdGFyZ2V0TGFuZ3VhZ2VzIHx8IHRhcmdldExhbmd1YWdlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm8gdGFyZ2V0IGxhbmd1YWdlcyBzcGVjaWZpZWRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1c2luZXNzUHJvY2VzcyA9IGF3YWl0IHByaXNtYS5idXNpbmVzc1Byb2Nlc3MuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBidXNpbmVzc1Byb2Nlc3NJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgIGdyYW50RGVzY3JpcHRpb246IHRydWUsXHJcbiAgICAgICAgcmV2b2tlRGVzY3JpcHRpb246IHRydWUsXHJcbiAgICAgICAgcmVjb25zZW50RGVzY3JpcHRpb246IHRydWUsXHJcbiAgICAgICAgdHJhbnNsYXRpb25zOiB0cnVlLFxyXG4gICAgICAgIHN1cHBvcnRlZExhbmd1YWdlczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghYnVzaW5lc3NQcm9jZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBcIkJ1c2luZXNzIHByb2Nlc3Mgbm90IGZvdW5kXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb25zID0gKGJ1c2luZXNzUHJvY2Vzcy50cmFuc2xhdGlvbnMgYXMgYW55KSB8fCB7fTtcclxuXHJcbiAgICAvLyBVc2UgcHJvdmlkZWQgZW5nbGlzaERhdGEgaWYgYXZhaWxhYmxlIChmb3IgbmV3bHkgYWRkZWQvZWRpdGVkIGZpZWxkcyksIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gREJcclxuICAgIGNvbnN0IHNvdXJjZVRyYW5zbGF0aW9uID0gZW5nbGlzaERhdGEgfHwgY3VycmVudFRyYW5zbGF0aW9uc1tzb3VyY2VMYW5ndWFnZV0gfHwge1xyXG4gICAgICBuYW1lOiBidXNpbmVzc1Byb2Nlc3MubmFtZSxcclxuICAgICAgZ3JhbnREZXNjcmlwdGlvbjogYnVzaW5lc3NQcm9jZXNzLmdyYW50RGVzY3JpcHRpb24sXHJcbiAgICAgIHJldm9rZURlc2NyaXB0aW9uOiBidXNpbmVzc1Byb2Nlc3MucmV2b2tlRGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgICAgcmVjb25zZW50RGVzY3JpcHRpb246IGJ1c2luZXNzUHJvY2Vzcy5yZWNvbnNlbnREZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIXNvdXJjZVRyYW5zbGF0aW9uLm5hbWUgfHwgc291cmNlVHJhbnNsYXRpb24ubmFtZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IGBTb3VyY2UgdHJhbnNsYXRpb24gKCR7c291cmNlTGFuZ3VhZ2V9KSBoYXMgbm8gbmFtZWAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmFuc2xhdGlvblJlc3VsdHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcclxuICAgIGNvbnN0IGVycm9yczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHRhcmdldExhbmcgb2YgdGFyZ2V0TGFuZ3VhZ2VzKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHRhcmdldExhbmcgPT09IHNvdXJjZUxhbmd1YWdlKSB7XHJcbiAgICAgICAgICB0cmFuc2xhdGlvblJlc3VsdHNbdGFyZ2V0TGFuZ10gPSBzb3VyY2VUcmFuc2xhdGlvbjtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZCA9IGF3YWl0IHRyYW5zbGF0ZU9iamVjdChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogc291cmNlVHJhbnNsYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgZ3JhbnREZXNjcmlwdGlvbjogc291cmNlVHJhbnNsYXRpb24uZ3JhbnREZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgICAgICAgICByZXZva2VEZXNjcmlwdGlvbjogc291cmNlVHJhbnNsYXRpb24ucmV2b2tlRGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgICAgICAgICAgcmVjb25zZW50RGVzY3JpcHRpb246IHNvdXJjZVRyYW5zbGF0aW9uLnJlY29uc2VudERlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICAgIHNvdXJjZUxhbmd1YWdlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdHJhbnNsYXRpb25SZXN1bHRzW3RhcmdldExhbmddID0gdHJhbnNsYXRlZDtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBlcnJvck1zZyA9IGBGYWlsZWQgdG8gdHJhbnNsYXRlIHRvICR7dGFyZ2V0TGFuZ31gO1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihcIkF1dG8tdHJhbnNsYXRlIEJ1c2luZXNzIFByb2Nlc3M6IExhbmd1YWdlIGZhaWxlZFwiLCB7XHJcbiAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgIHRhcmdldExhbmcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyb3JNc2cpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uUmVzdWx0cykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIHRyYW5zbGF0ZSB0byBhbnkgbGFuZ3VhZ2VcIixcclxuICAgICAgICBkZXRhaWxzOiBlcnJvcnMuam9pbihcIiwgXCIpLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1lcmdlIHdpdGggZXhpc3RpbmcgdHJhbnNsYXRpb25zXHJcbiAgICBjb25zdCB1cGRhdGVkVHJhbnNsYXRpb25zID0geyAuLi5jdXJyZW50VHJhbnNsYXRpb25zLCAuLi50cmFuc2xhdGlvblJlc3VsdHMgfTtcclxuXHJcbiAgICAvLyBVcGRhdGUgc3VwcG9ydGVkIGxhbmd1YWdlc1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gYnVzaW5lc3NQcm9jZXNzLnN1cHBvcnRlZExhbmd1YWdlcyB8fCBbXCJlblwiXTtcclxuICAgIHRhcmdldExhbmd1YWdlcy5mb3JFYWNoKChsYW5nKSA9PiB7XHJcbiAgICAgIGlmICghc3VwcG9ydGVkTGFuZ3VhZ2VzLmluY2x1ZGVzKGxhbmcpKSB7XHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLnB1c2gobGFuZyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHByaXNtYS5idXNpbmVzc1Byb2Nlc3MudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IGJ1c2luZXNzUHJvY2Vzc0lkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IHVwZGF0ZWRUcmFuc2xhdGlvbnMsXHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBCdXNpbmVzcyBQcm9jZXNzOiBDb21wbGV0ZWRcIiwge1xyXG4gICAgICBidXNpbmVzc1Byb2Nlc3NJZCxcclxuICAgICAgc3VjY2Vzc0NvdW50OiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLmxlbmd0aCxcclxuICAgICAgZXJyb3JDb3VudDogZXJyb3JzLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS9idXNpbmVzcy1wcm9jZXNzZXNcIik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgdHJhbnNsYXRpb25zOiB1cGRhdGVkVHJhbnNsYXRpb25zLFxyXG4gICAgICB0cmFuc2xhdGVkQ291bnQ6IE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uUmVzdWx0cykubGVuZ3RoLFxyXG4gICAgICBlcnJvcnM6IGVycm9ycy5sZW5ndGggPiAwID8gZXJyb3JzIDogdW5kZWZpbmVkLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbG9nZ2VyLmVycm9yKFwiQXV0by10cmFuc2xhdGUgQnVzaW5lc3MgUHJvY2VzczogRmFpbGVkXCIsIHtcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGJ1c2luZXNzUHJvY2Vzc0lkLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogXCJGYWlsZWQgdG8gYXV0by10cmFuc2xhdGUgYnVzaW5lc3MgcHJvY2Vzc1wiLFxyXG4gICAgICBkZXRhaWxzOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2UgdG8gbXVsdGlwbGUgbGFuZ3VhZ2VzXHJcbiAqIFxyXG4gKiBAcGFyYW0gY29uc2VudFB1cnBvc2VJZCAtIElEIG9mIHRoZSBjb25zZW50IHB1cnBvc2UgdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB0YXJnZXRMYW5ndWFnZXMgLSBBcnJheSBvZiBsYW5ndWFnZSBjb2RlcyB0byB0cmFuc2xhdGUgdG9cclxuICogQHBhcmFtIHNvdXJjZUxhbmd1YWdlIC0gU291cmNlIGxhbmd1YWdlIChkZWZhdWx0cyB0byAnZW4nKVxyXG4gKiBAcGFyYW0gZW5nbGlzaERhdGEgLSBPcHRpb25hbCBFbmdsaXNoIGRhdGEgZnJvbSBjb250ZXh0IChmb3IgbmV3bHkgYWRkZWQvZWRpdGVkIGZpZWxkcylcclxuICogQHJldHVybnMgU3VjY2VzcyB3aXRoIHRyYW5zbGF0aW9ucyBvciBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dG9UcmFuc2xhdGVDb25zZW50UHVycG9zZShcclxuICBjb25zZW50UHVycG9zZUlkOiBudW1iZXIsXHJcbiAgdGFyZ2V0TGFuZ3VhZ2VzOiBMYW5ndWFnZUNvZGVbXSxcclxuICBzb3VyY2VMYW5ndWFnZTogTGFuZ3VhZ2VDb2RlID0gXCJlblwiLFxyXG4gIGVuZ2xpc2hEYXRhPzoge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBudWxsO1xyXG4gIH1cclxuKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICBpZiAoIXNlc3Npb24/LnVzZXIpIHtcclxuICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2U6IFN0YXJ0aW5nXCIsIHtcclxuICAgICAgY29uc2VudFB1cnBvc2VJZCxcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VzLFxyXG4gICAgICBzb3VyY2VMYW5ndWFnZSxcclxuICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgIGhhc0VuZ2xpc2hEYXRhOiAhIWVuZ2xpc2hEYXRhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF0YXJnZXRMYW5ndWFnZXMgfHwgdGFyZ2V0TGFuZ3VhZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJObyB0YXJnZXQgbGFuZ3VhZ2VzIHNwZWNpZmllZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29uc2VudFB1cnBvc2UgPSBhd2FpdCBwcmlzbWEuY29uc2VudFB1cnBvc2UuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBjb25zZW50UHVycG9zZUlkIH0sXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIGlkOiB0cnVlLFxyXG4gICAgICAgIG5hbWU6IHRydWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHRydWUsXHJcbiAgICAgICAgdHJhbnNsYXRpb25zOiB0cnVlLFxyXG4gICAgICAgIHN1cHBvcnRlZExhbmd1YWdlczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghY29uc2VudFB1cnBvc2UpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiQ29uc2VudCBwdXJwb3NlIG5vdCBmb3VuZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudFRyYW5zbGF0aW9ucyA9IChjb25zZW50UHVycG9zZS50cmFuc2xhdGlvbnMgYXMgYW55KSB8fCB7fTtcclxuXHJcbiAgICAvLyBVc2UgcHJvdmlkZWQgZW5nbGlzaERhdGEgaWYgYXZhaWxhYmxlIChmb3IgbmV3bHkgYWRkZWQvZWRpdGVkIGZpZWxkcyksIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gREJcclxuICAgIGNvbnN0IHNvdXJjZVRyYW5zbGF0aW9uID0gZW5nbGlzaERhdGEgfHwgY3VycmVudFRyYW5zbGF0aW9uc1tzb3VyY2VMYW5ndWFnZV0gfHwge1xyXG4gICAgICBuYW1lOiBjb25zZW50UHVycG9zZS5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogY29uc2VudFB1cnBvc2UuZGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFzb3VyY2VUcmFuc2xhdGlvbi5uYW1lIHx8IHNvdXJjZVRyYW5zbGF0aW9uLm5hbWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBgU291cmNlIHRyYW5zbGF0aW9uICgke3NvdXJjZUxhbmd1YWdlfSkgaGFzIG5vIG5hbWVgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHJhbnNsYXRpb25SZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XHJcbiAgICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXJnZXRMYW5nIG9mIHRhcmdldExhbmd1YWdlcykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICh0YXJnZXRMYW5nID09PSBzb3VyY2VMYW5ndWFnZSkge1xyXG4gICAgICAgICAgdHJhbnNsYXRpb25SZXN1bHRzW3RhcmdldExhbmddID0gc291cmNlVHJhbnNsYXRpb247XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWQgPSBhd2FpdCB0cmFuc2xhdGVPYmplY3QoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IHNvdXJjZVRyYW5zbGF0aW9uLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzb3VyY2VUcmFuc2xhdGlvbi5kZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRhcmdldExhbmcsXHJcbiAgICAgICAgICBzb3VyY2VMYW5ndWFnZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRyYW5zbGF0aW9uUmVzdWx0c1t0YXJnZXRMYW5nXSA9IHRyYW5zbGF0ZWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBgRmFpbGVkIHRvIHRyYW5zbGF0ZSB0byAke3RhcmdldExhbmd9YDtcclxuICAgICAgICBsb2dnZXIuZXJyb3IoXCJBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2U6IExhbmd1YWdlIGZhaWxlZFwiLCB7XHJcbiAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgIHRhcmdldExhbmcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyb3JNc2cpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uUmVzdWx0cykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIHRyYW5zbGF0ZSB0byBhbnkgbGFuZ3VhZ2VcIixcclxuICAgICAgICBkZXRhaWxzOiBlcnJvcnMuam9pbihcIiwgXCIpLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1lcmdlIHdpdGggZXhpc3RpbmcgdHJhbnNsYXRpb25zXHJcbiAgICBjb25zdCB1cGRhdGVkVHJhbnNsYXRpb25zID0geyAuLi5jdXJyZW50VHJhbnNsYXRpb25zLCAuLi50cmFuc2xhdGlvblJlc3VsdHMgfTtcclxuXHJcbiAgICAvLyBVcGRhdGUgc3VwcG9ydGVkIGxhbmd1YWdlc1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gY29uc2VudFB1cnBvc2Uuc3VwcG9ydGVkTGFuZ3VhZ2VzIHx8IFtcImVuXCJdO1xyXG4gICAgdGFyZ2V0TGFuZ3VhZ2VzLmZvckVhY2goKGxhbmcpID0+IHtcclxuICAgICAgaWYgKCFzdXBwb3J0ZWRMYW5ndWFnZXMuaW5jbHVkZXMobGFuZykpIHtcclxuICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXMucHVzaChsYW5nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLmNvbnNlbnRQdXJwb3NlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBjb25zZW50UHVycG9zZUlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IHVwZGF0ZWRUcmFuc2xhdGlvbnMsXHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2U6IENvbXBsZXRlZFwiLCB7XHJcbiAgICAgIGNvbnNlbnRQdXJwb3NlSWQsXHJcbiAgICAgIHN1Y2Nlc3NDb3VudDogT2JqZWN0LmtleXModHJhbnNsYXRpb25SZXN1bHRzKS5sZW5ndGgsXHJcbiAgICAgIGVycm9yQ291bnQ6IGVycm9ycy5sZW5ndGgsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9jbXMvZGF0YS1maWR1Y2lhcnkvY29uc2VudC1wdXJwb3Nlc1wiKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB0cmFuc2xhdGlvbnM6IHVwZGF0ZWRUcmFuc2xhdGlvbnMsXHJcbiAgICAgIHRyYW5zbGF0ZWRDb3VudDogT2JqZWN0LmtleXModHJhbnNsYXRpb25SZXN1bHRzKS5sZW5ndGgsXHJcbiAgICAgIGVycm9yczogZXJyb3JzLmxlbmd0aCA+IDAgPyBlcnJvcnMgOiB1bmRlZmluZWQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2dnZXIuZXJyb3IoXCJBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2U6IEZhaWxlZFwiLCB7XHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBjb25zZW50UHVycG9zZUlkLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogXCJGYWlsZWQgdG8gYXV0by10cmFuc2xhdGUgY29uc2VudCBwdXJwb3NlXCIsXHJcbiAgICAgIGRldGFpbHM6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCIsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZSB0byBtdWx0aXBsZSBsYW5ndWFnZXNcclxuICogXHJcbiAqIEBwYXJhbSBwcm9jZXNzaW5nUHVycG9zZUlkIC0gSUQgb2YgdGhlIHByb2Nlc3NpbmcgcHVycG9zZSB0byB0cmFuc2xhdGVcclxuICogQHBhcmFtIHRhcmdldExhbmd1YWdlcyAtIEFycmF5IG9mIGxhbmd1YWdlIGNvZGVzIHRvIHRyYW5zbGF0ZSB0b1xyXG4gKiBAcGFyYW0gc291cmNlTGFuZ3VhZ2UgLSBTb3VyY2UgbGFuZ3VhZ2UgKGRlZmF1bHRzIHRvICdlbicpXHJcbiAqIEBwYXJhbSBlbmdsaXNoRGF0YSAtIE9wdGlvbmFsIEVuZ2xpc2ggZGF0YSBmcm9tIGNvbnRleHQgKGZvciBuZXdseSBhZGRlZC9lZGl0ZWQgZmllbGRzKVxyXG4gKiBAcmV0dXJucyBTdWNjZXNzIHdpdGggdHJhbnNsYXRpb25zIG9yIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0b1RyYW5zbGF0ZVByb2Nlc3NpbmdQdXJwb3NlKFxyXG4gIHByb2Nlc3NpbmdQdXJwb3NlSWQ6IG51bWJlcixcclxuICB0YXJnZXRMYW5ndWFnZXM6IExhbmd1YWdlQ29kZVtdLFxyXG4gIHNvdXJjZUxhbmd1YWdlOiBMYW5ndWFnZUNvZGUgPSBcImVuXCIsXHJcbiAgZW5nbGlzaERhdGE/OiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgfVxyXG4pIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gIGlmICghc2Vzc2lvbj8udXNlcikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBsb2dnZXIuaW5mbyhcIkF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZTogU3RhcnRpbmdcIiwge1xyXG4gICAgICBwcm9jZXNzaW5nUHVycG9zZUlkLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZXMsXHJcbiAgICAgIHNvdXJjZUxhbmd1YWdlLFxyXG4gICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcclxuICAgICAgaGFzRW5nbGlzaERhdGE6ICEhZW5nbGlzaERhdGEsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRhcmdldExhbmd1YWdlcyB8fCB0YXJnZXRMYW5ndWFnZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBcIk5vIHRhcmdldCBsYW5ndWFnZXMgc3BlY2lmaWVkXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9jZXNzaW5nUHVycG9zZSA9IGF3YWl0IHByaXNtYS5wcm9jZXNzaW5nUHVycG9zZS5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHByb2Nlc3NpbmdQdXJwb3NlSWQgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdHJ1ZSxcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IHRydWUsXHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwcm9jZXNzaW5nUHVycG9zZSkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJQcm9jZXNzaW5nIHB1cnBvc2Ugbm90IGZvdW5kXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb25zID0gKHByb2Nlc3NpbmdQdXJwb3NlLnRyYW5zbGF0aW9ucyBhcyBhbnkpIHx8IHt9O1xyXG5cclxuICAgIC8vIFVzZSBwcm92aWRlZCBlbmdsaXNoRGF0YSBpZiBhdmFpbGFibGUgKGZvciBuZXdseSBhZGRlZC9lZGl0ZWQgZmllbGRzKSwgb3RoZXJ3aXNlIGZhbGwgYmFjayB0byBEQlxyXG4gICAgY29uc3Qgc291cmNlVHJhbnNsYXRpb24gPSBlbmdsaXNoRGF0YSB8fCBjdXJyZW50VHJhbnNsYXRpb25zW3NvdXJjZUxhbmd1YWdlXSB8fCB7XHJcbiAgICAgIG5hbWU6IHByb2Nlc3NpbmdQdXJwb3NlLm5hbWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBwcm9jZXNzaW5nUHVycG9zZS5kZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIXNvdXJjZVRyYW5zbGF0aW9uLm5hbWUgfHwgc291cmNlVHJhbnNsYXRpb24ubmFtZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IGBTb3VyY2UgdHJhbnNsYXRpb24gKCR7c291cmNlTGFuZ3VhZ2V9KSBoYXMgbm8gbmFtZWAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmFuc2xhdGlvblJlc3VsdHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcclxuICAgIGNvbnN0IGVycm9yczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHRhcmdldExhbmcgb2YgdGFyZ2V0TGFuZ3VhZ2VzKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHRhcmdldExhbmcgPT09IHNvdXJjZUxhbmd1YWdlKSB7XHJcbiAgICAgICAgICB0cmFuc2xhdGlvblJlc3VsdHNbdGFyZ2V0TGFuZ10gPSBzb3VyY2VUcmFuc2xhdGlvbjtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZCA9IGF3YWl0IHRyYW5zbGF0ZU9iamVjdChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogc291cmNlVHJhbnNsYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHNvdXJjZVRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICAgIHNvdXJjZUxhbmd1YWdlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdHJhbnNsYXRpb25SZXN1bHRzW3RhcmdldExhbmddID0gdHJhbnNsYXRlZDtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBlcnJvck1zZyA9IGBGYWlsZWQgdG8gdHJhbnNsYXRlIHRvICR7dGFyZ2V0TGFuZ31gO1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihcIkF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZTogTGFuZ3VhZ2UgZmFpbGVkXCIsIHtcclxuICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlcnJvcnMucHVzaChlcnJvck1zZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXModHJhbnNsYXRpb25SZXN1bHRzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBlcnJvcjogXCJGYWlsZWQgdG8gdHJhbnNsYXRlIHRvIGFueSBsYW5ndWFnZVwiLFxyXG4gICAgICAgIGRldGFpbHM6IGVycm9ycy5qb2luKFwiLCBcIiksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWVyZ2Ugd2l0aCBleGlzdGluZyB0cmFuc2xhdGlvbnNcclxuICAgIGNvbnN0IHVwZGF0ZWRUcmFuc2xhdGlvbnMgPSB7IC4uLmN1cnJlbnRUcmFuc2xhdGlvbnMsIC4uLnRyYW5zbGF0aW9uUmVzdWx0cyB9O1xyXG5cclxuICAgIC8vIFVwZGF0ZSBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXHJcbiAgICBjb25zdCBzdXBwb3J0ZWRMYW5ndWFnZXMgPSBwcm9jZXNzaW5nUHVycG9zZS5zdXBwb3J0ZWRMYW5ndWFnZXMgfHwgW1wiZW5cIl07XHJcbiAgICB0YXJnZXRMYW5ndWFnZXMuZm9yRWFjaCgobGFuZykgPT4ge1xyXG4gICAgICBpZiAoIXN1cHBvcnRlZExhbmd1YWdlcy5pbmNsdWRlcyhsYW5nKSkge1xyXG4gICAgICAgIHN1cHBvcnRlZExhbmd1YWdlcy5wdXNoKGxhbmcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBwcmlzbWEucHJvY2Vzc2luZ1B1cnBvc2UudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHByb2Nlc3NpbmdQdXJwb3NlSWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRyYW5zbGF0aW9uczogdXBkYXRlZFRyYW5zbGF0aW9ucyxcclxuICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXMsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2dnZXIuaW5mbyhcIkF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZTogQ29tcGxldGVkXCIsIHtcclxuICAgICAgcHJvY2Vzc2luZ1B1cnBvc2VJZCxcclxuICAgICAgc3VjY2Vzc0NvdW50OiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLmxlbmd0aCxcclxuICAgICAgZXJyb3JDb3VudDogZXJyb3JzLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS9jb25zZW50LXB1cnBvc2VzXCIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIHRyYW5zbGF0aW9uczogdXBkYXRlZFRyYW5zbGF0aW9ucyxcclxuICAgICAgdHJhbnNsYXRlZENvdW50OiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLmxlbmd0aCxcclxuICAgICAgZXJyb3JzOiBlcnJvcnMubGVuZ3RoID4gMCA/IGVycm9ycyA6IHVuZGVmaW5lZCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGxvZ2dlci5lcnJvcihcIkF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZTogRmFpbGVkXCIsIHtcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIHByb2Nlc3NpbmdQdXJwb3NlSWQsXHJcbiAgICAgIHRhcmdldExhbmd1YWdlcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOiBcIkZhaWxlZCB0byBhdXRvLXRyYW5zbGF0ZSBwcm9jZXNzaW5nIHB1cnBvc2VcIixcclxuICAgICAgZGV0YWlsczogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlVua25vd24gZXJyb3JcIixcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVRBMnFCc0IifQ==
}),
"[project]/actions/data:463d83 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"704ce32ef850c2bb4b6f4d46e757bc9db118d35e04":"translateTextToLanguages"},"actions/auto-translate.ts",""] */ __turbopack_context__.s([
    "translateTextToLanguages",
    ()=>translateTextToLanguages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var translateTextToLanguages = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("704ce32ef850c2bb4b6f4d46e757bc9db118d35e04", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "translateTextToLanguages"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXV0by10cmFuc2xhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcbi8qKlxyXG4gKiBPcGVuIEJoYXJhdCBEaWdpdGFsIENvbnNlbnQgYnkgSURmeVxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjUgQmFsZG9yIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQgKElEZnkpXHJcbiAqIFxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBQcml2eSBQdWJsaWMgTGljZW5zZS5cclxuICogU2VlIExJQ0VOU0UubWQgZm9yIHRoZSBmdWxsIHRlcm1zIG9mIHVzZS5cclxuICogXHJcbiAqIFVuYXV0aG9yaXplZCBjb3B5aW5nLCBtb2RpZmljYXRpb24sIGRpc3RyaWJ1dGlvbiwgb3IgY29tbWVyY2lhbCB1c2VcclxuICogaXMgc3RyaWN0bHkgcHJvaGliaXRlZCB3aXRob3V0IHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbiBmcm9tIElEZnkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IExhbmd1YWdlQ29kZSB9IGZyb20gXCJAL2xpYi90eXBlcy9sYW5ndWFnZXNcIjtcclxuaW1wb3J0IHsgdHJhbnNsYXRlT2JqZWN0IH0gZnJvbSBcIkAvbGliL3NlcnZpY2VzL2dvb2dsZS10cmFuc2xhdGUtc2VydmljZVwiO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tIFwiQC9saWIvdXRpbHMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbi8qKlxyXG4gKiBBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZSB0byBtdWx0aXBsZSBsYW5ndWFnZXNcclxuICogXHJcbiAqIEBwYXJhbSB1c2VyQXR0cmlidXRlSWQgLSBJRCBvZiB0aGUgdXNlciBhdHRyaWJ1dGUgdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB0YXJnZXRMYW5ndWFnZXMgLSBBcnJheSBvZiBsYW5ndWFnZSBjb2RlcyB0byB0cmFuc2xhdGUgdG9cclxuICogQHBhcmFtIHNvdXJjZUxhbmd1YWdlIC0gU291cmNlIGxhbmd1YWdlIChkZWZhdWx0cyB0byAnZW4nKVxyXG4gKiBAcmV0dXJucyBTdWNjZXNzIHdpdGggdHJhbnNsYXRpb25zIG9yIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0b1RyYW5zbGF0ZVVzZXJBdHRyaWJ1dGUoXHJcbiAgdXNlckF0dHJpYnV0ZUlkOiBudW1iZXIsXHJcbiAgdGFyZ2V0TGFuZ3VhZ2VzOiBMYW5ndWFnZUNvZGVbXSxcclxuICBzb3VyY2VMYW5ndWFnZTogTGFuZ3VhZ2VDb2RlID0gXCJlblwiXHJcbikge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGxvZ2dlci5pbmZvKFwiQXV0by10cmFuc2xhdGUgVXNlciBBdHRyaWJ1dGU6IFN0YXJ0aW5nXCIsIHtcclxuICAgICAgdXNlckF0dHJpYnV0ZUlkLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZXMsXHJcbiAgICAgIHNvdXJjZUxhbmd1YWdlLFxyXG4gICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIGlucHV0c1xyXG4gICAgaWYgKCF0YXJnZXRMYW5ndWFnZXMgfHwgdGFyZ2V0TGFuZ3VhZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJObyB0YXJnZXQgbGFuZ3VhZ2VzIHNwZWNpZmllZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmV0Y2ggdXNlciBhdHRyaWJ1dGVcclxuICAgIGNvbnN0IHVzZXJBdHRyaWJ1dGUgPSBhd2FpdCBwcmlzbWEudXNlckF0dHJpYnV0ZS5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHVzZXJBdHRyaWJ1dGVJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uczogdHJ1ZSxcclxuICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXVzZXJBdHRyaWJ1dGUpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiVXNlciBhdHRyaWJ1dGUgbm90IGZvdW5kXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgc291cmNlIHRyYW5zbGF0aW9uIChFbmdsaXNoIGJ5IGRlZmF1bHQpXHJcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb25zID0gKHVzZXJBdHRyaWJ1dGUudHJhbnNsYXRpb25zIGFzIGFueSkgfHwge307XHJcbiAgICBjb25zdCBzb3VyY2VUcmFuc2xhdGlvbiA9IGN1cnJlbnRUcmFuc2xhdGlvbnNbc291cmNlTGFuZ3VhZ2VdIHx8IHtcclxuICAgICAgbmFtZTogdXNlckF0dHJpYnV0ZS5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogbnVsbCxcclxuICAgICAgcGxhY2Vob2xkZXI6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHNvdXJjZSBoYXMgY29udGVudFxyXG4gICAgaWYgKCFzb3VyY2VUcmFuc2xhdGlvbi5uYW1lIHx8IHNvdXJjZVRyYW5zbGF0aW9uLm5hbWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBgU291cmNlIHRyYW5zbGF0aW9uICgke3NvdXJjZUxhbmd1YWdlfSkgaGFzIG5vIG5hbWVgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZTogVHJhbnNsYXRpbmcgZmllbGRzXCIsIHtcclxuICAgICAgdXNlckF0dHJpYnV0ZUlkLFxyXG4gICAgICBzb3VyY2VMYW5ndWFnZSxcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VzLFxyXG4gICAgICBmaWVsZHM6IE9iamVjdC5rZXlzKHNvdXJjZVRyYW5zbGF0aW9uKSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRyYW5zbGF0ZSB0byBlYWNoIHRhcmdldCBsYW5ndWFnZVxyXG4gICAgY29uc3QgdHJhbnNsYXRpb25SZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XHJcbiAgICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXJnZXRMYW5nIG9mIHRhcmdldExhbmd1YWdlcykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFNraXAgaWYgc291cmNlIGFuZCB0YXJnZXQgYXJlIHRoZSBzYW1lXHJcbiAgICAgICAgaWYgKHRhcmdldExhbmcgPT09IHNvdXJjZUxhbmd1YWdlKSB7XHJcbiAgICAgICAgICB0cmFuc2xhdGlvblJlc3VsdHNbdGFyZ2V0TGFuZ10gPSBzb3VyY2VUcmFuc2xhdGlvbjtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRoZSBvYmplY3RcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVkID0gYXdhaXQgdHJhbnNsYXRlT2JqZWN0KFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBzb3VyY2VUcmFuc2xhdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc291cmNlVHJhbnNsYXRpb24uZGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHNvdXJjZVRyYW5zbGF0aW9uLnBsYWNlaG9sZGVyIHx8IG51bGwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICAgIHNvdXJjZUxhbmd1YWdlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdHJhbnNsYXRpb25SZXN1bHRzW3RhcmdldExhbmddID0gdHJhbnNsYXRlZDtcclxuXHJcbiAgICAgICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZTogTGFuZ3VhZ2UgY29tcGxldGVkXCIsIHtcclxuICAgICAgICAgIHVzZXJBdHRyaWJ1dGVJZCxcclxuICAgICAgICAgIGxhbmd1YWdlOiB0YXJnZXRMYW5nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gYEZhaWxlZCB0byB0cmFuc2xhdGUgdG8gJHt0YXJnZXRMYW5nfWA7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyb3JNc2cpO1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihcIkF1dG8tdHJhbnNsYXRlIFVzZXIgQXR0cmlidXRlOiBMYW5ndWFnZSBmYWlsZWRcIiwge1xyXG4gICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgICB1c2VyQXR0cmlidXRlSWQsXHJcbiAgICAgICAgICBsYW5ndWFnZTogdGFyZ2V0TGFuZyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIGFsbCB0cmFuc2xhdGlvbnMgZmFpbGVkLCByZXR1cm4gZXJyb3JcclxuICAgIGlmIChPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJBbGwgdHJhbnNsYXRpb25zIGZhaWxlZFwiLCBkZXRhaWxzOiBlcnJvcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXJnZSB3aXRoIGV4aXN0aW5nIHRyYW5zbGF0aW9ucyAoZG9uJ3Qgb3ZlcndyaXRlIG1hbnVhbGx5IGVkaXRlZCBvbmVzIHVubGVzcyBleHBsaWNpdGx5IHJlcXVlc3RlZClcclxuICAgIGNvbnN0IHVwZGF0ZWRUcmFuc2xhdGlvbnMgPSB7XHJcbiAgICAgIC4uLmN1cnJlbnRUcmFuc2xhdGlvbnMsXHJcbiAgICAgIC4uLnRyYW5zbGF0aW9uUmVzdWx0cyxcclxuICAgIH07XHJcblxyXG4gICAgLy8gVXBkYXRlIHN1cHBvcnRlZCBsYW5ndWFnZXNcclxuICAgIGNvbnN0IG5ld0xhbmd1YWdlcyA9IE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uUmVzdWx0cykgYXMgTGFuZ3VhZ2VDb2RlW107XHJcbiAgICBjb25zdCBleGlzdGluZ0xhbmd1YWdlcyA9IHVzZXJBdHRyaWJ1dGUuc3VwcG9ydGVkTGFuZ3VhZ2VzIHx8IFtdO1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gQXJyYXkuZnJvbShcclxuICAgICAgbmV3IFNldChbLi4uZXhpc3RpbmdMYW5ndWFnZXMsIC4uLm5ld0xhbmd1YWdlc10pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNhdmUgdG8gZGF0YWJhc2VcclxuICAgIGF3YWl0IHByaXNtYS51c2VyQXR0cmlidXRlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB1c2VyQXR0cmlidXRlSWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRyYW5zbGF0aW9uczogdXBkYXRlZFRyYW5zbGF0aW9ucyxcclxuICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXMsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2dnZXIuaW5mbyhcIkF1dG8tdHJhbnNsYXRlIFVzZXIgQXR0cmlidXRlOiBDb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsIHtcclxuICAgICAgdXNlckF0dHJpYnV0ZUlkLFxyXG4gICAgICB0cmFuc2xhdGVkTGFuZ3VhZ2VzOiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLFxyXG4gICAgICB0b3RhbExhbmd1YWdlczogc3VwcG9ydGVkTGFuZ3VhZ2VzLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJldmFsaWRhdGUgY2FjaGVcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS91c2VyLWF0dHJpYnV0ZXNcIik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgdHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvblJlc3VsdHMsXHJcbiAgICAgIHRyYW5zbGF0ZWRDb3VudDogT2JqZWN0LmtleXModHJhbnNsYXRpb25SZXN1bHRzKS5sZW5ndGgsXHJcbiAgICAgIGVycm9yczogZXJyb3JzLmxlbmd0aCA+IDAgPyBlcnJvcnMgOiB1bmRlZmluZWQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2dnZXIuZXJyb3IoXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZTogRmFpbGVkXCIsIHtcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIHVzZXJBdHRyaWJ1dGVJZCxcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIGF1dG8tdHJhbnNsYXRlXCIsXHJcbiAgICAgIGRldGFpbHM6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCIsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEF1dG8tdHJhbnNsYXRlIHNwZWNpZmljIGZpZWxkcyBvZiBhIFVzZXIgQXR0cmlidXRlIHRvIGEgc2luZ2xlIGxhbmd1YWdlXHJcbiAqIFVzZWZ1bCBmb3IgcmV0cnlpbmcgZmFpbGVkIHRyYW5zbGF0aW9ucyBvciB0cmFuc2xhdGluZyBzcGVjaWZpYyBmaWVsZHNcclxuICogXHJcbiAqIEBwYXJhbSB1c2VyQXR0cmlidXRlSWQgLSBJRCBvZiB0aGUgdXNlciBhdHRyaWJ1dGVcclxuICogQHBhcmFtIHRhcmdldExhbmd1YWdlIC0gU2luZ2xlIHRhcmdldCBsYW5ndWFnZSBjb2RlXHJcbiAqIEBwYXJhbSBmaWVsZHMgLSBPYmplY3Qgd2l0aCBmaWVsZHMgdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSBzb3VyY2VMYW5ndWFnZSAtIFNvdXJjZSBsYW5ndWFnZSAoZGVmYXVsdHMgdG8gJ2VuJylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRvVHJhbnNsYXRlVXNlckF0dHJpYnV0ZUZpZWxkcyhcclxuICB1c2VyQXR0cmlidXRlSWQ6IG51bWJlcixcclxuICB0YXJnZXRMYW5ndWFnZTogTGFuZ3VhZ2VDb2RlLFxyXG4gIGZpZWxkczoge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nIHwgbnVsbDtcclxuICB9LFxyXG4gIHNvdXJjZUxhbmd1YWdlOiBMYW5ndWFnZUNvZGUgPSBcImVuXCJcclxuKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICBpZiAoIXNlc3Npb24/LnVzZXIpIHtcclxuICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gVmFsaWRhdGUgdXNlciBhdHRyaWJ1dGUgZXhpc3RzXHJcbiAgICBjb25zdCB1c2VyQXR0cmlidXRlID0gYXdhaXQgcHJpc21hLnVzZXJBdHRyaWJ1dGUuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB1c2VyQXR0cmlidXRlSWQgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgdHJhbnNsYXRpb25zOiB0cnVlLFxyXG4gICAgICAgIHN1cHBvcnRlZExhbmd1YWdlczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlckF0dHJpYnV0ZSkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJVc2VyIGF0dHJpYnV0ZSBub3QgZm91bmRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRyYW5zbGF0ZSB0aGUgcHJvdmlkZWQgZmllbGRzXHJcbiAgICBjb25zdCB0cmFuc2xhdGVkID0gYXdhaXQgdHJhbnNsYXRlT2JqZWN0KGZpZWxkcywgdGFyZ2V0TGFuZ3VhZ2UsIHNvdXJjZUxhbmd1YWdlKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgdHJhbnNsYXRpb25zXHJcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb25zID0gKHVzZXJBdHRyaWJ1dGUudHJhbnNsYXRpb25zIGFzIGFueSkgfHwge307XHJcbiAgICBjdXJyZW50VHJhbnNsYXRpb25zW3RhcmdldExhbmd1YWdlXSA9IHtcclxuICAgICAgLi4uKGN1cnJlbnRUcmFuc2xhdGlvbnNbdGFyZ2V0TGFuZ3VhZ2VdIHx8IHt9KSxcclxuICAgICAgLi4udHJhbnNsYXRlZCxcclxuICAgIH07XHJcblxyXG4gICAgLy8gVXBkYXRlIHN1cHBvcnRlZCBsYW5ndWFnZXNcclxuICAgIGNvbnN0IHN1cHBvcnRlZExhbmd1YWdlcyA9IHVzZXJBdHRyaWJ1dGUuc3VwcG9ydGVkTGFuZ3VhZ2VzIHx8IFtdO1xyXG4gICAgaWYgKCFzdXBwb3J0ZWRMYW5ndWFnZXMuaW5jbHVkZXModGFyZ2V0TGFuZ3VhZ2UpKSB7XHJcbiAgICAgIHN1cHBvcnRlZExhbmd1YWdlcy5wdXNoKHRhcmdldExhbmd1YWdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTYXZlIHRvIGRhdGFiYXNlXHJcbiAgICBhd2FpdCBwcmlzbWEudXNlckF0dHJpYnV0ZS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogdXNlckF0dHJpYnV0ZUlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IGN1cnJlbnRUcmFuc2xhdGlvbnMsXHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZSBGaWVsZHM6IENvbXBsZXRlZFwiLCB7XHJcbiAgICAgIHVzZXJBdHRyaWJ1dGVJZCxcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2UsXHJcbiAgICAgIGZpZWxkczogT2JqZWN0LmtleXMoZmllbGRzKSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS91c2VyLWF0dHJpYnV0ZXNcIik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgdHJhbnNsYXRpb246IHRyYW5zbGF0ZWQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2dnZXIuZXJyb3IoXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZSBGaWVsZHM6IEZhaWxlZFwiLCB7XHJcbiAgICAgIGVycm9yLFxyXG4gICAgICB1c2VyQXR0cmlidXRlSWQsXHJcbiAgICAgIHRhcmdldExhbmd1YWdlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIGF1dG8tdHJhbnNsYXRlIGZpZWxkc1wiLFxyXG4gICAgICBkZXRhaWxzOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2xhdGUgdGV4dCB0byBtdWx0aXBsZSBsYW5ndWFnZXMgKGZvciBjcmVhdGUgZm9ybXMpXHJcbiAqIFRoaXMgYWN0aW9uIHRyYW5zbGF0ZXMgdGV4dCB3aXRob3V0IHNhdmluZyB0byBkYXRhYmFzZVxyXG4gKiBcclxuICogQHBhcmFtIHRleHQgLSBUZXh0IHRvIHRyYW5zbGF0ZVxyXG4gKiBAcGFyYW0gdGFyZ2V0TGFuZ3VhZ2VzIC0gQXJyYXkgb2YgbGFuZ3VhZ2UgY29kZXMgdG8gdHJhbnNsYXRlIHRvXHJcbiAqIEBwYXJhbSBzb3VyY2VMYW5ndWFnZSAtIFNvdXJjZSBsYW5ndWFnZSAoZGVmYXVsdHMgdG8gJ2VuJylcclxuICogQHJldHVybnMgU3VjY2VzcyB3aXRoIHRyYW5zbGF0aW9ucyBvciBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYW5zbGF0ZVRleHRUb0xhbmd1YWdlcyhcclxuICB0ZXh0OiBzdHJpbmcsXHJcbiAgdGFyZ2V0TGFuZ3VhZ2VzOiBMYW5ndWFnZUNvZGVbXSxcclxuICBzb3VyY2VMYW5ndWFnZTogTGFuZ3VhZ2VDb2RlID0gXCJlblwiXHJcbikge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGxvZ2dlci5pbmZvKFwiVHJhbnNsYXRlIFRleHQ6IFN0YXJ0aW5nXCIsIHtcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VzLFxyXG4gICAgICBzb3VyY2VMYW5ndWFnZSxcclxuICAgICAgdGV4dExlbmd0aDogdGV4dC5sZW5ndGgsXHJcbiAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRzXHJcbiAgICBpZiAoIXRleHQgfHwgdGV4dC50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm8gdGV4dCBwcm92aWRlZCBmb3IgdHJhbnNsYXRpb25cIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGFyZ2V0TGFuZ3VhZ2VzIHx8IHRhcmdldExhbmd1YWdlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm8gdGFyZ2V0IGxhbmd1YWdlcyBzcGVjaWZpZWRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEltcG9ydCB0cmFuc2xhdGlvbiBzZXJ2aWNlXHJcbiAgICBjb25zdCB7IHRyYW5zbGF0ZVRleHQgfSA9IGF3YWl0IGltcG9ydChcIkAvbGliL3NlcnZpY2VzL2dvb2dsZS10cmFuc2xhdGUtc2VydmljZVwiKTtcclxuXHJcbiAgICAvLyBUcmFuc2xhdGUgdG8gZWFjaCB0YXJnZXQgbGFuZ3VhZ2VcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG4gICAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgdGFyZ2V0TGFuZyBvZiB0YXJnZXRMYW5ndWFnZXMpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBTa2lwIGlmIHNvdXJjZSBhbmQgdGFyZ2V0IGFyZSB0aGUgc2FtZVxyXG4gICAgICAgIGlmICh0YXJnZXRMYW5nID09PSBzb3VyY2VMYW5ndWFnZSkge1xyXG4gICAgICAgICAgdHJhbnNsYXRpb25zW3RhcmdldExhbmddID0gdGV4dDtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRoZSB0ZXh0XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZCA9IGF3YWl0IHRyYW5zbGF0ZVRleHQodGV4dCwgdGFyZ2V0TGFuZywgc291cmNlTGFuZ3VhZ2UpO1xyXG4gICAgICAgIHRyYW5zbGF0aW9uc1t0YXJnZXRMYW5nXSA9IHRyYW5zbGF0ZWQ7XHJcblxyXG4gICAgICAgIGxvZ2dlci5pbmZvKFwiVHJhbnNsYXRlIFRleHQ6IExhbmd1YWdlIGNvbXBsZXRlZFwiLCB7XHJcbiAgICAgICAgICB0YXJnZXRMYW5nLFxyXG4gICAgICAgICAgdGV4dExlbmd0aDogdHJhbnNsYXRlZC5sZW5ndGgsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBgRmFpbGVkIHRvIHRyYW5zbGF0ZSB0byAke3RhcmdldExhbmd9YDtcclxuICAgICAgICBsb2dnZXIuZXJyb3IoXCJUcmFuc2xhdGUgVGV4dDogTGFuZ3VhZ2UgZmFpbGVkXCIsIHtcclxuICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlcnJvcnMucHVzaChlcnJvck1zZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXModHJhbnNsYXRpb25zKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBlcnJvcjogXCJGYWlsZWQgdG8gdHJhbnNsYXRlIHRvIGFueSBsYW5ndWFnZVwiLFxyXG4gICAgICAgIGRldGFpbHM6IGVycm9ycy5qb2luKFwiLCBcIiksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJUcmFuc2xhdGUgVGV4dDogQ29tcGxldGVkXCIsIHtcclxuICAgICAgc3VjY2Vzc0NvdW50OiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvbnMpLmxlbmd0aCxcclxuICAgICAgZXJyb3JDb3VudDogZXJyb3JzLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIHRyYW5zbGF0aW9ucyxcclxuICAgICAgZXJyb3JzOiBlcnJvcnMubGVuZ3RoID4gMCA/IGVycm9ycyA6IHVuZGVmaW5lZCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGxvZ2dlci5lcnJvcihcIlRyYW5zbGF0ZSBUZXh0OiBGYWlsZWRcIiwge1xyXG4gICAgICBlcnJvcixcclxuICAgICAgc291cmNlTGFuZ3VhZ2UsXHJcbiAgICAgIHRhcmdldExhbmd1YWdlcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOiBcIkZhaWxlZCB0byB0cmFuc2xhdGUgdGV4dFwiLFxyXG4gICAgICBkZXRhaWxzOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBdXRvLXRyYW5zbGF0ZSBCdXNpbmVzcyBQcm9jZXNzIHRvIG11bHRpcGxlIGxhbmd1YWdlc1xyXG4gKiBcclxuICogQHBhcmFtIGJ1c2luZXNzUHJvY2Vzc0lkIC0gSUQgb2YgdGhlIGJ1c2luZXNzIHByb2Nlc3MgdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB0YXJnZXRMYW5ndWFnZXMgLSBBcnJheSBvZiBsYW5ndWFnZSBjb2RlcyB0byB0cmFuc2xhdGUgdG9cclxuICogQHBhcmFtIHNvdXJjZUxhbmd1YWdlIC0gU291cmNlIGxhbmd1YWdlIChkZWZhdWx0cyB0byAnZW4nKVxyXG4gKiBAcGFyYW0gZW5nbGlzaERhdGEgLSBPcHRpb25hbCBFbmdsaXNoIGRhdGEgZnJvbSBjb250ZXh0IChmb3IgbmV3bHkgYWRkZWQvZWRpdGVkIGZpZWxkcylcclxuICogQHJldHVybnMgU3VjY2VzcyB3aXRoIHRyYW5zbGF0aW9ucyBvciBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dG9UcmFuc2xhdGVCdXNpbmVzc1Byb2Nlc3MoXHJcbiAgYnVzaW5lc3NQcm9jZXNzSWQ6IG51bWJlcixcclxuICB0YXJnZXRMYW5ndWFnZXM6IExhbmd1YWdlQ29kZVtdLFxyXG4gIHNvdXJjZUxhbmd1YWdlOiBMYW5ndWFnZUNvZGUgPSBcImVuXCIsXHJcbiAgZW5nbGlzaERhdGE/OiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBncmFudERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICByZXZva2VEZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgICByZWNvbnNlbnREZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgfVxyXG4pIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gIGlmICghc2Vzc2lvbj8udXNlcikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBsb2dnZXIuaW5mbyhcIkF1dG8tdHJhbnNsYXRlIEJ1c2luZXNzIFByb2Nlc3M6IFN0YXJ0aW5nXCIsIHtcclxuICAgICAgYnVzaW5lc3NQcm9jZXNzSWQsXHJcbiAgICAgIHRhcmdldExhbmd1YWdlcyxcclxuICAgICAgc291cmNlTGFuZ3VhZ2UsXHJcbiAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICBoYXNFbmdsaXNoRGF0YTogISFlbmdsaXNoRGF0YSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdGFyZ2V0TGFuZ3VhZ2VzIHx8IHRhcmdldExhbmd1YWdlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm8gdGFyZ2V0IGxhbmd1YWdlcyBzcGVjaWZpZWRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1c2luZXNzUHJvY2VzcyA9IGF3YWl0IHByaXNtYS5idXNpbmVzc1Byb2Nlc3MuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBidXNpbmVzc1Byb2Nlc3NJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgIGdyYW50RGVzY3JpcHRpb246IHRydWUsXHJcbiAgICAgICAgcmV2b2tlRGVzY3JpcHRpb246IHRydWUsXHJcbiAgICAgICAgcmVjb25zZW50RGVzY3JpcHRpb246IHRydWUsXHJcbiAgICAgICAgdHJhbnNsYXRpb25zOiB0cnVlLFxyXG4gICAgICAgIHN1cHBvcnRlZExhbmd1YWdlczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghYnVzaW5lc3NQcm9jZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBcIkJ1c2luZXNzIHByb2Nlc3Mgbm90IGZvdW5kXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb25zID0gKGJ1c2luZXNzUHJvY2Vzcy50cmFuc2xhdGlvbnMgYXMgYW55KSB8fCB7fTtcclxuXHJcbiAgICAvLyBVc2UgcHJvdmlkZWQgZW5nbGlzaERhdGEgaWYgYXZhaWxhYmxlIChmb3IgbmV3bHkgYWRkZWQvZWRpdGVkIGZpZWxkcyksIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gREJcclxuICAgIGNvbnN0IHNvdXJjZVRyYW5zbGF0aW9uID0gZW5nbGlzaERhdGEgfHwgY3VycmVudFRyYW5zbGF0aW9uc1tzb3VyY2VMYW5ndWFnZV0gfHwge1xyXG4gICAgICBuYW1lOiBidXNpbmVzc1Byb2Nlc3MubmFtZSxcclxuICAgICAgZ3JhbnREZXNjcmlwdGlvbjogYnVzaW5lc3NQcm9jZXNzLmdyYW50RGVzY3JpcHRpb24sXHJcbiAgICAgIHJldm9rZURlc2NyaXB0aW9uOiBidXNpbmVzc1Byb2Nlc3MucmV2b2tlRGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgICAgcmVjb25zZW50RGVzY3JpcHRpb246IGJ1c2luZXNzUHJvY2Vzcy5yZWNvbnNlbnREZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIXNvdXJjZVRyYW5zbGF0aW9uLm5hbWUgfHwgc291cmNlVHJhbnNsYXRpb24ubmFtZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IGBTb3VyY2UgdHJhbnNsYXRpb24gKCR7c291cmNlTGFuZ3VhZ2V9KSBoYXMgbm8gbmFtZWAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmFuc2xhdGlvblJlc3VsdHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcclxuICAgIGNvbnN0IGVycm9yczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHRhcmdldExhbmcgb2YgdGFyZ2V0TGFuZ3VhZ2VzKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHRhcmdldExhbmcgPT09IHNvdXJjZUxhbmd1YWdlKSB7XHJcbiAgICAgICAgICB0cmFuc2xhdGlvblJlc3VsdHNbdGFyZ2V0TGFuZ10gPSBzb3VyY2VUcmFuc2xhdGlvbjtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZCA9IGF3YWl0IHRyYW5zbGF0ZU9iamVjdChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogc291cmNlVHJhbnNsYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgZ3JhbnREZXNjcmlwdGlvbjogc291cmNlVHJhbnNsYXRpb24uZ3JhbnREZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgICAgICAgICByZXZva2VEZXNjcmlwdGlvbjogc291cmNlVHJhbnNsYXRpb24ucmV2b2tlRGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgICAgICAgICAgcmVjb25zZW50RGVzY3JpcHRpb246IHNvdXJjZVRyYW5zbGF0aW9uLnJlY29uc2VudERlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICAgIHNvdXJjZUxhbmd1YWdlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdHJhbnNsYXRpb25SZXN1bHRzW3RhcmdldExhbmddID0gdHJhbnNsYXRlZDtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBlcnJvck1zZyA9IGBGYWlsZWQgdG8gdHJhbnNsYXRlIHRvICR7dGFyZ2V0TGFuZ31gO1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihcIkF1dG8tdHJhbnNsYXRlIEJ1c2luZXNzIFByb2Nlc3M6IExhbmd1YWdlIGZhaWxlZFwiLCB7XHJcbiAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgIHRhcmdldExhbmcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyb3JNc2cpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uUmVzdWx0cykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIHRyYW5zbGF0ZSB0byBhbnkgbGFuZ3VhZ2VcIixcclxuICAgICAgICBkZXRhaWxzOiBlcnJvcnMuam9pbihcIiwgXCIpLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1lcmdlIHdpdGggZXhpc3RpbmcgdHJhbnNsYXRpb25zXHJcbiAgICBjb25zdCB1cGRhdGVkVHJhbnNsYXRpb25zID0geyAuLi5jdXJyZW50VHJhbnNsYXRpb25zLCAuLi50cmFuc2xhdGlvblJlc3VsdHMgfTtcclxuXHJcbiAgICAvLyBVcGRhdGUgc3VwcG9ydGVkIGxhbmd1YWdlc1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gYnVzaW5lc3NQcm9jZXNzLnN1cHBvcnRlZExhbmd1YWdlcyB8fCBbXCJlblwiXTtcclxuICAgIHRhcmdldExhbmd1YWdlcy5mb3JFYWNoKChsYW5nKSA9PiB7XHJcbiAgICAgIGlmICghc3VwcG9ydGVkTGFuZ3VhZ2VzLmluY2x1ZGVzKGxhbmcpKSB7XHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLnB1c2gobGFuZyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHByaXNtYS5idXNpbmVzc1Byb2Nlc3MudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IGJ1c2luZXNzUHJvY2Vzc0lkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IHVwZGF0ZWRUcmFuc2xhdGlvbnMsXHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBCdXNpbmVzcyBQcm9jZXNzOiBDb21wbGV0ZWRcIiwge1xyXG4gICAgICBidXNpbmVzc1Byb2Nlc3NJZCxcclxuICAgICAgc3VjY2Vzc0NvdW50OiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLmxlbmd0aCxcclxuICAgICAgZXJyb3JDb3VudDogZXJyb3JzLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS9idXNpbmVzcy1wcm9jZXNzZXNcIik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgdHJhbnNsYXRpb25zOiB1cGRhdGVkVHJhbnNsYXRpb25zLFxyXG4gICAgICB0cmFuc2xhdGVkQ291bnQ6IE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uUmVzdWx0cykubGVuZ3RoLFxyXG4gICAgICBlcnJvcnM6IGVycm9ycy5sZW5ndGggPiAwID8gZXJyb3JzIDogdW5kZWZpbmVkLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbG9nZ2VyLmVycm9yKFwiQXV0by10cmFuc2xhdGUgQnVzaW5lc3MgUHJvY2VzczogRmFpbGVkXCIsIHtcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGJ1c2luZXNzUHJvY2Vzc0lkLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogXCJGYWlsZWQgdG8gYXV0by10cmFuc2xhdGUgYnVzaW5lc3MgcHJvY2Vzc1wiLFxyXG4gICAgICBkZXRhaWxzOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2UgdG8gbXVsdGlwbGUgbGFuZ3VhZ2VzXHJcbiAqIFxyXG4gKiBAcGFyYW0gY29uc2VudFB1cnBvc2VJZCAtIElEIG9mIHRoZSBjb25zZW50IHB1cnBvc2UgdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB0YXJnZXRMYW5ndWFnZXMgLSBBcnJheSBvZiBsYW5ndWFnZSBjb2RlcyB0byB0cmFuc2xhdGUgdG9cclxuICogQHBhcmFtIHNvdXJjZUxhbmd1YWdlIC0gU291cmNlIGxhbmd1YWdlIChkZWZhdWx0cyB0byAnZW4nKVxyXG4gKiBAcGFyYW0gZW5nbGlzaERhdGEgLSBPcHRpb25hbCBFbmdsaXNoIGRhdGEgZnJvbSBjb250ZXh0IChmb3IgbmV3bHkgYWRkZWQvZWRpdGVkIGZpZWxkcylcclxuICogQHJldHVybnMgU3VjY2VzcyB3aXRoIHRyYW5zbGF0aW9ucyBvciBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dG9UcmFuc2xhdGVDb25zZW50UHVycG9zZShcclxuICBjb25zZW50UHVycG9zZUlkOiBudW1iZXIsXHJcbiAgdGFyZ2V0TGFuZ3VhZ2VzOiBMYW5ndWFnZUNvZGVbXSxcclxuICBzb3VyY2VMYW5ndWFnZTogTGFuZ3VhZ2VDb2RlID0gXCJlblwiLFxyXG4gIGVuZ2xpc2hEYXRhPzoge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBudWxsO1xyXG4gIH1cclxuKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICBpZiAoIXNlc3Npb24/LnVzZXIpIHtcclxuICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2U6IFN0YXJ0aW5nXCIsIHtcclxuICAgICAgY29uc2VudFB1cnBvc2VJZCxcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VzLFxyXG4gICAgICBzb3VyY2VMYW5ndWFnZSxcclxuICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgIGhhc0VuZ2xpc2hEYXRhOiAhIWVuZ2xpc2hEYXRhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF0YXJnZXRMYW5ndWFnZXMgfHwgdGFyZ2V0TGFuZ3VhZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJObyB0YXJnZXQgbGFuZ3VhZ2VzIHNwZWNpZmllZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29uc2VudFB1cnBvc2UgPSBhd2FpdCBwcmlzbWEuY29uc2VudFB1cnBvc2UuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBjb25zZW50UHVycG9zZUlkIH0sXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIGlkOiB0cnVlLFxyXG4gICAgICAgIG5hbWU6IHRydWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHRydWUsXHJcbiAgICAgICAgdHJhbnNsYXRpb25zOiB0cnVlLFxyXG4gICAgICAgIHN1cHBvcnRlZExhbmd1YWdlczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghY29uc2VudFB1cnBvc2UpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiQ29uc2VudCBwdXJwb3NlIG5vdCBmb3VuZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudFRyYW5zbGF0aW9ucyA9IChjb25zZW50UHVycG9zZS50cmFuc2xhdGlvbnMgYXMgYW55KSB8fCB7fTtcclxuXHJcbiAgICAvLyBVc2UgcHJvdmlkZWQgZW5nbGlzaERhdGEgaWYgYXZhaWxhYmxlIChmb3IgbmV3bHkgYWRkZWQvZWRpdGVkIGZpZWxkcyksIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gREJcclxuICAgIGNvbnN0IHNvdXJjZVRyYW5zbGF0aW9uID0gZW5nbGlzaERhdGEgfHwgY3VycmVudFRyYW5zbGF0aW9uc1tzb3VyY2VMYW5ndWFnZV0gfHwge1xyXG4gICAgICBuYW1lOiBjb25zZW50UHVycG9zZS5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogY29uc2VudFB1cnBvc2UuZGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFzb3VyY2VUcmFuc2xhdGlvbi5uYW1lIHx8IHNvdXJjZVRyYW5zbGF0aW9uLm5hbWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBgU291cmNlIHRyYW5zbGF0aW9uICgke3NvdXJjZUxhbmd1YWdlfSkgaGFzIG5vIG5hbWVgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHJhbnNsYXRpb25SZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XHJcbiAgICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXJnZXRMYW5nIG9mIHRhcmdldExhbmd1YWdlcykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICh0YXJnZXRMYW5nID09PSBzb3VyY2VMYW5ndWFnZSkge1xyXG4gICAgICAgICAgdHJhbnNsYXRpb25SZXN1bHRzW3RhcmdldExhbmddID0gc291cmNlVHJhbnNsYXRpb247XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWQgPSBhd2FpdCB0cmFuc2xhdGVPYmplY3QoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IHNvdXJjZVRyYW5zbGF0aW9uLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzb3VyY2VUcmFuc2xhdGlvbi5kZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRhcmdldExhbmcsXHJcbiAgICAgICAgICBzb3VyY2VMYW5ndWFnZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRyYW5zbGF0aW9uUmVzdWx0c1t0YXJnZXRMYW5nXSA9IHRyYW5zbGF0ZWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBgRmFpbGVkIHRvIHRyYW5zbGF0ZSB0byAke3RhcmdldExhbmd9YDtcclxuICAgICAgICBsb2dnZXIuZXJyb3IoXCJBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2U6IExhbmd1YWdlIGZhaWxlZFwiLCB7XHJcbiAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgIHRhcmdldExhbmcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyb3JNc2cpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uUmVzdWx0cykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIHRyYW5zbGF0ZSB0byBhbnkgbGFuZ3VhZ2VcIixcclxuICAgICAgICBkZXRhaWxzOiBlcnJvcnMuam9pbihcIiwgXCIpLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1lcmdlIHdpdGggZXhpc3RpbmcgdHJhbnNsYXRpb25zXHJcbiAgICBjb25zdCB1cGRhdGVkVHJhbnNsYXRpb25zID0geyAuLi5jdXJyZW50VHJhbnNsYXRpb25zLCAuLi50cmFuc2xhdGlvblJlc3VsdHMgfTtcclxuXHJcbiAgICAvLyBVcGRhdGUgc3VwcG9ydGVkIGxhbmd1YWdlc1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gY29uc2VudFB1cnBvc2Uuc3VwcG9ydGVkTGFuZ3VhZ2VzIHx8IFtcImVuXCJdO1xyXG4gICAgdGFyZ2V0TGFuZ3VhZ2VzLmZvckVhY2goKGxhbmcpID0+IHtcclxuICAgICAgaWYgKCFzdXBwb3J0ZWRMYW5ndWFnZXMuaW5jbHVkZXMobGFuZykpIHtcclxuICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXMucHVzaChsYW5nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLmNvbnNlbnRQdXJwb3NlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBjb25zZW50UHVycG9zZUlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IHVwZGF0ZWRUcmFuc2xhdGlvbnMsXHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2U6IENvbXBsZXRlZFwiLCB7XHJcbiAgICAgIGNvbnNlbnRQdXJwb3NlSWQsXHJcbiAgICAgIHN1Y2Nlc3NDb3VudDogT2JqZWN0LmtleXModHJhbnNsYXRpb25SZXN1bHRzKS5sZW5ndGgsXHJcbiAgICAgIGVycm9yQ291bnQ6IGVycm9ycy5sZW5ndGgsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9jbXMvZGF0YS1maWR1Y2lhcnkvY29uc2VudC1wdXJwb3Nlc1wiKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB0cmFuc2xhdGlvbnM6IHVwZGF0ZWRUcmFuc2xhdGlvbnMsXHJcbiAgICAgIHRyYW5zbGF0ZWRDb3VudDogT2JqZWN0LmtleXModHJhbnNsYXRpb25SZXN1bHRzKS5sZW5ndGgsXHJcbiAgICAgIGVycm9yczogZXJyb3JzLmxlbmd0aCA+IDAgPyBlcnJvcnMgOiB1bmRlZmluZWQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2dnZXIuZXJyb3IoXCJBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2U6IEZhaWxlZFwiLCB7XHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBjb25zZW50UHVycG9zZUlkLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogXCJGYWlsZWQgdG8gYXV0by10cmFuc2xhdGUgY29uc2VudCBwdXJwb3NlXCIsXHJcbiAgICAgIGRldGFpbHM6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCIsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZSB0byBtdWx0aXBsZSBsYW5ndWFnZXNcclxuICogXHJcbiAqIEBwYXJhbSBwcm9jZXNzaW5nUHVycG9zZUlkIC0gSUQgb2YgdGhlIHByb2Nlc3NpbmcgcHVycG9zZSB0byB0cmFuc2xhdGVcclxuICogQHBhcmFtIHRhcmdldExhbmd1YWdlcyAtIEFycmF5IG9mIGxhbmd1YWdlIGNvZGVzIHRvIHRyYW5zbGF0ZSB0b1xyXG4gKiBAcGFyYW0gc291cmNlTGFuZ3VhZ2UgLSBTb3VyY2UgbGFuZ3VhZ2UgKGRlZmF1bHRzIHRvICdlbicpXHJcbiAqIEBwYXJhbSBlbmdsaXNoRGF0YSAtIE9wdGlvbmFsIEVuZ2xpc2ggZGF0YSBmcm9tIGNvbnRleHQgKGZvciBuZXdseSBhZGRlZC9lZGl0ZWQgZmllbGRzKVxyXG4gKiBAcmV0dXJucyBTdWNjZXNzIHdpdGggdHJhbnNsYXRpb25zIG9yIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0b1RyYW5zbGF0ZVByb2Nlc3NpbmdQdXJwb3NlKFxyXG4gIHByb2Nlc3NpbmdQdXJwb3NlSWQ6IG51bWJlcixcclxuICB0YXJnZXRMYW5ndWFnZXM6IExhbmd1YWdlQ29kZVtdLFxyXG4gIHNvdXJjZUxhbmd1YWdlOiBMYW5ndWFnZUNvZGUgPSBcImVuXCIsXHJcbiAgZW5nbGlzaERhdGE/OiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgfVxyXG4pIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gIGlmICghc2Vzc2lvbj8udXNlcikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBsb2dnZXIuaW5mbyhcIkF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZTogU3RhcnRpbmdcIiwge1xyXG4gICAgICBwcm9jZXNzaW5nUHVycG9zZUlkLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZXMsXHJcbiAgICAgIHNvdXJjZUxhbmd1YWdlLFxyXG4gICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcclxuICAgICAgaGFzRW5nbGlzaERhdGE6ICEhZW5nbGlzaERhdGEsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRhcmdldExhbmd1YWdlcyB8fCB0YXJnZXRMYW5ndWFnZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBcIk5vIHRhcmdldCBsYW5ndWFnZXMgc3BlY2lmaWVkXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9jZXNzaW5nUHVycG9zZSA9IGF3YWl0IHByaXNtYS5wcm9jZXNzaW5nUHVycG9zZS5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHByb2Nlc3NpbmdQdXJwb3NlSWQgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdHJ1ZSxcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IHRydWUsXHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwcm9jZXNzaW5nUHVycG9zZSkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJQcm9jZXNzaW5nIHB1cnBvc2Ugbm90IGZvdW5kXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb25zID0gKHByb2Nlc3NpbmdQdXJwb3NlLnRyYW5zbGF0aW9ucyBhcyBhbnkpIHx8IHt9O1xyXG5cclxuICAgIC8vIFVzZSBwcm92aWRlZCBlbmdsaXNoRGF0YSBpZiBhdmFpbGFibGUgKGZvciBuZXdseSBhZGRlZC9lZGl0ZWQgZmllbGRzKSwgb3RoZXJ3aXNlIGZhbGwgYmFjayB0byBEQlxyXG4gICAgY29uc3Qgc291cmNlVHJhbnNsYXRpb24gPSBlbmdsaXNoRGF0YSB8fCBjdXJyZW50VHJhbnNsYXRpb25zW3NvdXJjZUxhbmd1YWdlXSB8fCB7XHJcbiAgICAgIG5hbWU6IHByb2Nlc3NpbmdQdXJwb3NlLm5hbWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBwcm9jZXNzaW5nUHVycG9zZS5kZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIXNvdXJjZVRyYW5zbGF0aW9uLm5hbWUgfHwgc291cmNlVHJhbnNsYXRpb24ubmFtZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IGBTb3VyY2UgdHJhbnNsYXRpb24gKCR7c291cmNlTGFuZ3VhZ2V9KSBoYXMgbm8gbmFtZWAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmFuc2xhdGlvblJlc3VsdHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcclxuICAgIGNvbnN0IGVycm9yczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHRhcmdldExhbmcgb2YgdGFyZ2V0TGFuZ3VhZ2VzKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHRhcmdldExhbmcgPT09IHNvdXJjZUxhbmd1YWdlKSB7XHJcbiAgICAgICAgICB0cmFuc2xhdGlvblJlc3VsdHNbdGFyZ2V0TGFuZ10gPSBzb3VyY2VUcmFuc2xhdGlvbjtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZCA9IGF3YWl0IHRyYW5zbGF0ZU9iamVjdChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogc291cmNlVHJhbnNsYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHNvdXJjZVRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICAgIHNvdXJjZUxhbmd1YWdlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdHJhbnNsYXRpb25SZXN1bHRzW3RhcmdldExhbmddID0gdHJhbnNsYXRlZDtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBlcnJvck1zZyA9IGBGYWlsZWQgdG8gdHJhbnNsYXRlIHRvICR7dGFyZ2V0TGFuZ31gO1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihcIkF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZTogTGFuZ3VhZ2UgZmFpbGVkXCIsIHtcclxuICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlcnJvcnMucHVzaChlcnJvck1zZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXModHJhbnNsYXRpb25SZXN1bHRzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBlcnJvcjogXCJGYWlsZWQgdG8gdHJhbnNsYXRlIHRvIGFueSBsYW5ndWFnZVwiLFxyXG4gICAgICAgIGRldGFpbHM6IGVycm9ycy5qb2luKFwiLCBcIiksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWVyZ2Ugd2l0aCBleGlzdGluZyB0cmFuc2xhdGlvbnNcclxuICAgIGNvbnN0IHVwZGF0ZWRUcmFuc2xhdGlvbnMgPSB7IC4uLmN1cnJlbnRUcmFuc2xhdGlvbnMsIC4uLnRyYW5zbGF0aW9uUmVzdWx0cyB9O1xyXG5cclxuICAgIC8vIFVwZGF0ZSBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXHJcbiAgICBjb25zdCBzdXBwb3J0ZWRMYW5ndWFnZXMgPSBwcm9jZXNzaW5nUHVycG9zZS5zdXBwb3J0ZWRMYW5ndWFnZXMgfHwgW1wiZW5cIl07XHJcbiAgICB0YXJnZXRMYW5ndWFnZXMuZm9yRWFjaCgobGFuZykgPT4ge1xyXG4gICAgICBpZiAoIXN1cHBvcnRlZExhbmd1YWdlcy5pbmNsdWRlcyhsYW5nKSkge1xyXG4gICAgICAgIHN1cHBvcnRlZExhbmd1YWdlcy5wdXNoKGxhbmcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBwcmlzbWEucHJvY2Vzc2luZ1B1cnBvc2UudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHByb2Nlc3NpbmdQdXJwb3NlSWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRyYW5zbGF0aW9uczogdXBkYXRlZFRyYW5zbGF0aW9ucyxcclxuICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXMsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2dnZXIuaW5mbyhcIkF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZTogQ29tcGxldGVkXCIsIHtcclxuICAgICAgcHJvY2Vzc2luZ1B1cnBvc2VJZCxcclxuICAgICAgc3VjY2Vzc0NvdW50OiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLmxlbmd0aCxcclxuICAgICAgZXJyb3JDb3VudDogZXJyb3JzLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS9jb25zZW50LXB1cnBvc2VzXCIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIHRyYW5zbGF0aW9uczogdXBkYXRlZFRyYW5zbGF0aW9ucyxcclxuICAgICAgdHJhbnNsYXRlZENvdW50OiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLmxlbmd0aCxcclxuICAgICAgZXJyb3JzOiBlcnJvcnMubGVuZ3RoID4gMCA/IGVycm9ycyA6IHVuZGVmaW5lZCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGxvZ2dlci5lcnJvcihcIkF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZTogRmFpbGVkXCIsIHtcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIHByb2Nlc3NpbmdQdXJwb3NlSWQsXHJcbiAgICAgIHRhcmdldExhbmd1YWdlcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOiBcIkZhaWxlZCB0byBhdXRvLXRyYW5zbGF0ZSBwcm9jZXNzaW5nIHB1cnBvc2VcIixcclxuICAgICAgZGV0YWlsczogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlVua25vd24gZXJyb3JcIixcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMlNBeVJzQiJ9
}),
"[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Step4Form",
    ()=>Step4Form
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$consent$2d$purpose$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/consent-purpose-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/types/languages.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/languages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$translations$2f$auto$2d$translate$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/translations/auto-translate-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$aaf01d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:aaf01d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$377747__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:377747 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$463d83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:463d83 [app-ssr] (ecmascript) <text/javascript>");
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
function Step4Form({ data, isEdit, consentPurposeId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { state: providerState, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$consent$2d$purpose$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConsentPurposeForm"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // For translations, use data.processingPurposes directly (has fresh DB data with translations)
    // Don't use context here because context is for tracking Step 2 changes, not for translations
    const processingPurposes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const pps = data.processingPurposes || [];
        return pps;
    }, [
        data.processingPurposes
    ]);
    // Get first language alphabetically (after excluding English)
    const firstLanguage = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"]).filter(([code])=>code !== "en").sort(([, a], [, b])=>a.name.localeCompare(b.name))[0]?.[0] || "hi";
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(firstLanguage);
    // Consent Purpose translations
    const [cpTranslations, setCpTranslations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Processing Purpose translations - keyed by processing purpose ref (id, tempId, or code)
    const [ppTranslations, setPpTranslations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Track if this is the first render to avoid false positive change detection
    const isFirstRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const prevCpEnglishDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize translations from context or database data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Helper to check if translations object has actual values
        const hasActualTranslations = (trans)=>{
            return Object.values(trans).some((t)=>t.name.trim() || t.description.trim());
        };
        const hasActualPPTranslations = (trans)=>{
            return Object.values(trans).some((ppTrans)=>Object.values(ppTrans).some((t)=>t.name.trim() || t.description.trim()));
        };
        // Check if we have actual data in context (user already filled this step)
        if (hasActualTranslations(providerState.step4Data.cpTranslations) || hasActualPPTranslations(providerState.step4Data.ppTranslations)) {
            // Load from context
            setCpTranslations(providerState.step4Data.cpTranslations);
            setPpTranslations(providerState.step4Data.ppTranslations);
        } else if (data.consentPurpose) {
            // Load from database
            // Load consent purpose translations
            const cpTrans = {};
            Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"]).forEach(([langCode])=>{
                if (langCode !== "en") {
                    const trans = data.consentPurpose.translations?.[langCode];
                    cpTrans[langCode] = {
                        name: trans?.name || "",
                        description: trans?.description || ""
                    };
                }
            });
            setCpTranslations(cpTrans);
            // Load processing purpose translations from the current processingPurposes list
            if (processingPurposes.length > 0) {
                const ppTrans = {};
                processingPurposes.forEach((pp)=>{
                    // Use ref: id (if exists), tempId, or code
                    const ppRef = pp.id ? pp.id.toString() : pp.tempId || pp.purposeOfProcessingCode || "";
                    ppTrans[ppRef] = {};
                    Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"]).forEach(([langCode])=>{
                        if (langCode !== "en") {
                            const trans = pp.translations?.[langCode];
                            ppTrans[ppRef][langCode] = {
                                name: trans?.name || "",
                                description: trans?.description || ""
                            };
                        }
                    });
                });
                setPpTranslations(ppTrans);
            }
        }
    }, [
        data.consentPurpose,
        providerState.step4Data
    ]);
    // Clear translations when CP English source data changes (skip first render)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const currentCpData = providerState.step1Data || data.consentPurpose;
        if (!currentCpData) return;
        // Skip comparison on first render, just store the initial data
        if (isFirstRender.current) {
            prevCpEnglishDataRef.current = {
                name: currentCpData.name,
                description: currentCpData.description
            };
            isFirstRender.current = false;
            return;
        }
        // Now compare with previous data
        if (prevCpEnglishDataRef.current) {
            const nameChanged = currentCpData.name !== prevCpEnglishDataRef.current.name;
            const descChanged = (currentCpData.description || '') !== (prevCpEnglishDataRef.current.description || '');
            if (nameChanged || descChanged) {
                setCpTranslations({});
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("Consent purpose changed. Please re-translate.");
            }
        }
        // Update stored data
        prevCpEnglishDataRef.current = {
            name: currentCpData.name,
            description: currentCpData.description
        };
    }, [
        providerState.step1Data?.name,
        providerState.step1Data?.description
    ]);
    const handleCpTranslationChange = (lang, field, value)=>{
        setCpTranslations((prev)=>({
                ...prev,
                [lang]: {
                    ...prev[lang],
                    [field]: value
                }
            }));
    };
    const handlePpTranslationChange = (ppRef, lang, field, value)=>{
        setPpTranslations((prev)=>({
                ...prev,
                [ppRef]: {
                    ...prev[ppRef],
                    [lang]: {
                        ...prev[ppRef]?.[lang],
                        [field]: value
                    }
                }
            }));
    };
    const handleSaveTranslations = ()=>{
        // Save translations to context state
        dispatch({
            type: "SET_STEP4_DATA",
            payload: {
                cpTranslations,
                ppTranslations
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Translations saved to draft");
    };
    // Get all languages except English for auto-translate
    const getTargetLanguages = ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGE_CODES"].filter((lang)=>lang !== 'en');
    };
    // Get languages that already have CP translations
    const getExistingCpLanguages = ()=>{
        return Object.keys(cpTranslations).filter((lang)=>{
            const trans = cpTranslations[lang];
            return trans.name || trans.description;
        });
    };
    // Handle auto-translate for both CP and PPs together
    const handleAutoTranslateAll = async (targetLanguages, sourceLanguage)=>{
        // First translate CP, then translate all PPs
        const cpResult = await handleAutoTranslateCP(targetLanguages, sourceLanguage);
        if (processingPurposes.length > 0) {
            const ppResult = await handleAutoTranslatePPs(targetLanguages, sourceLanguage);
            // Return combined result
            if (cpResult.success && ppResult.success) {
                return {
                    success: true
                };
            } else if (cpResult.success || ppResult.success) {
                return {
                    success: true,
                    errors: [
                        'Partial success'
                    ]
                };
            } else {
                return {
                    error: 'Translation failed'
                };
            }
        }
        return cpResult;
    };
    // Handle auto-translate for Consent Purpose only
    const handleAutoTranslateCP = async (targetLanguages, sourceLanguage)=>{
        // Get CP data from context (step1Data) or database
        const cpData = providerState.step1Data || data.consentPurpose;
        if (!cpData || !cpData.name?.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please complete Step 1 with consent purpose name first");
            return {
                error: "Consent purpose name is required"
            };
        }
        // CREATE MODE: Use translateTextToLanguages
        if (!isEdit) {
            try {
                // Translate name
                const nameResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$463d83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["translateTextToLanguages"])(cpData.name, targetLanguages, sourceLanguage);
                // Translate description if exists
                let descTranslations = {};
                if (cpData.description?.trim()) {
                    const descResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$463d83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["translateTextToLanguages"])(cpData.description, targetLanguages, sourceLanguage);
                    if (descResult.success && descResult.translations) {
                        descTranslations = descResult.translations;
                    }
                }
                if (nameResult.success && nameResult.translations) {
                    // Update local translations state
                    const newTranslations = {};
                    targetLanguages.forEach((lang)=>{
                        newTranslations[lang] = {
                            name: nameResult.translations[lang] || "",
                            description: descTranslations[lang] || ""
                        };
                    });
                    setCpTranslations((prev)=>({
                            ...prev,
                            ...newTranslations
                        }));
                    const successCount = targetLanguages.length;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Successfully translated consent purpose to ${successCount} language${successCount > 1 ? 's' : ''}`);
                    return {
                        success: true
                    };
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Translation failed");
                    return {
                        error: "Translation failed"
                    };
                }
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to translate");
                return {
                    error: "Translation failed"
                };
            }
        }
        // EDIT MODE: Update database with translations, passing fresh context data
        if (!consentPurposeId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Consent purpose ID not found");
            return {
                error: "Consent purpose ID not found"
            };
        }
        const id = parseInt(consentPurposeId);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$aaf01d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["autoTranslateConsentPurpose"])(id, targetLanguages, sourceLanguage, {
            name: cpData.name,
            description: cpData.description || null
        });
        if (result.success && result.translations) {
            // Update local translations state
            const newTranslations = {};
            Object.entries(result.translations).forEach(([lang, trans])=>{
                if (lang !== "en") {
                    newTranslations[lang] = {
                        name: trans?.name || "",
                        description: trans?.description || ""
                    };
                }
            });
            setCpTranslations((prev)=>({
                    ...prev,
                    ...newTranslations
                }));
        }
        return result;
    };
    // Handle auto-translate for Processing Purposes
    const handleAutoTranslatePPs = async (targetLanguages, sourceLanguage)=>{
        if (processingPurposes.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("No processing purposes to translate. Please add them in Step 2.");
            return {
                error: "No processing purposes found"
            };
        }
        // CREATE MODE or EDIT MODE: Translate each processing purpose
        let successCount = 0;
        let errorCount = 0;
        for (const pp of processingPurposes){
            const ppRef = pp.id?.toString() || pp.tempId || pp.purposeOfProcessingCode || "";
            if (!pp.name?.trim()) {
                errorCount++;
                continue;
            }
            // EDIT MODE with ID: Use server-side translation with fresh context data
            if (isEdit && pp.id) {
                try {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$377747__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["autoTranslateProcessingPurpose"])(pp.id, targetLanguages, sourceLanguage, {
                        name: pp.name,
                        description: pp.description || null
                    });
                    if (result.success && result.translations) {
                        // Update local state
                        const newPPTranslations = {};
                        Object.entries(result.translations).forEach(([lang, trans])=>{
                            if (lang !== "en") {
                                newPPTranslations[lang] = {
                                    name: trans?.name || "",
                                    description: trans?.description || ""
                                };
                            }
                        });
                        setPpTranslations((prev)=>({
                                ...prev,
                                [ppRef]: {
                                    ...prev[ppRef],
                                    ...newPPTranslations
                                }
                            }));
                        successCount++;
                    } else {
                        errorCount++;
                    }
                } catch (error) {
                    errorCount++;
                }
            } else {
                // CREATE MODE or no ID: Use translateTextToLanguages
                try {
                    // Translate name
                    const nameResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$463d83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["translateTextToLanguages"])(pp.name, targetLanguages, sourceLanguage);
                    // Translate description if exists
                    let descTranslations = {};
                    if (pp.description?.trim()) {
                        const descResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$463d83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["translateTextToLanguages"])(pp.description, targetLanguages, sourceLanguage);
                        if (descResult.success && descResult.translations) {
                            descTranslations = descResult.translations;
                        }
                    }
                    if (nameResult.success && nameResult.translations) {
                        // Update local state
                        const newPPTranslations = {};
                        targetLanguages.forEach((lang)=>{
                            newPPTranslations[lang] = {
                                name: nameResult.translations[lang] || "",
                                description: descTranslations[lang] || ""
                            };
                        });
                        setPpTranslations((prev)=>({
                                ...prev,
                                [ppRef]: {
                                    ...prev[ppRef],
                                    ...newPPTranslations
                                }
                            }));
                        successCount++;
                    } else {
                        errorCount++;
                    }
                } catch (error) {
                    errorCount++;
                }
            }
        }
        if (successCount > 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Successfully translated ${successCount} processing purpose${successCount > 1 ? 's' : ''}`);
            return {
                success: true,
                translatedCount: successCount
            };
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to translate processing purposes");
            return {
                error: "Translation failed"
            };
        }
    };
    const handleNext = async ()=>{
        // Save translations to context state
        dispatch({
            type: "SET_STEP4_DATA",
            payload: {
                cpTranslations,
                ppTranslations
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Translations saved");
        const params = new URLSearchParams();
        params.set("step", "5");
        if (consentPurposeId) {
            params.set("id", consentPurposeId);
        }
        const basePath = isEdit && consentPurposeId ? `/cms/data-fiduciary/consent-purposes/${consentPurposeId}/edit` : `/cms/data-fiduciary/consent-purposes/new`;
        router.push(`${basePath}?${params.toString()}`);
    };
    const handlePrevious = ()=>{
        const params = new URLSearchParams();
        params.set("step", "3");
        if (consentPurposeId) {
            params.set("id", consentPurposeId);
        }
        const basePath = isEdit && consentPurposeId ? `/cms/data-fiduciary/consent-purposes/${consentPurposeId}/edit` : `/cms/data-fiduciary/consent-purposes/new`;
        router.push(`${basePath}?${params.toString()}`);
    };
    const selectedLangInfo = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][selectedLanguage];
    const translatedCount = Object.values(cpTranslations).filter((t)=>(t.name || "").trim() || (t.description || "").trim()).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b px-6 py-5 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold tracking-tight",
                                        children: "Step 4. Translations"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$translations$2f$auto$2d$translate$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AutoTranslateButton"], {
                                        targetLanguages: getTargetLanguages(),
                                        existingLanguages: getExistingCpLanguages(),
                                        sourceLanguage: "en",
                                        onTranslate: handleAutoTranslateAll,
                                        variant: "default",
                                        size: "sm",
                                        showLabel: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                        lineNumber: 506,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                lineNumber: 502,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    "Translated ",
                                    translatedCount,
                                    " / 22"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                lineNumber: 516,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                        lineNumber: 501,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Add translations for consent purpose and processing purposes in 22 Indian languages"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                        lineNumber: 520,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                lineNumber: 500,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-4 h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-r bg-muted/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold mb-3 text-sm",
                                        children: "Select Language"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                        lineNumber: 531,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"]).filter(([code])=>code !== "en").sort(([, a], [, b])=>a.name.localeCompare(b.name)) // Sort alphabetically by English name
                                        .map(([langCode, lang], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setSelectedLanguage(langCode),
                                                className: `w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedLanguage === langCode ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                index + 1,
                                                                ". ",
                                                                lang.name,
                                                                " (",
                                                                lang.nativeName,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 25
                                                        }, this),
                                                        (cpTranslations[langCode]?.name || cpTranslations[langCode]?.description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 w-2 rounded-full bg-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 23
                                                }, this)
                                            }, langCode, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                                lineNumber: 537,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                        lineNumber: 532,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                lineNumber: 530,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                            lineNumber: 529,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-3 p-6 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-lg",
                                        children: [
                                            selectedLangInfo.name,
                                            " (",
                                            selectedLangInfo.nativeName,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                        lineNumber: 567,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                    lineNumber: 566,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 rounded-lg border p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold",
                                            children: "Purpose Master Name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                            lineNumber: 574,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: `Enter name in ${selectedLangInfo.name}`,
                                            value: cpTranslations[selectedLanguage]?.name || "",
                                            onChange: (e)=>handleCpTranslationChange(selectedLanguage, "name", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                            lineNumber: 575,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold mt-4",
                                            children: "Purpose Master Description"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                            lineNumber: 587,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                            placeholder: `Enter description in ${selectedLangInfo.name}`,
                                            value: cpTranslations[selectedLanguage]?.description || "",
                                            onChange: (e)=>handleCpTranslationChange(selectedLanguage, "description", e.target.value),
                                            rows: 4
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                            lineNumber: 590,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                    lineNumber: 573,
                                    columnNumber: 13
                                }, this),
                                processingPurposes && processingPurposes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold",
                                            children: "List of Purpose Sub Masters"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                            lineNumber: 607,
                                            columnNumber: 17
                                        }, this),
                                        processingPurposes.map((pp, index)=>{
                                            // Get processing purpose ref (id, tempId, or code)
                                            const ppRef = pp.id ? pp.id.toString() : pp.tempId || pp.purposeOfProcessingCode || "";
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-lg border p-4 space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-center w-6 h-6 rounded-full bg-muted text-xs font-medium",
                                                                children: index + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                                                lineNumber: 622,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: "font-medium text-sm",
                                                                children: pp.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                                                lineNumber: 625,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                                        lineNumber: 621,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium",
                                                                children: "Purpose Sub Master Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                                                lineNumber: 629,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                placeholder: `Enter name in ${selectedLangInfo.name}`,
                                                                value: ppTranslations[ppRef]?.[selectedLanguage]?.name || "",
                                                                onChange: (e)=>handlePpTranslationChange(ppRef, selectedLanguage, "name", e.target.value),
                                                                className: "mt-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                                                lineNumber: 632,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                                        lineNumber: 628,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium",
                                                                children: "Purpose Sub Master Description"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                                                lineNumber: 651,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                                                placeholder: `Enter description in ${selectedLangInfo.name}`,
                                                                value: ppTranslations[ppRef]?.[selectedLanguage]?.description || "",
                                                                onChange: (e)=>handlePpTranslationChange(ppRef, selectedLanguage, "description", e.target.value),
                                                                rows: 3,
                                                                className: "mt-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                                                lineNumber: 654,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                                        lineNumber: 650,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, ppRef, true, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                                lineNumber: 617,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                    lineNumber: 606,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: handleSaveTranslations,
                                        disabled: isLoading,
                                        className: "w-full",
                                        children: [
                                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "mr-2 h-4 w-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                                lineNumber: 687,
                                                columnNumber: 31
                                            }, this),
                                            "Save Translations"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                        lineNumber: 680,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                    lineNumber: 679,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                            lineNumber: 564,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                    lineNumber: 527,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 px-6 py-4 border-t bg-background sticky bottom-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            onClick: handlePrevious,
                            children: "Previous"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                            lineNumber: 698,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            onClick: handleNext,
                            className: "min-w-[100px]",
                            disabled: isLoading,
                            children: [
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "mr-2 h-4 w-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                                    lineNumber: 707,
                                    columnNumber: 27
                                }, this),
                                "Save and Continue"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                            lineNumber: 701,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                    lineNumber: 697,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
                lineNumber: 696,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step4-form.tsx",
        lineNumber: 498,
        columnNumber: 5
    }, this);
}
}),
"[project]/actions/data:9f7dce [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"400d36f9d10e31e8aa1234186c73eca060aab5f5e5":"saveConsentPurposeFromClientState"},"actions/consent-purpose-form.ts",""] */ __turbopack_context__.s([
    "saveConsentPurposeFromClientState",
    ()=>saveConsentPurposeFromClientState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var saveConsentPurposeFromClientState = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("400d36f9d10e31e8aa1234186c73eca060aab5f5e5", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveConsentPurposeFromClientState"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY29uc2VudC1wdXJwb3NlLWZvcm0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcbi8qKlxyXG4gKiBPcGVuIEJoYXJhdCBEaWdpdGFsIENvbnNlbnQgYnkgSURmeVxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjUgQmFsZG9yIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQgKElEZnkpXHJcbiAqIFxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBQcml2eSBQdWJsaWMgTGljZW5zZS5cclxuICogU2VlIExJQ0VOU0UubWQgZm9yIHRoZSBmdWxsIHRlcm1zIG9mIHVzZS5cclxuICogXHJcbiAqIFVuYXV0aG9yaXplZCBjb3B5aW5nLCBtb2RpZmljYXRpb24sIGRpc3RyaWJ1dGlvbiwgb3IgY29tbWVyY2lhbCB1c2VcclxuICogaXMgc3RyaWN0bHkgcHJvaGliaXRlZCB3aXRob3V0IHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbiBmcm9tIElEZnkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgUmVzb3VyY2VzIH0gZnJvbSBcIkAvbGliL2NvbnN0YW50cy9yYmFjXCI7XHJcbmltcG9ydCB7IGhhc1Blcm1pc3Npb24gfSBmcm9tIFwiQC9saWIvcmJhY1wiO1xyXG5pbXBvcnQgeyBsb2dBdWRpdCB9IGZyb20gXCJAL2xpYi9hdWRpdFwiO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tIFwiQC9saWIvdXRpbHMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IHNhdmVDb25zZW50UHVycG9zZUZyb21DbGllbnRTdGF0ZSBhcyBzYXZlQ29uc2VudFB1cnBvc2VGcm9tQ2xpZW50U3RhdGVTZXJ2aWNlIH0gZnJvbSBcIkAvbGliL3NlcnZpY2VzL2NvbnNlbnQtcHVycG9zZS1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmNvbnN0IHNhdmVDb25zZW50UHVycG9zZVNjaGVtYSA9IHoub2JqZWN0KHtcclxuICBjbGllbnRTdGF0ZTogei5hbnkoKSxcclxuICBhY3Rpb246IHouZW51bShbXCJwdWJsaXNoXCIsIFwiZHJhZnRcIl0pLFxyXG4gIGNvbnNlbnRQdXJwb3NlSWQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSxcclxuICBwcm9wYWdhdGVUb0JQSWRzOiB6LmFycmF5KHoubnVtYmVyKCkpLm9wdGlvbmFsKCksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVDb25zZW50UHVycG9zZUZyb21DbGllbnRTdGF0ZShcclxuICBkYXRhOiB6LmluZmVyPHR5cGVvZiBzYXZlQ29uc2VudFB1cnBvc2VTY2hlbWE+XHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyAxLiBBdXRoZW50aWNhdGlvbiBDaGVja1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcclxuICAgICAgbG9nZ2VyLndhcm4oXCJBY3Rpb24gYXR0ZW1wdCB3aXRob3V0IHNlc3Npb25cIiwge1xyXG4gICAgICAgIHJlc291cmNlOiBSZXNvdXJjZXMuQ09OU0VOVF9QVVJQT1NFLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogXCJVbmF1dGhvcml6ZWQ6IFlvdSBtdXN0IGJlIGxvZ2dlZCBpbiB0byBwZXJmb3JtIHRoaXMgYWN0aW9uLlwiLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIERldGVybWluZSBhY3Rpb24gdHlwZSBiYXNlZCBvbiB3aGV0aGVyIGNvbnNlbnRQdXJwb3NlSWQgZXhpc3RzXHJcbiAgICBjb25zdCBhY3Rpb25UeXBlID0gZGF0YS5jb25zZW50UHVycG9zZUlkID8gQWN0aW9ucy5VUERBVEUgOiBBY3Rpb25zLkNSRUFURTtcclxuXHJcbiAgICAvLyAzLiBQZXJtaXNzaW9uIENoZWNrXHJcbiAgICBjb25zdCB1c2VyUm9sZXMgPSBzZXNzaW9uLnVzZXIucm9sZXMgfHwgW107XHJcbiAgICBjb25zdCBpc0FsbG93ZWQgPSBoYXNQZXJtaXNzaW9uKFxyXG4gICAgICB1c2VyUm9sZXMsXHJcbiAgICAgIFJlc291cmNlcy5DT05TRU5UX1BVUlBPU0UsXHJcbiAgICAgIGFjdGlvblR5cGVcclxuICAgICk7XHJcblxyXG4gICAgaWYgKCFpc0FsbG93ZWQpIHtcclxuICAgICAgbG9nZ2VyLndhcm4oXCJBY3Rpb24gcGVybWlzc2lvbiBkZW5pZWRcIiwge1xyXG4gICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICAgIHJlc291cmNlOiBSZXNvdXJjZXMuQ09OU0VOVF9QVVJQT1NFLFxyXG4gICAgICAgIGFjdGlvbjogYWN0aW9uVHlwZSxcclxuICAgICAgICByb2xlczogdXNlclJvbGVzLm1hcCgocjogYW55KSA9PiByLnJvbGUubmFtZSksXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBgUGVybWlzc2lvbiBEZW5pZWQ6IFlvdSBkbyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvICR7YWN0aW9uVHlwZX0gJHtSZXNvdXJjZXMuQ09OU0VOVF9QVVJQT1NFfS5gLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDQuIElucHV0IFZhbGlkYXRpb25cclxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSBzYXZlQ29uc2VudFB1cnBvc2VTY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xyXG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgbG9nZ2VyLndhcm4oXCJBY3Rpb24gdmFsaWRhdGlvbiBmYWlsZWRcIiwge1xyXG4gICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICAgIHJlc291cmNlOiBSZXNvdXJjZXMuQ09OU0VOVF9QVVJQT1NFLFxyXG4gICAgICAgIGFjdGlvbjogYWN0aW9uVHlwZSxcclxuICAgICAgICBlcnJvcnM6IHZhbGlkYXRpb25SZXN1bHQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIElucHV0XCIsXHJcbiAgICAgICAgdmFsaWRhdGlvbkVycm9yczogdmFsaWRhdGlvblJlc3VsdC5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNS4gRXhlY3V0ZVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2F2ZUNvbnNlbnRQdXJwb3NlRnJvbUNsaWVudFN0YXRlU2VydmljZShcclxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5kYXRhLmNsaWVudFN0YXRlLFxyXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LmRhdGEuYWN0aW9uLFxyXG4gICAgICBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuZGF0YS5jb25zZW50UHVycG9zZUlkLFxyXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LmRhdGEucHJvcGFnYXRlVG9CUElkc1xyXG4gICAgKTtcclxuXHJcbiAgICAvLyA2LiBBdWRpdCBMb2dnaW5nXHJcbiAgICBhd2FpdCBsb2dBdWRpdCh7XHJcbiAgICAgIGFjdGlvbjogYWN0aW9uVHlwZSxcclxuICAgICAgcmVzb3VyY2U6IFJlc291cmNlcy5DT05TRU5UX1BVUlBPU0UsXHJcbiAgICAgIHJlc291cmNlSWQ6IHJlc3VsdC5pZCxcclxuICAgICAgcGVyZm9ybWVkQnlVc2VySWQ6IHNlc3Npb24udXNlci5pZCxcclxuICAgICAgcGF5bG9hZDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLFxyXG4gICAgICByZXN1bHQ6IHsgaWQ6IHJlc3VsdC5pZCB9LFxyXG4gICAgICBzdGF0dXM6IFwiU1VDQ0VTU1wiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBY3Rpb24gZXhlY3V0ZWQgc3VjY2Vzc2Z1bGx5XCIsIHtcclxuICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgIHJlc291cmNlOiBSZXNvdXJjZXMuQ09OU0VOVF9QVVJQT1NFLFxyXG4gICAgICBhY3Rpb246IGFjdGlvblR5cGUsXHJcbiAgICAgIHJlc291cmNlSWQ6IHJlc3VsdC5pZCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS9jb25zZW50LXB1cnBvc2VzXCIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBpZDogcmVzdWx0LmlkIH0gfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbG9nZ2VyLmVycm9yKFwiQWN0aW9uIGV4ZWN1dGlvbiBmYWlsZWRcIiwge1xyXG4gICAgICBlcnJvcixcclxuICAgICAgcmVzb3VyY2U6IFJlc291cmNlcy5DT05TRU5UX1BVUlBPU0UsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIixcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMFRBNEJzQiJ9
}),
"[project]/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
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
function SelectContent({ className, children, position = "popper", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
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
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
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
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
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
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
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
;
}),
"[project]/actions/data:3d24ce [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40b1b85e0c514b2f8ee7f2130f5243b52de51d3efa":"getNextVersionsForBPCodes"},"actions/business-processes.ts",""] */ __turbopack_context__.s([
    "getNextVersionsForBPCodes",
    ()=>getNextVersionsForBPCodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getNextVersionsForBPCodes = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40b1b85e0c514b2f8ee7f2130f5243b52de51d3efa", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getNextVersionsForBPCodes"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYnVzaW5lc3MtcHJvY2Vzc2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG4vKipcclxuICogT3BlbiBCaGFyYXQgRGlnaXRhbCBDb25zZW50IGJ5IElEZnlcclxuICogQ29weXJpZ2h0IChjKSAyMDI1IEJhbGRvciBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIChJRGZ5KVxyXG4gKiBcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgUHJpdnkgUHVibGljIExpY2Vuc2UuXHJcbiAqIFNlZSBMSUNFTlNFLm1kIGZvciB0aGUgZnVsbCB0ZXJtcyBvZiB1c2UuXHJcbiAqIFxyXG4gKiBVbmF1dGhvcml6ZWQgY29weWluZywgbW9kaWZpY2F0aW9uLCBkaXN0cmlidXRpb24sIG9yIGNvbW1lcmNpYWwgdXNlXHJcbiAqIGlzIHN0cmljdGx5IHByb2hpYml0ZWQgd2l0aG91dCBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24gZnJvbSBJRGZ5LlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIFJlc291cmNlcyB9IGZyb20gXCJAL2xpYi9jb25zdGFudHMvcmJhY1wiO1xyXG5pbXBvcnQgeyBoYXNQZXJtaXNzaW9uIH0gZnJvbSBcIkAvbGliL3JiYWNcIjtcclxuaW1wb3J0IHsgbG9nQXVkaXQgfSBmcm9tIFwiQC9saWIvYXVkaXRcIjtcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIkAvbGliL3V0aWxzL2xvZ2dlclwiO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgY3JlYXRlU2FmZUFjdGlvbiB9IGZyb20gXCJAL2xpYi9zYWZlLWFjdGlvblwiO1xyXG5pbXBvcnQge1xyXG4gIGRlbGV0ZUJ1c2luZXNzUHJvY2VzcyBhcyBkZWxldGVCdXNpbmVzc1Byb2Nlc3NTZXJ2aWNlLFxyXG4gIGdldEFsbEJ1c2luZXNzUHJvY2Vzc2VzIGFzIGdldEFsbEJ1c2luZXNzUHJvY2Vzc2VzU2VydmljZSxcclxuICBnZXRCdXNpbmVzc1Byb2Nlc3NCeUlkIGFzIGdldEJ1c2luZXNzUHJvY2Vzc0J5SWRTZXJ2aWNlLFxyXG4gIGdldEJ1c2luZXNzUHJvY2Vzc0Zvcm1EYXRhIGFzIGdldEJ1c2luZXNzUHJvY2Vzc0Zvcm1EYXRhU2VydmljZSxcclxuICBnZXRQdWJsaXNoZWRDb25zZW50UHVycG9zZXMgYXMgZ2V0UHVibGlzaGVkQ29uc2VudFB1cnBvc2VzU2VydmljZSxcclxuICBzYXZlT3JVcGRhdGVCdXNpbmVzc1Byb2Nlc3NXaXRoVmVyc2lvbmluZyBhcyBzYXZlT3JVcGRhdGVCdXNpbmVzc1Byb2Nlc3NXaXRoVmVyc2lvbmluZ1NlcnZpY2UsXHJcbn0gZnJvbSBcIkAvbGliL3NlcnZpY2VzL2J1c2luZXNzLXByb2Nlc3Nlcy1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldEJ1c2luZXNzUHJvY2Vzc1dpdGhGdWxsRGF0YUJ5SWQgYXMgZ2V0QnVzaW5lc3NQcm9jZXNzV2l0aEZ1bGxEYXRhQnlJZFNlcnZpY2UgfSBmcm9tIFwiQC9saWIvc2VydmljZXMvbm90aWNlcy1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbi8vIFJlYWQgb3BlcmF0aW9ucyAtIE5vIFJCQUMgd3JhcHBlciBuZWVkZWQgKGhhbmRsZWQgYXQgcGFnZSBsZXZlbClcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJ1c2luZXNzUHJvY2Vzc2VzKCkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZ2V0QWxsQnVzaW5lc3NQcm9jZXNzZXNTZXJ2aWNlKCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBnZXRCdXNpbmVzc1Byb2Nlc3NlcyBhY3Rpb246XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCdXNpbmVzc1Byb2Nlc3NCeUlkKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGdldEJ1c2luZXNzUHJvY2Vzc0J5SWRTZXJ2aWNlKGlkKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdldEJ1c2luZXNzUHJvY2Vzc0J5SWQgYWN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRlbGV0ZUJ1c2luZXNzUHJvY2Vzc1NjaGVtYSA9IHoub2JqZWN0KHtcclxuICBpZDogei5udW1iZXIoKSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQnVzaW5lc3NQcm9jZXNzID0gY3JlYXRlU2FmZUFjdGlvbihcclxuICB7IHJlc291cmNlOiBSZXNvdXJjZXMuQlVTSU5FU1NfUFJPQ0VTUywgYWN0aW9uOiBBY3Rpb25zLkRFTEVURSB9LFxyXG4gIGRlbGV0ZUJ1c2luZXNzUHJvY2Vzc1NjaGVtYSxcclxuICBhc3luYyAoaW5wdXQsIHVzZXIpID0+IHtcclxuICAgIGF3YWl0IGRlbGV0ZUJ1c2luZXNzUHJvY2Vzc1NlcnZpY2UoaW5wdXQuaWQpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY21zL2RhdGEtZmlkdWNpYXJ5L2J1c2luZXNzLXByb2Nlc3Nlc1wiKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQdWJsaXNoZWRDb25zZW50UHVycG9zZXMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFRPRE86IEFkZCBSQkFDIGNoZWNrIGhlcmVcclxuICAgIHJldHVybiBhd2FpdCBnZXRQdWJsaXNoZWRDb25zZW50UHVycG9zZXNTZXJ2aWNlKCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBnZXRQdWJsaXNoZWRDb25zZW50UHVycG9zZXMgYWN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QnVzaW5lc3NQcm9jZXNzRGF0YSgpIHtcclxuICB0cnkge1xyXG4gICAgLy8gVE9ETzogQWRkIFJCQUMgY2hlY2sgaGVyZVxyXG4gICAgcmV0dXJuIGF3YWl0IGdldEJ1c2luZXNzUHJvY2Vzc0Zvcm1EYXRhU2VydmljZSgpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0QnVzaW5lc3NQcm9jZXNzRGF0YSBhY3Rpb246XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbnNlbnRQdXJwb3NlczogW10sXHJcbiAgICAgIHVzZXJBdHRyaWJ1dGVzOiBbXSxcclxuICAgICAgZGF0YVByb2Nlc3NvcnM6IFtdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCdXNpbmVzc1Byb2Nlc3NXaXRoRnVsbERhdGEoXHJcbiAgYnVzaW5lc3NQcm9jZXNzSWQ6IG51bWJlclxyXG4pIHtcclxuICB0cnkge1xyXG4gICAgLy8gVE9ETzogQWRkIFJCQUMgY2hlY2sgaGVyZVxyXG4gICAgcmV0dXJuIGF3YWl0IGdldEJ1c2luZXNzUHJvY2Vzc1dpdGhGdWxsRGF0YUJ5SWRTZXJ2aWNlKGJ1c2luZXNzUHJvY2Vzc0lkKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdldEJ1c2luZXNzUHJvY2Vzc1dpdGhGdWxsRGF0YSBhY3Rpb246XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLy8gWm9kIHNjaGVtYSBmb3IgYnVzaW5lc3MgcHJvY2VzcyBzYXZlL3B1Ymxpc2hcclxuY29uc3Qgc2F2ZUJ1c2luZXNzUHJvY2Vzc1NjaGVtYSA9IHoub2JqZWN0KHtcclxuICBjbGllbnRTdGF0ZTogei5hbnkoKSwgLy8gQnVzaW5lc3NQcm9jZXNzU3RhdGUgZnJvbSBjb250ZXh0IC0gY29tcGxleCBuZXN0ZWQgc3RydWN0dXJlXHJcbiAgY3JlYXRlZEJ5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgYnVzaW5lc3NQcm9jZXNzSWQ6IHoubnVtYmVyKCkub3B0aW9uYWwoKSxcclxuICBzdGF0dXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxufSk7XHJcblxyXG4vKipcclxuICogU2F2ZSBvciBwdWJsaXNoIGJ1c2luZXNzIHByb2Nlc3Mgd2l0aCBhdXRvbWF0aWMgdmVyc2lvbmluZ1xyXG4gKlxyXG4gKiBUaGlzIGFjdGlvbiB1c2VzIHRoZSBmdWxsIGNvbnRleHQgc3RhdGUgdG8gZGV0ZWN0IGJyZWFraW5nIGNoYW5nZXNcclxuICogYW5kIGF1dG9tYXRpY2FsbHkgY3JlYXRlIG5ldyB2ZXJzaW9ucyB3aGVuIG5lZWRlZC5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlT3JQdWJsaXNoQnVzaW5lc3NQcm9jZXNzV2l0aFZlcnNpb25pbmcoXHJcbiAgaW5wdXQ6IHouaW5mZXI8dHlwZW9mIHNhdmVCdXNpbmVzc1Byb2Nlc3NTY2hlbWE+XHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyAxLiBBdXRoZW50aWNhdGlvbiBDaGVja1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcclxuICAgICAgbG9nZ2VyLndhcm4oXCJBY3Rpb24gYXR0ZW1wdCB3aXRob3V0IHNlc3Npb25cIiwge1xyXG4gICAgICAgIHJlc291cmNlOiBSZXNvdXJjZXMuQlVTSU5FU1NfUFJPQ0VTUyxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IFwiVW5hdXRob3JpemVkOiBZb3UgbXVzdCBiZSBsb2dnZWQgaW4gdG8gcGVyZm9ybSB0aGlzIGFjdGlvbi5cIixcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAyLiBEZXRlcm1pbmUgYWN0aW9uIHR5cGUgYmFzZWQgb24gd2hldGhlciBidXNpbmVzc1Byb2Nlc3NJZCBleGlzdHNcclxuICAgIGNvbnN0IGFjdGlvblR5cGUgPSBpbnB1dC5idXNpbmVzc1Byb2Nlc3NJZFxyXG4gICAgICA/IEFjdGlvbnMuVVBEQVRFXHJcbiAgICAgIDogQWN0aW9ucy5DUkVBVEU7XHJcblxyXG4gICAgLy8gMy4gUGVybWlzc2lvbiBDaGVja1xyXG4gICAgY29uc3QgdXNlclJvbGVzID0gc2Vzc2lvbi51c2VyLnJvbGVzIHx8IFtdO1xyXG4gICAgY29uc3QgaXNBbGxvd2VkID0gaGFzUGVybWlzc2lvbihcclxuICAgICAgdXNlclJvbGVzLFxyXG4gICAgICBSZXNvdXJjZXMuQlVTSU5FU1NfUFJPQ0VTUyxcclxuICAgICAgYWN0aW9uVHlwZVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIWlzQWxsb3dlZCkge1xyXG4gICAgICBsb2dnZXIud2FybihcIkFjdGlvbiBwZXJtaXNzaW9uIGRlbmllZFwiLCB7XHJcbiAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgICAgcmVzb3VyY2U6IFJlc291cmNlcy5CVVNJTkVTU19QUk9DRVNTLFxyXG4gICAgICAgIGFjdGlvbjogYWN0aW9uVHlwZSxcclxuICAgICAgICByb2xlczogdXNlclJvbGVzLm1hcCgocjogYW55KSA9PiByLnJvbGUubmFtZSksXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBgUGVybWlzc2lvbiBEZW5pZWQ6IFlvdSBkbyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvICR7YWN0aW9uVHlwZX0gJHtSZXNvdXJjZXMuQlVTSU5FU1NfUFJPQ0VTU30uYCxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA0LiBJbnB1dCBWYWxpZGF0aW9uXHJcbiAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gc2F2ZUJ1c2luZXNzUHJvY2Vzc1NjaGVtYS5zYWZlUGFyc2UoaW5wdXQpO1xyXG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgbG9nZ2VyLndhcm4oXCJBY3Rpb24gdmFsaWRhdGlvbiBmYWlsZWRcIiwge1xyXG4gICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICAgIHJlc291cmNlOiBSZXNvdXJjZXMuQlVTSU5FU1NfUFJPQ0VTUyxcclxuICAgICAgICBhY3Rpb246IGFjdGlvblR5cGUsXHJcbiAgICAgICAgZXJyb3JzOiB2YWxpZGF0aW9uUmVzdWx0LmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBJbnB1dFwiLFxyXG4gICAgICAgIHZhbGlkYXRpb25FcnJvcnM6IHZhbGlkYXRpb25SZXN1bHQuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZSBjcmVhdGVkQnkgZnJvbSBpbnB1dCBpZiBwcm92aWRlZCwgb3RoZXJ3aXNlIHVzZSBhdXRoZW50aWNhdGVkIHVzZXJcclxuICAgIGNvbnN0IGNyZWF0ZWRCeSA9IHZhbGlkYXRpb25SZXN1bHQuZGF0YS5jcmVhdGVkQnkgfHwgc2Vzc2lvbi51c2VyLmlkO1xyXG5cclxuICAgIC8vIENhbGwgdGhlIHZlcnNpb25pbmcgc2VydmljZVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2F2ZU9yVXBkYXRlQnVzaW5lc3NQcm9jZXNzV2l0aFZlcnNpb25pbmdTZXJ2aWNlKFxyXG4gICAgICBpbnB1dC5jbGllbnRTdGF0ZSxcclxuICAgICAgY3JlYXRlZEJ5LFxyXG4gICAgICBpbnB1dC5idXNpbmVzc1Byb2Nlc3NJZCxcclxuICAgICAgaW5wdXQuc3RhdHVzXHJcbiAgICApO1xyXG5cclxuICAgIC8vIElmIGEgbmV3IHZlcnNpb24gd2FzIGNyZWF0ZWQgYW5kIHB1Ymxpc2hlZCwgbm90aWZ5IGRhdGEgcHJpbmNpcGFsc1xyXG4gICAgaWYgKFxyXG4gICAgICByZXN1bHQuaXNOZXdWZXJzaW9uICYmXHJcbiAgICAgIGlucHV0LnN0YXR1cyA9PT0gXCJwdWJsaXNoZWRcIiAmJlxyXG4gICAgICBpbnB1dC5idXNpbmVzc1Byb2Nlc3NJZCAmJlxyXG4gICAgICBpbnB1dC5jbGllbnRTdGF0ZS5zdGVwMURhdGE/LmNvZGVcclxuICAgICkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgbm90aWZ5RGF0YVByaW5jaXBhbHNPZlZlcnNpb25DaGFuZ2UgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICAgIFwiQC9saWIvc2VydmljZXMvYnAtdmVyc2lvbi1jaGFuZ2Utbm90aWZpY2F0aW9uLXNlcnZpY2VcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgb2xkIHZlcnNpb24gbnVtYmVyXHJcbiAgICAgICAgY29uc3Qgb2xkQnAgPSBhd2FpdCBwcmlzbWEuYnVzaW5lc3NQcm9jZXNzLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgd2hlcmU6IHsgaWQ6IGlucHV0LmJ1c2luZXNzUHJvY2Vzc0lkIH0sXHJcbiAgICAgICAgICBzZWxlY3Q6IHsgdmVyc2lvbjogdHJ1ZSB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAob2xkQnApIHtcclxuICAgICAgICAgIC8vIEdldCB0aGUgbmV3IGJ1c2luZXNzIHByb2Nlc3MgcHVibGljSWRcclxuICAgICAgICAgIGNvbnN0IG5ld0JwID0gYXdhaXQgcHJpc21hLmJ1c2luZXNzUHJvY2Vzcy5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHJlc3VsdC5idXNpbmVzc1Byb2Nlc3NJZCB9LFxyXG4gICAgICAgICAgICBzZWxlY3Q6IHsgcHVibGljSWQ6IHRydWUgfSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGlmIChuZXdCcCkge1xyXG4gICAgICAgICAgICAvLyBGaXJlIGFuZCBmb3JnZXQgLSBkb24ndCB3YWl0IGZvciBub3RpZmljYXRpb25zIHRvIGNvbXBsZXRlXHJcbiAgICAgICAgICAgIG5vdGlmeURhdGFQcmluY2lwYWxzT2ZWZXJzaW9uQ2hhbmdlKFxyXG4gICAgICAgICAgICAgIGlucHV0LmNsaWVudFN0YXRlLnN0ZXAxRGF0YS5jb2RlLFxyXG4gICAgICAgICAgICAgIG9sZEJwLnZlcnNpb24sXHJcbiAgICAgICAgICAgICAgbmV3QnAucHVibGljSWRcclxuICAgICAgICAgICAgKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgICAgICAgXCJFcnJvciBzZW5kaW5nIHZlcnNpb24gY2hhbmdlIG5vdGlmaWNhdGlvbnM6XCIsXHJcbiAgICAgICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW5pdGlhdGluZyB2ZXJzaW9uIGNoYW5nZSBub3RpZmljYXRpb25zOlwiLCBlcnJvcik7XHJcbiAgICAgICAgLy8gRG9uJ3QgZmFpbCB0aGUgc2F2ZSBvcGVyYXRpb24gaWYgbm90aWZpY2F0aW9uIGZhaWxzXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXZhbGlkYXRlIHBhdGhzXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9jbXMvZGF0YS1maWR1Y2lhcnkvYnVzaW5lc3MtcHJvY2Vzc2VzXCIpO1xyXG4gICAgaWYgKHJlc3VsdC5idXNpbmVzc1Byb2Nlc3NJZCkge1xyXG4gICAgICByZXZhbGlkYXRlUGF0aChcclxuICAgICAgICBgL2Ntcy9kYXRhLWZpZHVjaWFyeS9idXNpbmVzcy1wcm9jZXNzZXMvJHtyZXN1bHQuYnVzaW5lc3NQcm9jZXNzSWR9YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDYuIEF1ZGl0IExvZ2dpbmdcclxuICAgIGF3YWl0IGxvZ0F1ZGl0KHtcclxuICAgICAgYWN0aW9uOiBhY3Rpb25UeXBlLFxyXG4gICAgICByZXNvdXJjZTogUmVzb3VyY2VzLkJVU0lORVNTX1BST0NFU1MsXHJcbiAgICAgIHJlc291cmNlSWQ6IHJlc3VsdC5idXNpbmVzc1Byb2Nlc3NJZCxcclxuICAgICAgcGVyZm9ybWVkQnlVc2VySWQ6IHNlc3Npb24udXNlci5pZCxcclxuICAgICAgcGF5bG9hZDogdmFsaWRhdGlvblJlc3VsdC5kYXRhLFxyXG4gICAgICByZXN1bHQ6IHtcclxuICAgICAgICBidXNpbmVzc1Byb2Nlc3NJZDogcmVzdWx0LmJ1c2luZXNzUHJvY2Vzc0lkLFxyXG4gICAgICAgIGlzTmV3VmVyc2lvbjogcmVzdWx0LmlzTmV3VmVyc2lvbixcclxuICAgICAgICBoYXNCcmVha2luZ0NoYW5nZXM6IHJlc3VsdC5oYXNCcmVha2luZ0NoYW5nZXMsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXR1czogXCJTVUNDRVNTXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2dnZXIuaW5mbyhcIkFjdGlvbiBleGVjdXRlZCBzdWNjZXNzZnVsbHlcIiwge1xyXG4gICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcclxuICAgICAgcmVzb3VyY2U6IFJlc291cmNlcy5CVVNJTkVTU19QUk9DRVNTLFxyXG4gICAgICBhY3Rpb246IGFjdGlvblR5cGUsXHJcbiAgICAgIHJlc291cmNlSWQ6IHJlc3VsdC5idXNpbmVzc1Byb2Nlc3NJZCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBidXNpbmVzc1Byb2Nlc3NJZDogcmVzdWx0LmJ1c2luZXNzUHJvY2Vzc0lkLFxyXG4gICAgICAgIGlzTmV3VmVyc2lvbjogcmVzdWx0LmlzTmV3VmVyc2lvbixcclxuICAgICAgICBoYXNCcmVha2luZ0NoYW5nZXM6IHJlc3VsdC5oYXNCcmVha2luZ0NoYW5nZXMsXHJcbiAgICAgICAgYnJlYWtpbmdDaGFuZ2VzOiByZXN1bHQuYnJlYWtpbmdDaGFuZ2VzLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbG9nZ2VyLmVycm9yKFwiQWN0aW9uIGV4ZWN1dGlvbiBmYWlsZWRcIiwge1xyXG4gICAgICBlcnJvcixcclxuICAgICAgcmVzb3VyY2U6IFJlc291cmNlcy5CVVNJTkVTU19QUk9DRVNTLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6XHJcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIixcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBoaWdoZXN0IHZlcnNpb24gbnVtYmVyIGZvciBhIGJ1c2luZXNzIHByb2Nlc3MgY29kZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhpZ2hlc3RWZXJzaW9uRm9yQ29kZShjb2RlOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhpZ2hlc3RCUCA9IGF3YWl0IHByaXNtYS5idXNpbmVzc1Byb2Nlc3MuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgY29kZSB9LFxyXG4gICAgICBvcmRlckJ5OiB7IHZlcnNpb246IFwiZGVzY1wiIH0sXHJcbiAgICAgIHNlbGVjdDogeyB2ZXJzaW9uOiB0cnVlIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBoaWdoZXN0VmVyc2lvbjogaGlnaGVzdEJQPy52ZXJzaW9uIHx8IDAsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaGlnaGVzdCB2ZXJzaW9uOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGhpZ2hlc3QgdmVyc2lvblwiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IG5leHQgdmVyc2lvbnMgZm9yIG11bHRpcGxlIEJQIGNvZGVzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TmV4dFZlcnNpb25zRm9yQlBDb2Rlcyhjb2Rlczogc3RyaW5nW10pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgY29kZXMubWFwKGFzeW5jIChjb2RlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGlnaGVzdEJQID0gYXdhaXQgcHJpc21hLmJ1c2luZXNzUHJvY2Vzcy5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgd2hlcmU6IHsgY29kZSB9LFxyXG4gICAgICAgICAgb3JkZXJCeTogeyB2ZXJzaW9uOiBcImRlc2NcIiB9LFxyXG4gICAgICAgICAgc2VsZWN0OiB7IHZlcnNpb246IHRydWUgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgY29kZSxcclxuICAgICAgICAgIG5leHRWZXJzaW9uOiAoaGlnaGVzdEJQPy52ZXJzaW9uIHx8IDApICsgMSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB2ZXJzaW9uTWFwOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XHJcbiAgICByZXN1bHRzLmZvckVhY2goKHIpID0+IHtcclxuICAgICAgdmVyc2lvbk1hcFtyLmNvZGVdID0gci5uZXh0VmVyc2lvbjtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIHZlcnNpb25zOiB2ZXJzaW9uTWFwLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG5leHQgdmVyc2lvbnM6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggbmV4dCB2ZXJzaW9uc1wiIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ1RBcVRzQiJ9
}),
"[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BreakingChangeWarningDialog",
    ()=>BreakingChangeWarningDialog
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$3d24ce__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:3d24ce [app-ssr] (ecmascript) <text/javascript>");
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
function formatValue(value) {
    if (value === null || value === undefined) return "None";
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (Array.isArray(value)) return value.length === 0 ? "None" : value.join(", ");
    if (typeof value === "string" && value.trim() === "") return "None";
    return String(value);
}
function BreakingChangeWarningDialog({ open, onOpenChange, breakingChanges, currentVersion, highestVersion, consentPurposeId, selectedBPs, onSelectedBPsChange, onConfirm, affectedBPs, isLoading = false }) {
    const nextVersion = (highestVersion || currentVersion) + 1;
    const [visibleVersions, setVisibleVersions] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({});
    const [nextVersions, setNextVersions] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({});
    const [loadingVersions, setLoadingVersions] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    // Group BPs by code
    const groupedBPs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!affectedBPs) return {};
        const groups = {};
        affectedBPs.forEach((bp)=>{
            if (!groups[bp.code]) groups[bp.code] = [];
            groups[bp.code].push(bp);
        });
        // Sort versions descending
        Object.values(groups).forEach((group)=>group.sort((a, b)=>b.version - a.version));
        return groups;
    }, [
        affectedBPs
    ]);
    const uniqueCodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Object.keys(groupedBPs), [
        groupedBPs
    ]);
    // Fetch next versions from database
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchNextVersions = async ()=>{
            if (uniqueCodes.length === 0) return;
            setLoadingVersions(true);
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$3d24ce__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getNextVersionsForBPCodes"])(uniqueCodes);
                if (result.success && result.versions) {
                    setNextVersions(result.versions);
                }
            } catch (error) {
                console.error("Error fetching next versions:", error);
            } finally{
                setLoadingVersions(false);
            }
        };
        fetchNextVersions();
    }, [
        uniqueCodes
    ]);
    const getCurrentBP = (code)=>{
        const versions = groupedBPs[code];
        if (!versions || versions.length === 0) return null;
        // 1. Check if we have a specific visible version override
        if (visibleVersions[code]) {
            return versions.find((v)=>v.id === visibleVersions[code]) || versions[0];
        }
        // 2. Check if one of these versions is already selected
        const selected = versions.find((v)=>selectedBPs.includes(v.id));
        if (selected) return selected;
        // 3. Default to latest
        return versions[0];
    };
    const hasAffectedBPs = uniqueCodes.length > 0;
    const handleSelectAll = (checked)=>{
        if (checked) {
            // Select the current visible/latest version for all codes
            const newSelectedIds = uniqueCodes.map((code)=>getCurrentBP(code)?.id).filter((id)=>id !== undefined);
            onSelectedBPsChange(newSelectedIds);
        } else {
            onSelectedBPsChange([]);
        }
    };
    const handleSelectBP = (bpId, checked)=>{
        if (checked) {
            onSelectedBPsChange([
                ...selectedBPs,
                bpId
            ]);
        } else {
            onSelectedBPsChange(selectedBPs.filter((id)=>id !== bpId));
        }
    };
    const handleVersionChange = (code, newVersionIdStr)=>{
        const newVersionId = parseInt(newVersionIdStr);
        setVisibleVersions((prev)=>({
                ...prev,
                [code]: newVersionId
            }));
        // If currently selected, update the selection
        const versions = groupedBPs[code];
        const oldSelected = versions.find((v)=>selectedBPs.includes(v.id));
        if (oldSelected && oldSelected.id !== newVersionId) {
            const newSelected = selectedBPs.filter((id)=>id !== oldSelected.id);
            onSelectedBPsChange([
                ...newSelected,
                newVersionId
            ]);
        }
    };
    // Calculate selection state based on unique codes (rows)
    const selectedCount = uniqueCodes.filter((code)=>{
        const bp = getCurrentBP(code);
        return bp && selectedBPs.includes(bp.id);
    }).length;
    const allBPsSelected = hasAffectedBPs && selectedCount === uniqueCodes.length;
    const someBPsSelected = selectedCount > 0 && !allBPsSelected;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: " max-h-[85vh] flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-amber-100 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "h-5 w-5 text-amber-600"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                        className: "text-xl",
                                        children: "Create New Version?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                        className: "text-sm text-muted-foreground mt-1",
                                        children: [
                                            "The changes you made require creating version ",
                                            nextVersion
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto space-y-3 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground mb-4",
                            children: "The following breaking changes were detected:"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        breakingChanges.map((change, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border border-amber-200 bg-amber-50 rounded-lg space-y-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-0.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 w-2 rounded-full bg-amber-600"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                lineNumber: 224,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-sm text-amber-900",
                                                    children: change.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 19
                                                }, this),
                                                change.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-amber-800",
                                                    children: change.details
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 21
                                                }, this),
                                                (change.oldValue !== undefined || change.newValue !== undefined) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 space-y-1 text-sm",
                                                    children: [
                                                        change.oldValue !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-amber-800",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: "Previous:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                                    lineNumber: 238,
                                                                    columnNumber: 29
                                                                }, this),
                                                                " ",
                                                                formatValue(change.oldValue)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 27
                                                        }, this),
                                                        change.newValue !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-amber-800",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: "New:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 29
                                                                }, this),
                                                                " ",
                                                                formatValue(change.newValue)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this)),
                        hasAffectedBPs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold mb-2 text-sm text-blue-900",
                                    children: "Select affected processes to propagate changes to:"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border rounded-lg mb-3 overflow-y-auto max-h-[200px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "w-[50px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                checked: someBPsSelected ? "indeterminate" : allBPsSelected,
                                                                onCheckedChange: handleSelectAll,
                                                                "aria-label": "Select all"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            children: "Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            children: "Code"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            children: "From"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            children: "To"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                lineNumber: 262,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                children: uniqueCodes.map((code)=>{
                                                    const bp = getCurrentBP(code);
                                                    if (!bp) return null;
                                                    const isSelected = selectedBPs.includes(bp.id);
                                                    const versions = groupedBPs[code];
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                    checked: isSelected,
                                                                    onCheckedChange: (checked)=>handleSelectBP(bp.id, !!checked),
                                                                    "aria-label": `Select ${bp.name}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                                    lineNumber: 289,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: bp.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: bp.code
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                    value: String(bp.id),
                                                                    onValueChange: (val)=>handleVersionChange(code, val),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                            className: "h-8 w-[100px]",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                placeholder: "Version"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                                                lineNumber: 307,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                                            lineNumber: 306,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                            children: versions.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                    value: String(v.id),
                                                                                    children: [
                                                                                        "v",
                                                                                        v.version
                                                                                    ]
                                                                                }, v.id, true, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                                                    lineNumber: 311,
                                                                                    columnNumber: 35
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                                            lineNumber: 309,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                                    lineNumber: 300,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                                lineNumber: 299,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: loadingVersions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-muted-foreground",
                                                                    children: "Loading..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 31
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        "v",
                                                                        nextVersions[code] || versions[0].version + 1
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                                    lineNumber: 324,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, code, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                lineNumber: 279,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                        lineNumber: 261,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                    lineNumber: 260,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                            lineNumber: 256,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-blue-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "What happens next:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this),
                                    " A new version (v",
                                    nextVersion,
                                    ") will be created with these changes. The previous version will remain accessible for reference.",
                                    hasAffectedBPs && selectedBPs.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            " ",
                                            "New versions of the",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    selectedBPs.length,
                                                    " selected"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                                lineNumber: 347,
                                                columnNumber: 19
                                            }, this),
                                            " business processes will also be created."
                                        ]
                                    }, void 0, true) : hasAffectedBPs && selectedBPs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: " Affected processes will remain unchanged."
                                    }, void 0, false) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "border-t pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            onClick: ()=>onOpenChange(false),
                            disabled: isLoading,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            onClick: onConfirm,
                            disabled: isLoading,
                            children: isLoading ? "Creating..." : `Create Version ${nextVersion}`
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                            lineNumber: 366,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
            lineNumber: 198,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/utils/breaking-change-detector.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "detectBreakingChanges",
    ()=>detectBreakingChanges,
    "hasBreakingChanges",
    ()=>hasBreakingChanges
]);
function detectBreakingChanges(baseline, current) {
    const breakingChanges = [];
    // If no baseline, this is a new CP - no breaking changes possible
    if (!baseline) {
        return breakingChanges;
    }
    // 1. Check for deleted processing purposes
    if (current.step2Data.deleted.length > 0) {
        // Get names from baseline for deleted IDs
        const deletedNames = current.step2Data.deleted.map((id)=>baseline.step2Data.existing.find((pp)=>pp.id === id)?.name).filter(Boolean).join(", ");
        breakingChanges.push({
            type: "pp_deleted",
            description: `${current.step2Data.deleted.length} processing purpose(s) deleted`,
            details: deletedNames,
            oldValue: deletedNames,
            newValue: null
        });
    }
    // 2. Check for ANY modifications to processing purposes
    for (const modifiedPP of current.step2Data.modified){
        // Find baseline PP by comparing: id (if exists), tempId, or purposeOfProcessingCode
        const baselinePP = baseline.step2Data.existing.find((pp)=>{
            if (modifiedPP.id && pp.id === modifiedPP.id) return true;
            if (modifiedPP.tempId && pp.tempId === modifiedPP.tempId) return true;
            if (modifiedPP.purposeOfProcessingCode && pp.purposeOfProcessingCode === modifiedPP.purposeOfProcessingCode) return true;
            return false;
        });
        if (baselinePP) {
            // Check if name changed
            if (baselinePP.name !== modifiedPP.name) {
                breakingChanges.push({
                    type: "pp_modified",
                    description: `Processing purpose name changed`,
                    oldValue: baselinePP.name,
                    newValue: modifiedPP.name
                });
            }
            // Check if description changed
            if ((baselinePP.description || "") !== (modifiedPP.description || "")) {
                breakingChanges.push({
                    type: "pp_modified",
                    description: `Processing purpose "${baselinePP.name}": Description changed`,
                    oldValue: baselinePP.description || "None",
                    newValue: modifiedPP.description || "None"
                });
            }
            // Check if purpose of processing changed
            if (baselinePP.purposeOfProcessingId !== modifiedPP.purposeOfProcessingId) {
                breakingChanges.push({
                    type: "pp_modified",
                    description: `Processing purpose "${baselinePP.name}": Purpose sub master changed`,
                    details: "Changing the purpose sub master category requires a new version"
                });
            }
            // Check if user attributes were removed
            const removedAttributes = baselinePP.userAttributeNames.filter((ua)=>!modifiedPP.userAttributeNames.includes(ua));
            if (removedAttributes.length > 0) {
                breakingChanges.push({
                    type: "ua_removed",
                    description: `Processing purpose "${baselinePP.name}": Purpose attributes removed`,
                    oldValue: baselinePP.userAttributeNames,
                    newValue: modifiedPP.userAttributeNames
                });
            }
            // Check if user attributes were added
            const addedAttributes = modifiedPP.userAttributeNames.filter((ua)=>!baselinePP.userAttributeNames.includes(ua));
            if (addedAttributes.length > 0) {
                breakingChanges.push({
                    type: "pp_modified",
                    description: `Processing purpose "${baselinePP.name}": Purpose attributes added`,
                    oldValue: baselinePP.userAttributeNames,
                    newValue: modifiedPP.userAttributeNames
                });
            }
        }
    }
    // 3. Check for new processing purposes added (also requires versioning for published CPs)
    if (current.step2Data.new.length > 0) {
        const newNames = current.step2Data.new.map((pp)=>pp.name).join(", ");
        breakingChanges.push({
            type: "pp_modified",
            description: `${current.step2Data.new.length} new processing purpose(s) added`,
            details: newNames,
            oldValue: null,
            newValue: newNames
        });
    }
    return breakingChanges;
}
function hasBreakingChanges(baseline, current) {
    return detectBreakingChanges(baseline, current).length > 0;
}
}),
"[project]/actions/data:3b9a13 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40c1285b7faea57d407352b9d1568677f640797c7e":"getHighestVersionForConsentPurposeCode"},"actions/consent-purposes.ts",""] */ __turbopack_context__.s([
    "getHighestVersionForConsentPurposeCode",
    ()=>getHighestVersionForConsentPurposeCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getHighestVersionForConsentPurposeCode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40c1285b7faea57d407352b9d1568677f640797c7e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getHighestVersionForConsentPurposeCode"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY29uc2VudC1wdXJwb3Nlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuLyoqXHJcbiAqIE9wZW4gQmhhcmF0IERpZ2l0YWwgQ29uc2VudCBieSBJRGZ5XHJcbiAqIENvcHlyaWdodCAoYykgMjAyNSBCYWxkb3IgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCAoSURmeSlcclxuICogXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFByaXZ5IFB1YmxpYyBMaWNlbnNlLlxyXG4gKiBTZWUgTElDRU5TRS5tZCBmb3IgdGhlIGZ1bGwgdGVybXMgb2YgdXNlLlxyXG4gKiBcclxuICogVW5hdXRob3JpemVkIGNvcHlpbmcsIG1vZGlmaWNhdGlvbiwgZGlzdHJpYnV0aW9uLCBvciBjb21tZXJjaWFsIHVzZVxyXG4gKiBpcyBzdHJpY3RseSBwcm9oaWJpdGVkIHdpdGhvdXQgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uIGZyb20gSURmeS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvYXV0aFwiO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tIFwiQC9saWIvbG9nZ2VyXCI7XHJcbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBSZXNvdXJjZXMgfSBmcm9tIFwiQC9saWIvcmJhY1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTYWZlQWN0aW9uLCB2ZXJpZnlQZXJtaXNzaW9uIH0gZnJvbSBcIkAvbGliL3NhZmUtYWN0aW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVsZXRlQ29uc2VudFB1cnBvc2UgYXMgZGVsZXRlQ29uc2VudFB1cnBvc2VTZXJ2aWNlLFxyXG4gIGdldEFsbENvbnNlbnRQdXJwb3NlcyBhcyBnZXRBbGxDb25zZW50UHVycG9zZXNTZXJ2aWNlLFxyXG59IGZyb20gXCJAL2xpYi9zZXJ2aWNlcy9jb25zZW50LXB1cnBvc2Utc2VydmljZVwiO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XHJcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29uc2VudFB1cnBvc2VzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCB2ZXJpZnlQZXJtaXNzaW9uKFJlc291cmNlcy5DT05TRU5UX1BVUlBPU0UsIEFjdGlvbnMuUkVBRCk7XHJcbiAgICByZXR1cm4gYXdhaXQgZ2V0QWxsQ29uc2VudFB1cnBvc2VzU2VydmljZSgpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2dnZXIuZXJyb3IoXCJFcnJvciBpbiBnZXRDb25zZW50UHVycG9zZXMgYWN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uc2VudFB1cnBvc2UgPSBjcmVhdGVTYWZlQWN0aW9uKFxyXG4gIHsgcmVzb3VyY2U6IFJlc291cmNlcy5DT05TRU5UX1BVUlBPU0UsIGFjdGlvbjogQWN0aW9ucy5ERUxFVEUgfSxcclxuICB6Lm9iamVjdCh7IGlkOiB6Lm51bWJlcigpIH0pLFxyXG4gIGFzeW5jICh7IGlkIH0pID0+IHtcclxuICAgIGF3YWl0IGRlbGV0ZUNvbnNlbnRQdXJwb3NlU2VydmljZShpZCk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9jbXMvZGF0YS1maWR1Y2lhcnkvY29uc2VudC1wdXJwb3Nlc1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9XHJcbik7XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBoaWdoZXN0IHZlcnNpb24gbnVtYmVyIGZvciBhIGNvbnNlbnQgcHVycG9zZSBjb2RlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SGlnaGVzdFZlcnNpb25Gb3JDb25zZW50UHVycG9zZUNvZGUoY29kZTogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoaWdoZXN0Q1AgPSBhd2FpdCBwcmlzbWEuY29uc2VudFB1cnBvc2UuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgY29kZSB9LFxyXG4gICAgICBvcmRlckJ5OiB7IHZlcnNpb246IFwiZGVzY1wiIH0sXHJcbiAgICAgIHNlbGVjdDogeyB2ZXJzaW9uOiB0cnVlIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBoaWdoZXN0VmVyc2lvbjogaGlnaGVzdENQPy52ZXJzaW9uIHx8IDAsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaGlnaGVzdCB2ZXJzaW9uIGZvciBjb25zZW50IHB1cnBvc2U6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggaGlnaGVzdCB2ZXJzaW9uXCIgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyVEErQ3NCIn0=
}),
"[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Step5Form",
    ()=>Step5Form
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$9f7dce__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:9f7dce [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$purposes$2f$_components$2f$breaking$2d$change$2d$warning$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/consent-purposes/_components/breaking-change-warning-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$consent$2d$purpose$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/consent-purpose-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$breaking$2d$change$2d$detector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/breaking-change-detector.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$3b9a13__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:3b9a13 [app-ssr] (ecmascript) <text/javascript>");
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
function Step5Form({ data, isEdit, consentPurposeId, affectedBPs }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const [isSavingDraft, setIsSavingDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Breaking change handling
    const [showBreakingChangeDialog, setShowBreakingChangeDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [highestVersion, setHighestVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Affected BPs + propagate choice state
    const [isFetchingAffectedBPs, setIsFetchingAffectedBPs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedBPsToPropagate, setSelectedBPsToPropagate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$consent$2d$purpose$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConsentPurposeForm"])();
    const { consentPurpose, dataProcessorMappings = [], userAttributes = [], purposesOfProcessing = [], dataProcessors = [] } = data;
    // Get processing purposes from context (source of truth)
    const processingPurposes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const modifiedPPIds = new Set(state.step2Data.modified.map((pp)=>pp.id).filter(Boolean));
        const existingPPs = state.step2Data.existing.filter((pp)=>!modifiedPPIds.has(pp.id)).filter((pp)=>!state.step2Data.deleted.includes(pp.id));
        const modifiedPPs = state.step2Data.modified.filter((pp)=>!state.step2Data.deleted.includes(pp.id));
        const newPPs = state.step2Data.new;
        const allPPs = [
            ...existingPPs,
            ...modifiedPPs,
            ...newPPs
        ];
        return allPPs.map((pp)=>({
                ...pp,
                purposeOfProcessing: purposesOfProcessing.find((pop)=>pop.id === pp.purposeOfProcessingId)
            }));
    }, [
        state.step2Data,
        purposesOfProcessing
    ]);
    // Group mappings by processor
    const groupedMappings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const modifiedMappingIds = new Set(state.step3Data.modified.map((m)=>m.id).filter(Boolean));
        const existingMappings = state.step3Data.existing.filter((m)=>!modifiedMappingIds.has(m.id)).filter((m)=>!state.step3Data.deleted.includes(m.id));
        const modifiedMappings = state.step3Data.modified.filter((m)=>!state.step3Data.deleted.includes(m.id));
        const newMappings = state.step3Data.new;
        return [
            ...existingMappings,
            ...modifiedMappings,
            ...newMappings
        ].reduce((acc, mapping)=>{
            if (!acc[mapping.dataProcessorId]) acc[mapping.dataProcessorId] = [];
            acc[mapping.dataProcessorId].push(mapping);
            return acc;
        }, {});
    }, [
        state.step3Data
    ]);
    // Helpers
    const getPurposeOfProcessingName = (id)=>purposesOfProcessing.find((p)=>p.id === id)?.name || "Unknown";
    const getUserAttributeName = (id)=>userAttributes.find((a)=>a.id === id)?.name || "Unknown";
    const getDataProcessorName = (dataProcessorId)=>{
        const processor = dataProcessors.find((dp)=>dp.ouId === dataProcessorId);
        return processor?.brandName || processor?.legalName || "Unknown";
    };
    const formatLastUpdated = (date)=>!date ? "" : new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    // Breaking change + affected BPs logic
    const breakingChanges = state.baseline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$breaking$2d$change$2d$detector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectBreakingChanges"])(state.baseline, state) : [];
    const hasBreakingChanges = breakingChanges.length > 0;
    const isPublishedCP = consentPurpose?.status === "published";
    const handleSaveAsDraft = async ()=>{
        if (!state.step1Data) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please complete Step 1 first");
            return;
        }
        setIsSavingDraft(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$9f7dce__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveConsentPurposeFromClientState"])({
                clientState: state,
                action: "draft",
                consentPurposeId: consentPurposeId ? parseInt(consentPurposeId) : undefined
            });
            if (result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Consent purpose saved as draft");
                dispatch({
                    type: "RESET"
                });
                router.push("/cms/data-fiduciary/consent-purposes");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result.error || "Failed to save consent purpose as draft");
            }
        } catch (error) {
            console.error("Error saving consent purpose as draft:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("An unexpected error occurred");
        } finally{
            setIsSavingDraft(false);
        }
    };
    // MAIN publish handler triggers the breaking change dialog with affected BPs for versioned updates
    const handlePublish = async ()=>{
        if (!state.step1Data) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please complete Step 1 first");
            return;
        }
        if (consentPurpose?.status === "published" && state.baseline && breakingChanges.length > 0) {
            setIsFetchingAffectedBPs(true);
            try {
                let highestVer = consentPurpose?.version || 1;
                if (consentPurpose?.code) {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$3b9a13__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getHighestVersionForConsentPurposeCode"])(consentPurpose.code);
                    if (result.success) highestVer = result.highestVersion;
                }
                setHighestVersion(highestVer);
                // Reset selection when opening dialog
                setSelectedBPsToPropagate([]);
                setShowBreakingChangeDialog(true);
                setIsFetchingAffectedBPs(false);
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to fetch affected processes.");
                setIsFetchingAffectedBPs(false);
            }
            return;
        }
        performPublish([]); // normal publish (no propagation)
    };
    // Use this for final publish after BC dialog confirmation
    const performPublish = async (propagateToBPIds)=>{
        startTransition(async ()=>{
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$9f7dce__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveConsentPurposeFromClientState"])({
                    clientState: state,
                    action: "publish",
                    consentPurposeId: consentPurposeId ? parseInt(consentPurposeId) : undefined,
                    propagateToBPIds
                });
                if (result.success) {
                    const breakingChanges = state.baseline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$breaking$2d$change$2d$detector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectBreakingChanges"])(state.baseline, state) : [];
                    const isVersioned = breakingChanges.length > 0 && consentPurpose?.status === "published";
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(isVersioned ? `New version v${(consentPurpose?.version || 0) + 1} published successfully` : consentPurpose?.status === "published" ? "Consent purpose updated successfully" : "Consent purpose published successfully");
                    dispatch({
                        type: "RESET"
                    });
                    setShowBreakingChangeDialog(false);
                    setSelectedBPsToPropagate([]); // Reset selection
                    router.push("/cms/data-fiduciary/consent-purposes");
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result.error || (consentPurpose?.status === "published" ? "Failed to update consent purpose" : "Failed to publish consent purpose"));
                }
            } catch (error) {
                console.error("Error publishing consent purpose:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("An unexpected error occurred");
            }
        });
    };
    const handlePrevious = ()=>{
        const params = new URLSearchParams();
        params.set("step", "4");
        if (consentPurposeId) params.set("id", consentPurposeId);
        const basePath = isEdit && consentPurposeId ? `/cms/data-fiduciary/consent-purposes/${consentPurposeId}/edit` : `/cms/data-fiduciary/consent-purposes/new`;
        router.push(`${basePath}?${params.toString()}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b px-6 py-5 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold tracking-tight",
                                children: consentPurpose?.name || "Consent Purpose"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            consentPurpose?.updatedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    "(Last updated: ",
                                    formatLastUpdated(consentPurpose.updatedAt),
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: consentPurpose?.status === "published" ? "default" : "secondary",
                                className: consentPurpose?.status === "published" ? "border-green-200 bg-green-50 text-green-700 pointer-events-none" : "",
                                children: consentPurpose?.status?.toUpperCase() || "DRAFT"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: consentPurpose?.status === "published" ? "Review all information and save your changes" : "Review all information and publish your consent purpose"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-6 py-6 pb-10 space-y-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold mb-3",
                                    children: "General Information"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-muted-foreground",
                                                    children: "Code:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1",
                                                    children: consentPurpose?.code || "Not specified"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-muted-foreground",
                                                    children: "Description:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1",
                                                    children: consentPurpose?.description || "No description provided"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold",
                                    children: "Purpose Sub Master List"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this),
                                processingPurposes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border rounded-lg overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "bg-muted/30 border-r w-[200px]",
                                                            children: "Purpose Sub Master"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "bg-muted/30 border-r w-[150px]",
                                                            children: "Description"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "bg-muted/30",
                                                            children: "Attributes Included"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                lineNumber: 341,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                children: processingPurposes.map((purpose)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        className: "hover:bg-muted/20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "border-r w-[200px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: getPurposeOfProcessingName(purpose.purposeOfProcessingId)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                                    lineNumber: 358,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "border-r min-w-2xl",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-muted-foreground text-wrap",
                                                                    children: purpose.description || "No description"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                                    lineNumber: 365,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-1",
                                                                    children: purpose.userAttributeNames?.map((attrName)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "outline",
                                                                            className: "text-xs",
                                                                            children: attrName
                                                                        }, attrName, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                                            lineNumber: 373,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                                    lineNumber: 370,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, purpose.id, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                lineNumber: 354,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                        lineNumber: 340,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                    lineNumber: 339,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-dashed p-8 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "No processing purposes defined"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                        lineNumber: 391,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                    lineNumber: 390,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                            lineNumber: 336,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold",
                                    children: "Processors List"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                    lineNumber: 400,
                                    columnNumber: 13
                                }, this),
                                Object.keys(groupedMappings).length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border rounded-lg overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "bg-muted/30 border-r w-[200px]",
                                                            children: "Processors Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "bg-muted/30 border-r w-[250px]",
                                                            children: "Purpose Sub Master"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "bg-muted/30",
                                                            children: "Attributes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                lineNumber: 404,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                children: Object.entries(groupedMappings).map(([dataProcessorId, mappings])=>{
                                                    const processingPurposeRefs = [
                                                        ...new Set(mappings.map((m)=>m.processingPurposeRef))
                                                    ];
                                                    const uniquePurposes = processingPurposeRefs.map((ref)=>{
                                                        const pp = processingPurposes.find((p)=>p.id && p.id.toString() === ref || p.tempId === ref || p.purposeOfProcessingCode === ref);
                                                        return getPurposeOfProcessingName(pp?.purposeOfProcessingId);
                                                    });
                                                    const allUserAttributes = [
                                                        ...new Set(mappings.flatMap((m)=>m.userAttributeNames))
                                                    ];
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        className: "hover:bg-muted/20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "border-r w-[200px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: getDataProcessorName(dataProcessorId)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                                    lineNumber: 448,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                                lineNumber: 447,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "border-r w-[250px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-1",
                                                                    children: uniquePurposes.map((purpose, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "secondary",
                                                                            className: "text-xs",
                                                                            children: purpose
                                                                        }, index, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                                            lineNumber: 455,
                                                                            columnNumber: 35
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                                    lineNumber: 453,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                                lineNumber: 452,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-1",
                                                                    children: allUserAttributes.map((attrName)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "outline",
                                                                            className: "text-xs",
                                                                            children: attrName
                                                                        }, attrName, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                                            lineNumber: 468,
                                                                            columnNumber: 35
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                                    lineNumber: 466,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                                lineNumber: 465,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, dataProcessorId, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                                lineNumber: 415,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                        lineNumber: 403,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                    lineNumber: 402,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-dashed p-8 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "No processors defined"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                        lineNumber: 487,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                    lineNumber: 486,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                            lineNumber: 399,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                    lineNumber: 314,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 px-6 py-4 border-t bg-background sticky bottom-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 justify-end",
                    children: [
                        consentPurpose?.status === "published" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            onClick: handlePrevious,
                            disabled: isPending,
                            className: "min-w-[120px]",
                            children: "Previous"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                            lineNumber: 500,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            onClick: handleSaveAsDraft,
                            disabled: isSavingDraft || isPending,
                            className: "min-w-[120px]",
                            children: isSavingDraft ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-4 w-4 mr-2 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                        lineNumber: 519,
                                        columnNumber: 19
                                    }, this),
                                    "Saving Draft..."
                                ]
                            }, void 0, true) : "Save as Draft"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                            lineNumber: 510,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            onClick: handlePublish,
                            disabled: isPending || isSavingDraft || isFetchingAffectedBPs,
                            className: "min-w-[100px]",
                            children: isPending || isFetchingAffectedBPs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-4 w-4 mr-2 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                                        lineNumber: 535,
                                        columnNumber: 17
                                    }, this),
                                    consentPurpose?.status === "published" ? "Updating..." : "Publishing..."
                                ]
                            }, void 0, true) : consentPurpose?.status === "published" ? "Update" : "Publish"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                            lineNumber: 527,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                    lineNumber: 498,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                lineNumber: 497,
                columnNumber: 7
            }, this),
            state.baseline && showBreakingChangeDialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$consent$2d$purposes$2f$_components$2f$breaking$2d$change$2d$warning$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreakingChangeWarningDialog"], {
                open: showBreakingChangeDialog,
                onOpenChange: setShowBreakingChangeDialog,
                breakingChanges: breakingChanges,
                currentVersion: consentPurpose?.version || 1,
                highestVersion: highestVersion || undefined,
                affectedBPs: affectedBPs,
                consentPurposeId: Number(consentPurposeId),
                // Pass new state and handler
                selectedBPs: selectedBPsToPropagate,
                onSelectedBPsChange: setSelectedBPsToPropagate,
                onConfirm: ()=>{
                    // Confirmation logic is simpler: just publish with the selected IDs
                    performPublish(selectedBPsToPropagate);
                },
                isLoading: isPending
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
                lineNumber: 551,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/consent-purposes/_components/step5-form.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cms/data-fiduciary/consent-purposes/_components/baseline-initializer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaselineInitializer",
    ()=>BaselineInitializer
]);
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$consent$2d$purpose$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/consent-purpose-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function BaselineInitializer({ data, isEdit }) {
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$consent$2d$purpose$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConsentPurposeForm"])();
    const hasInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only set baseline once when editing an existing CP
        if (isEdit && data.consentPurpose && !hasInitialized.current && !state.baseline) {
            const baselineState = {
                step1Data: {
                    name: data.consentPurpose.name,
                    code: data.consentPurpose.code,
                    description: data.consentPurpose.description || ""
                },
                step2Data: {
                    existing: (data.processingPurposes || []).map((pp)=>({
                            id: pp.id,
                            tempId: undefined,
                            name: pp.name,
                            description: pp.description || "",
                            purposeOfProcessingId: pp.purposeOfProcessingId,
                            purposeOfProcessingCode: pp.purposeOfProcessing?.code || "",
                            userAttributeNames: pp.userAttributeNames || [],
                            status: pp.status,
                            translations: pp.translations || {}
                        })),
                    new: [],
                    modified: [],
                    deleted: []
                },
                step3Data: {
                    existing: (data.dataProcessorMappings || []).map((dpm)=>({
                            id: dpm.id,
                            dataProcessorId: dpm.dataProcessorId,
                            userAttributeNames: dpm.userAttributeNames || [],
                            processingPurposeRef: dpm.processingPurposeId.toString(),
                            status: dpm.status
                        })),
                    new: [],
                    modified: [],
                    deleted: []
                },
                step4Data: {
                    cpTranslations: {},
                    ppTranslations: {}
                }
            };
            dispatch({
                type: "SET_BASELINE",
                payload: baselineState
            });
            hasInitialized.current = true;
        }
    }, [
        isEdit,
        data,
        dispatch,
        state.baseline
    ]);
    return null; // This component doesn't render anything
}
}),
];

//# sourceMappingURL=_4842d017._.js.map