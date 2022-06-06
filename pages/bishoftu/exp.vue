<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/bishoftu" dir="Bishoftu" />
    <Exp :exp="exp" />
    <BishFooter :footer="footer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      exp: {
        slides: [
          "bishoftu/acc/pre5.webp",
          "bishoftu/acc/pre6.webp",
          "bishoftu/acc/pre7.webp",
          "bishoftu/acc/pre8.webp",
        ],
        heroTitle: "Experience at Kuriftu Resort & Spa bishoftu",
        heroSubTitle: "lake kuriftu",
        heroText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        doloremque magni quo optio doloribus id vel atque? Voluptatem, quibusdam
        quisquam.`,
        feature: {
          img: "featured.webp",
          subtitle: "glamping",
          title: "waterpark",
          text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sint consequatur, doloremque ea exercitationem delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam`,
          uri: "/",
          link: "Explore",
        },
        highlight: {
          img1: "featured.webp",
          img2: "long.webp",
          img3: "long.webp",
          title1: "kayakiing",
          text1: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima voluptate cupiditate omnis aperiam, nisi at nam possimus aspernatur sunt.`,
          title2: "cinema",
          text2: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima voluptate cupiditate omnis aperiam, nisi at nam possimus aspernatur sunt.`,
          title3: "swimming",
          text3: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima voluptate cupiditate omnis aperiam, nisi at nam possimus aspernatur sunt.`,
          title4: "Table Tennis",
          text4: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima voluptate cupiditate omnis aperiam, nisi at nam possimus aspernatur sunt.`,
        },
        other: [
          {
            img: "bishoftu/acc/pre4.webp",
            title: "Lequanda",
            text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
          },
          {
            img: "bishoftu/acc/pre1.webp",
            title: "Bird watching",
            text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
          },
          {
            img: "bishoftu/acc/pre2.webp",
            title: "one-bedroom lake view",
            text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
          },
          {
            img: "bishoftu/acc/pre3.webp",
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
