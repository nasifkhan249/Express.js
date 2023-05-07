//simple String response in express.js
//simple string response a dui ti method bebohar kore response r kaj kora jai .akti holo get method and arekti holo post method.

//abar simple string response korete chile duti method bebohar kora jai.jemon : send method and end method.send method ar end method diye akoy kaj kora jai tobe duiti vinno .jemon :
//send method : send method body r modda nirdesh kore.
//end method : response end a ki kaj hobe bah korte hobe ta nirdesh bah point kore.

//simple string response korte chile send and end bebohar kore korte hoy.

const express = require('express');


app = express();


app.get('/one',function (req,res) {
      //res.send('This is simple sttring response');
      res.end('this is simple string response');
});

app.post('/two',function (req,res) {
    // res.send('this is simple string response');
    res.end('this is simple string response');
});


app.listen(8000,function (){
    console.log('server run sucess');
});

