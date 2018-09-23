<template>
  <div class="error-field">
    Sorry, something went wrong, try again later :(
  </div>
</template>
<script>
export default {
  name: "ItemErrored"
};
</script>
<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";

.error-field {
  @extend %center-all;
  height: 20vh;
}
</style>


