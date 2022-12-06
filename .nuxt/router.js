import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1bd34574 = () => interopDefault(import('..\\pages\\aboutus.vue' /* webpackChunkName: "pages/aboutus" */))
const _ca139d1c = () => interopDefault(import('..\\pages\\articles.vue' /* webpackChunkName: "pages/articles" */))
const _56ed8df2 = () => interopDefault(import('..\\pages\\awash\\index.vue' /* webpackChunkName: "pages/awash/index" */))
const _48ed9f39 = () => interopDefault(import('..\\pages\\bishoftu\\index.vue' /* webpackChunkName: "pages/bishoftu/index" */))
const _ef010ac4 = () => interopDefault(import('..\\pages\\book.vue' /* webpackChunkName: "pages/book" */))
const _971cf400 = () => interopDefault(import('..\\pages\\boston\\index.vue' /* webpackChunkName: "pages/boston/index" */))
const _47b4ce10 = () => interopDefault(import('..\\pages\\careers.vue' /* webpackChunkName: "pages/careers" */))
const _7bb55bfb = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _65a4822e = () => interopDefault(import('..\\pages\\entoto\\index.vue' /* webpackChunkName: "pages/entoto/index" */))
const _133f5235 = () => interopDefault(import('..\\pages\\event.vue' /* webpackChunkName: "pages/event" */))
const _6ff09626 = () => interopDefault(import('..\\pages\\giftcard\\index.vue' /* webpackChunkName: "pages/giftcard/index" */))
const _2a02e6de = () => interopDefault(import('..\\pages\\laketana\\index.vue' /* webpackChunkName: "pages/laketana/index" */))
const _e351ca58 = () => interopDefault(import('..\\pages\\legal.vue' /* webpackChunkName: "pages/legal" */))
const _3c7a8435 = () => interopDefault(import('..\\pages\\newsletters.vue' /* webpackChunkName: "pages/newsletters" */))
const _5a3d313a = () => interopDefault(import('..\\pages\\privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _66aef072 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _374f401d = () => interopDefault(import('..\\pages\\upcoming-project.vue' /* webpackChunkName: "pages/upcoming-project" */))
const _934bc634 = () => interopDefault(import('..\\pages\\waterpark\\index.vue' /* webpackChunkName: "pages/waterpark/index" */))
const _0f14674c = () => interopDefault(import('..\\pages\\awash\\acc\\index.vue' /* webpackChunkName: "pages/awash/acc/index" */))
const _68f99f05 = () => interopDefault(import('..\\pages\\awash\\corp.vue' /* webpackChunkName: "pages/awash/corp" */))
const _33a17458 = () => interopDefault(import('..\\pages\\awash\\dining.vue' /* webpackChunkName: "pages/awash/dining" */))
const _1a157ed3 = () => interopDefault(import('..\\pages\\awash\\event\\index.vue' /* webpackChunkName: "pages/awash/event/index" */))
const _10f70012 = () => interopDefault(import('..\\pages\\awash\\exp.vue' /* webpackChunkName: "pages/awash/exp" */))
const _45e41447 = () => interopDefault(import('..\\pages\\awash\\gallery.vue' /* webpackChunkName: "pages/awash/gallery" */))
const _6b1d5e29 = () => interopDefault(import('..\\pages\\awash\\well.vue' /* webpackChunkName: "pages/awash/well" */))
const _1cd2105a = () => interopDefault(import('..\\pages\\bishoftu\\acc\\index.vue' /* webpackChunkName: "pages/bishoftu/acc/index" */))
const _5c36aa93 = () => interopDefault(import('..\\pages\\bishoftu\\corp.vue' /* webpackChunkName: "pages/bishoftu/corp" */))
const _0350b43c = () => interopDefault(import('..\\pages\\bishoftu\\dining.vue' /* webpackChunkName: "pages/bishoftu/dining" */))
const _a1e5c73e = () => interopDefault(import('..\\pages\\bishoftu\\event\\index.vue' /* webpackChunkName: "pages/bishoftu/event/index" */))
const _31796a78 = () => interopDefault(import('..\\pages\\bishoftu\\exp.vue' /* webpackChunkName: "pages/bishoftu/exp" */))
const _32c7b5f9 = () => interopDefault(import('..\\pages\\bishoftu\\gallery.vue' /* webpackChunkName: "pages/bishoftu/gallery" */))
const _4f5b356e = () => interopDefault(import('..\\pages\\bishoftu\\gift\\index.vue' /* webpackChunkName: "pages/bishoftu/gift/index" */))
const _5e5a69b7 = () => interopDefault(import('..\\pages\\bishoftu\\well.vue' /* webpackChunkName: "pages/bishoftu/well" */))
const _6625f200 = () => interopDefault(import('..\\pages\\boston\\gallery.vue' /* webpackChunkName: "pages/boston/gallery" */))
const _4dc9dad0 = () => interopDefault(import('..\\pages\\boston\\gift\\index.vue' /* webpackChunkName: "pages/boston/gift/index" */))
const _69a882f6 = () => interopDefault(import('..\\pages\\entoto\\acc\\index.vue' /* webpackChunkName: "pages/entoto/acc/index" */))
const _8529cae2 = () => interopDefault(import('..\\pages\\entoto\\adv.vue' /* webpackChunkName: "pages/entoto/adv" */))
const _024d14fe = () => interopDefault(import('..\\pages\\entoto\\corp.vue' /* webpackChunkName: "pages/entoto/corp" */))
const _787d218d = () => interopDefault(import('..\\pages\\entoto\\dining.vue' /* webpackChunkName: "pages/entoto/dining" */))
const _2db3ebcc = () => interopDefault(import('..\\pages\\entoto\\event\\index.vue' /* webpackChunkName: "pages/entoto/event/index" */))
const _9a5f320e = () => interopDefault(import('..\\pages\\entoto\\exp.vue' /* webpackChunkName: "pages/entoto/exp" */))
const _055ca0a4 = () => interopDefault(import('..\\pages\\entoto\\gallery.vue' /* webpackChunkName: "pages/entoto/gallery" */))
const _15a30704 = () => interopDefault(import('..\\pages\\entoto\\gift\\index.vue' /* webpackChunkName: "pages/entoto/gift/index" */))
const _4da01434 = () => interopDefault(import('..\\pages\\entoto\\test.vue' /* webpackChunkName: "pages/entoto/test" */))
const _0470d422 = () => interopDefault(import('..\\pages\\entoto\\well.vue' /* webpackChunkName: "pages/entoto/well" */))
const _3afe7056 = () => interopDefault(import('..\\pages\\laketana\\acc\\index.vue' /* webpackChunkName: "pages/laketana/acc/index" */))
const _5b375a4e = () => interopDefault(import('..\\pages\\laketana\\corp.vue' /* webpackChunkName: "pages/laketana/corp" */))
const _3feb52dd = () => interopDefault(import('..\\pages\\laketana\\dining.vue' /* webpackChunkName: "pages/laketana/dining" */))
const _78283dc8 = () => interopDefault(import('..\\pages\\laketana\\event\\index.vue' /* webpackChunkName: "pages/laketana/event/index" */))
const _7be037a9 = () => interopDefault(import('..\\pages\\laketana\\exp.vue' /* webpackChunkName: "pages/laketana/exp" */))
const _23a9a85e = () => interopDefault(import('..\\pages\\laketana\\gallery.vue' /* webpackChunkName: "pages/laketana/gallery" */))
const _6f0ac5a4 = () => interopDefault(import('..\\pages\\laketana\\gift\\index.vue' /* webpackChunkName: "pages/laketana/gift/index" */))
const _5d5b1972 = () => interopDefault(import('..\\pages\\laketana\\well.vue' /* webpackChunkName: "pages/laketana/well" */))
const _3e7addd5 = () => interopDefault(import('..\\pages\\waterpark\\dining.vue' /* webpackChunkName: "pages/waterpark/dining" */))
const _11e90734 = () => interopDefault(import('..\\pages\\waterpark\\gallery.vue' /* webpackChunkName: "pages/waterpark/gallery" */))
const _a179a594 = () => interopDefault(import('..\\pages\\waterpark\\gift\\index.vue' /* webpackChunkName: "pages/waterpark/gift/index" */))
const _f9c6d564 = () => interopDefault(import('..\\pages\\awash\\acc\\_id\\index.vue' /* webpackChunkName: "pages/awash/acc/_id/index" */))
const _79560f1c = () => interopDefault(import('..\\pages\\awash\\event\\_sub\\index.vue' /* webpackChunkName: "pages/awash/event/_sub/index" */))
const _03373600 = () => interopDefault(import('..\\pages\\bishoftu\\acc\\_id\\index.vue' /* webpackChunkName: "pages/bishoftu/acc/_id/index" */))
const _0d17b380 = () => interopDefault(import('..\\pages\\bishoftu\\event\\_sub\\index.vue' /* webpackChunkName: "pages/bishoftu/event/_sub/index" */))
const _30b6ebdc = () => interopDefault(import('..\\pages\\bishoftu\\gift\\_card\\index.vue' /* webpackChunkName: "pages/bishoftu/gift/_card/index" */))
const _aebeff16 = () => interopDefault(import('..\\pages\\boston\\gift\\_card\\index.vue' /* webpackChunkName: "pages/boston/gift/_card/index" */))
const _d7704c96 = () => interopDefault(import('..\\pages\\entoto\\acc\\_id\\index.vue' /* webpackChunkName: "pages/entoto/acc/_id/index" */))
const _853bf2aa = () => interopDefault(import('..\\pages\\entoto\\event\\_sub\\index.vue' /* webpackChunkName: "pages/entoto/event/_sub/index" */))
const _3dfd81f2 = () => interopDefault(import('..\\pages\\entoto\\gift\\_card\\index.vue' /* webpackChunkName: "pages/entoto/gift/_card/index" */))
const _a397bb36 = () => interopDefault(import('..\\pages\\laketana\\acc\\_id\\index.vue' /* webpackChunkName: "pages/laketana/acc/_id/index" */))
const _6d00bffb = () => interopDefault(import('..\\pages\\laketana\\event\\_sub\\index.vue' /* webpackChunkName: "pages/laketana/event/_sub/index" */))
const _dec00f52 = () => interopDefault(import('..\\pages\\laketana\\gift\\_card\\index.vue' /* webpackChunkName: "pages/laketana/gift/_card/index" */))
const _3dc26162 = () => interopDefault(import('..\\pages\\waterpark\\gift\\_card\\index.vue' /* webpackChunkName: "pages/waterpark/gift/_card/index" */))
const _247b7bb8 = () => interopDefault(import('..\\pages\\giftcard\\_card\\index.vue' /* webpackChunkName: "pages/giftcard/_card/index" */))
const _3d83a726 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1bd34574,
    name: "aboutus"
  }, {
    path: "/articles",
    component: _ca139d1c,
    name: "articles"
  }, {
    path: "/awash",
    component: _56ed8df2,
    name: "awash"
  }, {
    path: "/bishoftu",
    component: _48ed9f39,
    name: "bishoftu"
  }, {
    path: "/book",
    component: _ef010ac4,
    name: "book"
  }, {
    path: "/boston",
    component: _971cf400,
    name: "boston"
  }, {
    path: "/careers",
    component: _47b4ce10,
    name: "careers"
  }, {
    path: "/contact",
    component: _7bb55bfb,
    name: "contact"
  }, {
    path: "/entoto",
    component: _65a4822e,
    name: "entoto"
  }, {
    path: "/event",
    component: _133f5235,
    name: "event"
  }, {
    path: "/giftcard",
    component: _6ff09626,
    name: "giftcard"
  }, {
    path: "/laketana",
    component: _2a02e6de,
    name: "laketana"
  }, {
    path: "/legal",
    component: _e351ca58,
    name: "legal"
  }, {
    path: "/newsletters",
    component: _3c7a8435,
    name: "newsletters"
  }, {
    path: "/privacy",
    component: _5a3d313a,
    name: "privacy"
  }, {
    path: "/test",
    component: _66aef072,
    name: "test"
  }, {
    path: "/upcoming-project",
    component: _374f401d,
    name: "upcoming-project"
  }, {
    path: "/waterpark",
    component: _934bc634,
    name: "waterpark"
  }, {
    path: "/awash/acc",
    component: _0f14674c,
    name: "awash-acc"
  }, {
    path: "/awash/corp",
    component: _68f99f05,
    name: "awash-corp"
  }, {
    path: "/awash/dining",
    component: _33a17458,
    name: "awash-dining"
  }, {
    path: "/awash/event",
    component: _1a157ed3,
    name: "awash-event"
  }, {
    path: "/awash/exp",
    component: _10f70012,
    name: "awash-exp"
  }, {
    path: "/awash/gallery",
    component: _45e41447,
    name: "awash-gallery"
  }, {
    path: "/awash/well",
    component: _6b1d5e29,
    name: "awash-well"
  }, {
    path: "/bishoftu/acc",
    component: _1cd2105a,
    name: "bishoftu-acc"
  }, {
    path: "/bishoftu/corp",
    component: _5c36aa93,
    name: "bishoftu-corp"
  }, {
    path: "/bishoftu/dining",
    component: _0350b43c,
    name: "bishoftu-dining"
  }, {
    path: "/bishoftu/event",
    component: _a1e5c73e,
    name: "bishoftu-event"
  }, {
    path: "/bishoftu/exp",
    component: _31796a78,
    name: "bishoftu-exp"
  }, {
    path: "/bishoftu/gallery",
    component: _32c7b5f9,
    name: "bishoftu-gallery"
  }, {
    path: "/bishoftu/gift",
    component: _4f5b356e,
    name: "bishoftu-gift"
  }, {
    path: "/bishoftu/well",
    component: _5e5a69b7,
    name: "bishoftu-well"
  }, {
    path: "/boston/gallery",
    component: _6625f200,
    name: "boston-gallery"
  }, {
    path: "/boston/gift",
    component: _4dc9dad0,
    name: "boston-gift"
  }, {
    path: "/entoto/acc",
    component: _69a882f6,
    name: "entoto-acc"
  }, {
    path: "/entoto/adv",
    component: _8529cae2,
    name: "entoto-adv"
  }, {
    path: "/entoto/corp",
    component: _024d14fe,
    name: "entoto-corp"
  }, {
    path: "/entoto/dining",
    component: _787d218d,
    name: "entoto-dining"
  }, {
    path: "/entoto/event",
    component: _2db3ebcc,
    name: "entoto-event"
  }, {
    path: "/entoto/exp",
    component: _9a5f320e,
    name: "entoto-exp"
  }, {
    path: "/entoto/gallery",
    component: _055ca0a4,
    name: "entoto-gallery"
  }, {
    path: "/entoto/gift",
    component: _15a30704,
    name: "entoto-gift"
  }, {
    path: "/entoto/test",
    component: _4da01434,
    name: "entoto-test"
  }, {
    path: "/entoto/well",
    component: _0470d422,
    name: "entoto-well"
  }, {
    path: "/laketana/acc",
    component: _3afe7056,
    name: "laketana-acc"
  }, {
    path: "/laketana/corp",
    component: _5b375a4e,
    name: "laketana-corp"
  }, {
    path: "/laketana/dining",
    component: _3feb52dd,
    name: "laketana-dining"
  }, {
    path: "/laketana/event",
    component: _78283dc8,
    name: "laketana-event"
  }, {
    path: "/laketana/exp",
    component: _7be037a9,
    name: "laketana-exp"
  }, {
    path: "/laketana/gallery",
    component: _23a9a85e,
    name: "laketana-gallery"
  }, {
    path: "/laketana/gift",
    component: _6f0ac5a4,
    name: "laketana-gift"
  }, {
    path: "/laketana/well",
    component: _5d5b1972,
    name: "laketana-well"
  }, {
    path: "/waterpark/dining",
    component: _3e7addd5,
    name: "waterpark-dining"
  }, {
    path: "/waterpark/gallery",
    component: _11e90734,
    name: "waterpark-gallery"
  }, {
    path: "/waterpark/gift",
    component: _a179a594,
    name: "waterpark-gift"
  }, {
    path: "/awash/acc/:id",
    component: _f9c6d564,
    name: "awash-acc-id"
  }, {
    path: "/awash/event/:sub",
    component: _79560f1c,
    name: "awash-event-sub"
  }, {
    path: "/bishoftu/acc/:id",
    component: _03373600,
    name: "bishoftu-acc-id"
  }, {
    path: "/bishoftu/event/:sub",
    component: _0d17b380,
    name: "bishoftu-event-sub"
  }, {
    path: "/bishoftu/gift/:card",
    component: _30b6ebdc,
    name: "bishoftu-gift-card"
  }, {
    path: "/boston/gift/:card",
    component: _aebeff16,
    name: "boston-gift-card"
  }, {
    path: "/entoto/acc/:id",
    component: _d7704c96,
    name: "entoto-acc-id"
  }, {
    path: "/entoto/event/:sub",
    component: _853bf2aa,
    name: "entoto-event-sub"
  }, {
    path: "/entoto/gift/:card",
    component: _3dfd81f2,
    name: "entoto-gift-card"
  }, {
    path: "/laketana/acc/:id",
    component: _a397bb36,
    name: "laketana-acc-id"
  }, {
    path: "/laketana/event/:sub",
    component: _6d00bffb,
    name: "laketana-event-sub"
  }, {
    path: "/laketana/gift/:card",
    component: _dec00f52,
    name: "laketana-gift-card"
  }, {
    path: "/waterpark/gift/:card",
    component: _3dc26162,
    name: "waterpark-gift-card"
  }, {
    path: "/giftcard/:card",
    component: _247b7bb8,
    name: "giftcard-card"
  }, {
    path: "/",
    component: _3d83a726,
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
