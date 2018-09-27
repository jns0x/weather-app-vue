module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https:/api.openweathermap.org/data/2.5/",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
