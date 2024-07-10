const getTokenFromHeader =(req)=>{
    //get the token from header
    const headerObj = req.headers;
    const token = headerObj['authorization'].split(" ")[1];

    if(token !== undefined){
        return token;
    }else{
        return{
            status: "failed",
            message: 'Login again, No token found',
        };
    }
};


module.exports = getTokenFromHeader;