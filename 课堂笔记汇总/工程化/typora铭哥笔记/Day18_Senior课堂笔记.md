# Day19 JavaScript 高级课堂笔记

## 1 回顾

```
1. JS 的垃圾回收机制
   引用计数
   标记清除
   
2. 执行上下文和执行栈
   2.1 全局执行上下文
   2.2 函数内的执行上下文
   2,3 执行栈（调用栈）

3. 闭包
   3.1 闭包概念
   3.2 实现闭包
       ① 函数A 中 定义函数B
       ② 函数B中使用函数A中的数据（使用上层作用域的数据）
       ③ 将函数B对外引用 ①返回函数B ②将函数B作为window的属性 ③将函数B作为异步操作的事件
    3.3 闭包和作用域
    3.4 闭包和垃圾回收
```





## 2 对象高级

### 2.1 原型链总结

#### ① `__proto__` 和 prototype 属性

```
1. 所有类型的对象都有 __proto__ 属性，该属性执行谁，对象的原型就是谁。
2. 函数既有 __proto__ 属性，也有 prototype 属性。
   函数.__proto__ 获取的是自己的原型，称为函数的隐式原型。
   函数.prototype 获取的是实例的原型，称为函数的显示原型。
3. Function 的构造函数还是 Function，所以 Function.prototype === Function.__proto__
   除了 Function，其他函数的 __proto__ 和 prototype 是不同的
```

#### ②  construct 属性

```
1. 对象本身没有 constructor 属性，会使用原型上的 constructor 属性，指向对象自己的构造函数
2. 如果对象本身有 construuctor 属性，并不会获取自己的构造函数，指向的是以该对象为原型的对象的构造函数
   只有给其他对象当原型的对象，本身才会有 constructor 属性
```

#### ③ 原型链

```js
 // 自定义的构造函数
function Foo() {}

// Foo 的两个实例
var f1 = new Foo();
var f2 = new Foo();

// Object的两个实例
var o1 = {};
var o2 = {};


/*
    f1、f2 的构造函数是 Foo
    o1、o2 的构造函数是 Object
    Object、Foo 的 构造函数是 Function
	Function 的构造函数是 Function

    f1、f2 -> Foo.prototype -> Object.prototype
    o1、o2 -> Object.prototype
    Foo、Object、Function -> Function.prototype -> Object.protype
*/
```





### 2.2 面向对象继承

#### ① 面向对象语言的继承规则

```js
// 父类 用户
class User {
    // 属性...
    // 方法
}

// 子类 普通用户
class OrdinaryUser extends User {
    // 自己的属性
    // 自己的方法
}

// 子类 VIP用户
class VipUser extends User {
    // 自己的属性
    // 自己的方法
}
```

#### ② JS 中继承关系的特点（原型继承特点）

```
a instanceof A
```

```
1. A如果是a的构造函数，表达式成立
2. A如果是a的原型链的某个对象的构造函数，表示也成立
```

#### ③ 实现JS中构造函数和构造函数之间继承

```js
// 定义父类
function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.addShopcar = function() {}


// 定义子类
function VipUser(name,age,level) {
    // 调用父类
    User.call(this, name, age);
    this.level = level;
}
VipUser.prototype = new User();
VipUser.prototype.constructor = VipUser;
// 子类实例的方法
VipUser.prototype.buy = function() {}
```

```
1. 本案例中： VipUser 是 User 的子类， 因为 VipUser 的实例的原型是 User 的一个实例
2. 系统中： Array 是 Object 的子类：因为 Array 的实例的原型是 Object 的一个实例
          String 是 Object 的子类：因为 String 的实例的原型是 Object 的一个实例
          ....
```

### 2.3 安全的类型检测

**哪些判断数据类型的方式？**

```
1. typeof	缺点：对象类型的数据无法判断
2. instanceof 缺点：原始类型数据值的形态无法判断，父类也会判断成功
```

**安全的类型检测：**

```js
function getType(data) {
    var res = Object.prototype.toString.call(data);
    return res.slice(8, res.length-1);
} 
```

```
1. 系统内置类型的数据，不论是原始类型还是对象类型，都可以准确判断
2. 自定义的类型和作为原型的对象无法准确判断
```







## 3 单线程和事件轮询机制

### 3.1 进程和线程

```
进程： 内存资源的分配单位，表示程序的一次执行，拥有独立的内存空间

线程： CPU的最小调度单位

进程和线程的关系：
1. 一个进程中可以分为多个线程，有一个主线程。
2. 一个进程中至少有一个线程。
3. 同一个进程中不同线程可以共享内存数据。
4. 不同进程之间不可以直接共享内存数据。
```

### 3.2 JS 单线程运行

```js
setTimeout(function() {
    console.log('时间到了！');
}, 10);

console.log('Hello,高小乐');

for (var i = 0; i <= 100000000; i ++) {
    var age = i + i + i * i / 1000 + 89;
}

```

```
单线程运行的JS一次只能执行一个任务！
```

### 3.3 同步代码和异步代码

```
1. 同步代码，同步任务，按照顺序依次执行，上一个任务下一个任务开始

2. 异步代码，异步任务，满足条件且主线程空闲（同步任务都执行结束）才能执行的任务

3. JS中有哪些异步任务？
   ① 定时器的回调函数
   ② DOM 事件的回调函数
   ③ Ajax 的回调函数
   ④ Promise 的回调函数
   
4. 注意事项
   ① 异步任务都是回调函数的形式，回调函数不都是异步任务
   ② 开启定时器、监听事件等操作是同步任务，它们的回调函数才是任务任务
```

### 3.4 事件轮询机制

```
1. 主线程
   不论同步任务还是异步任务，都在主线程执行。
   主线程中有执行栈，代码进入执行栈才能执行。
   
2. 浏览器管理模块（异步任务管理模块）：
   DOM事件管理模块
   定时器管理模块
   Ajax请求管理模块
   ...
   
3. 回调队列
   异步任务管理模块将满足条件的异步任务（回调函数），放入回调队列，等待执行
   队列：与栈相对的一种数据结构，特点是先进先出，后进后出
   
4. 事件轮询模块
   不停地询问主线程是否空闲（执行栈清空），如果空闲，将回调队列中的异步任务按照顺序放入主线程执行
```

## 4 JS 实现多线程（了解）

```
Worker 构造函数
Worker.prototype.postMessage
Worker.prototype.onmessage
```









## 作业

```js
//问题描述：请写出最终的输出值，并解释原因
var value1 = 0, value2 = 0, value3 = 0;

for ( var i = 1; i <= 3; i++) {
  var i2 = i;
  (function() {
    var i3 = i;
    setTimeout(function() {
      value1 += i;
      value2 += i2;
      value3 += i3;
    }, 1);
  })();
}

setTimeout(function() {
    console.log(value1, value2, value3);
}, 100);
```



