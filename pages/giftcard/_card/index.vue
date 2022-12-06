<template>
  <div>
    <HeaderApp />
    <section class="voucher E-bg">
      <div class="container">
        <img :src="require('@/assets/img/' + data[0].img + '')" alt="" />
        <div class="voucher__content">
          <h1 class="title">{{ data[0].title }}</h1>
          <!-- <h5 class="sub-title">price 20,000.00</h5> -->

          <div class="voucher__tabs">
            <div class="tabs__container">
              <p ref="desc" @click="showDesc" class="active">Description</p>
              <p ref="detail" @click="showDetail">Details</p>
            </div>

            <transition>
              <div v-if="desc_content" class="tabs__content">
                <p class="text">{{ data[0].descTitle }}</p>

                <p class="text">Includes:</p>

                <ul class="tab__list">
                  <li class="text" v-for="item in data[0].desc" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </transition>

            <transition>
              <div v-if="detail_content" class="tabs__content">
                <ul class="tab__list">
                  <li class="text" v-for="item in data[0].detail" :key="item">
                    {{ item }}
                  </li>
                </ul>
                <p class="text">
                  Please see our
                  <nuxt-link
                    to="#"
                    style="
                      font-size: 0.7rem;
                      display: inline;
                      text-decoration: underline;
                    "
                  >
                    Terms and Conditions
                  </nuxt-link>
                  for more information
                </p>
              </div>
            </transition>

            <hr />
            <div class="input">
              <div>
                <button @click="formEnquiry" class="btn-cta">
                  Make an enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Sticky path="awash" />
    <GiftEnquiry v-if="enquiry" @close="formEnquiry" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      enquiry: false,
      desc_content: true,
      detail_content: false,
      data: [],
      gift: [
        {
          id: "b1",
          title: "Birthday Deluxe",
          img: "giftvoucher/7.jpg",
          descTitle: "Give the gift of a birthday extravaganza ",
          desc: [
            "Birthday Decore",
            "Birthday Cake",
            "Lunch for ten",
            "Kayaking",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "b2",
          title: "CONGRATULATIONS",
          img: "giftvoucher/6.jpg",
          descTitle:
            "Give the gift of a day at the resort with 1 night stay at Kuriftu Resort & Spa",
          desc: [
            "Lunch for two (excluding alcohol) (Day 1 & 2)",
            "Dinner for two (excluding alcohol)",
            "Breakfast for two (excluding alcohol)",
            "Complimentary Steam & Sauna",
            "Complimentary Massage (1 Sweedish massage & 1 Foot Massage)",
            "Swimming",
            "Kayaking",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "b3",
          title: "HOLIDAY WITH THE FAMILY",
          img: "giftvoucher/5.jpg",
          descTitle:
            "Give the gift of memories with the family, a one-night stay at Kuriftu Resort & Spa Bishoftu",
          desc: [
            "Lunch for four (excluding alcohol) (Day 1 & 2)",
            "Dinner for two (excluding alcohol)",
            "Breakfast for four (excluding alcohol)",
            "Complimentary Steam & Sauna",
            "Complimentary Massage (1 Sweedish massage & 1 Foot Massage) Per room",
            "Swimming",
            "Kayaking",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "b4",
          title: "WANDERLUST",
          img: "giftvoucher/5.jpg",
          descTitle:
            "A day to be with yourself, a one-night stay at Kuriftu Resort & Spa Bishoftu",
          desc: [
            "Lunch for one (excluding alcohol) (Day 1 & 2)",
            "Dinner for one (excluding alcohol)",
            "Breakfast for one (excluding alcohol)",
            "Complimentary Steam & Sauna",
            "Complimentary Massage (1 Sweedish massage & 1 Foot Massage) Per room",
            "Swimming",
            "Kayaking",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "b5",
          title: "FRIENDCATION",
          img: "giftvoucher/5.jpg",
          descTitle:
            "A trip with your friends for a one-night stay at Kuriftu Resort & Spa Bishoftu",
          desc: [
            "Lunch for four (excluding alcohol) (Day 1 & 2)",
            "Dinner for four (excluding alcohol)",
            "Breakfast for four (excluding alcohol)",
            "Complimentary Steam & Sauna",
            "Complimentary Massage (1 Sweedish massage & 1 Foot Massage) Per room",
            "Swimming",
            "Kayaking",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "w1",
          title: "BIRTHDAY SUPREME",
          img: "giftvoucher/7.jpg",
          descTitle: "Give the gift of a birthday extravaganza ",
          desc: [
            "Entrance ticket to the waterpark for ten",
            "Access to all water houses and slides",
            "Access to the circus ( available on weekends)",
            "Birthday Decore",
            "Birthday Cake",
            "Snacks and Drinks",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "w2",
          title: "CONGRATULATIONS",
          img: "giftvoucher/6.jpg",
          descTitle:
            "Give the gift of a day at the resort with 1 night stay at Kuriftu Resort & Spa",
          desc: [
            "Entrance ticket to the waterpark for two",
            "Access to all water houses and slides",
            "Access to the circus ( available on weekends)",
            "Lunch for two (excluding alcohol)",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "w3",
          title: "HOLIDAY WITH THE FAMILY",
          img: "giftvoucher/5.jpg",
          descTitle:
            "Give the gift of memories with the family, a one-night stay at Kuriftu Resort & Spa Bishoftu",
          desc: [
            "Entrance ticket to the waterpark for five",
            "Dinner for two (excluding alcohol)",
            "Access to all water houses and slides",
            "Access to the circus ( available on weekends)",
            "Lunch for five (excluding alcohol)",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "w4",
          title: "WANDERLUST",
          img: "giftvoucher/5.jpg",
          descTitle:
            "A day to be with yourself, a one-night stay at Kuriftu Resort & Spa Bishoftu",
          desc: [
            "Entrance ticket to the waterpark for one",
            "Access to all water houses and slides",
            "Access to the circus ( available on weekends)",
            "Lunch for one (excluding alcohol)",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "w5",
          title: "FRIENDCATION",
          img: "giftvoucher/5.jpg",
          descTitle:
            "A trip with your friends for a one-night stay at Kuriftu Resort & Spa Bishoftu",
          desc: [
            "Entrance ticket to the waterpark for five",
            "Access to all water houses and slides",
            "Access to the circus ( available on weekends)",
            "Lunch for five (excluding alcohol)",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "e1",
          title: "Birthday supreme",
          img: "giftvoucher/4.jpg",
          descTitle: "Give the gift of a birthday extravaganza ",
          desc: [
            "Birthday Decore",
            "Birthday Cake",
            "Snack and drinks (excluding alcohol)",
            "Paintball",
            "Go-kart",
            "Archery",
            "Rock Climbing",
            "Ziplining",
            "Shuttle service within the park",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "e2",
          title: "BIRTHDAY THRILL",
          img: "giftvoucher/3.jpg",
          descTitle:
            "Give the gift of a day at the resort with 1 night stay at Kuriftu Resort & Spa",
          desc: [
            "Birthday Decore",
            "Birthday Cake",
            "Paintball",
            "Go-kart",
            "Archery",
            "Rock Climbing",
            "Ziplining",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "e3",
          title: "CONGRATULATIONS",
          img: "giftvoucher/2.jpg",
          descTitle:
            "Give the gift of a day at the resort with 1 night's stay at Kuriftu Resort & Spa Entoto",
          desc: [
            "Lunch for four (excluding alcohol) (Day 1 & 2)",
            "Dinner for two (excluding alcohol)",
            "Breakfast for four (excluding alcohol)",
            "Complimentary Steam & Sauna",
            "Complimentary Massage (1 Sweedish massage & 1 Foot Massage)",
            "Three activities of their choice (Go-Kart, Zipline, Wall Climbing, Rope Course, Horse Riding, Trampoline, Paint Ball)",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "e4",
          title: "HOLIDAY WITH THE FAMILY",
          img: "giftvoucher/4.jpg",
          descTitle:
            "Give the gift of memories with the family, a one-night stay at Kuriftu Resort & Spa Entoto",
          desc: [
            "Lunch for four (excluding alcohol) (Day 1 & 2)",
            "Dinner for four (excluding alcohol)",
            "Breakfast for four (excluding alcohol)",
            "Complimentary Steam & Sauna",
            "Complimentary Massage (1 Sweedish massage & 1 Foot Massage) Per room",
            "Three activities of their choice (Go-Kart, Zipline, Wall Climbing, Rope Course, Horse Riding, Trampoline, Paint Ball)",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "e5",
          title: "WANDERLUST",
          img: "giftvoucher/1.jpg",
          descTitle:
            "A day to be with yourself, a one-night stay at Kuriftu Resort & Spa Bishoftu",
          desc: [
            "Lunch for one (excluding alcohol) (Day 1 & 2)",
            "Dinner for one (excluding alcohol)",
            "Breakfast for one (excluding alcohol)",
            "Complimentary Steam & Sauna",
            "Complimentary Massage (1 Sweedish massage & 1 Foot Massage) Per room",
            "Three activities of their choice (Go-Kart, Zipline, Wall Climbing, Rope Course, Horse Riding, Trampoline, Paint Ball)",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "e6",
          title: "FRIENDCATION",
          img: "giftvoucher/5.jpg",
          descTitle:
            "A trip with your friends for a one-night stay at Kuriftu Resort & Spa Bishoftu",
          desc: [
            "Lunch for four (excluding alcohol) (Day 1 & 2)",
            "Dinner for four (excluding alcohol)",
            "Breakfast for four (excluding alcohol)",
            "Complimentary Steam & Sauna",
            "Complimentary Massage (1 Sweedish massage & 1 Foot Massage) Per room",
            "Three activities of their choice (Go-Kart, Zipline, Wall Climbing, Rope Course, Horse Riding, Trampoline, Paint Ball)",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "l1",
          title: "Birthday Deluxe",
          img: "giftvoucher/7.jpg",
          descTitle: "Give the gift of a birthday extravaganza ",
          desc: [
            "Birthday Decore",
            "Birthday Cake",
            "Lunch for ten",
            "Boat Ride",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "l2",
          title: "CONGRATULATIONS",
          img: "giftvoucher/6.jpg",
          descTitle:
            "Give the gift of a day at the resort with 1 night stay at Kuriftu Resort & Spa Lake Tana",
          desc: [
            "Lunch for two (excluding alcohol) (Day 1 & 2)",
            "Dinner for two (excluding alcohol)",
            "Breakfast for two (excluding alcohol)",
            "Complimentary Steam & Sauna",
            "Complimentary Massage (1 Sweedish massage & 1 Foot Massage)",
            "Swimming",
            "Boat Ride",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "l3",
          title: "HOLIDAY WITH THE FAMILY",
          img: "giftvoucher/5.jpg",
          descTitle:
            "Give the gift of memories with the family, a one-night stay at Kuriftu Resort & Spa Bishoftu",
          desc: [
            "Lunch for four (excluding alcohol) (Day 1 - 3)",
            "Dinner for four (excluding alcohol) (Day 1 & 2)",
            "Breakfast for four (excluding alcohol) (Day 2 & 3)",
            "Complimentary Massage (1 Sweedish massage & 1 Foot Massage) Per room Per stay",
            "Swimming",
            "Boat Ride",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "l4",
          title: "WANDERLUST",
          img: "giftvoucher/5.jpg",
          descTitle:
            "A day to be with yourself, a one-night stay at Kuriftu Resort & Spa Bishoftu",
          desc: [
            "Lunch for one (excluding alcohol) (Day 1 & 2)",
            "Dinner for one (excluding alcohol)",
            "Breakfast for one (excluding alcohol)",
            "Complimentary Steam & Sauna",
            "Complimentary Massage (1 Sweedish massage & 1 Foot Massage) Per room",
            "Swimming",
            "Boat Ride",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "l5",
          title: "FRIENDCATION",
          img: "giftvoucher/5.jpg",
          descTitle:
            "A trip with your friends for a one-night stay at Kuriftu Resort & Spa Bishoftu",
          desc: [
            "Lunch for four (excluding alcohol) (Day 1 - 3)",
            "Dinner for four (excluding alcohol) (Day 1 & 2)",
            "Breakfast for four (excluding alcohol) (Day 2 & 3)",
            "Complimentary Steam & Sauna",
            "Complimentary Massage (1 Sweedish massage & 1 Foot Massage) Per room",
            "Swimming",
            "Boat Ride",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "bo1",
          title: "BIRTHDAY PAMPER",
          img: "giftvoucher/5.jpg",
          descTitle: "Give the gift of a birthday pamper",
          desc: ["Steam & Sauna", "Jacuzzi", "Swedish Massage"],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "bo2",
          title: "DELUXE SPA DAY",
          img: "giftvoucher/5.jpg",
          descTitle: "Give the gift of a day at Boston Day Spa ",
          desc: [
            "Steam & Sauna",
            "Jacuzzi",
            "Swedish Massage",
            "Pedicure/Manicure",
            "Wax",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "bo3",
          title: "Supreme SPA DAY",
          img: "giftvoucher/5.jpg",
          descTitle: "Feel fresh and relaxed with full Boston Day Spa package",
          desc: [
            "Steam & Sauna",
            "Jacuzzi",
            "Swedish Massage",
            "Pedicure/Manicure",
            "Wax",
            "Full Facial",
            "Hair do/ Hair cut",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "bo4",
          title: "LOVER'S PAMPER DAY",
          img: "giftvoucher/5.jpg",
          descTitle:
            "A day to be with your love, sharing calmness and refreshing oneself at Boston Day Spa for two",
          desc: [
            "Steam & Sauna",
            "Jacuzzi",
            "Swedish Massage",
            "Full Facial",
            "Hair do/ Hair cut",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
        {
          id: "bo5",
          title: "GROUP SPA DAY",
          img: "giftvoucher/5.jpg",
          descTitle:
            "A fun day at the spa with friends; sharing stories, reminiscing the past and talking about the future",
          desc: [
            "Steam & Sauna",
            "Jacuzzi",
            "Swedish Massage",
            "Hair do/ Hair cut",
          ],
          detail: [
            "Digital gift card will be delivered through email",
            "Gift has a validity of 6-month from purchase date",
          ],
        },
      ],
    };
  },
  methods: {
    formEnquiry() {
      this.enquiry = !this.enquiry;
    },
    showDesc() {
      this.desc_content = true;
      this.detail_content = false;
      this.$refs.detail.classList.remove("active");
      this.$refs.desc.classList.add("active");
    },
    showDetail() {
      this.detail_content = true;
      this.desc_content = false;

      this.$refs.desc.classList.remove("active");
      this.$refs.detail.classList.add("active");
    },
  },
  created() {
    this.gift.map((item) => {
      if (item.id == this.$route.params.card) {
        this.data.push(item);
        console.log("item", item.img);
        console.log("data", this.data[0].img);
      }
    });
  },
};
</script>

<style lang="scss">
.voucher {
  padding: 4rem 0;
  .container {
    img {
      margin-bottom: 2rem;
    }
    .voucher__content {
      h1 {
        margin-bottom: 0.6rem;
      }
      h5 {
        margin-bottom: 0.4rem;
      }
      .voucher__tabs {
        .v-enter-active {
          transition: opacity 0.5s ease;
        }

        .v-enter-from,
        .v-leave-to {
          opacity: 0;
        }
        .tabs__container {
          width: 60%;

          display: flex;
          justify-content: space-between;
          margin: 2rem 0 1rem;
          .active {
            color: #000;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              top: 100%;
              right: 0;
              width: 100%;
              height: 2px;
              background: #000;
            }
          }
          p {
            font-weight: bold;
            font-family: "Neue Helvetica Medium";
            text-transform: capitalize;
            color: #808080;
            font-weight: 400;
            font-size: 1rem;
            cursor: pointer;
          }
        }
        .tabs__content {
          min-height: 15rem;
          p {
            margin-bottom: 0.8rem;
          }
          .tab__list {
            list-style: disc;
            margin-bottom: 2rem;
            li {
              margin-bottom: 1rem;
            }
          }
        }
        .input {
          select {
            width: 100%;
            max-width: 10rem;
            margin: 1rem 0;
            padding: 0.8rem 0.5rem;
            background: transparent;
          }
        }
      }
    }
  }
}

@include responsive($md) {
  .voucher {
    .container {
      .voucher__content {
        .voucher__tabs {
          .input {
            display: flex;
            gap: 2rem;
            align-items: center;
            width: 100%;
            select {
              width: 5rem;
            }
          }
        }
      }
    }
  }
}

@include responsive($lg) {
  .voucher {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 4rem 1fr 1fr;
      grid-template-areas: "img img . content content";
      img {
        grid-area: img;
      }
      .voucher__content {
        grid-area: content;
      }
    }
  }
}
</style>
