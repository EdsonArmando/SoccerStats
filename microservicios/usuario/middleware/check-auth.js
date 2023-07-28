const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "SiSaleSA_");
        req.data = { id_usuario: decodedToken.id, id_rol: decodedToken.rol };
        next();
    } catch (error) {
         res.status(401).json({ message: "Auth failed!" });
    }
};