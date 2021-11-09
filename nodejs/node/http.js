'use strict'
var fs = require("fs");
var rs = fs.createReadStream("./writein.html");
var http=require('http');
var server=http.createServer(function(req,res){
    //req对象如下
    // {
    //     url: "/name", //192.169.1.1:90/name
    //     method: "GET", //POST,HEAD,DELETE,GET
    //     headers: {} //http请求头，里面的key为小写
    // }
    //res对象
    //1、修改或者新增响应头
    //res.setHeader(name, value)//在没有用res.write()或者res.end()的时候才有效。
    //2、删除响应头
    // res.removeHeader(name)
    res.writeHead('200',{'Content-type':'text/html'})
    rs.pipe(res)
    // res.end();//结束响应之前向参数传入响应
})
server.listen(8080);
console.log('Server is running at http//127.0.0.1:8080');