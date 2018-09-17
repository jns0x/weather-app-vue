<template>
  <div>
    <SearchBar/>
    <WeatherBox></WeatherBox>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import WaetherBox from "../components/WeatherBox";
export default {
  name: "Home",
  components: {
    SearchBar,
    WaetherBox
  }
};
</script>
 <style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
h2 {
  @include font-size(1.5);
}
</style>
