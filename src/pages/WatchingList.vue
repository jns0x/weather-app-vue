<template>
  <div>
    <h2>Watching list</h2>
    <transition name="resize">
      <div v-if="getWatchListData.length">
        <!-- <transition name="slide"> -->
        <weather-list-item v-for="weather in getWatchListData" :key="weather.id" :weather="weather" />
        <!-- </transition> -->
      </div>
    </transition>
  </div>
</template>

<script>
import WeatherListItem from "../components/WeatherListItem";
import { setToLocalStorage, getFromLocalStorage } from "../helpers";
export default {
  name: "WatchingList",
  components: { WeatherListItem },
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
.resize-leave-active,
.resize-enter-active {
  transition: 1s;
}
.resize-enter {
  height: 100%;
}
.resize-leave-to {
  height: 100%;
}
h2 {
  @include font-size(1.5);
}
</style>
