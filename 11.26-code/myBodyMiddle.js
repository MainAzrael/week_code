const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use( bodyparser.urlencoded({entended:false}));

app.post('/post' , (req , res)=>{
    console.log(req.body);
} )
  
app.listen( 8080 , ()=>{
    console.log(" server is running ta http://127.0.0.1:8080");
})