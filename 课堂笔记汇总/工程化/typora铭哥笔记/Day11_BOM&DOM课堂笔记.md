# Day11 BOM&DOM 课堂笔记

## 1 回顾 

```
1. Boolean

2. Number
   toFixed()
   toString()
   Number.MAX_VALUE
   Number.MIN_VALUE
   
3. String
   indexOf()
   lastIndexOf()
   slice()
   substring()
   substr()
   toUpperCase()
   toLowerCase()
   split()
   charAt()
   charCodeAt()
   String.fromCharCode()

4. Math
   abs()
   sqrt()
   pow()
   floot()
   ceil()
   round()
   max()
   min()
   random()

5. Date
   getFullYear()
   getMonth()
   getDate()
   getDay()
   getHours()
   getMinutes()
   getSeconds()
   getMilliseconds()
   getUTC...
   set...
   setUTC...
   getTime()
   setTime()
   Date.now()
   Date.UTC()

6. Array
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
   
   forEach()
   filter()
   map()
   every()
   some()
   reduce()
   reduceRight()
   indexOf()
   lastIndexOf()

7. Function
   call()
   apply()
   bind()
  
```





## 2 BOM

BOM 全称 Browser Object Model，译为浏览器对象模型。

BOM 是浏览器为 JavaScript 提供的能够对浏览器进行相关操作的 API。

### 2.1 window

#### ① 弹框

```js
// 警告框  没有返回值
alert();

// 确认框	返回布尔值
confirm();

// 输入框	返回字符串（用户输入的内容）
prompt();
```

#### ② 打开新窗口

```js
// 打开空白窗口
window.open()

// 在新窗口打开网页
window.oepn('网页地址');

// 指定窗口打开网页
window.open('网页地址', '窗口名字');

// 设置新窗口的大小
window.open('网页地址', '', 'width=400,height=300');

// 关闭本窗口	只有open方法打开的窗口才可以使用close关闭
window.close();

// 调用打印接口
window.print();
```

#### ③ 页面滚动

**滚动到指定位置：**

```js
// 没有效果
window.scrollTo(x, y);

// 带效果
window.scrollTo({
    left: x,
    top: y,
    behavior: 'smooth'
});
```

**滚动多少距离：**

```js
// 没有效果
window.scrollBy(x, y);

// 带效果
window.scrollBy({
    left: x,
    top: y,
    behavior: 'smooth'
});
```

#### ④ 定时器

**多次定时器：**

```js
// 时间间隔的单位是毫秒  setInterval函数返回定时器的标记
setInterval(回调函数，时间间隔);

// 清除定时器需要指定定时器标记
clearInterval(定时器标记)
```

**单次定时器：**

```js
setTimeout(回调函数，时间间隔);
clearTimeout(定时器标记)
```

#### ⑤ window 对象属性和方法总结

**属性：**

```
name			窗口名字
length			子窗口数量
innerWidth		获取视口宽度
innerHeight		获取视口高度
location
history
navigator
screen
document
```

```
所有的全局变量都是window的属性！
```

**方法：**

```
alert()			警告框
confirm()		确认框
prompt()		输入框
open()			打开窗口
close()			关闭窗口
print()			调用打印接口
scrollBy()		滚动指定的距离
scrollTo()		滚动到指定的位置
setInterval()	开启多次定时器
clearInterval() 清除指定的多次定时器
setTimeout()	开启单次定时器
clearTimeout()	清除指定的单次定时器
```

### 2.2 history

history 用于表示本窗口的历史记录，相关属性方法如下：

```
length			获取本窗口历史记录的个数
back()			返回历史记录中的上一个
forward()		返回历史记录中的下一个
go(n)			n是数字，可以是正数可以负数，前进或后退
```

### 2.3 location

location 用于表示本窗口的地址信息，相关属性方法如下：

```
href			完整的url地址，可读可写
protocol		协议，可读可写
host			主机名和端口号，可读可写
hostname		主机名，可读可写
port			端口号，可读可写
pathname		路径，可读可写
hash			锚点部分，可读可写
search			查询字符串，可读可写

reload()		重新加载本页面，刷新
repalce()		跳转到指定页面，不留下历史记录
assign()		跳转到指定页面，有历史记录
```

### 2.4 navigator

navigator 用于表示浏览器的版本信息以及操作系统的相关信息，属性如下：

```
userAgent		获取浏览器的版本
```

### 2.5 screen

screen 用于表示屏幕信息，相关属性如下：

```
width			获取屏幕宽度
height			获取屏幕高度
```







## 作业

```
1. 页面滚动
2. 电子钟表
3. 倒计时（选做）
```



