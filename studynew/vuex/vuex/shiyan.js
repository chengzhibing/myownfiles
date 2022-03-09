let obj = {
    a: 1,
    b: 2
  };
  let proxyObj = new Proxy(obj, {
    get: function (target, attr, receiver) {
      console.log(receiver); // 1
      return target[attr]; // obj["a"]
    },
    set : function(target, attr, value){
      target[attr] = value;
      function zdy(){
          console.log("属性被修改 ！"); 
      }
      zdy();
      //添加自定义的一些功能
    }
  })
  proxyObj.a = "waa"
  console.log(proxyObj.a)