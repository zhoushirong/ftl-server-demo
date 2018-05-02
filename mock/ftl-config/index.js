
let resolve = require('./utils').resolve;
let getFilePathsFromDir = require('./utils').getFilePathsFromDir;
let getJsonFromDir = require('./utils').getJsonFromDir;
let getWatchFilesDir = require('./utils').getWatchFilesDir;

// 配置文件
let config  = {
  port: 2000, // 服务端口号
  publicDir: './', // 静态文件目录
  ftlFileDir: './src/page', // 配置freemarker模板目录
  watchFileDirs: ['./mock/'], // 需要监听文件变化的文件夹目录，可以是多个目录
  ftlDataFileDir: './mock/ftlData', // ftl文件的数据目录
  ajaxDataFileDir: './mock/ajaxData', // ajax数据文件目录
  proxyDataFileDir: './mock/proxyData', // 代理文件目录
  globalData: {                         // 所有的ftl共享的数据，因为这种文件数据不会很多，所有不单独用一个文件夹存放了
    globalParam: 'i am global data'
  }
}

// ftl config 中的相对路径是相对于执行此配置时候的目录的位置
let ftlConfig = {
  public: config.publicDir,
  port: config.port,
  hot: true,
  watch: getWatchFilesDir(config.watchFileDirs),
  remoteDebug: {
    browser: 'chrome'
  },
  ftl: {
    base: config.ftlFileDir,
    dataFiles: getFilePathsFromDir(config.ftlDataFileDir),
    global: config.globalData
  },
  mock: getFilePathsFromDir(config.ajaxDataFileDir),
  proxy: getJsonFromDir(config.proxyDataFileDir)
};

module.exports = ftlConfig
