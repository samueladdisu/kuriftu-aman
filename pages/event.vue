<template>
  <div>
    <HeaderApp />
    <div class="E-bg">
      <section class="gift__hero">
        <div class="container">
          <h1 class="title center">Request a proposal</h1>
          <p class="text center">
            No request is too great and no detail too small. We are here to
            assist you with all aspects of event organisation, from conception
            through to execution.
          </p>
        </div>
      </section>
      <section class="e-form">
        <div class="container">
          <form action="" class="event-form">
            <div class="form-group">
              <label for="title"> Title </label>
              <select name="" class="form-control" id="title">
                <option value="" disabled>-Select-</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Dr">Dr</option>
              </select>
            </div>

            <div class="form-group">
              <label for="fname"> First name * </label>
              <input type="text" class="form-control" id="fname" />
            </div>

            <div class="form-group">
              <label for="lname"> Last name * </label>
              <input type="text" class="form-control" id="lname" />
            </div>

            <div class="form-group">
              <label for="email"> Email * </label>
              <input type="email" class="form-control" id="email" />
            </div>

            <div class="form-group">
              <label for="phone"> Phone number * </label>
              <input type="text" class="form-control" id="phone" />
            </div>
            <div class="form-group">
              <label for="desti"> Select your destination * </label>
              <select name="" class="form-control" id="desti">
                <option value="" disabled>-Select-</option>
                <option value="Awash">Awash</option>
                <option value="Bishoftu">Bishoftu</option>
                <option value="Entoto">Entoto</option>
                <option value="LakeTana">Lake Tana</option>
              </select>
            </div>

            <div class="form-group">
              <label for="bro"> Request a brochure </label>
              <select name="" class="form-control" id="bro">
                <option value="" disabled>-Select-</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div class="form-group">
              <label for="occasion"> Occasion * </label>
              <select name="" class="form-control" id="occasion">
                <option value="" disabled>-Select-</option>
                <option value="wed">Wedding</option>
                <option value="cele">Celebration</option>
                <option value="corp">Corporate event</option>
                <option value="other">Other...</option>
              </select>
            </div>

            <div class="form-group">
              <label for="guest"> Number of guests * </label>
              <input type="text" class="form-control" id="guest" />
            </div>

            <div class="form-group">
              <label for="msg"> Message </label>
              <textarea
                name=""
                class="form-control"
                id="msg"
                cols="30"
                rows="10"
              >
              </textarea>
            </div>

            <div class="form-group">
              <input type="checkbox" id="register" />
              <label for="register" class="register">
                Register to receive updates about exclusive experiences, events,
                new destinations and more
              </label>
            </div>

            <div class="form-group">
              <button class="event-btn">Send</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.e-form {
  padding-bottom: 3rem;
  .container {
    background: #fff;
    padding: 4% 8.5%;
    .event-form {
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
}
</style>
