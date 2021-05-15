require('../core/connection');
const User=require('../models')['user'];
const accessTokenModel=require('../models')['accessToken']

module.exports={
    
    // this is not for password grant, it's for client-credentials, so we are keeping null values here
    getClient:(clientID,clientSecret,callback)=>{
        console.log("id",clientID)
        console.log("secret",clientSecret)
        const client = {
            clientID,
            clientSecret,
            grants: null,
            redirectUris: null
        }
    
        callback(false, client);
    },

    // this is not for password grant, it's for client-credentials
    grantTypeAllowed:(clientID,grantType,callback)=>{
        console.log("allowed");
        callback(false, true);
    },

    getUser:(username,password,callback)=>{
        console.log("getUser")
        User.findOne({
            where:{
                username:username,
                password:password
            }
        }).then(
            user=>{callback(false,user); console.log("user->"+JSON.stringify(user))}
        )
        .catch(error=>callback(error,null))
    },

    saveAccessToken:async(accessToken,clientID,expires,user,callback)=>{
        console.log("save the token "+accessToken)
        accessTokenModel.create({
           accessToken:accessToken,
           userId:user.id
       }).then(token=>{callback(false,token); console.log("token->"+JSON.stringify(token))})
       .catch(error=>callback(error,null))
    },

    getAccessToken:async(bearerToken,callback)=>{
        console.log("get token")
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