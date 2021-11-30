const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET

const HashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function (err, hash) {
            if (err)
                reject(err)
            resolve(hash)
        });
    })
}

const ComparePassword = (password, hashedPassword) => {

    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hashedPassword, function (err, result) {
            if (err)
                reject(err)
            resolve(result)
        });
    })

}

const generateToken = (userId) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ userId }, jwtSecret, (err, token) => {
            if (err)
                reject(err)
            resolve(token)
        })
    })
}

const validateToken = (token) => {
    return new Promise((resolve, reject) => [
        jwt.verify(token, jwtSecret, (err, decoded) => {
            if (err)
                reject(err)
            resolve(decoded.userId)
        })
    ])
}

module.exports = {
    HashPassword,
    ComparePassword,
    generateToken,
    validateToken
}