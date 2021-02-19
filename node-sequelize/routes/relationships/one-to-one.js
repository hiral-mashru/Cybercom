const express = require('express')
const emailModel = require('../../models').Email
const humanModel = require('../../models').Human

const router = express.Router()


router.get('/emails',(req,res)=>{
    emailModel.findAll({
        include: {
            model: humanModel
        }
    }).then(data=>{
        res.status(200).json({
            status: 1,
            data: data
        })
    })
})


router.get('/users',(req,res)=>{
    humanModel.findAll({
        include: {
            model: emailModel
        }
    }).then(data=>{
        res.status(200).json({
            status: 1,
            data: data
        })
    })
})


module.exports = router
