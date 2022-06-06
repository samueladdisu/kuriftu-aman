<template>
  <section class="sticky-book">
    <div class="container row">
      <div class="book-stay col-2">
        <h2 class="title">book your stay</h2>
        <img src="@/assets/img/icons/next2.svg" alt="" />
      </div>

      <div class="location col-3">
        <h5 class="sub-title">location</h5>
        <select>
          <option value="awash">Awash Falls</option>
          <option value="bishoftu">Bishoftu</option>
          <option value="entoto">Entoto</option>
          <option value="tana">Lake Tana</option>
          <option value="afar">Afar</option>
        </select>
      </div>

      <div class="select-dates col-3">
        <h5 class="sub-title">Select dates</h5>
        <div class="t-datepicker mt-2 col-3">
          <div class="t-check-in">
            <div class="t-dates t-date-check-in">
              <label class="t-date-info-title">Check In</label>
            </div>
            <input type="hidden" class="t-input-check-in" name="start" />
            <div class="t-datepicker-day">
              <table class="t-table-condensed">
                <!-- Date theme calendar -->
              </table>
            </div>
          </div>
          <div class="t-check-out">
            <div class="t-dates t-date-check-out">
              <label class="t-date-info-title">Check Out</label>
            </div>
            <input type="hidden" class="t-input-check-out" name="end" />
          </div>
        </div>
      </div>

      <div class="guests col-2">
        <h5 class="sub-title">guests</h5>

        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="cta-container col-2">
        <nuxt-link to="#" class="btn-primary"> Check availability </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    var start, end;
    $(document).ready(function () {
      const tdate = $(".t-datepicker");
      tdate.tDatePicker({
        iconDate: '<i class="fa fa-calendar"></i>',
        iconArrowTop: false,
      });
      // tdate.tDatePicker("show");

      tdate.on("eventClickDay", function (e, dataDate) {
        var getDateInput = tdate.tDatePicker("getDateInputs");

        start = getDateInput[0];
        end = getDateInput[1];

        console.log("start", start);
        console.log("end", end);
      });
    });
  },
};
</script>

<style lang="scss">
.sticky-book {
  display: none;
  .container {
    .location {
      select {
        @extend .text;
        option {
          @extend .text;
        }
      }
    }
    .guests {
      select {
        @extend .text;
        option {
          @extend .text;
        }
      }
    }
  }
}
@include responsive($xl) {
  .sticky-book {
    z-index: 999;
    display: block;
    padding: 1rem 0;
    position: sticky;
    width: 100%;
    border-top: 0.07143rem solid #d5d1c8;
    background: #fff;
    bottom: 0;
    left: 0;
    .container {
      .location {
        select {
          width: 90%;
          padding: 0.5rem 0.2rem;
          margin-top: 0.2rem;
          border: none;
          border-bottom: 1px #707070 solid;
          outline: none;
        }
      }
      align-items: center;
      .book-stay {
        display: flex;
        align-items: center;
      }
      .select-dates {
        .t-datepicker {
          position: relative;
          .t-datepicker-day {
            position: absolute;
            top: -950%;
          }
        }
      }
      .guests {
        padding-left: 1rem;
        select {
          padding: 0.5rem 0.2rem;
          margin-top: 0.2rem;
          border: none;
          border-bottom: 1px #707070 solid;
          outline: none;
        }
      }
    }
  }
}
</style>
