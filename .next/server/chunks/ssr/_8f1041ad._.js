module.exports = [
"[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OverviewSectionClient",
    ()=>OverviewSectionClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dprm$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dprm-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-notice-translation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$digit$2d$localization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/digit-localization.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function OverviewSectionClient({ activeConsentsCount, servicesCount, accessToken }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { t, currentLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNoticeTranslation"])("dprm");
    const { t: tCommon } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNoticeTranslation"])("common");
    const handleOverviewClick = ()=>{
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dprm$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDprmLink"])(`/cms/principal/dprm/${accessToken}/consent-wallet`, searchParams));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-3a670de0d64a26fa" + " " + "w-full flex flex-col items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "jsx-3a670de0d64a26fa" + " " + "hidden md:block text-2xl font-semibold mb-4",
                children: t("Overview")
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleOverviewClick,
                className: "jsx-3a670de0d64a26fa" + " " + "relative w-full md:w-[28rem] aspect-square md:rounded-2xl overflow-visible isolate md:bg-[linear-gradient(359deg,#FFF_-39.5%,#1766d6_99.51%)] flex justify-center items-center group bg-[linear-gradient(180deg,#1766d6_0%,#F9FAFB_100%)] cursor-pointer hover:opacity-90 transition-opacity",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 325 370",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        preserveAspectRatio: "xMidYMid meet",
                        style: {
                            overflow: "visible"
                        },
                        className: "jsx-3a670de0d64a26fa" + " " + "absolute inset-0 w-full h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                style: {
                                    transitionDelay: "500ms",
                                    transformOrigin: "162.5px 185px"
                                },
                                opacity: "0.15",
                                d: "M14.1388 20.2497L162.5 -12.741L310.861 20.2497C319.123 22.0868 325 29.4187 325 37.8869V218.321C325 254.566 306.897 288.413 276.759 308.518L162.5 384.741L48.2408 308.518C18.1027 288.413 0 254.566 0 218.321V37.8869C0 29.4187 5.87763 22.0868 14.1388 20.2497Z",
                                fill: "white",
                                fillOpacity: "0.4",
                                className: "jsx-3a670de0d64a26fa" + " " + "transition-[transform] duration-500 ease-out shield-layer-1"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                style: {
                                    transitionDelay: "250ms",
                                    transformOrigin: "162px 185px"
                                },
                                opacity: "0.15",
                                d: "M45.137 55.4397L162 29.4532L278.863 55.4397C285.371 56.8868 290 62.6621 290 69.3324V211.459C290 240.009 275.741 266.67 252.001 282.507L162 342.547L71.9989 282.507C48.2593 266.67 34 240.009 34 211.459V69.3324C34 62.6621 38.6298 56.8868 45.137 55.4397Z",
                                fill: "white",
                                fillOpacity: "0.4",
                                className: "jsx-3a670de0d64a26fa" + " " + "transition-[transform] duration-500 ease-out shield-layer-2"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                style: {
                                    transitionDelay: "0ms",
                                    transformOrigin: "162px 185px"
                                },
                                opacity: "0.2",
                                d: "M67.9618 80.9158L162 60L256.038 80.9158C261.275 82.0805 265 86.7288 265 92.0976V206.491C265 229.47 253.526 250.929 234.423 263.676L162 312L89.5773 263.676C70.4743 250.929 59 229.47 59 206.491V92.0976C59 86.7288 62.7255 82.0805 67.9618 80.9158Z",
                                fill: "white",
                                fillOpacity: "0.4",
                                className: "jsx-3a670de0d64a26fa" + " " + "transition-[transform] duration-500 ease-out shield-layer-3"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                style: {
                                    transformOrigin: "163px 182px"
                                },
                                d: "M89.9606 100.268L163 84L236.039 100.268C240.107 101.174 243 104.789 243 108.965V197.937C243 215.81 234.088 232.5 219.251 242.414L163 280L106.749 242.414C91.9121 232.5 83 215.81 83 197.937V108.965C83 104.789 85.8936 101.174 89.9606 100.268Z",
                                fill: "white",
                                className: "jsx-3a670de0d64a26fa" + " " + "shield-layer-4"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3a670de0d64a26fa" + " " + "absolute inset-0 z-10 flex items-center justify-center px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                transform: "translateY(-10px)"
                            },
                            className: "jsx-3a670de0d64a26fa" + " " + "text-center w-full max-w-[180px] xl:max-w-[240px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-3a670de0d64a26fa" + " " + "text-[2rem] xl:text-[3.25rem] font-semibold text-[#131a25] pb-2 xl:pb-3 leading-none",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$digit$2d$localization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localizeDigits"])(activeConsentsCount, tCommon("numerals"))
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "jsx-3a670de0d64a26fa" + " " + "text-[0.875rem] xl:text-[1.125rem] font-semibold xl:font-normal text-[#131a25] xl:text-[#484e56] px-2",
                                    children: t("Active Consents")
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) -17.26%, #F5F5F5 48.54%, rgba(255, 255, 255, 0.1) 115.51%)"
                                    },
                                    className: "jsx-3a670de0d64a26fa" + " " + "w-28 xl:w-32 h-[1px] mx-auto my-2"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3a670de0d64a26fa" + " " + "flex items-center justify-center px-2 gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-3a670de0d64a26fa" + " " + "text-[0.8rem] xl:text-base font-normal text-[#484e56] leading-[1.4]",
                                            children: t("across {{count}} services", {
                                                count: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$digit$2d$localization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localizeDigits"])(servicesCount, tCommon("numerals"))
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3a670de0d64a26fa" + " " + "flex items-center justify-center h-4 w-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-1 flex-shrink-0",
                                                style: {
                                                    transform: "translateY(1px)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "3a670de0d64a26fa",
                children: ".shield-layer-1.jsx-3a670de0d64a26fa,.shield-layer-2.jsx-3a670de0d64a26fa,.shield-layer-3.jsx-3a670de0d64a26fa,.shield-layer-4.jsx-3a670de0d64a26fa{transform:scale(1)}@media (width>=768px){.shield-layer-1.jsx-3a670de0d64a26fa,.shield-layer-2.jsx-3a670de0d64a26fa,.shield-layer-3.jsx-3a670de0d64a26fa,.shield-layer-4.jsx-3a670de0d64a26fa{transform:scale(1.15)}}@media (width>=1280px){.shield-layer-1.jsx-3a670de0d64a26fa,.shield-layer-2.jsx-3a670de0d64a26fa,.shield-layer-3.jsx-3a670de0d64a26fa,.shield-layer-4.jsx-3a670de0d64a26fa{transform:scale(1.2)}}.group.jsx-3a670de0d64a26fa:hover .shield-layer-1.jsx-3a670de0d64a26fa,.group.jsx-3a670de0d64a26fa:hover .shield-layer-2.jsx-3a670de0d64a26fa,.group.jsx-3a670de0d64a26fa:hover .shield-layer-3.jsx-3a670de0d64a26fa{transform:scale(1.18)}@media (width>=768px){.group.jsx-3a670de0d64a26fa:hover .shield-layer-1.jsx-3a670de0d64a26fa,.group.jsx-3a670de0d64a26fa:hover .shield-layer-2.jsx-3a670de0d64a26fa,.group.jsx-3a670de0d64a26fa:hover .shield-layer-3.jsx-3a670de0d64a26fa{transform:scale(1.33)}}@media (width>=1280px){.group.jsx-3a670de0d64a26fa:hover .shield-layer-1.jsx-3a670de0d64a26fa,.group.jsx-3a670de0d64a26fa:hover .shield-layer-2.jsx-3a670de0d64a26fa,.group.jsx-3a670de0d64a26fa:hover .shield-layer-3.jsx-3a670de0d64a26fa{transform:scale(1.37)}}.group.jsx-3a670de0d64a26fa:hover .shield-layer-4.jsx-3a670de0d64a26fa{transform:scale(1)}@media (width>=768px){.group.jsx-3a670de0d64a26fa:hover .shield-layer-4.jsx-3a670de0d64a26fa{transform:scale(1.15)}}@media (width>=1280px){.group.jsx-3a670de0d64a26fa:hover .shield-layer-4.jsx-3a670de0d64a26fa{transform:scale(1.2)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/overview-section-client.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
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
"[project]/app/cms/principal/dprm/[access_token]/_components/dpdp-info-banner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DpdpInfoBanner",
    ()=>DpdpInfoBanner
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-notice-translation.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function DpdpInfoBanner() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNoticeTranslation"])("dprm");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-100 rounded-xl p-5 flex items-start gap-4 w-full max-w-[1048px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                className: "w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/dpdp-info-banner.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-gray-900 leading-relaxed",
                        dangerouslySetInnerHTML: {
                            __html: t("The {{dpdp_act}} is India's first-ever comprehensive data protection law", {
                                dpdp_act: `<span class="font-bold">${t("DPDP Act, 2023")}</span>`
                            })
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/dpdp-info-banner.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "text-sm font-semibold text-gray-900 underline hover:text-blue-600 transition-colors inline-block",
                        children: t("Read more about it here")
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/dpdp-info-banner.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/dpdp-info-banner.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/dpdp-info-banner.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuickActionsSection",
    ()=>QuickActionsSection
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-pen-line.js [app-ssr] (ecmascript) <export default as FilePenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-x.js [app-ssr] (ecmascript) <export default as FileX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dprm$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dprm-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-notice-translation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$_components$2f$dpdp$2d$info$2d$banner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/principal/dprm/[access_token]/_components/dpdp-info-banner.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function QuickActionsSection({ accessToken }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$notice$2d$translation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNoticeTranslation"])("dprm");
    const handleTrackRequests = ()=>{
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dprm$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDprmLink"])(`/cms/principal/dprm/${accessToken}/grievances`, searchParams));
    };
    const handleRaiseRequests = ()=>{
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dprm$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDprmLink"])(`/cms/principal/dprm/${accessToken}/grievances/new`, searchParams));
    };
    const handleRevokeConsent = ()=>{
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dprm$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDprmLink"])(`/cms/principal/dprm/${accessToken}/consent-action-center?type=withdraw`, searchParams));
    };
    const handleUpdateConsent = ()=>{
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dprm$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDprmLink"])(`/cms/principal/dprm/${accessToken}/consent-action-center?type=update`, searchParams));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col gap-4 md:h-full md:relative absolute bottom-0 md:p-0 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-base font-semibold md:text-2xl shrink-0",
                children: t("Quick Actions")
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row md:flex-col gap-4 flex-1 min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        onClick: handleTrackRequests,
                        className: "flex-1 p-4 border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer group bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-12 flex items-center justify-center mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MagnifyingGlassIcon, {}, void 0, false, {
                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-gray-900 mb-2",
                                            children: t("Track Requests")
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 leading-relaxed flex-1",
                                            children: t("Monitor the progress of your raised tickets in real time.")
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "w-6 h-6 text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0 ml-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        onClick: handleRaiseRequests,
                        className: "flex-1 p-4 border border-gray-200 hover:border-blue-400 transition-colors cursor-pointer group bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-12 flex items-center justify-center mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MegaphoneIcon, {}, void 0, false, {
                                                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-gray-900 mb-2",
                                            children: t("Raise Requests")
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 leading-relaxed flex-1",
                                            children: t("Submit queries about your personal data for assistance.")
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "w-6 h-6 text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0 ml-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 space-y-0 md:space-y-2 flex flex-row md:flex-col gap-2 w-full md:pr-0 pr-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleRevokeConsent,
                        variant: "outline",
                        className: "w-1/2 md:w-full py-3 md:py-4 rounded-md border border-[var(--Primary-500,#1766D6)] bg-[var(--Shades-white,#FFF)] text-[var(--Primary-500,#1766D6)] hover:bg-blue-50 hover:text-blue-700 hover:border-blue-600 gap-2 font-medium text-center font-[Plus Jakarta Sans] text-base leading-[1.4rem] tracking-[0.004rem]",
                        style: {
                            fontFeatureSettings: "&apos;case&apos; on, &apos;liga&apos; off"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileX$3e$__["FileX"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            t("Withdraw Consent")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleUpdateConsent,
                        variant: "outline",
                        className: "w-1/2 md:w-full py-3 md:py-4 rounded-md border border-[var(--Primary-500,#1766D6)] bg-[var(--Shades-white,#FFF)] text-[var(--Primary-500,#1766D6)] hover:bg-blue-50 hover:text-blue-700 hover:border-blue-600 gap-2 font-medium text-center font-[Plus Jakarta Sans] text-base leading-[1.4rem] tracking-[0.004rem]",
                        style: {
                            fontFeatureSettings: "&apos;case&apos; on, &apos;liga&apos; off"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePenLine$3e$__["FilePenLine"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            t("Update Consent")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$principal$2f$dprm$2f5b$access_token$5d2f$_components$2f$dpdp$2d$info$2d$banner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DpdpInfoBanner"], {}, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
const MegaphoneIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "64",
        height: "64",
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M26.8303 7.81576C26.3402 7.65487 26.3402 6.97326 26.8303 6.81237L29.7071 5.86895C30.3395 5.66129 30.9141 5.31142 31.3853 4.84706C31.8566 4.38271 32.2115 3.81664 32.422 3.19372L33.3799 0.361989C33.5433 -0.120694 34.2354 -0.120694 34.3988 0.361989L35.3567 3.19518C35.5676 3.81799 35.9228 4.38387 36.3943 4.84797C36.8658 5.31207 37.4406 5.66163 38.0731 5.86895L40.9484 6.81237C41.0557 6.84706 41.1492 6.91424 41.2154 7.00433C41.2817 7.09442 41.3173 7.20282 41.3173 7.31407C41.3173 7.42531 41.2817 7.53371 41.2154 7.6238C41.1492 7.71389 41.0557 7.78107 40.9484 7.81576L38.0716 8.75919C37.4394 8.9667 36.8649 9.31634 36.3937 9.78043C35.9224 10.2445 35.5674 10.8103 35.3567 11.4329L34.3988 14.2661C34.3636 14.3718 34.2953 14.4639 34.2039 14.5291C34.1124 14.5944 34.0023 14.6295 33.8894 14.6295C33.7764 14.6295 33.6663 14.5944 33.5749 14.5291C33.4834 14.4639 33.4152 14.3718 33.3799 14.2661L32.422 11.4329C32.2113 10.8103 31.8563 10.2445 31.3851 9.78043C30.9138 9.31635 30.3394 8.9667 29.7071 8.75919L26.8303 7.81576Z",
                fill: "#1A7A1E"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.38833 57.1865C6.89823 57.0256 6.89823 56.344 7.38833 56.1831L10.2651 55.2397C10.8975 55.032 11.4721 54.6821 11.9433 54.2178C12.4146 53.7534 12.7695 53.1874 12.98 52.5644L13.9379 49.7327C14.1013 49.25 14.7934 49.25 14.9568 49.7327L15.9147 52.5659C16.1255 53.1887 16.4808 53.7546 16.9523 54.2187C17.4238 54.6828 17.9986 55.0324 18.6311 55.2397L21.5064 56.1831C21.6137 56.2178 21.7071 56.285 21.7734 56.3751C21.8396 56.4652 21.8753 56.5736 21.8753 56.6848C21.8753 56.796 21.8396 56.9044 21.7734 56.9945C21.7071 57.0846 21.6137 57.1518 21.5064 57.1865L18.6296 58.1299C17.9974 58.3374 17.4229 58.6871 16.9516 59.1512C16.4804 59.6152 16.1254 60.181 15.9147 60.8037L14.9568 63.6369C14.9215 63.7426 14.8533 63.8346 14.7618 63.8999C14.6704 63.9651 14.5603 64.0002 14.4473 64.0002C14.3344 64.0002 14.2243 63.9651 14.1328 63.8999C14.0414 63.8346 13.9732 63.7426 13.9379 63.6369L12.98 60.8037C12.7693 60.181 12.4143 59.6152 11.943 59.1512C11.4718 58.6871 10.8973 58.3374 10.2651 58.1299L7.38833 57.1865Z",
                fill: "#1A7A1E"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M49.5131 47.3115C49.023 47.1506 49.023 46.469 49.5131 46.3081L52.3899 45.3647C53.0222 45.157 53.5968 44.8071 54.0681 44.3428C54.5393 43.8784 54.8942 43.3124 55.1048 42.6894L56.0627 39.8577C56.2261 39.375 56.9181 39.375 57.0815 39.8577L58.0394 42.6909C58.2503 43.3137 58.6056 43.8796 59.077 44.3437C59.5485 44.8078 60.1233 45.1574 60.7558 45.3647L63.6311 46.3081C63.7384 46.3428 63.8319 46.41 63.8981 46.5001C63.9644 46.5902 64.0001 46.6986 64.0001 46.8098C64.0001 46.921 63.9644 47.0294 63.8981 47.1195C63.8319 47.2096 63.7384 47.2768 63.6311 47.3115L60.7543 48.2549C60.1221 48.4624 59.5476 48.8121 59.0764 49.2762C58.6052 49.7402 58.2502 50.306 58.0394 50.9287L57.0815 53.7619C57.0463 53.8676 56.9781 53.9596 56.8866 54.0249C56.7951 54.0901 56.6851 54.1252 56.5721 54.1252C56.4591 54.1252 56.3491 54.0901 56.2576 54.0249C56.1661 53.9596 56.0979 53.8676 56.0627 53.7619L55.1048 50.9287C54.894 50.306 54.539 49.7402 54.0678 49.2762C53.5966 48.8121 53.0221 48.4624 52.3899 48.2549L49.5131 47.3115Z",
                fill: "#1A7A1E"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M41.5198 39.6718L38.3043 45.9735L36.6965 45.5264L28.6185 52.1006C28.2888 52.3704 27.8669 52.5008 27.4425 52.4642C27.0181 52.4276 26.6247 52.2268 26.3461 51.9046L23.2678 48.3302C23.2678 48.3302 29.4734 45.6578 30.6204 43.4461C31.7674 41.2345 30.4419 40.7306 30.4419 40.7306L33.3614 37.4131L41.5198 39.6718Z",
                fill: "#4CAF47"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M37.3493 26.8023C37.3493 26.8023 32.6437 25.7612 26.0185 19.3929C19.3934 13.0245 16.2838 4.56023 15.4819 4.60728C14.6799 4.65434 11.1311 3.0054 4.39814 17.6498C-2.33482 32.2942 0.317974 35.6882 1.6532 35.6686C2.98842 35.649 12.0879 33.1059 17.77 33.751C23.452 34.3961 30.7555 37.3587 30.7555 37.3587L37.3493 26.8023Z",
                fill: "#4CAF47"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                opacity: "0.4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M47.3466 34.7887L45.7408 37.8415L45.0213 39.214C44.5463 40.1174 43.7428 40.8041 42.7764 41.1325C41.81 41.4608 40.7544 41.4057 39.8274 40.9786L29.7397 37.4631L35.6218 24.0519L45.6997 29.4223C46.6268 29.9184 47.3202 30.7609 47.6287 31.7662C47.9373 32.7714 47.8358 33.8579 47.3466 34.7887Z",
                    fill: "#08461B"
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                opacity: "0.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4.93518 17.9157C1.35302 25.8487 -0.139059 32.9189 1.60202 33.7052C3.34311 34.4914 7.66248 28.6995 11.2446 20.7646C14.8268 12.8297 16.3189 5.76333 14.5778 4.97513C12.8367 4.18694 8.51733 9.98274 4.93518 17.9157Z",
                    fill: "black"
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M48.2135 39.1943L45.4784 38.3355L47.1705 35.12L49.2213 36.3944L48.2135 39.1943Z",
                fill: "#4CAF47"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                opacity: "0.6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M47.1702 35.1243L45.4781 38.3398L46.0409 38.5163L47.4153 35.2752L47.1702 35.1243Z",
                    fill: "black"
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M45.2842 35.8678C45.245 35.9561 43.8804 35.4267 42.2373 34.6914C40.5943 33.9562 39.2963 33.2738 39.3335 33.1856C39.3708 33.0974 40.7374 33.6287 42.3824 34.3718C44.0274 35.1149 45.3254 35.7796 45.2842 35.8678Z",
                fill: "#4CAF47"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M46.1275 33.9432C46.0844 34.0295 44.8492 33.5099 43.3689 32.7805C41.8885 32.0511 40.7239 31.3904 40.767 31.3022C40.8102 31.2139 42.0434 31.7355 43.5237 32.4648C45.0041 33.1942 46.1707 33.855 46.1275 33.9432Z",
                fill: "#4CAF47"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M44.2254 37.8712C44.2117 37.9182 43.8862 37.8437 43.3686 37.6751C43.1098 37.5947 42.8019 37.4928 42.4627 37.3771C42.1235 37.2614 41.7765 37.0771 41.402 36.9065C39.906 36.2124 38.7629 35.534 38.8002 35.4517C38.8375 35.3693 40.0668 35.9007 41.5452 36.5889C41.9177 36.7575 42.2628 36.9418 42.5882 37.0771C42.9137 37.2124 43.2058 37.332 43.4509 37.4418C43.9411 37.6672 44.2391 37.8241 44.2254 37.8712Z",
                fill: "#4CAF47"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.2387 16.1581C12.2387 16.1581 8.14872 13.621 5.91159 19.1482C3.67446 24.6754 7.97618 25.5832 7.97618 25.5832C9.83382 22.6579 11.2688 19.4849 12.2387 16.1581Z",
                fill: "#4CAF47"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                opacity: "0.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16.59 9.56219C16.6155 9.56219 16.5566 9.94257 16.4312 10.619C16.3057 11.2954 16.1175 12.2738 15.8547 13.4777L15.2861 15.4129C15.1829 15.7593 15.0763 16.1181 14.9665 16.4893L14.7999 17.052C14.7391 17.2481 14.6587 17.4265 14.5881 17.6167L13.6646 20.0009C13.5843 20.2088 13.5019 20.4166 13.4215 20.6264C13.3411 20.8362 13.2255 21.0362 13.1333 21.244L12.5255 22.4988L11.9157 23.7517C11.8118 23.9478 11.7197 24.1674 11.6079 24.3595C11.4961 24.5517 11.3785 24.7517 11.2667 24.9379L9.96289 27.1398C9.85701 27.3123 9.76682 27.4908 9.64918 27.6555L9.30998 28.1358L8.65904 29.0534L7.48263 30.6945C6.69836 31.6416 6.04349 32.3886 5.59254 32.9082C5.37104 33.1895 5.12641 33.4518 4.86121 33.6924C5.04553 33.3864 5.25542 33.0965 5.48862 32.8258C5.92389 32.2709 6.53759 31.4945 7.29049 30.5396L8.41788 28.8868L9.04921 27.9672C9.15901 27.8104 9.26881 27.6496 9.38057 27.4868C9.49233 27.3241 9.57663 27.1457 9.68447 26.9712L10.9726 24.7713L11.3079 24.1948C11.4236 23.9988 11.504 23.8027 11.6118 23.5909L12.2157 22.3459C12.4118 21.9244 12.6216 21.5107 12.8216 21.1009C12.9157 20.9048 13.0294 20.697 13.1078 20.4891L13.3529 19.8696L14.2901 17.5167C14.3626 17.3207 14.445 17.1462 14.5077 16.9579C14.5705 16.7697 14.6234 16.5854 14.6803 16.4011L15.0136 15.3364L15.6155 13.4248L16.2959 10.6014C16.3641 10.2472 16.4625 9.89957 16.59 9.56219Z",
                    fill: "black"
                }, void 0, false, {
                    fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const MagnifyingGlassIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "69",
        height: "64",
        viewBox: "0 0 69 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M30.7985 7.81582C30.3025 7.65493 30.3025 6.97332 30.7985 6.81243L33.7099 5.869C34.3499 5.66134 34.9314 5.31147 35.4083 4.84712C35.8852 4.38277 36.2444 3.8167 36.4575 3.19377L37.4269 0.362042C37.5923 -0.12064 38.2927 -0.12064 38.458 0.362042L39.4275 3.19524C39.6409 3.81805 40.0004 4.38393 40.4776 4.84802C40.9547 5.31212 41.5364 5.66168 42.1765 5.869L45.0864 6.81243C45.195 6.84711 45.2896 6.9143 45.3567 7.00439C45.4237 7.09448 45.4598 7.20288 45.4598 7.31412C45.4598 7.42536 45.4237 7.53376 45.3567 7.62386C45.2896 7.71395 45.195 7.78113 45.0864 7.81582L42.175 8.75924C41.5352 8.96675 40.9538 9.3164 40.4769 9.78049C40 10.2446 39.6407 10.8104 39.4275 11.433L38.458 14.2662C38.4224 14.3719 38.3533 14.4639 38.2608 14.5292C38.1682 14.5944 38.0568 14.6296 37.9425 14.6296C37.8282 14.6296 37.7168 14.5944 37.6242 14.5292C37.5316 14.4639 37.4626 14.3719 37.4269 14.2662L36.4575 11.433C36.2442 10.8104 35.8849 10.2446 35.408 9.78049C34.9311 9.3164 34.3497 8.96676 33.7099 8.75924L30.7985 7.81582Z",
                fill: "#4086F3"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.1227 57.1849C10.6267 57.024 10.6267 56.3424 11.1227 56.1815L14.0341 55.2381C14.6741 55.0304 15.2556 54.6806 15.7325 54.2162C16.2094 53.7518 16.5686 53.1858 16.7817 52.5629L17.7511 49.7311C17.9165 49.2484 18.6169 49.2484 18.7822 49.7311L19.7517 52.5643C19.9651 53.1871 20.3246 53.753 20.8018 54.2171C21.279 54.6812 21.8606 55.0308 22.5008 55.2381L25.4107 56.1815C25.5193 56.2162 25.6138 56.2834 25.6809 56.3735C25.7479 56.4636 25.7841 56.572 25.7841 56.6832C25.7841 56.7944 25.7479 56.9028 25.6809 56.9929C25.6138 57.083 25.5193 57.1502 25.4107 57.1849L22.4993 58.1283C21.8594 58.3358 21.278 58.6855 20.8011 59.1496C20.3242 59.6137 19.9649 60.1794 19.7517 60.8021L18.7822 63.6353C18.7466 63.741 18.6776 63.833 18.585 63.8983C18.4924 63.9635 18.381 63.9987 18.2667 63.9987C18.1524 63.9987 18.041 63.9635 17.9484 63.8983C17.8558 63.833 17.7868 63.741 17.7511 63.6353L16.7817 60.8021C16.5684 60.1794 16.2092 59.6137 15.7323 59.1496C15.2554 58.6855 14.674 58.3358 14.0341 58.1283L11.1227 57.1849Z",
                fill: "#4086F3"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M53.7542 47.3119C53.2582 47.151 53.2582 46.4694 53.7542 46.3085L56.6656 45.365C57.3056 45.1574 57.8871 44.8075 58.364 44.3432C58.8409 43.8788 59.2001 43.3127 59.4132 42.6898L60.3826 39.8581C60.548 39.3754 61.2484 39.3754 61.4137 39.8581L62.3832 42.6913C62.5966 43.3141 62.9561 43.88 63.4333 44.3441C63.9104 44.8082 64.4921 45.1577 65.1322 45.365L68.0421 46.3085C68.1507 46.3431 68.2453 46.4103 68.3124 46.5004C68.3794 46.5905 68.4155 46.6989 68.4155 46.8102C68.4155 46.9214 68.3794 47.0298 68.3124 47.1199C68.2453 47.21 68.1507 47.2772 68.0421 47.3119L65.1307 48.2553C64.4909 48.4628 63.9095 48.8124 63.4326 49.2765C62.9557 49.7406 62.5964 50.3064 62.3832 50.929L61.4137 53.7622C61.3781 53.8679 61.309 53.96 61.2164 54.0252C61.1239 54.0905 61.0125 54.1256 60.8982 54.1256C60.7839 54.1256 60.6725 54.0905 60.5799 54.0252C60.4873 53.96 60.4183 53.8679 60.3826 53.7622L59.4132 50.929C59.1999 50.3064 58.8406 49.7406 58.3637 49.2765C57.8868 48.8124 57.3054 48.4628 56.6656 48.2553L53.7542 47.3119Z",
                fill: "#4086F3"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.6138 38.382C14.4538 37.9082 11.4092 36.4788 8.94887 34.087C5.91896 31.1413 4.21819 27.1919 4.15955 22.9671C4.10111 18.7418 5.6922 14.7466 8.63966 11.7173C14.7237 5.46379 24.7627 5.32409 31.0182 11.4056C34.0482 14.3517 35.749 18.301 35.8073 22.526C35.8657 26.7509 34.2749 30.7461 31.3271 33.7754C27.6357 37.569 22.4878 39.113 17.6138 38.382ZM22.1949 8.15753C17.6464 7.47551 12.8441 8.91561 9.39961 12.4555C6.64976 15.2816 5.16495 19.0098 5.21957 22.9516C5.27368 26.8939 6.86087 30.5787 9.68809 33.3274C12.5151 36.0765 16.2439 37.5598 20.1878 37.5046C24.1311 37.4498 27.8178 35.8629 30.5679 33.0364C33.3177 30.2103 34.8023 26.4825 34.7479 22.5403C34.6938 18.598 33.1066 14.9132 30.2794 12.1645C27.9842 9.93361 25.1427 8.5996 22.1949 8.15753Z",
                fill: "#0A429A"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M48.1967 47.1548C47.4783 47.9693 46.2356 48.0478 45.4207 47.3299L30.6367 34.3081C30.4969 34.1848 30.4833 33.9713 30.6067 33.8315L32.3219 31.886C32.4424 31.7494 32.6493 31.7329 32.79 31.8486L47.9713 44.3361C48.8301 45.0429 48.9326 46.3205 48.1967 47.1548Z",
                fill: "#0A429A"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.7451 37.5211C14.5851 37.0473 11.5402 35.618 9.08018 33.2261C6.05028 30.2804 4.34951 26.331 4.29078 22.1059C4.23234 17.8806 5.82342 13.8854 8.77089 10.8561C14.8549 4.60259 24.8939 4.46288 31.1494 10.5444C34.1791 13.4906 35.8802 17.4398 35.9386 21.6648C35.9969 25.8897 34.4061 29.8849 31.4584 32.9142C27.7671 36.7084 22.6192 38.2521 17.7451 37.5211ZM22.3263 7.29692C17.7778 6.6149 12.9755 8.055 9.53102 11.5949C6.78087 14.4211 5.29636 18.1491 5.35097 22.091C5.40508 26.0333 6.99228 29.718 9.8195 32.4668C12.6465 35.2159 16.3753 36.6992 20.3192 36.6439C24.2625 36.5892 27.9492 35.0023 30.6993 32.1758C33.4491 29.3496 34.9337 25.6219 34.8793 21.6797C34.8252 17.7374 33.238 14.0526 30.4108 11.3039C28.1158 9.07261 25.2741 7.73898 22.3263 7.29692Z",
                fill: "#4086F3"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M48.523 46.7701L48.3987 46.9111C47.8379 47.5469 46.8679 47.6084 46.2316 47.0479L30.5102 33.2003L32.6644 30.7564L48.3862 44.6042C49.0223 45.1644 49.0835 46.1344 48.523 46.7701Z",
                fill: "#4086F3"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.71529 21.6937C7.70489 21.6946 7.68461 21.5197 7.65705 21.2008C7.64057 21.0415 7.62669 20.8462 7.63246 20.6187C7.63539 20.3914 7.6239 20.1317 7.65576 19.8464C7.66766 19.7028 7.67971 19.5532 7.69259 19.398C7.70696 19.2422 7.73914 19.0824 7.76339 18.9156C7.80557 18.5803 7.89638 18.2315 7.98253 17.8621C8.18332 17.1309 8.46938 16.344 8.86613 15.5625C9.27312 14.7859 9.74902 14.0964 10.2289 13.5092C10.48 13.2248 10.7119 12.9485 10.9607 12.7198C11.0825 12.6035 11.1941 12.4845 11.3128 12.3824C11.432 12.282 11.5468 12.1853 11.6571 12.0925C11.8709 11.9013 12.0896 11.76 12.2731 11.6262C12.455 11.4897 12.6223 11.3876 12.762 11.3089C13.0377 11.1467 13.1923 11.0614 13.1974 11.0706C13.2027 11.0796 13.0582 11.1818 12.7936 11.3584C12.6597 11.4445 12.4985 11.5527 12.3225 11.6949C12.145 11.8347 11.9331 11.9801 11.7258 12.1748C11.6189 12.2688 11.5074 12.3671 11.3916 12.469C11.2761 12.572 11.168 12.692 11.0493 12.8089C10.8071 13.0389 10.5816 13.3152 10.3362 13.5981C9.86824 14.183 9.40222 14.8656 9.00029 15.6322C8.60851 16.4035 8.32246 17.1788 8.11667 17.8989C8.02822 18.2628 7.93363 18.6066 7.88669 18.9369C7.86006 19.1012 7.82498 19.259 7.80802 19.4126C7.79196 19.566 7.77673 19.7135 7.76205 19.8555C7.72362 20.1372 7.72784 20.3943 7.71684 20.6195C7.70308 20.8452 7.70817 21.0393 7.71576 21.1981C7.72524 21.516 7.72569 21.6928 7.71529 21.6937Z",
                fill: "#E0E0E0"
            }, void 0, false, {
                fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/principal/dprm/[access_token]/_components/quick-actions-section.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)");
var React = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof process !== "undefined" && process.env && ("TURBOPACK compile-time value", "development") === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node = "undefined" !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if ("undefined" !== "undefined" && this._optimizeForSpeed) //TURBOPACK unreachable
        ;
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        //TURBOPACK unreachable
        ;
        var sheet;
        var insertionPoint;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || "undefined" === "undefined") {
            var sheet = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : this._serverSheet;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else //TURBOPACK unreachable
        {
            var tag;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if ("TURBOPACK compile-time truthy", 1) {
            this._serverSheet.deleteRule(index);
            return;
        }
        //TURBOPACK unreachable
        ;
        var tag;
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if ("TURBOPACK compile-time truthy", 1) {
            return this._serverSheet.cssRules;
        }
        //TURBOPACK unreachable
        ;
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if ("TURBOPACK compile-time truthy", 1) {
        css = sanitize(css);
    }
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if ("undefined" !== "undefined" && !this._fromServer) //TURBOPACK unreachable
        ;
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState(function() {
        return rootRegistry || configuredRegistry || createStyleRegistry();
    }), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        registry.add(props);
        return null;
    }
    //TURBOPACK unreachable
    ;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
exports.StyleRegistry = StyleRegistry;
exports.createStyleRegistry = createStyleRegistry;
exports.style = JSXStyle;
exports.useStyleRegistry = useStyleRegistry;
}),
"[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)").style;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>ArrowUpRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M7 7h10v10",
            key: "1tivn9"
        }
    ],
    [
        "path",
        {
            d: "M7 17 17 7",
            key: "1vkiza"
        }
    ]
];
const ArrowUpRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-up-right", __iconNode);
;
 //# sourceMappingURL=arrow-up-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowUpRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-pen-line.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>FilePenLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",
            key: "142zxg"
        }
    ],
    [
        "path",
        {
            d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
            key: "2t3380"
        }
    ],
    [
        "path",
        {
            d: "M8 18h1",
            key: "13wk12"
        }
    ]
];
const FilePenLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("file-pen-line", __iconNode);
;
 //# sourceMappingURL=file-pen-line.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-pen-line.js [app-ssr] (ecmascript) <export default as FilePenLine>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilePenLine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-pen-line.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-x.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>FileX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "m14.5 12.5-5 5",
            key: "b62r18"
        }
    ],
    [
        "path",
        {
            d: "m9.5 12.5 5 5",
            key: "1rk7el"
        }
    ]
];
const FileX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("file-x", __iconNode);
;
 //# sourceMappingURL=file-x.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-x.js [app-ssr] (ecmascript) <export default as FileX>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileX",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-x.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Lightbulb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
            key: "1gvzjb"
        }
    ],
    [
        "path",
        {
            d: "M9 18h6",
            key: "x1upvd"
        }
    ],
    [
        "path",
        {
            d: "M10 22h4",
            key: "ceow96"
        }
    ]
];
const Lightbulb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("lightbulb", __iconNode);
;
 //# sourceMappingURL=lightbulb.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lightbulb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_8f1041ad._.js.map