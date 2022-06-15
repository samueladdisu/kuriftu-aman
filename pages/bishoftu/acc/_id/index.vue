<template>
  <div>
    <HeaderApp />
    <Destinav base="/bishoftu/" home="/bishoftu" dir="Bishoftu" />

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
              text: `With a variety of scenic views across the Kuriftu Lake, these rooms are a guaranteed fit for romantic getaways, relaxing solo trips, and family bonding experiences. Our team is dedicated to providing guests with excellent service no matter what room!`,
              url: "/book",
            },
          ],
          amenities: [
            "Private bathroom with a shower",
            "Wifi",
            "PBX Phone",
            "Adapters",
            "Hair-dryer",
          ],
          amenities1: [
            "COVID Kit",
            "32” HDTV ",
            "Slippers",
            "Tea and Coffee Maker",
            "Mini Fridge",
            "Luggage Rack",
          ],
          amenities2: [
            "Safety Deposit Box",
            "Umbrella",
            "Ironing Board",
            "Bathrobe",
            "Private Balcony with Day Bed",
          ],
          other: [
            {
              img: "bishoftu/firstSlider/1.webp",
              title: "GARDEN VIEW",
              text: `Immerse yourself in colorful garden features that make up most of the natural landscape Kuriftu Bishoftu. Attracting birds of varying species, wake up to the mezmerizing sound of their songs in the early morning as the sun rises above the lakes horizon `,
              link: "2",
            },
            {
              img: "bishoftu/firstSlider/1.webp",
              title: "VILLAGE",
              text: `Experience our lofted rooms featuring Kurfitu's new contemporary interior design - with a play on colors and abstract art, contrasting screed flooring and high cielings for a luxurious effect, the Village rooms create a new approach to innovation in the resort`,
              link: "3",
            },
            {
              img: "bishoftu/firstSlider/1.webp",
              title: "PRESIDENTIAL",
              text: `Take in the earthy environment curated by our woodwork and design team in this spacious room. Plan a romantic stay with your partner and experince exclusive offers in this space, including an in-room massage and luxury in-room dining experience. Our suites offer nothing less than  the perfect blend of comfort and beauty`,
              link: "4",
            },
          ],
        },
        {
          id: 2,
          title: "Garden View",
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
              text: `Place yourself in the heart of one of Bishoftu's key experiences - nature. Our Garden View rooms have grown into mini forests over the years with vines and picturesque flowers intertwining through one another. These rooms are considered a birds paradise as it's impossible to escape the songs featured by their viists throughout the day. Experience rooms in this category across the entire resort!`,
              url: "/book?ewn",
            },
          ],
          amenities: [
            "Private bathroom with a shower",
            "Wifi",
            "PBX Phone",
            "Adapters",
            "Hair-dryer",
          ],
          amenities1: [
            "COVID Kit",
            "32” HDTV ",
            "Slippers",
            "Tea and Coffee Maker",
            "Mini Fridge",
            "Luggage Rack",
          ],
          amenities2: [
            "Safety Deposit Box",
            "Umbrella",
            "Ironing Board",
            "Bathrobe",
            "Private Balcony with Day Bed",
          ],
          other: [
            {
              img: "bishoftu/firstSlider/1.webp",
              title: "LAKE VIEW",
              text: `Explore a variety of lake front rooms located in different sections of the resort - these rooms provide prime view of sun rise and sun set paired with the reflection of the lake `,
              link: "1",
            },
            {
              img: "bishoftu/firstSlider/1.webp",
              title: "VILLAGE",
              text: `Experience our lofted rooms featuring Kurfitu's new contemporary interior design - with a play on colors and abstract art, contrasting screed flooring and high cielings for a luxurious effect, the Village rooms create a new approach to innovation in the resort`,
              link: "3",
            },
            {
              img: "bishoftu/firstSlider/1.webp",
              title: "PRESIDENTIAL",
              text: `Take in the earthy environment curated by our woodwork and design team in this spacious room. Plan a romantic stay with your partner and experince exclusive offers in this space, including an in-room massage and luxury in-room dining experience. Our suites offer nothing less than  the perfect blend of comfort and beauty`,
              link: "4",
            },
          ],
        },
        {
          id: 3,
          title: "Loft Village",
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
              text: `The Kuriftu brand is proud to showcase a new room aesthetic with the Loft Village - screed floors, contemporary design and finish, vibrant abstract art - experience our brand as we diversify our skillset and provide alternative accommodations for our guests! This room category features the Kuriftu Pool Bar located in the center of the lofted village `,
              url: "/book",
            },
          ],
          amenities: [
            "Private bathroom with a shower",
            "Wifi",
            "PBX Phone",
            "Adapters",
            "Hair-dryer",
          ],
          amenities1: [
            "COVID Kit",
            "32” HDTV ",
            "Slippers",
            "Tea and Coffee Maker",
            "Mini Fridge",
            "Luggage Rack",
          ],
          amenities2: [
            "Safety Deposit Box",
            "Umbrella",
            "Ironing Board",
            "Bathrobe",
            "Private Balcony with Day Bed",
          ],
          other: [
            {
              img: "bishoftu/firstSlider/1.webp",
              title: "LAKE VIEW",
              text: `Explore a variety of lake front rooms located in different sections of the resort - these rooms provide prime view of sun rise and sun set paired with the reflection of the lake `,
              link: "1",
            },
            {
              img: "bishoftu/firstSlider/1.webp",
              title: "GARDEN VIEW",
              text: `Immerse yourself in colorful garden features that make up most of the natural landscape Kuriftu Bishoftu. Attracting birds of varying species, wake up to the mezmerizing sound of their songs in the early morning as the sun rises above the lakes horizon `,
              link: "2",
            },
            {
              img: "bishoftu/firstSlider/1.webp",
              title: "PRESIDENTIAL",
              text: `Take in the earthy environment curated by our woodwork and design team in this spacious room. Plan a romantic stay with your partner and experince exclusive offers in this space, including an in-room massage and luxury in-room dining experience. Our suites offer nothing less than  the perfect blend of comfort and beauty`,
              link: "4",
            },
          ],
        },
        {
          id: 4,
          title: "Presidential Suite",
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
              text: `Experience luxury accommodations at its finest - with earthy aesthetics, panaramic views of the lake, exposure to natural light from every corner of the room, indoor fireplace, and a dining table set for small groups - Kuriftu Bishoftu Presidential Suites are truly one of a kind`,
              url: "/book",
            },
          ],
          amenities: [
            "Private bathroom with a shower",
            "Wifi",
            "PBX Phone",
            "Adapters",
            "Hair-dryer",
          ],
          amenities1: [
            "COVID Kit",
            "32” HDTV ",
            "Slippers",
            "Tea and Coffee Maker",
            "Mini Fridge",
            "Luggage Rack",
          ],
          amenities2: [
            "Safety Deposit Box",
            "Umbrella",
            "Ironing Board",
            "Bathrobe",
            "Private Balcony with Day Bed",
          ],
          other: [
            {
              img: "bishoftu/firstSlider/1.webp",
              title: "LAKE VIEW",
              text: `Explore a variety of lake front rooms located in different sections of the resort - these rooms provide prime view of sun rise and sun set paired with the reflection of the lake `,
              link: "1",
            },
            {
              img: "bishoftu/firstSlider/1.webp",
              title: "GARDEN VIEW",
              text: `Immerse yourself in colorful garden features that make up most of the natural landscape Kuriftu Bishoftu. Attracting birds of varying species, wake up to the mezmerizing sound of their songs in the early morning as the sun rises above the lakes horizon `,
              link: "2",
            },
            {
              img: "bishoftu/firstSlider/1.webp",
              title: "VILLAGE",
              text: `Experience our lofted rooms featuring Kurfitu's new contemporary interior design - with a play on colors and abstract art, contrasting screed flooring and high cielings for a luxurious effect, the Village rooms create a new approach to innovation in the resort`,
              link: "3",
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
