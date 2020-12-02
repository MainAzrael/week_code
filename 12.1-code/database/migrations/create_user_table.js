const {Schema} =require("../../config/mongo")  //链接数据
const Userchema = new Schema({
    userId: {
        type: Number,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        get :(val)=> val.replace(/(\d{3})\d{4}(\d{4})/ , "S1****S2")
    },
    password: {
        type: String,
        required: true,
    },
    headIcon: String,
    gender: Number,
})
module.exporte = Userchema ;   //导出数据库的约束 