// const Readable = require("stream").Readable;
// class ToReadable extends Readable{
//     constructor(iterator) {
//      super()
//      this.iterator = iterator;
//     }
//     _read() {
//       const res = this.iterator.next();
//       if(res.done) {
//          return this.push(null)
//       }
//       this.push(`${res.value}`)
//     }
// }
// const iterator = function(limit) {
//     return {
//         next: function() {
//             if(limit--) {
//                 return {
//                     value: limit + Math.random(),
//                     done: false
//                 }
//             }
//             return {
//                 done: true,
//                 value: 0
//             }
            
//         }
//     }
// }(10)

// const readable = new ToReadable(iterator);
// readable.on("data", (data)=> {
//     process.stdout.write(data.toString() + "\n");
// })
// readable.on("end", () => {
//     console.log("DONE");
// })
//===============================
// const Writeable = require("stream").Writable;
// const writeable = Writeable()
// writeable._write= function(data, enc, next) {
//    process.stdout.write(data)
//    next()
// }
// writeable.write("a" + "\n")
// writeable.write("b" + "\n")
// writeable.write("c" + "\n")
// writeable.write("d" + "\n")
// writeable.end();
//=================================
const Duplex = require("stream").Duplex;
const duplex = Duplex();
duplex._read = function() {
  this.limitNum = this.limitNum || 0;
  if(this.limitNum > 10) {
      return this.push(null)
  }
  this.push(`${this.limitNum++}`)
}
duplex._write = function(data, enc, next) {
   console.log(data);
   next();
}
duplex.on("data", (data)=> {
    console.log(data.toString() + "\n")
})
duplex.on("end",() => {
    console.log("hello")
})
duplex.write("a" + "\n");
duplex.write("b" + "\n");
duplex.end();