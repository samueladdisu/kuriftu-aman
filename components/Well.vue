<template>
  <div>
    <HeroSlide
      :img="well.slides"
      :title="well.heroTitle"
      :subTitle="well.heroSubTitle"
      :text="well.heroText"
    />

    <section class="well">
      <div class="container">
        <div class="well__img__container">
          <img
            :src="require('@/assets/img/' + well.highlight.img1 + '')"
            alt=""
          />
          <img
            :src="require('@/assets/img/' + well.highlight.img2 + '')"
            alt=""
          />
          <img
            :src="require('@/assets/img/' + well.highlight.img3 + '')"
            alt=""
          />
        </div>

        <div class="well__content">
          <div class="top__block">
            <div class="kay">
              <h1 class="title">{{ well.highlight.title1 }}</h1>
              <p class="text">
                {{ well.highlight.text1 }}
              </p>
            </div>
            <div class="cinema">
              <h1 class="title">{{ well.highlight.title2 }}</h1>
              <p class="text">
                {{ well.highlight.text2 }}
              </p>
            </div>
            <div class="swim">
              <h1 class="title">{{ well.highlight.title3 }}</h1>
              <p class="text">
                {{ well.highlight.text3 }}
              </p>
            </div>
          </div>

          <div class="lower__block">
            <div class="line"></div>
            <a
              :href="well.highlight.pdf"
              target="_blank"
              v-if="well.highlight.pdf"
              class="link"
            >
              View spa menu
            </a>
            <nuxt-link
              :to="well.highlight.uri"
              v-if="well.highlight.uri"
              class="link"
              >View spa menu</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
    <div class="w__bg">
      <LeftFeature v-if="well.feature" :feature="well.feature" />

      <h1 class="title faci__title center">Our facilities</h1>
      <section class="amenities">
        <div class="container">
          <ul class="first">
            <li class="text" v-for="text in well.amenities" :key="text">
              {{ text }}
            </li>
          </ul>

          <ul class="second">
            <li class="text" v-for="text in well.amenities1" :key="text">
              {{ text }}
            </li>
          </ul>

          <ul class="third">
            <li class="text" v-for="text in well.amenities2" :key="text">
              {{ text }}
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ["well"],
};
</script>

<style lang="scss">
.well {
  background: #f3eee7;
  padding: 3rem 0;
  .container {
    .well__img__container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "top top"
        "lower1 lower2";
      gap: 1rem;
      img {
        width: 100%;
      }
      img:nth-child(1) {
        grid-area: top;
      }
      img:nth-child(2) {
        grid-area: lower1;
      }
      img:nth-child(3) {
        grid-area: lower2;
      }
    }
    .well__content {
      h1 {
        margin: 1rem 0 1.5rem;
      }
      .lower__block {
        .line {
          width: 100%;
          height: 1px;
          background: #cacaca;
          margin: 2rem 0 1.5rem;
        }
      }
    }
  }
}

@include responsive($lg) {
  .well {
    .container {
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-template-areas: "img content";
      .well__content {
        width: 90%;
        margin: 0 auto;
        grid-area: content;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .well__img__container {
        grid-area: img;
      }
    }
  }
}

.w__bg {
  background: #f3eee7;
  padding-bottom: 4rem;
  .faci__title {
    padding-bottom: 2rem;
  }
  .amenities {
    background: #fff;
    .container {
      display: grid;
      justify-content: center;
      ul {
        li {
          list-style: disc;
          margin: 1.5rem 0;
        }
      }
    }
  }
}

@include responsive($md) {
  .w__bg {
    .amenities {
      .container {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "first second third";
        .first,
        .second,
        .third {
          justify-self: center;
        }
        .first {
          grid-area: first;
        }
        .second {
          grid-area: second;
        }
        .third {
          grid-area: third;
        }
      }
    }
  }
}
</style>
