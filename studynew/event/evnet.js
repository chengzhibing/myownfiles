class BomEvent {
    constructor(element) {
        this.element = element;
    }
    addEvent(eventType, handler) {
        if (this.element.addEventListener) {
            this.element.addEventListener(eventType, handler, false)
        } else if (this.element.attachEvent) {
            this.element.attachEvent("on" + eventType, handler)
        } else {
            this.element["on" + eventType] = handler;
        }
    }
    removeEvent(eventType, handler) {
        if (this.element.removeEventListener) {
            this.element.removeEventListener(eventType, handle, false)
        } else if (this.element.detachEvent) {
            this.element.detachEvent("on" + eventType, handler)
        } else {
            this.element["on" + eventType] = null;
        }
    }
}
function stopPropagation(e) {
  if(e.stopPropagation) {
      e.stopPropagation()
  }else {
      e.cancleBuble = true;
  }
}
function preventDefault(e) {
    if(e.preventDefault) {
        e.preventDefault()
    }else {
        e.returnValue = false;
    }
}