module.exports = {
 use: (req,res,next)=> {
  console.log("This is function use")
  next();
 }
,
data: (req,res,next)=> {
  console.log("This is function dataGM")
  next();
 }
}