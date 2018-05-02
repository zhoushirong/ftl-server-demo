# ftl-server-demo

### ftl-server使用demo

公司项目前后端分离方案用的是java的freemarker，对于非后端开发人员来说，java的环境还是很不好搭的。
为了摆脱对后端的依赖想了很多办法。其中一个就是本地mock。

如果是普通的html文件倒是很好办，随便本地打开或者一个node-server都可以，但是如果是.ftl文件的，而且有很多数据是需要直出的，这时候就比较复杂了。

好在，前人已经为我们踩了不少坑了，其中一个就是ftl-server。

此项目demo就是本人读过ftl-server项目源码之后做的一个小demo

目的一是为了更好的理解ftl-server，另一个是为了整一个脚手架，为了更方便的使用ftl-server。

### 依赖项
[ftl-server](https://github.com/szmtcjm/ftl-server)

### 分别支持三种ftl数据MOCK
```shell
-- mock/ftl-config/index.js # mock数据存放配置文件，简化配置项后面列出
-- mock/ftlData/ # mock数据存放，ftl直出数据
-- mock/ajaxData/ # mock数据存放，ajax接口数据
-- mock/proxyData/ # mock数据存放，代理接口数据
```

##### ftl-config/index.js数据配置文件举例
```javascript
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
```

### dev-server
```shell
yarn install || npm install 
npm run ftl
```
http://localhost:2000/

