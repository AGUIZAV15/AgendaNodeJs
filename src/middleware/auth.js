const authMiddleware = (req, res, next) => {
console.log('pase por aqui');
next();
}

module.exports = authMiddleware;