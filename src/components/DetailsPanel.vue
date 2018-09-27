<template>
  <div>
    <Loading v-if="loading1" />
    <ItemErrored v-if="errored" />
    <!-- <template v-if="!loading"> -->
    <div v-if="fiveDaysForecast && !loading1 && !errored">
      <ItemErrored v-if="errored" />
      <div class="details-wrapper">
        <div class="details__row-days">
          <div class="details__column" v-for="weather in fiveDaysForecast" :key="weather.dt">
            <div class="details__column-time">{{ weather.dt_txt.split(" ")[1].substring(0,5) }}</div>
            <img class="icon" v-bind:src="`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`">
            <div class="details__column-temp">{{ Math.round(weather.main.temp *10)/10 }}
              <sup>o</sup>
            </div>
          </div>
        </div>
        <Loading v-if="loading2" :className="'details'" />
        <ItemErrored v-if="errored" />
        <div v-if="tenDaysForecast && !loading2 && !errored">
          <div class="details__rows">
            <div class="details__rows-row" v-for="weather in tenDaysForecast" :key="weather.dt*10">
              <div class="details__rows-row-day">{{ getWeekDay(weather.dt) }}</div>
              <img class="icon" v-bind:src="`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`">
              <div class="details__column-temps">
                <div class="details__column-temp temp-day">{{ Math.round(weather.temp.day *10)/10 }}
                  <sup>o</sup>
                </div>
                <div class="details__column-temp temp-night">{{ Math.round(weather.temp.night *10)/10 }}
                  <sup>o</sup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </template> -->
  </div>
</template>
<script>
import Loading from "./Loading";
import { convertUnixTimeToWeekDay } from "../helpers";
import ItemErrored from "../components/ItemErrored";
export default {
  name: "DetailsPanel",
  components: {
    Loading,
    ItemErrored
  },
  computed: {
    fiveDaysForecast() {
      return this.$store.state.fiveDaysForecastData.list;
    },
    tenDaysForecast() {
      return this.$store.state.forecastTenDays;
    },
    loading1() {
      return this.$store.state.loading.fiveDaysForecastLoading;
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
.details-wrapper {
  @extend %center-all;
  flex-direction: column;
  width: 100%;
  .details__row-days {
    @extend %center-all;
    justify-content: flex-start;
    border-top: 0.1rem solid get-color(5);
    padding: 0.5rem 0 0 0;
    margin: 0.5rem 0 0 0;
    box-sizing: border-box;
    width: 95vw;
    overflow-x: scroll;

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
    max-height: 35vh;
    justify-content: flex-start;
    .details__rows-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      min-height: 2.5rem;

      .details__column-temps {
        @extend %center-all;
        flex-direction: row;
        width: 5.6rem;
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


