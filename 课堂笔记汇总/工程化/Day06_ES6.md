# Day07 ES6+ 课堂笔记

官方地址：https://www.ecma-international.org/technical-committees/tc39/

铭哥教程：https://learn.fuming.site/front-end/es6/

阮一峰教程：https://es6.ruanyifeng.com/



## 1 let 和 const 关键字

### 1.1 let 关键字

**let 关键字的作用：** 

```\
let 关键字同 var 关键字一样，都是用来声明变量。
```

**let 关键字声明的变量与 var 关键字声明的变量有哪些区别：**

```
1. let 关键字不能重复声明变量 （不论变量使用 var 声明的还是 let 声明的，let 都不能重复声明）
2. let 声明的全局变量不会作为window的属性
3. let 声明的变量不会提升
4. let 声明的变量除了有全局作用域、函数作用域。还有块级作用域
```

### 1.2 const 关键字

**const 关键字的作用：**

```
1. const 关键字可以用来声明常量。
2. 常量是一种特殊的变量，一旦赋值无法修改。
```

**const 声明的变量与 let 声明的变量的区别：**

```
1. const 声明的变量，值不能修改
2. let 声明变量可以先不赋值，自定得到 undefined； const 声明变量的同时必须赋值。
```

**const 声明的变量也具备 let 声明的变量的 4 个特点：**

```
1. const 关键字不能重复声明变量 
2. const 声明的全局变量不会作为window的属性
3. const 声明的变量不会提升
4. const 声明的变量除了有全局作用域、函数作用域。还有块级作用域
```

### 1.3 块级作用域

```
1. 分支语句、循环语句等带有 {} 的语句可以产生块级作用域
2. let 声明的变量可以具有块级作用域
```





## 2 解构赋值

```
1. 解构赋值用于从数组、对象中提取数据，赋值给一个或多个变量
2. 解构赋值可以用于给变量赋值或者函数传参
3. 等号的右边需要写数组或者对象（可以是任何形式，变量、直接量、表达式）
   等号的左边要求将变量写在数组或者或者对象结构中，并不是真正的数组或对象。
```

### 2.1 数组的解构赋值

```
1. 数组的解构赋值根据索引进行匹配
2. 可以解构纯数组，也可以解构伪数组（字符串、arguments、nodeList...）
```

```js
// 1. 同时给多个变量声明并赋值
const age = 1000;
let [v1, v2, v3] = ['hello,', ['a','b','c','d'], age];


// 2. 同时修改多个变量的值
/*
    等号右边： 负责提供数据，形式可以是数组直接量，也可以是变量（变量的值是数组）
    等号左边： 将变量放入数组结构
*/
const data = ['刘姥姥', '马姥姥', '司马姥姥', '欧阳姥姥'];
[v1, v2, v3] = data;


// 3. 使用解构赋值 交换两个变量的值
[v1, v2] = [v2, v1];


// 4. 解构赋值不但可以用于给变量赋值， 还可以用于函数传参（函数传参本质上就是实参赋值给形参）
function fn([age, name, address]) {
    console.log(name, age, address);
}
fn([19, '高小乐', '上海']);
fn(data);


// 5. 两边的数组结构不完全一致
const [name1, name2, name3] = ['小乐', '大乐'];
console.log(name1);        
console.log(name2);        
console.log(name3);     // 自动得到 undefined


// 6. 解构赋值 左侧的变量可以指定默认值
let [num1, num2, num3=250] = [10,20];
console.log(num1);
console.log(num2);
console.log(num3);  // 使用默认值


// 7. 解构格式复杂的数组；
//    同一个数组可以进行多种形式的解构
var arr = [
    100,
    ['高小乐', 199],
    [
        100,
        [10, 20]
    ]
];
const [n1, [n2, n3], [n4, [n5, n6]]] = arr;
const [a1, a2, a3] = arr;


// 8. 不但可以解构纯数组，伪数组也可以被解构
// 伪数组： arguments、nodeList、HTMLCollection、String 等
const msg = 'Hello,高小乐';
const [s1, s2, s3, s4, s5, s6, s7] = msg;

var btnItems = document.querySelectorAll('.btns button');
const [e1, e2, e3] = btnItems;

```

### 2.2 对象的解构赋值

```
1. 对象的解构负值根据属性名进行匹配
2. 对象的结构赋值可以解构所有类型的数据，因为一切皆对象
```

