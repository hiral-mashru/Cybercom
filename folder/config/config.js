const morgan=require('morgan');
const app = require('../core/migrations');

morgan.token('req-headers', function(req,res){
  return JSON.stringify(req.headers)
}) 
morgan.token('req-body', function(req,res){
  return JSON.stringify(req.body)
})  

app.use(morgan(':remote-addr - ":method :url HTTP/:http-version" :status :req-headers :req-body :res[content-length] [:date[clf]]'))

module.exports.app = app