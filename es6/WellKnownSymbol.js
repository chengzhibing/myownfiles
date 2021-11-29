// function MyObject() {

// }
// Object.defineProperty(MyObject, Symbol.hasInstance, {
//     value: function(v) {
//       return Object.is(typeof v, "number") && v >0 && v < 100;
//     }
// })

// console.log(2 instanceof MyObject)
// console.log(MyObject[Symbol.hasInstance](2))

// let obj = {
//     "0": "hello",
//     "1": "world",
//     length:2,
//     [Symbol.isConcatSpreadable]: true
// }
// let message = ["hi"].concat(obj)
// console.log(message)
// //实际上等于/^.{10}$/
// let hasLengthOf10 = {
//     [Symbol.match]: function(val) {
//         return val.length === 10 ? [val] : null;
//     },
//     [Symbol.replace]: function (val, replacement) {
//         return val.length === 10 ? replacement : val;
//     },
//     [Symbol.search]: function(val) {
//         return val.length === 10 ? 0 : -1;
//     },
//     [Symbol.split]: function(val) {
//         return val.length === 10 ? [, ] : [val]
//     }
// }
// let message1 = "Hello world";
// let message2 = "Hello John";
// console.log(message1.match(hasLengthOf10)) //null
// console.log(message2.match(hasLengthOf10)) //["Hello John"]
// console.log(message1.replace(hasLengthOf10)) //Hello world
// console.log(message2.replace(hasLengthOf10, message1)) //Hello world
// console.log(message1.search(hasLengthOf10))  //-1
// console.log(message2.search(hasLengthOf10))  //0
// console.log(message1.split(hasLengthOf10)) //["Hello world"]
// console.log(message2.split(hasLengthOf10)) //["", ""]
//=======================================================
// function Temperature(degrees) {
//     this.degrees = degrees;
// }
// Temperature.prototype[Symbol.toPrimitive] = function(val) {
//     switch(val) { //String(freezing)时触发
//         case "string":
//             return this.degrees + "\u00b0"; //degrees symbol;
//         case "number": // /触发
//             return this.degrees;
//         case "default": // + 触发
//             return this.degrees + "degrees"
//     }
// }
// const freezing = new Temperature(30);
// console.log(freezing + "!") //30 degrees
// console.log(freezing / 2); //15
// console.log(String(freezing)) //30▫
//=====================================
function Person(name) {
    this.name = name;
}
Person.prototype[Symbol.toStringTag] = "Person";
var me = new Person("Nichols");
console.log(me.toString()) //"[object Person]"
console.log(Object.prototype.toString.call(me)) //"[object Person]"