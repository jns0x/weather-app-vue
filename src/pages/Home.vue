<template>
  <div>
    <SearchBar/>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
export default {
  name: "Home",
  components: {
    SearchBar
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
