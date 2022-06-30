<template>
  <div>
    <HeaderApp />
    <Destinav base="" class="boston-nav" home="/boston" dir="Boston" />
    <Gallery :gallery="gallery" />
    <BishFooter :footer="footer" />
    <Sticky path="awash" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery: [
        {
          id: 1,
          src: "boston/slider/barber.webp",
        },
        {
          id: 2,
          src: "boston/slider/gallery2.webp",
        },
        {
          id: 3,
          src: "boston/slider/recieption.webp",
        },
        {
          id: 4,
          src: "boston/slider/suana.webp",
        },
        {
          id: 5,
          src: "boston/Facial.webp",
        },
        {
          id: 6,
          src: "boston/HairSalon.webp",
        },
        {
          id: 7,
          src: "boston/ManiPedi.webp",
        },
        {
          id: 8,
          src: "boston/Wax.webp",
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

<style lang="scss">
@include responsive($xl) {
  .boston-nav {
    .container {
      .wrapper {
        .link-destination {
          .line {
            width: 30% !important;
          }
        }
      }
    }
  }
}
</style>
