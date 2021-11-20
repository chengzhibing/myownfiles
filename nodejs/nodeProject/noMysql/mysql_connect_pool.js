const http = require("http");
const mysql = require("mysql");

const pool = mysql.createPool({ //建立数据库连接池
    host: "localhost", //主机地址
    port: 3306, //端口号
    user: "root", //数据库用户名
    password: "322sgesv@", //数据库密码
    database: "chengzhibing" //数据库名称
//     connectionLimit: 用于指定连接池中最大的链接数，默认属性值为10.
// queueLimit: 用于指定允许挂起的最大连接数，如果挂起的连接数超过该数值，就会立即抛出一个错误，默认属性值为0.代表不允许被挂起的最大连接数。

})

http.createServer(function(req, res) {
    pool.getConnection(function(err, conn) { //获取数据库连接池
        if(err) {
            console.log("POOL===>" + err);
            console.log();
        }
        conn.query("select * from myself", function(err, rows, fileds) {
            if(err) {
                console.log("error");
                console.log()
            }
            console.log("SELECT======>")
            for(var i in rows) {
               console.log(rows[i])
            }
            conn.release(); //释放数据库连接
            res.writeHead(200, {"Content-Type": "text/html;charset=utf8"});
            res.end(JSON.stringify(rows))
        })
    })
}).listen(6868)