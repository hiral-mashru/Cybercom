const port = 8000

require('dotenv').config()
require('./core/connection')
const UserModel = require('./models')['user']
const accessTokenModel = require('./models')['accessToken']

const express=require('express');
const app=express();
const bodyParser=require('body-parser');
// const oAuthConfig = require('./auth/accessTokenConfig')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// app.use(app.oauth.errorHandler())

app.get('/',(req,res)=>{
	res.send("Go ahead...")
})

app.post('/register',async (req,res)=>{
	const user = await UserModel.findOne({ where: { username: req.body.username }})
	if(!user){
		const register = await UserModel.create(req.body)
		if(register){
			res.status(200).json({
				status: 1,
				message: "Registration done successfully..."
			})
		} 
	} else {
		res.status(500).json({
			status: 0,
			message: "User already exists..."
		})
	}
})

app.post('/login',(req,res)=>{
	if(req.body.grant_type === 'client_credentials'){
		if(req.body.client_id===process.env.CLIENT_ID && req.body.client_secret === process.env.CLIENT_SECRET){
			login(req,res)
		}
	}
	login(req,res)
})

function login(req,res){
	UserModel.findOne({
        where:{
            username:req.body.username,
            password:req.body.password
        }
    }).then( user => {
		const accessToken = Math.random().toString(36).slice(2)
		accessTokenModel.create({
			accessToken:accessToken,
			userId:user.id
		}).then(token=>{
			res.setHeader('Content-Type','application/x-www-form-urlencoded')
			res.setHeader('Authorization','Bearer '+token)
			res.status(200).json({
				token : token
			})
		})
		.catch(error=>{
			res.status(500).json({
				status: 0,
				error: error
			})
		})
    })
    .catch(error=>res.status(500).json({
        status: 0,
        error: error
    }))
}

app.post('/profile',(req,res)=>{
	const bearerToken = req.headers.authorization.split(' ')[1]
	accessTokenModel.findOne({
		attributes:['userId'],
		where:{
			accessToken: bearerToken
		}
	}).then((token)=>{
		const accessToken={
			id:token['userId'],
			expires:null
		}
		const userID=token['userId']
		if(token){
			res.json({
				access: 'accessed',
				token: bearerToken,
				accessToken,
				userID
			})
		} else {
			res.json({
				err: error
			})
		}
	}).catch(error=>res.status(500).json({
        status: 0,
        error: error
    }))
})

app.post('/logout',(req,res)=>{
	const bearerToken = req.headers.authorization.split(' ')[1]
	accessTokenModel.findOne({
		attributes:['userId'],
		where:{
			accessToken: bearerToken
		}
	}).then((token)=>{
		accessTokenModel.destroy({
			where:{
				userId: token['userId'],
				accessToken: bearerToken
			}
		}).then(token => {
			res.send("logged out")
		})
	})
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})