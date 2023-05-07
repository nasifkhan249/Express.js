const express = require('express');

let app = express();

app.get('/queryRequest',function (req,res) {
    
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.send(firstName +"  "+lastName);
});


app.listen(8000,function(){
    console.log('Server run success');
});