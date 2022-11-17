# Day12 JavaScript DOM 课堂笔记

## 1 DOM 介绍

**<font color="red">MDN 文档对象模型手册</font>：**https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model

1）DOM 英文全称“Document Object Model”，译为“文档对象模型”。

2）DOM 是一个与平台和编程语言无关的接口，通过这个接口程序和脚本可以动态的访问和修改文档的内容、结构和样式。

### 1.1 五大节点类型

```
1. document 文档
2. element 元素
3. attribute 属性
4. text	文本
5. comment 注释
```

### 1.2 节点的属性

```
nodeName		节点名称	元素节点的nodeName是标签名
nodeValue		节点值
nodeType		节点类型    document:9, element:1, attribute：2， text:3, comment:8
```



## 2 获取元素

#### ① 通过 ID 名

```js
document.getElementById('ID名');
```

```
1. 获取到第一个满足条件的元素，只能获取一个元素（ID名必须唯一）
2. 如果没有满足条件的元素，得到 null
```

#### ② 通过标签名

```js
// 从文档中获取
document.getElementsByTagName('标签名');

// 从元素的后代中获取
element.getElementsByTagName('标签名');
```

```
1. getElementsByTagName() 返回一个 HTMLCollection 对象，该对象是伪数组，由满足条件的元素组成。
2. 如果没有满足条件的元素，返回一个空的 HTMLCollection 对象。
```

#### ③ 通过类名（了解，IE8 + 支持）

```js
// 从文档中获取
document.getElementsByClassName('类名');

// 从元素的后代中获取
element.getElementsByClassName('类名');
```

```
1. getElementsByClassName() 返回一个 HTMLCollection 对象，该对象是伪数组，由满足条件的元素组成。
2. 如果没有满足条件的元素，返回一个空的 HTMLCollection 对象。
```

#### ④ 通过 name 属性值 （了解）

```js
document.getElementsByName('name属性的值');
```

```
1. getElementsByName() 返回一个 NodeList 对象，该对象是伪数组，由满足条件的元素组成。
2. 如果没有满足条件的元素，返回一个空的 NodeList 对象
```

#### ⑤ 使用选择器获取元素 (推荐)

```js
// 从文档中获取第一个满足条件的元素
document.querySelector('选择器');

// 从文档中获取所有满足条件的元素
document.querySelectorAll('选择器');

// 从元素的后代中获取第一个满足条件的元素
element.querySelector('选择器');

// 从元素的后代中获取所有满足条件的元素
element.querySelectorAll('选择器');
```

```
1. querySelector() 返回第一个满足条件的元素，如果没有满足条件的元素返回 null。
2. querySelectorAll() 返回 NodeList 对象，该对象是伪数组，由满足条件的元素组成，如果没有满足条件的元素，返回空的 NodeList 对象。
```

#### ⑥ 获取文档中所有的元素

````js
document.all
````

```
获取到一个 HTMLCollection 对象，由文档中所有的元素组成！
```

**使用 document.all 可以快速判断 IE 还是 非IE:**

```js
// 判断浏览器是否是 IE
if (document.all) {
    document.write('这是IE浏览器！');
} else {
    document.write('这是非IE浏览器！');
}
```



## 3 文档结构（根据元素关系获取元素）

### 3.1 节点树

```
childNodes				获取所有的子节点，得到 nodeList 对象
firstChild				获取第一个子节点
lastChild				获取最后一个子节点

parentNode				获取父节点

previousSibling			获取上一个兄弟节点
nextSibling				获取下一个兄弟节点
```

### 3.2 元素树

```
children				获取所有的子元素，得到 HTMLCollection 对象
firstElementChild		获取第一个子元素
lastElementChild		获取最后一个子元素

parentElement			获取父元素

previousElementSibling	获取上一个兄弟元素
nextElementSibling		获取下一个兄弟元素
```

> **注意：** 除了 HTML 元素，其他元素的父节点就等同于父元素。 HTML元素只有父节点没有父元素。



## 4 元素的属性操作

### 4.1 读写内置属性

```js
元素对象.属性名;
元素对象.属性名 = 新值;
```

### 4.2 读写设置在标签代码上的属性

```js
元素对象.getAttribute('属性名');
元素对象.setAttribute('属性名', '值');
```

```
1. 只要是设置在标签代码上的属性，不论是内置还是自定义的，都可以读取到
2. 使用 setAttribute() 设置属性，不论内置的还是自定义的，直接设置到标签代码上（动态设置）。
```

### 4.3 `data-*` 形式的自定义属

```html
<img data-name="example" data-home-address="上海">
```

```js
// 读取属性值
imgBox.dataset.name;
imgBox.dataset.homeAddress;    // 自动转为小驼峰的形式

// 设置属性值
imgBox.dataset.name = '橘子';
imgBox.dataset.homeAddress = '北京';
imgBox.dataset.price = 100.23; 				// 原来不存在的会添加
imgBox.dataset.schollAddress = '深圳';       // 代码中会变为短横线的形式
```





## 5 元素的样式的操作

### 5.1 读写行内样式

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

### 5.2 读取计算样式

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









## 作业

```
1. 春节倒计时
2. 实现全选、全不选、反选
3. 全部选中效果
4. 随机点名器
```

