var http = require("http");

var count = 1;
var main = function(req, res)
{
    res.write(String(count));
    res.end();
    count += 1;
}

http.createServer(main).listen(process.env.PORT);
