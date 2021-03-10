global.setup = {}
require('../core/functions')
// require('../functions/funcFile')

// console.log("setup.func",setup.functions)

const bodyParser = require('body-parser')
require('dotenv').config()
global.framework={};
require('../core/migrations');
require('../core/services')
const app = require('../core/migrations');
app.use(bodyParser.json())
const routes = require('../core/routes');

for(let key in routes.public){
    console.log(routes.public[key].path)
    app[routes.public[key].method](routes.public[key].path, routes.public[key].middleware, routes.public[key].globalMiddleware,routes.public[key].action);
}

for(let key in routes.protected){
    app[routes.protected[key].method](routes.protected[key].path, routes.protected[key].middleware, routes.protected[key].globalMiddleware, routes.protected[key].action);
}

/////////////////////////////////////////////////////////////

