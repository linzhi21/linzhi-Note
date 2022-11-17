## 回顾

```
1. class
   1.1 定义类（构造函数）的语法
   1.2 类中定义构造器方法
   1.3 静态方法
   1.4 class 实现继承
   1.5 继承方法重写
   1.6 super 关键字
   1.7 继承内置类
   
2. 新增类型 symbol
   新增原始类型，typeof 判断返回 symbol
   Symbol() 函数创建 symbol 类型的数据，没调用一次Symbol()函数都产生一个独一无二的symbol类型数据
   可以作为对象的属性名

3. 新增类型 Set WeakSet Map WeakMap
   3.1 Set
   	   成员的值都是唯一的，类似于数组的结构，成员没有索引
   	   Set()构造函数只能实例化，不能调用； 构造函数的参数是数组或者可遍历对象
   3.2 WeakSet
       相对于Set，WeakSet的成员都是对象类型，不能是原始类型
   3.3 Map
       键值对的集合，键可以是任意类型数据
   3.4 WeakMap
   	   键只能是对象类型
   	   
4. 新增运算符
   **
   ?.
   ?? 空值判断运算符
   逻辑赋值运算符  &&= ||= ??=
```





## 1 遍历器 iterator

### 1.1 iterator 遍历器对象

**什么是遍历器对象？**

iterator(遍历器对象)是一种接口，为各种不同的数据提供统一的访问机制，任何数据只要部署了 iterator 接口就可以进行遍历操作。

**遍历器对象的特点？**

```
1. 每个遍历器都有一个 next() 方法
2. 遍历器对象内部存在一个指针，初始指向遍历器对象中的第一个数据，调用 next（） 会取出当前指针指向的数据，并且指针下移。
3. 每次调用 next() 方法，返回对象，对象中包含 value 属性 和 done 属性， value 属性就是当前指针指向的数据的值，done 属性是一个布尔值，表示是否结束遍历。
```

**得到遍历器对象的方法：**

```
数组实例： keys() values() entries()
Set实例： keys() values() entries()
Map实例： keys() values() entries()
...
```

### 1.2 iterable 可遍历对象

#### ① 什么是可遍历对象

```
1. 把部署了 iterator 接口（遍历器接口）的数据结构称为 iterable(可遍历对象)
2. iterator 部署在了可遍历对象的 Symbol.iterator 属性上，该属性是一个方法，这个方法返回一个遍历器对象
```

#### ② 内置的可遍历对象

```
Array 的实例
Set 的实例
Map 的实例
字符串
arguments
NodeList
HTMLCollection
....
```

#### ③  哪些情况会调用可遍历对象的遍历器接口

```
1. 使用 for of 遍历可遍历对象
2. 数组的解构赋值，所有可遍历对象都可以被解构
3. Array.from() 该方法可以把可遍历对象转为数组
4. 使用扩展运算符将可遍历对象分割为逗号隔开的参数序列
5. Set 构造函数的参数，要求是可遍历对象
6. WeakSet 构造函数的参数，要求是可遍历对象
7. Map 构造函数的参数，要求是可遍历对象
9. WeakMap 构造函数的参数，要求是可遍历对象
9. Promise.all() 的参数
10. Promise.race() 的参数
....
```

#### ④ 可遍历对象（iterable）和遍历器对象（iterator）的关系

```
1. 所有的遍历器对象都是可遍历对象，可遍历对象不一定是遍历器对象。
2. 所有的可遍历对象都可以通过遍历器接口获取到与之对应的遍历器。
```

#### ⑤ 可遍历对象（iterable）和伪数组的关系

```
1. 伪数组指的是像数组一样具有索引结构，由多个数据组成的不是数组的数据类型
2. 可遍历对象指的是部署了遍历器接口的对象
3. 二者是完全不同的两个概念， String、Arguments、NodeList、HTMLCollection 既是伪数组又是可遍历对象； Set、Map 不是伪数组是可遍历对象。
```

### 1.3 for ... of

```
所有的可遍历对象（包括遍历器对象）都可以使用 for of 进行遍历。
```



## 2 生成器 generator

### 2.1 什么是生成器

```
1. 能够创建遍历器的函数称为生成器函数（generator）
2. 可遍历对象的遍历器接口（Symbol.iterator 属性的值）就是一个生成器函数
```

### 2.2 如何自定义生成器

```js
function* 生成器名字() {
    
}
```

### 2.3 yield 关键字

