global.setup = {}

function findErr(array, key) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
        if (array[i][key]) {
            arr.push(array[i][key]);
        }
    }
    return arr;
}
setup.findErr = findErr

const bodyParser = require('body-parser')
require('dotenv').config()
// global.framework={};
require('../core/migrations');
require('../core/functions')
require('../core/services')
const chalk = require('chalk')
const morgan=require('morgan');
const routes = require('../core/routes');
const app = require('../core/migrations');

app.use(bodyParser.json())
morgan.token('req-headers', function(req,res){
    return JSON.stringify(req.headers)
}) 
morgan.token('req-body', function(req,res){
    return JSON.stringify(req.body)
})   
app.use(morgan(':remote-addr - ":method :url HTTP/:http-version" :status :req-headers :req-body :res[content-length] [:date[clf]]'))

for(let key in routes.public){
    app[routes.public[key].method](routes.public[key].path, (routes.public[key].middleware),routes.public[key].globalMiddleware,routes.public[key].action);
}

for(let key in routes.protected){
    app[routes.protected[key].method](routes.protected[key].path, routes.protected[key].middleware, routes.protected[key].globalMiddleware, routes.protected[key].action);
}

app.use(function(req,res,next){
    const err = new Error("Not found")
    err.status = 404
    next(err)
})

app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    console.log(chalk.red('ERROR:')+" Status: "+err.status+", Message: "+err.message)
    var caller_line = err.stack.split("\n")[1];
    var index = caller_line.indexOf("at ");
    var clean = caller_line.slice(index+2, caller_line.length);
    console.log("Error is coming from :",clean)
    res.send({
        error: {
            status: err.status,
            message: err.message
        }
    })
})

process.on('uncaughtException', function (err,origin) {
    console.log(chalk.red('ERROR:')+err+`\nException origin: ${origin}`);
  });
  
  setTimeout(function () {
    // console.log('This will still run.');
  }, 500);
  
  // Intentionally cause an exception, but don't catch it.
//   nonexistentFunc();
//   console.log('This will not run.');
/////////////////////////////////////////////////////////////
