module.exports = {
 HM: (req,res,next)=> {
  console.log("This is function HM")
  next();
 }
}