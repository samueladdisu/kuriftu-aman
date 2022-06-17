<template>
  <section class="top-gallery E-bg">
    <div class="container">
      <div class="image-wrapper">
       <div v-for="item in gallery" :key="item.id" >
          <img :src="require('../assets/img/' + item.src + '')" alt="" />
            
       </div>
   
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["gallery", "gallery2"],   
  // components: {
  //   Stack,
  //   StackItem,
  // },
  mounted() {},
};
</script>

<style lang="scss">
// .top-gallery {
//   padding: 3rem 0 2rem;
//   .container {
//     .image-wrapper {
//       .single-image {
//         margin-top: 2rem;
//       }
//     }
//   }
// }
// @include responsive($md) {
//   .top-gallery {
//     .container {
//       .image-wrapper {
//         display: grid;
//         grid-template-columns: 1fr 1fr;
//         gap: 2rem;
//         .single-image {
//           margin-top: 2rem;
//         }
//       }
//     }
//   }
// }

.top-gallery {
  padding: 3rem 0 2rem;
  display: grid;
  place-items: center;
  @include responsive($lg) {
    padding: 5rem 0 2rem;
  }
  .container {
    .image-wrapper {
      display: grid;
      place-items: center;
      @include responsive($md) {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
      @include responsive($xl) {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 3rem;
      }
 
 

    }
    .see-more {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-top: 3rem;
      @include responsive($md) {
        margin-top: 5rem;
      }
      hr {
        border-style: solid;
        color: $kuriftu-grey;
        opacity: 0.5;

        width: 100%;
      }
      p {
        font-size: 0.7rem;
        text-transform: uppercase;
        color: $kuriftu-grey;
        width: 6rem;
      }
    }
  }
}
</style>
