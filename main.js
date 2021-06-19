var http = require("http");
var fs = require('fs');
var url = require('url');

var count = 0;
var main = function(req, res)
{
    fs.readFile('login.html', function(err, data){

        if(q.name === 'Nafeela' || q.name === 'Salman')
        {
            var body = "<h1>Hii" + q.name +"</h1>"
        }
        else
        {
            var body = data
        }
        res.write(body);
        res.end();
    
    });
    var q = url.parse(req.url, true).query;
    count += 0.5;
}

http.createServer(main).listen(process.env.PORT);
