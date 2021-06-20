var http = require("http");
var fs = require('fs');
var url = require('url');

var main = function(req, res)
{
    fs.readFile('login.html', function(err, data){

        var q = url.parse(req.url, true).query;
        if(req.url === '/')
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
    
}

http.createServer(main).listen(process.env.PORT || 4200);
