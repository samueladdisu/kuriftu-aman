<template>
  <section class="featured">
    <!-- <h1 class="title center">featured story</h1> -->
    <div class="container">
      <img :src="require('../assets/img/' + feature.img + '')" alt="" />
      <article class="featured-content">
        <div class="f__upper">
          <h5 class="sub-title">{{ feature.subtitle }}</h5>
          <h1 class="title">{{ feature.title }}</h1>
          <p class="text">
            {{ feature.text }}
          </p>
        </div>

        <div class="f__lower">
          <div class="line"></div>
          <a
            :href="feature.pdf"
            target="_blank"
            v-if="feature.pdf"
            class="link"
          >
            {{ feature.link }}
          </a>
          <nuxt-link :to="feature.uri" v-if="feature.uri" class="link">
            {{ feature.link }}
          </nuxt-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: ["feature"],
};
</script>

<style lang="scss">
.featured {
  padding-top: 3.875rem;
  padding-bottom: 3.875rem;
  .container {
    background: #fff;
    margin-top: 2rem;
    padding-bottom: 1.5rem;
    img {
      object-fit: cover;
      max-height: 36.4rem;
      width: 100%;
    }
    .featured-content {
      width: 90%;
      margin: 1.375rem auto 0;
      h5 {
        margin: 1rem 0 1.2rem;
      }
      h1 {
        margin-bottom: 0.6rem;
      }
      p {
        margin-bottom: 0.8rem;
        line-height: 1.5rem;
      }
      .line {
        width: 100%;
        height: 1px;
        background: #cacaca;
        margin: 2rem 0 1.5rem;
      }
    }
  }
}
@include responsive($md) {
  .featured {
    padding-top: 4.875rem;
  }
}

@include responsive($xl) {
  .featured {
    .container {
      padding-bottom: 0;
      display: grid;
      grid-template-columns: 3fr 1fr;
      column-gap: 1rem;
      .featured-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .f__lower {
          padding-bottom: 2rem;
        }
      }
    }
  }
}
</style>