```js
function* 生成器名字（） {
	yield 值;
    yield 值;
    yield 值;
    yield 值;
    yield 值;
}
```

```
1. yield 关键字只能在生成器函数中使用
2. 调用生成器函数得到遍历器对象之后，调用遍历器对象的next()方法，得到yield 后面的数据，作为next()返回对象的value属性的值
3. 调用生成器函数的时候，只会得到一个遍历器对象，不会执行生成器中的语句； 只有调用遍历器对象的 next()方法的时候，才会执行生成器中的语句，执行到 yield 会停下来，再调用 next() ，再执行到下一次 yield
4. 生成器中的 return，可以结束遍历器的遍历
```

### 2.4 利用生成器给对象部署 iterator 接口（自定义可遍历对象）

```js
const obj = {
    name: '高小乐',
    age: 18,
    address: '上海',
    users: ['刘姥姥', '马姥姥', '欧阳姥姥', '司马姥姥'],
    say: ()=>{}
};


// 给 obj 部署一个遍历器接口
obj[Symbol.iterator] = function*(){
    for (let i in obj) {
        yield [i, this[i]];
    }
};
```



## 3 模块

### 3.1 定义模块（模块中导出数据）

**第一种导出数据的方式:**

```js
// module1.js 模块一
export var firstName = 'Micheal';
export var lastName = 'JackSon';
export function play() {}
```

**第二种导出数据的方式：**

```js
// module2.js 模块二
function say() {}
function eat() {}

export default {
    say,
    eat
};
```

### 3.2 导入模块（使用模块）

```js
// 导入模块一 该模块中采用的是第一种导出数据的方式
import {firstName, lastName, play} from './module.js';
// 导入模块二 该模块中采用的是第二种导出数据的方式
import myModel from './module2.js'
```

```
1. 第一种导入方式，import 后面的变量名必须与模块中导出的数据保持一致
2. 第二种导入方式，import 后面的变量名是可以自定义的
```







## 4 总结

### 4.1 ECMAScript 中的数据类型

```
原始类型（值类型）： number、string、boolean、null、undefined、bigint、symbol (7种)
对象类型（引用类型）：Array、Object、Function、Date、Set、WeakSet、Map、WeakMap ...
```

### 4.2 ECMAScript 中定义变量的方式

```
一共 6 种：
1. var
2. function
3. let
4. const
5. class
6. import
```

```
let、const、class、import 是ES6新增的，新增的这4种关键字定义的变量，具有如下特点：
① 不能重复声明
② 不会成为window的属性
③ 不会提升
④ 具有块级作用域
```

### 15.3 数组偏平化（拉平）

```JS
// 第一种方式 ES6新增的数组实例的方法 flat
arr.flat(Infinity));

// 第二种方式 使用join将数组合并为字符串，再使用split将字符串分割为数组
// 缺点： 处理完成后，数组中的元素都会变为字符串
arr.join().split(',');

// 第三种方式 通过递归函数
function arrayFlat(data) {
    // 创建一个新的空数组
    let res = [];
    // 遍历原数组
    for (let i = 0; i < data.length; i ++) {
        // 判断原数组中的元素是否还是数组
        if (data[i] instanceof Array) {
            // data[i] 还是数组，递归调用，递归调用的结果连接到新数组
            res = res.concat(arrayFlat(data[i]))
        } else {
            // data[i] 不是数组，直接添加到新数组中
            res.push(data[i]);
        }
    }
    // 返回新数组返回
    return res;
}

```

### 15.4 对象的浅拷贝

**数组的浅拷贝：**

```
1. [...arr] 扩展运算符
2. arr.concat() 返回新的数组
3. arr.slice()	返回新的数组，从头截取到尾
4. Array.from(arr) 返回新的数组
```

**对象的浅拷贝：**

```
1. {...obj} 扩展运算符
2. Object.assign({}, obj) 返回新对象，利用对象合并实现对象浅拷贝
```

### 15.5 对象的深拷贝

```js
// 专门判读对象的类型
function getObjectType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}


// 实现对象的深拷贝
function deepClone(data) {
    // 判断data是Object是数组还是其他
    if (getObjectType(data) === 'Object') {
        var res = {};  // 创建新的空对象
    } else if (getObjectType(data) === 'Array') {
        var res = [];  // 创建新的空数组
    } else {
        return data;
    }
    // 对传入的data进行遍历
    for (let i in data) {
        res[i] = deepClone(data[i]);
    }
    // 返回结果
    return res;
}
```



