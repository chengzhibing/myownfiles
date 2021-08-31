### ArrayBuffer
* 1.可以理解为一块内存，表示通用的固定长度的原始二进制缓冲区
#### 可以直接操作么？不能，可以通过类型数组对象来操作（TypeArray）|| 
#### Unit8Array
* 1.表示一个8位的无符号整型数组，创建的时候数组元素被初始化为0；
* 2.1字节(byte) = 8 bit(位) js Number 64位 = 8 byte
#### ArrayBuffer 和 TypeArray的区别
* 1.前者本身是一个0和1存在一行里的集合
* 2.可以用一个Int8的确定类型数组来分离8位的二进制字节。
* 3.可以用无符号的Int16来分离 16位的二进制字节。
### Nodejs Buffer
* Buffer 1.实现了Unit8Array的api，其实例类似于一个整型数组。大小在创建的时候就确定了。
```js
//创建一个长度为10，默认值为0的数组
const buf1 = Buffer.alloc(10);
//创建一个长度为10，值为17的数组
const buf2 = Buffer.alloc(10, 17);
//allocUnsafe比alloc更快，但是allocUnsafe可能存在旧的数据，可以用fill初始化。
const buf3 = Buffer.allocUnsafe(10)
```
#### tips
* 1.Buffer.allocUnsafe(),被分配的内存是未初始化的，内存的分配非常快，具有明显的
   性能优势，但是如果使用不当的话，会给程序引入安全漏洞。

#### Buffer与字符编码
* 1.Buffer的实例一般表示编码字符的序列，UTF-8，Base64,十六进制
* 2.nodejs支持的字符编码：ascii-仅支持7位的ascii数据
   ** utf- 多字节编码的Unicode字符，html
* 3.base64-当从字符串编码的时候