
//装饰器模式
class Phone{
    create() {
        console.log("iphone18")
        return "iphone18"
    }
}
class PAD{
    cerate() {
        console.log("PAD")
        return "PAD"
    }
}
class Decorator{
    constructor(device) {
        this.device = device;
    }
    create() {
        const originalDevice = this.device.create();
        this.update(originalDevice);
    }
    update(device) {
        console.log(device + "pro")
        return device + "pro"
    }
}
const phoneInstance = new Phone();
const phoneName = phoneInstance.create();
const decorator = new Decorator(phoneInstance);
decorator.create()