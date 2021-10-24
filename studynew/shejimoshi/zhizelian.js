//链式调用，职责独立，顺序执行。
//已婚男性打游戏，需要几关
class Action {
    constructor(name) {
        this.name = name;
        this.nextAction = null;
    }
    setNextAction(action) {
        this.nextAction = action;
    }
    handle() {
        console.log(`${this.name} 请审批，是否可以打游戏。`)
        if(this.nextAction !== null) {
            this.nextAction.handle(); //注意此处为链式调用的重点代码
        }
    }
}
const dad = new Action("爸");
const mom = new Action("妈");
const wife = new Action("夫人");

dad.setNextAction(mom)
mom.setNextAction(wife)

dad.handle();