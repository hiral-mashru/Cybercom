const client = require('../models/client');

require('../core/connection');
const User=require('../models')['user'];
const Client = require('../models')['Client'];
require('dotenv').config()
const accessTokenModel=require('../models')['accessToken']

module.exports={
    
    // this is not for password grant, it's for client-credentials, so we are keeping null values here
    getClient:(clientID,clientSecret,callback)=>{
        console.log("id",clientID)
        console.log("secret",clientSecret)
        const client = {
            clientID: clientID,
            clientSecret: clientSecret,
            grants: [
                'password',
                'client_credentials'
            ],
            redirectUris: []
        }
        Client.findOne({
            where: {
                clientID: client.clientID,
                clientSecret: client.clientSecret
            }
        }).then(clnt => {
            callback(false, clnt);
        }).catch(err => { callback(false, err); })
    },

    // this is not for password grant, it's for client-credentials
    grantTypeAllowed:(clientID,grantType,callback)=>{
        console.log(clientID)
        console.log(grantType)
        console.log("allowed");
        callback(false, true);
    },

    // client_credentials
    getUserFromClient:(clientID,clientSecret,callback)=>{
        console.log("id",clientID)
        console.log("secret",clientSecret)
        const client = {
            clientID: clientID,
            clientSecret: clientSecret,
            grants: [
                'password',
                'client_credentials'
            ],
            redirectUris: []
        }
        Client.findOne({
            where: {
                clientID: client.clientID,
                clientSecret: client.clientSecret
            }
        }).then(clnt => {
            callback(false, clnt);
        }).catch(err => { callback(false, err); })
    },

    getUser:(username,password,callback)=>{
        console.log("getUser")
        User.findOne({
            where:{
                username:username,
                password:password
            }
        }).then(
            user=>{ console.log("user->"+JSON.stringify(user));callback(false,user); }
        )
        .catch(error=>callback(error,null))
    },

    saveAccessToken:async(accessToken,clientID,expires,user,callback)=>{
        console.log("save the token "+accessToken+", clientID: "+clientID+", userid: "+user.id+", expires: "+expires)
        Client.findOne({
            where: { clientID }
        }).then(client => {
            accessTokenModel.create({
                accessToken:accessToken,
                userId:user.id,
                clientId: client.id,
                expires
            }).then(token=>{
                callback(false,token); 
                console.log("token->"+JSON.stringify(token))
            }).catch(error=>callback(error,null))
        }).catch(error=>callback(error,null))
    },

    getAccessToken:async(bearerToken,callback)=>{
        console.log("get token")
        console.log(bearerToken);
        const token=await accessTokenModel.findOne({
            attributes:['userId','clientId'],
            where:{
                accessToken:bearerToken
            }
        });
        console.log(JSON.stringify(token));
        const accessToken={
            user:{
                id:token['userId']
            },
            expires:null
        }
        const userID=token['userId']
        callback(userID == null ? true : false, userID == null ? null : accessToken)
    }
}