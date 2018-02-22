var express = require('express');
var app = express();

app.listen(8001, function(){
    console.log("listening on 8001");
});

app.use(express.static('public'));
app.use(express.static(__dirname + '/node_modules'));