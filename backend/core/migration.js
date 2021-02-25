/* For migrations */
const path = require('path');
const Confirm = require('prompt-confirm');
const chalk = require('chalk')
const readline = require('readline');
const prompts = require('prompts');
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

var flag = true
// umzug.down(/*{ to: '20210223113512-create-address' }*/)
umzug.pending().then(function (migrations) {

  if(migrations.length > 0){
    migrations.map(a => console.log(a.file))
    flag = false
    ////////////////////////////////////////////
    // const rl = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout
    // });
    // rl.question('Do you want to run migration? ', (answer) => {
    //   console.log(chalk.red(`Thank you : ${answer}`));
    //   if(answer == 'y' || answer =='yes'){
    //     umzug.up().then(function()  {
    //       console.log('Migration complete!');
    //     }).catch(err => {
    //       throw `Unable to perform migration due to ${err}`;
    //     });
    //   }
    //   rl.close();
    // });
    /////////////////////////////////////

  const confirm = new Confirm('Wanna do migrations?')
  .ask(function(answer) {
    // console.log(answer);
    if(answer){
      // console.log("ans",answer);
      umzug.up().then(function()  {
        console.log('Migration complete!');
        
      }).catch(err => {
        throw `Unable to perform migration due to ${err}`;
      });
    }
  });

    /////////////////////////////////////
      // umzug.up().then(function()  {
      //   console.log('Migration complete!');
      // }).catch(err => {
      //   throw `Unable to perform migration due to ${err}`;
      // });

  } else {

    console.log(chalk.green("No migrations are pending..."))

    /////////////////////////////////////////////////////////////////
    // function fn(){
    //   const response = prompts({
    //     type: 'number',
    //     name: 'value',
    //     message: 'Do you want to run migration?',
    //     validate: value => value == 'y' || value == 'yes' ? `Nightclub is 18+ only` : true
    //   });
     
    //   console.log(response.value) // => { value: 24 }
    // }
    // fn()
    ///////////////////////////////////////////////////////////////
  }

});

module.exports = umzug  