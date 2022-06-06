<template>
  <div>
    <div class="acc-wrapper">
      <Intro :data="acc.accTitle" class="com" />
      <section class="rooms">
        <div class="container">
          <div class="single-room" v-for="room in acc.rooms" :key="room.id">
            <img :src="require('@/assets/img/' + room.img + '')" alt="" />
            <h5 class="sub-title">
              {{ room.subTitle }}
            </h5>
            <h1 class="title">
              {{ room.title }}
            </h1>
            <p class="text">
              {{ room.text }}
            </p>
            <nuxt-link :to="room.uri" class="link">Explore</nuxt-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ["acc"],
};
</script>

<style lang="scss">
.acc-wrapper {
  background: #f3eee7;
  .com {
    padding-top: 4rem;
  }
  .rooms {
    margin-top: 3rem;
    .container {
      .single-room {
        h5 {
          margin-top: 1rem;
        }
        h1 {
          margin: 0.7rem 0 1rem;
        }
        a {
          margin: 1.5rem 0;
        }
      }
    }
  }
}

@include responsive($md) {
  .acc-wrapper {
    .rooms {
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
    }
  }
}
</style>
