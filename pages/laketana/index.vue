<template>
  <div>
    <HeaderApp />
    <Destinav base="laketana/" home="laketana/" dir="Lake Tana" />
    <Dindex :index="index" />
    <Sticky path="tana" />
  </div>
</template>

<script>
import Destinav from "../../components/Destinav.vue";
export default {
  components: { Destinav },
  data() {
    return {
      index: {
        // heroImg: "laketana/Lake tana.webp",
        video: "708087309",
        bishTitle: {
          subTitle: "LAKE TANA, BAHIRDAR",
          title: "kuriftu resort & spa Lake Tana",
          text: `Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & Spa Lake Tana represents the Kuriftu brands second resort venture. As we seek to expand across Ethiopia, Lake Tana with its historic and cultural value was the perfect choice for expansion. Paired with scenic views, wildlife excursions and religious routes - this destination offers a new adventure for our Kuriftu family!`,
        },
        // slides
        photos: [
          "laketana/acc/lakeview/lvL1.webp",
          "laketana/corp/ConferenceHall.webp",
          "laketana/event/Honeymoon.webp",
          "laketana/exp/CabanaDinig.webp",
          "laketana/well/2L.webp",
          "laketana/Lake tana.webp",
          "laketana/dining.webp",
        ],

        // acc cover image
        accImg: "laketana/acc.webp",
        // acc content
        accTitle: {
          subTitle: "ACCOMODATION",
          title: "Surrounded by Nature",
          text: `With only 28 rooms, Kuriftu Tana offers guests a more intimate experience with their natural surroundings and an opportunity to explore areas in and out of the resort`,
          link: "view all accomodations",
          url: "laketana/acc",
        },

        // destination highlight section
        highlight: [
          {
            id: 1,
            img: "laketana/exp.webp",
            subTitle: "Experience",
            title: "Adventure",
            text: `From boat rides to local monestaries to bird watching tours, Kuriftu Tana has a unique relationship with the natural environment that allows guests to relax`,
            uri: "laketana/exp",
            url: "Explore",
          },
          {
            id: 2,
            img: "laketana/Dining1.webp",
            subTitle: "dining",
            title: "culinary on the lake",
            text: `Enjoy the various traditional and western cuisines carefully prepared while taking in the beautiful scenery. Our restaurant has a stunning backdrop of Lake Tana as well as several cabanas for our guests convenience `,
            uri: "laketana/dining",
            url: "Explore",
          },
          {
            id: 3,
            img: "laketana/well.webp",
            subTitle: "wellness",
            title: "Rejuvination",
            text: `A place of peace where relaxation and wellness go hand in hand`,
            uri: "laketana/well",
            url: "Explore",
          },
          {
            id: 4,
            img: "laketana/corp.webp",
            subTitle: "Corporate Teams",
            title: "CORPORATE EXPERIENCE",
            text: `A space for your team to work, strengthen relationships and relax together. `,
            uri: "laketana/corp",
            url: "Explore",
          },
          {
            id: 5,
            img: "laketana/cele.webp",
            subTitle: "Celebration",
            title: "A memorable experience",
            text: `Share your unforgettable moments with us at our resort with birthdays, weddings and more! `,
            uri: "laketana/event",
            url: "Explore",
          },
          {
            id: 6,
            img: "laketana/FutureTravels.webp",
            subTitle: "gift voucher",
            title: "future travels",
            text: `Get gift vouchers for your loved ones to be part of the incredible experiences provided at our resort.`,
            uri: "laketana/gift",
            url: "Explore",
          },
        ],
        // map section
        mapInfo: `491 km from Addis Abeba Bole International Airport Lake Tana, Ethiopia`,
        iframe: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.3489744311732!2d37.37921672875011!3d11.598450320334624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1644cde2a39aad09%3A0xe0ed4292e70a9eef!2sKuriftu%20Resort%20and%20Spa%20Bahir%20Dar!5e0!3m2!1sen!2sus!4v1655483010985!5m2!1sen!2sus`,
      },
    };
  },
};
</script>

<style>
</style>
