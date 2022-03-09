function  Name() {
    
}

const name = new Name();
console.log(Name)
console.log(name.__proto__  === Name.prototype)
console.log(Name.__proto__ === Object.prototype) 
console.log(Object.prototype)