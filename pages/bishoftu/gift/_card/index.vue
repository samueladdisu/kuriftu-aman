<template>
  <div>
    <HeaderApp />
    <Destinav base="/bishoftu/" home="/bishoftu" dir="Bishoftu" />
    <section class="voucher E-bg">
      <div class="container">
        <img src="@/assets/img/gift_sub.svg" alt="" />

        <div class="voucher__content">
          <h1 class="title">Birthday Supreme</h1>
          <h5 class="sub-title">price 20,000.00</h5>

          <div class="voucher__tabs">
            <div class="tabs__container">
              <p class="text">Description</p>

              <p class="text">Details</p>
            </div>

            <div class="tabs__content">
              <p class="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
                perspiciatis!
              </p>

              <p class="text">Inclusions</p>

              <ul class="tab__list">
                <li class="text">Two nights Lorem ipsum dolor sit amet.</li>
                <li class="text">Two nights Lorem ipsum dolor sit amet.</li>
                <li class="text">Two nights Lorem ipsum dolor sit amet.</li>
                <li class="text">Two nights Lorem ipsum dolor sit amet.</li>
                <li class="text">Choice of Lorem ipsum dolor sit amet.</li>
              </ul>

              <hr />
            </div>
            <div class="input">
              <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>

              <div>
                <nuxt-link to="#" class="btn-cta"> Purchase </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <BishFooter :footer="footer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          url: "/",
        },
      },
    };
  },
  mounted() {},
};
</script>

<style>
</style>
