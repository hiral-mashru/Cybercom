/* For migrations */
const path = require('path');
const chalk = require('chalk')
var Umzug = require('umzug');
let rootPath = path.resolve(__dirname, '../');
const connection = require('./connection');

var umzug = new Umzug({
    storage: 'sequelize',
    storageOptions: {
        sequelize: connection // here should be a sequelize instance, not the Sequelize module
    },
    migrations: {
        // The params that gets passed to the migrations.
        // Might be an array or a synchronous function which returns an array.
        params: [connection.getQueryInterface(), connection.constructor, function() {
            throw new Error('Migration tried to use old style "done" callback. Please upgrade to "umzug" and return a promise instead.');
        }],
        path: path.join(rootPath, 'db/migrations/')
    }
});

// umzug.down(/*{ to: '20210223113512-create-address' }*/).then(()=>{
//   console.log("downn")
// })

umzug.pending().then(function (migrations) {
    umzug.up().then(function()  {
        console.log(chalk.greenBright('Migration complete!'));
    }).catch(err => {
        throw `Unable to perform migration due to ${err}`;
    });
});

module.exports = umzug