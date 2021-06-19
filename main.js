var http = require("http");
var fs = require('fs');
var url = require('url');

var count = 0;
var main = function(req, res)
{
    fs.readFile('index.html', function(err, data){
        res.write("<h1>Number of times this page was viewed:" + q.name+"</h1>" + data);
        res.end();
    });
    var q = url.parse(req.url, true).query;
    count += 0.5;
}

http.createServer(main).listen(process.env.PORT);
