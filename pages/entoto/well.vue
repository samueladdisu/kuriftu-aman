<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/entoto" dir="Entoto" />
    <Well :well="well" />
    <BishFooter :footer="footer" />
    <Sticky path="entoto" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      well: {
        slides: [
          "Entoto/well/4.webp",
          "Entoto/well/1.webp",
          "Entoto/well/2.webp",
          "Entoto/well/3.webp",
        ],
        heroTitle: "Wellness at Kuriftu Entoto Adventure Park",
        heroSubTitle: "Wellness at Kuriftu Entoto Adventure Park",
        heroText: `Kurfitu Entoto Forest Spa presents a variety of hollistic wellness practices. The Kuriftu brand's expertise in the wellness world has been present for nearly 20 years and has maintained a standard in the Ethiopian culture. Our hiring and training program focused on local communities capacity development in this sector allows us to transfer skills in the most impactful way. We aim to incorporate natural treatments, carefully curated massage experiences and many more opportunities for our team to showcase their enhanced skillset!`,
        feature: {
          img: "Entoto/well/fit.webp",
          subtitle: "glamping",
          title: "Fitness",
          text: `Plan your very own fitness experience at Kuriftu Entoto Adventure Park - this mountain is the practice grounds for many Ethiopian runners and athletes, from the crisp clean air to the high altitude taking your breath away every step of your journey, this space is ideal for nature based fitness`,
          uri: "/",
          link: "View full experience guide",
        },
        highlight: {
          img1: "Entoto/well/wide.webp",
          img2: "Entoto/well/long.webp",
          img3: "Entoto/well/long2.webp",
          title1: "Relax, Rebalance & Restore",
          text1: `Aromatic scents familiar to our suroundings, such as fresh Eucalyptus and house blends, place our guests in a transe while promoting a deep sense of relaxation. One of our our Forest Spa's signature treatment is the Hot Oil Full Body Massage - beginning with feet dipped in an in-house ginger remedy, each session promotes tension release from the feet up. After a long day of treking through the forest, treat yourself to this blissful experience `,
          title2: "Full Day Treatments",
          text2: `Give yourself a break from the stresses of everyday life - not only will a full day of wellness related activities benefit your mental health, but your level of efficiency at work as well! It is up to each individual to care for themselves and take time to disconnect from draining lifestyles`,
          title3: "Rest Easy Experience",
          text3: `Our spa services stem from the genuine care we have for each individuals health and wellbeing - browse through our Forest Spa menu or feel free to contact one of our consulants for advise based on your own personal needs`,
          pdf: "/entotoSpa.pdf",
        },
        amenities: ["Steam / Sauna", "Jaccuzi", "Resting Area"],
        amenities1: ["Massage", "Manicure", "Pedicure"],
        // amenities2: [
        //   "lorem ipsum dolor",
        //   "lorem ipsum dolor",
        //   "lorem ipsum dolor",
        //   "lorem ipsum dolor",
        // ],
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
          url: "https://www.google.com/maps/dir//Kuriftu+Restaurant+in+Entoto+Park+Gulele+8%2F16+Ethiopia/@9.0846279,38.7383589,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x164b8f84811f84a1:0x336681194adaaef!2m2!1d38.7383589!2d9.0846279",
        },
      },
    };
  },
};
</script>

<style>
</style>
