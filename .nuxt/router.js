import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _30ef6e0e = () => interopDefault(import('..\\pages\\aboutus.vue' /* webpackChunkName: "pages/aboutus" */))
const _373f39aa = () => interopDefault(import('..\\pages\\articles.vue' /* webpackChunkName: "pages/articles" */))
const _cfb93582 = () => interopDefault(import('..\\pages\\awash\\index.vue' /* webpackChunkName: "pages/awash/index" */))
const _89a52ffe = () => interopDefault(import('..\\pages\\bishoftu\\index.vue' /* webpackChunkName: "pages/bishoftu/index" */))
const _7f455ed6 = () => interopDefault(import('..\\pages\\book.vue' /* webpackChunkName: "pages/book" */))
const _641ce0c8 = () => interopDefault(import('..\\pages\\boston\\index.vue' /* webpackChunkName: "pages/boston/index" */))
const _f2e44250 = () => interopDefault(import('..\\pages\\careers.vue' /* webpackChunkName: "pages/careers" */))
const _8ae3267a = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _154fdcf6 = () => interopDefault(import('..\\pages\\entoto\\index.vue' /* webpackChunkName: "pages/entoto/index" */))
const _15941606 = () => interopDefault(import('..\\pages\\event.vue' /* webpackChunkName: "pages/event" */))
const _3a477db5 = () => interopDefault(import('..\\pages\\giftcard\\index.vue' /* webpackChunkName: "pages/giftcard/index" */))
const _c77aa0b4 = () => interopDefault(import('..\\pages\\laketana\\index.vue' /* webpackChunkName: "pages/laketana/index" */))
const _704dbd9c = () => interopDefault(import('..\\pages\\legal.vue' /* webpackChunkName: "pages/legal" */))
const _534df0fd = () => interopDefault(import('..\\pages\\newsletters.vue' /* webpackChunkName: "pages/newsletters" */))
const _11ba782b = () => interopDefault(import('..\\pages\\privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _79232802 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _0d089055 = () => interopDefault(import('..\\pages\\upcoming-project.vue' /* webpackChunkName: "pages/upcoming-project" */))
const _e7d925c4 = () => interopDefault(import('..\\pages\\waterpark\\index.vue' /* webpackChunkName: "pages/waterpark/index" */))
const _1ef5c3d8 = () => interopDefault(import('..\\pages\\awash\\acc\\index.vue' /* webpackChunkName: "pages/awash/acc/index" */))
const _7fcd0bcd = () => interopDefault(import('..\\pages\\awash\\corp.vue' /* webpackChunkName: "pages/awash/corp" */))
const _d44abec8 = () => interopDefault(import('..\\pages\\awash\\dining.vue' /* webpackChunkName: "pages/awash/dining" */))
const _6233a39b = () => interopDefault(import('..\\pages\\awash\\event\\index.vue' /* webpackChunkName: "pages/awash/event/index" */))
const _81c24b6c = () => interopDefault(import('..\\pages\\awash\\exp.vue' /* webpackChunkName: "pages/awash/exp" */))
const _e8b7db02 = () => interopDefault(import('..\\pages\\awash\\gallery.vue' /* webpackChunkName: "pages/awash/gallery" */))
const _fc1e6a1e = () => interopDefault(import('..\\pages\\awash\\well.vue' /* webpackChunkName: "pages/awash/well" */))
const _4f0ef6dc = () => interopDefault(import('..\\pages\\bishoftu\\acc\\index.vue' /* webpackChunkName: "pages/bishoftu/acc/index" */))
const _bc12ae6a = () => interopDefault(import('..\\pages\\bishoftu\\corp.vue' /* webpackChunkName: "pages/bishoftu/corp" */))
const _57de13cc = () => interopDefault(import('..\\pages\\bishoftu\\dining.vue' /* webpackChunkName: "pages/bishoftu/dining" */))
const _1ae76299 = () => interopDefault(import('..\\pages\\bishoftu\\event\\index.vue' /* webpackChunkName: "pages/bishoftu/event/index" */))
const _d222b4e8 = () => interopDefault(import('..\\pages\\bishoftu\\exp.vue' /* webpackChunkName: "pages/bishoftu/exp" */))
const _14386cc1 = () => interopDefault(import('..\\pages\\bishoftu\\gallery.vue' /* webpackChunkName: "pages/bishoftu/gallery" */))
const _dd0b0fde = () => interopDefault(import('..\\pages\\bishoftu\\gift\\index.vue' /* webpackChunkName: "pages/bishoftu/gift/index" */))
const _b7cb3022 = () => interopDefault(import('..\\pages\\bishoftu\\well.vue' /* webpackChunkName: "pages/bishoftu/well" */))
const _3f2ccfc8 = () => interopDefault(import('..\\pages\\boston\\gallery.vue' /* webpackChunkName: "pages/boston/gallery" */))
const _d43000d0 = () => interopDefault(import('..\\pages\\boston\\gift\\index.vue' /* webpackChunkName: "pages/boston/gift/index" */))
const _17d1e0bd = () => interopDefault(import('..\\pages\\entoto\\acc\\index.vue' /* webpackChunkName: "pages/entoto/acc/index" */))
const _5782f152 = () => interopDefault(import('..\\pages\\entoto\\adv.vue' /* webpackChunkName: "pages/entoto/adv" */))
const _74317d94 = () => interopDefault(import('..\\pages\\entoto\\corp.vue' /* webpackChunkName: "pages/entoto/corp" */))
const _8385c076 = () => interopDefault(import('..\\pages\\entoto\\dining.vue' /* webpackChunkName: "pages/entoto/dining" */))
const _2d4b3ff8 = () => interopDefault(import('..\\pages\\entoto\\event\\index.vue' /* webpackChunkName: "pages/entoto/event/index" */))
const _6cb8587e = () => interopDefault(import('..\\pages\\entoto\\exp.vue' /* webpackChunkName: "pages/entoto/exp" */))
const _6f917876 = () => interopDefault(import('..\\pages\\entoto\\gallery.vue' /* webpackChunkName: "pages/entoto/gallery" */))
const _3d4ca146 = () => interopDefault(import('..\\pages\\entoto\\gift\\index.vue' /* webpackChunkName: "pages/entoto/gift/index" */))
const _c66bbbc4 = () => interopDefault(import('..\\pages\\entoto\\test.vue' /* webpackChunkName: "pages/entoto/test" */))
const _6fe9ff4c = () => interopDefault(import('..\\pages\\entoto\\well.vue' /* webpackChunkName: "pages/entoto/well" */))
const _c3b187e6 = () => interopDefault(import('..\\pages\\laketana\\acc\\index.vue' /* webpackChunkName: "pages/laketana/acc/index" */))
const _be114ef4 = () => interopDefault(import('..\\pages\\laketana\\corp.vue' /* webpackChunkName: "pages/laketana/corp" */))
const _15a4a315 = () => interopDefault(import('..\\pages\\laketana\\dining.vue' /* webpackChunkName: "pages/laketana/dining" */))
const _2fc62754 = () => interopDefault(import('..\\pages\\laketana\\event\\index.vue' /* webpackChunkName: "pages/laketana/event/index" */))
const _2b8b9271 = () => interopDefault(import('..\\pages\\laketana\\exp.vue' /* webpackChunkName: "pages/laketana/exp" */))
const _051a5f26 = () => interopDefault(import('..\\pages\\laketana\\gallery.vue' /* webpackChunkName: "pages/laketana/gallery" */))
const _fcbaa014 = () => interopDefault(import('..\\pages\\laketana\\gift\\index.vue' /* webpackChunkName: "pages/laketana/gift/index" */))
const _b9c9d0ac = () => interopDefault(import('..\\pages\\laketana\\well.vue' /* webpackChunkName: "pages/laketana/well" */))
const _1feb949d = () => interopDefault(import('..\\pages\\waterpark\\dining.vue' /* webpackChunkName: "pages/waterpark/dining" */))
const _43b19e9e = () => interopDefault(import('..\\pages\\waterpark\\gallery.vue' /* webpackChunkName: "pages/waterpark/gallery" */))
const _1b1d736e = () => interopDefault(import('..\\pages\\waterpark\\gift\\index.vue' /* webpackChunkName: "pages/waterpark/gift/index" */))
const _221248f4 = () => interopDefault(import('..\\pages\\awash\\acc\\_id\\index.vue' /* webpackChunkName: "pages/awash/acc/_id/index" */))
const _9db3318c = () => interopDefault(import('..\\pages\\awash\\event\\_sub\\index.vue' /* webpackChunkName: "pages/awash/event/_sub/index" */))
const _27945870 = () => interopDefault(import('..\\pages\\bishoftu\\acc\\_id\\index.vue' /* webpackChunkName: "pages/bishoftu/acc/_id/index" */))
const _34026fb8 = () => interopDefault(import('..\\pages\\bishoftu\\event\\_sub\\index.vue' /* webpackChunkName: "pages/bishoftu/event/_sub/index" */))
const _57a1a814 = () => interopDefault(import('..\\pages\\bishoftu\\gift\\_card\\index.vue' /* webpackChunkName: "pages/bishoftu/gift/_card/index" */))
const _74fceaad = () => interopDefault(import('..\\pages\\boston\\gift\\_card\\index.vue' /* webpackChunkName: "pages/boston/gift/_card/index" */))
const _b8934b06 = () => interopDefault(import('..\\pages\\entoto\\acc\\_id\\index.vue' /* webpackChunkName: "pages/entoto/acc/_id/index" */))
const _ec831e3a = () => interopDefault(import('..\\pages\\entoto\\event\\_sub\\index.vue' /* webpackChunkName: "pages/entoto/event/_sub/index" */))
const _a544ad82 = () => interopDefault(import('..\\pages\\entoto\\gift\\_card\\index.vue' /* webpackChunkName: "pages/entoto/gift/_card/index" */))
const _c7f4dda6 = () => interopDefault(import('..\\pages\\laketana\\acc\\_id\\index.vue' /* webpackChunkName: "pages/laketana/acc/_id/index" */))
const _d829079a = () => interopDefault(import('..\\pages\\laketana\\event\\_sub\\index.vue' /* webpackChunkName: "pages/laketana/event/_sub/index" */))
const _90ea96e2 = () => interopDefault(import('..\\pages\\laketana\\gift\\_card\\index.vue' /* webpackChunkName: "pages/laketana/gift/_card/index" */))
const _d0e8cbd2 = () => interopDefault(import('..\\pages\\waterpark\\gift\\_card\\index.vue' /* webpackChunkName: "pages/waterpark/gift/_card/index" */))
const _df547c20 = () => interopDefault(import('..\\pages\\giftcard\\_card\\index.vue' /* webpackChunkName: "pages/giftcard/_card/index" */))
const _79966196 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutus",
    component: _30ef6e0e,
    name: "aboutus"
  }, {
    path: "/articles",
    component: _373f39aa,
    name: "articles"
  }, {
    path: "/awash",
    component: _cfb93582,
    name: "awash"
  }, {
    path: "/bishoftu",
    component: _89a52ffe,
    name: "bishoftu"
  }, {
    path: "/book",
    component: _7f455ed6,
    name: "book"
  }, {
    path: "/boston",
    component: _641ce0c8,
    name: "boston"
  }, {
    path: "/careers",
    component: _f2e44250,
    name: "careers"
  }, {
    path: "/contact",
    component: _8ae3267a,
    name: "contact"
  }, {
    path: "/entoto",
    component: _154fdcf6,
    name: "entoto"
  }, {
    path: "/event",
    component: _15941606,
    name: "event"
  }, {
    path: "/giftcard",
    component: _3a477db5,
    name: "giftcard"
  }, {
    path: "/laketana",
    component: _c77aa0b4,
    name: "laketana"
  }, {
    path: "/legal",
    component: _704dbd9c,
    name: "legal"
  }, {
    path: "/newsletters",
    component: _534df0fd,
    name: "newsletters"
  }, {
    path: "/privacy",
    component: _11ba782b,
    name: "privacy"
  }, {
    path: "/test",
    component: _79232802,
    name: "test"
  }, {
    path: "/upcoming-project",
    component: _0d089055,
    name: "upcoming-project"
  }, {
    path: "/waterpark",
    component: _e7d925c4,
    name: "waterpark"
  }, {
    path: "/awash/acc",
    component: _1ef5c3d8,
    name: "awash-acc"
  }, {
    path: "/awash/corp",
    component: _7fcd0bcd,
    name: "awash-corp"
  }, {
    path: "/awash/dining",
    component: _d44abec8,
    name: "awash-dining"
  }, {
    path: "/awash/event",
    component: _6233a39b,
    name: "awash-event"
  }, {
    path: "/awash/exp",
    component: _81c24b6c,
    name: "awash-exp"
  }, {
    path: "/awash/gallery",
    component: _e8b7db02,
    name: "awash-gallery"
  }, {
    path: "/awash/well",
    component: _fc1e6a1e,
    name: "awash-well"
  }, {
    path: "/bishoftu/acc",
    component: _4f0ef6dc,
    name: "bishoftu-acc"
  }, {
    path: "/bishoftu/corp",
    component: _bc12ae6a,
    name: "bishoftu-corp"
  }, {
    path: "/bishoftu/dining",
    component: _57de13cc,
    name: "bishoftu-dining"
  }, {
    path: "/bishoftu/event",
    component: _1ae76299,
    name: "bishoftu-event"
  }, {
    path: "/bishoftu/exp",
    component: _d222b4e8,
    name: "bishoftu-exp"
  }, {
    path: "/bishoftu/gallery",
    component: _14386cc1,
    name: "bishoftu-gallery"
  }, {
    path: "/bishoftu/gift",
    component: _dd0b0fde,
    name: "bishoftu-gift"
  }, {
    path: "/bishoftu/well",
    component: _b7cb3022,
    name: "bishoftu-well"
  }, {
    path: "/boston/gallery",
    component: _3f2ccfc8,
    name: "boston-gallery"
  }, {
    path: "/boston/gift",
    component: _d43000d0,
    name: "boston-gift"
  }, {
    path: "/entoto/acc",
    component: _17d1e0bd,
    name: "entoto-acc"
  }, {
    path: "/entoto/adv",
    component: _5782f152,
    name: "entoto-adv"
  }, {
    path: "/entoto/corp",
    component: _74317d94,
    name: "entoto-corp"
  }, {
    path: "/entoto/dining",
    component: _8385c076,
    name: "entoto-dining"
  }, {
    path: "/entoto/event",
    component: _2d4b3ff8,
    name: "entoto-event"
  }, {
    path: "/entoto/exp",
    component: _6cb8587e,
    name: "entoto-exp"
  }, {
    path: "/entoto/gallery",
    component: _6f917876,
    name: "entoto-gallery"
  }, {
    path: "/entoto/gift",
    component: _3d4ca146,
    name: "entoto-gift"
  }, {
    path: "/entoto/test",
    component: _c66bbbc4,
    name: "entoto-test"
  }, {
    path: "/entoto/well",
    component: _6fe9ff4c,
    name: "entoto-well"
  }, {
    path: "/laketana/acc",
    component: _c3b187e6,
    name: "laketana-acc"
  }, {
    path: "/laketana/corp",
    component: _be114ef4,
    name: "laketana-corp"
  }, {
    path: "/laketana/dining",
    component: _15a4a315,
    name: "laketana-dining"
  }, {
    path: "/laketana/event",
    component: _2fc62754,
    name: "laketana-event"
  }, {
    path: "/laketana/exp",
    component: _2b8b9271,
    name: "laketana-exp"
  }, {
    path: "/laketana/gallery",
    component: _051a5f26,
    name: "laketana-gallery"
  }, {
    path: "/laketana/gift",
    component: _fcbaa014,
    name: "laketana-gift"
  }, {
    path: "/laketana/well",
    component: _b9c9d0ac,
    name: "laketana-well"
  }, {
    path: "/waterpark/dining",
    component: _1feb949d,
    name: "waterpark-dining"
  }, {
    path: "/waterpark/gallery",
    component: _43b19e9e,
    name: "waterpark-gallery"
  }, {
    path: "/waterpark/gift",
    component: _1b1d736e,
    name: "waterpark-gift"
  }, {
    path: "/awash/acc/:id",
    component: _221248f4,
    name: "awash-acc-id"
  }, {
    path: "/awash/event/:sub",
    component: _9db3318c,
    name: "awash-event-sub"
  }, {
    path: "/bishoftu/acc/:id",
    component: _27945870,
    name: "bishoftu-acc-id"
  }, {
    path: "/bishoftu/event/:sub",
    component: _34026fb8,
    name: "bishoftu-event-sub"
  }, {
    path: "/bishoftu/gift/:card",
    component: _57a1a814,
    name: "bishoftu-gift-card"
  }, {
    path: "/boston/gift/:card",
    component: _74fceaad,
    name: "boston-gift-card"
  }, {
    path: "/entoto/acc/:id",
    component: _b8934b06,
    name: "entoto-acc-id"
  }, {
    path: "/entoto/event/:sub",
    component: _ec831e3a,
    name: "entoto-event-sub"
  }, {
    path: "/entoto/gift/:card",
    component: _a544ad82,
    name: "entoto-gift-card"
  }, {
    path: "/laketana/acc/:id",
    component: _c7f4dda6,
    name: "laketana-acc-id"
  }, {
    path: "/laketana/event/:sub",
    component: _d829079a,
    name: "laketana-event-sub"
  }, {
    path: "/laketana/gift/:card",
    component: _90ea96e2,
    name: "laketana-gift-card"
  }, {
    path: "/waterpark/gift/:card",
    component: _d0e8cbd2,
    name: "waterpark-gift-card"
  }, {
    path: "/giftcard/:card",
    component: _df547c20,
    name: "giftcard-card"
  }, {
    path: "/",
    component: _79966196,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
