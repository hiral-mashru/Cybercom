module.exports = {
 user: (req,res,next)=> {
  console.log("This is function user")
  next();
 }
}