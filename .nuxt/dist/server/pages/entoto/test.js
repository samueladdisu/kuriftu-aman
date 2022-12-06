exports.ids = [69];
exports.modules = {

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/entoto/test.vue?vue&type=template&id=603cc9aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"button-wrapper\"><button class=\"btn\">Autumn</button></div> "),_c('stack',{attrs:{"column-min-width":300,"gutter-width":15,"gutter-height":15,"monitor-images-loaded":""}},_vm._l((_vm.images),function(image,i){return _c('stack-item',{key:i,staticStyle:{"transition":"transform 300ms"}},[_c('img',{attrs:{"src":image.urls.small,"alt":image.alt_description}})])}),1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/entoto/test.vue?vue&type=template&id=603cc9aa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/entoto/test.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var testvue_type_script_lang_js_ = ({
  searchUnsplash(topic) {
    this.images = [];
    axios.get(`https://api.unsplash.com/search/photos?query=${topic}&per_page=20`, {
      headers: {
        Authorization: "Client-ID <YourAccessKeyGoesHere>",
        "Accept-Version": "v1"
      }
    }).then(response => {
      this.images = response.data.results;
    }).catch(() => {
      this.images = [];
    });
  }

});
// CONCATENATED MODULE: ./pages/entoto/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var entoto_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/entoto/test.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  entoto_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "61108184"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=test.js.map