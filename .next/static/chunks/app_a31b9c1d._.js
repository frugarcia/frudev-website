(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_a31b9c1d._.js", {

"[project]/app/data/navigation.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"path\":\"about\",\"label\":\"Sobre mí\"},{\"path\":\"portfolio\",\"label\":\"Portfolio\"},{\"path\":\"contact\",\"label\":\"Contacto\"}]"));}}),
"[project]/app/components/Header/Header.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "active": "Header-module__D5nTzG__active",
  "burger-button": "Header-module__D5nTzG__burger-button",
  "container": "Header-module__D5nTzG__container",
  "dark": "Header-module__D5nTzG__dark",
  "header": "Header-module__D5nTzG__header",
  "is-active": "Header-module__D5nTzG__is-active",
  "menu": "Header-module__D5nTzG__menu",
});
}}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/Header/Header.module.css [app-client] (css module)");
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
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    onClick: this.handleBurgerMenu,
                    className: `${burgerBtnClass} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["burger-button"]}`,
                    id: "burger-button"
                }, void 0, false, {
                    fileName: "[project]/app/components/Header/HeaderComponent.js",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            activeClass: "active",
                            to: "app",
                            spy: true,
                            smooth: true,
                            duration: 500,
                            onClick: this.handleLink,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].figure,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    alt: "logo de frudev",
                                    src: "images/logo.svg",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].img
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header/HeaderComponent.js",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header/HeaderComponent.js",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header/HeaderComponent.js",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu} ${menuActive ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["is-active"] : ""}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ul,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$navigation$2e$json__$28$json$29$__["default"].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].li,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                            activeClass: "active",
                                            to: item.path,
                                            spy: true,
                                            smooth: true,
                                            duration: 500,
                                            onClick: this.handleLink,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].a,
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header/HeaderComponent.js",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/app/components/Header/HeaderComponent.js",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header/HeaderComponent.js",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header/HeaderComponent.js",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Header/HeaderComponent.js",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Header/HeaderComponent.js",
            lineNumber: 31,
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

//# sourceMappingURL=app_a31b9c1d._.js.map