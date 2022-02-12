import React, {forwardRef, useImperativeHandle, useRef, useState, createRef} from "react";

// 子组件
function Son (props,ref) {
    const inputRef = useRef(null)
    const [ inputValue , setInputValue ] = useState('')
    useImperativeHandle(ref,()=>{
       const handleRefs = {
           onFocus(){              /* 声明方法用于聚焦input框 */
              inputRef.current.focus()
           },
           onChangeValue(value){   /* 声明方法用于改变input的值 */
               setInputValue(value)
           }
       }
       return handleRefs
    },[])
    return <div>
        <input placeholder="请输入内容"  ref={inputRef}  value={inputValue} />
    </div>
}
const ForwardSon = forwardRef(Son)
// //父组件
function Father() {
  let curs = useRef(null);
  const handleClick = function() {
    const {onFocus, onChangeValue} = curs;
    console.log(curs)
    onFocus()//让子组件的输入获取焦点
    onChangeValue('let learn ref of function')
  }
  return<div>
      <ForwardSon ref={(cur) => (curs = cur)}></ForwardSon>
      <button onClick={handleClick}>操作子组件</button>
  </div>
}
export default Father;