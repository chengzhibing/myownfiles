const MyNewPromise = require("./promise-new");
// const MyNewPromise = Promise
// myNewPromise = new MyNewPromise((resolve, reject) => {
//     setTimeout(() => {
//         reject("pppppp") 
//     }, 0)
// }).catch((value) => {
//    console.log(value)
//    console.log(myNewPromise)
// })

MyNewPromise.all(["1", new Promise((resolve, reject) => {
    resolve("ppp")
}), "3"]).then((val) => {
    console.log(val)
})
