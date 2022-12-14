# Day11 正则表达式

## 回顾

```
1. let 和 const 关键字
2. 解构赋值
3. 字符串新增特性
4. 数值新增特性
5. 函数新增特性
6. 数组新增特性
7. 对象新增特性
8. class 语法
9. 新增原始 Symbol
10. 新增对象类型 Set、Map、WeakSet、WeakMap
11. 新增的运算符 ** ?. ?? 逻辑赋值运算符
12. 遍历器和可遍历对象
13. 生成器函数
14. ES6 模块
```







## 1 正则表达式概述

```
1. 什么是正则表达式
   正则表达式用于对字符串进行匹配、检索、替换，是对字符串执行模式匹配的强大工具。对字符串进行模式匹配也是正则表达式唯一的作用。

2. 正则表达式的应用
    验证用户名、邮箱、电话号码、邮编等是否正确
    富文本编辑器
    爬虫程序、内容采集器

3. 如何学习正则表达式
   1. 正则表达式的基本语法（独立于编程语言的）
   2. 在 JS 中如何使用正则表达式
   
```



## 2 正则表达式基本语法

### 2.1 原子

#### ① 具体字符匹配

```
一个字母、一个汉字、一个标点符号都是原子
\n			匹配换行符
\t
\v
\f
\r
\uxxxx		使用unicode编码表示一个原子，该原子只能匹配一个字符
```

```
一个原子只能匹配一个字符！
```

#### ② 字符类

```
[a0b]		匹配一个字符，该字符可以是a、0或者b
[^a0b]		匹配一个字符，该字符除了a、0或者b以外谁都可以
[b-w]		匹配一个字符，该字符是b~w中任意一个字母
[^b-w]		匹配一个字符，该字符只要不是b~w中的字母都可以
[a-zA-Z0-9] 匹配一个字符，该字符可以是数字、大小写字母

\w			匹配一个数字、大小写字母、下划线，相当于 [0-9a-zA-Z_]
\W			匹配一个除了数字、大小写字母、下划线以外的字符，相当于 [^0-9a-zA-Z_]
\d			匹配一个数字，相当于 [0-9]
\D			匹配一个除了数字以外的字符，相当于 [^0-9]
\s			匹配一个空白字符，相当于 [\n\r\t\f\v ]
\S			匹配一个除了空白字符以外的字符，相当于 [^\n\r\t\f\v ]
.			匹配一个除了换行之外的任意字符， 相当于 [^\n]
```

```
字符串类仍然是一个原子，仍然只匹配一个字符，只是能匹配到的字符范围较广。
```

#### ③ 匹配正则表达式中具有特殊意义的符号

如要要匹配的字符是正则中具有特殊意义的符号，比如 `.`、`\`、`^` 等，可以使用反斜杠进行转义，转义之后就失去了特殊意义，就是一个普通的符号； 比如 `/\./` 可以匹配到字符串`.`

### 2.2 数量修饰符

```
{n}			前面的原子连续出现n次
{n,m}		前面的原子连续出现n到m次
{n,}		前面的原子连续出现n次以及以上

?			前面的原子连续出现0次或1次    {0,1}
+			前面的原子连续出现1次或多次    {1,}
*			前面的原子连续出现0次1次或多次  {0,}
```

```
1. 数量修饰写在原子的后面，只对前面的一个原子进行修饰
2. 默认数量修饰的时候，会尽可能多的匹配，称为贪婪匹配； 可以在数量修饰符的后面添加 ? 阻止贪婪匹配
```

```JS
'helloworld'.match(/\w{4,8}/);  // 匹配到 'hellowor'
'helloworld'.match(/\w{4,8}?/); // 匹配到 'hell'

'helloworld'.match(/\w?/);		// 匹配到 'h'
'helloworld'.match(/\w??/);     // 匹配到 ''
```

### 2.3 位置修饰符

```
\b			表示单次边界（空格、标点、字符串起始结束都可以作为单次边界）
\B			表示非单词边界
^			表示字符串起始
$			表示字符串结束
\A			等同于 ^
\Z			等同于 $
```

```
位置修饰符仅仅是用于对原子进行修饰，本身不参与匹配！
```

### 2.4 选择修饰符

`|` 选择修饰符类似于 JS 中的逻辑或，在所有正则表达式的修饰符中优先级最低

```js
/a|b/			// 匹配 a 或者 b
/abc|def/		// 匹配 abc 或者 def；  字符串的结合优先级高度选择修饰符
```

### 2.5 模式单元

正则表达式中，小括号中的部分构成一个模式单元。

**模式单元的作用：**

```
1. 提高优先级
2. 将多个原子视为一个整体
3. 暂存内容，模式单元中的内容会单独匹配出来
   如果不想暂存内容，可以写?:取消暂存内容， 如 (?:hello)
4. 反向引用，用于替换操作。 使用 $1可以引用第一个模式单元匹配的内容，$2引用第二模式单元匹配的内容...
```

### 2.6 断言

```
(?=pattern)		正向先行断言。 
                /java(?=script)/ 匹配java，要求后面是script，script不参与匹配。
                
(?!pattern)		负向先行断言
                /java(?!script)/ 匹配java，要求后面不能是script，script不参与匹配。
                
(?<=pattern)    正向后行断言
                /(?<=java)script/ 匹配的是script，要求前面是java，java不参与匹配。
                
(?<!pattern)    负向后行断言
                /(?<!java)script/ 匹配的是script，要求前面不能是java，java不参与匹配。
```

### 2.7 模式修饰符

模式修饰符用于修饰整个正则表达式，模式修饰符写在 `/` 的后面，如 `/pattern/模式修饰符`

```
g		全局匹配
i		不区分大小写
m		多行模式，在该模式下，换行可以作为字符串边界
```





## 3 JavaScript 中使用正则表达式

### 3.1 RegExp 对象

```
test()		参数是字符串，如果可以匹配返回true，无法匹配返回false
exec()		参数是字符串，如果成功匹配，返回数组（数组中包含匹配到的内容），如果无法匹配返回 null
```

### 3.2 String 对象

```
match()	   参数是正则，如果成功匹配，返回数组（数组中包含匹配到的内容），如果无法匹配返回 null
replace()		第一个参数可以是正则，返回结果是替换好的字符串
replaceAll()	第一个参数可是是正则（必须设置g模式）
search()		参数是正则，返回第一个匹配到的内容的位置，如果无法匹配返回 -1
split()			将字符串切割为数组，参数是指定的分隔符，可以用正则表示
```







## 作业

```
1. 表单验证、
2. 银行卡好输入
```





