<template>
  <div>
    <h2>Search for city</h2>
    <vue-google-autocomplete ref="address" id="map" types="(cities)" classname="form-control" placeholder="Start typing" v-on:placechanged="updateData" v-on:submit.prevent="getAddressData" v-on:inputChange="onChange">
    </vue-google-autocomplete>
  </div>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import store from "../store";
export default {
  name: "Home",
  components: {
    VueGoogleAutocomplete
  },
  data() {
    return {
      address: store.state
    };
  },
  mounted() {
    this.$refs.address.focus();
  },
  methods: {
    onChange() {},
    getAddressData() {
      this.$store.dispatch("getAddressData", this.address);
    },
    updateData(addressData, placeResultData, id) {
      this.address = placeResultData.name;
      console.log(this.address);
      this.getAddressData();
    }
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
  @include mobile {
    width: 60%;
  }
}
.pac-container {
  top: 181px;
  width: 52% !important;
  position: absolute;
  left: calc(25%);
  border-radius: 1rem !important;
  border: none !important;
  background: white;
  @include mobile {
    width: 63% !important;
    left: calc(20%);
  }
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
