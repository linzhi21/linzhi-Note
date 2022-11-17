# Day 23

# MongoDB 课堂笔记

## 1 MongoDB 数据库程序（服务）

### 1.1 简介

MongoDB 是为快速开发互联网Web应用而设计的数据库系统，官方地址 <https://www.mongodb.com/>

数据库（DataBase）是按照数据结构来组织、存储和管理数据的仓库。是一个应用程序。

### 1.2 下载

下载地址 <https://www.mongodb.com/download-center/community>

### 1.3 Window 安装步骤

> ![](assets/install01.png)
>
> ![](assets/install02.png)
>
> ![](assets/install03.png)
>
> ![](assets/install04.png)
>
> ![](assets/install05.png)
>
> ![](assets/install06.png)
>
> ![](assets/install07.png)

**默认安装目录：**

```
C:\Program Files\MongoDB\Server\5.0
```

**默认配置文件地址：**

```
C:\Program Files\MongoDB\Server\5.0\bin\mongod.cfg
```

**默认数据存放目录：**

```
C:\Program Files\MongoDB\Server\5.0\data
```

### 1.4 Windows 下配置环境变量

为了能够全局使用 MongoDB 相关的命令，需要配置环境变量。

> 此电脑 -> 属性 -> 高级系统设置 -> 环境变量 -> 双击 Path ->  新建 -> 设置 `mongod.exe` 所在文件夹路径。

`mongod.exe`  默认所在路径如下：

```
C:\Program Files\MongoDB\Server\5.0\bin
```

### 1.5、Windows 下开启关闭 Mongodb 服务

#### ① 命令行启动

```bash
mongod --dbpath C:\data\db
```

#### ② windows 服务

> 此电脑 > 管理 > 服务和应用程序 >  服务 > MongoDB Server



### 1.6 三个重要概念

**数据库（database）：**  数据库是一个仓库，一个 MongoDB 服务可以创建多个数据库。

**集合（collection）：**    集合类似于 JavaScript 中的数组，一个数据库中可以创建多个集合。

**文档（document）：**   文档是数据库中的最小单位，类似于 JavaScript 中的对象，表示一条数据信息，一个集合中可以有多个文档。

![img](assets/db.jpg)





## 2 使用工具操作数据库

### 2.1 命令行工具

#### ① 连接 MongoDB 服务

**连接：**

```bash
mongo
```

```bash
mongo host:port/database -u user -p password
```

- `host` MongoDB服务器的主机名(地址)，默认 locahost
- `port` MongoDB服务器端口，默认27017
- `database` 连接后打开的数据库，默认test

**退出：**

```bash
exit
```

#### ② 数据库操作

##### 显示所有的数据库

```
show dbs
show databases
```

##### 创建或切换到指定的数据库

```bash
use 数据库名
```

##### 显示当前所在的数据库

```bash
db
```

##### 删除当前数据库

```
db.dropDatabase()
```

> **注意：** 先切换到需要删除的数据库

#### ③ 集合操作

**创建集合**

```js
db.createCollection('集合名')
```

##### 显示当前数据库中的所有集合

```js
show collections
```

##### 删除集合

```js
db.集合名.drop()
```

##### 重命名集合

```js
db.集合名.renameCollection('新名字')
```

#### ③ 文档操作（重要）CURD

数据库的基本操作包括四个，增加（create），删除（delete），修改（update），查询（read）

##### 插入文档

```
db.集合名.insert(文档对象);
```

##### 查询文档

```
db.集合名.find(查询条件)	
db.集合名.findOne(查询条件)
```

##### 更新文档

```js
db.集合名.update(查询条件,新的文档,配置对象)   
// 更新一个
db.集合名.updateOne(查询条件,要更新的内容) 
// 批量更新
db.集合名.updateMany(查询条件,要更新的内容)
//eg
db.集合名.update({name:'xiaole'},{$set:{age:19}})
```

##### 删除集合中的文档

```
db.集合名.remove(查询条件)
```

#### ⑤ 条件控制

文档操作中，会用到条件控制。

##### 运算符

在 mongodb 不能使用 `>` 、`<`、 `>`、 `=`、  `<`、`=`、 `!==` 等运算符，需要使用替代符号：

