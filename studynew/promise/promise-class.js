const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
const resolvePromise = (promise2, x, resolve, reject) => {
    if (promise2 === x) {
        throw "返回值不能新的promise指向同一个对象"
    } else if ((typeof x === "object" && x !== null) || typeof x === "function") {
        let then = x.then; 
        let called = false;//防止调用了成功，再调用失败
        try {
            if (typeof then === "function") {
                then.call(x, y => {
                    if (called) return;  //如果调用了失败，值已经为true，再调用成功，就直接return；
                    called = true; //调用成功后赋值，
                    //resolve(y) //如果回调函数返回的是一个promise，那么生成的新的promise要根据返回的promsie的状态，来确定状态
                    //假如y又是一个promise呢，这需要递归调用resolvePromise，一直到y为普通值为主，其实就是最外层的promsie的状态由最里面的promise的状态来决定执行什么状态的操作
                    resolvePromise(promise2, y, resolve, reject)
                }, e => {
                    if (called) return;
                    called = true;
                    reject(e);
                })
            }
        } catch (e) {
            reject(e)
        }
    } else {
        console.log(promise2, "kkkkkkk")
        resolve(x)
        console.log(promise2, "mmmmm")
    }
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
    //静态方法resolve，做了两件事，一个是定义了一个实例，另外调用了resolve方法
    //参数可能是字符串，promsie，或者null
    static resolve(data) { 
        if (data == null) {
            return null
        }else if(data instanceof MyPromise || (typeof data === "object") || (typeof data === "function")) {
            let promise2 = new MyPromise((resolve, reject)=> {
                setTimeout(()=> {
                    try{
                        resolvePromise(promise2, data, resolve, reject)
                    }catch(e) {
                         reject(e)
                    }
                    
                })
            })
            return promise2;
        }else {
            resolve(defaultStatus)
        }
    }
    static reject(data) {
        return new Promise((resolve, reject) => {
            reject(data)
        })
    }
    static all(...args) {
        let arr = []
        args.forEach((param, idx, args) => {
            if(typeof param === "function" || (typeof param === "object" && param !== null)) {
                let then = param.then;
                if(typeof then === "function") {
                    then.call(param, y=> {
                    //   resolvePromise(param, y)
                    arr[idx] = y
                    },x=> {
                       throw x;
                    })
                }
            }else {
                arr[idx] = param;
            }

        })
        return arr;
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
        let fulfilledFn = this.isFunction(onFulfiled) ? onFulfiled : (value) => {
            return value;
        }
        let rejectedFn = this.isFunction(onRejected) ? onRejected : (reason) => {
            throw reason
        }
        let promise2 = new MyPromise((resolve, reject) => {
            if (this.status === PENDING) {
                this.successCallbackList.push((value) => { //切片，便于扩展
                    // setTimeout(() => {
                        try {
                            let x = fulfilledFn(value);
                            // resolve(x)
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e)
                        }
                    // }, 0)

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
    //catch的本质就是调用了then方法，并且then方法成功回调不存在的情况
    catch(rejectCallBack) {
        this.then(null, rejectCallBack)
    }
    //finally不是表示最终的意思，而是无论成功或者失败都会执行的意思
    //finally返回的是一个promise
    //如果finally回调函数返回是一个promise，他会等待这个promsie执行完毕，但是不会采用这个promise的值
    //如果返回的promise执行的失败，则会将失败的原因传到外围下一个
    finally(fn) {
        return this.then((value)=> { //这里的value对应的是外围Promise(resolve(value))
            return Promise.resolve(fn()).then(() => value); //这里定义一个promise的作用就是为了将值传出去，也为了确保生成的是一个promise
        }, (reason)=> {
            return Promise.resolve(fn()).then(() => {
                throw reason
            })
        })
    }
}
MyPromise.defer = MyPromise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    })
    return dfd;
}
MyPromise.defer = function () {
    let dfd = {}
    dfd.promise = new Promise
}
module.exports = MyPromise;