const express = require('express');
const port = 8000;


let app = express();

app.use(express.static(('public')));




app.listen(port,()=>{
    console.log(`server run successfully on port ${port}`);
});