<template>
  <div>
    <HeroSlide
      :img="dining.slides"
      :title="dining.heroTitle"
      :subTitle="dining.heroSubTitle"
      :text="dining.heroText"
    />
    <div class="E-bg">
      <Feature :feature="dining.feature" v-if="dining.feature" />
      <LeftFeature :feature="dining.Lfeature" v-if="dining.Lfeature" />
      <Feature :feature="dining.feature1" v-if="dining.feature1" />
      <LeftFeature :feature="dining.Lfeature1" v-if="dining.Lfeature1" />
      <Feature :feature="dining.feature2" v-if="dining.feature2" />
      <OtherAcc
        title="Dining Experiences"
        v-if="dining.other"
        :other="dining.other"
      />

      <section class="make__res">
        <div class="container">
          <hr />
          <div class="m__content">
            <div class="m__top">
              <h1 class="title">Make a reservation</h1>
              <p class="text">
                Restaurant are open to kuriftu resort & spa guests and
                non-residents (subject to availability)
              </p>
            </div>

            <div class="m__lower">
              <p class="text">Tel: {{ dining.reserve.tel }}</p>
              <p class="text">For reservation: {{ dining.reserve.tel }}</p>
              <p class="text">Email: {{ dining.reserve.email }}</p>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Feature from "./Feature.vue";
export default {
  props: ["dining"],
  components: { Feature },
};
</script>

<style lang="scss">
.make__res {
  padding-bottom: 3rem;
  .container {
    .m__content,
    hr {
      max-width: 62.5625rem;
      margin: 0 auto;
    }
    .m__content {
      margin: 3rem auto;
      .m__top {
        margin-bottom: 1rem;
        h1 {
          margin-bottom: 1rem;
        }
      }
      .m__lower {
        p {
          margin-bottom: 1rem;
        }
      }
    }
  }
}

@include responsive($md) {
  .make__res {
    .container {
      .m__content {
        .m__top {
          p {
            max-width: 70%;
          }
        }
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
