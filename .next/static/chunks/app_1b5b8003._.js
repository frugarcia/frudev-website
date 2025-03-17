(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_1b5b8003._.js", {

"[project]/app/data/navigation.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"path\":\"about\",\"label\":\"Sobre mí\"},{\"path\":\"portfolio\",\"label\":\"Portfolio\"},{\"path\":\"contact\",\"label\":\"Contacto\"}]"));}}),
"[project]/app/components/Header/HeaderComponent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-scroll/modules/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$navigation$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/data/navigation.json (json)");
(()=>{
    const e = new Error("Cannot find module ''");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
class Header extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    state = {
        burgerBtnClass: "icon-menu",
        menuActive: false
    };
    handleBurgerMenu = (ev)=>{
        this.setState((prevState)=>{
            const burgerBtnClass = prevState.burgerBtnClass === "icon-menu" ? "icon-cross" : "icon-menu";
            const menuActive = !prevState.menuActive;
            return {
                burgerBtnClass,
                menuActive
            };
        });
    };
    handleLink = (ev)=>{
        if (this.state.menuActive) {
            this.handleBurgerMenu();
        }
    };
    render = ()=>{
        const { menuActive, burgerBtnClass } = this.state;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "fixed w-full h-20 bg-blue-800 z-20",
            id: "header",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    onClick: this.handleBurgerMenu,
                    className: `${burgerBtnClass} absolute top-2 right-4 z-10 w-12 h-12 rounded-full bg-opacity-20 text-white text-3xl flex items-center justify-center cursor-pointer block`,
                    id: "burger-button"
                }, void 0, false, {
                    fileName: "[project]/app/components/Header/HeaderComponent.js",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center h-full w-3/5 ml-5 sm:ml-100 md:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            activeClass: "active",
                            to: "header",
                            spy: true,
                            smooth: true,
                            duration: 500,
                            onClick: this.handleLink,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    alt: "logo de frudev",
                                    src: "/images/logo.svg",
                                    className: "h-8 cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header/HeaderComponent.js",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header/HeaderComponent.js",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header/HeaderComponent.js",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: `menu ${menuActive ? "block" : "hidden"} md:block md:flex md:items-center`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex items-center space-x-7",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$navigation$2e$json__$28$json$29$__["default"].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                            activeClass: "active",
                                            to: item.path,
                                            spy: true,
                                            smooth: true,
                                            duration: 500,
                                            onClick: this.handleLink,
                                            className: "text-white font-medium text-xl transition-colors duration-300 hover:text-gray-300 cursor-pointer",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header/HeaderComponent.js",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/app/components/Header/HeaderComponent.js",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header/HeaderComponent.js",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header/HeaderComponent.js",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Header/HeaderComponent.js",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Header/HeaderComponent.js",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    };
}
const __TURBOPACK__default__export__ = Header;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_1b5b8003._.js.map