module.exports = {
 middleware: (req,res,next)=> {
  console.log("This is global middleware")
  res.send('This is global middleware')
  next();
 }
}