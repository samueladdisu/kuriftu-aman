<template>
  <div>
    <HeaderApp />
    <section class="gift__hero E-bg">
      <div class="container">
        <h1 class="title center">Buy Waterpark / Entoto Activity Ticket</h1>
        <p class="text center">
          Whether it’s your first time at Kuriftu Water Park or your 100th,
          we’ve got your ticket to endless fun! There are many different
          attractions and slides fit for the entire family. Kuriftu Water Park
          gives special family deals and discounts on water park tickets. For
          those visiting with groups of 20 or more, we’ve got special group
          sales ticket for a discount. Plan your family’s next visit when we are
          hosting one of our many family events.
        </p>
      </div>
    </section>

    <div class="nav-bg boston-nav">
      <!-- Destination Navigation -->
      <!-- Mobile Destination Navigation -->
      <div class="destination-links2">
        <div class="container">
          <div class="wrapper">
            <ul class="link-destination">
              <li>
                <span class="a-link active"
                  ><p></p>
                  <!-- <img
                    class="drop-icon"
                    src="../../assets/img/icons/next2.svg"
                    alt=""
                /> -->
                </span>

                <ul class="dropdown-content">
                  <div class="drop-down-list"></div>
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
              <div class="link-container1">
                <li>
                  <nuxt-link class="a-link" to="/buyticket"
                    >Waterpark</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link class="a-link" to="/buyticket/entotoActivity">
                    Entoto Activities
                  </nuxt-link>
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
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    addClass() {
      this.isActive = true;
    },
  },
};
</script>

<style lang="scss">
@include responsive($xl) {
  .boston-nav {
    .container {
      .wrapper {
        .link-destination {
          .line {
            width: 30% !important;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1440px) {
  .boston-nav {
    .container {
      .wrapper {
        .link-destination {
          .line {
            width: 20% !important;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .boston-nav {
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
          // padding-top: 2rem;
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
            .link-container1 {
              display: flex;
              // padding-top: 2rem;
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
