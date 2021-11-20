//socket.io采用版本1.4.0
//1、当客户端连接服务器端时，服务器端发送login事件
//2、客户端收到该事件，就会向用户提示用户名，并通过login事件向服务器端发送用户名
//3、服务器对login事件进行处理，将用户名和套接字关联起来以备后用。并发射服务器端的serverMessage事件
//4、客户端监听到服务器端的serverMessage事件，并将服务器端发送的数据添加到dom中
//5、客户端输入数据，发送客户端事件clientMessage事件
//6、服务器端监听客户端的clientMessage的事件，并将数据返回客户端，以及其他的客户端
const httpServer = require("http").createServer(handler);
const io = require("socket.io").listen(httpServer); //websocket服务器连接到http服务器中，并监听请求。
const fs = require("fs");
let username = null;
httpServer.listen(4040);

function handler(req, res) {
  fs.readFile(__dirname + "/index.html", function(err, data) {
    if(err) {
        res.writeHead(500);
        return res.end("Error loading index.html");
    }
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end(data)
  })
}

io.sockets.on("connection", function(socket) { //只要有客户端连接到服务器上，就会触发connection事件。
    socket.on("clientMessage", function(content) { //监听客户端发射的事件，名称自定义
        socket.emit("serverMessage", "You said: " + content); //服务器发射事件，并将客户端发送的消息返还给客户端
        socket.broadcast.emit("serverMessage", socket.id + " said: " + content) //服务器将客户端发送的消息广播给其他已连接到服务器上的客户端
    })
    socket.on("login", function(username) {
        username = username;
        socket.emit('serverMessage', 'Currently logged in as ' + username);
        socket.broadcast.emit("serverMessage", 'User ' + username + ' logged in');
    })
    socket.on("disconnect", function() {
        socket.broadcast.emit("serverMessage", "User " + username + " disconnected");
    })
    socket.emit("login") //客户端连接时，服务器端发射login事件
})
console.log("Server is running on localhost:4040")