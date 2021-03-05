#!/usr/bin/env node

const fs = require('fs');
const path = require('path')
const chalk = require('chalk')
const Confirm = require('prompt-confirm')
const [,,...args] = process.argv // to parse command line arguments
const[type,...modulle] = args
const rootDir = process.cwd()
const download = require('download-git-repo')
var flag = false

if(type==='create-folder') {
    
    if(modulle){
        if (!fs.existsSync(String(modulle))) {
            fs.mkdir(path.join(rootDir, String(modulle)),{ recursive: true }, (err) => { 
                if (err) { 
                    return console.error(err); 
                } 
                console.log(chalk.green(`Directory ${modulle} created successfully!`)); 
            });
        } else {
            console.log(chalk.black.bgYellowBright('WARNING:')+`${modulle} already exists`)
        }
    } else {
        console.log(chalk.black.bgYellowBright('WARNING:')+'Provide a module name')
    }

} else if(type === 'init') {
    if(fs.existsSync(rootDir+'/.env')){
        new Confirm('You have already done initialization. Do you want to do init?')
        .run()
        .then(function(answer){
            if(answer){
                download('hiral-mashru/boilerplate-structure', rootDir, function (err) {
                    flag = true
                    console.log(err ? 'Error' : 'Success '+flag)
                    if(!err){
                        createStructure()
                    }
                })
            }
        })
    } else {
        download('hiral-mashru/boilerplate-structure', rootDir, function (err) {
            flag = true
            console.log(err ? 'Error' : 'Success '+flag)
            if(!err){
                createStructure()
            }
        })
    }

} else if(type === 'create-module') {
    
    for(let m of modulle){
        if(m) {
            fs.mkdir(path.join(rootDir, 'api', m),{ recursive: true }, (err) => { 
                if (err) { 
                    return console.error(err); 
                } 
                console.log(chalk.green(`Directory ${m} created successfully!`)); 
            });
            fs.mkdir(path.join(rootDir, 'api', m,'controllers'),{ recursive: true }, (err) => { 
                if (err) { 
                    return console.error(err); 
                } 
                console.log(chalk.green(`Directory ${m}/controllers created successfully!`)); 
            });
            fs.mkdir(path.join(rootDir, 'api', m,'services'),{ recursive: true }, (err) => { 
                if (err) { 
                    return console.error(err); 
                } 
                console.log(chalk.green(`Directory ${m}/services created successfully!`)); 
            });
            if(!fs.existsSync(rootDir+'/api/'+m+'/routes.json')) {
                fs.writeFile(path.join(rootDir, 'api', m, 'routes.json'),'', function(err, result) {
                    if(err) console.log('error', err);
                })
            }
        } else {
            console.log(chalk.black.bgYellowBright('WARNING:')+' Provide module\'s name')
        }
    }

} 
// else if(type === 'github'){
//     download('hiral-mashru/boilerplate-structure', '', function (err) {
//         console.log(err ? 'Error' : 'Success')
//     })
// }
else {
    console.log(chalk.black.bgYellowBright('WARNING:')+' Type is not provided')
}


function createStructure(){
    fs.mkdir(path.join(rootDir, 'api'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
        console.log(chalk.green('Directory \'api\' created successfully!')); 
    });
    fs.mkdir(path.join(rootDir, 'config'), { recursive: true },(err) => { 
        if (err) { 
            return console.error(err); 
        } 
        console.log(chalk.green('Directory \'config\' created successfully!')); 
    });
    fs.mkdir(path.join(rootDir, 'core'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
        console.log(chalk.green('Directory \'core\' created successfully!')); 
    });
    fs.mkdir(path.join(rootDir, 'db'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
        console.log(chalk.green('Directory \'db\' created successfully!')); 
    });
    fs.mkdir(path.join(rootDir, 'db','models'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
        console.log(chalk.green('Directory \'db/models\' created successfully!')); 
    });
    fs.mkdir(path.join(rootDir, 'db','migrations'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
        console.log(chalk.green('Directory \'db/migrations\' created successfully!')); 
    });
    fs.mkdir(path.join(rootDir, 'db','seeders'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
        console.log(chalk.green('Directory \'db/seeders\' created successfully!')); 
    });
    fs.mkdir(path.join(rootDir, 'middlewares'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
        console.log(chalk.green('Directory \'middlewares\' created successfully!')); 
    });
    fs.mkdir(path.join(rootDir, 'src'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
        console.log(chalk.green('Directory \'src\' created successfully!')); 
    });
    if(!fs.existsSync(rootDir+'/.env')) {
        fs.writeFile(path.join(rootDir, '.env'),'', function(err, result) {
            if(err) console.log('error', err);
        })
    }
    if(!fs.existsSync(rootDir+'/core/connection.js')) {
        fs.writeFile(path.join(rootDir, 'core', 'connection.js'),'', function(err, result) {
            if(err) console.log('error', err);
        })
    }
    if(!fs.existsSync(rootDir+'/core/migrations.js')) {   
        fs.writeFile(path.join(rootDir, 'core', 'migrations.js'),'', function(err, result) {
            if(err) console.log('error', err);
        })
    }
    if(!fs.existsSync(rootDir+'/core/routes.js')) {
        fs.writeFile(path.join(rootDir, 'core', 'routes.js'),'', function(err, result) {
            if(err) console.log('error', err);
        })
    }
    if(!fs.existsSync(rootDir+'/core/models.js')) {
        fs.writeFile(path.join(rootDir, 'core', 'models.js'),'', function(err, result) {
            if(err) console.log('error', err);
        })
    }
    if(!fs.existsSync(rootDir+'/core/services.js')) {
        fs.writeFile(path.join(rootDir, 'core', 'services.js'),'', function(err, result) {
            if(err) console.log('error', err);
        })
    }
    if(!fs.existsSync(rootDir+'/src/app.js')) {
        fs.writeFile(path.join(rootDir, 'src', 'app.js'),'', function(err, result) {
            if(err) {console.log('error', err);}
            console.log('exists '+fs.existsSync(rootDir+'/src/app.js'))
        })
    }
    console.log(chalk.green('Boilerplate structure is created...'))
}
