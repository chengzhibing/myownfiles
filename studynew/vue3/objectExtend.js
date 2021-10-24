//Object.defineProperty会直接在对象上定义一个新的属性。
//只有对对象原型上有的属性操作才会触发get和set函数，如果对象原型不存在某个属性，则不会触发get和set函数
const initData = {
    value: 1
}
const data = {
}
Object.keys(initData).forEach((key)=> {
    Object.defineProperty(data, key, {
        get() {
            console.log("访问了", key)
            return initData[key];
        },
        set(value) {
            console.log("ppppp")
            initData[key] = value;
        }
    })
})

//以下代码会触发get函数
console.log(data.value)
//以下代码会触发set函数
data.value = 10;
//以下代码不会触发set函数
data.aa = 20;
//以下代码不会触发get函数
console.log(data.aa)