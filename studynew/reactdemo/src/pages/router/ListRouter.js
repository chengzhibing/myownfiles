import React, {Component} from "react";
import {List} from "antd"
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
class ListRouter extends Component{
  constructor(props) {
     super(props)
     console.log(props, "=====")
  }
  componentDidMount() {
    console.log("子组加盟")
  }
  render() {
     const props = this.props
     console.log(this.props)
      return (
        <List
        style={{marginTop: 20,marginLeft: 20, marginRight:20,marginBottom:20}}
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
        />
      )
  }
}
export default ListRouter;