const Sequelize = require('sequelize');
var config = require('../config/database.json');
const Op = Sequelize.Op
if(config.development){
    config = config.development
} else {
    config = config.production
}

// if(!config.database){
//     console.log("You have not done db configuration...");
// }
// else {
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
    logging: config.logging,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  });

sequelize.authenticate().then(() => {
      console.log("Connection has been established successfully. ")
  })
.catch(err => {
    throw `Unable to connect to the database:`
});

// framework = {connection : sequelize};
  
sequelize.sync();

module.exports = sequelize;
// }
