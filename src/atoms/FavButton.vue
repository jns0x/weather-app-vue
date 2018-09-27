<template>
  <button v-on:click="watchListAction" class="favButton">
    <div class="favButton-shape"></div>
    {{cityID}}
  </button>

</template>
<script>
import { setToLocalStorage } from "../helpers";
export default {
  name: "FavButton",
  props: ["cityID"],
  methods: {
    watchListAction() {
      // const idNum = this.weather.id;
      this.$store.dispatch("addToWatchList", this.cityID);
      const watchList = this.$store.state.watchList;
      setToLocalStorage("watchList", watchList);
    }
  }
};
</script>
<style lang="scss">
.favButton {
  outline: none;
  border: 1px solid white;
  height: 2.75rem;
  width: 2.75rem;
  border-radius: 50%;
  cursor: pointer;
  .favButton-shape {
    border: 0.25rem solid transparent;
  }
}
</style>


