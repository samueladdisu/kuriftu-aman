<template>
  <section class="hero">
    <div class="container">
      <h1 class="title hero__title center" v-if="title">
        {{ title }}
      </h1>
      <div class="swiper slides">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="pic in img" :key="pic">
            <img :src="require('@/assets/img/' + pic + '')" alt="" />
          </div>
        </div>

        <div class="lower-slide">
          <h5 class="sub-title" v-if="subTitle">{{ subTitle }}</h5>
          <div class="swiper-pagination"></div>
          <div class="slide-nav">
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </div>

      <p class="text hero__text center" v-if="text">
        {{ text }}
      </p>
      <div class="center">
        <nuxt-link :to="link" class="link" v-if="link">
          {{ url }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["img", "subTitle", "title", "text", "link", "url"],
  mounted() {
    var swiper = new Swiper(".slides", {
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>

<style lang="scss">
.hero {
  background: #f3eee7;
  .container {
    .hero__title {
      padding: 4rem 0;
    }
    .slides {
      .swiper-wrapper {
        height: 80vh;
        .swiper-slide {
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }
      }
      .lower-slide {
        margin: 1.8rem 0 4.8rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 3rem 3rem;
        grid-template-areas: "sub sub sub pag nav";
        .swiper-pagination {
          position: static !important;
          grid-area: pag;
          justify-self: flex-end;
        }
        .slide-nav {
          grid-area: nav;
          .swiper-button-next,
          .swiper-button-prev {
            top: 88.5% !important;
            &::after {
              font-size: 0.8rem !important;
              color: #000 !important;
            }
          }
          .swiper-button-prev {
            left: 86% !important;
          }
          .swiper-button-next {
            right: 0px !important;
          }
        }
        h5 {
          grid-area: sub;
        }
      }
    }
    .hero__text {
      padding-bottom: 2rem;
      text-align: center;
      max-width: 55.18rem;
      margin: 0 auto;
    }
  }
}

@include responsive($md) {
  .hero {
    .container {
      .slides {
        .lower-slide {
          grid-template-columns: 1fr 1fr 1fr 3rem 6rem;
          .slide-nav {
            .swiper-button-next,
            .swiper-button-prev {
              top: 90.5% !important;
            }
            .swiper-button-prev {
              left: 93% !important;
            }
            .swiper-button-next {
              right: 0px !important;
            }
          }
        }
      }
    }
  }
}

@include responsive($lg) {
  .hero {
    .container {
      .slides {
        .lower-slide {
          grid-template-columns: 1fr 1fr 1fr 3rem 6rem;
          .slide-nav {
            .swiper-button-next,
            .swiper-button-prev {
              top: 93% !important;
            }
            .swiper-button-prev {
              left: 93% !important;
            }
            .swiper-button-next {
              right: 0px !important;
            }
          }
        }
      }
    }
  }
}

@include responsive($xl) {
  .hero {
    .container {
      .slides {
        .lower-slide {
          grid-template-columns: 1fr 1fr 1fr 3rem 6rem;
          .slide-nav {
            .swiper-button-next,
            .swiper-button-prev {
              top: 91% !important;
            }
            .swiper-button-prev {
              left: 95% !important;
            }
            .swiper-button-next {
              right: 0px !important;
            }
          }
        }
      }
    }
  }
}

@include responsive($xxl) {
  .hero {
    .container {
      .slides {
        .lower-slide {
          grid-template-columns: 1fr 1fr 1fr 3rem 6rem;
          .slide-nav {
            .swiper-button-next,
            .swiper-button-prev {
              top: 91% !important;
            }
            .swiper-button-prev {
              left: 96% !important;
            }
            .swiper-button-next {
              right: 0px !important;
            }
          }
        }
      }
    }
  }
}
</style>
