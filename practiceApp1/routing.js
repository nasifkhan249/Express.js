const express = require('express');

app = express();

app.get('/',function (req,res) {
    res.send('Home page');
});

app.post('/about',function (req,res){
    res.send('about page');
});

app.put('/contact',function (req,res){
    res.send('contact page');
});

app.delete('/terms',function (req,res){
    res.send('Trems page');
});


app.listen(8000,function (){
    console.log('server run success');
});