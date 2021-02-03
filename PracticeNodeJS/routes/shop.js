const path = require('path')

const express = require('express')

const rootDir = require('../util/rootDir')

const router = express.Router()

router.get('/',(req, res, next) => {
    // res.send('<h1>Hello Express!</h1>')
    res.sendFile(rootDir+'/views/shop.html')
})

module.exports = router