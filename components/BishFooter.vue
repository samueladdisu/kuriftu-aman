<template>
  <section class="acc-footer">
    <div class="container">
      <div class="first">
        <h1 class="title">
          {{ footer.title }}
        </h1>
      </div>
      <div class="second">
        <p class="text">{{ footer.second.first }}</p>
        <p class="text">{{ footer.second.second }}</p>
        <p class="text">{{ footer.second.thrid }}</p>
      </div>
      <div class="third">
        <p class="text">{{ footer.thrid.first }}</p>
        <p class="text">{{ footer.thrid.second }}</p>
        <p class="text">{{ footer.thrid.thrid }}</p>
      </div>
      <div class="forth">
        <nuxt-link :to="footer.fourth.url" class="link">
          Get Directions
        </nuxt-link>
      </div>
    </div>
    <hr class="container" />
  </section>
</template>

<script>
export default {
  props: ["footer"],
};
</script>

<style lang="scss">
.acc-footer {
  .container {
    div {
      margin: 2rem 0;
    }
  }
}

@include responsive($md) {
  .acc-footer {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-areas:
        "first first first first"
        "second third third forth";
      .first {
        grid-area: first;
      }
      .second {
        grid-area: second;
      }
      .third {
        grid-area: third;
      }
      .forth {
        grid-area: forth;
      }
    }
  }
}

@include responsive($lg) {
  .acc-footer {
    .container {
      column-gap: 2rem;
      grid-template-areas: "first second third forth";
      margin: 3rem auto;
    }
  }
}
</style>
