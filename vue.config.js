
// 判断路径，如果在生产环境下，路径在域名iview-admin文件夹下，如果是开发环境/

// eslint检查，保存时检查
// baseUrl 项目的基本路径
const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  lintOnSave: true,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    // proxy: 'http://localhost:3000'
  }
}
