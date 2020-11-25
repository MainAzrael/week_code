const express = require('express')
const app = express()
app.use('/index', express.static('public'))
app.listen(8080 , ()=>{
    console.log( " server is running ta http://127.0.0.1:8080");
})