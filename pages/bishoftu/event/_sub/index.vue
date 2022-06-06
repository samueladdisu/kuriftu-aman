<template>
  <div>
    <HeaderApp />
    <Destinav base="/bishoftu/" home="/bishoftu" dir="Bishoftu" />
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
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus."
        />

        <Desc1 :desc="renderdData.desc" />
      </div>
    </section>

    <section class="desti-highlight">
      <div class="container">
        <div class="single-high">
          <img src="@/assets/img/long.webp" alt="" />
          <h1 class="title">Landscape Photoshoot</h1>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/long.webp" alt="" />
          <h1 class="title">bridal shower</h1>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/long.webp" alt="" />
          <h1 class="title">bachelor/ette</h1>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/long.webp" alt="" />
          <h1 class="title">Reception</h1>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/long.webp" alt="" />
          <h1 class="title">Wedding</h1>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/long.webp" alt="" />
          <h1 class="title">Honey moon</h1>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.
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
        "bishoftu/firstSlider/1.webp",
        "bishoftu/firstSlider/2.webp",
        "bishoftu/firstSlider/3.webp",
        "long.webp",
      ],
      accData: [
        {
          id: "wed",
          title: "one-bedroom private garden & balcony",
          slides: [
            "bishoftu/acc/pre1.webp",
            "bishoftu/acc/pre2.webp",
            "bishoftu/acc/pre3.webp",
            "bishoftu/acc/pre4.webp",
            "bishoftu/acc/pre5.webp",
            "bishoftu/acc/pre6.webp",
            "bishoftu/acc/pre7.webp",
            "bishoftu/acc/pre8.webp",
          ],
        },
      ],
      footer: {
        title: "Kuriftu Resort & Spa Bishoftu",
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
        img {
          transform: scaleX(-1);
        }
      }
    }
  }
}
</style>
