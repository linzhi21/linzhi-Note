# Day16 Node 课堂笔记

## 回顾

```
1. path
2. url
3. querystring
4. os
5. fs
   5.1 文件操作
   	   fs.readFile() fs.readFileSync()
   	   fs.writeFile() fs.writeFileSync() fs.appendFile() fs.appendFileSync()
   	   fs.rename() fs.renameSync()
   	   fs.unlink() fs.unlinkSync()
   	   fs.copyFile() fs.copyFileSync()
   5.2 目录操作
   	   fs.mkdir() fs.mkdirSync()
   	   fs.rmdir() fs.rmdirSync()
   	   fs.readdir() fs.readdirSync()
   5.3 文件目录通用操作
   	   fs.exitsSync()  fs.access() fs.accessSync()
   	   fs.stat() fs.statSync()
   	   fs.rm() fs.rmSync()
```





## 1 流操作 —— 大文件读写

#### ① 读取流

*  `fs.createReadStream(path[, options])`
*  readStream 对象 http://nodejs.cn/api/fs.html#class-fsreadstream

```js
// 创建一个可读流
const rs = fs.createReadStream(filepath);

// 读取异常
rs.on('error', () => {
    console.log('读取失败！');
});

// 准备就绪事件
rs.on('ready', () => {
    console.log('准备就绪！');
});

// 每读取 64KB 的数据就触发一次 data 事件
rs.on('data', chunk => {
    console.log('本次读取：', chunk.length, '已经读取：', rs.bytesRead);
});

// 读取结束
rs.on('end', () => {
    console.log('读取完毕！');
});

```

#### ② 写入流

* `fs.createWriteStream(path[, options])`
* writeStream http://nodejs.cn/api/fs.html#class-fswritestream

```js
// 创建可写流对象 如果文件不存在会自动创建
const ws = fs.createWriteStream('./data.txt');

// 文件打开
ws.on('open', () => {
    console.log('打开写入文件！');
});

ws.on('close', () => {
    console.log('关闭写入文件');
});

// 写入大量的数据
// ws.write('hello');
for (let i = 0; i < 1000000; i ++) {
    ws.write('安妮特别美！\n');
}

// 关闭
ws.close();
```

#### ③ 流操作实现大文件复制

* pipe管道  http://nodejs.cn/api/stream.html#stream_readable_pipe_destination_options

```js
// 创建可读流
const rs = fs.createReadStream('./data.txt');
// 创建可写流
const ws = fs.createWriteStream('./data1.txt');

// 监听可读流的 data 事件，每次读取到数据都写入可写流
// rs.on('data', chunk => {
//     ws.write(chunk);
// });
// // 监听读取完毕
// rs.on('end', () => {
//     // 关闭可写流
//     ws.close();
// });

// 在可读流和可写流之间建立管道
rs.pipe(ws);
```





## 2 JSON 数据格式以及处理

### 2.1 什么是`JSON`数据格式

`JSON`全称是 `JavaScript Object Notation` (JavaScript 对象表示法) ,是一种轻量级的数据交换格式。

`JSON` 的语法与 `JS` 定义数组和对象的语法存在如下的区别：

```
1. json 中的字符串必须使用双引号
2. json 中的属性名必须使用双引号包裹
3. json 中的最后一个属性不能有逗号
4. json 中的属性值不能是表达式
```



### 2.2 JS 中的 JSON 对象

- `JSON.stringify(obj/arr)`	将对象或数组转为 json 格式的字符串。

