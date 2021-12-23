const person = {
    getGreeting() {
        return "Hello"
    }
}
const child = {
    getGreeting() {
        console.log("son")
        return super.getGreeting() + "  {}";
        // return "Hello"
    }
}
const son = {
    getGreeting() {
        return super.getGreeting() + " ooooo";
    }
}
Object.setPrototypeOf(child, person)
Object.setPrototypeOf(son, child)
console.log(son.getGreeting())
// console.log("======")
// const receiver = {}
// const supplier = {
//     get name() {
//         return "name"
//     }
// }
// const assignObj = Object.assign(receiver, supplier)
// // console.log(assignObj)
// let des = Object.getOwnPropertyDescriptor(receiver, "name");
// console.log(des.get)