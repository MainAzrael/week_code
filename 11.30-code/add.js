const express  = require('express')
const app = express()
const port = 3000;
app.engine('html' ,require("express-art-template"));
app.set('views' , './views');
app.set('views engine' , 'html');
app.get('/' , (req,res)=>{
    let str = "这是哪里来的数据" ;
    res.render("dex.html" , {
        str,
        age:18 , 
        arr: ['xiaosan' , 'xiaosi' , 'xiaowu',]
    });
})
app.get('/jdjj' , (req,res)=>{
    arr.render('jyjj.html');
})
app.listen( port , ()=>{
    console.log( ` server is running ta http://127.0.0.1:${port}`);
})