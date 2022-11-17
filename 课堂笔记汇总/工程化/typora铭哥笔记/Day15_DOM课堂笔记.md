# Day15 DOM 课堂笔记

## 1 回顾

```
1. 节点的增删改
   1.1 创建新元素
       document.createElement()
   1.2 添加子节点
       父元素.appendChild()
       父元素.insertBefore()
   1.3 删除子节点
   	   父元素.removeChild
   1.4 替换子节点
       父元素.replaceChild()
   1.5 克隆节点
   	   cloneNode()

2. HTML DOM
   2.1 表单
   	   ① form对象： submit() reset()
   	   ② 输入框元素对象： blur() focus() select()
   	   ③ select 元素： value、selectedIndex、options、add()、remove()
   2.2 表格
   	   ① table 元素： rows、insertRow()、deleteRow()
   	   ② tr 元素： rowIndex、cells、insertCell()、deleteCell()
   	   ③ td/th元素： cellIndex
   2.3 快捷创建新元素
   	   new Option()
   	   new Image()

3. document
	title
```



## 2 事件

### 2.1 事件监听

#### ① 给元素监听事件的三种方式

**第一种方式： 事件作为HTML标签的属性：**

```html
<div on事件名="JS代码...">
```

```
相同的事件的监听多次，只有第一个生效。
```

**第二种方式： 事件作为元素对象的方法：**

```js
元素对象.on事件名 = 回调函数;
```

```
相同的事件监听多次，后面的生效。
```

**第三种方式：使用 addEventListenrer 方法：**

```js
元素对象.addEventListener('事件名', 回调函数);
```

```
相同的事件可以监听多次
```

> **注意：** IE8 不支持 addEventLIstener，使用 attachEvent() 添加事件监听 和 detachEvent() 解除事件监听 代替。

#### ② 解除事件的监听

**第一种和第二种方式监听的事件：**

```js
元素对象.on事件名 = null;
```

**第三种方式监听的事件：**

```js
元素对象.removeEventListener('事件名', 回调函数名);
```

> **注意：** 使用 addEventListener 方式监听的事件要想被解除监听，必须使用有名字的回调函数。

### 2.2 事件流

**根据事件流规则，事件的触发分为三个阶段：**

```
1. 捕获阶段	从window、document 到 目标元素的过程
2. 目标阶段 标志着捕获阶段的结束和冒泡阶段的开始
3. 冒泡阶段 从目标元素开始一直到父元素、document、window
```

**事件的回调函数默认在冒泡阶段被执行，一般讲：事件在冒泡阶段触发**， 设置 `addEventListener` 的第三个参数为 true 表示在捕获阶段触发事件。

**目标元素：** 具体发生了事件的行为的元素称为目标元素，目标元素不一定监听事件。

### 2.3 事件的回调函数中 this 的指向

```
不论是哪一种事件监听方式，在事件的回调函数中，this 指向监听事件的元素！
```





## 3 常用事件总结

### 3.1 鼠标事件

```
click			单击
dblclick		双击
contextmenu		右击
mousedown		鼠标按键按下
mouseup			鼠标按键抬起
mousemove		鼠标移动
mouseenter		鼠标进入元素	用来代替 mouseover
mouseleave		鼠标离开元素  用来代替 mouseout
```

### 3.2 键盘事件

```
keydown			键盘按键按下
keyup			键盘按键抬起
keypress		键盘按键按下
```

**keypress 和 keydown 的区别：**

```
1. keydown 所有的键盘按键都可以触发； keypress 键盘的控制按键（ctrl、shift、方向键等）无法触发
2. keydown 获取的按键值无法区别字母大小写， keypress 获取的按键值可以区分字母大小写
```

**哪些元素可以监听键盘事件？**

```
1. document
2. 表单控件（获取焦点之后可以触发键盘事件）
```

### 3.3 文档事件

```
load						文档中所有一切加载完毕（包括元素和外部文件）
DOMContentLoaded			文档中所有的元素加载完毕（包括外部文件），只能使用 addEventListener 监听
unload						文档关闭的时候
beforeunload				文档关闭之前
```



### 3.4 表单事件

### 3.5 图片事件

### 3.6 其他事件













## 作业

```
1. 轮播图
2. 键盘按键控制元素移动
```



