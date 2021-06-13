global.setup = {}
require('../core/crons')
require('../core/connection').getSequelize()
.then(res=>{
  require('../core/migrations').umzg(res)
  .then(umzug=>{
    require('../core/migrations').umzgg(umzug)
    .then((app)=>{
      require('../config/config').morgn(app)
      require('../config/fileUpload')
      function findErr(err) {
          var array = err.errors
          var key = 'message'
          var arr = []
          for (var i = 0; i < array.length; i++) {
              if (array[i][key]) {
                  arr.push(array[i][key]);
              }
          }
          return arr;
      }
      setup.findErr = findErr

      require('dotenv').config()
      require('../core/functions')
      require('../core/moduleFunctions')
      require('../core/moduleServices')
      require('../core/services')
      const chalk = require('chalk')
      const routes = require('../core/routes');
      ////////////////////////////////////////////////////////////////
      app.use('/docs',express.static(path.join(__dirname,'docs')));
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id User's unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
const { createDoc } = require('apidoc')
const path = require('path')
const doc = createDoc({
    src: path.resolve(__dirname, 'src'),
    dest: path.resolve(__dirname, 'doc')
  })
  
  if (typeof doc !== 'boolean') {
    // Documentation was generated!
    console.log("dd",doc.data) // `api_data.json` file content
    console.log("pp",doc.project) // `api_project.json` file content
  }

     const stundetData = [{
          id: 1,
          name: 'Hiral'
      },{
          id: 2,
          name: 'harsh'
      }]
      app.get('/c', (req, res) => {
          res.send('Hello World!');
      });
      app.get('/users/:id', (req, res) => {
          res.send(stundetData.map(x=> Object.values(x)))
      });
      ///////////////////////////////////////////////////////////////////////////
      try{
          for(let key in routes.public){    
              app[routes.public[key].method](routes.public[key].path, (routes.public[key].middlewares),routes.public[key].globalMiddleware,routes.public[key].action);
          }

          for(let key in routes.protected){
              app[routes.protected[key].method](routes.protected[key].path, routes.protected[key].middlewares, routes.protected[key].globalMiddleware, routes.protected[key].action);
          }
      } catch(err){
          console.log(chalk.red("ERROR:")+err)
      }
    //   app.use(function(req,res,next){
    //       const err = new Error("Not found")
    //       err.status = 404
    //       next(err)
    //   })
      
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
    })
  })
})

process.on('uncaughtException', function (err,origin) {
  console.log(chalk.red('ERROR:')+process.stderr.fd+','+err+`\nException origin: ${origin}`);
  process.exit(1);
});

setTimeout(function () {
  // console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
//   nonexistentFunc();
//   console.log('This will not run.');

/////////////////////////////////////////////////////////////
// module.exports = app