class EventEmiter1 {
  constructor() {
      super()
      this.events = {}
  }
  emit(event, cbs) { //监听事件
    if(!cbs) {
        console.log("尚未注册该事件");
        return this;
    }
    cbs.forEach(element => {
        element.apply(this, args)
    });
  }
  //注册事件
  on(event, cb) {
    if(!this.events[events]) {
        this.events[event] = []
    }
    this.events[event].psuh(cb);
    return this;
  }
  once(event, cb) { //只绑定一次事件
    const func = function() {
      this.off(event, func)
      cb.apply(this, args)
    }
    this.on(event, func)
    return this;
  }
  off(event, cb) { //移除事件

  }
}