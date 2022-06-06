<template>
  <div>
    <HeaderApp />
    <!-- Home page banner section  -->

    <div class="header-wrapper">
      <Hero src="awash/awash-cover.webp" />

      <section class="hero-content">
        <div class="container">
          <h5 class="hero-sub">kuriftu resort & spa awash falls</h5>
          <h1 class="hero-title">Kuriftu resort & spa awash falls</h1>

          <nuxt-link to="/" class="link">Explore</nuxt-link>
        </div>
      </section>
    </div>
    <!-- End of Home page banner section  -->

    <!-- Highlight Section  -->
    <section class="highlight">
      <div class="container">
        <div class="single-highlight a">
          <img src="@/assets/img/long.webp" alt="" />
          <h5 class="sub-title">resort</h5>
          <h1 class="title">Rejuvenating Experience</h1>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.
          </p>

          <nuxt-link to="/" class="link">Explore</nuxt-link>
        </div>

        <div class="single-highlight b">
          <img src="@/assets/img/wide.webp" alt="" />
          <h5 class="sub-title">catering</h5>
          <h1 class="title">The Commitment To Good Service</h1>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.
          </p>

          <nuxt-link to="/" class="link">Explore</nuxt-link>
        </div>

        <div class="single-highlight c">
          <img src="@/assets/img/long.webp" alt="" />
          <h5 class="sub-title">wellness</h5>
          <h1 class="title">Rejuvenating Experience</h1>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.
          </p>

          <nuxt-link to="/" class="link">Explore</nuxt-link>
        </div>

        <div class="single-highlight d">
          <img src="@/assets/img/long.webp" alt="" />
          <h5 class="sub-title">gift voucher</h5>
          <h1 class="title">The Gift of future Experience</h1>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.
          </p>

          <nuxt-link to="/" class="link">Explore</nuxt-link>
        </div>
        <div class="single-highlight e">
          <img src="@/assets/img/long.webp" alt="" />
          <h5 class="sub-title">kuriftu construction</h5>
          <h1 class="title">our crew + you dream</h1>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.
          </p>

          <nuxt-link to="/" class="link">Explore</nuxt-link>
        </div>
      </div>
    </section>
    <!-- End of Highlight Section  -->

    <!-- Featured Section  -->

    <main class="feature-wrapper">
      <!-- show case section  -->
      <section class="showcase">
        <div class="container">
          <div class="single-showcase">
            <img src="@/assets/img/half.webp" alt="" />
            <h5 class="sub-title">loft</h5>
            <h1 class="title">village loft</h1>
            <p class="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              ipsum neque rerum odit repellat dignissimos.
            </p>
          </div>

          <div class="single-showcase">
            <img src="@/assets/img/half.webp" alt="" />
            <h5 class="sub-title">spa</h5>
            <h1 class="title">entoto spa</h1>
            <p class="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              ipsum neque rerum odit repellat dignissimos.
            </p>
          </div>
        </div>
      </section>
      <!-- End of show case section  -->
      <Feature :feature="feature" />
    </main>

    <!-- End of Feature Section  -->
  </div>
</template>

<script>
import Feature from "../components/Feature.vue";
import HeaderApp from "../components/HeaderApp.vue";
export default {
  components: { HeaderApp, Feature },
  data() {
    return {
      feature: {
        img: "featured.webp",
        subtitle: "glamping",
        title: "resting in the wilderness",
        text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sint consequatur, doloremque ea exercitationem delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam`,
        uri: "/",
        link: "Explore",
      },
    };
  },
};
</script>

<style lang="scss">
.header-wrapper {
  background: #f3eee7;
  padding-bottom: 2rem;
  .hero-content {
    margin-top: 2rem;
    .container {
      .hero-sub {
        @extend .sub-title;
        margin-bottom: 0.5rem;
      }
      .hero-title {
        @extend .title;
        margin-bottom: 1rem;
      }
    }
  }
}

.highlight {
  margin-top: 4.8rem;
  .container {
    .single-highlight {
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
  .highlight {
    .container {
      display: grid;
      grid-template-columns: 1fr 2rem 1fr 2rem 1fr;
      grid-template-areas:
        "a . b b b"
        "c . d . e";
      .a {
        grid-area: a;
      }
      .b {
        grid-area: b;
      }
      .c {
        grid-area: c;
      }
      .d {
        grid-area: d;
      }
      .e {
        grid-area: e;
      }
    }
  }
}

.feature-wrapper {
  background: #f3eee7;
  padding-top: 4.8rem;
  .showcase {
    .container {
      .single-showcase {
        margin-top: 2rem;
        display: grid;
        place-items: center;
        h5 {
          margin-top: 1.5rem;
        }
        h1 {
          margin-top: 1.2rem;
        }
        p {
          margin-top: 1rem;
          text-align: center;
        }
      }
    }
  }
}

@include responsive($md) {
  .feature-wrapper {
    padding-top: 1.8rem;
    .showcase {
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1.5rem;
      }
    }
  }
}
</style>
