<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/laketana" dir="Lake Tana" />
    <Corporate :corp="corp" />
    <BishFooter :footer="footer" />
     <Sticky path="tana" />
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
          "laketana/corp/ConferenceHall.webp",
          "laketana/corp/CorporateMembership.webp",
          "laketana/corp/CorporateRetreat.webp",
        ],
        heroTitle: "Corporate at Kuriftu Resort & Spa Lake Tana",
        heroSubTitle: "Corporate at Kuriftu Resort & Spa Lake Tana",
        heroText: `With the tranquil atmosphere that surrounds this resort, corporate clients are able to take full advantage of their benefits. Our team places value on the needs of each individual, curating the ultimate getaway`,
        heroLink: "#",
        heroUrl: "Make an enquiry",
        feature: {
          img: "laketana/corp/ConferenceHall.webp",
          title: "Corporate Rate Agreement",
          text: `Let us take care of your teams by rejuvinating and stregthening their relations with one another to optimize their level of efficiency by becoming corporate clients -  having access to our extensive list of activities, destinations and experineces within the wellness space will help companies reap the benefits. Join the Kuriftu Family by making an enquiry with our Corporate Sales Team and we will customize your membership accordingly!`,
          uri: "#",
          link: "Make an enquiry",
        },
        Lfeature: {
          img: "laketana/corp/CorporateMembership.webp",
          title: "Corporate membership",
          text: `Treat your team to a wild adventure at Kuriftu Entoto Adventure Park - our team can curate the perfect experience ranging from outdoor meetings in our Hammock Village, adventurous activities as ice breakers and orientation for new staff, rejuvinating spa services to relax the mind, and many more `,
          uri: "#",
          link: "Make an enquiry",
        },
        feature1: {
          img: "laketana/corp/CorporateRetreat.webp",
          title: "Corporate Retreat",
          text: `Allow us to host your companies conference, meetings or events in one of our four conference halls. Break out sessions can be facilitated in the surrounding cabanas for an alternative experience in the outdoors `,
          uri: "#",
          link: "Make an enquiry",
        },
        Lfeature: {
          img: "laketana/corp/CorporateMembership.webp",
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
            img: "laketana/dining/2.webp",
            title: "Menu & Catering",
            text: `Our resort caters to your choice of dishes and plates for your meetings and retreats `,
          },
          {
            img: "laketana/corp/CorporateMembership.webp",
            title: "Space organization",
            text: `Based on your needs our resort provides different arrangements of space. `,
          },
          {
            img: "laketana/corp/ConferenceHall.webp",
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
          url: "https://www.google.com/maps/dir//Kuriftu+Resort+and+Spa+Bahir+Dar+Bahir+Dar+Ethiopia/@11.9262507,37.2958219,10.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1644cde2a39aad09:0xe0ed4292e70a9eef!2m2!1d37.3837014!2d11.5984451",
        },
      },
    };
  },
};
</script>

<style>
</style>
