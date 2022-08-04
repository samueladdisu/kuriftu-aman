<template>
  <div>
    <HeaderApp />
    <Destinav base="/entoto/" home="/entoto" dir="Entoto" />
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
          text="In a place effortlessly filled with romance, Kuriftu Entoto provides an idyllic lush green backdrop for a wedding and all festivities related"
        />

        <Desc1 :desc="renderdData.desc" />
      </div>
    </section>

    <section class="desti-highlight">
      <div class="container">
        <div class="single-high">
          <img src="@/assets/img/Entoto/event/Landscape.webp" alt="" />
          <h1 class="title">Landscape Photoshoot</h1>
          <p class="text">
            A picture is truly worth a thousand words in this setting - don't
            miss a chnace to take your own breath away while looking back at
            photoshoots from your special day!
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/awash/event/wed/Bridalshower.webp" alt="" />
          <h1 class="title">bridal shower</h1>
          <p class="text">
            Shower the bride to be with an off the beaten path experience in the
            forest. Spoil her with an intimate celebration among loved ones in
            the presence of mother nature. Dazzle her with the simple, yet
            imporant thiings needed before her big day. Trust that our teams
            will execute perfection
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/awash/event/wed/Bachelorette.webp" alt="" />
          <h1 class="title">bachelor/ette Party</h1>
          <p class="text">
            Ladies, this is your time to shine by curating an unforgettably
            spontaneous event for your bride-to-be! Get creative with our team
            and customize your friends' bachelorette extravaganza!
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/awash/event/wed/Mels.webp" alt="" />
          <h1 class="title">Mels</h1>
          <p class="text">
            Traditional Ethiopian weddings includes an additional celebratory
            event called Mels, experience this intimate occassion with family
            and loved ones dressed in rich cultural garments with historical
            significance. As an Ethiopian brand, Kuriftu strives to create the
            perfect balance between luxury and tradition
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/Entoto/event/we.webp" alt="" />
          <h1 class="title">Wedding</h1>
          <p class="text">
            Embark on a new journey in life with a profound sense of
            significance in this historic environment, declare your love for
            your partner in this majestic space that differs from all others in
            Ethiopia. With expertise in catering and decor, our team can truly
            make your wedding a one of a kind experience
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/Entoto/event/Honeymoon.webp" alt="" />
          <h1 class="title">Honey moon</h1>
          <p class="text">
            Plan a distinclty memorable honeymoon in our Presidential Cabin -
            paired with imppecible service and exclusivity, our selection of
            facilities is unmatched when it comes to romantic getaways
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
              <nuxt-link to="/event#enquiry-form" class="e_btn">
                Contact us for a full proposal
              </nuxt-link>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </div>

    <BishFooter :footer="footer" />
    <Sticky path="entoto" />
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
        "Entoto/event/Honeymoon.webp",
        "Entoto/event/s1.webp",
        "Entoto/event/Landscape.webp",

        "Entoto/event/s3.webp",
        "Entoto/event/we.webp",
        "Entoto/event/s4.webp",
      ],
      accData: [
        {
          id: "wed",
          title: "Wedding at Kuriftu Entoto Adventure Park ",
          slides: [
            "Entoto/event/s1.webp",
            "Entoto/event/s2.webp",
            "Entoto/event/s3.webp",
            "Entoto/event/s4.webp",
          ],
        },
      ],
      footer: {
        title: "Kuriftu Resort & Spa Entoto",
        second: {
          first: "14.9 km from Addis Abeba Bole International Airport",
          second: "Entoto Park",
          thrid: "Ethiopia",
        },
        thrid: {
          first: "Contact us on our direct phone line 9693",
          second: "Reception Desk +251905061020",
          thrid: "Email us at booking@kurifturesorts.com",
        },
        fourth: {
          url: "https://www.google.com/maps/dir//Kuriftu+Restaurant+in+Entoto+Park+Gulele+8%2F16+Ethiopia/@9.0846279,38.7383589,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x164b8f84811f84a1:0x336681194adaaef!2m2!1d38.7383589!2d9.0846279",
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
        img {
          transform: scaleX(-1);
        }
      }
    }
  }
}
</style>
