# Day 29 webpack 课堂笔记

## 1 webpack 概述

### 1.1 什么是 webpack

**webpack** 是一个用于现代 JavaScript 应用程序的 **打包工具**。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个依赖图，然后将项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，可以在浏览器上直接运行。 

在 webpack 看来, 前端的所有资源文件（js、json、css、img 、html...）都会作为模块处理。

**官方网站：** https://webpack.js.org/

**中文网站：** https://www.webpackjs.com/

**中文完档**：https://webpack.docschina.org/guides/

### 1.2 为什么需要打包工具

开发时，我们会使用框架（React、Vue），ES6 模块化语法，less、sass 这种 css 预处理器等语法进行开发。这样的代码要想在浏览器运行必须经过编译成浏览器能识别的 js、css 等语法，才能运行。所以我们需要打包工具帮我们做完这些事。除此之外，打包工具还能压缩代码、做兼容性处理、提升代码性能等。

常见的打包工具有 Grunt、Gulp、Parcel、Webpack、Rollup、Vite 等， 目前最流行的打包工具是 webpack。

### 1.3 webpack 五大核心概念

* Entry： 指示 webpack 从哪个文件开始打包 。
 * Output： 指示 webpack 打包完的文件输出到哪里去，如何命名等 。
* Loader： webpack 本身只能处理 js、json 等资源，其他资源需要借助 loader，Webpack 才能解析 。
 * Plugins： 扩展 webpack 的功能 ，如打包优化、压缩等。
* Mode：模式，有生产模式 production 和开发模式 development 两种。

### 1.4 开发模式和生产模式

#### 开发模式：

开发模式顾名思义就是我们开发代码时使用的模式。这个模式下我们主要做两件事：

1. 编译代码，使浏览器能识别运行，开发时我们有样式资源、字体图标、图片资源、html 资源等，webpack 默认都不能处理这些资源，所以我们要加载配置来编译这些资源。
2. 代码质量检查，树立代码规范，提前检查代码的一些隐患，让代码运行时能更加健壮。提前检查代码规范和格式，统一团队编码风格，让代码更优雅美观。

#### 生产模式：

生产模式是开发完成代码后，我们需要得到代码将来部署上线。这个模式下我们主要对代码进行优化，让其运行性能更好。优化主要从两个角度出发:

1. 优化代码运行性能。
2. 优化代码打包速度。





## 2 安装 webpack

**前提条件：**

在开始之前，请确保安装了 Node.js 的最新版本。

**安装：**

```bash
npm init -y
npm install webpack webpack-cli -D
```

> webpack-cli 是 webpack 的命令行可执行命令。

**查看版本：**

```bash
npx webpack -v
```

> 使用 npx 可以执行安装在本地的命令行可执行命令。



## 3 零配置使用 webpack 命令

### 3.1 webpack 命令

顾名思义，零配置指的是可以在无配置的情况下使用 wepack 命令对代码进行打包操作。

```js
# 会将 src/index.js 打包至 dist/main.js  模式默认值：production
npx webpack

# 会将 src/index.js 打包至 dist/main.js  模式指定为：development
npx webpack --mode development

# 将 src/one.js 打包至 dist/main.js
npx webpack ./src/one.js --mode production

# 将 src/one.js two.js 打包至 dist/main.js
npx webpack ./src/one.js ./src/two.js --mode production

# 将 src/one.js 打包至 build/main.js
npx webpack ./src/one.js --output-path build --mode production

# 将 src/two.js 打包至当 dist/index.js 
npx webpack ./src/two.js --output-filename index.js --mode development

# 将 src/two.js 打包至当 build/index.js 
npx webpack ./src/two.js --output-path ./build --output-filename index.js --mode development
```

### 3.2 配置 npm 执行命令

可以通过配置 `package.json` 来保存命令：

```json
{
  "scripts": {
    "build": "npx webpack ./src/index.js --output-path build --output-filename ./dist/app.js --mode development",
    "start": "npx webpack ./src/index.js --output-path start --output-filename ./dist/app.js --mode development"
  }
}

```

可以通过`npm run build` 或者 `npm start` 运行命令 （如果名字为 `start` 可以省略 `run`）

### 3.3 演示：编译打包应用

**创建 js 文件**

```
 src/js/app.js
 src/js/module1.js
 src/js/module2.js
 src/js/module3.js
```

**创建 json 文件**

```
src/json/data.json   
```

**创建主页面:**

```
dist/index.html
```

**运行指令：**

```bash
npx webpack ./src/js/index.js --output-path dist --output-filename js/index.js --mode development
```

**总结：**

```
webpack实现的功能：
- 能够编译打包 js 和 json 文件
- 能将 es6 的模块化语法转换成浏览器能识别的语法
- 能压缩代码(生产模式)

webpack不能实现的功能：
- 不能编译打包 css、img、html 等文件
- 不能将实现 js 兼容性处理 
```



## 4. webpack 配置文件

在项目的根目录创建一个名字为 `webpack.config.js` 的文件。

