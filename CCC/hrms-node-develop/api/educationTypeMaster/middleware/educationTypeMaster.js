module.exports = {
 educationTypeMaster: (req,res,next)=> {
  console.log("This is middleware educationTypeMaster")
  res.send('This is middleware educationTypeMaster')
  next();
 }
}