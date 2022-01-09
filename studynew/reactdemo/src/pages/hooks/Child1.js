import { useState, useRef, useEffect } from "react";

function Child1() {
    const [count, setCount] = useState(0);
    const preCountRef = useRef(0);
    const preCount = preCountRef.current;
    useEffect(() => {
        preCountRef.current = count;
    })
    
    return(
        <div>
            <h1>Current:{count},pre: {preCount}</h1>
            <button onClick={() => {setCount((c) => c+1)}}>Child1点击</button>
        </div>
    )
}
export default Child1;