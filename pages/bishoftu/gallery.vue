<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/bishoftu" dir="Bishoftu" />
    <Gallery :gallery="gallery" />
    <BishFooter :footer="footer" />
    <Sticky path="bishoftu" />
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
        },
        {
          id: 2,
          src: "waterpark2.jpg",
        },
        {
          id: 3,
          src: "kuriftu dec 22-5391-min (1).jpg",
        },
        {
          id: 4,
          src: "kuriftu dec 22-5422-min (1).jpg",
        },
        {
          id: 5,
          src: "_DSC5641 (2)-min.jpg",
        },
        {
          id: 6,
          src: "_DSC5351 (2)-min.jpg",
        },
        {
          id: 7,
          src: "_DSC5820 (2)-min.jpg",
        },
        {
          id: 8,
          src: "_DSC5400 (2)-min.jpg",
        },
        {
          id: 9,
          src: "kuriftu dec 22-5391-min (1).jpg",
        },
      ],
      footer: {
        title: "Kuriftu Resort & Spa Bishoftu",
        second: {
          first: "53.7 km from Addis Abeba Bole International Airport",
          second: "Lake Bishoftu",
          thrid: "Ethiopia",
        },
        thrid: {
          first: "Contact us on our direct phone line 9693",
          second: "Reception Desk +251924949494",
          thrid: "Email us at booking@kurifturesorts.com",
        },
        fourth: {
          url: "https://www.google.com/maps/dir//Kuriftu+Resort+%26+Spa+Bishoftu+kebeke+15+Bishoftu+Ethiopia/@8.7802619,39.0028661,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x164b0cba1728a73d:0x44f92b98676731e7!2m2!1d39.0028661!2d8.7802619",
        },
      },
    };
  },
};
</script>

<style>
</style>
