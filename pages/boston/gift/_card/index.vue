<template>
  <div>
    <HeaderApp />
    <Destinav base="/boston/" class="boston-nav" home="/boston" dir="Boston" />

    <section class="voucher E-bg">
      <div class="container">
        <img src="@/assets/img/giftvoucher/1.jpg" alt="" />

        <div class="voucher__content">
          <h1 class="title">Birthday Supreme</h1>
          <h5 class="sub-title">price 20,000.00</h5>

          <div class="voucher__tabs">
            <div class="tabs__container">
              <p class="text">Description</p>

              <p class="text">Details</p>
            </div>

            <div class="tabs__content">
              <p class="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
                perspiciatis!
              </p>

              <p class="text">Inclusions</p>

              <ul class="tab__list">
                <li class="text">Two nights Lorem ipsum dolor sit amet.</li>
                <li class="text">Two nights Lorem ipsum dolor sit amet.</li>
                <li class="text">Two nights Lorem ipsum dolor sit amet.</li>
                <li class="text">Two nights Lorem ipsum dolor sit amet.</li>
                <li class="text">Choice of Lorem ipsum dolor sit amet.</li>
              </ul>

              <hr />
            </div>
            <div class="input">
              <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>

              <div>
                <nuxt-link to="#" class="btn-cta"> Purchase </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <BishFooter :footer="footer" />
    <Sticky page="boston" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: {
        title: "Boston day Spa",
        second: {
          first: "1.9 km from Addis Ababa Bole International Airport",
          second: "Entoto Park",
          thrid: "Ethiopia",
        },
        thrid: {
          first: "Contact us on our direct phone line 9693",
          second: "Reception Desk +251905061020",
          thrid: "Email us at booking@kurifturesorts.com",
        },
        fourth: {
          url: "https://www.google.com/maps/dir/9,39.5/boston+day+spa/@9.665127,40.0696766,7.75z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x164b84fbfe0322b3:0xb0ee32bcc9ab1646!2m2!1d38.7837631!2d8.9907349",
        },
      },
    };
  },
  mounted() {},
};
</script>

<style lang="scss">
.voucher {
  padding: 2rem 0;
  .container {
    img {
      margin-bottom: 2rem;
    }
    .voucher__content {
      h1 {
        margin-bottom: 0.6rem;
      }
      h5 {
        margin-bottom: 0.4rem;
      }
      .voucher__tabs {
        .tabs__container {
          width: 60%;
          display: flex;
          justify-content: space-between;
          margin: 1rem 0;
          p {
            font-weight: bold;
          }
        }
        .tabs__content {
          p {
            margin-bottom: 0.8rem;
          }
          .tab__list {
            list-style: disc;
            margin-bottom: 2rem;
            li {
              margin-bottom: 1rem;
            }
          }
        }
        .input {
          select {
            width: 100%;
            max-width: 10rem;
            margin: 1rem 0;
            padding: 0.8rem 0.5rem;
            background: transparent;
          }
        }
      }
    }
  }
}
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
@include responsive($md) {
  .voucher {
    .container {
      .voucher__content {
        .voucher__tabs {
          .input {
            display: flex;
            gap: 2rem;
            align-items: center;
            width: 100%;
            select {
              width: 5rem;
            }
          }
        }
      }
    }
  }
}

@include responsive($lg) {
  .voucher {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 2rem 1fr 1fr;
      grid-template-areas: "img img . content content";
      img {
        grid-area: img;
      }
      .voucher__content {
        grid-area: content;
      }
    }
  }
}
</style>
