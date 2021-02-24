/* For migrations */
const path = require('path');
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
// umzug.down({ to: '20210223113512-create-address' })
umzug.pending().then(function (migrations) {
  if(migrations.length > 0){
    console.log("migrations",migrations)
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Do you wwant to run migration? ', (answer) => {
      // TODO: Log the answer in a database
      console.log(`Thank you for your valuable feedback: ${answer}`);
      if(answer == 'y' || answer =='yes'){
        umzug.up().then(function()  {
          console.log('Migration complete!');
        }).catch(err => {
          throw `Unable to perform migration due to ${err}`;
        });
      }
      rl.close();
    });
      // umzug.up().then(function()  {
      //   console.log('Migration complete!');
      // }).catch(err => {
      //   throw `Unable to perform migration due to ${err}`;
      // });
  } else{
    console.log("No migrations are pending...")
  }
});

module.exports = umzug;