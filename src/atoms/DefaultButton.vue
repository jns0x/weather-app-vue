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
</style>
