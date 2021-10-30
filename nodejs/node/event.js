// //引进事件对象
// var events=require('events');
// // 创建 eventEmitter 对象
// var eventEmitter=new events.EventEmitter();
// //创建事件处理程序。
// var connectHander=function connect(){
//     console.log('连接成功');
//     //触发data_recieved事件
//     eventEmitter.emit('data_received');
// }
// //绑定connection事件处理程序
// eventEmitter.on('connection',connectHander);
// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received', function(){
//     console.log('数据接收成功。');
//  });
//  // 触发 connection 事件 
// eventEmitter.emit('connection');

// console.log("程序执行完毕。");




// //引进events对象
// var events=require('events');
// var eventEmitter=new events.EventEmitter();
// //监听器
// var listener1=function listener1(){
//     console.log('监听器listener1执行')
// }
// var listener2=function listener2(){
//     console.log('监听器listener2执行');
// }
// //绑定connection事件
// eventEmitter.addListener('connection',listener1);
// eventEmitter.addListener('connection',listener2);
// var eventLiseners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventLiseners+'个监听器监听连接事件。');
// //处理connection事件；
// eventEmitter.emit('connection');
// //移除绑定的listener事件
// eventEmitter.removeListener('connection',listener1);
// console.log('listener1 不再监听');
// //触发连接事件
// eventEmitter.emit('connection');
// eventLiseners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventLiseners+'个监听器监听连接事件。')
// console.log('程序执行完毕。');

var EventEmitter = require("events").EventEmitter
var util = require("util")

class MyClass {
    constructor() {
        this.num = 0;
        this.tick()
    }
    tick() {
        var timer = setInterval(() => {
            this.num++;
            this.emit("connect")
            if (this.num > 10) {
                console.log(this.num)
                clearInterval(timer)
                // return;
            }
        }, 100)
        
    }
}
util.inherits(MyClass, EventEmitter)

const myClass = new MyClass();
myClass.on("connect", function() {
    console.log("输出注册的事件")
})

