# 1- 预览项目

* atguigu.zpi解压缩

* 进入到该项目目录

* 安装依赖

  ```shell
  yarn
  ```

* 启动项目

  ```shell
  npm start
  yarn start
  cnpm start
  ```

* 更改hosts文件:C:\Windows\System32\drivers\etc\hosts

  ```shell
  127.0.0.1 atguigu.com
  127.0.0.1 zhangpeiyue.com
  127.0.0.1 lisii.com
  127.0.0.1 api.zhangpeiyue.com
  127.0.0.1 zhangsan.com
  ```

* 输入账号密码

  ```shell
  账号：admin
  密码：111111
  ```

* 淘宝镜像设置

  * 检查

    ```shell
    npm config get registry
    ```

    

  * 设置

    ```shell
    npm config set registry https://registry.npm.taobao.org
    ```

* 安装yarn

  ```shell
  cnpm install yarn -g
  ```

  

# 2- 创建基于TS的脚手架项目

* 命令: 创建一个名字为first有基于TS语言的脚手架项目

  ```shell
  npx create-react-app first --template typescript
  ```

>  注意： 1- 不要在创建项目的目录中出现中文。
>
> 注意：  2-` VSCODE`当中只允许出现你的项目。

# 3- 设置网站标题以及站标

* 将public中除index.html以外全部删除

