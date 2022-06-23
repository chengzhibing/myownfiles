### 创建一个可以允许客户增加配置的 cli。

#### 注意新的版本 cli 文件夹不能含有大写字母

- 1.mydemo 中初始化项目 yarn init
- 2.mycli 中初始化项目 yarn init
- 3.mydemo 中添加 scripts: {"build": "mycli"}
- 4.mycli 中添加 bin: "./bin/index.js",
- 5.mycli 目录下新建 bin/index.js,
  index.js 中代码如下

```js
#!/usr/bin/env node
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
webpack(webpackConfig, (err, res) => {
  if (err || res.hasErrors()) {
    return console.log('出错了');
  }
  console.log('成功了');
});
```

- 6.mycli 目录下，npm link
- 7.mydemo 目录下，npm link mycli
- 8.mycli 目录下新建 webpack.config.js,添加基本配置

```js
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
  },
};
```

- 9.mydemo 下执行 npm run build

- 10.能正常跑成功以后完善从客户拿到的 demo 入手
  创建 vue.config.js 以及 plugins/clean.js（执行注册插件的方法是在黑盒中定义好的）
  黑盒中我们需要做的是读取 vue.config.js 中的程序，然后执行
- 11.完善黑盒中 bin/index.js 代码
