module.exports = {
  devServer: {
    proxy: {
      "/api.": {
        target: "https:/api.openweathermap.org/",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
