const multer = require('multer')
const path = require('path')
const fs = require('fs')
var root = __dirname+'/..'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let dir=path.join(__dirname,'uploads')
        if(!fs.existsSync(dir)){
          fs.mkdirSync(dir);
        }
        cb(null, dir)
      }, 
    filename: function(req, file, cb) {
        cb(null,Date.now()+'-'+ path.extname(file.originalname));
    }
});

var upload = multer({storage: storage})
setup.uploadFile = upload
// const upload = multer({dest:'uploads/'});
module.exports = upload