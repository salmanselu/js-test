var http = require("http");

var r;
var g;
var b;
var rgb = '';
for(r=0;r<200;r+=100)
{
    for(g=0;g<=200;g+=100)
        for(b=0;b<=200;b+=100)
            rgb += `<div style="background-color:rgb(${r},${g},${b})">&nbsp</div>`;
    
}

var main = function(req, res)
{

res.write(rgb);
res.end();

}
http.createServer(main).listen(process.env.PORT || 4200);
