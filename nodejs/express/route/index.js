//设置路由模块
module.exports=function(app){
    app.get('/',function(req,res){
        console.log(req.ip);
        res.send('Hello World');
    });
    app.get('/public',function(req,res){
        res.send('Under public Hello World');
    });
    app.get('/public/index.html',function(req,res){
        res.send('在路径pubic/index.html下');
    })
}