// function createStack() {
//     const arr = [];
//     return{
//         pushArr: function(item) {
//             arr.push(item)
//             return arr;
//         }
//     }
// }
//=====================
// const obj = createStack()
// const arr = obj.pushArr("8")
// console.log(arr)
// function fn() {
//     const ArraySlice = Array.prototype.slice;
//     const aggs = ArraySlice.call(arguments, 1);
//     console.log(aggs)
// }
// fn(2, 3, 4, 5)
//==================

function fn() {
    return {
        b: () => {
            console.log(this)
        }
    }
}
//fn().b()
//fn().b.bind(1)()
fn.bind(2)().b.bind(3)()
