<template>
  <!-- <transition name="expand" tag="div"> -->

  <div>
    <Loading v-if="loading1 || loading2" />
    <ItemErrored v-if="errored" />
    <!-- <template v-if="!loading"> -->
    <div v-if="fiveDaysForecast && tenDaysForecast && !loading1 && !errored">
      <ItemErrored v-if="errored" />
      <transition-expand>
        <div class="details-wrapper">
          <div class="details__row-days">
            <div class="details__column" v-for="weather in fiveDaysForecast" :key="weather.dt">
              <div class="details__column-time">{{ weather.dt_txt.split(" ")[1].substring(0,5) }}</div>
              <img class="icon" v-bind:src="`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`">
              <div class="details__column-temp">{{ Math.floor(weather.main.temp *10)/10 }}
                <sup>o</sup>
              </div>
            </div>
          </div>
          <!-- <Loading v-if="loading2" :className="'details'" /> -->
          <!-- <ItemErrored v-if="errored" /> -->
          <!-- <div v-if="tenDaysForecast && !loading2 && !errored"> -->
          <!-- <div v-if="tenDaysForecast"> -->

          <div class="details__rows">
            <div class="details__rows-row" v-for="weather in tenDaysForecast" :key="weather.dt*10">
              <div class="details__rows-row-day">{{ getWeekDay(weather.dt) }}</div>
              <img class="details__rows-row-icon" v-bind:src="`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`">
              <div class="details__column-temps">
                <div class="details__column-temp temp-day">{{ Math.floor(weather.temp.day *10)/10 }}
                  <sup>o</sup>
                </div>
                <div class="details__column-temp temp-night">{{ Math.floor(weather.temp.night *10)/10 }}
                  <sup>o</sup>
                </div>
              </div>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </transition-expand>
    </div>
  </div>
  <!-- </transition-expand> -->
  <!-- </transition> -->
</template>
<script>
import Loading from "./Loading";
import ItemErrored from "../components/ItemErrored";
import TransitionExpand from "./TransitionExpand";
// import smoothReflow from "vue-smooth-reflow";
import { convertUnixTimeToWeekDay } from "../helpers";
export default {
  // mixins: [smoothReflow],
  name: "DetailsPanel",
  components: {
    Loading,
    ItemErrored,
    TransitionExpand
  },

  props: {
    cityID: {
      type: Number
    }
  },
  computed: {
    fiveDaysForecast() {
      const fiveDays = this.$store.state.fiveDaysForecastData.filter(
        e => e.city.id === this.cityID
      );
      if (fiveDays.length) {
        return fiveDays[0].list;
      }
    },
    tenDaysForecast() {
      const tendays = this.$store.state.forecastTenDays.filter(
        e => e.city.id === this.cityID
      );
      if (tendays.length) {
        return tendays[0];
      }
    },
    loading1() {
      return this.$store.state.loading.fiveDaysForecastLoading;
      // return true;
    },
    loading2() {
      return this.$store.state.loading.tenDaysForecastLoading;
    },
    errored() {
      return this.$store.state.itemErrored;
    }
  },
  methods: {
    getWeekDay(unixTime) {
      return convertUnixTimeToWeekDay(unixTime);
    }
  }
};
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
::-webkit-scrollbar {
  display: none;
}

.expand-enter-active,
.expand-leave-active {
  transition-property: opacity, height;
}
.expand-enter,
.expand-leave-to {
  opacity: 0;
}

// .weather-list-leave-active {
//   width: 100%;
//   position: absolute;
// }
// .weather-list-enter,
// .weather-list-leave-to {
//   opacity: 0;
//   transform: translateX(100%);
//   transition: all 1s;
// }

.details-wrapper {
  @extend %center-all;
  flex-direction: column;
  width: 100%;
  @include custom(740px) {
    max-width: 740px;
  }
  .details__row-days {
    @extend %center-all;
    justify-content: flex-start;
    border-top: 0.1rem solid get-color(5);
    padding: 0.5rem 0 0 0;
    margin: 0.5rem 0 0 0;
    box-sizing: border-box;
    width: 95vw;
    overflow-x: scroll;
    @include custom(740px) {
      width: 100%;
      justify-content: space-between;
    }

    .details__column {
      margin: 0 1rem;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  .details__rows {
    @extend %center-all;
    border-top: 0.1rem solid get-color(5);
    padding: 0.5rem 0 0 0;
    margin: 0.5rem 0 0 0;
    box-sizing: border-box;
    flex-direction: column;
    width: 95vw;
    overflow-x: scroll;
    // max-height: 35vh;
    justify-content: flex-start;
    @include custom(740px) {
      max-width: 740px;
    }
    .details__rows-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      min-height: 2.5rem;
      .details__rows-row-day {
        width: 30%;
        text-align: left;
      }

      .details__column-temps {
        @extend %center-all;
        flex-direction: row;
        width: 7rem;
        justify-content: space-between;
        text-align: left;
        .details__column-temp {
          &.temp-night {
            color: darken($color: white, $amount: 70%);
          }
        }
      }
    }
  }
}
</style>


