module.exports = [
"[project]/actions/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0060c229d5c44aa39a52b0da063b4e763444cd1280":"logout"},"",""] */ __turbopack_context__.s([
    "logout",
    ()=>logout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function logout() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"])({
        redirectTo: "/cms/login"
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    logout
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "0060c229d5c44aa39a52b0da063b4e763444cd1280", null);
}),
"[project]/lib/constants/languages.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/types/languages.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/languages.ts [app-rsc] (ecmascript)");
;
;
function getLanguageName(code, preferNative = false) {
    const lang = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][code];
    return preferNative ? lang.nativeName : lang.name;
}
function isRTL(code) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][code].rtl;
}
function getLanguageInfo(code) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"][code];
}
function getAllLanguages() {
    return Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"]);
}
function isValidLanguageCode(code) {
    return code in __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"];
}
}),
"[project]/lib/schemas/translation-schemas.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "baseTranslationSchema",
    ()=>baseTranslationSchema,
    "bulkUpdateTranslationsSchema",
    ()=>bulkUpdateTranslationsSchema,
    "businessProcessTranslationSchema",
    ()=>businessProcessTranslationSchema,
    "businessProcessTranslationsMapSchema",
    ()=>businessProcessTranslationsMapSchema,
    "deleteTranslationRequestSchema",
    ()=>deleteTranslationRequestSchema,
    "translationsMapSchema",
    ()=>translationsMapSchema,
    "updateTranslationRequestSchema",
    ()=>updateTranslationRequestSchema,
    "userAttributeTranslationSchema",
    ()=>userAttributeTranslationSchema,
    "userAttributeTranslationsMapSchema",
    ()=>userAttributeTranslationsMapSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/types/languages.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/languages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
