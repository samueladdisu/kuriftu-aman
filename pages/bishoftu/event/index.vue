<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/bishoftu" dir="Bishoftu" />
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
          "bishoftu/acc/pre5.webp",
          "bishoftu/acc/pre6.webp",
          "bishoftu/acc/pre7.webp",
          "bishoftu/acc/pre8.webp",
        ],
        heroTitle: "Celebration & Events at Kuriftu Resort & Spa bishoftu",
        heroSubTitle: "kuriftu resort & spa bishoftu wedding area",
        heroText: `Whether it be a special anniversary, family reunion or milestone birthday, Kuriftu Bishoftu has the ability to facilitate any celebration through our many restaurants, experiences and activities in this scenic environment - The Kuriftu team is dedicated to crafting extraordinay shared experiences and nights to remember `,
        feature: {
          img: "featured.webp",
          title: "Weddings",
          text: `Pave your future with your partner in this romantic setting, share the joy at its most natural state surrounded by loved ones`,
          uri: "event/wed",
          link: "explore",
        },
        Lfeature: {
          img: "featured.webp",
          title: "Birthdays",
          text: `Let us celebrate your life and future in a fun and special way with your loved ones. Our resort provides different packages to celebrate your birthdays and more.`,
          uri: "#",
          link: "explore",
        },
        Rfeature: {
          img: "featured.webp",
          title: "Concerts",
          text: `Join us as we invite your favorite artisits, DJ's and performers for live outdoor experiences!`,
          uri: "#",
          link: "explore",
        },
        Lfeature1: {
          img: "featured.webp",
          title: "Social Events",
          text: `Thinking of hosting an event? Give us a call and our team can help plan your very own get-together, anniversary, birthday party, family trip - basically anything!`,
          uri: "#",
          link: "explore",
        },
        venues: [
          {
            id: 1,
            img: "bishoftu/firstSlider/3.webp",
            title: "Wedding Venues",
            text: `Our exclusive venue for weddings has everything from glamorous decorations, to buffets, dancefloors, and more.`,
          },
          {
            id: 2,
            img: "bishoftu/firstSlider/3.webp",
            title: "Lake Side",
            text: `Make your celebration even more stunning by adding a lake-side view.`,
          },
          {
            id: 3,
            img: "bishoftu/firstSlider/3.webp",
            title: "Cabana Area",
            text: `Make a splash with your cabanas to enjoy a more private and memorable day.`,
          },
          {
            id: 4,
            img: "bishoftu/firstSlider/3.webp",
            title: "Waterpark",
            text: `Slide into the cool and fresh water and celebrate the season with our resort's coolest property.  `,
          },
        ],
        other: [
          {
            img: "bishoftu/firstSlider/1.webp",
            title: "Menu & Catering",
            text: `Our resort caters to your choice of dishes and plates for your celebrations and gatherings.`,
          },
          {
            img: "bishoftu/firstSlider/1.webp",
            title: "Event Consultation",
            text: `Reach out to receive expert advice and consulting on your events provided by our resort.`,
          },
          {
            img: "bishoftu/firstSlider/1.webp",
            title: "Entertainment",
            text: `Let us plan a way to make your celebrations fun and exciting. `,
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
          url: "#",
        },
      },
    };
  },
};
</script>

<style>
</style>
