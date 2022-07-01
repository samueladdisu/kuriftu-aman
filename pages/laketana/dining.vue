<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/laketana" dir="Lake Tana" />
    <Dining :dining="dining" />
    <BishFooter :footer="footer" />
    <Sticky path="tana" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dining: {
        slides: [
          "laketana/dining/3.webp",
          "laketana/dining/2.webp",
          "laketana/dining/1.webp",
          "laketana/dining/4.webp",
        ],
        heroTitle: "Dining at Kuriftu Resort & Spa Lake Tana",
        heroSubTitle: "kuriftu resort & spa lake tana dining",
        heroText: `Simple yet elegant - the Tana Lakefront Restaurant meets the culinary desires of all guests `,
        feature: {
          img: "laketana/dining/1.webp",
          title: "Tana Lakefront Restaurant ",
          text: `This naturally structured restaurant appeals to the eyes of nature based travellers who seek a natural aesthetic from every element of the restaurant `,
          uri: "#",
          link: "view menu",
        },
        other: [
          {
            img: "laketana/dining/2.webp",
            title: "Kuriftu Buffet",
            text: `Serve yourself with our various types of buffets which you can enjoy at our resort`,
          },
          {
            img: "laketana/dining/3.webp",
            title: "Treat by the porch",
            text: `A treat for the eyes and the stomach!  `,
          },
          {
            img: "laketana/dining/4.webp",
            title: "Reserve a Table",
            text: `Let us know beforehand so that we can save you the best sit in the house.`,
          },
        ],
        reserve: {
          tel: "+251920959797",
          email: "booking@kurifturesorts.com",
        },
      },
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
