<template>
  <div>
    <HeaderApp />
    <Destinav base="/awash/" home="/awash" dir="Awash" />
    <section class="s__acc__hero">
      <div class="container">
        <div class="hero-title">
          <h1 class="title">
            {{ renderdData.title }}
          </h1>

          <a @click.prevent="$router.go(-1)" class="text">
            <img src="@/assets/img/icons/next2.svg" alt="" />
            back to Celebrations
          </a>
        </div>

        <HeroSlide
          :img="renderdData.slides"
          :subTitle="renderdData.title"
          text="Destination weds make for beautiful intimate weds. Kuriftu Resort & Spa Awash Falls is a one-of-a-kind destination! the spectacular view, The perfect ambiance of Awash Falls will highlight one of the biggest days of your life."
        />

        <Desc1 :desc="renderdData.desc" />
      </div>
    </section>

    <section class="desti-highlight">
      <div class="container">
        <div class="single-high">
          <img src="@/assets/img/awash/event/wed/Landscape.webp" alt="" />
          <h1 class="title">Landscape Photoshoot</h1>
          <p class="text">
            Pictures will stay forever! With our beautiful sceneries and
            lakeside view, our resort would be the best place to capture
            memories that will last forever.
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/awash/event/wed/Bridalshower.webp" alt="" />
          <h1 class="title">Bridal Shower</h1>
          <p class="text">
            Let us celebrate the bride before her special day together! Our
            resort provide a space, entertainment and dishes for that.
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/awash/event/wed/Bachelorette.webp" alt="" />
          <h1 class="title">Bachelor/ette</h1>
          <p class="text">
            Have a few days before you tie the knot? Spend a day or two at
            Kuriftu Resort & Spa with your friends to enjoy.
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/awash/event/wed/Mels.webp" alt="" />
          <h1 class="title">Mels</h1>
          <p class="text">
            The traditional venue, decorations, buffet, and entertainment our
            resort provides makes your Mels unforgattable.
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/awash/event/wed/Wedding1.webp" alt="" />
          <h1 class="title">wed</h1>
          <p class="text">
            Our resort provides the best place to celebrate one of the most
            significant days in your and your partner's life!
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/awash/event/wed/Honeymoon.webp" alt="" />
          <h1 class="title">Honey moon</h1>
          <p class="text">
            Plan the most incredible romantic getaway with your spouse at our
            resort. Kuriftu Resort & Spa makes you feel the love in the world.
          </p>
        </div>
      </div>
    </section>

    <div class="E-bg">
      <Bishoftuslide :photos="photos" />

      <section class="enquiry">
        <div class="container">
          <hr />
          <div class="m__content">
            <div class="m__top">
              <h1 class="title">Make an enquiry</h1>
            </div>

            <div class="m__middle">
              <p class="text">
                No request is too great and no detail too small. We are here to
                assist you with all aspects of event organisation, from
                conception through to execution.
              </p>
            </div>

            <div class="m__lower">
              <nuxt-link to="#" class="e_btn">
                Contact us for a full proposal
              </nuxt-link>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </div>

    <BishFooter :footer="footer" />
  </div>
</template>

<script>
import BishFooter from "../../../../components/BishFooter.vue";
export default {
  components: { BishFooter },
  data() {
    return {
      renderdData: "",
      photos: [
        "awash/firstSlider/1.webp",
        "awash/firstSlider/2.webp",
        "awash/firstSlider/3.webp",
        "awash/firstSlider/4.webp",
        "awash/firstSlider/5.webp",
        "awash/firstSlider/6.webp",
        "awash/firstSlider/7.webp",
        "awash/firstSlider/10.webp",
        "awash/firstSlider/9.webp",
      ],
      accData: [
        {
          id: "wed",
          title: "Kuriftu Resort & Spa Awash Falls",
          slides: ["awash/event/1.webp"],
        },
      ],
      footer: {
        title: "Kuriftu Resort & Spa Awash Falls",
        second: {
          first: "53.7 km from Addis Ababa Bole International Airport",
          second: "Lake Bishoftu",
          thrid: "Ethiopia",
        },
        thrid: {
          first: "Contact us on our direct phone line 9693",
          second: "Reception Desk +251924949494",
          thrid: "Email us at booking@kurifturesorts.com",
        },
        fourth: {
          url: "/",
        },
      },
    };
  },
  mounted() {
    this.accData.map((data) => {
      if (data.id == this.$route.params.sub) {
        this.renderdData = data;
      }
    });
  },
};
</script>

<style lang="scss">
.s__acc__hero {
  background: #f3eee7;
  padding: 3.56rem 0 2rem;
  .container {
    .am {
      margin: 2.5rem 0 1rem;
    }
    .hero-title {
      display: grid;
      justify-content: center;
      text-align: center;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2.5rem 0 2rem;
        cursor: pointer;
        img {
          transform: scaleX(-1);
        }
      }
    }
  }
}
</style>
