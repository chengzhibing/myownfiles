import _ from "lodash"
let Vue 
//1、插件机制，将store注入到每一个vue实例中
function install(_Vue) {
  if(Vue === _Vue) {
    return console.log("Hello, 你已经注册过了");
  }
  Vue = _Vue;
  Vue.mixin({beforeCreate: vueInit})
}
function vueInit() {
  const options = this.$options;
  console.log(options)
  if(options.store) {
    this.$store = typeof options.store === "function" ? options.store() : options.store;
  }else if(options.parent && options.parent.$store) {
    this.$store = options.parent.$store;
  }
}
//2、响应式，将store中的state赋值给vue实例的data就能获取响应式的数据
class Store{
  constructor(options = {}) {
    resetStoreVM(this, options.state)
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
    //3、收集衍生数据
    this.getters = {}
    _.forEach(options.getters, (getterFn, name)=> {
      Object.defineProperties(this.getters, {
        [name]: {
          get: () => getterFn(this.state)
        }
      })
    })
    //4、定义的行为，分别对应异步和同步行为处理
    this.actions = {};
    this.mutations = {};
    _.forEach(options.mutations, (mutation, name) => {
      this.mutations[name] = (payload) => {
        //最终执行的是this._vm._data.$$state.xxx = xxx这种操作
        mutation(this.state, payload)
      }
    })
    _.forEach(options.actions, (action, name) => {
      //action专注于处理异步，这里传入this，这样就可以在异步里面通过commit触发mutation同步数据变化了
      this.actions[name] = (payload) => {
        action(this, payload)
      }
    })
    //将所有的modules注册进来
    this._modules = new ModuleCollection(options)
    //但是这些modules中的actions，mutations,getters都没有注册，所以我们原来的方法需要重写一下
    //递归注册一下就行了，这里抽离一个方法实现
    installModule(this, this.state, [], this._modules.root)
  }
  //触发mutation的固定方式是commit
  commit(type, payload) {
    console.log(this)
    this.mutations[type](payload)
  }
  //触发action的固定方式是dispatch
  dispatch(type, payload) {
    console.log(this.actions)
    this.actions[type](payload)
  }
  get state() {
    return this._vm._data.$$state
  }
}
function installModule(store, state, path, root) {
  //getters
  const getters = root._rawModule.getters;
  if(getters) {
    _.forEach(getters, (name, getterFn) => {
      Object.defineProperty(store.getters, name, {
        get: () => getterFn(root.state)
      })
    })
  }
  const mutations = root._rawModule.mutation;
  if(mutations) {
    _.forEach(mutations, (mutation, name) => {
      let _mutations = store.mutations[name] || (store.mutations[name] = [])
      _mutations.push(payload => {
        mutation(root.state, payload)
      })
      store.mutations[name] = _mutations;
    })
  }
  const actions = root._rawModule.actions;
  if(actions) {
    _.forEach(actions, (action, name) => {
      let _actions = store.actions[name] || (store.actions[name] = [])
      _actions.push(payload => {
        action(store, payload)
      })
      store.actions[name] = _actions;
    })
  }
  _.forEach(root._children, (name, childModule) => {
    installModule(this, this.state, path.concat(name), childModule)
  })
}
function resetStoreVM(store, state) {
  store._vm = new Vue({
    data: {
      $$state: state
    }
  })
}
//5、分型，拆分出多个Module
//module可以对状态进行分层，每个Module又包含自己的state, getters, mutations actions等
//包含state，_rawModule,_children属性和getChild()addChild方法。
class Module{
  constructor(rawModule) {
    this.state = rawModule || {}; //
    this._rawModule = rawModule; 
    this._children = {};
  }
  getChild(key) {
    return this._children[key]
  }
  addChild(key, module) {
    this._children[key] = module;
  }
}
//6、module-collection.js把module收集起来
//包含root属性和register方法
class ModuleCollection{
  constructor(options = {}) {
    this.register([], options) //第一层root
  }
  register(path, rawModule) {
    console.log(rawModule)
    const newModule = new Module(rawModule);
    if(path.length === 0) {
      //如果是根模块，将这个模块挂载到根实例上
      this.root = newModule;
    }else{
      console.log(path)
      const parent = path.slice(0, -1).reduce((module, key) => {
        return module.getChild(key)
      }, this.root)
      console.log(parent)
      parent.addChild(path[path.length -1], newModule)
      //如果有modules，开始递归注册一波
    }
    if(rawModule.modules) { //如果store中包含modules
      _.forEach(rawModule.modules, (rawChildModule, key) => {
        console.log(key)
        this.register(path.concat(key), rawChildModule)
      })
    }
    
  }
  
}
export default {
  install,
  Store
}
