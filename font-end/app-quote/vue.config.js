module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://quote-rest-api.herokuapp.com/',
        //ws: true,
        changeOrigin: true
      }
    },
  }
}
