<template>
  <div>
    <HeaderApp />
    <Destinav base="awash/" home="awash/" dir="Awash" />
    <Dindex :index="index" />
    <Sticky path="awash" />
  </div>
</template>

<script>
import Destinav from "../../components/Destinav.vue";
export default {
  components: { Destinav },
  data() {
    return {
      index: {
        video: "722179226",

        bishTitle: {
          subTitle: "Awash National Park ",
          title: "Kuriftu Resort & Spa Awash Falls",
          text: `Located on the Southern tip of Awash National Park, our one-of-a-kind boutique resort suspended over a waterfall places guests at an elevation that is unique to our property. With views of crocodiles on the river bank, the refreshing mist from the edge of the falls paired with unmatched scenery, we offer the ultimate experience to our visitors`,
        },
        // slides
        photos: [
          "awash/firstSlider/1.webp",
          "awash/firstSlider/2.webp",
          "awash/firstSlider/3.webp",
          "awash/firstSlider/4.webp",
          "awash/firstSlider/5.webp",
          "awash/firstSlider/6.webp",
          "awash/firstSlider/7.webp",

          "awash/firstSlider/10.webp",
          "awash/firstSlider/9.webp",
        ],

        // acc cover image
        accImg: "awash/Accomodation1.webp",
        // acc content
        accTitle: {
          subTitle: "ACCOMODATION",
          title: "Surrounded by Nature",
          text: `Mindfully constructed to emphasize the dramatic backdrop and expansive connecting terraces - this 10 bedroom boutique resort takes luxury to the next level `,
          link: "view all accomodations",
          url: "awash/acc",
        },

        // destination highlight section
        highlight: [
          {
            id: 1,
            img: "awash/Experience.webp",
            subTitle: "EXPERIENCE ",
            title: "Experience ",
            text: `We are excited to present our first Dipping Pool experience paired with our Bar / Grill on an elevated platform overlooking the landscape. The perfect destination for a romantic getaway with picture - perfect views from sunrise to sunset`,
            uri: "awash/exp",
            url: "Explore",
          },
          {
            id: 2,
            img: "awash/Dinning.webp",
            subTitle: "DINNING ",
            title: "Waterfall Dining ",
            text: `Treat yourself and your loved ones to an unparralelled dining experience while listening to nothing but the natural rythm of the falls. With a carefully curated menu that meshes local culture and international cuisine, enjoy a mouth watering pallate of flavor! `,
            uri: "awash/dining",
            url: "Explore",
          },
          {
            id: 3,
            img: "awash/Wellness.webp",
            subTitle: "WELLNESS",
            title: "Refresh",
            text: `Bask in the warmth of the Awash sun, allow it to relax your mind and body as you rest in this peaceful space. WIth outdoor lounging beds and a simple spa that focuses on specialty massage, we encourage our guests to enjoy the simplicity of the natural landscape`,
            uri: "awash/well",
            url: "Explore",
          },
          {
            id: 4,
            img: "awash/CorporateExperience.webp",
            subTitle: "CORPORATE EXPERIENCE",
            title: "Corporate Team",
            text: `We seek to add value in the lives of our corporate partners by creating an escape from everyday life. As experts in the world of wellness, we understand the need for self relfection, team building, relaxation and the many activities that have proven to have successful impacts at work `,
            uri: "awash/corp",
            url: "Explore",
          },
          {
            id: 5,
            img: "awash/Celebration.webp",
            subTitle: "CELEBRATION",
            title: "A gift to remember",
            text: `From the calmness felt by the sounds of the gushing waterfall, the sparkle of the sunset as it hits the river bank, the warm air brushing against your skin; Kuriftu Awash Falls is the perfect destination to create beautiful lasting memories. Celebrate milestones in life emmersed in this remarkable scenery.`,
            uri: "awash/event",
            url: "Explore",
          },
          {
            id: 6,
            img: "awash/firstSlider/2.webp",
            subTitle: "GIFT VOUCHER",
            title: "Future travels",
            text: `Gift a friend or loved to an unforgettable stay - with personalized welcome notes made for each individual guest to intimate dining experiences surrounded by a team ready to cater to your every need, Kuriftu Awash Falls is the perfect way to show a loved one that you care`,
            uri: "awash/gift",
            url: "Explore",
          },
        ],
        // map section
        mapInfo: `211 km from Addis Abeba Bole International Airport`,
        iframe: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.391883705934!2d40.0101088153378!3d8.84305769430703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x163593fea245879f%3A0xca93c0e4241369ec!2sKuriftu%20Resort%20%26%20Spa%20Awash%20Falls!5e0!3m2!1sen!2sus!4v1655483107585!5m2!1sen!2sus`,
      },
    };
  },
};
</script>

<style>
</style>
