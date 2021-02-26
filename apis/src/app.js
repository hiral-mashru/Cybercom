const express = require('express')
const chalk = require('chalk')
const bodyParser = require('body-parser')
require('dotenv').config()
global.framework={};
require('../core/migrations');
// require('../core/models');
// require('../core/services');
// const useImport = require('../config/use');
// const checkJwt = require('../config/jwt');
const routes = require('../core/routes');

const app = express()
app.use(bodyParser.json())

//multiple app.use
// for(key in useImport){
//     app.use(useImport[key]);
// }

// app.get('/',()=>{

// })
  
for(let key in routes.public){
    // console.log(routes.public[key].method, routes.public[key].path, routes.public[key].action)
    app[routes.public[key].method](routes.public[key].path, routes.public[key].action);
}
 
for(let key in routes.protected){
    // console.log(`app[${routes.protected[key].method}](${routes.protected[key].path}, ${routes.protected[key].action})`)
    app[routes.protected[key].method](routes.protected[key].path, routes.protected[key].action);
}

app.listen(process.env.PORT,()=>{
    console.log(chalk.greenBright("App is running on "+process.env.PORT))
})