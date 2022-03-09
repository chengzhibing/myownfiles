#!/usr/bin/env node
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");
const path = require("path")
const minimist = require("minimist");
const argv = minimist(process.argv.slice(2)) //获取输入的参数
const __commands = {} //用于存储所有的参数命令及其执行函数
const filename = "dd.config.js"

const api = {
    registeCommand: (name, impl) => { //作用就是注册命令及其执行的函数
      const command = __commands[name]
      if(!command) { //将命令及其对应得函数存储到一个对象中
          __commands[name] = impl
      }
    }
}
const readLocalConfig = () => new Promise((resolve)=> {
    const configPath = require(path.join(process.cwd(), filename)) || {} //获取用户的配置文件
    const {plugins: {commands = []} = {}} = configPath ;
    if(commands.length) {
        commands.forEach(commond => {
            commond(api) //执行插件函数
        });
    }
    resolve(__commands)
})
const runWebpack = () => { //定义运行webpack的函数，用于执行无参数的情况
    webpack(webpackConfig, (err, stats)=> {
        if(err || stats.hasErrors()) {
            return console.log("build failed")
        }
        console.log("build success")
    })
}
readLocalConfig().then((commands) => {
   const commond = argv._[0];//获取用户输入的命令
   console.log(argv)
   if(commands[commond]) {
       commands[commond]()
   }else {
       runWebpack()
   }
})