module.exports = {
 bloodGroupMaster: (req,res,next)=> {
  console.log("This is middleware bloodGroupMaster")
  res.send('This is middleware bloodGroupMaster')
  next();
 }
}