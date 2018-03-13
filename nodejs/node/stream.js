var fs=require('fs');
// var data='';
// //创建可读流
// var readAbleStream=fs.createReadStream('writein.html');
// //设置编码为utf-8;
// readAbleStream.setEncoding('UTF-8');
// //处理流事件
// readAbleStream.on('data',function(chunk){
//     data+=chunk;
// })
// readAbleStream.on('end',function(){
//     console.log(data);
// })
// readAbleStream.on('error',function(err){
//     console.log(err.stack);
// })
// console.log('程序执行完毕');



//写入流
// var fs=require('fs');
// var data='写入流的文件为；；；；；；';
// var writeAbleStream=fs.createWriteStream('writein.html');
// //使用utf-8编码写入数据；
// writeAbleStream.write(data,'UTF8');
// //标记文件末尾
// writeAbleStream.end();
// //处理流事件
// writeAbleStream.on('finish',function(){
//     console.log('写入流完成');
// })
// //错误执行程序
// writeAbleStream.on('error',function(err){
//     console.log(err.stack);
// })




//管道
//接下来我们就是用管道和链式来压缩和解压文件。
// var zlib=require('zlib');
// //压缩writein文件到writein.html.zlb
// fs.createReadStream('writein.html')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('writein.html.gz'))
// console.log('文件压缩完成');



//解压文件
// var zlib=require('zlib');
// fs.createReadStream('writein.html.gz')
// .pipe(zlib.createGunzip())
// .pipe(fs.createWriteStream('writein.html'))
// console.log('文件解压缩完成');