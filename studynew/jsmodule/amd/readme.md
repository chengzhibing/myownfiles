# AMD
代表 RequireJS
# 语法
define(id, depencies, factory)
id: 定义的模块名称
depencies:依赖的模块名，数组
factory:回调函数，参数为所依赖的模块（按照顺序排列），返回一个新的对象。

# 几个主要的方法
1. 可以直接配置依赖路径

```js
定义全局：
rj.config({ paths: {
  'jquery': 'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js'
} });
使用：
rj(['jquery'], function($) {
  // ....
})
```

# 用到的测试连接
> systemjs -> https://cdn.bootcdn.net/ajax/libs/systemjs/6.8.3/system.min.js
> lodash -> https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.min.js
