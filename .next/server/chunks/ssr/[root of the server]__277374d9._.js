module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/components/Header/Header.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

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
"[project]/app/data/navigation.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"path\":\"about\",\"label\":\"Sobre mí\"},{\"path\":\"portfolio\",\"label\":\"Portfolio\"},{\"path\":\"contact\",\"label\":\"Contacto\"}]"));}}),
"[project]/app/components/Header/HeaderComponent.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// "use client";
// import React, { Component } from "react";
// import { Link } from "react-scroll";
// import dataNavigation from "../../data/navigation.json";
// import styles from "./Header.module.css";
// class Header extends Component {
//   state = {
//     burgerBtnClass: "icon-menu",
//     menuActive: false,
//   };
//   handleBurgerMenu = (ev) => {
//     this.setState((prevState) => {
//       const burgerBtnClass =
//         prevState.burgerBtnClass === "icon-menu" ? "icon-cross" : "icon-menu";
//       const menuActive = !prevState.menuActive;
//       return { burgerBtnClass, menuActive };
//     });
//   };
//   handleLink = (ev) => {
//     if (this.state.menuActive) {
//       this.handleBurgerMenu();
//     }
//   };
//   render = () => {
//     const { menuActive, burgerBtnClass } = this.state;
//     return (
//       <header className="fixed w-full h-20 bg-blue-800 z-20" id="header">
//         <i
//           onClick={this.handleBurgerMenu}
//           className={`${burgerBtnClass} absolute top-2 right-4 z-10 w-12 h-12 rounded-full bg-opacity-20 text-white text-3xl flex items-center justify-center cursor-pointer block`}
//           id="burger-button"
//         />
//         <div className="flex items-center h-full w-3/5 ml-5 sm:ml-100 md:justify-between">
//           <Link
//             activeClass="active"
//             to={"header"}
//             spy={true}
//             smooth={true}
//             duration={500}
//             onClick={this.handleLink}
//           >
//             <figure>
//               <img
//                 alt="logo de frudev"
//                 src="/images/logo.svg"
//                 className="h-8 cursor-pointer"
//               />
//             </figure>
//           </Link>
//           <nav
//             className={`menu ${
//               menuActive ? "block" : "hidden"
//             } md:block md:flex md:items-center`}
//           >
//             <ul className="flex items-center space-x-7">
//               {dataNavigation.map((item, idx) => (
//                 <li key={idx}>
//                   <Link
//                     activeClass="active"
//                     to={item.path}
//                     spy={true}
//                     smooth={true}
//                     duration={500}
//                     onClick={this.handleLink}
//                     className="text-white font-medium text-xl transition-colors duration-300 hover:text-gray-300 cursor-pointer"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </header>
//     );
//   };
// }
// export default Header;
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Dependencies
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-scroll/modules/index.js [app-ssr] (ecmascript)");
// Assets
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/Header/Header.module.css [app-ssr] (css module)");
// Data
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$navigation$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/data/navigation.json (json)");
"use client";
;
;
;
;
;
class Header extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "header",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    onClick: this.handleBurgerMenu,
                    className: `${burgerBtnClass} burger-button`,
                    id: "burger-button"
                }, void 0, false, {
                    fileName: "[project]/app/components/Header/HeaderComponent.js",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            activeClass: "active",
                            to: "app",
                            spy: true,
                            smooth: true,
                            duration: 500,
                            onClick: this.handleLink,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    alt: "logo de frudev",
                                    src: "images/logo.svg"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header/HeaderComponent.js",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header/HeaderComponent.js",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header/HeaderComponent.js",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: `menu ${menuActive ? "is-active" : ""}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$navigation$2e$json__$28$json$29$__["default"].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2f$modules$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                            activeClass: "active",
                                            to: item.path,
                                            spy: true,
                                            smooth: true,
                                            duration: 500,
                                            onClick: this.handleLink,
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header/HeaderComponent.js",
                                            lineNumber: 146,
                                            columnNumber: 19
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/app/components/Header/HeaderComponent.js",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header/HeaderComponent.js",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header/HeaderComponent.js",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Header/HeaderComponent.js",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Header/HeaderComponent.js",
            lineNumber: 123,
            columnNumber: 7
        }, this);
    };
}
const __TURBOPACK__default__export__ = Header;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__277374d9._.js.map