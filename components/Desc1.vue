<template>
  <div>
    <div class="desc" v-for="item in desc" :key="item.id">
      <img
        :src="require('@/assets/img/' + item.pic1 + '')"
        class="pic1"
        alt=""
      />
      <img
        :src="require('@/assets/img/' + item.pic2 + '')"
        class="pic2"
        alt=""
      />

      <div class="desc__text">
        <div>
          <h1 class="title" v-if="item.title">
            {{ item.title }}
          </h1>
          <p class="text">
            {{ item.text }}
          </p>
        </div>
        <div class="desc__lower" v-if="item.url">
          <hr />
          <a
            :href="
              'https://reservations.kurifturesorts.com/reserve.php' +
              item.url +
              ''
            "
            target="_blank"
            class="link"
            >Book Now</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["desc"],
};
</script>

<style lang="scss">
.desc {
  display: grid;
  row-gap: 1.5rem;
  grid-template-columns: 1fr 1fr 1.5rem 1fr 1fr;
  grid-template-areas:
    "pic1 pic1 . pic2 pic2"
    "text text text text text";
  .pic1 {
    grid-area: pic1;
  }
  .pic2 {
    grid-area: pic2;
  }
  .desc__text {
    grid-area: text;
    hr {
      margin: 2.5rem 0 1.5rem;
    }
  }
}
@include responsive($lg) {
  .desc {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
    grid-template-areas: "pic1 pic2 text";

    .desc__text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>
