const express = require('express')

const router = express.Router()

const models = require('../models/index')
const {User} = require('../models/User')

router.get('/select', (req,res) => {
    models.people.findAll({ where: { firstName: "mashru" } }).then((users)=>{
        res.send(users)
    })
    .catch((err)=>{
        console.log(err)
    });
})

router.get('/insert', (req,res) => {
    // console.log('modelsss', models.people.findAll())
    // console.log("user",User)
    models.people.create({
        firstName: "mashru",
        age: 5 
    }).catch((err)=>{
        if(err){
            console.log(err)
        }
    })
    res.send('insert')
})

router.get('/delete', (req,res) => {
    models.people.destroy({ where: { id: 4 } }).then(()=>{
        res.send("deleted")
    })
})

module.exports = router