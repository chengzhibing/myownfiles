// let target = {
//     name: "zhang"
// }
// let proxy = new Proxy(target, {
//     set: function(trapTarget, key, value, receiver) {
//         if(!trapTarget.hasOwnProperty(key)) {
//             console.log(key, "原来没有的key")
//             if(typeof value != "string") {
//                 console.log("-======")
//                 throw new typeError("传入的值必须是字符串")
//             }
//         }
//         return Reflect.set(trapTarget, key, value, receiver)
//     }
// })

// proxy.name = "wang"
// console.log(proxy.name)
// console.log(target.name)
// proxy.count = 2;
// console.log("====================")
// let target = {}
// let getProxy = new Proxy(target, {
//     get: function(trapTarget, key, receiver) {
//         if(!trapTarget.hasOwnProperty(key)) {
//             throw new Error("所要获取的属性不存在")
//         }
//         return Reflect.get(trapTarget, key, receiver)
//     }
// })

// console.log(getProxy.name)
// console.log("=========================")
// let target = {
//     name: "zhang",
//     age: 10
// }
// let hasProxy = new Proxy(target, {
//     has(trapTarget, key) {
//         if(key === "name") {
//             return false;
//         }else {
//             return Reflect.has(trapTarget, key)
//         }
//     }
// })

// console.log("age" in hasProxy)
// console.log("name" in hasProxy)
// console.log("================")
// let target = {
//     name: "zhang",
//     age: "20"
// }
// let deleteProxy = new Proxy(target, {
//     deleteProperty(trapTarget, key) {
//         if("name" === key) {
//             return false;
//         }else {
//             return Reflect.deleteProperty(trapTarget, key)
//         }
//     }
// })
// console.log(delete deleteProxy.name)
// console.log("name" in deleteProxy)
// console.log(delete deleteProxy.age)
// console.log("age" in target)
// console.log("======")
// let target = {}
// let protoTypeProxy = new Proxy(target, {
//     getPrototypeOf(trapTarget) { //必须返回对象或者null
//         return null;
//     },
//     setPrototypeOf(trapTarget, proto) { //如果操作失败则返回的一定是false，对应Object.setPrototypeOf()抛错
//         return false;
//     }
// })
// console.log(Object.getPrototypeOf(target) === Object.prototype) //true
// console.log(Object.getPrototypeOf(protoTypeProxy) === Object.prototype) //false
// let proxyProto = Object.getPrototypeOf(protoTypeProxy); 
// console.log(proxyProto) //null
// console.log(Object.setPrototypeOf(target, {})) //成功
// console.log(Object.setPrototypeOf(protoTypeProxy, {})) //抛错

console.log(this)
module.exports = {
}