;
const baseTranslationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Name is required').max(255, 'Name must be less than 255 characters'),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional()
});
const businessProcessTranslationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Name is required').max(255, 'Name must be less than 255 characters'),
    grantDescription: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Grant description is required').max(1000, 'Grant description must be less than 1000 characters'),
    revokeDescription: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(1000, 'Revoke description must be less than 1000 characters').nullable().optional(),
    reconsentDescription: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(1000, 'Reconsent description must be less than 1000 characters').nullable().optional()
});
const userAttributeTranslationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Name is required').max(255, 'Name must be less than 255 characters')
});
const translationsMapSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LANGUAGE_CODES"]), baseTranslationSchema);
const businessProcessTranslationsMapSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LANGUAGE_CODES"]), businessProcessTranslationSchema);
const userAttributeTranslationsMapSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LANGUAGE_CODES"]), userAttributeTranslationSchema);
const updateTranslationRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'userAttribute',
        'consentPurpose',
        'processingPurpose',
        'businessProcess'
    ]),
    entityId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    languageCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LANGUAGE_CODES"]),
    translation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        baseTranslationSchema,
        businessProcessTranslationSchema,
        userAttributeTranslationSchema
    ])
});
const deleteTranslationRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'userAttribute',
        'consentPurpose',
        'processingPurpose',
        'businessProcess'
    ]),
    entityId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    languageCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LANGUAGE_CODES"]).refine((code)=>code !== 'en', {
        message: 'Cannot delete English translation'
    })
});
const bulkUpdateTranslationsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'userAttribute',
        'consentPurpose',
        'processingPurpose',
        'businessProcess'
    ]),
    entityId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    translations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$languages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LANGUAGE_CODES"]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        baseTranslationSchema,
        businessProcessTranslationSchema,
        userAttributeTranslationSchema
    ]))
});
}),
"[project]/actions/translations.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"604ee511ac0472051dfe5e3086831990406880b5a8":"getEntityTranslations","702efd457dbb3f47693eb2907684303998765df5b7":"updateUserAttributeTranslation","708502611c300dbb9631776a3abf936be90a4fe233":"updateBusinessProcessTranslation","70cb8f6f18075f334786d88d0cc8a62bd6a8785a71":"deleteTranslation","70de187988e83b96c0c2823cb84d330c6970019762":"updateProcessingPurposeTranslation","70eb2dfe7dbd8f21cfbe30b07ca4a5c7dcc5b3f041":"bulkUpdateTranslations","70fc77fb58a22ba06141180f60e29fd86114b8bce1":"updateConsentPurposeTranslation"},"",""] */ __turbopack_context__.s([
    "bulkUpdateTranslations",
    ()=>bulkUpdateTranslations,
    "deleteTranslation",
    ()=>deleteTranslation,
    "getEntityTranslations",
    ()=>getEntityTranslations,
    "updateBusinessProcessTranslation",
    ()=>updateBusinessProcessTranslation,
    "updateConsentPurposeTranslation",
    ()=>updateConsentPurposeTranslation,
    "updateProcessingPurposeTranslation",
    ()=>updateProcessingPurposeTranslation,
    "updateUserAttributeTranslation",
    ()=>updateUserAttributeTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$translation$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schemas/translation-schemas.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function updateUserAttributeTranslation(userAttributeId, languageCode, translation) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        // Validate input
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$translation$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["userAttributeTranslationSchema"].parse(translation);
        // Get current translations
        const userAttribute = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findUnique({
            where: {
                id: userAttributeId
            },
            select: {
                translations: true,
                supportedLanguages: true
            }
        });
        if (!userAttribute) {
            return {
                error: "User attribute not found"
            };
        }
        // Update translations
        const currentTranslations = userAttribute.translations || {};
        currentTranslations[languageCode] = validatedData;
        // Update supportedLanguages if new language
        const supportedLanguages = userAttribute.supportedLanguages || [
            'en'
        ];
        if (!supportedLanguages.includes(languageCode)) {
            supportedLanguages.push(languageCode);
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.update({
            where: {
                id: userAttributeId
            },
            data: {
                translations: currentTranslations,
                supportedLanguages
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/user-attributes`);
        return {
            success: true
        };
    } catch (error) {
        console.error("Error updating translation:", error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodError) {
            return {
                error: error.issues[0].message
            };
        }
        return {
            error: "Failed to update translation"
        };
    }
}
async function updateConsentPurposeTranslation(consentPurposeId, languageCode, translation) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$translation$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseTranslationSchema"].parse(translation);
        const consentPurpose = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.findUnique({
            where: {
                id: consentPurposeId
            },
            select: {
                translations: true,
                supportedLanguages: true
            }
        });
        if (!consentPurpose) {
            return {
                error: "Consent purpose not found"
            };
        }
        const currentTranslations = consentPurpose.translations || {};
        currentTranslations[languageCode] = validatedData;
        const supportedLanguages = consentPurpose.supportedLanguages || [
            'en'
        ];
        if (!supportedLanguages.includes(languageCode)) {
            supportedLanguages.push(languageCode);
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.update({
            where: {
                id: consentPurposeId
            },
            data: {
                translations: currentTranslations,
                supportedLanguages
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/consent-purposes`);
        return {
            success: true
        };
    } catch (error) {
        console.error("Error updating translation:", error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodError) {
            return {
                error: error.issues[0].message
            };
        }
        return {
            error: "Failed to update translation"
        };
    }
}
async function updateProcessingPurposeTranslation(processingPurposeId, languageCode, translation) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$translation$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseTranslationSchema"].parse(translation);
        const processingPurpose = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].processingPurpose.findUnique({
            where: {
                id: processingPurposeId
            },
            select: {
                translations: true
            }
        });
        if (!processingPurpose) {
            return {
                error: "Processing purpose not found"
            };
        }
        const currentTranslations = processingPurpose.translations || {};
        currentTranslations[languageCode] = validatedData;
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].processingPurpose.update({
            where: {
                id: processingPurposeId
            },
            data: {
                translations: currentTranslations
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/consent-purposes`);
        return {
            success: true
        };
    } catch (error) {
        console.error("Error updating translation:", error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodError) {
            return {
                error: error.issues[0].message
            };
        }
        return {
            error: "Failed to update translation"
        };
    }
}
async function updateBusinessProcessTranslation(businessProcessId, languageCode, translation) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$translation$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["businessProcessTranslationSchema"].parse(translation);
        const businessProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
            where: {
                id: businessProcessId
            },
            select: {
                translations: true,
                supportedLanguages: true
            }
        });
        if (!businessProcess) {
            return {
                error: "Business process not found"
            };
        }
        const currentTranslations = businessProcess.translations || {};
        currentTranslations[languageCode] = validatedData;
        const supportedLanguages = businessProcess.supportedLanguages || [
            'en'
        ];
        if (!supportedLanguages.includes(languageCode)) {
            supportedLanguages.push(languageCode);
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.update({
            where: {
                id: businessProcessId
            },
            data: {
                translations: currentTranslations,
                supportedLanguages
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/business-processes`);
        return {
            success: true
        };
    } catch (error) {
        console.error("Error updating translation:", error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodError) {
            return {
                error: error.issues[0].message
            };
        }
        return {
            error: "Failed to update translation"
        };
    }
}
async function deleteTranslation(entityType, entityId, languageCode) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    if (languageCode === 'en') {
        return {
            error: "Cannot delete English translation"
        };
    }
    try {
        let entity;
        let updateData = {};
        // Fetch entity based on type
        switch(entityType){
            case 'userAttribute':
                entity = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findUnique({
                    where: {
                        id: entityId
                    },
                    select: {
                        translations: true,
                        supportedLanguages: true
                    }
                });
                break;
            case 'consentPurpose':
                entity = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.findUnique({
                    where: {
                        id: entityId
                    },
                    select: {
                        translations: true,
                        supportedLanguages: true
                    }
                });
                break;
            case 'processingPurpose':
                entity = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].processingPurpose.findUnique({
                    where: {
                        id: entityId
                    },
                    select: {
                        translations: true
                    }
                });
                break;
            case 'businessProcess':
                entity = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
                    where: {
                        id: entityId
                    },
                    select: {
                        translations: true,
                        supportedLanguages: true
                    }
                });
                break;
        }
        if (!entity) {
            return {
                error: "Entity not found"
            };
        }
        // Remove translation
        const translations = {
            ...entity.translations
        };
        delete translations[languageCode];
        updateData.translations = translations;
        // Update supportedLanguages if applicable
        if (entity.supportedLanguages) {
            updateData.supportedLanguages = entity.supportedLanguages.filter((lang)=>lang !== languageCode);
        }
        // Update entity
        switch(entityType){
            case 'userAttribute':
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.update({
                    where: {
                        id: entityId
                    },
                    data: updateData
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/user-attributes`);
                break;
            case 'consentPurpose':
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.update({
                    where: {
                        id: entityId
                    },
                    data: updateData
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/consent-purposes`);
                break;
            case 'processingPurpose':
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].processingPurpose.update({
                    where: {
                        id: entityId
                    },
                    data: updateData
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/consent-purposes`);
                break;
            case 'businessProcess':
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.update({
                    where: {
                        id: entityId
                    },
                    data: updateData
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/business-processes`);
                break;
        }
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting translation:", error);
        return {
            error: "Failed to delete translation"
        };
    }
}
async function bulkUpdateTranslations(entityType, entityId, translations) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        // Validate each translation based on entity type
        const schema = entityType === 'businessProcess' ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$translation$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["businessProcessTranslationSchema"] : entityType === 'userAttribute' ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$translation$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["userAttributeTranslationSchema"] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$translation$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseTranslationSchema"];
        for (const [lang, translation] of Object.entries(translations)){
            schema.parse(translation);
        }
        // Get current entity
        let entity;
        switch(entityType){
            case 'userAttribute':
                entity = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findUnique({
                    where: {
                        id: entityId
                    },
                    select: {
                        supportedLanguages: true
                    }
                });
                break;
            case 'consentPurpose':
                entity = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.findUnique({
                    where: {
                        id: entityId
                    },
                    select: {
                        supportedLanguages: true
                    }
                });
                break;
            case 'processingPurpose':
                entity = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].processingPurpose.findUnique({
                    where: {
                        id: entityId
                    }
                });
                break;
            case 'businessProcess':
                entity = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
                    where: {
                        id: entityId
                    },
                    select: {
                        supportedLanguages: true
                    }
                });
                break;
        }
        if (!entity) {
            return {
                error: "Entity not found"
            };
        }
        // Update supportedLanguages
        const supportedLanguages = Array.from(new Set([
            ...entity.supportedLanguages || [
                'en'
            ],
            ...Object.keys(translations)
        ]));
        const updateData = {
            translations
        };
        if (entity.supportedLanguages !== undefined) {
            updateData.supportedLanguages = supportedLanguages;
        }
        // Update entity
        switch(entityType){
            case 'userAttribute':
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.update({
                    where: {
                        id: entityId
                    },
                    data: updateData
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/user-attributes`);
                break;
            case 'consentPurpose':
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.update({
                    where: {
                        id: entityId
                    },
                    data: updateData
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/consent-purposes`);
                break;
            case 'processingPurpose':
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].processingPurpose.update({
                    where: {
                        id: entityId
                    },
                    data: updateData
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/consent-purposes`);
                break;
            case 'businessProcess':
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.update({
                    where: {
                        id: entityId
                    },
                    data: updateData
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/business-processes`);
                break;
        }
        return {
            success: true
        };
    } catch (error) {
        console.error("Error bulk updating translations:", error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodError) {
            return {
                error: error.issues[0].message
            };
        }
        return {
            error: "Failed to update translations"
        };
    }
}
async function getEntityTranslations(entityType, entityId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        let entity;
        switch(entityType){
            case 'userAttribute':
                entity = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findUnique({
                    where: {
                        id: entityId
                    },
                    select: {
                        translations: true,
                        supportedLanguages: true
                    }
                });
                break;
            case 'consentPurpose':
                entity = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.findUnique({
                    where: {
                        id: entityId
                    },
                    select: {
                        translations: true,
                        supportedLanguages: true
                    }
                });
                break;
            case 'processingPurpose':
                entity = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].processingPurpose.findUnique({
                    where: {
                        id: entityId
                    },
                    select: {
                        translations: true
                    }
                });
                break;
            case 'businessProcess':
                entity = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
                    where: {
                        id: entityId
                    },
                    select: {
                        translations: true,
                        supportedLanguages: true
                    }
                });
                break;
        }
        if (!entity) {
            return {
                error: "Entity not found"
            };
        }
        return {
            success: true,
            data: {
                translations: entity.translations || {},
                supportedLanguages: entity.supportedLanguages || [
                    'en'
                ]
            }
        };
    } catch (error) {
        console.error("Error fetching translations:", error);
        return {
            error: "Failed to fetch translations"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    updateUserAttributeTranslation,
    updateConsentPurposeTranslation,
    updateProcessingPurposeTranslation,
    updateBusinessProcessTranslation,
    deleteTranslation,
    bulkUpdateTranslations,
    getEntityTranslations
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUserAttributeTranslation, "702efd457dbb3f47693eb2907684303998765df5b7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateConsentPurposeTranslation, "70fc77fb58a22ba06141180f60e29fd86114b8bce1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProcessingPurposeTranslation, "70de187988e83b96c0c2823cb84d330c6970019762", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBusinessProcessTranslation, "708502611c300dbb9631776a3abf936be90a4fe233", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTranslation, "70cb8f6f18075f334786d88d0cc8a62bd6a8785a71", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkUpdateTranslations, "70eb2dfe7dbd8f21cfbe30b07ca4a5c7dcc5b3f041", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEntityTranslations, "604ee511ac0472051dfe5e3086831990406880b5a8", null);
}),
"[project]/lib/constants/google-translate-mapping.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/utils/logger.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Simple logger utility for consistent logging across the application
 */ __turbopack_context__.s([
    "logger",
    ()=>logger
]);
function formatMessage(level, message, context) {
    const timestamp = new Date().toISOString();
    const contextStr = context ? ` ${JSON.stringify(context)}` : "";
    return `[${timestamp}] [${level.toUpperCase()}] ${message}${contextStr}`;
}
const logger = {
    info (message, context) {
        console.log(formatMessage("info", message, context));
    },
    warn (message, context) {
        console.warn(formatMessage("warn", message, context));
    },
    error (message, context) {
        console.error(formatMessage("error", message, context));
    },
    debug (message, context) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.debug(formatMessage("debug", message, context));
        }
    }
};
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[project]/lib/services/google-translate-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * Google Cloud Translation Service
 * 
 * Provides translation capabilities using Google Cloud Translation API v3
 * Includes development mode that simulates translations without API calls
 * 
 * Environment Variables:
 * - NODE_ENV: 'development' | 'production' (uses mock translations in dev)
 * - GCS_PROJECT_ID: Google Cloud Project ID
 * - GCS_KEYFILE_PATH: Path to service account key file
 * 
 * Dev Mode:
 * When NODE_ENV !== 'production' and GCS credentials are missing,
 * the service will use mock translations (prefixed with language code)
 */ __turbopack_context__.s([
    "getTranslationServiceStatus",
    ()=>getTranslationServiceStatus,
    "translateBatch",
    ()=>translateBatch,
    "translateObject",
    ()=>translateObject,
    "translateText",
    ()=>translateText,
    "translateToMultipleLanguages",
    ()=>translateToMultipleLanguages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$google$2d$translate$2d$mapping$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/google-translate-mapping.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [app-rsc] (ecmascript)");
;
;
// Only import Google Translate in production or when credentials exist
let TranslationServiceClient = null;
const isDevelopment = ("TURBOPACK compile-time value", "development") !== 'production';
const hasCredentials = Boolean(process.env.GCS_PROJECT_ID && process.env.GCS_KEYFILE_PATH);
// Initialize the client only if we have credentials
if (hasCredentials) {
    try {
        const { v3 } = __turbopack_context__.r("[project]/node_modules/@google-cloud/translate/build/src/index.js [app-rsc] (ecmascript)");
        TranslationServiceClient = v3.TranslationServiceClient;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn('Google Translate client initialization failed', {
            error
        });
    }
}
/**
 * Translation service configuration
 */ const config = {
    projectId: process.env.GCS_PROJECT_ID || '',
    keyFilename: process.env.GCS_KEYFILE_PATH || '',
    location: 'global'
};
/**
 * Check if we're in mock mode
 */ function isMockMode() {
    return isDevelopment && !hasCredentials;
}
/**
 * Mock translation for development (simulates translation by prefixing with language code)
 * Adds realistic delay to simulate API latency
 */ async function mockTranslate(text, targetLanguage) {
    if (!text || text.trim().length === 0) {
        return text;
    }
    // Simulate realistic API latency (100-300ms per translation)
    const delay = 100 + Math.random() * 200;
    await new Promise((resolve)=>setTimeout(resolve, delay));
    // Simple simulation: prefix with [LANG] to show it's "translated"
    return `[${targetLanguage.toUpperCase()}] ${text}`;
}
/**
 * Create translation client instance
 */ function createClient() {
    if (isMockMode()) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info('Translation Service: Running in MOCK MODE (development without credentials)');
        return null;
    }
    if (!TranslationServiceClient) {
        throw new Error('Google Translate client not initialized. Check your credentials.');
    }
    return new TranslationServiceClient({
        projectId: config.projectId,
        keyFilename: config.keyFilename
    });
}
async function translateText(text, targetLanguage, sourceLanguage = 'en') {
    // Return empty strings as-is
    if (!text || text.trim().length === 0) {
        return text;
    }
    // If source and target are the same, no translation needed
    if (sourceLanguage === targetLanguage) {
        return text;
    }
    const targetGoogleCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$google$2d$translate$2d$mapping$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGoogleTranslateCode"])(targetLanguage);
    const sourceGoogleCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$google$2d$translate$2d$mapping$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGoogleTranslateCode"])(sourceLanguage);
    // Mock mode for development
    if (isMockMode()) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].debug('Mock translating text', {
            sourceLanguage,
            targetLanguage,
            textLength: text.length
        });
        return await mockTranslate(text, targetGoogleCode);
    }
    try {
        const client = createClient();
        if (!client) {
            throw new Error('Translation client not available');
        }
        const request = {
            parent: `projects/${config.projectId}/locations/${config.location}`,
            contents: [
                text
            ],
            mimeType: 'text/plain',
            sourceLanguageCode: sourceGoogleCode,
            targetLanguageCode: targetGoogleCode
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info('Translating text via Google Translate API', {
            sourceLanguage: sourceGoogleCode,
            targetLanguage: targetGoogleCode,
            textLength: text.length
        });
        const [response] = await client.translateText(request);
        const translatedText = response.translations?.[0]?.translatedText || text;
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info('Translation successful', {
            sourceLanguage: sourceGoogleCode,
            targetLanguage: targetGoogleCode,
            originalLength: text.length,
            translatedLength: translatedText.length
        });
        return translatedText;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error('Translation failed', {
            error,
            sourceLanguage,
            targetLanguage,
            textLength: text.length
        });
        // Fallback: return original text on error
        return text;
    }
}
async function translateBatch(texts, targetLanguage, sourceLanguage = 'en') {
    // Empty array check
    if (!texts || texts.length === 0) {
        return [];
    }
    // If source and target are the same, no translation needed
    if (sourceLanguage === targetLanguage) {
        return texts;
    }
    const targetGoogleCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$google$2d$translate$2d$mapping$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGoogleTranslateCode"])(targetLanguage);
    const sourceGoogleCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$google$2d$translate$2d$mapping$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGoogleTranslateCode"])(sourceLanguage);
    // Mock mode for development
    if (isMockMode()) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].debug('Mock translating batch', {
            sourceLanguage,
            targetLanguage,
            count: texts.length
        });
        // Process sequentially to simulate realistic timing
        const results = [];
        for (const text of texts){
            if (text) {
                results.push(await mockTranslate(text, targetGoogleCode));
            } else {
                results.push(text);
            }
        }
        return results;
    }
    try {
        const client = createClient();
        if (!client) {
            throw new Error('Translation client not available');
        }
        const request = {
            parent: `projects/${config.projectId}/locations/${config.location}`,
            contents: texts,
            mimeType: 'text/plain',
            sourceLanguageCode: sourceGoogleCode,
            targetLanguageCode: targetGoogleCode
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info('Batch translating via Google Translate API', {
            sourceLanguage: sourceGoogleCode,
            targetLanguage: targetGoogleCode,
            count: texts.length
        });
        const [response] = await client.translateText(request);
        const translatedTexts = response.translations?.map((t)=>t.translatedText) || texts;
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info('Batch translation successful', {
            sourceLanguage: sourceGoogleCode,
            targetLanguage: targetGoogleCode,
            count: translatedTexts.length
        });
        return translatedTexts;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error('Batch translation failed', {
            error,
            sourceLanguage,
            targetLanguage,
            count: texts.length
        });
        // Fallback: return original texts on error
        return texts;
    }
}
async function translateToMultipleLanguages(text, targetLanguages, sourceLanguage = 'en') {
    // Empty text check
    if (!text || text.trim().length === 0) {
        const result = {};
        targetLanguages.forEach((lang)=>{
            result[lang] = text;
        });
        return result;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info('Translating to multiple languages', {
        sourceLanguage,
        targetLanguages,
        textLength: text.length
    });
    // Translate to each language
    const translations = await Promise.all(targetLanguages.map(async (targetLang)=>{
        const translated = await translateText(text, targetLang, sourceLanguage);
        return {
            lang: targetLang,
            text: translated
        };
    }));
    // Build result object
    const result = {};
    translations.forEach(({ lang, text: translatedText })=>{
        result[lang] = translatedText;
    });
    return result;
}
async function translateObject(obj, targetLanguage, sourceLanguage = 'en') {
    const keys = Object.keys(obj);
    const values = keys.map((key)=>obj[key] || '');
    // Filter out empty values and keep track of which indices have content
    const nonEmptyIndices = [];
    const nonEmptyValues = [];
    values.forEach((value, index)=>{
        if (value && value.trim().length > 0) {
            nonEmptyIndices.push(index);
            nonEmptyValues.push(value);
        }
    });
    // Translate only non-empty values
    const translatedNonEmpty = await translateBatch(nonEmptyValues, targetLanguage, sourceLanguage);
    // Rebuild the result object
    const result = {};
    keys.forEach((key, index)=>{
        const nonEmptyIndex = nonEmptyIndices.indexOf(index);
        if (nonEmptyIndex !== -1) {
            result[key] = translatedNonEmpty[nonEmptyIndex];
        } else {
            result[key] = obj[key]; // Keep original empty/null values
        }
    });
    return result;
}
function getTranslationServiceStatus() {
    return {
        mode: isMockMode() ? 'mock' : 'production',
        hasCredentials,
        projectId: config.projectId ? '✓' : '✗',
        keyFile: config.keyFilename ? '✓' : '✗'
    };
}
}),
"[project]/actions/auto-translate.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"704ce32ef850c2bb4b6f4d46e757bc9db118d35e04":"translateTextToLanguages","706a268d80ff66c982e5e3f3b6e8f46051ad64ac85":"autoTranslateUserAttribute","7817f412d199e81c81597545fc9f54d9c77bdb0d92":"autoTranslateConsentPurpose","786fd342078d6b7afd66dc76df99e14c9e35cb1365":"autoTranslateProcessingPurpose","78fbfbd66a197b4f61ba4aa740092cd88ebe12c695":"autoTranslateBusinessProcess","78fc1f3d5cd0bd1dc8b98fe79b082bb3dee67c011b":"autoTranslateUserAttributeFields"},"",""] */ __turbopack_context__.s([
    "autoTranslateBusinessProcess",
    ()=>autoTranslateBusinessProcess,
    "autoTranslateConsentPurpose",
    ()=>autoTranslateConsentPurpose,
    "autoTranslateProcessingPurpose",
    ()=>autoTranslateProcessingPurpose,
    "autoTranslateUserAttribute",
    ()=>autoTranslateUserAttribute,
    "autoTranslateUserAttributeFields",
    ()=>autoTranslateUserAttributeFields,
    "translateTextToLanguages",
    ()=>translateTextToLanguages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$google$2d$translate$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/google-translate-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function autoTranslateUserAttribute(userAttributeId, targetLanguages, sourceLanguage = "en") {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate User Attribute: Starting", {
            userAttributeId,
            targetLanguages,
            sourceLanguage,
            userId: session.user.id
        });
        // Validate inputs
        if (!targetLanguages || targetLanguages.length === 0) {
            return {
                error: "No target languages specified"
            };
        }
        // Fetch user attribute
        const userAttribute = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findUnique({
            where: {
                id: userAttributeId
            },
            select: {
                id: true,
                name: true,
                translations: true,
                supportedLanguages: true
            }
        });
        if (!userAttribute) {
            return {
                error: "User attribute not found"
            };
        }
        // Get source translation (English by default)
        const currentTranslations = userAttribute.translations || {};
        const sourceTranslation = currentTranslations[sourceLanguage] || {
            name: userAttribute.name,
            description: null,
            placeholder: null
        };
        // Validate source has content
        if (!sourceTranslation.name || sourceTranslation.name.trim() === "") {
            return {
                error: `Source translation (${sourceLanguage}) has no name`
            };
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate User Attribute: Translating fields", {
            userAttributeId,
            sourceLanguage,
            targetLanguages,
            fields: Object.keys(sourceTranslation)
        });
        // Translate to each target language
        const translationResults = {};
        const errors = [];
        for (const targetLang of targetLanguages){
            try {
                // Skip if source and target are the same
                if (targetLang === sourceLanguage) {
                    translationResults[targetLang] = sourceTranslation;
                    continue;
                }
                // Translate the object
                const translated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$google$2d$translate$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translateObject"])({
                    name: sourceTranslation.name,
                    description: sourceTranslation.description || null,
                    placeholder: sourceTranslation.placeholder || null
                }, targetLang, sourceLanguage);
                translationResults[targetLang] = translated;
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate User Attribute: Language completed", {
                    userAttributeId,
                    language: targetLang
                });
            } catch (error) {
                const errorMsg = `Failed to translate to ${targetLang}`;
                errors.push(errorMsg);
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate User Attribute: Language failed", {
                    error,
                    userAttributeId,
                    language: targetLang
                });
            }
        }
        // If all translations failed, return error
        if (Object.keys(translationResults).length === 0) {
            return {
                error: "All translations failed",
                details: errors
            };
        }
        // Merge with existing translations (don't overwrite manually edited ones unless explicitly requested)
        const updatedTranslations = {
            ...currentTranslations,
            ...translationResults
        };
        // Update supported languages
        const newLanguages = Object.keys(translationResults);
        const existingLanguages = userAttribute.supportedLanguages || [];
        const supportedLanguages = Array.from(new Set([
            ...existingLanguages,
            ...newLanguages
        ]));
        // Save to database
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.update({
            where: {
                id: userAttributeId
            },
            data: {
                translations: updatedTranslations,
                supportedLanguages
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate User Attribute: Completed successfully", {
            userAttributeId,
            translatedLanguages: Object.keys(translationResults),
            totalLanguages: supportedLanguages.length
        });
        // Revalidate cache
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/user-attributes");
        return {
            success: true,
            translations: translationResults,
            translatedCount: Object.keys(translationResults).length,
            errors: errors.length > 0 ? errors : undefined
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate User Attribute: Failed", {
            error,
            userAttributeId,
            targetLanguages
        });
        return {
            error: "Failed to auto-translate",
            details: error instanceof Error ? error.message : "Unknown error"
        };
    }
}
async function autoTranslateUserAttributeFields(userAttributeId, targetLanguage, fields, sourceLanguage = "en") {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        // Validate user attribute exists
        const userAttribute = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findUnique({
            where: {
                id: userAttributeId
            },
            select: {
                id: true,
                translations: true,
                supportedLanguages: true
            }
        });
        if (!userAttribute) {
            return {
                error: "User attribute not found"
            };
        }
        // Translate the provided fields
        const translated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$google$2d$translate$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translateObject"])(fields, targetLanguage, sourceLanguage);
        // Update translations
        const currentTranslations = userAttribute.translations || {};
        currentTranslations[targetLanguage] = {
            ...currentTranslations[targetLanguage] || {},
            ...translated
        };
        // Update supported languages
        const supportedLanguages = userAttribute.supportedLanguages || [];
        if (!supportedLanguages.includes(targetLanguage)) {
            supportedLanguages.push(targetLanguage);
        }
        // Save to database
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.update({
            where: {
                id: userAttributeId
            },
            data: {
                translations: currentTranslations,
                supportedLanguages
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate User Attribute Fields: Completed", {
            userAttributeId,
            targetLanguage,
            fields: Object.keys(fields)
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/user-attributes");
        return {
            success: true,
            translation: translated
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate User Attribute Fields: Failed", {
            error,
            userAttributeId,
            targetLanguage
        });
        return {
            error: "Failed to auto-translate fields",
            details: error instanceof Error ? error.message : "Unknown error"
        };
    }
}
async function translateTextToLanguages(text, targetLanguages, sourceLanguage = "en") {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Translate Text: Starting", {
            targetLanguages,
            sourceLanguage,
            textLength: text.length,
            userId: session.user.id
        });
        // Validate inputs
        if (!text || text.trim() === "") {
            return {
                error: "No text provided for translation"
            };
        }
        if (!targetLanguages || targetLanguages.length === 0) {
            return {
                error: "No target languages specified"
            };
        }
        // Import translation service
        const { translateText } = await __turbopack_context__.A("[project]/lib/services/google-translate-service.ts [app-rsc] (ecmascript, async loader)");
        // Translate to each target language
        const translations = {};
        const errors = [];
        for (const targetLang of targetLanguages){
            try {
                // Skip if source and target are the same
                if (targetLang === sourceLanguage) {
                    translations[targetLang] = text;
                    continue;
                }
                // Translate the text
                const translated = await translateText(text, targetLang, sourceLanguage);
                translations[targetLang] = translated;
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Translate Text: Language completed", {
                    targetLang,
                    textLength: translated.length
                });
            } catch (error) {
                const errorMsg = `Failed to translate to ${targetLang}`;
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Translate Text: Language failed", {
                    error,
                    targetLang
                });
                errors.push(errorMsg);
            }
        }
        if (Object.keys(translations).length === 0) {
            return {
                error: "Failed to translate to any language",
                details: errors.join(", ")
            };
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Translate Text: Completed", {
            successCount: Object.keys(translations).length,
            errorCount: errors.length
        });
        return {
            success: true,
            translations,
            errors: errors.length > 0 ? errors : undefined
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Translate Text: Failed", {
            error,
            sourceLanguage,
            targetLanguages
        });
        return {
            error: "Failed to translate text",
            details: error instanceof Error ? error.message : "Unknown error"
        };
    }
}
async function autoTranslateBusinessProcess(businessProcessId, targetLanguages, sourceLanguage = "en", englishData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate Business Process: Starting", {
            businessProcessId,
            targetLanguages,
            sourceLanguage,
            userId: session.user.id,
            hasEnglishData: !!englishData
        });
        if (!targetLanguages || targetLanguages.length === 0) {
            return {
                error: "No target languages specified"
            };
        }
        const businessProcess = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.findUnique({
            where: {
                id: businessProcessId
            },
            select: {
                id: true,
                name: true,
                grantDescription: true,
                revokeDescription: true,
                reconsentDescription: true,
                translations: true,
                supportedLanguages: true
            }
        });
        if (!businessProcess) {
            return {
                error: "Business process not found"
            };
        }
        const currentTranslations = businessProcess.translations || {};
        // Use provided englishData if available (for newly added/edited fields), otherwise fall back to DB
        const sourceTranslation = englishData || currentTranslations[sourceLanguage] || {
            name: businessProcess.name,
            grantDescription: businessProcess.grantDescription,
            revokeDescription: businessProcess.revokeDescription || null,
            reconsentDescription: businessProcess.reconsentDescription || null
        };
        if (!sourceTranslation.name || sourceTranslation.name.trim() === "") {
            return {
                error: `Source translation (${sourceLanguage}) has no name`
            };
        }
        const translationResults = {};
        const errors = [];
        for (const targetLang of targetLanguages){
            try {
                if (targetLang === sourceLanguage) {
                    translationResults[targetLang] = sourceTranslation;
                    continue;
                }
                const translated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$google$2d$translate$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translateObject"])({
                    name: sourceTranslation.name,
                    grantDescription: sourceTranslation.grantDescription || null,
                    revokeDescription: sourceTranslation.revokeDescription || null,
                    reconsentDescription: sourceTranslation.reconsentDescription || null
                }, targetLang, sourceLanguage);
                translationResults[targetLang] = translated;
            } catch (error) {
                const errorMsg = `Failed to translate to ${targetLang}`;
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate Business Process: Language failed", {
                    error,
                    targetLang
                });
                errors.push(errorMsg);
            }
        }
        if (Object.keys(translationResults).length === 0) {
            return {
                error: "Failed to translate to any language",
                details: errors.join(", ")
            };
        }
        // Merge with existing translations
        const updatedTranslations = {
            ...currentTranslations,
            ...translationResults
        };
        // Update supported languages
        const supportedLanguages = businessProcess.supportedLanguages || [
            "en"
        ];
        targetLanguages.forEach((lang)=>{
            if (!supportedLanguages.includes(lang)) {
                supportedLanguages.push(lang);
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].businessProcess.update({
            where: {
                id: businessProcessId
            },
            data: {
                translations: updatedTranslations,
                supportedLanguages
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate Business Process: Completed", {
            businessProcessId,
            successCount: Object.keys(translationResults).length,
            errorCount: errors.length
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/business-processes");
        return {
            success: true,
            translations: updatedTranslations,
            translatedCount: Object.keys(translationResults).length,
            errors: errors.length > 0 ? errors : undefined
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate Business Process: Failed", {
            error,
            businessProcessId,
            targetLanguages
        });
        return {
            error: "Failed to auto-translate business process",
            details: error instanceof Error ? error.message : "Unknown error"
        };
    }
}
async function autoTranslateConsentPurpose(consentPurposeId, targetLanguages, sourceLanguage = "en", englishData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate Consent Purpose: Starting", {
            consentPurposeId,
            targetLanguages,
            sourceLanguage,
            userId: session.user.id,
            hasEnglishData: !!englishData
        });
        if (!targetLanguages || targetLanguages.length === 0) {
            return {
                error: "No target languages specified"
            };
        }
        const consentPurpose = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.findUnique({
            where: {
                id: consentPurposeId
            },
            select: {
                id: true,
                name: true,
                description: true,
                translations: true,
                supportedLanguages: true
            }
        });
        if (!consentPurpose) {
            return {
                error: "Consent purpose not found"
            };
        }
        const currentTranslations = consentPurpose.translations || {};
        // Use provided englishData if available (for newly added/edited fields), otherwise fall back to DB
        const sourceTranslation = englishData || currentTranslations[sourceLanguage] || {
            name: consentPurpose.name,
            description: consentPurpose.description || null
        };
        if (!sourceTranslation.name || sourceTranslation.name.trim() === "") {
            return {
                error: `Source translation (${sourceLanguage}) has no name`
            };
        }
        const translationResults = {};
        const errors = [];
        for (const targetLang of targetLanguages){
            try {
                if (targetLang === sourceLanguage) {
                    translationResults[targetLang] = sourceTranslation;
                    continue;
                }
                const translated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$google$2d$translate$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translateObject"])({
                    name: sourceTranslation.name,
                    description: sourceTranslation.description || null
                }, targetLang, sourceLanguage);
                translationResults[targetLang] = translated;
            } catch (error) {
                const errorMsg = `Failed to translate to ${targetLang}`;
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate Consent Purpose: Language failed", {
                    error,
                    targetLang
                });
                errors.push(errorMsg);
            }
        }
        if (Object.keys(translationResults).length === 0) {
            return {
                error: "Failed to translate to any language",
                details: errors.join(", ")
            };
        }
        // Merge with existing translations
        const updatedTranslations = {
            ...currentTranslations,
            ...translationResults
        };
        // Update supported languages
        const supportedLanguages = consentPurpose.supportedLanguages || [
            "en"
        ];
        targetLanguages.forEach((lang)=>{
            if (!supportedLanguages.includes(lang)) {
                supportedLanguages.push(lang);
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].consentPurpose.update({
            where: {
                id: consentPurposeId
            },
            data: {
                translations: updatedTranslations,
                supportedLanguages
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate Consent Purpose: Completed", {
            consentPurposeId,
            successCount: Object.keys(translationResults).length,
            errorCount: errors.length
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/consent-purposes");
        return {
            success: true,
            translations: updatedTranslations,
            translatedCount: Object.keys(translationResults).length,
            errors: errors.length > 0 ? errors : undefined
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate Consent Purpose: Failed", {
            error,
            consentPurposeId,
            targetLanguages
        });
        return {
            error: "Failed to auto-translate consent purpose",
            details: error instanceof Error ? error.message : "Unknown error"
        };
    }
}
async function autoTranslateProcessingPurpose(processingPurposeId, targetLanguages, sourceLanguage = "en", englishData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate Processing Purpose: Starting", {
            processingPurposeId,
            targetLanguages,
            sourceLanguage,
            userId: session.user.id,
            hasEnglishData: !!englishData
        });
        if (!targetLanguages || targetLanguages.length === 0) {
            return {
                error: "No target languages specified"
            };
        }
        const processingPurpose = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].processingPurpose.findUnique({
            where: {
                id: processingPurposeId
            },
            select: {
                id: true,
                name: true,
                description: true,
                translations: true,
                supportedLanguages: true
            }
        });
        if (!processingPurpose) {
            return {
                error: "Processing purpose not found"
            };
        }
        const currentTranslations = processingPurpose.translations || {};
        // Use provided englishData if available (for newly added/edited fields), otherwise fall back to DB
        const sourceTranslation = englishData || currentTranslations[sourceLanguage] || {
            name: processingPurpose.name,
            description: processingPurpose.description || null
        };
        if (!sourceTranslation.name || sourceTranslation.name.trim() === "") {
            return {
                error: `Source translation (${sourceLanguage}) has no name`
            };
        }
        const translationResults = {};
        const errors = [];
        for (const targetLang of targetLanguages){
            try {
                if (targetLang === sourceLanguage) {
                    translationResults[targetLang] = sourceTranslation;
                    continue;
                }
                const translated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$google$2d$translate$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translateObject"])({
                    name: sourceTranslation.name,
                    description: sourceTranslation.description || null
                }, targetLang, sourceLanguage);
                translationResults[targetLang] = translated;
            } catch (error) {
                const errorMsg = `Failed to translate to ${targetLang}`;
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate Processing Purpose: Language failed", {
                    error,
                    targetLang
                });
                errors.push(errorMsg);
            }
        }
        if (Object.keys(translationResults).length === 0) {
            return {
                error: "Failed to translate to any language",
                details: errors.join(", ")
            };
        }
        // Merge with existing translations
        const updatedTranslations = {
            ...currentTranslations,
            ...translationResults
        };
        // Update supported languages
        const supportedLanguages = processingPurpose.supportedLanguages || [
            "en"
        ];
        targetLanguages.forEach((lang)=>{
            if (!supportedLanguages.includes(lang)) {
                supportedLanguages.push(lang);
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].processingPurpose.update({
            where: {
                id: processingPurposeId
            },
            data: {
                translations: updatedTranslations,
                supportedLanguages
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Auto-translate Processing Purpose: Completed", {
            processingPurposeId,
            successCount: Object.keys(translationResults).length,
            errorCount: errors.length
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/consent-purposes");
        return {
            success: true,
            translations: updatedTranslations,
            translatedCount: Object.keys(translationResults).length,
            errors: errors.length > 0 ? errors : undefined
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error("Auto-translate Processing Purpose: Failed", {
            error,
            processingPurposeId,
            targetLanguages
        });
        return {
            error: "Failed to auto-translate processing purpose",
            details: error instanceof Error ? error.message : "Unknown error"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    autoTranslateUserAttribute,
    autoTranslateUserAttributeFields,
    translateTextToLanguages,
    autoTranslateBusinessProcess,
    autoTranslateConsentPurpose,
    autoTranslateProcessingPurpose
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(autoTranslateUserAttribute, "706a268d80ff66c982e5e3f3b6e8f46051ad64ac85", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(autoTranslateUserAttributeFields, "78fc1f3d5cd0bd1dc8b98fe79b082bb3dee67c011b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(translateTextToLanguages, "704ce32ef850c2bb4b6f4d46e757bc9db118d35e04", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(autoTranslateBusinessProcess, "78fbfbd66a197b4f61ba4aa740092cd88ebe12c695", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(autoTranslateConsentPurpose, "7817f412d199e81c81597545fc9f54d9c77bdb0d92", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(autoTranslateProcessingPurpose, "786fd342078d6b7afd66dc76df99e14c9e35cb1365", null);
}),
"[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 * RBAC Constants
 * Role-Based Access Control configuration - Single Source of Truth
 */ /**
 * System resources that can be protected
 */ /**
 * Service categories for permission grouping
 */ __turbopack_context__.s([
    "Actions",
    ()=>Actions,
    "RESOURCE_SERVICE_MAPPING",
    ()=>RESOURCE_SERVICE_MAPPING,
    "ROLE_PERMISSIONS",
    ()=>ROLE_PERMISSIONS,
    "Resources",
    ()=>Resources,
    "Roles",
    ()=>Roles,
    "ServiceCategories",
    ()=>ServiceCategories
]);
const ServiceCategories = {
    CGP: "CGP",
    DPRM: "DPRM",
    COOKIES_MANAGER: "COOKIES_MANAGER"
};
const RESOURCE_SERVICE_MAPPING = {
    GRIEVANCE: "DPRM",
    GRIEVANCE_ADMIN: "DPRM"
};
const Resources = {
    // System Resources
    USER: "USER",
    USER_ROLE: "USER_ROLE",
    ROLE: "ROLE",
    ADMIN: "ADMIN",
    API_KEY: "API_KEY",
    WEBHOOK: "WEBHOOK",
    GRIEVANCE: "GRIEVANCE",
    GRIEVANCE_ADMIN: "GRIEVANCE_ADMIN",
    AUDIT_LOG: "AUDIT_LOG",
    SLA: "SLA",
    // Data Fiduciary Resources
    BUSINESS_UNIT: "BUSINESS_UNIT",
    BUSINESS_PROCESS: "BUSINESS_PROCESS",
    CONSENT_PURPOSE: "CONSENT_PURPOSE",
    PROCESSING_PURPOSE: "PROCESSING_PURPOSE",
    PURPOSE_OF_PROCESSING: "PURPOSE_OF_PROCESSING",
    DATA_PROCESSOR: "DATA_PROCESSOR",
    USER_ATTRIBUTE: "USER_ATTRIBUTE",
    NOTICE: "NOTICE",
    CONSENT_RECORD: "CONSENT_RECORD",
    DATA_RETENTION_POLICY: "DATA_RETENTION_POLICY"
};
const Actions = {
    CREATE: "CREATE",
    READ: "READ",
    UPDATE: "UPDATE",
    DELETE: "DELETE"
};
const Roles = {
    PRIVY_CGP_ADMIN: "privy_cgp_admin",
    PRIVY_CGP_USER: "privy_cgp_user",
    PRIVY_API_KEY_MANAGER: "privy_api_key_manager",
    PRIVY_CGP_GRIEVANCE_AGENT: "privy_cgp_grievance_agent",
    PRIVY_DATA_PROTECTION_OFFICER: "privy_data_protection_officer",
    PRIVY_AUDITOR: "privy_auditor",
    // Cookie Manager Roles (managed from this service, used by Cookie Manager)
    PRIVY_CM_EDITOR: "privy_cm_editor",
    PRIVY_CM_ADMIN: "privy_cm_admin",
    PRIVY_CM_SCAN_OPERATOR: "privy_cm_scan_operator"
};
const ROLE_PERMISSIONS = {
    [Roles.PRIVY_CGP_ADMIN]: [
        "*:*"
    ],
    [Roles.PRIVY_CGP_USER]: [
        // System Access (Read-Only)
        `${Resources.USER}:${Actions.READ}`,
        `${Resources.ROLE}:${Actions.READ}`,
        // Business Units
        `${Resources.BUSINESS_UNIT}:${Actions.CREATE}`,
        `${Resources.BUSINESS_UNIT}:${Actions.READ}`,
        `${Resources.BUSINESS_UNIT}:${Actions.UPDATE}`,
        `${Resources.BUSINESS_UNIT}:${Actions.DELETE}`,
        // Business Processes
        `${Resources.BUSINESS_PROCESS}:${Actions.CREATE}`,
        `${Resources.BUSINESS_PROCESS}:${Actions.READ}`,
        `${Resources.BUSINESS_PROCESS}:${Actions.UPDATE}`,
        `${Resources.BUSINESS_PROCESS}:${Actions.DELETE}`,
        // Consent Purposes
        `${Resources.CONSENT_PURPOSE}:${Actions.CREATE}`,
        `${Resources.CONSENT_PURPOSE}:${Actions.READ}`,
        `${Resources.CONSENT_PURPOSE}:${Actions.UPDATE}`,
        `${Resources.CONSENT_PURPOSE}:${Actions.DELETE}`,
        // Processing Purposes
        `${Resources.PROCESSING_PURPOSE}:${Actions.CREATE}`,
        `${Resources.PROCESSING_PURPOSE}:${Actions.READ}`,
        `${Resources.PROCESSING_PURPOSE}:${Actions.UPDATE}`,
        `${Resources.PROCESSING_PURPOSE}:${Actions.DELETE}`,
        // Purposes of Processing (Catalog)
        `${Resources.PURPOSE_OF_PROCESSING}:${Actions.CREATE}`,
        `${Resources.PURPOSE_OF_PROCESSING}:${Actions.READ}`,
        `${Resources.PURPOSE_OF_PROCESSING}:${Actions.UPDATE}`,
        `${Resources.PURPOSE_OF_PROCESSING}:${Actions.DELETE}`,
        // Data Processors
        `${Resources.DATA_PROCESSOR}:${Actions.CREATE}`,
        `${Resources.DATA_PROCESSOR}:${Actions.READ}`,
        `${Resources.DATA_PROCESSOR}:${Actions.UPDATE}`,
        `${Resources.DATA_PROCESSOR}:${Actions.DELETE}`,
        // User Attributes
        `${Resources.USER_ATTRIBUTE}:${Actions.CREATE}`,
        `${Resources.USER_ATTRIBUTE}:${Actions.READ}`,
        `${Resources.USER_ATTRIBUTE}:${Actions.UPDATE}`,
        `${Resources.USER_ATTRIBUTE}:${Actions.DELETE}`,
        `${Resources.USER_ATTRIBUTE}:${Actions.DELETE}`,
        // Notices
        `${Resources.NOTICE}:${Actions.CREATE}`,
        `${Resources.NOTICE}:${Actions.READ}`,
        `${Resources.NOTICE}:${Actions.UPDATE}`,
        // Notices are typically not deleted for audit reasons, but we allow it for now if needed
        `${Resources.NOTICE}:${Actions.DELETE}`,
        // Data Retention Policies
        `${Resources.DATA_RETENTION_POLICY}:${Actions.READ}`
    ],
    [Roles.PRIVY_API_KEY_MANAGER]: [
        `${Resources.API_KEY}:${Actions.CREATE}`,
        `${Resources.API_KEY}:${Actions.READ}`,
        `${Resources.API_KEY}:${Actions.UPDATE}`,
        `${Resources.API_KEY}:${Actions.DELETE}`,
        `${Resources.WEBHOOK}:${Actions.CREATE}`,
        `${Resources.WEBHOOK}:${Actions.READ}`,
        `${Resources.WEBHOOK}:${Actions.UPDATE}`,
        `${Resources.WEBHOOK}:${Actions.DELETE}`
    ],
    [Roles.PRIVY_CGP_GRIEVANCE_AGENT]: [
        `${Resources.GRIEVANCE}:${Actions.READ}`,
        `${Resources.GRIEVANCE}:${Actions.UPDATE}`,
        `${Resources.NOTICE}:${Actions.READ}`,
        `${Resources.DATA_RETENTION_POLICY}:${Actions.READ}`
    ],
    [Roles.PRIVY_DATA_PROTECTION_OFFICER]: [
        "*:READ",
        `${Resources.AUDIT_LOG}:${Actions.READ}`,
        `${Resources.CONSENT_RECORD}:${Actions.READ}`,
        `${Resources.GRIEVANCE}:${Actions.READ}`,
        `${Resources.GRIEVANCE}:${Actions.UPDATE}`,
        `${Resources.GRIEVANCE_ADMIN}:${Actions.READ}`,
        // Data Retention Policies
        `${Resources.DATA_RETENTION_POLICY}:${Actions.CREATE}`,
        `${Resources.DATA_RETENTION_POLICY}:${Actions.UPDATE}`,
        `${Resources.DATA_RETENTION_POLICY}:${Actions.DELETE}`
    ],
    [Roles.PRIVY_AUDITOR]: [
        "*:READ",
        `${Resources.AUDIT_LOG}:${Actions.READ}`,
        `${Resources.CONSENT_RECORD}:${Actions.READ}`
    ],
    // Cookie Manager Roles (permissions managed by Cookie Manager service)
    [Roles.PRIVY_CM_EDITOR]: [],
    [Roles.PRIVY_CM_ADMIN]: [],
    [Roles.PRIVY_CM_SCAN_OPERATOR]: []
};
}),
"[project]/lib/rbac-config.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
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
 */ // RBAC Configuration - Single Source of Truth
// Re-export constants from centralized location
__turbopack_context__.s([
    "getRolePermissions",
    ()=>getRolePermissions,
    "hasConfigPermission",
    ()=>hasConfigPermission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
;
;
function getRolePermissions(roleName) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROLE_PERMISSIONS"][roleName] || [];
}
function hasConfigPermission(roleNames, resource, action) {
    for (const roleName of roleNames){
        const permissions = getRolePermissions(roleName);
        for (const permission of permissions){
            // Admin wildcard check
            if (permission === "*:*") {
                return true;
            }
            const [permResource, permAction] = permission.split(":");
            // Resource wildcard check (e.g., "USER:*")
            if (permResource === resource && permAction === "*") {
                return true;
            }
            // Action wildcard check (e.g., "*:READ")
            if (permResource === "*" && permAction === action) {
                return true;
            }
            // Exact match check
            if (permResource === resource && permAction === action) {
                return true;
            }
        }
    }
    return false;
}
}),
"[project]/lib/rbac-config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Actions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"],
    "ROLE_PERMISSIONS",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROLE_PERMISSIONS"],
    "Resources",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"],
    "Roles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Roles"],
    "getRolePermissions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getRolePermissions"],
    "hasConfigPermission",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasConfigPermission"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/rbac-config.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
}),
"[project]/lib/rbac.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
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
 */ // Re-export everything from rbac-config for backward compatibility
