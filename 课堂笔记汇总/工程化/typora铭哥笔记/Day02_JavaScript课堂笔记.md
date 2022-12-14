# Day02 JavaScript 课堂笔记

## 1 回顾

```
1. JS 在HTML中的使用方式
   ① 行内式   结合JS的事件
   ② 内嵌式   script 标签
   ③ 外链式   script 标签 src 属性

2. JS 的基本语法
   2.1 JS 的注释
   2.2 语法特点
       ① 指令结束符  换行或者分号
       ② 严格区分大小写
   2.3 输出内容
       alert()
       document.write()
       console.log()

3. JS 变量
   3.1 数据、直接量、变量
   3.2 变量的意义
   3.3 变量的语法
   3.4 变量名命名规范

4. JS 数据类型
   4.1 数据类型划分： 对象类型、原始类型
   4.2 数据类型的判断 typeof()
   4.3 number 类型
       ① 整型
       ② 浮点型
       ③ 科学计算法表示
       ④ NaN / isNaN()
       ③ 数字的有效范围 Infinity -Infinity  isFinite()
   4.4 string 类型
       ① 单引号和双引号
       ② 转义字体  \n \\ \' \"
   4.3 boolean 类型
   4.4 null 和 undefined
```





## 2 数据类型转换

### 2.1 数据类型转换的规则

#### ① 其他类型转为 number 类型

**string 转为 number：**

```
1. 纯数字字符串转为对应的数字，注意，十六进制的形式和科学计数法的形式，虽有字母但也是纯数字
2. 空字符串转为 0
3. 其他字符串转为 NaN
```

> **注意：** 字符串再转number之前会自动去掉两端的空格，剩下的部分按照规则转为对应的number

**boolean 转为 number：**

```
true -> 1
false -> 0
```

**undefined 转为 number：**

```
NaN
```

**null 转为 number：**

```
0
```

#### ② 其他类型转为 string 类型

```
其他类型的数据表示形式什么样就转为什么样的字符串
```

```
100.23 -> '100.23'
true -> 'true'
```

#### ③ 其他类型转为 boolean 类型

**number -> boolean：**

```
1. 0 -> false
2. NaN -> false
3. 其他都转为 true
```

**string -> boolean：**

```
1. 空字符串 -> false
2. 其他都转为 true
```

**undefined -> boolean：**

```
false
```

**null -> boolean：**

```
false
```

### 2.2 强制类型转换（显示转换）

#### ① 强制把其他类型转为 number 类型的函数

```
Number()
parseInt()			
parseFloat()	
```

**parseInt()、parseFloat() 与 Number() 的区别：**

```
1. parseInt() parseFloat() 的本义是从字符串中提取数字部分
2. 纯数字字符串、以数字开头的字符串可以转为有效数字
3. 空字符串会转为 NaN， 但是仍然会自动去掉两端的空格
4. 布尔、未定义、空 都转为 NaN
```

**parseFloat() 和 parseInt 的区别：**

```
1. parseFloat() 保留完整的数字（整数部分+小数部分）
2. parseInt（）  只保留整数部分
```

#### ② 强制把其他类型转为 string 类型的函数

```
String()
```

#### ③ 强制把其他类型转为 boolean 类型的函数

```
Boolean()
```

### 2.3 自动类型转换（隐式转换）

```
1. JS 作为弱类型的编程语言，支持自动类型转换
2. 自动类型转换的规则与强制类型转换的规则一致
3. 在进行某种运算的时候，如果数据类型与运算对数据类型的要求不一致，会自动类型转换
4. 运算符决定运算中所需要的数据类型
```





## 3 运算符

### 3.1 运算符和表达式

#### ① 运算符

```
1. 进行运算的符号就是运算符，如 + - * / 等等
2. 与运算符一起运算的数据（变量、直接量、表达式）称为该运算符的操作数
```

#### ② 表达式

```
1. 由数据与运算符可以共同组成一个表达式，表达式有一个计算结果，称为表达式的值 （有值的才能称为表达式）
2. 一个直接量、一个变量是最简单的表达式，称为原始表达式
3. 多个简单的表达式可以功能组成一个复杂的表达式
4. 有些表达式具有副作用，表达式运算过程中，会修改参与运算的数据； 表达式中的运算符决定副作用。
```

### 3.2 运算符的分类

#### ① 按照运算符需要的操作数的个数

```
一元运算符 一目运算符
二元运算符 二目运算符
三元运算符 三目运算符
```

#### ② 按照运算符的功能

```
1. 算术运算符
2. 关系运算符（比较运算符）
3. 逻辑运算符
4. 位运算符
5. 赋值运算符
6. 其他运算符
```

### 3.3 运算符讲解（按照功能）

#### ① 算术运算符

| 运算符 | 含义 | 操作数个数 | 操作数的类型要求 | 组成的表达式的值的类型 | 有无副作用 |
| ------ | ---- | ---------- | ---------------- | ---------------------- | ---------- |
| +      | 加   | 2          | number           | number                 | 无         |
| -      | 减   | 2          | number           | number                 | 无         |
| *      | 乘   | 2          | number           | number                 | 无         |
| /      | 除   | 2          | number           | number                 | 无         |
| %      | 取余 | 2          | number           | number                 | 无         |
| +      | 正号 | 1          | number           | number                 | 无         |
| -      | 负号 | 1          | number           | number                 | 无         |
| ++     | 递加 | 1          | number           | number                 | 有         |
| --     | 递减 | 1          | number           | number                 | 有         |

