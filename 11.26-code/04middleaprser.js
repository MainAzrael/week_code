const express = require('express');

const app = express();
app.get('/' , (req , res)=>{
    res.send('爱谁谁')
})
app.use((req,res ,next)=>{
    res.status(404).send("<h1>试试</h1>");
})
app.listen( 8080 ,()=>{
    console.log( " server is running ta http://127.0.0.1:8080 ");
})