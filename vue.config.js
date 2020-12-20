const path = require('path')
module.exports = {
  publicPath: '/sailing-cms/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/style/_var.scss";@import "@/assets/style/_mixins.scss";'
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
      alias: {
        json: path.resolve(__dirname, 'json/'),
        mock: path.resolve(__dirname, 'mock/')
      }
    }
  }
}
