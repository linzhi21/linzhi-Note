# Day12 Git 课堂笔记

## 1 Git 介绍

Git 是一款开源免费的分布式的**版本控制系统**。是 Linux 之父 Linus Torvalds（林纳斯·托瓦兹）为了方便管理 linux 代码代码而开发的。

Git 可以实现的功能：

* 代码备份
* 版本回退
* 多人协作
* 权限控制

Git 工具下载地址：https://git-scm.com/

GIt 官方文档地址：https://git-scm.com/book/zh/v2



## 2 Git 准备工作

### 2.1 常用 Linux 操作

#### ① 常用 Linux 命令

```
ls 		将当前目录下所有的文件或子目录列举	选项 a:包括隐藏文件， l:详细信息
		ls
		ls -a
		ls -l
		ls -al

cd 		进入到指定的目录
		cd  目录的路径（相对路径绝对路径）
		cd ..	进入上一级目录


rm 		删除指定的文件或目录
		rm -rf 目录名或文件名
		
clear 	清除当前命令行
```

#### ② 常用快捷键

```
tab				自动补全路径
ctrl + L		清除当前命令行
ctrl + C		终止当前命令
键盘上下方向键	    调取历史命令
```

### 2.2 Vim 的使用

vim 是一个代码编辑软件，可以对文件进行创建、编辑。

使用 vim 命令打开文件：

```bash
vim 文件名
```

如果要打开的文件是不存在，会自动创建文件。

![三种模式](images/vim工作模式.png)

#### ① 命令模式

使用 vim 打开文件之后，最先进入的就是命令模式，命令模式下无法编辑文件的，只能输入命令。

```bash
i	# 进入输入模式
```

#### ② 输入模式

只有在输入模式下才能对文件进行编辑。

在命令模式下输入 i 命令即可进入输入模式。

在输入模式下按 `ESC` 键可以再次回到命令模式。

#### ③ 底线命令模式

在模式下按 : 可以进入底线命令

``` bash
:w		# 保存并退出底线命令， :w! 表示强制保存。
:q		# 退出 vim          :q! 表示强制退出
:wq     # 保存并退出 vim，  :wq! 表示强制保存并退出
```



## 3 Git 基础概念

### 3.1 `.git` 目录 仓库目录

- hooks 目录包含客户端或服务端的钩子脚本，在特定操作下自动执行。
- info 包含一个全局性排除文件，可以配置文件忽略。
- logs 保存日志信息。
- objects 目录存储所有数据内容,本地的版本库存放位置。
- refs 目录存储指向数据的提交对象的指针（分支）。
- config 文件包含项目特有的配置选项。
- description 用来显示对仓库的描述信息。
- HEAD 文件指示目前被检出的分支。
- index 暂存区数据。

> **切记：** 不要手动去修改 .git 文件夹中的内容。

### 3.2 Git 仓库的三个区域

![git三个区域](images/版本仓库.png)

**工作区：** 代码编辑区，编辑代码的地方。

**暂存区：** 修改待提交区。

**版本库：** 真正存储代码的地方。



## 4 Git 基础命令总结

### 4.1 初始化配置

```bash
# --global 表示对所有用户都生效
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

初始化配置只在git安装之后进行一次即可！

### 4.2 仓库初始化

```bash
git init
```

每次创建新的项目，都要进行仓库初始化；每个新项目初始化一次就可以了。

### 4.3 添加暂存区

```bash
git add <file>    # 添加指定文件到暂存区
git add -u        # 添加所有被删除或被修改的文件到暂存区（不包括新增文件）
git add .         # 添加所有修改和新建的文件到暂存区（不包括删除的文件）
git add -A        # 添加所有被删除、被替换、被修改和新增的文件到暂存区，推荐使用！
```

### 4.4 提交版本库

```bash
git commit -m "提交日志"         # 把暂存区的东西提交到版本库
git commit -am "提交日志"        # 把工作区的修改一步到位添加暂存并提交到版本库
```

### 4.5  查看状态和变化

```bash
git status;
```

该命令会对工作区和版本库进行比较； 也会对暂存区与版本库进行比较。

如果 `git status` 命令的输出对于你来说过于简略，而你想知道具体修改了什么地方，可以用 `git diff` 命令。

```bash
git diff             # 查看当前工作区和版本库的差异 （不包括新增的文件）
git diff --cached    # 查看暂存区中的变化
```

### 4.6 撤销修改和撤销暂存

#### ① 工作区的修改没有添加暂存

```bash
git restore <文件名>    # 恢复工作区指定文件
git restore .          # 恢复工作区所有的修改（恢复之后，新增的文件不会被删除）
```

> 会使用版本库当前最前的版本进行恢复！

**注意：**

```bash
git checkout -- <file> # 同 git restore <file> 作用一致
git checkout -- .      # 同 git restore . 作用一致
```

#### ② 工作区的修改已经添加到暂存

如果工作区的修改已经添加到暂存区，先清除暂存区，再恢复工作区。

```bash
git restore --staged <文件名>        # 把指定文件从暂存区移除
git restore --staged .              # 把所有文件从暂存区移除
```



## 作业

```
1. 注册个 github账号  https://github.com/
2. 注册个 码云 https://gitee.com/
```









### 4.7 历史版本回滚

#### ① 查看历史版本号

#### ② 通过指定版本号回滚

#### ③ 快捷回滚







