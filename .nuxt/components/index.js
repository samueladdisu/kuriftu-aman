export { default as Acc } from '../..\\components\\Acc.vue'
export { default as Banner } from '../..\\components\\Banner.vue'
export { default as BishFooter } from '../..\\components\\BishFooter.vue'
export { default as Bishoftuslide } from '../..\\components\\Bishoftuslide.vue'
export { default as Corporate } from '../..\\components\\Corporate.vue'
export { default as Desc1 } from '../..\\components\\Desc1.vue'
export { default as Destinav } from '../..\\components\\Destinav.vue'
export { default as Dindex } from '../..\\components\\Dindex.vue'
export { default as Dining } from '../..\\components\\Dining.vue'
export { default as Event } from '../..\\components\\Event.vue'
export { default as Exp } from '../..\\components\\Exp.vue'
export { default as Feature } from '../..\\components\\Feature.vue'
export { default as FooterApp } from '../..\\components\\FooterApp.vue'
export { default as Gallery } from '../..\\components\\Gallery.vue'
export { default as Gift } from '../..\\components\\Gift.vue'
export { default as GiftEnquiry } from '../..\\components\\GiftEnquiry.vue'
export { default as GiftSection } from '../..\\components\\GiftSection.vue'
export { default as HeaderApp } from '../..\\components\\HeaderApp.vue'
export { default as Hero } from '../..\\components\\Hero.vue'
export { default as HeroSlide } from '../..\\components\\HeroSlide.vue'
export { default as Highlight } from '../..\\components\\Highlight.vue'
export { default as ImgComp } from '../..\\components\\ImgComp.vue'
export { default as Intro } from '../..\\components\\Intro.vue'
export { default as LeftFeature } from '../..\\components\\LeftFeature.vue'
export { default as NavMenu } from '../..\\components\\NavMenu.vue'
export { default as OtherAcc } from '../..\\components\\OtherAcc.vue'
export { default as Sticky } from '../..\\components\\Sticky.vue'
export { default as Well } from '../..\\components\\Well.vue'

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
