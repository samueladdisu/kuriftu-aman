<template>
  <div>
    <HeroSlide
      :img="event.slides"
      :title="event.heroTitle"
      :subTitle="event.heroSubTitle"
      :text="event.heroText"
    />

    <div class="E-bg">
      <Feature :feature="event.feature" />
      <LeftFeature :feature="event.Lfeature" />
      <Feature :feature="event.Rfeature" />

      <section class="venues">
        <h1 class="title center venue__title">Venues</h1>
        <div class="container">
          <div
            class="single-venues"
            v-for="item in event.venues"
            :key="item.id"
          >
            <img :src="require('@/assets/img/' + item.img + '')" alt="" />
            <div class="venues__content">
              <h1 class="title">{{ item.title }}</h1>
              <p class="text">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <OtherAcc title="Personalization" :other="event.other" />

      <section class="enquiry">
        <div class="container">
          <hr />
          <div class="m__content">
            <div class="m__top">
              <h1 class="title">Make an enquiry</h1>
            </div>

            <div class="m__middle">
              <p class="text">
                No request is too great and no detail too small. We are here to
                assist you with all aspects of event organisation, from
                conception through to execution.
              </p>
            </div>

            <div class="m__lower">
              <nuxt-link to="#" class="e_btn">
                Contact us for a full proposal
              </nuxt-link>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>

<style lang="scss">
.venues {
  padding-bottom: 2rem;
  .venue__title {
    margin: 2rem 0;
  }
  .container {
    .single-venues {
      background: #fff;
      padding: 0.8rem 0.8rem 1.2rem;
      margin-bottom: 2rem;
      .venues__content {
        h1 {
          margin: 1rem 0;
        }
        p {
          padding-bottom: 2rem;
        }
      }
    }
  }
}
@include responsive($md) {
  .venues {
    .container {
      .single-venues {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1.5rem;
      }
    }
  }
}

@include responsive($xl) {
  .venues {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1.5rem;
    }
  }
}

.enquiry {
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
      .m__middle {
        p {
          margin-bottom: 1rem;
        }
      }
      .m__lower {
        .e_btn {
          @extend .btn-font;
          color: #313131;
          padding: 0.7rem 0;
          background: #fff;
          border: 1px #707070 solid;
          max-width: 24.5rem;
          text-align: center;
        }
      }
    }
  }
}

@include responsive($lg) {
  .enquiry {
    .container {
      .m__content {
        .m__top {
          p {
            max-width: 70%;
          }
        }
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }
}
</style>