__turbopack_context__.s([
    "canAccessAdmin",
    ()=>canAccessAdmin,
    "checkPermission",
    ()=>checkPermission,
    "getUserRoleNames",
    ()=>getUserRoleNames,
    "hasPermission",
    ()=>hasPermission,
    "isAdmin",
    ()=>isAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/rbac-config.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
;
;
function hasPermission(userRoles, resource, action) {
    if (!userRoles || userRoles.length === 0) {
        return false;
    }
    const roleNames = userRoles.map((ur)=>ur.role.name);
    // Import here to avoid circular dependency
    const { hasConfigPermission } = __turbopack_context__.r("[project]/lib/rbac-config.ts [app-rsc] (ecmascript)");
    return hasConfigPermission(roleNames, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"][resource], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"][action]);
}
function canAccessAdmin(userRoles) {
    return hasPermission(userRoles, "ADMIN", "READ");
}
function getUserRoleNames(userRoles) {
    return userRoles.map((ur)=>ur.role.name);
}
function isAdmin(userRoles) {
    return userRoles.some((ur)=>ur.role.name === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Roles"].PRIVY_CGP_ADMIN);
}
async function checkPermission(resource, action) {
    try {
        const { auth } = await __turbopack_context__.A("[project]/auth.ts [app-rsc] (ecmascript, async loader)");
        const session = await auth();
        if (!session?.user?.roles) return false;
        return hasPermission(session.user.roles, resource, action);
    } catch  {
        return false;
    }
}
}),
"[project]/lib/safe-action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "_setMockSession",
    ()=>_setMockSession,
    "createSafeAction",
    ()=>createSafeAction,
    "verifyPermission",
    ()=>verifyPermission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/rbac.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audit.ts [app-rsc] (ecmascript)");
