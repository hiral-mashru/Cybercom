const port = 8000

require('./core/connection')
const UserModel = require('./models')['user']
const accessTokenModel = require('./models')['accessToken']
const Client = require('./models')['Client'];
const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
	res.send("Go ahead...")
})


// in postman - req body - x-www-form-urlencoded
// username : hiralmashru
// password : hiral
// grant_type : password
// client_id : null
// client_secret : null
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

// in postman - req body - x-www-form-urlencoded
// username : hiralmashru
// password : hiral
// grant_type : password
// client_id : null
// client_secret : null
app.post('/login',(req,res)=>{
	// if(req.body.grant_type === 'client_credentials'){
		Client.findOne({
            where: {
                clientID: req.body.client_id,
                clientSecret: req.body.client_secret
            }
        }).then(clnt => {
			login(req,res,clnt)
		})
	// }
	// let client = null
	// login(req,res,client)
})

function login(req,res,client){
	console.log(client.id)
	UserModel.findOne({
        where:{
            username:req.body.username,
            password:req.body.password
        }
    }).then( user => {
		const accessToken = Math.random().toString(36).slice(2)
		console.log(accessToken)
		accessTokenModel.create({
			accessToken:accessToken,
			userId:user.id,
			clientId: client.id,
            expires: 3600
		}).then(token=>{
			res.setHeader('Content-Type','application/x-www-form-urlencoded')
			res.setHeader('Authorization','Bearer '+token)
			res.status(200).json({
				token : token
			})
		})
		.catch(error=>{
			console.log("e")
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

// in postman - req headers 
// Content-Type : application/x-www-form-urlencoded
// Authorization : Bearer d140c3ad1c6cfb4d0c9533e3b678475fe3a3577f
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