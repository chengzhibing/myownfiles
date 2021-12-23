// let uid1 = Symbol.for("uid"); //没有就直接全局注册
// let uid2 = Symbol.for("uid"); //存在就直接读取
// let obj = {[uid1]: "12345"}
// console.log(obj[uid2]) //”12345”
// console.log(Object.is(uid2, uid1)) //true

//=============
// let uid = Symbol.for("uid")
// let desc = String(uid)
// console.log(desc + "hello")
//====================
// let symbol = Symbol.for("first name")
// console.log(Symbol.keyFor(symbol))
// console.log(symbol)
//=================
// let obj = {
//     "0": "hello",
//     "1": "world",
//     length:2,
//     [Symbol.isConcatSpreadable]: true //如果为true表示对象有length属性和数字键，其数值型属性值应该被独立添加到concat()调用的结果中。
// }
// let message = ["hi"].concat(obj)
// console.log(message)

