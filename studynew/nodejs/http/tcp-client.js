const net = require("net")
const client = net.connect({
    port: 8000
}, function () {
    console.log("client connected")
    client.write("ke hu duan de shu ju chuan song dao fu wu qi duan");
})
client.on("data", function (data) {
    console.log(data.toString())
    client.end()
})
client.on("end", function () {
    console.log("client disconnected")
})