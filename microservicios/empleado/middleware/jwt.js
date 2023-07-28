const jwt = require("jsonwebtoken");

const validarJWT = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "SiSaleSA_");
        req.data = { id_usuario: decodedToken.id_usuario, id_rol: decodedToken.id_rol };
        next();
    } catch (error) {
         res.status(401).json({ message: "Auth failed!" });
    }
};

module.exports = {
  validarJWT
}