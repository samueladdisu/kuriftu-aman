<template>
  <div>
    <HeaderApp />
    <Destinav base="/bishoftu/" home="/bishoftu" dir="Bishoftu" />

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
