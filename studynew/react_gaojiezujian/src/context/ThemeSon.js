import { useContext, useState, useEffect } from "react";
import {ThemeContext} from "../App"
export default function ThemeSon() {
    const {themes, setThemes}= useContext(ThemeContext)
    console.log(themes)
    useEffect(() => {
        console.log("孙子组件的useEffect")
        console.log("孙子组件的theme", themes)
    })
    const obj = {
        dark: {
            foreground: "#111111",
            background: "#000000"
        }
    }
return<div><button onClick={()=> (setThemes((pre) => {console.log(pre) 
    return {...pre, ...obj}}))}>点击孙子组件</button><p>{themes.background}</p></div>
}