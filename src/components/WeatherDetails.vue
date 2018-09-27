<template>
  <div class="weather-box__wrapper">
    <div class="weather-box">
      <div class="weather__city">{{ weather.city.name }}</div>
      <div class="group">
        <div class="weather__temp">{{ weather.list[0].main.temp }}
          <sup class="unit">o</sup>
        </div>
        <img class="icon" v-bind:src="`http://openweathermap.org/img/w/${weather.list[0].weather[0].icon}.png`">
      </div>
      <p class="weather-desc">{{ weather.list[0].weather[0].description }}</p>
      <p class="weather-desc">humidity: {{ weather.list[0].main.humidity }}</p>
      <p class="weather-desc">pressure: {{ weather.list[0].main.pressure }} hpa</p>
      <p class="weather-desc">wind: {{ weather.list[0].wind.speed }} km/h</p>
    </div>
  </div>
</template>

<script>
import RoundButton from "../atoms/RoundButton";
import DefaultButton from "../atoms/DefaultButton";
export default {
  name: "WeatherDetails",
  components: {
    RoundButton,
    DefaultButton
  },
  props: {
    weather: {
      type: Object
    }
  },
  created() {
    // console.log(this.weather);
  },
  methods: {
    addToWatchList() {
      const idNum = this.weather.id;
      this.$store.dispatch("addToWatchList", idNum);
    }
  }
};
</script>
 <style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";

.weather-box__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .weather-box {
    margin-top: 1rem;
    // border: 1px solid white;
    // width: 100%;
    width: 95vw;
    height: auto;
    .weather__city {
      @include font-size(1.5);
      margin: 0.5rem;
    }
    .group {
      display: flex;
      justify-content: center;
      .weather__temp {
        @include font-size(3.5);
        position: relative;
        .unit {
          position: relative;
          top: -1rem;
          left: -1rem;
        }
      }
      .icon {
        width: 80px;
        height: 80px;
      }
    }
  }
}
</style>
