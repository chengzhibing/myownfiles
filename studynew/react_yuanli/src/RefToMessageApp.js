import React, {PureComponent, useState, useRef} from "react";
class Son extends PureComponent{
    state = {
        fatherMes: "",
        sonMes: ""
    }
    fatherSay = (fatherMes) => this.setState({fatherMes}) //子组件的方法，提供给父组件
    render() {
        const {fatherMes, sonMes} = this.state;
        return<div>
            <div>子组件</div>
            <p>父组件对我说{fatherMes}</p>
            <div>对父组件说：<input onChange={(e) => this.setState({sonMes: e.target.value})}/></div>
            <button onClick={() => this.props.toFather(sonMes)}>to father</button>
        </div>
    }
}
function Father() {
    const [sonMes, setSonMes] = useState("");
    const sonInstance = useRef(null);/*用来获取子组件实例*/
    const [fatherMes, setFatherMes] = useState("");
    const toSon = () => sonInstance.current.fatherSay(fatherMes);
    return<div>
        <div>
            <div>父组件</div>
             <p>子组件对我说：{sonMes}</p>
             <div>对子组件说：<input onChange={(e) => setFatherMes(e.target.value)}/></div>
             <button onClick={toSon}>to son</button>
             <Son ref={sonInstance} toFather = {setSonMes}/>
        </div>
        
    </div>
}
export default Father