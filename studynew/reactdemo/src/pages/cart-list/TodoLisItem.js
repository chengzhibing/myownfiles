import React, {Component, Fragment} from "react";
class TodoListItem extends Component{
    constructor(props) {
        super(props)
        this.listItemClick = this.listItemClick.bind(this);
    }
    listItemClick(e) { //此组件的方法，注意需要将子组件的方法的作用域设定为子组件类
      console.log(this)
      this.props.deleteItem(e) //调用父组件的方法
    }
    render() {
        return(
            <li onClick={this.listItemClick} dangerouslySetInnerHTML={{__html: this.props.item.name}}></li>
        )
    }
}
export default TodoListItem;