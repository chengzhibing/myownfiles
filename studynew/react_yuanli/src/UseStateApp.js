import {useState} from "react"
import ReactDOM from "react-dom"
export  const UseStateApp = () =>{
    const [num,setNum] = useState(() => 0)
    const handleClick = () => {
        setNum(1)
        console.log(num)
        ReactDOM.flushSync(() => {
            setNum(2)
            console.log(num)
        })
        // setTimeout(() => {
        //     setNum(3)
        //     console.log(num)
        // })
    }
    return <div>
      <p>{num}</p>
      <button onClick={handleClick}>点击</button>
    </div>
}