- `JSON.parse(json)`:`	将 json 格式的字符串转为对象或数组。



## 3 模块化

### 3.1 模块化介绍

Node 应用由模块（每一个`JS`即是一个模块）组成，采用` CommonJS `模块规范(提供了模块引入导出的规则)。每个文件就是一个模块，有自己的作用。<font color=red>在一个文件里面定义的变量、函数、类（class），都是私有的，对其他文件不可见（模块作用域）。在服务器端，模块的加载是运行时同步加载的； </font>

模块化是指解决一个复杂问题时，自顶向下逐层把系统划分成若干模块的过程，对于整个系统来说，模块是可组合，分解和更换的单元。

### 3.2 模块化特点

- 所有代码都运行在模块作用域，不会污染全局作用域。
- 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
- 模块加载的顺序，按照加载模块的代码的书写顺序。

### 3.3 模块化的好处

* 提高代码的复用性
* 提高代码的可维护性
* 可以实现按需加载

### 3.4 模块化规范

- 模块化规范就是对代码进行模块化的拆分与组合时，需要遵守的那些规则。例如：
  - 使用什么样的语法格式来引用模块
  - 在模块中使用什么样的语法格式向外暴露数据。
- 模块化规范的好处：大家都遵守同样的模块化规范写代码，可以有效降低沟通的成本，极大方便了各个模块之间的相互调用，利人利已。
- Node 支持 CommonJS 和 ES6 两种模块化规范。

### 3.5 Node 中 模块的分类

Node.js中根据模块来源的不同，将模块分为了3大类，分别是：

* 内置模块（由Node.js官方提供，例如：fs,path,http）
* 自定义模块：用户创建的每个JS文件，都是自定义模块。，
* 第三方模块：由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，使用前需要先下载。



## 4 CommonJS 模块规范

### 4.1 在模块中暴露数据

1）模块内如果没有暴露数据，引人模块的时候会得到一个空对象。

2）通过为 `module.exports` 赋值，实现暴露数据。

3）通过为 `module.exports` 设置属性，暴露数据。

4）通过为 `exports` 设置属性，暴露数据。 给 `exports` 设置属性，就是给 `module.exports` 设置属性，但不能改变`exports`的引用地址，这样的话 `exports` 与 `module.exports` 就脱钩了。

### 4.2 引入模块（自定义模块）

1）自定义模块的地址需要以 `./`、  `../`  开头，这是模块文件的相对路径，相对于当前的执行的 JS 脚本的位置，不是命令行打开的目录。

2）如果模块文件的地址没有以  `./`、  `../`  开头，会被认为是内置模块或第三方模块的模块名。

3）如果模块文件扩展名是 `.js` 或者是 `.json` ，在导入的时候可以省略扩展名。如果引入模块文件时，模块路径没有扩展名，会依次查找 `.js` 文件、`.json` 文件、目录。

### 4.3 模块文件的扩展名

对于不同扩展名的模块文件，Node.js 有不同的处理方式

- 扩展名是 `.js`的模块文件： 读取文件内容并编译执行并获取模块中暴露的数据。
- 扩展名是`.json`的模块文件： 读取文件，用 `JSON.parse()` 解析返回结果作为获取的数据。
- 扩展名是`.node`的模块文件： 这是 c/c++ 编写的扩展文件，通过 `dlopen()` 方法编译。
- 其他扩展名，文件内容会被当做 JavaScript 代码去解析。

### 4.4 整个目录作为一个模块

1）会默认加载该目录下 `package.json` 文件中 `main` 属性定义的入口文件。

2）如果没有package.json, 或者 `main` 属性对应的文件不存在，则自动找 `index.js` 、 `index.json` 作为入口文件。



## 5 ES6 模块规范

### 5.1 Node 中使用 ES 模块规范

Node.js 要求 ES6 模块采用`.mjs`后缀文件名。也就是说，只要脚本文件里面使用`import`或者`export`命令，那么就必须采用`.mjs`后缀名。

如果不希望将后缀名改成`.mjs`，可以在项目的`package.json`文件中，指定`type`字段为`module`。

### 5.2 在模块中暴露数据

#### ① 暴露单个数据

使用 `export default` 可以在模块中暴露单个数据，注意文件中 `export default` 语句只能出现一次。

```js
export default 100;
const data = [10,20,30,40,50];
export default data;
function say() {}
function eat() {}

export default {
  say,
  eat
}
```

#### ② 暴露多个数据

使用 `export` 可以暴露多个数据，有两种写法：

```js
// 第一种写法 在声明变量的同时暴露
export const firstName = 'Lee';
export const lastName = 'KeQiang';
export const year = 1918;
export function fn() {};
export const obj = {name:'mingge',age:100}


// 第二种写法 在文件底部统一暴露（推荐）
const firstName = 'Lee';
const lastName = 'KeQiang';
const year = 1918;
function fn() {};
const obj = {name:'mingge',age:100}

export {firstName, lastName, year, fn, obj}
```

### 5.3 引入模块并使用模块中暴露的数据

#### ① 模块使用 `export default` 暴露单个数据

```js
import 变量名 from '模块地址';
```

#### ② 模块使用 `export` 暴露多个数据

```js
// 获取的变量名必须与模块暴露的变量名一致，可以多次分别获取，可以取别名
import {name, year as y} from '模块地址';
import {fn} from '模块地址';

// 可以将模块中的数据整体加载
import * as 别名 from '模块地址';
```



## 作业

```
1. 课堂案例
2. 作业
   1. 封装容量单位转换函数，字节转为其他单位， 第二个参数指定目标单位 0：不转换， 1：转为KB； 2:转为MB 3：转为GB 4:转为TB
   2. 将定义好的函数封装成模块，分别封装成 CommonJS 模块和 ES6 模块
```

