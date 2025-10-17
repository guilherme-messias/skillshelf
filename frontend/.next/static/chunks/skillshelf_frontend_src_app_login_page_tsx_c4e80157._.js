(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/skillshelf/frontend/src/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginOnboarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skillshelf/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skillshelf/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skillshelf/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LoginOnboarding() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const onboardingSteps = [
        {
            title: "Cole o link de um curso para começar",
            description: "Adicione rapidamente o link de um curso que você está fazendo."
        },
        {
            title: "Veja sua prateleira em ação",
            description: "Visualize todos os cursos organizados em sua prateleira."
        },
        {
            title: "Acompanhe seu progresso visualmente",
            description: "Monitore seu avanço de forma simples e intuitiva."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-start bg-[#F5F8FA] dark:bg-[#0F172A] px-3 py-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/logo.png",
                        alt: "SkillShelf Logo",
                        width: 64,
                        height: 64
                    }, void 0, false, {
                        fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-2 text-lg font-semibold text-[#1E2A35] dark:text-[#E2E8F0] text-center",
                        children: "Organize o que você aprende."
                    }, void 0, false, {
                        fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "w-full max-w-xs flex flex-col gap-3 bg-white dark:bg-[#0F172A] rounded-xl shadow-md p-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        placeholder: "Email",
                        className: "px-4 py-3 rounded-lg border border-[#A7C7F9] dark:border-[#475569] bg-[#F5F8FA] dark:bg-[#0F172A] text-[#1E2A35] dark:text-[#E2E8F0] placeholder:text-[#A7C7F9] dark:placeholder:text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA]"
                    }, void 0, false, {
                        fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        placeholder: "Senha",
                        className: "px-4 py-3 rounded-lg border border-[#A7C7F9] dark:border-[#475569] bg-[#F5F8FA] dark:bg-[#0F172A] text-[#1E2A35] dark:text-[#E2E8F0] placeholder:text-[#A7C7F9] dark:placeholder:text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA]"
                    }, void 0, false, {
                        fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "bg-[#3B82F6] dark:bg-[#60A5FA] text-white dark:text-[#0F172A] rounded-lg py-3 font-bold text-base mt-1 transition-colors hover:bg-[#2563eb] dark:hover:bg-[#3B82F6]",
                        children: "Entrar"
                    }, void 0, false, {
                        fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "flex-1 bg-[#A7C7F9] dark:bg-[#475569] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg py-2 font-medium transition-colors hover:bg-[#FACC15] dark:hover:bg-[#EAB308] hover:text-[#1E2A35] dark:hover:text-[#0F172A]",
                                children: "Google"
                            }, void 0, false, {
                                fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "flex-1 bg-[#A7C7F9] dark:bg-[#475569] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg py-2 font-medium transition-colors hover:bg-[#FACC15] dark:hover:bg-[#EAB308] hover:text-[#1E2A35] dark:hover:text-[#0F172A]",
                                children: "GitHub"
                            }, void 0, false, {
                                fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "flex-1 bg-[#A7C7F9] dark:bg-[#475569] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg py-2 font-medium transition-colors hover:bg-[#FACC15] dark:hover:bg-[#EAB308] hover:text-[#1E2A35] dark:hover:text-[#0F172A]",
                                children: "Apple"
                            }, void 0, false, {
                                fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "text-center text-[#3B82F6] dark:text-[#60A5FA] text-sm underline mt-1 cursor-pointer hover:text-[#FACC15] dark:hover:text-[#EAB308]",
                        children: "Criar conta"
                    }, void 0, false, {
                        fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-xs bg-white dark:bg-[#0F172A] rounded-xl shadow-md p-5 flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-[#3B82F6] dark:text-[#60A5FA] font-semibold text-sm mb-1",
                                children: [
                                    step + 1,
                                    " / 3"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                                lineNumber: 78,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-base font-bold text-[#1E2A35] dark:text-[#E2E8F0] mb-1",
                                children: onboardingSteps[step].title
                            }, void 0, false, {
                                fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[#1E2A35] dark:text-[#E2E8F0] opacity-80",
                                children: onboardingSteps[step].description
                            }, void 0, false, {
                                fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-[#A7C7F9] dark:bg-[#475569] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg px-4 py-2 font-medium transition-colors disabled:bg-[#e0e0e0] dark:disabled:bg-[#1E293B] disabled:text-[#aaa] dark:disabled:text-[#475569]",
                                disabled: step === 0,
                                onClick: ()=>setStep(step - 1),
                                children: "Anterior"
                            }, void 0, false, {
                                fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                                lineNumber: 89,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skillshelf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-[#A7C7F9] dark:bg-[#475569] text-[#1E2A35] dark:text-[#E2E8F0] rounded-lg px-4 py-2 font-medium transition-colors disabled:bg-[#e0e0e0] dark:disabled:bg-[#1E293B] disabled:text-[#aaa] dark:disabled:text-[#475569]",
                                disabled: step === onboardingSteps.length - 1,
                                onClick: ()=>setStep(step + 1),
                                children: "Próximo"
                            }, void 0, false, {
                                fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                                lineNumber: 96,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                        lineNumber: 88,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/skillshelf/frontend/src/app/login/page.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_s(LoginOnboarding, "5L63dQvunH1XgKOLcNNkxeDh1IM=");
_c = LoginOnboarding;
var _c;
__turbopack_context__.k.register(_c, "LoginOnboarding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=skillshelf_frontend_src_app_login_page_tsx_c4e80157._.js.map