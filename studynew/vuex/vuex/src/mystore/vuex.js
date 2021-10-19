let Vue
const forEach = (obj, callback) => { 
  Object.keys(obj).forEach((keys, idx) => {
    callback(keys, obj[keys])
  })
}
class ModuleCollection { //格式化数据
  constructor(options) {
    this.register([], options)
  }
  register(path, rootModule) {
    let newModule = {
      _raw: rootModule,
      children: {},
      state: rootModule.state
    }
    if(path.length === 0) {
      this.root = newModule;
    }else {
      let parent = path.slice(0, -1).reduce((root, currentItem) => {
        console.log(root.children[currentItem], "====")
        return root.children[currentItem]
      }, this.root)
      
      parent.children[path[path.length-1]] = newModule
    }
    
    if(rootModule.modules) {
      Object.keys(rootModule.modules).forEach((item) => {
        console.log(item)
        this.register(path.concat(item), rootModule.modules[item])
        console.log(path.concat(item))
      })
    }
  }
}
const installModules = (store, state,path = [], rootModule)=> {
  //{age:10, a: {name: zhang, c: {helo}, b: {}}}
  if(path.length > 0) {
    const parent = path.slice(0, -1).reduce((state, currentItem) => {
      return state[currentItem]
    }, state)
    Vue.set(parent, path[path.length -1], rootModule.state);
  }
  let getters = rootModule._raw.getters;
  if(getters) {
    forEach(getters, (getterKey, getterValue) => {
      Object.defineProperty(store.getters, getterKey, {
        get: () => {
          return getterValue(rootModule.state)
        }
      })
    })
  }
  let mutations = rootModule._raw.mutations;
  if(mutations) { //addName: [fn, fn]
    forEach(mutations, (mutationKey, mutationValue) => {
      let arr = store.mutations[mutationKey] || (store.mutations[mutationKey] = [])
      arr.push((payload)=> {
        mutationValue(rootModule.state, payload)
      })
    })
  }
  let actions = rootModule._raw.actions;
  if(actions) { //addName: [fn, fn]
    forEach(actions, (actionKey, actionValue) => {
      let arr = store.actions[actionKey] || (store.actions[actionKey] = [])
      arr.push((payload)=> {
        actionValue(store, payload)
      })
    })
  }
  forEach(rootModule.children, (childrenKey, childrenVal)=> {
    installModules(store,state,path.concat(childrenKey), childrenVal)
  })
}
/* eslint no-underscore-dangle: 0 */
class Store {
  constructor(options) {
    //这样写如果中途更改值，视图不会更新。做法将state挂载到vue实例的data上
    // this._state = options.state 
    this._vm = new Vue({ //什么时候用到了newVue
      data: { //把对象变成了可以监控的对象
        state: options.state
      }
    })
    //==========
    // const getters = options.getters || {};
    this.getters = {};
    // getters用法 {getters:getAge(state) => {
    //   return state.age + 10;
    // }}
    //this.$state.getters.getAge
    //this.getters的值为客户传入的函数调用之后返回的值，并且参数为state
    // Object.keys(getters).forEach((gettersName) => {
    //   Object.defineProperty(this.getters, gettersName, {
    //     get: () => getters[gettersName](this.state)
    //     // value: getters[gettersName](this.state)
    //   })
    // })
    //=========
    // const mutations = options.mutations || {};
    this.mutations = {};
    // Object.keys(mutations).forEach((mutationsName) => {
    //   this.mutations[mutationsName] = (payload) => { //this.mutations[name] 为一个函数
    //     mutations[mutationsName](this.state, payload) //执行用户传入的函数
    //   }
    // })
    this.commit = (type, payload) => {
      console.log(this.mutations)
      this.mutations[type].forEach((fn) => {
        fn(payload)
      })
    }
    //=========
    // const actions = options.actions || {};
    this.actions = {};
    // Object.keys(actions).forEach((actionsName) => {
    //   this.actions[actionsName] = (payload) => {
    //     actions[actionsName](this, payload)
    //   }
    // })
    this.dispatch = (actionType, payload) => {
      this.actions[actionType].forEach((fn) => {
         fn(payload)
      }) 
      //this.actions[actionType](payload)
    }
    this.modules = new ModuleCollection(options)
    console.log(this.modules)
    installModules(this,this.state,[],this.modules.root)
  }

  get state() { // 调用store.state的时候默认执行这个方法,
    return this._vm.state
  }
}
// vue的组件渲染，先渲染父组件，在渲染子组件，子组件渲染完毕，父组件渲染完毕
const install = (_Vue) => { // 这个方法会被Vue.use()默认调用
  // 给每个组件注册一个this.$store的属性
  Vue = _Vue
  Vue.mixin({ // 这个方法可以为每一个组件都混合点东西
    beforeCreate() { // 这个方法不会覆盖掉每个组件中的beforeCreate方法，会合并
      // 首先判断是子组件还是父组件，如果是子组件需要把父组件的store增加给子组件,并赋值给$store
      // 父组件的话直接将store 赋值给$stote
      if (this.$options && this.$options.store) { // 父组件
        this.$store = this.$options.store
      } else {
        this.$store = this.$parent && this.$parent.$store
      }
    }

  })
}

export default {
  install,
  Store
}
