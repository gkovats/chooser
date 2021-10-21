const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if ( token && token.startsWith('Bearer ') ){
        token = token.slice(7, token.length)
    }
    if ( !token ) {
        return res.status(403).send({
            message: "A token is required for authentication"
        });
    }

    jwt.verify(token, env.JWT_ENCRYPTION, (err, decoded) => {
        if( err ){
            console.log(err);
            return res.status(401).send({
                message: "Invalid Token!"
            });
        }else{
            req.user = decoded.id;
            next();
            //res.status(200).send({ message: "successs" });
        }
    });
};

module.exports = verifyToken;
