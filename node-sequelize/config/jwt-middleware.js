const jwtConfig = require('./jwt-config')
const JWT = require('jsonwebtoken')

let checkToken = (req, res, next)=>{
    let userToken = req.headers["authorization"]

    if(userToken){
        JWT.verify(userToken, jwtConfig.secret, {
            algorithm: jwtConfig.algorithm
        }, (error, data)=>{
            if(error){
                return res.status(500).json({
                    status: 0,
                    data: error,
                    message: "Token is not valid"
                })
            } else {
                req.user = data //decoded data
                next()
            }
        })
    } else {
        res.status(500).json({
            status: 0,
            message: "Please provide authentication token value"
        })
    }
}

module.exports = checkToken