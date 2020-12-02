const jwt = require('jsonwebtoken');
const fs = require('fs');
const jwt_secret = fs.readFileSync('./.env' , "utf8");
const checkJWT = (req, res, next) => {
    let arr = req.headers.authorization.split(" ");
    let _token = arr[arr.length - 1];
    if (!_token) {
        res.send({
            code: "2000",
            msg: "身份验证失败",
        });   
    } else {
        try {
            let {user_id} = jwt.verify(_token, jwt_secret);
            req.body.user_id = user_id;      
            next();
        } catch (error) {
            res.send({
                code: "3000",
                msg: "非法签名",
            });
        }
    }
};
module.exports = checkJWT ;