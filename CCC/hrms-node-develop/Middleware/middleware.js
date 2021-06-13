const expressJwt=require('express-jwt');

module.exports={
    isSignedIn:(req,res,next)=>{
        expressJwt({
            secret:process.env.SECRET,
            algorithms:["HS256"],
        })
    },
    isAdmin:(req,res,next)=>{
        if(req.user.role==='0'){
            return res.json({
                error:"You are not admin"
            })
        }else{
            next();
        }
    }
}