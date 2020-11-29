const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require( 'mongoose')

mongoose.connect("mongodb://localhost:27017/forms" , {
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
const app =express();
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static('public'))
//添加链接模式
app.post('/add' , (req,res)=>{
    let post = req.body;
    mongo.insertMany(post).then((int)=>{
        console.log(post);
        if(int.length){
            res.send( {code:1 ,output:"输出成功" , post })
        }else{
            res.send( {code:0 ,output:"输出失败"})
        }
    })
})
//删除链接状态
app.delete('/delete/:id' , (req , res)=>{
    let id = req.params.id;
    console.log(req.id);
    mongo.deleteOne({_id:id}).then( (int)=>{
        if(int.ok){
            res.send( {code :1 , output:"删除成功"})
        }else{
            res.send( {code :0 , output:"删除失败"})
        }
    })
})
//修改链接状态
app.put('/put/:id' , (req , res)=>{
    let id = req.params.id;
    let data = req.body;
    mongo.updateOne({_id:id},{ $set:data }).then((int)=>{
        try {
            if(int.nModified){
                res.send({code:1 , output: '修改成功'})
            }else{
                res.send({code:100 , output: '修改失败'})
            }
        } catch (error) {
            res.send('失败')
        }
    })
})
//列表链接状态
app.get('/list' , (req , res)=>{
    mongo.find().then((int)=>{
        if(int.gender =(1 || 2) ){
            res.send({code:1 , output:'成功', data:int})
        }else{
            res.send({code:0 , output:'失败', data:''})
        }
    })
})
//查询链接状态
app.get('/lose/:id' , (req , res)=>{
    let id = req.params.id;
    mongo.findOne({_id:id}).then((int)=>{
        try {
            if(int.id){
                res.send({code:1 , output:'查询成功' , data:int})
            }else{
                res.send({code:200 , output:'查询失败' , data:unll})
            }
        } catch (error) {
        }
    })
})

app.listen( 8080 ,()=>{
    console.log( " server is running ta http://127.0.0.1:8080 ");
})

