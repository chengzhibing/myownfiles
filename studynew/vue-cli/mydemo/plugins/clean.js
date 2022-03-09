module.exports = (options) => (api) => {//
    console.log(options)
  api.registeCommand("clean", (...args) => { //注册插件的固定的格式：api用于暴露给外部拓展的接口
      console.log("clean command exec")
  })
}