<template>
  <div>
    <div class="btn" @click="$emit('addToWatchList')" v-on:click="changeClass" v-bind:class="{'toggled': btnToggle, 'unToggled': btnRemove}">
      <div class="btn__cross" v-bind:class="{'toggled': btnToggle}"></div>
    </div>
    <div class="btnMessage">{{ messageText }}</div>
  </div>
</template>
<script>
export default {
  name: "RoundButton",
  data() {
    return {
      btnToggle: false,
      btnRemove: true,
      messageText: "Added to watch list"
    };
  },
  methods: {
    handleClick() {
      this.$emit("addToWatchList");
    },
    changeClass() {
      this.btnToggle = !this.btnToggle;
      this.btnRemove = !this.btnRemove;
    }
  }
};
</script>
<style lang="scss">
.btnMessage {
  background: alpha($color: #000000);
  // padding: 1rem;
  // border-radius: 1rem;
  position: absolute;
  margin: auto;
}
.btn {
  // border: 0.3rem solid white;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  cursor: pointer;

  &:hover {
    .btn__cross {
      transform: rotate(180deg);
      transition: 250ms all;
    }
  }
  &.toggled {
    animation: popIn 250ms ease-in-out forwards;
  }
  &.unToggled {
    animation: popOut 250ms ease-in-out forwards;
  }
  .btn__cross {
    border: 0.2rem solid white;
    background: white;
    border-radius: 1rem;
    width: 1.6rem;
    position: absolute;
    top: 1rem;
    left: 0.25rem;
    transition: 250ms all;
    &:after {
      content: "";
      border: 0.2rem solid white;
      background: white;
      border-radius: 1rem;
      width: 1.6rem;
      position: absolute;
      transform: rotate(90deg);
      left: -0.2rem;
      top: -0.2rem;
      transition: 250ms all;
    }
    &.toggled {
      &:after {
        transform: rotate(180deg);
        transition: 250ms all;
      }
    }
  }
  @keyframes popIn {
    0% {
      transform: scale(1);
    }
    20% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes popOut {
    0% {
      transform: scale(1);
    }
    20% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>


