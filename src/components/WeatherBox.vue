<template>
  <div class="weather-box__wrapper">

    <div class="weather-box">
      <fav-button class="favBtn" :cityID="weather.id" />
      <div class="weather__city">{{ weather.name }}, {{weather.sys.country}}, {{converTime(weather.dt)}} </div>
      <div class="group">
        <div class="weather__temp">{{ Math.floor(weather.main.temp*10)/10 }}
          <sup class="unit">o</sup>
        </div>
        <img class="icon" v-bind:src="`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`">
      </div>
        <p class="weather-desc">{{ weather.weather[0].description }}</p>
        <div class="weather-desc__wrapper">
          <div class="weather-desc__rowOne">
            <p class="weather-desc">humidity: {{ weather.main.humidity }}</p>
            <p class="weather-desc">pressure: {{ weather.main.pressure }} hpa</p>
            <p class="weather-desc">wind: {{ weather.wind.speed }} km/h</p>
          </div>
          <div class="weather-desc__rowTwo">
            <p class="weather-desc">sunrise: {{ converTime(weather.sys.sunrise) }}</p>
            <p class="weather-desc">sunset: {{ converTime(weather.sys.sunset) }}</p>
            <p class="weather-desc">visibility: {{ weather.visibility }} m</p>
          </div>
        </div>
      </div>
      <!-- <transition-expand> -->
      <div style="overflow: hidden; max-height: 650px">
        <transition name="fadeHeight">
          <DetailsPanel v-if="detailsShow" :cityID="weather.id" />
        </transition>
      </div>
      <!-- </transition-expand> -->
      <default-button @moreDetails="moreDetails" />
    </div>
</template>

<script>
import RoundButton from "../atoms/RoundButton";
import DefaultButton from "../atoms/DefaultButton";
import DetailsPanel from "./DetailsPanel";
import TransitionExpand from "./TransitionExpand";
import FavButton from "../atoms/FavButton";
// import smoothReflow from "vue-smooth-reflow";
import { convertUnixTime } from "../helpers";
export default {
  // mixins: [smoothReflow],
  name: "WeatherBox",
  components: {
    RoundButton,
    DefaultButton,
    DetailsPanel,
    FavButton,
    TransitionExpand
  },
  data() {
    return {
      buttonLabel: "Show details",
      detailsShow: false
    };
  },
  // mounted() {
  //   this.$smoothReflow([
  //     {
  //       transitionEvent: {
  //         selector: "DetailsPanel"
  //       }
  //     }
  //   ]);
  // },

  props: {
    weather: {
      type: Object
    }
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    addToWatchList() {
      const idNum = this.weather.id;
      this.$store.dispatch("addToWatchList", idNum);
    },
    moreDetails() {
      this.detailsShow = !this.detailsShow;
      if (this.detailsShow) {
        const idNum = this.weather.id;
        this.$store.dispatch("getFiveDaysForecast", idNum);
        this.$store.dispatch("getTenDaysForecast", idNum);
      }
    },
    converTime(unixTime) {
      return convertUnixTime(unixTime);
    }
  }
};
</script>
 <style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";

.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all 1s ease-in-out;
  max-height: 630px;
}
.fadeHeight-enter,
.fadeHeight-leave-to {
  opacity: 0.2;
  max-height: 0px;
}

.weather-box__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .weather-box {
    margin-top: 0.5rem;
    height: auto;
    width: 95vw;
    @extend %center-all;
    flex-direction: column;
    position: relative;
    .favBtn {
      position: absolute;
      top: 3rem;
      right: 0.1rem;
      @include custom(740px) {
        right: 20%;
      }
    }
    .round-btn {
      position: absolute;
      right: 0.5rem;
    }
    .weather__city {
      @include font-size(1.5);
      margin: 0.5rem;
    }
    .group {
      display: flex;
      justify-content: center;
      .weather__temp {
        @include font-size(3.5);
        position: relative;
        .unit {
          position: relative;
          top: -1rem;
          left: -1rem;
        }
      }
      .icon {
        width: 80px;
        height: 80px;
      }
    }
  }
  .weather-desc__wrapper {
    @extend %center-all;
    text-align: left;
    justify-content: space-between;
    width: 22rem;
  }
}
</style>
