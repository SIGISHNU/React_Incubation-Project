const jwt = require('jsonwebtoken')

const generateTocken = (id) =>{

    return jwt.sign({ id }, process.env.JWT_PW , {
        
        expiresIn:"30d",
    });
};

module.exports = generateTocken ;