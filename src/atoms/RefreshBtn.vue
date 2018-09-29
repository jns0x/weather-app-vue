<template>
  <button class="btn__refresh" v-on:click="toggleRefresh" v-bind:class="{'rotate': buttonToggled}">
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
  computed: {
    classObject: function() {
      return {
        rotate: (this.buttonToggled = true)
      };
    }
  },
  methods: {
    toggleRefresh() {
      this.buttonToggled = !this.buttonToggled;
      const cityID = this.$store.state.oneDayForecastData.id;
      this.$store.dispatch("getOneDayDataID", cityID);
      setTimeout(this.switchStyleOff, 1000);
    },
    switchStyleOff() {
      this.buttonToggled = false;
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
  // position: absolute;
  // right: 0rem;
  // top: -2.3rem;
  // &:hover {
  //   transform: rotate(360deg);
  //   transition: 1000ms ease-in-out;
  // }
  &.rotate {
    // animation: rotate 3000ms linear;
    // transform: rotate(720deg);
    // transition: 1000ms linear;
    animation: rotateRefresh 1000ms forwards;
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


