const expresss = require('express');

ap=expresss();


ap.get('/',function (req,res) {
   res.send('Hello Express world') ;
});

ap.listen(8000,function () {
   console.log('Server run'); 
});