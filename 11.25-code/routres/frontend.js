const express = require('express')
const router = express.Router();
router.get('/login' , (req , res)=>{
    res.send("前台登录页面")
})
router.get("/register", (req, res) => {
    res.send("前台注册页面");
});
router.get("/logout", (req, res) => {
    res.send("前台退出操作");
});
module.exports = router;
