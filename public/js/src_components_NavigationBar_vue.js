/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_components_NavigationBar_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/NavigationBar.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/NavigationBar.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ \"./src/components/globals.js\");\n\nconst __default__ = {\n  data() {\n    return {\n      menuStyleObject: {}\n    };\n  },\n  methods: {\n    updateStyles() {\n      if (_globals__WEBPACK_IMPORTED_MODULE_0__[\"default\"].authManager.isSignedIn) {\n        _globals__WEBPACK_IMPORTED_MODULE_0__[\"default\"].authManager.getSelectedTheme().then(selectedTheme => {\n          this.updateSelectedTheme(selectedTheme);\n        });\n      }\n    },\n    updateSelectedTheme(selectedTheme) {\n      // Foreground color\n      document.querySelector(\"#menu\").style.backgroundColor = selectedTheme.fgColor;\n      document.querySelectorAll(\".menubackground\").forEach(elem => {\n        elem.style.backgroundColor = selectedTheme.fgColor;\n      });\n\n      // Accent color\n      document.querySelectorAll(\".linkClass\").forEach(elem => {\n        elem.style.color = selectedTheme.accentColor;\n      });\n      document.querySelector(\"#menubutton\").style.color = selectedTheme.accentColor;\n    }\n  },\n  mounted() {\n    _globals__WEBPACK_IMPORTED_MODULE_0__[\"default\"].authManager.beginListening(this.updateStyles);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object.assign(__default__, {\n  __name: 'NavigationBar',\n  setup(__props, {\n    expose\n  }) {\n    expose();\n    let menuPosition = 0;\n    let open = false;\n    const menuSize = 100;\n    const openTime = 1.0;\n    function openMenu() {\n      menuPosition += menuSize / (openTime * 1000 / 20);\n      if (menuPosition > menuSize) menuPosition = menuSize;\n      document.getElementById(\"menu\").style.top = menuPosition - 100 + \"%\";\n      if (menuPosition < menuSize && open) {\n        setTimeout(() => {\n          openMenu();\n        }, 20);\n      }\n    }\n    function closeMenu() {\n      menuPosition -= menuSize / (openTime * 1000 / 20);\n      if (menuPosition < 0) menuPosition = 0;\n      document.getElementById(\"menu\").style.top = menuPosition - 100 + \"%\";\n      if (menuPosition > 0 && !open) {\n        setTimeout(() => {\n          closeMenu();\n        }, 20);\n      }\n    }\n    function clickMenu() {\n      open = !open;\n      if (open) {\n        openMenu();\n      } else {\n        closeMenu();\n      }\n    }\n    function signOut() {\n      /* eslint-disable */\n      _globals__WEBPACK_IMPORTED_MODULE_0__[\"default\"].authManager.signOut();\n    }\n    const __returned__ = {\n      get menuPosition() {\n        return menuPosition;\n      },\n      set menuPosition(v) {\n        menuPosition = v;\n      },\n      get open() {\n        return open;\n      },\n      set open(v) {\n        open = v;\n      },\n      menuSize,\n      openTime,\n      openMenu,\n      closeMenu,\n      clickMenu,\n      signOut,\n      get globals() {\n        return _globals__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n}));\n\n//# sourceURL=webpack://frontend/./src/components/NavigationBar.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/NavigationBar.vue?vue&type=template&id=d1a7e442&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/NavigationBar.vue?vue&type=template&id=d1a7e442&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-d1a7e442\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"menubackground\"\n}, null, -1 /* HOISTED */));\nconst _hoisted_2 = {\n  id: \"menu\"\n};\nconst _hoisted_3 = {\n  id: \"links\"\n};\nconst _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */));\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */));\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */));\nconst _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"RouterLink\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" TODO: Eric, make the links look nicer \"), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($data.menuStyleObject),\n    class: \"linkClass\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Home\")]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"style\"]), _hoisted_4, _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/themestore\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($data.menuStyleObject),\n    class: \"linkClass\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Theme Store\")]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"style\"]), _hoisted_6, _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: $setup.signOut,\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($data.menuStyleObject),\n    class: \"linkClass\"\n  }, \"Sign Out\", 4 /* STYLE */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: \"menuicon\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    id: \"menubutton\",\n    onClick: $setup.clickMenu,\n    class: \"material-symbols-outlined\"\n  }, \"menu\")])], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://frontend/./src/components/NavigationBar.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/NavigationBar.vue?vue&type=style&index=0&id=d1a7e442&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/NavigationBar.vue?vue&type=style&index=0&id=d1a7e442&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.menubackground[data-v-d1a7e442] {\\r\\n    position: fixed;\\r\\n    top: 0px;\\r\\n    left: 0px;\\r\\n    width: 100%;\\r\\n    height: 35px;\\r\\n    /* background-color: navy; */\\r\\n    z-index: 10;\\n}\\n#menu[data-v-d1a7e442] {\\r\\n    position: fixed;\\r\\n    top: -100%;\\r\\n    left: 0px;\\r\\n    width: 300px;\\r\\n    height: 100%;\\r\\n    /* background-color: navy; */\\r\\n    border-radius: 0 0 30px 0;\\r\\n    z-index: 10;\\n}\\n#links[data-v-d1a7e442] {\\r\\n    position: relative;\\r\\n    top: 5%;\\r\\n    left: 10px;\\r\\n    text-align:left;\\r\\n    text-justify: left;\\r\\n    z-index: 10;\\n}\\n.linkClass[data-v-d1a7e442] {\\r\\n    /* color: white; */\\r\\n    font-size: xx-large;\\r\\n    text-decoration: none;\\r\\n    text-align:left;\\r\\n    text-justify: left;\\r\\n    z-index: 10;\\r\\n    cursor:pointer;\\r\\n    background-color: transparent;\\r\\n    border-width: 0px;\\r\\n    padding: 0px 0px 0px 0px\\n}\\n.material-symbols-outlined[data-v-d1a7e442] {\\r\\n    /* color: white; */\\r\\n    background-color: transparent;\\r\\n    box-shadow: 0 0px 0px rgba(0, 0, 0, 0);\\r\\n    border: 0px solid #3498db;\\r\\n    font-variation-settings:\\r\\n    'FILL' 0,\\r\\n    'wght' 400,\\r\\n    'GRAD' 0,\\r\\n    'opsz' 48\\n}\\n#menubutton[data-v-d1a7e442] {\\r\\n    font-size: x-large;\\r\\n    justify-content: left;\\r\\n    text-align: left;\\r\\n    position: fixed;\\r\\n    top: 0px;\\r\\n    left: 20px;\\r\\n    width: 40px;\\r\\n    height: 35px;\\r\\n    /* color: white; */\\r\\n    margin: 0px 0px 0px 0px;\\r\\n    z-index: 10;\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://frontend/./src/components/NavigationBar.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/components/NavigationBar.vue":
/*!******************************************!*\
  !*** ./src/components/NavigationBar.vue ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NavigationBar_vue_vue_type_template_id_d1a7e442_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationBar.vue?vue&type=template&id=d1a7e442&scoped=true */ \"./src/components/NavigationBar.vue?vue&type=template&id=d1a7e442&scoped=true\");\n/* harmony import */ var _NavigationBar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationBar.vue?vue&type=script&setup=true&lang=js */ \"./src/components/NavigationBar.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _NavigationBar_vue_vue_type_style_index_0_id_d1a7e442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationBar.vue?vue&type=style&index=0&id=d1a7e442&scoped=true&lang=css */ \"./src/components/NavigationBar.vue?vue&type=style&index=0&id=d1a7e442&scoped=true&lang=css\");\n/* harmony import */ var C_Users_benderet_Desktop_School_CSSE280_untitled_idle_game_frontend_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,C_Users_benderet_Desktop_School_CSSE280_untitled_idle_game_frontend_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_NavigationBar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_NavigationBar_vue_vue_type_template_id_d1a7e442_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-d1a7e442\"],['__file',\"src/components/NavigationBar.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://frontend/./src/components/NavigationBar.vue?");

