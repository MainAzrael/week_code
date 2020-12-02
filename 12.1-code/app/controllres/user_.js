const jwt = require('jsonwebtoken');
const fs = require('fs');
const jwt_secret = fs.readFileSync('./.env' , "utf8");
const Model = require("../modele/UserMobel");
const post = ( req ,res)=>{
    let { mobile , passwdCrypted } = req.body ;
    Model.getOne({mobile:mobile,password:passwdCrypted}).then((ret)=>{
        if (!ret) {
            res.send({
                code: "1000",
                msg: "账号或者密码不正确",
            });
        } else {
            res.send({
                code: "0",
                msg: "登录成功",
                jtw:
                    "admin " +
                    jwt.sign(
                        {
                            user_id: ret.userId,
                            mobile: ret.mobile,
                        },
                        jwt_secret
                    ),
            });
        }
    })
};

const get = (req, res) => {
    let { user_id } = req.body;
    Model.getOne({ userId: user_id }).then((ret) => {
        res.send({
            code: "0",
            msg: "成功",
            userinfo: {
                userId: ret.userId,
                mobile: ret.mobile,
                headIcon: ret.headIcon,
                gender: ret.gender,
            },
        });
    });
}
module.exports = { post , get}