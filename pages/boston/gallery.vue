<template>
  <div>
    <HeaderApp />
    <Destinav base="" class="boston-nav" home="/boston" dir="Boston" />
    <Gallery :gallery="gallery" />
    <BishFooter :footer="footer" />
    <Sticky page="boston" />
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
        {
          id: 9,
          src: "boston/gallery/1.jpg",
        },
        {
          id: 10,
          src: "boston/gallery/2.jpg",
        },
        {
          id: 11,
          src: "boston/gallery/3.jpg",
        },
        {
          id: 12,
          src: "boston/gallery/4.jpg",
        },
        {
          id: 13,
          src: "boston/gallery/5.jpg",
        },
        {
          id: 14,
          src: "boston/gallery/6.jpg",
        },
        {
          id: 15,
          src: "boston/gallery/7.jpg",
        },
        {
          id: 16,
          src: "boston/gallery/8.jpg",
        },
        {
          id: 17,
          src: "boston/gallery/9.jpg",
        },
        {
          id: 18,
          src: "boston/gallery/10.jpg",
        },
        {
          id: 19,
          src: "boston/gallery/11.jpg",
        },
        {
          id: 20,
          src: "boston/gallery/12.jpg",
        },
        {
          id: 21,
          src: "boston/gallery/13.jpg",
        },
        {
          id: 22,
          src: "boston/gallery/14.jpg",
        },
        {
          id: 23,
          src: "boston/gallery/15.jpg",
        },
        {
          id: 24,
          src: "boston/gallery/16.jpg",
        },
        {
          id: 25,
          src: "boston/gallery/17.jpg",
        },
        {
          id: 26,
          src: "boston/gallery/18.jpg",
        },
        {
          id: 27,
          src: "boston/gallery/19.jpg",
        },
        {
          id: 28,
          src: "boston/gallery/20.jpg",
        },
        {
          id: 29,
          src: "boston/gallery/21.jpg",
        },
        {
          id: 30,
          src: "boston/gallery/22.jpg",
        },
        {
          id: 31,
          src: "boston/gallery/23.jpg",
        },
        {
          id: 32,
          src: "boston/gallery/24.jpg",
        },
        {
          id: 30,
          src: "boston/gallery/25.jpg",
        },
        {
          id: 31,
          src: "boston/gallery/26.jpg",
        },
        {
          id: 32,
          src: "boston/gallery/27.jpg",
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
