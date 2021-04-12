module.exports = {
 user: (req,res)=> {
  console.log("This is function user")
 }
,
getUser: (req,res)=> {
  console.log("This is function getUser")
  res.json({
    status: 1,
    function: setup.moduleFunctions['user']['user'](),
    globalFunction: setup.functions['HM']['us'](),
    service: ''
  })
 }
,
edit: (req,res)=> {
  console.log("This is function edit")
 }
}