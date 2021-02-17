const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const appRoutes = require('./routes')

app.use(bodyParser.json())

app.use('/',appRoutes)

app.listen(8000,()=>{
    console.log("App is running...")
})