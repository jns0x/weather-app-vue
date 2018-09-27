<template>
  <div>
    <h2>Watching list</h2>
    <div v-if="getWatchListData.length">
      <weather-list-item/>
    </div>
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
  mounted() {
    //getting items from local storage
  },
  created() {
    const watchListID = this.$store.state.watchList;
    if (watchListID.length > 0) {
      console.log(watchListID);
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
h2 {
  @include font-size(1.5);
}
</style>
