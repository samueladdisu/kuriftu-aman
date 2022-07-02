<template>
  <div>
    <HeaderApp />
    <Destinav base="boston/" class="boston-nav" home="boston/" dir="Boston" />
    <div class="E-bg">
      <Hero video="725574916" class="boston-hero" />
      <Intro :data="bishTitle" />
      <Bishoftuslide :photos="photos" />
      <hr class="divider" />
      <section class="acc E-bg">
        <div class="container">
          <img :src="require('@/assets/img/' + accImg + '')" alt="" />

          <Intro :data="accTitle" />
        </div>
      </section>
      <section class="well-boston">
        <div class="container">
          <div class="well__img__container">
            <img src="@/assets/img/boston/HairSalon1.webp" alt="" />
            <img src="@/assets/img/boston/SteamSaunaJaccuzi.webp" alt="" />
            <img src="@/assets/img/boston/massageCave1.webp" alt="" />
          </div>

          <div class="well__content">
            <div class="top__block">
              <div class="kay">
                <h1 class="title">Hair Salon</h1>
                <p class="text">
                  Enjoy a self-care experience at our Hair Salon - from high
                  cieling interiors, to vibrant art and natural lighting, the
                  Boston Day Spa Hair Salon exudes luxury at its finest. Each
                  customer is welcomed and treated with the utmost care from the
                  start to end of each service. As an Ethiopian brand, we know
                  very well how to manage kinks and curls of all types and
                  guarantee our clients walk out the door looking flawless
                </p>
              </div>
              <div class="cinema">
                <h1 class="title">Steam / Sauna / Jaccuzi</h1>
                <p class="text">
                  Treat youself to our private Steam and Sauna facility with
                  mosaic designs by Merikokeb Berhanu embedded in the walls or
                  each room. Whether it be a girls spa day or a couples wellness
                  night, take time to rejuvinate in this blissful setting and
                  let your eyes wonder in this carefully curated artistic
                  wellness experience
                </p>
              </div>
              <div class="swim">
                <h1 class="title">Massage Cave</h1>
                <p class="text">
                  Emmerse yourself in our Massage Cave - Inspired by natural
                  textures and local materials, this facility is mystified by
                  its unique aesthetic, warm colors and signature aromatic
                  smells that relax the mind and body. Through years of
                  innovation and trainings from international coaches, our
                  massueses have refined their skills to perfection. The
                  selection of treatments are found no where else as we continue
                  to create new techniques and develop new mixtures that create
                  a more personalized approach to each clients needs.
                </p>
              </div>

              <div class="swim">
                <h1 class="title"></h1>
                <p class="text"></p>
              </div>
            </div>

            <div class="lower__block">
              <div class="line"></div>
              <a href="bostonMenu.pdf" target="_blank" class="link"
                >View spa menu</a
              >
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="amenities">
      <h1 class="title am__title center">our facilities</h1>
      <div class="container">
        <ul class="first">
          <li class="text" v-for="text in amenities" :key="text">
            {{ text }}
          </li>
        </ul>

        <ul class="second">
          <li class="text" v-for="text in amenities1" :key="text">
            {{ text }}
          </li>
        </ul>

        <ul class="third">
          <li class="text" v-for="text in amenities2" :key="text">
            {{ text }}
          </li>
        </ul>
      </div>
    </section>

    <OtherAcc title="boston day spa experiences" :other="other" />
    <Sticky page="boston" />
  </div>
</template>

