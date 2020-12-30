const path = require('path')
module.exports = {
  publicPath: '/sailing-cms/',
  devServer: {
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.devServer.proxy({
      '/api': {
        target: 'http://47.104.188.251',
        changeOrigin: true
      }
    })
  },
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
        mock: path.resolve(__dirname, 'mock/'),
        request: path.resolve(__dirname, 'request/')
      }
    }
  }
}
