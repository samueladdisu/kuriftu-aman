<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/bishoftu" dir="Bishoftu" />
    <Well :well="well" />
    <BishFooter :footer="footer" />
    <Sticky path="bishoftu" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      well: {
        slides: ["bishoftu/well/1.webp", "bishoftu/well/2.webp"],
        heroTitle: "Wellness at Kuriftu Resort & Spa Bishoftu",
        heroSubTitle: "Kuriftu Resort & Spa bishoftu wellness",
        heroText: `Our customers wellness experience is intergal to the Kuriftu Brand - by providing
d outlets for guests to rest, exert energy, feast on clean and light dishes, we empower you to accomplish more!`,
        // feature: {
        //   img: "featured.webp",
        //   subtitle: "glamping",
        //   title: "Fitness",
        //   text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sint consequatur, doloremque ea exercitationem delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam doloremque ea exercitationem, delectus hic eveniet quibusdam`,
        //   uri: "/",
        //   link: "View full experience guide",
        // },
        highlight: {
          img1: "bishoftu/well/mass.webp",
          img2: "bishoftu/well/openWindow.webp",
          img3: "bishoftu/well/long2.webp",
          title1: "Relax, Rebalance & Restore",
          text1: `Venture to the depths of Bishoftu's natural landscape, tap into your happy place to nourish your body with mindful
 experiences`,
          title2: "Full-Day retreats",
          text2: `Give yourself a break from the stress
 life - not only will a full day of wellness related activities benefit your mental health, but your level of efficiency at work as well! It is up to each individual to care for themselves and take time to disconnect from draining lifestyles`,
          title3: "Rest Easy Experience",
          text3: `Our spa services stem from the genuine care we have for each individual’s health and wellbeing - browse through our Forest Spa menu or feel free to contact one of our consulants for advise based on your own personal needs`,
          uri: "#",
        },
        amenities: ["Steam", "Sauna", "Jacuzzi"],
        amenities1: ["Massage", "Manicure", "Pedicure"],
        amenities2: ["Hair Style", "Barber", "Gym"],
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
          first: "53.7 km from Addis Abeba Bole International Airport",
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
