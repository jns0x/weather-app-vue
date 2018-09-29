<template>
  <button class="btn--default" @click="handleClick" v-on:click="changeClass" v-bind:class="{'toggled': btnToggle}">
    <!-- <span class="btn__txt"> {{ label }}</span> -->
  </button>
</template>
<script>
export default {
  name: "DefaultButton",
  data() {
    return {
      btnToggle: false
      // btnRemove: true
    };
  },
  props: ["label"],
  methods: {
    handleClick() {
      this.$emit("moreDetails");
    },
    changeClass() {
      this.btnToggle = !this.btnToggle;
      // this.btnRemove = !this.btnRemove;
    }
  }
};
</script>
<style lang="scss">
.btn--default {
  background: url("../assets/chevron-down.svg") no-repeat;
  height: 2rem;
  width: 2rem;
  background-size: cover;
  border: none;
  outline: none;
  position: absolute;
  bottom: -0.5rem;
  cursor: pointer;
  transition: 250ms;
  &:active {
    transform: scale(0.8);
  }
  &.toggled {
    background: url("../assets/chevron-up.svg") no-repeat;
    background-size: cover;
    transition: 250ms;
    &:active {
      transform: scale(0.8);
    }
  }
}
// .btn__default {
//   background: none;
//   border: 0.2rem solid white;
//   padding: 0.5rem;
//   border-radius: 1rem;
//   color: white;
//   margin: 0.1rem;
//   cursor: pointer;
//   &.toggled {
//     position: relative;
//     bottom: 0.5rem;
//   }
//   &:active {
//     // animation: shadowOutline 250ms forwards ease-in-out;
//     animation: scale 250ms forwards ease-in-out;
//     .btn__txt {
//       // transform: scale(0.9);
//       // transition: 250ms ease-in-out;
//     }
//   }
//   .btn__txt {
//     &:active {
//       // transform: scale(0.9);
//       // transition: 250ms ease-in-out;
//       // animation: scale 250ms forwards ease-in-out;
//     }
//   }
// }
// @keyframes scale {
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(0.9);
//   }
//   100% {
//     transform: scale(0.1);
//   }
// }
</style>
