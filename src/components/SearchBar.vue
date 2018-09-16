<template>
  <div>
    <h2>Search for city</h2>
    <vue-google-autocomplete id="map" classname="form-control" placeholder="Start typing" v-on:placechanged="getAddressData">
    </vue-google-autocomplete>
  </div>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
export default {
  name: "Home",
  components: {
    VueGoogleAutocomplete
  }
};
</script>
 <style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
h2 {
  @include font-size(2);
}
.form-control {
  border-radius: 2rem;
  border: none;
  padding: 0.5rem;
  outline: none;
  width: 50%;
}
.pac-container {
  top: 181px;
  width: 52% !important;
  position: absolute;
  left: calc(25%);
  border-radius: 1rem !important;
  border: none !important;
  background: white;
  .pac-item {
    // &:nth-last-child {
    //   border-top-left-radius: 2rem;
    // }
    &:hover {
      background: get-color(5);
      color: white;
    }
    .pac-item-query {
      .pac-matched {
        font-family: Montserrat, sans-serif;
      }
    }
  }
}
</style>
