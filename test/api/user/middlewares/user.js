module.exports = {
 user: (req,res,next)=> {
  console.log("This is function userM")
  next();
 }
,
me: (req,res,next)=> {
  console.log("This is function me")
  next();
 }
,
us: (req,res,next)=> {
  console.log("This is function us")
  next();
 }
}