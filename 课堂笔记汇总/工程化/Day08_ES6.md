# Day08 ES6+ 课堂笔记

## 回顾

```
1. let 和 const 关键字
   1.1 let 关键字的特点
       ① let 不能重复声明变量
       ② let 声明的全局变量不会作为window的属性
       ③ let 声明的变量不会提升
       ④ let 声明的变量除了具有全局作用域、函数作用域、多了块级作用域
   1.2 const 关键字
       ① let 声明的变量的特点，const 声明的变量也有
       ② 与let区别： const 声明的变量值不能改，也称为常量

2. 解构赋值
   2.1 数组的解构赋值
   2.2 对象的解构赋值

3. 字符串新增特性
   3.1 模板字符串 ``
   2.2 字符串实例新增方法

4. 数值新增特性
   4.1 新增的二进制和八进制的表示方式 0b 0o
   4.2 Number 构造函数新增的方法
   4.3 Math 新增的方法
   4.4 指数运算符 **
   4.5 新增的原始类型 bigint
   4.6 数字间隔符  23_3453
```





## 1 函数新增特性

### 1.1 新增的函数参数默认值的设置方式

```js
function fn(arg1, arg2=默认值) {
}
```

### 1.2 rest 参数

**什么是 rest 参数：**

```
1. rest 参数可以获取函数中多余的实参（没有形参与之对应的实参），得到一个数组
2. rest 参数需要写在普通形参的后面，reset 参数的名字是自定义。
3. rest 参数可以用来代替 arguments
```

**rest 参数与 arguments 的区别：**

```
1. rest 参数得到的是纯数组，arguments 是一个伪数组。
2. rest 参数获取的是多余的实参，arguments 获取的是所有的实参。
3. rest 参数需要声明， arguments 无需声明自动创建。
```

### 1.3 箭头函数

#### ① 箭头函数的语法

```js
// 1. 定义一个箭头函数
const fn01 = () => {};

// 2. 定义箭头函数 有参数也有函数体
const fn02 = (name, age=10) => {
    console.log('我是函数fn02 开始调用');
    console.log(`我叫${name}，今年${age}岁`);
    console.log('我是函数fn02 结束调用');
    return 100;
}

// 3. 箭头函数  如果只有一个形参可以省略小括号
const fn03 = name => {
    console.log(`我叫${name}，跟我混吧！`);
}

// 4. 箭头函数 如果函数体内只有一条语句，且该语句是返回语句，可以省略大括号和return
const fn04 = (num1,num2) => num1 + num2;

// 5. 箭头函数 省略小括号 省略大括号
const fn05 = num => num + 60;
```

#### ② 箭头函数的特点

```
1. 箭头函数中this指向： 箭头函数中没有自己的this，如果在箭头函数中使用this，沿着作用域链向上查找
2. 箭头函数中不能使用arguments，可以使用 rest 参数代替
3. 箭头函数只能调用，不能作为构造函数被实例化
4. 箭头函数不能作为生成器函数
```

### 1.4 函数参数尾逗号（ES2017）

```js
// 最后一个形参的后面加个逗号也不会报错 函数参数尾逗号
function fn(num1,num2,num3,) {
    
}
```





## 2 数组新增特性

### 2.1 扩展运算符

#### ① 把数组拆分为逗号隔开的参数序列

扩展运算符 `...` 写在一个数组的前面，可以将数组拆分为用逗号隔开的参数序列

```js
// 1. 将数组转为参数序列作为函数的实参
const data = [123, 23, 345, 199, 78, 56, 120, 290];
// 取出数组中最大的元素
console.log(Math.max(...data));
// 取出数组中最小的元素
console.log(Math.min(...data));


// 2. 实现复制数组 利用扩展运算符
const arr1 = [100,200,300,400];
// 复制 arr2是arr2 arr1是arr1  新创建了数组，数组中元素与arr1一样
const arr2 = [...arr1];
```

#### ② 把多个值合并到一个数组中（把参数序列变为数组）

扩展运算符放在变量的前面，变量的值可以得到参数序列转为的数组。

```js
// 1. rest 参数
function fn(arg1, arg2, ...args) {
    console.log(args);
}
fn(10,20,30,40,'高小乐', 100,200,true);


// 2.在数组解构赋值中使用
const [n1,n2,n3,...n4] = [100,200,300,400,500,600,700,800];
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
```

### 2.2 Array 构造函数本身新增的方法

```
Array.of()		创建新数组，参数会作为数组中的元素，参数数量可以是任意个	
Array.from()	将伪数组转为纯数组
```

