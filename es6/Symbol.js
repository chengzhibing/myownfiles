// let uid1 = Symbol.for("uid"); //没有就直接全局注册
// let uid2 = Symbol.for("uid"); //存在就直接读取
// let obj = {[uid1]: "12345"}
// console.log(obj[uid2]) //”12345”
// console.log(Object.is(uid2, uid1)) //true

//=============
let uid = Symbol.for("uid")
let desc = String(uid)
console.log(desc + "hello")
