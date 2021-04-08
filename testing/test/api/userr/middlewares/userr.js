module.exports = {
 userr: (req,res,next)=> {
  console.log("This is function userr")
  next();
 }
}