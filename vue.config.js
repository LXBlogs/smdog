module.exports = {
  // baseUrl: './dist', // 配置打包路径
  devServer: {
    port: 3000, // 代理端口
    open: true, // 项目启动时是否自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://192.168.199.131:3000', // 目标地址--api路径
        ws: true, //// 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        // pathRewrite: { '^/api': 'http://192.168.199.131:3000/api' } //这里重写路径--vue端口
        pathRewrite: { '^/api': '/api' } //这里重写路径--vue端口
      }
    }
  }
};
