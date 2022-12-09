<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/laketana" dir="Lake Tana" />
    <Gallery :gallery="gallery" />
    <BishFooter :footer="footer" />
    <Sticky path="tana" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery: [
        {
          id: 1,
          src: "laketana/event/soci.webp",
        },
        {
          id: 2,
          src: "laketana/event/bd.webp",
        },
        {
          id: 3,
          src: "laketana/acc/gardenview/1.webp",
        },
        {
          id: 4,
          src: "laketana/exp/BirdWatching.webp",
        },
        {
          id: 5,
          src: "laketana/dining/3.webp",
        },
        {
          id: 6,
          src: "laketana/corp/ConferenceHall.webp",
        },
        {
          id: 7,
          src: "laketana/event/LakeSide.webp",
        },
        {
          id: 8,
          src: "laketana/event/Cabana.webp",
        },
        {
          id: 9,
          src: "laketana/exp/TripToTheFalls.webp",
        },
        {
          id: 10,
          src: "laketana/exp/CabanaDinig.webp",
        },
        {
          id: 11,
          src: "laketana/event/soci.webp",
        },
      ],
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
