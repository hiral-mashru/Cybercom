const express = require('express')
const postModel = require('../../models').Post
const commentModel = require('../../models').Comment

const router = express.Router()

router.get('/posts',(req,res)=>{
    postModel.findAll({
        include: {
            model: commentModel
        }
    }).then(data=>{
        res.status(200).json({
            status: 1,
            data:data
        })
    })
})

router.get('/comments',(req,res)=>{
    commentModel.findAll({
        include: {
            model: postModel
        }
    }).then(data=>{
        res.status(200).json({
            status: 1,
            data:data
        })
    })
})

module.exports = router