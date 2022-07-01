<template>
  <section class="exp__featured">
    <div class="container">
      <article class="featured-content">
        <div class="f__upper">
          <h1 class="title">{{ feature.title }}</h1>
          <p class="text">
            {{ feature.text }}
          </p>
        </div>

        <div class="f__lower">
          <div class="line"></div>
          <a :href="feature.pdf" download="" v-if="feature.pdf" class="link">
            {{ feature.link }}
          </a>
          <nuxt-link v-if="feature.uri" :to="feature.uri" class="link">
            {{ feature.link }}
          </nuxt-link>
        </div>
      </article>

      <img :src="require('@/assets/img/' + feature.img + '')" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["feature"],
};
</script>

<style lang="scss">
.exp__featured {
  padding-top: 3.875rem;
  padding-bottom: 3.875rem;
  .container {
    background: #fff;
    margin-top: 2rem;
    // padding-bottom: 1.5rem;
    img {
      margin-top: 2rem;
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
        padding: 1rem 0 0.6rem;
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
  .exp__featured {
    padding-top: 4.875rem;
  }
}

@include responsive($xl) {
  .exp__featured {
    .container {
      padding-bottom: 0;
      display: grid;
      grid-template-columns: 1fr 3fr;
      column-gap: 1rem;
      img {
        margin-top: 0;
      }
      .featured-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .f__lower {
          padding-bottom: 1.5rem;
          .line {
            width: 100%;
            height: 1px;
            background: #cacaca;
            margin: 0 0 1.5rem;
          }
        }
      }
    }
  }
}
</style>
