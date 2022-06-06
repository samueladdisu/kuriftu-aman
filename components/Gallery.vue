<template>
  <section class="top-gallery E-bg">
    <div class="container">
      <div class="image-wrapper">
        <div class="single-image" data-aos="zoom-in">
          <img loading="lazy" src="../assets/img/dz-cover.jpg" alt="" />
        </div>
        <div class="single-image1 grid-top3" data-aos="zoom-in">
          <img loading="lazy" src="../assets/img/waterpark2.jpg" alt="" />
        </div>
        <div class="single-image1 grid-top" data-aos="zoom-in">
          <img src="../assets/img/kuriftu dec 22-5391-min (1).jpg" alt="" />
        </div>
        <div class="single-image grid-top2" data-aos="zoom-in">
          <img src="../assets/img/kuriftu dec 22-5422-min (1).jpg" alt="" />
        </div>
        <div class="single-image grid-top" data-aos="zoom-in">
          <img loading="lazy" src="../assets/img/_DSC5641 (2)-min.jpg" alt="" />
        </div>
        <div class="single-image1 grid-top3" data-aos="zoom-in">
          <img loading="lazy" src="../assets/img/_DSC5351 (2)-min.jpg" alt="" />
        </div>
        <div class="single-image1 grid-top" data-aos="zoom-in">
          <img loading="lazy" src="../assets/img/_DSC5820 (2)-min.jpg" alt="" />
        </div>

        <div class="single-image grid-top2" data-aos="zoom-in">
          <img loading="lazy" src="../assets/img/_DSC5400 (2)-min.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["gallery"],
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
        gap: 3rem;
      }
      .single-image {
        margin-top: 2rem;
        img {
          width: 20rem;
          height: 30rem;
          object-fit: cover;
          @include responsive($lg) {
            width: 30rem;
            height: 40rem;
          }
          @include responsive($xl) {
            width: 55rem;
            height: 40rem;
          }
        }
      }
      .single-image1 {
        margin-top: 2rem;
        img {
          width: 20rem;
          height: 20rem;
          object-fit: cover;
          @include responsive($lg) {
            width: 30rem;
            height: 30rem;
          }
          @include responsive($xl) {
            width: 55rem;
            height: 30rem;
          }
        }
      }
      @include responsive($md) {
        .grid-top {
          margin-top: 1rem;
        }
        .grid-top2 {
          margin-top: -9rem;
        }
        .grid-top1 {
          margin-top: -1rem;
        }
        .grid-top3 {
          margin-top: -8rem;
        }
      }
      @include responsive($xl) {
        .grid-top {
          margin-top: 1rem;
        }
        .grid-top2 {
          margin-top: -9rem;
        }
        .grid-top3 {
          margin-top: -8rem;
        }
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
