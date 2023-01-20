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
          <h1 class="title">Buy Entoto Activities ticket</h1>
          <form class="event-form">
            <div class="form-group">
              <label for="date">Date</label>
              <input type="date" class="form-control" id="date" />
            </div>

            <div class="form-group">
              <label for="type">Type</label>
              <select class="form-control" id="type">
                <option>Mountain Bike</option>
                <option>Mountain Bike</option>
                <option>Mountain Bike</option>
                <option>Mountain Bike</option>
              </select>
            </div>

            <div class="guest">
              <div class="form-group">
                <label for="adult">Adult</label>
                <input type="number" class="form-control" id="adult" />
              </div>

              <div class="form-group">
                <label for="child">Child</label>
                <input type="number" class="form-control" id="child" />
              </div>
            </div>
          </form>

          <hr />
          <div class="input">
            <div>
              <button class="btn-cta">Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TicketHero from "../../components/TicketHero.vue";

export default {
  data() {
    return {
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
  methods: {},
  components: { TicketHero },
};
</script>

