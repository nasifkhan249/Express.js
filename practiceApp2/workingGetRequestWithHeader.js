const express = require('express');

let app = express();



app.get('/queryRequest',function (req,res) {
       let firstName =  req.query.firstName; 
       let lastName = req.query.lastName;
       let city = req.query.city;

       res.send(firstName+" "+ lastName +" "+city)
});

app.get('/headerRequest',function (req,res) {
        let firstName = req.header("firstName");
        let lastName = req.header("lastName");
        let city = req.header("city");

        let Connection = req.header("Connection");

        res.send(firstName+" "+lastName+" "+city+" "+Connection);
});

app.listen(8000,function () {
    console.log('Server run success'); 
});