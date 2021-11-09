var net = require("net");
var port = 4001;
var host = "0.0.0.0"
var socketConnection;
var quiting = false;

var retryInterval = 3000; //3秒
var retriedTimes = 0;
var maxRetries = 10;

//process.stdin流来接受用户的键盘输入，这个可读流初始化时处于暂停状态。，只有在恢复它之后可会发射data事件
process.stdin.resume();

process.stdin.on("data", function (data) {
    if (data.toString().trim().toLowerCase() === "quit") {
        quiting = true;
        console.log("quiting...")
        socketConnection.end();
        process.stdin.pause(); //同时结束了标准输入流。
    } else {
        socketConnection.write(data);
    }
})


var connectionListener = function (conn) {
    console.log("We have a new connection")
}


    (function connect() {
        function reconnect() {
            if (retriedTimes >= maxRetries) {
                throw new Error("Max retries have been exceeded, I give up")
            }
            retriedTimes += 1;
            setTimeout(connect, retryInterval);
        }

        //第二个参数host可以省略，如果省略的话则默认为localhost
        //返回值为net.Socket的一个实例。表示与服务器的连接，既是一个可读流也是一个可写流
        socketConnection = net.createConnection(port, host, connectionListener);

        socketConnection.once("connect", function () {
            //监听socketConnection发射的connect事件
            retriedTimes = 0; //一旦连接成功，就重置为0；
            console.log('connect to server')

        })
        socketConnection.on("error", function (err) { //错误事件
            console.log("Error in connection:", err.message)
        })
        socketConnection.on("close", function () { //连接关闭之后重新连接
            if( !quiting) {
                console.log("connection got closed, will  try to reconnect")
                reconnect();
            }
            
        })
        // process.stdin.pipe(socketConnection) //将进程的输入（用户输入的数据传输到服务器）删除的原因是当用户输入quit的时候向服务器发送数据
        socketConnection.pipe(process.stdout); //将服务器发送的数据在进程中打印出来
        
    }())

//写入的数据可以是字符串（可以为其指定编码格式），也可以是未经处理的缓冲区
// socketConnection.write("here is a string for you", function () {
//     //回调函数不会在服务器接收数据时被调用，而是会在数据被写入网络时调用
//     console.log("data was written out")
// })
// //当数据可用时，连接都会发射data事件，可以通过监听该事件接收来自服务器的数据
// socketConnection.on("data", function () {
//     console.log("some data has arrived:", data)
// })
//如果没有指定流的编码格式，传入的数据就是一个缓冲区，如果想要这个缓冲区在发送之前被编码，
//就需要使用setEncoding为其指定编码格式
//可使用end方法关闭来自终端（服务器端）的连接
// socketConnection.end("Bye bye!", "utf-8")
//注意：终止连接之后，依然可以接收data事件



