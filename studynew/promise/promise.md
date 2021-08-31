# 宏任务和微任务
 1、js单线程指的是js引擎线程
    浏览器中js有引擎线程和渲染线程
    node环境中只有js引擎线程
2、执行栈
  是一个存储函数调用的栈结构，遵循先进后出的原则。
  function foo() {
    throw new Error('error')
  }
  function bar() {
    foo()
  }
  bar()
  执行上面的函数，在控制台中我们可以看到先执行的函数bar（）会在far后面弹出信息
3、Event Loop中，每一次循环称为tick，每一次tick的任务如下：

执行一个宏任务（栈中没有就从事件队列中获取）
执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）
4、宏任务包含：
script(整体代码)
setTimeout
setInterval
I/O
UI交互事件
postMessage
MessageChannel
setImmediate(Node.js 环境)
5、微任务包含
Promise.then
Object.observe
MutaionObserver
process.nextTick(Node.js 环境)
# promise
一、三种状态及流转关系
1、pendding: 
在resolve和reject之前，可以改变。
pendding --> fulfilled
pedding --> rejected
2、fulfiled
不可以再改变
resolve之后改为fulfiled
必须有一个value
3、rejected
不可以再改变
reject之后变为rejected
必须有一个reason

# then（参数，调用，和返回值）
1、参数
两个参数onFulfiled,onRejected
这两个参数必须是函数，如果不是函数的话，应该被忽略
2、onFulfiled,
   当状态为fulfiled的时候执行
   参数为value
   只能被执行一次
3、onRejected 
   状态为rejected的时候调用
   参数为reason
   只能被调用一次
4、onFulfiled和onReject在微任务阶段执行（如何产生微任务呢？）
5、then可以被调用多次。
6、then返回值是一个新的promise，实现链式调用。
7、关于then中的参数的规范
  7.1如果参数正常执行(返回x值，能正常的返回值，字符串，对象，数值,null，undefined),调用resolvePrimise()
  7.2如果函数执行异常，则promise2应该被reject
  7.3如果onFulfilled不是函数，promise2应该以promise1的value,触发fulfiled;也就是将上一个promise中的value传递
  7.4如果onRejected不是函数，promise2应该以promise1的reason,触发fulfiled;也就是将上一个promise中的reason传递
  8、关于resolvePromise(promise2, x, resolve, reject) //这里的resolve，reject是外层的
  8.1如果x === promise reject typeError;
  8.2如果x是promise
      x的状态为pendding,则promsie的状态也必须在pendding状态，直到x的状态改变
      x的状态为fulfilled,将x中的value，resolve()
      x的状态为rejected,将x中的reason中的，reject()
  8.3如果x是object对象或者function
     获取x.then方法，获取的时候报错了，直接reject,
     then是一个函数的话，then.call(x,resolve, reason)

//1.promise调用then的时候，可能当前的promsie并没有成功。
//2.发布订阅模式，如果当前的状态是pending时，我们需要将成功和失败的回调存放起来，稍后调用resolve和reject的时候，
//重新执行





//1.promise成功和失败的回调的返回值可以传递到外层的下一个then
//2.如果返回值是个普通值的话（传递到下一次的 成功中），出错的情况（一定会走到下一个失败），
//可能还有promsie的情况（会采用promsie的状态，决定走下一次的成功还是失败）
//3.错误处理：如果离自己最近的then没有错误处理，会向下找。
//4.每次执行完promise.then()之后返回的都是一个新的promsie