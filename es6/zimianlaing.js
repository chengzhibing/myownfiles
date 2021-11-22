// const fs = require("fs");
// const path = require("path")
// const writeFile = path.resolve(__dirname, "./text.txt");
// const name ="zhang"
// const age = 10;
// function tag(iterals, ...subArr) {
//     let str = "";
//     for(let i = 0; i < subArr.length; i++) {
//       str+=iterals[i]
//       str+=subArr[i]
//     }
//     str+= iterals[iterals.length-1];
//     fs.writeFile(writeFile, str, {encoding: "utf-8"}, function(err, data) {
//       console.log(err)
//       console.log(data)
//     })
//     // return str;
// }
// tag `My name is ${name}, my age is ${age}`
//===========================================
const message = `My name is 
cheng zhi bing`
console.log(typeof message)