'use strict'
var fs = require('fs');
var path = require('path');
//定义全局的vue为了服务端的app.js
global.Vue = require("vue");
var layout = fs.readFileSync("./index.html",'utf-8')
//创建一个渲染器
var renderer = require("vue-server-renderer").createRenderer();
//创建一个express服务器
var express = require("express")
var server = express()
//部署静态文件夹为assets文件夹
server.use("/assets", express.static(path.resolve(__dirname, 'assets')))
//处理所有的get请求
server.get("*", function(request, response) {
    //渲染我们的vue为一个字符串
    renderer.renderToString(require("./assets/app")(), function(error, html) {
        //如果渲染时发生了错误
        if(error) {
            //打印错误到控制台
            console.log(error)
            return response.status(500).send("Server error")
        }
        console.log(html)
        //发送布局和html文件
        response.send(layout.replace(`<div id="app"></div>`, html))
    })
})
server.listen(5000, function(error) {
    if(error) throw error;
    console.log('Server is running at localhost:5000')
})