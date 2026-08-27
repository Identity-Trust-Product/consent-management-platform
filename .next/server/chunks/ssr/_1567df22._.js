module.exports = [
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
"[project]/lib/schemas/business-unit-schemas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "businessUnitSchema",
    ()=>businessUnitSchema,
    "generateRandomCode",
    ()=>generateRandomCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
const businessUnitSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, "Name should be at least 3 characters long").max(255, "Name must be less than 255 characters"),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Code is required").max(50, "Code must be less than 50 characters")
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
"[project]/actions/data:dcb027 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f7bb6a614de30e742aa9ceb488250395b24259c7b":"createBusinessUnit"},"actions/business-units.ts",""] */ __turbopack_context__.s([
    "createBusinessUnit",
    ()=>createBusinessUnit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createBusinessUnit = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7f7bb6a614de30e742aa9ceb488250395b24259c7b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createBusinessUnit"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYnVzaW5lc3MtdW5pdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcbi8qKlxyXG4gKiBPcGVuIEJoYXJhdCBEaWdpdGFsIENvbnNlbnQgYnkgSURmeVxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjUgQmFsZG9yIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQgKElEZnkpXHJcbiAqIFxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBQcml2eSBQdWJsaWMgTGljZW5zZS5cclxuICogU2VlIExJQ0VOU0UubWQgZm9yIHRoZSBmdWxsIHRlcm1zIG9mIHVzZS5cclxuICogXHJcbiAqIFVuYXV0aG9yaXplZCBjb3B5aW5nLCBtb2RpZmljYXRpb24sIGRpc3RyaWJ1dGlvbiwgb3IgY29tbWVyY2lhbCB1c2VcclxuICogaXMgc3RyaWN0bHkgcHJvaGliaXRlZCB3aXRob3V0IHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbiBmcm9tIElEZnkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQge1xyXG4gIGJ1c2luZXNzVW5pdFNjaGVtYSxcclxuICB0eXBlIEJ1c2luZXNzVW5pdEZvcm1TY2hlbWEsXHJcbn0gZnJvbSBcIkAvbGliL3NjaGVtYXMvYnVzaW5lc3MtdW5pdC1zY2hlbWFzXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0QWxsQnVzaW5lc3NVbml0cyBhcyBnZXRBbGxCdXNpbmVzc1VuaXRzU2VydmljZSxcclxuICBnZXRCdXNpbmVzc1VuaXRCeUlkIGFzIGdldEJ1c2luZXNzVW5pdEJ5SWRTZXJ2aWNlLFxyXG4gIGNyZWF0ZUJ1c2luZXNzVW5pdCBhcyBjcmVhdGVCdXNpbmVzc1VuaXRTZXJ2aWNlLFxyXG4gIHVwZGF0ZUJ1c2luZXNzVW5pdCBhcyB1cGRhdGVCdXNpbmVzc1VuaXRTZXJ2aWNlLFxyXG4gIGRlbGV0ZUJ1c2luZXNzVW5pdCBhcyBkZWxldGVCdXNpbmVzc1VuaXRTZXJ2aWNlLFxyXG4gIGNoZWNrQnVzaW5lc3NVbml0Q29kZUV4aXN0cyBhcyBjaGVja0J1c2luZXNzVW5pdENvZGVFeGlzdHNTZXJ2aWNlLFxyXG59IGZyb20gXCJAL2xpYi9zZXJ2aWNlcy9idXNpbmVzcy11bml0cy1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNhZmVBY3Rpb24sIHZlcmlmeVBlcm1pc3Npb24gfSBmcm9tIFwiQC9saWIvc2FmZS1hY3Rpb25cIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgUmVzb3VyY2VzIH0gZnJvbSBcIkAvbGliL3JiYWNcIjtcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIkAvbGliL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJ1c2luZXNzVW5pdHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHZlcmlmeVBlcm1pc3Npb24oUmVzb3VyY2VzLkJVU0lORVNTX1VOSVQsIEFjdGlvbnMuUkVBRCk7XHJcbiAgICByZXR1cm4gYXdhaXQgZ2V0QWxsQnVzaW5lc3NVbml0c1NlcnZpY2UoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbG9nZ2VyLmVycm9yKFwiRXJyb3IgaW4gZ2V0QnVzaW5lc3NVbml0cyBhY3Rpb246XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCdXNpbmVzc1VuaXRCeUlkKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgdmVyaWZ5UGVybWlzc2lvbihSZXNvdXJjZXMuQlVTSU5FU1NfVU5JVCwgQWN0aW9ucy5SRUFEKTtcclxuICAgIHJldHVybiBhd2FpdCBnZXRCdXNpbmVzc1VuaXRCeUlkU2VydmljZShpZCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGxvZ2dlci5lcnJvcihcIkVycm9yIGluIGdldEJ1c2luZXNzVW5pdEJ5SWQgYWN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVCdXNpbmVzc1VuaXQgPSBjcmVhdGVTYWZlQWN0aW9uKFxyXG4gIHsgcmVzb3VyY2U6IFJlc291cmNlcy5CVVNJTkVTU19VTklULCBhY3Rpb246IEFjdGlvbnMuREVMRVRFIH0sXHJcbiAgei5vYmplY3QoeyBpZDogei5udW1iZXIoKSB9KSxcclxuICBhc3luYyAoeyBpZCB9KSA9PiB7XHJcbiAgICBhd2FpdCBkZWxldGVCdXNpbmVzc1VuaXRTZXJ2aWNlKGlkKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS9idXNpbmVzcy11bml0c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQnVzaW5lc3NVbml0ID0gY3JlYXRlU2FmZUFjdGlvbihcclxuICB7IHJlc291cmNlOiBSZXNvdXJjZXMuQlVTSU5FU1NfVU5JVCwgYWN0aW9uOiBBY3Rpb25zLkNSRUFURSB9LFxyXG4gIGJ1c2luZXNzVW5pdFNjaGVtYSxcclxuICBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgLy8gQ2hlY2sgaWYgY29kZSBhbHJlYWR5IGV4aXN0c1xyXG4gICAgY29uc3QgY29kZUV4aXN0cyA9IGF3YWl0IGNoZWNrQnVzaW5lc3NVbml0Q29kZUV4aXN0c1NlcnZpY2UoZGF0YS5jb2RlKTtcclxuICAgIGlmIChjb2RlRXhpc3RzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRlcGFydG1lbnQgY29kZSBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnVzaW5lc3NVbml0ID0gYXdhaXQgY3JlYXRlQnVzaW5lc3NVbml0U2VydmljZShkYXRhKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS9idXNpbmVzcy11bml0c1wiKTtcclxuICAgIHJldHVybiBidXNpbmVzc1VuaXQ7XHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgdXBkYXRlQnVzaW5lc3NVbml0U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGlkOiB6Lm51bWJlcigpLFxyXG4gIGRhdGE6IGJ1c2luZXNzVW5pdFNjaGVtYS5wYXJ0aWFsKCkuZXh0ZW5kKHsgYWN0aXZlOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVCdXNpbmVzc1VuaXQgPSBjcmVhdGVTYWZlQWN0aW9uKFxyXG4gIHsgcmVzb3VyY2U6IFJlc291cmNlcy5CVVNJTkVTU19VTklULCBhY3Rpb246IEFjdGlvbnMuVVBEQVRFIH0sXHJcbiAgdXBkYXRlQnVzaW5lc3NVbml0U2NoZW1hLFxyXG4gIGFzeW5jICh7IGlkLCBkYXRhIH0pID0+IHtcclxuICAgIC8vIENoZWNrIGlmIGNvZGUgYWxyZWFkeSBleGlzdHMgKGV4Y2x1ZGluZyBjdXJyZW50IGJ1c2luZXNzIHVuaXQpXHJcbiAgICBpZiAoZGF0YS5jb2RlKSB7XHJcbiAgICAgIGNvbnN0IGNvZGVFeGlzdHMgPSBhd2FpdCBjaGVja0J1c2luZXNzVW5pdENvZGVFeGlzdHNTZXJ2aWNlKFxyXG4gICAgICAgIGRhdGEuY29kZSxcclxuICAgICAgICBpZFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoY29kZUV4aXN0cykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRlcGFydG1lbnQgY29kZSBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidXNpbmVzc1VuaXQgPSBhd2FpdCB1cGRhdGVCdXNpbmVzc1VuaXRTZXJ2aWNlKGlkLCBkYXRhKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS9idXNpbmVzcy11bml0c1wiKTtcclxuICAgIHJldHVybiBidXNpbmVzc1VuaXQ7XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQnVzaW5lc3NVbml0Q29kZUV4aXN0cyhcclxuICBjb2RlOiBzdHJpbmcsXHJcbiAgZXhjbHVkZUlkPzogbnVtYmVyXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCB2ZXJpZnlQZXJtaXNzaW9uKFJlc291cmNlcy5CVVNJTkVTU19VTklULCBBY3Rpb25zLlJFQUQpO1xyXG4gICAgcmV0dXJuIGF3YWl0IGNoZWNrQnVzaW5lc3NVbml0Q29kZUV4aXN0c1NlcnZpY2UoY29kZSwgZXhjbHVkZUlkKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbG9nZ2VyLmVycm9yKFwiRXJyb3IgaW4gY2hlY2tCdXNpbmVzc1VuaXRDb2RlRXhpc3RzIGFjdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxU0E0RGEifQ==
}),
"[project]/actions/data:08a11b [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f44ed65dcc21dfffc1845247fd786088910149c3c":"updateBusinessUnit"},"actions/business-units.ts",""] */ __turbopack_context__.s([
    "updateBusinessUnit",
    ()=>updateBusinessUnit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateBusinessUnit = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7f44ed65dcc21dfffc1845247fd786088910149c3c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateBusinessUnit"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYnVzaW5lc3MtdW5pdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcbi8qKlxyXG4gKiBPcGVuIEJoYXJhdCBEaWdpdGFsIENvbnNlbnQgYnkgSURmeVxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjUgQmFsZG9yIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQgKElEZnkpXHJcbiAqIFxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBQcml2eSBQdWJsaWMgTGljZW5zZS5cclxuICogU2VlIExJQ0VOU0UubWQgZm9yIHRoZSBmdWxsIHRlcm1zIG9mIHVzZS5cclxuICogXHJcbiAqIFVuYXV0aG9yaXplZCBjb3B5aW5nLCBtb2RpZmljYXRpb24sIGRpc3RyaWJ1dGlvbiwgb3IgY29tbWVyY2lhbCB1c2VcclxuICogaXMgc3RyaWN0bHkgcHJvaGliaXRlZCB3aXRob3V0IHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbiBmcm9tIElEZnkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQge1xyXG4gIGJ1c2luZXNzVW5pdFNjaGVtYSxcclxuICB0eXBlIEJ1c2luZXNzVW5pdEZvcm1TY2hlbWEsXHJcbn0gZnJvbSBcIkAvbGliL3NjaGVtYXMvYnVzaW5lc3MtdW5pdC1zY2hlbWFzXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0QWxsQnVzaW5lc3NVbml0cyBhcyBnZXRBbGxCdXNpbmVzc1VuaXRzU2VydmljZSxcclxuICBnZXRCdXNpbmVzc1VuaXRCeUlkIGFzIGdldEJ1c2luZXNzVW5pdEJ5SWRTZXJ2aWNlLFxyXG4gIGNyZWF0ZUJ1c2luZXNzVW5pdCBhcyBjcmVhdGVCdXNpbmVzc1VuaXRTZXJ2aWNlLFxyXG4gIHVwZGF0ZUJ1c2luZXNzVW5pdCBhcyB1cGRhdGVCdXNpbmVzc1VuaXRTZXJ2aWNlLFxyXG4gIGRlbGV0ZUJ1c2luZXNzVW5pdCBhcyBkZWxldGVCdXNpbmVzc1VuaXRTZXJ2aWNlLFxyXG4gIGNoZWNrQnVzaW5lc3NVbml0Q29kZUV4aXN0cyBhcyBjaGVja0J1c2luZXNzVW5pdENvZGVFeGlzdHNTZXJ2aWNlLFxyXG59IGZyb20gXCJAL2xpYi9zZXJ2aWNlcy9idXNpbmVzcy11bml0cy1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNhZmVBY3Rpb24sIHZlcmlmeVBlcm1pc3Npb24gfSBmcm9tIFwiQC9saWIvc2FmZS1hY3Rpb25cIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgUmVzb3VyY2VzIH0gZnJvbSBcIkAvbGliL3JiYWNcIjtcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIkAvbGliL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJ1c2luZXNzVW5pdHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHZlcmlmeVBlcm1pc3Npb24oUmVzb3VyY2VzLkJVU0lORVNTX1VOSVQsIEFjdGlvbnMuUkVBRCk7XHJcbiAgICByZXR1cm4gYXdhaXQgZ2V0QWxsQnVzaW5lc3NVbml0c1NlcnZpY2UoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbG9nZ2VyLmVycm9yKFwiRXJyb3IgaW4gZ2V0QnVzaW5lc3NVbml0cyBhY3Rpb246XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCdXNpbmVzc1VuaXRCeUlkKGlkOiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgdmVyaWZ5UGVybWlzc2lvbihSZXNvdXJjZXMuQlVTSU5FU1NfVU5JVCwgQWN0aW9ucy5SRUFEKTtcclxuICAgIHJldHVybiBhd2FpdCBnZXRCdXNpbmVzc1VuaXRCeUlkU2VydmljZShpZCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGxvZ2dlci5lcnJvcihcIkVycm9yIGluIGdldEJ1c2luZXNzVW5pdEJ5SWQgYWN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVCdXNpbmVzc1VuaXQgPSBjcmVhdGVTYWZlQWN0aW9uKFxyXG4gIHsgcmVzb3VyY2U6IFJlc291cmNlcy5CVVNJTkVTU19VTklULCBhY3Rpb246IEFjdGlvbnMuREVMRVRFIH0sXHJcbiAgei5vYmplY3QoeyBpZDogei5udW1iZXIoKSB9KSxcclxuICBhc3luYyAoeyBpZCB9KSA9PiB7XHJcbiAgICBhd2FpdCBkZWxldGVCdXNpbmVzc1VuaXRTZXJ2aWNlKGlkKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS9idXNpbmVzcy11bml0c1wiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQnVzaW5lc3NVbml0ID0gY3JlYXRlU2FmZUFjdGlvbihcclxuICB7IHJlc291cmNlOiBSZXNvdXJjZXMuQlVTSU5FU1NfVU5JVCwgYWN0aW9uOiBBY3Rpb25zLkNSRUFURSB9LFxyXG4gIGJ1c2luZXNzVW5pdFNjaGVtYSxcclxuICBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgLy8gQ2hlY2sgaWYgY29kZSBhbHJlYWR5IGV4aXN0c1xyXG4gICAgY29uc3QgY29kZUV4aXN0cyA9IGF3YWl0IGNoZWNrQnVzaW5lc3NVbml0Q29kZUV4aXN0c1NlcnZpY2UoZGF0YS5jb2RlKTtcclxuICAgIGlmIChjb2RlRXhpc3RzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRlcGFydG1lbnQgY29kZSBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnVzaW5lc3NVbml0ID0gYXdhaXQgY3JlYXRlQnVzaW5lc3NVbml0U2VydmljZShkYXRhKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS9idXNpbmVzcy11bml0c1wiKTtcclxuICAgIHJldHVybiBidXNpbmVzc1VuaXQ7XHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgdXBkYXRlQnVzaW5lc3NVbml0U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIGlkOiB6Lm51bWJlcigpLFxyXG4gIGRhdGE6IGJ1c2luZXNzVW5pdFNjaGVtYS5wYXJ0aWFsKCkuZXh0ZW5kKHsgYWN0aXZlOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVCdXNpbmVzc1VuaXQgPSBjcmVhdGVTYWZlQWN0aW9uKFxyXG4gIHsgcmVzb3VyY2U6IFJlc291cmNlcy5CVVNJTkVTU19VTklULCBhY3Rpb246IEFjdGlvbnMuVVBEQVRFIH0sXHJcbiAgdXBkYXRlQnVzaW5lc3NVbml0U2NoZW1hLFxyXG4gIGFzeW5jICh7IGlkLCBkYXRhIH0pID0+IHtcclxuICAgIC8vIENoZWNrIGlmIGNvZGUgYWxyZWFkeSBleGlzdHMgKGV4Y2x1ZGluZyBjdXJyZW50IGJ1c2luZXNzIHVuaXQpXHJcbiAgICBpZiAoZGF0YS5jb2RlKSB7XHJcbiAgICAgIGNvbnN0IGNvZGVFeGlzdHMgPSBhd2FpdCBjaGVja0J1c2luZXNzVW5pdENvZGVFeGlzdHNTZXJ2aWNlKFxyXG4gICAgICAgIGRhdGEuY29kZSxcclxuICAgICAgICBpZFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoY29kZUV4aXN0cykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRlcGFydG1lbnQgY29kZSBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidXNpbmVzc1VuaXQgPSBhd2FpdCB1cGRhdGVCdXNpbmVzc1VuaXRTZXJ2aWNlKGlkLCBkYXRhKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Ntcy9kYXRhLWZpZHVjaWFyeS9idXNpbmVzcy11bml0c1wiKTtcclxuICAgIHJldHVybiBidXNpbmVzc1VuaXQ7XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQnVzaW5lc3NVbml0Q29kZUV4aXN0cyhcclxuICBjb2RlOiBzdHJpbmcsXHJcbiAgZXhjbHVkZUlkPzogbnVtYmVyXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCB2ZXJpZnlQZXJtaXNzaW9uKFJlc291cmNlcy5CVVNJTkVTU19VTklULCBBY3Rpb25zLlJFQUQpO1xyXG4gICAgcmV0dXJuIGF3YWl0IGNoZWNrQnVzaW5lc3NVbml0Q29kZUV4aXN0c1NlcnZpY2UoY29kZSwgZXhjbHVkZUlkKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgbG9nZ2VyLmVycm9yKFwiRXJyb3IgaW4gY2hlY2tCdXNpbmVzc1VuaXRDb2RlRXhpc3RzIGFjdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxU0FpRmEifQ==
}),
"[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BusinessUnitForm",
    ()=>BusinessUnitForm
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$business$2d$unit$2d$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schemas/business-unit-schemas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$dcb027__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:dcb027 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$08a11b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:08a11b [app-ssr] (ecmascript) <text/javascript>");
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
function BusinessUnitForm({ mode, businessUnit, businessUnitId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$business$2d$unit$2d$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["businessUnitSchema"]),
        mode: "onChange",
        defaultValues: {
            name: businessUnit?.name || "",
            code: businessUnit?.code || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schemas$2f$business$2d$unit$2d$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomCode"])()
        }
    });
    const { isValid } = form.formState;
    const onSubmit = async (formData)=>{
        setIsLoading(true);
        try {
            let result;
            if (mode === "new") {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$dcb027__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createBusinessUnit"])({
                    name: formData.name,
                    code: formData.code
                });
            } else {
                const id = parseInt(businessUnitId);
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$08a11b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateBusinessUnit"])({
                    id,
                    data: {
                        name: formData.name
                    }
                });
            }
            if (result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(mode === "new" ? "Department created successfully" : "Department updated successfully");
                router.push("/cms/data-fiduciary/business-units");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result.error || "An error occurred");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("An unexpected error occurred");
        } finally{
            setIsLoading(false);
        }
    };
    const handleCancel = ()=>{
        router.push("/cms/data-fiduciary/business-units");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col border rounded-t-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b px-6 py-5 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold tracking-tight",
                                children: mode === "new" ? "New Department" : "Edit Department"
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: mode === "new" ? "Create a new department" : "Update department details"
                    }, void 0, false, {
                        fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-6 py-6 pb-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Form"], {
                    ...form,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: form.handleSubmit(onSubmit),
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border p-4 pb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold mb-3",
                                            children: "General Information"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                                    control: form.control,
                                                    name: "name",
                                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                                            className: "max-w-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                    children: [
                                                                        "Department Name",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                                                            lineNumber: 148,
                                                                            columnNumber: 27
                                                                        }, void 0)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                                                    lineNumber: 146,
                                                                    columnNumber: 25
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                        placeholder: "Enter Department name",
                                                                        ...field
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                                                        lineNumber: 151,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 25
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 25
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 23
                                                        }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                                    control: form.control,
                                                    name: "code",
                                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                                            className: "max-w-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                    children: [
                                                                        "Code ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                                                            lineNumber: 168,
                                                                            columnNumber: 32
                                                                        }, void 0)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 25
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                        placeholder: "Auto-generated code",
                                                                        ...field,
                                                                        disabled: mode === "edit",
                                                                        className: mode === "edit" ? "bg-muted" : ""
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                                                        lineNumber: 171,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                                                    lineNumber: 170,
                                                                    columnNumber: 25
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 25
                                                                }, void 0),
                                                                mode === "edit" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: "Code cannot be changed once set"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                                                    lineNumber: 180,
                                                                    columnNumber: 27
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 23
                                                        }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: handleCancel,
                                        disabled: isLoading,
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        disabled: !isValid || isLoading,
                                        children: [
                                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "mr-2 h-4 w-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                                lineNumber: 202,
                                                columnNumber: 31
                                            }, this),
                                            mode === "new" ? "Save" : "Update"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cms/data-fiduciary/business-units/_components/business-unit-form.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_1567df22._.js.map