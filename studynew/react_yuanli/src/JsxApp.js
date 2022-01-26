 import React, {Component, Fragment, useEffect} from "react"
 import ReactDOM from "react-dom"
 const toLearn = ["javascript", "typescript", "nodejs"]

const TextComponent = (props)=> {
  useEffect(() => {
    console.log(props.name, "[][][][][]")
  })
  return <div>TextComponent, {props.name}</div>
}
 class JsxApp extends Component {
   status = false;
   state = {
     name: 0
   }
   renderFoot = ()=> <div>i am foot</div>
   handleClick = () => {
     setTimeout(() => {
       console.log(this.state.name, "------")
       this.setState({name: 1})
     });
     this.setState({name: 2})
     ReactDOM.flushSync(() => {
       console.log(this.state.name, "\\\\\\\\\\")
       this.setState({name: 3})
     })
     this.setState({
       name: 4
     })
   }
   componentDidUpdate() {
     console.log(this.state.name, "=========")
   }
   /*控制渲染*/
   controlRnder = ()=> {
     const reactElement = (
       <div style={{marginTop: '100px'}} className="container">
         <div>Element DIV</div>
         <Fragment>
           <div>Element Fragment</div>
         </Fragment>
         Here is alien;
         {toLearn.map((item) => <div key={item}>{item}</div>)}
         <TextComponent {...this.state}/>
         {this.status? <TextComponent />: <div>三元运算符</div>}
         {this.renderFoot()}
         <button onClick={() => console.log(this.render())}>打印render后的内容</button>
         <button onClick={this.handleClick}>点击批量渲染（设定优先级）</button>
     <div>{this.state.name}</div>
       </div>
     )
    //  console.log(reactElement)
     const {children} = reactElement.props;
    //  console.log(children)
     /*扁平化children*/
     const flatChildren = React.Children.toArray(children);
    //  console.log(flatChildren)
     /*除去文本节点*/
     const newChildren = [];
     React.Children.forEach(flatChildren, (item) => {
       if(React.isValidElement(item)) newChildren.push(item)
     })
     /*插入新的节点*/
     const lastChildren = React.createElement('div', {className: "last"}, 'say goodbye');
     newChildren.push(lastChildren)
     /*修改容器节点*/
     const newReactElement = React.cloneElement(reactElement, {}, ...newChildren)
     return newReactElement;
   }
   render() {
     console.log(this.state.name)
    return (
      <div className="App">
       {this.controlRnder()}
       {/* <div>{this.state.name}</div> */}
      </div>
    );
   }
  
}

export default JsxApp;
