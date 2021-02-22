
const jwt = require('jsonwebtoken');
exports.verifyToken = function(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized Request!')
    };
    let token = req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(401).send('Unauthorized Request!')
    };
    let payload = jwt.verify(token, 'secretKey');
    if(!payload){
        return res.status(401).send('Unauthorized Request!')
    };
    next();
}