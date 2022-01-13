import React, { Component } from 'react';
import PropTypes from 'prop-types';

export function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    class Connect extends React.Component {
      static contextTypes = { // 这⾥使⽤函数式组件的话，也可以通过 useContext 来获取 cont
        store: PropTypes.object
      }
      componentDidMount() {
        //从 context 获取 store 并订阅更新
        this.context.subscribe(this.forceUpdate.bind(this));
      }
      render() {
        return (
          <WrappedComponent
            // 传⼊该组件的 props,需要由 connect 这个⾼阶组件原样传回原组件
            {...this.props}
            // 根据 mapStateToProps 把 state 挂到 this.props 上
            {...mapStateToProps(this.context.store.getState())}
            // 根据 mapDispatchToProps 把 dispatch(action) 挂到 this.props 上
            {...mapDispatchToProps(this.context.store.dispatch)}
          />
        );
      }
    }

    return Connect;
  };
}