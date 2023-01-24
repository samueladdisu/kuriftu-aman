<template>
  <div class="modal-overlay" @click="$emit('close')">
    <div class="modal2" @click.stop>
      <!-- <button @click="$emit('close')" class="btn btn-primary">Close</button> -->
      <a class="close2" href="" @click="$emit('close')"
        ><img src="../assets/img/close2.svg" alt=""
      /></a>
      <img
        class="roomImg"
        src="../assets/room_img/awash/otherpres.webp"
        alt=""
      />
      <h2 class="add-textGuest">Add Guests</h2>
      <p>In order to reserve a room, make sure to choose at least one.</p>

      <form class="addGuestForm" action="">
        <hr />
        <div class="wrapper-form">
          <div>
            <label for="">Adults</label>
            <select name="Adults" id="Adults">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div>
            <label for="">Teens (12-17)</label>
            <select name="Kids" id="Kids">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div>
            <label for="">Kids</label>
            <select name="Kids" id="Kids">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <hr />
        <button class="btn btn-primary">Add Room</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.modal-overlay {
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-family: "Neue Helvetica Medium";
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: grid;
  align-items: center;
  background-color: #000000da;
}

.modal2 {
  display: grid;
  align-items: center;
  text-align: center;
  position: relative;
  background-color: white;
  height: 600px;
  width: 340px;
  @include responsive($md) {
    height: auto;
    width: 600px;
  }
  margin-top: 10%;
  padding: 2rem;
  //   border-radius: 20px;
}
.close2 {
  margin: 15% 0 0 5px;
  position: absolute;
  top: -4rem;
  right: -0.8rem;
  @include responsive($md) {
    top: -7rem;
    right: -0.8rem;
  }
  background: #dedddd !important;
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 15px;
  }

  @include responsive($md) {
  }
}

// .roomImg {

// }
.close-img {
  width: 25px;
}

.check {
  width: 150px;
}
.add-textGuest {
  font-size: 2rem;
  font-weight: 600;
  color: #212529;
  text-transform: uppercase;
  @include responsive($md) {
    margin-top: 1rem;
  }
}
p {
  font-size: 0.8rem;
  color: #808080;
  @include responsive($md) {
    margin-top: 2rem;
  }
}
.addGuestForm {
  text-align: left;
  @include responsive($md) {
    text-align: center;
    display: grid;
    place-items: center;
  }
  .wrapper-form {
    @include responsive($md) {
      display: flex;
      gap: 1rem;
    }
  }
  label {
    font-size: 1rem;
    color: #212529;
    // font-weight: 600;
    margin-right: 2rem;
  }
  select {
    width: 120px;
    outline: none;
    height: 30px;
    border: 1px solid #808080;
    // border-radius: 5px;
    font-size: 1rem;
    color: #808080;
    // font-weight: 600;
    align-items: right;
    margin-right: 1rem;
    margin-top: 0.5rem;
  }
  hr {
    border: 0.002px solid #808080;
    margin: 1rem 0;
    @include responsive($md) {
      width: 100%;
      margin-top: 2rem;
    }
  }
  button {
    display: grid;
    place-items: center;
    width: 100%;
    height: 40px;
    border: none;
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: 2rem;
    color: #fff;
    background-color: #c2874a;
  }
}
</style>
