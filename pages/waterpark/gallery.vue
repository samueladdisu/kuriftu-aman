<template>
  <div>
    <HeaderApp />
    <Destinav
      base=""
      home="/waterpark"
      class="waterpark-nav"
      dir="Water park"
    />
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
      ],
      footer: {
        title: "Kuriftu WaterPark",
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
          url: "https://www.google.com/maps/dir/9,39.5/kuriftu+waterpark/@8.8907576,38.9712757,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x164b0da06ed09677:0x145b79037fab1f1c!2m2!1d39.0029434!2d8.7817245",
        },
      },
    };
  },
};
</script>

<style lang="scss">
@include responsive($xl) {
  .waterpark-nav {
    .container {
      .wrapper {
        .link-destination {
          .line {
            width: 40% !important;
          }
        }
      }
    }
  }
}
</style>
