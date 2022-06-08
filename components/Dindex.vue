<template>
  <div class="d-main">
    <div class="d-bg">
      <Hero :src="index.heroImg" />
      <Intro :data="index.bishTitle" />

      <Bishoftuslide :photos="index.photos" />
      <hr class="divider" />
      <section class="acc">
        <div class="container">
          <img :src="require('@/assets/img/' + index.accImg + '')" alt="" />

          <Intro :data="index.accTitle" />
        </div>
      </section>
    </div>
    <section class="desti-highlight">
      <div class="container">
        <div
          class="single-high"
          v-for="items in index.highlight"
          :key="items.id"
        >
          <img :src="require('@/assets/img/' + items.img + '')" alt="" />
          <h5 class="sub-title">
            {{ items.subTitle }}
          </h5>
          <h1 class="title">
            {{ items.title }}
          </h1>
          <p class="text">
            {{ items.text }}
          </p>

          <nuxt-link :to="items.uri" class="link">Explore</nuxt-link>
        </div>
      </div>
    </section>

    <section class="map">
      <div class="container">
        <h1 class="title">Getting here</h1>
        <p class="text">
          {{ index.mapInfo }}
        </p>

        <div class="google-map">
          <h1 class="title">map</h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Bishoftuslide from "./Bishoftuslide.vue";
import Destinav from "./Destinav.vue";
import Intro from "./Intro.vue";
export default {
  props: ["index"],
  components: { Destinav, Bishoftuslide, Intro },
};
</script>

<style lang="scss">
div {
  .d-bg {
    background: #f3eee7;
    padding-bottom: 3rem;
    .intro {
      .container {
        h5 {
          margin-bottom: 1rem;
          font-size: 0.6rem;
        }
        h1 {
          margin-bottom: 0.8rem;
          font-size: 1.4rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
    }
    .acc {
      .container {
        img {
          width: 100%;
          object-fit: cover;
          max-height: 40.875rem;
        }
        .acc-title {
          text-align: center;
          max-width: 36.1875rem;
          margin: 0 auto;
          h5 {
            margin-top: 2.625rem;
            margin-bottom: 1rem;
          }
          h1,
          p {
            margin-bottom: 0.8rem;
          }
        }
      }
    }
  }
  .desti-highlight {
    margin-top: 4.8rem;
    .container {
      .single-high {
        margin-bottom: 4.5rem;
        h5 {
          margin-top: 1.6rem;
        }
        h1 {
          margin: 1rem 0;
        }
        p {
          margin-bottom: 1.5rem;
          max-width: 34.3125rem;
        }
      }
    }
  }

  @include responsive($md) {
    .desti-highlight {
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 1.5rem;
      }
    }
  }

  .divider {
    width: 50%;
    margin: 2rem auto 4rem;
  }
  .map {
    background: #f3eee7;
    padding: 2rem 0 3rem;
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      h1 {
        margin-bottom: 1.3rem;
      }
      p {
        margin-bottom: 4rem;
        max-width: 42.75rem;
      }
      .google-map {
        width: 100%;
        background: lightblue;
        max-width: 69.25rem;
        height: 32rem;
        display: grid;
        place-items: center;
      }
    }
  }
}
</style>
