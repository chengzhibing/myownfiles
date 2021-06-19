const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
const resolvePromise = (promise2, x, resolve, reject) => {
    console.log(promise2)
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
            console.log("[][][][][][][][][]")
            this.reject(e);
        }

    }
    resolve(value) {
        if (this.status === PENDING) {
            this.value = value;
            this.status = FULFILLED;
            this.successCallbackList.forEach((callback) => {
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
        let fulfilledFn = this.isFunction(onFulfiled) ? onFulfiled : () => {
            //如果不是一个函数，则忽略
        }
        let rejectedFn = this.isFunction(onRejected) ? onRejected : () => {

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