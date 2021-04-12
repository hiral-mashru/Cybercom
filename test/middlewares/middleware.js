module.exports = {
 middleware: (req,res,next)=> {
  console.log("This is function global middleware")
  next();
 }
}