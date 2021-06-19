function test(resolve, reject) {
   var timeout = Math.random() *2;
   console.log("set timeout to: " + timeout + " seconds");
   setTimeout(function(){
       if(timeout < 1) {
           console.log("call resolve()...")
           resolve('200 OK')
       }else {
           console.log("call reject()...")
           reject("timeout in " + timeout + " seconds");
       }
   }, timeout * 1000)
}
var promise = new Promise(test)
promise.then(function(result) {
   console.log("成功" + result)
}).catch(function(err) {
    console.log("失败"+ err)
}) 