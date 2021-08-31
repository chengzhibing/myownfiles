//实现读取文件promise化
const path = require("path");
const fs = require("fs")
// function pormiseFy(fun) {
//     return function(...args) {
//        return new Promise((resolve, reject) => {
//            args.push(function(err, result) {
//                if(err) return reject(err);
//                return resolve(result)
//            })
//            fun.apply(fun, args)
//        })
//     }
// }
// const readFileAsync = pormiseFy(fs.readFile)
// readFileAsync("./index2.js", "utf-8").then(val => {
//     console.log(val)
// })

function promisefy(path, charset) {
  return new Promise((resolve, reject) => {
      fs.readFile(path, charset, (err, result) => {
          if(err) return reject(err)
          return resolve(result);
      })
  })
}
promisefy("./index2.js", "utf-8").then(val => {
    console.log(val)
})