```js
const path = require("path");
module.exports = {
    /**************** 入口 ***********************************/
    // 字符串：将一个文件打包至一个文件（./src/home.js---->./dist/main.js）
    // entry:"./src/home.js",

    // 数组：将多个文件打包于一个文件
    // entry:["./src/home.js","./src/index.js"],

    // 对象:将多个文件打包为多个文件。打包以后的文件名以入口的属性名为准。
    entry: {
        one:"./src/home.js",
        two:"./src/index.js"
    },
    
    /**************** 出口 *************************************/
    output:{
        // filename: "./c/my.js",// 指定打包以后的文件名
        // path:path.join(__dirname,"/build"),// 指定打包以后存在的目录
        // clean:true// 在输出目录之前，将上一次打包的内容清空。

        // 如果入口为对象，那么filename需要进行配置
        filename: "./c/[name].[hash:8].bundle.js",// 指定打包以后的文件名  name:入口属性名 hash:8 -> 生成一个8位的随机数（版本号）
        path:path.join(__dirname,"/build"),// 指定打包以后存在的目录
        clean:true// 在输出目录之前，
    },
    
    /**************** 加载器 *************************************/
    module: {
        rules: [],
    },
    
    
  	/**************** 插件 *************************************/
  	plugins: [],
    
    /**************** 模式 *************************************/
    // mode:"production"
    mode:"development"
}
```



## 5. 处理样式资源

Webpack 本身是不能识别样式资源的，所以我们需要借助 Loader 来帮助 Webpack 解析样式资源

我们找 Loader 都应该去官方文档中找到对应的 Loader，然后使用

官方文档找不到的话，可以从社区 Github 中搜索查询

[Webpack 官方 Loader 文档](https://webpack.docschina.org/loaders/)

### 5.1 处理 Css 资源

#### 下载包

```:no-line-numbers
npm i css-loader style-loader -D
```

注意：需要下载两个 loader

#### 功能介绍

- `css-loader`：负责将 Css 文件编译成 Webpack 能识别的模块
- `style-loader`：会动态创建一个 Style 标签，里面放置 Webpack 中 Css 模块内容

此时样式就会以 Style 标签的形式在页面上生效

#### 配置

```js
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [],
  mode: "development",
};
```

#### 添加 Css 资源

- src/css/index.css

```css
.box1 {
  width: 100px;
  height: 100px;
  background-color: pink;
}
```

- src/main.js

```js{3-4}
import count from "./js/count";
import sum from "./js/sum";
// 引入 Css 资源，Webpack才会对其打包
import "./css/index.css";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));
```

- public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webpack5</title>
  </head>
  <body>
    <h1>Hello Webpack5</h1>
    <!-- 准备一个使用样式的 DOM 容器 -->
    <div class="box1"></div>
    <!-- 引入打包后的js文件，才能看到效果 -->
    <script src="../dist/main.js"></script>
  </body>
</html>
```

#### 运行指令

```:no-line-numbers
npx webpack
```

打开 index.html 页面查看效果

### 5.2 处理 Less 资源

#### 下载包

```:no-line-numbers
npm i less-loader -D
```

#### 功能介绍

- `less-loader`：负责将 Less 文件编译成 Css 文件

#### 配置

```js{17-20}
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [],
  mode: "development",
};
```

#### 添加 Less 资源

- src/less/index.less

```css
.box2 {
  width: 100px;
  height: 100px;
  background-color: deeppink;
}
```

- src/main.js

```js
import count from "./js/count";
import sum from "./js/sum";
// 引入资源，Webpack才会对其打包
import "./css/index.css";
import "./less/index.less";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));
```

- public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webpack5</title>
  </head>
  <body>
    <h1>Hello Webpack5</h1>
    <div class="box1"></div>
    <div class="box2"></div>
    <script src="../dist/main.js"></script>
  </body>
</html>
```

#### 运行指令

```:no-line-numbers
npx webpack
```

打开 index.html 页面查看效果

### 5.3 处理 Sass 和 Scss 资源

#### 下载包

```:no-line-numbers
npm i sass-loader sass -D
```

注意：需要下载两个

#### 功能介绍

- `sass-loader`：负责将 Sass 文件编译成 css 文件
- `sass`：`sass-loader` 依赖 `sass` 进行编译

#### 配置

```js{21-24}
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [],
  mode: "development",
};
```

#### 添加 Sass 资源

- src/sass/index.sass

```css
/* 可以省略大括号和分号 */
.box3
  width: 100px
  height: 100px
  background-color: hotpink
```

- src/sass/index.scss

```css
.box4 {
  width: 100px;
  height: 100px;
  background-color: lightpink;
}
```

- src/main.js

```js{6-7}
import count from "./js/count";
import sum from "./js/sum";
// 引入资源，Webpack才会对其打包
import "./css/index.css";
import "./less/index.less";
import "./sass/index.sass";
import "./sass/index.scss";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));
```

- public/index.html

```html{13-14}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webpack5</title>
  </head>
  <body>
    <h1>Hello Webpack5</h1>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
    <script src="../dist/main.js"></script>
  </body>
</html>
```

#### 运行指令

```:no-line-numbers
npx webpack
```

打开 index.html 页面查看效果

​                                     
