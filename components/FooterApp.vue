<template>
  <div>
    <section class="footer">
      <div class="container">
        <div class="member-cta">
          <h1 class="title">become a member</h1>
          <p class="text">
            To recieve updates about exclusive experience and our newsletter,
            please register
          </p>
          <div class="btn-container">
            <a
              href="https://reservations.kurifturesorts.com/signUp.php"
              target="_blank"
              class="btn-cta"
            >
              Sign Up
            </a>
          </div>
        </div>
        <div class="lower">
          <div class="more-info">
            <h1 class="title">More Information</h1>
            <ul>
              <li>
                <nuxt-link to="/aboutus">About Us</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact">Contact Us</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/giftcard">Gift Card</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/upcoming-project">Upcoming Projects</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/careers">Careers</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/privacy">Privacy</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/legal">Legal Notice</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/articles">Articles</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/newsletters">News Letters</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/bishoftu/gallery">Gallery</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="resorts">
            <h1 class="title">Resorts</h1>
            <ul>
              <li>
                <nuxt-link to="/bishoftu">Bishoftu</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/entoto">Entoto</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/laketana">Lake Tana</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/awash">Awash</nuxt-link>
              </li>
              <!-- <li>
                <nuxt-link to="/afar">Afar</nuxt-link>
              </li> -->
            </ul>
          </div>

          <div class="wellness">
            <h1 class="title">wellness</h1>
            <ul>
              <li>
                <nuxt-link to="/boston">Boston</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/entoto">Entoto</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="adv">
            <h1 class="title">Adventure</h1>
            <ul>
              <li>
                <nuxt-link to="/waterpark">Waterpark</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/entoto">Entoto</nuxt-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="socials">
          <h1 class="title">socials</h1>

          <div class="icons">
            <div class="top-icons">
              <a
                href="https://www.tiktok.com/@kuriftumoments?lang=en"
                target="_blank"
              >
                <img src="@/assets/img/icons/tiktok.svg" alt="" />
              </a>

              <a
                href="https://www.instagram.com/kurifturesortspa/?hl=en"
                target="_blank"
              >
                <img src="@/assets/img/icons/instagram.svg" alt="" />
              </a>

              <a href="https://twitter.com/kuriftus" target="_blank">
                <img src="@/assets/img/icons/twitter.svg" alt="" />
              </a>
            </div>

            <div class="low-icons">
              <a
                href="https://www.youtube.com/channel/UCI3Y6eDzcmAchDoGGVJZKgA/videos"
                target="_blank"
              >
                <img src="@/assets/img/icons/youtube.svg" alt="" />
              </a>

              <a
                href="https://www.facebook.com/kurifturesorts/"
                target="_blank"
              >
                <img src="@/assets/img/icons/fb.svg" alt="" />
              </a>

              <a
                href="https://www.linkedin.com/company/kuriftu-resorts/?originalSubdomain=et"
                target="_blank"
              >
                <img src="@/assets/img/icons/linkedin.svg" alt="" />
              </a>
            </div>
          </div>

          <div
            id="TA_certificateOfExcellence684"
            class="TA_certificateOfExcellence"
          >
            <ul id="zUFfTH3" class="TA_links Ef8jRrYiZqp">
              <li id="4ZZ3ULiJmX" class="KJz30P1aa">
                <a
                  target="_blank"
                  href="https://www.tripadvisor.com/Hotel_Review-g1510664-d1813539-Reviews-Kuriftu_Resort_Spa_Bishoftu-Bishoftu_Oromiya_Region.html"
                  ><img
                    src="https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2022_L.png"
                    alt="TripAdvisor"
                    class="widCOEImg"
                    id="CDSWIDCOELOGO"
                /></a>
              </li>
            </ul>
          </div>
          <script
            async
            src="https://www.jscache.com/wejs?wtype=certificateOfExcellence&amp;uniq=684&amp;locationId=1813539&amp;lang=en_US&amp;year=2022&amp;display_version=2"
            data-loadtrk
            onload="this.loadtrk=true"
          ></script>
        </div>
      </div>
      <p class="text pfooter">
        All Copyright &copy; 2022 Kuriftu Resort and Spa. Powered by
        <a
          href="https://versavvymedia.com/"
          target="_blank"
          class="link ver"
          style="font-size: 0.7rem; color: #000"
          >Versavvy</a
        >
      </p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  margin-top: 2.14rem;
  margin-bottom: 1.5rem;
  .pfooter {
    margin-bottom: 6rem;
    text-align: center;
    .ver {
      &::after {
        top: 90%;
      }
    }
  }
  .container {
    .trip-advisor {
      width: 100%;
      margin: 2rem auto;
    }

    .member-cta {
      h1,
      p,
      a {
        margin-bottom: 1.4rem;
      }
    }
    .lower {
      div {
        margin-top: 1.5rem;
      }
      h1 {
        margin-bottom: 0.9rem;
        text-decoration: underline;
      }
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        li {
          margin-bottom: 0.6rem;
          a {
            font-family: "Neue Helvetica thin";
            font-weight: 800;
            letter-spacing: 0.07rem;
            font-size: 0.8rem;
            color: #808080;
          }
        }
      }
    }
    .socials {
      margin-top: 1.5rem;
      h1 {
        text-decoration: underline;
        margin-bottom: 0.9rem;
      }
      .icons {
        display: flex;
        gap: 1.5rem;
      }
    }
  }
}

@include responsive($md) {
  .footer {
    .container {
      .member-cta {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-areas: "title text text btn";
        h1 {
          grid-area: title;
        }
        p {
          grid-area: text;
        }
        .btn-container {
          grid-area: btn;
        }
      }
      .lower {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
          "info resorts"
          "wellness adv";
        .more-info {
          grid-area: info;
        }
        .resorts {
          grid-area: resorts;
        }
        .wellness {
          grid-area: wellness;
        }
        .adv {
          grid-area: adv;
        }
        div {
          margin-top: 1.5rem;
        }
        ul {
          display: grid;
          grid-template-columns: 1fr;
        }
      }
    }
  }
}

@include responsive($lg) {
  .footer {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-template-areas:
        "member member member"
        "lower  lower  socials";
      .member-cta {
        grid-area: member;
        grid-template-columns: 1fr 1fr 1fr 1.5rem 1fr;
        grid-template-areas: "title text text . btn";
        margin-bottom: 4.125rem;
        h1 {
          grid-area: title;
        }
        p {
          grid-area: text;
        }
        .btn-container {
          grid-area: btn;
        }
      }
      .lower {
        grid-area: lower;
        display: grid;
        text-align: left;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas:
          "info resorts adv"
          "info wellness ."
          "info . ."
          "info . .";
        div {
          margin-top: 1.5rem;
        }
        ul {
          display: grid;
          grid-template-columns: 1fr;
          // text-align: center;
        }
      }
      .socials {
        grid-area: socials;
        justify-self: center;
        .icons {
          display: grid;
          grid-template-rows: 1fr 1fr;
          .top-icons,
          .low-icons {
            display: flex;
            gap: 1rem;
          }
          img {
            margin-bottom: 1.5rem;
          }
        }
      }
    }
  }
}

@include responsive($xl) {
  .footer {
    margin-bottom: 5.5rem;
  }
}
</style>
