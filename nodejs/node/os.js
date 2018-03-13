// var os=require('os');
// var osdir=os.tmpdir();//操作系统临时所在的文件夹；
// var osendianess=os.endianness();//返回 CPU 的字节序，可能的是 "BE" 或 "LE"。本处为LE
// var oshostname=os.hostname();//返回操作系统的主机名；
// var ostype=os.type();//返回操作系统名；windows_NT
// var osarch=os.arch();//返回操作系统的CPU架构x64
// var osre=os.release();//返回操作系统的发行版本；
// var ostime=os.uptime();//返回操作系统运行的时间，以秒为单位。也就是连续开机时间；
// var osload=os.loadavg();//返回一个包含 1、5、15 分钟平均负载的数组。
// var ostotal=os.totalmem();//返回系统内存总量，单位为字节。
// var osfreemem=os.freemem();//返回操作系统空闲内存量，单位是字节。
// var oscpus=os.cpus();//返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。
// var osnet=os.networkInterfaces();//获得网络接口列表。


var path=require('path');
var pnormal=path.normalize("http//www.baidu.com");//规范化路径
var pjion=path.join('http','//','www.baidu.com');//连接路径该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"
var presolve=path.resolve('www.baidu.com', 'buffer.js');//将后面的参数解析为绝对路径。第一个参数可以shenglue；
var isAbsolute=path.isAbsolute('/js/ineex.js');
var pr=path.relative('../js/come.js', '/js/home.js');//用于将相对路径转为绝对路径。

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// 转换为绝对路径
console.log('resolve : ' + path.resolve('main.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));