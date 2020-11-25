const express = require('express')
const router = express.Router()
router.get('login' , (req , res)=>{
    res.send("后台登录页面");
})
router.get("/index", (req, res) => {
    res.send("后台首页页面");
});
router.get("/logout", (req, res) => {
    res.send("后台退出操作");
});
module.exports = router;