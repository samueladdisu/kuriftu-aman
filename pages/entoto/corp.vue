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
        heroTitle: "Corporate Experience at Kuriftu Entoto Adventure Park ",
        heroSubTitle: "Corporate Experience at Kuriftu Entoto Adventure Park ",
        heroText: `Kuriftu Entoto Adventure Park is the perfect destination for our corpoate clients to take full advantage of their benefits. From nature based conferences to company wide retreats, our team places value on the needs of each individual, curating the ultimate getaway`,
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
          text: `Allow us to host your companies conference, meetings or events in our Mountain Peak Restaurant. Break out sessions can be facilitated in the surrounding cabanas for an alternative experience `,
          uri: "/",
          link: "Make an enquiry",
        },
        venues: [
          {
            id: 1,
            img: "bishoftu/firstSlider/3.webp",
            title: "Multi-purpose Cabin",
            text: `In the middle of nature, a secluded meeting room is a perfect place for your meeting, training, or brainstorming session. With a capacity of 80 people (theatrical sitting) book your conference destination right here in the city yet away from the hustle and bustle.`,
          },
          {
            id: 2,
            img: "bishoftu/firstSlider/3.webp",
            title: "Entoto Peak Restaurant",
            text: `At the end of a long day of treking uphill lies our Mountain Peak Restaurant, a spacious dining hall with mixed cuisine and a variety of seating stations that overlook the incredible landscape. `,
          },
          {
            id: 3,
            img: "bishoftu/firstSlider/3.webp",
            title: "The Riders Ranch",
            text: `Enjoy our specialty Chekla Tibs while overlooking the horse stable and its track at The Riders Ranch.`,
          },
          {
            id: 4,
            img: "bishoftu/firstSlider/3.webp",
            title: "Castel Bar & Grill",
            text: `Nestled in the forest you'll find our open air Castel Wine Bar & Grill with the Rope Course literally overhead, this experience is like no other!`,
          },
          {
            id: 5,
            img: "bishoftu/firstSlider/3.webp",
            title: "The Marksman Bar & Grill",
            text: `Didn't hit bullseye? No sweat, take a breather before your next round at The Marksman Bar & Grill for the best burgers and fries on this side of the mountain`,
          },
          {
            id: 6,
            img: "bishoftu/firstSlider/3.webp",
            title: "Pit Stop Bar & Grill / Refuel",
            text: `Wind down from the rush of competing against your friends at Pit Stop Bar & Grill, just make sure whoever came last treats the team for a beer `,
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
