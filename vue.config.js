module.exports = {
  devServer: {
    proxy: {
      "/api.openweathermap.org/": {
        target: "https:/api.openweathermap.org/",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
