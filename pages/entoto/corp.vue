<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/entoto" dir="Entoto" />
    <Corporate :corp="corp" />
    <BishFooter :footer="footer" />
    <Sticky path="entoto" />
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
          "Entoto/event/s5.webp",
          "Entoto/event/s2.webp",

          "Entoto/event/s7.webp",

          "Entoto/event/s6.webp",
        ],
        heroTitle: "Corporate Experience at Kuriftu Entoto Adventure Park ",
        heroSubTitle: "Corporate Experience at Kuriftu Entoto Adventure Park ",
        heroText: `Kuriftu Entoto Adventure Park is the perfect destination for our corpoate clients to take full advantage of their benefits. From nature based conferences to company wide retreats, our team places value on the needs of each individual, curating the ultimate getaway`,
        heroLink: "/event#enquiry-form",
        heroUrl: "Make an enquiry",
        feature: {
          img: "Entoto/event/s2.webp",
          title: "Corporate Rate Agreement",
          text: `Let us take care of your teams by rejuvinating and stregthening their relations with one another to optimize their level of efficiency by becoming corporate clients -  having access to our extensive list of activities, destinations and experineces within the wellness space will help companies reap the benefits.
Join the Kuriftu Family by making an enquiry with our Corporate Sales Team and we will customize your membership accordingly!`,
          uri: "/event#enquiry-form",
          link: "Make an enquiry",
        },
        Lfeature: {
          img: "Entoto/event/re.webp",
          title: "Corporate Retreat",
          text: `Treat your team to a wild adventure at Kuriftu Entoto Adventure Park - our team can curate the perfect experience ranging from outdoor meetings in our Hammock Village, adventurous activities as ice breakers and orientation for new staff, rejuvinating spa services to relax the mind, and many more `,
          uri: "/event#enquiry-form",
          link: "Make an enquiry",
        },
        feature1: {
          img: "Entoto/event/conf.webp",
          title: "Host a Meeting or Conference",
          text: `Allow us to host your companies conference, meetings or events in our Mountain Peak Restaurant. Break out sessions can be facilitated in the surrounding cabanas for an alternative experience `,
          uri: "/event#enquiry-form",
          link: "Make an enquiry",
        },
        venues: [
          {
            id: 1,
            img: "Entoto/event/MultiPurposeCabin.webp",
            title: "Multi-purpose Cabin",
            text: `In the middle of nature, a secluded meeting room is a perfect place for your meeting, training, or brainstorming session. With a capacity of 80 people (theatrical sitting) book your conference destination right here in the city yet away from the hustle and bustle.`,
          },
          {
            id: 2,
            img: "Entoto/din/EntotoPeakRestaurant.webp",
            title: "Entoto Peak Restaurant",
            text: `At the end of a long day of treking uphill lies our Mountain Peak Restaurant, a spacious dining hall with mixed cuisine and a variety of seating stations that overlook the incredible landscape. `,
          },
          {
            id: 3,
            img: "Entoto/din/TheRidersRanch.webp",
            title: "The Riders Ranch",
            text: `Enjoy our specialty Chekla Tibs while overlooking the horse stable and its track at The Riders Ranch.`,
          },
          {
            id: 4,
            img: "Entoto/din/CastelBar&Grill.webp",
            title: "Castel Bar & Grill",
            text: `Nestled in the forest you'll find our open air Castel Wine Bar & Grill with the Rope Course literally overhead, this experience is like no other!`,
          },
          {
            id: 5,
            img: "Entoto/din/TheMarksmanBar&Grill.webp",
            title: "The Marksman Bar & Grill",
            text: `Didn't hit bullseye? No sweat, take a breather before your next round at The Marksman Bar & Grill for the best burgers and fries on this side of the mountain`,
          },
          {
            id: 6,
            img: "Entoto/din/PitStopBar&Grill.webp",
            title: "Pit Stop Bar & Grill / Refuel",
            text: `Wind down from the rush of competing against your friends at Pit Stop Bar & Grill, just make sure whoever came last treats the team for a beer `,
          },
        ],
        other: [
          {
            img: "Entoto/event/Menu&Catering.webp",
            title: "Menu & Catering",
            text: `Our resort caters to your choice of dishes and plates for your meetings and retreats `,
          },
          {
            img: "Entoto/event/SpaceOrganization.webp",
            title: "Space organization",
            text: `Based on your needs our resort provides different arrangements of space. `,
          },
          {
            img: "Entoto/event/ClosingEvent.webp",
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
          url: "https://www.google.com/maps/dir//Kuriftu+Restaurant+in+Entoto+Park+Gulele+8%2F16+Ethiopia/@9.0846279,38.7383589,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x164b8f84811f84a1:0x336681194adaaef!2m2!1d38.7383589!2d9.0846279",
        },
      },
    };
  },
};
</script>

<style>
</style>
