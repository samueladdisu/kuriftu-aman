<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/awash" dir="Awash" />
    <Gallery :gallery="gallery" />
    <BishFooter :footer="footer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery: [
        {
          id: 1,
          src:  "awash/firstSlider/1.webp",
        },
        {
          id: 2,
          src:  "awash/firstSlider/2.webp",
        },
        {
          id: 3,
          src:  "awash/dining/TheFallsRestaurant&Bar.webp",
        },
         {
          id: 4,
          src:  "awash/firstSlider/4.webp",
        },
        {
          id: 5,
          src:  "awash/firstSlider/5.webp",
        },
        {
          id: 6,
          src:  "awash/firstSlider/6.webp",
        },
         {
          id: 7,
          src:  "awash/Accomodation1.webp",
        },
         {
          id: 8,
          src:  "awash/firstSlider/8.webp",
        },
         {
          id: 9,
          src:  "awash/firstSlider/9.webp",
        },
         {
          id: 10,
          src:  "awash/firstSlider/10.webp",
        },
         {
          id: 11,
          src: "awash/well/1.webp",
        },
         {
          id: 12,
          src:  "awash/well/3.webp",
        },
          {
          id: 13,
          src: "awash/acc/Presidential.webp",
        },
         {
          id: 14,
          src: "awash/awash-cover.webp",
        },
         {
          id: 15,
          src:"awash/acc/presidential/long.webp",
        },

    
      ],


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
          url: "/",
        },
      },
    };
  },
};
</script>

<style>
</style>
