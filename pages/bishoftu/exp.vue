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
        heroText: `Discover a world of adventure in Kuriftu Bishoftu - as the leaders of innovation in the hospitality industry in Ethiopia, we pride ourselves in curated unmatched experiences `,
        feature: {
          img: "featured.webp",
          // subtitle: "glamping",
          title: "waterpark",
          text: `Make a splash as you slide into the freshwater surrounding the Kuriftu Waterpark! As the biggest waterpark in East Africa, we offer a range of activities from a variety of slides to a wave pool that fits up to 300 rafts at once!`,
          uri: "/",
          link: "Explore",
        },
        highlight: {
          img1: "featured.webp",
          img2: "long.webp",
          img3: "long.webp",
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
            img: "bishoftu/acc/pre4.webp",
            title: "Lequanda",
            text: `Explore fresh cuts of meat for your palate, every day / all day at Kuriftu Lequanda`,
          },
          {
            img: "bishoftu/acc/pre1.webp",
            title: "Bird watching",
            text: `With an enchanting ecosystem and luxurious natural setting, Kuriftu Resorts & Spa ranks among the best bird-watching facilties in the country! With over 300 bird species migrating in and out of the land, its an opportunity for any bird watcher to enjoy`,
          },
          {
            img: "bishoftu/acc/pre2.webp",
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
          url: "/",
        },
      },
    };
  },
};
</script>

<style>
</style>
