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
          src: "dz-cover.jpg",
      title:"long",

        },
        {
          id: 2,

          src: "dz-cover.jpg",
      


        },
        {
          id: 3,
          src: "dz-cover.jpg",
        },
      ],
      gallery2: [
        {
          id: 1,
                  src: "waterpark2.jpg",

        },
        {
          id: 2,
          src: "waterpark2.jpg",

        },
        {
          id: 3,
                   src: "waterpark2.jpg",

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
