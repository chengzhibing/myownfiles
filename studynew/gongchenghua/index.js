const obj = {
    teacher: {
        name: "zhang",
        age: 30
    },
    name: "ES6",
    leader: "黄小黄"
}
const {
    teacher,
    name: className,
    leader
}
= obj;
console.log(teacher)