//自己实现一个简单的commonjs
const path = require("path");
const vm = require("vm");
const fs = require("fs");


function myRequire(pathName) {
   //接收一个路径参数
   //并执行引入文件中的程序代码
   //返回值module.exports = value || exports.key = value;
   const toPath = path.resolve(__dirname, pathName) //引入模块
   const content = fs.readFileSync(toPath, "utf-8");
   const wrap = ["(function(require, m, exports){", "})"];
   const wrapContent = wrap[0] + content + wrap[1];
   const script = new vm.Script(wrapContent, { //将
       filename: "index.js"
   })
   const module = {
       exports: {

       }
   }
   const result = script.runInThisContext(); //将文件中的内容转换成可执行的程序
   result(myRequire, module, module.exports); //执行函数，就是执行之前用wrapContent生成的函数。
   return module.exports; //因为module是引用类型，所以如果形参所在的函数内改变值则外围的值也随之改变
}
global.myRequire = myRequire;