;
;
;
;
// --- TEST UTILITIES START ---
let mockSession = undefined; // undefined means "not set", null means "logged out"
const _setMockSession = (session)=>{
    if (("TURBOPACK compile-time value", "development") === "test" || process.env.RBAC_TEST_MODE === "true") {
        mockSession = session;
    } else {
        console.warn("Attempted to set mock session in non-test environment");
    }
};
async function verifyPermission(resource, action) {
    const session = process.env.RBAC_TEST_MODE === "true" && mockSession !== undefined ? mockSession : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user || !session.user.id) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("Access attempt without session", {
            resource,
            action
        });
        throw new Error("Unauthorized");
    }
    const userRoles = session.user.roles || [];
    const isAllowed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasPermission"])(userRoles, resource, action);
    if (!isAllowed) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("Permission denied", {
            userId: session.user.id,
            resource,
            action,
            roles: userRoles.map((r)=>r.role.name)
        });
        throw new Error("Permission Denied");
    }
    return session.user;
}
function createSafeAction(permission, schema, handler) {
    return async (data)=>{
        let session;
        try {
            // 1. Authentication Check
            session = process.env.RBAC_TEST_MODE === "true" && mockSession !== undefined ? mockSession : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
            if (!session?.user || !session.user.id) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("Action attempt without session", {
                    resource: permission.resource,
                    action: permission.action
                });
                return {
                    success: false,
                    error: "Unauthorized: You must be logged in to perform this action."
                };
            }
            // 2. Permission Check
            const userRoles = session.user.roles || [];
            const isAllowed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasPermission"])(userRoles, permission.resource, permission.action);
            if (!isAllowed) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("Action permission denied", {
                    userId: session.user.id,
                    resource: permission.resource,
                    action: permission.action,
                    roles: userRoles.map((r)=>r.role.name)
                });
                return {
                    success: false,
                    error: `Permission Denied: You do not have permission to ${permission.action} ${permission.resource}.`
                };
            }
            // 3. Input Validation
            const validationResult = schema.safeParse(data);
            if (!validationResult.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn("Action validation failed", {
                    userId: session.user.id,
                    resource: permission.resource,
                    action: permission.action,
                    errors: validationResult.error.flatten().fieldErrors
                });
                return {
                    success: false,
                    error: "Invalid Input",
                    validationErrors: validationResult.error.flatten().fieldErrors
                };
            }
            // 4. Execution
            const result = await handler(validationResult.data, {
                id: session.user.id,
                email: session.user.email || "",
                name: session.user.name,
                roles: userRoles
            });
            // 5. Auditing
            if ([
                "CREATE",
                "UPDATE",
                "DELETE"
            ].includes(permission.action)) {
                const resourceId = result?.id || data?.userId || data?.id;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAudit"])({
                    action: permission.action,
                    resource: permission.resource,
                    resourceId,
                    performedByUserId: session.user.id,
                    payload: validationResult.data,
                    result: result,
                    status: "SUCCESS"
                });
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].info("Action executed successfully", {
                userId: session.user.id,
                resource: permission.resource,
                action: permission.action
            });
            return {
                success: true,
                data: result
            };
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error(`Error in safe action [${permission.resource}:${permission.action}]`, error);
            // Auditing (Failure)
            if ([
                "CREATE",
                "UPDATE",
                "DELETE"
            ].includes(permission.action)) {
                const resourceId = data?.userId || data?.id;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAudit"])({
                    action: permission.action,
                    resource: permission.resource,
                    resourceId,
                    performedByUserId: session?.user?.id,
                    payload: data,
                    status: "FAILURE",
                    failureReason: error instanceof Error ? error.message : "Unknown error"
                });
            }
            return {
                success: false,
                error: error instanceof Error ? error.message : "An unexpected error occurred"
            };
        }
    };
}
}),
"[project]/lib/schemas/user-attribute-schemas.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "userAttributeSchema",
    ()=>userAttributeSchema,
    "userAttributeUpdateSchema",
    ()=>userAttributeUpdateSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const userAttributeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, "Name should be atleast 3 characters long"),
    pii: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
});
const userAttributeUpdateSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, "Name should be atleast 3 characters long"),
    pii: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
});
}),
"[project]/lib/services/user-attributes-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "checkUserAttributeNameExists",
    ()=>checkUserAttributeNameExists,
    "createUserAttribute",
    ()=>createUserAttribute,
    "deleteUserAttribute",
    ()=>deleteUserAttribute,
    "getAllUserAttributes",
    ()=>getAllUserAttributes,
    "getUserAttributeById",
    ()=>getUserAttributeById,
    "getUserAttributeByName",
    ()=>getUserAttributeByName,
    "updateUserAttribute",
    ()=>updateUserAttribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
