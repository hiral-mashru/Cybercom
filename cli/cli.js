#!/usr/bin/env node

console.log( "Hello!" );

const fs = require('fs');
const path = require('path')
const chalk = require('chalk')

const [,,...args] = process.argv // to parse command line arguments
const[type,...modulle] = args
const rootDir = process.cwd()

if(type==='create-module') {
    
    if(modulle){
        if (!fs.existsSync(String(modulle))) {
            fs.mkdirSync(String(modulle));
        } else {
            console.log(chalk.black.bgYellowBright('WARNING:')+`${modulle} already exists`)
        }
    } else {
        console.log(chalk.black.bgYellowBright('WARNING:')+'Provide a module name')
    }

} else if(type === 'init') {

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
    fs.mkdir(path.join(rootDir, 'globalMiddleware'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
        console.log(chalk.green('Directory \'globalMiddleware\' created successfully!')); 
    });
    fs.mkdir(path.join(rootDir, 'src'), (err) => { 
        if (err) { 
            return console.error(err); 
        } 
        console.log(chalk.green('Directory \'src\' created successfully!')); 
    });
    fs.writeFile(path.join(rootDir, '.env'),'', function(err, result) {
        if(err) console.log('error', err);
    })
    fs.writeFile(path.join(rootDir, 'core', 'connection.js'),'', function(err, result) {
        if(err) console.log('error', err);
    })
    fs.writeFile(path.join(rootDir, 'core', 'migration.js'),'', function(err, result) {
        if(err) console.log('error', err);
    })
    fs.writeFile(path.join(rootDir, 'core', 'routes.js'),'', function(err, result) {
        if(err) console.log('error', err);
    })
    fs.writeFile(path.join(rootDir, 'core', 'models.js'),'', function(err, result) {
        if(err) console.log('error', err);
    })
    fs.writeFile(path.join(rootDir, 'src', 'app.js'),'', function(err, result) {
        if(err) console.log('error', err);
    })

} else if(type === 'api') {
    
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
            fs.writeFile(path.join(rootDir, 'api', m, 'routes.json'),'', function(err, result) {
                if(err) console.log('error', err);
            })
        } else {
            console.log(chalk.black.bgYellowBright('WARNING:')+' Provide module\'s name')
        }
    }

} else {

    console.log(chalk.black.bgYellowBright('WARNING:')+' Type is not provided')

}


