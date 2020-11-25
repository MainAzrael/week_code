const express = require('express')
const app = express()
app.get('/' , ( req , res)=>{
    console.log(req.query);  //空数组
    res.send(req.query)       //数组
})
app.listen( 8080 , ()=>{
    console.log( " server is running ta http://127.0.0.1:8080");
})