<template>

  <div>
    <h2>Watching list</h2>
    <!-- <transition name="fade"> -->
    <Loading v-if="loading" :className="'tall'" />
    <!-- </transition> -->

    <div v-if="!loading">
      <transition name="fade">
        <div v-if="getWatchListData.length">
          <!-- <transition-expand> -->
          <transition-group name="weather-list" tag="div">
            <weather-list-item-2 v-for="weather in getWatchListData" :key="weather.id" :weather="weather" />
          </transition-group>
          <!-- </transition-expand> -->
        </div>
      </transition>
    </div>

  </div>

</template>

<script>
import WeatherListItem from "../components/WeatherListItem";
import WeatherListItem2 from "../components/WeatherListItem2";
import TransitionExpand from "../components/TransitionExpand";
import { setToLocalStorage, getFromLocalStorage } from "../helpers";
import Loading from "../components/Loading";
export default {
  name: "WatchingList",
  components: { WeatherListItem, Loading, WeatherListItem2, TransitionExpand },
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
    },
    delayLoad() {
      setTimeout()({}), 500;
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
.fade-ednter-to {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

h2 {
  @include font-size(1.5);
}
</style>
