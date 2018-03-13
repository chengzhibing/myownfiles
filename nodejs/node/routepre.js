var http=require('http');
var url=require('url');
http.createServer(function(request,response){
    //console.log(request.host)
    // console.log(request.url);
    // console.log(response);
    var pathName=url.parse(request.url).pathname;
    console.log('Request for'+pathName+'recieved');
    response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
    response.write('服务器响应文件成功');
    response.end();
    // response.writeHead(200, {"Content-Type": "text/plain"});
    // response.write("Hello World");
    // response.end();
}).listen('3000')
console.log('文件地址在127.0.0.1:3000');