### 2.3 Array 实例新增的方法

**ES3（旧方法）：**

```
concat()
join()
slice()
push()
pop()
unshift()
shift()
splice()
reverse()
sort()
```

**ES5（旧方法）：**

```
forEach()
filter()
map()
some()
every()
reduce()
reduceRight()
indexOf()
lastIndexOf()
```

**ES6+（新方法）：**

```
find()			返回第一个满足条件的元素，参数是回调函数，如果没有满足条件的元素，返回undefined
findIndex()		返回第一个满足条件的元素的索引，参数是回调函数，如果没有满足条件的元素，返回-1
fill()			将数组中的每个元素都替换为指定的值
keys()			返回由数组中元素的索引组成的遍历器对象
values()		返回由数组中元素的值组成的遍历器对象
entries()		返回由数组中元素的索引和值组成的遍历器
flat()			将多维数组拉平，参数指定拉多少层，默认值是1，可以设置为 Infinity 表示任意层。 ES2019
includes()		判断是否是否包含某个元素，可以指定开始查找的位置，返回布尔值。 ES2021
```





## 3 对象新增特性

### 3.1 属性简写

使用 `{}` 定义对象的时候，用变量表示属性值，如果变量名与属性名一致，可以简写：

```js
const name = '高小乐';
const age = 12;
const address = '上海';
function getInfo(){}

const obj02 = {
    name,
    age,
    address,
    getInfo,
    job: '法师'
};
```

### 3.2 方法简写

使用 `{}` 定义对象的时候，里面的方法可以简写：

```js
{
    // 普通形式定义方法
    getName: function() {
        console.log('getName')
    },

    // 箭头函数定义方法
    getAge: () => {
        console.log('get Age')
    },

    // 简写形式的方法
    getInfo() {
        console.log('getInfo');
    },

    getAddress() {
       console.log('getAddress');
    }
}
```

### 3.3 声明对象时用表达式作为属性名

使用 `{}` 声明对象的时候，可以在里面使用表达式来表示属性名：

```js
{
    'home-address': '上海',
     address: '北京',
     [prop]: '高小乐',
     [20*6]: 'hello world'
};
```

### 3.4 super 关键字

`super` 关键字可以在对象的方法中使用，是系统定义好的变量，与 `this` 类似：

```
1. this 指向调用该方法的对象； super 指向该方法所属对象的原型
2. this 只与谁调用有关，是动态的； super 与谁调用该方法无关，只与方法声明的位置有关（方法声明在了哪个对象   中），是静态的。
3. this 可以在任何形式创建的函数中使用； super 只能在简写的对象方法中使用。
```

### 3.5 对象的扩展运算符 (ES2018)

#### ① 把对象拆分为逗号隔开的键值对序列

```js
const users = {
    username: '高小乐',
    age: 12,
    address: '上海',
    say() {}
};

// 1. 使用扩展运算符复制对象
const obj1 = {...users};

// 2. 合并对象 users 和 {getInfo() {}, getName(){}, getAddress{}}
const obj2 = {...users, ...{getInfo(){},getName(){},getAddress(){}, username:'安妮'}};
```

#### ② 把键值对序列合并到一个对象中

```js
// 用于对象的结构赋值
const {username, ...data} = users;
```

### 3.6 Object 构造函数本身新增的方法

```js
Object.is()		对两个数据进行判等，类似于===，与 === 有两点区别：
                ① NaN 和 NaN 返回true， 0 和 -0 返回 false
Object.assign()	用于合并对象
                将第二个参数的属性以及后面所有的参数的属性都合并到第一个参数中，并将第一个参数作为返回值
Object.keys()	返回对象中的属性名组成的数组
Object.values()	返回对象中的属性值组成的数组
Object.entries()返回对象中的属性名和属性值组成的二维数组
Object.fromEntries()	entries()的逆运算，将符合格式的二维数组转为对象
Object.getPrototypeOf()	用于获取某个对象的原型
Object.setPrototypeof() 用于修改某个对象的原型
```

### 3.7 Object 的实例新增的属性	

```
__proto__		获取对象的原型
```

### 3.8 可选链运算符(ES2020)

```
?. 可选链运算符可以用于调用对象中的属性；会自动判断属性是否存在，如果不存在就不向下调用
```

```js
const obj = {};

obj.getInfo?.();
/*
  相当于
  if (obj.getInfo) {
  	obj.getInfo();
  }
*/


obj.info?.name;
/*
 相当于
 if (obj.info) {
 	obj.info.name;
 }
*/
```







