const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
global.framework={};
require('../core/migrations');

const routes = require('../core/routes');
const app = require('../core/migrations');

const multer = require('multer')
var storage = multer.diskStorage({
    filename: function (req, file, cb) {
        console.log("filename");
        cb(null, Date.now() + '.' + file.originalname);
      },
      destination: function (req, file, cb) { 
        console.log("storage");
        cb(null, __dirname+'/');
      }
  })
  var upload = multer({ storage: storage })
app.post('/', function (req, res, next) {
    upload.single('image')(req,res,(err)=>{
    if(err) {
      console.log(err);
      return res.status(404).send("a error ocurred");
    }
    console.log("filee",req.file);
    res.status(200).send("file uploaded");
})
});

for(let key in routes.public){
    app[routes.public[key].method](routes.public[key].path, (routes.public[key].middleware),routes.public[key].globalMiddleware,routes.public[key].action);
}

for(let key in routes.protected){
    console.log(typeof routes.protected[key].globalMiddleware)
    app[routes.protected[key].method](routes.protected[key].path, routes.protected[key].middleware, routes.protected[key].globalMiddleware, routes.protected[key].action);
}

/////////////////////////////////////////////////////////////

