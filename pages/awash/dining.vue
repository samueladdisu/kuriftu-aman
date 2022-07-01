<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/awash" dir="Awash" />
    <Dining :dining="dining" />
    <BishFooter :footer="footer" />
    <Sticky path="awash" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dining: {
        slides: [
          "awash/dining/TheFallsRestaurant&Bar.webp",
          "awash/dining/ThePoolBar&Grill.webp",
          "awash/dining/din1.webp",
          "awash/dining/din2.webp",
          "awash/dining/din3.webp",
        ],
        heroTitle: "Dinning at Kuriftu Resort & Spa Awash Falls",
        heroSubTitle: "Kuriftu Resort & Spa Awash Falls",
        heroText: `We at Kuriftu Awash Falls are delighted to present our latest innovation in the culinary experience`,
        feature: {
          img: "awash/dining/TheFallsRestaurant&Bar.webp",
          title: "THE FALLS RESTAURANT & BAR ",
          text: `Designed to highlight our unparalleled view of the park’s waterfall, The Falls Restaurant & Bar is decorated with natural light flooding the space with colorful accents, stone structures and brick elements, creating an organic vibrance for our guests to absorb. From top-brand liquor to signature cocktails and a set menu made-up of locally sourced ingredients, our dining experience fully encompasses our guests needs.`,
          uri: "/",
          link: "view menu",
        },
        Lfeature: {
          img: "awash/dining/ThePoolBar&Grill.webp",
          title: "THE POOL BAR & GRILL",
          text: `We are excited to present our first Dipping Pool experience paired with our bar & grill on an elevated platform overlooking the waterfall. The perfect destination for a romantic getaway with picture perfect views from sunrise to sunset`,
          uri: "/",
          link: "view menu",
        },
      },
      footer: {
        title: "Kuriftu Resort & Spa Awash Falls",
        second: {
          first: "211 km from Addis Ababa Bole International Airport",
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
