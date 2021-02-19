const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const appRoutes = require('./routes/api-routes')
const jwtRoutes = require('./routes/jwt-routes')
const stuffRoutes = require('./routes/cli-routes/stuff')
const studentRoutes = require('./routes/cli-routes/student')
const oneToOneRoutes = require('./routes/relationships/one-to-one')
const oneToManyRoutes = require('./routes/relationships/one-to-many')
const manyToManyRoutes = require('./routes/relationships/many-to-many')

app.use(bodyParser.json())

app.use('/',appRoutes)
app.use('/jwt',jwtRoutes)
// app.use('/cli',stuffRoutes)
app.use('/cli',studentRoutes)
// app.use('/relation',oneToOneRoutes)
// app.use('/relation',oneToManyRoutes)
app.use('/relation',manyToManyRoutes)

app.listen(8000,()=>{
    console.log("App is running...")
})