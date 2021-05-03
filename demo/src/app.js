global.setup = {}
const chalk = require('chalk')
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
      const bodyParser=require('body-parser');
      const cookieParser=require('cookie-parser');
      const routes = require('../core/routes');
      const path = require('path')

      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended:true}));
      app.use(cookieParser())
      app.use('/docs',require('../core/migrations').express.static(path.join(__dirname,'..','docs')));
      
////////////////////// google //////////////////////////////////

const passport = require('passport')
const googleStrategy = require('passport-google-oauth20')
passport.use(new googleStrategy({
  clientID :"487669936531-93ca94ido1d5mqudgnjte78qkfmjjs5f.apps.googleusercontent.com",
  clientSecret : "HB2UeemZ67ahGag5ZLbC6Vnd",
  callbackURL : "http://localhost:8000/auth/google/authorised"
},(accessToken,refreshToken,profile,done)=>{
  console.log("accessToken: ",accessToken)
  console.log("refreshToken: ",refreshToken)
  console.log("Profile: ",profile)
}))
app.get("/auth/google",passport.authenticate("google",{
  scope: ["profile","email"]
}))
app.get("/auth/google/authorised",passport.authenticate('google'),(req,res,next)=>{
  res.send("Authenticated")
})

//////////////////////////// github //////////////////////////////////////////////

const axios = require('axios');

app.get('/github/auth',(req,res)=>{
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.get('/github/callback', ({ query: { code } }, res) => {
  console.log(code)
  const body = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code,
  };
  const opts = { headers: { accept: 'application/json' } };
  axios
    .post('https://github.com/login/oauth/access_token', body, opts)
    .then((_res) => _res.data.access_token)
    .then((token) => {
      // eslint-disable-next-line no-console
      console.log('My token:', token);

      // res.redirect(`/?token=${token}`);
      res.json({status: 1, token: token})
    })
    .catch((err) => res.status(500).json({ err: err.message }));
});

//////////////////////// pagination //////////////////////////////////////

const users = [
  { id: 1, name: 'User 1'},
  { id: 2, name: 'User 2'},
  { id: 3, name: 'User 3'},
  { id: 4, name: 'User 4'},
  { id: 5, name: 'User 5'},
  { id: 6, name: 'User 6'},
  { id: 7, name: 'User 7'},
  { id: 8, name: 'User 8'},
  { id: 9, name: 'User 9'},
  { id: 10, name: 'User 10'},
  { id: 11, name: 'User 11'},
]

app.get('/users',paginatedResults(users),(req,res)=>{
  res.json(res.paginatedResults)
})

function paginatedResults(model){
  return (req,res,next)=>{
    const page = parseInt(req.query.page,10) || 1
    const limit = parseInt(req.query.limit,10) || 10
    const offset = page * limit - limit
    const startIndex = (page-1)*limit
    const endIndex = page*limit
    const results = {}
    if(endIndex<model.length){
      results.next = {
        page: page+1,
        limit: limit
      }
    }
    if(startIndex>0){
      results.previous = {
        page: page-1,
        limit: limit
      }
    }
    results.results = model.slice(startIndex,endIndex)
    res.paginatedResults = results
    next()
  }
}

///////////////////////////////////////////////////////
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