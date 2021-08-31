interface Person {
    name: string,
    age: number
}

type k2 = keyof Person;
const a:k2 = "age";
console.log(a)