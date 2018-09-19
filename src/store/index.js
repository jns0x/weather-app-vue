import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import axios from "axios";
import { getAddressDataAPI, metric, apiKey } from "../config";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    menuToggle: false,
    currentSearch: "",
    watchList: []
  },
  mutations: {
    setAddressData(state, payload) {
      state.currentSearch = payload.currentSearchWeather;
    },
    addToWatchList(state, payload) {
      state.watchList.push(payload.addID);
    }
  },
  actions: {
    async getAddressData({ commit }, city) {
      const payload = await axios
        .get(`${getAddressDataAPI}${city}${metric}${apiKey}`)
        .then(response => response.data);
      commit({
        type: "setAddressData",
        currentSearchWeather: payload
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
