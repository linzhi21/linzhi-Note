# Day17 DOM 课堂笔记

## 1 回顾 事件

```
1. 鼠标事件
   click
   dblclick
   contextmenu
   mousedown
   mouseup
   mousemove
   mouseenter	mouseover
   mouseleave	mouseout

2. 键盘事件
   keydown
   keyup
   keypress

3. 文档事件
   load
   DOMContentLoaded

4. 表单事件
   submit
   reset
   focus
   blur
   select
   input
   change

5. 图片事件
   load
   error

6. 过渡事件
   transitionrun
   transitionstart
   transitionend
   
7. 动画事件
   animationstart
   animationend
   animationiteration

8. 其他事件
   scroll
   resize
```





## 2 Event 对象

### 2.1 获取 Event 对象

```
1. 如果是将事件作为元素对象的方法、addEventLIstener方式 监听的事件，回调函数自动取到形参，第一个参数就是事件对象
2. 如果将事件作为HTML标签的属性这种方式监听的事件，属性值里面可以使用变量 event
```

### 2.2 鼠标事件对象 MouseEvent 的属性和方法

```
clientX / clientY		获取鼠标光标在视口上的位置
offsetX / offsetY		取鼠标光标在目标元素上的位置
pageX / pageY			取鼠标光标在整个文档上的位置
screenX / screenY		取鼠标光标在屏幕上的位置
button					获取所按下的鼠标按键  0:左键； 1：滚轮； 2：右键
```

 ### 2.3 键盘事件对象 KeyborardEvent 的属性和方法

```
keyCode				获取按键对应的ASCII码
which				同 keyCode
key					获取按键对应的值，字符串
```

### 2.4 所有类型的事件对象都有的属性和方法

```
target				获取到目标元素
type				事件名
timeStamp			触发事件的那一刻与页面打开时刻相差的毫秒数

stopPropagation()	阻止事件冒泡
preventDefault()	阻止浏览器默认行为
```

### 2.5 阻止事件冒泡

```js
event.stopPropagation();
```

### 2.6  浏览器的默认行为

#### ① 浏览器有哪些默认行为

```
1. 右键弹出系统菜单
2. 点击提交按钮 或 按下回车键 表单提交 
3. 点击重置按钮表单重置
4. 超链接点击跳转页面
....
```

#### ② 阻止浏览器默认行为

```
1. 不论哪种监听事件的方式： event.preventDefault()
2. 如果是第一种方式和第二种方式监听的事件，可以 return false
```



## 3 事件委托

**事件委托的原理：**

```
1. 将事件监听在祖先元素上
2. 触发事件之后，判断目标元素（event.target） 是否是我们要的元素，如果是就执行相关操作
```

**事件委托能解决什么问题？**

```
1. 使用事件委托可以让新添加的元素也具有事件
2. 如果需要给大量的元素监听相同的事件，使用事件委托效率更高
```





## 4 DOM 对象深入分析

### 4.1 元素对象的原型链关系

```
div元素对象 -> HTMLDivElement.prototype -> HTMLElement.prototype -> Element.protototype -> Node.prototype -> EventTarget.prototype -> Object.prototype
```

### 4.2 事件对象的原型链关系

```
MouseEvent对象 -> MouseEvent.prototype -> UIEvent.prototype -> Event.prototype -> Object.prototype
```

### 4.3 HTMLCollection 和 NodeList 的区别

#### ① HTMLCollection 对象

```
1. getElementsByTagName()、getElementsByClassName()、document.all、chidren 方法或属性得到是 HTMLCollection 对象
2. HTMLCollection 集合中每个成员必须都是元素
3. 没有 forEach 方法
4. 获取到的数据是动态的
```

#### ② NodeList

```
1. getElementsByName()、querySelectorAll()、childNodes 方法或属性得到是 NodeList 对象
2. NodeList 集合中每个成员可以是元素、document、属性节点、注释节点、文本节点等
3. 具有 forEach 方法
4. 获取到的数据是静态的
```







## 作业

```js
1. 使用 HTMLCollection 类型的数据 不需要 事件委托
```







