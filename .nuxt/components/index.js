export const Acc = () => import('../..\\components\\Acc.vue' /* webpackChunkName: "components/acc" */).then(c => wrapFunctional(c.default || c))
export const BishFooter = () => import('../..\\components\\BishFooter.vue' /* webpackChunkName: "components/bish-footer" */).then(c => wrapFunctional(c.default || c))
export const Bishoftuslide = () => import('../..\\components\\Bishoftuslide.vue' /* webpackChunkName: "components/bishoftuslide" */).then(c => wrapFunctional(c.default || c))
export const Corporate = () => import('../..\\components\\Corporate.vue' /* webpackChunkName: "components/corporate" */).then(c => wrapFunctional(c.default || c))
export const Desc1 = () => import('../..\\components\\Desc1.vue' /* webpackChunkName: "components/desc1" */).then(c => wrapFunctional(c.default || c))
export const Destinav = () => import('../..\\components\\Destinav.vue' /* webpackChunkName: "components/destinav" */).then(c => wrapFunctional(c.default || c))
export const Dindex = () => import('../..\\components\\Dindex.vue' /* webpackChunkName: "components/dindex" */).then(c => wrapFunctional(c.default || c))
export const Dining = () => import('../..\\components\\Dining.vue' /* webpackChunkName: "components/dining" */).then(c => wrapFunctional(c.default || c))
export const Event = () => import('../..\\components\\Event.vue' /* webpackChunkName: "components/event" */).then(c => wrapFunctional(c.default || c))
export const Exp = () => import('../..\\components\\Exp.vue' /* webpackChunkName: "components/exp" */).then(c => wrapFunctional(c.default || c))
export const Feature = () => import('../..\\components\\Feature.vue' /* webpackChunkName: "components/feature" */).then(c => wrapFunctional(c.default || c))
export const FooterApp = () => import('../..\\components\\FooterApp.vue' /* webpackChunkName: "components/footer-app" */).then(c => wrapFunctional(c.default || c))
export const Gallery = () => import('../..\\components\\Gallery.vue' /* webpackChunkName: "components/gallery" */).then(c => wrapFunctional(c.default || c))
export const Gift = () => import('../..\\components\\Gift.vue' /* webpackChunkName: "components/gift" */).then(c => wrapFunctional(c.default || c))
export const GiftEnquiry = () => import('../..\\components\\GiftEnquiry.vue' /* webpackChunkName: "components/gift-enquiry" */).then(c => wrapFunctional(c.default || c))
export const GiftSection = () => import('../..\\components\\GiftSection.vue' /* webpackChunkName: "components/gift-section" */).then(c => wrapFunctional(c.default || c))
export const HeaderApp = () => import('../..\\components\\HeaderApp.vue' /* webpackChunkName: "components/header-app" */).then(c => wrapFunctional(c.default || c))
export const Hero = () => import('../..\\components\\Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const HeroSlide = () => import('../..\\components\\HeroSlide.vue' /* webpackChunkName: "components/hero-slide" */).then(c => wrapFunctional(c.default || c))
export const Highlight = () => import('../..\\components\\Highlight.vue' /* webpackChunkName: "components/highlight" */).then(c => wrapFunctional(c.default || c))
export const ImgComp = () => import('../..\\components\\ImgComp.vue' /* webpackChunkName: "components/img-comp" */).then(c => wrapFunctional(c.default || c))
export const Intro = () => import('../..\\components\\Intro.vue' /* webpackChunkName: "components/intro" */).then(c => wrapFunctional(c.default || c))
export const LeftFeature = () => import('../..\\components\\LeftFeature.vue' /* webpackChunkName: "components/left-feature" */).then(c => wrapFunctional(c.default || c))
export const NavMenu = () => import('../..\\components\\NavMenu.vue' /* webpackChunkName: "components/nav-menu" */).then(c => wrapFunctional(c.default || c))
export const OtherAcc = () => import('../..\\components\\OtherAcc.vue' /* webpackChunkName: "components/other-acc" */).then(c => wrapFunctional(c.default || c))
export const Sticky = () => import('../..\\components\\Sticky.vue' /* webpackChunkName: "components/sticky" */).then(c => wrapFunctional(c.default || c))
export const Well = () => import('../..\\components\\Well.vue' /* webpackChunkName: "components/well" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
