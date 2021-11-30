const { validateToken } = require("../services/util.services")

const validateTokenMiddleware = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"]
        let result = await validateToken(token);
        console.log(result)
        next();
    } catch (err) {
        res.status(401).json({ errMsg: err.message })
    }

}

module.exports = {
    validateTokenMiddleware
}