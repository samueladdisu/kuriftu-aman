<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/entoto" dir="Entoto" />
    <Gallery :gallery="gallery" :gallery2="gallery2" />
    <BishFooter :footer="footer" />
    <Sticky path="entoto" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery: [
        {
          id: 1,
          src: "Entoto/well/1.webp",
        },
        {
          id: 2,
          src: "Entoto/well/2.webp",
        },
        {
          id: 3,
          src: "Entoto/well/3.webp",
        },
        {
          id: 4,
          src: "Entoto/well/4.webp",
        },
        {
          id: 5,
          src: "Entoto/event/SpaceOrganization.webp",
        },
        {
          id: 6,
          src: "Entoto/well/long2.webp",
        },
        {
          id: 7,
          src: "Entoto/event/Honeymoon.webp",
        },
        {
          id: 8,
          src: "Entoto/well/fit.webp",
        },
        {
          id: 9,
          src: "Entoto/din/TheMarksmanBar&Grill.webp",
        },
        {
          id: 10,
          src: "Entoto/adv/1.webp",
        },
        {
          id: 11,
          src: "Entoto/event/s4.webp",
        },
        {
          id: 12,
          src: "Entoto/din/TheRidersRanch.webp",
        },
        {
          id: 13,
          src: "Entoto/event/s2.webp",
        },
        {
          id: 14,
          src: "Entoto/din/PitStopBar&Grill.webp",
        },
        {
          id: 15,
          src: "Entoto/din/EntotoPeakRestaurant.webp",
        },
      ],

      footer: {
        title: "Kuriftu Resort & Spa Entoto",
        second: {
          first: "14.9 km from Addis Abeba Bole International Airport",
          second: "Entoto Park",
          thrid: "Ethiopia",
        },
        thrid: {
          first: "Contact us on our direct phone line 9693",
          second: "Reception Desk +251905061020",
          thrid: "Email us at booking@kurifturesorts.com",
        },
        fourth: {
          url: "https://www.google.com/maps/dir//Kuriftu+Restaurant+in+Entoto+Park+Gulele+8%2F16+Ethiopia/@9.0846279,38.7383589,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x164b8f84811f84a1:0x336681194adaaef!2m2!1d38.7383589!2d9.0846279",
        },
      },
    };
  },
};
</script>

<style></style>
