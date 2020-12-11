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
const mongo = mongoose.model('user' ,userSchema , 'forms');
const app =express();

app.use(express.static('public'));
app.engine("html", require("express-art-template"));
app.set("views", "views");
app.set("view engine", "html");
app.use(bodyparser.urlencoded({extended:false}));
// 修改 - 混合式开发提供页面（源数据展示）
app.get("/user_edit/:id", (req, res) => {
    let id = req.params.id;
    // 根据id去查询
    mongo.findOne({ _id: id }).then((ret) => {
        try {
            if (ret._id) {
                res.render("edit.html", { ret });
            } else {
                res.render("message/500.html");
            }
        } catch (error) {
            res.render("message/500.html");
        }
    });
});

// 修改 - 混合式开发保存数据
app.post("/user_edit/:id", (req, res) => {
    // 获取条件
    let id = req.params.id;
    // 获取表单数据
    let data = req.body;
    // 判断数据的有效性
    // 修改操作
    mongo.updateOne({ _id: id }, { $set: data }).then((ret) => {
        try {
            if (ret.ok) {
                res.render("message/redirect.html", {
                    msg: "修改成功！",
                    second: 3,
                    url: "/user_index",
                });
            } else {
                res.render("message/redirect.html", {
                    msg: "修改失败！",
                    second: 3,
                    url: "/user_edit/" + id,
                });
            }
        } catch (error) {}
    });
});
// 列表 - 混合式开发方法
app.get("/user_list", (req, res) => {
    // 获取全部的数据
    mongo.find().then((ret) => {
        res.render("list.html", { ret });
    });
});
app.listen( 8080 ,()=>{
    console.log( " server is running ta http://127.0.0.1:8080 ");
})

