
// 'use strict';
// var s="Hello";
// console.log("hello1");
// function greeting(name){
//   console.log(s+','+name+'!');
// }
// console.log('adasdsad');
// module.exports={
//   greeting:greeting
// }
const writeStream = require("fs").createWriteStream("hello.txt", {})
const spawn = require("child_process").spawn;
process.stdin.resume();
process.stdin.once("data", function(data) {
  if(data.toString().trim().toLowerCase() === "quit") {
    process.stdin.pause();
  }else {
    process.stdin.pipe(writeStream)
  }
})