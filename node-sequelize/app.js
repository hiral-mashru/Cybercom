const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const appRoutes = require('./routes/api-routes')
const jwtRoutes = require('./routes/jwt-routes')

app.use(bodyParser.json())

app.use('/',appRoutes)
app.use('/jwt',jwtRoutes)

app.listen(8000,()=>{
    console.log("App is running...")
})