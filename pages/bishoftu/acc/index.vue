<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/bishoftu" dir="Bishoftu" />
    <Acc :acc="acc" />

    <BishFooter :footer="footer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      acc: {
        accTitle: {
          title: "accomodation at kuriftu resort & spa bishoftu",
          text: `Designed to enhance beauty of natural structures, Kuriftu Bishoftu accommodations provide a variety of rooms that showcase our ever growing woodwork craftsmanship and ability to experiment new styles with locally sourced materials, highlighting the rustic atmosphere that makes Kuriftu unique `,
        },
        rooms: [
          {
            id: 1,
            img: "bishoftu/LakeView.webp",
            subTitle: "rooms",
            title: "lake view",
            text: `Explore a variety of lake front rooms located in different sections of the resort - these rooms provide prime view of sun rise and sun set paired with the reflection of the lake `,
            uri: "acc/1",
          },
          {
            id: 2,
            img: "bishoftu/GardenView.webp",
            subTitle: "rooms",
            title: "GARDEN VIEW",
            text: `Immerse yourself in colorful garden features that make up most of the natural landscape Kuriftu Bishoftu. Attracting birds of varying species, wake up to the mezmerizing sound of their songs in the early morning as the sun rises above the lakes horizon `,
            uri: "acc/2",
          },
          {
            id: 3,
            img: "bishoftu/LoftVillage.webp",
            subTitle: "rooms",
            title: "VILLAGE",
            text: `Experience our lofted rooms featuring Kurfitu's new contemporary interior design - with a play on colors and abstract art, contrasting screed flooring and high cielings for a luxurious effect, the Village rooms create a new approach to innovation in the resort`,
            uri: "acc/3",
          },
          {
            id: 4,
            img: "bishoftu/acc/pre5.webp",
            subTitle: "rooms",
            title: "PRESIDENTIAL SUITE",
            text: `Take in the earthy environment curated by our woodwork and design team in this spacious room. Plan a romantic stay with your partner and experince exclusive offers in this space, including an in-room massage and luxury in-room dining experience. Our suites offer nothing less than  the perfect blend of comfort and beauty`,
            uri: "acc/4",
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
