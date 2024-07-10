const errHandle =  (message, statusCode)=>{
    let error = new Error(message);
    error.statusCode = statusCode ? statusCode : 500;
    return error;
};


module.exports = errHandle;