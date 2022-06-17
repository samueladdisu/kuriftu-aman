<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/laketana" dir="Lake Tana" />
    <Dining :dining="dining" />
    <BishFooter :footer="footer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dining: {
        slides: [
          "bishoftu/dining/Cabbana.webp",
          "bishoftu/dining/KuriftuBuffet.webp",
          "bishoftu/dining/LakeFront.webp",
          "bishoftu/dining/Lequanda.webp",
          "bishoftu/dining/WaterparkCabanas.webp",
          "bishoftu/dining/WaterparkDiner.webp",
        ],
        heroTitle: "Dining at Kuriftu Resort & Spa Lake Tana",
        heroSubTitle: "kuriftu resort & spa lake tana dining",
        heroText: `Simple yet elegant - the Tana Lakefront Restaurant meets the culinary desires of all guests `,
        feature: {
          img: "bishoftu/dining/LakeFrontF.webp",
          title: "Tana Lakefront Restaurant ",
          text: `This naturally structured restaurant appeals to the eyes of nature based travellers who seek a natural aesthetic from every element of the restaurant `,
          uri: "#",
          link: "view menu",
        },
        other: [
          {
            img: "bishoftu/dining/KuriftuBuffetO.webp",
            title: "Kuriftu Buffet",
            text: `Serve yourself with our various types of buffets which you can enjoy at our resort`,
          },
          {
            img: "bishoftu/dining/WaterparkCabanasO.webp",
            title: "Treat by the porch",
            text: `A treat for the eyes and the stomach!  `,
          },
          {
            img: "bishoftu/dining/WaterparkCabanasO.webp",
            title: "Reserve a Table",
            text: `Let us know beforehand so that we can save you the best sit in the house.`,
          },
        ],
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
          url: "#",
        },
      },
    };
  },
};
</script>

<style>
</style>
