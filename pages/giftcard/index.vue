<template>
  <div>
    <HeaderApp />
    <Gift :gift="gift" />
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
              src: "giftvoucher/7.jpg",
              url: "giftcard/b1",
              title: "BIRTHDAY DELUXE",
              text: `A birthday extravaganza with friends and family! A day to remember by the lake`,
            },
            {
              id: 2,
              src: "giftvoucher/6.jpg",
              url: "giftcard/b2",
              title: "CONGRATULATIONS",
              text: `Graduated, married, a new job, a new house? congratulate your loved one with a day off at the resort!`,
            },
            {
              id: 3,
              src: "giftvoucher/5.jpg",
              url: "giftcard/b3",
              title: "HOLIDAY WITH THE FAMILY",
              text: `It is the small moments that create memories for a lifetime, enjoy a family trip to the Kuriftu Resort & Spa Bishoftu. A day full of laughter and fun`,
            },
            {
              id: 4,
              src: "giftvoucher/5.jpg",
              url: "giftcard/b4",
              title: "WANDERLUST",
              text: `It's always a good day to take a ME day!`,
            },
            {
              id: 5,
              src: "giftvoucher/5.jpg",
              url: "giftcard/b5",
              title: "FRIENDCATION",
              text: `Who is up for a road trip with some friends! Grab your shades and hats`,
            },
          ],
        },
        bishoftu: {
          title: "bishoftu",
          photos: [
            {
              id: 1,
              src: "giftvoucher/7.jpg",
              url: "giftcard/b1",
              title: "BIRTHDAY DELUXE",
              text: `A birthday extravaganza with friends and family! A day to remember by the lake`,
            },
            {
              id: 2,
              src: "giftvoucher/6.jpg",
              url: "giftcard/b2",
              title: "CONGRATULATIONS",
              text: `Graduated, married, a new job, a new house? congratulate your loved one with a day off at the resort!`,
            },
            {
              id: 3,
              src: "giftvoucher/5.jpg",
              url: "giftcard/b3",
              title: "HOLIDAY WITH THE FAMILY",
              text: `It is the small moments that create memories for a lifetime, enjoy a family trip to the Kuriftu Resort & Spa Bishoftu. A day full of laughter and fun`,
            },
            {
              id: 4,
              src: "giftvoucher/5.jpg",
              url: "giftcard/b4",
              title: "WANDERLUST",
              text: `It's always a good day to take a ME day!`,
            },
            {
              id: 5,
              src: "giftvoucher/5.jpg",
              url: "giftcard/b5",
              title: "FRIENDCATION",
              text: `Who is up for a road trip with some friends! Grab your shades and hats`,
            },
          ],
        },
        waterpark: {
          title: "waterpark",
          photos: [
            {
              id: 1,
              src: "giftvoucher/7.jpg",
              url: "giftcard/w1",
              title: "BIRTHDAY SUPREME",
              text: `A birthday extravaganza with friends and family! A day to remember under the sun with fun rides and splashes `,
            },
            {
              id: 2,
              src: "giftvoucher/6.jpg",
              url: "giftcard/w2",
              title: "CONGRATULATIONS",
              text: `Graduated, married, a new job, a new house? congratulate your loved one with a day off at the waterpark!`,
            },
            {
              id: 3,
              src: "giftvoucher/5.jpg",
              url: "giftcard/w3",
              title: "HOLIDAY WITH THE FAMILY",
              text: `It is the small moments that create memories for a lifetime, enjoy a family trip to the waterpark. A day full of laughter and fun`,
            },
            {
              id: 4,
              src: "giftvoucher/5.jpg",
              url: "giftcard/w4",
              title: "WANDERLUST",
              text: `It's always a good day to take a ME day!`,
            },
            {
              id: 5,
              src: "giftvoucher/5.jpg",
              url: "giftcard/w5",
              title: "FRIENDCATION",
              text: `Who is up for a road trip with some friends! Grab your swimsuits and sandals`,
            },
          ],
        },
        entoto: {
          title: "entoto",
          photos: [
            {
              id: 1,
              src: "giftvoucher/4.jpg",
              url: "giftcard/e1",
              title: "BIRTHDAY SUPREME",
              text: `A birthday extravaganza with friends and family! A day to remember by the lake`,
            },
            {
              id: 2,
              src: "giftvoucher/3.jpg",
              url: "giftcard/e2",
              title: "BIRTHDAY THRILL",
              text: `A birthday extravaganza with friends and family! A day to remember by the lake`,
            },
            {
              id: 3,
              src: "giftvoucher/2.jpg",
              url: "giftcard/e3",
              title: "CONGRATULATIONS",
              text: `Graduated, married, a new job, a new house? congratulate your loved one with a day off at the resort!`,
            },
            {
              id: 4,
              src: "giftvoucher/4.jpg",
              url: "giftcard/e4",
              title: "HOLIDAY WITH THE FAMILY",
              text: `It is the small moments that create memories for a lifetime, enjoy a family trip to the Kuriftu Resort & Spa Entoto. A day full of laughter and fun`,
            },
            {
              id: 5,
              src: "giftvoucher/1.jpg",
              url: "giftcard/e5",
              title: "WANDERLUST",
              text: `It's always a good day to take a ME day!`,
            },
            {
              id: 6,
              src: "giftvoucher/5.jpg",
              url: "giftcard/e6",
              title: "FRIENDCATION",
              text: `Who is up for a road trip with some friends! Grab your shades and hats`,
            },
          ],
        },
        laketana: {
          title: "laketana",
          photos: [
            {
              id: 1,
              src: "giftvoucher/7.jpg",
              url: "giftcard/l1",
              title: "BIRTHDAY DELUXE",
              text: `A birthday extravaganza with friends and family! A day to remember by the lake`,
            },
            {
              id: 2,
              src: "giftvoucher/6.jpg",
              url: "giftcard/l2",
              title: "CONGRATULATIONS",
              text: `Graduated, married, a new job, a new house? congratulate your loved one with a day off at the resort!`,
            },
            {
              id: 3,
              src: "giftvoucher/5.jpg",
              url: "giftcard/l3",
              title: "HOLIDAY WITH THE FAMILY",
              text: `It is the small moments that create memories for a lifetime, enjoy a family trip to the Kuriftu Resort & Spa Lake Tana. A day full of laughter and fun`,
            },
            {
              id: 4,
              src: "giftvoucher/5.jpg",
              url: "giftcard/l4",
              title: "WANDERLUST",
              text: `It's always a good day to take a ME day!`,
            },
            {
              id: 5,
              src: "giftvoucher/5.jpg",
              url: "giftcard/l5",
              title: "FRIENDCATION",
              text: `Who is up for a road trip with some friends! Grab your shades and hats`,
            },
          ],
        },
        boston: {
          title: "boston day spa",
          photos: [
            {
              id: 1,
              src: "giftvoucher/7.jpg",
              url: "giftcard/bo1",
              title: "BIRTHDAY Pamper",
              text: `Fresh new year, fresh new you!`,
            },
            {
              id: 2,
              src: "giftvoucher/6.jpg",
              url: "giftcard/bo2",
              title: "DELUXE SPA DAY",
              text: `Graduated, married, a new job, a new house? congratulate your loved one with a day off at the Boston Day Spa`,
            },
            {
              id: 3,
              src: "giftvoucher/6.jpg",
              url: "giftcard/bo3",
              title: "supreme SPA DAY",
              text: `It's always a good day to take a ME day! Get a glamourous spa day with our supreme package! `,
            },
            {
              id: 4,
              src: "giftvoucher/6.jpg",
              url: "giftcard/bo4",
              title: "LOVER'S PAMPER DAY",
              text: `No better way to share your love than with a little bit of pampering. Take a couples' day and pamper yourselves.`,
            },
            {
              id: 5,
              src: "giftvoucher/6.jpg",
              url: "giftcard/bo5",
              title: "GROUP SPA DAY",
              text: `A fun day at the spa with friends; sharing stories, reminiscing the past and talking about the future`,
            },
          ],
        },
      },
    };
  },
};
</script>

<style>
</style>
