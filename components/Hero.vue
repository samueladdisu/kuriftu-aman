<template>
  <section class="display-video">
    <div class="container">
      <div class="video-wrapper">
        <img :src="require('@/assets/img/' + src + '')" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["src"],
};
</script>

<style lang="scss">
.display-video {
  padding-top: 4rem;
  .container {
    .video-wrapper {
      display: grid;
      place-items: center;
    }
  }
}
@include responsive($md) {
  .display-video {
    padding-top: 5rem;
  }
}
</style>
