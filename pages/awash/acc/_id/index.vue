<template>
  <div>
    <HeaderApp />
    <Destinav base="/awash/" home="/awash" dir="Awash" />

    <section class="s__acc__hero">
      <div class="container1">
        <div class="hero-title">
          <h1 class="title">
            {{ renderdData.title }}
          </h1>

          <a @click.prevent="$router.go(-1)" class="text back">
            <img src="@/assets/img/icons/next2.svg" alt="" />
            back to accomodations
          </a>
        </div>

        <HeroSlide :img="renderdData.slides" :subTitle="renderdData.title" />

        <div class="container">
          <Desc1 :desc="renderdData.desc" />

          <h1 class="title center am">amenities</h1>
        </div>
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
    <Sticky path="awash" />
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
          title: "Premium Suite",
          slides: [
            "awash/acc/premium/prem1.webp",
            "awash/acc/premium/prem3.webp",
            "awash/acc/premium/prem2.webp",

            "awash/acc/premium/prem3.webp",

            "awash/acc/premium/prem1.webp",
            "awash/acc/premium/prem2.webp",
          ],
          desc: [
            {
              id: 1,
              pic1: "awash/acc/premium/long1.webp",
              pic2: "awash/acc/premium/long2.webp",
              text: `Treat yourself to an unforgetable, nature based experience with a focus on earthy tones and inner balance. Our Premium rooms are nothing short of exceptional for our guests!`,
              url: "?location=awash&roomType=premium",
            },
          ],
          amenities: [
            "Private bathroom with a shower",
            "Individually controlled AC and Fan",
            "PBX Phone",
            "Adapters",
            "Hair-dryer",
          ],
          amenities1: [
            "COVID Kit",
            "43” HDTV with DSTV Channels ",
            "Slippers",
            "Tea Maker",
            "Mini Fridge",
            "Luggage Rack",
          ],
          amenities2: [
            "Safety Deposit Box",
            "Laundry Bag",
            "Yoga Mats",
            "Bathrobe",
            "Balcony with 2 lounge chairs",
          ],
          other: [
            {
              img: "awash/acc/premium/otherjun.webp",
              title: "Junior Suite",
              text: `Our Junior Suites provide guests with excellent views and an open environment complimenting the natural scenery `,
              link: "2",
            },
            {
              img: "awash/acc/premium/otherex.webp",
              title: "Executive",
              text: `Enjoy this unique space with sunlight radiating from every direction - our Executive Suite is the perfect lovers nest where you can relax in solitude with the sounds of the waterfall filling the room `,
              link: "3",
            },
            {
              img: "awash/acc/premium/otherpres.webp",
              title: "Presidential Suite",
              text: `Curated to exude an air of exclusivity with spacious surroundings, personal dining, and a private balcony view of the waterfall, the presidential  Suite radiates luxury at its finest from the highest point of the cliff `,
              link: "4",
            },
          ],
        },
        {
          id: 2,
          title: "Junior Suite",
          slides: [
            "awash/acc/junior/jun2.webp",
            "awash/acc/junior/jun4.webp",
            "awash/acc/junior/jun3.webp",
            "awash/acc/junior/jun1.webp",
          ],
          desc: [
            {
              id: 1,
              pic1: "awash/acc/junior/long.webp",
              pic2: "awash/acc/junior/long2.webp",
              text: `Our Junior Suites provide guests with excellent views and an open environment complimenting the natural scenery `,
              url: "?location=awash&roomType=junior",
            },
          ],
          amenities: [
            "Private bathroom with a shower",
            "Individually controlled AC and Fan",
            "PBX Phone",
            "Adapters",
            "Hair-dryer",
          ],
          amenities1: [
            "COVID Kit",
            "43” HDTV with DSTV Channels ",
            "Slippers",
            "Tea Maker",
            "Mini Fridge",
            "Luggage Rack",
          ],
          amenities2: [
            "Safety Deposit Box",
            "Laundry Bag",
            "Yoga Mats",
            "Bathrobe",
            "Balcony with 2 lounge chairs",
          ],
          other: [
            {
              img: "awash/acc/premium/otherprem.webp",
              title: "Permium Suite",
              text: `Treat yourself to an unforgetable, nature based experience with a focus on earthy tones and inner balance. Our Premium rooms are nothing short of exceptional for our guests!`,
              link: "1",
            },
            {
              img: "awash/acc/premium/otherex.webp",
              title: "Executive",
              text: `Enjoy this unique space with sunlight radiating from every direction - our Executive Suite is the perfect lovers nest where you can relax in solitude with the sounds of the waterfall filling the room `,
              link: "3",
            },
            {
              img: "awash/acc/premium/otherpres.webp",
              title: "Presidential Suite",
              text: `Curated to exude an air of exclusivity with spacious surroundings, personal dining, and a private balcony view of the waterfall, the presidential . Suite radiates luxury at its finest from the highest point of the cliff `,
              link: "4",
            },
          ],
        },
        {
          id: 3,
          title: "Executive",
          slides: [
            "awash/acc/Executive/Executive.webp",
            "awash/acc/Executive/RIH03650.webp",
            "awash/acc/Executive/RIH03652.webp",
            "awash/acc/Executive/RIH03678.webp",
          ],
          desc: [
            {
              id: 1,
              pic1: "awash/acc/Executive/long.webp",
              pic2: "awash/acc/Executive/long2.webp",
              text: `Enjoy this unique space with sunlight radiating from every direction - our Executive Suite is the perfect lovers nest where you can relax in solitude with the sounds of the waterfall filling the room  `,
              url: "?location=awash&roomType=executive",
            },
          ],
          amenities: [
            "Private bathroom with a shower",
            "Individually controlled AC and Fan",
            "PBX Phone",
            "Adapters",
            "Hair-dryer",
            "Dining Table",
          ],
          amenities1: [
            "COVID Kit",
            "43” HDTV with DSTV Channels ",
            "Slippers",
            "Tea Maker",
            "Mini Fridge",
            "Luggage Rack",
          ],
          amenities2: [
            "Safety Deposit Box",
            "Laundry Bag",
            "Yoga Mats",
            "Bathrobe",
            "Balcony with 2 lounge chairs",
          ],
          other: [
            {
              img: "awash/acc/premium/otherprem.webp",
              title: "Permium Suite",
              text: `Treat yourself to an unforgetable, nature based experience with a focus on earthy tones and inner balance. Our Premium rooms are nothing short of exceptional for our guests!`,
              link: "1",
            },
            {
              img: "awash/acc/premium/otherjun.webp",
              title: "Junior Suite",
              text: `Our Junior Suites provide guests with excellent views and an open environment complimenting the natural scenery `,
              link: "2",
            },
            {
              img: "awash/acc/premium/otherpres.webp",
              title: "Presidential Suite",
              text: `Curated to exude an air of exclusivity with spacious surroundings, personal dining, and a private balcony view of the waterfall, the presidential . Suite radiates luxury at its finest from the highest point of the cliff `,
              link: "4",
            },
          ],
        },
        {
          id: 4,
          title: "Presidential Suite",
          slides: [
            "awash/acc/presidential/pre2.webp",
            "awash/acc/presidential/pre1.webp",
            "awash/acc/presidential/pre5.webp",
            "awash/acc/presidential/pre3.webp",
            "awash/acc/presidential/pre4.webp",
          ],
          desc: [
            {
              id: 1,
              pic1: "awash/acc/presidential/long.webp",
              pic2: "awash/acc/presidential/long2.webp",
              text: `Curated to exude an air of exclusivity with spacious surroundings, personal dining, and a private balcony view of the waterfall, the presidential  Suite radiates luxury at its finest from the highest point of the cliff `,
              url: "?location=awash&roomType=presidential",
            },
          ],
          amenities: [
            "Private bathroom with a shower",
            "Individually controlled AC and Fan",
            "PBX Phone",
            "Adapters",
            "Hair-dryer",
            "Dining Table",
          ],
          amenities1: [
            "COVID Kit",
            "43” HDTV with DSTV Channels ",
            "Slippers",
            "Tea Maker",
            "Mini Fridge",
            "Luggage Rack",
          ],
          amenities2: [
            "Safety Deposit Box",
            "Laundry Bag",
            "Yoga Mats",
            "Bathrobe",
            "Balcony with 2 lounge chairs",
          ],
          other: [
            {
              img: "awash/acc/premium/otherprem.webp",
              title: "Permium Suite",
              text: `Treat yourself to an unforgetable, nature based experience with a focus on earthy tones and inner balance. Our Premium rooms are nothing short of exceptional for our guests!`,
              link: "1",
            },
            {
              img: "awash/acc/premium/otherjun.webp",
              title: "Junior Suite",
              text: `Our Junior Suites provide guests with excellent views and an open environment complimenting the natural scenery `,
              link: "2",
            },
            {
              img: "awash/acc/premium/otherex.webp",
              title: "Executive",
              text: `Enjoy this unique space with sunlight radiating from every direction - our Executive Suite is the perfect lovers nest where you can relax in solitude with the sounds of the waterfall filling the room `,
              link: "3",
            },
          ],
        },
      ],
      footer: {
        title: "Kuriftu Resort & Spa Awash Falls",
        second: {
          first: "211 km from Addis Abeba Bole International Airport",
          second: "Awash Park",
          thrid: "Ethiopia",
        },
        thrid: {
          first: "Contact us on our direct phone line 9693",
          second: "Reception Desk +251944448800",
          thrid: "Email us at booking@kurifturesorts.com  ",
        },
        fourth: {
          url: "https://www.google.com/maps/dir//Kuriftu+Resort+%26+Spa+Awash+Falls+awash+park+Awash+Ethiopia/@8.8430524,40.0122975,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x163593fea245879f:0xca93c0e4241369ec!2m2!1d40.0122975!2d8.8430524",
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
  .container1 {
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
