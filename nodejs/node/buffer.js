//创建Buffer类；
// var buffer=new Buffer([10,3,4,5,6,7,78,3,3,565]);
// var buffer = new Buffer("www.runoob.com", "utf-8");
// console.log(buffer);



//写入缓存区，返回字符的长度
// var buffer=new Buffer(256);
// len=buffer.write('www.baidu.com');
// console.log('写入字节数'+len);


//从缓存区读取数据，解码缓冲区数据并使用指定的编码返回字符串。
// var buf=new Buffer(26);
// for(var i=0; i<26; i++){
//     buf[i]=i+97;
// }
// var cha=buf.toString('ascii',9,17);
// console.log(cha);



//将Buffer对象转换成JSON对象；返回JSON对象
// var buf=new Buffer('www.baidu.com');
// var _json=buf.toJSON();
// console.log(_json);



//缓冲区合并；
// var buf1=new Buffer('www.baidu.com');
// var buf2=new Buffer('http//www.goole.com');
// var con=Buffer.concat([buf1,buf2]);
// // console.log('con的内容'+con.toString());
// console.log('con的内容'+con.toJSON(con));


//缓冲区比较
// var buf1=new Buffer('ABC');
// var buf2=new Buffer('ABCD');
// var result=buf1.compare(buf2);
// if(result<0){
//     console.log(buf1+'在'+buf2+'之前');
// }else if(result==0){
//     console.log(buf1+'和'+buf2+'相同');
// }else{
//     console.log(buf1+'在'+buf2+'之后');
// }




//缓冲区拷贝,将内容1拷贝到2中
// var buffer1=new Buffer('ABCD');
// var buffer2=new Buffer('huauhuaan');
// buffer1.copy(buffer2,8,3,10);//参数解释，8表示从2的索引为8的开始拷贝，3表示从1的索引为3的开始拷贝，10结束位置
// console.log('buffer2的内容'+buffer2.toString());


//缓冲区裁剪，返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。
// var buffer=new Buffer('Please open an new window');
// var buffer2=buffer.slice(0,2);
// console.log('buffer2的内容是'+buffer2);


//缓冲区长度
// var buffer=new Buffer('www.ranboo.com.cn');
// console.log('buffer的长度是'+buffer.length);


