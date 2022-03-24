(function() {
    var createApp = function() {
        //----
        //开始常用的应用代码
        //------
        //主要的vue实例必须返回，并且有一个根节点在id“app”上，这样客户端就可以加载它
        return new Vue({
            template: "<div id='app'>你已经在这里花了{{counter}}秒</div>",
            data: {
                counter: 0
            },
            created: function() {
                var vm = this;
                setInterval(() => {
                    vm.counter += 1;
                }, 1000);
            }
        })
        //结束常用的代码
    }
    if(typeof module !== "undefined" && module.exports) {
        module.exports = createApp
    }else {
        this.app = createApp()
    }
}).call(this)