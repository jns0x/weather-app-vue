<template>
  <div>
    <h2>Watching list</h2>
    <div v-if="getWatchListData"></div>
  </div>
</template>

<script>
import WeatherWatch from "../components/WeatherWatch";
export default {
  name: "WatchingList",
  components: { WeatherWatch },
  data() {
    return {
      watchListID: this.$store.state.watchList
    };
  },
  created() {
    this.$store.dispatch("getSeveralIDData", watchListID);
  },
  computed: {
    getWatchListData() {
      const watchListID = this.$store.state.watchList;
      // console.log(watchListID.join(","));
      this.$store.dispatch("getSeveralIDData", watchListID.join(","));
      return "cos";
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
