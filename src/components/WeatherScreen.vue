<template>
  <div class="weather-box">
    <h5>Rzeszow</h5>
    <p class="weather-desc">Clouds and windy</p>
    <h3>18
      <span>o
        <span>
    </h3>

    <div calss="weather-table"></div>

  </div>
</template>

<script>
export default {
  name: "WeatherScreen"
};
</script>
 <style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";

.weather-box {
  width: 100%;
  height: auto;
  .weather-table {
    display: grid;
  }
}
</style>
