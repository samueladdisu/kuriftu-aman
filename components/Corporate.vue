<template>
  <div class="E-bg">
    <HeroSlide
      :img="corp.slides"
      :title="corp.heroTitle"
      :subTitle="corp.heroSubTitle"
      :text="corp.heroText"
      :link="corp.heroLink"
      :url="corp.heroUrl"
    />

    <Feature :feature="corp.feature" />
    <LeftFeature :feature="corp.Lfeature" />
    <Feature :feature="corp.feature1" v-if="corp.feature1" />
    <LeftFeature :feature="corp.Lfeature1" v-if="corp.Lfeature1" />

    <section v-if="corp.venues" class="venues">
      <h1 class="title center venue__title">Venues</h1>
      <div class="container">
        <div class="single-venues" v-for="item in corp.venues" :key="item.id">
          <img :src="require('@/assets/img/' + item.img + '')" alt="" />
          <div class="venues__content">
            <h1 class="title">{{ item.title }}</h1>
            <p class="text">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <OtherAcc title="Personalization" :other="corp.other" />
  </div>
</template>

<script>
export default {
  props: ["corp"],
};
</script>

<style>
</style>
