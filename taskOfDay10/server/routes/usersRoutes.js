const express = require('express');
const { registerUserCtrl, 
        loginUserCtrl,
        userProfileCtrl
    } = require('../controllers/user');
const isLogin = require('../middleware/isLogin');


const usersRoute = express.Router();


//POST/api/v1/user/register
usersRoute.post("/register", registerUserCtrl);

//POST/api/v1/user/login
usersRoute.post("/login", loginUserCtrl);

//GET/api/v1/user/:id
usersRoute.get("/profile", isLogin, userProfileCtrl);

//GET/api/v1/user/



module.exports = usersRoute;