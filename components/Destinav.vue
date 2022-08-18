<template>
  <div>
    <div class="nav-bg">
      <!-- Destination Navigation -->
      <!-- Mobile Destination Navigation -->
      <div class="destination-links2">
        <div class="container">
          <div class="wrapper">
            <ul class="link-destination">
              <li>
                <span class="a-link active"
                  ><p>{{ dir }}</p>
                  <img
                    class="drop-icon"
                    src="../assets/img/icons/next2.svg"
                    alt=""
                /></span>

                <ul class="dropdown-content">
                  <div class="drop-down-list">
                    <li v-if="viewAcc && boston">
                      <nuxt-link class="a-link" :to="base + 'acc'"
                        >Accomodation</nuxt-link
                      >
                    </li>

                    <li v-if="adv">
                      <nuxt-link class="a-link" :to="base + 'adv'">
                        Adventure
                      </nuxt-link>
                    </li>

                    <li v-if="viewAcc && boston">
                      <nuxt-link class="a-link" :to="base + 'exp'"
                        >Experiences</nuxt-link
                      >
                    </li>
                    <li v-if="viewAcc && boston">
                      <nuxt-link class="a-link" :to="base + 'well'"
                        >Wellness</nuxt-link
                      >
                    </li>
                    <li v-if="boston">
                      <nuxt-link class="a-link" :to="base + 'dining'"
                        >Dining</nuxt-link
                      >
                    </li>
                    <li v-if="viewAcc && boston">
                      <nuxt-link class="a-link" :to="base + 'event'"
                        >Celebration & Events</nuxt-link
                      >
                    </li>
                    <li v-if="viewAcc && boston">
                      <nuxt-link class="a-link" :to="base + 'corp'"
                        >Corporate</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link class="a-link" :to="base + 'gallery'"
                        >Gallery</nuxt-link
                      >
                    </li>
                    <li v-if="awash">
                      <nuxt-link class="a-link" :to="base + 'gift'"
                        >Gift Voucher</nuxt-link
                      >
                    </li>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- End of Mobile Destination Navigation -->

      <!-- Desktop Destination Navigation -->
      <div class="destination-links">
        <div class="container">
          <div class="wrapper">
            <ul class="link-destination">
              <div class="link-container">
                <li>
                  <nuxt-link class="a-link" :to="home"> {{ dir }} </nuxt-link
                  ><img src="../assets/img/icons/next2.svg" alt="" />
                </li>
                <li v-if="viewAcc && boston">
                  <nuxt-link
                    class="a-link"
                    :class="{ active: isActive }"
                    @click="addClass"
                    :to="base + 'acc'"
                    >Accomodation</nuxt-link
                  >
                </li>

                <li v-if="adv">
                  <nuxt-link class="a-link" :to="base + 'adv'">
                    Adventure
                  </nuxt-link>
                </li>
                <li v-if="viewAcc && boston">
                  <nuxt-link class="a-link" :to="base + 'exp'"
                    >Experiences</nuxt-link
                  >
                </li>

                <li v-if="viewAcc && boston">
                  <nuxt-link class="a-link" :to="base + 'well'"
                    >Wellness</nuxt-link
                  >
                </li>

                <li v-if="boston">
                  <nuxt-link class="a-link" :to="base + 'dining'"
                    >Dining</nuxt-link
                  >
                </li>
                <li v-if="viewAcc && boston">
                  <nuxt-link class="a-link" :to="base + 'corp'"
                    >Corporate</nuxt-link
                  >
                </li>
                <li v-if="viewAcc && boston">
                  <nuxt-link class="a-link" :to="base + 'event'"
                    >Celebration & Events</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link class="a-link" :to="base + 'gallery'"
                    >Gallery</nuxt-link
                  >
                </li>
                <li v-if="awash">
                  <nuxt-link class="a-link" :to="base + 'gift'"
                    >Gift Voucher</nuxt-link
                  >
                </li>
              </div>
              <hr class="line" />
            </ul>
          </div>
        </div>
      </div>
      <!-- End of Desktop Destination Navigation -->
      <!-- End of Destination Navigation -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["base", "home", "dir"],
  data() {
    return {
      viewAcc: true,
      boston: true,
      adv: false,
      isActive: false,
      awash: true,
    };
  },
  methods: {
    addClass() {
      this.isActive = true;
    },
  },
  mounted() {
    if (this.home == "waterpark/" || this.home == "/waterpark") {
      this.viewAcc = false;
    } else if (this.home == "boston/" || this.home == "/boston") {
      this.boston = false;
    }

    if (this.dir == "Entoto") {
      this.adv = true;
    }
    if (this.dir == "Awash") {
      this.awash = false;
    }
  },
};
</script>

<style lang="scss">
.nav-bg {
  background: #f3eee7;
  .destination-links {
    display: none;
    .container {
      .wrapper {
        .link-destination {
          li {
            .a-link {
              @extend .text;
            }
          }
        }
      }
    }
  }
  .destination-links2 {
    .container {
      .wrapper {
        .link-destination {
          display: grid;
          // place-content: center;
          padding-top: 4rem;
          gap: 3rem;
          position: relative;

          li {
            display: flex;
            align-items: flex-start;

            .a-link {
              @extend .text;
              // color: $kuriftu-grey;
              // font-size: 0.88rem;
              display: flex;
              align-items: center;
              .drop-icon {
                transform: rotate(90deg);
              }
            }

            .active {
              color: $kuriftu-black;
            }
            .dropdown-content {
              display: none;
              position: absolute;
              top: 105px;
              left: -5px;
              // @include responsive($md){
              //   left: 15rem;
              // }
              border: 1px solid #efefef;
              background: $kuriftu-white;
              border-radius: 0.4em;
              min-width: 200px;
              box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
              padding: 12px 12px;
              z-index: 999;
              .drop-down-list {
                // display: grid;
                // grid-template-columns: 1fr 1fr 1fr;
                // gap: .3rem;
                li {
                  margin-left: 0.3rem;
                  margin-top: 0.5rem;

                  .a-link {
                    color: $kuriftu-grey;
                    font-size: 0.88rem;
                  }
                  .drop-icon {
                    transform: rotate(90deg);
                  }
                  .active {
                    color: $kuriftu-black;
                  }
                }
              }
            }
          }
          li:hover .dropdown-content {
            display: block;
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .destination-links2 {
      display: none;
    }
    .destination-links {
      display: block;
      .container {
        .wrapper {
          .link-destination {
            .link-container {
              display: flex;
              padding-top: 4rem;
              gap: 3rem;
              place-content: center;
              li {
                display: flex;
                align-items: center;
                .a-link {
                  color: $kuriftu-grey;
                  font-size: 0.88rem;
                }
                .nuxt-link-exact-active {
                  color: $kuriftu-black;
                  font-family: "Neue Helvetica Medium";
                  position: relative;
                  &::after {
                    content: "";
                    position: absolute;
                    top: 140%;
                    z-index: 999;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: $kuriftu-black;
                  }
                }
              }
            }
            .line {
              // border-style:solid ;
              color: $kuriftu-grey;
              // width: 60rem;
              width: 100%;
              margin: 0 auto;
              margin-top: 0.6rem;
              opacity: 0.7;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .destination-links {
      .container {
        .wrapper {
          .link-destination {
            .line {
              width: 90%;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 1920px) {
    .destination-links {
      .container {
        .wrapper {
          .link-destination {
            .line {
              width: 70%;
            }
          }
        }
      }
    }
  }
}
</style>