**`+` 什么时候是正号？什么时候是加号？**

```
1. 如果作为一元运算符，就是正号
2. 如果作为二元运算符，就是加号或者字符串连接符
```

**递加递减： 运算符在前和在后的区别：**

```
1. 运算符在前，表达式取操作数递加或递减之后的值作为表达式的值
2. 运算符在后，表达式取操作数递加或递减之前的值作为表达式的值
```

```
相同点： 运算符不论在前还是在后，对操作数的副作用是一样！
```

#### ② 关系运算符（比较运算符）

| 运算符 | 含义     | 操作数个数 | 操作数的类型要求                                             | 组成的表达式的值的类型 | 有无副作用 |
| ------ | -------- | ---------- | ------------------------------------------------------------ | ---------------------- | ---------- |
| >      | 大于     | 2          | 操作数类型不一致转为number<br>操作数都是字符串，按照字符串的比较规则。 | boolean                | 无         |
| >=     | 大于等于 | 2          | 操作数类型不一致转为number<br/>操作数都是字符串，按照字符串的比较规则。 | boolean                | 无         |
| <      | 小于     | 2          | 操作数类型不一致转为number<br/>操作数都是字符串，按照字符串的比较规则。 | boolean                | 无         |
| <=     | 小于等于 | 2          | 操作数类型不一致转为number<br/>操作数都是字符串，按照字符串的比较规则。 | boolean                | 无         |
| ==     | 相等     | 2          | 操作数类型一致就直接比较是否相同。<br>操作数类型不一致，转为number进行比较 | boolean                | 无         |
| !=     | 不相等   | 2          | 操作数类型一致就直接比较是否相同。<br/>操作数类型不一致，转为number进行比较 | boolean                | 无         |
| ===    | 全等     | 2          | 无要求                                                       | boolean                | 无         |
| !==    | 不全等   | 2          | 无要求                                                       | boolean                | 无         |

**字符串比较大小的规则：**

```
1. 字符串按照字符对应的unicode编码进行比较
2. 字符串之间比较大小，逐个字符比较。 如果第一位字符大，整个字符串都大
```

**null 与其他数据判断相等和不相等（特殊）：**

```js
null == false;   	// false
null == '';		 	// false
null == 0;		 	// false
null == undefiend;	// true
```

**全等判断和相等判断的区别：**

```
1. 相等判断
   如果两个操作数类型不一致转为number再进行比较
   
2. 全等判断
   如果两个操作数类型不一致直接判定为不全等
   只有数据类型相同的两个数据才有资格进行全等判断。
```

#### ③ 逻辑运算符

| 运算符 | 含义   | 操作数个数 | 操作数的类型要求 | 组成的表达式的值的类型         | 有无副作用 |
| ------ | ------ | ---------- | ---------------- | ------------------------------ | ---------- |
| &&     | 逻辑与 | 2          | boolean          | 取其中一个操作数作为表达式的值 | 无         |
| \|\|   | 逻辑或 | 2          | boolean          | 取其中一个操作数作为表达式的值 | 无         |
| !      | 逻辑非 | 1          | boolean          | boolean                        | 无         |

**逻辑与运算符组成的表达式的值：**

```
1. 如果第一个操作数成立，取第二个操作数作为整个表达式的值。
2. 如果第一个操作数不成立，取第一个操作数作为整个表达式的值，第二个操作不会被执行到。
```

**逻辑或运算符组成的表达式的值：**

```
1. 如果第一个操作数成立，取第一个操作数作为整个表达式的值，第二个操作数不会被执行到。
2. 如果第一个操作数不成立，取第二个操作数作为整个表达式的值。
```







#### ④ 赋值运算符

| 运算符 | 含义 | 操作数个数 | 操作数的类型要求 | 组成的表达式的值的类型 | 有无副作用 |
| ------ | ---- | ---------- | ---------------- | ---------------------- | ---------- |
|        |      |            |                  |                        |            |
|        |      |            |                  |                        |            |
|        |      |            |                  |                        |            |
|        |      |            |                  |                        |            |
|        |      |            |                  |                        |            |
|        |      |            |                  |                        |            |
|        |      |            |                  |                        |            |

#### ⑤ 其他运算符

| 运算符 | 含义 | 操作数个数 | 操作数的类型要求 | 组成的表达式的值的类型 | 有无副作用 |
| ------ | ---- | ---------- | ---------------- | ---------------------- | ---------- |
|        |      |            |                  |                        |            |
|        |      |            |                  |                        |            |
|        |      |            |                  |                        |            |
|        |      |            |                  |                        |            |

**+ 什么时候是 加号、字符串连接符或者正号？**

**条件运算符组成的表达式的取值规则：**





## 作业

1. 写出输出结果

```js
var n = 100;
console.log(n ++ && n --);
console.log(n);
console.log(-- n || n ++);
console.log(n);  
```

 

