1、nvm
1)nvm arch ：显示node是运行在32位还是64位。
2)nvm install <version> [arch] ：安装node， version是特定版本也可以是最新稳定版本latest。可选参数arch指定安装32位还是64位版本，默认是系统位数。可以添加--insecure绕过远程服务器的SSL。
3)nvm list [available] ：显示已安装的列表。可选参数available，显示可安装的所有版本。list可简化为ls。
4)nvm on ：开启node.js版本管理。
5)nvm off ：关闭node.js版本管理。
6)nvm proxy [url] ：设置下载代理。不加可选参数url，显示当前代理。将url设置为none则移除代理。
7)nvm node_mirror [url] ：设置node镜像。默认是https://nodejs.org/dist/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。
8)nvm npm_mirror [url] ：设置npm镜像。https://github.com/npm/cli/archive/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。
9)nvm uninstall <version> ：卸载指定版本node。
10)nvm use [version] [arch] ：使用制定版本node。可指定32/64位。
11)nvm root [path] ：设置存储不同版本node的目录。如果未设置，默认使用当前目录。
12)nvm version ：显示nvm版本。version可简化为v。
2、npx
### 概念：
npx 是npm@5之后新增的命令，使我们可以在不安装模块到当前环境的前体下，使用一些cli功能。
npx让npm包中的命令行工具和其他可执行文件在使用上变得更加简单。它极大地简化了我们之前使用纯粹的npm时所需要的大量步骤。
例如：npx create-react-api some-repo(安装最新的create-react-api版本到当前的目录，并且不影响全局安装的create-react-api)
### 特点：
1）默认情况下，首先检查路径中是否存在要执行的包（即在项目中）；
2）如果存在，它将执行；
3）若不存在，意味着尚未安装该软件包，npx将安装其最新版本，然后执行它；
3、nodejs底层的依赖
1）V8 引擎：主要是 JS 语法的解析，有了它才能识别 JS语法
2）libuv: c 语⾔实现的⼀个⾼性能异步⾮阻塞 IO 库，⽤来实现 node.js 的事件循环
4）http-parser/llhttp: 底层处理 http 请求，处理报⽂，解析请求包等内容
5）openssl: 处理加密算法，各种框架运⽤⼴泛
6）zlib: 处理压缩等内容
4、内置的模块：
1）fs: ⽂件系统。
```js
fs = require("fs")
```
2）path: 路径系统，
## 
```js
const path = require("path")
path.resolve("b", "c") //返回一个绝对路径
path.join("b", "c") //简单的拼接
path.resolve("b/", "c/")
path.join("b/", "c/")
path.resolve("b", "..", "c")
path.join("b", "..", "c")

D:\myowninsourcetree\studynew\nodejs\b\c
b\c
D:\myowninsourcetree\studynew\nodejs\b\c
b\c\
D:\myowninsourcetree\studynew\nodejs\c
c
```
3）crypto: 加密相关模块
 4）dns: 处理 dns 相关内容
 5）http: 设置⼀个 http 服务器，发送 http 请求，监听
响应等等
6）readline: 读取 stdin 的⼀⾏内容，可以读取、增加、
删除我们命令⾏中的内容
7）os: 操作系统层⾯的⼀些 api，
8）vm: ⼀个专⻔处理沙箱的虚拟机模块，底层主要来调
⽤ v8 相关 api 进⾏代码解析。
9）实现fs的promise化。
10）实现commonjs