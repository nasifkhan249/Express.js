const path = require('path');
const express = require('express');

const port = 5050;


const app = express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port,()=>{
    console.log(`Server run successFully run at ${port}`);
});
