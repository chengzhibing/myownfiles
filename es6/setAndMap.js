let set = new WeakSet();
let a = {};
set.add(a)
console.log(set.has(a))
a = null
console.log(set.has(a))
// console.log([...set][0])