const express = require('express');
const bodyparser = require('body-parser');
const router = express.Router() ;
router.use(bodyparser.urlencoded({extended:false}));
router.use(bodyparser.json());
const logAccessInfo =require('../middlewares/log');
router.use(logAccessInfo);
const user = require('../app/controllres/user_')
const getPasswordCrypted = require('../middlewares/petmiddel');
const checkJWT = require('../middlewares/cckJWT');
router.post("/api/v1/user/login" ,getPasswordCrypted, user.post);
router.get("/api/v1/user/info", checkJWT,user.get);

module.exports = router ;