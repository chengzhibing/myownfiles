//适配器模式
//优化的结构的实现方式
//适配独立模块，保证模块间的独立解耦且连接兼容。
//例如用国标插座兼容港行
class HKDevice{
    constructor() {

    }
    getPlug() {
        return "港行货"
    }
}
class Dalu{
    constructor() {
        this.plug = new HKDevice();
    }
    getPlug() {
        return this.plugin + "国标"
    }
}
const dalu = new Dalu();
dalu.getPlug();