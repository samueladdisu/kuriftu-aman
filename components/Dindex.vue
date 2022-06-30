<template>
  <div class="d-main">
    <div class="d-bg">
      <Hero :src="index.heroImg" :video="index.video" />
      <Intro :data="index.bishTitle" />

      <Bishoftuslide :photos="index.photos" />
      <hr class="divider" />
      <section class="acc">
        <div class="container">
          <img :src="require('@/assets/img/' + index.accImg + '')" alt="" />

          <Intro :data="index.accTitle" />
        </div>
      </section>
    </div>
    <Highlight :highlight="index.highlight" />

    <section class="map">
      <div class="container">
        <h1 class="title center">Getting here</h1>
        <p class="text center">
          {{ index.mapInfo }}
        </p>

        <div class="map-container">
          <div class="location">
            <div class="map-responsive">
              <iframe
                :src="index.iframe"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Bishoftuslide from "./Bishoftuslide.vue";
import Destinav from "./Destinav.vue";
import Highlight from "./Highlight.vue";
import Intro from "./Intro.vue";
export default {
  props: ["index"],
  components: { Destinav, Bishoftuslide, Intro, Highlight },
};
</script>

<style lang="scss">
div {
  .d-bg {
    background: #f3eee7;
    padding-bottom: 3rem;
    .intro {
      .container {
        h5 {
          margin-bottom: 1rem;
          font-size: 0.6rem;
        }
        h1 {
          margin-bottom: 0.8rem;
          font-size: 1.4rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
    }
    .acc {
      .container {
        img {
          width: 100%;
          object-fit: cover;
          max-height: 40.875rem;
        }
        .acc-title {
          text-align: center;
          max-width: 36.1875rem;
          margin: 0 auto;
          h5 {
            margin-top: 2.625rem;
            margin-bottom: 1rem;
          }
          h1,
          p {
            margin-bottom: 0.8rem;
          }
        }
      }
    }
  }

  .divider {
    width: 50%;
    margin: 2rem auto 4rem;
  }
  .map {
    background: #f3eee7;
    padding: 2rem 0 3rem;
    overflow: hidden;
    height: 37.94rem;
    margin-bottom: 3rem;
    .map-container {
      margin-top: 3rem;
      .location {
        .map-responsive {
          overflow: hidden;
          padding-bottom: 56.25%;
          position: relative;

          iframe {
            left: 50%;
            transform: translate(-50%);
            top: 0;
            max-height: 27.94rem;
            max-width: 69.25rem;
            height: 100%;
            width: 100%;
            position: absolute;
          }
        }
      }
    }
  }

  // .map {
  //   margin-top: 4rem;
  //   background: #f3eee7;
  //   padding: 2rem 0 3rem;
  //   overflow: hidden;
  //   padding-bottom: 5.06rem;
  //   height: 31.94rem;
  //   .map-container {
  //     .location {
  //       .map-responsive {
  //         overflow: hidden;
  //         padding-bottom: 56.25%;
  //         position: relative;
  //         height: 17rem;

  //         max-height: 31.94rem;
  //         iframe {
  //           left: 0;
  //           top: 0;
  //           height: 100%;
  //           width: 100%;
  //           position: absolute;
  //         }
  //       }
  //     }
  //   }
  // }
}
</style>
