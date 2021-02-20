const express = require('express')
const bcrypt = require('bcrypt')
const studentModel = require('../../models').Student
const Sequelize = require('sequelize')
const JWT = require('jsonwebtoken')
const jwtConfig = require('../../config/jwt-config')
const jwtMiddleware = require('../../config/jwt-middleware')
const checkToken = require('../../config/jwt-middleware')

const Op = Sequelize.Op

const router = express.Router()

//profile api for student
router.post('/profile',jwtMiddleware.checkToken,(req,res)=>{
    
    let student_id = req.user.id;
    studentModel.findByPk(student_id).then(student => {
        if(student){
            res.status(200).json({
                status: 1,
                message: "Profile page",
                data: student
            })
        }
    }).catch(data=>{
        res.status(500).json({
            data: data
        })
    })
})

//login api for student
router.post('/login',(req,res)=>{
    studentModel.findOne({
        where: {
            email: {
                [Op.eq]: req.body.email
            }
        }
    }).then(student => {
        if(student){
            
            // generate token method
            let token = JWT.sign({
                id: student.id
            }, jwtConfig.secret, {
                expiresIn: jwtConfig.expiresIn,
                notBefore: jwtConfig.notBefore
            })


            let password = req.body.password
            if(bcrypt.compareSync(password, student.password)){
                res.status(200).json({
                    status: 1,
                    message:"Logged in successfully",
                    token: token
                })
            } else {
                res.status(500).json({
                    status: 0,
                    message:"Password didn't match"
                })
            }
        } else {
            res.status(500).json({
                status: 0,
                message:"Student does not exist with  this email address"
            })
        }
    }).catch(data=>{
        res.status(500).json({
            data: data
        })
    })
})

//create student api
router.post('/student',(req,res)=>{
    studentModel.findOne({
        where: {
            email: {
                [Op.eq]: req.body.email
            }
        }
    }).then(user => {
        if(user){
            res.status(500).json({
                status: 0,
                message: 'Student aleady exists with this email address'
            })
        } else {
            studentModel.create({
                name: req.body.name,
                email: req.body.email,
                roll_no: req.body.roll_no,
                password: bcrypt.hashSync(req.body.password, 10)
            }).then(user=>{
                res.status(200).json({
                    status: 1,
                    message: "Student created successfully"
                })
            })
        }
    }).catch(error=>{
        res.json({
            data: error
        })
    })
})


module.exports = router