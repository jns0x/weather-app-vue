import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import axios from "axios";
import {
  oneDayCityDataAPI,
  metric,
  apiKey,
  forecastFiveDaysAPI,
  forecastTenDaysAPI,
  defaultHeaders,
  oneDayCitiDataAPIID,
  oneDayCitySeveralID
} from "../config";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    loading: {
      homeLoading: false,
      fivedayForecastLoading: false,
      tenDaysForecastLoading: false,
      watchListLoading: false
    },
    itemErrored: false,
    menuToggle: false,
    oneDayForecastData: "",
    fiveDaysForecastData: [],
    forecastTenDays: [],
    oneDayForecastDataSeveralID: "",
    watchList: []

    // [756135,3094802,6167865,5350937,7872915,5405228,3979770,4776222,4942618,5746545,672171,4705349,2653822,676530,3104324]
  },
  mutations: {
    initialiseStoreFromSLocaltorage(state) {
      // Check if the ID exists
      if (localStorage.getItem("watchList")) {
        // Replace the state object with the stored item
        state.watchList.push(...JSON.parse(localStorage.getItem("watchList")));
      }
    },
    itemLoading(state, payload) {
      state.loading = {
        ...state.loading,
        ...payload
      };
    },
    itemHasErrored(state, bool) {
      state.itemErrored = bool;
    },
    setOneDayForecastData(state, payload) {
      state.oneDayForecastData = payload;
    },
    fiveDaysForecastData(state, payload) {
      const payloadID = payload.city.id;
      // console.log(payloadID);
      const newItem = {
        ...payload,
        list: [...payload.list.slice(0, 9)]
      };
      // console.log(newItem);
      // console.log(
      //   state.fiveDaysForecastData.filter(e => e.city.id === payloadID).length
      // );
      if (
        state.fiveDaysForecastData.filter(e => e.city.id === payloadID).length
      ) {
        state.fiveDaysForecastData.map(e => {
          if (e.city.id === payloadID) {
            return newItem;
          } else {
            return e;
          }
        });
      } else {
        state.fiveDaysForecastData.push(newItem);
      }
    },
    setForecastTenDays(state, payload) {
      const sevenDays = {
        ...payload,
        list: [...payload.list].splice(0, 7)
      };

      const payloadID = payload.city.id;
      if (state.forecastTenDays.filter(e => e.city.id === payloadID).length) {
        state.forecastTenDays.map(e => {
          if (e.city.id === payloadID) {
            return sevenDays;
          } else {
            return e;
          }
        });
      } else {
        state.forecastTenDays.push(sevenDays);
      }
    },
    oneDayForecastDataSeveralID(state, payload) {
      state.oneDayForecastDataSeveralID = payload.list;
    },
    addToWatchList(state, payload) {
      const newCityID = payload.addID;
      if (!state.watchList.includes(newCityID)) {
        state.watchList.push(newCityID);
      } else {
        const index = state.watchList.indexOf(newCityID);
        state.watchList.splice(index, 1);
        // console.log(state.watchList);
      }
      if (state.oneDayForecastDataSeveralID.length) {
        state.oneDayForecastDataSeveralID = state.oneDayForecastDataSeveralID.filter(
          el => el.id !== newCityID
        );
      }
    },
    hideDetailsPanel(state, payload) {
      state.fiveDaysForecastData = payload;
      state.forecastTenDays = payload;
    },
    setWatchListFromLocalStorage(state, payload) {
      state.watchList.push(...payload);
    }
  },
  actions: {
    async getOneDayData({ commit }, city) {
      commit("itemHasErrored", false);
      commit("itemLoading", { homeLoading: true });
      axios({
        url: `${oneDayCityDataAPI}${city}${metric}${apiKey}`,
        baseURL: "https:/api.openweathermap.org/data/2.5"
      })
        .then(response => {
          return response;
        })
        .then(response => {
          if (response.status !== 200) {
            throw Error(response.statusText);
          }
          commit("itemLoading", { homeLoading: false });
          return response;
        })
        .then(response => {
          commit("setOneDayForecastData", response.data);
        })
        .catch(() => {
          commit("itemLoading", { homeLoading: false });
          commit("itemHasErrored", true);
        });
    },
    async getOneDayDataID({ commit }, city) {
      commit("itemHasErrored", false);
      commit("itemLoading", { homeLoading: true });
      axios({
        url: `${oneDayCitySeveralID}${city}${metric}${apiKey}`,
        baseURL: "https:/api.openweathermap.org/data/2.5"
      })
        .then(response => {
          if (response.status !== 200) {
            throw Error(response.statusText);
          }
          commit("itemLoading", { homeLoading: false });
          return response;
        })
        .then(response => {
          commit("setOneDayForecastData", response.data.list[0]);
        })
        .catch(() => {
          commit("itemLoading", { homeLoading: false });
          commit("itemHasErrored", true);
        });
    },
    async getSeveralIDData({ commit }, cityIDs) {
      commit("itemLoading", { homeLoading: true });
      commit("itemHasErrored", false);
      axios(
        `https:/api.openweathermap.org/data/2.5/${oneDayCitySeveralID}${cityIDs}${metric}${apiKey}`
      )
        .then(response => {
          if (response.status !== 200) {
            throw Error(response.statusText);
          }
          commit("itemLoading", { homeLoading: false });
          return response;
        })
        .then(response => {
          commit("oneDayForecastDataSeveralID", response.data);
        })
        .catch(() => {
          commit("itemLoading", { homeLoading: false });
          commit("itemHasErrored", true);
        });
    },
    async getFiveDaysForecast({ commit }, cityID) {
      commit("itemHasErrored", false);
      commit("itemLoading", { fivedayForecastLoading: true });
      axios
        .get(`${forecastFiveDaysAPI}${cityID}${metric}${apiKey}`)
        .then(response => {
          if (response.status !== 200) {
            throw Error(response.statusText);
          }
          commit("itemLoading", { fivedayForecastLoading: false });
          return response;
        })
        .then(response => {
          commit("fiveDaysForecastData", response.data);
        })
        .catch(() => {
          commit("itemLoading", { fivedayForecastLoading: false });
          commit("itemHasErrored", true);
        });
    },
    async getTenDaysForecast({ commit }, cityID) {
      commit("itemHasErrored", false);
      commit("itemLoading", { tenDaysForecastLoading: true });
      axios
        .get(`${forecastTenDaysAPI}${cityID}${metric}${apiKey}&cnt=10`)
        .then(response => {
          if (response.status !== 200) {
            throw Error(response.statusText);
          }
          commit("itemLoading", { tenDaysForecastLoading: false });
          return response;
        })
        .then(response => {
          const payload = response.data;
          commit("setForecastTenDays", payload);
        })
        .catch(() => {
          commit("itemLoading", { tenDaysForecastLoading: false });
          commit("itemHasErrored", true);
        });
    },
    addToWatchList(store, payload) {
      store.commit({
        type: "addToWatchList",
        addID: payload
      });
    },
    hideDetailsPanel(store) {
      store.commit("hideDetailsPanel", false);
    },
    setWatchListFromLocalStorage(store, payload) {
      store.commit("setWatchListFromLocalStorage", payload);
    }
  },
  plugins: [createLogger()]
});
