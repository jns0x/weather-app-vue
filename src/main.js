import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./pages/Home";
import FourOhFour from "./pages/404";
import WatchingList from "./pages/WatchingList";
// import Details from "./pages/Details";
import FixedWatchList from "./pages/FixedWatchList";
import store from "./store";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    { path: "/watching", component: WatchingList },
    // { path: "/details", component: Details },
    { path: "/fixed-watch-list", component: FixedWatchList },
    { path: "*", component: FourOhFour }
    // { path: "/bar", component: Bar }
  ]
});

new Vue({
  store,
  router,
  beforeCreate() {
    this.$store.commit("initialiseStoreFromSLocaltorage");
  },
  render: h => h(App)
}).$mount("#app");