```js
// 1. 对象的解构负值 按照属性名进行匹配
const data = {name:'高小乐', age: 123, address:'上海', job:'法师'};
const {name: n1, age:n2, address: n3} = data;


// 2. 对象的结构赋值,可以简写 左边： 属性名与变量名一致
// const {name:usernamename, age:age,address:address,job:job} = data;
const {name:username, age, address, job} = data;
console.log(username, age, address, job);


// 3. 对象的解构赋值 用于函数传参
function fn({name, age, address}) {
    console.log(name, age, address);
}
fn(data);
fn({
    name: '安妮',
    age: 17,
    address: '上海'
});


// 4. 对象解构赋值，可以设置默认值 没有顺序要求
const {name:v1='曹操', age:v2, grade:v3='110', address:v4, job:v5} = data;


// 5. 对于复杂一些对象 进行解构 （按照属性名进行解构， 变量位于属性值的位置，属性名是判断条件）
const obj = {
    email: 'xiaole@qq.com',
    nums: [100, 200],
    prop: {
        content: 'Hello ES6'
    }
};

const {email, nums:[num1, num2], prop: {content}} = obj;
const {email: e, nums:n, prop: p} = obj;


// 6. 一切皆对象 对象的解构赋值可以解构一切数据
const {length:len} = 'hello world';  // 字符串中有属性 length
console.log(len);

const {length, push, pop, age: a10} = [100,200,300,400];
console.log(length, push, pop, a10);  // a10 的值是undefined，数组中没有 age 属性
```









## 3 字符串新增特性

### 3.1 模板字符串

**什么是模板字符串？**

```
使用反引号定义的字符串，称为模板字符串。
```

**相对于使用单引号或双引号定义的字符串，模板字符串有如下特点：**

```
1. 模板字符串中可以直接写换行，适合定义内容比较多且带有换行的内容的字符串
2. 字符串中可以非常方便的嵌套变量或者表达式，将变量或表达式写在 ${} 中
```

### 3.2 字符串实例新增方法

**ES3 方法：**

```
indexOf()
lastIndexOf()
slice()
substring()
substr()
split()
toUpperCase()
toLowerCase()
replace()
charCodeAt()
search()
match()
```

**ES5 方法：**

```
trim()
```

**ES6 + 方法：**

```
repeat()		重复字符串，参数指定重复的次数
includes()		判断字符串中是否包含某个值，第一个参数是要查找的值，第二个参数是起始查找的位置，默认值是 0 				   返回布尔值
startsWidth()	判断字符串是否以某个值开头，第一个参数是要查找的值，第二个参数是起始查找的位置，默认值是 0
 			    返回布尔值
endsWith()		判断字符串是否以某个值结尾，参数是要查找的值
padStart()		将字符串补全到指定的长度，填充的内容在字符串前面。 第一个参数是目标长度，第二个参数是填充的				  内容，默认值是空格（ES2017）
padEnd()		将字符串补全到指定的长度，填充的内容在字符串后面。 第一个参数是目标长度，第二个参数是填充的				  内容，默认值是空格（ES2017）
trimStart()		去除字符串前面的空格（ES2019）
trimEnd()		去除字符串后面的空格（ES2019）
replaceAll()	替换字符串中所有指定的值 （ES2021）
```







## 4 数值新增特性

### 4.1 新增的二进制和八进制表示方式

```js
// ES6 八进制数字的表示方式
0o100;

// ES6 二进制数字的表示方式
0b101001010
```

### 4.2 Number 构造函数本身新增的方法和属性

**ES3（旧）：**

```
Number.MAX_VALUE
Number.MIN_VALUE
```

**ES6+ (新)**

```
Number.MAX_SAFE_INTEGER		获取JS中能表示的最大的安全整数
Number.MIN_SAFE_INTEGER		获取JS中能表示的最小的安全整数
Number.EPSILION				获取JS中可以表示的最小精度

Number.isNaN()				同全局函数 isNaN()
Number.isFinite()			同全局函数 isFinite()
Number.parseInt()			同全局函数 parsetInt()
Number.parsetFloat()		同全局函数 parsetFloat()
Number.isInteger()			判断是否是整数
Number.isSafeInteger()		判断是否是安全整数
```

```
整数范围在 -2^53 ~ 2^53 之间的正数视为安全整数，不包括两个端点。 超过安全数范围的整数无法保证其计算精度。
```

### 4.3 Math 新增方法

**ES3（旧）：**

```
Math.PI
Math.sqrt()
Math.pow()
Math.abs()
Math.floor()
Math.ceil()
Math.round()
Math.max()
Math.min()
Math.random()
```

**ES6+ (新)：**

```
Math.trunc()			截取出数字中的整数部分（小数直接截掉）
Mthn.sign()				判断一个参数是正数、负数还是0.分别返回 1、-1、0
Math.cbrt()				计算一个数字的立方根
Math.hypot()			计算所有参数平方和的平方根
```

### 4.4 指数运算符 ** （ES2016）

```js
2 ** 10;		// 2 的 10次方
5 ** 6;			// 5 的 6次方
```

### 4.5 新增原始数据类型 bigint （ES2020）

**bigint 数据类型：**

```
ES6 中新增的一种原始类型数据，使用 typeof 进行判断可以得到 bigint
```

**bigint 类型的数据的表示方式：**

```js
5325345n;		// bigint 类型的数据只能是整数
```

**bigint 类型的数据的特点：**

```
1. bigint 不能与其他类型的数据进行数学运算。
2. bigint 可以与其他类型的数据比较大小，比较大小的时候会自动类型转换
```

**bigint 类型的数据的作用：**

```
number 类型表示的数字，如果超过安全整数的范围，无法保证计算精度，此时建议使用 bigint 来表示较大的整数。
```

### 4.6 数字间隔符（ES2021）

```js
45_345_897;
45_0000;
```



















