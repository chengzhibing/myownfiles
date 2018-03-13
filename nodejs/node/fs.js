'use strict';
var fs=require('fs');
////////////////////异步读取文件；
// fs.readFile('hello.js','utf-8',function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })
////////////////异步读取二进制文件
// fs.readFile('save.jpg',function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//         //二进制文件转换成字符串
//         console.log(data.toString('utf-8'));
//         console.log(data.length+'bytes.');
//     }
// })
//////////////////将字符串转换成二进制
// var str='jijiajijaijia';
// var m=Buffer.from(str,'utf-8');
// console.log(m);

// try{
//     var m=fs.readFileSync('sime.js','utf-8');
//     console.log(m);
// }catch(err){
//     console.log(err);
// }
//异步写入文件
// var ms='xieruwenjain';
// fs.writeFile('hello.js',ms,function(err){
//     if(err){
//        console.log(err+'的撒撒旦撒');
//     }else{
//        console.log('ok');
//     }
// });
////////////同步写入文件；
// var ms='jianshewomendeguojia';
// fs.writeFileSync('hello.js',ms);
////////////////获取文件的信息，异步函数；
// fs.stat('hello.js',function(err,stat){
//     if(err){
//         console.log(err);
//     }else{
//         if(stat.isFile()){//如果是文件；
//             console.log(stat.isDirectory());//是目录不？
//             console.log('文件大小'+stat.size);//文件大小；
//             console.log('文件创建时间'+stat.birthtime);//文件创建的时间；
//             console.log('文件修改时间'+stat.mtime)//修改时间；
//         }else{
//             console.log("这不是一个文件，可能是一个文件目录。");
//         }
//     }
// })
////////获取文件的信息，同步函数；
// var _stat=fs.statSync('hello.js');
// console.log("you"+_stat)
// try{
//     fs.stat('hello.js');
// }catch(error){
//     console.log(error);
// }
// if(typeof _stat==="undifined"){
//       console.log('读取文件信息失败');
// }else{
//     console.log(_stat.size);
//     console.log(_stat.birthtime);
//     console.log(_stat.mtime);
//     console.log(_stat.isFile());
//     console.log(_stat.isDirectory());
// }
////////对象流的概念；
// var rs=fs.createReadStream('hello.js','utf-8')//打开一个流
//     rs.on('data',function(chunk){
//         console.log('DATA');
//         console.log(chunk);
//     })
//     rs.on('end',function(){
//         console.log('end');
//     })
//     rs.on('err',function(err){
//         console.log('error'+err);
//     })
// var rs=fs.createWriteStream('writein.html');
//     rs.write('你好，这是第一行数据\n');
//     rs.write('你好，这是第二行数据\n');
//     rs.write('你好，这是第三行数据\n');
//     rs.write('你好，这是第四行数据');
//     rs.write(new Buffer("写入二进制数据",'utf-8'));
//     rs.write(new Buffer('zaici xieru erjinzhi shuju','utf-8'));
//     rs.end();
// var rs=fs.createWriteStream('writein.html');
//     rs.write(new Buffer("写入二进制数据",'utf-8'));
//     rs.write(new Buffer('zaici xieru erjinzhi shuju','utf-8'));
//     rs.end();



//打开文件异步模式fs.open(path, flags[, mode], callback);
// fs.open('writein.html','r+',function(err,data){
//   if(err){
//       console.log('文件读取失败！');
//       return console.error(err);
//   }
//   console.log('文件读取成功。');
// });

