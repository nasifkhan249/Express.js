const express = require('express');

app = express();

app.get('/home',function (req,res) {
    res.send('simple string response');
    res.end();
});

app.post('/about',function (req,res) {
    res.send('Hello Express world');
    res.end();
});

app.put('/status',function(req,res){
    res.status(201).end('Ok!!');
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
    res.end();
});

app.get('/download',function (req,res) {
    res.download('./uploads/nasif.jpg');

})

app.listen(8000,function (){
    console.log('server run success');
});

