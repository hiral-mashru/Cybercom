const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const appRoutes = require('./routes/api-routes')
const jwtRoutes = require('./routes/jwt-routes')
const stuffRoutes = require('./routes/cli-routes/stuff')
const studentRoutes = require('./routes/cli-routes/student')

app.use(bodyParser.json())

app.use('/',appRoutes)
app.use('/jwt',jwtRoutes)
// app.use('/cli',stuffRoutes)
app.use('/cli',studentRoutes)

app.listen(8000,()=>{
    console.log("App is running...")
})