<template>
  <div>
    <Nuxt />
    <FooterApp />
    <Sticky />
  </div>
</template>

<script>
import HeaderApp from "../components/HeaderApp.vue";
import FooterApp from "../components/FooterApp.vue";

export default {
  components: {
    HeaderApp,
    FooterApp,
  },
  data() {
    return {
      showNav: false,
    };
  },
};
</script>

