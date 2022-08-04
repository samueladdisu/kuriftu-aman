<template>
  <div class="whole-nav">
    <div class="nav-menu">
      <div class="menu-close" @click="closeNav">
        <div class="line">
          <hr class="frist-line" />
          <hr class="second-line" />
        </div>
      </div>
      <div class="logo">
        <nuxt-link to="/">
          <img src="../assets/img/logos/logo.svg" alt="" />
        </nuxt-link>
      </div>
    </div>
    <div class="container">
      <div class="three-col">
        <div class="main-links first" v-if="showFirst">
          <ul class="nav-links">
            <li>
              <a @click="openDesti">Destinations</a>
            </li>
            <li>
              <a @click="openResorts">Resorts</a>
            </li>
            <li>
              <a @click="openExp">Experiences</a>
            </li>
            <li>
              <a @click="openWell">Wellness</a>
            </li>
            <li>
              <nuxt-link to="/event"> Celebration & Events</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/giftcard">Gift Card </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/book">
                <!-- <a href="https://versavvymedia.com/reservation_system/reserve.php"
                >Reservation</a
              > -->
                Reservation
              </nuxt-link>
            </li>
            <li class="bottom-nav">
              <nuxt-link to="/aboutus" class="bottom-link">
                About Us
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" class="bottom-link">
                Contact Us
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div><hr /></div>
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <div class="main-links second" v-if="showNext">
            <img
              src="../assets/img/icons/next2.svg"
              class="back"
              @click="openDesti"
              alt=""
            />
            <ul class="nav-links second-links">
              <div v-if="desti">
                <li>
                  <a @click="openAddis">Addis Abeba</a>
                </li>
                <!-- <li>
                  <nuxt-link to="/afar"> Afar </nuxt-link>
                </li> -->
                <li>
                  <a @click="openAwash"> Awash</a>
                </li>
                <li>
                  <a @click="openBish"> Bishoftu</a>
                </li>
                <li>
                  <a @click="openBahirdar"> Bahirdar</a>
                </li>
              </div>

              <div v-if="resorts">
                <li>
                  <nuxt-link to="/bishoftu"
                    >Kuriftu Resort & Spa Bishoftu</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/entoto"
                    >Kuriftu Resort & Spa Entoto</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/laketana"
                    >Kuriftu Resort & Spa Lake Tana</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/awash"
                    >Kuriftu Resort & Spa Awash Falls</nuxt-link
                  >
                </li>
                <li>
                  <!-- <nuxt-link to="/afar">Kuriftu Resort & Spa Afar</nuxt-link> -->
                </li>
              </div>
              <div v-if="exp">
                <li>
                  <nuxt-link to="/entoto"
                    >Kuriftu Resort & Spa Entoto</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/waterpark">Kuriftu Water Park</nuxt-link>
                </li>
              </div>
              <div v-if="well">
                <li>
                  <nuxt-link to="/entoto"
                    >Kuriftu Resort & Spa Entoto</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/boston">Boston Day Spa</nuxt-link>
                </li>
              </div>
            </ul>
          </div>
        </transition>
        <!-- <div><hr /></div> -->
        <div class="main-links second" v-if="showThird">
          <img
            src="../assets/img/icons/next2.svg"
            class="back"
            @click="openSecond"
            alt=""
          />

          <ul class="nav-links third-links">
            <div v-if="addis">
              <li>
                <nuxt-link to="/boston">Boston Day Spa</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/entoto"> Entoto </nuxt-link>
              </li>
            </div>

            <div v-if="awash">
              <li>
                <nuxt-link to="/awash"> Awash Falls</nuxt-link>
              </li>
            </div>

            <div v-if="bish">
              <li>
                <nuxt-link to="/bishoftu">Bishoftu</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/waterpark">Water Park</nuxt-link>
              </li>
            </div>

            <div v-if="bahirdar">
              <li>
                <nuxt-link to="/laketana">Lake Tana</nuxt-link>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div class="nav_cta" v-if="showFeatured">
        <div class="nav_box">
          <h2 class="text">Explore Kuriftu Resorts & Spa at___</h2>
          <div class="buttons">
            <nuxt-link to="/awash" class="btn-primary"> Awash Falls </nuxt-link>
            <nuxt-link to="/entoto" class="btn-primary">
              Entoto National Park
            </nuxt-link>
            <nuxt-link to="/bishoftu" class="btn-primary">
              Lake Kuriftu
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="destination-links" v-if="featuredResort">
        <div class="dest-box">
          <div class="desti-img">
            <h3 class="sub-title">Featured Resort</h3>
            <img src="../assets/img/awash/awash-cover.webp" alt="" />
          </div>
          <div class="desti-desc">
            <h4 class="title">Awash Falls</h4>
            <p class="text">
              Located on the Southern tip of Awash National Park, our
              one-of-a-kind boutique resort suspended over a waterfall places
              guests at an elevation that is unique to our property.
            </p>
            <div class="explore">
              <nuxt-link to="/awash" class="link"> Discover More </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // main three navs
      showNext: false,
      showFirst: true,
      showThird: false,
      showFeatured: true,

      // destination
      addis: false,
      awash: false,
      bish: false,
      bahirdar: false,

      // first nav booleans
      desti: false,
      resorts: false,
      exp: false,
      well: false,

      featuredResort: false,
    };
  },
  methods: {
    closeNav() {
      this.$emit("close");
    },
    openAddis() {
      if (window.innerWidth < 768) {
        this.showNext = !this.showNext;
        this.showThird = true;

        this.addis = true;
        this.bish = false;
        this.awash = false;
        this.bahirdar = false;
      } else {
        this.showThird = true;
        this.showFeatured = false;
        this.featuredResort = false;
        this.addis = true;
        this.bish = false;
        this.awash = false;
        this.bahirdar = false;
      }
    },
    openSecond() {
      this.showThird = false;
      this.showNext = true;
    },
    openAwash() {
      if (window.innerWidth < 768) {
        this.showNext = !this.showNext;
        this.showThird = true;

        this.awash = true;
        this.addis = false;
        this.bish = false;
        this.bahirdar = false;
      } else {
        this.showThird = true;
        this.showFeatured = false;
        this.featuredResort = false;

        this.awash = true;
        this.addis = false;
        this.bish = false;
        this.bahirdar = false;
      }
    },
    openBish() {
      if (window.innerWidth < 768) {
        this.showNext = !this.showNext;
        this.showThird = true;

        this.bish = true;
        this.awash = false;
        this.addis = false;
        this.bahirdar = false;
      } else {
        this.showThird = true;
        this.showFeatured = false;
        this.featuredResort = false;

        this.bish = true;
        this.awash = false;
        this.addis = false;
        this.bahirdar = false;
      }
    },
    openBahirdar() {
      if (window.innerWidth < 768) {
        this.showNext = !this.showNext;
        this.showThird = true;
        this.featuredResort = false;

        this.bahirdar = true;
        this.bish = false;
        this.awash = false;
        this.addis = false;
      } else {
        this.showThird = true;
        this.showFeatured = false;
        this.featuredResort = false;

        this.bahirdar = true;
        this.bish = false;
        this.awash = false;
        this.addis = false;
      }
    },
    openDesti() {
      if (window.innerWidth < 768) {
        this.showNext = !this.showNext;
        this.showFirst = !this.showFirst;

        this.desti = true;
        this.resorts = false;
        this.well = false;
        this.exp = false;

        this.showFeatured = false;
        this.featuredResort = true;
        this.showThird = false;
      } else {
        this.showNext = true;

        this.desti = true;
        this.resorts = false;
        this.well = false;
        this.exp = false;

        this.featuredResort = true;
        this.showFeatured = false;
        this.showThird = false;
      }
    },
    openResorts() {
      if (window.innerWidth < 768) {
        this.showNext = !this.showNext;
        this.showFirst = !this.showFirst;

        this.resorts = !this.resorts;
        this.desti = false;
        this.well = false;
        this.exp = false;

        this.showFeatured = false;
        this.featuredResort = true;
        this.showThird = false;
      } else {
        this.showNext = true;

        this.resorts = true;
        this.desti = false;
        this.well = false;
        this.exp = false;

        this.showFeatured = false;
        this.featuredResort = true;
        this.showThird = false;
      }
    },
    openExp() {
      if (window.innerWidth < 768) {
        this.showNext = !this.showNext;
        this.showFirst = !this.showFirst;

        this.exp = !this.exp;
        this.resorts = false;
        this.desti = false;
        this.well = false;

        this.showFeatured = false;
        this.featuredResort = true;
        this.showThird = false;
      } else {
        this.showNext = true;

        this.exp = true;
        this.resorts = false;
        this.desti = false;
        this.well = false;

        this.showFeatured = false;
        this.featuredResort = true;
        this.showThird = false;
      }
    },
    openWell() {
      if (window.innerWidth < 768) {
        this.showNext = !this.showNext;
        this.showFirst = !this.showFirst;

        this.well = !this.well;
        this.exp = false;
        this.resorts = false;
        this.desti = false;

        this.showFeatured = false;
        this.featuredResort = true;
        this.showThird = false;
      } else {
        this.showNext = true;

        this.well = true;
        this.exp = false;
        this.resorts = false;
        this.desti = false;

        this.showFeatured = false;
        this.featuredResort = true;
        this.showThird = false;
      }
    },
    beforeEnter(el) {
      console.log("before enter ");
      el.style.transform = "translateX(-100%)";
    },

    enter(el, done) {
      console.log("starting to enter");
      gsap.to(el, {
        duration: 1,
        x: 0,
        ease: "circ.out",
        onComplete: done,
      });
    },
    beforeLeave(el) {
      console.log("before leave ");
      el.style.transform = "translateX(0)";
    },

    leave(el, done) {
      console.log("starting to leave");
      gsap.to(el, {
        duration: 1,
        x: -100 + "%",
        ease: "expo.out",
        onComplete: done,
      });
    },
    afterLeave() {
      console.log("after leave");
    },
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(105, 105, 105);
  border-radius: 3rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.whole-nav {
  background: #f5f5f2;
  height: 100vh;
  width: 100vw;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  z-index: 9999;

  .nav-menu {
    display: flex;
    justify-content: space-between;
    // align-items: center;
    margin-bottom: 1rem;
    .menu-close {
      margin-top: 1rem;
      cursor: pointer;
      .line {
        margin-top: 1rem;
        .frist-line {
          margin: auto;

          color: $kuriftu-white;
          // height: 10rem;
          width: 2.35rem;

          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        .second-line {
          margin: auto;
          // margin-top: 1rem;
          color: $kuriftu-white;
          // height: 10rem;
          width: 2.35rem;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
      }
    }
    .logo {
      margin-top: 1rem;
      width: 10rem;
      @include responsive($md) {
        width: 11rem;
      }
    }
  }
  .container {
    .three-col {
      // position: relative;
      width: 100%;
      height: 100%;

      .main-links {
        margin-top: 5rem;
        margin-bottom: 2rem;
        .nav-links {
          li {
            margin-top: 1rem;
            a {
              @extend .text;
              color: $kuriftu-grey;
              font-size: 1.13rem;
              text-transform: capitalize;
              cursor: pointer;
              // font-weight: normal;
              &:hover {
                color: $kuriftu-brown;
              }
            }
          }
          .bottom-nav {
            margin-top: 3rem;
          }
          .bottom-link {
            font-size: 0.88rem;
          }
        }

        .second-links {
          li {
            a {
              font-size: 1rem !important;
            }
          }
        }
        .third-links {
          li {
            a {
              font-size: 0.8rem !important;
            }
          }
        }
      }

      .second-link {
        .second-nav-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          li {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            a {
              color: $kuriftu-grey;
              font-size: 0.9rem;
              font-weight: normal;

              text-align: center;
              &:hover {
                color: $kuriftu-brown;
              }
            }
          }
        }
      }
    }
    .nav_cta {
      .nav_box {
        padding-top: 2rem;
        h2 {
          margin-bottom: 1rem;
        }
        .buttons {
          a {
            margin-bottom: 0.7rem;
          }
        }
      }
    }
    .destination-links {
      padding: 1rem 1rem 2rem;
      background: $kuriftu-white;
      transition: all 300ms ease-in-out;
      .dest-box {
        .desti-img {
          img {
            // width: 30rem;
          }
          h3 {
            margin-top: 0.94rem;
            font-size: 0.6rem;
            letter-spacing: 0.2rem;
            line-height: 0.5rem;
            margin-bottom: 0.5rem;
            color: $kuriftu-grey;
          }
        }
        .desti-desc {
          background: #fff;
          padding: 0 1rem 1rem;
          h4 {
            padding-top: 0.94rem;
            font-size: 1rem;
          }
          p {
            margin: 0.94rem 0;
            color: $kuriftu-black;
            line-height: 1rem;
            font-size: 0.7rem;
          }
          .explore {
            // padding: 1.88rem 0;
            font-size: 0.7rem;
            a {
              font-size: 0.8rem;
              color: $kuriftu-grey;
            }
          }
        }
      }
    }
  }
}
@include responsive($md) {
  .whole-nav {
    .container {
      .three-col {
        display: flex;
        gap: 6rem;
        .second {
          .back {
            display: none;
          }
        }
        .main-links {
          margin-top: 5rem;
          .nav-links {
            li {
              margin-top: 2rem;
              a {
                font-size: 1.13rem;
                &:hover {
                  color: $kuriftu-brown;
                }
              }
              .bottom-link {
                font-size: 1rem !important;
              }
            }
            .bottom-nav {
              margin-top: 4rem;
            }
          }
        }
        div {
          hr {
            height: 25rem;
            margin-top: 7rem;
          }
        }
        .second-link {
          margin-top: 6rem;
          .second-nav-links {
            display: grid;
            gap: 0.8rem;
            li {
              margin-top: 0.5rem;
              margin-bottom: 0.5rem;
              a {
                font-size: 1.3rem;
              }
            }
          }
        }
      }
      .nav_cta {
        display: grid;
        place-items: center;
        // width: 150%;
      }
      .destination-links {
        padding: 2rem;
        .dest-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          .desti-img {
            background: #fff;
            h3 {
              font-size: 0.8rem;
            }
          }
          .desti-desc {
          }
        }
      }
    }
  }
}
@include responsive($lg) {
  .whole-nav {
    width: 90%;

    .nav-menu {
      margin-left: 2rem;
      margin-right: 2rem;
    }
    .container {
      width: 90%;
      display: flex;
      gap: 1rem;
      justify-content: center;
      .nav_cta {
        width: 150%;
      }
      .three-col {
        // flex: 2rem;
        display: flex;
        gap: 3rem;
        .main-links {
          margin-top: 10rem;
          .nav-links {
            li {
              margin-top: 2rem;
              a {
                font-size: 1.13rem;
                &:hover {
                  color: $kuriftu-brown;
                }
              }
            }
            .bottom-nav {
              margin-top: 4rem;
            }
          }
        }

        div {
          hr {
            height: 30rem;
            margin-top: 12rem;
          }
        }
        .second-link {
          margin-top: 12rem;
          margin-right: 2rem;
          .second-nav-links {
            display: grid;
            gap: 0.8rem;
            li {
              margin-top: 0.5rem;
              margin-bottom: 0.5rem;
            }
          }
        }
      }
      .destination-links {
        padding: 1rem;
        flex: 25rem;
        display: grid;
        place-items: center;
        .dest-box {
          grid-template-columns: 1fr;
          .desti-img {
            background: transparent;
          }
          .desti-desc {
          }
        }
      }
    }
  }
}
@include responsive($xl) {
  .whole-nav {
    width: 90%;
    height: 100vh;
    .nav-menu {
      margin-left: 4rem;
      margin-right: 4rem;
      // margin-bottom: 3rem;
    }
    .container {
      display: flex;
      gap: 1rem;
      .three-col {
        display: flex;
        gap: 6rem;
        .main-links {
          margin-top: 7rem;
          .nav-links {
            li {
              margin-top: 2rem;
              a {
                font-size: 1.13rem;
                &:hover {
                  color: $kuriftu-brown;
                }
              }
            }
            .bottom-nav {
              margin-top: 4rem;
            }
          }
        }
        div {
          hr {
            height: 30rem;
            margin-top: 9rem;
          }
        }
        .second-link {
          margin-top: 8rem;
          margin-right: 2rem;
          .second-nav-links {
            display: grid;
            gap: 0.8rem;
            li {
              margin-top: 0.5rem;
              margin-bottom: 0.5rem;
            }
          }
        }
      }
      .destination-links {
        padding: 3rem;
        padding: 1rem;
        flex: 25rem;
        .dest-box {
          display: grid;
          margin-top: 5rem;
          .desti-img {
            img {
              width: 20rem;
            }
            h3 {
              font-size: 0.6rem;
            }
          }
          .desti-desc {
            height: 11rem;
            width: 20rem;
            h4 {
              margin-top: 0.94rem;
            }
            // .explore {
            //   margin-top: 2rem;
            // }
          }
        }
      }
    }
  }
}
@include responsive($xxl) {
  .whole-nav {
    width: 90%;
    height: 100vh;
  }
}
</style>
