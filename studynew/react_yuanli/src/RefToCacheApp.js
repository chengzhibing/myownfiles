import React, {useRef, useEffect} from "react";
const toLearn = [{type: 1, mes: "let us learn react"}, {type: 2, mes: "let us learn vue3.0"}]
export default function Index({id}) {
  const typeInfo = useRef(toLearn[0])
  const changeType = (info) => {
    typeInfo.current = info; //typeInfo数据的改变，不需要视图的变化
    console.log(typeInfo)
  }
  useEffect(()=> {
    console.log(typeInfo)
  }, [id]) //useEffect的使用，无需将typeInfo设置为依赖项，可以随时访问更新后的值，因为useRef始终指向一个内存空间
  return <div>
      {toLearn.map((item) => <button key={item.type} onClick={changeType.bind(null, item)}>{item.mes}</button>)}
  </div>
}