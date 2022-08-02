<template>
  <div>
    <HeaderApp />
    <Destinav base="/laketana/" home="/laketana" dir="Lake Tana" />

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
     <Sticky path="tana" />
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
          title: "lake view",
          slides: [
            "laketana/acc/lakeview/1.webp",
            "laketana/acc.webp",
            "laketana/acc/lakeview/Lake View.jpg",
          ],
          desc: [
            {
              id: 1,
              pic1: "laketana/acc/lakeview/lvL.webp",
              pic2: "laketana/acc/lakeview/lvL1.webp",
              text: `With gorgeous views across the Lake Tana, these rooms are a guaranteed fit for romantic getaways, relaxing solo trips, and family bonding experiences. Our team is dedicated to providing guests with excellent service no matter what!`,
              url: "/book",
            },
          ],
          amenities: ["Tea and Coffee Maker", "32” HDTV ", "COVID Kit"],
          amenities1: ["Safety Deposit Box", "Bathrobe", "Hair-dryer"],
          amenities2: ["Luggage Rack", "Airport Shuttle", "Wifi"],
          other: [
            {
              img: "laketana/acc/gardenview/1.webp",
              title: "GARDEN VIEW",
              text: `Our standard classic rooms offer a very neat and nice room
with all the necessities and classic designs. `,
              link: "2",
            },
            {
              img: "laketana/acc/pre/1.webp",
              title: "PRESIDETIAL SUITE",
              text: `Take in the earthy environment curated by our woodwork and design team in this spacious room. Plan a romantic stay with your partner and experince exclusive offers in this space, including an in-room massage and luxury in-room dining experience. Our suites offer nothing less than  the perfect blend of comfort and beauty`,
              link: "3",
            },
          ],
        },
        {
          id: 2,
          title: "Garden View",
          slides: [
            "laketana/acc/gardenview/2.webp",
            "laketana/acc/gardenview/1.webp",
          ],
          desc: [
            {
              id: 1,
              pic1: "laketana/acc/gardenview/2Long.webp",
              pic2: "laketana/acc/gardenview/1Long.webp",
              text: `Experience our bird paradise - the Kuriftu brand directly correlates with the bird watching experience, this is emphasized by the amount of greenery that is nurtured and grown across all locations as a key feature. Place yourself in the heart of this space by booking one of our Garden View rooms!`,
              url: "/book?ewn",
            },
          ],
          amenities: ["Tea and Coffee Maker", "32” HDTV ", "COVID Kit"],
          amenities1: ["Safety Deposit Box", "Bathrobe", "Hair-dryer"],
          amenities2: ["Luggage Rack", "Airport Shuttle", "Wifi"],
          other: [
            {
              img: "laketana/acc/pre/1.webp",
              title: "Presidential Suite",
              text: `Our standard classic rooms offer a very neat and nice room with all the necessities and classic designs.`,
              link: "3",
            },
            {
              img: "laketana/acc/lakeview/1.webp",
              title: "Lake View",
              text: `Explore a variety of lake front rooms with a perfect view of Lake Tana and all that surrounds it`,
              link: "1",
            },
          ],
        },
        {
          id: 3,
          title: "Presidential Suite",
          slides: ["laketana/acc/pre/1.webp"],
          desc: [
            {
              id: 1,
              pic1: "bishoftu/acc/preLong1.webp",
              pic2: "bishoftu/acc/preLong2.webp",
              text: `Experience luxury accommodations at its finest - with earthy aesthetics, panaramic views of the lake, exposure to natural light from every corner of the room, indoor fireplace, and a dining table set for small groups - Kuriftu Tana Presidential Suites are truly one of a kind `,
              url: "/book",
            },
          ],
          amenities: ["Tea and Coffee Maker", "32” HDTV ", "COVID Kit"],
          amenities1: ["Safety Deposit Box", "Bathrobe", "Hair-dryer"],
          amenities2: ["Luggage Rack", "Airport Shuttle", "Wifi"],
          other: [
            {
              img: "laketana/acc/lakeview/1.webp",
              title: "LAKE VIEW",
              text: `Explore a variety of lake front rooms located in different sections of the resort - these rooms provide prime view of sun rise and sun set paired with the reflection of the lake `,
              link: "1",
            },
            {
              img: "laketana/acc/gardenview/1.webp",
              title: "GARDEN VIEW",
              text: `Our standard classic rooms offer a very neat and nice room with all the necessities and classic designs. `,
              link: "2",
            },
          ],
        },
      ],
      footer: {
        title: "Kuriftu Resort & Spa Lake Tana",
        second: {
          first: "491 km from Addis Abeba Bole International Airport",
          second: "Lake Tana",
          thrid: "Ethiopia",
        },
        thrid: {
          first: "Contact us on our direct phone line 9693",
          second: "Reception Desk +251920959797",
          thrid: "Email us at booking@kurifturesorts.com",
        },
        fourth: {
          url: "https://www.google.com/maps/dir//Kuriftu+Resort+and+Spa+Bahir+Dar+Bahir+Dar+Ethiopia/@11.9262507,37.2958219,10.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1644cde2a39aad09:0xe0ed4292e70a9eef!2m2!1d37.3837014!2d11.5984451",
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
