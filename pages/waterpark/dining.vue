<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/waterpark" dir="Water park" />
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
          "bishoftu/acc/pre5.webp",
          "bishoftu/acc/pre6.webp",
          "bishoftu/acc/pre7.webp",
          "bishoftu/acc/pre8.webp",
        ],
        heroTitle: "Dinning at Kuriftu Waterpark",
        heroSubTitle: "Dinning at Kuriftu Waterpark",
        heroText: `The dining experience at Kuriftu Resort & Spa restaurant has never been more fulfilling.`,
        feature: {
          img: "waterpark/Plaza.webp",
          title: "Plaza",
          text: `Dine at our food court beside the cool, fresh water and the fun rides at our water park.`,
          uri: "/",
          link: "view menu",
        },
        other: [
          {
            img: "waterpark/KuriftuBuffet.webp",
            title: "Kuriftu Buffet",
            text: `Serve yourself with our various types of buffets which you can enjoy at our resort`,
          },
          {
            img: "waterpark/TreatByThePorch.webp",
            title: "Treat by the porch",
            text: `A treat for the eyes and the stomach!`,
          },
          {
            img: "waterpark/TreatByThePorch.webp",
            title: "Reserve a Table",
            text: `Let us know beforehand so that we can save you the best sit in the house.  `,
          },
        ],
      },
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
          url: "/",
        },
      },
    };
  },
};
</script>

<style>
</style>
