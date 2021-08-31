const fs = require("fs");
async function async1() {
     console.log("aysnc1 start"); //2
     await async2();
    //  new Promise((resolve) => {
    //    console.log("aysnc2")
    //  }).then(() => {
    //      console.log("async1 end")
    //  })
     console.log("async1 end") //8
}
async function async2() {
    console.log("async2") //3
}

console.log("script start") //1
fs.readFile("../common.js", () => {
    console.log("readFile") //13
})
setTimeout(() => {
    console.log("setTimeout0"); //10
    setTimeout(() => {
        console.log("setTimeout1") //12
    },0)
    setImmediate(() => {
        console.log("setImmediate") //11
    })
},0)

process.nextTick(() => {
    console.log("nextTick") //7
})

async1();
new Promise((resolve) => {
  console.log("promise1") //4
  resolve()
  console.log("promise2") //5
}).then(() => {
    console.log("promise3") //9
})
console.log("script end") //6