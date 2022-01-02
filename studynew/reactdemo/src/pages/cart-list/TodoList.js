import React, {Component, Fragment} from "react";
import "./TodoList.css"
import TodoListItem from "./TodoLisItem"
export default class TodoList extends Component{
  constructor(props) {
    super(props)
    this.state = {
        inputValue: "",
        list: []
    }
    this.inputChange = this.inputChange.bind(this); //将this设置为组件类
    this.inputKeyUp = this.inputKeyUp.bind(this);
    this.listItemClick = this.listItemClick.bind(this);
  }
  getListItems() {//将循环渲染的逻辑单独放置到方法中
      return this.state.list.map((item) => { //dangerouslySetInnerHTML必须是最底层标签，传递给子组件的方法名，实际为父组件的listItemClick的方法。
      return <TodoListItem key={item.id} item={item} deleteItem = {this.listItemClick}/>
    })
  }
  inputChange(e) { //e.target.value，对应客户输入的值
    this.setState({
        inputValue:e.target.value
    })
  }
  inputKeyUp(e) { //键盘抬起的时候
      let count = this.state.list.length; 
      let list = [...this.state.list, {name: this.state.inputValue, id: count}]
      if(e.keyCode === 13) { //enter键的keyCode
        this.state.inputValue &&
        this.setState({
            list
        }, ()=> {
          this.setState({
            inputValue: ""
          })
        })
        
      }
  }
  listItemClick(e) {
    console.log(e)
    const textContent = e.target.textContent;
    const list = [...this.state.list]
    this.setState({
      list: list.filter((item) => item.name !== textContent)
    })
  }
  render() {
      return (<Fragment>
         {/* 使用htmlFor, className */}
          <label htmlFor="inputNode">请输入内容：</label> 
          <input id="inputNode" value={this.state.inputValue} onChange={this.inputChange} onKeyUp = {this.inputKeyUp} className="input_node"/>
          <ul>
              {this.getListItems()}
          </ul>
      </Fragment>)
  }
}   