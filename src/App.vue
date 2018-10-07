<template>
  <div id="app">
    <Navigation />
    <transition :name="transitionName" mode="out-in">
      <router-view class="child-view" />
    </transition>
  </div>
</template>
<script>
import Navigation from "./components/Navigation";
import "normalize.css";
import "animate.css";

export default {
  components: { Navigation },
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").filter(e => Boolean(e)).length;
      const fromDepth = from.path.split("/").filter(e => Boolean(e)).length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style lang="scss">
@import "styles/variables";
@import "styles/mixins";
html {
  font-size: $base-font;
}

#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 100vh;
  max-width: 100vw;
  overflow: scroll;
  @include gradient-bg(to right top, $colors-palette);

  h1 {
    text-shadow: 2px 3px 0px rgba(150, 150, 150, 1);
    transform: matrix(1, 0, 0, 1, 0, 0);
    font-weight: 900;
    margin-top: 0;
    font-size: 3rem;
    font-stretch: 100%;
    font-style: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-weight: 900;
  }
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50%, 0);
  transform: translate(50%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
.child-view {
  transition: all 500ms ease-in-out;
}
</style>
