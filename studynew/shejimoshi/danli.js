//单例模式
//概念：保证每个类只有一个实例，并且提供他的全局访问点
//两种方式：挂载到类上，或者采用闭包的形式
//本质上是确保将实例指向同一个内存地址
//第一种方式
function Obj() { //因为构造函数本身也是引用，所以可以挂载属性

}
Obj.getInstance = function () { //提供访问点
  if (!Obj.instance) { //将实例对象挂载到了构造函数的静态属性上
    Obj.instance = new Obj()
  }
  return Obj.instance;
}
console.log(Obj.getInstance() === Obj.getInstance())
//第二种方式
function ObjN() {

}
ObjN.getInstance = function () {
  let instance = null; //在函数作用域中创建了一个变量
  return function () { //这个函数作为访问点
    if (!instance) {
      instance = new ObjN() //将实例对象赋值给函数内部的变量
    }
    return instance;
  }
}()
console.log(ObjN.getInstance() === ObjN.getInstance())