<script>
import BishFooter from "../../components/BishFooter.vue";
import Feature from "../../components/Feature.vue";
import LeftFeature from "../../components/LeftFeature.vue";
export default {
  components: { BishFooter, Feature, LeftFeature },
  data() {
    return {
      slides: [
        "boston/slider/gallery2.webp",
        "boston/slider/recieption.webp",
        "boston/slider/suana.webp",
        "boston/slider/barber.webp",
      ],
      photos: [
        "boston/HairSalon.webp",
        "boston/ManiPedi.webp",
        "boston/MassageCave.webp",
        "boston/Barber1.webp",
        "boston/SteamSaunaJaccuzi.webp",
        "boston/Wax.webp",
        "boston/HairStyle.webp",
      ],
      // acc cover image
      accImg: "boston/ArtGallery.webp",
      // acc content
      accTitle: {
        title: "Art Gallery",
        text: `   As you wait for your appointment take a stroll around the
                  entire Boston Day Spa floor and discover local art stationed
                  all across. Make your own interpretations of the work through
                  this experience!`,
      },
      bishTitle: {
        subTitle: "Addis Ababa, Ethiopia",
        title: "Boston Day Spa",
        text: `Considered to be the heart and soul of our company, Boston Day Spa was the premier project that birthed the Kuriftu brand. With the focus of developing capacity building programs in the heart of Addis, our CEO trained and empowered local community members who started as construction workers to become specialty spa service providers. The majority of our current staff have been with us for over 15 years and consider Boston Day Spa as their own, having built this monumental structure with their bare hands, the level of care for service is unmatched. Boston Day Spa provides a vast number of services in the spa sector that cater to all wellness needs. With the consultation of Mesai Haileleul, founder of Addis FIne Art (ADA), this location also serves as an art gallery with peices curated by major Ethiopian artists who are now on an international platform. A prime example of this being Merikokeb Berhanu who hand crafted each mosiac structure in our spa. Merikokeb's peices are now features in the top art exhibitions around the world, not limited to The New York Armory Show 2020, a sold out show in Freize London 2021, and the 59th International Art Exhibition of La Biennale di Venezia. We are proud to represent local artists as their work is engrained in our company culture.`,
      },
      amenities: ["Hair Style", "Manicure", "Pedicure"],
      amenities1: ["Massage", "Facial", "Wax"],
      amenities2: ["Spa", "Barber"],
      other: [
        {
          img: "boston/Facial.webp",
          title: "Facial",
          text: `With state of the art machinery, products and skillset, our facial experience provides clients the option to choose between an organic or standard treatment that cater to all skin types.`,
        },
        {
          img: "boston/WaxLong.webp",
          title: "Wax",
          text: `Relieve your body from unwanted hair by scheduling a time with one of our hair removal specialists`,
        },
        {
          img: "boston/ManiPediLong.webp",
          title: "Mani / Pedi ",
          text: `Stay up-to-date on trending colors and new designs for nail art at our Mani/Pedi Studio overlooking bole road`,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@include responsive($xl) {
  .boston-nav {
    .container {
      .wrapper {
        .link-destination {
          .line {
            width: 30% !important;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1440px) {
  .boston-nav {
    .container {
      .wrapper {
        .link-destination {
          .line {
            width: 20% !important;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .boston-nav {
    .container {
      .wrapper {
        .link-destination {
          .line {
            width: 70%;
          }
        }
      }
    }
  }
}

.acc {
  .container {
    img {
      width: 100%;
      object-fit: cover;
      max-height: 40.875rem;
    }
    .acc-title {
      text-align: center;
      max-width: 36.1875rem;
      margin: 0 auto;
      h5 {
        margin-top: 2.625rem;
        margin-bottom: 1rem;
      }
      h1,
      p {
        margin-bottom: 0.8rem;
      }
    }
  }
}

.well-boston {
  background: #f3eee7;
  padding: 3rem 0;
  .container {
    .well__img__container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "top top"
        "lower1 lower2";
      gap: 1rem;
      img {
        width: 100%;
      }
      img:nth-child(1) {
        grid-area: top;
      }
      img:nth-child(2) {
        grid-area: lower1;
      }
      img:nth-child(3) {
        grid-area: lower2;
      }
    }
    .well__content {
      h1 {
        margin: 1rem 0 1.5rem;
      }
      .lower__block {
        .line {
          width: 100%;
          height: 1px;
          background: #cacaca;
          margin: 2rem 0 1.5rem;
        }
      }
    }
  }
}

@include responsive($xl) {
  .well-boston {
    .container {
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-template-areas: "img content";
      .well__content {
        width: 90%;
        margin: 0 auto;
        grid-area: content;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .well__img__container {
        grid-area: img;
      }
    }
  }
}
.amenities {
  .am__title {
    margin: 2rem 0;
  }
  .container {
    background: #fff;
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
