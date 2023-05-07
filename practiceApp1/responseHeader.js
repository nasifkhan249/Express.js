const express = require('express');

let app = express();


app.get('/home',function (req,res) {
    res.send('This is simple string response') ;
});


app.get('/status',function (req,res) {
    res.status(200).end('ok!!');
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
    res.download('./uploads/nasif.jpg') ;
});


app.get('/india',function (req,res) {
    res.send('I love bangladesh');
});


app.post('/bangladesh',function (req,res) {
    res.redirect(india) ;
});


app.patch('/header',function (req,res) {
    


    res.append("name","Nasif");
    res.append("age","20 years old");
    res.append("city","Netrakona");

    
    res.status(201).end('created header');
   
});

app.listen(8000,()=>{
    console.log('server run success');
});