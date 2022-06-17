<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/laketana" dir="Lake Tana" />
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
          "bishoftu/exp/Swimming2.webp",
          "bishoftu/exp/Cinema.webp",
          "bishoftu/exp/Kayaking.webp",
          "bishoftu/exp/Waterpark.webp",
        ],
        heroTitle: "Experience at Kuriftu Resort & Spa Tana ",
        heroSubTitle: "lake tana",
        heroText: `Discover a world of adventure in Kuriftu Tana - as the leaders of innovation in the hospitality industry in Ethiopia, we pride ourselves in curated unmatched experiences `,
        feature: {
          img: "bishoftu/exp/WaterparkF.webp",
          // subtitle: "glamping",
          title: "Boat Ride",
          text: `Cruise on one of our boat rides along Lake Tana with a crisp view of the sunrise or sunset, you might get lucky and see some Hippo's along the way!`,
          uri: "#",
          link: "Explore",
        },
        highlight: {
          img1: "bishoftu/exp/Kayaking.webp",
          img2: "bishoftu/exp/Cinema.webp",
          img3: "bishoftu/exp/Swimming.webp",
          title1: "Monastry Visit",
          text1: `Venture out to the holy monastries that make up the core of Bahirdar, these tours are sought after by those looking to learn a bit more about Ethiopian Orthodox Church and history, or for those on pilgrimages`,
          title2: "Cabana Dining",
          text2: `Lounge along our cabanas overlooking the lake, enjoy the peace and quiet of the setting `,
          title3: "Swimming Pool",
          text3: `Enjoy a morning swim or cool down after a long day of adventure in our swimming pool and cabana area `,
        },
        other: [
          {
            img: "bishoftu/exp/Lequanda.webp",
            title: "Monastry Visit",
            text: `Venture out to the holy monastries that make up the core of Bahirdar, these tours are sought after by those looking to learn a bit more about Ethiopian Orthodox Church and history, or for those on pilgrimages`,
          },
          {
            img: "bishoftu/exp/BirdWatching.webp",
            title: "Bird watching",
            text: `With an enchanting ecosystem and luxurious natural setting, Kuriftu Resorts & Spa ranks among the best bird-watching in the country.`,
          },
          {
            img: "bishoftu/exp/Hiking.webp",
            title: "Trip to the Falls",
            text: `Come and explore nature and wilderness with our Guided hiking and tours.`,
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
