<template>
  <!-- <transition name="slide"> -->
  <div class="weather-watch__wrapper">
    <div class="weather-watch" @click="selectWeather">
      <!-- <div class="weather-watch" v-for="weather in getWatchListData" :key="weather.id"> -->
      <div class="weather-watch__details">
        <div class="weather-watch-title">
          {{weather.name}}, {{weather.sys.country}}, {{converTime(weather.dt)}}
        </div>
        <div class="weather-watch-desc">
          {{ weather.weather[0].description }}
        </div>
        humidity: {{weather.main.humidity}} <br>pressure: {{weather.main.pressure}}
      </div>
        <div class="weather-watch__temp">
          <div class="weather-watch-temp">
            {{Math.floor(weather.main.temp *10)/10}}
            <sup>o</sup>
          </div>
          <img class="icon" v-bind:src="`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`">
      </div>
          <fav-button class="fav-position" :cityID="weather.id" />
        </div>
      </div>
</template>
<script>
import FavButton from "../atoms/FavButton";
import { convertUnixTime, getFromLocalStorage } from "../helpers";
export default {
  name: "WeatherListItemCompact",
  props: {
    weather: {
      type: Object
    },
    selectWeather: {
      type: Function
    }
  },
  components: { FavButton },
  computed: {
    getWatchListData() {
      return this.$store.state.oneDayForecastDataSeveralID;
    }
  },
  methods: {
    converTime(unixTime) {
      return convertUnixTime(unixTime);
    }
  }
};
</script>
<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
.weather-watch__wrapper {
  @extend %center-all;
  display: flex;
  flex-wrap: wrap;

  .weather-watch {
    // border: 0.125rem solid white;
    border-radius: 0.5rem;
    width: 95%;
    margin-bottom: 0.25rem;
    display: flex;
    padding: 0.25rem;
    @extend %center-all;
    justify-content: space-between;
    cursor: pointer;
    .fav-position {
      width: 2rem;
    }
    .weather-watch__details {
      max-width: 40%;
      margin: 0.5rem;
      text-align: left;
    }
    .weather-watch__temp {
      @extend %center-all;
    }
  }
}
</style>


