const MyPromise = require("./promise-class");
const fs = require("fs");
let promise = new MyPromise((resolve, reject) => {
    let num = 2;
    // resolve(2)
    // 异步方法无法通过try catch捕获异常
    fs.readFile("./promise.txt", "utf-8", (err,val) => {
        // if(err) reject(err);
        // // resolve(val.toString());
        resolve(2);
    })
})
// let promise = new MyPromise((resolve, reject) => {
//     let num = 2;
//     resolve(num);
// })
//1.promise调用then的时候，可能当前的promsie并没有成功。
//2.发布订阅模式，如果当前的状态是pending时，我们需要将成功和失败的回调存放起来，稍后调用resolve和reject的时候，
//重新执行
let promise2 = promise.then((value) => {
    return new Promise((resolve, reject)=> {
        resolve(new Promise((resolve, reject)=> {
            resolve(40000)
        }));
    })
}, (err)=> {
    console.log(err)
})
//1.promise成功和失败的回调的返回值可以传递到外层的下一个then
//2.如果返回值是个普通值的话（传递到下一次的 成功中），出错的情况（一定会走到下一个失败），
//可能还有promsie的情况（会采用promsie的状态，决定走下一次的成功还是失败）
//3.错误处理：如果离自己最近的then没有错误处理，会向下找。
//4.每次执行完promise.then()之后返回的都是一个新的promsie
.then(function(value) {
    console.log(value, "成功2");
}, function(reason) {
    console.log(reason, "失败2");
})
