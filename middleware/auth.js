const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const auth = async (req, res, next) => {
    let token = null;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const verify = jwt.verify(token, "devsinfo");
            req.user = await userModel.findOne({_id: verify.uid});
            next();
        } catch (err) {
            return res.status(401).json({success: false, message: `user not authorized`})
        }
    }
    if (token == null) {
        return res.status(401).json({success: false, message: `user not authorized`})
    }
}

module.exports = auth;