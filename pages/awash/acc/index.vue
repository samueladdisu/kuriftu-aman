<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/awash" dir="Awash" />
    <Acc :acc="acc" />

    <BishFooter :footer="footer" />
    <Sticky path="awash" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      acc: {
        accTitle: {
          title: "Accomodation at Kuriftu Resort Awash Falls",
          text: `Premiering Kuriftu's boutique resort chain, Kuriftu Resort Awash Falls invites guests into the extraordinary landscape of Awash National Park, offering privacy,uncompromising comfort and service `,
        },
        rooms: [
          {
            id: 1,
            img: "awash/acc/Premium.webp",
            subTitle: "Waterfall Front",
            title: "Premium Suite ",
            text: `Curated to exude an air of exclusivity with spacious surroundings, personal dining, and a private balcony view of the waterfall, the Presidenrial Suite radiates luxury at its finest from the highest point of the cliff  `,
            uri: "acc/1",
          },
          {
            id: 2,
            img: "awash/acc/Junior.webp",
            subTitle: "Waterfall Front",
            title: "Junior Suite",
            text: `Our Junior Suites provide guests with excellent views and an open environment complimenting the natural scenary`,
            uri: "acc/2",
          },
          {
            id: 3,
            img: "awash/acc/Experience.webp",
            subTitle: "Waterfall Front",
            title: "Executive Suite ",
            text: `Enjoy this unique space with sunlight radiating from every direction - our Executive Suite is the perfect lovers nest where you can relax in solitude with the sounds of the waterfall filling the room `,
            uri: "acc/3",
          },
          {
            id: 4,
            img: "awash/acc/Presidential.webp",
            subTitle: "Waterfall Front",
            title: "Presidential Suite ",
            text: `Curated to exude an air of exclusivity with spacious surroundings, personal dining, and a private balcony view of the waterfall, the Presidenrial Suite radiates luxury at its finest from the highest point of the cliff `,
            uri: "acc/4",
          },
        ],
      },
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
};
</script>

<style>
</style>
