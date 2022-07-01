<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/bishoftu" dir="Bishoftu" />
    <Corporate :corp="corp" />
    <BishFooter :footer="footer" />
    <Sticky path="bishoftu" />
  </div>
</template>

<script>
import Corporate from "../../components/Corporate.vue";
export default {
  components: { Corporate },
  data() {
    return {
      corp: {
        slides: [
          "bishoftu/corp/1.webp",
          "bishoftu/corp/2.webp",
          "bishoftu/corp/3.webp",
          "bishoftu/corp/4.webp",
          "bishoftu/corp/5.webp",
          "bishoftu/corp/6.webp",
          "bishoftu/corp/7.webp",
        ],
        heroTitle: "Corporate at Kuriftu Resort & Spa Bishoftu",
        heroSubTitle: "Corporate at Kuriftu Resort & Spa Bishoftu",
        heroText: `Kuriftu Bishoftu is the most sought after conference and retreat destination in the country. With the tranquil atmosphere that surrounds this resort and proximity to the capital, corporate clients are able to take full advantage of their benefits. Our team places value on the needs of each individual, curating the ultimate getaway`,
        heroLink: "/event#enquiry-form",
        heroUrl: "Make an enquiry",
        feature: {
          img: "bishoftu/corp/1F.webp",
          title: "Corporate Rate Agreement",
          text: `Let us take care of your teams by rejuvinating and stregthening their relations with one another to optimize their level of efficiency by becoming corporate clients -  having access to our extensive list of activities, destinations and experineces within the wellness space will help companies reap the benefits.
Join the Kuriftu Family by making an enquiry with our Corporate Sales Team and we will customize your membership accordingly!`,
          uri: "/event#enquiry-form",
          link: "Make an enquiry",
        },
        Lfeature: {
          img: "bishoftu/corp/2F.webp",
          title: "Corporate Retreat",
          text: `Treat your team to a well deserved adventure at Kuriftu Bishoftu - our team can curate the perfect experience ranging from outdoor meetings in multiple spaces including our conference hall venue, adventurous activities as ice breakers and orientation for new staff, rejuvinating spa services to relax the mind, and many more `,
          uri: "/event#enquiry-form",
          link: "Make an enquiry",
        },
        feature1: {
          img: "bishoftu/corp/3F.webp",
          title: "Host a Meeting or Conference",
          text: `Allow us to host your companies conference, meetings or events in one of our four conference halls. Break out sessions can be facilitated in the surrounding cabanas for an alternative experience in the outdoors `,
          uri: "/event#enquiry-form",
          link: "Make an enquiry",
        },
        venues: [
          {
            id: 1,
            img: "bishoftu/corp/1.webp",
            title: "Balambaras Hall",
            text: `The Balambaras hall is the biggest hall in our vicinity, and it has the capacity to hold 120 people at once.`,
          },
          {
            id: 2,
            img: "bishoftu/corp/2.webp",
            title: "Tiruwark Hall",
            text: `Tiruwark Hall is our  smallest hall, with the capacity of hollding 20 people at once.`,
          },
          {
            id: 3,
            img: "bishoftu/corp/3.webp",
            title: "Meantwab Hall",
            text: `Named after one of Ethiopia's queens, Menatwab hall has the capacity to hold 35 people. `,
          },
          {
            id: 4,
            img: "bishoftu/corp/4.webp",
            title: "Girum Hall",
            text: `Girum Hall is the second biggest hall, at our resort, with the capacity of serving 40 people at once.  `,
          },
        ],
        other: [
          {
            img: "bishoftu/corp/catering.webp",
            title: "Menu & Catering",
            text: `Our resort caters to your choice of dishes and plates for your meetings and retreats `,
          },
          {
            img: "bishoftu/corp/1O.webp",
            title: "Space organization",
            text: `Based on your needs our resort provides different arrangements of space. `,
          },
          {
            img: "bishoftu/corp/2O.webp",
            title: "Closing event",
            text: `On your last day, Our resort provides a memorable ceremony to commemorate your time with us. `,
          },
        ],
      },
      footer: {
        title: "Kuriftu Resort & Spa Bishoftu",
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
          url: "https://www.google.com/maps/dir//Kuriftu+Resort+%26+Spa+Bishoftu+kebeke+15+Bishoftu+Ethiopia/@8.7802619,39.0028661,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x164b0cba1728a73d:0x44f92b98676731e7!2m2!1d39.0028661!2d8.7802619",
        },
      },
    };
  },
};
</script>

<style>
</style>