;
async function getAllUserAttributes() {
    try {
        const userAttributes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findMany({
            orderBy: {
                updatedAt: "desc"
            }
        });
        return userAttributes;
    } catch (error) {
        console.error("Error fetching user attributes:", error);
        throw new Error("Failed to fetch purpose attributes");
    }
}
async function getUserAttributeById(id) {
    try {
        const userAttribute = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findUnique({
            where: {
                id
            }
        });
        return userAttribute;
    } catch (error) {
        console.error("Error fetching user attribute:", error);
        throw new Error("Failed to fetch purpose attribute");
    }
}
async function createUserAttribute(data) {
    try {
        const userAttribute = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.create({
            data: {
                name: data.name,
                pii: data.pii,
                supportedLanguages: data.supportedLanguages || [
                    "en"
                ],
                translations: {}
            }
        });
        return userAttribute;
    } catch (error) {
        console.error("Error creating user attribute:", error);
        throw new Error("Failed to create purpose attribute");
    }
}
async function updateUserAttribute(id, data) {
    try {
        const userAttribute = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.update({
            where: {
                id
            },
            data
        });
        return userAttribute;
    } catch (error) {
        console.error("Error updating user attribute:", error);
        throw new Error("Failed to update purpose attribute");
    }
}
async function deleteUserAttribute(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.delete({
            where: {
                id
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting user attribute:", error);
        throw new Error("Failed to delete purpose attribute");
    }
}
async function getUserAttributeByName(name) {
    try {
        const userAttribute = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: "insensitive"
                }
            }
        });
        return userAttribute;
    } catch (error) {
        console.error("Error fetching user attribute by name:", error);
        throw new Error("Failed to fetch purpose attribute");
    }
}
async function checkUserAttributeNameExists(name, excludeId) {
    try {
        const userAttribute = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].userAttribute.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: "insensitive"
                }
            }
        });
        if (!userAttribute) {
            return false;
        }
        // If excludeId is provided, check if the found user attribute is different
        if (excludeId && userAttribute.id === excludeId) {
            return false;
        }
        return true;
    } catch (error) {
        console.error("Error checking user attribute name:", error);
        throw new Error("Failed to check purpose attribute name");
    }
}
}),
"[project]/actions/user-attributes.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0089c06116eba5f35732ad2fa20a54a2f54a2933b7":"getUserAttributes","40712857139aa383924988a98c23e63d28f306ede9":"getUserAttributeById","6096209706167150df0150ee7b81be2e67e03b7ecd":"checkUserAttributeNameExists","7f3625d89c07b001408d22741afefba6284189ad67":"createUserAttribute","7fb0323df0acbdbfef96678fea5a8e4c2d63e99681":"updateUserAttribute","7fd8ceb1918e176c73f26b58bbc4a6953ee5650e0a":"deleteUserAttribute"},"",""] */ __turbopack_context__.s([
    "checkUserAttributeNameExists",
    ()=>checkUserAttributeNameExists,
    "createUserAttribute",
    ()=>createUserAttribute,
    "deleteUserAttribute",
    ()=>deleteUserAttribute,
    "getUserAttributeById",
    ()=>getUserAttributeById,
    "getUserAttributes",
    ()=>getUserAttributes,
    "updateUserAttribute",
    ()=>updateUserAttribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/safe-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$user$2d$attribute$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schemas/user-attribute-schemas.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$user$2d$attributes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/user-attributes-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function getUserAttributes() {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$user$2d$attributes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllUserAttributes"])();
    } catch (error) {
        console.error("Error in getUserAttributes action:", error);
        return [];
    }
}
async function getUserAttributeById(id) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$user$2d$attributes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserAttributeById"])(id);
    } catch (error) {
        console.error("Error in getUserAttributeById action:", error);
        return null;
    }
}
const deleteUserAttributeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
const deleteUserAttribute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSafeAction"])({
    resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].USER_ATTRIBUTE,
    action: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].DELETE
}, deleteUserAttributeSchema, async (input, user)=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$user$2d$attributes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteUserAttribute"])(input.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/user-attributes");
    return true;
});
const createUserAttribute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSafeAction"])({
    resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].USER_ATTRIBUTE,
    action: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].CREATE
}, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$user$2d$attribute$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["userAttributeSchema"], async (data, user)=>{
    // Check if name already exists (case-insensitive)
    const nameExists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$user$2d$attributes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkUserAttributeNameExists"])(data.name);
    if (nameExists) {
        throw new Error("Purpose attribute name already exists");
    }
    const userAttribute = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$user$2d$attributes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createUserAttribute"])(data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/user-attributes");
    return userAttribute;
});
const updateUserAttributeWithIdSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    data: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$user$2d$attribute$2d$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["userAttributeUpdateSchema"]
});
const updateUserAttribute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSafeAction"])({
    resource: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].USER_ATTRIBUTE,
    action: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].UPDATE
}, updateUserAttributeWithIdSchema, async (input, user)=>{
    // Check if name already exists (excluding current user attribute)
    const nameExists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$user$2d$attributes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkUserAttributeNameExists"])(input.data.name, input.id);
    if (nameExists) {
        throw new Error("Purpose attribute name already exists");
    }
    const userAttribute = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$user$2d$attributes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUserAttribute"])(input.id, input.data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cms/data-fiduciary/user-attributes");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/cms/data-fiduciary/user-attributes/${input.id}`);
    return userAttribute;
});
async function checkUserAttributeNameExists(name, excludeId) {
    try {
        // TODO: Add RBAC check here
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$user$2d$attributes$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkUserAttributeNameExists"])(name, excludeId);
    } catch (error) {
        console.error("Error in checkUserAttributeNameExists action:", error);
        return false;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getUserAttributes,
    getUserAttributeById,
    deleteUserAttribute,
    createUserAttribute,
    updateUserAttribute,
    checkUserAttributeNameExists
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserAttributes, "0089c06116eba5f35732ad2fa20a54a2f54a2933b7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserAttributeById, "40712857139aa383924988a98c23e63d28f306ede9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteUserAttribute, "7fd8ceb1918e176c73f26b58bbc4a6953ee5650e0a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createUserAttribute, "7f3625d89c07b001408d22741afefba6284189ad67", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUserAttribute, "7fb0323df0acbdbfef96678fea5a8e4c2d63e99681", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkUserAttributeNameExists, "6096209706167150df0150ee7b81be2e67e03b7ecd", null);
}),
"[project]/.next-internal/server/app/cms/data-fiduciary/user-attributes/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/translations.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/actions/auto-translate.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/actions/user-attributes.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$translations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/translations.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auto$2d$translate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/auto-translate.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2d$attributes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/user-attributes.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/cms/data-fiduciary/user-attributes/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/actions/translations.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/actions/auto-translate.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/actions/user-attributes.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0060c229d5c44aa39a52b0da063b4e763444cd1280",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "702efd457dbb3f47693eb2907684303998765df5b7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$translations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUserAttributeTranslation"],
    "704ce32ef850c2bb4b6f4d46e757bc9db118d35e04",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auto$2d$translate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translateTextToLanguages"],
    "706a268d80ff66c982e5e3f3b6e8f46051ad64ac85",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auto$2d$translate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["autoTranslateUserAttribute"],
    "7f3625d89c07b001408d22741afefba6284189ad67",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2d$attributes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createUserAttribute"],
    "7fb0323df0acbdbfef96678fea5a8e4c2d63e99681",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2d$attributes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUserAttribute"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$cms$2f$data$2d$fiduciary$2f$user$2d$attributes$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$actions$2f$translations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$auto$2d$translate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$user$2d$attributes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/cms/data-fiduciary/user-attributes/new/page/actions.js { ACTIONS_MODULE0 => "[project]/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/actions/translations.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/actions/auto-translate.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/actions/user-attributes.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$translations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/translations.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$auto$2d$translate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/auto-translate.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2d$attributes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/user-attributes.ts [app-rsc] (ecmascript)");
}),
"[project]/app/cms/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/cms/data-fiduciary/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/data-fiduciary/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/cms/data-fiduciary/user-attributes/_components/user-attribute-form.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "UserAttributeForm",
    ()=>UserAttributeForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const UserAttributeForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UserAttributeForm() from the server but UserAttributeForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/user-attributes/_components/user-attribute-form.tsx <module evaluation>", "UserAttributeForm");
}),
"[project]/app/cms/data-fiduciary/user-attributes/_components/user-attribute-form.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "UserAttributeForm",
    ()=>UserAttributeForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const UserAttributeForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UserAttributeForm() from the server but UserAttributeForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/cms/data-fiduciary/user-attributes/_components/user-attribute-form.tsx", "UserAttributeForm");
}),
"[project]/app/cms/data-fiduciary/user-attributes/_components/user-attribute-form.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$user$2d$attributes$2f$_components$2f$user$2d$attribute$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/user-attributes/_components/user-attribute-form.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$user$2d$attributes$2f$_components$2f$user$2d$attribute$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/user-attributes/_components/user-attribute-form.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$user$2d$attributes$2f$_components$2f$user$2d$attribute$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/cms/data-fiduciary/user-attributes/new/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "default",
    ()=>NewUserAttributePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/safe-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$user$2d$attributes$2f$_components$2f$user$2d$attribute$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cms/data-fiduciary/user-attributes/_components/user-attribute-form.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function NewUserAttributePage() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPermission"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resources"].USER_ATTRIBUTE, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Actions"].CREATE);
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/cms/forbidden");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-4 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f$data$2d$fiduciary$2f$user$2d$attributes$2f$_components$2f$user$2d$attribute$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserAttributeForm"], {
            mode: "new"
        }, void 0, false, {
            fileName: "[project]/app/cms/data-fiduciary/user-attributes/new/page.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cms/data-fiduciary/user-attributes/new/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cms/data-fiduciary/user-attributes/new/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/cms/data-fiduciary/user-attributes/new/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b2dda1fd._.js.map