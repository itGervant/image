const { defineConfig } = require('@vue/cli-service')

module.exports = {
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/image/'
    : '/'
}

