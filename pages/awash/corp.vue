<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/awash" dir="Awash" />
    <Corporate :corp="corp" />
    <BishFooter :footer="footer" />
    <Sticky path="awash" />
  </div>
</template>

<script>
import Corporate from "../../components/Corporate.vue";
export default {
  components: { Corporate },
  data() {
    return {
      corp: {
        slides: ["awash/corp/co.webp", "awash/corp/co2.webp"],
        heroTitle: "Corporate Experience at Kuriftu Resort & Spa Awash Falls ",
        heroSubTitle: "Corporate Experience ",
        heroText: `Kuriftu Awash Falls provides corporate clients a sense of exclusivity while tucked away in the solitude of Awash National Park `,
        heroLink: "/event#enquiry-form",
        heroUrl: "Make an enquiry",
        feature: {
          img: "awash/corp/Co3.webp",
          title: "Corporate Rate Agreement",
          text: `Let us take care of your teams by rejuvinating and stregthening their relations with one another to optimize their level of efficiency by becoming corporate clients -  having access to our extensive list of activities, destinations and experineces within the wellness space will help companies reap the benefits.
Join the Kuriftu Family by making an enquiry with our Corporate Sales Team and we will customize your membership accordingly!`,
          uri: "/event#enquiry-form",
          link: "Make an enquiry",
        },
        Lfeature: {
          img: "awash/corp/co2.webp",
          title: "Corporate Retreat",
          text: `Show appreciation to your teams by treating them to a private getaway to escape everyday life. They deserve it don't they? `,
          uri: "/event#enquiry-form",
          link: "Make an enquiry",
        },
        feature1: {
          img: "awash/corp/co.webp",
          title: "Host a meeting or Conference",
          text: `Allow us to get creative with meeting and conference spaces in this small, but luxurious destination - whether is be booking the Presidential Suite to facilitate meetings for teams indoors or on the terrace showcasing the best view of the resort, or reserving the pool deck beautifully shaded - the choice is yours! `,
          uri: "/event#enquiry-form",
          link: "Make an enquiry",
        },

        other: [
          {
            img: "awash/corp/Menu&Catering.webp",
            title: "Menu & Catering",
            text: `Our resort caters to your choice of dishes and plates for your meetings and retreats `,
          },
          {
            img: "awash/corp/SpaceOrganization.webp",
            title: "Space organization",
            text: `Based on your needs our resort provides different arrangements of space. `,
          },
          {
            img: "awash/corp/ClosingEvent.webp",
            title: "Closing event",
            text: `On your last day, Our resort provides a memorable ceremony to commemorate your time with us. `,
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
