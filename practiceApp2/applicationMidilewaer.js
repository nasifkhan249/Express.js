//request dawar por abog response howar age je code gulu thake shaigule kai midware bole.jemon
var express=require('express')
var app=express();
const port = 8000;


app.get('/',function (req,res) {
    res.send("This is home page")
})


app.get('/contact',function (req,res) {
    res.send("This is contact page")
})




app.use('/about',function (req,res,next) {
    console.log("I am about middleware")
    next()
})


app.get('/about',function (req,res) {
    res.send("This is about page")
})


// const express = require('express');
// const port = 8000;

// const app = express();

// app.use((req,res,next)=>{
//     console.log('This is middlewaer');
//     next();
// });

// app.get('/',(req,res)=>{
//     res.send('This is home page');
// });

// app.get('/about',(req,res)=>{
//     res.send('This is about page');
// });

// app.get('/contact',(req,res)=>{
//     res.send('This is contact page');
// });

app.listen(port,()=>{
    console.log(`server run successfully at ${port} port`);
});