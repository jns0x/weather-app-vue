<template>
  <div>
    <SearchBar />
    <template v-if="getWeather">
      <WeatherBox :weather="getWeather"></WeatherBox>
    </template>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import WeatherBox from "../components/WeatherBox";
import store from "../store";
import uuidv4 from "uuid";
export default {
  name: "Home",
  components: {
    SearchBar,
    WeatherBox
  },
  computed: {
    getWeather() {
      return this.$store.state.currentSearch;
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
