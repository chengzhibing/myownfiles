import {useRef} from "react"
function Child2() {
    const inputRef = useRef();
    const bthOnClick = () => {
        inputRef.current.focus()
    }
    return(<div>
        <input type="text" ref={inputRef}/>
        <hr/>
        <button onClick={bthOnClick}>点击child2获取input元素的焦点</button>
    </div>)
}
export default Child2;