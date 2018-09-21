import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import axios from "axios";
import { getAddressDataAPI, metric, apiKey, foreactFiveDays } from "../config";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    loading: false,
    itemErrored: false,
    menuToggle: false,
    currentSearch: "",
    foreactFiveDays: "",
    watchList: []
  },
  mutations: {
    itemsIsLoading(state, bool) {
      state.loading = bool;
    },
    itemHasErrored(state, bool) {
      state.itemErrored = bool;
    },
    setAddressData(state, payload) {
      state.currentSearch = payload;
    },
    forecastForFiveDays(state, payload) {
      state.foreactFiveDays = payload.foreactFive;
    },
    addToWatchList(state, payload) {
      const newCityID = payload.addID;
      if (!state.watchList.includes(newCityID)) {
        state.watchList.push(newCityID);
      } else {
        const index = state.watchList.indexOf(newCityID);
        state.watchList.splice(index);
      }
    }
  },
  actions: {
    async getAddressData({ commit }, city) {
      commit("itemsIsLoading", true);
      axios
        .get(`${getAddressDataAPI}${city}${metric}${apiKey}`)
        .then(response => {
          if (response.statusText !== "OK") {
            throw Error(response.statusText);
          }
          commit("itemsIsLoading", false);
          return response;
        })
        // .then(response => console.log(response))
        .then(response => {
          commit("setAddressData", response.data);
        })
        .catch(() => {
          commit("itemsIsLoading", false);
          commit("itemHasErrored", true);
        });
    },
    async getForecast({ commit }, cityID) {
      const payload = await axios
        .get(`${foreactFiveDays}${cityID}${metric}${apiKey}`)
        .then(response => response.data);
      commit({
        type: "forecastForFiveDays",
        foreactFive: payload
      });
    },
    addToWatchList(store, payload) {
      store.commit({
        type: "addToWatchList",
        addID: payload
      });
    }
  },
  plugins: [createLogger()]
});
