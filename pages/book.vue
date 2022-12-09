<template>
  <div class="main E-bg">
    <HeaderApp />

    <section class="entoto-general">
      <div class="container">
        <div class="main-title">
          <h2 class="title">This page is under Construction</h2>

          <button class="btn btn-primary" @click="goBack">Go Back</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.main {
  .entoto-general {
    margin-top: 5rem;
    padding-bottom: 5rem;
    @include responsive($lg) {
      margin-top: 8rem;
    }
    .container {
      .main-title {
        display: grid;
        place-items: center;
        h2 {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }
        p {
          text-align: center;
          color: $kuriftu-grey;
          width: 20rem;
          margin-top: 1rem;
          font-size: 0.8rem;
        }
        @include responsive($md) {
          h2 {
            font-size: 2rem;
          }
          p {
            width: 40rem;
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>
