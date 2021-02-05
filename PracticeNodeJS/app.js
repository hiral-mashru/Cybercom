const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const rootDir = require('./util/rootDir')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const queryRoutes = require('./routes/queries')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(rootDir+'/public'))

app.use('/admin',adminRoutes)
app.use(shopRoutes)

//////////////////////********Sequelize**********////////////////////////
const db = require('./models')

app.use(queryRoutes)

db.sequelize.sync().then((req) =>{
    app.listen(3000, ()=>{
        console.log("server is running...")
    })
})
////////////////////////////////////////////////////////////////////////

app.use((req, res, next)=>{
    res.status(404).sendFile(rootDir+'/views/404.html')
})

// app.listen(3000)

// sequelize.close()

//Sequelize refers to the library itself while sequelize refers to an instance of 
//Sequelize, which represents a connection to one database. This is the recommended 
//convention and it will be followed throughout the documentation