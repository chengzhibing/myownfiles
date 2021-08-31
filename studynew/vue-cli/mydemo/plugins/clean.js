module.exports = (options) => {
    return (api) => {
      api.registerCommands("clean", (...args) => {
        console.log("注册的插件执行成功")
      }); //
    }
}