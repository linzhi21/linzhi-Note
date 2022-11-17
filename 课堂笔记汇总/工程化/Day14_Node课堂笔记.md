# Day14 Node 课堂笔记

官方网站地址： https://nodejs.org/en/	中文网站地址 ：http://nodejs.cn/

## 1 Node 概述

### 1.1 什么是Node.js

Node.js，也称 Node，是一个基于 `Chrome V8` 引擎的 JavaScript 运行环境（宿主），与浏览器是等价的。

**注意：**

- Node.js 不是一种独立的语言，与 PHP、Python、Perl、Ruby 的”既是语言也是平台” 不同。
- Node.js 也不是一个 JavaScript 框架或库，不同于 Vue.js、React.js、Angular、JQuery 等。
- 运行在 Node.js 上的 JavaScript 不能使用 DOM、BOM，但可以使用 Node.js 提供的各种 API。

### 1. 2 什么学习 Node.js

- 学会 Node.js，我们可以使用 JavaScript 进行后端开发，前端工程师秒变全栈工程师。
- 学会 Node.js，前端可以实现工程化开发，前端自动化工具、模块化打包工具`gulp`、`webpack`以及 `vue`、`react` 的脚手架工具都是基于 Node 运行的。
- 学会 Node.js，我们可以开发很多小工具，如自动化脚本，爬虫程序等。

### 1.3 什么是后端开发

#### ① 前端和后端

- 前端是运行在客户端上的代码， 也单指WEB前端，运行在客户端浏览器上的代码
- 后端是运行在服务器端的程序，主要实现业务逻辑，数据库读取等功能

#### ② 后端开发的组成

- 后端编程语言（PHP、Java、C#、GO、Python、Ruby、JavaScript）
- WEB服务器程序 （Apache、Tomcat、Nginx、IIS 等）
- 数据库程序（MySQL、Oricle、SQLite、MongoDB）

#### ③ 常见后端开发平台

- LAMP或LNMP （Linux Apache/Nginx MySQL PHP ）
- JavaEE （Java Tomcat MySQL/Oricle）
- .NET (C# IIS SQLServer)
- Node.js (JavaScript MongoDB/MySQL)

### 1.4 Node.js 的特点

* 单线程
* 非阻塞 I/O (non-blocking I/O)
* 事件驱动 （event-driven）



## 2 安装和使用

### 2.1 下载地址

官方网站 https://nodejs.org/en/download/

中文网站 http://nodejs.cn/download/

历史版本下载 https://npm.taobao.org/mirrors/node/

### 2.2 版本选择

注意区分 LTS 版本与 Current 版本的不同，我们推荐安装 LTS 版本。

LTS 为长期稳定版（long term service），对于追求稳定性的企业级项目来说，推荐安装 LTS 版本的 Noode.js。

Current 为新特性尝鲜版，对热衷于尝试新特性的用户来说，可以安装 Current 版本的 Node.js，但是，Current 版本中可能存在隐藏的 Bug 或安全漏洞，因此不推荐在企业级项目中使用 Current 版本的

### 2.3 REPL 方式运行

##### 进入REPL

命令行或终端运行 node ，就进入了 repl 模式

##### 退出REPL

.exit 或者 按两下 `ctrl+c` 或者 `ctrl+d`

##### REPL命令

- `ctrl + c` - 按下两次 - 退出 Node REPL。
- `ctrl + d` - 退出 Node REPL.
- 向上/向下键 - 查看输入的历史命令*
- `tab` 键 - 列出当前变量（对象）
- `.help` - 列出使用命令
- `.break` - 退出多行表达式
- `.clear` - 退出多行表达式
- `.save filename` - 保存当前的 Node REPL 会话到指定文件
- `.load filename` - 载入当前 Node REPL 会话的文件内容。

### 2.4 脚本方式运行

```bash
node JS脚本文件地址
```

### 3.5 命令行工具

#### ① windows 平台

```
cmd
powershell
gitbash
```

> **注意：** 可以在资源管理器的地址栏直接输入 cmd 或者 powershell ，可以在该目录下打开命令行工具

#### ② macOS 平台

```
终端
```

#### ③ vscode 内置的终端工具

```
ctrl + ` 快捷键打开 vscode 内置的终端工具，可以选择 cmd、powershell或者其他已经安装第三方命令行工具
```



## 3 内置常量

```
__dirname		获取JS脚本所在目录的绝对路径
__filename		获取JS脚本自己的绝对路径
```



## 4 Buffer

### 4.1 Buffer 介绍

Buffer 是一个和数组类似的对象，不同是 Buffer 是专门用来保存二进制数据的。

**特点：**

- 大小固定：在创建时就确定了，且无法调整。
- 性能较好：直接对计算机的内存进行操作。
- 每个元素大小为 1 字节（byte）。

**字节单位：**

```
1 Byte = 8 bit；
1 KB = 1024 Byte;
1 MB = 1024 KB;
1 GB = 1024 MB;
1 TB = 1024 GB;
...
```

### 4.2 创建 Buffer

```js
Buffer.alloc(10);	 // 创建一个10个长度的 buffer
Buffer.alloc(10, 'a');	// 创建一个10个长度的 buffer, 每个元素填充a（二进制）

Buffer.allocUnsafe(2);		// 创建一个不安全的 buffer

Buffer.from('abcdject');	// 根据字符串创建buffer，长度由字符串内容决定
Buffer.from([10,20,30,40])  // 根据数组创建buffer，长度由数组长度决定
```

**alloc 和 allocUnsafe 的区别：**

```
1. alloc() 方法，内存开辟空间后，会进行初始化。
2. allocUnsafe() 方法，内存开辟空间后，不进行初始化，可能会保留过去的数据。
```

### 4.3 读写 Buffer

```js
// 单独修改buffer的元素
b[0] = 100;
b[1] = 97;
b[2] = 65;

// 读取buffer的长度
b.length;

// 读取buffer中的元素
b[2];

// 遍历buffer中所有元素
b.forEach((item, index) => {
    console.log(item, index);
});

// 将 buffer 中的内容转为字符串 （默认根据unicode编码）
b.toString();
```

### 4.4 关于溢出

buffer 每个元素能表示的最大数字是 255，如果超过 255 的数字，会舍去高位（二进制）

```js
const b = Buffer.alloc(2);
b[0] = 100;
b[1] = 300;

console.log(b[0]);	// 100
console.log(b[1]);  // 44

/*
 300 -> 0001 0010 1100  -> 舍去 0001，只保存 0010 1100，等于十进制的 44
*/
```

### 4.5 关于中文

一个 UTF-8 的中文字符大多数情况都是占 3 个字节。



```
0000 ~ 1111
0 ~ 15
0 ~ f
```









## 5 内置模块

Noode 当中的模块分为三种：内置模块，第三方模块以及自定义模块。 不论哪一种模块，在使用时都必须先引入模块。

### 5.1 模块引入方式

### 5.2 path 模块

### 5.2 fs 模块

#### ① 文件读取

#### ② 文件写入

#### ③ 流式读写操作

#### ④ 文件重命名

#### ⑤ 删除文件

#### ⑥ 创建目录

#### ⑦ 删除目录

#### ⑧ 读取目录

#### ⑨ 判断文件或目录是否存在

#### ⑩ 判断是文件还是目录

### 5.3 url 模块

### 5.4 querystring 模块







