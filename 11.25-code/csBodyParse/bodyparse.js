const express = require('express');
const fs = require('fs');
const os = require('os');

const app = express();
const Message = (req , res , next)=>{
    let hosts = req.headers.host ;  //地址id
    let method = req.method ; //访问方式
    let Time = new Date();  //获取时间戳
    let data = Time.toLocaleTimeString() ; //获取时间
    let Version = req.httpVersion ; //获取当前浏览器版本
    let netaddress = 'http://127.0.0.1:8080' ;
    fs.appendFile('./logs/logs.txt' , hosts+'/'+data+'/'+netaddress+'/'+method+'/'+Version+os.EOL,()=>{} )
    next()
}
module.exports = Message;