<template>
  <div>
    <SearchBar/>
    <template v-if="weatherSearch.name">
      <WeatherBox :weather="weatherSearch"></WeatherBox>
    </template>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import WeatherBox from "../components/WeatherBox";
import store from "../store";
export default {
  name: "Home",
  components: {
    SearchBar,
    WeatherBox
  },
  data() {
    return {
      weatherSearch: ""
    };
  },
  computed: {
    getWeather() {
      this.weatherSearch = this.$store.state.currentSearch;
      return this.$store.state.currentSearch;
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
