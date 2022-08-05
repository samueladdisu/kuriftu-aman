<template>
  <div>
    <div class="E-bg">
      <section class="gift__hero">
        <div class="container">
          <h1 class="title center">
            {{ gift.hero.title }}
          </h1>
          <p class="text center">
            Surprise your loved ones with an extraordinary adventure! Offer memories that last a lifetime with the Kurfitu Gift Card that can be customized per destination
          </p>
        </div>
      </section>
      <GiftSection :section="gift.feature" />

      <section class="ques">
        <div class="container">
          <h1 class="title">got a gift voucher?</h1>

          <p class="text">Card Terms & Conditions</p>
        </div>
      </section>

      <GiftSection :section="gift.bishoftu" v-if="gift.bishoftu" />
      <GiftSection :section="gift.waterpark" v-if="gift.waterpark" />
      <GiftSection :section="gift.entoto" v-if="gift.entoto" />
      <GiftSection :section="gift.laketana" v-if="gift.laketana" />
      <GiftSection :section="gift.boston" v-if="gift.boston" />
      <GiftSection :section="gift.awash" v-if="gift.awash" />
    </div>
  </div>
</template>

<script>
import GiftSection from "./GiftSection.vue";
export default {
  props: ["gift"],
  components: { GiftSection },
};
</script>

<style lang="scss">
.gift__hero {
  padding: 3rem 0;
  .container {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      text-align: center;
      margin: 0 auto 1rem;
      max-width: 44.5rem;
    }
    a {
      @extend .btn-font;
      color: #313131;
      padding: 0.7rem 0;
      background: #fff;
      border: 1px #707070 solid;
      max-width: 24.5rem;
      text-align: center;
      margin: 0 auto;
    }
  }
}
.ques {
  background: #fff;
  padding: 2rem 0;
  margin-bottom: 2rem;
}

@include responsive($md) {
  .ques {
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        font-size: 2rem;
      }
    }
  }
}
</style>
