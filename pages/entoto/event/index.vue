<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/entoto" dir="Entoto" />
    <Event :event="event" />
    <BishFooter :footer="footer" />
    <Sticky path="entoto" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: {
        slides: [
          "Entoto/event/s1.webp",
          "Entoto/event/s2.webp",
          "Entoto/event/s3.webp",
          "Entoto/event/s4.webp",
        ],
        heroTitle: "Celebrations at Kuriftu Entoto Adventure Park ",
        heroSubTitle: "Celebrations at Kuriftu Entoto Adventure Park",
        heroText: `Whether it be a special anniversary, family reunion or milestone birthday, Kuriftu Entoto Adventure Park has the ability to facilitate any celebration through our many restaurants, experiences and activities in the scenic environment of the Entoto Mountain - The Kuriftu team is dedicated to crafting extraordinay shared experineces and nights to remember `,
        feature: {
          img: "Entoto/event/Wedding.webp",
          title: "Weddings",
          text: `Seek to be unique in this once in a lifetime occassion as the union between partners is sacred - just imagine echanging your vows in the midst of the forest greenery overlooking the city. Contact our sales team for a visit, we'll make it worth the trip!`,
          uri: "event/wed",
          link: "explore",
        },
        Lfeature: {
          img: "Entoto/event/Birthday.webp",
          title: "Birthdays",
          text: `Let us celebrate your life and future in a fun and special way with your loved ones. browse through our selection of birthday packages and more!`,
          uri: "/event#enquiry-form",
          link: "Make an enquiry",
        },
        Rfeature: {
          img: "Entoto/event/SocialEvent.webp",
          title: "Social events",
          text: `Thinking of hosting an event? Give us a call and our team can help plan your very own get-together, anniversary, birthday party, family trip - basically anything!`,
          uri: "/event#enquiry-form",
          link: "Make an enquiry",
        },
        venues: [
          {
            id: 1,
            img: "Entoto/event/WeddingVenue.webp",
            title: "Wedding Venue",
            text: `Our exclusive venue for weddings has everything from glamorous decorations, to buffets, dancefloors, outdoor seating, unique landscape and more  `,
          },
          {
            id: 2,
            img: "Entoto/event/Open Air.webp",
            title: "Open Air Spaces",
            text: `With the different restaurants and activity areas located within the Entoto Park Kuriftu Resort, you can have your celebration at any of our locations`,
          },
          {
            id: 3,
            img: "Entoto/event/InDoor.webp",
            title: "In-door Spaces",
            text: `Hosting an event in a closed space? With our restaurant spaces or our multi-purpose cabin, you can entertain guests surrounded by the beautiful landscape `,
          },
          {
            id: 4,
            img: "Entoto/event/Open Air.webp",
            title: "Garden",
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sint consequatur, doloremque ea exercitationem delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam`,
          },
        ],
        other: [
          {
            img: "Entoto/event/Menu&Catering.webp",
            title: "Menu & Catering",
            text: `Our resort caters to your choice of dishes and plates for your celebrations and gatherings - whether it be a customized menu or a choice between our different catering packages, the opion is yours `,
          },
          {
            img: "Entoto/event/EventConsulting.webp",
            title: "Event Consultation",
            text: `Reach out to receive expert advice and consulting on your events provided by our Sales and Banquest team `,
          },
          {
            img: "Entoto/event/Entertainment.webp",
            title: "Entertainment",
            text: `Let us plan a way to make your celebrations fun and exciting.`,
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
