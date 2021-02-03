const path = require('path')

const express = require('express')

const rootDir = require('../util/rootDir')

const router = express.Router()

router.get('/add-product',(req, res, next) => {
    // res.send('<form action="/add" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>')
    res.sendFile(rootDir+'/views/add-product.html')
})

router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
}) 

module.exports = router