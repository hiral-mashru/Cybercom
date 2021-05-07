const {Sequelize} = require('sequelize');
const config=require('../config/config.json')['development'];
const {username,password,database,host,dialect}=config;
const sequelizeConfig={
    host:host,
    dialect:dialect,
}

const sequelize = new Sequelize(database, username, password,sequelizeConfig);

sequelize.authenticate()
.then(()=>{
    console.log('Database Successfully connected');
})
.catch(err=>{
    console.log(`Database connection error ${err.message}`)
})


sequelize.sync();

module.exports=sequelize;