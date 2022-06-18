<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/entoto" dir="Entoto" />
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
           "Entoto/exp/exp3.webp",
       "Entoto/exp/exp.webp",
        "Entoto/exp/exp2.webp",
         "Entoto/exp/exp4.webp",
         "Entoto/exp/1.webp",
        ],
        heroTitle: "Experience at Kuriftu Entoto Adventure Park",
        heroSubTitle: "entoto national park",
        heroText: `Kuriftu Entoto Adventure Park provides one of the best nature based experiences as it is considered to be the first adventure park in the country! Catering to a vast variety of domestic and international tourists, we aim to please and excite! `,
        feature: {
          img: "Entoto/exp/1.webp",
          subtitle: "glamping",
          title: "Adventure",
          text: `Choose from a selection of different aerial trails in the trees to trampoline basketball tournaments and many other exciting opportunities `,
          uri: "/",
          link: "Explore",
        },
        highlight: {
          img1: "Entoto/exp/spa.webp",
          img2: "Entoto/exp/long3.webp",
          img3: "Entoto/exp/long4.webp",
        
          title1: "Horse Riding Picnic",
          text1: `Enjoy a unique trail riding experience in the spectacular forest with our Horse Ride and Picnic package. This ncludes a private trail ride with a specially prepared gourmet picnic hamper/ስንቅ/ for you to enjoy with your loved ones`,
          title2: "Forest Spa",
          text2: `Kurfitu Entoto Forest Spa is a sanctuary dedicated to hollistic wellness inspired by traditional and globally recognized wellness practices`,
          title3: "Private Yoga",
          text3: `Private yoga classes can be arranged on an outdoor platform hidden in the forest`,
          title4: "BBQ ",
          text4: `Fire up the grill in either our Glamping facility or within the Presidential Cabin - feel free to bring your own materials or request for a custom pre-marinade selection to be brought to you!`,
        },
        other: [
          {
            img: "Entoto/exp/feature.webp",
            title: "Flora and Fauna Scavenger Hunt(coming soon)",
            text: `Venture out into the wild with our Kuriftu Entoto Flora and Fauna Scavenger Hunt Guide to learn about the natural landscape in the forest and all varieties of plants, herbs and wildlife!`,
          },
          {
            img:   {
          id: 7,
          src:    "Entoto/well/wide.webp",
        },
            title: "Cycling",
            text: `Cycles up and or down this unforgettable landscape with greenery for days`,
          },
          {
            img: "Entoto/exp/fe3.webp",
            title: "HIking",
            text: `Prepare to trek up the mountain on our guided hiking tour to view all activities based along the way, and challenge your level of endurance to make it to the top by foot!`,
          },
          {
            img: "Entoto/exp/fe4.webp",
            title: "Bird Watching",
            text: `Take time to identify bird species in the forest, watch their behaviour in an undisturbed environment to understand their true nature and learn to appreciate their home`,
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
