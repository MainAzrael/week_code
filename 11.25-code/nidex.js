const express = require('express')
const app = express()
app.use('/nes',express.static("public"))
app.get('/' , (req,res)=>{
    console.log(req.query);
})
app.get('/' , (req,res)=>{
    console.log(req.params.id);
})
app.listen(8080 , ()=>{
    console.log(" server ia running ta http://127.0.0.1:8080 ");
})