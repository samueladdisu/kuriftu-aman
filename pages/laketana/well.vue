<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/laketana" dir="Lake Tana" />
    <Well :well="well" />
    <BishFooter :footer="footer" />
    <Sticky path="tana" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      well: {
        slides: ["laketana/well/Wellness.webp", "laketana/well/2.webp"],
        heroTitle: "Wellness at Kuriftu Resort & Spa Lake Tana",
        heroSubTitle: "Kuriftu Resort & Spa lake tana wellness",
        heroText: `Our customers wellness experience is intergal to the Kuriftu Brand - by providind outlets for guests to rest, exert energy, feast on clean and light dishes, we empower you to accomplish more!`,

        highlight: {
          img1: "laketana/well/2.webp",
          img2: "laketana/well.webp",
          img3: "laketana/well/2L.webp",
          title1: "Relax, Rebalance & Restore",
          text1: `Venture to the depths of Bishoftu's natural landscape, tap into your happy place to nourish your body with mindfull experiences`,
          title2: "Full-Day retreats",
          text2: `Give yourself a break from the stresses of everyday life - not only will a full day of wellness related activities benefit your mental health, but your level of efficiency at work as well! It is up to each individual to care for themselves and take time to disconnect from draining lifestyles`,
          title3: "Rest Easy Experience",
          text3: `Our spa services stem from the genuine care we have for each individuals health and wellbeing - browse through our Forest Spa menu or feel free to contact one of our consulants for advise based on your own personal needs`,
          pdf: "/LaketanaSpaMenu.pdf",
        },
        amenities: ["Steam", "Sauna", "Jacuzzi"],
        amenities1: ["Massage", "Manicure", "Pedicure"],
        amenities2: ["Hair Style", "Barber"],
      },
      footer: {
        title: "Kuriftu Resort & Spa Lake Tana",
        second: {
          first: "491 km from Addis Abeba Bole International Airport",
          second: "Lake Tana",
          thrid: "Ethiopia",
        },
        thrid: {
          first: "Contact us on our direct phone line 9693",
          second: "Reception Desk +251920959797",
          thrid: "Email us at booking@kurifturesorts.com",
        },
        fourth: {
          url: "https://www.google.com/maps/dir//Kuriftu+Resort+and+Spa+Bahir+Dar+Bahir+Dar+Ethiopia/@11.9262507,37.2958219,10.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1644cde2a39aad09:0xe0ed4292e70a9eef!2m2!1d37.3837014!2d11.5984451",
        },
      },
    };
  },
};
</script>

<style>
</style>
