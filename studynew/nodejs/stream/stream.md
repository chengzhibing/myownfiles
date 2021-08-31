### readable
创建可读流的时候，需要继承流的Readable,并实现_read方法
* 1._read是生产数据的逻辑
* 2.在_read方法中，通过调用push(data)方法将数据放入可读流中，供下游消耗
* 3.当全部数据生产完成之后，push(null)
* 4.当可读流结束之后，不再调用push(data)
```js
const Readable = require("stream").Readable;
class ToReadable extends Readable{
    constructor(iterator) {
     super()
     this.iterator = iterator;
    }
    _read() {
      const res = this.iterator.next();
      if(res.done) {
         return this.push(null)
      }
      return this.push(`${res.value}`)
    }
}
const iterator = function(limit) {
    return {
        next: function() {
            if(limit--) {
                return {
                    value: limit + Math.random(),
                    done: false
                }
            }
            return {
                done: true,
                value: 0
            }
            
        }
    }
}(10)

const readable = new ToReadable(iterator);
readable.on("data", (data)=> {
    process.stdout.write(data.toString() + "\n");
})
readable.on("end", () => {
    console.log("DONE");
})
```
可以通过监听data事件消耗可读流
* 1.在首次监听完data事件之后，readable实例源源不断的调用_read,通过触发data事件将每次的数据显示到回调函数中，当所有的数据消耗完成之后，触发end事件。
### writeble
创建可写流
* 1.可写流可以不通过继承的方式
```js
const Writeable = require("stream").Writable;
const writeable = Writeable()
writeable._write= function(data, enc, next) {
   process.stdout.write(data)
   next()
}
writeable.write("a" + "\n")
writeable.write("b" + "\n")
writeable.write("c" + "\n")
writeable.write("d" + "\n")
writeable.end();
```
* 1.上游通过调用write方法写入数据到可写流中。
* 2.在_write中，当数据成功写入后，需要调用next告诉流开始处理下一个数据。
* 3.上游必须调用end方法来结束可写流。
* 4.end方法调用之后，会触发finish事件。
#### Duplex可读可写流
```JS
const Duplex = require("stream").Duplex;
const duplex = Duplex();
duplex._read = function() {
  this.limitNum = this.limitNum || 0;
  if(this.limitNum > 10) {
      return this.push(null)
  }
  this.push(`${this.limitNum++}`)
}
duplex._write = function(data, enc, next) {
   console.log(data);
   next();
}
duplex.on("data", (data)=> {
    console.log(data.toString() + "\n")
})
duplex.on("end",() => {
    console.log("hello")
})
duplex.write("a" + "\n");
duplex.write("b" + "\n");
duplex.end();
```
#### Transform
在Transform中可写端写入的数据，经自动交换后可以自动添加到可读端。
Transform继承自duplex，实现了_write和_read方法，_transform;
#### 数据类型
data.toString()
* 1.shell脚本中通过管道连接上下游，标准的文本流。
* 2.可读流：push(data) data: String || Buffer;消耗data的时候，data输出的数据格式是Buffer;
* 3.可写流：write(data): Buffer,_write(data) Buffer;
综上可以这样总结：stream中的数据流都是Buffer类型。
#### console.log和process.stdout.write的区别
* 1.console.log基于process.stdout.write
* 2.console.log默认换行，process.stdout.write默认不换行
* 3.console.log可以接收任意类型的输出，process.stdout.write只能接收String类型

