<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/awash" dir="Awash" />
    <Exp :exp="exp" />
    <BishFooter :footer="footer" />
    <Sticky path="awash" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      exp: {
        slides: [
          "awash/exp/Experience.webp",
          "awash/acc/presidential/pre2.webp",
          "awash/awash-cover.webp",
          "awash/acc/Executive/Executive.webp",
        ],
        heroTitle: "Experience at Kuriftu Resort & Spa Awash Falls",
        heroSubTitle: "Awash Nation Park",
        heroText: `Kuriftu Resort Awash Falls provides a limited number of nature based activities that compliment the national park `,
        feature: {
          img: "awash/exp/CamelRide.webp",
          // subtitle: "glamping",
          title: "Camel Ride",
          text: `Venture into the depths of the national park on a relaxing camel ride tour!`,
          uri: "/",
          link: "Explore",
        },
        highlight: {
          img1: "awash/exp/WildlifeViewing.webp",
          img2: "awash/exp/Yoga.webp",
          img3: "awash/exp/Spa.webp",
          title1: "Widlife Viewing",
          text1: `Crocodiles and Monitor Lizards are commonly seen at the base of the waterfall or on the rocky surrounding structures. Follow the path down to get a better look but be sure to keep your distance from any wild animals out of respect for the environment.
Keep an eye out for the vast number of bird species located around the park and see if you can spot a Lesser / Greater Kudu while treking!`,
          title2: "Hiking",
          text2: `Enjoy a stroll in the late afternoon or early morning, before the Awash sun is in full heat, by the side of the river or through the park. A chance to clear your mind, and get in touch with nature.!`,
          title3: "Yoga",
          text3: `A healing process that leads to more centeredness and less distress. Sunrise and sunset yoga are offered on weekends at Kuriftu Awash Falls, a time to perfectly harmonize the mind and body.`,
          title4: "Mountain Biking",
          text4: `Get your heart pumping and your blood circulating! Pave a trail and exploe the Awash National Park - get in touch with your adventurous side`,
          title5: "Spa",
          text5: `Relax and unwind - Let us pamper you in our unique massage rooms overlooking the river, natural warm air infusing with our in-house mixed aroma and the soothing sound of the waterfall.`,
        },
        other: [
          {
            img: "bishoftu/acc/pre4.webp",
            title: "Breakfast in the desert",
            text: `A little something from our breakfast menu for everyone to enjoy while taking in the early light and fresh air.`,
          },

          {
            img: "bishoftu/acc/pre2.webp",
            title: "Private event",
            text: `Plan a celebration extravaganza with friends and family!`,
          },
        ],
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
          url: "https://www.google.com/maps/dir//Kuriftu+Resort+%26+Spa+Awash+Falls+awash+park+Awash+Ethiopia/@8.8430524,40.0122975,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x163593fea245879f:0xca93c0e4241369ec!2m2!1d40.0122975!2d8.8430524",
        },
      },
    };
  },
};
</script>

<style>
</style>
