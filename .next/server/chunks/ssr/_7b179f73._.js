module.exports = [
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
"[project]/contexts/business-process-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BusinessProcessContext",
    ()=>BusinessProcessContext,
    "BusinessProcessProvider",
    ()=>BusinessProcessProvider,
    "useBusinessProcessContext",
    ()=>useBusinessProcessContext
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
    step2Data: {},
    step3Data: {},
    step4Data: {},
    consentPurposes: [],
    eulas: [],
    baseline: null
};
function businessProcessReducer(state, action) {
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
        case "UPDATE_FIELD":
            newState = {
                ...state,
                [action.field]: action.value
            };
            break;
        case "ADD_EULA":
            newState = {
                ...state,
                eulas: [
                    ...state.eulas,
                    {
                        id: Date.now(),
                        title: action.payload.title,
                        link: action.payload.link
                    }
                ]
            };
            break;
        case "UPDATE_EULA":
            newState = {
                ...state,
                eulas: state.eulas.map((eula)=>eula.id === action.payload.id ? {
                        id: eula.id,
                        title: action.payload.title,
                        link: action.payload.link
                    } : eula)
            };
            break;
        case "DELETE_EULA":
            newState = {
                ...state,
                eulas: state.eulas.filter((eula)=>eula.id !== action.payload)
            };
            break;
        case "INITIALIZE_FROM_EXISTING":
            const { businessProcess, userAttributes = [] } = action.payload;
            if (!businessProcess) return state;
            // Convert the business process data to the state format
            const step1Data = {
                name: businessProcess.name || "",
                code: businessProcess.code || "",
                businessUnitId: businessProcess.businessUnitId || 0,
                grantDescription: businessProcess.grantDescription || "",
                revokeDescription: businessProcess.revokeDescription || "",
                reconsentDescription: businessProcess.reconsentDescription || ""
            };
            // Create consent configurations from businessProcessToConsentPurposes
            const consentPurposes = businessProcess.businessProcessToConsentPurposes?.map((relation, index)=>{
                // Use the augmented rules attached to the consent purpose from the service
                const rawRules = relation.consentPurpose?.businessProcessRules || [];
                const processingRules = rawRules.map((rule)=>({
                        processingPurposeId: rule.processingPurposeId,
                        processingPurposeName: rule.processingPurpose?.name || `Processing Purpose ${rule.processingPurposeId}`,
                        userAttributes: rule.processingPurpose?.userAttributeNames || [],
                        isMandatory: rule.mandatory,
                        isReconsentable: rule.reconsentableByPrincipal,
                        isRevocable: rule.revocableByPrincipal,
                        retentionDurationValue: rule.retentionDurationValue,
                        retentionDurationUnit: rule.retentionDurationUnit
                    }));
                // Convert hours back to duration
                let durationType = "until_purpose_met";
                let consentDuration;
                let durationUnit;
                if (relation.consentDuration) {
                    durationType = "custom_duration";
                    // Convert hours back to days (we can enhance this later)
                    consentDuration = Math.round(relation.consentDuration / 24);
                    durationUnit = "days";
                }
                return {
                    id: index + 1,
                    consentPurposeId: relation.consentPurposeId,
                    consentPurposeName: relation.consentPurpose?.name || `Consent Purpose ${relation.consentPurposeId}`,
                    consentPurpose: relation.consentPurpose,
                    durationType,
                    consentDuration,
                    durationUnit,
                    processingRules
                };
            }) || [];
            // Convert legal documents to EULAs
            const eulas = [];
            if (businessProcess.legalDocuments && typeof businessProcess.legalDocuments === "object") {
                Object.entries(businessProcess.legalDocuments).forEach(([title, link], index)=>{
                    if (typeof link === "string") {
                        eulas.push({
                            id: index + 1,
                            title,
                            link
                        });
                    }
                });
            }
            const newStateFromInit = {
                ...state,
                // Set step1Data from business process (or keep existing if user modified)
                step1Data: state.step1Data || step1Data,
                // Only overwrite consentPurposes if not already set (preserve user changes from Step 2)
                consentPurposes: state.consentPurposes.length > 0 ? state.consentPurposes : consentPurposes,
                // Only overwrite eulas if not already set (preserve user changes from Step 3)
                eulas: state.eulas.length > 0 ? state.eulas : eulas
            };
            return newStateFromInit;
        case "RESET":
            newState = initialState;
            break;
        default:
            newState = state;
    }
    return newState;
}
const BusinessProcessContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function BusinessProcessProvider({ children, initialData, userAttributes }) {
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(businessProcessReducer, initialState);
    // Track if we've already initialized to prevent re-initialization on navigation
    const initializedRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(false);
    // Initialize state from existing data on mount ONLY ONCE
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (initialData && !initializedRef.current) {
            initializedRef.current = true;
            dispatch({
                type: "INITIALIZE_FROM_EXISTING",
                payload: {
                    businessProcess: initialData,
                    userAttributes: userAttributes || []
                }
            });
        }
    }, [
        initialData,
        userAttributes
    ]); // Keep dependencies but use ref to prevent re-init
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BusinessProcessContext.Provider, {
        value: {
            state,
            dispatch
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/business-process-context.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, this);
}
function useBusinessProcessContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(BusinessProcessContext);
    if (!context) {
        throw new Error("useBusinessProcessContext must be used within BusinessProcessProvider");
    }
    return context;
}
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/baseline-initializer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/business-process-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function BaselineInitializer({ data, isEdit }) {
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusinessProcessContext"])();
    const hasInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only set baseline once when editing an existing BP
        if (isEdit && data.businessProcess && !hasInitialized.current && !state.baseline) {
            const { businessProcess } = data;
            // Prepare step1Data
            const step1Data = {
                name: businessProcess.name || "",
                code: businessProcess.code || "",
                businessUnitId: businessProcess.businessUnitId || 0,
                grantDescription: businessProcess.grantDescription || "",
                revokeDescription: businessProcess.revokeDescription || "",
                reconsentDescription: businessProcess.reconsentDescription || ""
            };
            const consentPurposes = businessProcess.businessProcessToConsentPurposes?.map((relation, index)=>{
                // Use the augmented rules attached to the consent purpose from the service
                const rawRules = relation.consentPurpose?.businessProcessRules || [];
                const processingRules = rawRules.map((rule)=>({
                        processingPurposeId: rule.processingPurposeId,
                        userAttributes: rule.processingPurpose?.userAttributeNames || [],
                        isMandatory: rule.mandatory,
                        isReconsentable: rule.reconsentableByPrincipal,
                        isRevocable: rule.revocableByPrincipal,
                        retentionDurationValue: rule.retentionDurationValue,
                        retentionDurationUnit: rule.retentionDurationUnit
                    }));
                // Convert hours back to duration
                let durationType = "until_purpose_met";
                let consentDuration;
                let durationUnit;
                if (relation.consentDuration) {
                    durationType = "custom_duration";
                    consentDuration = Math.round(relation.consentDuration / 24);
                    durationUnit = "days";
                }
                return {
                    id: index + 1,
                    consentPurposeId: relation.consentPurposeId,
                    durationType,
                    consentDuration,
                    durationUnit,
                    processingRules
                };
            }) || [];
            // Prepare eulas
            const eulas = Object.entries(businessProcess.legalDocuments || {}).map(([title, link], index)=>({
                    id: index + 1,
                    title,
                    link: link
                }));
            // Create baseline state
            const baseline = {
                step1Data,
                step2Data: {},
                step3Data: {},
                step4Data: {},
                consentPurposes,
                eulas,
                baseline: null
            };
            // Set baseline in context
            dispatch({
                type: "SET_BASELINE",
                payload: baseline
            });
            hasInitialized.current = true;
        }
    }, [
        isEdit,
        data,
        dispatch,
        state.baseline
    ]);
    // This component doesn't render anything
    return null;
}
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
"[project]/lib/schemas/business-process-schemas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "businessProcessSchema",
    ()=>businessProcessSchema,
    "generateRandomCode",
    ()=>generateRandomCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
const businessProcessSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, "Name should be at least 3 characters long").max(255, "Name must be less than 255 characters"),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Code is required").max(50, "Code must be less than 50 characters"),
    businessUnitId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1, "Department is required"),
    grantDescription: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8, "Grant description should be at least 8 characters long").max(1000, "Grant description must be less than 1000 characters"),
    revokeDescription: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    reconsentDescription: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
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
"[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-ssr] (ecmascript) <export default as ChevronsUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/command.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/popover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$business$2d$process$2d$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schemas/business-process-schemas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/business-process-context.tsx [app-ssr] (ecmascript)");
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
;
function Step1Form({ data, isEdit, businessProcessId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusinessProcessContext"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [businessUnitComboboxOpen, setBusinessUnitComboboxOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$business$2d$process$2d$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["businessProcessSchema"]),
        mode: "onChange",
        defaultValues: {
            name: data.businessProcess?.name || state.step1Data?.name || "",
            code: data.businessProcess?.code || state.step1Data?.code || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$business$2d$process$2d$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomCode"])(),
            businessUnitId: data.businessProcess?.businessUnitId || state.step1Data?.businessUnitId || undefined,
            grantDescription: data.businessProcess?.grantDescription || state.step1Data?.grantDescription || "",
            revokeDescription: data.businessProcess?.revokeDescription || state.step1Data?.revokeDescription || "",
            reconsentDescription: data.businessProcess?.reconsentDescription || state.step1Data?.reconsentDescription || ""
        }
    });
    const watchedCode = form.watch("code");
    const { isValid, errors } = form.formState;
    // Generate a new random code if the current code is empty
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!watchedCode) {
            form.setValue("code", (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$business$2d$process$2d$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomCode"])());
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
            if (businessProcessId) {
                params.set("id", businessProcessId);
            }
            const basePath = isEdit && businessProcessId ? `/cms/data-fiduciary/business-processes/${businessProcessId}/edit` : `/cms/data-fiduciary/business-processes/new`;
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
        router.push("/cms/data-fiduciary/business-processes");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold tracking-tight border-b px-6 py-5 flex-shrink-0",
                children: "Step 1. General Settings"
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                lineNumber: 147,
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
                            className: "space-y-6 px-6 py-6",
                            children: [
                                isEdit && data.businessProcess?.version && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-blue-800",
                                                            children: [
                                                                "Version ",
                                                                data.businessProcess.version
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 21
                                                }, this),
                                                data.businessProcess.updatedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-blue-600",
                                                    children: [
                                                        "Last updated",
                                                        " ",
                                                        new Date(data.businessProcess.updatedAt).toLocaleDateString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-blue-700 mt-1",
                                            children: [
                                                "Code:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono",
                                                    children: data.businessProcess.code
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 21
                                                }, this),
                                                data.businessProcess.status === "published" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded",
                                                    children: "Published"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                    lineNumber: 158,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-7 gap-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-2 space-y-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold mb-4",
                                                        children: "Basic Information"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                                                control: form.control,
                                                                name: "name",
                                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                children: [
                                                                                    "Process Name",
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-destructive",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                        lineNumber: 206,
                                                                                        columnNumber: 31
                                                                                    }, void 0)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 204,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                                    placeholder: "e.g. Customer Onboarding Process",
                                                                                    ...field
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                    lineNumber: 209,
                                                                                    columnNumber: 31
                                                                                }, void 0)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 208,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 214,
                                                                                columnNumber: 29
                                                                            }, void 0)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                        lineNumber: 203,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                                                control: form.control,
                                                                name: "businessUnitId",
                                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                children: [
                                                                                    "Department",
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-destructive",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                        lineNumber: 227,
                                                                                        columnNumber: 31
                                                                                    }, void 0)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 225,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                                                                open: businessUnitComboboxOpen,
                                                                                onOpenChange: setBusinessUnitComboboxOpen,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                                                        asChild: true,
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                variant: "outline",
                                                                                                role: "combobox",
                                                                                                "aria-expanded": businessUnitComboboxOpen,
                                                                                                className: "w-full justify-between",
                                                                                                children: [
                                                                                                    field.value ? data.businessUnits?.find((unit)=>unit.id === field.value)?.name + " (" + data.businessUnits?.find((unit)=>unit.id === field.value)?.code + ")" : "Select a Department...",
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__["ChevronsUpDown"], {
                                                                                                        className: "ml-2 h-4 w-4 shrink-0 opacity-50"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                                        lineNumber: 251,
                                                                                                        columnNumber: 37
                                                                                                    }, void 0)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                                lineNumber: 235,
                                                                                                columnNumber: 35
                                                                                            }, void 0)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                            lineNumber: 234,
                                                                                            columnNumber: 33
                                                                                        }, void 0)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                        lineNumber: 233,
                                                                                        columnNumber: 31
                                                                                    }, void 0),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                                                        className: "w-full p-0",
                                                                                        align: "start",
                                                                                        side: "top",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"], {
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandInput"], {
                                                                                                    placeholder: "Search departments..."
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                                    lineNumber: 261,
                                                                                                    columnNumber: 35
                                                                                                }, void 0),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandList"], {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandEmpty"], {
                                                                                                            children: "No department found."
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                                            lineNumber: 263,
                                                                                                            columnNumber: 37
                                                                                                        }, void 0),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandGroup"], {
                                                                                                            children: data.businessUnits?.map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandItem"], {
                                                                                                                    value: unit.name,
                                                                                                                    onSelect: ()=>{
                                                                                                                        field.onChange(unit.id);
                                                                                                                        setBusinessUnitComboboxOpen(false);
                                                                                                                    },
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mr-2 h-4 w-4", field.value === unit.id ? "opacity-100" : "opacity-0")
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                                                            lineNumber: 276,
                                                                                                                            columnNumber: 43
                                                                                                                        }, void 0),
                                                                                                                        unit.name,
                                                                                                                        " (",
                                                                                                                        unit.code,
                                                                                                                        ")"
                                                                                                                    ]
                                                                                                                }, unit.id, true, {
                                                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                                                    lineNumber: 268,
                                                                                                                    columnNumber: 41
                                                                                                                }, void 0))
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                                            lineNumber: 266,
                                                                                                            columnNumber: 37
                                                                                                        }, void 0)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                                    lineNumber: 262,
                                                                                                    columnNumber: 35
                                                                                                }, void 0)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                            lineNumber: 260,
                                                                                            columnNumber: 33
                                                                                        }, void 0)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                        lineNumber: 255,
                                                                                        columnNumber: 31
                                                                                    }, void 0)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 229,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 292,
                                                                                columnNumber: 29
                                                                            }, void 0)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                        lineNumber: 224,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                                                control: form.control,
                                                                name: "code",
                                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                children: [
                                                                                    "Process Code",
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-neutral-200",
                                                                                        children: "(Optional)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                        lineNumber: 305,
                                                                                        columnNumber: 31
                                                                                    }, void 0),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-destructive",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                        lineNumber: 308,
                                                                                        columnNumber: 31
                                                                                    }, void 0)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 303,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                                    placeholder: "9HUttbeIL7",
                                                                                    ...field,
                                                                                    disabled: isEdit,
                                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(isEdit && "bg-muted cursor-not-allowed")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                    lineNumber: 311,
                                                                                    columnNumber: 31
                                                                                }, void 0)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 310,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            isEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-muted-foreground",
                                                                                children: "Code cannot be changed after creation"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 321,
                                                                                columnNumber: 31
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 325,
                                                                                columnNumber: 29
                                                                            }, void 0)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                        lineNumber: 302,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-1 hidden lg:block"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-4 space-y-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold mb-4",
                                                        children: "Process Descriptions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                                                control: form.control,
                                                                name: "grantDescription",
                                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                children: [
                                                                                    "Grant Description",
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-destructive",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                        lineNumber: 351,
                                                                                        columnNumber: 31
                                                                                    }, void 0)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 349,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                                                                    placeholder: "This text will be shown on Grant Notices",
                                                                                    rows: 3,
                                                                                    ...field
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                    lineNumber: 354,
                                                                                    columnNumber: 31
                                                                                }, void 0)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 353,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 360,
                                                                                columnNumber: 29
                                                                            }, void 0)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                        lineNumber: 348,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                lineNumber: 344,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                                                control: form.control,
                                                                name: "revokeDescription",
                                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                children: [
                                                                                    "Revoke Description",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-neutral-200",
                                                                                        children: "(Optional)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                        lineNumber: 373,
                                                                                        columnNumber: 31
                                                                                    }, void 0)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 371,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                                                                    placeholder: "This text will be shown on Revoke Notices",
                                                                                    rows: 3,
                                                                                    ...field
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                    lineNumber: 378,
                                                                                    columnNumber: 31
                                                                                }, void 0)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 377,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 384,
                                                                                columnNumber: 29
                                                                            }, void 0)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                        lineNumber: 370,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                lineNumber: 366,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                                                control: form.control,
                                                                name: "reconsentDescription",
                                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                children: [
                                                                                    "Reconsent Description",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-neutral-200",
                                                                                        children: "(Optional)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                        lineNumber: 397,
                                                                                        columnNumber: 31
                                                                                    }, void 0)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 395,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                                                                    placeholder: "This text will be shown on Reconsent Notices",
                                                                                    rows: 3,
                                                                                    ...field
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                    lineNumber: 402,
                                                                                    columnNumber: 31
                                                                                }, void 0)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 401,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                                lineNumber: 408,
                                                                                columnNumber: 29
                                                                            }, void 0)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                        lineNumber: 394,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                                lineNumber: 390,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                                lineNumber: 338,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                lineNumber: 152,
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
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                            lineNumber: 424,
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
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                                        lineNumber: 435,
                                        columnNumber: 17
                                    }, this),
                                    "Processing..."
                                ]
                            }, void 0, true) : "Next"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                            lineNumber: 427,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                    lineNumber: 423,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
                lineNumber: 422,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step1-form.tsx",
        lineNumber: 145,
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
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 87,
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
"[project]/components/ui/radio-group.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RadioGroup",
    ()=>RadioGroup,
    "RadioGroupItem",
    ()=>RadioGroupItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-radio-group/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function RadioGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "radio-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("grid gap-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/radio-group.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function RadioGroupItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "radio-group-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "radio-group-indicator",
            className: "relative flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
            }, void 0, false, {
                fileName: "[project]/components/ui/radio-group.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/radio-group.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/radio-group.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
;
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
"[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddConsentPurposeDialog",
    ()=>AddConsentPurposeDialog
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/command.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/popover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/radio-group.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-ssr] (ecmascript) <export default as ChevronsUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
;
function AddConsentPurposeDialog({ open, onOpenChange, onSave, consentPurposes, editData = null, isEdit = false, userAttributes = [], existingConsentConfigs = [] }) {
    const [consentPurposeComboboxOpen, setConsentPurposeComboboxOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        consentPurposeId: 0,
        durationType: "custom_duration",
        consentDuration: 365,
        durationUnit: "days",
        processingRules: [],
        consentPurpose: {
            hasNewerVersion: false
        }
    });
    // Initialize form data when dialog opens or editData changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) {
            if (isEdit && editData) {
                setFormData(editData);
            } else {
                setFormData({
                    consentPurposeId: 0,
                    durationType: "custom_duration",
                    consentDuration: 365,
                    durationUnit: "days",
                    processingRules: [],
                    consentPurpose: {
                        hasNewerVersion: false
                    }
                });
            }
        }
    }, [
        open,
        isEdit,
        editData
    ]);
    // Get processing purposes for selected consent purpose
    const selectedConsentPurpose = consentPurposes.find((cp)=>cp.id === formData.consentPurposeId);
    const processingPurposes = selectedConsentPurpose?.processingPurposes || [];
    // Filter published consent purposes and exclude already selected ones
    const existingConsentPurposeIds = existingConsentConfigs.map((config)=>config.consentPurposeId);
    // Get codes that are already selected in existing configs
    const existingConsentPurposeCodes = existingConsentConfigs.map((config)=>{
        const cp = consentPurposes.find((p)=>p.id === config.consentPurposeId);
        return cp?.code;
    }).filter(Boolean);
    const publishedConsentPurposes = consentPurposes.filter((cp)=>{
        // Must be published
        if (cp.status !== "published") return false;
        // If editing, always allow the currently selected consent purpose
        if (isEdit && cp.id === editData?.consentPurposeId) return true;
        // Exclude if this exact ID is already selected
        if (existingConsentPurposeIds.includes(cp.id)) return false;
        // Exclude if another version of this code is already selected
        if (cp.code && existingConsentPurposeCodes.includes(cp.code)) return false;
        return true;
    });
    const handleClose = ()=>{
        setFormData({
            consentPurposeId: 0,
            durationType: "custom_duration",
            consentDuration: 365,
            durationUnit: "days",
            processingRules: [],
            consentPurpose: {
                hasNewerVersion: false
            }
        });
        setConsentPurposeComboboxOpen(false);
        onOpenChange(false);
    };
    const handleConsentPurposeSelect = (consentPurposeId)=>{
        const selectedPurpose = consentPurposes.find((cp)=>cp.id === consentPurposeId);
        const newProcessingRules = selectedPurpose?.processingPurposes?.map((pp)=>({
                processingPurposeId: pp.id,
                userAttributeNames: pp.userAttributeNames || [],
                mandatory: false,
                reconsentableByPrincipal: false,
                revocableByPrincipal: false,
                retentionDurationValue: 365,
                retentionDurationUnit: "days"
            })) || [];
        setFormData((prev)=>({
                ...prev,
                consentPurposeId,
                processingRules: newProcessingRules
            }));
        setConsentPurposeComboboxOpen(false);
    };
    const handleProcessingRuleUpdate = (processingPurposeId, field, value)=>{
        setFormData((prev)=>({
                ...prev,
                processingRules: prev.processingRules.map((rule)=>{
                    if (rule.processingPurposeId === processingPurposeId) {
                        const updatedRule = {
                            ...rule,
                            [field]: value
                        };
                        // If mandatory is selected, disable revocable by principal
                        if (field === "mandatory" && value) {
                            updatedRule.revocableByPrincipal = false;
                        }
                        return updatedRule;
                    }
                    return rule;
                })
            }));
    };
    const handleSave = ()=>{
        if (formData.consentPurposeId && formData.processingRules.length > 0) {
            onSave(formData);
            handleClose();
        } else {
            console.warn("[Dialog] Save validation failed:", {
                hasConsentPurpose: !!formData.consentPurposeId,
                processingRulesCount: formData.processingRules.length
            });
        }
    };
    const getUserAttributeName = (id)=>{
        const attribute = userAttributes.find((attr)=>attr.id === id);
        return attribute?.name || `Attribute ${id}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-6xl h-[700px] flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        children: [
                            isEdit ? "Edit" : "Add",
                            " Purpose Master"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col space-y-6 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 space-y-6 overflow-y-auto pr-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Purpose Master"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this),
                                        publishedConsentPurposes.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-yellow-50 border border-yellow-200 rounded-md",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-yellow-800",
                                                children: "No published consent purposes available. Please publish consent purposes first before creating processes."
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                lineNumber: 257,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
                                            open: consentPurposeComboboxOpen,
                                            onOpenChange: setConsentPurposeComboboxOpen,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        role: "combobox",
                                                        "aria-expanded": consentPurposeComboboxOpen,
                                                        className: "w-full max-w-lg justify-between",
                                                        disabled: publishedConsentPurposes.length === 0,
                                                        children: [
                                                            formData.consentPurposeId ? (()=>{
                                                                const selectedPurpose = consentPurposes.find((cp)=>cp.id === formData.consentPurposeId);
                                                                return selectedPurpose ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col text-left",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: [
                                                                            selectedPurpose.name,
                                                                            " (",
                                                                            selectedPurpose.code || selectedPurpose.id,
                                                                            selectedPurpose.version ? ` - v${selectedPurpose.version}` : "",
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                        lineNumber: 282,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 27
                                                                }, this) : null;
                                                            })() : "Select a purpose master...",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__["ChevronsUpDown"], {
                                                                className: "ml-2 h-4 w-4 shrink-0 opacity-50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                    className: "w-full p-0",
                                                    align: "start",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandInput"], {
                                                                placeholder: "Search consent purposes..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                lineNumber: 299,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandList"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandEmpty"], {
                                                                        children: publishedConsentPurposes.length === 0 ? "No published consent purposes available. Please publish consent purposes first." : "No consent purpose found."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                        lineNumber: 301,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandGroup"], {
                                                                        children: publishedConsentPurposes.map((purpose)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandItem"], {
                                                                                value: `${purpose.name} (${purpose.code || purpose.id}) v${purpose.version || 1}`,
                                                                                onSelect: ()=>handleConsentPurposeSelect(purpose.id),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mr-2 h-4 w-4", formData.consentPurposeId === purpose.id ? "opacity-100" : "opacity-0")
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                        lineNumber: 316,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "font-medium",
                                                                                                children: [
                                                                                                    purpose.name,
                                                                                                    " (",
                                                                                                    purpose.code || purpose.id,
                                                                                                    purpose.version ? ` - v${purpose.version}` : "",
                                                                                                    ")"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                                lineNumber: 325,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-xs text-muted-foreground",
                                                                                                children: [
                                                                                                    purpose.processingPurposes?.length || 0,
                                                                                                    " ",
                                                                                                    "processing purposes • Published"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                                lineNumber: 332,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                        lineNumber: 324,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, purpose.id, true, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                lineNumber: 308,
                                                                                columnNumber: 27
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                        lineNumber: 306,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Consent Duration Configuration"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                            lineNumber: 348,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
                                                    value: formData.durationType,
                                                    onValueChange: (value)=>setFormData((prev)=>({
                                                                ...prev,
                                                                durationType: value
                                                            })),
                                                    className: "flex items-center space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                                                    value: "until_purpose_met",
                                                                    id: "until_purpose_met"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                    lineNumber: 361,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                    htmlFor: "until_purpose_met",
                                                                    className: "text-sm font-normal cursor-pointer",
                                                                    children: "Until Purpose Met"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                    lineNumber: 365,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                                                    value: "custom_duration",
                                                                    id: "custom_duration"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                    lineNumber: 373,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                    htmlFor: "custom_duration",
                                                                    className: "text-sm font-normal cursor-pointer",
                                                                    children: "Custom Duration"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                    lineNumber: 377,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 17
                                                }, this),
                                                formData.durationType === "custom_duration" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                type: "number",
                                                                min: "1",
                                                                placeholder: "Duration",
                                                                value: formData.consentDuration || "",
                                                                onChange: (e)=>setFormData((prev)=>({
                                                                            ...prev,
                                                                            consentDuration: parseInt(e.target.value) || 1
                                                                        }))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                lineNumber: 390,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-32",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                value: formData.durationUnit,
                                                                onValueChange: (value)=>setFormData((prev)=>({
                                                                            ...prev,
                                                                            durationUnit: value
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                            lineNumber: 416,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                        lineNumber: 415,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                value: "days",
                                                                                children: "Days"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                lineNumber: 419,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                value: "weeks",
                                                                                children: "Weeks"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                lineNumber: 420,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                value: "months",
                                                                                children: "Months"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                lineNumber: 421,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                value: "years",
                                                                                children: "Years"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                lineNumber: 422,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                        lineNumber: 418,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                lineNumber: 404,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                    lineNumber: 347,
                                    columnNumber: 13
                                }, this),
                                formData.consentPurposeId > 0 && processingPurposes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Processing Rules"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                    lineNumber: 439,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    children: "Purpose Attributes"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                    lineNumber: 440,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "text-center",
                                                                    children: "Mandatory"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                    lineNumber: 441,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "text-center",
                                                                    children: "Re-consentable by Principal"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                    lineNumber: 442,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "text-center",
                                                                    children: "Revocable by Principal"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                    lineNumber: 445,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "w-[200px]",
                                                                    children: "Retention Duration"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                    lineNumber: 448,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                        children: processingPurposes.map((pp)=>{
                                                            const rule = formData.processingRules.find((r)=>r.processingPurposeId === pp.id);
                                                            if (!rule) return null;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        className: "font-medium border-r",
                                                                        children: pp.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                        lineNumber: 460,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        className: "border-r",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-wrap gap-1",
                                                                            children: rule.userAttributeNames.map((attrName)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: "secondary",
                                                                                    className: "text-xs",
                                                                                    children: attrName
                                                                                }, attrName, false, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                    lineNumber: 466,
                                                                                    columnNumber: 35
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                            lineNumber: 464,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                        lineNumber: 463,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        className: "text-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                            checked: rule.mandatory,
                                                                            onCheckedChange: (checked)=>handleProcessingRuleUpdate(pp.id, "mandatory", checked)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                            lineNumber: 477,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                        lineNumber: 476,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        className: "text-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                            checked: rule.reconsentableByPrincipal,
                                                                            onCheckedChange: (checked)=>handleProcessingRuleUpdate(pp.id, "reconsentableByPrincipal", checked)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                            lineNumber: 489,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                        lineNumber: 488,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        className: "text-center border-r",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                            checked: rule.revocableByPrincipal,
                                                                            disabled: rule.mandatory,
                                                                            onCheckedChange: (checked)=>handleProcessingRuleUpdate(pp.id, "revocableByPrincipal", checked)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                            lineNumber: 501,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                        lineNumber: 500,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                                    type: "number",
                                                                                    min: "1",
                                                                                    className: "w-20 h-8",
                                                                                    value: rule.retentionDurationValue || "",
                                                                                    onChange: (e)=>handleProcessingRuleUpdate(pp.id, "retentionDurationValue", parseInt(e.target.value) || 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                    lineNumber: 515,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                                    value: rule.retentionDurationUnit || "days",
                                                                                    onValueChange: (value)=>handleProcessingRuleUpdate(pp.id, "retentionDurationUnit", value),
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                            className: "h-8 w-24",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                                lineNumber: 539,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                            lineNumber: 538,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                                    value: "days",
                                                                                                    children: "Days"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                                    lineNumber: 542,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                                    value: "weeks",
                                                                                                    children: "Weeks"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                                    lineNumber: 543,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                                    value: "months",
                                                                                                    children: "Months"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                                    lineNumber: 544,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                                    value: "years",
                                                                                                    children: "Years"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                                    lineNumber: 545,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                            lineNumber: 541,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                                    lineNumber: 528,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                            lineNumber: 514,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                        lineNumber: 513,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, pp.id, true, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                                lineNumber: 459,
                                                                columnNumber: 27
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                                lineNumber: 436,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                            lineNumber: 435,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                    lineNumber: 433,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 flex justify-end gap-2 pt-4 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: handleClose,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                    lineNumber: 561,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleSave,
                                    disabled: !formData.consentPurposeId || formData.processingRules.length === 0 || publishedConsentPurposes.length === 0,
                                    children: [
                                        isEdit ? "Update" : "Add",
                                        " Purpose Master"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                                    lineNumber: 564,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                            lineNumber: 560,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
            lineNumber: 243,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx",
        lineNumber: 242,
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
"[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$dialogs$2f$add$2d$consent$2d$purpose$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-consent-purpose-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$action$2d$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/action-buttons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/business-process-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
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
function Step2Form({ data, isEdit, businessProcessId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusinessProcessContext"])();
    const [dialogOpen, setDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingConsent, setEditingConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Get configured consent purposes from context
    const consentConfigs = state.consentPurposes || [];
    const handleAddConsent = (consentData)=>{
        // Check if consent purpose already exists to prevent duplicates
        const exists = consentConfigs.some((config)=>config.consentPurposeId === consentData.consentPurposeId);
        if (exists) {
            console.warn("[Step2Form] Consent purpose already exists, skipping duplicate");
            setDialogOpen(false);
            return;
        }
        // Convert ConsentPurposeData to ConsentPurposeConfig
        const consentPurpose = data.consentPurposes?.find((cp)=>cp.id === consentData.consentPurposeId);
        const consentConfig = {
            id: Date.now(),
            consentPurposeId: consentData.consentPurposeId,
            consentPurpose: {
                hasNewerVersion: consentData.hasNewerVersion || false
            },
            // VVV --- FIX 2: Add missing property to object --- VVV
            hasNewerVersion: consentData.hasNewerVersion || false,
            // ^^^ --- END OF FIX 2 --- ^^^
            consentPurposeName: consentPurpose?.name || `Consent Purpose ${consentData.consentPurposeId}`,
            durationType: consentData.durationType,
            consentDuration: consentData.consentDuration,
            durationUnit: consentData.durationUnit,
            processingRules: consentData.processingRules.map((rule)=>({
                    processingPurposeId: rule.processingPurposeId,
                    processingPurposeName: getProcessingPurposeName(rule.processingPurposeId),
                    userAttributes: rule.userAttributeNames,
                    isMandatory: rule.mandatory,
                    isReconsentable: rule.reconsentableByPrincipal,
                    isRevocable: rule.revocableByPrincipal,
                    retentionDurationValue: rule.retentionDurationValue,
                    retentionDurationUnit: rule.retentionDurationUnit
                }))
        };
        dispatch({
            type: "UPDATE_FIELD",
            field: "consentPurposes",
            value: [
                ...consentConfigs,
                consentConfig
            ]
        });
        setDialogOpen(false);
    };
    const handleEditConsent = (consentData)=>{
        if (!editingConsent) return;
        const consentPurpose = data.consentPurposes?.find((cp)=>cp.id === consentData.consentPurposeId);
        const updatedConfig = {
            ...editingConsent,
            consentPurposeId: consentData.consentPurposeId,
            // This line was correct and now matches the updated interface
            hasNewerVersion: consentData.hasNewerVersion || false,
            consentPurposeName: consentPurpose?.name || `Consent Purpose ${consentData.consentPurposeId}`,
            durationType: consentData.durationType,
            consentDuration: consentData.consentDuration,
            durationUnit: consentData.durationUnit,
            processingRules: consentData.processingRules.map((rule)=>({
                    processingPurposeId: rule.processingPurposeId,
                    processingPurposeName: getProcessingPurposeName(rule.processingPurposeId),
                    userAttributes: rule.userAttributeNames,
                    isMandatory: rule.mandatory,
                    isReconsentable: rule.reconsentableByPrincipal,
                    isRevocable: rule.revocableByPrincipal,
                    retentionDurationValue: rule.retentionDurationValue,
                    retentionDurationUnit: rule.retentionDurationUnit
                }))
        };
        const updatedConfigs = consentConfigs.map((config)=>config.id === editingConsent.id ? updatedConfig : config);
        dispatch({
            type: "UPDATE_FIELD",
            field: "consentPurposes",
            value: updatedConfigs
        });
        setEditingConsent(null);
        setDialogOpen(false);
    };
    const handleDeleteConsent = (id)=>{
        const updatedConfigs = consentConfigs.filter((config)=>config.id !== id);
        dispatch({
            type: "UPDATE_FIELD",
            field: "consentPurposes",
            value: updatedConfigs
        });
    };
    const openEditDialog = (consent)=>{
        setEditingConsent(consent);
        setDialogOpen(true);
    };
    const convertToEditData = (config)=>{
        if (!config) return null;
        return {
            consentPurpose: {
                hasNewerVersion: config.hasNewerVersion || false
            },
            consentPurposeId: config.consentPurposeId,
            durationType: config.durationType,
            consentDuration: config.consentDuration,
            durationUnit: config.durationUnit,
            processingRules: config.processingRules.map((rule)=>({
                    processingPurposeId: rule.processingPurposeId,
                    userAttributeNames: rule.userAttributes,
                    mandatory: rule.isMandatory,
                    reconsentableByPrincipal: rule.isReconsentable,
                    revocableByPrincipal: rule.isRevocable,
                    retentionDurationValue: rule.retentionDurationValue,
                    retentionDurationUnit: rule.retentionDurationUnit
                }))
        };
    };
    const getUserAttributeName = (id)=>{
        const attribute = data.userAttributes?.find((attr)=>attr.id === id);
        return attribute?.name || `Attribute ${id}`;
    };
    const getUserAttributeId = (name)=>{
        const attribute = data.userAttributes?.find((attr)=>attr.name === name);
        return attribute?.id;
    };
    const getProcessingPurposeName = (id)=>{
        for (const consentPurpose of data.consentPurposes || []){
            const processingPurpose = consentPurpose.processingPurposes?.find((pp)=>pp.id === id);
            if (processingPurpose) {
                return processingPurpose.name;
            }
        }
        return `Processing Purpose ${id}`;
    };
    const convertDurationToDays = (config)=>{
        if (config.durationType === "until_purpose_met") {
            return "Until purpose met";
        }
        const duration = config.consentDuration || 0;
        const unit = config.durationUnit || "days";
        let totalDays = duration;
        switch(unit){
            case "weeks":
                totalDays = duration * 7;
                break;
            case "months":
                totalDays = duration * 30; // approximate
                break;
            case "years":
                totalDays = duration * 365; // approximate
                break;
            default:
                totalDays = duration;
        }
        return `${totalDays} days`;
    };
    const handleNext = ()=>{
        // Get step 1 data from context
        const step1Data = state.step1Data;
        if (!step1Data) {
            console.error("Step 1 data not found in context!");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please complete Step 1 first");
            return;
        }
        if (consentConfigs.length === 0) {
            console.error("No consent purposes configured!");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please add at least one consent purpose");
            return;
        }
        // Save consent purposes to context (already saved via dispatch in add/edit/delete handlers)
        // No DB operations here - everything happens in Step 6
        // Navigate to next step
        const params = new URLSearchParams();
        params.set("step", "3");
        if (businessProcessId) {
            params.set("id", businessProcessId);
        }
        const basePath = isEdit && businessProcessId ? `/cms/data-fiduciary/business-processes/${businessProcessId}/edit` : `/cms/data-fiduciary/business-processes/new`;
        router.push(`${basePath}?${params.toString()}`);
    };
    const handleCancel = ()=>{
        router.push("/cms/data-fiduciary/business-processes");
    };
    return(// Wrap your component in TooltipProvider (ideally at a higher level)
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b px-6 py-5 flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold tracking-tight",
                        children: "Step 2. Configure Consent"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                        lineNumber: 328,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                    lineNumber: 327,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto px-6 py-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-medium",
                                                children: "Consent Purposes"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                lineNumber: 339,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Configure consent purposes and their processing rules"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                lineNumber: 340,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, this),
                                    consentConfigs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>{
                                            setEditingConsent(null);
                                            setDialogOpen(true);
                                        },
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "h-4 w-4 group-hover:scale-125 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                lineNumber: 352,
                                                columnNumber: 19
                                            }, this),
                                            "Add Consent Purpose"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                        lineNumber: 345,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this),
                            consentConfigs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "pt-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-medium text-muted-foreground",
                                                children: "No consent purposes configured"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                lineNumber: 363,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground mt-2",
                                                children: "Add a consent purpose to start configuring processing rules"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                lineNumber: 366,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "mt-4 group",
                                                onClick: ()=>{
                                                    setEditingConsent(null);
                                                    setDialogOpen(true);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "h-4 w-4 group-hover:scale-125 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Add a Purpose Master"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                lineNumber: 370,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                        lineNumber: 362,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                    lineNumber: 361,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                lineNumber: 360,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                            className: "bg-muted",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "whitespace-normal",
                                                        children: "Purpose Master"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "whitespace-normal",
                                                        children: "Consent Duration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "whitespace-normal",
                                                        children: "Purpose Sub Master"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "whitespace-normal",
                                                        children: "Attributes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "text-center whitespace-normal",
                                                        children: "Mandatory"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "text-center whitespace-normal",
                                                        children: "Re-consentable by Principal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "text-center whitespace-normal border-r py-2",
                                                        children: "Revocable by Principal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "whitespace-normal",
                                                        children: "Retention Duration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "text-center whitespace-normal",
                                                        children: "Actions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                lineNumber: 387,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                            lineNumber: 386,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                            children: consentConfigs.map((config)=>{
                                                const rules = config.processingRules || [];
                                                // If no processing rules, show one row with a message
                                                if (rules.length === 0) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "font-medium border-r",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: config.consentPurposeName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                            lineNumber: 411,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        config.consentPurpose.hasNewerVersion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                                        className: "h-4 w-4 text-muted-foreground"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                                        lineNumber: 418,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                                    lineNumber: 416,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        children: "A newer version is available."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                                        lineNumber: 421,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                                    lineNumber: 420,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                            lineNumber: 415,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                    lineNumber: 410,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                lineNumber: 409,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "border-r",
                                                                children: convertDurationToDays(config)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                lineNumber: 427,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "font-medium text-muted-foreground",
                                                                colSpan: 4,
                                                                children: "No processing rules configured"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                lineNumber: 430,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "text-center border-l",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$action$2d$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionButtonsGroup"], {
                                                                    onEdit: ()=>openEditDialog(config),
                                                                    onDelete: ()=>handleDeleteConsent(config.id),
                                                                    className: "justify-center gap-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                lineNumber: 436,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, `${config.id}-empty`, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 27
                                                    }, this);
                                                }
                                                // Normal rendering with processing rules
                                                return rules.map((rule, ruleIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        children: [
                                                            ruleIndex === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                rowSpan: rules.length,
                                                                className: "font-medium border-r",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: config.consentPurposeName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                            lineNumber: 456,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        config.consentPurpose.hasNewerVersion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                                        className: "h-4 w-4 text-muted-foreground"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                                        lineNumber: 463,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                                    lineNumber: 461,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        children: "A newer version is available."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                                        lineNumber: 466,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                                    lineNumber: 465,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                            lineNumber: 460,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                    lineNumber: 455,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 29
                                                            }, this),
                                                            ruleIndex === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                rowSpan: rules.length,
                                                                className: "border-r",
                                                                children: convertDurationToDays(config)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                lineNumber: 474,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "font-medium border-r",
                                                                children: rule.processingPurposeName
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                lineNumber: 481,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "border-r",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-1",
                                                                    children: (rule.userAttributes || []).map((attrName, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "outline",
                                                                            className: "text-xs",
                                                                            children: attrName
                                                                        }, i, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                            lineNumber: 488,
                                                                            columnNumber: 35
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                    lineNumber: 485,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                lineNumber: 484,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "text-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                    checked: rule.isMandatory,
                                                                    disabled: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                    lineNumber: 500,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                lineNumber: 499,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "text-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                    checked: rule.isReconsentable,
                                                                    disabled: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                    lineNumber: 503,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                lineNumber: 502,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "text-center border-r",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                    checked: rule.isRevocable,
                                                                    disabled: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                lineNumber: 505,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: rule.retentionDurationValue && rule.retentionDurationUnit ? `${rule.retentionDurationValue} ${rule.retentionDurationUnit}` : "-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                lineNumber: 508,
                                                                columnNumber: 27
                                                            }, this),
                                                            ruleIndex === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                rowSpan: rules.length,
                                                                className: "text-center border-l",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$action$2d$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionButtonsGroup"], {
                                                                    onEdit: ()=>openEditDialog(config),
                                                                    onDelete: ()=>handleDeleteConsent(config.id),
                                                                    className: "justify-center gap-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                    lineNumber: 519,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                                lineNumber: 515,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, `${config.id}-${ruleIndex}`, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 25
                                                    }, this));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                            lineNumber: 401,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                    lineNumber: 385,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                lineNumber: 384,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                    lineNumber: 334,
                    columnNumber: 9
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
                                className: "min-w-[100px]",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                lineNumber: 539,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                onClick: handleNext,
                                className: "min-w-[120px]",
                                disabled: consentConfigs.length === 0,
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                                lineNumber: 547,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                        lineNumber: 538,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                    lineNumber: 537,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$dialogs$2f$add$2d$consent$2d$purpose$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddConsentPurposeDialog"], {
                    open: dialogOpen,
                    onOpenChange: setDialogOpen,
                    onSave: editingConsent ? handleEditConsent : handleAddConsent,
                    editData: convertToEditData(editingConsent),
                    consentPurposes: data.consentPurposes || [],
                    userAttributes: data.userAttributes || [],
                    isEdit: !!editingConsent,
                    existingConsentConfigs: state.consentPurposes || []
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
                    lineNumber: 559,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
            lineNumber: 325,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step2-form.tsx",
        lineNumber: 324,
        columnNumber: 5
    }, this));
}
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddEulaDialog",
    ()=>AddEulaDialog
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function AddEulaDialog({ open, onOpenChange, onSave, editData, isEdit = false }) {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        link: ""
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isValidating, setIsValidating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize form data when editing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isEdit && editData) {
            setFormData({
                title: editData.title,
                link: editData.link
            });
        } else {
            setFormData({
                title: "",
                link: ""
            });
        }
        setErrors({});
    }, [
        isEdit,
        editData,
        open
    ]);
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
        if (errors[field]) {
            setErrors((prev)=>({
                    ...prev,
                    [field]: ""
                }));
        }
    };
    const validateForm = async ()=>{
        const newErrors = {};
        const linkValue = formData.link.trim();
        // Validate title
        if (!formData.title.trim()) {
            newErrors.title = "Title is required";
        }
        // Validate link
        if (!linkValue) {
            newErrors.link = "Link is required";
        } else {
            // 1. HTTP/HTTPS URL Pattern
            const urlPattern = /^https?:\/\/.+\..+/;
            // 2. Email Pattern (simple validation)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // 3. Mailto Pattern (e.g., mailto:user@example.com)
            const mailtoPattern = /^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValidUrl = urlPattern.test(linkValue);
            const isValidEmail = emailPattern.test(linkValue);
            const isValidMailto = mailtoPattern.test(linkValue);
            if (!isValidUrl && !isValidEmail && !isValidMailto) {
                newErrors.link = "Please enter a valid URL (http/https) or email address";
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsValidating(true);
        const isValid = await validateForm();
        setIsValidating(false);
        if (isValid) {
            let finalLink = formData.link.trim();
            // Helper: Check if it looks like a raw email (no protocol)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // If it's a raw email, prepend 'mailto:' so the link actually works
            if (emailPattern.test(finalLink)) {
                finalLink = `mailto:${finalLink}`;
            }
            onSave({
                ...formData,
                link: finalLink
            });
            handleClose();
        }
    };
    const handleClose = ()=>{
        setFormData({
            title: "",
            link: ""
        });
        setErrors({});
        onOpenChange(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[600px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        children: isEdit ? "Edit Redirectional URL" : "Add Redirectional URL"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "title",
                                    children: [
                                        "Add a title for the Redirectional URL",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "title",
                                    placeholder: "e.g. Terms and Conditions",
                                    value: formData.title,
                                    onChange: (e)=>handleInputChange("title", e.target.value),
                                    className: errors.title ? "border-red-500" : ""
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                errors.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-500",
                                    children: errors.title
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "link",
                                    children: [
                                        "Enter the Redirectional URL link or email",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "link",
                                    placeholder: "e.g. https://example.com or support@example.com",
                                    value: formData.link,
                                    onChange: (e)=>handleInputChange("link", e.target.value),
                                    className: errors.link ? "border-red-500" : ""
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                errors.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-500",
                                    children: errors.link
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 justify-end pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    onClick: handleClose,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    disabled: isValidating,
                                    className: "min-w-[100px]",
                                    children: isValidating ? "Validating..." : "Submit"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
            lineNumber: 148,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$action$2d$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/action-buttons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/business-process-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$dialogs$2f$add$2d$eula$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/dialogs/add-eula-dialog.tsx [app-ssr] (ecmascript)");
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
function Step3Form({ data, isEdit, businessProcessId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusinessProcessContext"])();
    const [dialogOpen, setDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingEula, setEditingEula] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Get EULAs from context
    const eulas = state.eulas || [];
    const handleAddEula = (eulaData)=>{
        dispatch({
            type: "ADD_EULA",
            payload: {
                title: eulaData.title,
                link: eulaData.link
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Redirectional URL added successfully!");
        setDialogOpen(false);
    };
    const handleEditEula = (eulaData)=>{
        if (editingEula) {
            dispatch({
                type: "UPDATE_EULA",
                payload: {
                    id: editingEula.id,
                    title: eulaData.title,
                    link: eulaData.link
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Redirectional URL updated successfully!");
            setEditingEula(null);
            setDialogOpen(false);
        }
    };
    const handleDeleteEula = (eulaId)=>{
        dispatch({
            type: "DELETE_EULA",
            payload: eulaId
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Redirectional URL deleted successfully!");
    };
    const openEditDialog = (eula)=>{
        setEditingEula(eula);
        setDialogOpen(true);
    };
    const openAddDialog = ()=>{
        setEditingEula(null);
        setDialogOpen(true);
    };
    const handleNext = ()=>{
        // Save EULAs as legal documents in the format: { "title": "link" }
        const legalDocuments = {};
        eulas.forEach((eula)=>{
            legalDocuments[eula.title] = eula.link;
        });
        // Store the legal documents in step3 data
        dispatch({
            type: "SET_STEP3_DATA",
            payload: {
                legalDocuments
            }
        });
        // Navigate to next step (no DB operations)
        const params = new URLSearchParams();
        params.set("step", "4");
        if (businessProcessId) {
            params.set("id", businessProcessId);
        }
        const basePath = isEdit && businessProcessId ? `/cms/data-fiduciary/business-processes/${businessProcessId}/edit` : `/cms/data-fiduciary/business-processes/new`;
        router.push(`${basePath}?${params.toString()}`);
    };
    const handlePrevious = ()=>{
        const params = new URLSearchParams();
        params.set("step", "2");
        if (businessProcessId) {
            params.set("id", businessProcessId);
        }
        const basePath = businessProcessId ? `/cms/data-fiduciary/business-processes/${businessProcessId}/edit` : `/cms/data-fiduciary/business-processes/new`;
        router.push(`${basePath}?${params.toString()}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b px-6 py-5 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold tracking-tight",
                    children: "Step 3. Choose Redirectional URL"
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-6 py-6",
                children: eulas.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border border-dashed rounded-lg p-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-medium mb-2",
                            children: "No Redirectional URL yet!"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mb-4",
                            children: "Add a Redirectional URL needed for carrying out the Process by clicking the button below"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: openAddDialog,
                            children: "Add Redirectional URL"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "text-neutral-500 font-medium",
                                    children: [
                                        "List of Redirectional URLs (",
                                        eulas.length,
                                        " ",
                                        eulas.length === 1 ? "Entry" : "Entries",
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: openAddDialog,
                                    children: "Add Redirectional URL"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    className: "font-semibold",
                                                    children: "Redirectional URL Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    className: "font-semibold",
                                                    children: "Link"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    className: "font-semibold text-center",
                                                    children: "Actions"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                            lineNumber: 191,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                        children: eulas.map((eula, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "font-medium",
                                                        children: eula.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate max-w-[300px]",
                                                                    title: eula.link,
                                                                    children: eula.link
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                                                    lineNumber: 207,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "ghost",
                                                                    size: "sm",
                                                                    className: "h-6 w-6 p-0",
                                                                    onClick: ()=>window.open(eula.link, "_blank"),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        className: "h-3 w-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                                                        lineNumber: 219,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$action$2d$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionButtonsGroup"], {
                                                            onEdit: ()=>eula.id && openEditDialog(eula),
                                                            onDelete: ()=>eula.id && handleDeleteEula(eula.id),
                                                            className: "justify-center gap-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, eula.id || index, true, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                                lineNumber: 201,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                lineNumber: 165,
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
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            onClick: handleNext,
                            className: "min-w-[100px]",
                            children: "Next"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$dialogs$2f$add$2d$eula$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddEulaDialog"], {
                open: dialogOpen,
                onOpenChange: setDialogOpen,
                onSave: editingEula ? handleEditEula : handleAddEula,
                editData: editingEula ? {
                    title: editingEula.title,
                    link: editingEula.link
                } : null,
                isEdit: !!editingEula
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step3-form.tsx",
        lineNumber: 156,
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
"[project]/actions/data:64db6c [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"78fbfbd66a197b4f61ba4aa740092cd88ebe12c695":"autoTranslateBusinessProcess"},"actions/auto-translate.ts",""] */ __turbopack_context__.s([
    "autoTranslateBusinessProcess",
    ()=>autoTranslateBusinessProcess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var autoTranslateBusinessProcess = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("78fbfbd66a197b4f61ba4aa740092cd88ebe12c695", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "autoTranslateBusinessProcess"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXV0by10cmFuc2xhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcbi8qKlxyXG4gKiBPcGVuIEJoYXJhdCBEaWdpdGFsIENvbnNlbnQgYnkgSURmeVxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjUgQmFsZG9yIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQgKElEZnkpXHJcbiAqIFxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBQcml2eSBQdWJsaWMgTGljZW5zZS5cclxuICogU2VlIExJQ0VOU0UubWQgZm9yIHRoZSBmdWxsIHRlcm1zIG9mIHVzZS5cclxuICogXHJcbiAqIFVuYXV0aG9yaXplZCBjb3B5aW5nLCBtb2RpZmljYXRpb24sIGRpc3RyaWJ1dGlvbiwgb3IgY29tbWVyY2lhbCB1c2VcclxuICogaXMgc3RyaWN0bHkgcHJvaGliaXRlZCB3aXRob3V0IHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbiBmcm9tIElEZnkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IExhbmd1YWdlQ29kZSB9IGZyb20gXCJAL2xpYi90eXBlcy9sYW5ndWFnZXNcIjtcclxuaW1wb3J0IHsgdHJhbnNsYXRlT2JqZWN0IH0gZnJvbSBcIkAvbGliL3NlcnZpY2VzL2dvb2dsZS10cmFuc2xhdGUtc2VydmljZVwiO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tIFwiQC9saWIvdXRpbHMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbi8qKlxyXG4gKiBBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZSB0byBtdWx0aXBsZSBsYW5ndWFnZXNcclxuICogXHJcbiAqIEBwYXJhbSB1c2VyQXR0cmlidXRlSWQgLSBJRCBvZiB0aGUgdXNlciBhdHRyaWJ1dGUgdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB0YXJnZXRMYW5ndWFnZXMgLSBBcnJheSBvZiBsYW5ndWFnZSBjb2RlcyB0byB0cmFuc2xhdGUgdG9cclxuICogQHBhcmFtIHNvdXJjZUxhbmd1YWdlIC0gU291cmNlIGxhbmd1YWdlIChkZWZhdWx0cyB0byAnZW4nKVxyXG4gKiBAcmV0dXJucyBTdWNjZXNzIHdpdGggdHJhbnNsYXRpb25zIG9yIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0b1RyYW5zbGF0ZVVzZXJBdHRyaWJ1dGUoXHJcbiAgdXNlckF0dHJpYnV0ZUlkOiBudW1iZXIsXHJcbiAgdGFyZ2V0TGFuZ3VhZ2VzOiBMYW5ndWFnZUNvZGVbXSxcclxuICBzb3VyY2VMYW5ndWFnZTogTGFuZ3VhZ2VDb2RlID0gXCJlblwiXHJcbikge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGxvZ2dlci5pbmZvKFwiQXV0by10cmFuc2xhdGUgVXNlciBBdHRyaWJ1dGU6IFN0YXJ0aW5nXCIsIHtcclxuICAgICAgdXNlckF0dHJpYnV0ZUlkLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZXMsXHJcbiAgICAgIHNvdXJjZUxhbmd1YWdlLFxyXG4gICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIGlucHV0c1xyXG4gICAgaWYgKCF0YXJnZXRMYW5ndWFnZXMgfHwgdGFyZ2V0TGFuZ3VhZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJObyB0YXJnZXQgbGFuZ3VhZ2VzIHNwZWNpZmllZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmV0Y2ggdXNlciBhdHRyaWJ1dGVcclxuICAgIGNvbnN0IHVzZXJBdHRyaWJ1dGUgPSBhd2FpdCBwcmlzbWEudXNlckF0dHJpYnV0ZS5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHVzZXJBdHRyaWJ1dGVJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uczogdHJ1ZSxcclxuICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXVzZXJBdHRyaWJ1dGUpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiVXNlciBhdHRyaWJ1dGUgbm90IGZvdW5kXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgc291cmNlIHRyYW5zbGF0aW9uIChFbmdsaXNoIGJ5IGRlZmF1bHQpXHJcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb25zID0gKHVzZXJBdHRyaWJ1dGUudHJhbnNsYXRpb25zIGFzIGFueSkgfHwge307XHJcbiAgICBjb25zdCBzb3VyY2VUcmFuc2xhdGlvbiA9IGN1cnJlbnRUcmFuc2xhdGlvbnNbc291cmNlTGFuZ3VhZ2VdIHx8IHtcclxuICAgICAgbmFtZTogdXNlckF0dHJpYnV0ZS5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogbnVsbCxcclxuICAgICAgcGxhY2Vob2xkZXI6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHNvdXJjZSBoYXMgY29udGVudFxyXG4gICAgaWYgKCFzb3VyY2VUcmFuc2xhdGlvbi5uYW1lIHx8IHNvdXJjZVRyYW5zbGF0aW9uLm5hbWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBgU291cmNlIHRyYW5zbGF0aW9uICgke3NvdXJjZUxhbmd1YWdlfSkgaGFzIG5vIG5hbWVgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZTogVHJhbnNsYXRpbmcgZmllbGRzXCIsIHtcclxuICAgICAgdXNlckF0dHJpYnV0ZUlkLFxyXG4gICAgICBzb3VyY2VMYW5ndWFnZSxcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VzLFxyXG4gICAgICBmaWVsZHM6IE9iamVjdC5rZXlzKHNvdXJjZVRyYW5zbGF0aW9uKSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRyYW5zbGF0ZSB0byBlYWNoIHRhcmdldCBsYW5ndWFnZVxyXG4gICAgY29uc3QgdHJhbnNsYXRpb25SZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XHJcbiAgICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXJnZXRMYW5nIG9mIHRhcmdldExhbmd1YWdlcykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFNraXAgaWYgc291cmNlIGFuZCB0YXJnZXQgYXJlIHRoZSBzYW1lXHJcbiAgICAgICAgaWYgKHRhcmdldExhbmcgPT09IHNvdXJjZUxhbmd1YWdlKSB7XHJcbiAgICAgICAgICB0cmFuc2xhdGlvblJlc3VsdHNbdGFyZ2V0TGFuZ10gPSBzb3VyY2VUcmFuc2xhdGlvbjtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRoZSBvYmplY3RcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVkID0gYXdhaXQgdHJhbnNsYXRlT2JqZWN0KFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBzb3VyY2VUcmFuc2xhdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc291cmNlVHJhbnNsYXRpb24uZGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHNvdXJjZVRyYW5zbGF0aW9uLnBsYWNlaG9sZGVyIHx8IG51bGwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICAgIHNvdXJjZUxhbmd1YWdlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdHJhbnNsYXRpb25SZXN1bHRzW3RhcmdldExhbmddID0gdHJhbnNsYXRlZDtcclxuXHJcbiAgICAgICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZTogTGFuZ3VhZ2UgY29tcGxldGVkXCIsIHtcclxuICAgICAgICAgIHVzZXJBdHRyaWJ1dGVJZCxcclxuICAgICAgICAgIGxhbmd1YWdlOiB0YXJnZXRMYW5nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gYEZhaWxlZCB0byB0cmFuc2xhdGUgdG8gJHt0YXJnZXRMYW5nfWA7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyb3JNc2cpO1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihcIkF1dG8tdHJhbnNsYXRlIFVzZXIgQXR0cmlidXRlOiBMYW5ndWFnZSBmYWlsZWRcIiwge1xyXG4gICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgICB1c2VyQXR0cmlidXRlSWQsXHJcbiAgICAgICAgICBsYW5ndWFnZTogdGFyZ2V0TGFuZyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIGFsbCB0cmFuc2xhdGlvbnMgZmFpbGVkLCByZXR1cm4gZXJyb3JcclxuICAgIGlmIChPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJBbGwgdHJhbnNsYXRpb25zIGZhaWxlZFwiLCBkZXRhaWxzOiBlcnJvcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXJnZSB3aXRoIGV4aXN0aW5nIHRyYW5zbGF0aW9ucyAoZG9uJ3Qgb3ZlcndyaXRlIG1hbnVhbGx5IGVkaXRlZCBvbmVzIHVubGVzcyBleHBsaWNpdGx5IHJlcXVlc3RlZClcclxuICAgIGNvbnN0IHVwZGF0ZWRUcmFuc2xhdGlvbnMgPSB7XHJcbiAgICAgIC4uLmN1cnJlbnRUcmFuc2xhdGlvbnMsXHJcbiAgICAgIC4uLnRyYW5zbGF0aW9uUmVzdWx0cyxcclxuICAgIH07XHJcblxyXG4gICAgLy8gVXBkYXRlIHN1cHBvcnRlZCBsYW5ndWFnZXNcclxuICAgIGNvbnN0IG5ld0xhbmd1YWdlcyA9IE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uUmVzdWx0cykgYXMgTGFuZ3VhZ2VDb2RlW107XHJcbiAgICBjb25zdCBleGlzdGluZ0xhbmd1YWdlcyA9IHVzZXJBdHRyaWJ1dGUuc3VwcG9ydGVkTGFuZ3VhZ2VzIHx8IFtdO1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gQXJyYXkuZnJvbShcclxuICAgICAgbmV3IFNldChbLi4uZXhpc3RpbmdMYW5ndWFnZXMsIC4uLm5ld0xhbmd1YWdlc10pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNhdmUgdG8gZGF0YWJhc2VcclxuICAgIGF3YWl0IHByaXNtYS51c2VyQXR0cmlidXRlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB1c2VyQXR0cmlidXRlSWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRyYW5zbGF0aW9uczogdXBkYXRlZFRyYW5zbGF0aW9ucyxcclxuICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXMsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2dnZXIuaW5mbyhcIkF1dG8tdHJhbnNsYXRlIFVzZXIgQXR0cmlidXRlOiBDb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsIHtcclxuICAgICAgdXNlckF0dHJpYnV0ZUlkLFxyXG4gICAgICB0cmFuc2xhdGVkTGFuZ3VhZ2VzOiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLFxyXG4gICAgICB0b3RhbExhbmd1YWdlczogc3VwcG9ydGVkTGFuZ3VhZ2VzLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJldmFsaWRhdGUgY2FjaGVcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS91c2VyLWF0dHJpYnV0ZXNcIik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgdHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvblJlc3VsdHMsXHJcbiAgICAgIHRyYW5zbGF0ZWRDb3VudDogT2JqZWN0LmtleXModHJhbnNsYXRpb25SZXN1bHRzKS5sZW5ndGgsXHJcbiAgICAgIGVycm9yczogZXJyb3JzLmxlbmd0aCA+IDAgPyBlcnJvcnMgOiB1bmRlZmluZWQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2dnZXIuZXJyb3IoXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZTogRmFpbGVkXCIsIHtcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIHVzZXJBdHRyaWJ1dGVJZCxcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIGF1dG8tdHJhbnNsYXRlXCIsXHJcbiAgICAgIGRldGFpbHM6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCIsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEF1dG8tdHJhbnNsYXRlIHNwZWNpZmljIGZpZWxkcyBvZiBhIFVzZXIgQXR0cmlidXRlIHRvIGEgc2luZ2xlIGxhbmd1YWdlXHJcbiAqIFVzZWZ1bCBmb3IgcmV0cnlpbmcgZmFpbGVkIHRyYW5zbGF0aW9ucyBvciB0cmFuc2xhdGluZyBzcGVjaWZpYyBmaWVsZHNcclxuICogXHJcbiAqIEBwYXJhbSB1c2VyQXR0cmlidXRlSWQgLSBJRCBvZiB0aGUgdXNlciBhdHRyaWJ1dGVcclxuICogQHBhcmFtIHRhcmdldExhbmd1YWdlIC0gU2luZ2xlIHRhcmdldCBsYW5ndWFnZSBjb2RlXHJcbiAqIEBwYXJhbSBmaWVsZHMgLSBPYmplY3Qgd2l0aCBmaWVsZHMgdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSBzb3VyY2VMYW5ndWFnZSAtIFNvdXJjZSBsYW5ndWFnZSAoZGVmYXVsdHMgdG8gJ2VuJylcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRvVHJhbnNsYXRlVXNlckF0dHJpYnV0ZUZpZWxkcyhcclxuICB1c2VyQXR0cmlidXRlSWQ6IG51bWJlcixcclxuICB0YXJnZXRMYW5ndWFnZTogTGFuZ3VhZ2VDb2RlLFxyXG4gIGZpZWxkczoge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nIHwgbnVsbDtcclxuICB9LFxyXG4gIHNvdXJjZUxhbmd1YWdlOiBMYW5ndWFnZUNvZGUgPSBcImVuXCJcclxuKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICBpZiAoIXNlc3Npb24/LnVzZXIpIHtcclxuICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gVmFsaWRhdGUgdXNlciBhdHRyaWJ1dGUgZXhpc3RzXHJcbiAgICBjb25zdCB1c2VyQXR0cmlidXRlID0gYXdhaXQgcHJpc21hLnVzZXJBdHRyaWJ1dGUuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB1c2VyQXR0cmlidXRlSWQgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgdHJhbnNsYXRpb25zOiB0cnVlLFxyXG4gICAgICAgIHN1cHBvcnRlZExhbmd1YWdlczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlckF0dHJpYnV0ZSkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJVc2VyIGF0dHJpYnV0ZSBub3QgZm91bmRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRyYW5zbGF0ZSB0aGUgcHJvdmlkZWQgZmllbGRzXHJcbiAgICBjb25zdCB0cmFuc2xhdGVkID0gYXdhaXQgdHJhbnNsYXRlT2JqZWN0KGZpZWxkcywgdGFyZ2V0TGFuZ3VhZ2UsIHNvdXJjZUxhbmd1YWdlKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgdHJhbnNsYXRpb25zXHJcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb25zID0gKHVzZXJBdHRyaWJ1dGUudHJhbnNsYXRpb25zIGFzIGFueSkgfHwge307XHJcbiAgICBjdXJyZW50VHJhbnNsYXRpb25zW3RhcmdldExhbmd1YWdlXSA9IHtcclxuICAgICAgLi4uKGN1cnJlbnRUcmFuc2xhdGlvbnNbdGFyZ2V0TGFuZ3VhZ2VdIHx8IHt9KSxcclxuICAgICAgLi4udHJhbnNsYXRlZCxcclxuICAgIH07XHJcblxyXG4gICAgLy8gVXBkYXRlIHN1cHBvcnRlZCBsYW5ndWFnZXNcclxuICAgIGNvbnN0IHN1cHBvcnRlZExhbmd1YWdlcyA9IHVzZXJBdHRyaWJ1dGUuc3VwcG9ydGVkTGFuZ3VhZ2VzIHx8IFtdO1xyXG4gICAgaWYgKCFzdXBwb3J0ZWRMYW5ndWFnZXMuaW5jbHVkZXModGFyZ2V0TGFuZ3VhZ2UpKSB7XHJcbiAgICAgIHN1cHBvcnRlZExhbmd1YWdlcy5wdXNoKHRhcmdldExhbmd1YWdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTYXZlIHRvIGRhdGFiYXNlXHJcbiAgICBhd2FpdCBwcmlzbWEudXNlckF0dHJpYnV0ZS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogdXNlckF0dHJpYnV0ZUlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IGN1cnJlbnRUcmFuc2xhdGlvbnMsXHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZSBGaWVsZHM6IENvbXBsZXRlZFwiLCB7XHJcbiAgICAgIHVzZXJBdHRyaWJ1dGVJZCxcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2UsXHJcbiAgICAgIGZpZWxkczogT2JqZWN0LmtleXMoZmllbGRzKSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS91c2VyLWF0dHJpYnV0ZXNcIik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgdHJhbnNsYXRpb246IHRyYW5zbGF0ZWQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2dnZXIuZXJyb3IoXCJBdXRvLXRyYW5zbGF0ZSBVc2VyIEF0dHJpYnV0ZSBGaWVsZHM6IEZhaWxlZFwiLCB7XHJcbiAgICAgIGVycm9yLFxyXG4gICAgICB1c2VyQXR0cmlidXRlSWQsXHJcbiAgICAgIHRhcmdldExhbmd1YWdlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIGF1dG8tdHJhbnNsYXRlIGZpZWxkc1wiLFxyXG4gICAgICBkZXRhaWxzOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2xhdGUgdGV4dCB0byBtdWx0aXBsZSBsYW5ndWFnZXMgKGZvciBjcmVhdGUgZm9ybXMpXHJcbiAqIFRoaXMgYWN0aW9uIHRyYW5zbGF0ZXMgdGV4dCB3aXRob3V0IHNhdmluZyB0byBkYXRhYmFzZVxyXG4gKiBcclxuICogQHBhcmFtIHRleHQgLSBUZXh0IHRvIHRyYW5zbGF0ZVxyXG4gKiBAcGFyYW0gdGFyZ2V0TGFuZ3VhZ2VzIC0gQXJyYXkgb2YgbGFuZ3VhZ2UgY29kZXMgdG8gdHJhbnNsYXRlIHRvXHJcbiAqIEBwYXJhbSBzb3VyY2VMYW5ndWFnZSAtIFNvdXJjZSBsYW5ndWFnZSAoZGVmYXVsdHMgdG8gJ2VuJylcclxuICogQHJldHVybnMgU3VjY2VzcyB3aXRoIHRyYW5zbGF0aW9ucyBvciBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYW5zbGF0ZVRleHRUb0xhbmd1YWdlcyhcclxuICB0ZXh0OiBzdHJpbmcsXHJcbiAgdGFyZ2V0TGFuZ3VhZ2VzOiBMYW5ndWFnZUNvZGVbXSxcclxuICBzb3VyY2VMYW5ndWFnZTogTGFuZ3VhZ2VDb2RlID0gXCJlblwiXHJcbikge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcbiAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9O1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGxvZ2dlci5pbmZvKFwiVHJhbnNsYXRlIFRleHQ6IFN0YXJ0aW5nXCIsIHtcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VzLFxyXG4gICAgICBzb3VyY2VMYW5ndWFnZSxcclxuICAgICAgdGV4dExlbmd0aDogdGV4dC5sZW5ndGgsXHJcbiAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRzXHJcbiAgICBpZiAoIXRleHQgfHwgdGV4dC50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm8gdGV4dCBwcm92aWRlZCBmb3IgdHJhbnNsYXRpb25cIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGFyZ2V0TGFuZ3VhZ2VzIHx8IHRhcmdldExhbmd1YWdlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm8gdGFyZ2V0IGxhbmd1YWdlcyBzcGVjaWZpZWRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEltcG9ydCB0cmFuc2xhdGlvbiBzZXJ2aWNlXHJcbiAgICBjb25zdCB7IHRyYW5zbGF0ZVRleHQgfSA9IGF3YWl0IGltcG9ydChcIkAvbGliL3NlcnZpY2VzL2dvb2dsZS10cmFuc2xhdGUtc2VydmljZVwiKTtcclxuXHJcbiAgICAvLyBUcmFuc2xhdGUgdG8gZWFjaCB0YXJnZXQgbGFuZ3VhZ2VcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG4gICAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgdGFyZ2V0TGFuZyBvZiB0YXJnZXRMYW5ndWFnZXMpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBTa2lwIGlmIHNvdXJjZSBhbmQgdGFyZ2V0IGFyZSB0aGUgc2FtZVxyXG4gICAgICAgIGlmICh0YXJnZXRMYW5nID09PSBzb3VyY2VMYW5ndWFnZSkge1xyXG4gICAgICAgICAgdHJhbnNsYXRpb25zW3RhcmdldExhbmddID0gdGV4dDtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRoZSB0ZXh0XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZCA9IGF3YWl0IHRyYW5zbGF0ZVRleHQodGV4dCwgdGFyZ2V0TGFuZywgc291cmNlTGFuZ3VhZ2UpO1xyXG4gICAgICAgIHRyYW5zbGF0aW9uc1t0YXJnZXRMYW5nXSA9IHRyYW5zbGF0ZWQ7XHJcblxyXG4gICAgICAgIGxvZ2dlci5pbmZvKFwiVHJhbnNsYXRlIFRleHQ6IExhbmd1YWdlIGNvbXBsZXRlZFwiLCB7XHJcbiAgICAgICAgICB0YXJnZXRMYW5nLFxyXG4gICAgICAgICAgdGV4dExlbmd0aDogdHJhbnNsYXRlZC5sZW5ndGgsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBgRmFpbGVkIHRvIHRyYW5zbGF0ZSB0byAke3RhcmdldExhbmd9YDtcclxuICAgICAgICBsb2dnZXIuZXJyb3IoXCJUcmFuc2xhdGUgVGV4dDogTGFuZ3VhZ2UgZmFpbGVkXCIsIHtcclxuICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlcnJvcnMucHVzaChlcnJvck1zZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXModHJhbnNsYXRpb25zKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBlcnJvcjogXCJGYWlsZWQgdG8gdHJhbnNsYXRlIHRvIGFueSBsYW5ndWFnZVwiLFxyXG4gICAgICAgIGRldGFpbHM6IGVycm9ycy5qb2luKFwiLCBcIiksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJUcmFuc2xhdGUgVGV4dDogQ29tcGxldGVkXCIsIHtcclxuICAgICAgc3VjY2Vzc0NvdW50OiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvbnMpLmxlbmd0aCxcclxuICAgICAgZXJyb3JDb3VudDogZXJyb3JzLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIHRyYW5zbGF0aW9ucyxcclxuICAgICAgZXJyb3JzOiBlcnJvcnMubGVuZ3RoID4gMCA/IGVycm9ycyA6IHVuZGVmaW5lZCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGxvZ2dlci5lcnJvcihcIlRyYW5zbGF0ZSBUZXh0OiBGYWlsZWRcIiwge1xyXG4gICAgICBlcnJvcixcclxuICAgICAgc291cmNlTGFuZ3VhZ2UsXHJcbiAgICAgIHRhcmdldExhbmd1YWdlcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOiBcIkZhaWxlZCB0byB0cmFuc2xhdGUgdGV4dFwiLFxyXG4gICAgICBkZXRhaWxzOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBdXRvLXRyYW5zbGF0ZSBCdXNpbmVzcyBQcm9jZXNzIHRvIG11bHRpcGxlIGxhbmd1YWdlc1xyXG4gKiBcclxuICogQHBhcmFtIGJ1c2luZXNzUHJvY2Vzc0lkIC0gSUQgb2YgdGhlIGJ1c2luZXNzIHByb2Nlc3MgdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB0YXJnZXRMYW5ndWFnZXMgLSBBcnJheSBvZiBsYW5ndWFnZSBjb2RlcyB0byB0cmFuc2xhdGUgdG9cclxuICogQHBhcmFtIHNvdXJjZUxhbmd1YWdlIC0gU291cmNlIGxhbmd1YWdlIChkZWZhdWx0cyB0byAnZW4nKVxyXG4gKiBAcGFyYW0gZW5nbGlzaERhdGEgLSBPcHRpb25hbCBFbmdsaXNoIGRhdGEgZnJvbSBjb250ZXh0IChmb3IgbmV3bHkgYWRkZWQvZWRpdGVkIGZpZWxkcylcclxuICogQHJldHVybnMgU3VjY2VzcyB3aXRoIHRyYW5zbGF0aW9ucyBvciBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dG9UcmFuc2xhdGVCdXNpbmVzc1Byb2Nlc3MoXHJcbiAgYnVzaW5lc3NQcm9jZXNzSWQ6IG51bWJlcixcclxuICB0YXJnZXRMYW5ndWFnZXM6IExhbmd1YWdlQ29kZVtdLFxyXG4gIHNvdXJjZUxhbmd1YWdlOiBMYW5ndWFnZUNvZGUgPSBcImVuXCIsXHJcbiAgZW5nbGlzaERhdGE/OiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBncmFudERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICByZXZva2VEZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgICByZWNvbnNlbnREZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgfVxyXG4pIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gIGlmICghc2Vzc2lvbj8udXNlcikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBsb2dnZXIuaW5mbyhcIkF1dG8tdHJhbnNsYXRlIEJ1c2luZXNzIFByb2Nlc3M6IFN0YXJ0aW5nXCIsIHtcclxuICAgICAgYnVzaW5lc3NQcm9jZXNzSWQsXHJcbiAgICAgIHRhcmdldExhbmd1YWdlcyxcclxuICAgICAgc291cmNlTGFuZ3VhZ2UsXHJcbiAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICBoYXNFbmdsaXNoRGF0YTogISFlbmdsaXNoRGF0YSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdGFyZ2V0TGFuZ3VhZ2VzIHx8IHRhcmdldExhbmd1YWdlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiTm8gdGFyZ2V0IGxhbmd1YWdlcyBzcGVjaWZpZWRcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1c2luZXNzUHJvY2VzcyA9IGF3YWl0IHByaXNtYS5idXNpbmVzc1Byb2Nlc3MuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBidXNpbmVzc1Byb2Nlc3NJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgIGdyYW50RGVzY3JpcHRpb246IHRydWUsXHJcbiAgICAgICAgcmV2b2tlRGVzY3JpcHRpb246IHRydWUsXHJcbiAgICAgICAgcmVjb25zZW50RGVzY3JpcHRpb246IHRydWUsXHJcbiAgICAgICAgdHJhbnNsYXRpb25zOiB0cnVlLFxyXG4gICAgICAgIHN1cHBvcnRlZExhbmd1YWdlczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghYnVzaW5lc3NQcm9jZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBcIkJ1c2luZXNzIHByb2Nlc3Mgbm90IGZvdW5kXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb25zID0gKGJ1c2luZXNzUHJvY2Vzcy50cmFuc2xhdGlvbnMgYXMgYW55KSB8fCB7fTtcclxuXHJcbiAgICAvLyBVc2UgcHJvdmlkZWQgZW5nbGlzaERhdGEgaWYgYXZhaWxhYmxlIChmb3IgbmV3bHkgYWRkZWQvZWRpdGVkIGZpZWxkcyksIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gREJcclxuICAgIGNvbnN0IHNvdXJjZVRyYW5zbGF0aW9uID0gZW5nbGlzaERhdGEgfHwgY3VycmVudFRyYW5zbGF0aW9uc1tzb3VyY2VMYW5ndWFnZV0gfHwge1xyXG4gICAgICBuYW1lOiBidXNpbmVzc1Byb2Nlc3MubmFtZSxcclxuICAgICAgZ3JhbnREZXNjcmlwdGlvbjogYnVzaW5lc3NQcm9jZXNzLmdyYW50RGVzY3JpcHRpb24sXHJcbiAgICAgIHJldm9rZURlc2NyaXB0aW9uOiBidXNpbmVzc1Byb2Nlc3MucmV2b2tlRGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgICAgcmVjb25zZW50RGVzY3JpcHRpb246IGJ1c2luZXNzUHJvY2Vzcy5yZWNvbnNlbnREZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIXNvdXJjZVRyYW5zbGF0aW9uLm5hbWUgfHwgc291cmNlVHJhbnNsYXRpb24ubmFtZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IGBTb3VyY2UgdHJhbnNsYXRpb24gKCR7c291cmNlTGFuZ3VhZ2V9KSBoYXMgbm8gbmFtZWAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmFuc2xhdGlvblJlc3VsdHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcclxuICAgIGNvbnN0IGVycm9yczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHRhcmdldExhbmcgb2YgdGFyZ2V0TGFuZ3VhZ2VzKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHRhcmdldExhbmcgPT09IHNvdXJjZUxhbmd1YWdlKSB7XHJcbiAgICAgICAgICB0cmFuc2xhdGlvblJlc3VsdHNbdGFyZ2V0TGFuZ10gPSBzb3VyY2VUcmFuc2xhdGlvbjtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZCA9IGF3YWl0IHRyYW5zbGF0ZU9iamVjdChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogc291cmNlVHJhbnNsYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgZ3JhbnREZXNjcmlwdGlvbjogc291cmNlVHJhbnNsYXRpb24uZ3JhbnREZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgICAgICAgICByZXZva2VEZXNjcmlwdGlvbjogc291cmNlVHJhbnNsYXRpb24ucmV2b2tlRGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgICAgICAgICAgcmVjb25zZW50RGVzY3JpcHRpb246IHNvdXJjZVRyYW5zbGF0aW9uLnJlY29uc2VudERlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICAgIHNvdXJjZUxhbmd1YWdlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdHJhbnNsYXRpb25SZXN1bHRzW3RhcmdldExhbmddID0gdHJhbnNsYXRlZDtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBlcnJvck1zZyA9IGBGYWlsZWQgdG8gdHJhbnNsYXRlIHRvICR7dGFyZ2V0TGFuZ31gO1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihcIkF1dG8tdHJhbnNsYXRlIEJ1c2luZXNzIFByb2Nlc3M6IExhbmd1YWdlIGZhaWxlZFwiLCB7XHJcbiAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgIHRhcmdldExhbmcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyb3JNc2cpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uUmVzdWx0cykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIHRyYW5zbGF0ZSB0byBhbnkgbGFuZ3VhZ2VcIixcclxuICAgICAgICBkZXRhaWxzOiBlcnJvcnMuam9pbihcIiwgXCIpLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1lcmdlIHdpdGggZXhpc3RpbmcgdHJhbnNsYXRpb25zXHJcbiAgICBjb25zdCB1cGRhdGVkVHJhbnNsYXRpb25zID0geyAuLi5jdXJyZW50VHJhbnNsYXRpb25zLCAuLi50cmFuc2xhdGlvblJlc3VsdHMgfTtcclxuXHJcbiAgICAvLyBVcGRhdGUgc3VwcG9ydGVkIGxhbmd1YWdlc1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gYnVzaW5lc3NQcm9jZXNzLnN1cHBvcnRlZExhbmd1YWdlcyB8fCBbXCJlblwiXTtcclxuICAgIHRhcmdldExhbmd1YWdlcy5mb3JFYWNoKChsYW5nKSA9PiB7XHJcbiAgICAgIGlmICghc3VwcG9ydGVkTGFuZ3VhZ2VzLmluY2x1ZGVzKGxhbmcpKSB7XHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLnB1c2gobGFuZyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHByaXNtYS5idXNpbmVzc1Byb2Nlc3MudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IGJ1c2luZXNzUHJvY2Vzc0lkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IHVwZGF0ZWRUcmFuc2xhdGlvbnMsXHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBCdXNpbmVzcyBQcm9jZXNzOiBDb21wbGV0ZWRcIiwge1xyXG4gICAgICBidXNpbmVzc1Byb2Nlc3NJZCxcclxuICAgICAgc3VjY2Vzc0NvdW50OiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLmxlbmd0aCxcclxuICAgICAgZXJyb3JDb3VudDogZXJyb3JzLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS9idXNpbmVzcy1wcm9jZXNzZXNcIik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgdHJhbnNsYXRpb25zOiB1cGRhdGVkVHJhbnNsYXRpb25zLFxyXG4gICAgICB0cmFuc2xhdGVkQ291bnQ6IE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uUmVzdWx0cykubGVuZ3RoLFxyXG4gICAgICBlcnJvcnM6IGVycm9ycy5sZW5ndGggPiAwID8gZXJyb3JzIDogdW5kZWZpbmVkLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbG9nZ2VyLmVycm9yKFwiQXV0by10cmFuc2xhdGUgQnVzaW5lc3MgUHJvY2VzczogRmFpbGVkXCIsIHtcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGJ1c2luZXNzUHJvY2Vzc0lkLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogXCJGYWlsZWQgdG8gYXV0by10cmFuc2xhdGUgYnVzaW5lc3MgcHJvY2Vzc1wiLFxyXG4gICAgICBkZXRhaWxzOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2UgdG8gbXVsdGlwbGUgbGFuZ3VhZ2VzXHJcbiAqIFxyXG4gKiBAcGFyYW0gY29uc2VudFB1cnBvc2VJZCAtIElEIG9mIHRoZSBjb25zZW50IHB1cnBvc2UgdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB0YXJnZXRMYW5ndWFnZXMgLSBBcnJheSBvZiBsYW5ndWFnZSBjb2RlcyB0byB0cmFuc2xhdGUgdG9cclxuICogQHBhcmFtIHNvdXJjZUxhbmd1YWdlIC0gU291cmNlIGxhbmd1YWdlIChkZWZhdWx0cyB0byAnZW4nKVxyXG4gKiBAcGFyYW0gZW5nbGlzaERhdGEgLSBPcHRpb25hbCBFbmdsaXNoIGRhdGEgZnJvbSBjb250ZXh0IChmb3IgbmV3bHkgYWRkZWQvZWRpdGVkIGZpZWxkcylcclxuICogQHJldHVybnMgU3VjY2VzcyB3aXRoIHRyYW5zbGF0aW9ucyBvciBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dG9UcmFuc2xhdGVDb25zZW50UHVycG9zZShcclxuICBjb25zZW50UHVycG9zZUlkOiBudW1iZXIsXHJcbiAgdGFyZ2V0TGFuZ3VhZ2VzOiBMYW5ndWFnZUNvZGVbXSxcclxuICBzb3VyY2VMYW5ndWFnZTogTGFuZ3VhZ2VDb2RlID0gXCJlblwiLFxyXG4gIGVuZ2xpc2hEYXRhPzoge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBudWxsO1xyXG4gIH1cclxuKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcclxuICBpZiAoIXNlc3Npb24/LnVzZXIpIHtcclxuICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2U6IFN0YXJ0aW5nXCIsIHtcclxuICAgICAgY29uc2VudFB1cnBvc2VJZCxcclxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VzLFxyXG4gICAgICBzb3VyY2VMYW5ndWFnZSxcclxuICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgIGhhc0VuZ2xpc2hEYXRhOiAhIWVuZ2xpc2hEYXRhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF0YXJnZXRMYW5ndWFnZXMgfHwgdGFyZ2V0TGFuZ3VhZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJObyB0YXJnZXQgbGFuZ3VhZ2VzIHNwZWNpZmllZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29uc2VudFB1cnBvc2UgPSBhd2FpdCBwcmlzbWEuY29uc2VudFB1cnBvc2UuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBjb25zZW50UHVycG9zZUlkIH0sXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIGlkOiB0cnVlLFxyXG4gICAgICAgIG5hbWU6IHRydWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHRydWUsXHJcbiAgICAgICAgdHJhbnNsYXRpb25zOiB0cnVlLFxyXG4gICAgICAgIHN1cHBvcnRlZExhbmd1YWdlczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghY29uc2VudFB1cnBvc2UpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiQ29uc2VudCBwdXJwb3NlIG5vdCBmb3VuZFwiIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudFRyYW5zbGF0aW9ucyA9IChjb25zZW50UHVycG9zZS50cmFuc2xhdGlvbnMgYXMgYW55KSB8fCB7fTtcclxuXHJcbiAgICAvLyBVc2UgcHJvdmlkZWQgZW5nbGlzaERhdGEgaWYgYXZhaWxhYmxlIChmb3IgbmV3bHkgYWRkZWQvZWRpdGVkIGZpZWxkcyksIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gREJcclxuICAgIGNvbnN0IHNvdXJjZVRyYW5zbGF0aW9uID0gZW5nbGlzaERhdGEgfHwgY3VycmVudFRyYW5zbGF0aW9uc1tzb3VyY2VMYW5ndWFnZV0gfHwge1xyXG4gICAgICBuYW1lOiBjb25zZW50UHVycG9zZS5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogY29uc2VudFB1cnBvc2UuZGVzY3JpcHRpb24gfHwgbnVsbCxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFzb3VyY2VUcmFuc2xhdGlvbi5uYW1lIHx8IHNvdXJjZVRyYW5zbGF0aW9uLm5hbWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBgU291cmNlIHRyYW5zbGF0aW9uICgke3NvdXJjZUxhbmd1YWdlfSkgaGFzIG5vIG5hbWVgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHJhbnNsYXRpb25SZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XHJcbiAgICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCB0YXJnZXRMYW5nIG9mIHRhcmdldExhbmd1YWdlcykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICh0YXJnZXRMYW5nID09PSBzb3VyY2VMYW5ndWFnZSkge1xyXG4gICAgICAgICAgdHJhbnNsYXRpb25SZXN1bHRzW3RhcmdldExhbmddID0gc291cmNlVHJhbnNsYXRpb247XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWQgPSBhd2FpdCB0cmFuc2xhdGVPYmplY3QoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IHNvdXJjZVRyYW5zbGF0aW9uLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzb3VyY2VUcmFuc2xhdGlvbi5kZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRhcmdldExhbmcsXHJcbiAgICAgICAgICBzb3VyY2VMYW5ndWFnZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRyYW5zbGF0aW9uUmVzdWx0c1t0YXJnZXRMYW5nXSA9IHRyYW5zbGF0ZWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBgRmFpbGVkIHRvIHRyYW5zbGF0ZSB0byAke3RhcmdldExhbmd9YDtcclxuICAgICAgICBsb2dnZXIuZXJyb3IoXCJBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2U6IExhbmd1YWdlIGZhaWxlZFwiLCB7XHJcbiAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgIHRhcmdldExhbmcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyb3JNc2cpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uUmVzdWx0cykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIHRyYW5zbGF0ZSB0byBhbnkgbGFuZ3VhZ2VcIixcclxuICAgICAgICBkZXRhaWxzOiBlcnJvcnMuam9pbihcIiwgXCIpLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1lcmdlIHdpdGggZXhpc3RpbmcgdHJhbnNsYXRpb25zXHJcbiAgICBjb25zdCB1cGRhdGVkVHJhbnNsYXRpb25zID0geyAuLi5jdXJyZW50VHJhbnNsYXRpb25zLCAuLi50cmFuc2xhdGlvblJlc3VsdHMgfTtcclxuXHJcbiAgICAvLyBVcGRhdGUgc3VwcG9ydGVkIGxhbmd1YWdlc1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkTGFuZ3VhZ2VzID0gY29uc2VudFB1cnBvc2Uuc3VwcG9ydGVkTGFuZ3VhZ2VzIHx8IFtcImVuXCJdO1xyXG4gICAgdGFyZ2V0TGFuZ3VhZ2VzLmZvckVhY2goKGxhbmcpID0+IHtcclxuICAgICAgaWYgKCFzdXBwb3J0ZWRMYW5ndWFnZXMuaW5jbHVkZXMobGFuZykpIHtcclxuICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXMucHVzaChsYW5nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgcHJpc21hLmNvbnNlbnRQdXJwb3NlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBjb25zZW50UHVycG9zZUlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IHVwZGF0ZWRUcmFuc2xhdGlvbnMsXHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nZ2VyLmluZm8oXCJBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2U6IENvbXBsZXRlZFwiLCB7XHJcbiAgICAgIGNvbnNlbnRQdXJwb3NlSWQsXHJcbiAgICAgIHN1Y2Nlc3NDb3VudDogT2JqZWN0LmtleXModHJhbnNsYXRpb25SZXN1bHRzKS5sZW5ndGgsXHJcbiAgICAgIGVycm9yQ291bnQ6IGVycm9ycy5sZW5ndGgsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9jbXMvZGF0YS1maWR1Y2lhcnkvY29uc2VudC1wdXJwb3Nlc1wiKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICB0cmFuc2xhdGlvbnM6IHVwZGF0ZWRUcmFuc2xhdGlvbnMsXHJcbiAgICAgIHRyYW5zbGF0ZWRDb3VudDogT2JqZWN0LmtleXModHJhbnNsYXRpb25SZXN1bHRzKS5sZW5ndGgsXHJcbiAgICAgIGVycm9yczogZXJyb3JzLmxlbmd0aCA+IDAgPyBlcnJvcnMgOiB1bmRlZmluZWQsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2dnZXIuZXJyb3IoXCJBdXRvLXRyYW5zbGF0ZSBDb25zZW50IFB1cnBvc2U6IEZhaWxlZFwiLCB7XHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBjb25zZW50UHVycG9zZUlkLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogXCJGYWlsZWQgdG8gYXV0by10cmFuc2xhdGUgY29uc2VudCBwdXJwb3NlXCIsXHJcbiAgICAgIGRldGFpbHM6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCIsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZSB0byBtdWx0aXBsZSBsYW5ndWFnZXNcclxuICogXHJcbiAqIEBwYXJhbSBwcm9jZXNzaW5nUHVycG9zZUlkIC0gSUQgb2YgdGhlIHByb2Nlc3NpbmcgcHVycG9zZSB0byB0cmFuc2xhdGVcclxuICogQHBhcmFtIHRhcmdldExhbmd1YWdlcyAtIEFycmF5IG9mIGxhbmd1YWdlIGNvZGVzIHRvIHRyYW5zbGF0ZSB0b1xyXG4gKiBAcGFyYW0gc291cmNlTGFuZ3VhZ2UgLSBTb3VyY2UgbGFuZ3VhZ2UgKGRlZmF1bHRzIHRvICdlbicpXHJcbiAqIEBwYXJhbSBlbmdsaXNoRGF0YSAtIE9wdGlvbmFsIEVuZ2xpc2ggZGF0YSBmcm9tIGNvbnRleHQgKGZvciBuZXdseSBhZGRlZC9lZGl0ZWQgZmllbGRzKVxyXG4gKiBAcmV0dXJucyBTdWNjZXNzIHdpdGggdHJhbnNsYXRpb25zIG9yIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0b1RyYW5zbGF0ZVByb2Nlc3NpbmdQdXJwb3NlKFxyXG4gIHByb2Nlc3NpbmdQdXJwb3NlSWQ6IG51bWJlcixcclxuICB0YXJnZXRMYW5ndWFnZXM6IExhbmd1YWdlQ29kZVtdLFxyXG4gIHNvdXJjZUxhbmd1YWdlOiBMYW5ndWFnZUNvZGUgPSBcImVuXCIsXHJcbiAgZW5nbGlzaERhdGE/OiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgfVxyXG4pIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG4gIGlmICghc2Vzc2lvbj8udXNlcikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBsb2dnZXIuaW5mbyhcIkF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZTogU3RhcnRpbmdcIiwge1xyXG4gICAgICBwcm9jZXNzaW5nUHVycG9zZUlkLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZXMsXHJcbiAgICAgIHNvdXJjZUxhbmd1YWdlLFxyXG4gICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcclxuICAgICAgaGFzRW5nbGlzaERhdGE6ICEhZW5nbGlzaERhdGEsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRhcmdldExhbmd1YWdlcyB8fCB0YXJnZXRMYW5ndWFnZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBcIk5vIHRhcmdldCBsYW5ndWFnZXMgc3BlY2lmaWVkXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9jZXNzaW5nUHVycG9zZSA9IGF3YWl0IHByaXNtYS5wcm9jZXNzaW5nUHVycG9zZS5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHByb2Nlc3NpbmdQdXJwb3NlSWQgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdHJ1ZSxcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IHRydWUsXHJcbiAgICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFwcm9jZXNzaW5nUHVycG9zZSkge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJQcm9jZXNzaW5nIHB1cnBvc2Ugbm90IGZvdW5kXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRpb25zID0gKHByb2Nlc3NpbmdQdXJwb3NlLnRyYW5zbGF0aW9ucyBhcyBhbnkpIHx8IHt9O1xyXG5cclxuICAgIC8vIFVzZSBwcm92aWRlZCBlbmdsaXNoRGF0YSBpZiBhdmFpbGFibGUgKGZvciBuZXdseSBhZGRlZC9lZGl0ZWQgZmllbGRzKSwgb3RoZXJ3aXNlIGZhbGwgYmFjayB0byBEQlxyXG4gICAgY29uc3Qgc291cmNlVHJhbnNsYXRpb24gPSBlbmdsaXNoRGF0YSB8fCBjdXJyZW50VHJhbnNsYXRpb25zW3NvdXJjZUxhbmd1YWdlXSB8fCB7XHJcbiAgICAgIG5hbWU6IHByb2Nlc3NpbmdQdXJwb3NlLm5hbWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBwcm9jZXNzaW5nUHVycG9zZS5kZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIXNvdXJjZVRyYW5zbGF0aW9uLm5hbWUgfHwgc291cmNlVHJhbnNsYXRpb24ubmFtZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IGBTb3VyY2UgdHJhbnNsYXRpb24gKCR7c291cmNlTGFuZ3VhZ2V9KSBoYXMgbm8gbmFtZWAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmFuc2xhdGlvblJlc3VsdHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcclxuICAgIGNvbnN0IGVycm9yczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHRhcmdldExhbmcgb2YgdGFyZ2V0TGFuZ3VhZ2VzKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHRhcmdldExhbmcgPT09IHNvdXJjZUxhbmd1YWdlKSB7XHJcbiAgICAgICAgICB0cmFuc2xhdGlvblJlc3VsdHNbdGFyZ2V0TGFuZ10gPSBzb3VyY2VUcmFuc2xhdGlvbjtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZCA9IGF3YWl0IHRyYW5zbGF0ZU9iamVjdChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogc291cmNlVHJhbnNsYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHNvdXJjZVRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICAgIHNvdXJjZUxhbmd1YWdlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdHJhbnNsYXRpb25SZXN1bHRzW3RhcmdldExhbmddID0gdHJhbnNsYXRlZDtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBlcnJvck1zZyA9IGBGYWlsZWQgdG8gdHJhbnNsYXRlIHRvICR7dGFyZ2V0TGFuZ31gO1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihcIkF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZTogTGFuZ3VhZ2UgZmFpbGVkXCIsIHtcclxuICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgdGFyZ2V0TGFuZyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlcnJvcnMucHVzaChlcnJvck1zZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXModHJhbnNsYXRpb25SZXN1bHRzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBlcnJvcjogXCJGYWlsZWQgdG8gdHJhbnNsYXRlIHRvIGFueSBsYW5ndWFnZVwiLFxyXG4gICAgICAgIGRldGFpbHM6IGVycm9ycy5qb2luKFwiLCBcIiksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWVyZ2Ugd2l0aCBleGlzdGluZyB0cmFuc2xhdGlvbnNcclxuICAgIGNvbnN0IHVwZGF0ZWRUcmFuc2xhdGlvbnMgPSB7IC4uLmN1cnJlbnRUcmFuc2xhdGlvbnMsIC4uLnRyYW5zbGF0aW9uUmVzdWx0cyB9O1xyXG5cclxuICAgIC8vIFVwZGF0ZSBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXHJcbiAgICBjb25zdCBzdXBwb3J0ZWRMYW5ndWFnZXMgPSBwcm9jZXNzaW5nUHVycG9zZS5zdXBwb3J0ZWRMYW5ndWFnZXMgfHwgW1wiZW5cIl07XHJcbiAgICB0YXJnZXRMYW5ndWFnZXMuZm9yRWFjaCgobGFuZykgPT4ge1xyXG4gICAgICBpZiAoIXN1cHBvcnRlZExhbmd1YWdlcy5pbmNsdWRlcyhsYW5nKSkge1xyXG4gICAgICAgIHN1cHBvcnRlZExhbmd1YWdlcy5wdXNoKGxhbmcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBwcmlzbWEucHJvY2Vzc2luZ1B1cnBvc2UudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHByb2Nlc3NpbmdQdXJwb3NlSWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRyYW5zbGF0aW9uczogdXBkYXRlZFRyYW5zbGF0aW9ucyxcclxuICAgICAgICBzdXBwb3J0ZWRMYW5ndWFnZXMsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2dnZXIuaW5mbyhcIkF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZTogQ29tcGxldGVkXCIsIHtcclxuICAgICAgcHJvY2Vzc2luZ1B1cnBvc2VJZCxcclxuICAgICAgc3VjY2Vzc0NvdW50OiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLmxlbmd0aCxcclxuICAgICAgZXJyb3JDb3VudDogZXJyb3JzLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS9jb25zZW50LXB1cnBvc2VzXCIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIHRyYW5zbGF0aW9uczogdXBkYXRlZFRyYW5zbGF0aW9ucyxcclxuICAgICAgdHJhbnNsYXRlZENvdW50OiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvblJlc3VsdHMpLmxlbmd0aCxcclxuICAgICAgZXJyb3JzOiBlcnJvcnMubGVuZ3RoID4gMCA/IGVycm9ycyA6IHVuZGVmaW5lZCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGxvZ2dlci5lcnJvcihcIkF1dG8tdHJhbnNsYXRlIFByb2Nlc3NpbmcgUHVycG9zZTogRmFpbGVkXCIsIHtcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIHByb2Nlc3NpbmdQdXJwb3NlSWQsXHJcbiAgICAgIHRhcmdldExhbmd1YWdlcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOiBcIkZhaWxlZCB0byBhdXRvLXRyYW5zbGF0ZSBwcm9jZXNzaW5nIHB1cnBvc2VcIixcclxuICAgICAgZGV0YWlsczogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlVua25vd24gZXJyb3JcIixcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiK1NBNlhzQiJ9
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
"[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/types/languages.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/languages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/business-process-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$translations$2f$auto$2d$translate$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/translations/auto-translate-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$64db6c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:64db6c [app-ssr] (ecmascript) <text/javascript>");
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
function Step4Form({ data, isEdit, businessProcessId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusinessProcessContext"])();
    // Get first non-English language (Assamese)
    const firstLanguage = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"]).find((code)=>code !== "en") || "as";
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(firstLanguage);
    // Business Process translations
    const [bpTranslations, setBpTranslations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Track if this is the first render to avoid false positive change detection
    const isFirstRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const prevEnglishDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize translations from existing data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // First check if we have translations in context (user navigated back from Step 5)
        if (state.step4Data?.translations && Object.keys(state.step4Data.translations).length > 0) {
            const contextTranslations = state.step4Data.translations;
            const bpTrans = {};
            Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"]).forEach(([langCode])=>{
                if (langCode !== "en" && contextTranslations[langCode]) {
                    bpTrans[langCode] = {
                        name: contextTranslations[langCode].name || "",
                        grantDescription: contextTranslations[langCode].grantDescription || "",
                        revokeDescription: contextTranslations[langCode].revokeDescription || "",
                        reconsentDescription: contextTranslations[langCode].reconsentDescription || ""
                    };
                }
            });
            setBpTranslations(bpTrans);
        } else if (data.businessProcess) {
            const bpTrans = {};
            Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"]).forEach(([langCode])=>{
                if (langCode !== "en") {
                    const trans = data.businessProcess.translations?.[langCode];
                    bpTrans[langCode] = {
                        name: trans?.name || "",
                        grantDescription: trans?.grantDescription || "",
                        revokeDescription: trans?.revokeDescription || "",
                        reconsentDescription: trans?.reconsentDescription || ""
                    };
                }
            });
            setBpTranslations(bpTrans);
        }
    }, [
        data,
        state.step4Data
    ]);
    // Clear translations when English source data changes (skip first render)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const currentEnglishData = state.step1Data || data.businessProcess;
        if (!currentEnglishData) return;
        // Skip comparison on first render, just store the initial data
        if (isFirstRender.current) {
            prevEnglishDataRef.current = {
                name: currentEnglishData.name,
                grantDescription: currentEnglishData.grantDescription,
                revokeDescription: currentEnglishData.revokeDescription,
                reconsentDescription: currentEnglishData.reconsentDescription
            };
            isFirstRender.current = false;
            return;
        }
        // Now compare with previous data
        if (prevEnglishDataRef.current) {
            const nameChanged = currentEnglishData.name !== prevEnglishDataRef.current.name;
            const grantChanged = currentEnglishData.grantDescription !== prevEnglishDataRef.current.grantDescription;
            const revokeChanged = (currentEnglishData.revokeDescription || '') !== (prevEnglishDataRef.current.revokeDescription || '');
            const reconsentChanged = (currentEnglishData.reconsentDescription || '') !== (prevEnglishDataRef.current.reconsentDescription || '');
            if (nameChanged || grantChanged || revokeChanged || reconsentChanged) {
                // Clear all translations when source changes
                setBpTranslations({});
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("Source text changed. Please re-translate to update translations.");
            }
        }
        // Update stored data
        prevEnglishDataRef.current = {
            name: currentEnglishData.name,
            grantDescription: currentEnglishData.grantDescription,
            revokeDescription: currentEnglishData.revokeDescription,
            reconsentDescription: currentEnglishData.reconsentDescription
        };
    }, [
        state.step1Data?.name,
        state.step1Data?.grantDescription,
        state.step1Data?.revokeDescription,
        state.step1Data?.reconsentDescription
    ]);
    const handleTranslationChange = (lang, field, value)=>{
        setBpTranslations((prev)=>({
                ...prev,
                [lang]: {
                    ...prev[lang],
                    [field]: value
                }
            }));
    };
    // Get all languages except English for auto-translate
    const getTargetLanguages = ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGE_CODES"].filter((lang)=>lang !== 'en');
    };
    // Get languages that already have translations
    const getExistingLanguages = ()=>{
        return Object.keys(bpTranslations).filter((lang)=>{
            const trans = bpTranslations[lang];
            return trans.name || trans.grantDescription || trans.revokeDescription || trans.reconsentDescription;
        });
    };
    // Handle auto-translate
    const handleAutoTranslate = async (targetLanguages, sourceLanguage)=>{
        // Get English data from context (step1Data) or fallback to businessProcess
        const englishData = state.step1Data || data.businessProcess;
        if (!englishData || !englishData.name || !englishData.grantDescription) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please complete Step 1 with process name and grant description first");
            return {
                error: "Process data is required"
            };
        }
        // CREATE MODE: Use translateTextToLanguages for each field
        if (!isEdit) {
            try {
                // Translate name
                const nameResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$463d83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["translateTextToLanguages"])(englishData.name, targetLanguages, sourceLanguage);
                // Translate grantDescription
                const grantResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$463d83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["translateTextToLanguages"])(englishData.grantDescription, targetLanguages, sourceLanguage);
                // Translate revokeDescription if exists
                let revokeTranslations = {};
                if (englishData.revokeDescription?.trim()) {
                    const revokeResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$463d83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["translateTextToLanguages"])(englishData.revokeDescription, targetLanguages, sourceLanguage);
                    if (revokeResult.success && revokeResult.translations) {
                        revokeTranslations = revokeResult.translations;
                    }
                }
                // Translate reconsentDescription if exists
                let reconsentTranslations = {};
                if (englishData.reconsentDescription?.trim()) {
                    const reconsentResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$463d83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["translateTextToLanguages"])(englishData.reconsentDescription, targetLanguages, sourceLanguage);
                    if (reconsentResult.success && reconsentResult.translations) {
                        reconsentTranslations = reconsentResult.translations;
                    }
                }
                if (nameResult.success && grantResult.success && nameResult.translations && grantResult.translations) {
                    // Update local translations state
                    const newTranslations = {};
                    targetLanguages.forEach((lang)=>{
                        newTranslations[lang] = {
                            name: nameResult.translations[lang] || "",
                            grantDescription: grantResult.translations[lang] || "",
                            revokeDescription: revokeTranslations[lang] || "",
                            reconsentDescription: reconsentTranslations[lang] || ""
                        };
                    });
                    setBpTranslations((prev)=>({
                            ...prev,
                            ...newTranslations
                        }));
                    const successCount = targetLanguages.length;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Successfully translated to ${successCount} language${successCount > 1 ? 's' : ''}`);
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
        // EDIT MODE: Translate using latest context data, then update DB
        if (!businessProcessId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Process ID not found");
            return {
                error: "Process ID not found"
            };
        }
        try {
            // Use same approach as create mode - translate from context data
            // Translate name
            const nameResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$463d83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["translateTextToLanguages"])(englishData.name, targetLanguages, sourceLanguage);
            // Translate grantDescription
            const grantResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$463d83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["translateTextToLanguages"])(englishData.grantDescription, targetLanguages, sourceLanguage);
            // Translate revokeDescription if exists
            let revokeTranslations = {};
            if (englishData.revokeDescription?.trim()) {
                const revokeResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$463d83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["translateTextToLanguages"])(englishData.revokeDescription, targetLanguages, sourceLanguage);
                if (revokeResult.success && revokeResult.translations) {
                    revokeTranslations = revokeResult.translations;
                }
            }
            // Translate reconsentDescription if exists
            let reconsentTranslations = {};
            if (englishData.reconsentDescription?.trim()) {
                const reconsentResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$463d83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["translateTextToLanguages"])(englishData.reconsentDescription, targetLanguages, sourceLanguage);
                if (reconsentResult.success && reconsentResult.translations) {
                    reconsentTranslations = reconsentResult.translations;
                }
            }
            if (nameResult.success && grantResult.success && nameResult.translations && grantResult.translations) {
                // Update local translations state
                const newTranslations = {};
                targetLanguages.forEach((lang)=>{
                    newTranslations[lang] = {
                        name: nameResult.translations[lang] || "",
                        grantDescription: grantResult.translations[lang] || "",
                        revokeDescription: revokeTranslations[lang] || "",
                        reconsentDescription: reconsentTranslations[lang] || ""
                    };
                });
                setBpTranslations((prev)=>({
                        ...prev,
                        ...newTranslations
                    }));
                // Update DB with new translations, passing the fresh context data
                const id = parseInt(businessProcessId);
                const updateResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$64db6c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["autoTranslateBusinessProcess"])(id, targetLanguages, sourceLanguage, {
                    name: englishData.name,
                    grantDescription: englishData.grantDescription,
                    revokeDescription: englishData.revokeDescription || null,
                    reconsentDescription: englishData.reconsentDescription || null
                });
                const successCount = targetLanguages.length;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Successfully translated to ${successCount} language${successCount > 1 ? 's' : ''}`);
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
    };
    const handleSaveTranslations = ()=>{
        // Save translations to context only (no DB operations)
        const translationsForContext = {};
        // Get English translation from context (step1Data) or fallback to businessProcess
        const englishData = state.step1Data || data.businessProcess;
        if (!englishData) {
            console.error("No English data found in step1Data or businessProcess!");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Missing process data. Please complete Step 1 first.");
            return;
        }
        // Add English translation from step1Data
        translationsForContext.en = {
            name: englishData.name,
            grantDescription: englishData.grantDescription,
            revokeDescription: englishData.revokeDescription || null,
            reconsentDescription: englishData.reconsentDescription || null
        };
        // Add other language translations
        Object.entries(bpTranslations).forEach(([lang, trans])=>{
            if (lang !== "en" && ((trans.name || "").trim() || (trans.grantDescription || "").trim() || (trans.revokeDescription || "").trim() || (trans.reconsentDescription || "").trim())) {
                translationsForContext[lang] = {
                    name: (trans.name || "").trim() || null,
                    grantDescription: (trans.grantDescription || "").trim() || null,
                    revokeDescription: (trans.revokeDescription || "").trim() || null,
                    reconsentDescription: (trans.reconsentDescription || "").trim() || null
                };
            }
        });
        // Save to context
        dispatch({
            type: "SET_STEP4_DATA",
            payload: {
                translations: translationsForContext
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Translations saved to draft");
    };
    const handleNext = ()=>{
        // Save translations to context only (no DB operations)
        const translationsForContext = {};
        // Get English translation from context (step1Data) or fallback to businessProcess
        const englishData = state.step1Data || data.businessProcess;
        if (!englishData) {
            console.error("No English data found in step1Data or businessProcess!");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Missing process data. Please complete Step 1 first.");
            return;
        }
        // Add English translation from step1Data
        translationsForContext.en = {
            name: englishData.name,
            grantDescription: englishData.grantDescription,
            revokeDescription: englishData.revokeDescription || null,
            reconsentDescription: englishData.reconsentDescription || null
        };
        // Add other language translations
        Object.entries(bpTranslations).forEach(([lang, trans])=>{
            if (lang !== "en" && ((trans.name || "").trim() || (trans.grantDescription || "").trim() || (trans.revokeDescription || "").trim() || (trans.reconsentDescription || "").trim())) {
                translationsForContext[lang] = {
                    name: (trans.name || "").trim() || null,
                    grantDescription: (trans.grantDescription || "").trim() || null,
                    revokeDescription: (trans.revokeDescription || "").trim() || null,
                    reconsentDescription: (trans.reconsentDescription || "").trim() || null
                };
            }
        });
        // Save to context
        dispatch({
            type: "SET_STEP4_DATA",
            payload: {
                translations: translationsForContext
            }
        });
        // Navigate to next step (no DB operations)
        const params = new URLSearchParams();
        params.set("step", "5");
        if (businessProcessId) {
            params.set("id", businessProcessId);
        }
        const basePath = isEdit ? `/cms/data-fiduciary/business-processes/${businessProcessId}/edit` : `/cms/data-fiduciary/business-processes/new`;
        router.push(`${basePath}?${params.toString()}`);
    };
    const handlePrevious = ()=>{
        const params = new URLSearchParams();
        params.set("step", "3");
        if (businessProcessId) {
            params.set("id", businessProcessId);
        }
        const basePath = isEdit ? `/cms/data-fiduciary/business-processes/${businessProcessId}/edit` : `/cms/data-fiduciary/business-processes/new`;
        router.push(`${basePath}?${params.toString()}`);
    };
    const selectedLangInfo = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][selectedLanguage];
    const translatedCount = Object.values(bpTranslations).filter((t)=>(t.name || "").trim() || (t.grantDescription || "").trim() || (t.revokeDescription || "").trim() || (t.reconsentDescription || "").trim()).length;
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
                                        children: "Step 4. Translate"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                        lineNumber: 474,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$translations$2f$auto$2d$translate$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AutoTranslateButton"], {
                                        targetLanguages: getTargetLanguages(),
                                        existingLanguages: getExistingLanguages(),
                                        sourceLanguage: "en",
                                        onTranslate: handleAutoTranslate,
                                        variant: "default",
                                        size: "sm",
                                        showLabel: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                lineNumber: 473,
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
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                lineNumber: 487,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                        lineNumber: 472,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Add translations for the process in 22 Indian languages"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                lineNumber: 471,
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
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                        lineNumber: 502,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"]).filter(([code])=>code !== "en").map(([langCode, lang], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 25
                                                        }, this),
                                                        (bpTranslations[langCode]?.name || bpTranslations[langCode]?.grantDescription || bpTranslations[langCode]?.revokeDescription || bpTranslations[langCode]?.reconsentDescription) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 w-2 rounded-full bg-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                                            lineNumber: 526,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 23
                                                }, this)
                                            }, langCode, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                                lineNumber: 507,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                        lineNumber: 503,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                lineNumber: 501,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                            lineNumber: 500,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-3 p-6 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 rounded-lg border p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold mb-2",
                                                    children: "Process Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: `Enter name in ${selectedLangInfo.name}`,
                                                    value: bpTranslations[selectedLanguage]?.name || "",
                                                    onChange: (e)=>handleTranslationChange(selectedLanguage, "name", e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                            lineNumber: 539,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold mb-2",
                                                    children: "Grant Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                                    lineNumber: 555,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    placeholder: `Enter grant description in ${selectedLangInfo.name}`,
                                                    value: bpTranslations[selectedLanguage]?.grantDescription || "",
                                                    onChange: (e)=>handleTranslationChange(selectedLanguage, "grantDescription", e.target.value),
                                                    rows: 4
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                                    lineNumber: 556,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                            lineNumber: 554,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold mb-2",
                                                    children: "Revoke Description (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                                    lineNumber: 573,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    placeholder: `Enter revoke description in ${selectedLangInfo.name}`,
                                                    value: bpTranslations[selectedLanguage]?.revokeDescription || "",
                                                    onChange: (e)=>handleTranslationChange(selectedLanguage, "revokeDescription", e.target.value),
                                                    rows: 3
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                                    lineNumber: 576,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                            lineNumber: 572,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold mb-2",
                                                    children: "Reconsent Description (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                                    lineNumber: 593,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    placeholder: `Enter reconsent description in ${selectedLangInfo.name}`,
                                                    value: bpTranslations[selectedLanguage]?.reconsentDescription || "",
                                                    onChange: (e)=>handleTranslationChange(selectedLanguage, "reconsentDescription", e.target.value),
                                                    rows: 3
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                                    lineNumber: 596,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                            lineNumber: 592,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                    lineNumber: 538,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: handleSaveTranslations,
                                        className: "w-full",
                                        children: "Save Translations"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                        lineNumber: 615,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                                    lineNumber: 614,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                            lineNumber: 536,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                    lineNumber: 498,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                lineNumber: 497,
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
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                            lineNumber: 631,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            onClick: handleNext,
                            className: "min-w-[100px]",
                            children: "Save and Continue"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                            lineNumber: 634,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                    lineNumber: 630,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
                lineNumber: 629,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step4-form.tsx",
        lineNumber: 469,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/utils/business-process-breaking-changes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 * Business Process Breaking Change Detection
 *
 * Detects breaking changes between baseline and current business process state.
 * Breaking changes require creating a new version instead of updating in-place.
 */ __turbopack_context__.s([
    "detectBreakingChanges",
    ()=>detectBreakingChanges,
    "getBreakingChangeTypeName",
    ()=>getBreakingChangeTypeName,
    "groupBreakingChangesByType",
    ()=>groupBreakingChangesByType
]);
function detectBreakingChanges(baseline, current) {
    if (!baseline) {
        return []; // No baseline means new business process
    }
    const changes = [];
    // ONLY Step 2: Consent Purposes & Business Process Rules Changes (CRITICAL)
    // These are the ONLY breaking changes for Business Process
    const baselineConsentPurposes = baseline.consentPurposes || [];
    const currentConsentPurposes = current.consentPurposes || [];
    // Check if consent purposes were added or removed
    const baselineCPIds = new Set(baselineConsentPurposes.map((cp)=>cp.consentPurposeId));
    const currentCPIds = new Set(currentConsentPurposes.map((cp)=>cp.consentPurposeId));
    // Consent purposes added
    for (const cpId of currentCPIds){
        if (!baselineCPIds.has(cpId)) {
            changes.push({
                type: "step2",
                field: "consentPurposes",
                oldValue: null,
                newValue: cpId,
                description: `Consent purpose ${cpId} added`
            });
        }
    }
    // Consent purposes removed
    for (const cpId of baselineCPIds){
        if (!currentCPIds.has(cpId)) {
            changes.push({
                type: "step2",
                field: "consentPurposes",
                oldValue: cpId,
                newValue: null,
                description: `Consent purpose ${cpId} removed`
            });
        }
    }
    // Check changes within existing consent purposes
    for (const currentCP of currentConsentPurposes){
        const baselineCP = baselineConsentPurposes.find((cp)=>cp.consentPurposeId === currentCP.consentPurposeId);
        if (baselineCP) {
            // Duration type change
            if (baselineCP.durationType !== currentCP.durationType) {
                changes.push({
                    type: "step2",
                    field: "durationType",
                    oldValue: baselineCP.durationType,
                    newValue: currentCP.durationType,
                    description: `Consent purpose ${currentCP.consentPurposeId}: Duration type changed`
                });
            }
            // Consent duration change
            if (currentCP.durationType === "custom_duration") {
                const baselineDuration = baselineCP.consentDuration;
                const currentDuration = currentCP.consentDuration;
                const baselineUnit = baselineCP.durationUnit || "days";
                const currentUnit = currentCP.durationUnit || "days";
                if (baselineDuration !== currentDuration || baselineUnit !== currentUnit) {
                    changes.push({
                        type: "step2",
                        field: "consentDuration",
                        oldValue: `${baselineDuration} ${baselineUnit}`,
                        newValue: `${currentDuration} ${currentUnit}`,
                        description: `Consent purpose ${currentCP.consentPurposeId}: Consent duration changed`
                    });
                }
            }
            // Processing rules changes (CRITICAL - these are BusinessProcessRules)
            const baselineRules = baselineCP.processingRules || [];
            const currentRules = currentCP.processingRules || [];
            const baselinePPIds = new Set(baselineRules.map((r)=>r.processingPurposeId));
            const currentPPIds = new Set(currentRules.map((r)=>r.processingPurposeId));
            // Processing purposes added
            for (const ppId of currentPPIds){
                if (!baselinePPIds.has(ppId)) {
                    changes.push({
                        type: "step2_rules",
                        field: "processingRules",
                        oldValue: null,
                        newValue: ppId,
                        description: `Processing purpose ${ppId} added to consent purpose ${currentCP.consentPurposeId}`
                    });
                }
            }
            // Processing purposes removed
            for (const ppId of baselinePPIds){
                if (!currentPPIds.has(ppId)) {
                    changes.push({
                        type: "step2_rules",
                        field: "processingRules",
                        oldValue: ppId,
                        newValue: null,
                        description: `Processing purpose ${ppId} removed from consent purpose ${currentCP.consentPurposeId}`
                    });
                }
            }
            // Check rule field changes (mandatory, revocable, reconsentable)
            for (const currentRule of currentRules){
                const baselineRule = baselineRules.find((r)=>r.processingPurposeId === currentRule.processingPurposeId);
                if (baselineRule) {
                    // Mandatory flag change
                    if (baselineRule.isMandatory !== currentRule.isMandatory) {
                        changes.push({
                            type: "step2_rules",
                            field: "isMandatory",
                            oldValue: baselineRule.isMandatory,
                            newValue: currentRule.isMandatory,
                            description: `Processing purpose ${currentRule.processingPurposeId}: Mandatory flag changed`
                        });
                    }
                    // Revocable flag change
                    if (baselineRule.isRevocable !== currentRule.isRevocable) {
                        changes.push({
                            type: "step2_rules",
                            field: "isRevocable",
                            oldValue: baselineRule.isRevocable,
                            newValue: currentRule.isRevocable,
                            description: `Processing purpose ${currentRule.processingPurposeId}: Revocable flag changed`
                        });
                    }
                    // Reconsentable flag change
                    if (baselineRule.isReconsentable !== currentRule.isReconsentable) {
                        changes.push({
                            type: "step2_rules",
                            field: "isReconsentable",
                            oldValue: baselineRule.isReconsentable,
                            newValue: currentRule.isReconsentable,
                            description: `Processing purpose ${currentRule.processingPurposeId}: Reconsentable flag changed`
                        });
                    }
                    // User attributes change
                    const baselineAttrs = (baselineRule.userAttributes || []).sort();
                    const currentAttrs = (currentRule.userAttributes || []).sort();
                    if (JSON.stringify(baselineAttrs) !== JSON.stringify(currentAttrs)) {
                        changes.push({
                            type: "step2_rules",
                            field: "userAttributes",
                            oldValue: baselineAttrs,
                            newValue: currentAttrs,
                            description: `Processing purpose ${currentRule.processingPurposeId}: Purpose attributes changed`
                        });
                    }
                    // Retention duration change (compare calculated hours)
                    const baselineHours = calculateRetentionHours(baselineRule.retentionDurationValue, baselineRule.retentionDurationUnit);
                    const currentHours = calculateRetentionHours(currentRule.retentionDurationValue, currentRule.retentionDurationUnit);
                    if (baselineHours !== currentHours) {
                        changes.push({
                            type: "step2_rules",
                            field: "retentionDuration",
                            oldValue: `${baselineRule.retentionDurationValue} ${baselineRule.retentionDurationUnit}`,
                            newValue: `${currentRule.retentionDurationValue} ${currentRule.retentionDurationUnit}`,
                            description: `Processing purpose ${currentRule.processingPurposeId}: Retention duration changed`
                        });
                    }
                }
            }
        }
    }
    return changes;
}
function groupBreakingChangesByType(changes) {
    return changes.reduce((acc, change)=>{
        if (!acc[change.type]) {
            acc[change.type] = [];
        }
        acc[change.type].push(change);
        return acc;
    }, {});
}
function getBreakingChangeTypeName(type) {
    const typeNames = {
        step2: "Consent Purposes",
        step2_rules: "Processing Rules (BusinessProcessRules)"
    };
    return typeNames[type] || type;
}
function calculateRetentionHours(value, unit) {
    if (!value || !unit) return null;
    switch(unit){
        case "years":
            return value * 365 * 24;
        case "months":
            return value * 30 * 24;
        case "weeks":
            return value * 7 * 24;
        case "days":
        default:
            return value * 24;
    }
}
}),
"[project]/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertDialog",
    ()=>AlertDialog,
    "AlertDialogAction",
    ()=>AlertDialogAction,
    "AlertDialogCancel",
    ()=>AlertDialogCancel,
    "AlertDialogContent",
    ()=>AlertDialogContent,
    "AlertDialogDescription",
    ()=>AlertDialogDescription,
    "AlertDialogFooter",
    ()=>AlertDialogFooter,
    "AlertDialogHeader",
    ()=>AlertDialogHeader,
    "AlertDialogOverlay",
    ()=>AlertDialogOverlay,
    "AlertDialogPortal",
    ()=>AlertDialogPortal,
    "AlertDialogTitle",
    ()=>AlertDialogTitle,
    "AlertDialogTrigger",
    ()=>AlertDialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AlertDialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "alert-dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
function AlertDialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "alert-dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
function AlertDialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "alert-dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
function AlertDialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "alert-dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
function AlertDialogContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/alert-dialog.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "alert-dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/components/ui/alert-dialog.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
function AlertDialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
function AlertDialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
function AlertDialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "alert-dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
function AlertDialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "alert-dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
function AlertDialogAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
function AlertDialogCancel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: "outline"
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VersionWarningDialog",
    ()=>VersionWarningDialog
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
"use client";
;
;
;
function VersionWarningDialog({ open, onOpenChange, onConfirm, currentVersion, newVersion, breakingChanges }) {
    const changeCount = breakingChanges.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
            className: "max-w-2xl max-h-[85vh]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-10 w-10 items-center justify-center rounded-full bg-amber-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "h-5 w-5 text-amber-600"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                        className: "text-lg",
                                        children: "New Version Will Be Created"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            "Version ",
                                            currentVersion,
                                            " → Version ",
                                            newVersion
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[50vh] overflow-y-auto pr-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                        className: "text-base space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground",
                                children: [
                                    "You've made",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-amber-700",
                                        children: [
                                            changeCount,
                                            " breaking",
                                            " ",
                                            changeCount === 1 ? "change" : "changes"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    "to this published process:"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: breakingChanges.map((change, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-amber-50 border border-amber-200 rounded-md p-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-1.5 w-1.5 rounded-full bg-amber-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-amber-900",
                                                            children: change.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 23
                                                        }, this),
                                                        change.oldValue !== null && change.newValue !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1.5 text-xs space-y-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-amber-700",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: "Previous:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                                                            lineNumber: 93,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        " ",
                                                                        typeof change.oldValue === "boolean" ? change.oldValue ? "Yes" : "No" : Array.isArray(change.oldValue) ? change.oldValue.length > 0 ? change.oldValue.join(", ") : "None" : change.oldValue
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                                                    lineNumber: 92,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-amber-700",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: "New:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                                                            lineNumber: 105,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        " ",
                                                                        typeof change.newValue === "boolean" ? change.newValue ? "Yes" : "No" : Array.isArray(change.newValue) ? change.newValue.length > 0 ? change.newValue.join(", ") : "None" : change.newValue
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                                                    lineNumber: 104,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-50 border border-blue-200 p-3 rounded-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                            className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm space-y-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-blue-900",
                                                    children: "What happens next:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-1 text-blue-800 text-xs ml-4 list-disc",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                "Version ",
                                                                newVersion,
                                                                " will be created with your changes"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                "Version ",
                                                                currentVersion,
                                                                " remains active for existing consents"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                "New consents will use version ",
                                                                newVersion
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                            onClick: onConfirm,
                            children: [
                                "Create Version ",
                                newVersion
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Step6Form",
    ()=>Step6Form
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/business-process-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$business$2d$process$2d$breaking$2d$changes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/business-process-breaking-changes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$version$2d$warning$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/business-processes/_components/version-warning-dialog.tsx [app-ssr] (ecmascript)");
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
function Step6Form({ data, isEdit, businessProcessId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { state } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$business$2d$process$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusinessProcessContext"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const [isSavingDraft, setIsSavingDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showVersionWarning, setShowVersionWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [highestVersion, setHighestVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { businessProcess, businessUnits = [], consentPurposes = [] } = data;
    // Get data from context
    const step1Data = state.step1Data;
    const contextConsentPurposes = state.consentPurposes || [];
    const contextEulas = state.eulas || [];
    // Detect breaking changes
    const breakingChangeInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // Only detect breaking changes if editing a published business process
        if (!isEdit || businessProcess?.status !== "published" || !state.baseline) {
            return {
                hasBreakingChanges: false,
                breakingChanges: [],
                currentVersion: businessProcess?.version || 1
            };
        }
        const breakingChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$business$2d$process$2d$breaking$2d$changes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectBreakingChanges"])(state.baseline, state);
        return {
            hasBreakingChanges: breakingChanges.length > 0,
            breakingChanges,
            currentVersion: businessProcess?.version || 1
        };
    }, [
        isEdit,
        businessProcess?.status,
        businessProcess?.version,
        state.baseline,
        state
    ]);
    // Helper function to get user attribute name from ID or array
    const getUserAttributeNames = (attributes)=>{
        if (!attributes || attributes.length === 0) return [];
        return attributes.map((attr)=>{
            // If it's a number (ID), find the attribute name
            if (typeof attr === "number") {
                const userAttr = (data.userAttributes || []).find((ua)=>ua.id === attr);
                return userAttr?.name || `Attribute ID: ${attr}`;
            }
            // If it's already a string, return it
            if (typeof attr === "string") return attr;
            // If it's an object with name
            if (attr.name) return attr.name;
            // If it's an object with id, try to find the name
            if (attr.id) {
                const userAttr = (data.userAttributes || []).find((ua)=>ua.id === attr.id);
                return userAttr?.name || `Attribute ID: ${attr.id}`;
            }
            return "Unknown Attribute";
        });
    };
    // Helper function to get business unit name
    const getBusinessUnitName = (id)=>{
        const unit = businessUnits.find((bu)=>bu.id === id);
        return unit?.name || "Unknown Department";
    };
    // Helper function to convert duration to display format
    const convertDurationToDays = (config)=>{
        if (config.durationType === "until_purpose_met") {
            return "Until purpose met";
        }
        const duration = config.consentDuration || 0;
        const unit = config.durationUnit || "days";
        let totalDays = duration;
        switch(unit){
            case "weeks":
                totalDays = duration * 7;
                break;
            case "months":
                totalDays = duration * 30; // approximate
                break;
            case "years":
                totalDays = duration * 365; // approximate
                break;
        }
        return `${totalDays} days`;
    };
    // Format last updated date
    const formatLastUpdated = (date)=>{
        if (!date) return "";
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };
    const handlePrevious = ()=>{
        const params = new URLSearchParams();
        params.set("step", "4");
        if (businessProcessId) {
            params.set("id", businessProcessId);
        }
        const basePath = businessProcessId ? `/cms/data-fiduciary/business-processes/${businessProcessId}/edit` : `/cms/data-fiduciary/business-processes/new`;
        router.push(`${basePath}?${params.toString()}`);
    };
    const handleSaveAsDraft = async ()=>{
        setIsSavingDraft(true);
        try {
            // Get step 1 data from context
            if (!state.step1Data) {
                console.error("Step 1 data not found in context!");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Process data not found");
                setIsSavingDraft(false);
                return;
            }
            // Create a clean copy of the state for serialization
            const stateForServer = {
                step1Data: state.step1Data,
                step2Data: state.step2Data,
                step3Data: state.step3Data,
                step4Data: state.step4Data,
                consentPurposes: state.consentPurposes,
                eulas: state.eulas,
                baseline: state.baseline
            };
            // Call the versioning-aware action with full context state
            const { saveOrPublishBusinessProcessWithVersioning } = await __turbopack_context__.A("[project]/actions/business-processes.ts [app-ssr] (ecmascript, async loader)");
            // For new BP, businessProcessId will be undefined - that's expected!
            const result = await saveOrPublishBusinessProcessWithVersioning({
                clientState: stateForServer,
                businessProcessId: businessProcessId ? parseInt(businessProcessId) : undefined,
                status: "draft"
            });
            if (result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Process saved as draft");
                router.push("/cms/data-fiduciary/business-processes");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result.error || "Failed to save process as draft");
            }
        } catch (error) {
            console.error("Error saving draft:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to save process as draft");
        } finally{
            setIsSavingDraft(false);
        }
    };
    const handlePublish = async ()=>{
        // Check if we need to show the version warning
        if (isEdit && businessProcess?.status === "published" && breakingChangeInfo.hasBreakingChanges) {
            // Fetch highest version before showing modal
            if (businessProcess?.code) {
                const { getHighestVersionForCode } = await __turbopack_context__.A("[project]/actions/business-processes.ts [app-ssr] (ecmascript, async loader)");
                const result = await getHighestVersionForCode(businessProcess.code);
                if (result.success) {
                    setHighestVersion(result.highestVersion);
                }
            }
            setShowVersionWarning(true);
            return;
        }
        // If no breaking changes or not editing published BP, proceed directly
        performPublish();
    };
    const performPublish = ()=>{
        // Create a clean copy of the state for serialization
        const stateForServer = {
            step1Data: state.step1Data,
            step2Data: state.step2Data,
            step3Data: state.step3Data,
            step4Data: state.step4Data,
            consentPurposes: state.consentPurposes,
            eulas: state.eulas,
            baseline: state.baseline
        };
        startTransition(async ()=>{
            try {
                // Get step 1 data from context
                if (!state.step1Data) {
                    console.error("Step 1 data not found in context!");
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Process data not found");
                    return;
                }
                // Call the versioning-aware action with full context state
                const { saveOrPublishBusinessProcessWithVersioning } = await __turbopack_context__.A("[project]/actions/business-processes.ts [app-ssr] (ecmascript, async loader)");
                // For new BP, businessProcessId will be undefined - that's expected!
                // Use the clean state object for server serialization
                const result = await saveOrPublishBusinessProcessWithVersioning({
                    clientState: stateForServer,
                    businessProcessId: businessProcessId ? parseInt(businessProcessId) : undefined,
                    status: "published"
                });
                if (result.success && result.data) {
                    // Show success message with version information
                    let message = isEdit ? "Process updated successfully" : "Process published successfully";
                    if (result.data.isNewVersion) {
                        message += ` (New version created)`;
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(message);
                    router.push("/cms/data-fiduciary/business-processes");
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result.error || "Failed to publish process");
                }
            } catch (error) {
                console.error("Error publishing business process:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("An unexpected error occurred");
            }
        });
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
                                children: step1Data?.name || businessProcess?.name || "Process"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            businessProcess?.updatedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    "(Last updated: ",
                                    formatLastUpdated(businessProcess.updatedAt),
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: businessProcess?.status === "published" ? "default" : "secondary",
                                className: businessProcess?.status === "published" ? "border-green-200 bg-green-50 text-green-700 pointer-events-none" : "",
                                children: businessProcess?.status?.toUpperCase() || "DRAFT"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: businessProcess?.status === "published" ? "Review all information and save your changes" : "Review all information and publish your process"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                lineNumber: 312,
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
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                    lineNumber: 347,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-6 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-muted-foreground",
                                                            children: "Process Name:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1",
                                                            children: step1Data?.name || businessProcess?.name || "Not specified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-muted-foreground",
                                                            children: "Department:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1",
                                                            children: step1Data?.businessUnitId ? getBusinessUnitName(step1Data.businessUnitId) : businessProcess?.businessUnit?.name || "Not specified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-muted-foreground",
                                                            children: "Code:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1",
                                                            children: step1Data?.code || businessProcess?.code || "Not specified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-muted-foreground",
                                                            children: "Grant Description:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1",
                                                            children: step1Data?.grantDescription || businessProcess?.grantDescription || "No description provided"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-muted-foreground",
                                                            children: "Revoke Description:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1",
                                                            children: step1Data?.revokeDescription || businessProcess?.revokeDescription || "No description provided"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-muted-foreground",
                                                            children: "Reconsent Description:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1",
                                                            children: step1Data?.reconsentDescription || businessProcess?.reconsentDescription || "No description provided"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                            lineNumber: 384,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                            lineNumber: 346,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold",
                                    children: "List of Purpose Master"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                    lineNumber: 420,
                                    columnNumber: 13
                                }, this),
                                contextConsentPurposes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border rounded-lg overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "bg-muted/30 border-r whitespace-normal",
                                                            children: "Purpose Master"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 427,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "bg-muted/30 border-r whitespace-normal",
                                                            children: "Consent Duration"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "bg-muted/30 border-r whitespace-normal",
                                                            children: "Purpose Sub Master"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "bg-muted/30 border-r whitespace-normal",
                                                            children: "Attributes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "bg-muted/30 border-r text-center whitespace-normal",
                                                            children: "Mandatory"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 439,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "bg-muted/30 border-r text-center whitespace-normal py-2",
                                                            children: "Re-consentable by Principal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "bg-muted/30 text-center border-r whitespace-normal",
                                                            children: "Revocable by Principal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "bg-muted/30 whitespace-normal",
                                                            children: "Retention Duration"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                lineNumber: 425,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                children: contextConsentPurposes.map((config)=>{
                                                    const rules = config.processingRules || [];
                                                    // If no processing rules, show one row with a message
                                                    if (rules.length === 0) {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "font-medium border-r",
                                                                    children: config.consentPurposeName || config.consentPurpose?.name || config.name || "Unnamed Purpose"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                    lineNumber: 461,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "border-r",
                                                                    children: convertDurationToDays(config)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "font-medium text-muted-foreground border-r",
                                                                    colSpan: 6,
                                                                    children: "No processing rules configured"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                    lineNumber: 470,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, `${config.id}-empty`, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 27
                                                        }, this);
                                                    }
                                                    // Normal rendering with processing rules
                                                    return rules.map((rule, ruleIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                            children: [
                                                                ruleIndex === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    rowSpan: rules.length,
                                                                    className: "font-medium border-r",
                                                                    children: config.consentPurposeName || config.consentPurpose?.name || config.name || "Unnamed Purpose"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                    lineNumber: 484,
                                                                    columnNumber: 29
                                                                }, this),
                                                                ruleIndex === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    rowSpan: rules.length,
                                                                    className: "border-r",
                                                                    children: convertDurationToDays(config)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                    lineNumber: 495,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "font-medium border-r",
                                                                    children: rule.processingPurposeName || "Unknown Processing Purpose"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                    lineNumber: 502,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "border-r",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-1",
                                                                        children: [
                                                                            getUserAttributeNames(rule.userAttributes || []).map((attrName, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: "outline",
                                                                                    className: "text-xs",
                                                                                    children: attrName
                                                                                }, i, false, {
                                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                                    lineNumber: 511,
                                                                                    columnNumber: 33
                                                                                }, this)),
                                                                            (!rule.userAttributes || rule.userAttributes.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs text-muted-foreground",
                                                                                children: "No attributes"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                                lineNumber: 521,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                        lineNumber: 507,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "text-center border-r",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                        checked: rule.isMandatory,
                                                                        disabled: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                        lineNumber: 528,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                    lineNumber: 527,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "text-center border-r",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                        checked: rule.isReconsentable,
                                                                        disabled: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                        lineNumber: 531,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                    lineNumber: 530,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "text-center border-r",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                        checked: rule.isRevocable,
                                                                        disabled: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                        lineNumber: 534,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                    lineNumber: 533,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    children: rule.retentionDurationValue && rule.retentionDurationUnit ? `${rule.retentionDurationValue} ${rule.retentionDurationUnit}` : "-"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                    lineNumber: 536,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, `${config.id}-${ruleIndex}`, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 482,
                                                            columnNumber: 25
                                                        }, this));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                lineNumber: 453,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                        lineNumber: 424,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                    lineNumber: 423,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-dashed p-8 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "No consent purposes selected"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                        lineNumber: 550,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                    lineNumber: 549,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                            lineNumber: 419,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold",
                                    children: "List of Redirectional URLs"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                    lineNumber: 558,
                                    columnNumber: 13
                                }, this),
                                contextEulas.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border rounded-lg overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "bg-muted/30 border-r",
                                                            children: "Redirectional URL Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 565,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "bg-muted/30",
                                                            children: "Link"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                            lineNumber: 568,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                lineNumber: 563,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                children: contextEulas.map((eula, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        className: "hover:bg-muted/20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "border-r font-medium",
                                                                children: eula.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                lineNumber: 577,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "truncate max-w-[400px] text-sm",
                                                                            title: eula.link,
                                                                            children: eula.link
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                            lineNumber: 582,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "ghost",
                                                                            size: "sm",
                                                                            className: "h-6 w-6 p-0",
                                                                            onClick: ()=>window.open(eula.link, "_blank"),
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                className: "h-3 w-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                                lineNumber: 594,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                            lineNumber: 588,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                    lineNumber: 581,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                                lineNumber: 580,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, eula.id || index, true, {
                                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                        lineNumber: 573,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                                lineNumber: 571,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                        lineNumber: 562,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                    lineNumber: 561,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-dashed p-8 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "No Redirectional URLs added"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                        lineNumber: 605,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                    lineNumber: 604,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                            lineNumber: 557,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                    lineNumber: 345,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                lineNumber: 343,
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
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                            lineNumber: 617,
                            columnNumber: 11
                        }, this),
                        !isEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "secondary",
                            onClick: handleSaveAsDraft,
                            className: "min-w-[120px]",
                            disabled: isSavingDraft,
                            children: isSavingDraft ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "mr-2 h-4 w-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                        lineNumber: 630,
                                        columnNumber: 19
                                    }, this),
                                    "Saving..."
                                ]
                            }, void 0, true) : "Save as Draft"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                            lineNumber: 621,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            onClick: handlePublish,
                            className: "min-w-[100px]",
                            disabled: isPending,
                            children: isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "mr-2 h-4 w-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                                        lineNumber: 646,
                                        columnNumber: 17
                                    }, this),
                                    isEdit ? "Updating..." : "Publishing..."
                                ]
                            }, void 0, true) : isEdit ? "Update" : "Publish"
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                            lineNumber: 638,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                    lineNumber: 616,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                lineNumber: 615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$business$2d$processes$2f$_components$2f$version$2d$warning$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VersionWarningDialog"], {
                open: showVersionWarning,
                onOpenChange: setShowVersionWarning,
                onConfirm: ()=>{
                    setShowVersionWarning(false);
                    performPublish();
                },
                currentVersion: breakingChangeInfo.currentVersion,
                newVersion: (highestVersion || breakingChangeInfo.currentVersion) + 1,
                breakingChanges: breakingChangeInfo.breakingChanges
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
                lineNumber: 659,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/business-processes/_components/step6-form.tsx",
        lineNumber: 310,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_7b179f73._.js.map