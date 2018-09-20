<template>
  <button class="btn__default" @click="handleClick" v-on:click="changeClass" v-bind:class="{'toggled': btnToggle, 'unToggled': btnRemove}">
    <span class="btn__txt"> {{ label }}</span>
  </button>
</template>
<script>
export default {
  name: "DefaultButton",
  data() {
    return {
      btnToggle: false,
      btnRemove: true
    };
  },
  props: ["label"],
  methods: {
    handleClick() {
      this.$emit("moreDetails");
    },
    changeClass() {
      this.btnToggle = !this.btnToggle;
      this.btnRemove = !this.btnRemove;
    }
  }
};
</script>
<style lang="scss">
.btn__default {
  background: none;
  border: 0.2rem solid white;
  padding: 0.5rem;
  border-radius: 1rem;
  color: white;
  margin: 0.1rem;
  cursor: pointer;
  &:active {
    // animation: shadowOutline 250ms forwards ease-in-out;
    .btn__txt {
      transform: scale(0.9);
      transition: 250ms ease-in-out;
    }
  }
  .btn__txt {
    &:active {
      transform: scale(0.9);
      transition: 250ms ease-in-out;
      animation: shadowOutline 250ms forwards ease-in-out;
    }
  }
}
@keyframes shadowOutline {
  0% {
    outline: white;
    opacity: 0;
  }
  100% {
    transform: scale(2);
    opacity: 1;
  }
}
</style>
