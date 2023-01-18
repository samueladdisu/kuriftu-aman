<template>
  <div>
    <div class="E-bg">
      <HeaderApp />
      <TicketHero :data="hero" :nav="true" />
    </div>

    <section class="ticket E-bg">
      <div class="container">
        <div class="ticket-content">
          <img :src="require('@/assets/img/' + data[0].img + '')" alt="" />
        </div>

        <div class="ticket_form">
          <h1 class="title">Buy Waterpark ticket</h1>
          <form class="event-form">
            <div class="form-group">
              <label for="name">Date</label>
              <input
                type="date"
                v-model="date"
                class="form-control"
                id="name"
              />
            </div>

            <div class="guest">
              <div class="form-group">
                <label for="adult">Adult</label>
                <input
                  type="number"
                  v-model="adult"
                  class="form-control"
                  id="adult"
                />
              </div>

              <div class="form-group">
                <label for="child">Child</label>
                <input
                  type="number"
                  v-model="child"
                  class="form-control"
                  id="child"
                />
              </div>
            </div>
          </form>

          <hr />
          <div class="input">
            <div>
              <button @click="passData" class="btn-cta">Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      adult: "",
      child: "",
      hero: {
        title: "Buy Waterpark / Entoto Activities ticket",
        desc: "Whether it’s your first time at Kuriftu Water Park or your 100th, we’ve got your ticket to endless fun! There are many different attractions and slides fit for the entire family. Kuriftu Water Park gives special family deals and discounts on water park tickets. For those visiting with groups of 20 or more, we’ve got special group sales ticket for a discount. Plan your family’s next visit when we are hosting one of our many family events.",
      },
      data: [
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
      ],
    };
  },

  methods: {
    passData() {
      this.$router.push({
        path: "/buyticket/submitInfo",
        query: {
          date: this.date,
          adult: this.adult,
          child: this.child,
          location: "waterpark"
        },
      });
    },
  },
};
</script>

<style lang="scss">
.ticket {
  padding-bottom: 1rem;
  .container {
    .ticket-content {
      img {
        margin-bottom: 1.5rem;
      }
    }
    .ticket_form {
      .event-form {
        .form-group {
          margin-bottom: 1.5rem;
          label {
            @extend .text;
            font-size: 1rem;
            display: block;
            margin: 1rem 0 0.5rem;
          }
          input[type="checkbox"] {
            appearance: checkbox !important;
            margin-right: 5px;
          }
          .register {
            display: inline;
          }
          .form-control {
            width: 100%;
            border: none;
            border: 0.5px solid #000;
            background: none;
            outline: none;
            padding: 0.7rem 0.5rem;
          }
          .event-btn {
            @extend .btn-primary;
          }
        }
        .guest {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
      }
    }
  }
}

.ticket {
  .container {
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
}
</style>
