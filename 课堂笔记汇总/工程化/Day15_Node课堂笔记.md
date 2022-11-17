# Day 15 Node 课堂笔记

## 回顾

```
1. 让js在Node.js中运行的两种方法
   1.1 repl 
   1.2 node JS脚本文件地址
   
2. 运行在 Node 中的 JS， 没有 BOM 和 DOM， 但是有 Node 提供的 API
   全局对象不是 window，是 global
   
3. Buffler
   3.1 Buffer 的特点
   3.2 创建 Buffer 数据
   3.3 读写 Buffer 数据
```





## 1 关于内置模块

Noode 当中的模块分为三种：内置模块，第三方模块以及自定义模块。 不论哪一种模块，在使用时都必须先引入模块。

**ComonJS 导入模块的方式：**

```js
const 变量 = require('模块名')
```

**ES6 导入模块的方式：**

要想使用该方式，脚本文件的扩展名不能是 `.js` 必须是 `.mjs`

```js
import { 导出的变量名,导出的变量,导出的变量 } from '模块名';
```



## 2 path 模块

path 模块提供了一些用于处理文件路径的小工具，模块的常用方法如下：

```js
const path = require('path');
```

```
path.join()		拼接路径，根据操作系统决定使用 / 还是 \, 第二个参数如果 ../ 开头的会进行处理
path.isAbsolute()	判断参数是否是绝对路径
path.dirname()		获取路径中的目录名部分
path.basename()		获取路径中的文件名部分
path.extname()		获取扩展名部分
path.resolve()		将相对路径转为绝对路径，可以进行路径拼接（最终结果是绝对路径），推荐
```

```
前端中的绝对路径
https://learn.fuming.site/front-end/node/node.html

后端中使用绝对路径
C:\Windows\System32\cmd.exe     window下的绝对路径
/etc/nginx/nginx.conf           linxu、macos、unix下绝对路径
```



## 3 url 模块

url 模块用于 URL 处理与解析。

**用法一：**

```js
const url = require('url');

cosnt urlObj = url.parse(urlStr);  // urlObj 对象中有很多属性可以获取url的各部分信息

/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'learn.fuming.site:8088',
  port: '8088',
  hostname: 'learn.fuming.site',
  hash: '#nav001',
  search: '?name=xiaole&type=2',
  query: 'name=xiaole&type=2',
  pathname: '/front-end/node/03node.html',
  path: '/front-end/node/03node.html?name=xiaole&type=2',
  href: 'https://learn.fuming.site:8088/front-end/node/03node.html?		   name=xiaole&type=2#nav001'
}

*/


```

**用法二： 推荐**

```js
const url = require('url');

const urlObj = new url.URL(urlStr);  // urlObj 对象中有很多属性可以获取url的各部分信息
/*
URL {
  href: 'https://learn.fuming.site:8088/front-end/node/03node.html?name=xiaole&type=2#nav001',
  origin: 'https://learn.fuming.site:8088',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'learn.fuming.site:8088',
  hostname: 'learn.fuming.site',
  port: '8088',
  pathname: '/front-end/node/03node.html',
  search: '?name=xiaole&type=2',
  searchParams: URLSearchParams { 'name' => 'xiaole', 'type' => '2' },
  hash: '#nav001'
}
*/

urlObj.searchParams;   // 改属性可以获取到查询字符串组成的键值对结构的对象 （类似于 Map）
urlObj.searchParams.get('name');
urlObj.searchParams.get('type');
```



## 4 querystring 模块

querystring是一个内置模块。可以将查询字符串（a=1&b=2）转为对象，也可以将对象转为查询字符串，常用方法如下：

```
querystring.parse()			将查询字符串转为对象
querystring.stringify()		将对象转为查询字符串
querystring.decode()		同 parse()
querystring.encode()		同 stringify()	
```



## 5 os 模块

该模块提供了与操作系统相关的方法和属性

```
os.arch()		获取系统架构 x86或者x64等
os.homedir()	获取用户目录
os.userInfo()	获取用户信息
os.freemem()	获取剩余内存量
```





## 6  fs 模块

在 `NodeJS` 中，所有与文件操作都是通过 `fs` 核心模块来实现的，包括文件目录的创建、删除、查询以及文件的读取和写入，在 `fs` 模块中，所有的方法都分为**同步**和**异步**两种实现方式，具有 `sync` 后缀的方法为同步方法，不具有 `sync` 后缀的方法为异步方法 。

### 6.1 文件操作

#### ① 读取读取

```
fs.readFile()			异步方式读取文件
fs.readFileSync()		同步方法读取文件
```

#### ② 写入文件

```
fs.writeFile()			向文件写入内容，文件原本内容会被重置	
fs.writeFileSync()
fs.appendFile()			向文件追加内容，文件原本内容会保留
fs.appendFileSync()
```

#### ③ 重命名或移动文件

```
fs.rename()				
fs.renameSync()
```

#### ④ 复制文件

```
fs.copyFile()
fs.copyFileSync();
```

#### ⑤ 删除文件

```
fs.unlink()
fs.unlinkSync()
```

### 6.2 目录操作

#### ① 创建目录

```
fs.mkdir()
fs.mkdirSync()
```

```
如果需要创建同时多层目录，需要设置第二个参数  {recursive: true}，表示递归创建
```

#### ② 删除目录

```
fs.rmdir()
fs.rmdirSync()
```

```
默认只能删除空目录，如果要删除非空目录，需要设置第二个参数 {recursive: true}，表示递归删除
```

#### ③ 读取目录

```
fs.readdir()
fs.readdirSync()
```



### 6.3 文件目录通用操作

#### ① 判断文件或目录是否存在(可访问性)

```
fs.exists()			被弃用
fs.existsSync()		返回布尔值
fs.access();		判断文件或目录可访问性， 如果回调函数的错误对象是null，说明文件或目录存在
fs.accessSync();
```

#### ② 获取文件或目录信息，可以用于判断是文件还是目录

```
fs.stat()
fs.statSync()
```

```
回调函数第二个参数可以获取一个对象，该对象中包含文件的各种信息（尺寸、权限、创建时间等），有方法 isDirectory()、isFile() 可以判断是文件还是目录。
```

#### ③ 删除文件或目录

```
fs.rm();
fs.rmSync();
```

```
删除目录的时候默认只能删除空目录，如果要删除非空目录，需要设置第二个参数 {recursive: true}，表示递归删除
```





```
任务：
	1. path、url、querystring
	2. 文件系统
作业：
	1. 递归读取目录
	2. 计算目录的大小 递归
```

```
01-lesson
	images
		01.jpg
		02.jpg
	index.html
02-lesson
	01.html
	02.html
	03.html
03-lesson
data.txt
```













### 6.4 流操作 —— 大文件读写

#### ① 读取流

*  `fs.createReadStream(path[, options])`
* readStream 对象 http://nodejs.cn/api/fs.html#class-fsreadstream

#### ② 写入流

* `fs.createWriteStream(path[, options])`
* writeStream http://nodejs.cn/api/fs.html#class-fswritestream

#### ③ 利用流复制文件内容

* pipe管道  http://nodejs.cn/api/stream.html#stream_readable_pipe_destination_options





