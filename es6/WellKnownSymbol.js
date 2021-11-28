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

let hasLengthOf10 = {
    [Symbol.match]: function(val) {
        return val.length === 10 ? [val] : null;
    },
    [Symbol.replace]: function (val, replacement) {
        return val.length === 10 ? replacement : value;
    }
}