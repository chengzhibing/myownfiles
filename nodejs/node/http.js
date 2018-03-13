'use strict'
var http=require('http');
var server=http.createServer(function(request,response){
    //回调函数接受两个参数；
    //获取请求的方法以及请求的地址
    console.log(request.method+":"+request.url);
    response.writeHead('200',{'Content-type':'text/html'})
    response.end('<div>响应成功</div>');
})
server.listen(8080);
console.log('Server is running at http//127.0.0.1:8080');