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
            back to accomodations
          </a>
        </div>

        <HeroSlide :img="renderdData.slides" :subTitle="renderdData.title" />

        <Desc1 :desc="renderdData.desc" />

        <h1 class="title center am">amenities</h1>
      </div>
    </section>

    <section class="amenities">
      <div class="container">
        <ul class="first">
          <li class="text" v-for="text in renderdData.amenities" :key="text">
            {{ text }}
          </li>
        </ul>

        <ul class="second">
          <li class="text" v-for="text in renderdData.amenities1" :key="text">
            {{ text }}
          </li>
        </ul>

        <ul class="third">
          <li class="text" v-for="text in renderdData.amenities2" :key="text">
            {{ text }}
          </li>
        </ul>
      </div>
    </section>

    <OtherAcc title="other accomodation" :other="renderdData.other" />

    <BishFooter :footer="footer" />
  </div>
</template>

<script>
import OtherAcc from "../../../../components/OtherAcc.vue";
export default {
  components: { OtherAcc },
  data() {
    return {
      renderdData: "",
      accData: [
        {
          id: 2,
          title: "Kuriftu Oases / Presedential Cabin",
          slides: [
            "Entoto/acc/Presidential.webp",
            "Entoto/acc/pre/1.webp",
            "Entoto/acc/pre/2.webp",
            "Entoto/acc/pre/3.webp",
            "Entoto/acc/pre/4.webp",
            "Entoto/acc/pre/5.webp",
            "Entoto/acc/pre/6.webp",
          ],
          desc: [
            {
              id: 1,
              pic1: "Entoto/acc/pre/long.webp",
              pic2: "Entoto/acc/pre/long2.webp",
              text: `Tucked away in the depths of the forest lies a private Presidential Cabin, or what we like to call, the Kuriftu Oasis. A perfect couples escape or a place to have some fun with family or friends by firing up the grill and stocking the outdoor bar with beverages of your choice! Amidst a supportive and nurturing environment, high-glass cielings radiating natural daylight, starlit evenings allowing guests to create emotional connections with friends or loved ones or even solitary reflection. Kuriftu Oasis offers the chance to heal inwards.`,
              url: "/book?ewn",
            },
          ],
          amenities: [
            "KING SIZE BED / ELECTRIC BED WARMER ",
            "TWO MOUNTAIN BICYCLES ",
            "COFFEE / TEA BREWER",
            "OUTDOOR GRILL",
          ],
          amenities1: ["HAMMOCK", "MINI BAR", "UMBRELLA", "YOGA MAT"],
          amenities2: [
            "BREAKFAST BUFFET (LOCATION?)",
            "STEAM, SAUNA & JACUZZI",
            "SHUTTLE SERVICES ",
            "25% DISCOUNT FOR ADVENTURE PARK ACTIVITES ",
          ],
          other: [
            {
              img: "bishoftu/firstSlider/1.webp",
              title: "Glamping Tents",
              text: `Carefully hidden amongst the eucalyptus trees, our Kuriftu Glamping site offers guests a quiet escape from reality with nothing but the natural world surrounding.`,
              link: "1",
            },
          ],
        },
        {
          id: 1,
          title: "Glamping Tents",
          slides: [
            "Entoto/acc/Glamping.webp",
            "Entoto/acc/gla/5.webp",
            "Entoto/acc/gla/1.webp",
            "Entoto/acc/gla/2.webp",
            "Entoto/acc/gla/3.webp",
            "Entoto/acc/gla/4.webp",
          ],
          desc: [
            {
              id: 1,
              pic1: "Entoto/slide6.webp",
              pic2: "Entoto/slide2.2.webp",
              text: `Carefully hidden amongst the eucalyptus trees, our Kuriftu Glamping site offers guests a quiet escape from reality with nothing but the natural world surrounding. With hammocks suspended over the room decks, outdoor grilling stations and mountain bikes provided per room, guests can relax in pure nature.`,
              url: "/book?ewn",
            },
          ],
          amenities: [
            "DOUBLE TWIN OR QUEEN SIZE BED / ELECTRIC BED WARMER ",
            "TWO MOUNTAIN BICYCLES ",
            "COFFEE / TEA BREWER",
            "OUTDOOR GRILL",
          ],
          amenities1: ["HAMMOCK", "MINI BAR", "UMBRELLA", "YOGA MAT"],
          amenities2: [
            "BREAKFAST BUFFET (LOCATION?)",
            "STEAM, SAUNA & JACUZZI",
            "SHUTTLE SERVICES ",
            "25% DISCOUNT FOR ADVENTURE PARK ACTIVITES ",
          ],
          other: [
            {
              img: "Entoto/acc/Presidential.webp",
              title: "Presidential",
              text: `ucked away in the depths of the forest lies a private Presidential Cabin, or what we like to call, the Kuriftu Oasis. A perfect couples escape or a place to have some fun with family or friends by firing up the grill`,
              link: "2",
            },
          ],
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
    this.accData.map((data) => {
      if (data.id == this.$route.params.id) {
        this.renderdData = data;
      }
    });

    console.log("filter", this.renderdData.desc.pic1);
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

.amenities {
  .container {
    display: grid;
    justify-content: center;
    ul {
      li {
        list-style: disc;
        margin: 1.5rem 0;
      }
    }
  }
}

@include responsive($md) {
  .amenities {
    .container {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas: "first second third";
      .first,
      .second,
      .third {
        justify-self: center;
      }
      .first {
        grid-area: first;
      }
      .second {
        grid-area: second;
      }
      .third {
        grid-area: third;
      }
    }
  }
}
</style>
