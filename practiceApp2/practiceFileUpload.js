const express = require('express');
const multer = require('multer');
const port = 8000;

const app = express();

const storage=multer.diskStorage({
    destination:(req,file,callBack)=>{
        callBack(null,'./upload');
    },
    filename:(req,file,callBack)=>{
        callBack(null,file.originalname);
    }
});

const upload=multer({storage:storage}).single('myfile');

app.post('/uploadFiles',(req,res)=>{
    upload(req,res,(error)=>{
        if(error){
            res.send('file upload fail');
        }else{
            res.end('file upload success');
        }
    });
});


app.listen(port,()=>{
    console.log(`server run success at ${port} port`);
});