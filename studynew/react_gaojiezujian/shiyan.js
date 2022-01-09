const obj = {
    name: "张"
}
function getObj(obj) {
    console.log(obj)
    obj.name = "程"
}(obj)

console.log(obj)