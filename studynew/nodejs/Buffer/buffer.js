const buf1 = new ArrayBuffer(10); //长度为10
console.log(buf1)
const buf2 = new Uint16Array(buf1) //长度为10的数组，数字中的每个元素的长度为2个字节。
console.log(buf2)