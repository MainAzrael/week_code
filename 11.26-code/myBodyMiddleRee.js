const express = require('express');
const app =express();
const fs = require('fs')



app.get('/' , (req , res)=> {
    try {
        let url = "dasjkdjsa.txt";
        let data = fs.readFileSync(url);
    } catch (error) {
        throw new Error('文件读取错误');
    }
})
app.use((err , req , res ,next)=>{
    res.send('快跑' + err.message)
})
app.use((req , res ,next)=>{
    res.statusCode = 404;
    res.send("<h1>hello设定后端沪电股份热热的</h1>");
})
app.listen( 8080 ,"0.0.0.0" , ()=>{
    console.log(" server is running ta http://127.0.0.1:8080");
})