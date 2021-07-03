var http = require("http");
var fs = require('fs');
var url = require('url');


var main = function(req, res)
{
var r;
var g;
var b;
for(r=0;r<256;r++)
for(g=0;g<256;g++)
for(b=0;b<256;b++)
res.write('<div style="background-color:rgb('+r+','+g+','+b+',' +'"> </div>');

}

http.createServer(main).listen(process.env.PORT || 4200);
