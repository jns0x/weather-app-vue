import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import axios from "axios";
import { getAddressDataAPI, metric } from "../config";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    menuToggle: false
  },
  mutations: {},
  actions: {
    async getAddressData({ commit }, city) {
      const payload = await axios
        .get(`getAddressDataAPI${city}${metric}`)
        .then(data => console.log(data));
    }
  },
  plugins: [createLogger()]
});
