const expresss = require('express');

app=expresss();


app.get('/',function (req,res) {
   res.send('Hello Express world') ;
});

app.listen(8000,function () {
   console.log('Server run'); 
});