<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/laketana" dir="Lake Tana" />
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
          "bishoftu/corp/1.webp",
          "bishoftu/corp/2.webp",
          "bishoftu/corp/3.webp",
          "bishoftu/corp/4.webp",
          "bishoftu/corp/5.webp",
          "bishoftu/corp/6.webp",
          "bishoftu/corp/7.webp",
        ],
        heroTitle: "Corporate at Kuriftu Resort & Spa Lake Tana",
        heroSubTitle: "Corporate at Kuriftu Resort & Spa Lake Tana",
        heroText: `With the tranquil atmosphere that surrounds this resort, corporate clients are able to take full advantage of their benefits. Our team places value on the needs of each individual, curating the ultimate getaway`,
        heroLink: "#",
        heroUrl: "Make an enquiry",
        feature: {
          img: "bishoftu/corp/1F.webp",
          title: "Corporate Rate Agreement",
          text: `Let us take care of your teams by rejuvinating and stregthening their relations with one another to optimize their level of efficiency by becoming corporate clients -  having access to our extensive list of activities, destinations and experineces within the wellness space will help companies reap the benefits. Join the Kuriftu Family by making an enquiry with our Corporate Sales Team and we will customize your membership accordingly!`,
          uri: "#",
          link: "Make an enquiry",
        },
        Lfeature: {
          img: "bishoftu/corp/2F.webp",
          title: "Corporate membership",
          text: `Treat your team to a wild adventure at Kuriftu Entoto Adventure Park - our team can curate the perfect experience ranging from outdoor meetings in our Hammock Village, adventurous activities as ice breakers and orientation for new staff, rejuvinating spa services to relax the mind, and many more `,
          uri: "#",
          link: "Make an enquiry",
        },
        feature1: {
          img: "bishoftu/corp/3F.webp",
          title: "Corporate Retreat",
          text: `Allow us to host your companies conference, meetings or events in one of our four conference halls. Break out sessions can be facilitated in the surrounding cabanas for an alternative experience in the outdoors `,
          uri: "#",
          link: "Make an enquiry",
        },
        Lfeature: {
          img: "bishoftu/corp/3F.webp",
          title: "Host a Meeting or Conference",
          text: `Thinking of hosting an event? Give us a call and our team can help plan your very own get-together, anniversary, birthday party, family trip - basically anything!`,
          uri: "#",
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
            title: "Conference Hall",
            text: `Our conference hall accommodates up to 20 people - fostering a closer bond for those participating in any scheduled experince, whether it be a retreat or meeting.`,
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
