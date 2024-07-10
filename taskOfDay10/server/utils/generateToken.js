const jwt = require('jsonwebtoken');

const generateToken = id => {
    return jwt.sign({id}, 'qazwsxedc', {expiresIn: '10d'});
};


module.exports = generateToken;