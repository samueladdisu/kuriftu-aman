<template>
  <section class="intro">
    <div class="container">
      <h5 class="sub-title" v-if="data.subTitle">{{ data.subTitle }}</h5>
      <h1 class="title">{{ data.title }}</h1>
      <p class="text" v-if="data.text">
        {{ data.text }}
      </p>
      <nuxt-link :to="data.url" v-if="data.link" class="link">
        {{ data.link }}</nuxt-link
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss">
.intro {
  padding-top: 3.125rem;
  .container {
    text-align: center;
    max-width: 36.1875rem;
    h5 {
      margin-bottom: 1rem;
    }
    h1 {
      margin-bottom: 0.8rem;
    }
    p {
      margin-bottom: 0.8rem;
    }
  }
}
</style>
