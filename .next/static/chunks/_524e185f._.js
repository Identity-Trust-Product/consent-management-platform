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
        dataPrincipalId: "User ID:",
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
"[project]/lib/types/languages.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/languages.ts [app-client] (ecmascript)");
;
;
function getLanguageName(code) {
    let preferNative = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const lang = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][code];
    return preferNative ? lang.nativeName : lang.name;
}
function isRTL(code) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][code].rtl;
}
function getLanguageInfo(code) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][code];
}
function getAllLanguages() {
    return Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"]);
}
function isValidLanguageCode(code) {
    return code in __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants/ui.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * UI Constants
 * All UI-related constants including breakpoints, dimensions, and UI configuration
 */ /**
 * Responsive breakpoints
 */ __turbopack_context__.s([
    "BREAKPOINTS",
    ()=>BREAKPOINTS,
    "MOBILE_BREAKPOINT",
    ()=>MOBILE_BREAKPOINT,
    "SIDEBAR",
    ()=>SIDEBAR,
    "SIDEBAR_COOKIE_MAX_AGE",
    ()=>SIDEBAR_COOKIE_MAX_AGE,
    "SIDEBAR_COOKIE_NAME",
    ()=>SIDEBAR_COOKIE_NAME,
    "SIDEBAR_KEYBOARD_SHORTCUT",
    ()=>SIDEBAR_KEYBOARD_SHORTCUT,
    "SIDEBAR_WIDTH",
    ()=>SIDEBAR_WIDTH,
    "SIDEBAR_WIDTH_ICON",
    ()=>SIDEBAR_WIDTH_ICON,
    "SIDEBAR_WIDTH_MOBILE",
    ()=>SIDEBAR_WIDTH_MOBILE
]);
const BREAKPOINTS = {
    MOBILE: 768
};
const MOBILE_BREAKPOINT = BREAKPOINTS.MOBILE;
const SIDEBAR = {
    COOKIE_NAME: "sidebar_state",
    COOKIE_MAX_AGE: 60 * 60 * 24 * 7,
    WIDTH: "16rem",
    WIDTH_MOBILE: "18rem",
    WIDTH_ICON: "3rem",
    KEYBOARD_SHORTCUT: "b"
};
const SIDEBAR_COOKIE_NAME = SIDEBAR.COOKIE_NAME;
const SIDEBAR_COOKIE_MAX_AGE = SIDEBAR.COOKIE_MAX_AGE;
const SIDEBAR_WIDTH = SIDEBAR.WIDTH;
const SIDEBAR_WIDTH_MOBILE = SIDEBAR.WIDTH_MOBILE;
const SIDEBAR_WIDTH_ICON = SIDEBAR.WIDTH_ICON;
const SIDEBAR_KEYBOARD_SHORTCUT = SIDEBAR.KEYBOARD_SHORTCUT;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils/notice-translations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "getAvailableNoticeLanguages",
    ()=>getAvailableNoticeLanguages,
    "getBaseEntityTranslation",
    ()=>getBaseEntityTranslation,
    "getBusinessProcessTranslation",
    ()=>getBusinessProcessTranslation,
    "getUserAttributeTranslation",
    ()=>getUserAttributeTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/types/languages.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/languages.ts [app-client] (ecmascript)");
;
function getBusinessProcessTranslation(translations, languageCode, fallbackData) {
    // Try to get translation for requested language
    if (translations && typeof translations === "object") {
        const translation = translations[languageCode];
        if (translation) {
            return {
                name: translation.name || fallbackData.name,
                grantDescription: translation.grantDescription || fallbackData.grantDescription,
                revokeDescription: translation.revokeDescription || fallbackData.revokeDescription,
                reconsentDescription: translation.reconsentDescription || fallbackData.reconsentDescription
            };
        }
    }
    // Fallback to English
    return fallbackData;
}
function getBaseEntityTranslation(translations, languageCode, fallbackData) {
    // Try to get translation for requested language
    if (translations && typeof translations === "object") {
        const translation = translations[languageCode];
        if (translation) {
            return {
                name: translation.name || fallbackData.name,
                description: translation.description || fallbackData.description
            };
        }
    }
    // Fallback to English
    return fallbackData;
}
function getUserAttributeTranslation(translations, languageCode, fallbackName) {
    // Try to get translation for requested language
    if (translations && typeof translations === "object") {
        const translation = translations[languageCode];
        if (translation && translation.name) {
            return translation.name;
        }
    }
    // Fallback to English
    return fallbackName;
}
function getAvailableNoticeLanguages(businessProcess) {
    const languages = [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LANGUAGE"]
    ];
    if (businessProcess.supportedLanguages && Array.isArray(businessProcess.supportedLanguages)) {
        // Filter out duplicates and English (already added)
        const additionalLanguages = businessProcess.supportedLanguages.filter((lang)=>lang !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LANGUAGE"]);
        languages.push(...additionalLanguages);
    }
    return languages;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils/speech-readout-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "prepareNoticeReadoutContent",
    ()=>prepareNoticeReadoutContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$notice$2d$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/notice-translations.ts [app-client] (ecmascript)");
;
function prepareNoticeReadoutContent(notice, translate, currentLanguage) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const sections = [];
    // Get translated business process content
    const translatedBP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$notice$2d$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBusinessProcessTranslation"])(notice.businessProcess.translations, currentLanguage, {
        name: notice.businessProcess.name,
        grantDescription: notice.businessProcess.grantDescription,
        revokeDescription: notice.businessProcess.revokeDescription,
        reconsentDescription: notice.businessProcess.reconsentDescription
    });
    // Process consent purposes and their processing purposes
    const consentPurposes = notice.businessProcess.consentPurposes || [];
    if (options.skipConsentPurpose) {
        // Flatten processing purposes and create sections for each
        consentPurposes.forEach((consentPurpose)=>{
            if (consentPurpose.processingPurposes && consentPurpose.processingPurposes.length > 0) {
                consentPurpose.processingPurposes.forEach((pp)=>{
                    const ppSection = buildProcessingPurposeSection(pp, currentLanguage, translate);
                    sections.push(ppSection);
                });
            }
        });
    } else {
        consentPurposes.forEach((consentPurpose)=>{
            const consentPurposeData = buildConsentPurposeContent(consentPurpose, currentLanguage, translate);
            sections.push(consentPurposeData);
        });
    }
    return {
        title: translate('CONSENT NOTICE'),
        subtitle: buildNoticeSubtitle(notice, translatedBP.name, translate, options.brandName),
        description: translatedBP.grantDescription || '',
        sections,
        rights: buildRightsText(translate),
        cta: translate('Do you agree to provide consent?')
    };
}
/**
 * Builds the notice subtitle text
 */ function buildNoticeSubtitle(notice, translatedBPName, translate, brandName) {
    const brand = brandName || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.DATA_FIDUCIARY_NAME || "Brand";
    return translate('{{brand_name}} is seeking your consent for {{title}}', {
        brand_name: brand,
        title: translatedBPName
    });
}
/**
 * Builds content for a single processing purpose as a section (for skipConsentPurpose mode)
 */ function buildProcessingPurposeSection(pp, currentLanguage, translate) {
    const translatedPP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$notice$2d$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseEntityTranslation"])(pp.translations, currentLanguage, {
        name: pp.name,
        description: pp.description
    });
    const parts = [];
    if (translatedPP.description) {
        parts.push(translatedPP.description);
    }
    // Add user attributes if available
    if (pp.userAttributes && pp.userAttributes.length > 0) {
        const attributes = pp.userAttributes.map((attr)=>{
            const translatedUA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$notice$2d$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserAttributeTranslation"])(attr.translations, currentLanguage, attr.name);
            return translatedUA;
        }).join(', ');
        parts.push("".concat(translate('Attributes Linked'), ": ").concat(attributes));
    }
    return {
        title: "".concat(translate('Purpose Sub Master'), ": ").concat(translatedPP.name),
        content: parts.join('\n\n')
    };
}
/**
 * Builds consent purpose content with processing purposes
 */ function buildConsentPurposeContent(consentPurpose, currentLanguage, translate) {
    const translatedCP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$notice$2d$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseEntityTranslation"])(consentPurpose.translations, currentLanguage, {
        name: consentPurpose.name,
        description: consentPurpose.description
    });
    const parts = [
        translatedCP.description || ''
    ];
    // Add processing purposes under this consent purpose
    if (consentPurpose.processingPurposes && consentPurpose.processingPurposes.length > 0) {
        consentPurpose.processingPurposes.forEach((pp)=>{
            // Get translated processing purpose
            const translatedPP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$notice$2d$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseEntityTranslation"])(pp.translations, currentLanguage, {
                name: pp.name,
                description: pp.description
            });
            parts.push("\n\n".concat(translate('Purpose Sub Master'), ": ").concat(translatedPP.name));
            if (translatedPP.description) {
                parts.push("\n\n".concat(translatedPP.description));
            }
            // Add user attributes if available
            if (pp.userAttributes && pp.userAttributes.length > 0) {
                const attributes = pp.userAttributes.map((attr)=>{
                    const translatedUA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$notice$2d$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserAttributeTranslation"])(attr.translations, currentLanguage, attr.name);
                    return translatedUA;
                }).join(', ');
                parts.push("\n\n".concat(translate('Attributes Linked'), ": ").concat(attributes));
            }
        });
    }
    return {
        title: "".concat(translate('Major Purpose Master'), ": ").concat(translatedCP.name),
        content: parts.join('')
    };
}
/**
 * Builds the rights information text
 */ function buildRightsText(translate) {
    return [
        translate("You have the right to:"),
        translate("(1) Access information about your personal data"),
        translate("(2) Correct and update your personal data"),
        translate("(3) Erase your personal data"),
        translate("(4) Seek redress of any grievance regarding processing of your personal data"),
        translate("If you have any questions about the processing of your personal data, contact the Data Protection Officer.")
    ].join("\n");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/actions/data:66f0dc [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40b7859f1e87f7206f724f14ce47ee5928d4ed0e31":"generateDprmLinkForNotice"},"actions/dprm.ts",""] */ __turbopack_context__.s([
    "generateDprmLinkForNotice",
    ()=>generateDprmLinkForNotice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generateDprmLinkForNotice = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40b7859f1e87f7206f724f14ce47ee5928d4ed0e31", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateDprmLinkForNotice"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZHBybS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuLyoqXHJcbiAqIE9wZW4gQmhhcmF0IERpZ2l0YWwgQ29uc2VudCBieSBJRGZ5XHJcbiAqIENvcHlyaWdodCAoYykgMjAyNSBCYWxkb3IgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCAoSURmeSlcclxuICogXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFByaXZ5IFB1YmxpYyBMaWNlbnNlLlxyXG4gKiBTZWUgTElDRU5TRS5tZCBmb3IgdGhlIGZ1bGwgdGVybXMgb2YgdXNlLlxyXG4gKiBcclxuICogVW5hdXRob3JpemVkIGNvcHlpbmcsIG1vZGlmaWNhdGlvbiwgZGlzdHJpYnV0aW9uLCBvciBjb21tZXJjaWFsIHVzZVxyXG4gKiBpcyBzdHJpY3RseSBwcm9oaWJpdGVkIHdpdGhvdXQgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uIGZyb20gSURmeS5cclxuICovXHJcblxyXG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVEcHJtTGluayBhcyBnZW5lcmF0ZURwcm1MaW5rU2VydmljZSB9IGZyb20gXCJAL2xpYi9zZXJ2aWNlcy9kcHJtLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdmVyaWZ5RHBybVRva2VuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XHJcbmltcG9ydCB7IE5PVElDRV9NRVRBREFUQV9LRVlTIH0gZnJvbSBcIkAvbGliL2NvbnN0YW50cy9ub3RpY2UtbWV0YWRhdGFcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZURwcm1MaW5rKFxyXG4gIGRhdGFQcmluY2lwYWxJZDogc3RyaW5nLFxyXG4gIGV4cGlyZXNBdD86IERhdGVcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFRPRE86IEFkZCBSQkFDIGNoZWNrIGhlcmVcclxuICAgIGNvbnN0IGRwcm1VcmwgPSBhd2FpdCBnZW5lcmF0ZURwcm1MaW5rU2VydmljZShkYXRhUHJpbmNpcGFsSWQsIGV4cGlyZXNBdCk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1cmw6IGRwcm1VcmwgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdlbmVyYXRlRHBybUxpbmsgYWN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGdlbmVyYXRlIERQUk0gbGlua1wiIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSGVscGVyIHRvIGdlbmVyYXRlIERQUk0gbGluayBmb3IgYSBub3RpY2VcclxuICogSGFuZGxlcyBsb2dpYyBmb3IgbWlub3IvbWFqb3IgZGF0YSBwcmluY2lwYWxzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVEcHJtTGlua0Zvck5vdGljZShub3RpY2U6IHtcclxuICBkYXRhUHJpbmNpcGFsSWQ6IHN0cmluZztcclxuICBmb3JNaW5vcjogYm9vbGVhbjtcclxuICBtZXRhZGF0YTogeyBrZXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9W107XHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgbGV0IHRhcmdldFByaW5jaXBhbElkID0gbm90aWNlLmRhdGFQcmluY2lwYWxJZDtcclxuICAgIGxldCBxdWVyeVBhcmFtcyA9IFwiXCI7XHJcblxyXG4gICAgaWYgKG5vdGljZS5mb3JNaW5vcikge1xyXG4gICAgICBjb25zdCBtYWpvck1ldGFkYXRhID0gbm90aWNlLm1ldGFkYXRhLmZpbmQoXHJcbiAgICAgICAgKG0pID0+IG0ua2V5ID09PSBOT1RJQ0VfTUVUQURBVEFfS0VZUy5NQUpPUl9EQVRBX1BSSU5DSVBBTF9JRFxyXG4gICAgICApO1xyXG4gICAgICBpZiAobWFqb3JNZXRhZGF0YT8udmFsdWUpIHtcclxuICAgICAgICB0YXJnZXRQcmluY2lwYWxJZCA9IG1ham9yTWV0YWRhdGEudmFsdWU7XHJcbiAgICAgICAgcXVlcnlQYXJhbXMgPSBgP21pbm9yX2RhdGFfcHJpbmNpcGFsX2lkPSR7bm90aWNlLmRhdGFQcmluY2lwYWxJZH1gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2VuZXJhdGVEcHJtTGluayhcclxuICAgICAgdGFyZ2V0UHJpbmNpcGFsSWQsXHJcbiAgICAgIG5ldyBEYXRlKERhdGUubm93KCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCkgLy8gNyBkYXlzXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChyZXN1bHQuc3VjY2VzcyAmJiByZXN1bHQudXJsKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVybDogcmVzdWx0LnVybCArIHF1ZXJ5UGFyYW1zIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdlbmVyYXRlRHBybUxpbmtGb3JOb3RpY2UgYWN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGdlbmVyYXRlIERQUk0gbGluayBmb3Igbm90aWNlXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgbWlub3JzIGFzc29jaWF0ZWQgd2l0aCBhIG1ham9yIGRhdGEgcHJpbmNpcGFsXHJcbiAqIFVzZWQgaW4gdGhlIERQUk0gcG9ydGFsIG5hdmJhciB0byBzd2l0Y2ggYWNjb3VudHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNaW5vcnNGb3JNYWpvcih0b2tlbjogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIDEuIFZlcmlmeSB0aGUgRFBSTSB0b2tlblxyXG4gICAgY29uc3QgdG9rZW5QYXlsb2FkID0gYXdhaXQgdmVyaWZ5RHBybVRva2VuKHRva2VuKTtcclxuICAgIGNvbnN0IG1ham9yRGF0YVByaW5jaXBhbElkID0gdG9rZW5QYXlsb2FkLmRhdGFfcHJpbmNpcGFsX2lkIGFzIHN0cmluZztcclxuXHJcbiAgICAvLyAyLiBHZXQgdW5pcXVlIG1pbm9yIGRhdGEgcHJpbmNpcGFsIElEcyBmcm9tIGNvbnNlbnRzXHJcbiAgICBjb25zdCBtaW5vcnMgPSBhd2FpdCBwcmlzbWEuY29uc2VudC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgbWFqb3JEYXRhUHJpbmNpcGFsSWQ6IG1ham9yRGF0YVByaW5jaXBhbElkLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBkYXRhUHJpbmNpcGFsSWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRpc3RpbmN0OiBbXCJkYXRhUHJpbmNpcGFsSWRcIl0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBkYXRhOiBtaW5vcnMubWFwKChtKSA9PiBtLmRhdGFQcmluY2lwYWxJZCksXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBnZXRNaW5vcnNGb3JNYWpvcjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBtaW5vcnNcIixcclxuICAgICAgZGF0YTogW10sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBidXNpbmVzcyBwcm9jZXNzZXMgdGhhdCBhIGRhdGEgcHJpbmNpcGFsIGhhcyBjb25zZW50cyBmb3JcclxuICogVXNlZCBhY3Jvc3MgRFBSTSBwb3J0YWwgKGdyaWV2YW5jZSBmb3JtcywgZXRjLilcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCdXNpbmVzc1Byb2Nlc3Nlc0ZvclByaW5jaXBhbChcclxuICB0b2tlbjogc3RyaW5nLFxyXG4gIG1pbm9yRGF0YVByaW5jaXBhbElkPzogc3RyaW5nXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyAxLiBWZXJpZnkgdGhlIERQUk0gdG9rZW5cclxuICAgIGNvbnN0IHRva2VuUGF5bG9hZCA9IGF3YWl0IHZlcmlmeURwcm1Ub2tlbih0b2tlbik7XHJcbiAgICBjb25zdCBkYXRhUHJpbmNpcGFsSWQgPSB0b2tlblBheWxvYWQuZGF0YV9wcmluY2lwYWxfaWQgYXMgc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldFByaW5jaXBhbElkID0gbWlub3JEYXRhUHJpbmNpcGFsSWQgfHwgZGF0YVByaW5jaXBhbElkO1xyXG5cclxuICAgIC8vIDIuIEdldCB1bmlxdWUgYnVzaW5lc3MgcHJvY2Vzc2VzIGZyb20gYWN0aXZlIGNvbnNlbnRzXHJcbiAgICBjb25zdCBjb25zZW50cyA9IGF3YWl0IHByaXNtYS5jb25zZW50LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBkYXRhUHJpbmNpcGFsSWQ6IHRhcmdldFByaW5jaXBhbElkLFxyXG4gICAgICAgIC4uLihtaW5vckRhdGFQcmluY2lwYWxJZCAmJiB7IG1ham9yRGF0YVByaW5jaXBhbElkOiBkYXRhUHJpbmNpcGFsSWQgfSksXHJcbiAgICAgICAgc3RhdHVzOiBcImFjY2VwdGVkXCIsXHJcbiAgICAgICAgaXNFeHBpcmVkOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgYnVzaW5lc3NQcm9jZXNzSWQ6IHRydWUsXHJcbiAgICAgICAgYnVzaW5lc3NQcm9jZXNzOiB7XHJcbiAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHB1YmxpY0lkOiB0cnVlLFxyXG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBkaXN0aW5jdDogW1wiYnVzaW5lc3NQcm9jZXNzSWRcIl0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgb3V0IG51bGwgYnVzaW5lc3MgcHJvY2Vzc2VzXHJcbiAgICBjb25zdCBidXNpbmVzc1Byb2Nlc3NlcyA9IGNvbnNlbnRzXHJcbiAgICAgIC5tYXAoKGMpID0+IGMuYnVzaW5lc3NQcm9jZXNzKVxyXG4gICAgICAuZmlsdGVyKChicCk6IGJwIGlzIE5vbk51bGxhYmxlPHR5cGVvZiBicD4gPT4gYnAgIT09IG51bGwpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIGRhdGE6IGJ1c2luZXNzUHJvY2Vzc2VzLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0QnVzaW5lc3NQcm9jZXNzZXNGb3JQcmluY2lwYWw6XCIsIGVycm9yKTtcclxuXHJcbiAgICBpZiAoZXJyb3IubWVzc2FnZSA9PT0gXCJUT0tFTl9FWFBJUkVEXCIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIllvdXIgc2Vzc2lvbiBoYXMgZXhwaXJlZFwiLCBkYXRhOiBbXSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvci5tZXNzYWdlID09PSBcIklOVkFMSURfVE9LRU5cIikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW52YWxpZCBhY2Nlc3MgdG9rZW5cIiwgZGF0YTogW10gfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGJ1c2luZXNzIHByb2Nlc3Nlc1wiLFxyXG4gICAgICBkYXRhOiBbXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoia1NBbUNzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/actions/data:3eb3f9 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"782d10778ca8c2f9d993997b0012ae5b54844b787f":"handleConsentAcceptance"},"actions/notice-consent.ts",""] */ __turbopack_context__.s([
    "handleConsentAcceptance",
    ()=>handleConsentAcceptance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var handleConsentAcceptance = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("782d10778ca8c2f9d993997b0012ae5b54844b787f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "handleConsentAcceptance"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbm90aWNlLWNvbnNlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcbi8qKlxyXG4gKiBPcGVuIEJoYXJhdCBEaWdpdGFsIENvbnNlbnQgYnkgSURmeVxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjUgQmFsZG9yIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQgKElEZnkpXHJcbiAqIFxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBQcml2eSBQdWJsaWMgTGljZW5zZS5cclxuICogU2VlIExJQ0VOU0UubWQgZm9yIHRoZSBmdWxsIHRlcm1zIG9mIHVzZS5cclxuICogXHJcbiAqIFVuYXV0aG9yaXplZCBjb3B5aW5nLCBtb2RpZmljYXRpb24sIGRpc3RyaWJ1dGlvbiwgb3IgY29tbWVyY2lhbCB1c2VcclxuICogaXMgc3RyaWN0bHkgcHJvaGliaXRlZCB3aXRob3V0IHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbiBmcm9tIElEZnkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQnVzaW5lc3NQcm9jZXNzUnVsZVNlbGVjdGlvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvbm90aWNlXCI7XHJcbmltcG9ydCB7IE5PVElDRV9NRVRBREFUQV9LRVlTIH0gZnJvbSBcIkAvbGliL2NvbnN0YW50cy9ub3RpY2UtbWV0YWRhdGFcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlRHBybUxpbmtGb3JOb3RpY2UgfSBmcm9tIFwiQC9hY3Rpb25zL2Rwcm1cIjtcclxuaW1wb3J0IHtcclxuICBOb3RpY2VDb25zZW50QWNjZXB0YW5jZVJlc3VsdCxcclxuICBzdWJtaXROb3RpY2UsXHJcbiAgdmFsaWRhdGVOb3RpY2VTdWJtaXNzaW9uLFxyXG59IGZyb20gXCJAL2xpYi9zZXJ2aWNlcy9ub3RpY2VzLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdHJpZ2dlcldlYmhvb2tFdmVudCB9IGZyb20gXCJAL2xpYi9zZXJ2aWNlcy93ZWJob29rLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2ViaG9va0V2ZW50VHlwZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNvbnNlbnRBY2NlcHRhbmNlKFxyXG4gIG5vdGljZVB1YmxpY0lkOiBzdHJpbmcsXHJcbiAgZGF0YVByaW5jaXBhbElkOiBzdHJpbmcsXHJcbiAgc2VsZWN0aW9uczogQnVzaW5lc3NQcm9jZXNzUnVsZVNlbGVjdGlvbltdLFxyXG4gIGxhbmd1YWdlOiBzdHJpbmcgPSBcImVuXCJcclxuKTogUHJvbWlzZTxOb3RpY2VDb25zZW50QWNjZXB0YW5jZVJlc3VsdD4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWYWxpZGF0ZSB0aGUgbm90aWNlIHN1Ym1pc3Npb25cclxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSBhd2FpdCB2YWxpZGF0ZU5vdGljZVN1Ym1pc3Npb24oXHJcbiAgICAgIG5vdGljZVB1YmxpY0lkLFxyXG4gICAgICBzZWxlY3Rpb25zXHJcbiAgICApO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5pc1ZhbGlkKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJWYWxpZGF0aW9uIGZhaWxlZDpcIiwgdmFsaWRhdGlvblJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yczogdmFsaWRhdGlvblJlc3VsdC5lcnJvcnMsXHJcbiAgICAgICAgbWVzc2FnZTogXCJOb3RpY2Ugc3VibWlzc2lvbiB2YWxpZGF0aW9uIGZhaWxlZFwiLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN1Ym1pdCB0aGUgbm90aWNlICh0aGlzIHdpbGwgaGFuZGxlIGRhdGFiYXNlIHVwZGF0ZXMgYW5kIGFzeW5jIGNvbnNlbnQgY3JlYXRpb24pXHJcbiAgICBjb25zdCBzdWJtaXRSZXN1bHQgPSBhd2FpdCBzdWJtaXROb3RpY2Uobm90aWNlUHVibGljSWQsIHNlbGVjdGlvbnMsIGxhbmd1YWdlKTtcclxuXHJcbiAgICBpZiAoIXN1Ym1pdFJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiBzdWJtaXRSZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2VuZCBjb25maXJtYXRpb24gZW1haWxcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZW1haWxTZXJ2aWNlIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCJAL2xpYi9zZXJ2aWNlcy9lbWFpbC9lbWFpbC1zZXJ2aWNlXCJcclxuICAgICAgKTtcclxuICAgICAgLy8gR2V0IG5vdGljZSBkZXRhaWxzIGZvciBlbWFpbFxyXG4gICAgICBjb25zdCBub3RpY2UgPSBhd2FpdCBwcmlzbWEubm90aWNlLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IHB1YmxpY0lkOiBub3RpY2VQdWJsaWNJZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGJ1c2luZXNzUHJvY2VzczogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSB9IH0sXHJcbiAgICAgICAgICBtZXRhZGF0YTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChub3RpY2UpIHtcclxuICAgICAgICAvLyBFeHRyYWN0IGVtYWlsIGFuZCBuYW1lIGZyb20gbWV0YWRhdGFcclxuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IG5vdGljZS5tZXRhZGF0YS5yZWR1Y2UoXHJcbiAgICAgICAgICAoYWNjLCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGFjY1tpdGVtLmtleV0gPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHt9IGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBwcmluY2lwYWxFbWFpbCA9IG1ldGFkYXRhLmVtYWlsIHx8IG1ldGFkYXRhLkVtYWlsO1xyXG4gICAgICAgIGNvbnN0IHByaW5jaXBhbE5hbWUgPSBtZXRhZGF0YS5uYW1lIHx8IG1ldGFkYXRhLk5hbWUgfHwgXCJVc2VyXCI7XHJcblxyXG4gICAgICAgIGlmIChwcmluY2lwYWxFbWFpbCkge1xyXG4gICAgICAgICAgY29uc3QgZHBybUxpbmtSZXN1bHQgPSBhd2FpdCBnZW5lcmF0ZURwcm1MaW5rRm9yTm90aWNlKG5vdGljZSk7XHJcblxyXG4gICAgICAgICAgaWYgKGRwcm1MaW5rUmVzdWx0LnN1Y2Nlc3MgJiYgZHBybUxpbmtSZXN1bHQudXJsKSB7XHJcbiAgICAgICAgICAgIGVtYWlsU2VydmljZS5zZW5kVGVtcGxhdGVkRW1haWwoe1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlTmFtZTogXCJjb25zZW50LWdyYW50ZWQtY29uZmlybWF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgdG86IHsgZW1haWw6IHByaW5jaXBhbEVtYWlsLCBuYW1lOiBwcmluY2lwYWxOYW1lIH0sXHJcbiAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICBkcHJtTGluazogZHBybUxpbmtSZXN1bHQudXJsLFxyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlbWFpbEVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBjb25zZW50IGNvbmZpcm1hdGlvbiBlbWFpbDpcIiwgZW1haWxFcnJvcik7XHJcbiAgICAgIC8vIERvbid0IGZhaWwgdGhlIGNvbnNlbnQgYWNjZXB0YW5jZSBpZiBlbWFpbCBmYWlsc1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdWJtaXRSZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBoYW5kbGluZyBjb25zZW50IGFjY2VwdGFuY2U6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb2RlOiBcIlBST0NFU1NJTkdfRVJST1JcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIHByb2Nlc3MgY29uc2VudCBhY2NlcHRhbmNlXCIsXHJcbiAgICAgICAgICBkZXRhaWxzOiB7XHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVDb25zZW50UmVqZWN0aW9uKFxyXG4gIG5vdGljZVB1YmxpY0lkOiBzdHJpbmcsXHJcbiAgZGF0YVByaW5jaXBhbElkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFVwZGF0ZSBub3RpY2Ugc3RhdHVzIHRvIGNvbXBsZXRlZCBhbmQgY29uc2VudF9zdGF0dXMgdG8gcmVqZWN0ZWRcclxuICAgIGNvbnN0IHVwZGF0ZWROb3RpY2UgPSBhd2FpdCBwcmlzbWEubm90aWNlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IHB1YmxpY0lkOiBub3RpY2VQdWJsaWNJZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzOiBcImNvbXBsZXRlZFwiLFxyXG4gICAgICAgIGNvbnNlbnRTdGF0dXM6IFwicmVqZWN0ZWRcIixcclxuICAgICAgICBtYXJrQ29tcGxldGVkVGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgfSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIGJ1c2luZXNzUHJvY2Vzczoge1xyXG4gICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvZGU6IHRydWUsXHJcbiAgICAgICAgICAgIHZlcnNpb246IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUcmlnZ2VyIE5PVElDRV9TVUJNSVRURUQgd2ViaG9vayB3aXRoIHJlamVjdGVkIHN0YXR1cyAoZmlyZS1hbmQtZm9yZ2V0KVxyXG4gICAgdHJpZ2dlcldlYmhvb2tFdmVudChXZWJob29rRXZlbnRUeXBlLk5PVElDRV9TVUJNSVRURUQsIHtcclxuICAgICAgbm90aWNlX2lkOiB1cGRhdGVkTm90aWNlLnB1YmxpY0lkLFxyXG4gICAgICBkYXRhX3ByaW5jaXBhbF9pZDogdXBkYXRlZE5vdGljZS5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgIHJlZmVyZW5jZV9pZDogdXBkYXRlZE5vdGljZS5yZWZlcmVuY2VJZCxcclxuICAgICAgYnVzaW5lc3NfcHJvY2Vzc19jb2RlOiB1cGRhdGVkTm90aWNlLmJ1c2luZXNzUHJvY2Vzcy5jb2RlLFxyXG4gICAgICBidXNpbmVzc19wcm9jZXNzX25hbWU6IHVwZGF0ZWROb3RpY2UuYnVzaW5lc3NQcm9jZXNzLm5hbWUsXHJcbiAgICAgIGJ1c2luZXNzX3Byb2Nlc3NfdmVyc2lvbjogdXBkYXRlZE5vdGljZS5idXNpbmVzc1Byb2Nlc3MudmVyc2lvbixcclxuICAgICAgc3RhdHVzOiBcInN1Ym1pdHRlZFwiLFxyXG4gICAgICBjb25zZW50X3N0YXR1czogXCJyZWplY3RlZFwiLFxyXG4gICAgICByZXNvdXJjZV90eXBlOiBcImdyYW50X25vdGljZVwiLFxyXG4gICAgICBpbnNlcnRlZF9hdDogdXBkYXRlZE5vdGljZS5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgdXBkYXRlZF9hdDogdXBkYXRlZE5vdGljZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgc3VibWl0dGVkX3NlbGVjdGlvbnM6IFtdLCAvLyBObyBzZWxlY3Rpb25zIGZvciByZWplY3Rpb25cclxuICAgIH0pLmNhdGNoKCh3ZWJob29rRXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICBcIkZhaWxlZCB0byB0cmlnZ2VyIE5PVElDRV9TVUJNSVRURUQgd2ViaG9vayBmb3IgcmVqZWN0aW9uOlwiLFxyXG4gICAgICAgIHdlYmhvb2tFcnJvclxyXG4gICAgICApO1xyXG4gICAgICAvLyBEb24ndCBmYWlsIHRoZSByZWplY3Rpb24gaWYgd2ViaG9vayBmYWlsc1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaGFuZGxpbmcgY29uc2VudCByZWplY3Rpb246XCIsIGVycm9yKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBwcm9jZXNzIGNvbnNlbnQgcmVqZWN0aW9uXCIpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjBTQXdCc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/actions/data:556739 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"603aadb3a3b4198b7553439891b1f6966c8ecf5735":"handleConsentRejection"},"actions/notice-consent.ts",""] */ __turbopack_context__.s([
    "handleConsentRejection",
    ()=>handleConsentRejection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var handleConsentRejection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("603aadb3a3b4198b7553439891b1f6966c8ecf5735", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "handleConsentRejection"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbm90aWNlLWNvbnNlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcbi8qKlxyXG4gKiBPcGVuIEJoYXJhdCBEaWdpdGFsIENvbnNlbnQgYnkgSURmeVxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjUgQmFsZG9yIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQgKElEZnkpXHJcbiAqIFxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBQcml2eSBQdWJsaWMgTGljZW5zZS5cclxuICogU2VlIExJQ0VOU0UubWQgZm9yIHRoZSBmdWxsIHRlcm1zIG9mIHVzZS5cclxuICogXHJcbiAqIFVuYXV0aG9yaXplZCBjb3B5aW5nLCBtb2RpZmljYXRpb24sIGRpc3RyaWJ1dGlvbiwgb3IgY29tbWVyY2lhbCB1c2VcclxuICogaXMgc3RyaWN0bHkgcHJvaGliaXRlZCB3aXRob3V0IHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbiBmcm9tIElEZnkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQnVzaW5lc3NQcm9jZXNzUnVsZVNlbGVjdGlvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvbm90aWNlXCI7XHJcbmltcG9ydCB7IE5PVElDRV9NRVRBREFUQV9LRVlTIH0gZnJvbSBcIkAvbGliL2NvbnN0YW50cy9ub3RpY2UtbWV0YWRhdGFcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlRHBybUxpbmtGb3JOb3RpY2UgfSBmcm9tIFwiQC9hY3Rpb25zL2Rwcm1cIjtcclxuaW1wb3J0IHtcclxuICBOb3RpY2VDb25zZW50QWNjZXB0YW5jZVJlc3VsdCxcclxuICBzdWJtaXROb3RpY2UsXHJcbiAgdmFsaWRhdGVOb3RpY2VTdWJtaXNzaW9uLFxyXG59IGZyb20gXCJAL2xpYi9zZXJ2aWNlcy9ub3RpY2VzLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdHJpZ2dlcldlYmhvb2tFdmVudCB9IGZyb20gXCJAL2xpYi9zZXJ2aWNlcy93ZWJob29rLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2ViaG9va0V2ZW50VHlwZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNvbnNlbnRBY2NlcHRhbmNlKFxyXG4gIG5vdGljZVB1YmxpY0lkOiBzdHJpbmcsXHJcbiAgZGF0YVByaW5jaXBhbElkOiBzdHJpbmcsXHJcbiAgc2VsZWN0aW9uczogQnVzaW5lc3NQcm9jZXNzUnVsZVNlbGVjdGlvbltdLFxyXG4gIGxhbmd1YWdlOiBzdHJpbmcgPSBcImVuXCJcclxuKTogUHJvbWlzZTxOb3RpY2VDb25zZW50QWNjZXB0YW5jZVJlc3VsdD4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWYWxpZGF0ZSB0aGUgbm90aWNlIHN1Ym1pc3Npb25cclxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSBhd2FpdCB2YWxpZGF0ZU5vdGljZVN1Ym1pc3Npb24oXHJcbiAgICAgIG5vdGljZVB1YmxpY0lkLFxyXG4gICAgICBzZWxlY3Rpb25zXHJcbiAgICApO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC5pc1ZhbGlkKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJWYWxpZGF0aW9uIGZhaWxlZDpcIiwgdmFsaWRhdGlvblJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yczogdmFsaWRhdGlvblJlc3VsdC5lcnJvcnMsXHJcbiAgICAgICAgbWVzc2FnZTogXCJOb3RpY2Ugc3VibWlzc2lvbiB2YWxpZGF0aW9uIGZhaWxlZFwiLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN1Ym1pdCB0aGUgbm90aWNlICh0aGlzIHdpbGwgaGFuZGxlIGRhdGFiYXNlIHVwZGF0ZXMgYW5kIGFzeW5jIGNvbnNlbnQgY3JlYXRpb24pXHJcbiAgICBjb25zdCBzdWJtaXRSZXN1bHQgPSBhd2FpdCBzdWJtaXROb3RpY2Uobm90aWNlUHVibGljSWQsIHNlbGVjdGlvbnMsIGxhbmd1YWdlKTtcclxuXHJcbiAgICBpZiAoIXN1Ym1pdFJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiBzdWJtaXRSZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2VuZCBjb25maXJtYXRpb24gZW1haWxcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZW1haWxTZXJ2aWNlIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCJAL2xpYi9zZXJ2aWNlcy9lbWFpbC9lbWFpbC1zZXJ2aWNlXCJcclxuICAgICAgKTtcclxuICAgICAgLy8gR2V0IG5vdGljZSBkZXRhaWxzIGZvciBlbWFpbFxyXG4gICAgICBjb25zdCBub3RpY2UgPSBhd2FpdCBwcmlzbWEubm90aWNlLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IHB1YmxpY0lkOiBub3RpY2VQdWJsaWNJZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGJ1c2luZXNzUHJvY2VzczogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSB9IH0sXHJcbiAgICAgICAgICBtZXRhZGF0YTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChub3RpY2UpIHtcclxuICAgICAgICAvLyBFeHRyYWN0IGVtYWlsIGFuZCBuYW1lIGZyb20gbWV0YWRhdGFcclxuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IG5vdGljZS5tZXRhZGF0YS5yZWR1Y2UoXHJcbiAgICAgICAgICAoYWNjLCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGFjY1tpdGVtLmtleV0gPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHt9IGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBwcmluY2lwYWxFbWFpbCA9IG1ldGFkYXRhLmVtYWlsIHx8IG1ldGFkYXRhLkVtYWlsO1xyXG4gICAgICAgIGNvbnN0IHByaW5jaXBhbE5hbWUgPSBtZXRhZGF0YS5uYW1lIHx8IG1ldGFkYXRhLk5hbWUgfHwgXCJVc2VyXCI7XHJcblxyXG4gICAgICAgIGlmIChwcmluY2lwYWxFbWFpbCkge1xyXG4gICAgICAgICAgY29uc3QgZHBybUxpbmtSZXN1bHQgPSBhd2FpdCBnZW5lcmF0ZURwcm1MaW5rRm9yTm90aWNlKG5vdGljZSk7XHJcblxyXG4gICAgICAgICAgaWYgKGRwcm1MaW5rUmVzdWx0LnN1Y2Nlc3MgJiYgZHBybUxpbmtSZXN1bHQudXJsKSB7XHJcbiAgICAgICAgICAgIGVtYWlsU2VydmljZS5zZW5kVGVtcGxhdGVkRW1haWwoe1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlTmFtZTogXCJjb25zZW50LWdyYW50ZWQtY29uZmlybWF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgdG86IHsgZW1haWw6IHByaW5jaXBhbEVtYWlsLCBuYW1lOiBwcmluY2lwYWxOYW1lIH0sXHJcbiAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICBkcHJtTGluazogZHBybUxpbmtSZXN1bHQudXJsLFxyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlbWFpbEVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBjb25zZW50IGNvbmZpcm1hdGlvbiBlbWFpbDpcIiwgZW1haWxFcnJvcik7XHJcbiAgICAgIC8vIERvbid0IGZhaWwgdGhlIGNvbnNlbnQgYWNjZXB0YW5jZSBpZiBlbWFpbCBmYWlsc1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdWJtaXRSZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBoYW5kbGluZyBjb25zZW50IGFjY2VwdGFuY2U6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb2RlOiBcIlBST0NFU1NJTkdfRVJST1JcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIHByb2Nlc3MgY29uc2VudCBhY2NlcHRhbmNlXCIsXHJcbiAgICAgICAgICBkZXRhaWxzOiB7XHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVDb25zZW50UmVqZWN0aW9uKFxyXG4gIG5vdGljZVB1YmxpY0lkOiBzdHJpbmcsXHJcbiAgZGF0YVByaW5jaXBhbElkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFVwZGF0ZSBub3RpY2Ugc3RhdHVzIHRvIGNvbXBsZXRlZCBhbmQgY29uc2VudF9zdGF0dXMgdG8gcmVqZWN0ZWRcclxuICAgIGNvbnN0IHVwZGF0ZWROb3RpY2UgPSBhd2FpdCBwcmlzbWEubm90aWNlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IHB1YmxpY0lkOiBub3RpY2VQdWJsaWNJZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3RhdHVzOiBcImNvbXBsZXRlZFwiLFxyXG4gICAgICAgIGNvbnNlbnRTdGF0dXM6IFwicmVqZWN0ZWRcIixcclxuICAgICAgICBtYXJrQ29tcGxldGVkVGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgfSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIGJ1c2luZXNzUHJvY2Vzczoge1xyXG4gICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvZGU6IHRydWUsXHJcbiAgICAgICAgICAgIHZlcnNpb246IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUcmlnZ2VyIE5PVElDRV9TVUJNSVRURUQgd2ViaG9vayB3aXRoIHJlamVjdGVkIHN0YXR1cyAoZmlyZS1hbmQtZm9yZ2V0KVxyXG4gICAgdHJpZ2dlcldlYmhvb2tFdmVudChXZWJob29rRXZlbnRUeXBlLk5PVElDRV9TVUJNSVRURUQsIHtcclxuICAgICAgbm90aWNlX2lkOiB1cGRhdGVkTm90aWNlLnB1YmxpY0lkLFxyXG4gICAgICBkYXRhX3ByaW5jaXBhbF9pZDogdXBkYXRlZE5vdGljZS5kYXRhUHJpbmNpcGFsSWQsXHJcbiAgICAgIHJlZmVyZW5jZV9pZDogdXBkYXRlZE5vdGljZS5yZWZlcmVuY2VJZCxcclxuICAgICAgYnVzaW5lc3NfcHJvY2Vzc19jb2RlOiB1cGRhdGVkTm90aWNlLmJ1c2luZXNzUHJvY2Vzcy5jb2RlLFxyXG4gICAgICBidXNpbmVzc19wcm9jZXNzX25hbWU6IHVwZGF0ZWROb3RpY2UuYnVzaW5lc3NQcm9jZXNzLm5hbWUsXHJcbiAgICAgIGJ1c2luZXNzX3Byb2Nlc3NfdmVyc2lvbjogdXBkYXRlZE5vdGljZS5idXNpbmVzc1Byb2Nlc3MudmVyc2lvbixcclxuICAgICAgc3RhdHVzOiBcInN1Ym1pdHRlZFwiLFxyXG4gICAgICBjb25zZW50X3N0YXR1czogXCJyZWplY3RlZFwiLFxyXG4gICAgICByZXNvdXJjZV90eXBlOiBcImdyYW50X25vdGljZVwiLFxyXG4gICAgICBpbnNlcnRlZF9hdDogdXBkYXRlZE5vdGljZS5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgdXBkYXRlZF9hdDogdXBkYXRlZE5vdGljZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgc3VibWl0dGVkX3NlbGVjdGlvbnM6IFtdLCAvLyBObyBzZWxlY3Rpb25zIGZvciByZWplY3Rpb25cclxuICAgIH0pLmNhdGNoKCh3ZWJob29rRXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICBcIkZhaWxlZCB0byB0cmlnZ2VyIE5PVElDRV9TVUJNSVRURUQgd2ViaG9vayBmb3IgcmVqZWN0aW9uOlwiLFxyXG4gICAgICAgIHdlYmhvb2tFcnJvclxyXG4gICAgICApO1xyXG4gICAgICAvLyBEb24ndCBmYWlsIHRoZSByZWplY3Rpb24gaWYgd2ViaG9vayBmYWlsc1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaGFuZGxpbmcgY29uc2VudCByZWplY3Rpb246XCIsIGVycm9yKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBwcm9jZXNzIGNvbnNlbnQgcmVqZWN0aW9uXCIpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InlTQXNIc0IifQ==
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
"[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlreadySubmittedPage",
    ()=>AlreadySubmittedPage
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$66f0dc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:66f0dc [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function AlreadySubmittedPage(param) {
    let { noticeId, dataPrincipalId, submittedAt, onClose, accessToken, forMinor = false, metadata = [] } = param;
    const formatDate = (date)=>{
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }).format(date);
    };
    const handleManageConsents = async ()=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$66f0dc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateDprmLinkForNotice"])({
                dataPrincipalId,
                forMinor,
                metadata
            });
            if (result.success && result.url) {
                // Redirect to the DPRM link
                window.location.href = result.url;
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(result.error || "Failed to generate DPRM link");
            }
        } catch (error) {
            console.error("Error generating DPRM link:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to generate DPRM link");
        }
    };
    const handleViewReceipt = ()=>{
        if (!accessToken) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Access token not available");
            return;
        }
        // Open receipt in new window with access token for validation
        const printUrl = "/cms/principal/receipt/".concat(noticeId, "/").concat(accessToken);
        window.open(printUrl, "_blank", "width=1024,height=768");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md mx-auto p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-lg rounded-lg border p-8 text-center bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "w-16 h-16 text-blue-500 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900 mb-2",
                                children: "Already Submitted"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "This notice has already been submitted and processed."
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-500 space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Notice ID: ",
                                            noticeId
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Status: Completed"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    submittedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-2 mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Submitted on: ",
                                                    formatDate(submittedAt)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleManageConsents,
                                        className: "w-full",
                                        children: "Manage your Consents"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleViewReceipt,
                                        variant: "outline",
                                        className: "w-full",
                                        children: "View Consent Receipt"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this),
                                    onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: onClose,
                                        className: "w-full",
                                        variant: "outline",
                                        style: {
                                            backgroundColor: "#1e40af",
                                            color: "white"
                                        },
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/already-submitted-page.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_c = AlreadySubmittedPage;
var _c;
__turbopack_context__.k.register(_c, "AlreadySubmittedPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/cms/principal/notice/[notice_id]/_components/success-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SuccessPage",
    ()=>SuccessPage
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$notice$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/notice-icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$66f0dc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:66f0dc [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$consent$2d$receipt$2d$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/consent-receipt-translations.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function SuccessPage(param) {
    let { title, description, dataPrincipalId, noticePublicId, accessToken, forMinor = false, metadata = [], lang = "en" } = param;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$consent$2d$receipt$2d$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReceiptTranslation"])(lang);
    const displayTitle = title || t.successTitle;
    const displayDescription = description || t.successDesc;
    const handleManageConsents = async ()=>{
        if (!dataPrincipalId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("User ID not available");
            return;
        }
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$66f0dc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateDprmLinkForNotice"])({
                dataPrincipalId,
                forMinor,
                metadata
            });
            if (result.success && result.url) {
                // Redirect to the DPRM link
                window.location.href = result.url;
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(result.error || "Failed to generate DPRM link");
            }
        } catch (error) {
            console.error("Error generating DPRM link:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to generate DPRM link");
        }
    };
    const handleViewReceipt = ()=>{
        if (!noticePublicId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Notice ID not available");
            return;
        }
        if (!accessToken) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Access token not available");
            return;
        }
        // Open receipt in new window with access token for validation
        const printUrl = "/cms/principal/receipt/".concat(noticePublicId, "/").concat(accessToken, "?lang=").concat(lang);
        window.open(printUrl, "_blank", "width=1024,height=768");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col items-center min-h-screen justify-center pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$notice$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrantNoticeIcon"], {}, void 0, false, {
                fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/success-page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[45rem] text-center -mt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold",
                        children: displayTitle
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/success-page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg pb-4",
                        children: displayDescription
                    }, void 0, false, {
                        fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/success-page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex items-center justify-center gap-4",
                        children: [
                            dataPrincipalId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleManageConsents,
                                children: t.manageConsentsBtn
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/success-page.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            noticePublicId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: handleViewReceipt,
                                children: t.viewReceiptBtn
                            }, void 0, false, {
                                fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/success-page.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/success-page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/success-page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/principal/notice/[notice_id]/_components/success-page.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c = SuccessPage;
var _c;
__turbopack_context__.k.register(_c, "SuccessPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/contexts/high-contrast-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HighContrastProvider",
    ()=>HighContrastProvider,
    "useHighContrast",
    ()=>useHighContrast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 *
 * This software is licensed under the Privy Public License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const HighContrastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    isHighContrast: false,
    setIsHighContrast: ()=>{}
});
function HighContrastProvider(param) {
    let { children } = param;
    _s();
    const [isHighContrast, setIsHighContrast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HighContrastProvider.useEffect": ()=>{
            if (isHighContrast) {
                document.body.classList.add("high-contrast");
            } else {
                document.body.classList.remove("high-contrast");
            }
        }
    }["HighContrastProvider.useEffect"], [
        isHighContrast
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HighContrastContext.Provider, {
        value: {
            isHighContrast,
            setIsHighContrast
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/high-contrast-context.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(HighContrastProvider, "ATHhluUwtuX4xJIyoQ3OzuOpxxg=");
_c = HighContrastProvider;
function useHighContrast() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(HighContrastContext);
    if (context === undefined) {
        throw new Error("useHighContrast must be used within a HighContrastProvider");
    }
    return context;
}
_s1(useHighContrast, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "HighContrastProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/contexts/notice-language-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoticeLanguageProvider",
    ()=>NoticeLanguageProvider,
    "useNoticeLanguage",
    ()=>useNoticeLanguage
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/types/languages.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/languages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const NoticeLanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function NoticeLanguageProvider(param) {
    let { children, availableLanguages, defaultLanguage = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LANGUAGE"] } = param;
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Get language from URL or use default
    const urlLanguage = searchParams.get("language");
    const initialLanguage = urlLanguage && availableLanguages.includes(urlLanguage) ? urlLanguage : defaultLanguage;
    const [currentLanguage, setCurrentLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialLanguage);
    // Update URL when language changes
    const setLanguage = (lang)=>{
        if (availableLanguages.includes(lang)) {
            const params = new URLSearchParams(searchParams.toString());
            params.set("language", lang);
            router.push("".concat(pathname, "?").concat(params.toString()));
            setCurrentLanguage(lang);
        }
    };
    // Sync with URL changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NoticeLanguageProvider.useEffect": ()=>{
            if (urlLanguage && availableLanguages.includes(urlLanguage)) {
                setCurrentLanguage(urlLanguage);
            }
        }
    }["NoticeLanguageProvider.useEffect"], [
        urlLanguage,
        availableLanguages
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NoticeLanguageContext.Provider, {
        value: {
            currentLanguage,
            availableLanguages,
            setLanguage
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/notice-language-context.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(NoticeLanguageProvider, "d8HEXCPsCAL8oLQmTmAr53GZSAQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NoticeLanguageProvider;
function useNoticeLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NoticeLanguageContext);
    if (!context) {
        throw new Error("useNoticeLanguage must be used within NoticeLanguageProvider");
    }
    return context;
}
_s1(useNoticeLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "NoticeLanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-mobile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/ui.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useIsMobile.useEffect": ()=>{
            const mql = window.matchMedia("(max-width: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOBILE_BREAKPOINT"] - 1, "px)"));
            const onChange = {
                "useIsMobile.useEffect.onChange": ()=>{
                    setIsMobile(window.innerWidth < __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOBILE_BREAKPOINT"]);
                }
            }["useIsMobile.useEffect.onChange"];
            mql.addEventListener("change", onChange);
            setIsMobile(window.innerWidth < __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOBILE_BREAKPOINT"]);
            return ({
                "useIsMobile.useEffect": ()=>mql.removeEventListener("change", onChange)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return !!isMobile;
}
_s(useIsMobile, "D6B2cPXNCaIbeOx+abFr1uxLRM0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-notice-translation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * Notice Translation Hook
 * 
 * Provides translation functionality for notice views using the converted
 * gettext translations in JSON format.
 * 
 * Usage:
 *   const { t } = useNoticeTranslation();
 *   <button>{t("Submit")}</button>
 *   <p>{t("%{brand_name} is seeking your consent for %{title}", { brand_name: "Acme", title: "Data Processing" })}</p>
 */ __turbopack_context__.s([
    "useNoticeTranslation",
    ()=>useNoticeTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/notice-language-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
// Translation cache to avoid re-importing on every render
const translationCache = new Map();
/**
 * Load translations for a specific language
 */ /**
 * Load translations for a specific language and namespace
 */ function loadTranslations(languageCode, namespace) {
    const cacheKey = "".concat(languageCode, ":").concat(namespace);
    // Check cache first
    if (translationCache.has(cacheKey)) {
        return translationCache.get(cacheKey);
    }
    try {
        // Dynamically require the translation file
        // Note: In Next.js/Webpack, dynamic requires must be statically analyzable to some extent
        // We assume standard structure: @/translations/{lang}/{namespace}.json
        let translations;
        try {
            translations = __turbopack_context__.f({
                "@/translations/as/common.json": {
                    id: ()=>"[project]/translations/as/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/as/common.json (json)")
                },
                "@/translations/as/dprm.json": {
                    id: ()=>"[project]/translations/as/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/as/dprm.json (json)")
                },
                "@/translations/bn/common.json": {
                    id: ()=>"[project]/translations/bn/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/bn/common.json (json)")
                },
                "@/translations/bn/dprm.json": {
                    id: ()=>"[project]/translations/bn/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/bn/dprm.json (json)")
                },
                "@/translations/brx/common.json": {
                    id: ()=>"[project]/translations/brx/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/brx/common.json (json)")
                },
                "@/translations/brx/dprm.json": {
                    id: ()=>"[project]/translations/brx/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/brx/dprm.json (json)")
                },
                "@/translations/doi/common.json": {
                    id: ()=>"[project]/translations/doi/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/doi/common.json (json)")
                },
                "@/translations/doi/dprm.json": {
                    id: ()=>"[project]/translations/doi/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/doi/dprm.json (json)")
                },
                "@/translations/en/common.json": {
                    id: ()=>"[project]/translations/en/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/en/common.json (json)")
                },
                "@/translations/en/dprm.json": {
                    id: ()=>"[project]/translations/en/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/en/dprm.json (json)")
                },
                "@/translations/gu/common.json": {
                    id: ()=>"[project]/translations/gu/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/gu/common.json (json)")
                },
                "@/translations/gu/dprm.json": {
                    id: ()=>"[project]/translations/gu/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/gu/dprm.json (json)")
                },
                "@/translations/hi/common.json": {
                    id: ()=>"[project]/translations/hi/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/hi/common.json (json)")
                },
                "@/translations/hi/dprm.json": {
                    id: ()=>"[project]/translations/hi/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/hi/dprm.json (json)")
                },
                "@/translations/kn/common.json": {
                    id: ()=>"[project]/translations/kn/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/kn/common.json (json)")
                },
                "@/translations/kn/dprm.json": {
                    id: ()=>"[project]/translations/kn/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/kn/dprm.json (json)")
                },
                "@/translations/kok/common.json": {
                    id: ()=>"[project]/translations/kok/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/kok/common.json (json)")
                },
                "@/translations/kok/dprm.json": {
                    id: ()=>"[project]/translations/kok/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/kok/dprm.json (json)")
                },
                "@/translations/ks/common.json": {
                    id: ()=>"[project]/translations/ks/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/ks/common.json (json)")
                },
                "@/translations/ks/dprm.json": {
                    id: ()=>"[project]/translations/ks/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/ks/dprm.json (json)")
                },
                "@/translations/mai/common.json": {
                    id: ()=>"[project]/translations/mai/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/mai/common.json (json)")
                },
                "@/translations/mai/dprm.json": {
                    id: ()=>"[project]/translations/mai/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/mai/dprm.json (json)")
                },
                "@/translations/ml/common.json": {
                    id: ()=>"[project]/translations/ml/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/ml/common.json (json)")
                },
                "@/translations/ml/dprm.json": {
                    id: ()=>"[project]/translations/ml/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/ml/dprm.json (json)")
                },
                "@/translations/mni/common.json": {
                    id: ()=>"[project]/translations/mni/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/mni/common.json (json)")
                },
                "@/translations/mni/dprm.json": {
                    id: ()=>"[project]/translations/mni/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/mni/dprm.json (json)")
                },
                "@/translations/mr/common.json": {
                    id: ()=>"[project]/translations/mr/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/mr/common.json (json)")
                },
                "@/translations/mr/dprm.json": {
                    id: ()=>"[project]/translations/mr/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/mr/dprm.json (json)")
                },
                "@/translations/ne/common.json": {
                    id: ()=>"[project]/translations/ne/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/ne/common.json (json)")
                },
                "@/translations/ne/dprm.json": {
                    id: ()=>"[project]/translations/ne/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/ne/dprm.json (json)")
                },
                "@/translations/or/common.json": {
                    id: ()=>"[project]/translations/or/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/or/common.json (json)")
                },
                "@/translations/or/dprm.json": {
                    id: ()=>"[project]/translations/or/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/or/dprm.json (json)")
                },
                "@/translations/pa/common.json": {
                    id: ()=>"[project]/translations/pa/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/pa/common.json (json)")
                },
                "@/translations/pa/dprm.json": {
                    id: ()=>"[project]/translations/pa/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/pa/dprm.json (json)")
                },
                "@/translations/sa/common.json": {
                    id: ()=>"[project]/translations/sa/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/sa/common.json (json)")
                },
                "@/translations/sa/dprm.json": {
                    id: ()=>"[project]/translations/sa/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/sa/dprm.json (json)")
                },
                "@/translations/sat/common.json": {
                    id: ()=>"[project]/translations/sat/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/sat/common.json (json)")
                },
                "@/translations/sat/dprm.json": {
                    id: ()=>"[project]/translations/sat/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/sat/dprm.json (json)")
                },
                "@/translations/sd/common.json": {
                    id: ()=>"[project]/translations/sd/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/sd/common.json (json)")
                },
                "@/translations/sd/dprm.json": {
                    id: ()=>"[project]/translations/sd/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/sd/dprm.json (json)")
                },
                "@/translations/ta/common.json": {
                    id: ()=>"[project]/translations/ta/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/ta/common.json (json)")
                },
                "@/translations/ta/dprm.json": {
                    id: ()=>"[project]/translations/ta/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/ta/dprm.json (json)")
                },
                "@/translations/te/common.json": {
                    id: ()=>"[project]/translations/te/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/te/common.json (json)")
                },
                "@/translations/te/dprm.json": {
                    id: ()=>"[project]/translations/te/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/te/dprm.json (json)")
                },
                "@/translations/ur/common.json": {
                    id: ()=>"[project]/translations/ur/common.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/ur/common.json (json)")
                },
                "@/translations/ur/dprm.json": {
                    id: ()=>"[project]/translations/ur/dprm.json (json)",
                    module: ()=>__turbopack_context__.r("[project]/translations/ur/dprm.json (json)")
                }
            })("@/translations/".concat(languageCode, "/").concat(namespace, ".json"));
        } catch (e) {
            if (namespace !== "common") {
                console.warn("Translation file not found: ".concat(languageCode, "/").concat(namespace, ".json, falling back to common"));
                translations = __turbopack_context__.f({
                    "@/translations/as/common.json": {
                        id: ()=>"[project]/translations/as/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/as/common.json (json)")
                    },
                    "@/translations/bn/common.json": {
                        id: ()=>"[project]/translations/bn/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/bn/common.json (json)")
                    },
                    "@/translations/brx/common.json": {
                        id: ()=>"[project]/translations/brx/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/brx/common.json (json)")
                    },
                    "@/translations/doi/common.json": {
                        id: ()=>"[project]/translations/doi/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/doi/common.json (json)")
                    },
                    "@/translations/en/common.json": {
                        id: ()=>"[project]/translations/en/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/en/common.json (json)")
                    },
                    "@/translations/gu/common.json": {
                        id: ()=>"[project]/translations/gu/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/gu/common.json (json)")
                    },
                    "@/translations/hi/common.json": {
                        id: ()=>"[project]/translations/hi/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/hi/common.json (json)")
                    },
                    "@/translations/kn/common.json": {
                        id: ()=>"[project]/translations/kn/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/kn/common.json (json)")
                    },
                    "@/translations/kok/common.json": {
                        id: ()=>"[project]/translations/kok/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/kok/common.json (json)")
                    },
                    "@/translations/ks/common.json": {
                        id: ()=>"[project]/translations/ks/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/ks/common.json (json)")
                    },
                    "@/translations/mai/common.json": {
                        id: ()=>"[project]/translations/mai/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/mai/common.json (json)")
                    },
                    "@/translations/ml/common.json": {
                        id: ()=>"[project]/translations/ml/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/ml/common.json (json)")
                    },
                    "@/translations/mni/common.json": {
                        id: ()=>"[project]/translations/mni/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/mni/common.json (json)")
                    },
                    "@/translations/mr/common.json": {
                        id: ()=>"[project]/translations/mr/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/mr/common.json (json)")
                    },
                    "@/translations/ne/common.json": {
                        id: ()=>"[project]/translations/ne/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/ne/common.json (json)")
                    },
                    "@/translations/or/common.json": {
                        id: ()=>"[project]/translations/or/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/or/common.json (json)")
                    },
                    "@/translations/pa/common.json": {
                        id: ()=>"[project]/translations/pa/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/pa/common.json (json)")
                    },
                    "@/translations/sa/common.json": {
                        id: ()=>"[project]/translations/sa/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/sa/common.json (json)")
                    },
                    "@/translations/sat/common.json": {
                        id: ()=>"[project]/translations/sat/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/sat/common.json (json)")
                    },
                    "@/translations/sd/common.json": {
                        id: ()=>"[project]/translations/sd/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/sd/common.json (json)")
                    },
                    "@/translations/ta/common.json": {
                        id: ()=>"[project]/translations/ta/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/ta/common.json (json)")
                    },
                    "@/translations/te/common.json": {
                        id: ()=>"[project]/translations/te/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/te/common.json (json)")
                    },
                    "@/translations/ur/common.json": {
                        id: ()=>"[project]/translations/ur/common.json (json)",
                        module: ()=>__turbopack_context__.r("[project]/translations/ur/common.json (json)")
                    }
                })("@/translations/".concat(languageCode, "/common.json"));
            } else {
                throw e;
            }
        }
        const flatTranslations = translations[namespace] || translations;
        translationCache.set(cacheKey, flatTranslations);
        return flatTranslations;
    } catch (error) {
        console.warn("Failed to load translations for ".concat(languageCode, ":").concat(namespace, ":"), error);
        // Fallback to English
        if (languageCode !== "en") {
            return loadTranslations("en", namespace);
        }
        return {};
    }
}
/**
 * Interpolate variables in a translation string
 * Converts {{variable}} placeholders to actual values
 * 
 * @param template - Translation string with {{variable}} placeholders
 * @param variables - Object containing variable values
 * @returns Interpolated string
 */ function interpolate(template, variables) {
    if (!variables) return template;
    return template.replace(/\{\{(\w+)\}\}/g, (match, key)=>{
        var _variables_key;
        return ((_variables_key = variables[key]) === null || _variables_key === void 0 ? void 0 : _variables_key.toString()) || match;
    });
}
function useNoticeTranslation() {
    let namespace = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "common";
    _s();
    const { currentLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeLanguage"])();
    const translations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useNoticeTranslation.useMemo[translations]": ()=>{
            return loadTranslations(currentLanguage, namespace);
        }
    }["useNoticeTranslation.useMemo[translations]"], [
        currentLanguage,
        namespace
    ]);
    /**
   * Translate a key with optional variable interpolation
   * 
   * @param key - Translation key (msgid from PO files)
   * @param variables - Optional variables for interpolation
   * @returns Translated string
   */ const t = (key, variables)=>{
        const translation = translations[key] || key;
        return interpolate(translation, variables);
    };
    /**
   * Check if a translation exists for a key
   */ const hasTranslation = (key)=>{
        return key in translations;
    };
    return {
        t,
        hasTranslation,
        currentLanguage
    };
}
_s(useNoticeTranslation, "SsZoXY1Ahp+gpIlZyEGX8evsKsM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$notice$2d$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNoticeLanguage"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-notice-consent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "useNoticeConsent",
    ()=>useNoticeConsent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useNoticeConsent(notice) {
    _s();
    // Get consent purposes safely (should always be available after view mode processing)
    const consentPurposes = notice.businessProcess.consentPurposes || [];
    // Initialize consent selections
    const [consentSelections, setConsentSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useNoticeConsent.useState": ()=>{
            const initial = {};
            consentPurposes.forEach({
                "useNoticeConsent.useState": (cp)=>{
                    const processingPurposes = {};
                    cp.processingPurposes.forEach({
                        "useNoticeConsent.useState": (pp)=>{
                            // Mandatory processing purposes should be selected by default
                            processingPurposes[pp.id] = pp.mandatory;
                        }
                    }["useNoticeConsent.useState"]);
                    // If any processing purposes are mandatory, the consent purpose should be selected
                    const hasMandatoryProcessingPurposes = cp.processingPurposes.some({
                        "useNoticeConsent.useState.hasMandatoryProcessingPurposes": (pp)=>pp.mandatory
                    }["useNoticeConsent.useState.hasMandatoryProcessingPurposes"]);
                    initial[cp.id] = {
                        consentPurposeId: cp.id,
                        selected: hasMandatoryProcessingPurposes,
                        processingPurposes
                    };
                }
            }["useNoticeConsent.useState"]);
            return initial;
        }
    }["useNoticeConsent.useState"]);
    // Calculate overall selection state
    const overallSelectionState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useNoticeConsent.useMemo[overallSelectionState]": ()=>{
            // Count total processing purposes and selected processing purposes
            let totalProcessingPurposes = 0;
            let selectedProcessingPurposes = 0;
            Object.values(consentSelections).forEach({
                "useNoticeConsent.useMemo[overallSelectionState]": (selection)=>{
                    const ppValues = Object.values(selection.processingPurposes);
                    totalProcessingPurposes += ppValues.length;
                    selectedProcessingPurposes += ppValues.filter(Boolean).length;
                }
            }["useNoticeConsent.useMemo[overallSelectionState]"]);
            if (selectedProcessingPurposes === 0) return "none";
            if (selectedProcessingPurposes === totalProcessingPurposes) return "all";
            return "partial";
        }
    }["useNoticeConsent.useMemo[overallSelectionState]"], [
        consentSelections
    ]);
    // Calculate consent purpose selection state
    const getConsentPurposeSelectionState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNoticeConsent.useCallback[getConsentPurposeSelectionState]": (consentPurposeId)=>{
            const selection = consentSelections[consentPurposeId];
            if (!selection) return "none";
            const processingPurposes = Object.values(selection.processingPurposes);
            const selectedCount = processingPurposes.filter(Boolean).length;
            if (selectedCount === 0) return "none";
            if (selectedCount === processingPurposes.length) return "all";
            return "partial";
        }
    }["useNoticeConsent.useCallback[getConsentPurposeSelectionState]"], [
        consentSelections
    ]);
    // Calculate processing purpose selection state
    const getProcessingPurposeSelectionState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNoticeConsent.useCallback[getProcessingPurposeSelectionState]": (processingPurposeId)=>{
            // Find the consent purpose that contains this processing purpose
            for (const selection of Object.values(consentSelections)){
                if (selection.processingPurposes[processingPurposeId] !== undefined) {
                    return selection.processingPurposes[processingPurposeId] ? "all" : "none";
                }
            }
            return "none";
        }
    }["useNoticeConsent.useCallback[getProcessingPurposeSelectionState]"], [
        consentSelections
    ]);
    // Handle select all toggle
    const handleSelectAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNoticeConsent.useCallback[handleSelectAll]": ()=>{
            const shouldSelectAll = overallSelectionState !== "all";
            setConsentSelections({
                "useNoticeConsent.useCallback[handleSelectAll]": (prev)=>{
                    const updated = {
                        ...prev
                    };
                    Object.keys(updated).forEach({
                        "useNoticeConsent.useCallback[handleSelectAll]": (cpId)=>{
                            const consentPurposeId = parseInt(cpId);
                            // Find the consent purpose data to check for mandatory processing purposes
                            const consentPurpose = consentPurposes.find({
                                "useNoticeConsent.useCallback[handleSelectAll].consentPurpose": (cp)=>cp.id === consentPurposeId
                            }["useNoticeConsent.useCallback[handleSelectAll].consentPurpose"]);
                            const processingPurposes = Object.keys(updated[consentPurposeId].processingPurposes).reduce({
                                "useNoticeConsent.useCallback[handleSelectAll].processingPurposes": (acc, ppId)=>{
                                    const processingPurposeId = parseInt(ppId);
                                    const processingPurpose = consentPurpose === null || consentPurpose === void 0 ? void 0 : consentPurpose.processingPurposes.find({
                                        "useNoticeConsent.useCallback[handleSelectAll].processingPurposes": (pp)=>pp.id === processingPurposeId
                                    }["useNoticeConsent.useCallback[handleSelectAll].processingPurposes"]);
                                    // Keep mandatory processing purposes selected, toggle others
                                    acc[processingPurposeId] = (processingPurpose === null || processingPurpose === void 0 ? void 0 : processingPurpose.mandatory) || shouldSelectAll;
                                    return acc;
                                }
                            }["useNoticeConsent.useCallback[handleSelectAll].processingPurposes"], {});
                            // Check if any processing purposes are selected
                            const hasSelectedProcessingPurposes = Object.values(processingPurposes).some(Boolean);
                            updated[consentPurposeId] = {
                                ...updated[consentPurposeId],
                                selected: hasSelectedProcessingPurposes,
                                processingPurposes
                            };
                        }
                    }["useNoticeConsent.useCallback[handleSelectAll]"]);
                    return updated;
                }
            }["useNoticeConsent.useCallback[handleSelectAll]"]);
        }
    }["useNoticeConsent.useCallback[handleSelectAll]"], [
        overallSelectionState,
        consentPurposes
    ]);
    // Handle consent purpose selection
    const handleConsentPurposeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNoticeConsent.useCallback[handleConsentPurposeChange]": (consentPurposeId, selected)=>{
            // Find the consent purpose data to check for mandatory processing purposes
            const consentPurpose = consentPurposes.find({
                "useNoticeConsent.useCallback[handleConsentPurposeChange].consentPurpose": (cp)=>cp.id === consentPurposeId
            }["useNoticeConsent.useCallback[handleConsentPurposeChange].consentPurpose"]);
            setConsentSelections({
                "useNoticeConsent.useCallback[handleConsentPurposeChange]": (prev)=>{
                    const processingPurposes = Object.keys(prev[consentPurposeId].processingPurposes).reduce({
                        "useNoticeConsent.useCallback[handleConsentPurposeChange].processingPurposes": (acc, ppId)=>{
                            const processingPurposeId = parseInt(ppId);
                            const processingPurpose = consentPurpose === null || consentPurpose === void 0 ? void 0 : consentPurpose.processingPurposes.find({
                                "useNoticeConsent.useCallback[handleConsentPurposeChange].processingPurposes": (pp)=>pp.id === processingPurposeId
                            }["useNoticeConsent.useCallback[handleConsentPurposeChange].processingPurposes"]);
                            // Keep mandatory processing purposes selected, set others based on selection
                            acc[processingPurposeId] = (processingPurpose === null || processingPurpose === void 0 ? void 0 : processingPurpose.mandatory) || selected;
                            return acc;
                        }
                    }["useNoticeConsent.useCallback[handleConsentPurposeChange].processingPurposes"], {});
                    // Check if any processing purposes are selected
                    const hasSelectedProcessingPurposes = Object.values(processingPurposes).some(Boolean);
                    return {
                        ...prev,
                        [consentPurposeId]: {
                            ...prev[consentPurposeId],
                            selected: hasSelectedProcessingPurposes,
                            processingPurposes
                        }
                    };
                }
            }["useNoticeConsent.useCallback[handleConsentPurposeChange]"]);
        }
    }["useNoticeConsent.useCallback[handleConsentPurposeChange]"], [
        consentPurposes
    ]);
    // Handle processing purpose selection
    const handleProcessingPurposeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNoticeConsent.useCallback[handleProcessingPurposeChange]": (consentPurposeId, processingPurposeId, selected)=>{
            // Find the processing purpose data to check if it's mandatory
            const consentPurpose = consentPurposes.find({
                "useNoticeConsent.useCallback[handleProcessingPurposeChange].consentPurpose": (cp)=>cp.id === consentPurposeId
            }["useNoticeConsent.useCallback[handleProcessingPurposeChange].consentPurpose"]);
            const processingPurpose = consentPurpose === null || consentPurpose === void 0 ? void 0 : consentPurpose.processingPurposes.find({
                "useNoticeConsent.useCallback[handleProcessingPurposeChange]": (pp)=>pp.id === processingPurposeId
            }["useNoticeConsent.useCallback[handleProcessingPurposeChange]"]);
            // Prevent unselecting mandatory processing purposes
            if ((processingPurpose === null || processingPurpose === void 0 ? void 0 : processingPurpose.mandatory) && !selected) {
                return;
            }
            setConsentSelections({
                "useNoticeConsent.useCallback[handleProcessingPurposeChange]": (prev)=>{
                    const updated = {
                        ...prev,
                        [consentPurposeId]: {
                            ...prev[consentPurposeId],
                            processingPurposes: {
                                ...prev[consentPurposeId].processingPurposes,
                                [processingPurposeId]: selected
                            }
                        }
                    };
                    // Update consent purpose selection based on processing purposes
                    const processingPurposes = Object.values(updated[consentPurposeId].processingPurposes);
                    const selectedCount = processingPurposes.filter(Boolean).length;
                    updated[consentPurposeId].selected = selectedCount > 0;
                    return updated;
                }
            }["useNoticeConsent.useCallback[handleProcessingPurposeChange]"]);
        }
    }["useNoticeConsent.useCallback[handleProcessingPurposeChange]"], [
        consentPurposes
    ]);
    // Get selected consents (legacy format)
    const getSelectedConsents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNoticeConsent.useCallback[getSelectedConsents]": ()=>{
            return Object.values(consentSelections).filter({
                "useNoticeConsent.useCallback[getSelectedConsents]": (s)=>s.selected
            }["useNoticeConsent.useCallback[getSelectedConsents]"]);
        }
    }["useNoticeConsent.useCallback[getSelectedConsents]"], [
        consentSelections
    ]);
    // Get selected business process rules (new format)
    const getSelectedRules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNoticeConsent.useCallback[getSelectedRules]": ()=>{
            const selectedRules = [];
            // Convert consent-based selections to rule-based selections
            Object.values(consentSelections).forEach({
                "useNoticeConsent.useCallback[getSelectedRules]": (consentSelection)=>{
                    Object.entries(consentSelection.processingPurposes).forEach({
                        "useNoticeConsent.useCallback[getSelectedRules]": (param)=>{
                            let [processingPurposeId, selected] = param;
                            // Find the corresponding rule
                            const rule = notice.businessProcess.businessProcessRules.find({
                                "useNoticeConsent.useCallback[getSelectedRules].rule": (r)=>r.consentPurposeId === consentSelection.consentPurposeId && r.processingPurposeId === parseInt(processingPurposeId)
                            }["useNoticeConsent.useCallback[getSelectedRules].rule"]);
                            if (rule) {
                                selectedRules.push({
                                    ruleId: rule.id,
                                    selected: selected
                                });
                            }
                        }
                    }["useNoticeConsent.useCallback[getSelectedRules]"]);
                }
            }["useNoticeConsent.useCallback[getSelectedRules]"]);
            return selectedRules;
        }
    }["useNoticeConsent.useCallback[getSelectedRules]"], [
        consentSelections,
        notice.businessProcess.businessProcessRules
    ]);
    // Check if at least one selection is made
    const hasSelections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useNoticeConsent.useMemo[hasSelections]": ()=>Object.values(consentSelections).some({
                "useNoticeConsent.useMemo[hasSelections]": (s)=>s.selected
            }["useNoticeConsent.useMemo[hasSelections]"])
    }["useNoticeConsent.useMemo[hasSelections]"], [
        consentSelections
    ]);
    // Check if a consent purpose should be disabled (all processing purposes are mandatory)
    const isConsentPurposeDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNoticeConsent.useCallback[isConsentPurposeDisabled]": (consentPurposeId)=>{
            const consentPurpose = consentPurposes.find({
                "useNoticeConsent.useCallback[isConsentPurposeDisabled].consentPurpose": (cp)=>cp.id === consentPurposeId
            }["useNoticeConsent.useCallback[isConsentPurposeDisabled].consentPurpose"]);
            if (!consentPurpose || consentPurpose.processingPurposes.length === 0) {
                return false;
            }
            // Consent purpose is disabled if ALL its processing purposes are mandatory
            return consentPurpose.processingPurposes.every({
                "useNoticeConsent.useCallback[isConsentPurposeDisabled]": (pp)=>pp.mandatory
            }["useNoticeConsent.useCallback[isConsentPurposeDisabled]"]);
        }
    }["useNoticeConsent.useCallback[isConsentPurposeDisabled]"], [
        consentPurposes
    ]);
    // Check if the overall select all should be disabled (all processing purposes across all consent purposes are mandatory)
    const isOverallSelectDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useNoticeConsent.useMemo[isOverallSelectDisabled]": ()=>{
            const allProcessingPurposes = consentPurposes.flatMap({
                "useNoticeConsent.useMemo[isOverallSelectDisabled].allProcessingPurposes": (cp)=>cp.processingPurposes
            }["useNoticeConsent.useMemo[isOverallSelectDisabled].allProcessingPurposes"]);
            return allProcessingPurposes.length > 0 && allProcessingPurposes.every({
                "useNoticeConsent.useMemo[isOverallSelectDisabled]": (pp)=>pp.mandatory
            }["useNoticeConsent.useMemo[isOverallSelectDisabled]"]);
        }
    }["useNoticeConsent.useMemo[isOverallSelectDisabled]"], [
        consentPurposes
    ]);
    return {
        overallSelectionState,
        getConsentPurposeSelectionState,
        getProcessingPurposeSelectionState,
        hasSelections,
        handleSelectAll,
        handleConsentPurposeChange,
        handleProcessingPurposeChange,
        getSelectedConsents,
        getSelectedRules,
        isConsentPurposeDisabled,
        isOverallSelectDisabled
    };
}
_s(useNoticeConsent, "1ZcoWQGmXpYRXmmN0dPNck551vc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_524e185f._.js.map