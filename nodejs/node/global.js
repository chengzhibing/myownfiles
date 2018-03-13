//_filename__filename 表示当前正在执行的脚本的文件名 
// console.log(__filename);


// //__dirname 表示当前脚本所在的目录
// console.log(__dirname);


// //setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
// //返回一个代表定时器的句柄值。
// var timer=setTimeout(output,3000);
// function output(){
//     console.log('三秒钟以后执行这个函数。');
// }
// clearTimeout(timer);



// var num=0;
// var timers=setInterval(interval,2000);
// function interval(){
//     var nums=num+=1;
//     console.log('每隔两秒钟显示一次这句话'+nums);      
// }
// clearInterval(timers);


//console.time('time');


// process.on('exit', function(code) {
    
//       // 以下代码永远不会执行
//       setTimeout(function() {
//         console.log("该代码不会执行");
//       }, 0);
      
//       console.log('退出码为:', code);
//     });
//     console.log("程序执行结束");


// process.on('exit',function(code){
//     setTimeout(function(){
//         console.log('改代码不会执行。');
//     },0)
//     console.log('退出码为,'+code);
// });
// setTimeout(function(){
//     console.log('300毫秒以后执行此段话。');
// },300);
// console.log('程序执行结束');