* public->index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
  
      <title>尚医通后台管理系统</title>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
    </body>
  </html>
  
  ```

* 将站标图片放置到public目录中即可

# 4- 在脚手架中使用函数组件

> 在项目中的ts文件中一旦出现JSX语法，必须要将扩展名设置为.tsx

* src目录内容清空

* src->index.tsx

  ```tsx
  // 以.tsx结尾的文件会用到ts,以及jsx语法
  // 以.ts结尾的文件会用到ts语法
  // react是可以帮助程序员构建用户界面的JAVASCRIPT
  import React from "react";
  import ReactDOM from "react-dom/client";
  import App from "./App";
  // 1- 指定挂载的位置
  const root = ReactDOM.createRoot(document.querySelector("#root") as Element);
  
  // 2:指定挂载的内容:
  // 2-1:在当前文件中创建函数组件
  // function App (){
  //     return (
  //         <div>App</div>
  //     )
  // }
  
  // 2-2:将函数组件赋值给常量
  // const App = ()=> (
  //     <div>App2</div>
  // )
  
  // 2-3:属性的类型  typescript--->anyscript
  // function App(props:any){
  //     return (
  //         <div>
  //             <p>userName:{props.userName}</p>
  //             <p>age:{props.age}</p>
  //         </div>
  //     )
  // }
  
  // 2-4:指定类型->interface
  // interface IProps {
  //     userName:string,
  //     age:number
  // }
  // function App(props:IProps){
  //     return (
  //         <div>
  //             <p>userName:{props.userName}</p>
  //             <p>age:{props.age}</p>
  //         </div>
  //     )
  // }
  
  // 2-5:指定类型->type
  // const userName:string = "zhangsan";
  // const info:string | number = "12";
  // const a:string | number = 12;
  // type TOne  = string | number;
  // const b:TOne = "A";
  // const c:TOne = 12;
  
  // interface IPerson {
  //     userName:string
  // }
  // interface IBox extends IPerson{
  //     age:number
  // }
  // const a:IBox = {
  //     age:12,
  //     userName:"zhangSan"
  // }
  
  // type TPerson = {
  //     age:number
  // }
  // type TBox = {
  //     userName:string
  // } & TPerson;
  // const a :TBox = {
  //     userName:"lisi",
  //     age:12
  // }
  
  // interface IOne  {
  //     userName:string
  // }
  // interface IOne {
  //     age:number
  // }
  // const a : IOne = {
  //     userName:"zhangsan",
  //     age:12
  // }
  
  
  // type TProps = {
  //     userName:string,
  //     age:number
  // }
  // function App(props:TProps){
  //     return (
  //         <div>
  //             <p>userName:{props.userName}</p>
  //             <p>age:{props.age}</p>
  //         </div>
  //     )
  // }
  
  
  // 2-6:约束类型1
  // type TProps = {
  //     userName:string,
  //     age:number
  // }
  // const App:React.FC<TProps> = props => (
  //     <div>
  //         <p>userName:{props.userName}</p>
  //         <p>age:{props.age}</p>
  //     </div>
  // )
  
  // 2-7 约束 类型
  // const App:React.FC<{userName:string,age:number}> = props => (
  //     <div>
  //         <p>userName:{props.userName}</p>
  //         <p>age:{props.age}</p>
  //     </div>
  // )
  
  // 2-8 将组件定义在外部
  
  
  // 3- 将App呈现到界面中
  root.render(<App userName={"lisi"} age={12}/>);
  
  ```

* src->App.tsx

  ```tsx
  import React from 'react';
  
  function App(props:{userName:string,age:number}) {
      return (
          <div>
              <p>userName:{props.userName}</p>
              <p>age:{props.age}</p>
          </div>
      );
  }
  
  export default App;
  ```

# 5- 二次配置--配置服务

* 下载依赖的第三方模块@craco/craco

  ```shell
  cnpm install @craco/craco
  ```

* 修改pageage.json

  ```json
  /* package.json */
  
  "scripts": {
  -   "start": "react-scripts start",
  +   "start": "craco start",
  -   "build": "react-scripts build",
  +   "build": "craco build"
  -   "test": "react-scripts test",
  +   "test": "craco test"
  }
  ```

  

* 项目根目录中创建一个名字为 `craco.config.js`的文件

  ```tsx
  // 可以在该文件中对webpack进行二次配置。
  module.exports = {
      devServer:{
          port:80,// 将默认3000端口号设置为80
          host:"zhangpeiyue.com",// 将localhost--->zhangpeiyue.com 指定主机名 ip  域名
      }
  }
  ```

* 重启项目

  ```shell
  yarn start
  ```

# 6- 二次配置--配置别名

* 项目根目录->craco.config.js

  ```js
  // 可以在该文件中对webpack进行二次配置。
  const path = require("path");
  module.exports = {
      webpack:{
          // 1-别名处理：属性名即是别名：值是别名对应的目录
          alias:{
              "@":path.resolve(__dirname,"./src")
          }
      },
      devServer:{
          port:80,// 将默认3000端口号设置为80
          host:"zhangpeiyue.com",// 将localhost--->zhangpeiyue.com 指定主机名 ip  域名
      }
  }
  ```

* 方案一：项目根目录->tsconfig.json

  ```json
  {
    "compilerOptions": {
      "target": "es5",
      "paths": {
        "@/*":["./src/*"]
      },
      "lib": [
        "dom",
        "dom.iterable",
        "esnext"
      ],
      "allowJs": true,
      "skipLibCheck": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "noFallthroughCasesInSwitch": true,
      "module": "esnext",
      "moduleResolution": "node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx"
    },
    "include": [
      "src"
    ]
  }
  
  ```

* 方案二

  * 项目根目录中创建一个名字为`path.tsconfig.json`

    ```json
    {
        "compilerOptions": {
            "paths": {
                "@/*":["./src/*"]
            }
        }
    }
    ```

  *  项目根目录中的tsconfig.json

    ```json
    {
      "extends": "./path.tsconfig.json",
      "compilerOptions": {
        "target": "es5",
        "lib": [
          "dom",
          "dom.iterable",
          "esnext"
        ],
        "allowJs": true,
        "skipLibCheck": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noFallthroughCasesInSwitch": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx"
      },
      "include": [
        "src"
      ]
    }
    
    ```

# 7- antd 配置

* antd国内镜像地址：https://ant-design.gitee.io/index-cn

* 安装antd

  ```shell
  yarn add antd
  ```

* src->App.css

  ```css
  @import '~antd/dist/antd.css';
  ```

* `src->App.tsx`

  ```tsx
  import React from 'react';
  import {Button} from "antd";
  import "./App.css"
  
  function App() {
      return (
          <>
              <Button type="primary">Primary Button</Button>
              <Button>Default Button</Button>
              <Button type="dashed">Dashed Button</Button>
              <br />
              <Button type="text">Text Button</Button>
              <Button type="link">Link Button</Button>
          </>
      );
  }
  
  export default App;
  ```

# 8- antd高级配置

* 下载插件

  ```shell
  yarn add craco-antd
  ```

* craco.config.js

  ```js
  // 可以在该文件中对webpack进行二次配置。
  const path = require("path");
  // 1- 引入插件
  const CracoAntDesignPlugin = require('craco-antd');
  module.exports = {
      // 2- 配置插件
      plugins: [
          {
              plugin: CracoAntDesignPlugin,
              options: {
                  customizeTheme: {
                      '@primary-color': '#1DA57A',
                  },
              },
          },
      ],
      webpack:{
          // 别名处理：属性名即是别名：值是别名对应的目录
          alias:{
              "@":path.resolve(__dirname,"./src")
          }
      },
      devServer:{
          port:80,// 将默认3000端口号设置为80
          host:"zhangpeiyue.com",// 将localhost--->zhangpeiyue.com 指定主机名 ip  域名
      }
  }
  ```

  

# 9- 路由基本配置

* 下载路由插件库

  ```shell
  cnpm install react-router-dom
  ```

* 创建界面组件

  * 登陆界面：`src->pages->Login->index.tsx`

    ```tsx
    import React from 'react';
    
    function Login() {
        return (
            <div>登陆界面</div>
        );
    }
    
    export default Login;
    ```

    

  * 主页：src->pages->Index->index.tsx

    ```tsx
    import React from 'react';
    
    function Index() {
        return (
            <div>
                首页
            </div>
        );
    }
    
    export default Index;
    ```

  * 404界面：src->pages->NotFound->index.tsx

    ```tsx
    import { Button, Result } from 'antd';
    import React from 'react';
    import {useNavigate} from "react-router-dom";
    
    const NotFound = () => {
        const navigate = useNavigate();
        return (
            <Result
                status="404"
                title="404"
                subTitle="对不起，您找的页面不存在！"
                extra={<Button type="primary" onClick={()=>navigate("/")}>返回首页</Button>}
            />
        )
    };
    
    export default NotFound;
    ```

    

* 指定路由模式：`src->index.tsx`

  ```tsx
  import React from "react";
  import ReactDOM from "react-dom/client";
  import {
      BrowserRouter as Router,// 指定路由模式为history
  } from "react-router-dom";
  import App from "@/App";
  // 1- 指定挂载的位置
  const root = ReactDOM.createRoot(document.querySelector("#root") as Element);
  
  // 2- 将App呈现到界面中
  root.render((
      <Router>
          <App/>
      </Router>
  ));
  
  ```

* 配置路由：`src->App.tsx`

  ```tsx
  import React from 'react';
  import {Button} from "antd";
  import {
      Routes,
      Route
  } from "react-router-dom";
  import Index from "@/pages/Index";
  import Login from "@/pages/Login";
  import NotFound from "@/pages/NotFound";
  
  function App() {
      return (
          <Routes>
              <Route path={"/"} element={<Index/>}></Route>
              <Route path={"/login"} element={<Login/>}></Route>
              <Route path={"*"} element={<NotFound/>}></Route>
  
          </Routes>
      );
  }
  
  export default App;
  ```

# 10- 使用useRoutes

* src->App.tsx

  ```tsx
  import React from 'react';
  import {Button} from "antd";
  import {
      Routes,
      Route, useRoutes
  } from "react-router-dom";
  import Index from "@/pages/Index";
  import Login from "@/pages/Login";
  import NotFound from "@/pages/NotFound";
  
  function App() {
      const renderRouter = useRoutes([
          {
              path:"/",
              element:<Index/>
          },{
              path:"/login",
              element:<Login/>
          },{
              path:"*",
              element:<NotFound/>
          }
      ])
      return renderRouter;
  }
  
  export default App;
  ```

# 11- 路由配置抽离

* src->routes->index.tsx

  ```tsx
  import React from "react";
  import {useRoutes} from "react-router-dom";
  import Index from "@/pages/Index";
  import Login from "@/pages/Login";
  import NotFound from "@/pages/NotFound";
  
  // 1- 自定义hook函数
  // export default function useRenderRouter  (){
  //     return useRoutes([
  //         {
  //             path:"/",
  //             element:<Index/>
  //         },{
  //             path:"/login",
  //             element:<Login/>
  //         },{
  //             path:"*",
  //             element:<NotFound/>
  //         }
  //     ])
  // }
  
  // 2- 将hooks放置到匿名函数中导出
  export default function (){
      return useRoutes([
          {
              path:"/",
              element:<Index/>
          },{
              path:"/login",
              element:<Login/>
          },{
              path:"*",
              element:<NotFound/>
          }
      ])
  }
  
  ```

* src->App.tsx

  ```tsx
  import React from 'react';
  import useRenderRouter from "./routes";
  export default ()=> useRenderRouter();
  ```

# 12- 路由懒加载

* src->routes->index.tsx

  ```tsx
  import React,{
      lazy,
      Suspense
  } from "react";
  import {useRoutes} from "react-router-dom";
  const Index = lazy(()=>import("@/pages/Index"));
  const Login = lazy(()=>import("@/pages/Login"));
  const NotFound = lazy(()=>import("@/pages/NotFound"));
  
  export default function (){
      return useRoutes([
          {
              path:"/",
              element:(
                  <Suspense fallback={<h3>加载中……</h3>}>
                      <Index/>
                  </Suspense>
              )
          },{
              path:"/login",
              element:(
                  <Suspense fallback={<h3>加载中……</h3>}>
                      <Login/>
                  </Suspense>
              )
          },{
              path:"*",
              element:(
                  <Suspense fallback={<h3>加载中……</h3>}>
                      <NotFound/>
                  </Suspense>
              )
          }
      ])
  }
  
  ```

  





# 13- 路由懒加载优化一

> 将路由指定的元素进行封装

* src->routes->index.tsx

  ```tsx
  import React, {
      lazy,
      Suspense
  } from "react";
  import {useRoutes} from "react-router-dom";
  
  const lazyLoading = (comPath:string) => {
      const Com = lazy(()=>import("@/pages/"+comPath))
      return (
          <Suspense fallback={<h3>加载中……</h3>}>
              <Com/>
          </Suspense>
      )
  }
  export default function () {
      return useRoutes([
          {
              path: "/",
              element: lazyLoading("Index")
          }, {
              path: "/login",
              element:lazyLoading("Login")
          }, {
              path: "*",
              element:lazyLoading("NotFound")
          }
      ])
  }
  
  ```

* 将以上的方法抽离至utils->index.tsx中

  * src->utils->index.tsx

    ```tsx
    import React, {lazy, Suspense} from "react";
    
    export const lazyLoading = (comPath:string) => {
        const Com = lazy(()=>import("@/pages/"+comPath))
        return (
            <Suspense fallback={<h3>加载中……</h3>}>
                <Com/>
            </Suspense>
        )
    }
    ```

  * src->routes->index.tsx

    ```tsx
    import React, {
        lazy,
        Suspense
    } from "react";
    import {useRoutes} from "react-router-dom";
    import {lazyLoading} from "@/utils";
    
    export default function () {
        return useRoutes([
            {
                path: "/",
                element: lazyLoading("Index")
            }, {
                path: "/login",
                element: lazyLoading("Login")
            }, {
                path: "*",
                element: lazyLoading("NotFound")
            }
        ])
    }
    
    ```

    

# 14- 懒加载优化二

>  加载中抽离为一个组件

* src->App.less

  ```less
  #root{
      height:100%;
  }
  ```

* src->App.tsx

  ```tsx
  import React from 'react';
  import useRenderRouter from "./routes";
  // 引入样式
  import "./App.less";
  
  export default ()=> useRenderRouter();
  ```

* src->components->Loading->index.less

  ```less
  .example {
      //margin: 20px 0;
      height:100%;
      margin-bottom: 20px;
      padding: 30px 50px;
      text-align: center;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
  }
  ```

  

* src->components->Loading->index.tsx

  ```tsx
  import React from 'react';
  import {Spin} from "antd";
  import "./index.less"
  function Index() {
      return (
          <div className="example">
              <Spin />
          </div>
      );
  }
  
  export default Index;
  ```

* src->utils->index.tsx

  ```tsx
  import React, {lazy, Suspense} from "react";
  import Loading from "@/components/Loading";
  export const lazyLoading = (comPath:string) => {
      const Com = lazy(()=>import("@/pages/"+comPath))
      return (
          <Suspense fallback={<Loading/>}>
              <Com/>
          </Suspense>
      )
  }
  ```

  



# 15- 路由拦截器

* 增加拦截未优化:不够灵活，无重用性。

  * src->pages->Index->index.tsx

    ```tsx
    import React from 'react';
    import {Navigate} from "react-router-dom";
    
    function Index() {
        // 增加一个拦截器，当用户未登陆（token为null）,跳转至登陆界面
        if (localStorage.getItem("token"))
            return (
                <div>
                    首页
                </div>
            );
        else
            return (
                <Navigate to={"/login"}></Navigate>
            )
    }
    
    export default Index;
    ```

* 自定义组件完成拦截功能

  * src->components->AuthComponent->index.tsx

    ```tsx
    import React,{ReactElement,FC} from 'react';
    import {
        Navigate
    } from "react-router-dom";
    
    // 1
    // function Index(props:any) {
        // if(localStorage.getItem("token")){
        //     return props.children;
        // }
        // return (
        //     <Navigate to={"/login"}></Navigate>
        // )
    
        // 以上代码优化
        // return localStorage.getItem("token")?props.children:<Navigate to={"/login"}></Navigate>
    // }
    
    // 2
    // const Index = (props:any)=>localStorage.getItem("token")?props.children:<Navigate to={"/login"}></Navigate>;
    
    
    // 3
    // type TProps = {
    //     children:React.ReactElement
    // }
    // const Index = (props:TProps)=>localStorage.getItem("token")?props.children:<Navigate to={"/login"}></Navigate>;
    
    
    // 4
    // type TProps = {
    //     children:React.ReactElement
    // }
    // const Index:React.FC<TProps> = (props)=>localStorage.getItem("token")?props.children:<Navigate to={"/login"}></Navigate>;
    
    // 5
    type TProps = {
        children:ReactElement
    }
    const Index:FC<TProps> = (props)=>localStorage.getItem("token")?props.children:<Navigate to={"/login"}></Navigate>;
    
    export default Index;
    ```

  * src->routes->index.tsx

    ```tsx
    import React, {
        lazy,
        Suspense
    } from "react";
    import {useRoutes} from "react-router-dom";
    import {lazyLoading} from "@/utils";
    import AuthComponent from "@/components/AuthComponent";
    
    export default function () {
        return useRoutes([
            {
                path: "/",
                element:(
                    <AuthComponent>
                        {
                            lazyLoading("Index")
                        }
                    </AuthComponent>
                )
            }, {
                path: "/login",
                element: lazyLoading("Login")
            }, {
                path: "*",
                element: lazyLoading("NotFound")
            }
        ])
    }
    
    ```


# 16- xxx.module.less

> 通过module.less解决样式冲突问题

* 支持module.less:src->react-app-env.d.ts

  ```ts
  /// <reference types="react-scripts"/>
  
  declare module '*.module.less' {
      const classes: { readonly [key: string]: string };
      export default classes;
  }
  
  type TOne = {
      userName:string,
      age:number
  }
  ```

  

* 将less文件以.module.less结尾：src->pages->Index->index.module.less

  ```less
  .cl{
      color:red;
      h3{
          color:blue;
      }
      .my{
          color:skyblue;
      }
      :global{
          .my{
              background: pink;
          }
      }
  
  }
  ```

* src->pages->Index->IndexHeader.module.less

  ```less
  .cl{
      color:green;
  }
  ```

  

* src->pages->Index->index.tsx

  ```tsx
  import React from 'react';
  import IndexHeader from "@/pages/Index/components/IndexHeader";
  import styles from  "./index.module.less";
  // ts
  function Index() {
      return (
          <div>
              <div className={styles.cl}>
                  <h3>首页</h3>
                  <div className={"my"}>div</div>
                  <div className={styles.my}>skyblue</div>
              </div>
              <IndexHeader/>
          </div>
      );
  }
  
  export default Index;
  ```

* src->pages->Index->components->IndexHeader.tsx

  ```tsx
  import React from 'react';
  import styles from "./indexHeader.module.less"
  function IndexHeader() {
      return (
          <div className={styles.cl}>
              我爱你中国，我亲爱的母亲，我为你流泪，也为你自豪
          </div>
      );
  }
  
  export default IndexHeader;
  ```

# 17- 完成登陆界面

* src->pages->Login->index.tsx

  ```tsx
  import React from 'react';
  import { LockOutlined, UserOutlined } from '@ant-design/icons';
  import { Button, Checkbox, Form, Input } from 'antd';
  import styles from "./index.module.less";
  const my:TOne = {
      userName:"lisi",
      age:12
  }
  const Login: React.FC = () => {
      const onFinish = (values: any) => {
          console.log('Received values of form: ', values);
      };
  
      return (
          <div className={styles.login}>
              <div>
                  <h1>尚医通管理系统</h1>
                  <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                  >
                      <Form.Item
                          name="username"
                          rules={[{ required: true, message: '请输入管理员账号!' }]}
                      >
                          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="管理员账号" />
                      </Form.Item>
                      <Form.Item
                          name="password"
                          rules={[{ required: true, message: '请输入管理员密码' }]}
                      >
                          <Input
                              prefix={<LockOutlined className="site-form-item-icon" />}
                              type="password"
                              placeholder="管理员密码"
                          />
                      </Form.Item>
  
                      <Form.Item>
                          <Button type="primary" htmlType="submit" className="login-form-button">
                              登陆
                          </Button>
                      </Form.Item>
                  </Form>
              </div>
  
          </div>
  
      );
  };
  
  export default Login;
  ```

  

* src->pages->Login->index.module.less

  ```less
  .login{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      h1{
          text-align: center;
      }
      :global{
          .login-form {
              width: 400px;
              height: 300px;
          }
          .login-form-forgot {
              float: right;
          }
          .ant-col-rtl .login-form-forgot {
              float: left;
          }
          .login-form-button {
              width: 100%;
          }
      }
  }
  ```

# 18- 完成登陆功能

* 未分离版

  * 下载axios

    ```shell
    cnpm install axios
    ```

  * 项目根目录下：craco.config.js

    ```js
    // 可以在该文件中对webpack进行二次配置。
    const path = require("path");
    const CracoAntDesignPlugin = require('craco-antd');
    module.exports = {
        plugins: [
            {
                plugin: CracoAntDesignPlugin,
                options: {
                    customizeTheme: {
                        '@primary-color': '#1DA57A',
                    },
                },
            },
        ],
        webpack:{
            // 别名处理：属性名即是别名：值是别名对应的目录
            alias:{
                "@":path.resolve(__dirname,"./src")
            }
        },
        devServer:{
            port:80,// 将默认3000端口号设置为80
            host:"zhangpeiyue.com",// 将localhost--->zhangpeiyue.com 指定主机名 ip  域名
            proxy:{
                // /admin/auth/index/login
                // 以/admin开头即会使用该代理
                // "/admin":{
                //     target:"http://139.198.34.216:8230",// 请求服务地址
                //     changeOrigin:true,// 允许跨域
                // }
    
                // /auth/admin/auth/index/login
                // "/auth":{
                //     target:"http://139.198.34.216:8230",// 请求服务地址
                //     changeOrigin:true,// 允许跨域
                //     pathRewrite:{
                //         "^/auth":""
                //     }
                // }
    
                // /auth/index/login
                "/auth":{
                    target:"http://139.198.34.216:8230/admin",// 请求服务地址
                    changeOrigin:true,// 允许跨域
                }
    
            }
        }
    }
    ```

    

  * 使用：src->pages->Login->index.tsx

    ```tsx
    import React from 'react';
    import { LockOutlined, UserOutlined } from '@ant-design/icons';
    import {Button, Checkbox, Form, Input, message} from 'antd';
    // 1- 引入axios
    import axios from "axios";
    import styles from "./index.module.less";
    import {useNavigate} from "react-router-dom";
    const Login: React.FC = () => {
        const navigate = useNavigate();
        // 2- 发送请求
        const onFinish = async (values: any) => {
            // 当符合规则时，提交会运行。
            // 接口说明文档：
            // 请求方式：POST
            // 请求地址：http://139.198.34.216:8230/admin/auth/index/login
            // 发送参数：application/json {username:xxx,password:xxxx}
    
            // 以下允许跨域
            // const result = await axios.post("http://syt-api.atguigu.cn/admin/auth/index/login",values);
            // console.log(result.data);// 响应体数据
    
    
            const {data} = await axios.post("/auth/index/login",values);
            if(data.code === 200){
                message.success(data.message);
                // 保存token
                localStorage.setItem("token",data.data.token)
                // 跳转至主页
                navigate("/");
            }else{
                message.error(data.message);
            }
        };
    
        return (
            <div className={styles.login}>
                <div>
                    <h1>尚医通管理系统</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入管理员账号!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="管理员账号" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入管理员密码' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="管理员密码"
                            />
                        </Form.Item>
    
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
    
            </div>
    
        );
    };
    
    export default Login;
    ```

* 封装登陆功能

  * src->request->auth.ts

    ```ts
    // 与管理员相关的接口服务配置
    import axios from "axios";
    import {message} from "antd";
    const authRequest = axios.create({
        baseURL:"/auth"
    })
    // 响应拦截器
    authRequest.interceptors.response.use(res=>{
        if(res.data.code ===200) return res.data;
        message.error(res.data.message);
        // return Promise.reject(res);
        return new Promise(()=>{})
    })
    export default authRequest;
    ```

  * src->request->index.ts

    ```ts
    import authRequest from "@/request/auth";
    
    export {
        authRequest
    }
    ```

  * src->pages->Login->index.tsx

    ```tsx
    import React from 'react';
    import { LockOutlined, UserOutlined } from '@ant-design/icons';
    import {Button, Checkbox, Form, Input, message} from 'antd';
    import styles from "./index.module.less";
    import {useNavigate} from "react-router-dom";
    import {authRequest} from "@/request";
    const Login: React.FC = () => {
        const navigate = useNavigate();
        // 1- 优化
        const onFinish = async (values: any) => {
            const result:any = await authRequest.post("/index/login",values);
            message.success(result.message);
            // 保存token
            localStorage.setItem("token",result.data.token)
            // 跳转至主页
            navigate("/");
        };
    
        return (
            <div className={styles.login}>
                <div>
                    <h1>尚医通管理系统</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入管理员账号!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="管理员账号" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入管理员密码' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="管理员密码"
                            />
                        </Form.Item>
    
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
    
            </div>
    
        );
    };
    
    export default Login;
    ```

* 优化二

  * src->api->auth.ts

    ```ts
    import {authRequest} from "@/request";
    
    
    export const postLogin = (body:any)=>{
        return authRequest.post("/index/login",body);
    }
    ```

  * src->pages->Login->index.tsx

    ```tsx
    import React from 'react';
    import { LockOutlined, UserOutlined } from '@ant-design/icons';
    import {Button, Checkbox, Form, Input, message} from 'antd';
    import styles from "./index.module.less";
    import {useNavigate} from "react-router-dom";
    // 1- 引入
    import {postLogin} from "@/api/auth";
    const Login: React.FC = () => {
        const navigate = useNavigate();
        // 2- 调整方法
        const onFinish = async (values: any) => {
            const result:any = await postLogin(values);
            message.success(result.message);
            // 保存token
            localStorage.setItem("token",result.data.token)
            // 跳转至主页
            navigate("/");
        };
    
        return (
            <div className={styles.login}>
                <div>
                    <h1>尚医通管理系统</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入管理员账号!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="管理员账号" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入管理员密码' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="管理员密码"
                            />
                        </Form.Item>
    
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
    
            </div>
    
        );
    };
    
    export default Login;
    ```

# 19- 避免多次提交

* src->pages->Login->index.tsx

  ```tsx
  import React, {useState} from 'react';
  import { LockOutlined, UserOutlined } from '@ant-design/icons';
  import {Button, Checkbox, Form, Input, message} from 'antd';
  import styles from "./index.module.less";
  import {useNavigate} from "react-router-dom";
  import {postLogin} from "@/api/auth";
  const Login: React.FC = () => {
      const navigate = useNavigate();
      // 1- 定义状态：是否加载中
      const [loading,setLoading] = useState(false);
      const onFinish = async (values: any) => {
          // 2- 请求之前设置为true,有异常设置为false
          try{
              setLoading(true);// 正在加载中
              const result:any = await postLogin(values);
              message.success(result.message);
              // 保存token
              localStorage.setItem("token",result.data.token)
              // 跳转至主页
              navigate("/");
          }catch (err){
              setLoading(false);
          }
  
      };
  
      return (
          <div className={styles.login}>
              <div>
                  <h1>尚医通管理系统</h1>
                  <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                  >
                      <Form.Item
                          name="username"
                          rules={[{ required: true, message: '请输入管理员账号!' }]}
                      >
                          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="管理员账号" />
                      </Form.Item>
                      <Form.Item
                          name="password"
                          rules={[{ required: true, message: '请输入管理员密码' }]}
                      >
                          <Input
                              prefix={<LockOutlined className="site-form-item-icon" />}
                              type="password"
                              placeholder="管理员密码"
                          />
                      </Form.Item>
  
                      <Form.Item>
                          <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
                              登陆
                          </Button>
                      </Form.Item>
                  </Form>
              </div>
  
          </div>
  
      );
  };
  
  export default Login;
  ```

# 20- 创建redux

* 下载

  ```shell
  cnpm install react-redux @reduxjs/toolkit
  ```

* src->store->slices->auth.ts

  ```ts
  import {
      createSlice
  } from "@reduxjs/toolkit";
  import {useSelector} from "react-redux";
  
  const authSlice = createSlice({
      name:"auth",
      initialState:{
          loading:false
      },
      reducers:{
          changeLoading(state,{payload}){
              state.loading = payload;
          }
      }
  })
  export const {changeLoading} = authSlice.actions;
  export const useSelectorAuth = ()=>useSelector((state:any)=>state.auth);
  export default authSlice.reducer;
  ```

* src->store->index.ts

  ```ts
  import {
      configureStore
  } from "@reduxjs/toolkit";
  import auth from "./slices/auth";
  export default configureStore({
      reducer:{
          auth
      }
  })
  ```

* 完成登陆：src->pages->Login->index.tsx

  ```tsx
  import React, {useState} from 'react';
  import { LockOutlined, UserOutlined } from '@ant-design/icons';
  import {Button, Checkbox, Form, Input, message} from 'antd';
  import styles from "./index.module.less";
  import {useNavigate} from "react-router-dom";
  import store from "@/store";
  import {postLogin} from "@/api/auth";
  import {useSelector} from "react-redux";
  import {changeLoading, useSelectorAuth} from "@/store/slices/auth";
  import {authRequest} from "@/request";
  const Login: React.FC = () => {
      const navigate = useNavigate();
      // 获取数据状态1
      // console.log(store.getState());// {auth:{loading:false}}
  
      // 获取数据状态2: useSelector接收一个回调函数，回调函数返回的值即是useSelector返回的值
      //             回调函数接收的参数即是数据状态
      // const result =  useSelector(state=>{
      //     console.log(state);// {auth:{loading:false}}
      // });
      // console.log(result);//
  
  
      // 获取loading
      // type TAuth = {
      //     auth:{
      //         loading:boolean
      //     }
      // }
      // const {loading} = useSelector((state:TAuth)=>state.auth);
      // console.log(loading);
  
      // 获取数据状态3：封装方法
      const {loading} = useSelectorAuth();
      console.log(loading);
  
  
      return (
          <div className={styles.login}>
              <div>
                  <h1>尚医通管理系统</h1>
                  <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{ remember: true }}
                      onFinish={async (values:any)=>{
                          try{
                              store.dispatch(changeLoading(true));
                              const result:any = await postLogin(values);
                              message.success(result.message);
                              localStorage.setItem("token",result.data.token);
                              store.dispatch(changeLoading(false));
                              navigate("/");
                          }catch (err){
                              store.dispatch(changeLoading(false));
                          }
  
                      }}
                  >
                      <Form.Item
                          name="username"
                          rules={[{ required: true, message: '请输入管理员账号!' }]}
                      >
                          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="管理员账号" />
                      </Form.Item>
                      <Form.Item
                          name="password"
                          rules={[{ required: true, message: '请输入管理员密码' }]}
                      >
                          <Input
                              prefix={<LockOutlined className="site-form-item-icon" />}
                              type="password"
                              placeholder="管理员密码"
                          />
                      </Form.Item>
  
                      <Form.Item>
                          <Button loading={loading}  type="primary" htmlType="submit" className="login-form-button">
                              登陆
                          </Button>
                      </Form.Item>
                  </Form>
              </div>
  
          </div>
  
      );
  };
  
  export default Login;
  ```

* src->index.tsx

  ```tsx
  import React from "react";
  import ReactDOM from "react-dom/client";
  import {
      BrowserRouter as Router
  } from "react-router-dom";
  import store from "./store";
  import {
      Provider
  } from "react-redux";
  import App from "@/App";
  // 1- 指定挂载的位置
  const root = ReactDOM.createRoot(document.querySelector("#root") as Element);
  
  // 2- 将App呈现到界面中
  root.render((
      <Provider store={store}>
          <Router>
              <App/>
          </Router>
      </Provider>
  
  ));
  
  ```

  





# 21- dispatch的使用

* src->store->slices->auth.ts

  ```tsx
  import {
      createSlice,
      createAsyncThunk
  } from "@reduxjs/toolkit";
  import {useSelector} from "react-redux";
  import {postLogin} from "@/api/auth";
  import {message} from "antd";
  
  const authSlice = createSlice({
      name:"auth",
      initialState:{
          loading:false,
          token:localStorage.token
      },
      reducers:{
          changeLoading(state,action){
              state.loading = action.payload;
          },
          upToken(state,{payload}){
              // localStorage.setItem("token",xxx);
              // localStorage.token=xxx;
              // localStorage["token"]=xxx;
              state.token = localStorage.token =  payload;
          }
      },
      extraReducers(builder){
          builder.addCase(postLoginAsync2.fulfilled,(state,{payload})=>{
              // console.log("postLoginAsync2.fulfilled",payload);
              state.loading = false;
              state.token = localStorage.token = payload.result.data.token;
              message.success((payload as any).result.message);
              payload.navigate("/");
  
  
          }).addCase(postLoginAsync2.pending,(state,{payload})=>{
              state.loading = true;
              // console.log("postLoginAsync2.pending",payload);
          }).addCase(postLoginAsync2.rejected,(state,{payload})=>{
              // console.log("postLoginAsync2.rejected",payload);
              state.loading = false;
          })
      }
  })
  // 柯里化
  export const postLoginAsync = function(options:any){
      return  async (dispatch:any,getState:any)=>{
          console.log(getState())// 获取redux仓库中的数据状态
          try{
              dispatch(changeLoading(true));
              const result:any = await postLogin(options.values);
              message.success(result.message);
              dispatch(changeLoading(false));
              dispatch(upToken(result.data.token));
              options.navigate("/");
          }catch (err){
              dispatch(changeLoading(false));
          }
      }
  }
  // 扩展
  export const postLoginAsync2 = createAsyncThunk("postLoginAsync2",async function(options:any){
      try{
          const result = await postLogin(options.values);
          return {
              result,
              navigate:options.navigate
          };
      }catch (err){
          return Promise.reject(err);
      }
  
  })
  export const {changeLoading,upToken} = authSlice.actions;
  export const useSelectorAuth = ()=>useSelector((state:any)=>state.auth);
  export default authSlice.reducer;
  ```

* src->hooks->index.ts

  ```ts
  import store from "@/store";
  import {useDispatch} from "react-redux";
  
  export const useAppDispatch = ()=>{
      type TDispatch = typeof store.dispatch;
      return useDispatch<TDispatch>();
  }
  ```

* src->pages->Login->index.tsx

  ```tsx
  import React, {useState} from 'react';
  import { LockOutlined, UserOutlined } from '@ant-design/icons';
  import {Button, Checkbox, Form, Input, message} from 'antd';
  import styles from "./index.module.less";
  import {useNavigate} from "react-router-dom";
  import store from "@/store";
  import {postLogin} from "@/api/auth";
  import {useDispatch, useSelector} from "react-redux";
  import {changeLoading, postLoginAsync, postLoginAsync2, upToken, useSelectorAuth} from "@/store/slices/auth";
  import {authRequest} from "@/request";
  import {useAppDispatch} from "@/hooks";
  const Login: React.FC = () => {
      const navigate = useNavigate();
      // 获取数据状态1
      // console.log(store.getState());// {auth:{loading:false}}
  
      // 获取数据状态2: useSelector接收一个回调函数，回调函数返回的值即是useSelector返回的值
      //             回调函数接收的参数即是数据状态
      // const result =  useSelector(state=>{
      //     console.log(state);// {auth:{loading:false}}
      // });
      // console.log(result);//
  
  
      // 获取loading
      // type TAuth = {
      //     auth:{
      //         loading:boolean
      //     }
      // }
      // const {loading} = useSelector((state:TAuth)=>state.auth);
      // console.log(loading);
  
      // 获取数据状态3：封装方法
      const {loading} = useSelectorAuth();
      console.log(loading);
  
      // 1- 通过useDispatch生成dispatch
      // type TDispatch = typeof store.dispatch;
      // const dispatch = useDispatch<TDispatch>();
  
      // 2- 将以上代码封装成自定义的hooks
      const dispatch = useAppDispatch();
      return (
          <div className={styles.login}>
              <div>
                  <h1>尚医通管理系统</h1>
                  <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{ remember: true }}
                      onFinish={async (values:any)=>{
                          // dispatch接收的参数可以称为action.
                          // action分为同步action(对象),异步action（函数）
                          // 1
                          // store.dispatch(async function(dispatch,getState){
                          //     console.log(getState())// 获取redux仓库中的数据状态
                          //     try{
                          //         dispatch(changeLoading(true));
                          //         const result:any = await postLogin(values);
                          //         message.success(result.message);
                          //         dispatch(changeLoading(false));
                          //         dispatch(upToken(result.data.token));
                          //         navigate("/")
                          //     }catch (err){
                          //         dispatch(changeLoading(false));
                          //     }
                          //
                          // })
  
                          // 2
                          // async function postLoginAsync(dispatch:any,getState:any){
                          //     console.log(getState())// 获取redux仓库中的数据状态
                          //     try{
                          //         dispatch(changeLoading(true));
                          //         const result:any = await postLogin(values);
                          //         message.success(result.message);
                          //         dispatch(changeLoading(false));
                          //         dispatch(upToken(result.data.token));
                          //         navigate("/")
                          //     }catch (err){
                          //         dispatch(changeLoading(false));
                          //     }
                          //
                          // }
                          // store.dispatch(postLoginAsync)
  
  
                          // 3
                          // await store.dispatch(postLoginAsync({
                          //     values,
                          //     navigate
                          // }));
  
                          // 4
                          // await dispatch(postLoginAsync({values,navigate}));
  
  
                          // 5- 扩展
                          await dispatch(postLoginAsync2({values,navigate}));
  
                      }}
                  >
                      <Form.Item
                          name="username"
                          rules={[{ required: true, message: '请输入管理员账号!' }]}
                      >
                          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="管理员账号" />
                      </Form.Item>
                      <Form.Item
                          name="password"
                          rules={[{ required: true, message: '请输入管理员密码' }]}
                      >
                          <Input
                              prefix={<LockOutlined className="site-form-item-icon" />}
                              type="password"
                              placeholder="管理员密码"
                          />
                      </Form.Item>
  
                      <Form.Item>
                          <Button loading={loading}  type="primary" htmlType="submit" className="login-form-button">
                              登陆
                          </Button>
                      </Form.Item>
                  </Form>
              </div>
  
          </div>
  
      );
  };
  
  export default Login;
  ```

# 22- 主页界面设计

* src->pages->Index->index.less

  ```less
  .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      margin: 16px;
      white-space: nowrap;
      img{
          height: 30px;
      }
      span{
          color:white;
          font-size: 16px;
          padding-left: 5px;
      }
      //background: rgba(255, 255, 255, 0.3);
  }
  .ant-layout-header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding:0 10px !important;
  }
  .ant-layout-footer {
      padding: 10px 50px;
  }
  .site-layout .site-layout-background {
      background: #fff;
  }
  ```

* src->pages->Index->index.tsx

  ```tsx
  import React, { useState } from 'react';
  import {
      HomeOutlined,
      DatabaseOutlined,
      LoginOutlined
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Breadcrumb, Layout, Menu,Dropdown,Space,Avatar } from 'antd';
  import "./index.less";
  import {Link} from "react-router-dom";
  const { Header, Content, Footer, Sider } = Layout;
  
  type MenuItem = Required<MenuProps>['items'][number];
  
  function getItem(
      label: React.ReactNode,
      key: React.Key,
      icon?: React.ReactNode,
      children?: MenuItem[],
  ): MenuItem {
      return {
          key,
          icon,
          children,
          label,
      } as MenuItem;
  }
  
  const items: MenuItem[] = [
      getItem('主页', '1', <HomeOutlined />),
      getItem('数据管理', 'sub1', <DatabaseOutlined />, [
          getItem('数据字典', '3')
      ])
  ];
  const menu = (
      <Menu
          items={[
              {
                  key: '1',
                  label: (
                      <Link to={"/"}>返回首页</Link>
                  ),
                  icon: <HomeOutlined />
              },
              {
                  key: '2',
                  label: (
                      <Link to={"/"}>退出登陆</Link>
                  ),
                  icon: <LoginOutlined />
              },
          ]}
      />
  );
  const Index: React.FC = () => {
      // 是否收起
      const [collapsed, setCollapsed] = useState(false);
  
      return (
          <Layout style={{ minHeight: '100vh' }}>
              <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                  <div className="logo">
                      <img src={require("@/assets/img/logo.png")} alt=""/>
                      <span style={{display:collapsed?"none":"inline-block"}}>尚医通管理系统</span>
                  </div>
                  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
              </Sider>
              <Layout className="site-layout">
                  <Header className="site-layout-background" style={{ padding: 0 }} >
                      <Breadcrumb style={{ margin: '16px 0' }}>
                          <Breadcrumb.Item>User</Breadcrumb.Item>
                          <Breadcrumb.Item>Bill</Breadcrumb.Item>
                      </Breadcrumb>
  
  
                      <Space>
                          <span>欢迎回来xxxxn！</span>
                          <Dropdown overlay={menu}>
                              <a onClick={e => e.preventDefault()}>
                                  <Avatar src="https://joeschmoe.io/api/v1/random" />
                              </a>
                          </Dropdown>
                      </Space>
  
                  </Header>
                  <Content style={{ margin: '5px' }}>
  
                      <div className="site-layout-background" style={{ padding: 24, height:"100%" }}>
                          Bill is a cat.
                      </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
              </Layout>
          </Layout>
      );
  };
  
  export default Index;
  ```

  



# 23- 主页界面拆分

* src->pages->Index->components->IndexHeader.tsx

  ```tsx
  import React from 'react';
  import {Avatar, Breadcrumb, Dropdown, Space, Layout, Menu} from "antd";
  import {Link} from "react-router-dom";
  import {HomeOutlined, LoginOutlined} from "@ant-design/icons";
  
  const menu = (
      <Menu
          items={[
              {
                  key: '1',
                  label: (
                      <Link to={"/"}>返回首页</Link>
                  ),
                  icon: <HomeOutlined />
              },
              {
                  key: '2',
                  label: (
                      <Link to={"/"}>退出登陆</Link>
                  ),
                  icon: <LoginOutlined />
              },
          ]}
      />
  );
  function IndexHeader() {
      return (
          <Layout.Header className="site-layout-background" style={{ padding: 0 }} >
              <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
  
  
              <Space>
                  <span>欢迎回来xxxxn！</span>
                  <Dropdown overlay={menu}>
                      <a onClick={e => e.preventDefault()}>
                          <Avatar src="https://joeschmoe.io/api/v1/random" />
                      </a>
                  </Dropdown>
              </Space>
  
          </Layout.Header>
      );
  }
  
  export default IndexHeader;
  ```

  

* src->pages->Index->components->IndexSider.tsx

  ```tsx
  import React, {useState} from 'react';
  import {Menu, Layout, MenuProps} from "antd";
  import {DatabaseOutlined, HomeOutlined} from "@ant-design/icons";
  
  type MenuItem = Required<MenuProps>['items'][number];
  
  function getItem(
      label: React.ReactNode,
      key: React.Key,
      icon?: React.ReactNode,
      children?: MenuItem[],
  ): MenuItem {
      return {
          key,
          icon,
          children,
          label,
      } as MenuItem;
  }
  
  const items: MenuItem[] = [
      getItem('主页', '1', <HomeOutlined />),
      getItem('数据管理', 'sub1', <DatabaseOutlined />, [
          getItem('数据字典', '3')
      ])
  ];
  function IndexSider() {
      const [collapsed,setCollapsed] = useState(false);
      return (
          <Layout.Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
              <div className="logo">
                  <img src={require("@/assets/img/logo.png")} alt=""/>
                  <span style={{display:collapsed?"none":"inline-block"}}>尚医通管理系统</span>
              </div>
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
          </Layout.Sider>
      );
  }
  
  export default IndexSider;
  ```

  

* src->pages->Index->components->IndexContent.tsx

  ```tsx
  import React from 'react';
  import {Layout} from "antd";
  
  function IndexContent() {
      return (
          <Layout.Content style={{ margin: '5px' }}>
  
              <div className="site-layout-background" style={{ padding: 24, height:"100%" }}>
                  Bill is a cat.
              </div>
          </Layout.Content>
      );
  }
  
  export default IndexContent;
  ```

  

* src->pages->Index->components->IndexFooter.tsx

  ```tsx
  import React from 'react';
  import {Layout} from "antd";
  
  function IndexFooter() {
      return (
          <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by 220525</Layout.Footer>
      );
  }
  
  export default IndexFooter;
  ```

  

* src->pages->Index->index.tsx

  ```tsx
  import React  from 'react';
  import { Layout } from 'antd';
  import IndexSider from "@/pages/Index/components/IndexSider";
  import IndexHeader from "@/pages/Index/components/IndexHeader";
  import "./index.less";
  import IndexContent from "@/pages/Index/components/IndexContent";
  import IndexFooter from "@/pages/Index/components/IndexFooter";
  
  const Index: React.FC = () => {
  
      return (
          <Layout style={{ minHeight: '100vh' }}>
              <IndexSider/>
              <Layout className="site-layout">
                  <IndexHeader/>
                  <IndexContent/>
                  <IndexFooter/>
              </Layout>
          </Layout>
      );
  };
  
  export default Index;
  ```

  





# 24- 完成退出登陆

* src->request->auth.ts:增加请求拦截

  ```tsx
  // 请求拦截
  authRequest.interceptors.request.use((config:any)=>{
      if(localStorage.getItem("token")){
          config.headers.token = localStorage.getItem("token");
      }
      return config;
  })
  ```

  

* src->api->auth.ts

  ```ts
  // 退出登陆 /admin/auth/index/logout
  export const postLogOut = ()=>{
      return authRequest.post("/index/logout");
  }
  ```

  

* src->store->slices->auth.ts

  ```ts
  import {
      createSlice,
      createAsyncThunk
  } from "@reduxjs/toolkit";
  import {useSelector} from "react-redux";
  import {postLogin, postLogOut} from "@/api/auth";
  import {message} from "antd";
  
  const authSlice = createSlice({
      name:"auth",
      initialState:{
          loading:false,
          token:localStorage.token
      },
      reducers:{
          changeLoading(state,action){
              state.loading = action.payload;
          },
          upToken(state,{payload}){
              // localStorage.setItem("token",xxx);
              // localStorage.token=xxx;
              // localStorage["token"]=xxx;
              state.token = localStorage.token =  payload;
          },
          delToken(state){
              // state.token = localStorage.token = null;
              localStorage.clear();
              state.token = null;
          }
      },
      extraReducers(builder){
          builder.addCase(postLoginAsync2.fulfilled,(state,{payload})=>{
              // console.log("postLoginAsync2.fulfilled",payload);
              state.loading = false;
              state.token = localStorage.token = payload.result.data.token;
              message.success((payload as any).result.message);
              payload.navigate("/");
  
  
          }).addCase(postLoginAsync2.pending,(state,{payload})=>{
              state.loading = true;
              // console.log("postLoginAsync2.pending",payload);
          }).addCase(postLoginAsync2.rejected,(state,{payload})=>{
              // console.log("postLoginAsync2.rejected",payload);
              state.loading = false;
          })
      }
  })
  // 柯里化
  export const postLoginAsync = function(options:any){
      return  async (dispatch:any,getState:any)=>{
          console.log(getState())// 获取redux仓库中的数据状态
          try{
              dispatch(changeLoading(true));
              const result:any = await postLogin(options.values);
              message.success(result.message);
              dispatch(changeLoading(false));
              dispatch(upToken(result.data.token));
              options.navigate("/");
          }catch (err){
              dispatch(changeLoading(false));
          }
      }
  }
  // 扩展
  export const postLoginAsync2 = createAsyncThunk("postLoginAsync2",async function(options:any){
      try{
          const result = await postLogin(options.values);
          return {
              result,
              navigate:options.navigate
          };
      }catch (err){
          return Promise.reject(err);
      }
  
  })
  // 退出登陆
  export const postLogOutAsync = function(){
      return async (dispatch:any)=>{
          await postLogOut();
          dispatch(delToken());
          message.success("退出成功");
  
      }
  }
  export const {changeLoading,upToken,delToken} = authSlice.actions;
  export const useSelectorAuth = ()=>useSelector((state:any)=>state.auth);
  export default authSlice.reducer;
  ```

  

* src->pages->Index->components->IndexHeader.tsx

  ```tsx
  import React from 'react';
  import {Avatar, Breadcrumb, Dropdown, Space, Layout, Menu} from "antd";
  import {Link, useNavigate} from "react-router-dom";
  import {HomeOutlined, LoginOutlined} from "@ant-design/icons";
  import {useAppDispatch} from "@/hooks";
  import {postLogOutAsync} from "@/store/slices/auth";
  
  
  function IndexHeader() {
      const dispatch = useAppDispatch();
      const navigate = useNavigate();
      const menu = (
          <Menu
              items={[
                  {
                      key: '1',
                      label: (
                          <Link to={"/"}>返回首页</Link>
                      ),
                      icon: <HomeOutlined />
                  },
                  {
                      key: '2',
                      label: (
                          <a onClick={async e=>{
                              e.preventDefault();
                              await dispatch(postLogOutAsync());
                              navigate("/login");
                          }}>退出登陆</a>
                      ),
                      icon: <LoginOutlined />
                  },
              ]}
          />
      );
      return (
          <Layout.Header className="site-layout-background" style={{ padding: 0 }} >
              <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
  
  
              <Space>
                  <span>欢迎回来xxxxn！</span>
                  <Dropdown overlay={menu}>
                      <a onClick={e => e.preventDefault()}>
                          <Avatar src="https://joeschmoe.io/api/v1/random" />
                      </a>
                  </Dropdown>
              </Space>
  
          </Layout.Header>
      );
  }
  
  export default IndexHeader;
  ```

  





# 25- 完成个人详情调用

* src->api->auth.ts

  ```ts
  // 获取账号信息 /admin/auth/index/info
  export const getInfo = ()=>{
      return authRequest.get("/index/info");
  }
  ```

* src->store->slices->auth.ts

  ```ts
  import {
      createSlice,
      createAsyncThunk
  } from "@reduxjs/toolkit";
  import {useSelector} from "react-redux";
  import {getInfo, postLogin, postLogOut} from "@/api/auth";
  import {message} from "antd";
  
  const authSlice = createSlice({
      name:"auth",
      initialState:{
          loading:false,
          token:localStorage.token,
          info:{
  
          }
      },
      reducers:{
          changeLoading(state,action){
              state.loading = action.payload;
          },
          upToken(state,{payload}){
              // localStorage.setItem("token",xxx);
              // localStorage.token=xxx;
              // localStorage["token"]=xxx;
              state.token = localStorage.token =  payload;
          },
          delToken(state){
              // state.token = localStorage.token = null;
              localStorage.clear();
              state.token = null;
          },
          upInfo(state,{payload}){
              state.info = payload;
          }
      },
      extraReducers(builder){
          builder.addCase(postLoginAsync2.fulfilled,(state,{payload})=>{
              // console.log("postLoginAsync2.fulfilled",payload);
              state.loading = false;
              state.token = localStorage.token = payload.result.data.token;
              message.success((payload as any).result.message);
              // payload.navigate("/");
  
  
          }).addCase(postLoginAsync2.pending,(state,{payload})=>{
              state.loading = true;
              // console.log("postLoginAsync2.pending",payload);
          }).addCase(postLoginAsync2.rejected,(state,{payload})=>{
              // console.log("postLoginAsync2.rejected",payload);
              state.loading = false;
          })
      }
  })
  // 柯里化
  export const postLoginAsync = function(options:any){
      return  async (dispatch:any,getState:any)=>{
          console.log(getState())// 获取redux仓库中的数据状态
          try{
              dispatch(changeLoading(true));
              const result:any = await postLogin(options.values);
              message.success(result.message);
              dispatch(changeLoading(false));
              dispatch(upToken(result.data.token));
              options.navigate("/");
          }catch (err){
              dispatch(changeLoading(false));
          }
      }
  }
  // 扩展
  export const postLoginAsync2 = createAsyncThunk("postLoginAsync2",async function(options:any){
      try{
          const result = await postLogin(options.values);
  
          return {
              result,
              // navigate:options.navigate
          };
      }catch (err){
          return Promise.reject(err);
      }
  
  })
  // 退出登陆
  export const postLogOutAsync = function(){
      return async (dispatch:any)=>{
          await postLogOut();
          dispatch(delToken());
          message.success("退出成功");
  
      }
  }
  // 获取账号信息
  export const getInfoAsync = function(){
      return async (dispatch:any)=>{
          const result = await getInfo();
          console.log(result);
          dispatch(upInfo({
              name:result.data.name,
              avatar:result.data.avatar
          }))
      }
  }
  export const {changeLoading,upToken,delToken,upInfo} = authSlice.actions;
  export const useSelectorAuth = ()=>useSelector((state:any)=>state.auth);
  export default authSlice.reducer;
  ```

  

* src->pages->Index->index.ts

  ```ts
  import React, {useEffect} from 'react';
  import { Layout } from 'antd';
  import IndexSider from "@/pages/Index/components/IndexSider";
  import IndexHeader from "@/pages/Index/components/IndexHeader";
  import "./index.less";
  import IndexContent from "@/pages/Index/components/IndexContent";
  import IndexFooter from "@/pages/Index/components/IndexFooter";
  import {getInfoAsync} from "@/store/slices/auth";
  import {useAppDispatch} from "@/hooks";
  
  const Index: React.FC = () => {
      const dispatch = useAppDispatch();
      useEffect(()=>{
          (async ()=>{
              await dispatch(getInfoAsync())
          })();
  
          // dispatch(getInfoAsync())
      },[])
      return (
          <Layout style={{ minHeight: '100vh' }}>
              <IndexSider/>
              <Layout className="site-layout">
                  <IndexHeader/>
                  <IndexContent/>
                  <IndexFooter/>
              </Layout>
          </Layout>
      );
  };
  
  export default Index;
  ```

* src->pages->Index->components->IndexContent.tsx

  ```tsx
  import React from 'react';
  import {Layout} from "antd";
  import {useSelectorAuth} from "@/store/slices/auth";
  
  function IndexContent() {
      const {info} = useSelectorAuth();
      return (
          <Layout.Content style={{ margin: '5px' }}>
  
              <div className="site-layout-background" style={{ padding: 24, height:"100%" }}>
                  <p>用户名：{info.name}</p>
                  <img src={info.avatar} alt=""/>
              </div>
          </Layout.Content>
      );
  }
  
  export default IndexContent;
  ```

* src->pages->Index->components->IndexHeader.tsx

  ```tsx
  import React from 'react';
  import {Avatar, Breadcrumb, Dropdown, Space, Layout, Menu} from "antd";
  import {Link, useNavigate} from "react-router-dom";
  import {HomeOutlined, LoginOutlined} from "@ant-design/icons";
  import {useAppDispatch} from "@/hooks";
  import {postLogOutAsync, useSelectorAuth} from "@/store/slices/auth";
  
  
  function IndexHeader() {
      const dispatch = useAppDispatch();
      const navigate = useNavigate();
      const {info} = useSelectorAuth();
      const menu = (
          <Menu
              items={[
                  {
                      key: '1',
                      label: (
                          <Link to={"/"}>返回首页</Link>
                      ),
                      icon: <HomeOutlined />
                  },
                  {
                      key: '2',
                      label: (
                          <a onClick={async e=>{
                              e.preventDefault();
                              await dispatch(postLogOutAsync());
                              navigate("/login");
                          }}>退出登陆</a>
                      ),
                      icon: <LoginOutlined />
                  },
              ]}
          />
      );
      return (
          <Layout.Header className="site-layout-background" style={{ padding: 0 }} >
              <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
  
  
              <Space>
                  <span>欢迎回来{info.name}！</span>
                  <Dropdown overlay={menu}>
                      <a onClick={e => e.preventDefault()}>
                          <Avatar src={info.avatar} />
                      </a>
                  </Dropdown>
              </Space>
  
          </Layout.Header>
      );
  }
  
  export default IndexHeader;
  ```


# 26- 完成数据字典路由

* src->routes->index.tsx

  ```tsx
  import React from "react";
  import {useRoutes, Outlet, Navigate} from "react-router-dom";
  import {lazyLoading} from "@/utils";
  import AuthComponent from "@/components/AuthComponent";
  
  export default function () {
      // /cmn/dict
      return useRoutes([
          {
              path: "/",
              element:(
                  <AuthComponent>
                      {
                          lazyLoading("Index")
                      }
                  </AuthComponent>
              ),
              // 增加children
              children:[
                  {
                      // 主页
                      path:"/",
                      element:lazyLoading("Home")
                  },{
                      path:"/cmn",
                      element:<Outlet/>,
                      children:[
                          {
                              index:true,
                              element:<Navigate to={"/cmn/dict"}/>
                          },
                          {
                              path:"/cmn/dict",
                              element:lazyLoading("cmn/dict")
                          }
                      ]
                  }
              ]
          }, {
              path: "/login",
              element: lazyLoading("Login")
          }, {
              path: "*",
              element: lazyLoading("NotFound")
          }
      ])
  }
  
  ```

* src->pages->Home->index.tsx 主页界面

  ```tsx
  import React from 'react';
  import {useSelectorAuth} from "@/store/slices/auth";
  
  function Index() {
      const {info} = useSelectorAuth();
      return (
          <>
              <h3>用户名：{info.name}</h3>
              <img src={info.avatar} alt=""/>
          </>
      );
  }
  
  export default Index;
  ```

  

* src->pages->cmn->dict->index.tsx 数据字典界面

  ```tsx
  import React from 'react';
  
  function dict() {
      return (
          <div>数据字典</div>
      );
  }
  
  export default dict;
  ```

* src->pages->Index->components->IndexContent.tsx

  ```tsx
  import React from 'react';
  import {Layout} from "antd";
  import {Outlet} from "react-router-dom";
  
  function IndexContent() {
      return (
          <Layout.Content style={{ margin: '5px' }}>
  
              <div className="site-layout-background" style={{ padding: 5, height:"100%" }}>
                  <Outlet></Outlet>
  
              </div>
          </Layout.Content>
      );
  }
  
  export default IndexContent;
  ```

  

# 27- 左侧栏实现高亮及跳转

* 避免闪烁 src->routes->index.tsx

  ```tsx
  import React from "react";
  import {useRoutes, Outlet, Navigate} from "react-router-dom";
  import {lazyLoading} from "@/utils";
  import AuthComponent from "@/components/AuthComponent";
  import Index from "@/pages/Index";
  export default function () {
      // /cmn/dict
      return useRoutes([
          {
              path: "/",
              element:(
                  <AuthComponent>
                      <Index/>
                      {/*{*/}
                      {/*    lazyLoading("Index")*/}
                      {/*}*/}
                  </AuthComponent>
              ),children:[
                  {
                      // 主页
                      path:"/",
                      element:lazyLoading("Home")
                  },{
                      path:"/cmn",
                      element:<Outlet/>,
                      children:[
                          {
                              index:true,
                              element:<Navigate to={"/cmn/dict"}/>
                          },
                          {
                              path:"/cmn/dict",
                              element:lazyLoading("cmn/dict")
                          }
                      ]
                  }
              ]
          }, {
              path: "/login",
              element: lazyLoading("Login")
          }, {
              path: "*",
              element: lazyLoading("NotFound")
          }
      ])
  }
  
  ```

* src->pages->Index->components->IndexSider.tsx

  ```tsx
  import React, {useEffect, useState} from 'react';
  import {Menu, Layout, MenuProps} from "antd";
  import {DatabaseOutlined, HomeOutlined} from "@ant-design/icons";
  import {useLocation, useNavigate} from "react-router-dom";
  
  type MenuItem = Required<MenuProps>['items'][number];
  
  function getItem(
      label: React.ReactNode,
      key: React.Key,
      icon?: React.ReactNode,
      children?: MenuItem[],
  ): MenuItem {
      return {
          key,
          icon,
          children,
          label,
      } as MenuItem;
  }
  
  const items: MenuItem[] = [
      getItem('主页', '/', <HomeOutlined />),
      getItem('数据管理', '/cmn', <DatabaseOutlined />, [
          getItem('数据字典', '/cmn/dict')
      ])
  ];
  function IndexSider() {
      const navigate = useNavigate();
      const {pathname} = useLocation();
      const [collapsed,setCollapsed] = useState(false);
  
      // 1- 增加状态key
      const [key,setKey] = useState("/");// 选中subMenu的key值
      // 2- 增加useEffect,当pathname发生改变会修正key
      useEffect(()=>{
          setKey("/"+pathname.split("/")[1])
      },[pathname])
      return (
          // 6- breakpoint
          <Layout.Sider breakpoint={"md"} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
              <div className="logo">
                  <img src={require("@/assets/img/logo.png")} alt=""/>
                  <span style={{display:collapsed?"none":"inline-block"}}>尚医通管理系统</span>
              </div>
              <Menu 
                  // 3- 点击
                  onClick={({key})=>{
                  // 点击 MenuItem 调用此函数
                  navigate(key);
              }} theme="dark"
                    // 4- 当前展开的 SubMenu 菜单项 key 数组
                    openKeys={[key]}
                    // 5-SubMenu 展开/关闭的回调
                    onOpenChange={(openKeys: string[])=>{
                        setKey(openKeys[1])
                    }}
                    // 7-初始选中的菜单项 key 数组
                    defaultSelectedKeys={[pathname]}
                    mode="inline" items={items} />
          </Layout.Sider>
      );
  }
  
  export default IndexSider;
  ```

# 28- 路由配置与侧边栏产生关联

* src->routes->index.tsx

  ```tsx
  import React from "react";
  import {useRoutes, Outlet, Navigate} from "react-router-dom";
  import {lazyLoading} from "@/utils";
  import AuthComponent from "@/components/AuthComponent";
  import Index from "@/pages/Index";
  import {DatabaseOutlined, HomeOutlined} from "@ant-design/icons";
  
  const routes = [
      {
          path: "/",
          element:(
              <AuthComponent>
                  <Index/>
              </AuthComponent>
          ),children:[
              {
                  // 主页
                  path:"/",
                  label:"主页",
                  icon:<HomeOutlined />,
                  element:lazyLoading("Home")
              },
              {
                  // 数据管理
                  path:"/cmn",
                  label:"数据管理",
                  icon:<DatabaseOutlined />,
                  element:<Outlet/>,
                  children:[
                      {
                          path:"/cmn",
                          label:"数据管理",
                          isHide:true,// 是否隐藏
                          element:<Navigate to={"/cmn/dict"}/>
                      },
                      {
                          // 数据字典
                          path:"/cmn/dict",
                          label:"数据字典",
                          element:lazyLoading("cmn/dict")
                      }
                  ]
              }
          ]
      }, {
          path: "/login",
          element: lazyLoading("Login")
      }, {
          path: "*",
          element: lazyLoading("NotFound")
      }
  ];
  
  // 响应路由配置
  export default function () {
      // /cmn/dict
      return useRoutes(routes)
  }
  // 响应侧边栏
  export const renderSlider = function(){
      return (routes.find(v=>v.path==="/") as any).children;
  }
  
  ```

* src->pages->Index->components->IndexSider.tsx

  ```tsx
  import React, {useEffect, useState} from 'react';
  import {Menu, Layout, MenuProps} from "antd";
  import {useLocation, useNavigate} from "react-router-dom";
  import {renderSlider} from "@/routes";
  import {getInfoAsync} from "@/store/slices/auth";
  
  type MenuItem = Required<MenuProps>['items'][number];
  
  function getItem(
      label: React.ReactNode,
      key: React.Key,
      icon?: React.ReactNode,
      children?: MenuItem[],
  ): MenuItem {
      return {
          key,
          icon,
          children,
          label,
      } as MenuItem;
  }
  
  // const items: MenuItem[] = [
  //     getItem('主页', '/', <HomeOutlined />),
  //     getItem('数据管理', '/cmn', <DatabaseOutlined />, [
  //         getItem('数据字典', '/cmn/dict')
  //     ])
  // ];
  
  
  function IndexSider() {
      const navigate = useNavigate();
      const {pathname} = useLocation();
      const [collapsed,setCollapsed] = useState(false);
      const [key,setKey] = useState("/");// 选中subMenu的key值
      // [
      //      getItem("主页","/",<HomeOutlined />),
      //      getItem("数据管理","/cmn",<DatabaseOutlined />)
      // ]
      const items:MenuItem[] = renderSlider().map((item:any)=>{
          let subMenu;
          if(item.children){
              subMenu = item.children.filter((v:any)=>!v.isHide).map((item:any)=>(
                  getItem(item.label,item.path)
              ))
          }
          return getItem(item.label,item.path,item.icon,subMenu);
      })
  
  
      useEffect(()=>{
          setKey("/"+pathname.split("/")[1])
      },[pathname])
      return (
          <Layout.Sider breakpoint={"md"} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
              <div className="logo">
                  <img src={require("@/assets/img/logo.png")} alt=""/>
                  <span style={{display:collapsed?"none":"inline-block"}}>尚医通管理系统</span>
              </div>
              <Menu onClick={({key})=>{
                  // 点击 MenuItem 调用此函数
                  navigate(key);
              }} theme="dark"
                    // 当前展开的 SubMenu 菜单项 key 数组
                    openKeys={[key]}
                    // SubMenu 展开/关闭的回调
                    onOpenChange={(openKeys: string[])=>{
                        setKey(openKeys[1])
                    }}
                    // 初始选中的菜单项 key 数组
                    defaultSelectedKeys={[pathname]}
                    mode="inline" items={items} />
          </Layout.Sider>
      );
  }
  
  export default IndexSider;
  ```

  

# 29- 增加医院管理路由

* 医院设置：src->pages->hospital->hospitalSet->index.tsx

  ```tsx
  import React from 'react';
  
  function Index() {
      return (
          <div>医院设置界面</div>
      );
  }
  
  export default Index;
  ```

  

* 医院列表：src->pages->hospital->hospitalList->index.tsx

  ```tsx
  import React from 'react';
  
  function Index() {
      return (
          <div>医院列表界面</div>
      );
  }
  
  export default Index;
  ```

  

* src->routes->index.tsx

  ```tsx
  import React from "react";
  import {useRoutes, Outlet, Navigate} from "react-router-dom";
  import {lazyLoading} from "@/utils";
  import AuthComponent from "@/components/AuthComponent";
  import Index from "@/pages/Index";
  import {DatabaseOutlined, HomeOutlined,MedicineBoxOutlined} from "@ant-design/icons";
  
  const routes = [
      {
          path: "/",
          element:(
              <AuthComponent>
                  <Index/>
              </AuthComponent>
          ),children:[
              {
                  // 主页
                  path:"/",
                  label:"主页",
                  icon:<HomeOutlined />,
                  element:lazyLoading("Home")
              },
              {
                  // 数据管理
                  path:"/cmn",
                  label:"数据管理",
                  icon:<DatabaseOutlined />,
                  element:<Outlet/>,
                  children:[
                      {
                          path:"/cmn",
                          label:"数据管理",
                          isHide:true,// 是否隐藏
                          element:<Navigate to={"/cmn/dict"}/>
                      },
                      {
                          // 数据字典
                          path:"/cmn/dict",
                          label:"数据字典",
                          element:lazyLoading("cmn/dict")
                      }
                  ]
              },{
                  // 医院管理
                  path:"/hospital",
                  label:"医院管理",
                  icon:<MedicineBoxOutlined />,
                  element:<Outlet/>,
                  children: [
                      {
                          path:"/hospital",
                          // label:"医院管理",
                          element:<Navigate to={"/hospital/hospitalSet"}/>,
                          isHide: true
                      },{
                          path:"/hospital/hospitalSet",
                          element: lazyLoading("hospital/hospitalSet"),
                          label:"医院设置"
                      },{
                          path:"/hospital/hospitalList",
                          element: lazyLoading("hospital/hospitalList"),
                          label:"医院列表"
                      }
                  ]
              }
          ]
      }, {
          path: "/login",
          element: lazyLoading("Login")
      }, {
          path: "*",
          element: lazyLoading("NotFound")
      }
  ];
  
  // 响应路由配置
  export default function () {
      // /cmn/dict
      return useRoutes(routes)
  }
  // 响应侧边栏
  export const renderSlider = function(){
      return (routes.find(v=>v.path==="/") as any).children;
  }
  
  ```

# 30- 动态显示面包屑导航

* 方式一：src->pages->Index->components->IndexHeader.tsx

  ```tsx
  import React, {useEffect, useState} from 'react';
  import {Avatar, Breadcrumb, Dropdown, Space, Layout, Menu} from "antd";
  import {Link, useLocation, useNavigate} from "react-router-dom";
  import {HomeOutlined, LoginOutlined} from "@ant-design/icons";
  import {useAppDispatch} from "@/hooks";
  import {postLogOutAsync, useSelectorAuth} from "@/store/slices/auth";
  import {renderSlider} from "@/routes";
  
  
  function IndexHeader() {
      const {pathname} = useLocation();
      const dispatch = useAppDispatch();
      const navigate = useNavigate();
      const {info} = useSelectorAuth();
      const menu = (
          <Menu
              items={[
                  {
                      key: '1',
                      label: (
                          <Link to={"/"}>返回首页</Link>
                      ),
                      icon: <HomeOutlined />
                  },
                  {
                      key: '2',
                      label: (
                          <a onClick={async e=>{
                              e.preventDefault();
                              await dispatch(postLogOutAsync());
                              navigate("/login");
                          }}>退出登陆</a>
                      ),
                      icon: <LoginOutlined />
                  },
              ]}
          />
      );
  
  
      type TTitleInfo = {
          title:string,
          subTitle?:string
      }
      const [titleInfo,setTitleInfo] = useState<TTitleInfo>({title:"主页"});
      // 思路：1- 找一级标题   2- 找二级标题
      // console.log(pathname);
      useEffect(()=>{
          // console.log("/"+pathname.split("/")[1])
          const info = renderSlider().find((v:any)=>v.path === "/"+pathname.split("/")[1]);
          const title = info.label;// 一级标题
          let subTitle;
          if(info.children){
              subTitle = info.children.find((v:any)=>v.path === pathname).label;
          }
          setTitleInfo({
              title,
              subTitle
          })
      },[pathname])
  
  
  
      return (
          <Layout.Header className="site-layout-background" style={{ padding: 0 }} >
              <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>{titleInfo.title}</Breadcrumb.Item>
                  <Breadcrumb.Item>{titleInfo.subTitle}</Breadcrumb.Item>
              </Breadcrumb>
  
  
              <Space>
                  <span>欢迎回来{info.name}！</span>
                  <Dropdown overlay={menu}>
                      <a onClick={e => e.preventDefault()}>
                          <Avatar src={info.avatar} />
                      </a>
                  </Dropdown>
              </Space>
  
          </Layout.Header>
      );
  }
  
  export default IndexHeader;
  ```

* 方式二：未抽离 src->pages->Index->components->IndexHeader.tsx

  ```tsx
  import React, {useEffect, useMemo, useState} from 'react';
  import {Avatar, Breadcrumb, Dropdown, Space, Layout, Menu} from "antd";
  import {Link, useLocation, useNavigate} from "react-router-dom";
  import {HomeOutlined, LoginOutlined} from "@ant-design/icons";
  import {useAppDispatch} from "@/hooks";
  import {postLogOutAsync, useSelectorAuth} from "@/store/slices/auth";
  import {renderSlider} from "@/routes";
  
  
  function IndexHeader() {
      const {pathname} = useLocation();
      const dispatch = useAppDispatch();
      const navigate = useNavigate();
      const {info} = useSelectorAuth();
      const menu = (
          <Menu
              items={[
                  {
                      key: '1',
                      label: (
                          <Link to={"/"}>返回首页</Link>
                      ),
                      icon: <HomeOutlined />
                  },
                  {
                      key: '2',
                      label: (
                          <a onClick={async e=>{
                              e.preventDefault();
                              await dispatch(postLogOutAsync());
                              navigate("/login");
                          }}>退出登陆</a>
                      ),
                      icon: <LoginOutlined />
                  },
              ]}
          />
      );
  
  
      type TTitleInfo = {
          title:string,
          subTitle?:string
      }
      const [titleInfo,setTitleInfo] = useState<TTitleInfo>({title:"主页"});
  
      const getTitleInfo = useMemo(function():TTitleInfo{
          const info = renderSlider().find((v:any)=>v.path === "/"+pathname.split("/")[1]);
          const title = info.label as string;// 一级标题
          let subTitle;
          if(info.children) subTitle = info.children.find((v:any)=>v.path === pathname).label;
  
          return  {
              title,
              subTitle
          };
      },[pathname]);
      // 思路：1- 找一级标题   2- 找二级标题
      // console.log(pathname);
      useEffect(()=>{
          setTitleInfo(getTitleInfo);
      },[pathname])
  
  
  
      return (
          <Layout.Header className="site-layout-background" style={{ padding: 0 }} >
              <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>{titleInfo.title}</Breadcrumb.Item>
                  <Breadcrumb.Item>{titleInfo.subTitle}</Breadcrumb.Item>
              </Breadcrumb>
  
  
              <Space>
                  <span>欢迎回来{info.name}！</span>
                  <Dropdown overlay={menu}>
                      <a onClick={e => e.preventDefault()}>
                          <Avatar src={info.avatar} />
                      </a>
                  </Dropdown>
              </Space>
  
          </Layout.Header>
      );
  }
  
  export default IndexHeader;
  ```

* 方式三(最终方案)：抽离 

  * src->hooks->index.ts

    ```ts
    export const useAppTitleInfo = ()=>{
        const {pathname} = useLocation();
        return  useMemo(function():TTitleInfo{
            const info = renderSlider().find((v:any)=>v.path === "/"+pathname.split("/")[1]);
            const title = info.label as string;// 一级标题
            let subTitle;
            if(info.children) subTitle = info.children.find((v:any)=>v.path === pathname).label;
    
            return  {
                title,
                subTitle
            };
        },[pathname]);
    }
    ```

  * src->pages->Index->components->IndexHeader.tsx

    ```tsx
    import React, {useEffect, useMemo, useState} from 'react';
    import {Avatar, Breadcrumb, Dropdown, Space, Layout, Menu} from "antd";
    import {Link, useLocation, useNavigate} from "react-router-dom";
    import {HomeOutlined, LoginOutlined} from "@ant-design/icons";
    import {useAppDispatch, useAppTitleInfo} from "@/hooks";
    import {postLogOutAsync, useSelectorAuth} from "@/store/slices/auth";
    import {renderSlider} from "@/routes";
    
    
    function IndexHeader() {
        const {pathname} = useLocation();
        const dispatch = useAppDispatch();
        const navigate = useNavigate();
        const {info} = useSelectorAuth();
        const menu = (
            <Menu
                items={[
                    {
                        key: '1',
                        label: (
                            <Link to={"/"}>返回首页</Link>
                        ),
                        icon: <HomeOutlined />
                    },
                    {
                        key: '2',
                        label: (
                            <a onClick={async e=>{
                                e.preventDefault();
                                await dispatch(postLogOutAsync());
                                navigate("/login");
                            }}>退出登陆</a>
                        ),
                        icon: <LoginOutlined />
                    },
                ]}
            />
        );
    
        const titleInfo:TTitleInfo = useAppTitleInfo();
        return (
            <Layout.Header className="site-layout-background" style={{ padding: 0 }} >
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>{titleInfo.title}</Breadcrumb.Item>
                    <Breadcrumb.Item>{titleInfo.subTitle}</Breadcrumb.Item>
                </Breadcrumb>
    
    
                <Space>
                    <span>欢迎回来{info.name}！</span>
                    <Dropdown overlay={menu}>
                        <a onClick={e => e.preventDefault()}>
                            <Avatar src={info.avatar} />
                        </a>
                    </Dropdown>
                </Space>
    
            </Layout.Header>
        );
    }
    
    export default IndexHeader;
    ```



# 31- 实现路由切换标签-非redux

* src->pages->Index->components->IndexContent.tsx

  ```tsx
  import React, {useEffect, useState} from 'react';
  import {Layout, Tabs} from "antd";
  import {Outlet, useLocation, useNavigate} from "react-router-dom";
  import {useAppTitleInfo} from "@/hooks";
  
  function IndexContent() {
      type TTabs = {
          label: string,
          key: string,
          closable: boolean
      }
      const [items, setItems] = useState<TTabs[]>([
          {
              label: "主页",
              key: "/",
              closable: false
          }
      ]);
      const {pathname: key} = useLocation();
      const {subTitle} = useAppTitleInfo();
      const navigate = useNavigate();
      useEffect(function () {
          // 不允许出现相同的标签
          if (!items.find((v: TTabs) => v.key === key)) {
              setItems([
                  ...items,
                  {
                      label: subTitle as string,
                      key,
                      closable: true
                  }
              ])
          }
  
      }, [key]);
  
      return (
          <Layout.Content style={{margin: '5px'}}>
  
              <div className="site-layout-background" style={{padding: 5, height: "100%"}}>
                  <Tabs
                      hideAdd={true}
                      type="editable-card"
                      // 切换面板的回调
                      onChange={activeKey => navigate(activeKey)}
                      activeKey={key}
                      onEdit={(activeKey)=>{
                          // setItems(items.filter((v:TTabs)=>v.key !== activeKey))
                          const index:number = items.findIndex((v:TTabs)=>v.key === activeKey);
                          const copyItems = [...items];
                          copyItems.splice(index,1);
                          setItems(copyItems);
                          // 判断是否关闭当前的路由面板
                          if(key === activeKey)
                              navigate(items[index-1].key);
  
                      }}
                      items={items}
                  />
  
  
                  <Outlet></Outlet>
  
              </div>
          </Layout.Content>
      );
  }
  
  export default IndexContent;
  ```

* src->pages->Index->components->IndexSider.tsx  ：根据路由切换实现高亮

  ```tsx
  import React, {useEffect, useMemo, useState} from 'react';
  import {Menu, Layout, MenuProps} from "antd";
  import {useLocation, useNavigate} from "react-router-dom";
  import {renderSlider} from "@/routes";
  import {getInfoAsync} from "@/store/slices/auth";
  
  type MenuItem = Required<MenuProps>['items'][number];
  
  function getItem(
      label: React.ReactNode,
      key: React.Key,
      icon?: React.ReactNode,
      children?: MenuItem[],
  ): MenuItem {
      return {
          key,
          icon,
          children,
          label,
      } as MenuItem;
  }
  
  // const items: MenuItem[] = [
  //     getItem('主页', '/', <HomeOutlined />),
  //     getItem('数据管理', '/cmn', <DatabaseOutlined />, [
  //         getItem('数据字典', '/cmn/dict')
  //     ])
  // ];
  
  
  function IndexSider() {
      const navigate = useNavigate();
      const {pathname} = useLocation();
      const [collapsed,setCollapsed] = useState(false);
      const [key,setKey] = useState("/");// 选中subMenu的key值
      // [
      //      getItem("主页","/",<HomeOutlined />),
      //      getItem("数据管理","/cmn",<DatabaseOutlined />)
      // ]
      const items:MenuItem[] = useMemo(function(){
          return (
              renderSlider().map((item:any)=>{
                  let subMenu;
                  if(item.children){
                      subMenu = item.children.filter((v:any)=>!v.isHide).map((item:any)=>(
                          getItem(item.label,item.path)
                      ))
                  }
                  return getItem(item.label,item.path,item.icon,subMenu);
              })
          )
      },[])
  
  
      useEffect(()=>{
          setKey("/"+pathname.split("/")[1])
      },[pathname])
      return (
          <Layout.Sider breakpoint={"md"} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
              <div className="logo">
                  <img src={require("@/assets/img/logo.png")} alt=""/>
                  <span style={{display:collapsed?"none":"inline-block"}}>尚医通管理系统</span>
              </div>
              <Menu onClick={({key})=>{
                  // 点击 MenuItem 调用此函数
                  navigate(key);
              }} theme="dark"
                    // 当前展开的 SubMenu 菜单项 key 数组
                    openKeys={[key]}
                    // SubMenu 展开/关闭的回调
                    onOpenChange={(openKeys: string[])=>{
                        setKey(openKeys[1])
                    }}
                    // 1- 删除 初始选中的菜单项 key 数组
                    // defaultSelectedKeys={[pathname]}
  
                    // 2- 增加 当前选中的菜单项 key 数组
                    selectedKeys = {[pathname]}
                    mode="inline" items={items} />
          </Layout.Sider>
      );
  }
  
  export default IndexSider;
  ```

# 32- 实现路由切换标签-redux

* src->store->slices->common.ts

  ```tsx
  import {
      createSlice
  } from "@reduxjs/toolkit";
  import {useSelector} from "react-redux";
  export type TTabs = {
      label: string,
      key: string,
      closable: boolean
  }
  const items:TTabs[] = [
      {
          label: "主页",
          key: "/",
          closable: false
      }
  ]
  
  const commonSlice = createSlice({
      name:"common",
      initialState:{
          items
      },
      reducers:{
          addItems(state,{payload}){
              if(!state.items.find((item:TTabs)=>item.key === payload.key))
                  state.items.push(payload);
          },
          // delItemsByKey(state,{payload}){
          //     const index = state.items.findIndex((item:TTabs)=>item.key === payload);
          //     state.items.splice(index,1);
          // },
          delItemsByIndex(state,{payload}){
              state.items.splice(payload,1);
          }
      }
  })
  export const {addItems,delItemsByIndex} = commonSlice.actions;
  export const useSelectorCommon = ()=>useSelector((state:any)=>state.common);
  export default commonSlice.reducer;
  ```

* src->store->index.ts

  ```tsx
  import {
      configureStore
  } from "@reduxjs/toolkit";
  import auth from "./slices/auth";
  import common from "./slices/common";
  export default configureStore({
      reducer:{
          auth,
          common
      }
  })
  ```

* src->pages->Index->components->IndexContent.tsx

  ```tsx
  import React, {useEffect} from 'react';
  import {Layout, Tabs} from "antd";
  import {Outlet, useLocation, useNavigate} from "react-router-dom";
  import {addItems, delItemsByIndex, useSelectorCommon} from "@/store/slices/common";
  import {useAppDispatch, useAppTitleInfo} from "@/hooks";
  import type {TTabs} from "@/store/slices/common";
  
  function IndexContent() {
      const {items} = useSelectorCommon();
      const {pathname: key} = useLocation();
      const dispatch = useAppDispatch();
      const info = useAppTitleInfo();
      const navigate = useNavigate();
      useEffect(() => {
          dispatch(addItems({
              key,
              label: info.subTitle as string,
              closable: true
          }))
      }, [key]);
      return (
          <Layout.Content style={{margin: '5px'}}>
              <div className="site-layout-background" style={{padding: 5, height: "100%"}}>
                  <Tabs
                      hideAdd={true}
                      type="editable-card"
                      onChange={activekey => navigate(activekey)}
                      activeKey={key}
                      onEdit={activeKey=>{
                          // 根据activeKey找到items数组中对应下标
                          const index = items.findIndex((items:TTabs)=>items.key === activeKey);
                          // 根据index删除items中的数据
                          dispatch(delItemsByIndex(index));
                          // 判断当前路由（key)地址，与点击关闭的地址（activeKey）是否相等。
                          // 如果相等，跳转
                          if(key === activeKey){
                              navigate(items[index-1].key);
                          }
                      }}
                      items={items}
                  />
                  <Outlet></Outlet>
              </div>
          </Layout.Content>
      );
  }
  
  export default IndexContent;
  ```

  

# 33- 数据字典渲染

* 数据字典接口：http://139.198.34.216:8202/swagger-ui.html

## 33-1- 配置axios

* 项目根目录->craco.config.js

  ```tsx
  // 可以在该文件中对webpack进行二次配置。
  const path = require("path");
  const CracoAntDesignPlugin = require('craco-antd');
  module.exports = {
      plugins: [
          {
              plugin: CracoAntDesignPlugin,
              options: {
                  customizeTheme: {
                      '@primary-color': '#1DA57A',
                  },
              },
          },
      ],
      webpack:{
          // 别名处理：属性名即是别名：值是别名对应的目录
          alias:{
              "@":path.resolve(__dirname,"./src")
          }
      },
      devServer:{
          port:80,// 将默认3000端口号设置为80
          host:"zhangpeiyue.com",// 将localhost--->zhangpeiyue.com 指定主机名 ip  域名
          proxy:{
  
              // /auth/index/login
              "/auth":{
                  target:"http://139.198.34.216:8230/admin",// 请求服务地址
                  changeOrigin:true,// 允许跨域
              },
              // 1- 增加代理
              "/syt":{
                  target:"http://syt-api.atguigu.cn",
                  changeOrigin:true,
                  pathRewrite:{
                      "^/syt":""
                  }
              }
  
          }
      }
  }
  ```

* src->request->syt.ts

  ```ts
  import axios from "axios";
  const sytRequest = axios.create({
      baseURL:"/syt/admin"
  })
  
  sytRequest.interceptors.response.use(res=>{
      return res.data;
  });
  export default sytRequest;
  ```

  

* src->request->index.ts

  ```ts
  import authRequest from "@/request/auth";
  import sytRequest from "@/request/syt";
  export {
      authRequest,
      sytRequest
  }
  ```

* src->api->dict.ts

  ```ts
  // 与数据字典相关的接口
  import {sytRequest} from "@/request";
  // GET /admin/cmn/dict/findByParentId/{parentId}
  // 根据上级id获取子节点数据列表
  export const getFindByParentId = (parentId:number)=>{
      return sytRequest.get(`/cmn/dict/findByParentId/${parentId}`)
  }
  ```

## 33-2- 配置redux

* src->store->slices->dict.ts

  ```ts
  import {createSlice} from "@reduxjs/toolkit";
  import {getFindByParentId} from "@/api/dict";
  import {useSelector} from "react-redux";
  const dictSlice = createSlice({
      name:"dict",
      initialState:{
          dictList:[],// 保存获取过来的数据字典数据
      },
      reducers:{
          upDictList(state,{payload}){
              state.dictList = payload;
          }
      }
  })
  const {upDictList} = dictSlice.actions;
  export const getFindByParentIdAsync = (parentId:number)=>{
      return async (dispatch:any)=>{
          const result = await getFindByParentId(parentId);
          dispatch(upDictList(result.data));
      }
  }
  export const useSelectorDict = ()=> useSelector((state:any)=>state.dict);
  export default dictSlice.reducer;
  ```

  

* src->store->index.ts

  ```ts
  import {
      configureStore
  } from "@reduxjs/toolkit";
  import auth from "./slices/auth";
  import common from "./slices/common";
  import dict from "@/store/slices/dict";
  export default configureStore({
      reducer:{
          auth,
          common,
          dict
      }
  })
  ```

## 33-3- 配置表单

* src->pages->cmn->dict->index.tsx

  ```tsx
  import React, {useEffect} from 'react';
  import {getFindByParentIdAsync, useSelectorDict} from "@/store/slices/dict";
  import {useAppDispatch} from "@/hooks";
  import {Table} from "antd";
  
  function Dict() {
      const dispatch = useAppDispatch();
      const {dictList} = useSelectorDict();
      useEffect(()=>{
          dispatch(getFindByParentIdAsync(1));
      },[]);
      return (
          <Table
              columns={[
                  {
                      title:"名称",
                      dataIndex:"name"
                  },
                  {
                      title:"编码",
                      dataIndex:"dictCode"
                  },
                  {
                      title:"值",
                      dataIndex:"value"
                  },
                  {
                      title:"创建时间",
                      dataIndex:"createTime"
                  }
              ]}
              // 数组元素中的id属性值作为标识
              rowKey={"id"}
              // 数据源(数组）
              dataSource={dictList}
          ></Table>
      );
  }
  
  export default Dict;
  ```

  

## 33-4- 配置展开

* src->store->slices->dict.ts

  ```ts
  import {createSlice} from "@reduxjs/toolkit";
  import {getFindByParentId} from "@/api/dict";
  import {useSelector} from "react-redux";
  
  const getInfoById = (arr:any[],id:number):any=>{
      let info;
      for(let i=0;i<arr.length;i++){
          if(arr[i].id === id){
              info=arr[i];
          }else if(arr[i].children && arr[i].children.length>0){
              info = getInfoById(arr[i].children,id);
          }
          if(info) break;
      }
      return info;
  }
  
  
  const dictSlice = createSlice({
      name:"dict",
      initialState:{
          dictList:[],// 保存获取过来的数据字典数据
      },
      reducers:{
          upDictList(state,{payload}){
              // payload：{dictList,parentId}
              // const info:any = state.dictList.find((v:any)=>v.id === payload.parentId);
              // if(info){
              //     info.children = payload.dictList;
              // }else{
              //     state.dictList = payload.dictList;
              // }
  
  
              const info:any = getInfoById(state.dictList,payload.parentId);
              if(info) info.children = payload.dictList;
              else state.dictList = payload.dictList;
          }
      }
  })
  const {upDictList} = dictSlice.actions;
  // parentId 86
  export const getFindByParentIdAsync = (parentId:number)=>{
      return async (dispatch:any)=>{
          const result = await getFindByParentId(parentId);
          dispatch(upDictList({
              dictList:result.data.map((item:any)=>{
                  // 判断是否拥有子类型，如果有增加名字为children的属性，值为[]
                  if(item.hasChildren){
                      item.children = []
                  }
                  return item;
              }),
              parentId
          }));
      }
  }
  export const useSelectorDict = ()=> useSelector((state:any)=>state.dict);
  export default dictSlice.reducer;
  ```

* src->pages->cmn->dict->index.tsx

  ```tsx
  import React, {useEffect} from 'react';
  import {getFindByParentIdAsync, useSelectorDict} from "@/store/slices/dict";
  import {useAppDispatch} from "@/hooks";
  import {Table} from "antd";
  
  function Dict() {
      const dispatch = useAppDispatch();
      const {dictList} = useSelectorDict();
      useEffect(()=>{
          dispatch(getFindByParentIdAsync(1));
      },[]);
      return (
          <Table
              expandable={{
                  // 点击展开图标时触发
                  onExpand(expanded, record){
                      // expanded:是否展开
                      if(expanded){
                          // console.log(record.id);
                          dispatch(getFindByParentIdAsync(record.id));
                      }
                  }
              }}
              // 不需要分页
              pagination={false}
              // 列信息
              columns={[
                  {
                      title:"名称",
                      dataIndex:"name"
                  },
                  {
                      title:"编码",
                      dataIndex:"dictCode"
                  },
                  {
                      title:"值",
                      dataIndex:"value"
                  },
                  {
                      title:"创建时间",
                      dataIndex:"createTime"
                  }
              ]}
              // 数组元素中的id属性值作为标识
              rowKey={"id"}
              // 数据源(数组）
              dataSource={dictList}
          ></Table>
      );
  }
  
  export default Dict;
  ```

  



## 33-5- 配置加载中

* src->store->slices->dict.ts

  ```ts
  import {createSlice} from "@reduxjs/toolkit";
  import {getFindByParentId} from "@/api/dict";
  import {useSelector} from "react-redux";
  
  const getInfoById = (arr:any[],id:number):any=>{
      let info;
      for(let i=0;i<arr.length;i++){
          if(arr[i].id === id){
              info=arr[i];
          }else if(arr[i].children && arr[i].children.length>0){
              info = getInfoById(arr[i].children,id);
          }
          if(info) break;
      }
      return info;
  }
  
  
  const dictSlice = createSlice({
      name:"dict",
      initialState:{
          dictList:[],// 保存获取过来的数据字典数据
          loading:false
      },
      reducers:{
          upLoading(state,{payload}){
              state.loading = payload;
          },
          upDictList(state,{payload}){
              // payload：{dictList,parentId}
              // const info:any = state.dictList.find((v:any)=>v.id === payload.parentId);
              // if(info){
              //     info.children = payload.dictList;
              // }else{
              //     state.dictList = payload.dictList;
              // }
  
  
              const info:any = getInfoById(state.dictList,payload.parentId);
              if(info) info.children = payload.dictList;
              else state.dictList = payload.dictList;
          }
      }
  })
  const {upDictList,upLoading} = dictSlice.actions;
  // parentId 86
  export const getFindByParentIdAsync = (parentId:number)=>{
      return async (dispatch:any)=>{
          dispatch(upLoading(true));
          const result = await getFindByParentId(parentId);
          dispatch(upDictList({
              dictList:result.data.map((item:any)=>{
                  // 判断是否拥有子类型，如果有增加名字为children的属性，值为[]
                  if(item.hasChildren){
                      item.children = []
                  }
                  return item;
              }),
              parentId
          }));
          dispatch(upLoading(false));
      }
  }
  export const useSelectorDict = ()=> useSelector((state:any)=>state.dict);
  export default dictSlice.reducer;
  ```

* src->pages->cmn->dict->index.tsx

  ```tsx
  import React, {useEffect} from 'react';
  import {getFindByParentIdAsync, useSelectorDict} from "@/store/slices/dict";
  import {useAppDispatch} from "@/hooks";
  import {Table} from "antd";
  
  function Dict() {
      const dispatch = useAppDispatch();
      const {dictList,loading} = useSelectorDict();
      useEffect(()=>{
          dispatch(getFindByParentIdAsync(1));
      },[]);
      return (
          <Table
              // 加载中
              loading={loading}
              expandable={{
                  // 点击展开图标时触发
                  onExpand(expanded, record){
                      // expanded:是否展开
                      if(expanded){
                          // console.log(record.id);
                          dispatch(getFindByParentIdAsync(record.id));
                      }
                  }
              }}
              // 不需要分页
              pagination={false}
              // 列信息
              columns={[
                  {
                      title:"名称",
                      dataIndex:"name"
                  },
                  {
                      title:"编码",
                      dataIndex:"dictCode"
                  },
                  {
                      title:"值",
                      dataIndex:"value"
                  },
                  {
                      title:"创建时间",
                      dataIndex:"createTime"
                  }
              ]}
              // 数组元素中的id属性值作为标识
              rowKey={"id"}
              // 数据源(数组）
              dataSource={dictList}
          ></Table>
      );
  }
  
  export default Dict;
  ```

  

## 33-6- 配置滚动条

* src->pages->Index->index.less

  ```less
  #content{
      overflow-y: auto;
      height: calc(100vh - 185px);
  }
  ```

* src->pages->cmn->dict->index.tsx

  ```tsx
  <div id="content">
  ……
  </div>
  ```

  

# 34- 完成医院设置

* 医院接口地址 http://139.198.34.216:8201/swagger-ui.html

## 34-1- 医院表格渲染

* src->api->hosp.ts

  ```tsx
  import {sytRequest} from "@/request";
  // GET /admin/hosp/hospitalSet/{page}/{limit}
  // 获取分页列表
  
  export const getHospitalSet = (page:number,limit:number)=>{
      return sytRequest.get(`/hosp/hospitalSet/${page}/${limit}`)
  }
  ```

* src->store->slices->hosp.ts

  ```ts
  import {
      createSlice
  } from "@reduxjs/toolkit";
  import {getHospitalSet} from "@/api/hosp";
  import {useSelector} from "react-redux";
  
  const hospSlice = createSlice({
      name:"hosp",
      initialState:{
          hospitalSetList:[],// 医院设置列表
      },
      reducers:{
          upHospitalSetList(state,{payload}){
              state.hospitalSetList = payload;
          }
      }
  })
  const {upHospitalSetList} = hospSlice.actions;
  // 暴露异步action:调用医院设置列表信息
  export const getHospitalSetAsync = (page:number,limit:number)=>{
      return async (dispatch:any)=>{
          const result = await getHospitalSet(page,limit);
          dispatch(upHospitalSetList(result.data.records))
      }
  }
  export const useSelectorHosp = ()=>useSelector((state:any)=>state.hosp);
  export default hospSlice.reducer;
  
  ```

* src->store->index.ts

  ```ts
  import {
      configureStore
  } from "@reduxjs/toolkit";
  import auth from "./slices/auth";
  import common from "./slices/common";
  import dict from "@/store/slices/dict";
  import hosp from "@/store/slices/hosp";
  export default configureStore({
      reducer:{
          auth,
          common,
          dict,
          hosp
      }
  })
  ```

* src->pages->hospital->hospitalSet->index.tsx

  ```tsx
  import React, {useEffect} from 'react';
  import {Space, Table,Tooltip,Button} from "antd";
  import {FormOutlined,DeleteOutlined} from "@ant-design/icons";
  import {useAppDispatch} from "@/hooks";
  import {getHospitalSetAsync, useSelectorHosp} from "@/store/slices/hosp";
  
  function Index() {
      const dispatch = useAppDispatch();
      const {hospitalSetList} = useSelectorHosp();
      useEffect(()=>{
          dispatch(getHospitalSetAsync(1,4));
      },[])
      return (
          <div>
              {/*<div style={{ marginBottom: 16 }}>*/}
              {/*    <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>*/}
              {/*        Reload*/}
              {/*    </Button>*/}
              {/*    <span style={{ marginLeft: 8 }}>*/}
              {/*        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}*/}
              {/*    </span>*/}
              {/*</div>*/}
              <Table
                  // rowSelection={rowSelection}
                  columns={[
                      {
                          title:"序号",
                          // dataIndex:"id",
                          // 如果设置了dataIndex,那么render的第一个形参即是dataIndex对应的属性值
                          // 如果未设置dataIndex,那么render的第一个形参即是行信息
  
                          // 第二个参数是行信息
                          render(value,rows,index){
                              console.log(index)
                              return index+1;
                          }
                      },{
                          title:"医院名称",
                          dataIndex:"hosname"
                      },{
                          title:"医院编号",
                          dataIndex:"hoscode"
                      },{
                          title:"是否锁定",
                          dataIndex:"status"
                      },{
                          title:"api基础地址",
                          dataIndex:"apiUrl"
                      },{
                          title:"密钥",
                          dataIndex:"signKey"
                      },{
                          title:"联系人姓名",
                          dataIndex:"contactsName"
                      },{
                          title:"联系人手机",
                          dataIndex:"contactsPhone"
                      },{
                          title:"添加时间",
                          dataIndex:"createTime"
                      },{
                          title:"修改时间",
                          dataIndex:"updateTime"
                      },{
                          title:"操作",
                          // dataIndex:"updateTime"
                          render(){
                              return (
                                  <Space>
                                      <Tooltip title="修改">
                                          <Button type="primary" shape="circle" icon={<FormOutlined />} />
                                      </Tooltip>
                                      <Tooltip title="删除">
                                          <Button type="primary" shape="circle" icon={<DeleteOutlined />} />
                                      </Tooltip>
                                  </Space>
                              )
                          }
                      }
                  ]}
                  rowKey={"id"}
                  dataSource={hospitalSetList}
              />
          </div>
      );
  }
  
  export default Index;
  ```

## 34-2- 表格渲染整理

* src->pages->hospital->hospitalSet->index.tsx

  ```tsx
  import React, {useEffect} from 'react';
  import {Space, Table,Tooltip,Button} from "antd";
  import {FormOutlined,DeleteOutlined} from "@ant-design/icons";
  import {useAppDispatch} from "@/hooks";
  import {getHospitalSetAsync, useSelectorHosp} from "@/store/slices/hosp";
  
  function Index() {
      const dispatch = useAppDispatch();
      const {hospitalSetList} = useSelectorHosp();
      useEffect(()=>{
          dispatch(getHospitalSetAsync(1,4));
      },[])
      return (
          <div>
              {/*<div style={{ marginBottom: 16 }}>*/}
              {/*    <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>*/}
              {/*        Reload*/}
              {/*    </Button>*/}
              {/*    <span style={{ marginLeft: 8 }}>*/}
              {/*        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}*/}
              {/*    </span>*/}
              {/*</div>*/}
              <Table
                  // 增加边框
                  bordered={true}
                  // 指定横向的宽度
                  scroll={{
                      x:1500
                  }}
                  // rowSelection={rowSelection}
                  columns={[
                      {
                          title:"序号",
                          align:"center",
                          width:70,
                          // dataIndex:"id",
                          // 如果设置了dataIndex,那么render的第一个形参即是dataIndex对应的属性值
                          // 如果未设置dataIndex,那么render的第一个形参即是行信息
  
                          // 第二个参数是行信息
                          render(value,rows,index){
                              console.log(index)
                              return index+1;
                          }
                      },{
                          title:"医院名称",
                          align:"center",
                          ellipsis:true,
                          width:200,
                          dataIndex:"hosname"
                      },{
                          title:"医院编号",
                          align:"center",
                          width:140,
                          ellipsis:true,
                          dataIndex:"hoscode"
                      },{
                          title:"是否锁定",
                          align:"center",
                          dataIndex:"status"
                      },{
                          title:"api基础地址",
                          align:"center",
                          width:140,
                          dataIndex:"apiUrl"
                      },{
                          title:"密钥",
                          align:"center",
                          width:140,
                          ellipsis:true,
                          dataIndex:"signKey"
                      },{
                          title:"联系人姓名",
                          align:"center",
                          dataIndex:"contactsName"
                      },{
                          title:"联系人手机",
                          align:"center",
                          dataIndex:"contactsPhone"
                      },{
                          title:"添加时间",
                          align:"center",
                          width:160,
                          dataIndex:"createTime"
                      },{
                          title:"修改时间",
                          align:"center",
                          width:160,
                          dataIndex:"updateTime"
                      },{
                          title:"操作",
                          fixed:"right",
                          // dataIndex:"updateTime"
                          render(){
                              return (
                                  <Space>
                                      <Tooltip title="修改">
                                          <Button type="primary" shape="circle" icon={<FormOutlined />} />
                                      </Tooltip>
                                      <Tooltip title="删除">
                                          <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} />
                                      </Tooltip>
                                  </Space>
                              )
                          }
                      }
                  ]}
                  rowKey={"id"}
                  dataSource={hospitalSetList}
              />
          </div>
      );
  }
  
  export default Index;
  ```

## 34-3- 表格分页

* 全局中文配置：src->index.tsx

  ```tsx
  import React from "react";
  import ReactDOM from "react-dom/client";
  import {
      BrowserRouter as Router
  } from "react-router-dom";
  import store from "./store";
  import {
      Provider
  } from "react-redux";
  import zhCN from 'antd/es/locale/zh_CN';
  import {ConfigProvider} from "antd";
  import App from "@/App";
  // 1- 指定挂载的位置
  const root = ReactDOM.createRoot(document.querySelector("#root") as Element);
  
  // 2- 将App呈现到界面中
  root.render((
      <ConfigProvider locale={zhCN}>
          <Provider store={store}>
              <Router>
                  <App/>
              </Router>
          </Provider>
      </ConfigProvider>
  
  
  ));
  
  ```

* src->store->slices->common.ts

  ```ts
  import {
      createSlice
  } from "@reduxjs/toolkit";
  import {useSelector} from "react-redux";
  export type TTabs = {
      label: string,
      key: string,
      closable: boolean
  }
  const items:TTabs[] = [
      {
          label: "主页",
          key: "/",
          closable: false
      }
  ]
  
  const commonSlice = createSlice({
      name:"common",
      initialState:{
          items,
          loading:false,
          pageInfo:{
              current:1,// 当前页码
              pageSize:1,// 每页显示的条数
              total:1,//总条数
          }
      },
      reducers:{
          upLoading(state,{payload}){
              state.loading = payload;
          },
          upPageInfo(state,{payload}){
             state.pageInfo = payload;
          },
          addItems(state,{payload}){
              if(!state.items.find((item:TTabs)=>item.key === payload.key))
                  state.items.push(payload);
          },
          // delItemsByKey(state,{payload}){
          //     const index = state.items.findIndex((item:TTabs)=>item.key === payload);
          //     state.items.splice(index,1);
          // },
          delItemsByIndex(state,{payload}){
              state.items.splice(payload,1);
          }
      }
  })
  export const {addItems,upPageInfo,upLoading,delItemsByIndex} = commonSlice.actions;
  export const useSelectorCommon = ()=>useSelector((state:any)=>state.common);
  export default commonSlice.reducer;
  ```

* src->store->slices->hosp.ts

  ```ts
  import {
      createSlice
  } from "@reduxjs/toolkit";
  import {getHospitalSet} from "@/api/hosp";
  import {useSelector} from "react-redux";
  import {upPageInfo} from "@/store/slices/common";
  
  const hospSlice = createSlice({
      name:"hosp",
      initialState:{
          hospitalSetList:[],// 医院设置列表
      },
      reducers:{
          upHospitalSetList(state,{payload}){
              state.hospitalSetList = payload;
          }
      }
  })
  const {upHospitalSetList} = hospSlice.actions;
  // 暴露异步action:调用医院设置列表信息
  export const getHospitalSetAsync = (page:number,limit:number)=>{
      return async (dispatch:any)=>{
          const result = await getHospitalSet(page,limit);
          dispatch(upHospitalSetList(result.data.records));
          // 1- 更新页码相关信息
          dispatch(upPageInfo({
              current:result.data.current,
              pageSize:result.data.size,
              total:result.data.total
          }))
      }
  }
  export const useSelectorHosp = ()=>useSelector((state:any)=>state.hosp);
  export default hospSlice.reducer;
  
  ```

* src->pages->hospital->hospitalSet->index.tsx

  ```tsx
  import React, {useEffect} from 'react';
  import {Space, Table,Tooltip,Button} from "antd";
  import {FormOutlined,DeleteOutlined} from "@ant-design/icons";
  import {useAppDispatch} from "@/hooks";
  import {getHospitalSetAsync, useSelectorHosp} from "@/store/slices/hosp";
  import {useSelectorCommon} from "@/store/slices/common";
  
  function Index() {
      const dispatch = useAppDispatch();
      const {hospitalSetList} = useSelectorHosp();
      // 1- 引入pageInfo
      const {pageInfo,loading} = useSelectorCommon();
      useEffect(()=>{
          dispatch(getHospitalSetAsync(1,4));
      },[])
      return (
          <div>
              {/*<div style={{ marginBottom: 16 }}>*/}
              {/*    <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>*/}
              {/*        Reload*/}
              {/*    </Button>*/}
              {/*    <span style={{ marginLeft: 8 }}>*/}
              {/*        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}*/}
              {/*    </span>*/}
              {/*</div>*/}
              <Table
                   loading={loading}
                  // 2- 配置分页信息
                  pagination={{
                     ...pageInfo,
                      onChange(page,pageSize){
                          dispatch(getHospitalSetAsync(page,pageSize));
                      }
                  }}
                  // 增加边框
                  bordered={true}
                  // 指定横向的宽度
                  scroll={{
                      x:1500
                  }}
                  // rowSelection={rowSelection}
                  columns={[
                      {
                          title:"序号",
                          align:"center",
                          width:70,
                          // dataIndex:"id",
                          // 如果设置了dataIndex,那么render的第一个形参即是dataIndex对应的属性值
                          // 如果未设置dataIndex,那么render的第一个形参即是行信息
  
                          // 第二个参数是行信息
                          render(value,rows,index){
                              // console.log(index)
                              // 3- 序号调整
                              return (pageInfo.current-1)*pageInfo.pageSize+index+1;
                          }
                      },{
                          title:"医院名称",
                          align:"center",
                          ellipsis:true,
                          width:200,
                          dataIndex:"hosname"
                      },{
                          title:"医院编号",
                          align:"center",
                          width:140,
                          ellipsis:true,
                          dataIndex:"hoscode"
                      },{
                          title:"是否锁定",
                          align:"center",
                          dataIndex:"status"
                      },{
                          title:"api基础地址",
                          align:"center",
                          width:140,
                          dataIndex:"apiUrl"
                      },{
                          title:"密钥",
                          align:"center",
                          width:140,
                          ellipsis:true,
                          dataIndex:"signKey"
                      },{
                          title:"联系人姓名",
                          align:"center",
                          dataIndex:"contactsName"
                      },{
                          title:"联系人手机",
                          align:"center",
                          dataIndex:"contactsPhone"
                      },{
                          title:"添加时间",
                          align:"center",
                          width:160,
                          dataIndex:"createTime"
                      },{
                          title:"修改时间",
                          align:"center",
                          width:160,
                          dataIndex:"updateTime"
                      },{
                          title:"操作",
                          fixed:"right",
                          // dataIndex:"updateTime"
                          render(){
                              return (
                                  <Space>
                                      <Tooltip title="修改">
                                          <Button type="primary" shape="circle" icon={<FormOutlined />} />
                                      </Tooltip>
                                      <Tooltip title="删除">
                                          <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} />
                                      </Tooltip>
                                  </Space>
                              )
                          }
                      }
                  ]}
                  rowKey={"id"}
                  dataSource={hospitalSetList}
              />
          </div>
      );
  }
  
  export default Index;
  ```

## 34-4- 完成锁定

* src->api->hosp.ts

  ```ts
  // GET /admin/hosp/hospitalSet/lock/{id}/{status}
  // 锁定
  export const getHospitalSetLockById = (id:number,status:number)=>{
      return sytRequest.get(`/hosp/hospitalSet/lock/${id}/${status===0?1:0}`)
  }
  ```

* src->store->slices->hosp.ts

  ```tsx
  // 更改锁定状态
  export const getHospitalSetLockByIdAsync = (id:number,status:number)=>{
      return async (dispatch:any,getState:any)=>{
          await getHospitalSetLockById(id,status);
          // const {pageInfo:{current,pageSize}} = getState().common;
          const {current,pageSize} = getState().common.pageInfo;
          await dispatch(getHospitalSetAsync(current,pageSize));
      }
  }
  ```

* src->pages->hospital->hospitalSet->index.tsx

  ```tsx
  {
      title:"是否锁定",
          align:"center",
              // dataIndex:"status",// 0：锁定 1：未锁定
              render(rows){
              return (
                  <Switch checked={rows.status===0} onChange={()=>{
                          dispatch(getHospitalSetLockByIdAsync(rows.id,rows.status));
                      }} />
              )
          }
  
  }
  ```

## 34-5- 完成添加

* src->api->hosp.ts

  ```ts
  // POST /admin/hosp/hospitalSet/save
  // 新增医院设置
  export const postHospitalSetSave = (body:any)=>{
      return sytRequest.post("/hosp/hospitalSet/save",body);
  }
  ```

* src->store->slices->hosp.ts

  ```ts
  export const postHospitalSetSaveAsync = (body:any)=>{
      return async (dispatch:any,getState:any)=>{
          await postHospitalSetSave(body);// 添加医院
          const {current,pageSize} = getState().common.pageInfo;
          await dispatch(getHospitalSetAsync(current,pageSize));// 更新设置
      }
  }
  ```

* src->request->syt.ts

  ```ts
  import axios from "axios";
  import {message} from "antd";
  const sytRequest = axios.create({
      baseURL:"/syt/admin"
  })
  
  sytRequest.interceptors.response.use((res:any)=>{
      if(res.data.code === 200) return res.data;
      message.error(res.data.message)
      return Promise.reject(res.data);
  });
  export default sytRequest;
  ```

* src->pages->hospital->hospitalSet->components->SetModal.tsx

  ```tsx
  import React from 'react';
  import {Modal, Form, Input, Button, Space, message} from "antd";
  import {useAppDispatch} from "@/hooks";
  import {postHospitalSetSaveAsync} from "@/store/slices/hosp";
  
  function SetModal(props:any) {
      const [form] = Form.useForm();
      const dispatch = useAppDispatch();
      return (
          <Modal title="添加医院设置"
                 open={props.isModalOpen}
                 footer={null}
                 // 点击蒙层是否允许关闭
                 maskClosable={false}
                 // onOk={handleOk}
                 onCancel={()=>{
                      form.resetFields();// 清空表单
                     props.setIsModalOpen(false);
                 }}
          >
              <Form
                  form={form}
                  name="basic"
                  labelCol={{ span: 5 }}
                  wrapperCol={{ span: 19 }}
                  onFinish={async (values)=>{
                      await dispatch(postHospitalSetSaveAsync(values));
                      message.success("添加"+values.hosname+"成功")
                      form.resetFields();// 清空表单
                      props.setIsModalOpen(false);
                  }}
                  autoComplete="off"
              >
                  <Form.Item
                      label="医院名称"
                      name="hosname"
                      rules={[{
                          required: true,
                          min:2,
                          max:16,
                          message: '请输入医院名称' }
                      ]}
                  >
                      <Input />
                  </Form.Item>
  
                  <Form.Item
                      label="医院编号"
                      name="hoscode"
                      rules={[{ required: true, message: '请输入医院编码' }]}
                  >
                      <Input />
                  </Form.Item>
  
                  <Form.Item
                      label="api基础地址"
                      name="apiUrl"
                      rules={[{
                          required: true,
                          pattern:/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i,
                          message: '请输入正确的api基础地址'
                      }]}
                  >
                      <Input />
                  </Form.Item>
  
                  <Form.Item
                      label="联系人姓名"
                      name="contactsName"
                      rules={[{ required: true, message: '请输入联系人姓名' }]}
                  >
                      <Input />
                  </Form.Item>
  
                  <Form.Item
                      label="联系人手机"
                      name="contactsPhone"
  
                      rules={[{ required: true,
                          pattern:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
                          message: '请输入正确 的联系人手机' }]}
                  >
                      <Input />
                  </Form.Item>
  
  
  
  
                  <Form.Item wrapperCol={{ offset: 5, span: 19 }}>
                      <Space>
                          <Button type="primary" htmlType="submit">
                              提交
                          </Button>
                          <Button onClick={()=>{
                              form.resetFields();
                          }} htmlType="button">
                              清空
                          </Button>
                      </Space>
                  </Form.Item>
              </Form>
          </Modal>
      );
  }
  
  export default SetModal;
  ```

* src->pages->hospital->hospitalSet->index.tsx

  ```tsx
  import React, {useEffect, useState} from 'react';
  import {Space, Table,Tooltip,Button,Switch} from "antd";
  import {FormOutlined,DeleteOutlined} from "@ant-design/icons";
  import {useAppDispatch} from "@/hooks";
  import {getHospitalSetAsync, getHospitalSetLockByIdAsync, useSelectorHosp} from "@/store/slices/hosp";
  import {useSelectorCommon} from "@/store/slices/common";
  import SetModal from "@/pages/hospital/hospitalSet/components/SetModal";
  
  function Index() {
      const dispatch = useAppDispatch();
      // 定义一个用于指定modal是否弹出的状态isModalOpen
      const [isModalOpen,setIsModalOpen] = useState(false);
      const {hospitalSetList} = useSelectorHosp();
      const {pageInfo,loading} = useSelectorCommon();
      useEffect(()=>{
          dispatch(getHospitalSetAsync(1,4));
      },[])
      return (
          <div>
              <div style={{ marginBottom: 16 }}>
                  <Button type={"primary"} onClick={()=>{
                      setIsModalOpen(true);
                  }}>添加医院设置</Button>
                  {/*<Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>*/}
                  {/*    Reload*/}
                  {/*</Button>*/}
                  {/*<span style={{ marginLeft: 8 }}>*/}
                  {/*    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}*/}
                  {/*</span>*/}
              </div>
              <Table
                  loading={loading}
                  pagination={{
                     ...pageInfo,
                      onChange(page,pageSize){
                          dispatch(getHospitalSetAsync(page,pageSize));
                      }
                  }}
                  // 增加边框
                  bordered={true}
                  // 指定横向的宽度
                  scroll={{
                      x:1500
                  }}
                  // rowSelection={rowSelection}
                  columns={[
                      {
                          title:"序号",
                          align:"center",
                          width:70,
                          // dataIndex:"id",
                          // 如果设置了dataIndex,那么render的第一个形参即是dataIndex对应的属性值
                          // 如果未设置dataIndex,那么render的第一个形参即是行信息
  
                          // 第二个参数是行信息
                          render(value,rows,index){
                              console.log(index)
                              return (pageInfo.current-1)*pageInfo.pageSize+index+1;
                          }
                      },{
                          title:"医院名称",
                          align:"center",
                          ellipsis:true,
                          width:200,
                          dataIndex:"hosname"
                      },{
                          title:"医院编号",
                          align:"center",
                          width:140,
                          ellipsis:true,
                          dataIndex:"hoscode"
                      },{
                          title:"是否锁定",
                          align:"center",
                          // dataIndex:"status",// 0：锁定 1：未锁定
                          render(rows){
                              return (
                                  <Switch checked={rows.status===0} onChange={()=>{
                                      dispatch(getHospitalSetLockByIdAsync(rows.id,rows.status));
                                  }} />
                              )
                          }
  
                      },{
                          title:"api基础地址",
                          align:"center",
                          width:140,
                          dataIndex:"apiUrl"
                      },{
                          title:"密钥",
                          align:"center",
                          width:140,
                          ellipsis:true,
                          dataIndex:"signKey"
                      },{
                          title:"联系人姓名",
                          align:"center",
                          dataIndex:"contactsName"
                      },{
                          title:"联系人手机",
                          align:"center",
                          dataIndex:"contactsPhone"
                      },{
                          title:"添加时间",
                          align:"center",
                          width:160,
                          dataIndex:"createTime"
                      },{
                          title:"修改时间",
                          align:"center",
                          width:160,
                          dataIndex:"updateTime"
                      },{
                          title:"操作",
                          fixed:"right",
                          // dataIndex:"updateTime"
                          render(){
                              return (
                                  <Space>
                                      <Tooltip title="修改">
                                          <Button type="primary" shape="circle" icon={<FormOutlined />} />
                                      </Tooltip>
                                      <Tooltip title="删除">
                                          <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} />
                                      </Tooltip>
                                  </Space>
                              )
                          }
                      }
                  ]}
                  rowKey={"id"}
                  dataSource={hospitalSetList}
              />
              <SetModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
          </div>
      );
  }
  
  export default Index;
  ```

  



## 34-6- 完成修改

> 思路：修改医院设置数据
>
> 1- 点击按钮有一个弹出层（完成）
>
> 2-弹出层的标题为修改医院设置，表单为即要修改的数据。（完成）
>
> 3- 点击按钮进行修改。
>
> ​	3-1- 发送ajax请求

* src->api->hosp.ts

  ```ts
  // PUT /admin/hosp/hospitalSet/update
  // 修改医院设置
  export const putHospitalSetUpdate = (body:any)=>{
      return sytRequest.put(`/hosp/hospitalSet/update`,body);
  }
  ```

* src->store->slices->hosp.ts

  ```ts
  import {
      createSlice
  } from "@reduxjs/toolkit";
  import {getHospitalSet, getHospitalSetLockById, postHospitalSetSave, putHospitalSetUpdate} from "@/api/hosp";
  import {useSelector} from "react-redux";
  import {upLoading, upPageInfo} from "@/store/slices/common";
  
  const hospSlice = createSlice({
      name:"hosp",
      initialState:{
          hospitalSetList:[],// 医院设置列表
      },
      reducers:{
          upHospitalSetList(state,{payload}){
              state.hospitalSetList = payload;
          }
      }
  })
  const {upHospitalSetList} = hospSlice.actions;
  // 暴露异步action:调用医院设置列表信息
  export const getHospitalSetAsync = (page:number,limit:number)=>{
      return async (dispatch:any)=>{
          dispatch(upLoading(true));
          const result = await getHospitalSet(page,limit);
          dispatch(upHospitalSetList(result.data.records));
          dispatch(upPageInfo({
              current:result.data.current,
              pageSize:result.data.size,
              total:result.data.total
          }))
          dispatch(upLoading(false));
      }
  }
  
  // 更改锁定状态
  export const getHospitalSetLockByIdAsync = (id:number,status:number)=>{
      return async (dispatch:any,getState:any)=>{
          await getHospitalSetLockById(id,status);
          // const {pageInfo:{current,pageSize}} = getState().common;
          const {current,pageSize} = getState().common.pageInfo;
          await dispatch(getHospitalSetAsync(current,pageSize));
      }
  }
  
  // 添加医院设置
  export const postHospitalSetSaveAsync = (body:any)=>{
      return async (dispatch:any,getState:any)=>{
          let result ;
          if(body.id){
              // 修改
              result = await putHospitalSetUpdate(body);
          }else{
              // 添加
              result = await postHospitalSetSave(body);// 添加医院
          }
  
          const {current,pageSize} = getState().common.pageInfo;
          await dispatch(getHospitalSetAsync(current,pageSize));// 更新设置
          return result;
      }
  }
  export const useSelectorHosp = ()=>useSelector((state:any)=>state.hosp);
  export default hospSlice.reducer;
  
  ```

* src->pages->hospital->hospitalSet->index.tsx

  ```tsx
  import React, {useEffect, useState} from 'react';
  import {Space, Table,Tooltip,Button,Switch} from "antd";
  import {FormOutlined,DeleteOutlined} from "@ant-design/icons";
  import {useAppDispatch} from "@/hooks";
  import {getHospitalSetAsync, getHospitalSetLockByIdAsync, useSelectorHosp} from "@/store/slices/hosp";
  import {useSelectorCommon} from "@/store/slices/common";
  import SetModal from "@/pages/hospital/hospitalSet/components/SetModal";
  
  function Index() {
      const dispatch = useAppDispatch();
      // 定义一个用于指定modal是否弹出的状态isModalOpen
      const [isModalOpen,setIsModalOpen] = useState(false);
      // 定义弹出层的标题
      const [modalTitle,setModalTitle] = useState("添加医院设置");
      const {hospitalSetList} = useSelectorHosp();
      const {pageInfo,loading} = useSelectorCommon();
      // 设置向弹出层弹出的表单信息
      const [info,setInfo] = useState(null);
      useEffect(()=>{
          dispatch(getHospitalSetAsync(1,4));
      },[])
      return (
          <div>
              <div style={{ marginBottom: 16 }}>
                  <Button type={"primary"} onClick={()=>{
                      setModalTitle("添加医院设置");
                      setIsModalOpen(true);
                  }}>添加医院设置</Button>
                  {/*<Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>*/}
                  {/*    Reload*/}
                  {/*</Button>*/}
                  {/*<span style={{ marginLeft: 8 }}>*/}
                  {/*    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}*/}
                  {/*</span>*/}
              </div>
              <Table
                  loading={loading}
                  pagination={{
                     ...pageInfo,
                      onChange(page,pageSize){
                          dispatch(getHospitalSetAsync(page,pageSize));
                      }
                  }}
                  // 增加边框
                  bordered={true}
                  // 指定横向的宽度
                  scroll={{
                      x:1500
                  }}
                  // rowSelection={rowSelection}
                  columns={[
                      {
                          title:"序号",
                          align:"center",
                          width:70,
                          // dataIndex:"id",
                          // 如果设置了dataIndex,那么render的第一个形参即是dataIndex对应的属性值
                          // 如果未设置dataIndex,那么render的第一个形参即是行信息
  
                          // 第二个参数是行信息
                          render(value,rows,index){
                              console.log(index)
                              return (pageInfo.current-1)*pageInfo.pageSize+index+1;
                          }
                      },{
                          title:"医院名称",
                          align:"center",
                          ellipsis:true,
                          width:200,
                          dataIndex:"hosname"
                      },{
                          title:"医院编号",
                          align:"center",
                          width:140,
                          ellipsis:true,
                          dataIndex:"hoscode"
                      },{
                          title:"是否锁定",
                          align:"center",
                          // dataIndex:"status",// 0：锁定 1：未锁定
                          render(rows){
                              return (
                                  <Switch checked={rows.status===0} onChange={()=>{
                                      dispatch(getHospitalSetLockByIdAsync(rows.id,rows.status));
                                  }} />
                              )
                          }
  
                      },{
                          title:"api基础地址",
                          align:"center",
                          width:140,
                          dataIndex:"apiUrl"
                      },{
                          title:"密钥",
                          align:"center",
                          width:140,
                          ellipsis:true,
                          dataIndex:"signKey"
                      },{
                          title:"联系人姓名",
                          align:"center",
                          dataIndex:"contactsName"
                      },{
                          title:"联系人手机",
                          align:"center",
                          dataIndex:"contactsPhone"
                      },{
                          title:"添加时间",
                          align:"center",
                          width:160,
                          dataIndex:"createTime"
                      },{
                          title:"修改时间",
                          align:"center",
                          width:160,
                          dataIndex:"updateTime"
                      },{
                          title:"操作",
                          fixed:"right",
                          // dataIndex:"updateTime"
                          render(rows){
                              return (
                                  <Space>
                                      <Tooltip title="修改">
                                          <Button onClick={()=>{
                                              setInfo({...rows});
                                              setModalTitle("修改医院设置");
                                              setIsModalOpen(true);
                                          }} type="primary" shape="circle" icon={<FormOutlined />} />
                                      </Tooltip>
                                      <Tooltip title="删除">
                                          <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} />
                                      </Tooltip>
                                  </Space>
                              )
                          }
                      }
                  ]}
                  rowKey={"id"}
                  dataSource={hospitalSetList}
              />
              <SetModal info={info} modalTitle={modalTitle} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
          </div>
      );
  }
  
  export default Index;
  ```

  

* src->pages->hospital->hospitalSet->components->setModal.tsx

  ```tsx
  import React, {useEffect} from 'react';
  import {Modal, Form, Input, Button, Space, message} from "antd";
  import {useAppDispatch} from "@/hooks";
  import {postHospitalSetSaveAsync} from "@/store/slices/hosp";
  
  function SetModal(props:any) {
      const [form] = Form.useForm();
      const dispatch = useAppDispatch();
      useEffect(()=>{
          if(props.info){
              console.log(1111);
              form.setFieldsValue(props.info);
          }
  
      },[props.info]);
      console.log(props.info);
      return (
          <Modal title={props.modalTitle}
                 open={props.isModalOpen}
                 footer={null}
                 // 点击蒙层是否允许关闭
                 maskClosable={false}
                 // onOk={handleOk}
                 onCancel={()=>{
                      form.resetFields();// 清空表单
                     props.setIsModalOpen(false);
                 }}
          >
              <Form
                  form={form}
                  name="basic"
                  labelCol={{ span: 5 }}
                  wrapperCol={{ span: 19 }}
                  // initialValues={props.info}
                  onFinish={async (values)=>{
                      const result = await dispatch(postHospitalSetSaveAsync(values));
                      console.log(result);
                      if(values.id){
                          message.success("修改成功");
                      }else{
                          message.success("添加"+values.hosname+"成功")
                      }
  
                      form.resetFields();// 清空表单
                      props.setIsModalOpen(false);
                  }}
                  autoComplete="off"
              >
  
                  <Form.Item
                      hidden={true}
                      name="id">
                      <Input />
                  </Form.Item>
  
                  <Form.Item
                      label="医院名称"
                      name="hosname"
                      rules={[{
                          required: true,
                          min:2,
                          max:16,
                          message: '请输入医院名称' }
                      ]}
                  >
                      <Input />
                  </Form.Item>
  
  
                  <Form.Item
                      label="医院编号"
                      name="hoscode"
                      rules={[{ required: true, message: '请输入医院编码' }]}
                  >
                      <Input />
                  </Form.Item>
  
                  <Form.Item
                      label="api基础地址"
                      name="apiUrl"
                      rules={[{
                          required: true,
                          pattern:/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i,
                          message: '请输入正确的api基础地址'
                      }]}
                  >
                      <Input />
                  </Form.Item>
  
                  <Form.Item
                      label="联系人姓名"
                      name="contactsName"
                      rules={[{ required: true, message: '请输入联系人姓名' }]}
                  >
                      <Input />
                  </Form.Item>
  
                  <Form.Item
                      label="联系人手机"
                      name="contactsPhone"
  
                      rules={[{ required: true,
                          pattern:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
                          message: '请输入正确 的联系人手机' }]}
                  >
                      <Input />
                  </Form.Item>
  
  
  
  
                  <Form.Item wrapperCol={{ offset: 5, span: 19 }}>
                      <Space>
                          <Button type="primary" htmlType="submit">
                              提交
                          </Button>
                          <Button onClick={()=>{
                              form.resetFields();
                          }} htmlType="button">
                              清空
                          </Button>
                      </Space>
                  </Form.Item>
              </Form>
          </Modal>
      );
  }
  
  export default SetModal;
  ```

  

## 34-7- 完成删除

* src->api->hosp.ts

  ```ts
  // DELETE /admin/hosp/hospitalSet/remove/{id}
  // 删除医院设置
  export const deleteHospitalSetById = (id:number)=>{
      return sytRequest.delete(`/hosp/hospitalSet/remove/${id}`)
  }
  ```

* src->store->slices->hosp.ts

  ```ts
  export const deleteHospitalSetByIdAsync = (id:number)=>{
      return async (dispatch:any,getState:any)=>{
          await deleteHospitalSetById(id);
          const {current,pageSize} = getState().common.pageInfo;
          await dispatch(getHospitalSetAsync(current,pageSize));// 更新设置
      }
  }
  ```

* src->pages->hospital->hospitalSet->index.ts

  ```ts
   <Popconfirm
  placement="topRight"
  title={"您确定要删除"+rows.hosname+"吗"}
  onConfirm={()=>{
      dispatch(deleteHospitalSetByIdAsync(rows.id));
  }}
  okText="是"
  cancelText="否"
  >
      <Tooltip title="删除">
          <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} />
              </Tooltip>
  </Popconfirm>
  ```

  



## 34-8- 完成批量删除

* src->api->hosp.ts

  ```ts
  // DELETE /admin/hosp/hospitalSet/batchRemove
  // 根据id列表删除医院设置
  export const deleteHospitalSetBatchRemove = (data:React.Key[])=>{
      return sytRequest.delete(`/hosp/hospitalSet/batchRemove`,{
          data
      })
  }
  ```

* src->store->slices->hosp.ts

  ```ts
  // 批量删除异步action
  export const deleteHospitalSetBatchRemoveAsync = (data:React.Key[])=>{
      return async (dispatch:any,getState:any)=>{
          await deleteHospitalSetBatchRemove(data);
          const {current,pageSize} = getState().common.pageInfo;
          await dispatch(getHospitalSetAsync(current,pageSize));// 更新设置
      }
  }
  ```

* src->pages->hospital->hospitalSet->index.tsx

  ```tsx
  import React, {useEffect, useState} from 'react';
  import {Space, Table,Tooltip,Button,Switch,Popconfirm} from "antd";
  import {FormOutlined,DeleteOutlined} from "@ant-design/icons";
  import {useAppDispatch} from "@/hooks";
  import {
      deleteHospitalSetBatchRemoveAsync,
      deleteHospitalSetByIdAsync,
      getHospitalSetAsync,
      getHospitalSetLockByIdAsync, postHospitalSetSaveAsync,
      useSelectorHosp
  } from "@/store/slices/hosp";
  import {useSelectorCommon} from "@/store/slices/common";
  import SetModal from "@/pages/hospital/hospitalSet/components/SetModal";
  
  function Index() {
      const dispatch = useAppDispatch();
      // 定义一个用于指定modal是否弹出的状态isModalOpen
      const [isModalOpen,setIsModalOpen] = useState(false);
      // 定义弹出层的标题
      const [modalTitle,setModalTitle] = useState("添加医院设置");
      const {hospitalSetList} = useSelectorHosp();
      const {pageInfo,loading} = useSelectorCommon();
      // 设置向弹出层弹出的表单信息
      const [info,setInfo] = useState(null);
      // 保存选择好的数据ID列表
      const [selectedRowKeys,setSelectedRowKeys] = useState<React.Key[]>([]);
      // 批量删除加载中
      const [delLoading,setDelLoading] = useState(false);
      useEffect(()=>{
          dispatch(getHospitalSetAsync(1,4));
      },[])
      return (
          <div>
              <Space style={{ marginBottom: 16 }}>
                  <Button type={"primary"} onClick={()=>{
                      setModalTitle("添加医院设置");
                      setIsModalOpen(true);
                  }}>添加医院设置</Button>
  
                  <Button danger type={"primary"} onClick={async ()=>{
                      for(let i=0;i<10;i++){
                          await dispatch(postHospitalSetSaveAsync({
                              hosname:Math.random().toString(36).slice(2),
                              hoscode:Math.random().toString(36).slice(2),
                              apiUrl:"http://atguigu.cn",
                              contactsName:Math.random().toString(36).slice(2),
                              contactsPhone:"15101134433",
  
                          }));
                      }
  
                  }}>批量添加</Button>
  
  
                  <Button type="primary" onClick={async ()=>{
                      setDelLoading(true);
                      await dispatch(deleteHospitalSetBatchRemoveAsync(selectedRowKeys));
                      setSelectedRowKeys([]);
                      setDelLoading(false);
                  }} disabled={selectedRowKeys.length==0} loading={delLoading} >
                      批量删除
                  </Button>
                  {/*<span style={{ marginLeft: 8 }}>*/}
                  {/*    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}*/}
                  {/*</span>*/}
              </Space>
              <Table
                  rowSelection={{
                      selectedRowKeys,
                      onChange(newSelectedRowKeys:React.Key[]){
                          setSelectedRowKeys(newSelectedRowKeys);
                      },
                  }}
                  loading={loading}
                  pagination={{
                     ...pageInfo,
                      onChange(page,pageSize){
                          dispatch(getHospitalSetAsync(page,pageSize));
                      }
                  }}
                  // 增加边框
                  bordered={true}
                  // 指定横向的宽度
                  scroll={{
                      x:1500
                  }}
                  // rowSelection={rowSelection}
                  columns={[
                      {
                          title:"序号",
                          align:"center",
                          width:70,
                          // dataIndex:"id",
                          // 如果设置了dataIndex,那么render的第一个形参即是dataIndex对应的属性值
                          // 如果未设置dataIndex,那么render的第一个形参即是行信息
  
                          // 第二个参数是行信息
                          render(value,rows,index){
                              console.log(index)
                              return (pageInfo.current-1)*pageInfo.pageSize+index+1;
                          }
                      },{
                          title:"医院名称",
                          align:"center",
                          ellipsis:true,
                          width:200,
                          dataIndex:"hosname"
                      },{
                          title:"医院编号",
                          align:"center",
                          width:140,
                          ellipsis:true,
                          dataIndex:"hoscode"
                      },{
                          title:"是否锁定",
                          align:"center",
                          // dataIndex:"status",// 0：锁定 1：未锁定
                          render(rows){
                              return (
                                  <Switch checked={rows.status===0} onChange={()=>{
                                      dispatch(getHospitalSetLockByIdAsync(rows.id,rows.status));
                                  }} />
                              )
                          }
  
                      },{
                          title:"api基础地址",
                          align:"center",
                          width:140,
                          dataIndex:"apiUrl"
                      },{
                          title:"密钥",
                          align:"center",
                          width:140,
                          ellipsis:true,
                          dataIndex:"signKey"
                      },{
                          title:"联系人姓名",
                          align:"center",
                          dataIndex:"contactsName"
                      },{
                          title:"联系人手机",
                          align:"center",
                          dataIndex:"contactsPhone"
                      },{
                          title:"添加时间",
                          align:"center",
                          width:160,
                          dataIndex:"createTime"
                      },{
                          title:"修改时间",
                          align:"center",
                          width:160,
                          dataIndex:"updateTime"
                      },{
                          title:"操作",
                          fixed:"right",
                          // dataIndex:"updateTime"
                          render(rows){
                              return (
                                  <Space>
                                      <Tooltip title="修改">
                                          <Button onClick={()=>{
                                              setInfo({...rows});
                                              setModalTitle("修改医院设置");
                                              setIsModalOpen(true);
                                          }} type="primary" shape="circle" icon={<FormOutlined />} />
                                      </Tooltip>
  
  
                                      <Popconfirm
                                          placement="topRight"
                                          title={"您确定要删除"+rows.hosname+"吗"}
                                          onConfirm={()=>{
                                              dispatch(deleteHospitalSetByIdAsync(rows.id));
                                          }}
                                          okText="是"
                                          cancelText="否"
                                      >
                                          <Tooltip title="删除">
                                              <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} />
                                          </Tooltip>
                                      </Popconfirm>
                                  </Space>
                              )
                          }
                      }
                  ]}
                  rowKey={"id"}
                  dataSource={hospitalSetList}
              />
              <SetModal info={info} modalTitle={modalTitle} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
          </div>
      );
  }
  
  export default Index;
  ```

  



## 34-9- 完成搜索

* src->api->hosp.ts  :修改接口

  ```ts
  export const getHospitalSet = (page:number,limit:number,params:any)=>{
      return sytRequest.get(`/hosp/hospitalSet/${page}/${limit}`,{
          params
      })
  }
  ```

* src->store->slices->hosp.ts

  ```ts
  import {
      createSlice
  } from "@reduxjs/toolkit";
  import {
      deleteHospitalSetBatchRemove,
      deleteHospitalSetById,
      getHospitalSet,
      getHospitalSetLockById,
      postHospitalSetSave,
      putHospitalSetUpdate
  } from "@/api/hosp";
  import {useSelector} from "react-redux";
  import {upLoading, upPageInfo} from "@/store/slices/common";
  import React from "react";
  
  const hospSlice = createSlice({
      name:"hosp",
      initialState:{
          hospitalSetList:[],// 医院设置列表
          params:{}
      },
      reducers:{
  
          changeParams(state,{payload}){
              state.params = payload;
          },
          upHospitalSetList(state,{payload}){
              state.hospitalSetList = payload;
          }
      }
  })
  export const {upHospitalSetList,changeParams} = hospSlice.actions;
  // 暴露异步action:调用医院设置列表信息
  export const getHospitalSetAsync = (page:number,limit:number)=>{
      return async (dispatch:any,getState:any)=>{
          dispatch(upLoading(true));
          const result = await getHospitalSet(page,limit,getState().hosp.params);
          dispatch(upHospitalSetList(result.data.records));
          dispatch(upPageInfo({
              current:result.data.current,
              pageSize:result.data.size,
              total:result.data.total
          }))
          dispatch(upLoading(false));
      }
  }
  
  // 更改锁定状态
  export const getHospitalSetLockByIdAsync = (id:number,status:number)=>{
      return async (dispatch:any,getState:any)=>{
          await getHospitalSetLockById(id,status);
          // const {pageInfo:{current,pageSize}} = getState().common;
          const {current,pageSize} = getState().common.pageInfo;
          await dispatch(getHospitalSetAsync(current,pageSize));
      }
  }
  
  // 添加医院设置
  export const postHospitalSetSaveAsync = (body:any)=>{
      return async (dispatch:any,getState:any)=>{
          let result ;
          if(body.id){
              // 修改
              result = await putHospitalSetUpdate(body);
          }else{
              // 添加
              result = await postHospitalSetSave(body);// 添加医院
          }
  
          const {current,pageSize} = getState().common.pageInfo;
          await dispatch(getHospitalSetAsync(current,pageSize));// 更新设置
          return result;
      }
  }
  export const deleteHospitalSetByIdAsync = (id:number)=>{
      return async (dispatch:any,getState:any)=>{
          await deleteHospitalSetById(id);
          const {current,pageSize} = getState().common.pageInfo;
          await dispatch(getHospitalSetAsync(current,pageSize));// 更新设置
      }
  }
  
  // 批量删除异步action
  export const deleteHospitalSetBatchRemoveAsync = (data:React.Key[])=>{
      return async (dispatch:any,getState:any)=>{
          await deleteHospitalSetBatchRemove(data);
          const {current,pageSize} = getState().common.pageInfo;
          await dispatch(getHospitalSetAsync(current,pageSize));// 更新设置
      }
  }
  export const useSelectorHosp = ()=>useSelector((state:any)=>state.hosp);
  export default hospSlice.reducer;
  
  ```

* src->pages->hospital->hospitalSet->index.tsx

  ```tsx
  import React, {useEffect, useState} from 'react';
  import {Space, Table,Tooltip,Button,Switch,Popconfirm,Form,Input} from "antd";
  import {FormOutlined,DeleteOutlined,SearchOutlined} from "@ant-design/icons";
  import {useAppDispatch} from "@/hooks";
  import {
      changeParams,
      deleteHospitalSetBatchRemoveAsync,
      deleteHospitalSetByIdAsync,
      getHospitalSetAsync,
      getHospitalSetLockByIdAsync, postHospitalSetSaveAsync,
      useSelectorHosp
  } from "@/store/slices/hosp";
  import {useSelectorCommon} from "@/store/slices/common";
  import SetModal from "@/pages/hospital/hospitalSet/components/SetModal";
  const Item = Form.Item;
  function Index() {
      const [form] = Form.useForm();
      const dispatch = useAppDispatch();
      // 定义一个用于指定modal是否弹出的状态isModalOpen
      const [isModalOpen,setIsModalOpen] = useState(false);
      // 定义弹出层的标题
      const [modalTitle,setModalTitle] = useState("添加医院设置");
      const {hospitalSetList} = useSelectorHosp();
      const {pageInfo,loading} = useSelectorCommon();
      // 设置向弹出层弹出的表单信息
      const [info,setInfo] = useState(null);
      // 保存选择好的数据ID列表
      const [selectedRowKeys,setSelectedRowKeys] = useState<React.Key[]>([]);
      // 批量删除加载中
      const [delLoading,setDelLoading] = useState(false);
      useEffect(()=>{
          dispatch(getHospitalSetAsync(1,4));
      },[])
      return (
          <div>
              <Space style={{ marginBottom: 16 }}>
                  <Button type={"primary"} onClick={()=>{
                      setModalTitle("添加医院设置");
                      setIsModalOpen(true);
                  }}>添加医院设置</Button>
  
                  <Button danger type={"primary"} onClick={async ()=>{
                      for(let i=0;i<10;i++){
                          await dispatch(postHospitalSetSaveAsync({
                              hosname:Math.random().toString(36).slice(2),
                              hoscode:Math.random().toString(36).slice(2),
                              apiUrl:"http://atguigu.cn",
                              contactsName:Math.random().toString(36).slice(2),
                              contactsPhone:"15101134433",
  
                          }));
                      }
  
                  }}>批量添加</Button>
  
  
                  <Button type="primary" onClick={async ()=>{
                      setDelLoading(true);
                      await dispatch(deleteHospitalSetBatchRemoveAsync(selectedRowKeys));
                      setSelectedRowKeys([]);
                      setDelLoading(false);
                  }} disabled={selectedRowKeys.length==0} loading={delLoading} >
                      批量删除
                  </Button>
  
                  <Form
                      form={form}
                      name={"searchHospital"}
                      layout={"inline"}
                      autoComplete={"off"}
                      onFinish={(values:any)=>{
                          dispatch(changeParams(values));
                          dispatch(getHospitalSetAsync(1,4));
                      }}
                  >
                      <Item name={"hosname"}>
                          <Input placeholder={"请输入医院名称的关键词"} />
                      </Item>
                      <Item name={"hoscode"}>
                          <Input placeholder={"请输入医院编码"} />
                      </Item>
                      <Item >
                          <Button  icon={<SearchOutlined />} type={"primary"} htmlType={"submit"}>搜索</Button>
                      </Item>
                      <Item>
                          <Button onClick={()=>{
                              form.resetFields();// 清空表单
                              dispatch(changeParams({}));
                              dispatch(getHospitalSetAsync(1,4));
                          }} htmlType={"button"}>重置</Button>
                      </Item>
                  </Form>
              </Space>
              <Table
                  rowSelection={{
                      selectedRowKeys,
                      onChange(newSelectedRowKeys:React.Key[]){
                          setSelectedRowKeys(newSelectedRowKeys);
                      },
                  }}
                  loading={loading}
                  pagination={{
                     ...pageInfo,
                      onChange(page,pageSize){
                          dispatch(getHospitalSetAsync(page,pageSize));
                      }
                  }}
                  // 增加边框
                  bordered={true}
                  // 指定横向的宽度
                  scroll={{
                      x:1500
                  }}
                  // rowSelection={rowSelection}
                  columns={[
                      {
                          title:"序号",
                          align:"center",
                          width:70,
                          // dataIndex:"id",
                          // 如果设置了dataIndex,那么render的第一个形参即是dataIndex对应的属性值
                          // 如果未设置dataIndex,那么render的第一个形参即是行信息
  
                          // 第二个参数是行信息
                          render(value,rows,index){
                              console.log(index)
                              return (pageInfo.current-1)*pageInfo.pageSize+index+1;
                          }
                      },{
                          title:"医院名称",
                          align:"center",
                          ellipsis:true,
                          width:200,
                          dataIndex:"hosname"
                      },{
                          title:"医院编号",
                          align:"center",
                          width:140,
                          ellipsis:true,
                          dataIndex:"hoscode"
                      },{
                          title:"是否锁定",
                          align:"center",
                          // dataIndex:"status",// 0：锁定 1：未锁定
                          render(rows){
                              return (
                                  <Switch checked={rows.status===0} onChange={()=>{
                                      dispatch(getHospitalSetLockByIdAsync(rows.id,rows.status));
                                  }} />
                              )
                          }
  
                      },{
                          title:"api基础地址",
                          align:"center",
                          width:140,
                          dataIndex:"apiUrl"
                      },{
                          title:"密钥",
                          align:"center",
                          width:140,
                          ellipsis:true,
                          dataIndex:"signKey"
                      },{
                          title:"联系人姓名",
                          align:"center",
                          dataIndex:"contactsName"
                      },{
                          title:"联系人手机",
                          align:"center",
                          dataIndex:"contactsPhone"
                      },{
                          title:"添加时间",
                          align:"center",
                          width:160,
                          dataIndex:"createTime"
                      },{
                          title:"修改时间",
                          align:"center",
                          width:160,
                          dataIndex:"updateTime"
                      },{
                          title:"操作",
                          fixed:"right",
                          // dataIndex:"updateTime"
                          render(rows){
                              return (
                                  <Space>
                                      <Tooltip title="修改">
                                          <Button onClick={()=>{
                                              setInfo({...rows});
                                              setModalTitle("修改医院设置");
                                              setIsModalOpen(true);
                                          }} type="primary" shape="circle" icon={<FormOutlined />} />
                                      </Tooltip>
  
  
                                      <Popconfirm
                                          placement="topRight"
                                          title={"您确定要删除"+rows.hosname+"吗"}
                                          onConfirm={()=>{
                                              dispatch(deleteHospitalSetByIdAsync(rows.id));
                                          }}
                                          okText="是"
                                          cancelText="否"
                                      >
                                          <Tooltip title="删除">
                                              <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} />
                                          </Tooltip>
                                      </Popconfirm>
                                  </Space>
                              )
                          }
                      }
                  ]}
                  rowKey={"id"}
                  dataSource={hospitalSetList}
              />
              <SetModal info={info} modalTitle={modalTitle} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
          </div>
      );
  }
  
  export default Index;
  ```

  



# 35- 完成医院列表

## 35-1- 医院列表渲染

* src->api->hosp.ts

  ```tsx
  // GET /admin/hosp/hospital/{page}/{limit}
  // 获取分页列表
  export const getHospitalList = (page:number,limit:number)=>{
      return sytRequest.get(`/hosp/hospital/${page}/${limit}`)
  }
  ```

* src->pages->hospital->hospitalList->index.tsx

  ```tsx
  import React, {useEffect, useState} from 'react';
  import {Space, Switch, Table,Button} from "antd";
  import {getHospitalList} from "@/api/hosp";
  
  function Index() {
      // 定义保存医院列表的数据状态
      const [hospitalList,setHospitalList] = useState([]);
      useEffect(()=>{
          getHospitalList(1,4).then((values:any)=>{
              setHospitalList(values.data.content)
          })
      },[])
      return (
          <div id={"content"}>
              <Table
                  scroll={{x:1500}}
                  rowKey={"id"}
                  bordered={true}
                  columns={[
                      {
                          title:"序号",
                          align:"center",
                          render(value,rows,index){
                              return index+1;
                          }
                      },{
                          title:"医院名称",
                          align:"center",
                          dataIndex:"hosname"
                      },{
                          title:"医院编号",
                          align:"center",
                          dataIndex:"hoscode"
                      },{
                         title:"医院LOGO",
                         align:"center",
                         dataIndex:"logoData",
                          render(logoData){
                             return (
                                 <img height={50} src={"data:image/png;base64,"+logoData} alt=""/>
                             )
                          }
                      },{
                          title:"是否上线",
                          align:"center",
                          dataIndex:"status",
                          // （0：未上线 1：已上线）
                          render(status){
                              return (
                                  <Switch checked={status===1}/>
                              )
                          }
                      },{
                          title:"医院等级",
                          align:"center",
                          dataIndex:"param",
                          render(param){
                              return param.hostypeString;
                          }
                      },{
                          title:"医院地址",
                          align:"center",
                          dataIndex:"param",
                          render(param){
                              return param.fullAddress;
                          }
                      },{
                          title:"创建时间",
                          align:"center",
                          dataIndex:"createTime"
                      },{
                          title:"操作",
                          align:"center",
                          fixed:"right",
                          render(){
                              return (
                                  <Space>
                                      <Button type={"primary"}>查看</Button>
                                      <Button type={"primary"}>排班</Button>
                                  </Space>
                              )
                          }
                      }
                  ]}
                  dataSource={hospitalList}
              />
          </div>
      );
  }
  
  export default Index;
  ```

  



## 35-2- 医院列表分页

* src->pages->hospital->hospitalList->index.tsx

  ```tsx
  import React, {useEffect, useState} from 'react';
  import {Space, Switch, Table,Button} from "antd";
  import {getHospitalList} from "@/api/hosp";
  
  function Index() {
      // 定义保存医院列表的数据状态
      const [hospitalList,setHospitalList] = useState([]);
      // 定义保存页码信息的数据状态
      const [pageInfo,setPageInfo] = useState({
          current:1,
          pageSize:1,
          total:1
      })
      // 加载中
      const [loading,setLoading] = useState(false);
      const getHospitalListAsync = async function(current:number=1,pageSize:number=4){
          setLoading(true);
          const {data} = await getHospitalList(current,pageSize);
          setHospitalList(data.content);
          setPageInfo({
              current:data.number+1,
              pageSize:data.size,
              total:data.totalElements
          })
          setLoading(false);
  
  
          // getHospitalList(1,4).then((values:any)=>{
          //     setHospitalList(values.data.content);
          //     setPageInfo({
          //         current:values.data.number+1,
          //         pageSize:values.data.size,
          //         total:values.data.totalElements
          //     })
          // })
      }
      useEffect(()=>{
          getHospitalListAsync();
      },[])
      return (
          <div id={"content"}>
              <Table
                  loading={loading}
                  pagination={{
                      ...pageInfo,
                      // onChange(current,pageSize){
                      //     // console.log(current,pageSize);
                      //     getHospitalListAsync(current,pageSize);
                      // },
                      // 以上代码同以上代码作用相同
                      onChange:getHospitalListAsync
  
                  }}
                  scroll={{x:1500}}
                  rowKey={"id"}
                  bordered={true}
                  columns={[
                      {
                          title:"序号",
                          align:"center",
                          render(value,rows,index){
                              return (pageInfo.current-1)*pageInfo.pageSize+index+1;
                          }
                      },{
                          title:"医院名称",
                          align:"center",
                          dataIndex:"hosname"
                      },{
                          title:"医院编号",
                          align:"center",
                          dataIndex:"hoscode"
                      },{
                         title:"医院LOGO",
                         align:"center",
                         dataIndex:"logoData",
                          render(logoData){
                             return (
                                 <img height={50} src={"data:image/png;base64,"+logoData} alt=""/>
                             )
                          }
                      },{
                          title:"是否上线",
                          align:"center",
                          dataIndex:"status",
                          // （0：未上线 1：已上线）
                          render(status){
                              return (
                                  <Switch checked={status===1}/>
                              )
                          }
                      },{
                          title:"医院等级",
                          align:"center",
                          dataIndex:"param",
                          render(param){
                              return param.hostypeString;
                          }
                      },{
                          title:"医院地址",
                          align:"center",
                          dataIndex:"param",
                          render(param){
                              return param.fullAddress;
                          }
                      },{
                          title:"创建时间",
                          align:"center",
                          dataIndex:"createTime"
                      },{
                          title:"操作",
                          align:"center",
                          fixed:"right",
                          render(){
                              return (
                                  <Space>
                                      <Button type={"primary"}>查看</Button>
                                      <Button type={"primary"}>排班</Button>
                                  </Space>
                              )
                          }
                      }
                  ]}
                  dataSource={hospitalList}
              />
          </div>
      );
  }
  
  export default Index;
  ```

## 35-3- 是否上线

* src->api->hosp.ts

  ```tsx
  // GET /admin/hosp/hospital/updateStatus/{id}/{status}
  // 更新上线状态
  export const getHospitalUpdateStatus = (id:string,status:number)=>{
      return sytRequest.get(`/hosp/hospital/updateStatus/${id}/${status}`)
  }
  ```

* src->pages->hospital->hospitalList->index.tsx

  ```tsx
  import React, {useEffect, useState} from 'react';
  import {Space, Switch, Table,Button} from "antd";
  import {getHospitalList, getHospitalUpdateStatus} from "@/api/hosp";
  
  function Index() {
      // 定义保存医院列表的数据状态
      const [hospitalList,setHospitalList] = useState([]);
      // 定义保存页码信息的数据状态
      const [pageInfo,setPageInfo] = useState({
          current:1,
          pageSize:1,
          total:1
      })
      // 加载中
      const [loading,setLoading] = useState(false);
      const getHospitalListAsync = async function(current:number=1,pageSize:number=4){
          setLoading(true);
          const {data} = await getHospitalList(current,pageSize);
          setHospitalList(data.content);
          setPageInfo({
              current:data.number+1,
              pageSize:data.size,
              total:data.totalElements
          })
          setLoading(false);
  
  
          // getHospitalList(1,4).then((values:any)=>{
          //     setHospitalList(values.data.content);
          //     setPageInfo({
          //         current:values.data.number+1,
          //         pageSize:values.data.size,
          //         total:values.data.totalElements
          //     })
          // })
      }
      useEffect(()=>{
          getHospitalListAsync();
      },[])
      return (
          <div id={"content"}>
              <Table
                  loading={loading}
                  pagination={{
                      ...pageInfo,
                      // onChange(current,pageSize){
                      //     // console.log(current,pageSize);
                      //     getHospitalListAsync(current,pageSize);
                      // },
                      // 以上代码同以上代码作用相同
                      onChange:getHospitalListAsync
  
                  }}
                  scroll={{x:1500}}
                  rowKey={"id"}
                  bordered={true}
                  columns={[
                      {
                          title:"序号",
                          align:"center",
                          render(value,rows,index){
                              return (pageInfo.current-1)*pageInfo.pageSize+index+1;
                          }
                      },{
                          title:"医院名称",
                          align:"center",
                          dataIndex:"hosname"
                      },{
                          title:"医院编号",
                          align:"center",
                          dataIndex:"hoscode"
                      },{
                         title:"医院LOGO",
                         align:"center",
                         dataIndex:"logoData",
                          render(logoData){
                             return (
                                 <img height={50} src={"data:image/png;base64,"+logoData} alt=""/>
                             )
                          }
                      },{
                          title:"是否上线",
                          align:"center",
                          dataIndex:"status",
                          // （0：未上线 1：已上线）
                          render(status,rows:any){
                              return (
                                  <Switch onChange={async ()=>{
                                      await getHospitalUpdateStatus(rows.id,status===0?1:0);
                                      await getHospitalListAsync(pageInfo.current);
                                  }} checked={status===1}/>
                              )
                          }
                      },{
                          title:"医院等级",
                          align:"center",
                          dataIndex:"param",
                          render(param){
                              return param.hostypeString;
                          }
                      },{
                          title:"医院地址",
                          align:"center",
                          dataIndex:"param",
                          render(param){
                              return param.fullAddress;
                          }
                      },{
                          title:"创建时间",
                          align:"center",
                          dataIndex:"createTime"
                      },{
                          title:"操作",
                          align:"center",
                          fixed:"right",
                          render(){
                              return (
                                  <Space>
                                      <Button type={"primary"}>查看</Button>
                                      <Button type={"primary"}>排班</Button>
                                  </Space>
                              )
                          }
                      }
                  ]}
                  dataSource={hospitalList}
              />
          </div>
      );
  }
  
  export default Index;
  ```

## 35-4- 医院列表详情

> 1- 设置路由，该路由接收医院ID
>
> 2-根据ID找到医院信息
>
> 3-将医院信息进行渲染

### 35-4-1- 设置路由

* 新建一个组件作为路由：src->pages->hospital->show->index.tsx

  ```tsx
  import React from 'react';
  import {useParams} from "react-router-dom";
  
  function Index() {
      const {id} = useParams();
      return (
          <div>医院详情:{id}</div>
      );
  }
  
  export default Index;
  ```

* src->routes->index.ts

  ```ts
  import React from "react";
  import {useRoutes, Outlet, Navigate} from "react-router-dom";
  import {lazyLoading} from "@/utils";
  import AuthComponent from "@/components/AuthComponent";
  import Index from "@/pages/Index";
  import {DatabaseOutlined, HomeOutlined,MedicineBoxOutlined} from "@ant-design/icons";
  
  const routes = [
      {
          path: "/",
          element:(
              <AuthComponent>
                  <Index/>
              </AuthComponent>
          ),children:[
              {
                  // 主页
                  path:"/",
                  label:"主页",
                  icon:<HomeOutlined />,
                  element:lazyLoading("Home")
              },
              {
                  // 数据管理
                  path:"/cmn",
                  label:"数据管理",
                  icon:<DatabaseOutlined />,
                  element:<Outlet/>,
                  children:[
                      {
                          path:"/cmn",
                          label:"数据管理",
                          isHide:true,// 是否隐藏
                          element:<Navigate to={"/cmn/dict"}/>
                      },
                      {
                          // 数据字典
                          path:"/cmn/dict",
                          label:"数据字典",
                          element:lazyLoading("cmn/dict")
                      }
                  ]
              },{
                  // 医院管理
                  path:"/hospital",
                  label:"医院管理",
                  icon:<MedicineBoxOutlined />,
                  element:<Outlet/>,
                  children: [
                      {
                          path:"/hospital",
                          // label:"医院管理",
                          element:<Navigate to={"/hospital/hospitalSet"}/>,
                          isHide: true
                      },{
                          path:"/hospital/hospitalSet",
                          element: lazyLoading("hospital/hospitalSet"),
                          label:"医院设置"
                      },{
                          path:"/hospital/hospitalList",
                          element: lazyLoading("hospital/hospitalList"),
                          label:"医院列表"
                      },{
                          // 1- 增加医院详情
                          path:"/hospital/show/:id",
                          isHide: true,
                          element: lazyLoading("hospital/show"),
                          label: "医院详情"
                      }
                  ]
              }
          ]
      }, {
          path: "/login",
          element: lazyLoading("Login")
      }, {
          path: "*",
          element: lazyLoading("NotFound")
      }
  ];
  
  // 响应路由配置
  export default function () {
      // /cmn/dict
      return useRoutes(routes)
  }
  // 响应侧边栏
  export const renderSlider = function(){
      return (routes.find(v=>v.path==="/") as any).children;
  }
  
  ```

* src->pages->hospital->hospitalList->index.tsx

  ```tsx
  {
      title:"操作",
          align:"center",
              fixed:"right",
                  dataIndex:"id",
                      render(id){
                      return (
                          <Space>
                              <Button onClick={()=>navigate("/hospital/show/"+id)} type={"primary"}>查看</Button>
                              <Button type={"primary"}>排班</Button>
                          </Space>
                      )
                  }
  }
  ```

### 35-4-2- 设置详情页标题

* src->api->hosp.ts

  ```ts
  // GET /admin/hosp/hospital/show/{id}
  // 获取医院详情
  export const getHospitalShowById = function (id:string){
      return sytRequest.get(`/hosp/hospital/show/${id}`);
  }
  ```

* src->pages->hospital->show->index.tsx

  ```tsx
  import React, {useEffect} from 'react';
  import {useLocation, useParams} from "react-router-dom";
  import {getHospitalShowById} from "@/api/hosp";
  import {useAppDispatch} from "@/hooks";
  import {upItems} from "@/store/slices/common";
  
  function Index() {
      const {id} = useParams();
      const dispatch = useAppDispatch();
      const {pathname} = useLocation();
      useEffect(()=>{
          getHospitalShowById(id as string).then(value=>{
              // console.log(value.data.hospital.hosname);
              dispatch(upItems({
                  key:pathname,
                  label:value.data.hospital.hosname+"详情"
              }))
          })
      },[])
      return (
          <div>医院详情:{id}</div>
      );
  }
  
  export default Index;
  ```

  

* src->store->slices->common.ts

  ```tsx
  import {
      createSlice
  } from "@reduxjs/toolkit";
  import {useSelector} from "react-redux";
  export type TTabs = {
      label: string,
      key: string,
      closable: boolean
  }
  const items:TTabs[] = [
      {
          label: "主页",
          key: "/",
          closable: false
      }
  ]
  
  const commonSlice = createSlice({
      name:"common",
      initialState:{
          items,
          loading:false,
          pageInfo:{
              current:1,// 当前页码
              pageSize:1,// 每页显示的条数
              total:1,//总条数
          }
      },
      reducers:{
          upLoading(state,{payload}){
              state.loading = payload;
          },
          upPageInfo(state,{payload}){
             state.pageInfo = payload;
          },
          addItems(state,{payload}){
              if(!state.items.find((item:TTabs)=>item.key === payload.key))
                  state.items.push(payload);
          },
          // 1- 增加修改标题方法
          upItems(state,{payload}){
              // payload:{key:xxxxx,label:医院名称}
              const info = state.items.find((v:any)=>v.key === payload.key) as any;
              info.label = payload.label;
          },
          // delItemsByKey(state,{payload}){
          //     const index = state.items.findIndex((item:TTabs)=>item.key === payload);
          //     state.items.splice(index,1);
          // },
          delItemsByIndex(state,{payload}){
              state.items.splice(payload,1);
          }
      }
  })
  export const {addItems,upPageInfo,upItems,upLoading,delItemsByIndex} = commonSlice.actions;
  export const useSelectorCommon = ()=>useSelector((state:any)=>state.common);
  export default commonSlice.reducer;
  ```


### 35-4-3- 关闭返回

* src->pages->hospital->show->index.tsx

```tsx
import React, {useEffect} from 'react';
import {Button} from "antd";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {getHospitalShowById} from "@/api/hosp";
import {useAppDispatch} from "@/hooks";
import {delItemsByIndex, upItems, useSelectorCommon} from "@/store/slices/common";

