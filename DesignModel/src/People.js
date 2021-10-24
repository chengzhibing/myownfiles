class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    eat() {
        console.log(`${this.getName()} are eating`);
    }
    speak() {
        console.log(`My name is ${this.name}, age ${this.age}`)
    }
}
// export default{
//    People
// }