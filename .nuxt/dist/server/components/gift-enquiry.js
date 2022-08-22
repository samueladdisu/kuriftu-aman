exports.ids = [14];
exports.modules = {

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/x.6223c6f.svg";

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(632);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0d42cdb8", content, true, context)
};

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GiftEnquiry_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(609);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GiftEnquiry_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GiftEnquiry_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GiftEnquiry_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GiftEnquiry_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 632:
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
___CSS_LOADER_EXPORT___.push([module.i, "*,:after,:before{box-sizing:border-box}a,b,blockquote,body,canvas,caption,code,div,em,embed,fieldset,figure,footer,form,h1,h2,h3,h4,h5,h6,header,html,i,iframe,img,label,li,main,nav,object,ol,p,pre,section,small,span,strike,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,tt,u,ul,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;text-size-adjust:none}img{border-style:none;max-width:100%;height:auto;display:block}html{line-height:1.15;-webkit-text-size-adjust:100%}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\"\";content:none}table{border-collapse:collapse;border-spacing:0}input{-webkit-appearance:none;border-radius:0}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;text-decoration:none;color:#000;display:block}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,select{text-transform:none}button,input{overflow:visible}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}@font-face{font-family:\"Neue Helvetica Medium\";font-style:normal;font-weight:400;src:local(\"Neue Helvetica Medium\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\")}@font-face{font-family:\"Neue Helvetica Thin\";font-style:normal;font-weight:400;src:local(\"Neue Helvetica Thin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\")}@font-face{font-family:\"Neue Helvetica Condensed Medium\";font-style:normal;font-weight:400;src:local(\"Neue Helvetica Condensed Medium\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\")}.container{width:90%;max-width:1920px;margin:0 auto}.row{display:flex;flex-wrap:wrap}.col{flex:1 0 0%}.col-0{flex:0 0 0%}.col-offset-0{margin-left:0}.col-1{flex:0 0 8.3333333333%}.col-offset-1{margin-left:8.3333333333%}.col-2{flex:0 0 16.6666666667%}.col-offset-2{margin-left:16.6666666667%}.col-3{flex:0 0 25%}.col-offset-3{margin-left:25%}.col-4{flex:0 0 33.3333333333%}.col-offset-4{margin-left:33.3333333333%}.col-5{flex:0 0 41.6666666667%}.col-offset-5{margin-left:41.6666666667%}.col-6{flex:0 0 50%}.col-offset-6{margin-left:50%}.col-7{flex:0 0 58.3333333333%}.col-offset-7{margin-left:58.3333333333%}.col-8{flex:0 0 66.6666666667%}.col-offset-8{margin-left:66.6666666667%}.col-9{flex:0 0 75%}.col-offset-9{margin-left:75%}.col-10{flex:0 0 83.3333333333%}.col-offset-10{margin-left:83.3333333333%}.col-11{flex:0 0 91.6666666667%}.col-offset-11{margin-left:91.6666666667%}.col-12{flex:0 0 100%}.col-offset-12{margin-left:100%}@media screen and (min-width:576px){.col-sm-0{flex:0 0 0%}.col-sm-offset-0{margin-left:0}.col-sm-1{flex:0 0 8.3333333333%}.col-sm-offset-1{margin-left:8.3333333333%}.col-sm-2{flex:0 0 16.6666666667%}.col-sm-offset-2{margin-left:16.6666666667%}.col-sm-3{flex:0 0 25%}.col-sm-offset-3{margin-left:25%}.col-sm-4{flex:0 0 33.3333333333%}.col-sm-offset-4{margin-left:33.3333333333%}.col-sm-5{flex:0 0 41.6666666667%}.col-sm-offset-5{margin-left:41.6666666667%}.col-sm-6{flex:0 0 50%}.col-sm-offset-6{margin-left:50%}.col-sm-7{flex:0 0 58.3333333333%}.col-sm-offset-7{margin-left:58.3333333333%}.col-sm-8{flex:0 0 66.6666666667%}.col-sm-offset-8{margin-left:66.6666666667%}.col-sm-9{flex:0 0 75%}.col-sm-offset-9{margin-left:75%}.col-sm-10{flex:0 0 83.3333333333%}.col-sm-offset-10{margin-left:83.3333333333%}.col-sm-11{flex:0 0 91.6666666667%}.col-sm-offset-11{margin-left:91.6666666667%}.col-sm-12{flex:0 0 100%}.col-sm-offset-12{margin-left:100%}}@media screen and (min-width:768px){.col-md-0{flex:0 0 0%}.col-md-offset-0{margin-left:0}.col-md-1{flex:0 0 8.3333333333%}.col-md-offset-1{margin-left:8.3333333333%}.col-md-2{flex:0 0 16.6666666667%}.col-md-offset-2{margin-left:16.6666666667%}.col-md-3{flex:0 0 25%}.col-md-offset-3{margin-left:25%}.col-md-4{flex:0 0 33.3333333333%}.col-md-offset-4{margin-left:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%}.col-md-offset-5{margin-left:41.6666666667%}.col-md-6{flex:0 0 50%}.col-md-offset-6{margin-left:50%}.col-md-7{flex:0 0 58.3333333333%}.col-md-offset-7{margin-left:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%}.col-md-offset-8{margin-left:66.6666666667%}.col-md-9{flex:0 0 75%}.col-md-offset-9{margin-left:75%}.col-md-10{flex:0 0 83.3333333333%}.col-md-offset-10{margin-left:83.3333333333%}.col-md-11{flex:0 0 91.6666666667%}.col-md-offset-11{margin-left:91.6666666667%}.col-md-12{flex:0 0 100%}.col-md-offset-12{margin-left:100%}}@media screen and (min-width:992px){.col-lg-0{flex:0 0 0%}.col-lg-offset-0{margin-left:0}.col-lg-1{flex:0 0 8.3333333333%}.col-lg-offset-1{margin-left:8.3333333333%}.col-lg-2{flex:0 0 16.6666666667%}.col-lg-offset-2{margin-left:16.6666666667%}.col-lg-3{flex:0 0 25%}.col-lg-offset-3{margin-left:25%}.col-lg-4{flex:0 0 33.3333333333%}.col-lg-offset-4{margin-left:33.3333333333%}.col-lg-5{flex:0 0 41.6666666667%}.col-lg-offset-5{margin-left:41.6666666667%}.col-lg-6{flex:0 0 50%}.col-lg-offset-6{margin-left:50%}.col-lg-7{flex:0 0 58.3333333333%}.col-lg-offset-7{margin-left:58.3333333333%}.col-lg-8{flex:0 0 66.6666666667%}.col-lg-offset-8{margin-left:66.6666666667%}.col-lg-9{flex:0 0 75%}.col-lg-offset-9{margin-left:75%}.col-lg-10{flex:0 0 83.3333333333%}.col-lg-offset-10{margin-left:83.3333333333%}.col-lg-11{flex:0 0 91.6666666667%}.col-lg-offset-11{margin-left:91.6666666667%}.col-lg-12{flex:0 0 100%}.col-lg-offset-12{margin-left:100%}}@media screen and (min-width:1200px){.col-xl-0{flex:0 0 0%}.col-xl-offset-0{margin-left:0}.col-xl-1{flex:0 0 8.3333333333%}.col-xl-offset-1{margin-left:8.3333333333%}.col-xl-2{flex:0 0 16.6666666667%}.col-xl-offset-2{margin-left:16.6666666667%}.col-xl-3{flex:0 0 25%}.col-xl-offset-3{margin-left:25%}.col-xl-4{flex:0 0 33.3333333333%}.col-xl-offset-4{margin-left:33.3333333333%}.col-xl-5{flex:0 0 41.6666666667%}.col-xl-offset-5{margin-left:41.6666666667%}.col-xl-6{flex:0 0 50%}.col-xl-offset-6{margin-left:50%}.col-xl-7{flex:0 0 58.3333333333%}.col-xl-offset-7{margin-left:58.3333333333%}.col-xl-8{flex:0 0 66.6666666667%}.col-xl-offset-8{margin-left:66.6666666667%}.col-xl-9{flex:0 0 75%}.col-xl-offset-9{margin-left:75%}.col-xl-10{flex:0 0 83.3333333333%}.col-xl-offset-10{margin-left:83.3333333333%}.col-xl-11{flex:0 0 91.6666666667%}.col-xl-offset-11{margin-left:91.6666666667%}.col-xl-12{flex:0 0 100%}.col-xl-offset-12{margin-left:100%}}.btn{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem 1.75rem;font-size:.9rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media screen and (min-width:992px){.btn{font-size:.9rem;font-weight:400}}.btn-cta,.btn-font,.btn-primary,.btn-secondary,.form-wrapper .event-form .form-group .event-btn{font-family:\"Neue Helvetica thin\";font-weight:600;letter-spacing:.1rem}.btn-primary,.form-wrapper .event-form .form-group .event-btn{font-size:.8rem;color:#313131;padding:.7rem 1rem;background:#fff;border:1px solid #707070;max-width:24.5rem;text-align:center}.btn-cta,.btn-secondary{background:#313131;padding:.7rem 8rem;color:#fff;border:none;max-width:24.5rem;text-align:center}@media screen and (min-width:768px){.btn-cta,.btn-secondary{padding:.7rem 2rem}}.btn-secondary{background:#f3eee7;border:1px solid #707070;color:#313131}.sub-title{font-family:\"Neue Helvetica thin\";font-weight:600;color:#525252;font-size:.6rem;text-transform:uppercase;letter-spacing:.2rem}.title{font-family:\"Neue Helvetica Medium\";text-transform:capitalize;font-weight:400;font-size:1.2rem}.E-bg{background:#f3eee7}.form-wrapper .event-form .form-group label,.text{font-family:\"Neue Helvetica thin\";font-weight:600;letter-spacing:.07rem;font-size:.7rem;line-height:1.5rem}.center{display:grid;align-items:center;justify-items:center;place-items:center}.link{font-family:\"Neue Helvetica thin\";font-weight:600;color:#525252;font-size:1rem;position:relative;letter-spacing:.07rem;display:inline-block}.link:after{content:\"\";position:absolute;font-size:.8rem;top:120%;left:0;height:1px;width:100%;background:#525252}.form-wrapper{background:rgba(0,0,0,.5);position:fixed;width:100%;height:100%;top:0;left:0;display:grid;align-items:center;justify-items:center;place-items:center}.form-wrapper .event-form{background:#fff;margin:0 auto;padding:4% 8.5%}.form-wrapper .event-form .close{position:relative;margin:1rem 0 2rem}.form-wrapper .event-form .close img{position:absolute;right:0;width:1rem}.form-wrapper .event-form .form-group{margin-bottom:1.5rem}.form-wrapper .event-form .form-group label{display:block}.form-wrapper .event-form .form-group input[type=checkbox]{-webkit-appearance:checkbox!important;-moz-appearance:checkbox!important;appearance:checkbox!important;margin-right:5px}.form-wrapper .event-form .form-group .register{display:inline}.form-wrapper .event-form .form-group .form-control{width:100%;border:.5px solid #000;background:none;outline:none;padding:.7rem .5rem}@media screen and (min-width:992px){.form-wrapper .event-form{width:50%}.form-wrapper .event-form .close{margin:0 0 2rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GiftEnquiry.vue?vue&type=template&id=2e4a6f85&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-wrapper"},[_vm._ssrNode("<div class=\"container\"><form action=\"https://formsubmit.co/kurifturesortspa1@gmail.com\" method=\"POST\" class=\"event-form\"><input type=\"hidden\" name=\"_cc\" value=\"booking@kurifturesorts.com\"> <input type=\"hidden\" name=\"_subject\" value=\"New Submission From Gift Voucher Page\"> <div class=\"close\"><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt></div> <div class=\"form-group\"><label for=\"name\"> Name * </label> <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\"></div> <div class=\"form-group\"><label for=\"email\"> Email * </label> <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\"></div> <div class=\"form-group\"><label for=\"phone\"> Phone number </label> <input type=\"text\" name=\"Phone\" id=\"phone\" class=\"form-control\"></div> <div class=\"form-group\"><button type=\"submit\" name=\"submit\" class=\"event-btn\">Send</button></div></form></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/GiftEnquiry.vue?vue&type=template&id=2e4a6f85&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GiftEnquiry.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var GiftEnquiryvue_type_script_lang_js_ = ({
  methods: {
    closeForm(event) {
      // event.stopPropagation();
      // console.log(event);
      this.$emit("close");
    }

  }
});
// CONCATENATED MODULE: ./components/GiftEnquiry.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GiftEnquiryvue_type_script_lang_js_ = (GiftEnquiryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/GiftEnquiry.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(631)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GiftEnquiryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "90625224"
  
)

/* harmony default export */ var GiftEnquiry = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=gift-enquiry.js.map