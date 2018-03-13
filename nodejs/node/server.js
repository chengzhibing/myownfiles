var http=require('http');
var url=require('url');
function start(router){
    function onRequest(request,response){
        var pathName=url.parse(request.url).pathname;
        console.log('Request for'+pathName+'recieved!');
        router(pathName);
        response.writeHead(200,{'Content-type':'text/plain;charset=utf-8'});
        response.write('连接服务器成功');
        response.end();
    }
    http.createServer(onRequest).listen('3000');
    console.log('Server has started.');
}
//start();
exports.start=start;