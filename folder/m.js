console.log("migrate "+new Date())
const express = require('express')
const path = require('path');
const Confirm = require('prompt-confirm');
const chalk = require('chalk')
var Umzug = require('umzug');
let rootPath = path.resolve(__dirname, '../');

  var connection
  let promise = new Promise((resolve, reject) => {
    connection = require('./connection').getSequelize();
  })
  promise.then(function(value){
    // if(connection && Object.keys(connection).length !== 0 && connection.constructor === Object){
      console.log('connnnn',connection)


require('dotenv').config()
const app = express()
var config = require('../config/database.json');
// if(config.database){

try{

var umzug = new Umzug({
    storage: 'sequelize',
    storageOptions: {
        sequelize: connection 
    },
    migrations: {
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
  if(migrations.length>0){
    new Confirm('Wanna do migrations?')
    .run()
    .then(function(answer) {
      if(answer){
          console.log("Pending migrations : ")
          migrations.map(a => console.log(chalk.yellow(a.file)))
          umzug.up().then(function()  {
            console.log(chalk.green('Migration complete!'));
            serverListen();
          }).catch(err => {
            throw `Unable to perform migration due to`;
          }); 
      } else {
        serverListen();
      }
    });
  } else {
    console.log(chalk.green("No migrations are pending..."))
    serverListen();
  }
  }).catch(err =>{
    console.log(chalk.red("Error coming in migrations..."))
    serverListen()
  })
// } else {
//   serverListen()
// }
} catch(err){
  console.log(chalk.red("Error coming between sequelize and umzug connection..."))
}

  function serverListen(){
    var fp = require("find-free-port")
    var portt = process.env.PORT
    fp(parseInt(portt), function(err, freePort){
      if(parseInt(freePort) !== parseInt(portt)){
        console.log(chalk.black.bgYellowBright('WARNING:')+`${parseInt(portt)} is not free`)
        new Confirm('Wanna run the server on nearer port?')
        .run()
        .then(function(answer) {
          if(answer){
            app.listen(parseInt(freePort),()=>{
              setup.port = parseInt(freePort)
              console.log("listening to "+parseInt(freePort))
            })
          }
        })
      } else {
        app.listen(parseInt(freePort),()=>{
          setup.port = parseInt(freePort)
          console.log("listening to "+parseInt(freePort));
        })
      }
    })
  }

module.exports.app = app

})