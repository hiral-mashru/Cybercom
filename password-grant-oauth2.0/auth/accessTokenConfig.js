require('../core/connection');
const User=require('../models')['user'];
const accessTokenModel=require('../models')['accessToken']

module.exports={
    
    getClient:(clientID,clientSecret,callback)=>{
        const client = {
            clientID,
            clientSecret,
            grants: null,
            redirectUris: null
        }
    
        callback(false, client);
    },
    grantTypeAllowed:(clientID,grantType,callback)=>{
        callback(false, true);
    },
    getUser:(username,password,callback)=>{
        User.findOne({
            where:{
                username:username,
                password:password
            }
        }).then(
            user=>callback(false,user)
        )
        .catch(error=>callback(error,null))
    },
    saveAccessToken:async(accessToken,clientID,expires,user,callback)=>{
        accessTokenModel.create({
           accessToken:accessToken,
           userId:user.id
       }).then(token=>callback(false,token))
       .catch(error=>callback(error,null))
    },
    getAccessToken:async(bearerToken,callback)=>{
        console.log(bearerToken);
        const token=await accessTokenModel.findOne({
            attributes:['userId'],
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