<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/bishoftu" dir="Bishoftu" />
    <Exp :exp="exp" />
    <BishFooter :footer="footer" />
    <Sticky path="bishoftu" />
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
        heroTitle: "Experience at Kuriftu Resort & Spa bishoftu",
        heroSubTitle: "lake kuriftu",
        heroText: `Discover a world of adventure in Kuriftu Bishoftu - as the leaders of innovation in the hospitality industry in Ethiopia, we pride ourselves in curated unmatched experiences `,
        feature: {
          img: "bishoftu/exp/WaterparkF.webp",
          // subtitle: "glamping",
          title: "waterpark",
          text: `Make a splash as you slide into the freshwater surrounding the Kuriftu Waterpark! As the biggest waterpark in East Africa, we offer a range of activities from a variety of slides to a wave pool that fits up to 300 rafts at once!`,
          uri: "#",
          link: "Explore",
        },
        highlight: {
          img1: "bishoftu/exp/Kayaking.webp",
          img2: "bishoftu/exp/Cinema.webp",
          img3: "bishoftu/exp/Swimming.webp",
          title1: "kayakiing",
          text1: `If you think the only view is within the resort then think again! Enjoy a wonderful kayak ride with friends and be mezermized by the luscious green landscape`,
          title2: "cinema",
          text2: `The cinema at our resort offers a comfortable experience with rows of cushions; whether it’s a date night or family fun, kick back and enjoy a night complete with popcorn, ice blasts, and delicious ice cream!`,
          title3: "swimming",
          text3: `Whether is be our Infinity Pool stationed infront of the steam and sauna overlooking the lake, the Waterpark, or the new VIllage Pool & Bar - Kuriftu accommodates kids and adults for all activities relating to water!`,
          title4: "Table Tennis",
          text4: `For our table tennis enthusiasts, add an exciting tournament to your itinerary Kuriftu Bishoftu`,
        },
        other: [
          {
            img: "bishoftu/exp/Lequanda.webp",
            title: "Lequanda",
            text: `Explore fresh cuts of meat for your palate, every day / all day at Kuriftu Lequanda`,
          },
          {
            img: "bishoftu/exp/BirdWatching1.webp",
            title: "Bird watching",
            text: `With an enchanting ecosystem and luxurious natural setting, Kuriftu Resorts & Spa ranks among the best bird-watching facilties in the country! With over 300 bird species migrating in and out of the land, its an opportunity for any bird watcher to enjoy`,
          },
          {
            img: "bishoftu/exp/Hiking.webp",
            title: "Hiking",
            text: `Come and explore nature and wilderness with our Guided hiking and tours.`,
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
          url: "https://www.google.com/maps/dir//Kuriftu+Resort+%26+Spa+Bishoftu+kebeke+15+Bishoftu+Ethiopia/@8.7802619,39.0028661,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x164b0cba1728a73d:0x44f92b98676731e7!2m2!1d39.0028661!2d8.7802619",
        },
      },
    };
  },
};
</script>

<style>
</style>
