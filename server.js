var express = require('express');

var app = express();


app.get('/', function(req, res){
    res.send(
     "<h1> sdm exam contosso app demo 01/08/2022</h1>"
        +"<hr/>"
        +"<h3 style='font-family: consolos'>Rushikesh Sapate</h3>"
        +"<h4>223172</h4>"
    )
})


app.listen(8080);
console.log("listen on 8080" );
