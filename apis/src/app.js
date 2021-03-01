const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
global.framework={};
require('../core/migrations');
// require('../core/models');
// require('../core/services');
// const useImport = require('../config/use');
// const checkJwt = require('../config/jwt');
const routes = require('../core/routes');
const app = require('../core/migrations');
// const app = express()
// app.use(bodyParser.json())

// app.listen(8000, async () => {
//     console.log('listening on port 8000');
// })

for(let key in routes.public){
    if (routes.public[key].middleware){
        app[routes.public[key].method](routes.public[key].path, (routes.public[key].middleware),routes.public[key].action);
    } else {
        app[routes.public[key].method](routes.public[key].path, routes.public[key].action);
    }
}

for(let key in routes.protected){
    if (routes.protected[key].middleware){
        // routes.protected[key].middleware.map(a => {
        //     a()
        // })
        app[routes.protected[key].method](routes.protected[key].path, routes.protected[key].middleware,routes.protected[key].action);
    } else {
        app[routes.protected[key].method](routes.protected[key].path, routes.protected[key].action);
    }
}
// app.get('/',(req,res)=>{
//     res.json({
//         status: 1
//     })
// })
//multiple app.use
// for(key in useImport){
//     app.use(useImport[key]);
// }
