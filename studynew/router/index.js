const http = require("http")
const fs = require("fs")
const toFile = fs.readFileSync("./history.html")
const hostname = "127.0.0.1"
const port = 9000
http.createServer((req, res) => {
   res.writeHead(200, {
       "Content-Type": "text/html",
       "Content-Length": Buffer.byteLength(toFile)
   })
   res.end(toFile.toString())
}).listen(port, hostname, () => {
    console.log(`服务器运行在http://${hostname}:${port}`)
})