import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    menuToggle: false
  },
  mutations: {},
  actions: {},
  plugins: [createLogger()]
});
