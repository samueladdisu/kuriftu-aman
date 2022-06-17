<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/entoto" dir="Entoto" />
    <HeroSlide
      :img="slides"
      title="Adventures at Kuriftu Resort & spa entoto"
      subTitle="wave pole area"
      text="Get ready adrenaline junkies and nature enthusiats for the ultimate adventureland in the country! With no comparison, Kuriftu Entoto Adventure Park showcases a variety of activities that trump anything of its kind in the country - from paintball shooting ranges to aerial experiences through ziplining and rope course, guests are guaranteed an unforgetable time"
    />

    <div class="swiper adv__slide">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in other" :key="item.img">
          <img :src="require('@/assets/img/' + item.img + '')" alt="" />
          <h5 class="sub-title center">entoto Adventures</h5>
          <h1 class="title center">
            {{ item.title }}
          </h1>

          <p class="text">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>

    <OtherAcc title="Entoto Adventure Experiences" :other="other" />
    <BishFooter :footer="footer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
            "Entoto/adv/1.webp",
         "Entoto/adv/2.webp",
        "Entoto/adv/6.webp",
        
       "Entoto/adv/3.webp",
       "Entoto/adv/4.webp",
         "Entoto/adv/9.webp",
       "Entoto/adv/7.webp",
           "Entoto/adv/8.webp",
           
      ],
      other: [
        {
          img: "Entoto/adv/zip.webp",
          title: "Zipline",
          text: `Fear of heights? Dare to take a chance with us - Picture yourself soaring through the sky in the middle of the forest overlooking Entoto's natural landscape over an 500 meter zipline tour - You'll find yourself tempted for more excitement `,
        },
        {
          img:"Entoto/adv/rope.webp",
          title: "Aerial Rope Course",
          text: `Elevated 5-meters off the ground is our Aerial Rope Course - challenge yourself to complete this 400-meter obstacle in the sky over 26 sets with friends and family!`,
        },
        {
          img: "Entoto/adv/hors.webp",
          title: "Horse Riding",
          text: `Take time to not only ride, but connect with our wonderful horses at the stable, these beauties have been trained to care for our guests as much as we do! `,
        },
        {
          img: "Entoto/adv/tra.webp",
          title: "Trampoline World ",
          text: `Bounce away your troubles in our Trampoline World of fun! The perfectly wild experience every kid needs in their life to enjoy with friends and families `,
        },
        {
          img: "Entoto/adv/go.webp",
          title: "Race Track ",
          text: `Zoom through our customized Kuriftu Entoto Race Track with the choice of either Go Karts or Pedal Karts. This 350 meter track is designed to awaken your inner racer to comepete head-to-head against friend or foe in a battle to the finish line `,
        },
        {
          img: "Entoto/adv/arc.webp",
          title: "Archery",
          text: `Take a true test of hand-eye coordination by targeting one of our bullseyes strategically stationed at 60, 40, 30, and 15 meters apart. Guests are given 10 arrows so the focus is key to becoming a true marksman`,
        },
        {
          img: "Entoto/adv/paint.webp",
          title: "Paint Ball",
          text: `Shoot your shot at a game that requires strenous effort, teamwork and ruthlessness where participants shoot one another with paintball projectiles at a high rate of speed. Prepare to face the wrath of your opponents as the shot does pack a punch - nothing to fear as this pain is comprable to a rubberband snap against your skin.`,
        },
        {
          img: "Entoto/adv/roc.webp",
          title: "Wall Climbing",
          text: `Reach new heights on this upward battle of individual strength and endurance following our 10 meter high naturally built rock climbing wall `,
        },
        {
          img: "Entoto/adv/play.webp",
          title: "Jungle Playground",
          text: `A place just for kids and parents to spend quality time together in the Jungle Playground!`,
        },
      ],
      footer: {
        title: "Kuriftu Resort & Spa Entoto",
        second: {
          first: "14.9 km from Addis Ababa Bole International Airport",
          second: "Entoto Park",
          thrid: "Ethiopia",
        },
        thrid: {
          first: "Contact us on our direct phone line 9693",
          second: "Reception Desk +251905061020",
          thrid: "Email us at booking@kurifturesorts.com",
        },
        fourth: {
          url: "/",
        },
      },
    };
  },
  mounted() {
    var swiper2 = new Swiper(".adv__slide", {
      slidesPerView: 1,
      spaceBetween: 30,
      // centeredSlides: true,
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
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
@media screen and (max-width: 767px) {
  .adv__slide {
    .swiper-wrapper {
      .swiper-slide-active {
        max-width: 18.4375rem;
      }
    }
  }
}
.adv__slide {
  margin-top: 3rem;
  .swiper-wrapper {
    padding: 3.3125rem 0;
    .swiper-slide {
      background: #fff;
      padding-bottom: 3.3125rem;
      transform: scale(0.9);
      opacity: 0.5;
      transition: all linear 0.3s;
      h5 {
        margin: 1rem 0;
      }
      h1 {
        margin-bottom: 0.5rem;
      }
      p {
        text-align: center;
      }
    }
    .swiper-slide-active {
      transform: scale(1.15);
      margin: 0 2rem !important;
      opacity: 1;
    }
  }
}
@include responsive($md) {
  .adv__slide {
    margin-top: 3rem;
    .swiper-wrapper {
      padding: 3.3125rem 0;
      .swiper-slide {
        background: #fff;
        padding-bottom: 3.3125rem;
        transform: scale(0.9);
        opacity: 0.5;
        transition: all 0.3s;
        p {
          text-align: center;
        }
      }
      .swiper-slide-next {
        transform: scale(1.15);
        margin: 0 2rem !important;
        opacity: 1;
      }
      .swiper-slide-active {
        margin: 0 !important;
      }
    }
  }
}
</style>
