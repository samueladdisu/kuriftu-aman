<template>
  <div class="main E-bg">
    <HeaderApp />

    <section class="careers">
      <div class="container">
        <div class="main-title">
          <h2 class="title">There is no vaccancy at the moment</h2>
        </div>
      </div>
    </section>
    <Sticky path="awash" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.careers {
  height: 50vh;
  .container {
    height: 100%;
    display: grid;
    place-items: center;
  }
}
</style>
