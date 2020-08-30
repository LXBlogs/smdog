module.exports = {
  devServer: {
    port: 2234, // 端口
    open: true, // 项目启动时是否自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://192.168.199.131:3000', // 目标地址--api路径
        ws: true, //// 启用 websockets
        changeOrigin: true,
        pathRewrite: { '^/api': '/api' }
      }
    }
  }
};
