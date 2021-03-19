global.setup = {}
const fileupload = require('express-fileupload')
const app = require('../core/migrations');
require('../config/config')
require('../config/fileUpload')
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

// require('../config/config')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload())
// app.use(express.static(__dirname + '/../public'));
require('dotenv').config()
// global.framework={};
// require('../config/fileUpload')
require('../core/migrations');
require('../core/functions')
require('../core/services')
// require('../config/fileUpload')
const chalk = require('chalk')
const routes = require('../core/routes');

const multer = require('multer')
// const upload = multer({dest:'uploads/'}).single("csv");
// const upload = require('../config/fileUpload')
// console.log("upload",upload)
// app.post("/image",(req, res) => {
//     upload.single('csv')(req, res, (err) => {
//         if(err) {
//           res.status(400).send("Something went wrong!");
//         }
//         res.json({
//             file: req.files
//         })
//     });
//  });

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage }).single('image');


app.post('/', upload, (req, res) => {
    console.log(req.files) // this does log the uploaded image data.
})


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
