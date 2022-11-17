# Day10 JavaScript  内置对象

内置对象的在线文档（MDN）：

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects

## 1 Boolean

```js
// 创建 布尔值
var b1 = true;				// 直接量
var b2 = Boolean(false);    // Boolean 函数
var b3 = new Boolean();     // Boolean 构造函数
```

## 2 Number

#### ① 实例的属性和方法

```
toFixed()			保留指定位数的小数，参数是小数位数，不设置参数默认取整
toString()			把数字转为指定的进制形式，方法返回的是字符串，参数指定进制，取值范围2~36
```

#### ② 构造函数本身的属性和方法

```
Number.MAX_VALUE	获取JS中最大可表示的数字
Number.MIN_VALUE	获取JS中最小可表示的正数
```

## 3 String

#### ① 实例的属性和方法

```
length			属性，可以获取字符串的长度
indexOf()		返回关键字第一次出现的位置
lastIndexOf()	返回关键字最后一次出现的位置
slice()		  返回截取到的字符串，第一个参数是起始位置，第二个参数是结束位置。不设置第二个参数，截取到最后
substring()		同上
substr()	  返回截取到的字符串，第一个参数是起始位置，第二个参数是截取长度。不设置第二个参数，截取到最后
split()			将字符串分隔为数组，参数指定分隔符
toUpperCase()	转为大写
toLowerCase()   转为小写
charCodeAt()	返回指定字符对应的unicode编码
```

#### ② 构造函数本身的属性和方法

```
String.fromCharCode()	返回unicode编码对饮的字符
```

## 4 Math

Math 并非构造函数，而是一个 Object 的实例。

**Math 的属性和方法：**

```
Math.PI			获取圆周率
Math.abs(n)		取n的绝对值
Math.sqrt(n)	取n的平方根
Math.pow(n,m)	计算n的m次方
Math.max()		取所有参数中值最大的
Math.min()		取所有参数中值最小的
Math.floor()	向下取整
Math.ceil()		向上取整
Math.round()	四舍五入取整
Math.random()	取随机数，随机数是0~1之间的小数，顾头不顾尾（0可能被取到，1没有可能）
```

**获取 0 ~ n 之间的随机整数：**

```js
Math.floor(Math.random() * (n+1));
```

**获取 m ~ n 之间的随机整数：**

```js
Math.floor(Math.random() * (n-m+1)) + m;
```

## 5 Date

#### ① 实例化日期时间对象

```js
// 当前的日期时间
new Date();

// 指定日期时间
new Date('December 17, 1995 03:24:00');

// 指定日期时间
new Date('1995-12-17T03:24:00');

// 月份 0表示1月，9表示10月
new Date(1995, 11, 17);
new Date(1995, 11, 17, 3, 24, 0);
```

#### ② 实例的属性和方法

```
getFullYear()			年
getMonth()				月，注意值是 0 ~ 11
getDate()				日
getDay()				星期几
getHours()				时
getMinutes()			分
getSeconds()			秒
getMilliseconds()	    毫秒

getUTC...				获取零时区的年月日时分秒

set...					设置年月日时分秒
setUTC...				设置零时区年月日时分秒

getTime()				获取时间戳（毫秒数）
setTime()				使用时间戳设置日期对象
```

> 时间戳： 1970年1月1日0时0分0秒与某个日期相距的秒数（getTime 获取的是毫秒数）

#### ③ 构造函数本身的属性和方法

```
Date.now()				获取当前日期时间的时间戳
Date.UTC()				获取指定日期时间的时间戳，可以最多设置6个参数
```

## 6 Array

#### ① 实例的属性

```
length					获取数组的长度（元素的个数）
```

#### ② 访问器方法

```js
concat()				合并数组，将合并好的数据返回，参数可以多个
slice()					截取数组，截取数组中的部分元素组成新数组并返回，参数1个或2个
join()					将数组合并成字符串并返回，参数可以指定分隔符，默认是逗号
```

#### ③ 修改器方式

修改器方法指的是对象调用完方法之后，对象本身会被修改，默认只有数组的实例才有修改器方法。

```
push()					在元素后面添加1个或多个元素，返回添加元素之后的长度
pop()					删除最后一个元素，返回被删除的元素
unshift()				在元素前面面添加1个或多个元素，返回添加元素之后的长度
shift()					删除第一个元素，返回被删除的元素
splice()				添加、删除、替换元素，返回数组，数组中是被删除的元素
reverse()				翻转数组，返回翻转好的数组
sort()					对数组排序，返回排好序的数组
```

#### ④ ES5 新增的实例的访问器方法

```
forEach()				用于遍历数组，没有返回值
filter()				过滤数组
map()					从数组中提取数据
every()					返回布尔值，所有的回调函数都返回true，最终结果才是true
some()					返回布尔值，只要有一个回调函数返回true，最终结果就是true
reduce()				了解，每次回调函数可以获取到上一次回调的返回值
reduceRight()			了解，同reduce(),从后向前比那里

indexOf()				返回数组中某个元素第一次出现的位置
lastIndexOf()			返回数组中某个元素最后一次出现的位置
```

## 7 Function

```
name		得到函数名
length		得到形参数量

call()		调用并改变函数中的this， 第二个参数后面参数用于传递给调用call的函数
apply()		调用并改变函数中的this， 第二个参数是数组，数组的元素作为调用apply的函数的参数
bind()		返回改变了this的函数
```









## 作业

```
1. 'get-element-by-id' 转为 'getElementById'
   'set-name-by-class-name' 转为 'setNameByClassName'

2. [].forEach.call 遍历字符串
   [].forEach.apply 遍历字符串


3. 输出当前日期事件，时间格式如下 “2021-03-04 19:02:56”
```











