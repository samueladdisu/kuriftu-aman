<template>
  <div>
    <div class="event-wrapper2 swiper">
      <div class="swiper-wrapper">
        <div
          class="event-cards swiper-slide a"
          v-for="photo in photos"
          :key="photo"
        >
          <img :src="require('../assets/img/' + photo + '')" alt="" />
        </div>
      </div>

      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["photos"],

  mounted() {
    var swiper = new Swiper(".event-wrapper2", {
      slidesPerView: 4,
      // effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      // lazy: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.event-wrapper2,
.swiper {
  overflow-x: hidden;
  margin-top: -1rem;
  // transform: translateX(5%);
  padding-left: 5%;
  margin-bottom: 4rem;
  .swiper-wrapper {
    display: flex !important;
    align-items: center !important;
    .swiper-slide {
      max-width: 15rem;
      max-height: 30rem;
    }
  }
  .swiper-pagination {
    .swiper-pagination-bullet {
      margin: 0 !important;
      width: 2rem !important;
      height: 2px !important;
      border-radius: 0% !important;
      background: #00000085 !important;
    }
    .swiper-pagination-bullet-active {
      background: #4e4e4e !important;
    }
  }
}
@include responsive($xxl) {
  .event-wrapper2 {
    padding-left: 12%;
  }
}
</style>
