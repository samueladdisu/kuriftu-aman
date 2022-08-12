<template>
  <section class="intro">
    <div class="container">
      <h5 class="sub-title" v-if="data.subTitle">{{ data.subTitle }}</h5>
      <h1 class="title">{{ data.title }}</h1>
      <span class="text" v-if="!readMore && data.text">
        {{ data.text.slice(0, 350) + "..." }}
      </span>
      <button class="read-more" v-if="!readMore" @click="activateReadMore">
        read more
      </button>

      <span class="text" v-if="readMore && data.text" v-html="data.text"></span>
      <nuxt-link :to="data.url" v-if="data.link" class="link">
        {{ data.link }}</nuxt-link
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      readMore: false,
    };
  },
  methods: {
    activateReadMore() {
      console.log("clicked");
      console.log(this.readMore);
      this.readMore = true;
      console.log(this.readMore);
    },
  },
};
</script>

<style lang="scss">
.intro {
  padding-top: 3.125rem;
  margin-bottom: 2rem;
  .container {
    text-align: center;
    max-width: 71.1875rem;
    .read-more {
      @extend .text;
      background: none;
      border: none;
      color: $kuriftu-blue;
      text-decoration: underline;
      cursor: pointer;
    }
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
