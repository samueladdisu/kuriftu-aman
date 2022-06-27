<template>
  <div>
    <HeaderApp />
    <HeroSlide
      :img="slides"
      subTitle="Celebration at Kuriftu Resort & spa"
      title="Celebration at Kuriftu Resort & spa"
    />

    <div class="swiper evn__slide">
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
      <div class="swiper-pagination"></div>
    </div>

    <!-- <Highlight :highlight="highlight" /> -->
    <section class="event-high">
      <div class="container">
        <div class="single-room" v-for="room in highlight" :key="room.id">
          <img :src="require('@/assets/img/' + room.img + '')" alt="" />
          <h5 class="sub-title">
            {{ room.subTitle }}
          </h5>
          <h1 class="title">
            {{ room.title }}
          </h1>
          <p class="text">
            {{ room.text }}
          </p>
          <nuxt-link :to="room.uri" class="link">Explore</nuxt-link>
        </div>
      </div>
    </section>
    <div class="E-bg">
      <section class="gift__hero">
        <div class="container">
          <h1 class="title center">Request a proposal</h1>
          <p class="text center">
            No request is too great and no detail too small. We are here to
            assist you with all aspects of event organisation, from conception
            through to execution.
          </p>
        </div>
      </section>
      <section class="e-form">
        <div class="container">
          <form action="" class="event-form">
            <div class="form-group">
              <label for="title"> Title </label>
              <select name="" class="form-control" id="title">
                <option value="" disabled>-Select-</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Dr">Dr</option>
              </select>
            </div>

            <div class="form-group">
              <label for="fname"> First name * </label>
              <input type="text" class="form-control" id="fname" />
            </div>

            <div class="form-group">
              <label for="lname"> Last name * </label>
              <input type="text" class="form-control" id="lname" />
            </div>

            <div class="form-group">
              <label for="email"> Email * </label>
              <input type="email" class="form-control" id="email" />
            </div>

            <div class="form-group">
              <label for="phone"> Phone number * </label>
              <input type="text" class="form-control" id="phone" />
            </div>
            <div class="form-group">
              <label for="desti"> Select your destination * </label>
              <select name="" class="form-control" id="desti">
                <option value="" disabled>-Select-</option>
                <option value="Awash">Awash</option>
                <option value="Bishoftu">Bishoftu</option>
                <option value="Entoto">Entoto</option>
                <option value="LakeTana">Lake Tana</option>
              </select>
            </div>

            <div class="form-group">
              <label for="bro"> Request a brochure </label>
              <select name="" class="form-control" id="bro">
                <option value="" disabled>-Select-</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div class="form-group">
              <label for="occasion"> Occasion * </label>
              <select name="" class="form-control" id="occasion">
                <option value="" disabled>-Select-</option>
                <option value="wed">Wedding</option>
                <option value="cele">Celebration</option>
                <option value="corp">Corporate event</option>
                <option value="other">Other...</option>
              </select>
            </div>

            <div class="form-group">
              <label for="guest"> Number of guests * </label>
              <input type="text" class="form-control" id="guest" />
            </div>

            <div class="form-group">
              <label for="msg"> Message </label>
              <textarea
                name=""
                class="form-control"
                id="msg"
                cols="30"
                rows="10"
              >
              </textarea>
            </div>

            <div class="form-group">
              <input type="checkbox" id="register" />
              <label for="register" class="register">
                Register to receive updates about exclusive experiences, events,
                new destinations and more
              </label>
            </div>

            <div class="form-group">
              <button class="event-btn">Send</button>
            </div>
          </form>
        </div>
      </section>
    </div>
    <Sticky path="awash" />
  </div>
</template>

