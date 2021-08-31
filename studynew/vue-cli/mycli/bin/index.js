#!/usr/bin/env node
const webpack = require("webpack");
const minimist = require("minimist");
const webpackConfig = require("../webpack.config.js");
const path = require("path");
const clinetConfigFile = "vue.config.js" //对外暴露的配置文件，命名是写死的

const args = minimist(process.argv.slice(2)) //如果执行npm run build clean 此处就返回含有clean属性的格式化后的值
const __commads = {}; //保存客户添加的命令以及命令代表的行为
const api  = { //这是暴露给客户的，客户定义插件的时候需要定义注入api
    registerCommands: (name, cb) => {
    const command = __commads[name];
    console.log(command)
     if(!command) {
        __commads[name] = cb;
     }
   }
}
const runWebpack = () => {
    webpack(webpackConfig, (err, res)=> {
        if(err || res.hasErrors()) {
          return console.log("出错了")
        }
        console.log("成功了")
    })
}

const readClientConfig = ()=> {
    return new Promise((resolve, reject) => {
      const clientConfigPathFile = require(path.resolve(process.cwd(), clinetConfigFile)) //获取客户的自定义配置文件的内容
      const {plugins: {commands} }= clientConfigPathFile;
      console.log(commands)
      if(commands.length) {
          commands.forEach((command)=> {
             command(api)
          })
      }
      resolve(__commads)
    })
}
readClientConfig().then((commands) => { //执行客户注册的插件
    console.log(args)
    const hasRegisteredCli = args["_"][0];
    if(hasRegisteredCli) {
        __commads[hasRegisteredCli]()
    }else {
        runWebpack()
    }
  
});