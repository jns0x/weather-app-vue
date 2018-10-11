<template>
  <transition name="switch-svg">
    <button class="btn--default" @click="handleClick" v-on:click="changeClass" v-bind:class="{'toggled': btnToggle}">
      <div class="green-border"></div>
      <div class="btn-border">
        <svg v-if="!btnToggle" id="chevron-down" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 284.929 284.929" style="enable-background:new 0 0 284.929 284.929;" xml:space="preserve">
          <g>
            <g>
              <path d="M135.899,167.877c1.902,1.902,4.093,2.851,6.567,2.851s4.661-0.948,6.562-2.851L282.082,34.829    c1.902-1.903,2.847-4.093,2.847-6.567s-0.951-4.665-2.847-6.567L267.808,7.417c-1.902-1.903-4.093-2.853-6.57-2.853    c-2.471,0-4.661,0.95-6.563,2.853L142.466,119.622L30.262,7.417c-1.903-1.903-4.093-2.853-6.567-2.853    c-2.475,0-4.665,0.95-6.567,2.853L2.856,21.695C0.95,23.597,0,25.784,0,28.262c0,2.478,0.953,4.665,2.856,6.567L135.899,167.877z" fill="#FFFFFF" />
              <path d="M267.808,117.053c-1.902-1.903-4.093-2.853-6.57-2.853c-2.471,0-4.661,0.95-6.563,2.853L142.466,229.257L30.262,117.05    c-1.903-1.903-4.093-2.853-6.567-2.853c-2.475,0-4.665,0.95-6.567,2.853L2.856,131.327C0.95,133.23,0,135.42,0,137.893    c0,2.474,0.953,4.665,2.856,6.57l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854l133.054-133.046    c1.902-1.903,2.847-4.093,2.847-6.565c0-2.474-0.951-4.661-2.847-6.567L267.808,117.053z" fill="#FFFFFF" />
            </g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
        </svg>
        <svg v-if="btnToggle" id="chevron-up" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 284.929 284.929" style="enable-background:new 0 0 284.929 284.929;" xml:space="preserve">
          <g>
            <g>
              <path d="M17.128,167.872c1.903,1.902,4.093,2.854,6.567,2.854c2.474,0,4.664-0.952,6.567-2.854L142.466,55.666l112.208,112.206    c1.902,1.902,4.093,2.854,6.563,2.854c2.478,0,4.668-0.952,6.57-2.854l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.563    c0-2.475-0.951-4.665-2.847-6.567L149.028,7.419c-1.901-1.906-4.088-2.853-6.562-2.853s-4.665,0.95-6.567,2.853L2.856,140.464    C0.95,142.367,0,144.554,0,147.034c0,2.468,0.953,4.658,2.856,6.561L17.128,167.872z" fill="#FFFFFF" />
              <path d="M149.028,117.055c-1.901-1.906-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,250.1    C0.95,252.003,0,254.192,0,256.67c0,2.472,0.953,4.661,2.856,6.564l14.272,14.276c1.903,1.903,4.093,2.848,6.567,2.848    c2.474,0,4.664-0.951,6.567-2.848l112.204-112.209l112.208,112.209c1.902,1.903,4.093,2.852,6.563,2.852    c2.478,0,4.668-0.948,6.57-2.852l14.274-14.276c1.902-1.903,2.847-4.093,2.847-6.564c0-2.478-0.951-4.667-2.847-6.57    L149.028,117.055z" fill="#FFFFFF" />
            </g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
        </svg>
      </div>
      <div class="green-border"></div>
    </button>
  </transition>
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
@import "../styles/variables";
@import "../styles/mixins";

.switch-svg-enter-active,
.switch-svg-leave-active {
  transition: opacity 1s;
}
.switch-svg-enter,
.switch-svg-leave-to {
  opacity: 0;
}

.btn--default {
  // background: url("../assets/chevron-down.svg") no-repeat;
  width: 98vw;
  background: none;
  height: 1.5rem;
  // background: get-color(5);
  // background-size: cover;
  border: none;
  outline: none;
  // position: absolute;
  bottom: -0.5rem;
  @extend %center-all;
  cursor: pointer;
  transition: 1s;
  @include custom(740px) {
    max-width: 740px;
  }
  .green-border {
    border-top: 0.15rem solid get-color(5);
    width: 100%;
  }
  .btn-border {
    // border-top: 0.1rem solid get-color(5);
    #chevron-down path {
      fill: get-color(5);
    }
    #chevron-down {
      position: relative;
      top: 3px;
      transition: 1s;
    }
    #chevron-up path {
      fill: get-color(5);
    }
    #chevron-up {
      transition: 1s;
    }
    // &:active {
    //   transform: scale(0.8);
    // }
    // &.toggled {
    //   background-size: cover;
    //   transition: 1s;
    //   &:active {
    //     transform: scale(0.8);
    //   }
    // }
  }
}
</style>
