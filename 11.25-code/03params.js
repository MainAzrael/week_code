const express = require('express')
const app = express()
app.get( '/:id/:age' , (req , res)=>{
    res.send(res.params);
})
app.listen( 8080 , ()=>{
    console.log(" server is running ta http://127.0.0.1:8080");
})