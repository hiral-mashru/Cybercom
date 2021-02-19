const jwtConfig = require('./jwt-config')
const JWT = require('jsonwebtoken')

const checkToken = (req, res, next)=>{
    let userToken = req.headers["authorization"]
    // console.log(userToken)
    if(userToken){
        JWT.verify(userToken, jwtConfig.secret, (err,decoded)=>{
            if(err){
                return res.status(500).json({
                    status: 0,
                    message: "Token is invalid",
                    data: err
                })
            } else {
                req.user = decoded
                next()
                // return res.status(200).json({
                //     status: 1,
                //     message: "Token is valid",
                //     data: decoded
                // })
                
            }
        })
    } else {
        return res.status(500).json({
            status: 0,
            message: "Please Provide Authentication"
        })
    }
}

module.exports.checkToken = checkToken