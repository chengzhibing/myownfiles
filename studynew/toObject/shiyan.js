function Obj() {


}

Obj.getInstance = function () {
  console.log(this)
  let instance = null;
  return function () {
    console.log(this)
    if (!instance) {
      instance = new Obj()
    }
    return instance;
  }
}()
console.log(Obj.getInstance() === Obj.getInstance())