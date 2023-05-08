const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
app.use(bodyParser.json());


app.post('/jason',(req,res)=>{
    let JASONData = req.body;

    let name = JASONData['name'];
    let city = JASONData['city'];
    res.send(name + "  "+city);
});


app.listen(port,()=>{
    console.log('server run successfully');
});