# Day13 DOM 课堂笔记

## 1 回顾 

```
1. 节点
2. 获取元素
3. 文档结构
   节点树： childNodes、firstChild、lastChild、parentNode、previousSibling、nextSibling
   元素树： children、firstElementChild、lastElementChild、parentElement、previouseElementSibling、nextElementSibling
4. 元素的属性操作
   4.1 读写内置属性
   4.2 读写HTML代码上设置的属性 
       getAttribute() setAttribute()
   4.3 读写data-开始的自定义属性
       dataset
5. 元素的样式操作
   5.1 读写行内样式
   5.2 读取计算样式
```







## 2 元素的样式操作

### 2.1 读写行内样式

```js
元素对象.style.属性名;
元素对象.style.属性名 = 新值;

元素对象.style['background-color'];
元素对象.style.backgroundColor;
```

```
1. 如果CSS属性名中包含短横线，使用中括号语法或者把属性名变为小驼峰形式.
2. 该方式只能读取设置在行内的样式，使用该方式设置样式会设置在行内。
```

### 2.2 读取计算样式

```js
window.getComputedStyle(元素对象).属性名;
window.getComputedStyle(元素对象)['属性名'];
```

```js
/**
  * 获取到指定的计算样式
  * @params element 要获取样式的元素
  * @params attrname CSS 属性名
  * @return CSS属性值
  */
function getStyle(ele, attrname) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele)[attrname];
    } else if (ele.currentStyle) {
        return ele.currentStyle[attrname];
    } else {
        return null;
    }
} 
```

### 2.3 通过设置元素的类名操作样式

#### ① className

```
1. className 是内置属性对应元素上的 class 属性
2. 由于 class 是js 中保留字，所以使用 className 对应  class
```

#### ② classList

```
1. classList 是由元素所有类名组成的集合，是个伪数组
2. classList 具有三个方法：
   add() 	添加一个类名
   remove() 删除一个类名
   toggle() 添加或删除一个类名
```





## 3 读写元素的文本内容（可读可写）

```
innerHTML			读写元素内部的HTML内容
outerHTML			读写本元素元素以及元素内部的HTML内容
innerText			读写元素内部的文本内容（取出多余空格）
textContent			读写元素内容的文本内容（保留多余空格）
```





## 4 读取元素的尺寸（只读）

```
offsetWidth / offsetHeight		读取元素总的宽高和高度（包括内容、内边距、边框）
clientWidth / clientHeight		读取元素内容和内边距部分宽度和高度
scrollWidth / scrollHeight		client + 溢出部分

getBoundingClientRect()			返回对象，对象中有 width 和 height 属性，同 offset 一致。
```

**读取视口的尺寸：**

```
window.innerWidth
window.innerHeight

document.documentElement.clientWidth			不包括滚动条滑块的宽度
document.documentElement.clientHeight
```





## 5 读取元素的位置 （只读）

```
offsetLeft / offsetTop				获取元素在第一个定位的祖先元素上的位置 或者 在整个页面上的位置
clientLeft / clientTop				左边框宽度 / 上边框宽度

getBoundingClientRect()				返回对象，有如下属性：
									left / top： 元素在是视口上的位置
									x / y ：     等同于 left 和 top
									right / bottom : 元素的右边和底部在视口上的位置
```

```
getBoundingClientRect().right - getBoundingClientRect().left = 元素宽度
getBoundingClientRect().bottom - getBoundingClientRect().top = 元素高度
```



## 6 读写元素中内容的位置（可读可写）

```
scrollLeft
scrollTop
```

**读写页面在视口上的位置（滚动的距离）**

```js
document.documentElement.scrollLeft
document.documentElement.scrollTop

/* 获取页面在视口上的位置 兼容性写法 兼容IE*/
document.documentElement.scrollTop || document.body.scrollTop;
```







## 作业

```
1. 无缝滚动 （向左滚动，无缝选做）
2. 选项卡
```

