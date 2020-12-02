const BaseMobel = require("./BaseMobel")   //链接户籍元素
const { model} = require("../../config/mongo")   //下载第三方模块 操作数据库 mongo
const UserSchema = require("../../database/migrations/create_user_table")  
class UserModel extends BaseMobel{
    constructor(){
        super(model("user" ,UserSchema ,'maizuo' ));  //mongoose 的数据路模型 
    }
    getOne (){
        return this.conn.find();             //建立查询数据库的条件
    }
    getwath = (where) =>{
        return this.conn.findOne(where);
    }
    getehere(){
        return this.conn.deleteOne(where);
    }
}

module.exports = new UserModel ;    //  导出数据库的条件

