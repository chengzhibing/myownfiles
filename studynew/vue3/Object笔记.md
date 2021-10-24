### vue3简介
**** 基于代理对象来实现。
```js
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

```
```js
//解决以上问题的方法
//使用代理对象
//使用代理对象，采用ob.key = val；的形式对原始对象进行赋值，不会触发代理对象的set函数，但是会为代理对象添加新的属性。
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
proxy.value = 20; //触发set函数
// proxy.aa = 30; //触发set函数
initData.aa = 40; //不会触发set函数
console.log(proxy.aa) //触发get函数
```
 