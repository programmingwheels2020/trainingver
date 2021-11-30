const User = require("../model/user.model");
const { HashPassword, ComparePassword, generateToken } = require("../services/util.services");

const Register = async (req, res, next) => {
    try {
        let result = await User.findOne({ email: req.body.email });
        if (result) {
            throw new Error("Email exists in database")
        }
        const user = new User(req.body);
        user.password = await HashPassword(req.body.password);
        await user.save();
        res.json({ message: "Registration Successful" })
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }

}

const Login = async (req, res, next) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            throw new Error("User with provided email does not exist")
        }
        let result = await ComparePassword(req.body.password, user.password);
        if (!result) {
            throw new Error("Incorrect Password");
        }
        let token = await generateToken(user.id);
        res.json({ token: token })


    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }
}

module.exports = {
    Register,
    Login
}