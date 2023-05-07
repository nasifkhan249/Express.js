const express = require('express');

app = express();

app.get('/one',function (req,res) {
    res.send('This is home');
});

app.post('/two',function(req,res){
    res.status(200).end('ok!!');
});

app.put('/three',function(req,res){
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


app.listen(8000,function () {
   console.log('server run success'); 
});