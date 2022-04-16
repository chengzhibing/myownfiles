const initData = {
    value: 1
}
const proxy = new Proxy(initData,{
    get(target, key) {
        console.log(target[key], "-----")
        return target[key]
    },
    set(target, key, val){
        console.log(`修改了属性${key}`)
        Reflect.set(target, key, val)
    }
})

// console.log(initData.value) //这里不会触发get函数
// console.log(proxy.value) //这里会触发get函数
// initData.value = 10; //不会触发set函数
// console.log(initData.value) // 10
// console.log(proxy.value) //10 触发get函数。
// proxy.value = 20; //触发set函数
proxy.aa = 30; //触发set函数
// initData.aa = 40; //不会触发set函数
console.log(initData.aa) //触发get函数