* `>`   使用 `$gt`
* `<`   使用 `$lt`
* `>=`   使用 `$gte`
* `<=`   使用 `$lte`
* `!==`   使用 `$ne`

##### 逻辑或

`$in` 满足其中一个即可 

```
db.集合名.find({age:{$in:[18,24,26]}}) //  /[aedf]/  
```

`$or` 逻辑或的情况

```js
db.集合名.find({$or:[{age:18},{age:24}]});
```

`$and` 逻辑与的情况

```
db.集合名.find({$and: [{age: {$lt:20}}, {age: {$gt: 15}}]});
```

##### 正则匹配

条件中可以直接使用 JS 的正则语法

```js
db.集合名.find({name:/imissyou/});
```



### 2.2 GUI 可视化工具

* **Studio 3T**	下载地址：https://studio3t.com/download/
* **MongoDB-Compass**  下载地址：https://www.mongodb.com/try/download/compass







## 3 使用 Node 操作数据库 - MongoDB Native Driver

这是 MongoDB 官方提供的驱动，运行在 Node 中的 JavaScript 可以调用该驱动提供的 API 实现对象 MongoDB 的操作，使用前需要安装。

```bash
npm install mongodb
```

>  **注意：** 目前更多使用的是 Mongoose！



## 4 使用 Node 操作数据库 - Mongoose

### 4.1 介绍

Mongoose 是一个对象文档模型（ODM）库，它对 MongoDB Native Driver 模块进行了进一步的优化封装，并提供了更多的功能。 

官网：http://www.mongoosejs.com

中文网：https://mongoosejs.net

**安装  mongoose：**

```bash
npm install mongoose 
```

### 4.2 使用流程

```js
// 1. 引入
const mongoose = require('mongoose');

// 2. 连接 MongoDB 服务
mongoose.connect('mongodb://127.0.0.1/data');
/*
如果启动时遇到警告提醒， 则按照提示增加选项即可
mongoose.connect('mongodb://127.0.0.1/data', {useNewUrlParser: true, useUnifiedTopology: true});
*/


// 3. 监听连接成功
mongoose.connection.on('open', function () {
	
	//下面编写数据库操作代码
  
    // 创建文档结构
    var SongSchema = new mongoose.Schema({
        title: String,  //歌名
        author: String  //歌手
    });
    
    // 创建文档模型
    var SongModel = mongoose.model('songs', SongSchema);
    
    // 使用模型进行文档处理（这里以增加数据为例）
    SongModel.create({title:'野狼disco',author:'宝石gem'}, function(err,data){
        if(err) throw err; //这里判断错误
        
        //下面编写创建成功后的逻辑
        // ... ...
        
        // 关闭数据库连接（可选，代码上线之后一般不加）
        // mongoose.connection.close();
    });
	
});
```

### 4.3 mongoose 基本概念

#### ① Schema 文档结构

mongoose 的一切都始于一个 Schema。每个 Schema 映射到 MongoDB 的集合(collection)和定义该集合(collection)中的文档的形式。 Schema 不仅定义了文档和属性的结构，还定义了文档实例方法、静态模型方法、复合索引和文档被称为中间件的生命周期钩子。

```javascript
const SongSchema = new mongoose.Schema({
    language: String,
    image: String,
    duration: Number,
    hot: Number,
    title: String,
    author: String,
});
```

**Schema 的类型：**

- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array
- Map
- Decimal128（4.3版本后加入）

#### ② Model 文档模型

使用 Schema 定义，我们需要 Schema 转成可以用的模型。一个 Model 对应一个集合，通过 Model 可以对集合中的文档进行增删改查。

```javascript
var Blog = mongoose.model('Blog', blogSchema);
```



### 4.4 增删改查 CURD

数据库的基本操作包括四个，增加（create），删除（delete），修改（update），查（read）

#### ① 增加 Create

插入一条

```js
SongModel.create({
    title:'给我一首歌的时间',
    author: 'Jay'
}, function(err, data){
    //错误
    console.log(err);
    //插入后的数据对象
    console.log(data);
});
```

批量插入

