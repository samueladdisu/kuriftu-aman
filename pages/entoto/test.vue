<template>
  <div id="app">
    <div class="container">
      <div class="button-wrapper">
        <button class="btn" @click="searchUnsplash('Autumn')">Autumn</button>
      </div>
      <stack
              :column-min-width="300"
              :gutter-width="15"
              :gutter-height="15"
              monitor-images-loaded
      >
        <stack-item
                v-for="(image, i) in images"
                :key="i"
                style="transition: transform 300ms"
        >
          <img :src="image.urls.small" :alt="image.alt_description" />
        </stack-item>
      </stack>
    </div>
  </div>
</template>

<script>
export default {
searchUnsplash(topic) {
      this.images = [];
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${topic}&per_page=20`,
          {
            headers: {
              Authorization:
                "Client-ID <YourAccessKeyGoesHere>",
              "Accept-Version": "v1"
            }
          }
        )
        .then(response => {
          this.images = response.data.results;
        })
        .catch(() => {
          this.images = [];
        });
    }
}
</script>

<style>

</style>