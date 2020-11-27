const express = require('express');
const session = require('cookie-session');
const app = express();
app.use(
    session({
        name:'session',
        secret:'sdsadjsahjksa',
        maxAge:20*60*1000,
    })
);
app.get('/',(req , res)=>{
    if(!req.session['sion']){
        req.session['sion'] = 1 ;
    }else{
        req.session['sion']++ ;
    }
    res.send("你一共访问 : "+ req.session['sion']  +"次")
});
app.listen( 8080 , ()=>{
    console.log( " server is running ta http://127.0.0.1:8080 ");
})