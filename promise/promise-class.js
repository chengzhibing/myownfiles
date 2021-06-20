const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
const resolvePromise = (promise2, x, resolve, reject) => {
    if(promise2 === x) {
        throw "返回值不能新的promise指向同一个对象"
    }else if((typeof x === "object" && x !== null) || typeof x === "function") {
        let then = x.then; //防止调用了成功，再调用失败
        let called = false;
        if(typeof then === "function") {
            then.call(x, y=> {
                if(called) return;  //如果调用了失败，值已经为true，再调用成功，就直接return；
                this.called = true; //调用成功后赋值，
            //resolve(y) //如果回调函数返回的是一个promise，那么生成的新的promise要根据返回的promsie的状态，来确定状态
              //假如y又是一个promise呢，这需要递归调用resolvePromise，一直到y为普通值为主，其实就是最外层的promsie的状态由最里面的promise的状态来决定执行什么状态的操作
              resolvePromise(promise2, y, resolve, reject)
            }, e=> {
                if(called) return;
                this.called = true;
                reject(e);
            })
        }
    }else {
       if(called) return;
       this.call = true;
        resolve(x)
    }
    // console.log(promise2)
}
class MyPromise {
    constructor(handler) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.successCallbackList = [];
        this.failCallbackList = [];
        try {
            handler(this.resolve.bind(this), this.reject.bind(this))
        } catch (e) {
            this.reject(e);
        }

    }
    resolve(value) {
        if (this.status === PENDING) {
            this.value = value;
            this.status = FULFILLED;
            this.successCallbackList.forEach((callback) => {
                console.log(this.value)
                callback(this.value)
            })
        }
    }
    reject(reason) {
        if (this.status === PENDING) {
            this.reason = reason;
            this.status = REJECTED;
            this.failCallbackList.forEach((callback) => {
                callback(this.reason)
            })
        }
    }
    isFunction(params) {
        return typeof params === "function";
    }
    //1.promise调用then的时候，可能当前的promise并没有成功。
    //2.发布订阅模式，如果当前的状态是pending时，我们需要将成功和失败的回调存放起来，稍后调用resolve和reject的时候，
    //重新执行

    //1.promise成功和失败的回调的返回值可以传递到外层的下一个then
    //2.如果返回值是个普通值的话（传递到下一次的 成功中），出错的情况（一定会走到下一个失败），
    //可能还有promsie的情况（会采用promsie的状态，决定走下一次的成功还是失败）
    //3.错误处理：如果离自己最近的then没有错误处理，会向下找。
    //4.每次执行完promise.then()之后返回的都是一个新的promsie

    //promise1 resolve() --> then();
    //peromise2 resolve() --> then();
    then(onFulfiled, onRejected) {
        let fulfilledFn = this.isFunction(onFulfiled) ? onFulfiled : (value) => {
            return value;
        }
        let rejectedFn = this.isFunction(onRejected) ? onRejected : (reason) => {
           throw reason
        }
        let promise2 = new MyPromise((resolve, reject) => {
            if (this.status === PENDING) {
                this.successCallbackList.push((value) => { //切片，便于扩展
                    setTimeout(() => {
                        try {
                            let x = fulfilledFn(value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)

                });
                this.failCallbackList.push((reason) => {
                    setTimeout(() => {
                        try {
                            let x = rejectedFn(reason);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                });
            } else if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = fulfilledFn(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            } else if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = rejectedFn(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
        })
        return promise2;
    }
}
module.exports = MyPromise;