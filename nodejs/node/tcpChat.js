// //创建一个基于TCP的聊天服务器
// //第一步： 实力化服务器，记录重要事件，绑定端口
// var net = require("net");
// var server = net.createServer();
// server.on('error', function(err) {
//   console.log("Server error:", err.message)
// })
// server.on("close",function() {
//     console.log("Server closed");
// })
// server.listen(4001)
// //第二步，需要接收新的客户端连接
// var net = require("net")
// var server = net.createServer();
// server.on("connection", function(socket) { //第二步增加
//     console.log("got a new connection")
// })
// server.on("error", function(error) { 
//     console.log("Server error:", error.message) 
// })
// server.on("close", function() {
//     console.log('Server closed')
// })
// server.listen(4001)
// //第三步，从连接中读取数据
// var net = require("net")
// var server = net.createServer();
// server.on("connection", function(socket) {
//     socket.on("data", function(data) { //第三步增加
//         console.log('got data:', data)
//     })
// })
// server.on("error", function(error) { 
//     console.log("Server error:", error.message) 
// })
// server.on("close", function() {
//     console.log('Server closed')
// })
// server.listen(4001)

// //第四步：聚合所有的客户端
// //创建了一个聊天服务器，在其中需要向所有的客户端广播用户数据，所以第一步是将所有的连接存入某个位置
// var net = require("net")
// var server = net.createServer();
// var sockets = []; //第四步增加
// server.on("connection", function(socket) {
//     sockets.push(socket); //第四步增加
//     socket.on("data", function(data) {
//         console.log('got data:', data)
//     })
// })
// server.on("error", function(error) { 
//     console.log("Server error:", error.message) 
// })
// server.on("close", function() {
//     console.log('Server closed')
// })
// server.listen(4001)

// //第五步：广播数据
// //当一个已连接的用户输入数据，就应该将改数据广播给所有其他已连接的用户
// var net = require("net")
// var server = net.createServer();
// var sockets = [];
// server.on("connection", function(socket) {
//     sockets.push(socket);
//     socket.on("data", function(data) {
//         console.log('got data:', data)
//         sockets.forEach(function(otherSocket){ //第五步新增
//           if(otherSocket !== socket) {
//             otherSocket.write(data)
//           }
//         })
//     })
// })
// server.on("error", function(error) { 
//     console.log("Server error:", error.message) 
// })
// server.on("close", function() {
//     console.log('Server closed')
// })
// server.listen(4001)

//第六步：广播删除被关闭的连接
var net = require("net")
var server = net.createServer();
var sockets = [];
server.on("connection", function(socket) {
    sockets.push(socket);
    socket.on("data", function(data) {
        console.log('got data:', data.toString())
        sockets.forEach(function(otherSocket){
          if(otherSocket !== socket) {
            otherSocket.write(data);
          }
        })
    })
    socket.on("close", function() {
        console.log("connect closed")
        var index = sockets.indexOf(socket);
        sockets.splice(index, 1)
    })
})
server.on("error", function(error) { 
    console.log("Server error:", error.message) 
})
server.on("close", function() {
    console.log('Server closed')
})
server.listen(4001)
console.log("Server is running at 4001")