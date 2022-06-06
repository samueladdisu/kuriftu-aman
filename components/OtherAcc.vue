<template>
  <section class="other">
    <div class="container">
      <h1 class="other__title title center">
        {{ title }}
      </h1>

      <div class="swiper other__acc">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in other" :key="item.img">
            <img :src="require('@/assets/img/' + item.img + '')" alt="" />

            <div class="content">
              <h1 class="title center">
                {{ item.title }}
              </h1>

              <p class="text">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "other"],
  mounted() {
    var swiper3 = new Swiper(".other__acc", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      },
    });
  },
};
</script>

<style lang="scss">
@include responsive($md) {
  .other {
    .container {
      .other__acc {
        .swiper-wrapper {
          .swiper-slide-active,
          .swiper-slide-next {
            margin: 0 2rem !important;
            opacity: 1;
          }
        }
      }
    }
  }
}

.other {
  background: #f3eee7;
  padding: 2rem 0 3rem;
  .container {
    .other__title {
      margin: 2.4375rem 0 1.5rem;
    }
    .other__acc {
      .swiper-wrapper {
        padding: 3.3125rem 0;
        .swiper-slide {
          background: #fff;
          // padding-bottom: 3.3125rem;
          opacity: 0.5;
          transition: all 0.3s;

          .content {
            padding: 2rem;
            height: 17rem;
            h1 {
              margin-bottom: 1rem;
              text-align: center;
            }
            p {
              text-align: center;
            }
          }
        }
        .swiper-slide-active,
        .swiper-slide-next {
          // margin: 0 !important;
          opacity: 1;
        }
      }
    }
  }
}
</style>
