<template>
  <div>
    <section class="gift__hero">
      <div class="container">
        <h1 class="title center">{{ data.title }}</h1>
        <p class="text ticket_text center">
          {{ data.desc }}
        </p>
      </div>
    </section>

    <div class="nav-bg boston-nav" v-if="nav">
      <!-- Destination Navigation -->

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
            </ul>
          </div>
        </div>
      </div>
      <!-- End of Desktop Destination Navigation -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "nav"],
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
.ticket_text {
  font-size: 0.9rem !important;
  line-height: 1.5;
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
  padding-bottom: 2rem;
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
