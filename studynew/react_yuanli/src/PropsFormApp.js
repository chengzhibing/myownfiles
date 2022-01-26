import React, { Component, useRef } from "react"


class Form extends Component {
  state = {
    formData: {}
  }
  //用于提交表单数据
  submitForm(cb) {
    cb({ ...this.state.formData })
  }
  //获取重置表单数据
  resetForm = () => {
    const { formData } = this.state;
    Object.keys(formData).forEach(item => {
      formData[item] = ""
    })
    this.setState(
      {
        formData
      }
    )
  }
  setValue = (name, value) => {
    this.setState(
      {
        formData: {
          ...this.state.formData,
          [name]: value
        }
      }
    )
  }
  render() {
    const {children} = this.props;
    const renderChildren = [];
    React.Children.forEach(children, (child) => {
      if(child.type.displayName==="formItem") {
        const {name} = child.props;
        /* 克隆`FormItem`节点，混入改变表单单元项的方法 */
        const Children = React.cloneElement(child, {
          key:name,
          handleChange:this.setValue,
          value: this.state.formData[name] || ""
        }, child.props.children)
        renderChildren.push(Children)
      }
    })
    return renderChildren
  }
}

function FormItem(props) {
  const {children, name, handleChange, value, label} = props;
  const onChange = (value) => {
    handleChange(name, value)
  }
  return <div className="form">
    <span className="label">{label}:</span>
     {
       React.isValidElement(children) && children.type.displayName === "input" ?
       React.cloneElement(children, {onChange, value}): null
     }
  </div>
}
FormItem.displayName = 'formItem'

/* Input 组件, 负责回传value值 */
function Input({ onChange , value }){
  return  <input className="input"  onChange={ (e)=>( onChange && onChange(e.target.value) ) } value={value}  />
}
/* 给Component 增加标签 */
Input.displayName = 'input';

export default () => {
  const form = useRef(null)
  const submit = () => {
    form.current.submitForm(() => {
      console.log(form.value)
    })
  }
  const reset = () => {
    form.current.resetForm()
  }
  return <div className="box">
    <Form ref={form}>
      <FormItem name="name" label="我是">
        <Input />
      </FormItem>
      <FormItem name="mes" label="我想对大家说">
        <Input />
      </FormItem>
      <Input placeholder="不需要的input" />
      <Input />
    </Form>
    <div className="btns">
      <button className="searchbtn" onClick={submit}>提交</button>
      <button className="canclebtn" onClick={reset}>重置</button>
    </div>
  </div>
}