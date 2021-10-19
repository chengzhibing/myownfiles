
// 建造者
// 拆分简单模块、独立执行 => 注重过程与搭配
// 需求：优惠套餐单元，商品 + 皮肤 进行打折售卖
class Shop {
    constructor() {
      this.gamePackage = ""
    }
    createGamePackage(name) {
        this.gamePackage = new GamePackage(name);
    }
    getGamePackage() {
        return this.gamePackage.gamePackageInit();
    }
}
class GamePackage {
    constructor(name) {
        this.product = new Product(name);
        this.skin = new Skin(name);
    }
    gamePackageInit() {
        return this.product.init() + this.skin.init();
    }
}
class Product {
    constructor(name) {
        this.name = name;
    }
    init() {
        console.log("Product init")
    }
}
class Skin {
    constructor(name) {
        this.name = name;
    }
    init() {
        console.log("Skin init")
    }
}