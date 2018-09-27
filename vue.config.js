module.exports = {
  devServer: {
    proxy: {
      "/weather-app-vue-vuex.netlify.com": {
        target: "https:/api.openweathermap.org/",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
