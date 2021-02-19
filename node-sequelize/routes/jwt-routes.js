const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const jwtConfig = require('../config/jwt-config')
const jwtMiddleware = require('../config/jwt-middleware')

//connection with mysql database
const sequelize = new Sequelize("practice","root","",{
    host: "localhost",
    dialect: "mysql"
})


//check database connection 
sequelize.authenticate().then(function(success){ //it's promise based method
    console.log("Successfully conected with database")
}).catch(function(err){
    console.log("error while connecting the database", err)
})


//create model => first way to create models in sequelize
var User = sequelize.define("tbl_jwt_users",{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
},{
    modelName: "User",
    timestamps: false //do not create createdat, updatedat columns
})

//sync model to database
sequelize.sync()

// user profile data
router.post("/profile",jwtMiddleware.checkToken,(req,res)=>{
    res.status(200).json({
        status: 1,
        userdata: req.user,
        message: "Token value parsed"
    })
})


// validate api
router.post('/validate',(req,res)=>{
    // console.log(req.headers)
    let userToken = req.headers["authorization"]
    // console.log(userToken)
    if(userToken){
        JWT.verify(userToken, jwtConfig.secret, (err,decoded)=>{
            if(err){
                res.status(500).json({
                    status: 0,
                    message: "Token is invalid",
                    data: err
                })
            } else {
                res.status(200).json({
                    status: 1,
                    message: "Token is valid",
                    data: decoded
                })
            }
        })
    } else {
        res.status(500).json({
            status: 0,
            message: "Please Provide Authentication"
        })
    }
})


//login api
router.post("/login",(req,res)=>{
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user=>{
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){

                let userToken = JWT.sign({
                    email: user.email,
                    id: user.id
                }, jwtConfig.secret ,{
                    //default: algorithm: 'HS256'
                    expiresIn: jwtConfig.expiresIn, // (milisecond) 10 min 
                    notBefore:  jwtConfig.notBefore, // after 1 min we'll be able to use this token value
                    audience: jwtConfig.audience,
                    issuer: jwtConfig.issuer,
                    algorithm: jwtConfig.algorithm
                })

                res.status(200).json({
                    status: 1,
                    message: "User logged in successfully",
                    token: userToken
                })
            } else {
                res.status(500).json({
                    status: 0,
                    message: "Password didn't match"
                })
            }
        } else {
            res.status(500).json({
                status: 0,
                message: "User not exists with this email address"
            })
        }
    }).catch(err=>{
        console.log(err)
    })
})


//register api
router.post('/user',(req,res)=>{

    let name = req.body.name
    let email = req.body.email
    let password = bcrypt.hashSync(req.body.password, 10) // hash value
    let status = req.body.status

    User.findOne({
        where: {
            email: email
        }
    }).then(user=>{
        if(user){
            res.status(200).json({
                status: 0,
                message: "User already exists"
            })
        } else {
            User.create({
                name: name,
                email: email,
                password: password,
                status: status
            }).then((response)=>{
                res.status(200).json({
                    status: 1,
                    message: 'successfully registered'
                })
            }).catch((err)=>{
                res.status(500).json({
                    status: 0,
                    data: err
                })
            })
        }
    }).catch(err=>{
        res.status(500).json({
            status: 0,
            data: err
        })
    })
})


router.get('/',(req,res)=>{
    res.status(200).json({
        status: 1,
        message: 'Welcome to Home Page'
    })
})

module.exports = router
