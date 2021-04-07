module.exports = {
 HM: (req,res,next)=> {
  console.log("This is function HMm1")
  next();
 }
,
hmm: (req,res,next)=> {
  console.log("This is function hmm2")
  next();
 }
}