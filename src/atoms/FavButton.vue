<template>
  <button v-on:click="watchListAction" class="favButton">
    <div class="favButton-shape"></div>
    {{checkIfInWatchList}}
  </button>

</template>
<script>
import { setToLocalStorage } from "../helpers";
export default {
  name: "FavButton",
  props: ["cityID"],
  //756135, 3094802, 4887398, 3177171, 3165201
  methods: {
    watchListAction() {
      // const idNum = this.weather.id;
      this.$store.dispatch("addToWatchList", this.cityID);
      const watchList = this.$store.state.watchList;
      // console.log(watchList);
      setToLocalStorage("watchList", watchList);
    }
  },
  computed: {
    checkIfInWatchList() {
      // this.$store.state.watchList.includes(this.cityID) ? "Remove" : "Add";
      if (this.$store.state.watchList.includes(this.cityID)) {
        return "Remove";
      } else {
        return "Add";
      }
    }
  }
};
</script>
<style lang="scss">
.favButton {
  outline: none;
  border: 0.2rem solid white;
  height: 2.75rem;
  width: auto;
  border-radius: 1rem;
  color: white;
  background: none;
  vertical-align: middle;
  line-height: 1rem;
  cursor: pointer;
  &:active {
    transform: scale(0.8);
    transition: 500ms linear;
  }
  .favButton-shape {
    border: 0.25rem solid transparent;
  }
}
</style>


