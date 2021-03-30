#!/usr/bin/env node
var Spinner = require('cli-spinner').Spinner;
const fs = require('fs');
const path = require('path')
const chalk = require('chalk')
const Confirm = require('prompt-confirm')
const [,,...args] = process.argv // to parse command line arguments
const[type,...modulle] = args
const rootDir = process.cwd()
const download = require('download-git-repo')
var flag = false
const inquirer = require('inquirer');
const { isArray } = require('util');

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
    fs.readdir(rootDir, function(err, files){
        if(files.length){
            new Confirm({message: 'You have already done initialization. Do you want to do init?', default: false})
            .run()
            .then(function(answer){
                if(answer){
                    console.log(chalk.green("Loading..."))
                    var spinner = new Spinner('processing.. %s');
                    spinner.setSpinnerString('|/-\\');
                    spinner.start();
                    download('hiral-mashru/boilerplate-structure', rootDir, function (err) {
                        flag = true
                        console.log(err ? 'Error' : 'Success')
                        spinner.stop(true)
                        if(!err){
                            createStructure()
                        }
                    })
                }
            })
        } else {
            console.log(chalk.green("Loading..."))
            var spinner = new Spinner('processing.. %s');
            spinner.setSpinnerString('|/-\\');
            spinner.start();
            download('hiral-mashru/boilerplate-structure', rootDir, function (err) {
                flag = true
                console.log(err ? 'Error' : 'Success ')
                spinner.stop(true)
                if(!err){
                    createStructure()
                }
            })
        }
    })

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
            fs.mkdir(path.join(rootDir, 'api', m,'middlewares'),{ recursive: true }, (err) => { 
                if (err) { 
                    return console.error(err); 
                } 
                console.log(chalk.green(`Directory ${m}/middlewares created successfully!`)); 
            });
            fs.mkdir(path.join(rootDir, 'api', m,'services'),{ recursive: true }, (err) => { 
                if (err) { 
                    return console.error(err); 
                } 
                console.log(chalk.green(`Directory ${m}/services created successfully!`)); 
            });
            if(!fs.existsSync(rootDir+'/api/'+m+'/routes.json')) {
                fs.writeFile(path.join(rootDir, 'api', m, 'routes.json'),'[]', function(err, result) {
                    if(err) console.log('error', err);
                })
            }
            
        } else {
            console.log(chalk.black.bgYellowBright('WARNING:')+' Provide module\'s name')
        }
    }

} else if(type === 'db-config'){
    dbConfig()
} else if(type === 'create-api'){
    fs.readdir(path.join(rootDir,'api'),function(err,files){
        if (err) {
            console.log(chalk.red('ERROR:') +'Unable to scan directory: ' + err);
        } else {
            console.log("files ",files.map(a => { return {name: a,value: a}}))
            var ques = [
                {
                    type: 'list',
                    name: 'modules',
                    message: "Enter Module Name:",
                    choices: files.map(a => { return {name: a,value: a}})
                }
            ]
            inquirer.prompt(ques).then(answers => {
                console.log(answers['modules'])
                createApi(answers['modules'])
            })
        }
    })
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
    });
    fs.mkdir(path.join(rootDir, 'config'), { recursive: true },(err) => { 
        if (err) { 
            return console.error(err); 
        }  
    });
    fs.mkdir(path.join(rootDir, 'core'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
    });
    fs.mkdir(path.join(rootDir, 'crons'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
    });
    fs.mkdir(path.join(rootDir, 'db'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
    });
    fs.mkdir(path.join(rootDir, 'dbLogs'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
    });
    fs.mkdir(path.join(rootDir, 'db','models'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
    });
    fs.mkdir(path.join(rootDir, 'db','migrations'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
    });
    fs.mkdir(path.join(rootDir, 'db','seeders'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
    });
    fs.mkdir(path.join(rootDir, 'functions'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
    });
    fs.mkdir(path.join(rootDir, 'middlewares'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
    });
    fs.mkdir(path.join(rootDir, 'src'),{ recursive: true }, (err) => { 
        if (err) { 
            return console.error(err); 
        } 
    });
    
        fs.appendFile(path.join(rootDir, '.env'),'', function(err, result) {
            if(err) console.log('error', err);
        })
    
    
        fs.appendFile(path.join(rootDir, 'core', 'connection.js'),'', function(err, result) {
            if(err) console.log('error', err);
        })
    
     
        fs.appendFile(path.join(rootDir, 'core', 'migrations.js'),'', function(err, result) {
            if(err) console.log('error', err);
        })
    

        fs.appendFile(path.join(rootDir, 'core', 'routes.js'),'', function(err, result) {
            if(err) console.log('error', err);
        })

    
        fs.appendFile(path.join(rootDir, 'core', 'models.js'),'', function(err, result) {
            if(err) console.log('error', err);
        })
    
    
        fs.appendFile(path.join(rootDir, 'core', 'services.js'),'', function(err, result) {
            if(err) console.log('error', err);
        })
    
        fs.appendFile(path.join(rootDir, 'src', 'app.js'),'', function(err, result) {
            if(err) {console.log('error', err);}
        })
    
    var setting;
    new Confirm({message: 'Do you want to config db right now?', default: false})
    .run()
    .then(function(answer){
        if(answer){
            dbConfig()
        }
    })
}

