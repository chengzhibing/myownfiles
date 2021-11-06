var fs=require('fs');
// var data='';
// //创建可读流
// var readAbleStream=fs.createReadStream('writein.html');
// // //设置编码为utf-8;
// // readAbleStream.setEncoding('UTF-8');
// //处理流事件
// readAbleStream.on('data',function(chunk){
//     console.log(chunk)
//     data+=chunk;
// })
// readAbleStream.on('end',function(){
//     // console.log(data);
// })
// readAbleStream.on('error',function(err){
//     console.log(err.stack);
// })
// console.log('程序执行完毕');


//写入流
// var fs=require('fs');
// var data='写入流的文件为；；；；；；';
// var writeAbleStream=fs.createWriteStream('writein.html');
// //使用utf-8编码写入数据；
// writeAbleStream.write(data,'UTF8');
// //标记文件末尾
// writeAbleStream.end();
// //处理流事件
// writeAbleStream.on('finish',function(){
//     console.log('写入流完成');
// })
// //错误执行程序
// writeAbleStream.on('error',function(err){
//     console.log(err.stack);
// })




//管道
//接下来我们就是用管道和链式来压缩和解压文件。
// var zlib=require('zlib');
// //压缩writein文件到writein.html.zlb
// fs.createReadStream('writein.html')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('writein.html.gz'))
// console.log('文件压缩完成');



//解压文件
// var zlib=require('zlib');
// fs.createReadStream('writein.html.gz')
// .pipe(zlib.createGunzip())
// .pipe(fs.createWriteStream('writein.html'))
// console.log('文件解压缩完成');

//解决慢客户端问题
// require("http").createServer(function(req, res) {
//     var rs = fs.createReadStream("writein.html");
//         rs.setEncoding("utf-8");
//         rs.on("data", function(chunk) { //发送数据的时候触发
//             if(!res.write(chunk)) { //如果write命令无法将可读流传入核缓冲区中，
//               rs.pause(); //暂停可读流
//             }
//             res.on("drain", function() { //当可写流完成数据接收时
//                 rs.resume(); //恢复可读流
//             })
//             rs.on("end",function(){
//                 res.end();
//             })
//         })
// }).listen(9999)

//使用管道避免慢客户端问题。
// require("http").createServer(function(req, res) {
//   var rs = fs.createReadStream("./index.html")
//   //end()函数会在可读流结束时，在可写流上面被调用，为避免这种情况，我们可以手动配置。
//   rs.pipe(res, {end: false}) //pipe()是可读流的一部分，由传输源调用--并接收目标可写流作为其第一个参数。
//   rs.on('end', function() {
//       res.write("hello, number")
//     res.end();
//   })
// }).listen(9999)

//tel net
var server = require("net").createServer();
var port = 4001;
server.on("listening", function() { //当服务器在指定的端口和地址监听时，触发。
})
server.on("connection", function(socket) { //当有新的连接创建时触发。
  console.log("create a new connection");
  socket.end();
  socket.close()
})
server.on("close", function() {//当服务器关闭时，即不再绑定到那个端口
  console.log("Server is now closed")
})
server.on("error", function() {//当在服务器层面出现错误时。
  console.log("Error occued:" + err.message)
})
server.listen(4000)

