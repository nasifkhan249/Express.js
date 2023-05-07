const express = require('express');


function expressServer (){


app = express();


app.get('/home',function (req,res) {
    res.send('Simple string response');
});

app.post('/status',function (req,res) {
    res.status(200).end();
});

app.get('/jason',function (req,res) {
    let MyFamilyDitails = [
        {
            name : 'Nasif Mustufa Khan',
            age : 21,
            occupation : 'student'
        },
        {
            name : 'Rubait Nadia',
            age : 24,
            occupation : 'student'
        },
        {
            name : 'Jahin Sadia',
            age : 28,
            occupation : 'student'
        },
        {
            name : 'Nasima Khatun',
            age : 58,
            occupation : 'Teacher/HouseWife'
        },
        {
            name : 'Jamal Mostafa Khan',
            age : 68,
            occupation : 'Buisnessman'
        },
    ]
   res.json(MyFamilyDitails); 
});


app.get('/download',function (req,res) {
   res.download('./uploads/nasif.jpg');
});


app.get('/bangladesh',function (req,res) {
    res.redirect('india');
});

app.get('/india',function (req,res) {
   res.send('This is india') ;
});



app.listen(8000,function () {
   console.log('server run success'); 
});

}


expressServer();