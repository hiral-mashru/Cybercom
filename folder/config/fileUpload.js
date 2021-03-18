const app = require('../core/migrations')
const multer = require('multer')

app.use(express.static(__dirname + '/public'));
var store = 'uploads/'
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, store);
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});