```js
SongModel.insertMany([
    {
        title:'给我一首歌的时间',
        author: 'Jay'
    },
    {
        title:'爱笑的眼睛',
        author: 'JJ Lin',
    },
    {
        title:'缘分一道桥',
        author: 'Leehom Wang'
    }
], function(err, data){
    console.log(err);
    console.log(data);
});
```

#### ② 删除

删除一条数据

```js
SongModel.deleteOne({_id:'5dd65f32be6401035cb5b1ed'}, function(err, data){
    console.log(err);
    console.log(data);
});
```

批量删除

```js
SongModel.deleteMany({author:'Jay'}, function(err, data){
    console.log(err);
    console.log(data);
});
```

#### ③ 更新

更新一条数据

```js
SongModel.updateOne({author: 'JJ Lin'}, {author: '高小乐'}, function (err, data) {
    console.log(err);
    console.log(data);
});
```

批量更新数据

```js
SongModel.updateMany({author: 'Leehom Wang'}, {author: '高小乐'}, function (err, data) {
    console.log(err);
    console.log(data);
});
```

#### ④ 查询

##### 查询一条数据

```js
SongModel.findOne({author: '高小乐'}, function(err, data){
    console.log(err);
    console.log(data);
});
//根据 id 查询数据
SongModel.findById('5dd662b5381fc316b44ce167',function(err, data){
    console.log(err);
    console.log(data);
});
```

##### 批量查询数据

```js
//不加条件查询
SongModel.find(function(err, data){
    console.log(err);
    console.log(data);
});
//加条件查询
SongModel.find({author: '高小乐'}, function(err, data){
    console.log(err);
    console.log(data);
});
```

##### 字段筛选

```js
SongModel.find().select({_id:0,title:1}).exec(function(err,data){
    console.log(data);
});
```

##### 数据排序

```js
SongModel.find().sort({hot:1}).exec(function(err,data){
    console.log(data);
});
```

##### 数据截取

```js
SongModel.find().skip(10).limit(10).exec(function(err,data){
    console.log(data);
});
```







## 5 附录

###  5.1 MongoDB 配置密码

#### 第一步  创建用户

在无需验证状态下，连接 MongoDB 服务，切换到 admin 数据库，创建一个用户并设置权限。

```
use admin
```

```js
// db.createUser({user:"admin",pwd:"password",roles:["root"]})
db.createUser({user:"root",pwd:"123456",roles:["root"]})
```

#### 第二步 启动 MongoDB 服务器时设置验证选项

```bash
mongod --dbpath "C:\Program Files\MongoDB\Server\5.0\data" --auth
```

#### 第三步 连接需要验证的 MongoDB 服务

##### ① 命令行

**方式一：先连接再验证**

```
mongo
```

```
use admin
```

```
db.auth("admin", "password")
```

**方式二： 验证并连接**

```bash
# mongo host:port/admin -u user -p password
mongo 127.0.0.1:27017/admin -u root -p 123456 
```

#### ② mongoose

```js
mongoose.connect('mongodb://admin:password@localhost/prepare?authSource=admin');
```



### 5.2 关系型数据库和非关系型数据库

#### 关系型数据库（RDBS）

**代表：**MySQL、Oracle、DB2、SQL Server...

**特点：**关系紧密，由表组成。

**优点：**

1、易于维护：都是使用表结构，格式一致；

2、使用方便：通用，可用于复杂查询；

3、高级查询：可用于一个表以及多个表之间非常复杂的查询。  

**缺点：**

1、读写性能比较差，尤其是海量数据的高效率读写；

2、有固定的表结构，字段不可随意更改，灵活度稍欠；

3、高并发读写需求，传统关系型数据库来说，硬盘I/O是一个很大的瓶颈。

#### 非关系型数据库（NoSQL   not  only  SQL ）

**代表：**MongoDB、Redis...

**特点：**关系不紧密，有文档或有键值对。

**优点：**

1、格式灵活：存储数据的格式可以是key,value形式。

2、速度快：nosql可以内存作为载体，而关系型数据库只能使用硬盘；

3、易用：nosql数据库部署简单。

**缺点：**

1、不支持事务；

2、复杂查询时语句过于繁琐。

