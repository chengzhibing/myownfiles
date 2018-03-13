var say=function(val){
    console.log(val+'正确读取数据；');
}
var wrapFn=function(fn,value){
    fn(value);
}
wrapFn(say,'zhag');