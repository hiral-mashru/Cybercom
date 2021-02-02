// const http = require('http')
// const routes = require('./routes')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false})) //it registers middleware, it will parse the body coming from the form.

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/add" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>')
}) 

// app.use('/add',(req,res,next)=>{
//     console.log('in middleware')
//     res.send('<h1>Add</h1>')
//     next() 
// })

app.post('/add',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
}) 

app.use('/',(req,res,next)=>{
    // console.log('in second middleware')
    res.send('<h1>Hello Express!</h1>') //don't need to set header as html, it's by default html.
})

app.listen(3000)




// const server =  http.createServer(/*routes OR routes.handler*/ app)
// server.listen(3000)
// console.log(routes.someText)


//next allows the req to continue to next middleware in line
//app.use() allows us to add new middleware function