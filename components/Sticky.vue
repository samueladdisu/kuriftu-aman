<template>
  <section class="sticky-book">
    <div class="container row" v-if="this.page != 'boston'">
      <div class="book-stay col-2">
        <h2 class="title">book your stay</h2>
        <img src="@/assets/img/icons/next2.svg" alt="" />
      </div>

      <div class="location col-3">
        <h5 class="sub-title">location</h5>
        <select v-model="location">
          <option value="awash">Awash Falls</option>
          <option value="bishoftu">Bishoftu</option>
          <option value="entoto">Entoto</option>
          <option value="tana">Lake Tana</option>
          <option value="afar">Afar</option>
        </select>
      </div>
      <div class="form-group bootstrap-dates col-3">
        <h5 class="sub-title">Select dates</h5>
        <input
          type="text"
          class="form-control"
          name="daterange"
          id="date"
          value=""
          readonly
        />
      </div>

      <div class="guests col-2">
        <h5 class="sub-title">guests</h5>

        <select v-model="guest">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div class="cta-container col-2">
        <a
          to="#"
          style="cursor: pointer"
          class="btn-primary"
          @click.prevent="show"
        >
          Check availability
        </a>
      </div>
    </div>
    <div class="container row" v-else>
      <div class="book-stay col-3 col-offset-2">
        <h2 class="title">book spa day</h2>
        <img src="@/assets/img/icons/next2.svg" alt="" />
      </div>

      <div class="location col-3">
        <h5 class="sub-title">Call For Reservation</h5>
        <a href="tel:+251116623808" class="text">+251 11 662 3808</a>
        <a href="tel:+251116636557" class="text">+251 11 663 6557</a>
      </div>

      <div class="cta-container col-3">
        <a href="bostonMenu.pdf" target="_blank" class="btn-primary"
          >View spa menu</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["path", "page"],
  data() {
    return {
      location: this.path,
      checkin: "",
      checkout: "",
      guest: "",
    };
  },
  methods: {
    show() {
      console.log("Location", this.location);
      console.log("check in", this.checkin);
      console.log("check out", this.checkout);
      console.log("Guest", this.guest);
      window.open(
        `https://reservations.kurifturesorts.com/reserve.php?location=${this.location}&checkin=${this.checkin}&checkout=${this.checkout}`,
        "_blank"
      );
    },
  },
  mounted() {
    var start, end;
    var today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    let tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const td = String(tomorrow.getDate()).padStart(2, "0");
    const tm = String(tomorrow.getMonth() + 1).padStart(2, "0"); //January is 0!
    const ty = tomorrow.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    tomorrow = tm + "/" + td + "/" + ty;

    start = yyyy + "-" + mm + "-" + dd;
    end = ty + "-" + tm + "-" + td;
    this.checkin = start;
    this.checkout = end;

    console.log("inital start", this.checkin);
    console.log("inital end", this.checkout);

    console.log("this", this);

    let vm = this;
    $(document).ready(function () {
      console.log("initial start", start);
      console.log("initial end", end);
      $("#date").daterangepicker({ drops: "up", parentEl: ".sticky-book" });
      $("#date").data("daterangepicker").setStartDate(today);
      $("#date").data("daterangepicker").setEndDate(tomorrow);

      $("#date").on("apply.daterangepicker", function (ev, picker) {
        // console.log(picker.startDate.format('YYYY-MM-DD'));
        // console.log(picker.endDate.format('YYYY-MM-DD'));

        start = picker.startDate.format("YYYY-MM-DD");
        end = picker.endDate.format("YYYY-MM-DD");
        console.log("updated start", start);
        console.log("updated end", end);

        vm.checkin = start;
        vm.checkout = end;
      });
    });
  },
};
</script>

<style lang="scss">
.sticky-book {
  display: none;
  .container {
    .location {
      select {
        @extend .text;
        option {
          @extend .text;
        }
      }
    }
    .guests {
      select {
        @extend .text;
        option {
          @extend .text;
        }
      }
    }
  }
}
@include responsive($xl) {
  .sticky-book {
    z-index: 999;
    display: block;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    border-top: 0.07143rem solid #d5d1c8;
    background: #fff;
    bottom: 0;
    left: 0;
    .container {
      .location {
        select {
          width: 90%;
          padding: 0.5rem 0.2rem;
          margin-top: 0.2rem;
          border: none;
          border-bottom: 1px #707070 solid;
          outline: none;
        }
      }
      align-items: center;
      .book-stay {
        display: flex;
        align-items: center;
      }
      .select-dates {
        .t-datepicker {
          position: relative;
          .t-datepicker-day {
            position: absolute;
            top: -950%;
          }
        }
      }
      .bootstrap-dates {
        position: relative;
        input {
          width: 90%;
          padding: 0.5rem 0.2rem;
          margin-top: 0.2rem;
          border: none;
          border-bottom: 1px #707070 solid;
          outline: none;
        }
      }
      .guests {
        padding-left: 1rem;
        select {
          padding: 0.5rem 0.2rem;
          margin-top: 0.2rem;
          border: none;
          border-bottom: 1px #707070 solid;
          outline: none;
        }
      }
    }
  }
}
</style>
