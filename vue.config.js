module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/style/_var.scss";@import "@/assets/style/_mixins.scss";'
      }
    }
  }
}
