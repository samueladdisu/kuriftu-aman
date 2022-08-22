<template>
  <div class="form-wrapper">
    <div class="container">
      <form
        action="https://formsubmit.co/kurifturesortspa1@gmail.com"
        method="POST"
        class="event-form"
      >
        <input type="hidden" name="_cc" value="booking@kurifturesorts.com" />
        <input
          type="hidden"
          name="_subject"
          value="New Submission From Gift Voucher Page"
        />
        <div class="close">
          <img @click="closeForm" src="@/assets/img/icons/x.svg" alt="" />
        </div>

        <div class="form-group">
          <label for="name"> Name * </label>
          <input type="text" class="form-control" name="name" id="name" />
        </div>

        <div class="form-group">
          <label for="email"> Email * </label>
          <input type="email" class="form-control" name="email" id="email" />
        </div>

        <div class="form-group">
          <label for="phone"> Phone number </label>
          <input type="text" class="form-control" name="Phone" id="phone" />
        </div>

        <div class="form-group">
          <button type="submit" name="submit" class="event-btn">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeForm(event) {
      // event.stopPropagation();
      // console.log(event);
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
.form-wrapper {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  .event-form {
    background: #fff;
    margin: 0 auto;
    padding: 4% 8.5%;
    .close {
      position: relative;
      margin: 1rem 0 2rem;
      img {
        position: absolute;
        right: 0;
        width: 1rem;
      }
    }
    .form-group {
      margin-bottom: 1.5rem;
      label {
        @extend .text;
        display: block;
      }
      input[type="checkbox"] {
        appearance: checkbox !important;
        margin-right: 5px;
      }
      .register {
        display: inline;
      }
      .form-control {
        width: 100%;
        border: none;
        border: 0.5px solid #000;
        background: none;
        outline: none;
        padding: 0.7rem 0.5rem;
      }
      .event-btn {
        @extend .btn-primary;
      }
    }
  }
}

@include responsive($lg) {
  .form-wrapper {
    .event-form {
      width: 50%;
      .close {
        margin: 0 0 2rem;
      }
    }
  }
}
</style>
