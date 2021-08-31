#### 创建一个新的cli
* 1.npm init --yes（初始化一个node项目）
* 2.安装所需要的依赖包commander,inquirer等
* 3.package.json中添加bin属性cli: "./index.js"
* 4.执行npm link 软连接
* 5.执行cli就能执行index.js程序
#### index.js代码
```js
#!/usr/bin/env node
const {program} = require("commander");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs")
const childProcess = require("child_process")
program.arguments("<dir>")
.description("this is a directory!")
.action((dir) => {
    console.log(dir)
    return inquirer.prompt([
        {
            type: "list",
            name: 'framework',
            message: "Which project do you want to create",
            choices: [
                "vue",
                "react"
            ]
        }
    ]).then((val) => {
        console.log(val) //{"framwork": "react"}选择后的项目
        const fullDir = path.resolve(process.cwd(), dir)
        const command = `git clone https://github.com/loatheb/${val.framework}-boilerplate.git ${fullDir}` //从远程clone项目保存到fullDir中
        childProcess.execSync(command) //执行命令
    })
}) 
program.parse(process.argv);
```