<template>
  <section class="experience">
    <div class="container">
      <div class="exper-wrapper">
        <div class="ex-title">
          <div class="overview">
            <h2 class="title">{{ section.title }}</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="event-wrapper2 swiper">
      <div class="swiper-wrapper">
        <div
          class="event-cards swiper-slide a"
          v-for="photo in section.photos"
          :key="photo.id"
        >
          <nuxt-link :to="photo.url" class="photo-link">
            <img :src="require('@/assets/img/' + photo.src + '')" alt="" />
            <h1 class="photo-title">
              {{ photo.title }}
            </h1>
            <p class="text">
              {{ photo.text }}
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    section: {
      type: Object,
    },
  },
  mounted() {
    var swiper = new Swiper(".event-wrapper2", {
      // effect: "coverflow",
      grabCursor: true,
      // centeredSlides: true,
      slidesPerView: "auto",
      // loop: true,
      lazy: true,
      spaceBetween: 30,
      coverflowEffect: {
        rotate: 0,

        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
  created() {
    console.log(this.section);
  },
};
</script>

<style lang="scss">
.experience {
  // margin-top: 5rem;
  .container {
    .exper-wrapper {
      .ex-title {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .overview {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }
        h2 {
          text-align: center;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          @include responsive($md) {
            font-size: 2rem;
          }
        }
      }
      @include responsive($md) {
        .ex-title {
          flex-direction: row;
          justify-content: space-between;
          align-content: center;
          // align-items: center;
          .overview {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 50%;
            p {
              color: #808080;
              font-size: 1rem;
              line-height: 1.3rem;
            }
          }
          h2 {
            text-align: center;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            @include responsive($md) {
              font-size: 2rem;
            }
          }
        }
      }
      @include responsive($lg) {
        .ex-title {
          .overview {
            width: 70%;
          }
        }
      }
      .exper-card {
        margin-top: 1.88rem;
        @include responsive($md) {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @include responsive($lg) {
          grid-template-columns: 1fr 1fr 1fr;
        }
        .exper-single-card {
          margin-top: 2rem;
          .exper-img {
            position: relative;
            img {
              height: 15rem !important;
              min-width: 15rem;
              object-fit: cover;
              object-position: center center;
              @include responsive($xl) {
                height: 25rem !important;
                width: 30rem;
              }
            }
          }
          .exper-title {
            background: $kuriftu-green;
            padding: 0.8rem;
            width: 14rem;
            min-width: 11.31rem;
            position: absolute;

            margin-top: -3.24rem;
            @include responsive($lg) {
              margin-top: -3.23rem;
            }
            h3 {
              color: $kuriftu-white;

              text-align: center;
            }
          }
          .exper-desc {
            width: 85%;
            background: #fff;
            padding: 1rem;
            @include responsive($md) {
              width: 90%;
            }
            p {
              @extend .text;

              color: $kuriftu-grey;
              font-size: 0.8rem;
              line-height: 1.3rem;
              text-align: left;
            }
          }
        }
      }
    }
  }
}

.event-wrapper2 {
  margin-top: -1rem;
  // transform: translateX(5%);
  padding-left: 5%;
  .swiper-wrapper {
    .swiper-slide {
      // margin-left: 2rem;
      // margin-right: 2rem;
      width: 18rem;
      max-width: 30rem;
      max-height: auto;
    }
    .event-cards {
      margin-top: 2.88rem;
      margin-bottom: 5rem;
      .photo-link {
        .photo-title {
          margin-top: 0.5rem;
          font-family: "Neue Helvetica Medium";
          text-transform: uppercase;
          font-weight: 400;
          letter-spacing: 0.07rem;
          font-size: 1rem;
          line-height: 1.5rem;
        }
      }
      // .event-img {
      //   width: 100%;
      // }
    }
  }
}

@include responsive($lg) {
  .event-wrapper2 {
    .swiper-wrapper {
      .swiper-slide {
        width: 30rem;
      }
    }
  }
}
@include responsive($xxl) {
  .event-wrapper2 {
    padding-left: 12%;
  }
}
</style>
