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
          id: 1,
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
          desc: [
            {
              id: 1,
              pic1: "long.webp",
              pic2: "long.webp",
              text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
              url: "/book?ewn",
            },
          ],
          amenities: [
            "lorem ipsum dolor",
            "lorem ipsum dolor",
            "lorem ipsum dolor",
            "lorem ipsum dolor",
          ],
          amenities1: [
            "lorem ipsum dolor",
            "lorem ipsum dolor",
            "lorem ipsum dolor",
            "lorem ipsum dolor",
          ],
          amenities2: [
            "lorem ipsum dolor",
            "lorem ipsum dolor",
            "lorem ipsum dolor",
            "lorem ipsum dolor",
          ],
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
        },
        {
          id: 2,
          title: "two-bedroom private garden & balcony",
          slides: [
            "bishoftu/acc/pre5.webp",
            "bishoftu/acc/pre6.webp",
            "bishoftu/acc/pre7.webp",
            "bishoftu/acc/pre8.webp",
          ],
          desc: [
            {
              id: 1,
              pic1: "long.webp",
              pic2: "long.webp",
              text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
              url: "/book?ewn",
            },
          ],
          amenities: [
            "lorem ipsum dolor",
            "lorem ipsum dolor",
            "lorem ipsum dolor",
            "lorem ipsum dolor",
          ],
          amenities1: [
            "lorem ipsum dolor",
            "lorem ipsum dolor",
            "lorem ipsum dolor",
            "lorem ipsum dolor",
          ],
          amenities2: [
            "lorem ipsum dolor",
            "lorem ipsum dolor",
            "lorem ipsum dolor",
            "lorem ipsum dolor",
          ],
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
