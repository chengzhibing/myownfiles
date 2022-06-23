function Name() {

}

const name = new Name();
console.log(Name)
console.log(name.__proto__ === Name.prototype)
console.log(Name.__proto__ === Function.prototype)
console.log(Object.prototype)
console.log(Function.__proto__)