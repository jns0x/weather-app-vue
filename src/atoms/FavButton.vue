<template>
  <button v-bind:title="dynamicTitle" v-on:click="watchListAction" class="star" v-bind:class="{'star-clicked': checkIfInWatchList}">
  </button>

</template>
<script>
import { setToLocalStorage } from "../helpers";
export default {
  name: "FavButton",
  props: ["cityID"],
  data() {
    return {
      title: ""
    };
  },
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
      // if (this.$store.state.watchList.includes(this.cityID)) {
      //   return "Remove";
      // } else {
      //   return "Add";
      // }
      return this.$store.state.watchList.includes(this.cityID);
    },
    dynamicTitle() {
      return !this.checkIfInWatchList
        ? "Add to Favorites"
        : "Remove from Favorites";
    }
  }
};
</script>
<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
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
.star {
  background: url(../assets/star_shape.svg) no-repeat;
  filter: drop-shadow(3px -3px 3px #000);
  width: 2.5rem;
  height: 2.5rem;
  background-size: cover;
  border: none;
  cursor: pointer;
  outline: none;
  transition: 200ms ease;
  &:active {
    transition: 200ms ease;
    transform: scale(0.8);
  }
  &:hover {
    transition: 200ms ease;
    transform: scale(1.1);
    filter: drop-shadow(1px -1px 5px gold);
  }
  &.star-clicked {
    background: url(../assets/star.svg) no-repeat;
    filter: drop-shadow(3px -3px 3px #000);
    transition: 200ms ease;
    &:hover {
      transition: 200ms ease;
      transform: scale(1.1);
      filter: drop-shadow(1px -1px 5px gold);
    }
  }
}

@keyframes starHover {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>


