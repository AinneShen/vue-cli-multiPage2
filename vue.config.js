const pages = require('./pages.config')

module.exports = {
    pages,
    configureWebpack: (config) => {
        //  生产环境下去掉console.log 
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }
    },
    lintOnSave: false,
    assetsDir: 'static',      //  打包后静态文件夹名称
    chainWebpack: config => {
        // 修复热更新
        config.resolve.symlinks(true);
    },
    devServer: {
      open: true,             //  npm run serve 自动打开浏览器
      index: '/page1.html'    //  默认启动页面
    }
}
