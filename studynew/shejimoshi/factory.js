//隐藏创建过程，暴露共同接口
class Shop {
    createGame(name) {
        return new CarJoy(name)
    }
}
class CarJoy {
    constructor(name) {
        this.name = name;
    }
    init() {
        console.log("init")
    }
    run() {
        console.log("run")
    }

}
const shop = new Shop();
const carJoy = shop.createGame();
carJoy.init();
