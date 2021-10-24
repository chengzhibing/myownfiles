//智能家居一键开启游戏
class MediaCenter {
    constructor() {
        this.state = "";
        this.observer = [];
    }
    attach(observer) { //每实例化一个观察者，就往observer中存储一个观察者对象，当设置值的时候依次调用存储的对象的更新函数
        this.observer.push(observer);
    }
    getState() {
        return this.setState;
    }
    setState(state) {
        this.state = state; //状态更新的时候，数据实现更新
        this.modifyAllObserver();
    }
    modifyAllObserver() {
        this.observer.forEach(ob => {
            ob.update()
        })
    }
}
class Observer {
    constructor(name, mediaCnter) {
        this.name = name;
        this.mediaCnter = mediaCnter;
        this.mediaCnter.attach(this) 
    }
    update() {
        console.log("状态更新")
    }
}


const mediaCnter = new MediaCenter();
const observer1 = new Observer("ps", mediaCnter);
const observer2 = new Observer("tv", mediaCnter)
