<template>
  <div>
    <HeaderApp />
    <Destinav base="" home="/awash" dir="Awash" />
    <Gift :gift="gift" />
    <BishFooter :footer="footer" />
    <Sticky path="awash" />
  </div>
</template>


<script>
export default {
  data() {
    return {
      gift: {
        hero: {
          title: "Kuriftu Gift Voucher",
          text: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, accusamus ducimus possimus quas totam quasi quod ea eligendi at qui, aliquid voluptatem eius repudiandae. Molestias commodi sunt et eveniet sapiente.`,
          uri: "#",
        },
        feature: {
          title: "Featured",
          photos: [
            {
              id: 1,
              src: "giftvoucher/1.jpg",
              url: "gift/1",
            },
            {
              id: 2,
              src: "giftvoucher/2.jpg",
              url: "gift/2",
            },
            {
              id: 3,
              src: "giftvoucher/3.jpg",
              url: "gift/3",
            },
            {
              id: 4,
              src: "giftvoucher/4.jpg",
              url: "gift/4",
            },
            {
              id: 5,
              src: "giftvoucher/5.jpg",
              url: "gift/5",
            },
            {
              id: 6,
              src: "giftvoucher/6.jpg",
              url: "gift/6",
            },
          ],
        },
        bishoftu: {
          title: "bishoftu",
          photos: [
            {
              id: 1,
              src: "giftvoucher/7.jpg",
              url: "gift/1",
            },
            {
              id: 2,
              src: "giftvoucher/6.jpg",
              url: "gift/2",
            },
            {
              id: 3,
              src: "giftvoucher/5.jpg",
              url: "gift/3",
            },
          ],
        },
        waterpark: {
          title: "waterpark",
          photos: [
            {
              id: 1,
              src: "giftvoucher/5.jpg",
              url: "gift/1",
            },
            {
              id: 2,
              src: "giftvoucher/6.jpg",
              url: "gift/2",
            },
            {
              id: 3,
              src: "giftvoucher/7.jpg",
              url: "gift/3",
            },
          ],
        },
        entoto: {
          title: "entoto",
          photos: [
            {
              id: 1,
              src: "giftvoucher/4.jpg",
              url: "gift/1",
            },
            {
              id: 2,
              src: "giftvoucher/3.jpg",
              url: "gift/2",
            },
            {
              id: 3,
              src: "giftvoucher/2.jpg",
              url: "gift/3",
            },
            {
              id: 4,
              src: "giftvoucher/1.jpg",
              url: "gift/4",
            },
          ],
        },
        laketana: {
          title: "laketana",
          photos: [
            {
              id: 1,
              src: "gift4.svg",
              url: "gift/1",
            },
            {
              id: 2,
              src: "gift4.svg",
              url: "gift/2",
            },
            {
              id: 3,
              src: "gift4.svg",
              url: "gift/3",
            },
            {
              id: 4,
              src: "gift4.svg",
              url: "gift/4",
            },
            {
              id: 5,
              src: "gift4.svg",
              url: "gift/5",
            },
            {
              id: 6,
              src: "gift4.svg",
              url: "gift/6",
            },
          ],
        },
        awash: {
          title: "awash",
          photos: [
            {
              id: 1,
              src: "gift2.svg",
              url: "gift/1",
            },
            {
              id: 2,
              src: "gift2.svg",
              url: "gift/2",
            },
            {
              id: 3,
              src: "gift2.svg",
              url: "gift/3",
            },
            {
              id: 4,
              src: "gift2.svg",
              url: "gift/4",
            },
            {
              id: 5,
              src: "gift2.svg",
              url: "gift/5",
            },
            {
              id: 6,
              src: "gift2.svg",
              url: "gift/6",
            },
          ],
        },
        // afar: {
        //   title: "afar",
        //   photos: [
        //     {
        //       id: 1,
        //       src: "gift5.svg",
        //       url: "gift/1",
        //     },
        //     {
        //       id: 2,
        //       src: "gift1.svg",
        //       url: "gift/2",
        //     },
        //     {
        //       id: 3,
        //       src: "gift2.svg",
        //       url: "gift/3",
        //     },
        //     {
        //       id: 4,
        //       src: "gift3.svg",
        //       url: "gift/4",
        //     },
        //     {
        //       id: 5,
        //       src: "gift4.svg",
        //       url: "gift/5",
        //     },
        //     {
        //       id: 6,
        //       src: "gift1.svg",
        //       url: "gift/6",
        //     },
        //   ],
        // },
        boston: {
          title: "boston day spa",
          photos: [
            {
              id: 1,
              src: "giftvoucher/3.jpg",
              url: "gift/1",
            },
            {
              id: 2,
              src: "giftvoucher/3.jpg",
              url: "gift/2",
            },
            {
              id: 3,
              src: "giftvoucher/3.jpg",
              url: "gift/3",
            },
            {
              id: 4,
              src: "giftvoucher/3.jpg",
              url: "gift/4",
            },
            {
              id: 5,
              src: "giftvoucher/3.jpg",
              url: "gift/5",
            },
            {
              id: 6,
              src: "giftvoucher/3.jpg",
              url: "gift/6",
            },
          ],
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
          url: "https://www.google.com/maps/dir//Kuriftu+Resort+%26+Spa+Awash+Falls+awash+park+Awash+Ethiopia/@8.8430524,40.0122975,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x163593fea245879f:0xca93c0e4241369ec!2m2!1d40.0122975!2d8.8430524",
        },
      },
    };
  },
};
</script>

<style>
</style>
