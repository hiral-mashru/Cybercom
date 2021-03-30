const chalk = require('chalk');
const fs = require('fs')
const Sequelize = require('sequelize');
var config = require('../config/database.json');
const Op = Sequelize.Op
const inquirer = require('inquirer')
const Confirm = require('prompt-confirm');

if(config.development){
    config = config.development
} else {
    config = config.production
}


// if(!config.database){
//     console.log("You have not done db configuration...");
// }
// else {
async function getSequelize(){
var sequelize;
return new Promise((resolve, reject) => {

const logStream = fs.createWriteStream(`./dbLogs/${new Date().toISOString().split("T")[0]}.log`, {'flags': 'a'});

var ques = [
    {
        type: 'confirm',
        name: 'dbFile',
        message: 'Wanna save logs in dbFile?'
    },
    {
        type: 'confirm',
        name: 'dbConsole',
        message: 'Wanna show logs in console?'
    }
]
inquirer.prompt(ques).then(answers => {
    if(answers['dbFile'] && answers['dbConsole']){
        sequelize = new Sequelize(config.database, config.username, config.password, {
            host: config.host,
            dialect: config.dialect/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
            logging: (msg) => {logStream.write(new Date().toLocaleTimeString()+"\n"+msg+"\n"); console.log(msg)},
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        })
    } else if(answers['dbConsole']){
        sequelize = new Sequelize(config.database, config.username, config.password, {
            host: config.host,
            dialect: config.dialect/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
            logging: (msg) => {console.log(msg)},
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        })
    } else if(answers['dbFile']){
        sequelize = new Sequelize(config.database, config.username, config.password, {
            host: config.host,
            dialect: config.dialect/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
            logging: (msg) => {logStream.write(new Date().toLocaleTimeString()+"\n"+msg+"\n")},
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        })
    } else {
        sequelize = new Sequelize(config.database, config.username, config.password, {
            host: config.host,
            dialect: config.dialect/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
            logging: false,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        })
    }
    if(sequelize){
        seq(sequelize)
        resolve(sequelize)
    } else {
        const why = 'Still working on something else'
        reject(why)
    }         
})
// new Confirm('Wanna show logs?')
// .run()
// .then(function(answer) {
//     new Promise((resolve, reject) => {
//     if(answer){
//         sequelize = new Sequelize(config.database, config.username, config.password, {
//             host: config.host,
//             dialect: config.dialect/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
//             logging: (msg) => {logStream.write(new Date().toLocaleTimeString()+"\n"+msg+"\n"); console.log(msg)},
//             pool: {
//                 max: 5,
//                 min: 0,
//                 acquire: 30000,
//                 idle: 10000
//             }
//         })
//     } else {
//         sequelize = new Sequelize(config.database, config.username, config.password, {
//             host: config.host,
//             dialect: config.dialect/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
//             logging: false,
//             pool: {
//                 max: 5,
//                 min: 0,
//                 acquire: 30000,
//                 idle: 10000
//             }
//           })
//     }
//     if(sequelize){
//         seq(sequelize)
//         resolve(sequelize)
//     } else {
//         const why = 'Still working on something else'
//         reject(why)
//     }
//     })
// })

function seq(sequelize){
let p = new Promise((resolve,reject)=>{
    sequelize.authenticate().then(() => {
        console.log(chalk.green("Connection has been established successfully. "))
        flag = true
    })
    .catch(err => {
        console.log(chalk.red('ERROR:')+" Unable to connect with the database")
    });
    // framework = {connection : sequelize};
    sequelize.sync();
})
p.then(function(value){
    require('./migrations')
})
}

})

}
// }
setup.sequelize = getSequelize
module.exports.getSequelize = getSequelize