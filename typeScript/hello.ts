type Props1 = "x"|"y";
type Props2 = "a"|"b";

// type Porps = {
//     // [key in Props1]: number;
//     [y in Props2]: string
// }

type Props<T> = {
    [p in keyof T]? : T[p]
}
type Prop = {
    a: number,
    b: number,
    c: number
}
type Type3 = Props<Prop>

let obj: Type3 = {
    "a": 10,
    "b": 10,
    "c": 20
}

function getSum(obj: Type3): number{
    let sum:number = 0;
    for(let m in obj) {
        if(m) {
            sum += obj[m as keyof Type3]
        }
        
    }
    
    
    return sum; 
}

let arr = ["1", "2"]
arr.forEach(() => {})
let sum = getSum(obj)
console.log(sum)