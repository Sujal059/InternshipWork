const User = require("../models/User");
const errHandle = require("../utils/errHandler");
const bcrypt = require('bcryptjs');
const generateToken = require("../utils/generateToken");
const { log } = require("console");

//register
const registerUserCtrl = async(req, res, next)=>{
    const {fullname, email, mobile, password} = req.body;
    try {
        //check if email is existed
        const userFound = await User.findOne({email});
        if(userFound){
            return next( errHandle("User Already Exist", 400));
        }
        //check if fields are empty
        if(!fullname || !email || !mobile || !password){
            return next( errHandle("Please provide all the fields", 400));
        }
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create user
        const user = await User.create({
            fullname,
            email,
            mobile,
            password: hashedPassword,
        });
        res.json({
            status: "success",
            fullname: user.fullname,
            email: user.email,
            mobile: user.mobile,
            id: user._id,
        });
    } catch (error) {
        next( errHandle(error.message, 500));
    }
};



//login
const loginUserCtrl = async(req, res, next)=>{
    const {email, password} = req.body;
    try {
        //check if email exist
        const userFound = await User.findOne({email});
        if(!userFound){
            return next( errHandle("Invalid login credentials", 400));
        }
        //check for password validity
        const isPasswordMatch = await bcrypt.compare(password, userFound.password);
        if(!isPasswordMatch){
            return next( errHandle("Invalid login credentials", 400));
        }
        res.json({
            status: "success",
            fullname: userFound.fullname,
            id: userFound._id,
            token: generateToken(userFound._id),
        });
    } catch (error) {
        next( errHandle(error.message, 500));
    }
};


//profile
const userProfileCtrl = async(req, res, next)=>{
    try {
        const user = await User.findById(req.user);
        console.log(req.user);
        res.json(user);
    } catch (error) {
        next(new AppErr(error.message, 500));
    }
};


module.exports = {
    registerUserCtrl,
    loginUserCtrl,
    userProfileCtrl,
}