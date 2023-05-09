const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const port = 8000;

const app = express();
const MULTER = multer();
app.use(bodyParser.json());
app.use(MULTER.array());
app.use(express.static('public'));

app.post('/jason',(req,res)=>{
    let JASONData = req.body;
    // let JASONString = JSON.stringify(JASONData);

    let name = JASONData['name'];
    let city = JASONData['city'];

    // res.send(JASONString);
    res.send(name+" "+city);
});


//for using multipart form data

app.post('/multipartData',(req,res)=>{
    let JSONData = req.body;
    let JASONString=JSON.stringify(JSONData);

    res.send(JASONString);
});


app.listen(port,()=>{
    console.log(`Server run successfully at ${port} port`);
});