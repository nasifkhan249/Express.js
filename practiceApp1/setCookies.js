const express = require('express');

let app = express();


app.get('/',function (req,res) {
    res.send('This is simple string response');
});


app.get('/status',function (req,res) {
    res.status(404).end('not found');
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

app.get('/ind',function (req,res) {
    res.send('direct');
});


app.get('/ban',function (req,res) {
    res.redirect(ind);
});


app.get('/header',function (req,res) {
    res.append("Name","nasif");
    res.append("Age","20 years old");
    res.append("City","Netrakona");
    res.status(201).end("created");
});

app.get('/cookie',function (req,res) {
    res.cookie("Name","nasif");
    res.cookie("Age","20 years old");
    res.cookie("City","Netrakona");
    res.end('Cookie set success');
});


app.listen(8000,()=>{
    console.log('server run success');
})