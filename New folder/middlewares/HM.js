module.exports = {
 hm: (req,res,next)=> {
  console.log("This is function hmg1")
  next();
 }
,
hmm: (req,res,next)=> {
  console.log("This is function hmmg2")
  next();
 }
}