exports.ids = [25,23];
exports.modules = {

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(569);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("22c0b836", content, true, context)
};

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sticky_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sticky_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sticky_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sticky_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sticky_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*,:after,:before{box-sizing:border-box}a,b,blockquote,body,canvas,caption,code,div,em,embed,fieldset,figure,footer,form,h1,h2,h3,h4,h5,h6,header,html,i,iframe,img,label,li,main,nav,object,ol,p,pre,section,small,span,strike,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,tt,u,ul,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;text-size-adjust:none}img{border-style:none;max-width:100%;height:auto;display:block}html{line-height:1.15;-webkit-text-size-adjust:100%}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\"\";content:none}table{border-collapse:collapse;border-spacing:0}input{-webkit-appearance:none;border-radius:0}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;text-decoration:none;color:#000;display:block}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,select{text-transform:none}button,input{overflow:visible}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}@font-face{font-family:\"Neue Helvetica Medium\";font-style:normal;font-weight:400;src:local(\"Neue Helvetica Medium\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\")}@font-face{font-family:\"Neue Helvetica Thin\";font-style:normal;font-weight:400;src:local(\"Neue Helvetica Thin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\")}@font-face{font-family:\"Neue Helvetica Condensed Medium\";font-style:normal;font-weight:400;src:local(\"Neue Helvetica Condensed Medium\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\")}.container{width:90%;max-width:1920px;margin:0 auto}.row{display:flex;flex-wrap:wrap}.col{flex:1 0 0%}.col-0{flex:0 0 0%}.col-offset-0{margin-left:0}.col-1{flex:0 0 8.3333333333%}.col-offset-1{margin-left:8.3333333333%}.col-2{flex:0 0 16.6666666667%}.col-offset-2{margin-left:16.6666666667%}.col-3{flex:0 0 25%}.col-offset-3{margin-left:25%}.col-4{flex:0 0 33.3333333333%}.col-offset-4{margin-left:33.3333333333%}.col-5{flex:0 0 41.6666666667%}.col-offset-5{margin-left:41.6666666667%}.col-6{flex:0 0 50%}.col-offset-6{margin-left:50%}.col-7{flex:0 0 58.3333333333%}.col-offset-7{margin-left:58.3333333333%}.col-8{flex:0 0 66.6666666667%}.col-offset-8{margin-left:66.6666666667%}.col-9{flex:0 0 75%}.col-offset-9{margin-left:75%}.col-10{flex:0 0 83.3333333333%}.col-offset-10{margin-left:83.3333333333%}.col-11{flex:0 0 91.6666666667%}.col-offset-11{margin-left:91.6666666667%}.col-12{flex:0 0 100%}.col-offset-12{margin-left:100%}@media screen and (min-width:576px){.col-sm-0{flex:0 0 0%}.col-sm-offset-0{margin-left:0}.col-sm-1{flex:0 0 8.3333333333%}.col-sm-offset-1{margin-left:8.3333333333%}.col-sm-2{flex:0 0 16.6666666667%}.col-sm-offset-2{margin-left:16.6666666667%}.col-sm-3{flex:0 0 25%}.col-sm-offset-3{margin-left:25%}.col-sm-4{flex:0 0 33.3333333333%}.col-sm-offset-4{margin-left:33.3333333333%}.col-sm-5{flex:0 0 41.6666666667%}.col-sm-offset-5{margin-left:41.6666666667%}.col-sm-6{flex:0 0 50%}.col-sm-offset-6{margin-left:50%}.col-sm-7{flex:0 0 58.3333333333%}.col-sm-offset-7{margin-left:58.3333333333%}.col-sm-8{flex:0 0 66.6666666667%}.col-sm-offset-8{margin-left:66.6666666667%}.col-sm-9{flex:0 0 75%}.col-sm-offset-9{margin-left:75%}.col-sm-10{flex:0 0 83.3333333333%}.col-sm-offset-10{margin-left:83.3333333333%}.col-sm-11{flex:0 0 91.6666666667%}.col-sm-offset-11{margin-left:91.6666666667%}.col-sm-12{flex:0 0 100%}.col-sm-offset-12{margin-left:100%}}@media screen and (min-width:768px){.col-md-0{flex:0 0 0%}.col-md-offset-0{margin-left:0}.col-md-1{flex:0 0 8.3333333333%}.col-md-offset-1{margin-left:8.3333333333%}.col-md-2{flex:0 0 16.6666666667%}.col-md-offset-2{margin-left:16.6666666667%}.col-md-3{flex:0 0 25%}.col-md-offset-3{margin-left:25%}.col-md-4{flex:0 0 33.3333333333%}.col-md-offset-4{margin-left:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%}.col-md-offset-5{margin-left:41.6666666667%}.col-md-6{flex:0 0 50%}.col-md-offset-6{margin-left:50%}.col-md-7{flex:0 0 58.3333333333%}.col-md-offset-7{margin-left:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%}.col-md-offset-8{margin-left:66.6666666667%}.col-md-9{flex:0 0 75%}.col-md-offset-9{margin-left:75%}.col-md-10{flex:0 0 83.3333333333%}.col-md-offset-10{margin-left:83.3333333333%}.col-md-11{flex:0 0 91.6666666667%}.col-md-offset-11{margin-left:91.6666666667%}.col-md-12{flex:0 0 100%}.col-md-offset-12{margin-left:100%}}@media screen and (min-width:992px){.col-lg-0{flex:0 0 0%}.col-lg-offset-0{margin-left:0}.col-lg-1{flex:0 0 8.3333333333%}.col-lg-offset-1{margin-left:8.3333333333%}.col-lg-2{flex:0 0 16.6666666667%}.col-lg-offset-2{margin-left:16.6666666667%}.col-lg-3{flex:0 0 25%}.col-lg-offset-3{margin-left:25%}.col-lg-4{flex:0 0 33.3333333333%}.col-lg-offset-4{margin-left:33.3333333333%}.col-lg-5{flex:0 0 41.6666666667%}.col-lg-offset-5{margin-left:41.6666666667%}.col-lg-6{flex:0 0 50%}.col-lg-offset-6{margin-left:50%}.col-lg-7{flex:0 0 58.3333333333%}.col-lg-offset-7{margin-left:58.3333333333%}.col-lg-8{flex:0 0 66.6666666667%}.col-lg-offset-8{margin-left:66.6666666667%}.col-lg-9{flex:0 0 75%}.col-lg-offset-9{margin-left:75%}.col-lg-10{flex:0 0 83.3333333333%}.col-lg-offset-10{margin-left:83.3333333333%}.col-lg-11{flex:0 0 91.6666666667%}.col-lg-offset-11{margin-left:91.6666666667%}.col-lg-12{flex:0 0 100%}.col-lg-offset-12{margin-left:100%}}@media screen and (min-width:1200px){.col-xl-0{flex:0 0 0%}.col-xl-offset-0{margin-left:0}.col-xl-1{flex:0 0 8.3333333333%}.col-xl-offset-1{margin-left:8.3333333333%}.col-xl-2{flex:0 0 16.6666666667%}.col-xl-offset-2{margin-left:16.6666666667%}.col-xl-3{flex:0 0 25%}.col-xl-offset-3{margin-left:25%}.col-xl-4{flex:0 0 33.3333333333%}.col-xl-offset-4{margin-left:33.3333333333%}.col-xl-5{flex:0 0 41.6666666667%}.col-xl-offset-5{margin-left:41.6666666667%}.col-xl-6{flex:0 0 50%}.col-xl-offset-6{margin-left:50%}.col-xl-7{flex:0 0 58.3333333333%}.col-xl-offset-7{margin-left:58.3333333333%}.col-xl-8{flex:0 0 66.6666666667%}.col-xl-offset-8{margin-left:66.6666666667%}.col-xl-9{flex:0 0 75%}.col-xl-offset-9{margin-left:75%}.col-xl-10{flex:0 0 83.3333333333%}.col-xl-offset-10{margin-left:83.3333333333%}.col-xl-11{flex:0 0 91.6666666667%}.col-xl-offset-11{margin-left:91.6666666667%}.col-xl-12{flex:0 0 100%}.col-xl-offset-12{margin-left:100%}}.btn{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem 1.75rem;font-size:.9rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media screen and (min-width:992px){.btn{font-size:.9rem;font-weight:400}}.btn-cta,.btn-font,.btn-primary,.btn-secondary{font-family:\"Neue Helvetica thin\";font-weight:600;letter-spacing:.1rem}.btn-primary{font-size:.8rem;color:#313131;padding:.7rem 1rem;background:#fff;border:1px solid #707070;max-width:24.5rem;text-align:center}.btn-cta,.btn-secondary{background:#313131;padding:.7rem 8rem;color:#fff;border:none;max-width:24.5rem;text-align:center}@media screen and (min-width:768px){.btn-cta,.btn-secondary{padding:.7rem 2rem}}.btn-secondary{background:#f3eee7;border:1px solid #707070;color:#313131}.sub-title{font-family:\"Neue Helvetica thin\";font-weight:600;color:#525252;font-size:.6rem;text-transform:uppercase;letter-spacing:.2rem}.title{font-family:\"Neue Helvetica Medium\";text-transform:capitalize;font-weight:400;font-size:1.2rem}.E-bg{background:#f3eee7}.sticky-book .container .guests select,.sticky-book .container .guests select option,.sticky-book .container .location select,.sticky-book .container .location select option,.text{font-family:\"Neue Helvetica thin\";font-weight:600;letter-spacing:.07rem;font-size:.7rem;line-height:1.5rem}.center{display:grid;align-items:center;justify-items:center;place-items:center}.link{font-family:\"Neue Helvetica thin\";font-weight:600;color:#525252;font-size:1rem;position:relative;letter-spacing:.07rem;display:inline-block}.link:after{content:\"\";position:absolute;font-size:.8rem;top:120%;left:0;height:1px;width:100%;background:#525252}.sticky-book{display:none}@media screen and (min-width:1200px){.sticky-book{z-index:999;display:block;padding:1rem 0;position:fixed;width:100%;border-top:.07143rem solid #d5d1c8;background:#fff;bottom:0;left:0}.sticky-book .container{align-items:center}.sticky-book .container .location select{width:90%;padding:.5rem .2rem;margin-top:.2rem;border:none;border-bottom:1px solid #707070;outline:none}.sticky-book .container .book-stay{display:flex;align-items:center}.sticky-book .container .select-dates .t-datepicker{position:relative}.sticky-book .container .select-dates .t-datepicker .t-datepicker-day{position:absolute;top:-950%}.sticky-book .container .bootstrap-dates{position:relative}.sticky-book .container .bootstrap-dates input{width:90%;padding:.5rem .2rem;margin-top:.2rem;border:none;border-bottom:1px solid #707070;outline:none}.sticky-book .container .guests{padding-left:1rem}.sticky-book .container .guests select{padding:.5rem .2rem;margin-top:.2rem;border:none;border-bottom:1px solid #707070;outline:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMjkwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjQuOTI2MyAwTDMwLjUyMjYgMTcuMjIzN0g0OC42MzI3TDMzLjk4MTMgMjcuODY4NUwzOS41Nzc3IDQ1LjA5MjJMMjQuOTI2MyAzNC40NDczTDEwLjI3NSA0NS4wOTIyTDE1Ljg3MTMgMjcuODY4NUwxLjIxOTk4IDE3LjIyMzdIMTkuMzNMMjQuOTI2MyAwWiIgZmlsbD0iI0M3QUY1OCIvPgo8cGF0aCBkPSJNODQuOTI2MyAwTDkwLjUyMjYgMTcuMjIzN0gxMDguNjMzTDkzLjk4MTMgMjcuODY4NUw5OS41Nzc3IDQ1LjA5MjJMODQuOTI2MyAzNC40NDczTDcwLjI3NSA0NS4wOTIyTDc1Ljg3MTMgMjcuODY4NUw2MS4yMiAxNy4yMjM3SDc5LjMzTDg0LjkyNjMgMFoiIGZpbGw9IiNDN0FGNTgiLz4KPHBhdGggZD0iTTE0NC45MjYgMEwxNTAuNTIzIDE3LjIyMzdIMTY4LjYzM0wxNTMuOTgxIDI3Ljg2ODVMMTU5LjU3OCA0NS4wOTIyTDE0NC45MjYgMzQuNDQ3M0wxMzAuMjc1IDQ1LjA5MjJMMTM1Ljg3MSAyNy44Njg1TDEyMS4yMiAxNy4yMjM3SDEzOS4zM0wxNDQuOTI2IDBaIiBmaWxsPSIjQzdBRjU4Ii8+CjxwYXRoIGQ9Ik0yMDQuOTI2IDBMMjEwLjUyMyAxNy4yMjM3SDIyOC42MzNMMjEzLjk4MSAyNy44Njg1TDIxOS41NzggNDUuMDkyMkwyMDQuOTI2IDM0LjQ0NzNMMTkwLjI3NSA0NS4wOTIyTDE5NS44NzEgMjcuODY4NUwxODEuMjIgMTcuMjIzN0gxOTkuMzNMMjA0LjkyNiAwWiIgZmlsbD0iI0M3QUY1OCIvPgo8cGF0aCBkPSJNMjY0LjkyNiAwTDI3MC41MjMgMTcuMjIzN0gyODguNjMzTDI3My45ODEgMjcuODY4NUwyNzkuNTc4IDQ1LjA5MjJMMjY0LjkyNiAzNC40NDczTDI1MC4yNzUgNDUuMDkyMkwyNTUuODcxIDI3Ljg2ODVMMjQxLjIyIDE3LjIyMzdIMjU5LjMzTDI2NC45MjYgMFoiIGZpbGw9IiNDN0FGNTgiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sticky.vue?vue&type=template&id=a60119dc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"sticky-book"},[(this.page != 'boston')?_vm._ssrNode("<div class=\"container row\">","</div>",[_vm._ssrNode("<div class=\"book-stay col-2\"><h2 class=\"title\">book your stay</h2> <img"+(_vm._ssrAttr("src",__webpack_require__(14)))+" alt></div> "),_vm._ssrNode("<div class=\"location col-3\">","</div>",[_vm._ssrNode("<h5 class=\"sub-title\">location</h5> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.location),expression:"location"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.location=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"awash"}},[_vm._v("Awash Falls")]),_vm._v(" "),_c('option',{attrs:{"value":"bishoftu"}},[_vm._v("Bishoftu")]),_vm._v(" "),_c('option',{attrs:{"value":"entoto"}},[_vm._v("Entoto")]),_vm._v(" "),_c('option',{attrs:{"value":"tana"}},[_vm._v("Lake Tana")])])],2),_vm._ssrNode(" <div class=\"form-group bootstrap-dates col-3\"><h5 class=\"sub-title\">Select dates</h5> <input type=\"text\" name=\"daterange\" id=\"date\" value readonly=\"readonly\" class=\"form-control\"></div> "),_vm._ssrNode("<div class=\"guests col-2\">","</div>",[_vm._ssrNode("<h5 class=\"sub-title\">guests</h5> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.guest),expression:"guest"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.guest=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"1"}},[_vm._v("1")]),_vm._v(" "),_c('option',{attrs:{"value":"2"}},[_vm._v("2")]),_vm._v(" "),_c('option',{attrs:{"value":"3"}},[_vm._v("3")]),_vm._v(" "),_c('option',{attrs:{"value":"4"}},[_vm._v("4")])])],2),_vm._ssrNode(" <div class=\"cta-container col-2\"><a to=\"#\" class=\"btn-primary\" style=\"cursor: pointer\">\n        Check availability\n      </a></div>")],2):_vm._ssrNode(("<div class=\"container row\"><div class=\"book-stay col-3 col-offset-2\"><h2 class=\"title\">book spa day</h2> <img"+(_vm._ssrAttr("src",__webpack_require__(14)))+" alt></div> <div class=\"location col-3\"><h5 class=\"sub-title\">Call For Reservation</h5> <a href=\"tel:+251116623808\" class=\"text\">+251 11 662 3808</a> <a href=\"tel:+251116636557\" class=\"text\">+251 11 663 6557</a></div> <div class=\"cta-container col-3\"><a href=\"bostonMenu.pdf\" target=\"_blank\" class=\"btn-primary\">View spa menu</a></div></div>"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Sticky.vue?vue&type=template&id=a60119dc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sticky.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Stickyvue_type_script_lang_js_ = ({
  props: ["path", "page"],

  data() {
    return {
      location: this.path,
      checkin: "",
      checkout: "",
      guest: ""
    };
  },

  methods: {
    show() {
      console.log("Location", this.location);
      console.log("check in", this.checkin);
      console.log("check out", this.checkout);
      console.log("Guest", this.guest);
      window.open(`https://reservations.kurifturesorts.com/reserve.php?location=${this.location}&checkin=${this.checkin}&checkout=${this.checkout}`, "_blank");
    }

  },

  mounted() {
    var start, end;
    var today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!

    const yyyy = today.getFullYear();
    let tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const td = String(tomorrow.getDate()).padStart(2, "0");
    const tm = String(tomorrow.getMonth() + 1).padStart(2, "0"); //January is 0!

    const ty = tomorrow.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    tomorrow = tm + "/" + td + "/" + ty;
    start = yyyy + "-" + mm + "-" + dd;
    end = ty + "-" + tm + "-" + td;
    this.checkin = start;
    this.checkout = end;
    console.log("inital start", this.checkin);
    console.log("inital end", this.checkout);
    console.log("this", this);
    let vm = this;
    $(document).ready(function () {
      console.log("initial start", start);
      console.log("initial end", end);
      $("#date").daterangepicker({
        drops: "up",
        parentEl: ".sticky-book"
      });
      $("#date").data("daterangepicker").setStartDate(today);
      $("#date").data("daterangepicker").setEndDate(tomorrow);
      $("#date").on("apply.daterangepicker", function (ev, picker) {
        // console.log(picker.startDate.format('YYYY-MM-DD'));
        // console.log(picker.endDate.format('YYYY-MM-DD'));
        start = picker.startDate.format("YYYY-MM-DD");
        end = picker.endDate.format("YYYY-MM-DD");
        console.log("updated start", start);
        console.log("updated end", end);
        vm.checkin = start;
        vm.checkout = end;
      });
    });
  }

});
// CONCATENATED MODULE: ./components/Sticky.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Stickyvue_type_script_lang_js_ = (Stickyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Sticky.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(568)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Stickyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "326ad5be"
  
)

/* harmony default export */ var Sticky = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/IMG-20210910-WA0004.5ca1b87.jpg";

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tadiwos_waterpark.51f72a6.jpeg";

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/What Makes us unique.c7a6efc.jpg";

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Tadiwos.b3fa75f.png";

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Roman.1c41860.png";

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Tesegreda.96f5bbe.png";

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/yonaiel.de03be4.png";

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Eskender.9b02e6c.png";

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(682);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3a213946", content, true, context)
};

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Tomas.f46ae2a.png";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Mahlet.27aacce.png";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/yegetafiker.8afbebf.png";

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_style_index_0_id_5d3ea396_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(655);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_style_index_0_id_5d3ea396_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_style_index_0_id_5d3ea396_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_style_index_0_id_5d3ea396_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aboutus_vue_vue_type_style_index_0_id_5d3ea396_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-5d3ea396],[data-v-5d3ea396]:after,[data-v-5d3ea396]:before{box-sizing:border-box}a[data-v-5d3ea396],b[data-v-5d3ea396],blockquote[data-v-5d3ea396],body[data-v-5d3ea396],canvas[data-v-5d3ea396],caption[data-v-5d3ea396],code[data-v-5d3ea396],div[data-v-5d3ea396],em[data-v-5d3ea396],embed[data-v-5d3ea396],fieldset[data-v-5d3ea396],figure[data-v-5d3ea396],footer[data-v-5d3ea396],form[data-v-5d3ea396],h1[data-v-5d3ea396],h2[data-v-5d3ea396],h3[data-v-5d3ea396],h4[data-v-5d3ea396],h5[data-v-5d3ea396],h6[data-v-5d3ea396],header[data-v-5d3ea396],html[data-v-5d3ea396],i[data-v-5d3ea396],iframe[data-v-5d3ea396],img[data-v-5d3ea396],label[data-v-5d3ea396],li[data-v-5d3ea396],main[data-v-5d3ea396],nav[data-v-5d3ea396],object[data-v-5d3ea396],ol[data-v-5d3ea396],p[data-v-5d3ea396],pre[data-v-5d3ea396],section[data-v-5d3ea396],small[data-v-5d3ea396],span[data-v-5d3ea396],strike[data-v-5d3ea396],strong[data-v-5d3ea396],sub[data-v-5d3ea396],sup[data-v-5d3ea396],table[data-v-5d3ea396],tbody[data-v-5d3ea396],td[data-v-5d3ea396],tfoot[data-v-5d3ea396],th[data-v-5d3ea396],thead[data-v-5d3ea396],tr[data-v-5d3ea396],tt[data-v-5d3ea396],u[data-v-5d3ea396],ul[data-v-5d3ea396],video[data-v-5d3ea396]{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;text-size-adjust:none}img[data-v-5d3ea396]{border-style:none;max-width:100%;height:auto;display:block}html[data-v-5d3ea396]{line-height:1.15;-webkit-text-size-adjust:100%}article[data-v-5d3ea396],aside[data-v-5d3ea396],details[data-v-5d3ea396],figcaption[data-v-5d3ea396],figure[data-v-5d3ea396],footer[data-v-5d3ea396],header[data-v-5d3ea396],hgroup[data-v-5d3ea396],main[data-v-5d3ea396],menu[data-v-5d3ea396],nav[data-v-5d3ea396],section[data-v-5d3ea396]{display:block}ol[data-v-5d3ea396],ul[data-v-5d3ea396]{list-style:none}blockquote[data-v-5d3ea396],q[data-v-5d3ea396]{quotes:none}blockquote[data-v-5d3ea396]:after,blockquote[data-v-5d3ea396]:before,q[data-v-5d3ea396]:after,q[data-v-5d3ea396]:before{content:\"\";content:none}table[data-v-5d3ea396]{border-collapse:collapse;border-spacing:0}input[data-v-5d3ea396]{-webkit-appearance:none;border-radius:0}button[data-v-5d3ea396],input[data-v-5d3ea396],optgroup[data-v-5d3ea396],select[data-v-5d3ea396],textarea[data-v-5d3ea396]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}hr[data-v-5d3ea396]{box-sizing:content-box;height:0;overflow:visible}pre[data-v-5d3ea396]{font-family:monospace,monospace;font-size:1em}a[data-v-5d3ea396]{background-color:transparent;text-decoration:none;color:#000;display:block}abbr[title][data-v-5d3ea396]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[data-v-5d3ea396],strong[data-v-5d3ea396]{font-weight:bolder}sub[data-v-5d3ea396],sup[data-v-5d3ea396]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[data-v-5d3ea396]{bottom:-.25em}sup[data-v-5d3ea396]{top:-.5em}button[data-v-5d3ea396],select[data-v-5d3ea396]{text-transform:none}button[data-v-5d3ea396],input[data-v-5d3ea396]{overflow:visible}[type=button][data-v-5d3ea396],[type=reset][data-v-5d3ea396],[type=submit][data-v-5d3ea396],button[data-v-5d3ea396]{-webkit-appearance:button}[type=button][data-v-5d3ea396]::-moz-focus-inner,[type=reset][data-v-5d3ea396]::-moz-focus-inner,[type=submit][data-v-5d3ea396]::-moz-focus-inner,button[data-v-5d3ea396]::-moz-focus-inner{border-style:none;padding:0}[type=button][data-v-5d3ea396]:-moz-focusring,[type=reset][data-v-5d3ea396]:-moz-focusring,[type=submit][data-v-5d3ea396]:-moz-focusring,button[data-v-5d3ea396]:-moz-focusring{outline:1px dotted ButtonText}fieldset[data-v-5d3ea396]{padding:.35em .75em .625em}legend[data-v-5d3ea396]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[data-v-5d3ea396]{vertical-align:baseline}textarea[data-v-5d3ea396]{overflow:auto}[type=checkbox][data-v-5d3ea396],[type=radio][data-v-5d3ea396]{box-sizing:border-box}[type=number][data-v-5d3ea396]::-webkit-inner-spin-button,[type=number][data-v-5d3ea396]::-webkit-outer-spin-button{height:auto}[type=search][data-v-5d3ea396]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][data-v-5d3ea396]::-webkit-search-decoration{-webkit-appearance:none}[data-v-5d3ea396]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[data-v-5d3ea396]{display:block}summary[data-v-5d3ea396]{display:list-item}[hidden][data-v-5d3ea396],template[data-v-5d3ea396]{display:none}@font-face{font-family:\"Neue Helvetica Medium\";font-style:normal;font-weight:400;src:local(\"Neue Helvetica Medium\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\")}@font-face{font-family:\"Neue Helvetica Thin\";font-style:normal;font-weight:400;src:local(\"Neue Helvetica Thin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\")}@font-face{font-family:\"Neue Helvetica Condensed Medium\";font-style:normal;font-weight:400;src:local(\"Neue Helvetica Condensed Medium\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\")}.container[data-v-5d3ea396]{width:90%;max-width:1920px;margin:0 auto}.row[data-v-5d3ea396]{display:flex;flex-wrap:wrap}.col[data-v-5d3ea396]{flex:1 0 0%}.col-0[data-v-5d3ea396]{flex:0 0 0%}.col-offset-0[data-v-5d3ea396]{margin-left:0}.col-1[data-v-5d3ea396]{flex:0 0 8.3333333333%}.col-offset-1[data-v-5d3ea396]{margin-left:8.3333333333%}.col-2[data-v-5d3ea396]{flex:0 0 16.6666666667%}.col-offset-2[data-v-5d3ea396]{margin-left:16.6666666667%}.col-3[data-v-5d3ea396]{flex:0 0 25%}.col-offset-3[data-v-5d3ea396]{margin-left:25%}.col-4[data-v-5d3ea396]{flex:0 0 33.3333333333%}.col-offset-4[data-v-5d3ea396]{margin-left:33.3333333333%}.col-5[data-v-5d3ea396]{flex:0 0 41.6666666667%}.col-offset-5[data-v-5d3ea396]{margin-left:41.6666666667%}.col-6[data-v-5d3ea396]{flex:0 0 50%}.col-offset-6[data-v-5d3ea396]{margin-left:50%}.col-7[data-v-5d3ea396]{flex:0 0 58.3333333333%}.col-offset-7[data-v-5d3ea396]{margin-left:58.3333333333%}.col-8[data-v-5d3ea396]{flex:0 0 66.6666666667%}.col-offset-8[data-v-5d3ea396]{margin-left:66.6666666667%}.col-9[data-v-5d3ea396]{flex:0 0 75%}.col-offset-9[data-v-5d3ea396]{margin-left:75%}.col-10[data-v-5d3ea396]{flex:0 0 83.3333333333%}.col-offset-10[data-v-5d3ea396]{margin-left:83.3333333333%}.col-11[data-v-5d3ea396]{flex:0 0 91.6666666667%}.col-offset-11[data-v-5d3ea396]{margin-left:91.6666666667%}.col-12[data-v-5d3ea396]{flex:0 0 100%}.col-offset-12[data-v-5d3ea396]{margin-left:100%}@media screen and (min-width:576px){.col-sm-0[data-v-5d3ea396]{flex:0 0 0%}.col-sm-offset-0[data-v-5d3ea396]{margin-left:0}.col-sm-1[data-v-5d3ea396]{flex:0 0 8.3333333333%}.col-sm-offset-1[data-v-5d3ea396]{margin-left:8.3333333333%}.col-sm-2[data-v-5d3ea396]{flex:0 0 16.6666666667%}.col-sm-offset-2[data-v-5d3ea396]{margin-left:16.6666666667%}.col-sm-3[data-v-5d3ea396]{flex:0 0 25%}.col-sm-offset-3[data-v-5d3ea396]{margin-left:25%}.col-sm-4[data-v-5d3ea396]{flex:0 0 33.3333333333%}.col-sm-offset-4[data-v-5d3ea396]{margin-left:33.3333333333%}.col-sm-5[data-v-5d3ea396]{flex:0 0 41.6666666667%}.col-sm-offset-5[data-v-5d3ea396]{margin-left:41.6666666667%}.col-sm-6[data-v-5d3ea396]{flex:0 0 50%}.col-sm-offset-6[data-v-5d3ea396]{margin-left:50%}.col-sm-7[data-v-5d3ea396]{flex:0 0 58.3333333333%}.col-sm-offset-7[data-v-5d3ea396]{margin-left:58.3333333333%}.col-sm-8[data-v-5d3ea396]{flex:0 0 66.6666666667%}.col-sm-offset-8[data-v-5d3ea396]{margin-left:66.6666666667%}.col-sm-9[data-v-5d3ea396]{flex:0 0 75%}.col-sm-offset-9[data-v-5d3ea396]{margin-left:75%}.col-sm-10[data-v-5d3ea396]{flex:0 0 83.3333333333%}.col-sm-offset-10[data-v-5d3ea396]{margin-left:83.3333333333%}.col-sm-11[data-v-5d3ea396]{flex:0 0 91.6666666667%}.col-sm-offset-11[data-v-5d3ea396]{margin-left:91.6666666667%}.col-sm-12[data-v-5d3ea396]{flex:0 0 100%}.col-sm-offset-12[data-v-5d3ea396]{margin-left:100%}}@media screen and (min-width:768px){.col-md-0[data-v-5d3ea396]{flex:0 0 0%}.col-md-offset-0[data-v-5d3ea396]{margin-left:0}.col-md-1[data-v-5d3ea396]{flex:0 0 8.3333333333%}.col-md-offset-1[data-v-5d3ea396]{margin-left:8.3333333333%}.col-md-2[data-v-5d3ea396]{flex:0 0 16.6666666667%}.col-md-offset-2[data-v-5d3ea396]{margin-left:16.6666666667%}.col-md-3[data-v-5d3ea396]{flex:0 0 25%}.col-md-offset-3[data-v-5d3ea396]{margin-left:25%}.col-md-4[data-v-5d3ea396]{flex:0 0 33.3333333333%}.col-md-offset-4[data-v-5d3ea396]{margin-left:33.3333333333%}.col-md-5[data-v-5d3ea396]{flex:0 0 41.6666666667%}.col-md-offset-5[data-v-5d3ea396]{margin-left:41.6666666667%}.col-md-6[data-v-5d3ea396]{flex:0 0 50%}.col-md-offset-6[data-v-5d3ea396]{margin-left:50%}.col-md-7[data-v-5d3ea396]{flex:0 0 58.3333333333%}.col-md-offset-7[data-v-5d3ea396]{margin-left:58.3333333333%}.col-md-8[data-v-5d3ea396]{flex:0 0 66.6666666667%}.col-md-offset-8[data-v-5d3ea396]{margin-left:66.6666666667%}.col-md-9[data-v-5d3ea396]{flex:0 0 75%}.col-md-offset-9[data-v-5d3ea396]{margin-left:75%}.col-md-10[data-v-5d3ea396]{flex:0 0 83.3333333333%}.col-md-offset-10[data-v-5d3ea396]{margin-left:83.3333333333%}.col-md-11[data-v-5d3ea396]{flex:0 0 91.6666666667%}.col-md-offset-11[data-v-5d3ea396]{margin-left:91.6666666667%}.col-md-12[data-v-5d3ea396]{flex:0 0 100%}.col-md-offset-12[data-v-5d3ea396]{margin-left:100%}}@media screen and (min-width:992px){.col-lg-0[data-v-5d3ea396]{flex:0 0 0%}.col-lg-offset-0[data-v-5d3ea396]{margin-left:0}.col-lg-1[data-v-5d3ea396]{flex:0 0 8.3333333333%}.col-lg-offset-1[data-v-5d3ea396]{margin-left:8.3333333333%}.col-lg-2[data-v-5d3ea396]{flex:0 0 16.6666666667%}.col-lg-offset-2[data-v-5d3ea396]{margin-left:16.6666666667%}.col-lg-3[data-v-5d3ea396]{flex:0 0 25%}.col-lg-offset-3[data-v-5d3ea396]{margin-left:25%}.col-lg-4[data-v-5d3ea396]{flex:0 0 33.3333333333%}.col-lg-offset-4[data-v-5d3ea396]{margin-left:33.3333333333%}.col-lg-5[data-v-5d3ea396]{flex:0 0 41.6666666667%}.col-lg-offset-5[data-v-5d3ea396]{margin-left:41.6666666667%}.col-lg-6[data-v-5d3ea396]{flex:0 0 50%}.col-lg-offset-6[data-v-5d3ea396]{margin-left:50%}.col-lg-7[data-v-5d3ea396]{flex:0 0 58.3333333333%}.col-lg-offset-7[data-v-5d3ea396]{margin-left:58.3333333333%}.col-lg-8[data-v-5d3ea396]{flex:0 0 66.6666666667%}.col-lg-offset-8[data-v-5d3ea396]{margin-left:66.6666666667%}.col-lg-9[data-v-5d3ea396]{flex:0 0 75%}.col-lg-offset-9[data-v-5d3ea396]{margin-left:75%}.col-lg-10[data-v-5d3ea396]{flex:0 0 83.3333333333%}.col-lg-offset-10[data-v-5d3ea396]{margin-left:83.3333333333%}.col-lg-11[data-v-5d3ea396]{flex:0 0 91.6666666667%}.col-lg-offset-11[data-v-5d3ea396]{margin-left:91.6666666667%}.col-lg-12[data-v-5d3ea396]{flex:0 0 100%}.col-lg-offset-12[data-v-5d3ea396]{margin-left:100%}}@media screen and (min-width:1200px){.col-xl-0[data-v-5d3ea396]{flex:0 0 0%}.col-xl-offset-0[data-v-5d3ea396]{margin-left:0}.col-xl-1[data-v-5d3ea396]{flex:0 0 8.3333333333%}.col-xl-offset-1[data-v-5d3ea396]{margin-left:8.3333333333%}.col-xl-2[data-v-5d3ea396]{flex:0 0 16.6666666667%}.col-xl-offset-2[data-v-5d3ea396]{margin-left:16.6666666667%}.col-xl-3[data-v-5d3ea396]{flex:0 0 25%}.col-xl-offset-3[data-v-5d3ea396]{margin-left:25%}.col-xl-4[data-v-5d3ea396]{flex:0 0 33.3333333333%}.col-xl-offset-4[data-v-5d3ea396]{margin-left:33.3333333333%}.col-xl-5[data-v-5d3ea396]{flex:0 0 41.6666666667%}.col-xl-offset-5[data-v-5d3ea396]{margin-left:41.6666666667%}.col-xl-6[data-v-5d3ea396]{flex:0 0 50%}.col-xl-offset-6[data-v-5d3ea396]{margin-left:50%}.col-xl-7[data-v-5d3ea396]{flex:0 0 58.3333333333%}.col-xl-offset-7[data-v-5d3ea396]{margin-left:58.3333333333%}.col-xl-8[data-v-5d3ea396]{flex:0 0 66.6666666667%}.col-xl-offset-8[data-v-5d3ea396]{margin-left:66.6666666667%}.col-xl-9[data-v-5d3ea396]{flex:0 0 75%}.col-xl-offset-9[data-v-5d3ea396]{margin-left:75%}.col-xl-10[data-v-5d3ea396]{flex:0 0 83.3333333333%}.col-xl-offset-10[data-v-5d3ea396]{margin-left:83.3333333333%}.col-xl-11[data-v-5d3ea396]{flex:0 0 91.6666666667%}.col-xl-offset-11[data-v-5d3ea396]{margin-left:91.6666666667%}.col-xl-12[data-v-5d3ea396]{flex:0 0 100%}.col-xl-offset-12[data-v-5d3ea396]{margin-left:100%}}.btn[data-v-5d3ea396]{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem 1.75rem;font-size:.9rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media screen and (min-width:992px){.btn[data-v-5d3ea396]{font-size:.9rem;font-weight:400}}.btn-cta[data-v-5d3ea396],.btn-font[data-v-5d3ea396],.btn-primary[data-v-5d3ea396],.btn-secondary[data-v-5d3ea396]{font-family:\"Neue Helvetica thin\";font-weight:600;letter-spacing:.1rem}.btn-primary[data-v-5d3ea396]{font-size:.8rem;color:#313131;padding:.7rem 1rem;background:#fff;border:1px solid #707070;max-width:24.5rem;text-align:center}.btn-cta[data-v-5d3ea396],.btn-secondary[data-v-5d3ea396]{background:#313131;padding:.7rem 8rem;color:#fff;border:none;max-width:24.5rem;text-align:center}@media screen and (min-width:768px){.btn-cta[data-v-5d3ea396],.btn-secondary[data-v-5d3ea396]{padding:.7rem 2rem}}.btn-secondary[data-v-5d3ea396]{background:#f3eee7;border:1px solid #707070;color:#313131}.sub-title[data-v-5d3ea396]{font-family:\"Neue Helvetica thin\";font-weight:600;color:#525252;font-size:.6rem;text-transform:uppercase;letter-spacing:.2rem}.main .ceo .container .ceo-all .stay-desc h4[data-v-5d3ea396],.main .ceo .container h2[data-v-5d3ea396],.main .company-profile .container .company-profile-all .gift-desc h4[data-v-5d3ea396],.main .company-profile .container h2[data-v-5d3ea396],.main .corporate .corporate-txt[data-v-5d3ea396],.main .corporate .wrapper .corporate-text .corporate-txt2[data-v-5d3ea396],.main .our-team .container .single-team-member .name-title[data-v-5d3ea396],.main .our-team .container h2[data-v-5d3ea396],.main .page-title .container h2[data-v-5d3ea396],.main .partners .container h2[data-v-5d3ea396],.main .testimonials .container h2[data-v-5d3ea396],.main .who-we-are .container .unique h4[data-v-5d3ea396],.main .who-we-are .container .who-we-are-all .stay-desc h4[data-v-5d3ea396],.main .who-we-are .container h2[data-v-5d3ea396],.main .wrapper .all-wrapper .count-title[data-v-5d3ea396],.main .wrapper .all-wrapper .counter h4[data-v-5d3ea396],.title[data-v-5d3ea396]{font-family:\"Neue Helvetica Medium\";text-transform:capitalize;font-weight:400;font-size:1.2rem}.E-bg[data-v-5d3ea396]{background:#f3eee7}.main .ceo .container .ceo-all .stay-desc p[data-v-5d3ea396],.main .company-profile .container .company-profile-all .gift-desc p[data-v-5d3ea396],.main .corporate .wrapper .corporate-text .corporate-txt3[data-v-5d3ea396],.main .our-team .container .our-team-wrapper .single-team-member .memeber-title[data-v-5d3ea396],.main .sticky-book .container .guests select[data-v-5d3ea396],.main .sticky-book .container .guests select option[data-v-5d3ea396],.main .sticky-book .container .location select[data-v-5d3ea396],.main .sticky-book .container .location select option[data-v-5d3ea396],.main .testimonials .container .testimony-wrapper .testimony-card h3[data-v-5d3ea396],.main .who-we-are .container .unique p[data-v-5d3ea396],.main .who-we-are .container .who-we-are-all .stay-desc p[data-v-5d3ea396],.main .wrapper .all-wrapper .count-text[data-v-5d3ea396],.text[data-v-5d3ea396]{font-family:\"Neue Helvetica thin\";font-weight:600;letter-spacing:.07rem;font-size:.7rem;line-height:1.5rem}.center[data-v-5d3ea396]{display:grid;align-items:center;justify-items:center;place-items:center}.link[data-v-5d3ea396]{font-family:\"Neue Helvetica thin\";font-weight:600;color:#525252;font-size:1rem;position:relative;letter-spacing:.07rem;display:inline-block}.link[data-v-5d3ea396]:after{content:\"\";position:absolute;font-size:.8rem;top:120%;left:0;height:1px;width:100%;background:#525252}.main .sticky-book[data-v-5d3ea396]{display:none}@media screen and (min-width:1200px){.main .sticky-book[data-v-5d3ea396]{z-index:999;display:block;padding:1rem 0;position:fixed;width:100%;border-top:.07143rem solid #d5d1c8;background:#fff;bottom:0;left:0}.main .sticky-book .container[data-v-5d3ea396]{align-items:center}.main .sticky-book .container .location select[data-v-5d3ea396]{width:90%;padding:.5rem .2rem;margin-top:.2rem;border:none;border-bottom:1px solid #707070;outline:none}.main .sticky-book .container .book-stay[data-v-5d3ea396]{display:flex;align-items:center}.main .sticky-book .container .select-dates .t-datepicker[data-v-5d3ea396]{position:relative}.main .sticky-book .container .select-dates .t-datepicker .t-datepicker-day[data-v-5d3ea396]{position:absolute;top:-950%}.main .sticky-book .container .guests[data-v-5d3ea396]{padding-left:1rem}.main .sticky-book .container .guests select[data-v-5d3ea396]{padding:.5rem .2rem;margin-top:.2rem;border:none;border-bottom:1px solid #707070;outline:none}}.main header[data-v-5d3ea396]{width:100%;height:10vh;position:relative}.main header[data-v-5d3ea396]:after{background:#00061b}.main header[data-v-5d3ea396]:after,.main header nav[data-v-5d3ea396]{position:absolute;top:0;left:0;width:100%;height:100%}.main header nav[data-v-5d3ea396]{z-index:999}.main header nav .top-nav[data-v-5d3ea396]{position:-webkit-sticky;position:sticky;top:0;bottom:0;width:90%;margin:0 auto}.main header nav .container[data-v-5d3ea396]{display:flex;align-items:flex-start;justify-content:space-between}.main header nav .container .menu-line[data-v-5d3ea396]{margin-top:1rem;cursor:pointer}.main header nav .container .menu-line .line hr[data-v-5d3ea396]{margin:1rem auto auto;color:#191e19;width:2.35rem}.main header nav .container .logo[data-v-5d3ea396]{margin-top:1rem;width:9rem}@media screen and (min-width:768px){.main header nav .container .logo[data-v-5d3ea396]{width:11rem}}.main header nav .container .nav-book-button[data-v-5d3ea396]{display:none}@media screen and (min-width:992px){.main header nav .container[data-v-5d3ea396]{align-items:center}.main header nav .container .nav-book-button[data-v-5d3ea396]{margin-top:1rem;display:block}.main header nav .container .nav-book-button .wrapper[data-v-5d3ea396]{display:flex;grid-gap:1rem;gap:1rem}.main header nav .container .nav-book-button .wrapper .social[data-v-5d3ea396]{display:flex;grid-gap:.5rem;gap:.5rem}.main header nav .container .nav-book-button .wrapper .social .icon[data-v-5d3ea396]{width:1rem}}.main .destination-links[data-v-5d3ea396]{display:none}.main .destination-links2 .container .wrapper .link-destination[data-v-5d3ea396]{display:grid;margin-top:4rem;grid-gap:3rem;gap:3rem;position:relative}.main .destination-links2 .container .wrapper .link-destination li[data-v-5d3ea396]{display:flex;align-items:flex-start}.main .destination-links2 .container .wrapper .link-destination li .a-link[data-v-5d3ea396]{color:grey;font-size:.88rem;display:flex;align-items:center}.main .destination-links2 .container .wrapper .link-destination li .a-link .drop-icon[data-v-5d3ea396]{transform:rotate(90deg)}.main .destination-links2 .container .wrapper .link-destination li .active[data-v-5d3ea396]{color:#191e19}.main .destination-links2 .container .wrapper .link-destination li .dropdown-content[data-v-5d3ea396]{display:none;position:absolute;top:25px;left:0;border:1px solid #efefef;background:#f1f1ea;border-radius:.4em;min-width:200px;box-shadow:0 4px 12px rgba(0,0,0,.1);padding:12px;z-index:999}.main .destination-links2 .container .wrapper .link-destination li .dropdown-content .drop-down-list li[data-v-5d3ea396]{margin-left:.3rem;margin-top:.5rem}.main .destination-links2 .container .wrapper .link-destination li .dropdown-content .drop-down-list li .a-link[data-v-5d3ea396]{color:grey;font-size:.88rem}.main .destination-links2 .container .wrapper .link-destination li .dropdown-content .drop-down-list li .drop-icon[data-v-5d3ea396]{transform:rotate(90deg)}.main .destination-links2 .container .wrapper .link-destination li .dropdown-content .drop-down-list li .active[data-v-5d3ea396]{color:#191e19}.main .destination-links2 .container .wrapper .link-destination li:hover .dropdown-content[data-v-5d3ea396]{display:block}@media screen and (min-width:992px){.main .destination-links2[data-v-5d3ea396]{display:none}.main .destination-links[data-v-5d3ea396]{display:block}.main .destination-links .container .wrapper .link-destination[data-v-5d3ea396]{display:flex;margin-top:4rem;grid-gap:3rem;gap:3rem;align-content:center;justify-content:center;place-content:center}.main .destination-links .container .wrapper .link-destination li[data-v-5d3ea396]{display:flex;align-items:center}.main .destination-links .container .wrapper .link-destination li .a-link[data-v-5d3ea396]{color:grey;font-size:.88rem}.main .destination-links .container .wrapper .link-destination li .active[data-v-5d3ea396]{color:#191e19}.main .destination-links .container .wrapper .line[data-v-5d3ea396]{color:grey;margin-top:.6rem;opacity:.7}}@media screen and (min-width:992px)and (min-width:1200px){.main .destination-links .container .wrapper .line[data-v-5d3ea396]{width:60rem}}.main .display-video[data-v-5d3ea396]{margin-top:1rem}.main .display-video .container .video-wrapper img[data-v-5d3ea396]{width:100%}@media screen and (min-width:768px){.main .display-video img[data-v-5d3ea396]{-o-object-fit:cover;object-fit:cover}}.main .page-title .container[data-v-5d3ea396]{margin-top:5rem;display:grid;align-items:center;justify-items:center;place-items:center}.main .page-title .container h2[data-v-5d3ea396]{text-transform:uppercase;font-size:2rem;text-align:center}.main .page-title .container p[data-v-5d3ea396]{text-align:center;color:grey;width:20rem;margin-top:1rem;font-size:.8rem}@media screen and (min-width:768px){.main .page-title .container h2[data-v-5d3ea396]{font-size:2rem}.main .page-title .container p[data-v-5d3ea396]{width:40rem;font-size:1rem}}.main .main-page-desc[data-v-5d3ea396]{margin-top:5rem}@media screen and (min-width:992px){.main .main-page-desc[data-v-5d3ea396]{margin-top:8rem}}.main .main-page-desc .container .wrapper .main-title[data-v-5d3ea396]{display:grid;align-items:center;justify-items:center;place-items:center}.main .main-page-desc .container .wrapper .main-title h2[data-v-5d3ea396]{text-align:center;font-size:1.5rem}.main .main-page-desc .container .wrapper .main-title p[data-v-5d3ea396]{text-align:center;color:grey;margin-top:1rem;font-size:.8rem}@media screen and (min-width:768px){.main .main-page-desc .container .wrapper .main-title h2[data-v-5d3ea396]{font-size:2rem}.main .main-page-desc .container .wrapper .main-title p[data-v-5d3ea396]{font-size:1rem}}.main .main-page-desc .container .wrapper .tabs[data-v-5d3ea396]{display:grid;align-items:center;justify-items:center;place-items:center;width:100%;margin:4rem auto 6.25rem}.main .main-page-desc .container .wrapper .tabs .tabs-container[data-v-5d3ea396]{display:flex;position:relative}.main .main-page-desc .container .wrapper .tabs .tabs-container .active[data-v-5d3ea396]{position:absolute;top:0;height:.25rem;width:5.94rem;transform:translate(100%,-30%);background:#191e19}.main .main-page-desc .container .wrapper .tabs .tabs-container .tab[data-v-5d3ea396]{height:.13rem;width:5.94rem;background:#c4c4c4}.main .ceo[data-v-5d3ea396]{margin-top:2rem}.main .ceo .container[data-v-5d3ea396]{display:grid;align-content:center;justify-content:center;place-content:center}.main .ceo .container h2[data-v-5d3ea396]{color:#191e19;text-align:center;margin-top:.94rem}.main .ceo .container .ceo-all img[data-v-5d3ea396]{width:100%;-o-object-fit:cover;object-fit:cover}.main .ceo .container .ceo-all .stay-desc[data-v-5d3ea396]{margin-top:1.88rem}.main .ceo .container .ceo-all .stay-desc h4[data-v-5d3ea396]{font-size:1.5rem;margin-top:.94rem;color:#191e19;text-transform:uppercase;text-align:left}.main .ceo .container .ceo-all .stay-desc .header-title[data-v-5d3ea396]{color:grey}.main .ceo .container .ceo-all .stay-desc p[data-v-5d3ea396]{margin-top:.94rem;color:#191e19;font-size:.88rem;text-align:left}.main .ceo .container .ceo-all .stay-desc .book-buttons[data-v-5d3ea396]{display:grid;align-items:left;justify-items:left;place-items:left;margin-top:3rem}.main .ceo .container .ceo-all .stay-desc .book-buttons .view[data-v-5d3ea396]{color:grey;font-size:.8rem}.main .ceo .container .ceo-all .stay-desc .book-buttons .view .lower-line[data-v-5d3ea396]{opacity:.7;border-style:solid;width:8rem}@media screen and (min-width:768px){.main .ceo .container .ceo-all .stay-desc p[data-v-5d3ea396]{width:100%}}@media screen and (min-width:992px){.main .ceo .container .ceo-all[data-v-5d3ea396]{display:grid;grid-template-columns:1fr 1fr;align-items:center;grid-gap:1rem;gap:1rem;margin-top:4.37rem}.main .ceo .container .ceo-all .stay-desc[data-v-5d3ea396]{margin-top:0}}@media screen and (min-width:1200px){.main .ceo .container .ceo-all[data-v-5d3ea396]{align-items:flex-start;grid-gap:1rem;gap:1rem;margin-top:4.37rem}}@media screen and (min-width:1920px){.main .ceo .container .ceo-all[data-v-5d3ea396]{align-items:flex-start;grid-gap:1rem;gap:1rem}}.main .who-we-are[data-v-5d3ea396]{width:100%}.main .who-we-are .container[data-v-5d3ea396]{display:grid;align-items:center}.main .who-we-are .container h2[data-v-5d3ea396]{color:#c2874a;margin-top:.94rem;text-align:left}@media screen and (min-width:992px){.main .who-we-are .container .who-we-are-all[data-v-5d3ea396]{margin-top:2rem}}.main .who-we-are .container .who-we-are-all .stay-slide[data-v-5d3ea396]{margin-top:1.88rem;display:flex;align-items:center;grid-gap:.5rem;gap:.5rem}.main .who-we-are .container .who-we-are-all .stay-slide .slide-card[data-v-5d3ea396]{position:relative;background:rgba(0,0,0,.1)}.main .who-we-are .container .who-we-are-all .stay-slide .slide-card img[data-v-5d3ea396]{width:25rem;-o-object-fit:cover;object-fit:cover}.main .who-we-are .container .who-we-are-all .stay-slide .slide-card .logo-over[data-v-5d3ea396]{bottom:0;right:0;position:absolute}.main .who-we-are .container .who-we-are-all .stay-slide .slide-card .logo-over img[data-v-5d3ea396]{width:15rem}.main .who-we-are .container .who-we-are-all .stay-desc[data-v-5d3ea396]{margin-top:1.88rem;display:grid;align-items:center;justify-items:center;place-items:center}.main .who-we-are .container .who-we-are-all .stay-desc h4[data-v-5d3ea396]{font-size:1.5rem;margin-top:.94rem;color:#191e19;text-transform:uppercase;text-align:left}.main .who-we-are .container .who-we-are-all .stay-desc .header-title[data-v-5d3ea396]{color:grey}.main .who-we-are .container .who-we-are-all .stay-desc p[data-v-5d3ea396]{margin-top:.94rem;color:#191e19;font-size:1rem;text-align:center}.main .who-we-are .container .who-we-are-all .stay-desc .mid-img[data-v-5d3ea396]{margin-top:2rem;margin-bottom:2rem;width:30rem;height:40rem;-o-object-fit:cover;object-fit:cover}@media screen and (min-width:768px){.main .who-we-are .container .who-we-are-all .stay-desc .mid-img[data-v-5d3ea396]{width:100%}}.main .who-we-are .container .who-we-are-all .stay-desc .book-buttons[data-v-5d3ea396]{display:grid;align-items:left;justify-items:left;place-items:left;margin-top:3rem}.main .who-we-are .container .who-we-are-all .stay-desc .book-buttons .view[data-v-5d3ea396]{color:grey;font-size:.8rem}.main .who-we-are .container .who-we-are-all .stay-desc .book-buttons .view .lower-line[data-v-5d3ea396]{opacity:.7;border-style:solid;width:8rem}.main .who-we-are .container .unique[data-v-5d3ea396]{display:grid;align-content:center;justify-content:center;place-content:center;margin-top:4rem}.main .who-we-are .container .unique h4[data-v-5d3ea396]{font-size:1.5rem;margin-top:.94rem;margin-bottom:2rem;color:#191e19;text-transform:uppercase;text-align:left}@media screen and (min-width:992px){.main .who-we-are .container .unique[data-v-5d3ea396]{display:grid;grid-gap:.5rem;gap:.5rem;align-content:left;justify-content:left;place-content:left;grid-template-columns:1fr 1fr}}.main .who-we-are .container .unique p[data-v-5d3ea396]{color:#191e19;font-size:1rem;max-width:30rem;text-align:left}@media screen and (min-width:992px){.main .who-we-are .container .unique p[data-v-5d3ea396]{max-width:100%}}@media screen and (min-width:1200px){.main .who-we-are .container .who-we-are-all .stay-desc p[data-v-5d3ea396]{width:70rem}}@media screen and (min-width:992px){.main .who-we-are .container .who-we-are-all[data-v-5d3ea396]{flex-direction:row;grid-gap:2rem;gap:2rem}.main .who-we-are .container .who-we-are-all .stay-slide[data-v-5d3ea396]{margin-top:4.37rem}.main .who-we-are .container .who-we-are-all .stay-slide .slide-card img[data-v-5d3ea396]{width:100%}.main .who-we-are .container .who-we-are-all .stay-desc h4[data-v-5d3ea396]{margin-top:0}}@media screen and (min-width:1200px){.main .who-we-are[data-v-5d3ea396]{display:grid}}.main .wrapper[data-v-5d3ea396]{margin-top:3rem;position:relative}@media screen and (min-width:768px){.main .wrapper[data-v-5d3ea396]{margin-top:2rem}}.main .wrapper .all-wrapper[data-v-5d3ea396]{display:grid;align-items:center;justify-items:center;place-items:center;align-items:flex-start;margin-top:2rem;grid-gap:1rem;gap:1rem;grid-template-columns:1fr}@media screen and (min-width:768px){.main .wrapper .all-wrapper[data-v-5d3ea396]{grid-template-columns:1fr 1fr}}@media screen and (min-width:992px){.main .wrapper .all-wrapper[data-v-5d3ea396]{grid-template-columns:1fr 1fr 1fr 1fr}}.main .wrapper .all-wrapper .counter[data-v-5d3ea396]{padding:20px 0;border-radius:5px}.main .wrapper .all-wrapper .counter .persent-wrapper[data-v-5d3ea396]{display:flex;justify-content:center;grid-gap:.5rem;gap:.5rem}.main .wrapper .all-wrapper .count-title[data-v-5d3ea396],.main .wrapper .all-wrapper .counter h4[data-v-5d3ea396]{font-size:3rem;color:#c2874a;font-weight:400;margin-top:10px;margin-bottom:0;text-align:center}.main .wrapper .all-wrapper .count-text[data-v-5d3ea396]{font-size:.9rem;color:#191e19;font-weight:400;margin-top:1rem;margin-bottom:0;text-align:center}.main .wrapper .all-wrapper .fa-2x[data-v-5d3ea396]{margin:0 auto;float:none;display:table}.main .corporate[data-v-5d3ea396]{margin-top:4rem;display:grid}.main .corporate .corporate-txt[data-v-5d3ea396]{font-size:1.5rem;margin-top:.94rem;margin-bottom:1rem;color:#191e19;text-transform:uppercase;text-align:left}@media screen and (min-width:992px){.main .corporate .wrapper[data-v-5d3ea396]{display:flex;grid-gap:3rem;gap:3rem;align-items:flex-start}}.main .corporate .wrapper .corporate-text .corporate-txt2[data-v-5d3ea396]{font-size:1rem}.main .corporate .wrapper .corporate-text .corporate-txt3[data-v-5d3ea396]{margin-top:.4rem;color:#191e19;font-size:1rem;text-align:left}.main .corporate .wrapper .style-image img[data-v-5d3ea396]{-o-object-fit:cover;object-fit:cover;margin-top:2rem}@media screen and (min-width:768px){.main .corporate .wrapper .style-image img[data-v-5d3ea396]{width:100%;height:36rem}}@media screen and (min-width:992px){.main .corporate .wrapper .style-image img[data-v-5d3ea396]{margin-top:0;width:75rem;height:36rem}}@media screen and (min-width:1200px){.main .corporate .wrapper .style-image img[data-v-5d3ea396]{width:95rem;height:30rem}}.main .our-team[data-v-5d3ea396]{margin-top:3rem}.main .our-team .container[data-v-5d3ea396]{display:grid;align-items:center;justify-items:center;place-items:center}.main .our-team .container h2[data-v-5d3ea396]{color:#191e19;text-align:center;font-size:1.5rem;margin-bottom:2rem;text-transform:uppercase}.main .our-team .container .single-team-member[data-v-5d3ea396]{display:grid;align-items:center;justify-items:center;place-items:center;margin-bottom:2rem}.main .our-team .container .single-team-member .team-image[data-v-5d3ea396]{border-radius:20rem;margin-top:1rem;width:15rem}.main .our-team .container .single-team-member .member-email[data-v-5d3ea396],.main .our-team .container .single-team-member .memeber-title[data-v-5d3ea396],.main .our-team .container .single-team-member .memeber-year-exp[data-v-5d3ea396],.main .our-team .container .single-team-member .name-title[data-v-5d3ea396]{text-align:center;margin-top:.94rem;color:grey;font-weight:600}.main .our-team .container .single-team-member .name-title[data-v-5d3ea396]{text-transform:uppercase;text-align:center;color:#c2874a;margin-top:2rem;font-size:1.3rem}.main .our-team .container .our-team-wrapper[data-v-5d3ea396]{margin-top:2rem}@media screen and (min-width:768px){.main .our-team .container .our-team-wrapper[data-v-5d3ea396]{display:grid;grid-template-columns:1fr 1fr;grid-gap:4rem;gap:4rem}}@media screen and (min-width:992px){.main .our-team .container .our-team-wrapper[data-v-5d3ea396]{grid-template-columns:1fr 1fr 1fr}}@media screen and (min-width:1200px){.main .our-team .container .our-team-wrapper[data-v-5d3ea396]{grid-template-columns:1fr 1fr 1fr 1fr}}.main .our-team .container .our-team-wrapper .single-team-member[data-v-5d3ea396]{display:grid;align-items:center;justify-items:center;place-items:center;margin-bottom:2rem}.main .our-team .container .our-team-wrapper .single-team-member .team-image[data-v-5d3ea396]{border-radius:20rem;width:15rem}.main .our-team .container .our-team-wrapper .single-team-member .member-email[data-v-5d3ea396],.main .our-team .container .our-team-wrapper .single-team-member .memeber-title[data-v-5d3ea396],.main .our-team .container .our-team-wrapper .single-team-member .memeber-year-exp[data-v-5d3ea396],.main .our-team .container .our-team-wrapper .single-team-member .name-title[data-v-5d3ea396]{text-align:center;color:grey;font-weight:600}.main .our-team .container .our-team-wrapper .single-team-member .name-title[data-v-5d3ea396]{display:grid;align-items:center;justify-items:center;place-items:center;text-transform:uppercase;text-align:center;color:#c2874a;font-size:1.3rem}@media screen and (min-width:992px){.main .our-team[data-v-5d3ea396]{margin-top:8.13rem}.main .our-team .container .gallery-wrapper[data-v-5d3ea396]{grid-gap:2rem;gap:2rem;margin-top:4.37rem}.main .our-team .container .gallery-wrapper .gallery-frist-img[data-v-5d3ea396]{margin-top:2rem}.main .our-team .container .gallery-wrapper .gallery-frist-img img[data-v-5d3ea396]{width:55rem;height:42rem;-o-object-fit:cover;object-fit:cover}.main .our-team .container .gallery-wrapper .gallery-imgs .gallery-img[data-v-5d3ea396]{margin-top:2rem}.main .our-team .container .gallery-wrapper .gallery-imgs .gallery-img img[data-v-5d3ea396]{width:40rem;height:20rem;-o-object-fit:cover;object-fit:cover}}.main .company-profile[data-v-5d3ea396]{margin-top:4.25rem}.main .company-profile .container h2[data-v-5d3ea396]{color:#191e19;margin-top:.94rem;text-align:left}.main .company-profile .container .company-profile-all[data-v-5d3ea396]{display:grid;align-items:center;justify-items:center;place-items:center}.main .company-profile .container .company-profile-all .company-profile-slide[data-v-5d3ea396]{display:flex;align-items:center;justify-items:center;grid-gap:.5rem;gap:.5rem}.main .company-profile .container .company-profile-all .company-profile-slide .back-icon img[data-v-5d3ea396],.main .company-profile .container .company-profile-all .company-profile-slide .next-icon img[data-v-5d3ea396]{width:2rem}.main .company-profile .container .company-profile-all .gift-desc[data-v-5d3ea396]{margin:0 auto}.main .company-profile .container .company-profile-all .gift-desc h3[data-v-5d3ea396]{margin-top:.94rem;font-size:.7rem;letter-spacing:.2rem;line-height:.5rem;margin-bottom:.5rem;font-weight:600;text-transform:uppercase;color:grey}.main .company-profile .container .company-profile-all .gift-desc h4[data-v-5d3ea396]{margin-top:1.88rem;color:#191e19}.main .company-profile .container .company-profile-all .gift-desc .header-title[data-v-5d3ea396]{color:grey}.main .company-profile .container .company-profile-all .gift-desc p[data-v-5d3ea396]{margin-top:.94rem;color:#191e19;font-size:.88rem;text-align:left}.main .company-profile .container .company-profile-all .gift-desc .book-buttons[data-v-5d3ea396]{display:flex;justify-content:left;margin-top:1.88rem}.main .company-profile .container .company-profile-all .gift-desc .book-buttons .btn[data-v-5d3ea396]{padding:1rem 2rem}@media screen and (min-width:768px){.main .company-profile .container .company-profile-all[data-v-5d3ea396]{display:flex;justify-content:center;align-items:center;grid-gap:1rem;gap:1rem}.main .company-profile .container .company-profile-all .company-profile-slide .slide-card img[data-v-5d3ea396],.main .company-profile .container .company-profile-all .gift-desc[data-v-5d3ea396]{width:25rem}.main .company-profile .container .company-profile-all .gift-desc h4[data-v-5d3ea396]{margin-top:0;line-height:2rem}}@media screen and (min-width:992px){.main .company-profile[data-v-5d3ea396]{margin-top:8.13rem}.main .company-profile .container .company-profile-all[data-v-5d3ea396]{display:flex}.main .company-profile .container .company-profile-all .company-profile-slide .slide-card img[data-v-5d3ea396]{width:25rem}.main .company-profile .container .company-profile-all .company-profile-slide .back-icon img[data-v-5d3ea396],.main .company-profile .container .company-profile-all .company-profile-slide .next-icon img[data-v-5d3ea396]{width:2rem}.main .company-profile .container .company-profile-all .gift-desc[data-v-5d3ea396]{margin:0 auto;width:25rem}.main .company-profile .container .company-profile-all .gift-desc .book-buttons[data-v-5d3ea396]{display:flex;justify-content:left;margin-top:1.88rem}}@media screen and (min-width:1200px){.main .company-profile .container .company-profile-all[data-v-5d3ea396]{display:flex;align-items:flex-start}.main .company-profile .container .company-profile-all .company-profile-slide .slide-card img[data-v-5d3ea396]{width:30rem}.main .company-profile .container .company-profile-all .gift-desc[data-v-5d3ea396]{margin-left:2rem;margin-right:2rem;width:30rem}}.main .partners[data-v-5d3ea396]{margin-top:5rem}@media screen and (min-width:992px){.main .partners[data-v-5d3ea396]{margin-top:10rem}}.main .partners .container[data-v-5d3ea396]{display:grid;align-items:center;justify-items:center;place-items:center}.main .partners .container h2[data-v-5d3ea396]{color:#191e19;text-align:center;font-size:1.5rem;text-transform:uppercase}.main .partners .container p[data-v-5d3ea396]{text-align:center;color:grey;margin-top:1rem;font-size:.8rem}.main .partners .container .image-wrapper[data-v-5d3ea396]{display:grid;justify-items:center;place-items:center;align-items:center;grid-gap:1rem;gap:1rem;grid-template-columns:1fr 1fr}.main .partners .container .image-wrapper .small-image[data-v-5d3ea396]{width:8rem;-o-object-fit:cover;object-fit:cover}.main .partners .container .image-wrapper .small-image1[data-v-5d3ea396]{width:10rem;-o-object-fit:cover;object-fit:cover}.main .partners .container .image-wrapper img[data-v-5d3ea396]{width:13rem;margin-top:2rem;-o-object-fit:cover;object-fit:cover;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%)}.main .partners .container .image-wrapper img[data-v-5d3ea396]:hover{filter:grayscale(0);-webkit-filter:grayscale(0);-moz-filter:grayscale(0);transform:scale(1.1);-webkit-transform:scale(1.1);-moz-transform:scale(1.1)}@media screen and (min-width:768px){.main .partners .container .image-wrapper[data-v-5d3ea396]{display:grid;grid-template-columns:1fr 1fr;align-items:center;justify-items:center;place-items:center;grid-gap:1rem;gap:1rem}}@media screen and (min-width:992px){.main .partners .container .image-wrapper[data-v-5d3ea396]{grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:2rem;gap:2rem}}@media screen and (min-width:1200px){.main .partners .container .image-wrapper[data-v-5d3ea396]{grid-template-columns:1fr 1fr 1fr 1fr 1fr}}.main .testimonials[data-v-5d3ea396]{margin-top:6.25rem}@media screen and (min-width:768px){.main .testimonials[data-v-5d3ea396]{margin-top:8rem}}.main .testimonials .container h2[data-v-5d3ea396]{color:#191e19;text-align:center;text-transform:uppercase;font-size:1.5rem}.main .testimonials .container p[data-v-5d3ea396]{text-align:center;color:grey;margin-top:1rem;font-size:.8rem}.main .testimonials .container .testimony-wrapper[data-v-5d3ea396]{display:grid;align-items:center;justify-items:center;place-items:center;margin-top:4rem}@media screen and (min-width:768px){.main .testimonials .container .testimony-wrapper[data-v-5d3ea396]{display:flex;justify-content:center;grid-gap:2rem;gap:2rem}}.main .testimonials .container .testimony-wrapper .testimony-card[data-v-5d3ea396]{background:#fff;padding:1rem;margin-bottom:2rem;border-radius:.5rem}@media screen and (min-width:768px){.main .testimonials .container .testimony-wrapper .testimony-card[data-v-5d3ea396]{width:25rem}}@media screen and (min-width:992px){.main .testimonials .container .testimony-wrapper .testimony-card[data-v-5d3ea396]{width:auto}}.main .testimonials .container .testimony-wrapper .testimony-card .test-img[data-v-5d3ea396]{margin-top:-3rem;margin-left:-1.5rem;border-radius:13rem}.main .testimonials .container .testimony-wrapper .testimony-card .test-img img[data-v-5d3ea396]{width:4rem}.main .testimonials .container .testimony-wrapper .testimony-card .test-stars img[data-v-5d3ea396]{margin-left:1rem;width:10rem}.main .testimonials .container .testimony-wrapper .testimony-card p[data-v-5d3ea396]{margin-left:1rem;color:#191e19;margin-top:.98rem;line-height:1.3rem;text-align:left}.main .testimonials .container .testimony-wrapper .testimony-card h3[data-v-5d3ea396]{margin-left:1rem;color:#a82f2f;font-size:.88rem;font-weight:800;margin-top:.98rem;line-height:1.3rem;text-align:left}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Aschalew.91019e1.png";

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Eyob.a41515e.png";

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Medal.ea0d0b6.png";

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Michael.5537bf0.png";

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Mulugeta.7121b98.png";

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/aboutus.vue?vue&type=template&id=5d3ea396&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main E-bg"},[_c('HeaderApp'),_vm._ssrNode(" <section class=\"display-video\" data-v-5d3ea396><div class=\"container\" data-v-5d3ea396><div class=\"video-wrapper\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(58)))+" alt data-v-5d3ea396></div></div></section> <section class=\"ceo\" data-v-5d3ea396><div class=\"container\" data-v-5d3ea396><div class=\"ceo-all\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(59)))+" alt data-v-5d3ea396> <div class=\"stay-desc\" data-v-5d3ea396><p data-v-5d3ea396>\n            Ato Tadiwos is the owner and Founder of Boston Partners P.L.C and\n            Kuriftu Resort and Spa operating at the head office in Addis Ababa\n            Ethiopia. The owner of Boston Partners P.L.C has over 30 years of\n            profound business experience in the same line of business in the\n            United States of America (USA). Using his Experience he was able\n            to successfully establish and manage the first spa and Beauty care\n            facility at the center of the city (Addis Ababa Bole Road) in\n            2002. Through hard work and dedication the business units managed\n            by the company are currently increased to Seven including; Kuriftu\n            resort and spa Debre zeit, Kuriftu resort and spa lake Tana in\n            Bahir dar, Kuriftu resort and spa Awash, Kuriftu Waterpark,\n            Kuriftu resort and spa Afar, Kuriftu resort and spa Entoto &amp;\n            Boston Day Spa. Many other projects including Kuriftu resort and\n            spa Arba Minch, Kuriftu African Village Bourayou, Kuriftu resort\n            and spa Langano, Kuriftu resort and spa Gherealta are still under\n            construction. In addition to Building and managing unparalleled\n            quality resorts and spas that provide first class hospitality\n            services, Boston Partners endeavors to become a leading resort and\n            spa operator in the continent, Hence the soon to be started\n            Kuriftu Resort and Spa Moucha Island.\n          </p></div></div></div></section> <section class=\"who-we-are\" data-v-5d3ea396><div class=\"container\" data-v-5d3ea396><div class=\"who-we-are-all\" data-v-5d3ea396><div class=\"stay-slide\" data-v-5d3ea396><div class=\"slide-card\" data-v-5d3ea396><div class=\"logo-over\" data-v-5d3ea396></div></div></div> <div class=\"stay-desc\" data-v-5d3ea396><h4 data-v-5d3ea396>who we are</h4> <p data-v-5d3ea396>\n            Boston Partners PLC, parent company of Kuriftu Resort, was\n            established in 2002 and is the leading, internationally renowned,\n            hospitality group based in Ethiopia, owning and operating\n            innovative brands across East Africa. The latest initiative of\n            Boston Partners PLC is to spearhead a promotional campaign to\n            promote Inter-African Tourism with a focus on fostering a new\n            mindset for the travel market.\n          </p> <img"+(_vm._ssrAttr("src",__webpack_require__(60)))+" alt class=\"mid-img\" data-v-5d3ea396> <h4 data-v-5d3ea396>WHAT MAKES US UNIQUE?</h4> <p class=\"unique-list\" data-v-5d3ea396><b data-v-5d3ea396> We </b> are a company solely owned and operated by\n            Africans.<br data-v-5d3ea396> <b data-v-5d3ea396> We </b> provide permanent employment opportunities to 2000+\n            people thus far.<br data-v-5d3ea396> <b data-v-5d3ea396> We </b> support local businesses by purchasing from the\n            communities that neighbor our resorts.<br data-v-5d3ea396> <b data-v-5d3ea396> We </b>are a Strategic Partner of Ethiopian Airlines and\n            Ethiopias Tourism Organization.<br data-v-5d3ea396> <b data-v-5d3ea396> We </b>produce all furniture in-house as well as other\n            culturally artisanal design elements of our resorts (Thatched\n            Roof, Woodwork, Leather Braiding, Stonework etc.).<br data-v-5d3ea396> <b data-v-5d3ea396> We </b>design all of our resorts in-house and construct them\n            with our own construction team.<br data-v-5d3ea396> <b data-v-5d3ea396> Our </b> CEO is an active member of the Ethiopian Board of\n            Tourism.<br data-v-5d3ea396> <b data-v-5d3ea396> Our </b> CEO is an active member of the Ethiopian Board of\n            Tourism.<br data-v-5d3ea396> <b data-v-5d3ea396> Our </b>78% is corporate team.<br data-v-5d3ea396></p></div></div> <div class=\"corporate\" data-v-5d3ea396></div> <div data-v-5d3ea396><div class=\"wrapper\" data-v-5d3ea396><div class=\"all-wrapper\" data-v-5d3ea396><div class=\"counter\" data-v-5d3ea396><div class=\"persent-wrapper\" data-v-5d3ea396><h2 data-to=\"71\" data-speed=\"10000\" class=\"timer count-title count-number\" data-v-5d3ea396></h2> <h4 data-v-5d3ea396>%</h4></div> <p class=\"count-text\" data-v-5d3ea396>Our line staff are females</p></div> <div class=\"counter\" data-v-5d3ea396><div class=\"persent-wrapper\" data-v-5d3ea396><h2 data-to=\"62\" data-speed=\"10000\" class=\"timer count-title count-number\" data-v-5d3ea396></h2> <h4 data-v-5d3ea396>%</h4></div> <p class=\"count-text\" data-v-5d3ea396>\n                Staff Emerge from Our Construction Team\n              </p></div> <div class=\"counter\" data-v-5d3ea396><div class=\"persent-wrapper\" data-v-5d3ea396><h2 data-to=\"80\" data-speed=\"10000\" class=\"timer count-title count-number\" data-v-5d3ea396></h2> <h4 data-v-5d3ea396>%</h4></div> <p class=\"count-text\" data-v-5d3ea396>\n                Hiring is Done Within the Local Community\n              </p></div> <div class=\"counter\" data-v-5d3ea396><div class=\"persent-wrapper\" data-v-5d3ea396><h2 data-to=\"98\" data-speed=\"10000\" class=\"timer count-title count-number\" data-v-5d3ea396></h2> <h4 data-v-5d3ea396>%</h4></div> <p class=\"count-text\" data-v-5d3ea396>\n                Our Staff Join in Zero Work Experience, Including Management\n              </p></div></div></div></div> <div class=\"who-we-are-all\" data-v-5d3ea396><div class=\"stay-slide\" data-v-5d3ea396><div class=\"slide-card\" data-v-5d3ea396><div class=\"logo-over\" data-v-5d3ea396></div></div></div> <div class=\"stay-desc\" data-v-5d3ea396><h4 data-v-5d3ea396>Corporate Social Responsibility</h4> <p data-v-5d3ea396><b data-v-5d3ea396>\n              Kuriftu Resorts focuses its efforts on social responsibility by\n              delivering lasting benefits to communities around Ethiopia:</b> <br data-v-5d3ea396>\n            Kuriftu Resorts donated 1.5 million ETB in an effort to aid in the\n            struggle against COVID-19<br data-v-5d3ea396>\n            Kuriftu Resorts donated 200 Water-park entrance tickets to kids\n            from Sele Enat Mahiber (SEM), an organization dedicated to\n            improving life in vulnerable communities around Ethiopia<br data-v-5d3ea396><br data-v-5d3ea396><br data-v-5d3ea396>\n            In an effort to minimize car accidents and maximize car safety\n            measures, Kuriftu Resorts setup 60 traffic billboards across the\n            Oromia and Amhara regions<br data-v-5d3ea396>\n            Kuriftu Resorts has always prioritized environmental advocacy, the\n            resort has donated 2.5 million ETB for the Addis Abeba\n            beautification project in continued support<br data-v-5d3ea396>\n            Tesfa Addis Parents Childhood Cancer Organization(TAPCCO)\n            established in 2012 works to help children with cancer while\n            supporting families. Kuriftu Resort and Spa has given TAPCCO kids\n            free entrance to the Kuriftu Water-park and Kuriftu Resort on\n            different occasions to provide fun, relaxing experiences<br data-v-5d3ea396></p></div></div></div></section> <section class=\"our-team\" data-v-5d3ea396><div class=\"container\" data-v-5d3ea396><h2 data-v-5d3ea396>Meet The Team</h2> <div data-aos=\"zoom-out\" class=\"single-team-member\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(61)))+" alt class=\"team-image\" data-v-5d3ea396> <div class=\"name-title\" data-v-5d3ea396>Tadiwos Getachew Belete</div> <div class=\"memeber-title\" data-v-5d3ea396>Founder /CEO</div></div> <div class=\"our-team-wrapper\" data-v-5d3ea396><div data-aos=\"zoom-out\" class=\"single-team-member\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(62)))+" alt class=\"team-image\" data-v-5d3ea396> <div class=\"name-title top1\" data-v-5d3ea396>Roman T.Gomeju</div> <div class=\"memeber-title\" data-v-5d3ea396>\n            New Business Development Managing Director\n          </div></div> <div data-aos=\"zoom-out\" class=\"single-team-member\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(63)))+" alt class=\"team-image\" data-v-5d3ea396> <div class=\"name-title\" data-v-5d3ea396>Tsegereda Abebe</div> <div class=\"memeber-title\" data-v-5d3ea396>\n            Operations <br data-v-5d3ea396>\n            Managing Director\n          </div></div> <div data-aos=\"zoom-out\" class=\"single-team-member\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(64)))+" alt class=\"team-image\" data-v-5d3ea396> <div class=\"name-title top\" data-v-5d3ea396>Yonaiel T.Belete</div> <div class=\"memeber-title\" data-v-5d3ea396>\n            Operations <br data-v-5d3ea396>\n            Director\n          </div></div> <div data-aos=\"zoom-out\" class=\"single-team-member\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(65)))+" alt class=\"team-image\" data-v-5d3ea396> <div class=\"name-title\" data-v-5d3ea396>Eskinder Getachew</div> <div class=\"memeber-title\" data-v-5d3ea396>\n            S. Regional <br data-v-5d3ea396>\n            Operations Director\n          </div></div> <div data-aos=\"zoom-out\" class=\"single-team-member\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(66)))+" alt class=\"team-image\" data-v-5d3ea396> <div class=\"name-title\" data-v-5d3ea396>Thomas Mekonnen</div> <div class=\"memeber-title\" data-v-5d3ea396>\n            N. Regional<br data-v-5d3ea396>\n            Operations Director\n          </div></div> <div data-aos=\"zoom-out\" class=\"single-team-member\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(67)))+" alt class=\"team-image\" data-v-5d3ea396> <div class=\"name-title\" data-v-5d3ea396>Mahlet Tadiwos</div> <div class=\"memeber-title\" data-v-5d3ea396>\n            New Business Development <br data-v-5d3ea396>\n            Deputy Director\n          </div></div> <div data-aos=\"zoom-out\" class=\"single-team-member\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(68)))+" alt class=\"team-image\" data-v-5d3ea396> <div class=\"name-title\" data-v-5d3ea396>Yegetafeker Taye</div> <div class=\"memeber-title\" data-v-5d3ea396>\n            Project<br data-v-5d3ea396>\n            Director\n          </div></div> <div data-aos=\"zoom-out\" class=\"single-team-member\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(69)))+" alt class=\"team-image\" data-v-5d3ea396> <div class=\"name-title top1\" data-v-5d3ea396>Aschalew Getachew</div> <div class=\"memeber-title\" data-v-5d3ea396>\n            Project Admin. &amp; Procurement<br data-v-5d3ea396>\n            Director\n          </div></div> <div data-aos=\"zoom-out\" class=\"single-team-member\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(70)))+" alt class=\"team-image\" data-v-5d3ea396> <div class=\"name-title\" data-v-5d3ea396>Eyob Shibru</div> <div class=\"memeber-title\" data-v-5d3ea396>\n            Finance<br data-v-5d3ea396>\n            Director\n          </div></div> <div data-aos=\"zoom-out\" class=\"single-team-member\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(71)))+" alt class=\"team-image\" data-v-5d3ea396> <div class=\"name-title\" data-v-5d3ea396>Medal Asrat</div> <div class=\"memeber-title\" data-v-5d3ea396>\n            Project Finance<br data-v-5d3ea396>\n            Director\n          </div></div> <div data-aos=\"zoom-out\" class=\"single-team-member\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(72)))+" alt class=\"team-image\" data-v-5d3ea396> <div class=\"name-title\" data-v-5d3ea396>Michael Tesfaye</div> <div class=\"memeber-title\" data-v-5d3ea396>\n            Marketing<br data-v-5d3ea396>\n            Director\n          </div></div> <div data-aos=\"zoom-out\" class=\"single-team-member\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(73)))+" alt class=\"team-image\" data-v-5d3ea396> <div class=\"name-title\" data-v-5d3ea396>Mulugeta Demissie</div> <div class=\"memeber-title\" data-v-5d3ea396>\n            Director of <br data-v-5d3ea396>\n            Talent Development\n          </div></div></div></div></section> <section class=\"company-profile\" data-v-5d3ea396><div class=\"container\" data-v-5d3ea396><div class=\"company-profile-all\" data-v-5d3ea396><div data-aos=\"slide-up\" class=\"company-profile-slide\" data-v-5d3ea396><div class=\"slide-card\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(74)))+" alt data-v-5d3ea396></div></div> <div data-aos=\"slide-up\" class=\"gift-desc\" data-v-5d3ea396><h4 data-v-5d3ea396>COMPANY PROFILE</h4> <p class=\"header-title\" data-v-5d3ea396></p> <p data-v-5d3ea396></p> <div class=\"book-buttons\" data-v-5d3ea396><a href=\"/company_profile.pdf\" target=\"_blank\" class=\"btn btn-cta text\" data-v-5d3ea396>DOWNLOAD COMPANY PROFILE</a></div></div></div></div></section> <section class=\"partners\" data-v-5d3ea396><div class=\"container\" data-v-5d3ea396><h2 data-v-5d3ea396>Strategic Partners</h2> <p data-v-5d3ea396>\n        Kuriftu Resort &amp; Spa values unique strategic partnerships that help\n        our brand reach new heights through collaborative marketing.\n      </p> <div class=\"image-wrapper\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(75)))+" alt data-v-5d3ea396> <img"+(_vm._ssrAttr("src",__webpack_require__(76)))+" alt data-v-5d3ea396> <img"+(_vm._ssrAttr("src",__webpack_require__(77)))+" alt class=\"small-image1\" data-v-5d3ea396> <img"+(_vm._ssrAttr("src",__webpack_require__(78)))+" alt class=\"small-image1\" data-v-5d3ea396> <img"+(_vm._ssrAttr("src",__webpack_require__(79)))+" alt class=\"small-image1\" data-v-5d3ea396> <img"+(_vm._ssrAttr("src",__webpack_require__(80)))+" alt class=\"small-image\" data-v-5d3ea396> <img"+(_vm._ssrAttr("src",__webpack_require__(81)))+" alt data-v-5d3ea396> <img"+(_vm._ssrAttr("src",__webpack_require__(82)))+" alt data-v-5d3ea396> <img"+(_vm._ssrAttr("src",__webpack_require__(83)))+" alt class=\"small-image\" data-v-5d3ea396> <img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt data-v-5d3ea396> <img"+(_vm._ssrAttr("src",__webpack_require__(85)))+" alt data-v-5d3ea396> <img"+(_vm._ssrAttr("src",__webpack_require__(86)))+" alt class=\"small-image\" data-v-5d3ea396> <img"+(_vm._ssrAttr("src",__webpack_require__(87)))+" alt class=\"small-image\" data-v-5d3ea396> <img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt data-v-5d3ea396> <img"+(_vm._ssrAttr("src",__webpack_require__(89)))+" alt data-v-5d3ea396></div></div></section> <section class=\"testimonials\" data-v-5d3ea396><div class=\"container\" data-v-5d3ea396><h2 data-v-5d3ea396>Testimonials</h2> <div class=\"testimony-wrapper\" data-v-5d3ea396><div class=\"testimony-card\" data-v-5d3ea396><div class=\"test-stars\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(57)))+" alt data-v-5d3ea396></div> <p class=\"text\" data-v-5d3ea396>\n            We stayed for 2 nights we had an excellent time. The customer\n            service was outstanding especially thanks to the food and beverage\n            director Mr. Fantahun. He is above and beyond in everything he\n            does. He made us feel at home. I highly recommend for families to\n            come and visit here\n          </p> <h3 data-v-5d3ea396>Daniel Berhane</h3></div> <div class=\"testimony-card\" data-v-5d3ea396><div class=\"test-stars\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(57)))+" alt data-v-5d3ea396></div> <p class=\"text\" data-v-5d3ea396>\n            This ride was great. The guide helped a lot. Haile Mariam Almayehu\n            guided me through the zip line course. 10/10. The zip line course\n            had many obstacles to go through and the guide was great in\n            showing me around the rope course would definitely recommend this.\n          </p> <h3 data-v-5d3ea396>Natan B.</h3></div> <div class=\"testimony-card\" data-v-5d3ea396><div class=\"test-stars\" data-v-5d3ea396><img"+(_vm._ssrAttr("src",__webpack_require__(57)))+" alt data-v-5d3ea396></div> <p class=\"text\" data-v-5d3ea396>\n            I can’t thank the staff enough for being so kind. Their\n            hospitality is truly amazing. I really loved everyone i had\n            contact with, such lovely people. The place was also so calm and\n            relaxing. I already promised my wife i will bring her back in a\n            couple months. So we will see you soon. Thank you again for making\n            us feel so welcomed\n          </p> <h3 data-v-5d3ea396>Sami</h3></div></div></div></section> "),_c('Sticky',{attrs:{"path":"awash"}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/aboutus.vue?vue&type=template&id=5d3ea396&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/aboutus.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var aboutusvue_type_script_lang_js_ = ({
  mounted() {
    (function ($) {
      $.fn.countTo = function (options) {
        options = options || {};
        return $(this).each(function () {
          // set options for current element
          var settings = $.extend({}, $.fn.countTo.defaults, {
            from: $(this).data("from"),
            to: $(this).data("to"),
            speed: $(this).data("speed"),
            refreshInterval: $(this).data("refresh-interval"),
            decimals: $(this).data("decimals")
          }, options); // how many times to update the value, and how much to increment the value on each update

          var loops = Math.ceil(settings.speed / settings.refreshInterval),
              increment = (settings.to - settings.from) / loops; // references & variables that will change with each update

          var self = this,
              $self = $(this),
              loopCount = 0,
              value = settings.from,
              data = $self.data("countTo") || {};
          $self.data("countTo", data); // if an existing interval can be found, clear it first

          if (data.interval) {
            clearInterval(data.interval);
          }

          data.interval = setInterval(updateTimer, settings.refreshInterval); // initialize the element with the starting value

          render(value);

          function updateTimer() {
            value += increment;
            loopCount++;
            render(value);

            if (typeof settings.onUpdate == "function") {
              settings.onUpdate.call(self, value);
            }

            if (loopCount >= loops) {
              // remove the interval
              $self.removeData("countTo");
              clearInterval(data.interval);
              value = settings.to;

              if (typeof settings.onComplete == "function") {
                settings.onComplete.call(self, value);
              }
            }
          }

          function render(value) {
            var formattedValue = settings.formatter.call(self, value, settings);
            $self.html(formattedValue);
          }
        });
      };

      $.fn.countTo.defaults = {
        from: 0,
        // the number the element should start at
        to: 0,
        // the number the element should end at
        speed: 1000,
        // how long it should take to count between the target numbers
        refreshInterval: 100,
        // how often the element should be updated
        decimals: 0,
        // the number of decimal places to show
        formatter: formatter,
        // handler for formatting the value before rendering
        onUpdate: null,
        // callback method for every time the element is updated
        onComplete: null // callback method for when the element finishes updating

      };

      function formatter(value, settings) {
        return value.toFixed(settings.decimals);
      }
    })(jQuery);

    jQuery(function ($) {
      // custom formatting example
      $(".count-number").data("countToOptions", {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
        }
      }); // start all the timers

      $(".timer").each(count);

      function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data("countToOptions") || {});
        $this.countTo(options);
      }
    });
  }

});
// CONCATENATED MODULE: ./pages/aboutus.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutusvue_type_script_lang_js_ = (aboutusvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/aboutus.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(681)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutusvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5d3ea396",
  "4c3c36fc"
  
)

/* harmony default export */ var aboutus = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderApp: __webpack_require__(16).default,Sticky: __webpack_require__(570).default})


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dz-cover.b57bb29.jpg";

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bgi_owler_20191231_023901_original.67526b3.png";

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ethiopian-airlines-logo.ea16fae.png";

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/african_union-emblem1.43ee843.png";

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/coca-cola-logo.7d8b667.svg";

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ETO-Logo-1024x684.c551078.png";

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dashen_bank-removebg-preview.f9184a1.png";

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kana.9bb54ad.png";

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-netherlands-embassy.392a44e.png";

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/UN-removebg-preview.2048ae6.png";

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/unilever.1c31344.png";

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/The_World_Bank_logo.svg.841a437.png";

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Seal_of_an_Embassy_of_the_United_States_of_America.svg.baa1fa0.png";

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1269px-Japan_International_Cooperation_Agency_logo.svg.01e68bf.png";

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/embassy-of-sweden-logo-cropped-1024x614-removebg-preview.b5873e9.png";

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cbe.eac80f7.png";

/***/ })

};;
//# sourceMappingURL=aboutus.js.map