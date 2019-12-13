module.exports = {
  page1: {
    entry: './src/pages/page1/index.js',    //  入口js
    template: 'index.html',                 //  模版文件 默认是public里的index.html
    filename: 'page1.html',                 //  url访问路径
    title: 'title-page1',                   //  页面标题
  },
  page2: {
    entry: './src/pages/page2/index.js',
    template: 'index.html',
    filename: 'page2.html',
    title: 'title-page2',
  },
  page2_1: {
    entry: './src/pages/page2/page2_1/index.js',
    template: 'index.html',
    path: '/page2',
    filename: 'page2/1.html',
    title: 'title-page2-1'
  }
}