<template>
  <div class="weather-box__wrapper">

    <div class="weather-box">
      <fav-button class="favBtn" :cityID="weather.id" />
      <!-- <round-button class="round-btn" @addToWatchList="addToWatchList" /> -->
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
      <!-- <default-button @moreDetails="moreDetails" :label="'Add to watchlist'" /> -->

      <!-- <div style="overflow: hidden;"> -->
      <!-- <transition name="slide-fade"> -->
      <transition-expand>
        <DetailsPanel v-if="detailsShow" :cityID="weather.id" />
      </transition-expand>
      <default-button @moreDetails="moreDetails" :label="buttonLabelControl" />
      <!-- </transition> -->

      <!-- </div> -->

    </div>
</template>

<script>
import RoundButton from "../atoms/RoundButton";
import DefaultButton from "../atoms/DefaultButton";
import DetailsPanel from "./DetailsPanel";
import FavButton from "../atoms/FavButton";
import TransitionExpand from "./TransitionExpand";
import { convertUnixTime } from "../helpers";
export default {
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

  props: {
    weather: {
      type: Object
    }
  },
  computed: {
    buttonLabelControl() {
      if (this.detailsShow) {
        return "Hide details";
      } else {
        return "Show details";
      }
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

//#####transitions
.slide-fade-enter-active {
  transition: all 0.5s ease-in-out;
}
.slide-fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-100%);
}

//#####
.weather-box__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .weather-box {
    margin-top: 0.5rem;
    // border: 1px solid white;
    // width: 100%;
    height: auto;
    width: 95vw;
    @extend %center-all;
    flex-direction: column;
    position: relative;

    .favBtn {
      position: absolute;
      top: 3rem;
      // right: 2rem;
      right: 0.1rem;
      @include custom(740px) {
        // right: calc(740px -3rem);
        // position: relative;
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
