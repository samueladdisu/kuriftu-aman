<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/entoto" dir="Entoto" />
    <Corporate :corp="corp" />
    <BishFooter :footer="footer" />
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
          "bishoftu/acc/pre5.webp",
          "bishoftu/acc/pre6.webp",
          "bishoftu/acc/pre7.webp",
          "bishoftu/acc/pre8.webp",
        ],
        heroTitle: "Corporate at Kuriftu Resort & Spa Bishoftu",
        heroSubTitle: "Corporate at Kuriftu Resort & Spa Bishoftu",
        heroText: `Kuriftu Bishoftu is the most sought after conference and retreat destination in the country. With the tranquil atmosphere that surrounds this resort and proximity to the capital, corporate clients are able to take full advantage of their benefits. Our team places value on the needs of each individual, curating the ultimate getaway`,
        heroLink: "/",
        heroUrl: "Make an enquiry",
        feature: {
          img: "featured.webp",
          title: "Corporate Rate Agreement",
          text: `Let us take care of your teams by rejuvinating and stregthening their relations with one another to optimize their level of efficiency by becoming corporate clients -  having access to our extensive list of activities, destinations and experineces within the wellness space will help companies reap the benefits.
Join the Kuriftu Family by making an enquiry with our Corporate Sales Team and we will customize your membership accordingly!`,
          uri: "/",
          link: "Make an enquiry",
        },
        Lfeature: {
          img: "featured.webp",
          title: "Corporate Retreat",
          text: `Treat your team to a wild adventure at Kuriftu Entoto Adventure Park - our team can curate the perfect experience ranging from outdoor meetings in our Hammock Village, adventurous activities as ice breakers and orientation for new staff, rejuvinating spa services to relax the mind, and many more `,
          uri: "/",
          link: "Make an enquiry",
        },
        feature1: {
          img: "featured.webp",
          title: "Host a Meeting or Conference",
          text: `Allow us to host your companies conference, meetings or events in one of our four conference halls. Break out sessions can be facilitated in the surrounding cabanas for an alternative experience in the outdoors `,
          uri: "/",
          link: "Make an enquiry",
        },
        venues: [
          {
            id: 1,
            img: "bishoftu/firstSlider/3.webp",
            title: "Balambaras Hall",
            text: `The Balambaras hall is the biggest hall in our vicinity, and it has the capacity to hold 120 people at once.`,
          },
          {
            id: 2,
            img: "bishoftu/firstSlider/3.webp",
            title: "Tiruwark Hall",
            text: `Tiruwark Hall is our  smallest hall, with the capacity of hollding 20 people at once.`,
          },
          {
            id: 3,
            img: "bishoftu/firstSlider/3.webp",
            title: "Meantwab Hall",
            text: `Named after one of Ethiopia's queens, Menatwab hall has the capacity to hold 35 people. `,
          },
          {
            id: 4,
            img: "bishoftu/firstSlider/3.webp",
            title: "Girum Hall",
            text: `Girum Hall is the second biggest hall, at our resort, with the capacity of serving 40 people at once.  `,
          },
        ],
        other: [
          {
            img: "bishoftu/firstSlider/1.webp",
            title: "Menu & Catering",
            text: `Our resort caters to your choice of dishes and plates for your meetings and retreats `,
          },
          {
            img: "bishoftu/firstSlider/1.webp",
            title: "Space organization",
            text: `Based on your needs our resort provides different arrangements of space. `,
          },
          {
            img: "bishoftu/firstSlider/1.webp",
            title: "Closing event",
            text: `On your last day, Our resort provides a memorable ceremony to commemorate your time with us. `,
          },
        ],
      },
      footer: {
        title: "Kuriftu Resort & Spa Entoto",
        second: {
          first: "14.9 km from Addis Ababa Bole International Airport",
          second: "Entoto Park",
          thrid: "Ethiopia",
        },
        thrid: {
          first: "Contact us on our direct phone line 9693",
          second: "Reception Desk +251905061020",
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