function Index() {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const {items} = useSelectorCommon();
    const navigate = useNavigate();
    useEffect(()=>{
        getHospitalShowById(id as string).then(value=>{
            // console.log(value.data.hospital.hosname);
            dispatch(upItems({
                key:pathname,
                label:value.data.hospital.hosname+"详情"
            }))
        })
    },[])
    return (
        <div id={"content"}>
            <Button onClick={()=>{
                const index = items.findIndex((v:any)=>v.key===pathname);
                dispatch(delItemsByIndex(index));
                // navigate(items[index-1].key);// 返回的是左侧的标签页
                navigate("/hospital/hospitalList")
            }} danger type={"primary"}>关闭返回</Button>
        </div>
    );
}

export default Index;
```

### 35-4-4- 医院详情渲染

* src->pages->hospital->show->index.tsx

```tsx
import React, {useEffect, useState} from 'react';
import {Button, Descriptions, Badge, Space,Card} from "antd";
import {useLocation, useNavigate,useParams} from "react-router-dom";
import {getHospitalShowById} from "@/api/hosp";
import {useAppDispatch} from "@/hooks";
import {delItemsByIndex, upItems, useSelectorCommon} from "@/store/slices/common";

function Index() {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const {items} = useSelectorCommon();
    const navigate = useNavigate();

    const [info,setInfo] = useState<any>({
        hospital:{
            param:{}
        },
        bookingRule:{
            rule:[]
        }
    });
    useEffect(()=>{
        getHospitalShowById(id as string).then(value=>{
            console.log(value);
            setInfo(value.data);
            dispatch(upItems({
                key:pathname,
                label:value.data.hospital.hosname+"详情"
            }))
        })
    },[])
    return (
        <div id={"content"}>
            <Space direction={"vertical"}>
                <Button onClick={()=>{
                    const index = items.findIndex((v:any)=>v.key===pathname);
                    dispatch(delItemsByIndex(index));
                    // navigate(items[index-1].key);// 返回的是左侧的标签页
                    navigate("/hospital/hospitalList")
                }} danger type={"primary"}>关闭返回</Button>

                <Card>
                    <Descriptions column={2} title="医院基本信息" bordered>
                        <Descriptions.Item label="医院名称">{info.hospital.hosname}</Descriptions.Item>
                        <Descriptions.Item label="医院LOGO">
                            {
                                info.hospital.logoData && <img height={100} src={"data:image/png;base64,"+info.hospital.logoData} alt=""/>
                            }
                        </Descriptions.Item>
                        <Descriptions.Item label="医院编码">{info.hospital.hoscode}</Descriptions.Item>
                        <Descriptions.Item label="医院地址">{info.hospital.param.fullAddress}</Descriptions.Item>
                        <Descriptions.Item label="乘车路线" span={2}>
                            {info.hospital.route}
                        </Descriptions.Item>
                        <Descriptions.Item label="医院简介" span={2}>
                            {info.hospital.intro}
                        </Descriptions.Item>
                    </Descriptions>
                </Card>


                <Card>
                    <Descriptions column={2} title="医院预约规则信息" bordered>
                        <Descriptions.Item label="预约周期">{info.bookingRule.cycle}</Descriptions.Item>
                        <Descriptions.Item label="放号时间">{info.bookingRule.releaseTime}</Descriptions.Item>
                        <Descriptions.Item label="停号时间">{info.bookingRule.stopTime}</Descriptions.Item>
                        <Descriptions.Item label="退号时间">{info.bookingRule.quitTime}</Descriptions.Item>
                        <Descriptions.Item label="预约规则" span={2}>
                            {info.bookingRule.rule.map((v:string,index:number)=>(
                                <p key={index}>{v}</p>
                            ))}
                        </Descriptions.Item>
                    </Descriptions>
                </Card>

            </Space>

        </div>
    );
}

