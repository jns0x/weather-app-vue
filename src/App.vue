<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Navigation from "./components/Navigation";
import "normalize.css";
export default {
  components: { Navigation }
};
</script>

<style lang="scss">
@import "styles/variables";
@import "styles/mixins";

#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 100vh;
  max-height: 100vh;
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
</style>
