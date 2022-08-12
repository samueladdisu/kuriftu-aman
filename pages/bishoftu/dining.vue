<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/bishoftu" dir="Bishoftu" />
    <Dining :dining="dining" />
    <BishFooter :footer="footer" />
    <Sticky path="bishoftu" />
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
        heroTitle: "Dining at Kuriftu Resort & Spa bishoftu",
        heroSubTitle: "kuriftu resort & spa bishoftu dining",
        heroText: `Ethiopia's wide variety of culture results in an endless palate of flavors from around the world - our aim is to incorporate mixed cuisine from traditional injera to international dishes under the same roof! Built and designed by our crafty Kuriftu Woodwork team, each restaurant showcases our work in manipulation of natural materials such as wood, rope, stone, brick and bamboo.`,
        feature: {
          img: "bishoftu/dining/LakeFrontF.webp",
          title: "Lakefront Restaurant ",
          text: `Perfectly situated over the banks of Lake Kuritfu lays our signature Lakefront Restaurant - decorated with white washed mosiac connected to the infinity pool above, massive art showcasing daily life in Bishoftu, and an incredible backdrop of the lake`,
          pdf: "/BishoftuWebsiteMenuAugust,2022.pdf",
          link: "view menu",
        },
        Lfeature: {
          img: "bishoftu/dining/CabbanaF.webp",
          title: "The Cabana Restaurant & Bar",
          text: `In an ecosystem flourishing with nature, The Cabana Restaurant & Bar includes a special aesthetic of a Japanese inspired Koi Fish Pond. Enjoy a meal amidst this oasis of greenery and relax by the shaded cabanas overlooking the lake`,
          pdf: "/BishoftuWebsiteMenuAugust,2022.pdf",
          link: "view menu",
        },
        feature1: {
          img: "bishoftu/dining/LequandaF.webp",
          title: "Lequanda",
          text: `Indulge in our selection of prime meat cuts - whether it be kitfo, tibs, or kurt, Kuriftu Lequanda has the traditional touch for you!`,
          pdf: "/lequanda_new.pdf",
          link: "view menu",
        },
        Lfeature1: {
          img: "bishoftu/dining/WaterparkDinerF.webp",
          title: "Waterpark Diner",
          text: `Dip and dine at our Waterpark Diner! From standard table structures to outdoor cabanas with a backdrop of the rides, experience arefreshing / fresh meal with a splash! `,
          pdf: "/BishoftuWebsiteMenuAugust,2022.pdf",
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
            title: "Waterpark Cabanas",
            text: `Lay back and relax in our perfectly shaded cabanas while watching your family and friends venture in water!`,
          },
        ],
        reserve: {
          tel: "+251924949494",
          email: "booking@kurifturesorts.com",
        },
      },
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
