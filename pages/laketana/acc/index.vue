<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/laketana" dir="Lake Tana" />
    <Acc :acc="acc" />

    <BishFooter :footer="footer" />
     <Sticky path="tana" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      acc: {
        accTitle: {
          title: "Accomodation at Kuriftu Resort & Spa Tana",
          text: `With only 28 rooms, Kuriftu Tana lives in its very own eosystem of greenery. As a staple for our brand, the use of natural materials is key to creating this tranquil environment `,
        },
        rooms: [
          {
            id: 1,
            img: "laketana/acc/lakeview/1.webp",
            subTitle: "rooms",
            title: "lake view",
            text: `Explore a variety of lake front rooms with a perfect view of Lake Tana and all that surrounds it`,
            uri: "acc/1",
          },
          {
            id: 2,
            img: "laketana/acc/gardenview/1.webp",
            subTitle: "rooms",
            title: "GARDEN VIEW",
            text: `Immerse yourself in colorful garden features that make up most of the natural landscape Kuriftu Tana. Attracting birds of varying species, wake up to the mezmerizing sound of their songs in the early morning as the sun rises above the lakes horizon `,
            uri: "acc/2",
          },
          {
            id: 3,
            img: "laketana/acc/pre/1.webp",
            subTitle: "rooms",
            title: "PRESIDETIAL SUITE",
            text: `Take in the earthy environment curated by our woodwork and design team in this spacious room. Plan a romantic stay with your partner and experince exclusive offers in this space, including an in-room massage and luxury in-room dining experience. Our suites offer nothing less than  the perfect blend of comfort and beauty`,
            uri: "acc/3",
          },
        ],
      },
      footer: {
        title: "Kuriftu Resort & Spa Lake Tana",
        second: {
          first: "491 km from Addis Ababa Bole International Airport",
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
};
</script>

<style>
</style>
