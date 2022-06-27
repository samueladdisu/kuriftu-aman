<template>
  <section class="display-video">
    <div class="container">
      <!-- <div class="video-wrapper">


      </div> -->
      <img v-if="src" :src="require('@/assets/img/' + src + '')" alt="" />
      <div v-if="video" class="video-wrapper">
        <div class="vimeo-container">
          <iframe
            :src="
              'https://player.vimeo.com/video/' +
              video +
              '?api=1&autoplay=1&controls=0&sidedock=0&loop=1&title=0&byline=0&portrait=0&muted=1&background=1'
            "
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["src", "video"],
};
</script>

<style lang="scss">
.display-video {
  padding-top: 4rem;
  .container {
    .video-wrapper {
      .vimeo-container {
        padding: 56.25% 0 0 0;
        position: relative;
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
@include responsive($md) {
  .display-video {
    padding-top: 5rem;
  }
}
</style>
