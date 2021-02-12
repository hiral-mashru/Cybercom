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

//////////////////////********jwt********///////////////
// jwt.sign(payload, secretOrPrivateKey, [options, callbacks])

const jwt = require('jsonwebtoken')

app.get('/api',(req,res)=>{
    res.json({
        message: 'Welcome to API'
    })
})

app.post('/api/posts',verifyToken, (req,res)=>{
    //get token and verify it
    jwt.verify(req.token, 'secretkey',(err, authData)=>{
        if(err){
            console.log('err')
            res.sendStatus(403)
        } else {
            res.json({
                message: 'Post created',
                authData: authData
            })
        }
    })
})

app.post('/api/login', (req,res)=>{
    //mock user
    const user = {
        id: 1,
        username: 'heer',
        email: 'hiral@gmail.com'
    }
    //async , to make it sync, we need to define jwt.sign() in a variable like const token = jwt.sign()
    //to create token
    jwt.sign(/*payload:- {user} or*/{user: user}, 'secretkey',{ expiresIn: '30s'}, (err,token)=>{
        res.json({
            token: token //or: token //as in token:token, names are same.
        })
    })
})

//Format of token: 
//Authorization: Bearer <access_token>
//get token from localhost:3000/api/login
//need to write in headers: key='Authorization', value='Bearer <TOKEN>' in postman

//verify token
function verifyToken(req,res, next){
    //get auth header value
    const bearerHeader = req.headers['authorization']
    console.log('header',typeof bearerHeader)
    //check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        //split at the space
        const bearer = bearerHeader.split(' ')
        console.log('1')
        //get token of array
        const bearerToken = bearer[1]
        //set then token
        req.token = bearerToken
        //next middleware
        next()
    } else {
        console.log('errrrr')
        res.sendStatus(404)
    }
}

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

//token: 
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImhlZXIiLCJlbWFpbCI6ImhpcmFsQGdtYWlsLmNvbSJ9LCJpYXQiOjE2MTMwNDMwNzd9.nMHCC71WwK2-kI8ur3qn2uWiOaYfmAs2fy5Mcece_GI