const dgram = require('dgram');
const server = dgram.createSocket("udp4");
server.on("message",(msg,remote) => {
    console.log(`${remote.address}:${remote.port}`)
    console.log(msg.toString())
    server.send(`收到`,remote.port, remote.address)
})
server.on("listening", ()=> {
    const address = server.address();
    console.log(`Server is running on ${address.address}: ${address.port}`)
})
server.bind(44444)