function dbConfig(){
    new Confirm({message:'Do you want to setup development env?',default: false})
        .run()
        .then(function(answer){
            if(fs.existsSync(rootDir+'/config'+'/database.json')) {
                if(answer){
                    setting = 'dev'
                    createJSON(setting)
                } else {
                    console.log("Go for production env setup...")
                    setting = 'prod'
                    createJSON(setting)
                }
            }
        })
}


function createJSON(setting){
    var questions = [
        {
          type: 'input',
          name: 'username',
          message: "Enter username: "
        },
        {
            type: 'password',
            name: 'password',
            message: "Enter password: "
        },
        {
            type: 'input',
            name: 'database',
            message: "Enter database: "
        },
        {
            type: 'input',
            name: 'host',
            message: "Enter host: "
        },
        {
            type: 'input',
            name: 'dialect',
            message: "Enter dialect: "
        },
        {
            type: 'confirm',
            name: 'logging',
            message: "Enter logging: ",
            default: false
        }
    ]
    inquirer.prompt(questions).then(answers => {
        if(setting === 'dev'){
            fs.writeFile(path.join(rootDir, 'config','database.json'),"{\"development\":{\"username\":\""+answers['username']+"\",\"password\":\""+answers['password']+"\",\"database\":\""+answers['database']+"\",\"host\":\""+answers['host']+"\",\"dialect\":\""+answers['dialect']+"\",\"logging\":"+answers['logging']+"}}", function(err, result) {
                if(err) console.log('error', err);
            })
        } 
        else if(setting === 'prod'){
            fs.writeFile(path.join(rootDir, 'config','database.json'),"{\"production\":{\"username\":\""+answers['username']+"\",\"password\":\""+answers['password']+"\",\"database\":\""+answers['database']+"\",\"host\":\""+answers['host']+"\",\"dialect\":\""+answers['dialect']+"\",\"logging\":"+answers['logging']+"}}", function(err, result) {
                if(err) console.log('error', err);
            })
        }
    })
}

function createApi(moduule){
    var questions = [
        {
          type: 'input',
          name: 'path',
          message: "Enter Path(endpoint): "
        },
        {
            type: 'list',
            name: 'method',
            message: "Enter Method: ",
            choices: [{name: 'GET', value: 'GET'},{name: 'POST', value: 'POST'},{name: 'PUT', value: 'PUT'},{name: 'DELETE', value: 'DELETE'}]
        },
        {
            type: 'input',
            name: 'action',
            message: "Enter FileName.FunctionName: "
        },
        {
            type: 'confirm',
            name: 'public',
            message: "API's access would be Public? : "
        },
        {
            type: 'confirm',
            name: 'root',
            message: "Call from root? "
        }
    ]
    inquirer.prompt(questions).then(answers => {
        console.log(typeof answers['action'])
        var pathh = answers['path'][0] === '/' ? answers['path'] : '/'+answers['path']
        var method = answers['method']
        var fileName = answers['action'].toString().includes('.') && answers['action'].toString().split('.')[1] ?  answers['action'].toString().split('.')[0] : new Error('Action is not valid')
        if(typeof fileName === 'object'){
            return
        }
        if(!fs.existsSync(path.join(rootDir,'api',moduule,'controllers',fileName+'.js'))){
            fs.readdir(path.join(rootDir,'api',moduule),function(err,files){
                if(!files.includes('controllers')){
                    fs.mkdir(path.join(rootDir, 'api', moduule, 'controllers'),{ recursive: true }, (err) => { 
                        if (err) { 
                            return console.error(err); 
                        }  
                    });
                }
                fs.writeFile(path.join(rootDir,'api',moduule,'controllers',fileName+'.js'),'', function(err, result) {
                    if(err) console.log('error', err);
                })
            })  
        }
        var obj = {"path": pathh, "method": method, "action": answers['action'], "public": answers['public'], "root": answers['root']}
        var dataa;
        fs.readFile(path.join(rootDir, 'api',moduule,'routes.json'), (err, data) => {
            if (err) console.log(chalk.red('ERROR:')+' Error coming in reading the routes.json file');
            if(data.length===0){
                let d = []
                d.push(obj)
                fs.writeFile(path.join(rootDir, 'api',moduule,'routes.json'),JSON.stringify(d),'utf8', function(err, result) {
                    if(err) console.log('error', err);
                })
            } else {
                dataa = JSON.parse(data);
                console.log("data",dataa);
                if(Array.isArray(dataa)){
                    dataa.push(obj)
                    fs.writeFile(path.join(rootDir, 'api',moduule,'routes.json'),JSON.stringify(dataa),'utf8', function(err, result) {
                        if(err) console.log('error', err);
                    })
                } else {
                    var d = [];
                    d.push(dataa)
                    d.push(obj)
                    fs.writeFile(path.join(rootDir, 'api',moduule,'routes.json'),JSON.stringify(d),'utf8', function(err, result) {
                        if(err) console.log('error', err);
                    })
                }
            }
        });
    })
}