<script>
import Highlight from "../components/Highlight.vue";
export default {
  components: { Highlight },
  data() {
    return {
      slides: [
        "bishoftu/event/birthdays.webp",
        "Entoto/event/s4.webp",
        "laketana/event/LakeSide.webp",
        "awash/event/1.webp",
      ],
      other: [
        {
          img: "Entoto/adv/zip.webp",
          title: "Zipline",
          text: `Fear of heights? Dare to take a chance with us - Picture yourself soaring through the sky in the middle of the forest overlooking Entoto's natural landscape over an 500 meter zipline tour - You'll find yourself tempted for more excitement `,
        },
        {
          img: "Entoto/adv/rope.webp",
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
          text: `Shoot your shot at a game that requires strenous effort, teamwork and ruthlessness where participants shoot one another with paintball projectiles at a high rate of speed.`,
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
      highlight: [
        {
          id: 1,
          img: "laketana/event/soci.webp",
          subTitle: "Bahir Dar, Ethiopia",
          title: "Kuriftu Resort & Spa Lake Tana",
          text: `Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & Spa Lake Tana represents the Kuriftu brands second resort venture. As we seek to expand across Ethiopia, Lake Tana with its historic and cultural value was the perfect choice for expansion. Paired with scenic views, wildlife excursions and religious routes - this destination offers a new adventure for our Kuriftu family!`,
          uri: "/laketana/event",
          url: "Explore",
        },
        {
          id: 2,
          img: "awash/event/SocialEvents.webp",
          subTitle: "Awash, Ethiopia",
          title: "Kuriftu Resort & Spa Awash",
          text: `Located on the Southern tip of Awash National Park, our one-of-a-kind boutique resort suspended over a waterfall places guests at an elevation that is unique to our property. With views of crocodiles on the river bank, the refreshing mist from the edge of the falls paired with unmatched scenery, we offer the ultimate experience to our visitors`,
          uri: "/awash/event",
          url: "Explore",
        },
        {
          id: 3,
          img: "bishoftu/event/1.webp",
          subTitle: "Bishoftu, Ethiopia",
          title: "Kuriftu Resort & Spa Bishfotu",
          text: `Located on the northen tip of Bishoftu encompassing the smallest of the four lakes lies our flagship resort, Kuriftu Resort & Spa Bishoftu. Born from Mr. Tadiwos's vision to create luxury resort destinations in neighboring cities of the capital, this resort made its mark in 2007 as the first 5-star resort in the country. Kuriftu has redefined the meaning of service in Ethiopia, with an outstanding track record and dedicated loyalty program that keeps our guests more than satisfied, Kuriftu Bishoftu is a home away from home`,
          uri: "/bishoftu/event",
          url: "Explore",
        },
        {
          id: 4,
          img: "Entoto/event/s2.webp",
          subTitle: "Addis Ababa, Ethiopia",
          title: "Kuriftu Resort & Spa Entoto",
          text: `Kuriftu Entoto Adventure Park offers an off the beaten path experience in the heart of the Entoto Mountain. With an abundance of eucalyptus trees, this dense forest is considered to be the lungs of Addis Ababa with significant cultural and historical relevance. Telling the story of the founding of Addis Ababa from the time of Emperor Menelik II. The Adventure Park captures the beauty of this sacred location by highlighting nature based adventure tourism activites that allow families and tourists alike to emmerse themselves within this ecosystem. From activities ranging from rock-climbing to horse back riding and seculded glamping accommodations, this destination is truly one of a kind!`,
          uri: "/entoto/event",
          url: "Explore",
        },
      ],
    };
  },
  mounted() {
    var swiper3 = new Swiper(".evn__slide", {
      slidesPerView: 1,
      spaceBetween: 30,
      // centeredSlides: true,
      loop: true,

      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
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
.event-high {
  margin-top: 3rem;
  .container {
    .single-room {
      h5 {
        margin-top: 1rem;
      }
      h1 {
        margin: 0.7rem 0 1rem;
      }
      a {
        margin: 1.5rem 0;
      }
    }
  }
}
@include responsive($md) {
  .event-high {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      .single-room {
        img {
          height: 16.3rem;
          object-fit: cover;
        }
      }
    }
  }
}

@include responsive($lg) {
  .event-high {
    .container {
      .single-room {
        img {
          height: 22.3rem;
          object-fit: cover;
        }
      }
    }
  }
}

@include responsive($xl) {
  .event-high {
    .container {
      .single-room {
        img {
          height: 29.3rem;
          object-fit: cover;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .evn__slide {
    .swiper-wrapper {
      .swiper-slide-active {
        max-width: 18.4375rem;
      }
    }
  }
}
.evn__slide {
  margin-top: 3rem;
  .swiper-wrapper {
    // padding: 2.7rem 0;
    .swiper-slide {
      background: #fff;
      padding-bottom: 3.3125rem;
      transform: scale(0.9);
      opacity: 0.5;
      transition: all linear 0.3s;
      img {
        max-height: 40vh;
        width: 38.375rem;
        object-fit: cover;
      }
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
@include responsive($md) {
  .evn__slide {
    margin-top: 3rem;
    .swiper-wrapper {
      .swiper-slide {
        background: #fff;

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
    .swiper-pagination {
      .swiper-pagination-bullet {
        width: 3rem !important;
      }
    }
  }
}

@include responsive($xxl) {
  .evn__slide {
    .swiper-wrapper {
      padding-bottom: 3.3125rem;
    }
  }
}
.e-form {
  padding-bottom: 3rem;
  .container {
    background: #fff;
    padding: 4% 8.5%;
    .event-form {
      .form-group {
        margin-bottom: 1.5rem;
        label {
          @extend .text;
          display: block;
        }
        input[type="checkbox"] {
          appearance: checkbox !important;
          margin-right: 5px;
        }
        .register {
          display: inline;
        }
        .form-control {
          width: 100%;
          border: none;
          border: 0.5px solid #000;
          background: none;
          outline: none;
          padding: 0.7rem 0.5rem;
        }
        .event-btn {
          @extend .btn-primary;
        }
      }
    }
  }
}
</style>
