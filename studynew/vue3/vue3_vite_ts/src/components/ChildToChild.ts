type Bus = {
  emit: (name: string, ...args: Array<any>) => void,
  on: (name: string, callback: Function) => void
}
type ParamKey = string | number | symbol
type List = {
  [key: ParamKey]: Array<Function>
}
class BusClass implements Bus{
  list: List
  constructor() {
    this.list = {}
  }
  emit(name: string, ...args:Array<any>) {
    const fnList = this.list[name];
    fnList.forEach((fn) => {
      fn.apply(null, args)
    })
  }
  on(name: string, callback: Function){
    let fn:Array<Function> = this.list[name] || [];
    fn.push(callback);
    this.list[name] = fn;
  }
}

export default new BusClass()