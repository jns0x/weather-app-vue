import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import axios from "axios";
import { getAddressDataAPI, metric, apiKey } from "../config";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    menuToggle: false,
    currentSearch: ""
  },
  mutations: {
    setAddressData(state, payload) {
      state.currentSearch = payload.currentSearchWeather;
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
    }
  },
  plugins: [createLogger()]
});
