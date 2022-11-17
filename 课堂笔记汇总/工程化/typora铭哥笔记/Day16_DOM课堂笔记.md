# Day16 DOM 课堂笔记

## 1 回顾

```
1. 事件基础
   1.1 添加事件监听
       ① 将事件作为 HTML 标签的属性
       ② 将事件作为元素对象的方法
       ③ 使用 addEventListener
   1.2 解除事件监听
   	   ① 第一种方式和第二种方式监听的事件
   	     元素.on事件名 = null;
   	   ② 第三种方式监听的事件
   	     removeEventListener()
   1.3 事件流
   	   捕获阶段 目标阶段 冒泡阶段
   	   默认事件在冒泡阶段触发
   1.4 this 在事件回调函数中的指向
       监听事件并触发了事件的元素

2. 常用事件的总结
   2.1 鼠标事件
       click
       dblclick
       contextmenu
       mousedown
       mosueup
       mosuemove
       mouseenter	mouseover
       mouseleave	mouseout
    2.2 键盘事件
       keydown
       keyup
       keypress
    2.3 文档事件
       load
       DOMContentLoaded
      
```





## 2 常用事件总结

### 2.1 表单事件

```
reset			表单重置的时候，监听给form元素
submit			表单提交的时候，监听给form元素
blur			失去焦点，监听给表单控件
focus			获取焦点，监听给表单控件
select			当输入框中的文本被选中，监听给输入框或文本域
input			输入框或文本域内容发生改变
change			输入框文本域：内容改变且失去焦点
       	        选择框和下拉选项： 修改选项
```

### 2.2 图片事件

```
load			图片文件加载完毕
error			图片文件加载失败
abort			图片文件加载中断
```

### 2.3 过渡事件

```
transitionrun			延时之前触发
transitionstart			过渡开始的时候， 延时之后触发
transitionend			过渡结束的时候
```

### 2.4 动画事件

```
aniamtionstart			动画开始的时候
animationend			动画结束的时候（如果执行次数是infinite，该事件不会被触发）
animationiteration		动画每执行一次
```

### 2.5 其他事件

```
scroll					监听给window或者内容溢出的元素（有滚动条）
resize					视口大小发生变化，监听给window
```

















## 作业

```
1. 轮播图效果 淡入淡出
2. 轮播图效果 滑动
3. 导航条顶部吸附效果
```





