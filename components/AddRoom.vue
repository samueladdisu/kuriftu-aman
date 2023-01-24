<template>
  <section class="add-room">
    <div class="bottom-cart">
      <div class="bottom-cart-modal" v-if="toggleModal">
        <div class="cart-header">
          <h3 class="summary-title">Booking Summary</h3>
          <div class="close" @click="openModal">
            <img src="../assets/img/close2.svg" alt="" />
            <!-- <i class="bi bi-x"></i> -->
          </div>
        </div>
        <hr />

        <div
          class="cart-content"
          v-for="items in cartCompleted"
          :key="items.room_id"
        >
          <div class="upper">
            <h3>{{ items.room_acc }} - {{ items.room_location }}</h3>
          </div>

          <div class="lower">
            <p class="text-muted"></p>

            <p class="text-muted">${{ items.room_price }}</p>
          </div>

          <hr />
        </div>
      </div>

      <div class="cart-footer">
        <div class="price">
          <div>
            Total: 200 <br />
            Rooms: 1
          </div>

          <div class="viewmore" @click="openModal">
            <img src="../assets/img/up.svg" alt="" />
          </div>
        </div>
        <div class="BookRoomNow">
          <button class="btn btn-primary1" @click="openModal">
            <a href="/reserveForm"> Book Room</a>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.add-room {
  .bottom-cart .bottom-cart-modal {
    width: 100%;
  }
  .bottom-cart {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99999;
    align-items: center;
    background: #191e19;
    color: #f1f1ea;
    padding: 1.56rem 1.25rem;
    @include responsive($xl) {
      display: none;
    }
  }
  .cart-footer,
  .cart-header,
  .date {
    display: flex;
    justify-content: space-between;
  }

  .cart-content .upper {
    display: flex;
    justify-content: space-between;
  }

  .cart-header .close {
    justify-items: flex-end;
  }

  /* .cart-footer .footer-btn{
  flex: 1;
} */
  .cart-footer .price {
    flex: 1;
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  .viewmore {
    img {
      width: 2rem;
    }
  }
  .cart-container {
    display: none;
    @include responsive($xl) {
      display: block;
      margin-top: 1rem;
      width: 30rem;
    }
  }
  // @media screen and (min-width: 1440px) {
  //   .cart-container {
  //     display: block;
  //     margin-top: 1rem;
  //     width: 30rem;
  //   }
  // }

  @media screen and (min-width: 1024px) {
    .container .row {
      position: relative;
      height: auto;
    }

    .cart-container {
      position: sticky;
      // margin-right: -1rem;
      top: 10rem;
      // display: block;
      background: #fdfaf6;
      padding: 1rem;
      border: 1px solid #282828;
      height: auto;
      width: 20rem;
    }

    .cart-container .cart-title {
      font-size: 1.5rem;
      color: #808080;
      font-weight: 500;
      margin-bottom: 2rem;
    }

    .cart-container .cart-date {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .cart-container .cart-date .u-checkin .t-chkin {
      margin-bottom: 0.88rem;
    }

    .cart-container .cart {
      margin-bottom: 1rem;
    }

    .cart-container .cart .upper {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.88rem;
    }

    .cart-container .cart-footer-lg {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
}
</style>
