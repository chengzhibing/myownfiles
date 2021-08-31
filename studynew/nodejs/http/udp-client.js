const dgram = require('dgram');
const message = Buffer.alloc(500, "这个是客户端要发送给服务端的数据")
const client = dgram.createSocket("udp4");
client.send(message, 0, message.length, 44444, "127.0.0.1", (err, bytes) => {
    console.log(`发送成功${bytes}字节`)
    //client.close() //关闭连接
})
client.on("message",(buffer) => {
    console.log(buffer.toString())
})