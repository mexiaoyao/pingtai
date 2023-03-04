var path = require('path')
var webpack = require('webpack')
// 压缩
const CompressionPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
function resolve (dir) {
    return path.join(__dirname, dir)
}
//const API_FIEX = process.env.VUE_APP_API_FIEX;
//console.log("API_FIEX", API_FIEX);
module.exports = {
  chainWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
          config.plugin('compressionPlugin')
              .use(new CompressionPlugin({
                  filename: '[path].gz[query]',
                  algorithm: 'gzip', // 使用gzip压缩
                  test: productionGzipExtensions, // 匹配文件名
                  threshold: 10240, // 对超过10k的数据压缩
                  minRatio: 0.8, // 压缩率小于0.8才会压缩
                  deleteOriginalAssets: true // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
              }));
      }
  },
  configureWebpack: {
    performance:{
      maxEntrypointSize: 500000000,
      maxAssetSize: 30000000
    }
  },
  devServer: {
    port: 8585,
    // 是否在浏览器打开
    open: false,
    // proxy: {
    //   "/api": {
    //     target: API_FIEX,
    //     // 获取cookie
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
};
