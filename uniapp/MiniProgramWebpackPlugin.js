class MiniProgramWebpackPlugin {
  constructor() {
    this.PLATFORMS = [
      'app-plus',
      'h5',
      'mp-weixin',
      'mp-qq',
      'mp-alipay',
      'mp-baidu',
      'mp-toutiao',
    ]
    this.UNI_PLATFORM = process.env.UNI_PLATFORM || process.env.VUE_APP_PLATFORM
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync('MiniProgramPlugin', this.setEmitHook.bind(this))
  }

  setEmitHook(compilation, callback) {
    const assets = compilation.assets

    this.renameCustomTabbar(assets)
    this.deleteMpScssDeep(assets)

    callback()
  }

  renameCustomTabbar(assets) {
    Object.keys(assets).forEach(file => {
      // app.json pages custom-tab-bar/index 去掉 不能作为一个page使用 是自定义tabber组件
      if (/^app\.json/.test(file)) {
        let content = assets[file].source()
        content = content.replace(/\"custom-tab\/index\",/, '')
        assets[file] = {
          source() {
            return content
          },
          size() {
            return content.length
          }
        }
      }
      // if (/^custom-tab-bar-copy/.test(file)) {
      //   if (this.UNI_PLATFORM === 'mp-weixin') {
      //     const _file = file.replace('-copy', '')
      //     const content = assets[file].source()
      //     assets[_file] = {
      //       source(){
      //         return content
      //       },
      //       size(){
      //         return content.length
      //       }
      //     }
      //   }
      //   delete assets[file]
      // }
    })
  }

  deleteMpScssDeep(assets) {
    if (this.UNI_PLATFORM === 'mp-weixin') {
      //
    }
  }
}

module.exports = MiniProgramWebpackPlugin
