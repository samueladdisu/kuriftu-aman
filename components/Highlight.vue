<template>
  <section class="desti-highlight">
    <div class="container">
      <div class="single-high" v-for="items in highlight" :key="items.id">
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
</template>

<script>
export default {
  props: ["highlight"],
};
</script>

<style lang="scss">
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
</style>
