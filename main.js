var http = require("http");
var fs = require('fs');
var url = require('url');

var main = function(req, res)
{
    fs.readFile('login.html', function(err, data){

        if(q.name === 'undefined')
        {
            var body = data
        }
        else
        {
            var body = "<h1>Hii " + q.name +"</h1>"
        }
       
        
        res.write(body);
        res.end();
        
    });
    var q = url.parse(req.url, true).query;
}

http.createServer(main).listen(process.env.PORT);
