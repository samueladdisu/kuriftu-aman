<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="upper-img">
        <img
          src="../assets/img/logos/Entoto-white.png"
          class="banner-logo"
          alt=""
        />
      </div>
      <div class="lower-content">
        <img src="../assets/img/logos/Entoto.png" class="lower-logo" alt="" />

        <div class="save">
          <h1>SAVE</h1>
          <div class="up">
            <p>UP</p>
            <p>TO</p>
          </div>
          <h1>20%</h1>
        </div>

        <p>WHEN BOOKING A KURIFTU RESORT & SPA ENTOTO ROOM ONLINE</p>
        <a
          href="https://reservations.kurifturesorts.com/reserve.php?location=entoto&ref=homepage_banner"
          target="_blank"
          class="banner-link"
          >BOOK NOW</a
        >
      </div>
    </div>
    <div class="close" @click="closeForm">
      <img src="@/assets/img/icons/x.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeForm() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #0000009f;
  z-index: 9999999;
  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #fff;
    border-radius: 50%;
    padding: 1rem;
    cursor: pointer;
    img {
      width: 1rem;
    }
  }
  .modal {
    background-color: white;
    margin: 6rem 1.5rem 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "up up up"
      "up up up"
      "low low low";
    .upper-img {
      background: url("../assets/img/banner.jpg") no-repeat;
      background-size: cover;
      background-position: center center;
      grid-area: up;
      position: relative;
      .banner-logo {
        width: 13rem;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .lower-content {
      grid-area: low;
      display: grid;
      place-items: center;
      padding: 2rem;
      color: #184539;
      .lower-logo {
        display: none;
      }
      .save {
        font-family: "Neue Helvetica Medium";
        display: flex;
        gap: 0.5rem;
        align-items: top;
        .up {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.3rem;
        }
        h1 {
          font-size: 3rem;
          font-weight: 600;
        }
      }
      p {
        text-align: center;
        font-family: "Neue Helvetica Medium";
        color: #184539;
      }
      .banner-link {
        @extend .btn;
        font-family: "Neue Helvetica Medium";
        background: #184539;
        color: #fff;
        font-size: 1.5rem;
      }
    }
  }
}
@include responsive($md) {
  .modal-overlay {
    .modal {
      height: 50%;
      width: 90%;
      grid-template-areas:
        "up up low"
        "up up low"
        "up up low";
      .upper-img {
        .banner-logo {
          display: none;
        }
      }
      .lower-content {
        .lower-logo {
          display: block;
          width: 13rem;
        }
      }
    }
  }
}
@include responsive($xl) {
  .modal-overlay {
    .modal {
      height: 60%;
      width: 50%;
      grid-template-areas:
        "up up low"
        "up up low"
        "up up low";
      .upper-img {
        .banner-logo {
          display: none;
        }
      }
      .lower-content {
        .lower-logo {
          display: block;
          width: 13rem;
        }
      }
    }
  }
}
</style>
