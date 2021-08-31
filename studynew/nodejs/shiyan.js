// require("./common.js")
// const mm = myRequire("./index.js")
// console.log(mm)
//======
process.on("exit", () => {
    console.log("isTimmingOut")
    setTimeout(() => {
        console.log("Timeout")
    },0)
})
console.log("script start")