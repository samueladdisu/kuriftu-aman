<template>
  <div>
    <HeaderApp />
    <!-- Home page banner section  -->

    <div class="header-wrapper">
      <Hero class="header-hero" :video="722179226" />

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
          <img src="@/assets/img/home/Adventure.webp" alt="" />
          <h5 class="sub-title">Adventure</h5>
          <h1 class="title">Discover extraordinary destinations</h1>
          <p class="text">
            Absorb the unique beauty of Ethiopia's natural landscapes and
            prominent cultural heritage
          </p>

          <nuxt-link to="/" class="link">Explore</nuxt-link>
        </div>

        <div class="single-highlight b">
          <img src="@/assets/img/home/Catering.webp" alt="" />
          <h5 class="sub-title">catering</h5>
          <h1 class="title">The Commitment To Good Service</h1>
          <p class="text catering">
            From culinary experiences to accommodations insprired by tradition
            as well as international standards of luxury, indulge yourself in an
            adventure of architectural design and unique dishes highlighting
            innovation across Ethiopia
          </p>

          <nuxt-link to="/" class="link">Explore</nuxt-link>
        </div>

        <div class="single-highlight c">
          <img src="@/assets/img/home/Wellness.webp" alt="" />
          <h5 class="sub-title">wellness</h5>
          <h1 class="title">Restore your energy</h1>
          <p class="text">
            Escape to a refuge of tranquility - nestled in the core of any of
            the Kuriftu locations is a center for wellness and relaxation
          </p>

          <nuxt-link to="/" class="link">Explore</nuxt-link>
        </div>

        <div class="single-highlight d">
          <img src="@/assets/img/long.webp" alt="" />
          <h5 class="sub-title">gift voucher</h5>
          <h1 class="title">Future travels</h1>
          <p class="text">
            Surprise your loved ones with an extraordinary adventure! Offer
            memories that last a lifetime with the Kurfitu Gift Card that can be
            customized per destination
          </p>

          <nuxt-link to="/" class="link">Explore</nuxt-link>
        </div>
        <div class="single-highlight e">
          <img src="@/assets/img/home/Kuriftu Construction.webp" alt="" />
          <h5 class="sub-title">kuriftu construction</h5>
          <h1 class="title">Immaculate touches</h1>
          <p class="text">
            Inspired by natual elements, our construction team has designed and
            developed each of our properties since the birth of the Kuriftu
            brand. With hands on supervision from our CEO, Tadiwos Belete
            himself, each destination is the pure embodiment of his vision of
            innovation in Ethiopia's hospitality and tourism industry
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
            <img src="@/assets/img/home/Waterpark.webp" alt="" />
            <h5 class="sub-title">Waterpark</h5>
            <h1 class="title">Waterpark</h1>
            <p class="text">
              Whether you are looking to spend an afternoon of fun with family or friends, searching the perfect weekend getaway, planning a birthday or group event, or even surprising a loved one, Kuriftu Water Park is your ultimate choice for a premier entertainment destination with guaranteed fun!
            </p>
          </div>

          <div class="single-showcase">
            <img src="@/assets/img/home/Tana.webp" alt="" />
            <h5 class="sub-title">Lake Tana</h5>
            <h1 class="title">Lake Tana</h1>
            <p class="text">
             Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & Spa Lake Tana represents the Kuriftu brands second resort venture. As we seek to expand across Ethiopia, Lake Tana with its historic and cultural value was the perfect choice for expansion. Paired with scenic views, wildlife excursions and religious routes - this destination offers a new adventure for our Kuriftu family!
            </p>
          </div>
        </div>
      </section>
      <!-- End of show case section  -->
      <Feature class="feature-index" :feature="feature" />
    </main>

    <!-- End of Feature Section  -->

    <Sticky path="awash" />
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
        img: "FeaturedStory.webp",
        subtitle: "Featured Story",
        title: "Kuriftu Bishoftu's Story",
        text: `Located on the northen tip of Bishoftu encompassing the smallest of the four lakes lies our flagship resort, Kuriftu Resort & Spa Bishoftu. Born from Mr. Tadiwos's vision to create luxury resort destinations in neighboring cities of the capital, this resort made its mark in 2007 as the first 5-star resort in the country. With just 14 rooms and a lakefront restaurant at the time, Mr. Tadiwos made his offical debut by setting the standard for luxury and exquisite service, attracting guests from around the world to this unique establishment. `,
        uri: "/aboutus",
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
  .header-hero {
    padding-top: 3rem;
  }
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
      img {
        object-fit: cover;
        width: 100%;
      }
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
      .catering {
        max-width: 100%;
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

@include responsive($lg) {
  .highlight {
    margin-top: 4.8rem;
    .container {
      .single-highlight {
        margin-bottom: 4.5rem;
        img {
          height: 38rem;
        }
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
          font-size: 0.75rem;
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
