const mongoose = require("mongoose");
const express = require('express')
const bodyparser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/forms' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        minlength:2,
    },
    password:{
        type:String,
    },
    gender:{
        type:Number,
        default: 1,
    },
    email:{
        type:String,
    },
    mobile:{
        type:String,
    },
});
const mongo = mongoose.model('user' ,userSchema , 'users');
const app = express()
app.engine("html", require("express-art-template"));
app.use(bodyparser.urlencoded({extended:false}))
app.set('views' , './views');
app.set('view engine' , 'html');
const port = 3000 ;
app.get('/' , (req , res)=>{
    let post = req.body;
    mongo.find(post).then((int)=>{
        if(int.ok){
            res.render("index.html" ,{code:1 , output:'成功', data:int})
        }else{
            res.render("index.html" ,{code:0 , output:'失败', data:''})
        }
    })
    // res.render('index.html' , mongo.find(post).then((int)=>{ console.log(post) ,int}))
    
})
app.listen(port, () => console.log(` server is running ta http://127.0.0.1:${port}`))