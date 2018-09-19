<template>
  <div class="weather-box">
    <div class="weather__city">{{ weather.name }}</div>
    <div class="group">
      <div class="weather__temp">{{ weather.main.temp }}
        <sup class="unit">o</sup>
      </div>
      <img class="icon" v-bind:src="`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`">
    </div>
    <p class="weather-desc">{{ weather.weather[0].description }}</p>
    <p class="weather-desc">humidity: {{ weather.main.humidity }}</p>
    <p class="weather-desc">pressure: {{ weather.main.pressure }} hpa</p>
    <p class="weather-desc">wind: {{ weather.wind.speed }} km/h</p>

  </div>
</template>

<script>
export default {
  name: "WeatherBox",
  props: {
    weather: {
      type: Object
    }
  },
  created() {
    console.log(this.weather);
  }
};
</script>
 <style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";

.weather-box {
  margin-top: 2rem;
  // border: 1px solid white;
  width: 100%;
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
</style>
