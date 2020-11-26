const express = require('express');
const bodyparser = require("cookie-parser");
const app = express();
app.use(bodyparser());
app.get('/' , (req , res)=>{
    if(req.cookies.username){
        res.send('你是新来的')
    }else{
        res.cookie('username' , '兔兔',{
            maxAge : 60 * 20 * 1000 , 
            path : "/123"
        })
        res.send("原来是老手");
    }
})
app.listen(8080 , ()=>{
    console.log( " server is running ta http://127.0.0.1:8080 ");
})