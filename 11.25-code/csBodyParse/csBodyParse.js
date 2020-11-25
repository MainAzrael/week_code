const express = require ('express')
const csBodyParse = (req , res , nest)=>{
    let arr =[];
    req.on('data' , (buffer)=>{
        arr.push(buffer);
    })
    req.on('end' , ()=>{
        let buffer = Buffer.connat(arr);
        let post = querystring.parse(buffer.tostring());
        req.body = post;
        nest();
    })
}
module.exports = csBodyParse ;