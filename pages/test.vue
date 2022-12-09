<template>
  <div>
    <div class="container">
      <div class="top"></div>
      <div class="swiper other__acc">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in other" :key="item.img">
            <img :src="require('@/assets/img/' + item.img + '')" alt="" />

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
</template>

<script>
export default {
  data() {
    return {
      other: [
        {
          img: "bishoftu/firstSlider/1.webp",
          title: "one-bedroom lake view",
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
        },
        {
          img: "bishoftu/firstSlider/1.webp",
          title: "one-bedroom lake view",
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
        },
        {
          img: "bishoftu/firstSlider/1.webp",
          title: "one-bedroom lake view",
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
        },
        {
          img: "bishoftu/firstSlider/1.webp",
          title: "one-bedroom lake view",
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
        },
      ],
    };
  },
  mounted() {
    var swiper2 = new Swiper(".other__acc", {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
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
.top {
  height: 20vh;
}
.swiper {
  .swiper-wrapper {
    .swiper-slide {
      transform: scale(0.9);
      opacity: 0.5;
      transition: all 0.3s;
    }
    .swiper-slide-active {
      transform: scale(1.15);
      margin: 0 5rem !important;
      opacity: 1;
    }
  }
}
</style>
