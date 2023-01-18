<template>
  <div>
    <div class="E-bg">
      <HeaderApp />
      <TicketHero :data="hero" :nav="false" />

      <section class="info_content">
        <div class="container">
          <form class="event-form" @submit.prevent="payment">
            <div class="form-group">
              <label for="name">First Name</label>
              <input
                type="text"
                v-model="formData.first_name"
                class="form-control"
                id="name"
              />
            </div>

            <div class="form-group">
              <label for="name">Last Name</label>
              <input
                type="text"
                v-model="formData.last_name"
                class="form-control"
                id="name"
              />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                v-model="formData.email"
                class="form-control"
                id="email"
              />
            </div>

            <div class="form-group">
              <label for="phone">Phone</label>
              <input
                type="tel"
                v-model="formData.phone"
                class="form-control"
                id="phone"
              />
            </div>

            <div class="form-group">
              <label for="currency">Currency</label>
              <select
                class="form-control"
                v-model="formData.currency"
                id="currency"
              >
                <option>USD</option>
                <option>ETB</option>
              </select>
            </div>

            <div class="form-group">
              <input
                type="submit"
                value="Procced to Payment"
                class="btn btn-cta payment"
              />
            </div>
          </form>

          <div class="cart">
            <div class="cart-content">
              <h1 class="title">Summary</h1>
              <div class="cart-item">
                <h2>Date</h2>
                <p>{{ formData.date }}</p>
                <h2>Guests</h2>
                <p>{{ formData.adult }} Adults, {{ formData.kids }} Children</p>
                <hr />
                <h2>Total: $500</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        currency: "",
        date: this.$route.query.date,
        adult: this.$route.query.adult,
        kids: this.$route.query.child,
        quantity: +this.$route.query.adult + +this.$route.query.child,
        location: this.$route.query.location,
      },
      hero: {
        title: "Submit Your Info",
        desc: "Tickets purchased online will be sent via email with a QR code that will be scanned and redeemed at the gate",
      },
    };
  },
  methods: {
    async payment() {
      try {
        const res = await axios.post(
          "https://tickets.kuriftucloud.com/request",
          this.formData
        );

        if (res.data.msg === "quantity_greater_10") {
          alert("Quantity should not be greater than 10");
        }
        if (res.data.url) {
          console.log(res.data.url);
          window.location.href = res.data.url;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    console.log(this.$route.query);
  },
};
</script>

<style lang="scss">
.info_content {
  padding: 2rem 0;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "cart cart" "ticket_form ticket_form";
    // gap: 4rem;
    height: 45rem;
    .event-form {
      grid-area: ticket_form;
      .form-group {
        margin-bottom: 1.5rem;
        .payment {
          padding: 0.7rem 1.5rem;
        }
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
    .cart {
      grid-area: cart;
      .cart-content {
        // padding: 1rem;
        width: 90%;
        h1 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .cart-item {
          h2 {
            font-size: 1rem;
            margin-bottom: 0.5rem;
            font-family: "Neue Helvetica Medium";
          }
          p {
            font-size: 0.8rem;
            margin-bottom: 0.5rem;
            font-family: "Neue Helvetica thin";
            font-weight: 600;
          }
          hr {
            margin: 1rem 0;
          }
        }
      }
    }
  }
}

@include responsive($md) {
  .info_content {
    .container {
      grid-template-areas: "ticket_form cart" "ticket_form cart";
      gap: 4rem;
      height: 100%;
      .cart {
        .cart-content {
          padding: 2rem 1rem 1rem 0;
        }
      }
    }
  }
}
</style>