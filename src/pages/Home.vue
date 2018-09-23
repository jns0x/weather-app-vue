<template>
  <div>
    <SearchBar />
    <Loading v-if="loading" :className="'tall'" />
    <!-- <Loading :loading="loading"  :className="'tall'"/> -->
    <!-- <template :loading="loading">Loading...</template> -->
    <!-- <template v-if="!loading.homeLoading"> -->
    <template v-if="getWeather">

      <WeatherBox :weather="getWeather"></WeatherBox>
    </template>
    <!-- </template> -->
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import WeatherBox from "../components/WeatherBox";
import Loading from "../components/Loading";
import uuidv4 from "uuid";
export default {
  name: "Home",
  components: {
    SearchBar,
    WeatherBox,
    Loading
  },
  computed: {
    getWeather() {
      return this.$store.state.oneDayForecastData;
    },
    loading() {
      return this.$store.state.loading.homeLoading;
    }
  },
  methods: {
    createID() {
      return uuidv4();
    }
  }
};
</script>
 <style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
h2 {
  @include font-size(1.5);
}
</style>
