const net = require("net");
const host = "127.0.0.1";
const port = "9999"
const client = new net.Socket();
const serverName = `${host}:${port}`
let count = 0;
client.connect(port, host,() => {
    console.log(`成功连接到${serverName}`)
    const timer = setInterval(() => {
        if(count > 10) {
            client.write("发送数据截止");
            clearInterval(timer);
            return;
        }
        client.write(`客户端数据${count++}`)
    },1000)
})
client.on('data',(data) => {
    console.log(`${serverName}-${data}`)
    //关闭连接
    // client.destroy();
})