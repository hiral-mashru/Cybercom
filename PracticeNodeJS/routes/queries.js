const express = require('express')

const router = express.Router()

const models = require('../models/index')
const {User} = require('../models/User')

router.get('/select', (req,res) => {
    res.send('select')
})

router.get('/insert', (req,res) => {
    console.log('modelsss', models.people.findAll())
    console.log("user",User)
    models.people.create({
        firstName: "heer",
        age: 20 
    }).catch((err)=>{
        if(err){
            console.log(err)
        }
    })
    res.send('insert')
})

router.get('/delete', (req,res) => {
    res.send('delete')
})

module.exports = router