<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/entoto" dir="Entoto" />
    <Event :event="event" />
    <BishFooter :footer="footer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: {
        slides: [
           
             "Entoto/acc/pre/2.webp",
              "Entoto/acc/pre/3.webp",
        
        ],
        heroTitle: "Celebrations at Kuriftu Entoto Adventure Park ",
        heroSubTitle: "Celebrations at Kuriftu Entoto Adventure Park",
        heroText: `Whether it be a special anniversary, family reunion or milestone birthday, Kuriftu Entoto Adventure Park has the ability to facilitate any celebration through our many restaurants, experiences and activities in the scenic environment of the Entoto Mountain - The Kuriftu team is dedicated to crafting extraordinay shared experineces and nights to remember `,
        feature: {
          img: "featured.webp",
          title: "Weddings",
          text: `Seek to be unique in this once in a lifetime occassion as the union between partners is sacred - just imagine echanging your vows in the midst of the forest greenery overlooking the city. Contact our sales team for a visit, we'll make it worth the trip!`,
          uri: "event/wed",
          link: "explore",
        },
        Lfeature: {
          img: "featured.webp",
          title: "Birthdays",
          text: `Let us celebrate your life and future in a fun and special way with your loved ones. browse through our selection of birthday packages and more!`,
          uri: "/",
          link: "Make an enquiry",
        },
        Rfeature: {
          img: "featured.webp",
          title: "Social events",
          text: `Thinking of hosting an event? Give us a call and our team can help plan your very own get-together, anniversary, birthday party, family trip - basically anything!`,
          uri: "/",
          link: "Make an enquiry",
        },
        venues: [
          {
            id: 1,
            img: "bishoftu/firstSlider/3.webp",
            title: "Wedding Venue",
            text: `Our exclusive venue for weddings has everything from glamorous decorations, to buffets, dancefloors, outdoor seating, unique landscape and more  `,
          },
          {
            id: 2,
            img: "bishoftu/firstSlider/3.webp",
            title: "Open Air Spaces",
            text: `With the different restaurants and activity areas located within the Entoto Park Kuriftu Resort, you can have your celebration at any of our locations`,
          },
          {
            id: 3,
            img: "bishoftu/firstSlider/3.webp",
            title: "In-door Spaces",
            text: `Hosting an event in a closed space? With our restaurant spaces or our multi-purpose cabin, you can entertain guests surrounded by the beautiful landscape `,
          },
          {
            id: 4,
            img: "bishoftu/firstSlider/3.webp",
            title: "Garden",
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sint consequatur, doloremque ea exercitationem delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam`,
          },
        ],
        other: [
          {
            img: "bishoftu/firstSlider/1.webp",
            title: "Menu & Catering",
            text: `Our resort caters to your choice of dishes and plates for your celebrations and gatherings - whether it be a customized menu or a choice between our different catering packages, the opion is yours `,
          },
          {
            img: "bishoftu/firstSlider/1.webp",
            title: "Event Consultation",
            text: `Reach out to receive expert advice and consulting on your events provided by our Sales and Banquest team `,
          },
          {
            img: "bishoftu/firstSlider/1.webp",
            title: "Entertainment",
            text: `Let us plan a way to make your celebrations fun and exciting.`,
          },
          {
            img: "bishoftu/firstSlider/1.webp",
            title: "one-bedroom lake view",
            text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
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
