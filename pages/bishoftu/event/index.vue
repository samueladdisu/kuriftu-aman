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
        heroText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        doloremque magni quo optio doloribus id vel atque? Voluptatem, quibusdam
        quisquam.`,
        feature: {
          img: "featured.webp",
          title: "Weddings",
          text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sint consequatur, doloremque ea exercitationem delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam`,
          uri: "event/wed",
          link: "explore",
        },
        Lfeature: {
          img: "featured.webp",
          title: "Birthdays",
          text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sint consequatur, doloremque ea exercitationem delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam`,
          uri: "/",
          link: "explore",
        },
        Rfeature: {
          img: "featured.webp",
          title: "Social events",
          text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sint consequatur, doloremque ea exercitationem delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam`,
          uri: "/",
          link: "explore",
        },
        venues: [
          {
            id: 1,
            img: "bishoftu/firstSlider/3.webp",
            title: "Lake Side",
            text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sint consequatur, doloremque ea exercitationem delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam`,
          },
          {
            id: 2,
            img: "bishoftu/firstSlider/3.webp",
            title: "Lounges",
            text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sint consequatur, doloremque ea exercitationem delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam`,
          },
          {
            id: 3,
            img: "bishoftu/firstSlider/3.webp",
            title: "Traditional",
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sint consequatur, doloremque ea exercitationem delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam`,
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
            title: "one-bedroom lake view",
            text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
          },
          {
            img: "bishoftu/firstSlider/1.webp",
            title: "one-bedroom lake view",
            text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
          },
          {
            img: "bishoftu/firstSlider/1.webp",
            title: "one-bedroom lake view",
            text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
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
          url: "/",
        },
      },
    };
  },
};
</script>

<style>
</style>
