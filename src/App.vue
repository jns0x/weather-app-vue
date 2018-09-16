<template>
  <div id="app">
    <Navigation/>
    <!-- <transition :name="transitionName"> -->
    <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
      <router-view/>
    </transition>
  </div>
</template>
// enter-active-class="animated fadeOutRight" leave-active-class="animated fadeOutLeft"
<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Navigation from "./components/Navigation";
import "normalize.css";
import "animate.css";
export default {
  components: { Navigation }
  // data() {
  //   return {
  //     transitionName: "slide-left",
  //     transition: 0
  //   };
  // },
  // watch: {
  //   $route(to, from) {
  //     const routeArr = ["/", "/watching", "/fixed-watch-list"];
  //     const routeIndex = routeArr.indexOf(to.path);
  //     this.transitionName =
  //       this.transition > routeIndex ? "animated fadeInRight" : "fadeInLeft";
  //     this.transition = routeIndex;
  //   }
  // }
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
  max-height: 100vh;
  overflow: hidden;
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
.router-anim-enter-active {
  animation: coming 1s;
  // animation-delay: 0.5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-10rem);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-10rem);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
