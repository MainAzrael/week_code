const md5 = require('md5');

const getPasswordCrypted = (req , res , next)=>{
    passwd = req.body.password;
    req.body.passwdCrypted = md5(passwd + md5(passwd).substr(0, 16));
    next() ;
}
module.exports = getPasswordCrypted ;