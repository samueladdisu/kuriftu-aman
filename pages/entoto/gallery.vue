<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/entoto" dir="Entoto" />
    <Gallery :gallery="gallery" :gallery2="gallery2" />
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
          src:    "Entoto/well/1.webp",


        },
        {
          id: 2,
          src:    "Entoto/well/2.webp",

        },
        {
          id: 3,
          src:    "Entoto/well/3.webp",
        },
         {
          id: 4,
          src:    "Entoto/well/4.webp",
        },
         {
          id: 5,
          src:    "Entoto/well/long.webp",
        },
         {
          id: 6,
          src:    "Entoto/well/long2.webp",
        },
         {
          id: 7,
          src:    "Entoto/well/wide.webp",
        },
          {
          id: 8,
          src:    "Entoto/well/fit.webp",
        },
          {
          id: 7,
          src:   "Entoto/exp/feature.webp",
        },
      ],
  
      footer: {
        title: "Kuriftu Resort & Spa Entoto",
        second: {
          first: "14.9 km from Addis Ababa Bole International Airport",
          second: "Entoto Park",
          thrid: "Ethiopia",
        },
        thrid: {
          first: "Contact us on our direct phone line 9693",
          second: "Reception Desk +251905061020",
          thrid: "Email us at booking@kurifturesorts.com",
        },
        fourth: {
          url: "/",
        },
      },
    };
  },
};
</script>

<style></style>
