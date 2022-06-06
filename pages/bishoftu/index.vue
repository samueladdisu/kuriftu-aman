<template>
  <div>
    <HeaderApp />
    <Destinav base="bishoftu/" home="bishoftu/" dir="Bishoftu" />
    <Dindex :index="index" />
  </div>
</template>

<script>
import Destinav from "../../components/Destinav.vue";
export default {
  components: { Destinav },
  data() {
    return {
      index: {
        heroImg: "awash/awash-cover.webp",
        bishTitle: {
          subTitle: "Lake kuriftu, bishoftu",
          title: "kuriftu resort & spa bishoftu",
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
        },
        // slides
        photos: [
          "bishoftu/firstSlider/1.webp",
          "bishoftu/firstSlider/2.webp",
          "bishoftu/firstSlider/3.webp",
          "long.webp",
        ],

        // acc cover image
        accImg: "awash/awash-cover.webp",
        // acc content
        accTitle: {
          subTitle: "Lake kuriftu, bishoftu",
          title: "kuriftu resort & spa bishoftu",
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
          link: "view all accomodations",
          url: "bishoftu/acc",
        },

        // destination highlight section
        highlight: [
          {
            id: 1,
            img: "long.webp",
            subTitle: "Experience",
            title: "Adventure",
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.`,
            uri: "/",
            url: "Explore",
          },
          {
            id: 2,
            img: "long.webp",
            subTitle: "dining",
            title: "culinary on the lake",
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.`,
            uri: "/",
            url: "Explore",
          },
          {
            id: 3,
            img: "long.webp",
            subTitle: "wellness",
            title: "Rejuvination",
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.`,
            uri: "/",
            url: "Explore",
          },
          {
            id: 4,
            img: "long.webp",
            subTitle: "corporate",
            title: "team building",
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.`,
            uri: "/",
            url: "Explore",
          },
          {
            id: 5,
            img: "long.webp",
            subTitle: "Celebration",
            title: "Memories to cherish",
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.`,
            uri: "/",
            url: "Explore",
          },
          {
            id: 6,
            img: "long.webp",
            subTitle: "gift voucher",
            title: "For futer travels",
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.`,
            uri: "/",
            url: "Explore",
          },
        ],
        // map section
        mapInfo: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            voluptas, cupiditate autem praesentium neque quos.`,
      },
    };
  },
};
</script>

<style>
</style>
