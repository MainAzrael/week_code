const express = require('express')
const frontend = require("./routres/frontend")
const backend = require("./routres/backend")
const app = express();
app.use('/froutend',frontend)
app.use('/backend' , backend)
app.listen( 8080 , ()=>{
    console.log(" server is running ta http://127.0.0.1:8080 ");
})