const express = require( 'express')
const fs = require('fs')
const app = express();
const Message = require('./csBodyParse/bodyparse')
app.use(Message)

app.get('/' , (req , res )=>{
    res.send( 'perfect  ')
})
app.listen( 8080 , ()=>{
    console.log(" server is running ta http://127.0.0.1:8080 ");
})

