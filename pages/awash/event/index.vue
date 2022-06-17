<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/awash" dir="Awash" />
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
          "awash/event/1.webp",
          
           
        
        ],
        heroTitle: "Celebrations at Kuriftu Awash Falls",
        heroSubTitle: "kuriftu resort & spa bishoftu wedding area",
        heroText: `Allow our team to tailor an exceptional occasion of your choosing `,
        feature: {
          img:  "awash/event/Wedding.webp",
          title: "Wedding",
          text: `For an intimate wedding the spectacular views, isolated location, and the perfect ambiance of Awash Falls will highlight one of the biggest days of your life - Embark on this new stage in life with your partner with specialty catering, unmatched views and breathtaking backdrops for photos that will last a lifetime`,
          uri: "event/wed",
          link: "explore",
        },
        Lfeature: {
          img: "awash/event/Birthdays.webp",
          title: "Birthdays",
          text: `Celebrate a life full of unpredictability and a future full of surprises with special people in a special setting! At Kuriftu Awash Falls, we are prepared to make each year of your life count.`,
          uri: "#",
          link: "explore",
        },
        Rfeature: {
          img: "awash/event/SocialEvents.webp",
          title: "Social Events",
          text: `Get-togethers, anniversaries, family trips, or any other social gathering? Let us create a unique experience for you. `,
          uri: "#",
          link: "explore",
        },
       
       
       
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
