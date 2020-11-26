const express = require('express')
const app = express()
let data = Date();
app.get('/' , (req ,res)=>{
    console.log(req,data );
})
app.listen( 8080 , ()=>{
    console.log(" server is running ta http://127.0.0.1:8080");
})


