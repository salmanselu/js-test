var http = require("http");

var count = 0;
var main = function(req, res)
{
    res.write(String(count));
    res.end();
    count += 0.5;
}

http.createServer(main).listen(process.env.PORT);
