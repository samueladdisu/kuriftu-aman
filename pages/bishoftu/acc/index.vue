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
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
        },
        rooms: [
          {
            id: 1,
            img: "bishoftu/acc/pre1.webp",
            subTitle: "rooms",
            title: "one-bedroom lake view",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              officia ullam reiciendis praesentium at voluptatum explicabo
              repellat provident facere. Temporibus?`,
            uri: "acc/2",
          },
          {
            id: 2,
            img: "bishoftu/acc/pre2.webp",
            subTitle: "rooms",
            title: "one-bedroom lake view",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              officia ullam reiciendis praesentium at voluptatum explicabo
              repellat provident facere. Temporibus?`,
            uri: "acc/2",
          },
          {
            id: 3,
            img: "bishoftu/acc/pre2.webp",
            subTitle: "rooms",
            title: "one-bedroom lake view",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              officia ullam reiciendis praesentium at voluptatum explicabo
              repellat provident facere. Temporibus?`,
            uri: "acc/2",
          },
          {
            id: 4,
            img: "bishoftu/acc/pre4.webp",
            subTitle: "rooms",
            title: "one-bedroom lake view",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              officia ullam reiciendis praesentium at voluptatum explicabo
              repellat provident facere. Temporibus?`,
            uri: "acc/2",
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
