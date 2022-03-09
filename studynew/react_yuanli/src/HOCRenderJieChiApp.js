import React, {Component} from "react";
class Index extends Component{
   
    render() {
        return<div className="zhang">
            <ul>
                <li>react</li>
                <li>vue</li>
                <li>angular</li>
            </ul>
        </div>
    }
    
}
function HocComponent(Component) {
    return class NewComponent extends Component{
      render() {
         const element = super.render(); //获取的是Index这个组件对象（React element对象）
         console.log(element)
         const otherProps = {
             name: "alien"
         }
         const appendElement = React.createElement("li", {}, `hello,world my name is ${otherProps.name}`)
         const newChild = element.props.children.props.children.map((child, idx) => {
             if(idx === 2) return appendElement;
             return child;
         })
          return React.cloneElement(element, element.props, newChild)
      }
    }
}
export default HocComponent(Index)