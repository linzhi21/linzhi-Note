# Day14 Git 课堂笔记

## 回顾

```
1. 版本回退
   git log
   git log --oneline
   git log -n
   
   git reset --hard 版本号
   git reset --hard HEAD^
   
2. 忽略文件 .gitignore
3. 分支
   3.1 创建分支
       git branch 分支名
   3.2 查看分支
       git branch
   3.3 删除分支
       git branch -d 分支名
   3.4 切换分支
       git swtich 分支名
       git switch -c 分支名 
   3.5 合并分支
       git merge
 4. 远程仓库
    4.1 远程无仓库，本地有仓库
    4.2 远程有仓库，本地无仓库
    
 5. 多人协作
    5.1 第一天
    	① 克隆仓库
    	② 修改代码工作，对此添加并提交
    	③ 下班之前 将本地推送到远程仓库
    	  1、 确定应提尽提
    	  2、 git pull
    	  3、 git push
     5.2 以后每一天
        ① git pull
    	② 修改代码工作，对此添加并提交
    	③ 下班之前 将本地推送到远程仓库
    	  1、 确定应提尽提
    	  2、 git pull
    	  3、 git push
 
```





## 1 远程仓库和分支

### 1.1 克隆特定分支

```bash
git clone -b 分支名 仓库地址
```

### 1.2 克隆所有分支，再切换到指定分支

克隆所有的分支

```bash
git clone 仓库地址
```

克隆之后，默认只有主分支，可以通过以下方式切换到其他分支：

```bash
git branch  分支名 origin/远程分支名
```

### 1.3 将其他分支拉取并合并到本分支

```bash
git pull origin 分支名
```

### 1.4 推送其他分支

```bash
git push origin 本地分支名:远程分支名
```





## 2 远程仓库免密登录（非对称加密）

1. 创建非对称加密对

   ```sh
   ssh-keygen -t rsa -C "xxx@xxx.com"
   ```

2. 文件默认存储在家目录（c:/用户/用户名/.ssh）的 .ssh 文件夹中。

   - id_rsa 私钥
   - id_rsa.pub 公钥

3. 将公钥（.pub）文件内容配置到账号的秘钥中

   首页 -> 右上角头像-> settings -> SSH and GPG keys -> new SSH Key

4. 克隆代码时，选择 ssh 模式进行克隆 （地址 在仓库首页 绿色 克隆的位置 选择 use ssh）

   ```shell
   git clone git@github.com/unclealan/team-repo-1.git
   ```

5. 克隆代码时的提醒，这里需要输入 `yes`



## 3 GitFlow - Git 开发流程

![](D:\Library\SH200910\03阶段_PC项目&jQuery&BootStrap\Day16_Git\images\GitFlow.png)



- Master 主分支。上面只保存正式发布的版本
- Hotfix 线上代码 Bug 修复分支。开发完后需要合并回Master和Develop分支。
- Feather 功能分支。当开发某个功能时，创建一个单独的分支，开发完毕后再合并到 dev 分支
- Release 分支。待发布分支，Release分支基于Develop分支创建，在这个Release分支上测试，修改Bug
- Develop 开发分支。开发者都在这个分支上提交代码。

