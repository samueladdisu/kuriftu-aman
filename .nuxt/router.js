import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _030b667b = () => interopDefault(import('..\\pages\\aboutus.vue' /* webpackChunkName: "pages/aboutus" */))
const _aebb6246 = () => interopDefault(import('..\\pages\\articles.vue' /* webpackChunkName: "pages/articles" */))
const _6a7aae1c = () => interopDefault(import('..\\pages\\awash\\index.vue' /* webpackChunkName: "pages/awash/index" */))
const _a216b924 = () => interopDefault(import('..\\pages\\bishoftu\\index.vue' /* webpackChunkName: "pages/bishoftu/index" */))
const _bdddf4ee = () => interopDefault(import('..\\pages\\book.vue' /* webpackChunkName: "pages/book" */))
const _f533d916 = () => interopDefault(import('..\\pages\\boston\\index.vue' /* webpackChunkName: "pages/boston/index" */))
const _30064320 = () => interopDefault(import('..\\pages\\buyticket\\index.vue' /* webpackChunkName: "pages/buyticket/index" */))
const _58a9d745 = () => interopDefault(import('..\\pages\\careers.vue' /* webpackChunkName: "pages/careers" */))
const _e6ab35a0 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _36990fa3 = () => interopDefault(import('..\\pages\\entoto\\index.vue' /* webpackChunkName: "pages/entoto/index" */))
const _0cdf24aa = () => interopDefault(import('..\\pages\\event.vue' /* webpackChunkName: "pages/event" */))
const _2e0eb922 = () => interopDefault(import('..\\pages\\giftcard\\index.vue' /* webpackChunkName: "pages/giftcard/index" */))
const _dfec29da = () => interopDefault(import('..\\pages\\laketana\\index.vue' /* webpackChunkName: "pages/laketana/index" */))
const _f012256e = () => interopDefault(import('..\\pages\\legal.vue' /* webpackChunkName: "pages/legal" */))
const _4cadeaea = () => interopDefault(import('..\\pages\\newsletters.vue' /* webpackChunkName: "pages/newsletters" */))
const _38531ed0 = () => interopDefault(import('..\\pages\\privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _358bda9c = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _dbae7af0 = () => interopDefault(import('..\\pages\\upcoming-project.vue' /* webpackChunkName: "pages/upcoming-project" */))
const _11339f51 = () => interopDefault(import('..\\pages\\waterpark\\index.vue' /* webpackChunkName: "pages/waterpark/index" */))
const _0f6b3241 = () => interopDefault(import('..\\pages\\awash\\acc\\index.vue' /* webpackChunkName: "pages/awash/acc/index" */))
const _792d05ba = () => interopDefault(import('..\\pages\\awash\\corp.vue' /* webpackChunkName: "pages/awash/corp" */))
const _91b8596e = () => interopDefault(import('..\\pages\\awash\\dining.vue' /* webpackChunkName: "pages/awash/dining" */))
const _5fe56088 = () => interopDefault(import('..\\pages\\awash\\event\\index.vue' /* webpackChunkName: "pages/awash/event/index" */))
const _64116ebd = () => interopDefault(import('..\\pages\\awash\\exp.vue' /* webpackChunkName: "pages/awash/exp" */))
const _d8fd951c = () => interopDefault(import('..\\pages\\awash\\gallery.vue' /* webpackChunkName: "pages/awash/gallery" */))
const _7b50c4de = () => interopDefault(import('..\\pages\\awash\\well.vue' /* webpackChunkName: "pages/awash/well" */))
const _de033576 = () => interopDefault(import('..\\pages\\bishoftu\\acc\\index.vue' /* webpackChunkName: "pages/bishoftu/acc/index" */))
const _ac586884 = () => interopDefault(import('..\\pages\\bishoftu\\corp.vue' /* webpackChunkName: "pages/bishoftu/corp" */))
const _5931284d = () => interopDefault(import('..\\pages\\bishoftu\\dining.vue' /* webpackChunkName: "pages/bishoftu/dining" */))
const _6d103ae8 = () => interopDefault(import('..\\pages\\bishoftu\\event\\index.vue' /* webpackChunkName: "pages/bishoftu/event/index" */))
const _8f904f8e = () => interopDefault(import('..\\pages\\bishoftu\\exp.vue' /* webpackChunkName: "pages/bishoftu/exp" */))
const _331e80ee = () => interopDefault(import('..\\pages\\bishoftu\\gallery.vue' /* webpackChunkName: "pages/bishoftu/gallery" */))
const _2c9ea484 = () => interopDefault(import('..\\pages\\bishoftu\\gift\\index.vue' /* webpackChunkName: "pages/bishoftu/gift/index" */))
const _a810ea3c = () => interopDefault(import('..\\pages\\bishoftu\\well.vue' /* webpackChunkName: "pages/bishoftu/well" */))
const _32f40b35 = () => interopDefault(import('..\\pages\\boston\\gallery.vue' /* webpackChunkName: "pages/boston/gallery" */))
const _d8cc86f6 = () => interopDefault(import('..\\pages\\boston\\gift\\index.vue' /* webpackChunkName: "pages/boston/gift/index" */))
const _3b278a30 = () => interopDefault(import('..\\pages\\buyticket\\entotoActivity.vue' /* webpackChunkName: "pages/buyticket/entotoActivity" */))
const _54a35ba0 = () => interopDefault(import('..\\pages\\entoto\\acc\\index.vue' /* webpackChunkName: "pages/entoto/acc/index" */))
const _64c2fd78 = () => interopDefault(import('..\\pages\\entoto\\adv.vue' /* webpackChunkName: "pages/entoto/adv" */))
const _0ef2f62e = () => interopDefault(import('..\\pages\\entoto\\corp.vue' /* webpackChunkName: "pages/entoto/corp" */))
const _73cb7a90 = () => interopDefault(import('..\\pages\\entoto\\dining.vue' /* webpackChunkName: "pages/entoto/dining" */))
const _bc3f7e92 = () => interopDefault(import('..\\pages\\entoto\\event\\index.vue' /* webpackChunkName: "pages/entoto/event/index" */))
const _79f864a4 = () => interopDefault(import('..\\pages\\entoto\\exp.vue' /* webpackChunkName: "pages/entoto/exp" */))
const _6358b3e3 = () => interopDefault(import('..\\pages\\entoto\\gallery.vue' /* webpackChunkName: "pages/entoto/gallery" */))
const _3afe5e33 = () => interopDefault(import('..\\pages\\entoto\\gift\\index.vue' /* webpackChunkName: "pages/entoto/gift/index" */))
const _612d345e = () => interopDefault(import('..\\pages\\entoto\\test.vue' /* webpackChunkName: "pages/entoto/test" */))
const _0aab77e6 = () => interopDefault(import('..\\pages\\entoto\\well.vue' /* webpackChunkName: "pages/entoto/well" */))
const _56ad1cc0 = () => interopDefault(import('..\\pages\\laketana\\acc\\index.vue' /* webpackChunkName: "pages/laketana/acc/index" */))
const _ae57090e = () => interopDefault(import('..\\pages\\laketana\\corp.vue' /* webpackChunkName: "pages/laketana/corp" */))
const _ca765570 = () => interopDefault(import('..\\pages\\laketana\\dining.vue' /* webpackChunkName: "pages/laketana/dining" */))
const _4352b172 = () => interopDefault(import('..\\pages\\laketana\\event\\index.vue' /* webpackChunkName: "pages/laketana/event/index" */))
const _4cd4c51e = () => interopDefault(import('..\\pages\\laketana\\exp.vue' /* webpackChunkName: "pages/laketana/exp" */))
const _24007353 = () => interopDefault(import('..\\pages\\laketana\\gallery.vue' /* webpackChunkName: "pages/laketana/gallery" */))
const _4c4e34ba = () => interopDefault(import('..\\pages\\laketana\\gift\\index.vue' /* webpackChunkName: "pages/laketana/gift/index" */))
const _aa0f8ac6 = () => interopDefault(import('..\\pages\\laketana\\well.vue' /* webpackChunkName: "pages/laketana/well" */))
const _3ed1a8ca = () => interopDefault(import('..\\pages\\waterpark\\dining.vue' /* webpackChunkName: "pages/waterpark/dining" */))
const _018e1011 = () => interopDefault(import('..\\pages\\waterpark\\gallery.vue' /* webpackChunkName: "pages/waterpark/gallery" */))
const _6ca4193e = () => interopDefault(import('..\\pages\\waterpark\\gift\\index.vue' /* webpackChunkName: "pages/waterpark/gift/index" */))
const _c4f1490e = () => interopDefault(import('..\\pages\\awash\\acc\\_id\\index.vue' /* webpackChunkName: "pages/awash/acc/_id/index" */))
const _1a800332 = () => interopDefault(import('..\\pages\\awash\\event\\_sub\\index.vue' /* webpackChunkName: "pages/awash/event/_sub/index" */))
const _2dcf6af5 = () => interopDefault(import('..\\pages\\bishoftu\\acc\\_id\\index.vue' /* webpackChunkName: "pages/bishoftu/acc/_id/index" */))
const _2481ed6b = () => interopDefault(import('..\\pages\\bishoftu\\event\\_sub\\index.vue' /* webpackChunkName: "pages/bishoftu/event/_sub/index" */))
const _482125c7 = () => interopDefault(import('..\\pages\\bishoftu\\gift\\_card\\index.vue' /* webpackChunkName: "pages/bishoftu/gift/_card/index" */))
const _66963920 = () => interopDefault(import('..\\pages\\boston\\gift\\_card\\index.vue' /* webpackChunkName: "pages/boston/gift/_card/index" */))
const _71944e2c = () => interopDefault(import('..\\pages\\entoto\\acc\\_id\\index.vue' /* webpackChunkName: "pages/entoto/acc/_id/index" */))
const _7b57bf56 = () => interopDefault(import('..\\pages\\entoto\\event\\_sub\\index.vue' /* webpackChunkName: "pages/entoto/event/_sub/index" */))
const _c212109c = () => interopDefault(import('..\\pages\\entoto\\gift\\_card\\index.vue' /* webpackChunkName: "pages/entoto/gift/_card/index" */))
const _44c1af4c = () => interopDefault(import('..\\pages\\laketana\\acc\\_id\\index.vue' /* webpackChunkName: "pages/laketana/acc/_id/index" */))
const _f72a0c34 = () => interopDefault(import('..\\pages\\laketana\\event\\_sub\\index.vue' /* webpackChunkName: "pages/laketana/event/_sub/index" */))
const _afeb9b7c = () => interopDefault(import('..\\pages\\laketana\\gift\\_card\\index.vue' /* webpackChunkName: "pages/laketana/gift/_card/index" */))
const _92085a78 = () => interopDefault(import('..\\pages\\waterpark\\gift\\_card\\index.vue' /* webpackChunkName: "pages/waterpark/gift/_card/index" */))
const _3ee641e3 = () => interopDefault(import('..\\pages\\giftcard\\_card\\index.vue' /* webpackChunkName: "pages/giftcard/_card/index" */))
const _4a44023c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _030b667b,
    name: "aboutus"
  }, {
    path: "/articles",
    component: _aebb6246,
    name: "articles"
  }, {
    path: "/awash",
    component: _6a7aae1c,
    name: "awash"
  }, {
    path: "/bishoftu",
    component: _a216b924,
    name: "bishoftu"
  }, {
    path: "/book",
    component: _bdddf4ee,
    name: "book"
  }, {
    path: "/boston",
    component: _f533d916,
    name: "boston"
  }, {
    path: "/buyticket",
    component: _30064320,
    name: "buyticket"
  }, {
    path: "/careers",
    component: _58a9d745,
    name: "careers"
  }, {
    path: "/contact",
    component: _e6ab35a0,
    name: "contact"
  }, {
    path: "/entoto",
    component: _36990fa3,
    name: "entoto"
  }, {
    path: "/event",
    component: _0cdf24aa,
    name: "event"
  }, {
    path: "/giftcard",
    component: _2e0eb922,
    name: "giftcard"
  }, {
    path: "/laketana",
    component: _dfec29da,
    name: "laketana"
  }, {
    path: "/legal",
    component: _f012256e,
    name: "legal"
  }, {
    path: "/newsletters",
    component: _4cadeaea,
    name: "newsletters"
  }, {
    path: "/privacy",
    component: _38531ed0,
    name: "privacy"
  }, {
    path: "/test",
    component: _358bda9c,
    name: "test"
  }, {
    path: "/upcoming-project",
    component: _dbae7af0,
    name: "upcoming-project"
  }, {
    path: "/waterpark",
    component: _11339f51,
    name: "waterpark"
  }, {
    path: "/awash/acc",
    component: _0f6b3241,
    name: "awash-acc"
  }, {
    path: "/awash/corp",
    component: _792d05ba,
    name: "awash-corp"
  }, {
    path: "/awash/dining",
    component: _91b8596e,
    name: "awash-dining"
  }, {
    path: "/awash/event",
    component: _5fe56088,
    name: "awash-event"
  }, {
    path: "/awash/exp",
    component: _64116ebd,
    name: "awash-exp"
  }, {
    path: "/awash/gallery",
    component: _d8fd951c,
    name: "awash-gallery"
  }, {
    path: "/awash/well",
    component: _7b50c4de,
    name: "awash-well"
  }, {
    path: "/bishoftu/acc",
    component: _de033576,
    name: "bishoftu-acc"
  }, {
    path: "/bishoftu/corp",
    component: _ac586884,
    name: "bishoftu-corp"
  }, {
    path: "/bishoftu/dining",
    component: _5931284d,
    name: "bishoftu-dining"
  }, {
    path: "/bishoftu/event",
    component: _6d103ae8,
    name: "bishoftu-event"
  }, {
    path: "/bishoftu/exp",
    component: _8f904f8e,
    name: "bishoftu-exp"
  }, {
    path: "/bishoftu/gallery",
    component: _331e80ee,
    name: "bishoftu-gallery"
  }, {
    path: "/bishoftu/gift",
    component: _2c9ea484,
    name: "bishoftu-gift"
  }, {
    path: "/bishoftu/well",
    component: _a810ea3c,
    name: "bishoftu-well"
  }, {
    path: "/boston/gallery",
    component: _32f40b35,
    name: "boston-gallery"
  }, {
    path: "/boston/gift",
    component: _d8cc86f6,
    name: "boston-gift"
  }, {
    path: "/buyticket/entotoActivity",
    component: _3b278a30,
    name: "buyticket-entotoActivity"
  }, {
    path: "/entoto/acc",
    component: _54a35ba0,
    name: "entoto-acc"
  }, {
    path: "/entoto/adv",
    component: _64c2fd78,
    name: "entoto-adv"
  }, {
    path: "/entoto/corp",
    component: _0ef2f62e,
    name: "entoto-corp"
  }, {
    path: "/entoto/dining",
    component: _73cb7a90,
    name: "entoto-dining"
  }, {
    path: "/entoto/event",
    component: _bc3f7e92,
    name: "entoto-event"
  }, {
    path: "/entoto/exp",
    component: _79f864a4,
    name: "entoto-exp"
  }, {
    path: "/entoto/gallery",
    component: _6358b3e3,
    name: "entoto-gallery"
  }, {
    path: "/entoto/gift",
    component: _3afe5e33,
    name: "entoto-gift"
  }, {
    path: "/entoto/test",
    component: _612d345e,
    name: "entoto-test"
  }, {
    path: "/entoto/well",
    component: _0aab77e6,
    name: "entoto-well"
  }, {
    path: "/laketana/acc",
    component: _56ad1cc0,
    name: "laketana-acc"
  }, {
    path: "/laketana/corp",
    component: _ae57090e,
    name: "laketana-corp"
  }, {
    path: "/laketana/dining",
    component: _ca765570,
    name: "laketana-dining"
  }, {
    path: "/laketana/event",
    component: _4352b172,
    name: "laketana-event"
  }, {
    path: "/laketana/exp",
    component: _4cd4c51e,
    name: "laketana-exp"
  }, {
    path: "/laketana/gallery",
    component: _24007353,
    name: "laketana-gallery"
  }, {
    path: "/laketana/gift",
    component: _4c4e34ba,
    name: "laketana-gift"
  }, {
    path: "/laketana/well",
    component: _aa0f8ac6,
    name: "laketana-well"
  }, {
    path: "/waterpark/dining",
    component: _3ed1a8ca,
    name: "waterpark-dining"
  }, {
    path: "/waterpark/gallery",
    component: _018e1011,
    name: "waterpark-gallery"
  }, {
    path: "/waterpark/gift",
    component: _6ca4193e,
    name: "waterpark-gift"
  }, {
    path: "/awash/acc/:id",
    component: _c4f1490e,
    name: "awash-acc-id"
  }, {
    path: "/awash/event/:sub",
    component: _1a800332,
    name: "awash-event-sub"
  }, {
    path: "/bishoftu/acc/:id",
    component: _2dcf6af5,
    name: "bishoftu-acc-id"
  }, {
    path: "/bishoftu/event/:sub",
    component: _2481ed6b,
    name: "bishoftu-event-sub"
  }, {
    path: "/bishoftu/gift/:card",
    component: _482125c7,
    name: "bishoftu-gift-card"
  }, {
    path: "/boston/gift/:card",
    component: _66963920,
    name: "boston-gift-card"
  }, {
    path: "/entoto/acc/:id",
    component: _71944e2c,
    name: "entoto-acc-id"
  }, {
    path: "/entoto/event/:sub",
    component: _7b57bf56,
    name: "entoto-event-sub"
  }, {
    path: "/entoto/gift/:card",
    component: _c212109c,
    name: "entoto-gift-card"
  }, {
    path: "/laketana/acc/:id",
    component: _44c1af4c,
    name: "laketana-acc-id"
  }, {
    path: "/laketana/event/:sub",
    component: _f72a0c34,
    name: "laketana-event-sub"
  }, {
    path: "/laketana/gift/:card",
    component: _afeb9b7c,
    name: "laketana-gift-card"
  }, {
    path: "/waterpark/gift/:card",
    component: _92085a78,
    name: "waterpark-gift-card"
  }, {
    path: "/giftcard/:card",
    component: _3ee641e3,
    name: "giftcard-card"
  }, {
    path: "/",
    component: _4a44023c,
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
