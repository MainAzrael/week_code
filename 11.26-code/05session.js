const express = require('express');
const session = require('cookie-session');
const app = express();
app.use(
    session({
        name:"cookieName",
        secret: "adshshdsjds",
        maxAge:20*60*1000 ,
    })
);
app.get('/' , (req , res)=>{
    if(!req.session["count"]){
        req.session["count"] = 1;
    }else{
        req.session["count"]++ ;
    }
    res.send(" 你访问一共: "+  req.session["count"]+ " 次")
})
app.listen( 8080 ,()=>{
    console.log( " server is running ta http://127.0.0.1:8080 ");
})