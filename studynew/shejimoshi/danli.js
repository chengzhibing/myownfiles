//全局只有一个实例
class PlayStation{
    constructor() {
      this.state = "off";
    }
    play() {
        if(this.state === "on") {
            console.log("I'am playing happliy!")
            return;
        }
        this.state = "on";
        console.log("开启happy模式")
    }
    shutdown() {
        if(this.state === "off") {
            console.log("I'am having a rest")
            return;
        }
        this.state = "off";
        console.log("要休息一会儿了");
    }
}
//定义的模块的主文件main.js
PlayStation.instance = undefined;
PlayStation.getInstance = function(){
  return function() {
    if(!PlayStation.instance) {
        PlayStation.instance = new PlayStation();
    }
    return PlayStation.instance;
  }()
}
//引入定义模块的文件
const playStation =  PlayStation.getInstance();
playStation.play();
const playStation2 = PlayStation.getInstance();
playStation2.shutdown();