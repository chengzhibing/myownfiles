// function *createIterator() {
//     let first = 10;
//     let second = yield first + 1;
//     let third = yield second;
//     yield third;
// }
// const iterator = createIterator();
// console.log(iterator.next())
// console.log(iterator.next(4))
// console.log(iterator.next(5))
//=====================
// function *createIterator() {
//     yield 1;
//     yield 10;
//     yield 20;
// }
// const iterator = createIterator();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
//=============================
// function *createNumberIterator() {
//     yield 2;
// }
// function *createStringIterator() {
//     yield "String";
// }
// function *createCombineIterator() {
//     yield *createNumberIterator();
//     yield *createStringIterator();
//     yield "end";
// }
// const iterator = createCombineIterator();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
//=--=========================
function run(runIterator) {
   let iterator = runIterator();
   let result = iterator.next();
   function step() {
       if(!result.done) {
           iterator.next(result.value);
           step();
       }
    }
   step();
}
run(function *() {
    let first = yield 10;
    console.log(first)
    let second = yield first + 20;
    console.log(second)
})