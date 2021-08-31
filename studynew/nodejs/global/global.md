### 全局对象
* 1.浏览器中指的是window对象，node中指的是global
global = {
    Buffer,
    process,
    console,
    setImmediate,
    setTimeout,
    setInterval,
    clearInterval,
    clearTimeout
}
* exit事件
当程序退出时触发
```JS
process.on("exit", () => {
    console.log("isTimmingOut") // 2
    setTimeout(() => {
        console.log("Timeout") //这里的程序不会执行。因为程序已经退出
    },0)
})
console.log("script start") //1
```
#### 事件循环模型
* 1.定义：事件循环是nodejs可以通过将操作转定义到系统内核中来执行非阻塞的 I/O，（尽管js是单线程的），由于大多数现代内核是多线程的，因此他们可以处理在后台执行的多个操作。当着些操作之一完成是，内核会告诉nodejs以便可以将适当的回调添加到轮询队列中以最终执行。
nodejs启动时，他将初始化事件循环，处理提供的输入脚本，这些脚本可能会执行异步api,调度计时器或调用process.nextTick,然后开始处理事件循环。

 timers
    |
    nextTickQueue
    |
pendding callbacks
    |
    nextTickQueue
    |
idle, prepare
    |
    nextTickQueue
    |
   poll ------------------|incomming:
    |                     |connections
    nextTickQueue         |data,etc
    |
  check
    |
    nextTickQueue
    |
close callbacks

#### 说明：
** 每个阶段都拥有一个要执行的回调FIFO队列，尽管每个阶段都有其自己的特殊方式，但是通常，当时间循环进入给定的阶段时，他将执行该阶段的特定的任何操作，然后在该阶段的队列中执行回调，知道队列好近或着执行回调的最大数量为止。当队列以为空或者达到回到限制时，事件循环将移动到下一个阶段，依次类推。
1. timers: setTimeout,setInterval的回调
2. pendding callbacks:推迟到下一个循环迭代的I/O回调
3. idle, prepare: 系统内部使用
4. poll:执行与I/O相关的回调，除了timers, close, callback, setImmediate,其他的回到都在这里执行。
5. checkz: setImmediate的回调。
6. close callbacks: 一些关闭的回调 socket.on("close", () => {})

#### setImmediate 和 setTimeout的区别
* 1.在主模块中，二者的执行顺序是不固定的。
原因：在主代码部分执行setTimeout设置定时器，setImmediate写入check对列，
第一阶段是timers,timers可能为空，也可能存在回调
* 2.在同一个I/O回调中，二者的顺序是固定的，如fs.readFile，setImmediate在前。
