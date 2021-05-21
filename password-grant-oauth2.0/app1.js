const port = 8000

require('./core/connection')
const UserModel = require('./models')['user']

const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const oAuthConfig = require('./auth/accessTokenConfig')
const oAuth2Server=require('node-oauth2-server');
const accessTokenModel=require('./models')['accessToken']

app.oauth = oAuth2Server({
    model: oAuthConfig,
    grants: ['password','client_credentials'],
    debug: true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(app.oauth.errorHandler())

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
app.post('/login', app.oauth.grant())


// in postman - req headers 
// Content-Type : application/x-www-form-urlencoded
// Authorization : Bearer d140c3ad1c6cfb4d0c9533e3b678475fe3a3577f
app.post('/profile',app.oauth.authorise(),(req, res) => {
	res.status(200).send('You have gained access to the restricted area')
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