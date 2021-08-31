const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";
const PENDDING = "PENDDING";

class MyNewPromise {
  constructor(fn) {
    this.status = PENDDING;
    this._status = PENDDING;
    this.fulfiledFnList = [];
    this.rejectedFnList = [];
    this.value = null;
    this.reason = null;
    try { //因为this指向执行函数的时候的环境。
      fn(this.resolve.bind(this), this.reject.bind(this))
    } catch (e) { //这里不需要绑定，因为这个函数本身就是在实例内部调用的
      this.reject(e)
    }
  }
  get status() {
    return this._status;
  }
  set status(newStatus) { //当status变化的时候会调用这个函数，数据劫持
    this._status = newStatus;
    switch (newStatus) {
      case FULFILLED: { //状态为FULFILLED时
        this.fulfiledFnList.forEach((item) => {
          item()
        })
      }
      case REJECTED: { //状态为REJECTED时
        this.rejectedFnList.forEach((item) => {
          item()
        })
      }
    }
  }

  // static all(args) {
  //   return new Promise((resolve, reject) => {
  //     let j = 0;
  //     const resolvePromiseT = function(arr, argsItem, idx) { //这里需要一个递归，网上的视频缺少这个递归
  //       if((argsItem !== null && typeof argsItem === "object") || typeof argsItem ==="function") {
  //         let then = argsItem.then;
  //         if(typeof then === "function") {
  //           then.call(argsItem, (y) => {
  //             resolvePromiseT(arr, y, idx)
  //           }, (r) => {
  //             reject(r)
  //           })
  //         }
  //       }else {
  //         arr[idx] = argsItem
  //       }
  //       if(++j === args.length) {
  //         console.log(args.length, "57行")
  //         resolve(arr)
  //       }
  //     }
  //     let arr = []
  //     for(let i = 0; i < args.length; i++) {
  //       resolvePromiseT(arr, args[i], i)
  //     }
  //   })
  // }
  static all(args) {
    return new Promise((resolve, reject) => {
      let arr = [];
      let num = 0;
      const resolvePromiseT = function (arr, argsItem, idx) {
        if ((argsItem !== null && typeof argsItem === "object") || typeof argsItem === "function") { //数组元素为promise
          let then = argsItem.then;
          if(typeof then === "function") {
            then.call(argsItem, (y) => {
              resolvePromiseT(arr, y, idx)
            }, (reason) => {
              reject(reason)
            })
          }
        } else {
          arr[idx] = argsItem
        }
        if (++num === args.length) {
          resolve(arr)
        }
      }
      for (let i = 0; i < args.length; i++) {
        resolvePromiseT(arr, args[i], i)
      }
    })

  }
  static resolve(value) { //静态方法
    if (value instanceof MyNewPromise) {
      return value;
    }
    return new MyNewPromise((resolve) => {
      resolve(value)
    })
  }
  //finally不是表示最终的意思，而是无论成功或者失败都会执行的意思
  //finally返回的是一个promise
  //如果finally回调函数返回是一个promise，他会等待这个promsie执行完毕，但是不会采用这个promise的值
  //如果返回的promise执行的失败，则会将失败的原因传到外围下一个
  finally(fn) {
    return this.then((value) => {
      return MyNewPromise.resolve(fn()).then(() => value)
    }, (reason) => {
      return MyNewPromise.resolve(fn()).then(() => {
        throw reason;
      })
    })
  }

  resolve(value) {
    if (this.status === PENDDING) {
      this.value = value;
      this.status = FULFILLED;
    }

  }
  reject(reason) {
    if (this.status === PENDDING) {
      this.reason = reason;
      this.status = REJECTED;
    }
  }

  isFunction(param) {
    return typeof param === "function";
  }
  resolvePromise(newpromise, x, resolve, reject) {
    if (newpromise === x) { //then中参数的返回值和then返回的promise相等
      //这是为了防止死循环
      return reject(new TypeError("xxxxxx"))
    }
    if (x !== null && (typeof x === "object" || typeof x === "function")) {
      let then = x.then;
      let called = false;
      then.call(x, (y) => {
        if (called) return;
        //resolve(y) //如果回调函数返回的是一个promise，那么生成的新的promise要根据返回的promsie的状态，来确定状态
        //假如y又是一个promise呢，这需要递归调用resolvePromise，一直到y为普通值为主，其实就是最外层的promsie的状态由最里面的promise的状态来决定执行什么状态的操作
        this.resolvePromise(y);
      }, (r) => {
        if (called) return;
        reject(r)
      })
    } else {
      resolve(x)
    }
  }
  then(onFulfilleds, onRejecteds) {
    const promise2 = new Promise((resolve, reject) => { //返回一个promsie
      const onFulfilled = this.isFunction(onFulfilleds) ? onFulfilleds : (value) => value //参数不为函数则忽略
      const onRejected = this.isFunction(onRejecteds) ? onRejecteds : (reason) => reason
      //
      const fulFilledFnWithCatch = (newpromise, resolve, reject) => {
        queueMicrotask(() => {
          try {
            const x = onFulfilled(this.value)
            this.resolvePromise(newpromise, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
      //
      const rejectedFnWithCatch = (newpromise, resolve, reject) => {
        //要用微任务，因为同步的话，执行这个函数的时候promise2还没有创建完成
        queueMicrotask(() => {
          try {
            const x = onRejected(this.reason)
            this.resolvePromise(newpromise, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
      switch (this.status) {

        case FULFILLED: //如果为FULFILLED,立即调用onFulfilled，参数为value
          fulFilledFnWithCatch(promise2, resolve, reject)
          break;
        case REJECTED: //如果为REJECTED，立即调用onRejected，参数为reason
          rejectedFnWithCatch(promise2, resolve, reject)
          break;
        case PENDDING: //PENDDING时，将onFulfilled和onRejected保存，以便状态变为FULFILLED或者REJECTED时调用（针对异步的情况）
          this.fulfiledFnList.push((value) => { //切片
            fulFilledFnWithCatch(promise2, resolve, reject)
          })
          this.rejectedFnList.push((reason) => { //切片
            rejectedFnWithCatch(promise2, resolve, reject)
          })
      }
    })
    return promise2;
  }
  catch(reject) {
    this.then(null, reject)
  }
}
module.exports = MyNewPromise;