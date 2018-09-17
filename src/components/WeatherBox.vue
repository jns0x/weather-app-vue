<template>
  <div class="weather-box">
    <h5>{{ weather.name }}</h5>
    <p class="weather-desc">Clouds and windy</p>
    <h3>{{ weather.main.temp }}
      <span>o
      </span>
    </h3>

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
    console.log(this.props);
  }
};
</script>
 <style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";

.weather-box {
  width: 100%;
  height: auto;
}
</style>
