const express = require('express');

let app = express();


app.all('*',(req,res)=>{
    res.send('Hello express world');
});

app.get('/modiule',(req,res)=>{
    res.send('server catch');
});


app.listen(8000,()=>{
    console.log('server run successfully');
});