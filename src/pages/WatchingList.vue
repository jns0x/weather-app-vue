<template>
  <div>
    <h2>Watching list</h2>
    <Loading v-if="loading" :className="'tall'" />
    <div v-if="!loading">
      <transition name="fade">
        <div v-if="getWatchListData.length">
          <transition-group name="weather-list" tag="div">
            <weather-list-item v-for="weather in getWatchListData" :key="weather.id" :weather="weather" />
          </transition-group>
        </div>
      </transition>
    </div>

  </div>

</template>

<script>
import WeatherListItem from "../components/WeatherListItem";
import { setToLocalStorage } from "../helpers";
import Loading from "../components/Loading";
export default {
  name: "WatchingList",
  components: { WeatherListItem, Loading },
  data() {
    return {};
  },
  created() {
    const watchListID = this.$store.state.watchList;
    if (watchListID.length > 0) {
      this.$store.dispatch("getSeveralIDData", watchListID);
    }
  },
  computed: {
    getWatchListData() {
      return this.$store.state.oneDayForecastDataSeveralID;
    },
    loading() {
      return this.$store.state.loading.homeLoading;
    }
  },
  methods: {
    callWatchListData() {
      this.$store.dispatch(getSeveralIDData, ids);
    }
  }
};
</script>
 <style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";

.weather-list-leave-active {
  width: 100%;
  position: absolute;
}
.weather-list-enter,
.weather-list-leave-to {
  opacity: 0;
  transform: translateX(100%);
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

h2 {
  @include font-size(1.5);
}
</style>
