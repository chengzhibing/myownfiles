var connect = require("connect")
var saveRequest = require("./saveRequest")
var replyText = require("./replyText");
var writeHeader = require("./writeHeader");
var createError = require("./createError");
var app = connect.createServer(createError(), saveRequest(__dirname + '/requests'), writeHeader("X-Powered-By", "Node"), replyText("Hello World"));

// var app = connect.createServer(saveRequest(__dirname + '/requests'), writeHeader('X-Powered-By', 'Node'), replyText('Hello World'));
app.listen(9090)
