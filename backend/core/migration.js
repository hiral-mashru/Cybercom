/* For migrations */
const express = require('express')
const path = require('path');
const Confirm = require('prompt-confirm');
const chalk = require('chalk')
const readline = require('readline');
const prompts = require('prompts');
var Umzug = require('umzug');
let rootPath = path.resolve(__dirname, '../');
const connection = require('./connection');
require('dotenv').config()
const app = express()

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
  console.log("Pending migrations : ")
  migrations.map(a => console.log(chalk.yellow(a.file)))
  new Confirm('Wanna do migrations?')
  .run()
  .then(function(answer) {
    if(answer){
      if(migrations.length > 0){
        umzug.up().then(function()  {
          console.log(chalk.green('Migration complete!'));
          onserver()
        }).catch(err => {
          throw `Unable to perform migration due to ${err}`;
        });
      } else {
        console.log(chalk.green("No migrations are pending..."))
        onserver()
      }
    }
  });
});

function onserver(){
  app.listen(process.env.PORT, async () => {
    console.log(chalk.green('listening on port '+process.env.PORT));
  })
}

module.exports = app