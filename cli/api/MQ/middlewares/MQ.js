module.exports = {
 MQ: (req,res,next)=> {
  console.log("This is function MQ")
  next();
 }
}