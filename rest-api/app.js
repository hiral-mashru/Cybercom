const express = require('express')
const bodyParser = require('body-parser')
const appRoutes = require('./routes')
const mysql2 = require('mysql2')

const app = express()
app.use(bodyParser.json())
// app.use((bodyParser.urlencoded({ extended: false })))

app.use('/',appRoutes)


app.listen(8000)


// {
// 	"firstName": "harsh",
// 	"lastname": "mashru",
// 	"email": "h@gmail.com",
// 	"contactNo": 9426254817,
// 	"altContactNo": 8780802117,
// 	"designation": "CE",
// 	"yearsOfExperience": 1,
// 	"currentAddress": "dfgvbhnj",
// 	"city": "rajkot",
// 	"state": "gujarat",
// 	"pinCode": 360005,
// 	"panNumber": 1234567890,
// 	"adharNumber": 298765564321,
// 	"passportNumber": "cfh34567"
// }