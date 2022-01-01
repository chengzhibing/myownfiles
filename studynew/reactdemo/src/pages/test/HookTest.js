import React, {useState, useEffect} from "react"; 
console.log(useEffect)
export default function HookTest() {
    const [count, setCount]  = useState(0);
    useEffect(() => {
        document.title=`您点击了${count}次`;
    }, [count])
    return<div>
       <p>点击了{count}次</p>
       <div onClick={() =>{setCount(count + 1)}}>点击</div>
    </div>
}

// let stateArr= [];
// let currentCusor = 0;
// let fnArr = [];
// function useState(initState) {
//   stateArr[currentCusor] = stateArr[currentCusor] || initState;
//   function setState(newState) {
//     stateArr[currentCusor] = newState;
//     fnArr.push(fn)
//   }
//   ++currentCusor;
//   //render()
//   return [];
// }
// function fn() {

// }
// function useEffect(fn, arr) {
//    if(arr.length === 0) {
//        fn()
//    }else {
//        let copyArr = copy(arr);
//        for(let i = 0; i < copyArr.length; i++) {
//            if(copyArr[i] !== stateArr[i]){
//              fn()
//              copyArr[i] =  stateArr[i];
//            }
//        }
//    }
    
// }

