<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/awash" dir="Awash" />
    <Well :well="well" />
    <BishFooter :footer="footer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      well: {
        slides: [
          "awash/well/wellmain.webp",
          "awash/well/wellsecond.webp",
         "awash/well/slide2.webp",
          "awash/well/slide3.webp",
          "awash/well/slide4.webp",
      
        ],
        heroTitle: "Wellness at Kurftu Awash Falls ",
        heroSubTitle: "Kuriftu Resort & Spa bishoftu wellness",
        heroText: `Our Spa offers unique massage rooms located on the banks of the Awash River where guests will have the opportunity to relax to the sound of the waterfall as their senses are awakened with aromas.`,
        // feature: {
        //   img: "featured.webp",
        //   subtitle: "glamping",
        //   title: "Fitness",
        //   text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sint consequatur, doloremque ea exercitationem delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam`,
        //   uri: "/",
        //   link: "View full experience guide",
        // },
        highlight: {
          img1: "featured.webp",
          img2:  "awash/well/long1.webp",
          img3: "awash/well/long2.webp",
          title1: "Relax, Rebalance & Restore",
          text1: `Our focus is to have guests reconnect nature at its core with minimal distractions `,
          title2: "Full-Day retreats",
          text2: `Take the weekend to soak up the sun, join our sunrise and sunset yoga, lounge in the dipping pool, book an evening massage, and end day with a beautiful candlelit dinner `,
          title3: "Rest easy experience",
          text3: `Give your body what it ultimately craves - rest `,
          uri: "/",
        },
        amenities: ["Yoga (Weekends)", "Dipping Pool", "Jacuzzi"],
        amenities1: ["Massage", "Dirt Biking", ],
        amenities2: ["Outdoor day bed","Hiking" ],
        other: [
          {
            img: "bishoftu/acc/pre4.webp",
            title: "Lequanda",
            text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
          },
          {
            img: "bishoftu/acc/pre1.webp",
            title: "Bird watching",
            text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
          },
          {
            img: "bishoftu/acc/pre2.webp",
            title: "one-bedroom lake view",
            text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
          },
          {
            img: "bishoftu/acc/pre3.webp",
            title: "one-bedroom lake view",
            text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
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
          url: "/",
        },
      },
    };
  },
};
</script>

<style>
</style>
