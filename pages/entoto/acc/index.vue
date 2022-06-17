<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/entoto" dir="Entoto" />
    <Acc :acc="acc" />

    <BishFooter :footer="footer" />
  </div>
</template>

<script>
import BishFooter from "../../../components/BishFooter.vue";
export default {
  components: { BishFooter },
  data() {
    return {
      acc: {
        accTitle: {
          title: "accomodation at kuriftu resort & spa Entoto",
          text: `With a backdrop of the distinct wild and lush Entoto Forest, our Kuriftu Entoto Adventure Park offers an alternative hospitality experience. With locally sourced materials used to construct and furnish our Presidential Cabin and the interior of our Glamping facilties, guests are placed in a natural setting to simply relax and savour the peace and quiet.`,
        },
        rooms: [
          {
            id: 1,
            img:     "Entoto/acc/Glamping.webp",
            subTitle: "FOREST VIEW",
            title: "Glamping",
            text: `Join us and experience Addis's first glamping site in the heart of Entoto Mountain. As our brand shift towards becoming more sustainably concious by focusing on minimizing our impact in the forest, glamping provides a more sustainable approach as well as an alternative hospitality adventure!`,
            uri: "acc/1",
          },
          {
            id: 2,
            img: "Entoto/acc/Presidential.webp",
            subTitle: "FOREST VIEW",
            title: "Kuriftu Oasis / Presidential Cabin",
            text: `Secluded in the depths of the aromatic eucalyptus forest lies our Kuriftu Oasis / Presidential Cabin for those seeking an internal healing experience in solidtude that provides ultimate relaxation.`,
            uri: "acc/2",
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
