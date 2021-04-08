module.exports = {
 user: (req,res,next)=> {
  console.log("This is function user")
  next();
 }
,
use: (req,res,next)=> {
  console.log("This is function use")
  next();
 }
,
us: (req,res,next)=> {
  console.log("This is function us")
  next();
 }
}