<template>
  <div class="weather-watch__wrapper">
    <div class="weather-watch">
      <div class="weather-compact-group" v-on:click="moreDetails">
        <div class="weather-watch__details">
          <div class="weather-watch-title">
            {{weather.name}}, {{weather.sys.country}}, {{converTime(weather.dt)}}
          </div>
          <div class="weather-watch-desc">
            {{ weather.weather[0].description }}
          </div>
          humidity: {{weather.main.humidity}} <br>pressure: {{weather.main.pressure}}
      </div>
          <div class="weather-watch__temp">
            <div class="weather-watch-temp">
              {{Math.floor(weather.main.temp *10)/10}}
              <sup>o</sup>
            </div>
            <img class="icon" v-bind:src="`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`">
      </div>
            <fav-button class="fav-position" :cityID="weather.id" />
          </div>
          <DetailsPanel v-if="detailsShow" :cityID="weather.id" />
        </div>
      </div>
</template>
<script>
import FavButton from "../atoms/FavButton";
// import WeatherListItemCompact from "./WeatherListItemCompact";
// import WeatherBox from "./WeatherBox";

import { convertUnixTime, getFromLocalStorage } from "../helpers";
import DetailsPanel from "./DetailsPanel";
export default {
  name: "WeatherListItem2",
  components: { FavButton, DetailsPanel },
  props: {
    weather: {
      type: Object
    }
  },
  data() {
    return {
      detailsShow: false
    };
  },
  computed: {
    getWatchListData() {
      return this.$store.state.oneDayForecastDataSeveralID;
    }
  },
  methods: {
    converTime(unixTime) {
      return convertUnixTime(unixTime);
    },
    moreDetails() {
      this.detailsShow = !this.detailsShow;
      if (this.detailsShow) {
        const idNum = this.weather.id;
        console.log(idNum);
        this.$store.dispatch("getFiveDaysForecast", idNum);
        this.$store.dispatch("getTenDaysForecast", idNum);
      }
    }
  }
};
</script>
<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
// .slide-leave-active,
// .slide-enter-active {
//   transition: 1s;
// }
// .slide-enter {
//   transform: translate(0, 0);
// }
// .slide-leave-to {
//   transform: translate(100%, 0);
// }
// .animate {
//   transition: all 2s;
// }

// .weather-watch__wrapper {
//   transition: all 2s;
// }

.weather-watch__wrapper {
  @extend %center-all;
  display: flex;
  flex-wrap: wrap;
  transition: all 2s;
  // .weather-compact-group {
  //   border: 0.125rem solid white;
  .weather-watch {
    border: 0.125rem solid white;
    border-radius: 0.5rem;
    width: 95%;
    margin-bottom: 0.25rem;
    display: flex;
    padding: 0.25rem;
    @extend %center-all;
    // justify-content: space-between;
    flex-direction: column;
    cursor: pointer;
    .weather-compact-group {
      width: 95%;
      display: flex;
      @extend %center-all;
      justify-content: space-between;
      .fav-position {
        width: 2rem;
      }
      .weather-watch__details {
        max-width: 40%;
        margin: 0.5rem;
        text-align: left;
      }
      .weather-watch__temp {
        @extend %center-all;
      }
    }
  }
}
</style>


 <!-- <div class="animate">
          <div v-if="compactView">
            <WeatherListItemCompact :weather="weather" v-bind="{selectWeather}" />
          </div>
          <div v-if="!compactView">
            <WeatherBox :weather="weather" v-bind="{selectWeather}" />
          </div>
        </div> -->