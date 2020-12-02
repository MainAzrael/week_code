const mongoose = require('mongoose');   
mongoose.connect('mongodb://127.0.0.1:27017/maizuo' , {
    useNewUrlParser: true ,
    useUnifiedTopology: true ,
});
module.exports = mongoose ;   //链接数据库的数据  路径