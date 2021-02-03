const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const rootDir = require('./util/rootDir')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(rootDir+'/public'))

app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use((req, res, next)=>{
    res.status(404).sendFile(rootDir+'/views/404.html')
})

app.listen(3000)