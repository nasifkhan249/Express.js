const express = require('express');

app = express();

app.get('/',function (req,res) {
    res.send('This is Home page');
});

app.post('/about',function (req,res){
    res.send('This is About Page');
});

app.post('/status',function (req,res){
    res.status(200).end('This created');
});


app.listen(8000,function(){
    console.log('server run success');
});