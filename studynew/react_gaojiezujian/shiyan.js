const obj = {
    name: "zhang"
}
const proxy = new Proxy(obj, {
    get(target, key, proxy) {
        console.log("获取属性值")
        return target[key];
    },
    set(target, key, value, proxy) {
       target[key] = value;
       return true;
    },
    has(target,key) {
        
    }
})
const mm = proxy.name;
proxy.age = 10;
console.log("name" in proxy)
    "name".