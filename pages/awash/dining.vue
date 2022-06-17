<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/awash" dir="Awash" />
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
        heroTitle: "Dinning at Kuriftu Resort & Spa Awash Falls",
        heroSubTitle: "Kuriftu Resort & Spa Awash Falls",
        heroText: `We at Kuriftu Awash Falls are delighted to present our latest innovation in the culinary experience`,
        feature: {
          img: "featured.webp",
          title: "THE FALLS RESTAURANT & BAR ",
          text: `Designed to highlight our unparalleled view of the park’s waterfall, The Falls Restaurant & Bar is decorated with natural light flooding the space with colorful accents, stone structures and brick elements, creating an organic vibrance for our guests to absorb. From top-brand liquor to signature cocktails and a set menu made-up of locally sourced ingredients, our dining experience fully encompasses our guests needs.`,
          uri: "/",
          link: "view menu",
        },
        Lfeature: {
          img: "featured.webp",
          title: "THE POOL BAR & GRILL",
          text: `We are excited to present our first Dipping Pool experience paired with our bar & grill on an elevated platform overlooking the waterfall. The perfect destination for a romantic getaway with picture perfect views from sunrise to sunset`,
          uri: "/",
          link: "view menu",
        },
   
      },
      footer: {
           title: "Kuriftu Resort & Spa Awash Falls",
        second: {
          first: "211 km from Addis Ababa Bole International Airport",
          second: "Awash Park",
          thrid: "Ethiopia",
        },
        thrid: {
          first: "Contact us on our direct phone line 9693",
          second: "Reception Desk +251944448800",
          thrid: "Email us at booking@kurifturesorts.com  ",
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
