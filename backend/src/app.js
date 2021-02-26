const express = require('express')
const bodyParser = require('body-parser')
const userModel = require('../db/models').users
const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const jwtConfig = require('../config/jwtConfig')
const jwtMiddleware = require('../config/jwtMiddleware')
require('../core/migration');
require('dotenv').config()
const chalk = require('chalk')
const Op = Sequelize.Op
const app = express()

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.status(200).json({
        status: 1,
        message: "Welcome"
    })
})

app.post('/profile',jwtMiddleware.checkToken,(req,res)=>{
    userModel.findByPk(req.user.id).then(user => {
        if(user){
            res.status(200).json({
                status: 1,
                message: "Profile page",
                data: user 
            })
        } else {
            res.status(500).json({
                status: 0,
                data: user 
            })
        }
    })
})

app.post('/login',(req,res)=>{
    userModel.findOne({
        where: {
            email : {
                [Op.eq] : req.body.email
            }
        }
    }).then(user=>{
        if(user){
            let token = JWT.sign({
                id: user.id,
            }, jwtConfig.secret,{
                expiresIn: jwtConfig.expiresIn,
                notBefore: jwtConfig.notBefore,
            })

            if(bcrypt.compareSync(req.body.password, user.password)){
                res.status(200).json({
                    status: 1,
                    message: "Logged in successfully...",
                    token: token
                })
            } else {
                res.status(500).json({
                    status: 0,
                    message: "Password didn't match..."
                })
            }
        } else {
            res.status(500).json({
                status: 0,
                message: "User doesn't exist..."
            })
        }
    })
})

app.post('/user',(req,res)=>{
    userModel.findOne({
        where: {
            email: {
                [Op.eq]: req.body.email
            } 
        }
    }).then(user=>{
        if(user){
            res.status(500).json({
                status: 0,
                message: "User already exists"
            })
        } else {
            
            userModel.create({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            }).then(data=> {
                res.status(200).json({
                    status: 1,
                    message: "User inserted successfully...",
                    data: data
                })
            }).catch(err=>{
                res.status(500).json({
                    status: 0,
                    data: err
                })
            })
        }
    }).catch(err=>{
        res.status(500).json({
            status: 0,
            data:err
        })
    })
})
