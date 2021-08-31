var MyRequire = {}
var def = new Set();
var defaultOptions = {
    path: ""
}
MyRequire.config = function(options) {
    return Object.assign(defaultOptions, options)
 }
//定义一个模块，触发的时机在rj,作用：保存数据
var define = function(name, deps, factory) {
   //涉及到参数的判断省略
   def.set(name, {name, deps, factory})
}
var _import = function(url) {
    return new Promise((resolve, reject) => {
        import(url).then(resolve,reject)
    })
}
var _load = function(url) {
    return new Promise((resolve, reject) => {
        const head = document.getElementsByTagName("head")[0];
        const node = document.creatElement('script');
        node.type = "text/javascript";
        node.src= url;
        node.async = true;
        node.onload = resolve;
        node.onerror = reject;
        head.appendChild(node);
    })
}
const __getUrl = (dep) => {
    const p = location.pathname;
    return p.slice(0, p.lastIndexOf('/')) + '/' + dep + '.js';
  }
var rj = function(deps, factory) {
   //rj异步加载，所以考虑promise实现
   return new Promise((resolve, reject) => {
       Promise.all(deps.map(dep => {
            if(defaultOptions.path[dep]) {
                return _import(defaultOptions.path[dep])
            }
            return _load(__getUrl(url)).then(() => {
                const { deps, factory } = def.get(dep);
                if (deps.length === 0) return factory(null);
                return rj(deps, factory)
            })
       })).then(resolve, reject)
   }).then(instances => factory(...instances))
}


