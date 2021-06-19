var http = require("http");

var count = 0;
var main = function(req, res)
{
    res.write("<h1>Number of times this page was viewed:" + String(count)+"</h1>");
    res.end();
    count += 0.5;
}

http.createServer(main).listen(process.env.PORT);