/***/ }),

/***/ "./src/components/NavigationBar.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************!*\
  !*** ./src/components/NavigationBar.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationBar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationBar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavigationBar.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/NavigationBar.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://frontend/./src/components/NavigationBar.vue?");

/***/ }),

/***/ "./src/components/NavigationBar.vue?vue&type=template&id=d1a7e442&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/components/NavigationBar.vue?vue&type=template&id=d1a7e442&scoped=true ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationBar_vue_vue_type_template_id_d1a7e442_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationBar_vue_vue_type_template_id_d1a7e442_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavigationBar.vue?vue&type=template&id=d1a7e442&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/NavigationBar.vue?vue&type=template&id=d1a7e442&scoped=true\");\n\n\n//# sourceURL=webpack://frontend/./src/components/NavigationBar.vue?");

/***/ }),

/***/ "./src/components/NavigationBar.vue?vue&type=style&index=0&id=d1a7e442&scoped=true&lang=css":
/*!**************************************************************************************************!*\
  !*** ./src/components/NavigationBar.vue?vue&type=style&index=0&id=d1a7e442&scoped=true&lang=css ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationBar_vue_vue_type_style_index_0_id_d1a7e442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavigationBar.vue?vue&type=style&index=0&id=d1a7e442&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/NavigationBar.vue?vue&type=style&index=0&id=d1a7e442&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationBar_vue_vue_type_style_index_0_id_d1a7e442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationBar_vue_vue_type_style_index_0_id_d1a7e442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationBar_vue_vue_type_style_index_0_id_d1a7e442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavigationBar_vue_vue_type_style_index_0_id_d1a7e442_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://frontend/./src/components/NavigationBar.vue?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/NavigationBar.vue?vue&type=style&index=0&id=d1a7e442&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/NavigationBar.vue?vue&type=style&index=0&id=d1a7e442&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavigationBar.vue?vue&type=style&index=0&id=d1a7e442&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/NavigationBar.vue?vue&type=style&index=0&id=d1a7e442&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"136a8562\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://frontend/./src/components/NavigationBar.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ })

}]);