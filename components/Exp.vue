<template>
  <div>
    <div class="E-bg">
      <HeroSlide
        :img="exp.slides"
        :title="exp.heroTitle"
        :subTitle="exp.heroSubTitle"
        :text="exp.heroText"
      />

      <LeftFeature :feature="exp.feature" />
    </div>

    <section class="exp">
      <div class="container">
        <div class="exp__img__container">
          <img
            :src="require('@/assets/img/' + exp.highlight.img1 + '')"
            alt=""
          />
          <img
            :src="require('@/assets/img/' + exp.highlight.img2 + '')"
            alt=""
          />
          <img
            :src="require('@/assets/img/' + exp.highlight.img3 + '')"
            alt=""
          />
        </div>

        <div class="exp__content">
          <div class="kay">
            <h1 class="title">{{ exp.highlight.title1 }}</h1>
            <p class="text">
              {{ exp.highlight.text1 }}
            </p>
          </div>
          <div class="cinema">
            <h1 class="title">{{ exp.highlight.title2 }}</h1>
            <p class="text">
              {{ exp.highlight.text2 }}
            </p>
          </div>
          <div class="swim">
            <h1 class="title">{{ exp.highlight.title3 }}</h1>
            <p class="text">
              {{ exp.highlight.text3 }}
            </p>
          </div>
          <div class="tennis">
            <h1 class="title">{{ exp.highlight.title4 }}</h1>
            <p class="text">
              {{ exp.highlight.text4 }}
            </p>
          </div>

          <div class="tennis" v-if="exp.highlight.title5">
            <h1 class="title">{{ exp.highlight.title5 }}</h1>
            <p class="text">
              {{ exp.highlight.text5 }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <OtherAcc title="featured experience" :other="exp.other" />
  </div>
</template>

<script>
import LeftFeature from "./LeftFeature.vue";
import OtherAcc from "./OtherAcc.vue";
export default {
  components: { OtherAcc, LeftFeature },
  props: ["exp"],
};
</script>

<style lang="scss">
.exp {
  background: #f3eee7;
  .container {
    .exp__img__container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "top top"
        "lower1 lower2";
      gap: 1rem;
      img:nth-child(1) {
        grid-area: top;
      }
      img:nth-child(2) {
        grid-area: lower1;
      }
      img:nth-child(3) {
        grid-area: lower2;
      }
    }
    .exp__content {
      h1 {
        margin: 1rem 0 1.5rem;
      }
    }
  }
}

@include responsive($lg) {
  .exp {
    .container {
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-template-areas: "img content";
      .exp__content {
        width: 90%;
        margin: 0 auto;
        grid-area: content;
      }
      .exp__img__container {
        grid-area: img;
      }
    }
  }
}
</style>
