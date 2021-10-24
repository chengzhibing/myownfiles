//代理模式
//操作代理而不是操作对象本身来实现对象本身的功能
class Game {
    constructor() { }
    play() {
        console.log("Happy playing")
    }
}
class Player {
    constructor(age) {
        this.age = age;
    }
}
class PlayProxy {
    constructor(player) {
        this.player = player; //代理
    }
    playGame() {
        if (this.player.age < 16) {
            console.log("不够16周岁，不能玩游戏")
        } else {
            new Game().play();
        }
    }
}
const player = new Player(18);
const playProxy = new PlayProxy(player);
playProxy.playGame();