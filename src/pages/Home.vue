<template>
  <div class="home--wrapper">
    <RefreshBtn class="btn--refresh" v-if="getWeather" />
    <SearchBar />
    <Loading v-if="loading" :className="'tall'" />
    <ItemErrored v-if="errored" />
    <!-- <Loading :loading="loading"  :className="'tall'"/> -->
    <!-- <template :loading="loading">Loading...</template> -->
    <!-- <template v-if="!loading.homeLoading"> -->
    <template v-if="getWeather && !errored && !loading">

      <WeatherBox :weather="getWeather"></WeatherBox>
    </template>
    <!-- </template> -->
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import WeatherBox from "../components/WeatherBox";
import Loading from "../components/Loading";
import ItemErrored from "../components/ItemErrored";
import RefreshBtn from "../atoms/RefreshBtn";
export default {
  name: "Home",
  components: {
    SearchBar,
    WeatherBox,
    Loading,
    ItemErrored,
    RefreshBtn
  },
  computed: {
    getWeather() {
      return this.$store.state.oneDayForecastData;
    },
    loading() {
      return this.$store.state.loading.homeLoading;
    },
    errored() {
      return this.$store.state.itemErrored;
    }
  }
};
</script>
 <style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
.home--wrapper {
  position: relative;
  .btn--refresh {
    position: absolute;
    right: 0rem;
    top: -2.3rem;
    @include normal {
      top: -5rem;
    }
  }
}
h2 {
  @include font-size(1.5);
}
</style>
