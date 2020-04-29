## 用户管理系统

### JSONPlaceHolder：快速搭建RESTful API的接口

> 用于假数据的测试

#### 什么是假数据？

 	当我们做好了客户端的开发，为了从服务器获取数据，就要从后台调用接口进行json解析。

由于没有数据库，但还是要测试的时候，就需要假数据来实现这部分的功能

#### 使用说明

1.全局安装json-server

~~~js
npm install -g json-server
~~~

2.初始化

~~~js
npm init --yes
~~~

3.项目安装json-server

~~~js
npm install json-server
~~~

4.创建数据接口测试文件(db.json)

### VUE：构建用户界面的渐进式框架

#### VUE安装过程和使用中的问题

##### vue : 无法加载文件 G:\nodejs\node_global\vue.ps1，因为在此系统上禁止运行脚本

​	找到报错指定目录删除该目录下的vue.ps1

##### npm ERR! code EPERM npm ERR! syscall open npm ERR!

​	1.在C:\Users\Administrator目录删除**npmrc**文件

​	2.进入命令行

~~~js
npm cache clean --force
~~~

#### 使用说明

**1.安装与启动（Powershell指定目录下）**

~~~js
vue webpack init
npm run dev
~~~

**2.组件**

**3.路由**

**4.导航界面（Bootstrap3）**

~~~js
<!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
~~~

**5.Vue-resource**

> 它可以通过XMLHttpRequest或JSONP发起请求并处理响应

**6.增删改查**

>  preventDefault() : 取消事件的默认动作

**路由跳转**

+ 声明式：router-link :to="/"
+ 编程式：router.push()

[参考资料1](https://www.cnblogs.com/toonezhr/p/10325457.html)

**vue中的$router 和 $route的区别**

1.router是VueRouter的一个对象，通过Vue.use(VueRouter)和VueRouter构造函数得到一个router的实例对象，这个对象中是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。

~~~js
$router.push({path:'home'}); //本质是向history栈中添加一个路由，在我们看来是 切换路由，但本质是在添加一个history记录
~~~

~~~js
$router.replace({path:'home'}); //替换路由，没有历史记录
~~~

2.route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name,path,params,query等。

~~~js
 this.fetchCustomer(this.$route.params.id);
~~~

**vue中的v-bind和v-model的区别**

1.v-bind用来绑定数据和属性以及表达式，缩写为'：'
2.v-model使用在表单中，实现双向数据绑定的，在表单元素外使用不起作用

[参考资料2](https://segmentfault.com/a/1190000014813168?utm_source=tag-newest)

**7.搜索功能（用户名）**