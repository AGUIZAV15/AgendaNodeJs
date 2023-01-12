const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
const token = req.headers.token;
jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if(err){
        res.sendStatus(401);
        return;
    }
    
    req.user = decoded;
    next();

})
}

module.exports = authMiddleware;