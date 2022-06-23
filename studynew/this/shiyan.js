// function createStack() {
//     const arr = [];
//     return{
//         pushArr: function(item) {
//             arr.push(item)
//             return arr;
//         }
//     }
// }
//=====================
// const obj = createStack()
// const arr = obj.pushArr("8")
// console.log(arr)
// function fn() {
//     const ArraySlice = Array.prototype.slice;
//     const aggs = ArraySlice.call(arguments, 1);
//     console.log(aggs)
// }
// fn(2, 3, 4, 5)
//==================
const events = require("events")
const util = require("util")
const EventEmitter = events.EventEmitter;
const emmiter = new events.EventEmitter()
// events.once("", fn)
function add() {
    console.log("ppppppp")
}
// EventEmitter.prototype.once = function (event, fn) {
//     // const _this = this;
//     const ff = function () {
//         this.removeListener(event, ff)
//         fn.apply(this, arguments)
//     }
//     this.on(event, ff)
// }
// EventEmitter.prototype.once = function (type, listener) {
//     if (!util.isFunction(listener))
//         throw TypeError('listener must be a function');

//     function g() {
//         this.removeListener(type, g);
//         listener.apply(this, arguments);
//     }
//     g.listener = listener;
//     this.on(type, g);
//     //return this;
// };
emmiter.once("hel", add)
emmiter.once("hel", add)
emmiter.emit("hel")