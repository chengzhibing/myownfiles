const cleanCommand = require("./plugins/clean") //注册的插件
module.exports = {
  plugins: {
      commands: [cleanCommand({options: "options"})]
  }
}