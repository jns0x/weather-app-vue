<template>
  <button class="btn__refresh" v-on:click="toggleRefresh" v-bind:class="{ 'activated':buttonToggled}">
  </button>

</template>
<script>
export default {
  name: "RefreshBtn",
  data() {
    return {
      buttonToggled: false
    };
  },
  methods: {
    toggleRefresh() {
      this.buttonToggled = !this.buttonToggled;
      // setTimeout(function() {
      //   this.buttonToggled = false;
      // }, 1000);
      const cityID = this.$store.state.oneDayForecastData.id;
      this.$store.dispatch("getOneDayDataID", cityID);
      // this.$store.dispatch("getFiveDaysForecast", cityID);
      // this.$store.dispatch("getTenDaysForecast", cityID);
    }
  }
};
</script>
<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";

.btn__refresh {
  border: 0;
  outline: none;
  background: url("../assets/refresh.png");
  height: 3.5rem;
  width: 3.5rem;
  background-size: cover;
  cursor: pointer;
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
  &:hover {
    transform: rotate(360deg);
    transition: 1000ms ease-in-out;
  }
  &.activated {
    // animation: rotate 3000ms linear;
    // transform: rotate(720deg);
    // transition: 1000ms linear;
    animation: rotateRefresh 1000ms ease-in-out;
  }
}
@keyframes rotateRefresh {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(720deg);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(720deg);
  }
  75% {
    transform: rotate(2160deg);
  }
  100% {
    transform: rotate(2880deg);
  }
}
</style>


