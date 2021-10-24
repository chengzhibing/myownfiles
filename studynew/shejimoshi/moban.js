//模板模式
//在模板中，定义好的每个方法的执行步骤，方法本身只关注自己的事情
//玩游戏的步骤
class Device{
    constructor() {

    }
    powerOn() {
        console.log("打开电源")
    }
    login() {
        console.log("登录")
    }
    clickIcon() {
        console.log("点击按钮")
    }
    enterGame() {
        console.log("进入战场")
    }
    play() { //方法的集合
      this.powerOn()
      this.login();
      this.clickIcon()
      this.enterGame();
    }
}