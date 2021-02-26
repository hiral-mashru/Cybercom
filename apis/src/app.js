const express = require('express')
const chalk = require('chalk')
const bodyParser = require('body-parser')
require('dotenv').config()
global.framework={};
// require('../core/migrations');
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
  
