const mysql = require("mysql");
const http = require("http");
const connection = mysql.createConnection({
    host: "localhost", //主机地址
    port: 3306, //端口号
    user: "root", //数据库用户名
    password: "322sgesv@", //数据库密码
    database: "chengzhibing" //数据库名称
})
http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf8"})
    //==============连接数据库
    connection.connect(function(err) { //测试数据库连接
        if(err) {//如果报客户端认证方面的错误，需要更改mysql的密码保存方式
            //在mysql目录下的bin文件夹下1)输入mysql -uroot -p连接数据库
            //2）输入root用户的密码
            //3）更改加密方式：ALTER USER ‘root’@’localhost’ IDENTIFIED BY
            // ‘password’ PASSWORD EXPIRE NEVER;
            //4）修改密码：ALTER USER ‘root’@’localhost’ IDENTIFIED WITH
            // mysql_native_password BY ‘123456’;
            //5）刷新： FLUSH PRIVILEGES;
            //6）重新连接即可
            res.end("<p>Error Connected to MySQL!</p>")
        }else {
            res.writeHead(200, {"Content-Type": "text/html;charset=utf8"})
            res.end("<p>Connect to MySQL</p>")
        }
    })
    
    //================插入数据库
    connection.query("insert into myself(username, email, password, create_time) values('zhanghong', 'chengzhibing0523@126.com', 'hello', '2021-10-30')", function(errorinsert, resinsert) { //myself为数据库中表的名字
        if(errorinsert) console.log(errorinsert);
        console.log("INSERT RETURN=====>")
        console.log(resinsert)
    })
    //===============更新数据库
    connection.query("update myself set password='123456' where username ='chengzhibing'", function(errorupdate, resupdate) { //myself为数据库中表的名字
        if(errorupdate) {
            console.log(errorupdate)
        }
        console.log("UPDATE RETURN =====>")
        console.log(resupdate)
    })
    //===============删除数据库操作
    connection.query("delete from myself where username='zhanghong'", function(errordelete, resdelete) { //myself为数据库中表的名字
        if(errordelete) {
            console.log(errordelete)
        }
        console.log("DELETE RETURN =====>")
        console.log(resdelete)
    })
    //===============查询数据库
    connection.query("select * from myself", function(error, rows, fileds) { //myself为数据库中表的名字
        res.end(JSON.stringify(rows));
        //res.end(JSON.stringify(fileds));
    })
}).listen(6868);
