<template>
  <div>
    <HeaderApp />
    <Destinav
      base="waterpark/"
      home="waterpark/"
      dir="Water Park"
      class="waterpark-nav"
    />
    <Hero video="725627417" class="E-bg" />
    <Intro :data="bishTitle" class="E-bg" />
    <section class="desti-highlight">
      <div class="container">
        <div class="single-high">
          <img src="@/assets/img/waterpark/WaterhouseLong.webp" alt="" />
          <h1 class="title">water house</h1>
          <p class="text">
            Water houses, junior slides, slippery stairs, bridges, splash roofs
            and tilting buckets, the giant playground which hosts many fun
            filled activities for children sits in the middle of a shallow pool
            where children can play and swim for hours. If hosts two open slides
            and two tunnel slides adopted for younger children seeking some
            splash filled adventure!
          </p>
        </div>
        <div class="single-high">
          <img src="@/assets/img/waterpark/wavepoolLong.webp" alt="" />
          <h1 class="title">wave pool</h1>
          <p class="text">
            Welcome to our recreation of nature’s ocean shore - the wave pool’s
            artificial waves promise a fun-filled, action packed activity for
            children and adults alike. Stay on the shore where the water is
            shallow and watch as the waves crash on your feet, or go to the deep
            end where you will rise and fall with the larger tides for a
            thrilling adventure that will sweep you off your feet as you get
            pummeled by one wave after another!
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/waterpark/SpiralSlideLong.webp" alt="" />
          <h1 class="title">Spiral Slides</h1>
          <p class="text">
            Hurl your body down the yellow tube where you will ride in total
            darkness, or jump-into a raft with a partner and slide down one of
            the two checkered tubes that will zig and zag you down at great
            speeds till you are ejected into the splash pool. Some screams from
            the tunnel can probably be heard 35 km away all the way to Addis!
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/waterpark/boomLong.webp" alt="" />
          <h1 class="title">Boomerang Slide</h1>
          <p class="text">
            The ultimate thrill slide - this checkered blue and white yellow
            slide sitting at a height of 18 meters above the park grounds
            provides a magnificent view of the lush green landscape of the town
            of Bishoftu. You will be sitting in a yellow raft and sliding down
            at unnerving speeds while twisting and turning in all directions, at
            times in the dark, swishing down the walls of the gigantic tube
            until it spits you out at the bottom into a giant tub. Hang on for a
            thrill of a lifetime!
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/waterpark/FikatCircusLong.webp" alt="" />
          <h1 class="title">Fekat Circus</h1>
          <p class="text">
            Kuriftu Water Park is proud to feature the incredibly talented Fekat
            Circus troupe! Fekat Circus, the Blossoming Circus in Amharic, was
            established in Addis Abeba in 2008 by young Ethiopian jugglers and
            acrobats. Today it comprises 30 professional artists who perform in
            Ethiopia and internationally. Besides staging professional shows,
            Fekat Circus spreads the circus arts in the capital through its
            school and outreach programs (in orphanages, private schools, and
            events).

            <!-- Since 2009, Fekat Circus has also provided entertainment
            activities daily at the pediatric ward of the Black Lion Hospital.
            One of the latest Fekat Circus brands is the “Monthly show”. On the
            last weekend of each month, Addis Abeba have the chance to attend
            this extravagant event that is gaining more and more popularity.
            Shows are hosted over the weekends at The Kurfitu Waterpark with
            three 30 minute time slots between 12:00 pm-5:00 pm, activities are
            as follows: Cube act, Contemporary Dance & Circus, Aerial Tissue
            Act, Antipod Act, and Ladder Act -->
          </p>
        </div>

        <div class="single-high">
          <img src="@/assets/img/waterpark/GiftshopLong.webp" alt="" />
          <h1 class="title">The Waterpark Giftshop</h1>
          <p class="text">
            Need to buy a pair of swimming trunks? Look no further! The
            Waterpark Giftshop is stocked with all the needs of guests entering
            the park - from bathing suits / swimming trunks ranging from
            toddlers to adults and accessories, we've got you covered!
          </p>
        </div>
      </div>
    </section>

    <OtherAcc title="waterpark experiences" :other="other" />

    <BishFooter :footer="footer" />
    <Sticky path="bishoftu" />
  </div>
</template>

<script>
import Hero from "../../components/Hero.vue";
import Intro from "../../components/Intro.vue";
export default {
  data() {
    return {
      slides: [
        "bishoftu/acc/pre5.webp",
        "bishoftu/acc/pre6.webp",
        "bishoftu/acc/pre7.webp",
        "bishoftu/acc/pre8.webp",
      ],
      bishTitle: {
        subTitle: "waterpark",
        title: "kuriftu Waterpark",
        text: `Whether you are looking to spend an afternoon of fun with family or friends, searching the perfect weekend getaway, planning a birthday or group event, or even surprising a loved one, Kuriftu Water Park is your ultimate choice for a premier entertainment destination with guaranteed fun!`,
      },
      other: [
        {
          img: "waterpark/exp/exp1.webp",
          title: "Birthday",
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
        },
        {
          img: "waterpark/exp/exp2.webp",
          title: "Events",
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
        },
        {
          img: "waterpark/exp/exp3.webp",
          title: "Social Events",
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Consectetur nostrum minima facilis alias magni! Harum ea amet
            asperiores provident accusamus.`,
        },
      ],
      footer: {
        title: "Kuriftu WaterPark",
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
          url: "https://goo.gl/maps/pqFWwxy23p6iHb8K8",
        },
      },
    };
  },
  created() {
    console.log(this.$route.path);
  },
  components: { Hero, Intro },
};
</script>

<style lang="scss">
.water__gap {
  background: #f3eee7;
  height: 3rem;
  width: 100%;
}

@include responsive($xl) {
  .waterpark-nav {
    .container {
      .wrapper {
        .link-destination {
          .line {
            width: 40% !important;
          }
        }
      }
    }
  }
}
</style>
