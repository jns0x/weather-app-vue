<template>
  <div>
    <h2>Details</h2>
    <template v-if="getForecast">

      <WeatherDetails :weather="getForecast"></WeatherDetails>

    </template>
  </div>
</template>
<script>
import WeatherDetails from "../components/WeatherDetails";
export default {
  name: "Details",
  components: { WeatherDetails },
  computed: {
    getForecast() {
      return this.$store.state.foreactFiveDays;
    }
  },
  methods: {
    getForecastFiveDays() {}
  }
};
</script>

