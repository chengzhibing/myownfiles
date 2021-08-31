1、const--常量,如果修改常量值会报错，不能分开声明和赋值
```js

```
### 1)不允许重复声明，即声明的常量不可再更改
es5中声明常量，不可以被修改，但是不会报错
```js
Object.defineProperty(window, 'arg1', {
    value: "程",
    writable: false //默认为false，如果为true,则arg1可以被修改
})
```
### 2）块级作用域
函数和{}块，对象不属于作用域
### 3）无变量提升
### 4)var命名的变量会自动挂载到window上，但是const声明的变量不会
### 5）const和let的使用时机 优先使用const
```js
const obj = {
    name: "张"
}
obj.name = "王"
这是可以的，因为const声明引用类型的时候，其实是指向了这个引用
本例中obj引用没有被改变，改变的是引用同类型所指向的对象的属性值(引用类型的属性值无法被常量化)
那么如何将引用类型冻结呢----即属性值也不可以被改变
Object.freeze(obj)
但是Object.freeze()方法无法冻结嵌套的引用类型
比如:
const obj = {
    name:"张",
    favorite: ["爬山", "滑雪"]
}
Object.freeze(obj)
obj.favorite[0] = "游泳"---是可以修改成功的
//实现深度冻结
function deepFreeze(obj) {
    Object.freeze(obj)
    Object.keys(obj).forEach((key) => {
        if(typeof obj[key] === "object" && obj[key] !== null) {
           deepFreeze(obj[key])
        }
        
    })
}
```
```js
```
2、箭头函数
### 1）结构
```js
const sum1 = (a, b) => {
    return a + b
}
等同于：
const sum1 = (a, b) => a + b;
如果有一个参数,参数可以不加括号
const sum2 = a => {
    //逻辑处理
}
```
### 2）上下文
2-1箭头函数没有独立的上下文。其上下文指向外围的作用域
2-2dom 操作的时候不要用箭头函数。
2-3箭头函数无法构造类，也无法构造原型上的方法（没有独立的作用域，故this指向有问题）。
不能写成如下方式：
```js
const Obj1 = (name, age) => {
    this.name = name;
    this.age = age;
}
Obj(一个构造器).prototype.getName = () {
    return this.name;
}
```
2-4箭头函数没有arguments
```js
const getInfo = (name, age) => {
    console.log(arguments) //这里是拿不到arguments的
}
```
3、Class类---本质是语法糖
```js
class Course{
    constructor(teacher) {
        this.teacher = teacher
    }
}
```
### 类型
class 类是function
```js
typeof Course
```
### 是否有prototype--有
```js
Course.prototype
```
### 可以使用对象的属性和方法么--可以
```js
course.hasOwnPrototy("teacher")
```
### 如何定义一个属性（两种方式）
```js
## ---构造器
class Course {
  constructor(teacher, course) {
      this.teacher = teacher;
  }
}
## ---顶层定义
class Course {
  constructor(teacher, course) {
      this._teacher = teacher;
  }
  get teacher() {
      return this._teacher;
  }
  set teacher(val) {
      this._teacher = val;
  }
}
## ---顶层定义的意义?(创建只读属性)，删除set
class Course {
  constructor(teacher, course) {
      this._teacher = teacher;
  }
  get teacher() { 
      return this._teacher;
  }
}
const course = new Course("yy", "语文")
course.teacher = "zhang" //更改无效，但是不报错
## ---如何创建一个私有属性(两种方法:闭包)
//方式一
class Course {
  constructor(teacher) {
      this._teacher = teacher;
      let course = "数学";
      this.getCourse = () => {
          return course;
      }
  }
  get teacher() { 
      return this._teacher;
  }
}
//方式二
class Course {
  constructor(teacher) {
      #course = 'es6'
      this._teacher = teacher;
  }
  get course() { 
      return `${#course}~`
  }
  set course(val) { //可以用这种方式修改私有属性
    if(val) {
        this.#course = val
    }
  }
}
```
4、解构赋值
```js
const zhuawa = {
    teacher: "zhang",
    course: "js"
}
//es5
const teacher = zhuawa.teacher;
const course = zhuawa.course;
//Es 6
const {
    teacher,
    course
} = zhuawa
// 数组
const arr = ['', '', '', ''];
const a = arr[0];
const b = arr[1];
// ...
//
const [a, b, c, d] = arr;
```
#### 技巧 key解构
```js
const zhuawa = {
    teacher: {
        name: "",
        age: ""
    },
    leader: "",
    name: ""
}
// const {
//     teacher,
//     leader,
//     name
// } = zhuawa
const {
      teacher: {
        name,
        age
      },
      leader,
      name: className
  } = zhuawa;
```
### 追问 解构 使用场景/什么情况下使用过
* 1.数组传参
```js
  // 数组传参
  const sum = arr => {
    let res = 0;

    arr.forEach(each => {
      res += each;
    })
  }

  // es6
  const sum = ([a, b, c]) => {
    return a + b +c;
  }

  sum([1, 1, 1]);
```
### 结合初始值
```js
  const course = ({
    teacher,
    leader,
    course = 'zhuawa'
  }) => {
    // ……
  }

  course({
    teacher: 'yy',
    leader: 'hxy',
    // course: 'es6'
  })
```
### 返回值
```js
  const getCourse = () => {
    return {
      teacher: 'yy',
      leader: 'hxy'
    }
  }

  const { teacher, leader } = getCourse();
```

### 变量交换
```js
  let a = 1;
  let b = 2;

  [b, a] = [a, b];
```

### json处理
```js
  const json = '{"teacher": "云隐", "leader": "黄小杨"}';

  const obj = JSON.parse(json);

  const {
    teacher,
    leader
  } = JSON.parse(json);
```
### ajax
```js
  ajax.get(URL).then(res => {
    let code = res.code;
    let data = res.data;
    let msg = res.msg;

    if (code === 0) {
      // ...
    }
  })

  const {
    code,
    data,
    msg
  } = res;
```

5、数组的方法： Array.fill() Array.from()