const net = require("net")
const server = net.createServer(function (socket) {
    socket.on("data", function () {
        socket.write("server data to telnet client")
        console.log("hello 已连接")
    })
    socket.on("end", function () {
        socket.write("服务器写写入数据完毕")
    })
    socket.write("fu wu qi de shuju")
})
server.listen(8000, function () {
    console.log("server is running on 127.0.0.1:8000")
})
// server.close(function () {
//     console.log("连接已经关闭")
// })