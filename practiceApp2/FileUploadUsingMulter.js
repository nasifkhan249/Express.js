const express = require('express');
const multer = require('multer');
const port = 8000;

const app = express();


const storage = multer.diskStorage({
    destination:(req,file,callBack)=>{
        callBack(null,'./upload');
    },
    filename:(req,file,callBack)=>{
        callBack(null,file.originalname);
    }
});

const upload=multer({storage:storage}).single('myFile');

app.post('/uploadFile',(req,res)=>{
    upload(req,res,(error)=>{
            if(error){
                res.send('File upload fail');
            }else{
                res.send('file upload successfully');
            }
    });
});


app.listen(port,()=>{
    console.log(`server run successfully at ${port} port`);
});
