<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/bishoftu" dir="Bishoftu" />
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
      ],
      footer: {
        title: "Kuriftu Resort & Spa Bishoftu",
        second: {
          first: "53.7 km from Addis Ababa Bole International Airport",
          second: "Lake Bishoftu",
          thrid: "Ethiopia",
        },
        thrid: {
          first: "Contact us on our direct phone line 9693",
          second: "Reception Desk +251924949494",
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

<style>
</style>
