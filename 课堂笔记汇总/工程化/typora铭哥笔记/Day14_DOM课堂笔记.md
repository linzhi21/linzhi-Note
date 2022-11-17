# Day14 DOM 课堂笔记

## 1 回顾 元素操作

```
1. 元素的属性操作
   1.1 读写内置属性
   1.2 读写设置在HTML标签代码上的属性
   1.3 读写 data-* 形式的自定义属性
2. 元素的样式操作
   2.1 读写元素的行内样式
   2.2 读取计算样式
   2.3 设置元素的类名
       className
       classList  add()/remove()/toggle()
3. 读写元素中的文本内容
   innerHTML
   outerHTML
   innerText
   textContent
   
4. 读取元素的尺寸
   offsetWidth / offsetHeight
   clientWidth / clientHeight
   scrollWidth / scrollheight
   getBoundingClientRect()   width / height

5. 读取元素的位置
   offsetLeft / offsetTop
   clientLeft / clientTop
   getBoundingClientRect()	left/top/x/y/right/bottom

6. 读写元素中内容的位置（滚动的距离）
    scrollLeft / scrollTop

```





## 2 节点（元素）的创建添加删除替换克隆

### 2.1 创建元素节点

```js
document.createElement('标签名');
```

### 2.2 添加子节点

#### ① 在最后面添加子节点

```js
父元素.appendChild(新节点);
```

#### ② 指定位置添加子节点

```js
父元素.insertBefore(新节点，旧节点);
```

### 2.3 删除子节点

```js
父元素.removeChild(被删除节点);
```

### 2.4 替换子节点

```js
父元素.replaceChild(新节点，旧节点);
```

### 2.5 节点克隆

```js
元素.cloneNode(true)
```

```
返回克隆好的元素对象
参数： true:元素以及后代元素和内容都克隆； false:值克隆元素自己，后代元素和内容不克隆；默认值 false
```





## 3 HTML DOM

### 3.1 表单相关元素

#### ① form 元素

```
submit()			提交表单
reset()				重置表单
```

#### ② 文本输入框和文本域（input 和 textarea）

```
focus()				获取焦点
blur()				失去焦点
select()			选中里面的文本内容
```

#### ③ select 元素

```
value				获取所选中的下拉选项的value
selectedIndex		获取所选项的下拉选项的索引
options				获取所有下拉选项的集合

add()				追加一个下拉选项，参数是 option 元素
remove()			删除一个下拉选项，删除是 索引
```

**快速创建 option 元素：**

```js
new Option(文本内容，value值);
```

### 3.2 表格相关元素 

#### ① table 元素

```
rows			获取所有tr的集合
insertRow()		添加一行，指定索引在指定位置插入，不指定索引追加
deleteRow()		删除一行，指定索引
```

#### ② tableRow 元素（tr 元素）

```
rowIndex		该行的索引
cells			获取本行中所有单元格的集合
insertCell()	添加一个单元格，指定索引在指定位置插入，不指定索引追加
deleteCell()	删除一个单元格，指定索引
```

#### ③ tableCell 元素 （td 或 th）

```
cellIndex		该单元格在行中的索引
```

### 3.3 快速创建 img 元素

```js
new Image();
```

```
注意： 只有 option 元素和 img 元素可以通过实例化的方式创建！
```



## 4 document 对象

```
all					获取所有的元素
documentElement		获取到html匀速
body				获取到body元素
head				获取到head元素
title				读写页面标题
cookie				读写cookie信息


getElementById()
getElementsByTagName()
getElementsByClassName()
getElementsByName()
querySelector()
querySelectorAll()
createElement()
....
```









## 作业

```
1. 轮播图01
```















