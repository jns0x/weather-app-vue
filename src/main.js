import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./pages/Home";
import FourOhFour from "./pages/404";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    { path: "*", component: FourOhFour }
    // { path: "/bar", component: Bar }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