export default Index;
```

### 35-4-5 - 面包屑导航

* src->hooks->index.ts

```tsx
import store from "@/store";
import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {renderSlider} from "@/routes";
import {useLocation,matchPath} from "react-router-dom";

export const useAppDispatch = ()=>{
    type TDispatch = typeof store.dispatch;
    return useDispatch<TDispatch>();
}

export const useAppTitleInfo = ()=>{
    const {pathname} = useLocation();
    return  useMemo(function():TTitleInfo{
        const info = renderSlider().find((v:any)=>v.path === "/"+pathname.split("/")[1]);
        const title = info.label as string;// 一级标题
        let subTitle;
        // /hospital/show/622574cc36a9ba1be763dad8
        if(info.children) {
            // console.log(pathname);// /hospital/show/622574cc36a9ba1be763dad8
            // 浏览器中的地址： /hospital/show/622574cc36a9ba1be763dad8
            // 路由配置中的地址：/hospital/show/:id
            // console.log(matchPath("/hospital/show/:id","/hospital/show/622574cc36a9ba1be763dad8"))
            // console.log(matchPath("/hospital/show/:id/:a","/hospital/show/622574cc36a9ba1be763dad8"))



            const subInfo =info.children.find((v:any)=>matchPath(v.path,pathname));
            if(subInfo) subTitle = subInfo.label;
            // subTitle = info.children.find((v:any)=>v.path === pathname).label;
        }

        return  {
            title,
            subTitle
        };
    },[pathname]);
}
```

## 35-5- 搜索

### 35-5-1- 一般搜索

* src->api->hosp.ts

  ```ts
  // GET /admin/hosp/hospital/{page}/{limit}
  // 获取分页列表
  export const getHospitalList = (page:number,limit:number,params:any)=>{
      return sytRequest.get(`/hosp/hospital/${page}/${limit}`,{
          params
      })
  }
  ```

  

* src->pages->hospital->hospitalList->index.tsx

  ```tsx
  import React, {useEffect, useState} from 'react';
  import {Space, Switch, Table, Button, Form, Input, Select} from "antd";
  import {getHospitalList, getHospitalUpdateStatus} from "@/api/hosp";
  import {useNavigate} from "react-router-dom";
  import {getFindByParentId} from "@/api/dict";
  const {Item} = Form;
  // const {Option} = Select;
  function Index() {
      // 定义保存医院列表的数据状态
      const [hospitalList,setHospitalList] = useState([]);
      // 定义保存页码信息的数据状态
      const [pageInfo,setPageInfo] = useState({
          current:1,
          pageSize:1,
          total:1
      })
      // 保存医院类别列表状态
      const [hostypeList,setHostypeList] = useState([]);
      const [form] = Form.useForm();
      // 加载中
      const [loading,setLoading] = useState(false);
      const navigate = useNavigate();
      const getHospitalListAsync = async function(current:number=1,pageSize:number=4){
          setLoading(true);
          const {data} = await getHospitalList(current,pageSize,form.getFieldsValue());
          setHospitalList(data.content);
          setPageInfo({
              current:data.number+1,
              pageSize:data.size,
              total:data.totalElements
          })
          setLoading(false);
  
  
          // getHospitalList(1,4).then((values:any)=>{
          //     setHospitalList(values.data.content);
          //     setPageInfo({
          //         current:values.data.number+1,
          //         pageSize:values.data.size,
          //         total:values.data.totalElements
          //     })
          // })
      }
      useEffect(()=>{
          getHospitalListAsync();
          // 获取医院等级列表
          getFindByParentId(10000).then(value=>{
              // console.log(value);
              setHostypeList(value.data);
          })
      },[])
  
  
      return (
          <div id={"content"}>
              <div style={{marginBottom:"16px"}}>
                  <Form layout={"inline"} form={form} autoComplete={"off"}>
                      <Item name={"hosname"}>
                          <Input placeholder={"请输入医院名称"} />
                      </Item>
                      <Item name={"hoscode"}>
                          <Input placeholder={"请输入医院编号"} />
                      </Item>
                      <Item name={"hostype"}>
                          <Select placeholder={"医院类型"}>
                              {
                                  hostypeList.map((item:any)=>(
                                      <Select.Option key={item.id} value={item.value}>{item.name}</Select.Option>
                                  ))
                              }
  
                          </Select>
                      </Item>
                      <Item name={"status"}>
                          <Select placeholder={"是否上线"}>
                              <Select.Option value={"1"}>已上线</Select.Option>
                              <Select.Option value={"0"}>未上线</Select.Option>
                          </Select>
                      </Item>
                      <Item>
                          <Button onClick={e=>{
                              getHospitalListAsync()
                          }}>搜索</Button>
                      </Item>
                      <Item>
                          <Button onClick={e=>{
                              form.resetFields();
                              getHospitalListAsync()
                          }}>重置</Button>
                      </Item>
                  </Form>
              </div>
              <Table
                  loading={loading}
                  pagination={{
                      ...pageInfo,
                      // onChange(current,pageSize){
                      //     // console.log(current,pageSize);
                      //     getHospitalListAsync(current,pageSize);
                      // },
                      // 以上代码同以上代码作用相同
                      onChange:getHospitalListAsync
  
                  }}
                  scroll={{x:1500}}
                  rowKey={"id"}
                  bordered={true}
                  columns={[
                      {
                          title:"序号",
                          align:"center",
                          render(value,rows,index){
                              return (pageInfo.current-1)*pageInfo.pageSize+index+1;
                          }
                      },{
                          title:"医院名称",
                          align:"center",
                          dataIndex:"hosname"
                      },{
                          title:"医院编号",
                          align:"center",
                          dataIndex:"hoscode"
                      },{
                         title:"医院LOGO",
                         align:"center",
                         dataIndex:"logoData",
                          render(logoData){
                             return (
                                 <img height={50} src={"data:image/png;base64,"+logoData} alt=""/>
                             )
                          }
                      },{
                          title:"是否上线",
                          align:"center",
                          dataIndex:"status",
                          // （0：未上线 1：已上线）
                          render(status,rows:any){
                              return (
                                  <Switch onChange={async ()=>{
                                      await getHospitalUpdateStatus(rows.id,status===0?1:0);
                                      await getHospitalListAsync(pageInfo.current);
                                  }} checked={status===1}/>
                              )
                          }
                      },{
                          title:"医院等级",
                          align:"center",
                          dataIndex:"param",
                          render(param){
                              return param.hostypeString;
                          }
                      },{
                          title:"医院地址",
                          align:"center",
                          dataIndex:"param",
                          render(param){
                              return param.fullAddress;
                          }
                      },{
                          title:"创建时间",
                          align:"center",
                          dataIndex:"createTime"
                      },{
                          title:"操作",
                          align:"center",
                          fixed:"right",
                          dataIndex:"id",
                          render(id){
                              return (
                                  <Space>
                                      <Button onClick={()=>navigate("/hospital/show/"+id)} type={"primary"}>查看</Button>
                                      <Button type={"primary"}>排班</Button>
                                  </Space>
                              )
                          }
                      }
                  ]}
                  dataSource={hospitalList}
              />
          </div>
      );
  }
  
  export default Index;
  ```

  



### 35-5-2- 三级联动

* src->pages->hospital->hospitalList->index.tsx

  ```tsx
  import React, {useEffect, useState} from 'react';
  import {Space, Switch, Table, Button, Form, Input, Select} from "antd";
  import {getHospitalList, getHospitalUpdateStatus} from "@/api/hosp";
  import {useNavigate} from "react-router-dom";
  import {getFindByParentId} from "@/api/dict";
  const {Item} = Form;
  // const {Option} = Select;
  function Index() {
      // 定义保存医院列表的数据状态
      const [hospitalList,setHospitalList] = useState([]);
      // 定义保存页码信息的数据状态
      const [pageInfo,setPageInfo] = useState({
          current:1,
          pageSize:1,
          total:1
      })
      // 保存医院类别列表状态
      const [hostypeList,setHostypeList] = useState([]);
      // 保存省份列表
      const [provinceCodeList,setProvinceCodeList] = useState([]);
      // 保存市列表
      const [cityCodeList,setCityCodeList] = useState([]);
      // 保存区列表
      const [districtCodeList,setDistrictCodeList] = useState([]);
      const [form] = Form.useForm();
      // 加载中
      const [loading,setLoading] = useState(false);
      const navigate = useNavigate();
      const getHospitalListAsync = async function(current:number=1,pageSize:number=4){
          setLoading(true);
          const {data} = await getHospitalList(current,pageSize,form.getFieldsValue());
          setHospitalList(data.content);
          setPageInfo({
              current:data.number+1,
              pageSize:data.size,
              total:data.totalElements
          })
          setLoading(false);
  
  
          // getHospitalList(1,4).then((values:any)=>{
          //     setHospitalList(values.data.content);
          //     setPageInfo({
          //         current:values.data.number+1,
          //         pageSize:values.data.size,
          //         total:values.data.totalElements
          //     })
          // })
      }
      useEffect(()=>{
          getHospitalListAsync();
          // 获取医院等级列表
          getFindByParentId(10000).then(value=>{
              // console.log(value);
              setHostypeList(value.data);
          })
          // 获取省份列表
          getFindByParentId(86).then(value=>{
              // console.log(value.data);
              setProvinceCodeList(value.data);
          })
      },[])
  
  
      return (
          <div id={"content"}>
              <div style={{marginBottom:"16px"}}>
                  <Form layout={"inline"} form={form} autoComplete={"off"}>
                      <Item  name={"provinceCode"}>
                          <Select onChange={async (value)=>{
                               const result = await getFindByParentId(value);
                              // console.log(result.data);
                              form.setFieldsValue({
                                  cityCode:undefined,
                                  districtCode:undefined
                              })
                              setDistrictCodeList([]);
                              setCityCodeList(result.data);
                          }} placeholder={"请选择省"}>
                              {
                                  provinceCodeList.map((item:any)=>(
                                      <Select.Option key={item.id} value={item.value}>{item.name}</Select.Option>
                                  ))
                              }
                          </Select>
                      </Item>
  
                      <Item name={"cityCode"}>
                          <Select onChange={async (value)=>{
                              const result = await getFindByParentId(value);
                              form.setFieldsValue({
                                  districtCode:undefined
                              })
                              setDistrictCodeList(result.data);
                          }} placeholder={"请选择市"}>
                              {
                                  cityCodeList.map((item:any)=>(
                                      <Select.Option key={item.id} value={item.value}>{item.name}</Select.Option>
                                  ))
                              }
                          </Select>
                      </Item>
  
                      <Item name={"districtCode"}>
                          <Select onChange={()=>{
                              getHospitalListAsync()
                          }} placeholder={"请选择区"}>
                              {
                                  districtCodeList.map((item:any)=>(
                                      <Select.Option key={item.id} value={item.value}>{item.name}</Select.Option>
                                  ))
                              }
                          </Select>
                      </Item>
  
                      <Item name={"hosname"}>
                          <Input placeholder={"请输入医院名称"} />
                      </Item>
                      <Item name={"hoscode"}>
                          <Input placeholder={"请输入医院编号"} />
                      </Item>
                      <Item name={"hostype"}>
                          <Select placeholder={"医院类型"}>
                              {
                                  hostypeList.map((item:any)=>(
                                      <Select.Option key={item.id} value={item.value}>{item.name}</Select.Option>
                                  ))
                              }
  
                          </Select>
                      </Item>
                      <Item name={"status"}>
                          <Select placeholder={"是否上线"}>
                              <Select.Option value={"1"}>已上线</Select.Option>
                              <Select.Option value={"0"}>未上线</Select.Option>
                          </Select>
                      </Item>
                      <Item>
                          <Button onClick={e=>{
                              getHospitalListAsync()
                          }}>搜索</Button>
                      </Item>
                      <Item>
                          <Button onClick={e=>{
                              form.resetFields();
                              getHospitalListAsync()
                          }}>重置</Button>
                      </Item>
                  </Form>
              </div>
              <Table
                  loading={loading}
                  pagination={{
                      ...pageInfo,
                      // onChange(current,pageSize){
                      //     // console.log(current,pageSize);
                      //     getHospitalListAsync(current,pageSize);
                      // },
                      // 以上代码同以上代码作用相同
                      onChange:getHospitalListAsync
  
                  }}
                  scroll={{x:1500}}
                  rowKey={"id"}
                  bordered={true}
                  columns={[
                      {
                          title:"序号",
                          align:"center",
                          render(value,rows,index){
                              return (pageInfo.current-1)*pageInfo.pageSize+index+1;
                          }
                      },{
                          title:"医院名称",
                          align:"center",
                          dataIndex:"hosname"
                      },{
                          title:"医院编号",
                          align:"center",
                          dataIndex:"hoscode"
                      },{
                         title:"医院LOGO",
                         align:"center",
                         dataIndex:"logoData",
                          render(logoData){
                             return (
                                 <img height={50} src={"data:image/png;base64,"+logoData} alt=""/>
                             )
                          }
                      },{
                          title:"是否上线",
                          align:"center",
                          dataIndex:"status",
                          // （0：未上线 1：已上线）
                          render(status,rows:any){
                              return (
                                  <Switch onChange={async ()=>{
                                      await getHospitalUpdateStatus(rows.id,status===0?1:0);
                                      await getHospitalListAsync(pageInfo.current);
                                  }} checked={status===1}/>
                              )
                          }
                      },{
                          title:"医院等级",
                          align:"center",
                          dataIndex:"param",
                          render(param){
                              return param.hostypeString;
                          }
                      },{
                          title:"医院地址",
                          align:"center",
                          dataIndex:"param",
                          render(param){
                              return param.fullAddress;
                          }
                      },{
                          title:"创建时间",
                          align:"center",
                          dataIndex:"createTime"
                      },{
                          title:"操作",
                          align:"center",
                          fixed:"right",
                          dataIndex:"id",
                          render(id){
                              return (
                                  <Space>
                                      <Button onClick={()=>navigate("/hospital/show/"+id)} type={"primary"}>查看</Button>
                                      <Button type={"primary"}>排班</Button>
                                  </Space>
                              )
                          }
                      }
                  ]}
                  dataSource={hospitalList}
              />
          </div>
      );
  }
  
  export default Index;
  ```

## 35-6- 医院列表排班

### 35-6-1- 完成路由配置

* src->pages->hospital->department->index.tsx

  ```tsx
  import React from 'react';
  import {useParams} from "react-router-dom";
  
  function Index() {
      const {hoscode} = useParams();
      return (
          <div>排班界面:{hoscode}</div>
      );
  }
  
  export default Index;
  ```

* src->routes->indextsx

  ```tsx
  import React from "react";
  import {useRoutes, Outlet, Navigate} from "react-router-dom";
  import {lazyLoading} from "@/utils";
  import AuthComponent from "@/components/AuthComponent";
  import Index from "@/pages/Index";
  import {DatabaseOutlined, HomeOutlined,MedicineBoxOutlined} from "@ant-design/icons";
  
  const routes = [
      {
          path: "/",
          element:(
              <AuthComponent>
                  <Index/>
              </AuthComponent>
          ),children:[
              {
                  // 主页
                  path:"/",
                  label:"主页",
                  icon:<HomeOutlined />,
                  element:lazyLoading("Home")
              },
              {
                  // 数据管理
                  path:"/cmn",
                  label:"数据管理",
                  icon:<DatabaseOutlined />,
                  element:<Outlet/>,
                  children:[
                      {
                          path:"/cmn",
                          label:"数据管理",
                          isHide:true,// 是否隐藏
                          element:<Navigate to={"/cmn/dict"}/>
                      },
                      {
                          // 数据字典
                          path:"/cmn/dict",
                          label:"数据字典",
                          element:lazyLoading("cmn/dict")
                      }
                  ]
              },{
                  // 医院管理
                  path:"/hospital",
                  label:"医院管理",
                  icon:<MedicineBoxOutlined />,
                  element:<Outlet/>,
                  children: [
                      {
                          path:"/hospital",
                          // label:"医院管理",
                          element:<Navigate to={"/hospital/hospitalSet"}/>,
                          isHide: true
                      },{
                          path:"/hospital/hospitalSet",
                          element: lazyLoading("hospital/hospitalSet"),
                          label:"医院设置"
                      },{
                          path:"/hospital/hospitalList",
                          element: lazyLoading("hospital/hospitalList"),
                          label:"医院列表"
                      },{
                          path:"/hospital/show/:id",
                          isHide: true,
                          element: lazyLoading("hospital/show"),
                          label: "医院详情"
                      },{
                          // 增加医院排班路由配置
                          path:"/hospital/department/:hoscode",
                          isHide: true,
                          element: lazyLoading("hospital/department"),
                          label: "医院排班"
                      }
                  ]
              }
          ]
      }, {
          path: "/login",
          element: lazyLoading("Login")
      }, {
          path: "*",
          element: lazyLoading("NotFound")
      }
  ];
  
  // 响应路由配置
  export default function () {
      // /cmn/dict
      return useRoutes(routes)
  }
  // 响应侧边栏
  export const renderSlider = function(){
      return (routes.find(v=>v.path==="/") as any).children;
  }
  
  ```

* src->pages->hospital->hospitalList->index.tsx

  ```tsx
  {
                          title:"操作",
                          align:"center",
                          fixed:"right",
                          dataIndex:"id",
                          render(id,rows:any){
                              return (
                                  <Space>
                                      <Button onClick={()=>navigate("/hospital/show/"+id)} type={"primary"}>查看</Button>
                                      <Button type={"primary"} onClick={()=>navigate("/hospital/department/"+rows.hoscode)}>排班</Button>
                                  </Space>
                              )
                          }
                      }
  ```

  



### 35-6-2- 获取数据

* src->api->hosp.ts

  ```ts
  // GET /admin/hosp/department/{hoscode}
  // 根据hoscode(医院编码）获取该医院下的科室列表
  export const getDepartmentByHoscode = (hoscode:string)=>{
      return sytRequest.get(`/hosp/department/${hoscode}`)
  }
  ```

* src->pages->hospital->department->index.tsx

  ```tsx
  import React, {useEffect} from 'react';
  import {useParams} from "react-router-dom";
  import {getDepartmentByHoscode} from "@/api/hosp";
  
  function Index() {
      const {hoscode} = useParams();
      useEffect(()=>{
          getDepartmentByHoscode(hoscode as string).then(value=>{
              console.log(value);
          })
      },[]);
      return (
          <div>排班界面:{hoscode}</div>
      );
  }
  
  export default Index;
  ```

  





### 35-6-3- 渲染科室

* src->pages->hospital->department->index.tsx

  ```tsx
  import React, {useEffect, useState} from 'react';
  import {TreeSelect} from "antd";
  import {useParams} from "react-router-dom";
  import {getDepartmentByHoscode} from "@/api/hosp";
  const {TreeNode} = TreeSelect;
  function Index() {
      const {hoscode} = useParams();
      type TTreeNode = typeof TreeNode;
      // 用于保存科室列表的状态
      const [departmentList,setDepartmentList] = useState([]);
      useEffect(()=>{
          getDepartmentByHoscode(hoscode as string).then(value=>{
              console.log(value);
              setDepartmentList(value.data);
          })
      },[]);
      return (
          <div id={"content"}>
              <TreeSelect
                  showSearch
                  style={{ width: '100%' }}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  // filterTreeNode={(inputValue: string, treeNode: TTreeNode)=>{
                  //     // console.log(inputValue);
                  //     return false;
                  // }}
                  filterTreeNode = {(inputValue:string,treeNode:any)=>{
                      console.log(inputValue,treeNode);
                      return treeNode.title.includes(inputValue);
                  }}
                  placeholder="请选择科室"
                  allowClear
                  treeDefaultExpandAll={false}
                  onChange={()=>{
  
                  }}
              >
                  {
                      departmentList.map((item:any)=>(
                          <TreeNode selectable={false} key={item.depcode} value={item.depcode} title={item.depname}>
                              {
                                  item.children.map((item:any)=>(
                                      <TreeNode key={item.depcode} value={item.depcode} title={item.depname}></TreeNode>
                                  ))
                              }
                          </TreeNode>
                      ))
                  }
                  {/*<TreeNode value="parent 1" title="parent 1">*/}
                  {/*    <TreeNode value="parent 1-0" title="parent 1-0">*/}
                  {/*        <TreeNode value="leaf1" title="leaf1" />*/}
                  {/*        <TreeNode value="leaf2" title="leaf2" />*/}
                  {/*    </TreeNode>*/}
                  {/*    <TreeNode value="parent 1-1" title="parent 1-1">*/}
                  {/*        <TreeNode value="leaf3" title={<b style={{ color: '#08c' }}>leaf3</b>} />*/}
                  {/*    </TreeNode>*/}
                  {/*</TreeNode>*/}
              </TreeSelect>
          </div>
      );
  }
  
  export default Index;
  ```

### 35-6-4- 渲染排班列表

* src->api->hosp.ts

  ```ts
  // GET /admin/hosp/schedule/getScheduleRule/{page}/{limit}/{hoscode}/{depcode}
  // 获取排班规则数据
  export const getScheduleRule = (page:number,limit:number,hoscode:string,depcode:string)=>{
      return sytRequest.get(`/hosp/schedule/getScheduleRule/${page}/${limit}/${hoscode}/${depcode}`)
  }
  ```

* src->pages->hospital->department->index.tsx

  ```tsx
  import React, {useEffect, useState} from 'react';
  import {Table, TreeSelect} from "antd";
  import {useParams} from "react-router-dom";
  import {getDepartmentByHoscode, getScheduleRule} from "@/api/hosp";
  const {TreeNode} = TreeSelect;
  function Index() {
      const {hoscode} = useParams();
      type TTreeNode = typeof TreeNode;
      // 用于保存科室列表的状态
      const [departmentList,setDepartmentList] = useState([]);
      // 用于保存科室排班规则列表
      const [bookingScheduleList,setBookingScheduleList] = useState([]);
      // 用于保存页码信息
      const [pageInfo,setPageInfo] = useState({
          current:1,
          pageSize:4,
          total:1
      })
      const getScheduleRuleAsync = async function(current:number,depcode:string){
          const result = await getScheduleRule(current,pageInfo.pageSize,hoscode as string,depcode);
          console.log(result);
          setBookingScheduleList(result.data.bookingScheduleList);
          setPageInfo({
              ...pageInfo,
              current,
              total:result.data.total
          })
      }
      let [depcode,setDepcode] = useState("");
      useEffect(()=>{
          getDepartmentByHoscode(hoscode as string).then(value=>{
              console.log(value);
              setDepartmentList(value.data);
          })
      },[]);
      return (
          <div id={"content"}>
              <TreeSelect
                  showSearch
                  style={{ width: '100%' }}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  // filterTreeNode={(inputValue: string, treeNode: TTreeNode)=>{
                  //     // console.log(inputValue);
                  //     return false;
                  // }}
                  filterTreeNode = {(inputValue:string,treeNode:any)=>{
                      console.log(inputValue,treeNode);
                      return treeNode.title.includes(inputValue);
                  }}
                  placeholder="请选择科室"
                  allowClear
                  treeDefaultExpandAll={false}
                  onChange={async (code)=>{
                      setDepcode(code);
                      getScheduleRuleAsync(1,code);
                  }}
              >
                  {
                      departmentList.map((item:any)=>(
                          <TreeNode selectable={false} key={item.depcode} value={item.depcode} title={item.depname}>
                              {
                                  item.children.map((item:any)=>(
                                      <TreeNode key={item.depcode} value={item.depcode} title={item.depname}></TreeNode>
                                  ))
                              }
                          </TreeNode>
                      ))
                  }
                  {/*<TreeNode value="parent 1" title="parent 1">*/}
                  {/*    <TreeNode value="parent 1-0" title="parent 1-0">*/}
                  {/*        <TreeNode value="leaf1" title="leaf1" />*/}
                  {/*        <TreeNode value="leaf2" title="leaf2" />*/}
                  {/*    </TreeNode>*/}
                  {/*    <TreeNode value="parent 1-1" title="parent 1-1">*/}
                  {/*        <TreeNode value="leaf3" title={<b style={{ color: '#08c' }}>leaf3</b>} />*/}
                  {/*    </TreeNode>*/}
                  {/*</TreeNode>*/}
              </TreeSelect>
              <Table
                  bordered={true}
                  rowKey={"workDate"}
                  pagination={{
                      ...pageInfo,
                      onChange(page){
                          getScheduleRuleAsync(page,depcode);
                      }
                  }}
                  columns={[
                      {
                          title:"序号",
                          align:"center",
                          render(value,rows,index){
                              return (pageInfo.current-1)*pageInfo.pageSize+index+1;
                          }
                      },{
                          title:"医师数量",
                          align:"center",
                          dataIndex:"docCount"
                      },{
                          title:"号源时间",
                          align:"center",
                          render(rows){
                              return rows.workDate+"("+rows.dayOfWeek+")"
                          }
                      },{
                          title:"预约总数",
                          align:"center",
                          dataIndex:"reservedNumber"
                      },{
                          title:"剩余预约数",
                          align:"center",
                          dataIndex:"availableNumber"
                      }
                  ]}
                  dataSource={bookingScheduleList}
              />
          </div>
      );
  }
  
  export default Index;
  ```

### 35-6-5- 渲染排班详情(了解，选做)

* src->api->hosp.ts

  ```ts
  // GET /admin/hosp/schedule/findScheduleList/{hoscode}/{depcode}/{workDate}
  // 获取workDate排班日期的排班详细列表
  export const findScheduleList = (hoscode:string,depcode:string,workDate:string)=>{
      return sytRequest.get(`/hosp/schedule/findScheduleList/${hoscode}/${depcode}/${workDate}`)
  }
  ```

* src->pages->hospital->department->index.tsx

  ```tsx
  import React, {useEffect, useState} from 'react';
  import {Table, TreeSelect,Card} from "antd";
  import {useParams} from "react-router-dom";
  import {findScheduleList, getDepartmentByHoscode, getScheduleRule} from "@/api/hosp";
  const {TreeNode} = TreeSelect;
  function Index() {
      const {hoscode} = useParams();
      type TTreeNode = typeof TreeNode;
      // 用于保存科室列表的状态
      const [departmentList,setDepartmentList] = useState([]);
      // 用于保存科室排班规则列表
      const [bookingScheduleList,setBookingScheduleList] = useState([]);
      // 保存排班详情
      const [scheduleList,setScheduleList] = useState([]);
      // 用于保存页码信息
      const [pageInfo,setPageInfo] = useState({
          current:1,
          pageSize:4,
          total:1
      })
      const getScheduleRuleAsync = async function(current:number,depcode:string){
          const result = await getScheduleRule(current,pageInfo.pageSize,hoscode as string,depcode);
          console.log(result);
          setBookingScheduleList(result.data.bookingScheduleList);
          setPageInfo({
              ...pageInfo,
              current,
              total:result.data.total
          })
      }
      let [depcode,setDepcode] = useState("");
      let [key,setKey] = useState("-1");
      useEffect(()=>{
          getDepartmentByHoscode(hoscode as string).then(value=>{
              console.log(value);
              setDepartmentList(value.data);
          })
      },[]);
      return (
          <div id={"content"}>
              <TreeSelect
                  showSearch
                  style={{ width: '100%',marginBottom:"16px" }}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  // filterTreeNode={(inputValue: string, treeNode: TTreeNode)=>{
                  //     // console.log(inputValue);
                  //     return false;
                  // }}
                  filterTreeNode = {(inputValue:string,treeNode:any)=>{
                      console.log(inputValue,treeNode);
                      return treeNode.title.includes(inputValue);
                  }}
                  placeholder="请选择科室"
                  allowClear
                  treeDefaultExpandAll={false}
                  onChange={async (code)=>{
                      setDepcode(code);
                      getScheduleRuleAsync(1,code);
                  }}
              >
                  {
                      departmentList.map((item:any)=>(
                          <TreeNode selectable={false} key={item.depcode} value={item.depcode} title={item.depname}>
                              {
                                  item.children.map((item:any)=>(
                                      <TreeNode key={item.depcode} value={item.depcode} title={item.depname}></TreeNode>
                                  ))
                              }
                          </TreeNode>
                      ))
                  }
                  {/*<TreeNode value="parent 1" title="parent 1">*/}
                  {/*    <TreeNode value="parent 1-0" title="parent 1-0">*/}
                  {/*        <TreeNode value="leaf1" title="leaf1" />*/}
                  {/*        <TreeNode value="leaf2" title="leaf2" />*/}
                  {/*    </TreeNode>*/}
                  {/*    <TreeNode value="parent 1-1" title="parent 1-1">*/}
                  {/*        <TreeNode value="leaf3" title={<b style={{ color: '#08c' }}>leaf3</b>} />*/}
                  {/*    </TreeNode>*/}
                  {/*</TreeNode>*/}
              </TreeSelect>
              <Table
                  bordered={true}
                  expandable={{
                      async onExpand(expanded, record:any){
                          if(expanded){
                              setKey(record.workDate);
                              const result = await findScheduleList(hoscode as string,depcode,record.workDate);
                              console.log(result);
                              setScheduleList(result.data);
                          }else{
                              setKey("-1");
                          }
                          console.log(expanded);
                      },
                      expandedRowKeys:[key],
                      expandedRowRender(record:any){
                          return (
                              <Card>
                                  <Table
                                      bordered={true}
                                      pagination={false}
                                      columns={[
                                          {
                                              title:"职称",
                                              align:"center",
                                              dataIndex:"title"
                                          }, {
                                              title:"号源时间",
                                              align:"center",
                                              dataIndex:"workDate"
                                          }
                                          , {
                                              title:"预约总数",
                                              align:"center",
                                              dataIndex:"reservedNumber"
                                          },
                                          {
                                              title:"剩余预约数",
                                              align:"center",
                                              dataIndex:"availableNumber"
                                          },
                                          {
                                              title:"挂号费",
                                              align:"center",
                                              dataIndex:"amount"
                                          },
                                          {
                                              title:"擅长技能",
                                              align:"center",
                                              dataIndex:"skill"
                                          }
  
                                      ]}
                                      dataSource={scheduleList}
                                  />
                              </Card>
  
                          )
                      }
                  }}
                  rowKey={"workDate"}
                  pagination={{
                      ...pageInfo,
                      onChange(page){
                          getScheduleRuleAsync(page,depcode);
                      }
                  }}
                  columns={[
                      {
                          title:"序号",
                          align:"center",
                          render(value,rows,index){
                              return (pageInfo.current-1)*pageInfo.pageSize+index+1;
                          }
                      },{
                          title:"医师数量",
                          align:"center",
                          dataIndex:"docCount"
                      },{
                          title:"号源时间",
                          align:"center",
                          render(rows){
                              return rows.workDate+"("+rows.dayOfWeek+")"
                          }
                      },{
                          title:"预约总数",
                          align:"center",
                          dataIndex:"reservedNumber"
                      },{
                          title:"剩余预约数",
                          align:"center",
                          dataIndex:"availableNumber"
                      }
                  ]}
                  dataSource={bookingScheduleList}
              />
          </div>
      );
  }
  
  export default Index;
  ```

  





# 36- 打包

* 执行命令

  ```shell
  npm run build
  ```

* serve 了解：快速创建一个站点服务

  * 全局安装

    ```shell
    npm install serve -g
    ```

  * 指定站点目录

    ```shell
    serve -s build  # 将当前目录下的build作为站点目录
    ```

* 通过node启动打包后的项目

  * 下载依赖模块

    ```shell
    cnpm install express http-proxy-middleware connect-history-api-fallback
    ```

  * server.js

    ```js
    const express = require("express");
    const history = require("connect-history-api-fallback");
    const {createProxyMiddleware} = require("http-proxy-middleware");
    const app = express();
    app.use(history({
        index:"home.html",// 将默认文件index.html--->home.html
    }));
    app.use(express.static(__dirname));
    app.use("/auth",createProxyMiddleware({
        target:"http://139.198.34.216:8230/admin",// 请求服务地址
        changeOrigin:true,// 允许跨域
    }))
    app.use("/syt",createProxyMiddleware({
        target:"http://syt-api.atguigu.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/syt":""
        }
    }))
    app.listen(8091,()=>{
        console.log('success');
    })
    ```

    































































* 前台项目地址：http://syt.atguigu.cn/

* 接口文档：http://139.198.34.216:8230/doc.html#/home

* 接口baseurl:

  * http://syt-api.atguigu.cn

* 数据字典接口：http://139.198.34.216:8202/swagger-ui.html

  医院接口地址 http://139.198.34.216:8201/swagger-ui.html

  用户接口：http://139.198.34.216:8203/swagger-ui.html

  订单接口：http://139.198.34.216:8206/swagger-ui.html

