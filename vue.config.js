module.exports = {
  publicPath: '/sailing-cms/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/style/_var.scss";@import "@/assets/style/_mixins.scss";'
      }
    }
  }
}
