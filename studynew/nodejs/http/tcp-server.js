const net = require("net");
const host = "127.0.0.1";
const port = "9999"
// 创建⼀个TCP服务器实例，调⽤listen函数开始监听指定端⼝
// net.createServer()有⼀个参数, 是监听连接建⽴的回调
net.createServer((socket) => {
    const remoteName = `${socket.remoteAddress}:${socket.remotePort}`;
    // 建⽴成功了⼀个连接, 这个回调函数⾥返回⼀个socket对象.
    console.log(`${remoteName}连接到本服务器`)
    //接受消息
    socket.on("data", (data) => {
        console.log(`${remoteName} - ${data}`)
        //给客户端发送消息
        socket.write(`接受到了客户端发送过来的数据，${data}`)
    })
    socket.on("close", () => {
        console.log(`${remoteName}断开了连接`)
    })
}).listen(port, host)
console.log("server is running on" + `${host}:${port}`)