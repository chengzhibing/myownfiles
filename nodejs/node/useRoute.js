var router=require('./route');
var server=require('./server');
server.start(router.route);