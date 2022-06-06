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
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    });
  },
};
</script>

<style lang="scss" scoped>
.event-wrapper2 {
  overflow-x: hidden;
  margin-top: -1rem;
  // transform: translateX(5%);
  padding-left: 5%;
  margin-bottom: 4rem;
  .swiper-wrapper {
    display: flex !important;
    align-items: center !important;
    .swiper-slide {
      // margin-left: 2rem;
      // margin-right: 2rem;

      max-width: 15rem;
      max-height: 30rem;
    }
  }
  .event-cards {
    margin-top: 2.88rem;
    margin-bottom: 5rem;

    .event-img {
      width: 100%;
    }
    h3 {
      color: $kuriftu-black;
      @extend .title;
      margin-top: 0.94rem;
      font-size: 1.2rem;
      text-align: center;
    }

    p {
      @extend .text;
      margin-top: 0.94rem;
      color: $kuriftu-grey;
      text-align: center;
    }
  }
}
@include responsive($xxl) {
  .event-wrapper2 {
    padding-left: 12%;
  }
}
</style>
