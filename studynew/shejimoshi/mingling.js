//命令模式
//不同对象之间划分责任和算法的抽象化
//接收者
class Recevier{
    constructor() {

    }
    executer() {
        console.log("角色开始奔跑")
    }
}
class Operator{
    constructor(command) {
this.command = command;
    }
    run() {
        console.log("操作者下达命令")
        this.command.execute()
    }
}

class Command {
    constructor(recevier) {
this.recevier = recevier;
    }
    execute() {
        console.log("接收到命令")
        this.recevier.executer();
    }
}
const recevier = new Recevier()
const command = new Command(recevier);
const operator = new Operator(command)
operator.run();