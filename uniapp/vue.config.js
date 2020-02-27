const MiniProgramPlugin = require('./scripts/MiniProgramWebpackPlugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new MiniProgramWebpackPlugin()
    ]
  },
  devServer: {
    // proxy: {
    //   '/': {
    //     target: '',
    //     changeOrigin: true,
    //   }
    // }
  }
}