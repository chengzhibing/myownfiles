 var util=require('util');
//util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数。
// function Base(){
//     this.name='zhangsan';
//     this.base=199991;
//     this.sayHello=function(){
//         console.log('Hello'+this.name);
//     }
// }
// Base.prototype.showName=function(){
//      console.log(this.name);
// }
// function Sub(){
//     this.name='lisi';
// }
// util.inherits(Sub,Base);
// var base=new Base();
// base.sayHello();
// base.showName();
// var sub=new Sub();
// sub.showName();
// //sub.sayHello();
// console.log(sub);
// console.log(Sub);



//util.inspect
//util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。
// showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
// depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多 少。如果不指定depth，默认会递归2层，指定为 null 表示将不限递归层数完整遍历对象。 如果color 值为 true，输出格式将会以ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。
// function Person(){
//     this.name='Tomy';
//     this.toString=function(){
//         return this.name;
//     }
// }
// var person=new Person();
// console.log(util.inspect(person));
// console.log(util.inspect(person,true,null,true));

// util.isArray(object)
// 如果给定的参数 "object" 是一个数组返回true，否则返回false。
// var arr=new Array();
// arr.push('ni','wo','ta','ta','ta','ta','ni','o','p','adsa');
// console.log(util.isArray(arr));


// util.isRegExp(object)
// 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。

// util.isDate(object)
// 如果给定的参数 "object" 是一个日期返回true，否则返回false。

//util.isError(object)
//如果给定的参数 "object" 是一个错误对象返回true，否则返回false。
// util.isError(new Error())
// // true
// util.isError(new TypeError())
// // true
// util.isError({ name: 'Error', message: 'an error occurred' })
// // false

console.log(process.env)