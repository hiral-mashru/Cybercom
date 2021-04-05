#!/usr/bin/env node
var Spinner = require('cli-spinner').Spinner;
const fs = require('fs');
const path = require('path');
const chalk = require('chalk')
const Confirm = require('prompt-confirm')
const [,,...args] = process.argv // to parse command line arguments
const[type,...modulle] = args
const rootDir = process.cwd()
const download = require('download-git-repo')
const inquirer = require('inquirer');

if(type==='create-folder') {
    
    if(modulle){
        if (!fs.existsSync(String(modulle))) {
            fs.mkdir(path.join(rootDir, String(modulle)),{ recursive: true }, (err) => { 
                if (err) { 
                    console.log(chalk.red('ERROR:')+` Directory ${modulle} can't be created`) 
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
                    var spinner = new Spinner('processing.. %s');
                    spinner.setSpinnerString('|/-\\');
                    spinner.start();
                    download('hiral-mashru/boilerplate-structure', rootDir, function (err) {
                        flag = true
                        console.log(err ? chalk.red('Error in downloading folder structure') : chalk.green('Success'))
                        spinner.stop(true)
                        if(!err){
                            createStructure()
                        }
                    })
                }
            })
        } else {
            var spinner = new Spinner('processing.. %s');
            spinner.setSpinnerString('|/-\\');
            spinner.start();
            download('hiral-mashru/boilerplate-structure', rootDir, function (err) {
                flag = true
                console.log(err ? chalk.red('Error in downloading folder structure') : chalk.green('Success'))
                spinner.stop(true)
                if(!err){
                    createStructure()
                }
            })
        }
    })
} else if(type === 'create-module') {
    if(modulle.length === 0){
        console.log(chalk.black.bgYellowBright('WARNING:')+' Provide module name...')
        return
    }
    for(let m of modulle){
        if(m) {
            fs.mkdir(path.join(rootDir, 'api', m),{ recursive: true }, (err) => { 
                if (err) { 
                    console.log(chalk.red('ERROR:')+` Directory ${m} can't be created`) 
                } 
                console.log(chalk.green(`Directory ${m} created successfully!`)); 
            });
            fs.mkdir(path.join(rootDir, 'api', m,'controllers'),{ recursive: true }, (err) => { 
                if (err) { 
                    console.log(chalk.red('ERROR:')+` Directory ${m}/controllers can't be created`) 
                } 
                console.log(chalk.green(`Directory ${m}/controllers created successfully!`)); 
            });
            fs.mkdir(path.join(rootDir, 'api', m,'middlewares'),{ recursive: true }, (err) => { 
                if (err) { 
                    console.log(chalk.red('ERROR:')+` Directory ${m}/middlewares can't be created`)  
                } 
                console.log(chalk.green(`Directory ${m}/middlewares created successfully!`)); 
            });
            fs.mkdir(path.join(rootDir, 'api', m,'services'),{ recursive: true }, (err) => { 
                if (err) { 
                    console.log(chalk.red('ERROR:')+` Directory ${m}/services can't be created`)  
                } 
                console.log(chalk.green(`Directory ${m}/services created successfully!`)); 
            });
            if(!fs.existsSync(rootDir+'/api/'+m+'/routes.json')) {
                fs.writeFile(path.join(rootDir, 'api', m, 'routes.json'),'[]', function(err, result) {
                    if(err) console.log(chalk.red('ERROR:')+` File ${m}/routes.json can't be created`) 
                })
            }
            if(!fs.existsSync(rootDir+'/api/'+m+'/controllers/'+m+'.js')) {
                fs.writeFile(path.join(rootDir, 'api', m, 'controllers',m+'.js'),`module.exports = {\n ${m}: (req,res)=> {\n  console.log("This is function ${m}")\n }\n}`, function(err, result) {
                    if(err) console.log(chalk.red('ERROR:')+` File ${m}/controllers/${m}.js can't be created`) 
                })
            }
            if(!fs.existsSync(rootDir+'/api/'+m+'/middlewares/'+m+'.js')) {
                fs.writeFile(path.join(rootDir, 'api', m, 'middlewares',m+'.js'),`module.exports = {\n ${m}: (req,res)=> {\n  console.log("This is function ${m}")\n }\n}`, function(err, result) {
                    if(err) console.log(chalk.red('ERROR:')+` File ${m}/middlewares/${m}.js can't be created`) 
                })
            }
            if(!fs.existsSync(rootDir+'/api/'+m+'/services/'+m+'.js')) {
                fs.writeFile(path.join(rootDir, 'api', m, 'services',m+'.js'),`module.exports = {\n ${m}: (req,res)=> {\n  console.log("This is function ${m}")\n }\n}`, function(err, result) {
                    if(err) console.log(chalk.red('ERROR:')+` File ${m}/services/${m}.js can't be created`) 
                })
            }
        } else {
            console.log(chalk.black.bgYellowBright('WARNING:')+' Provide module\'s name')
        }
    }

} else if(type === 'db-config'){
    fs.readdir(path.join(rootDir),function(err,files){
        if (!files.includes('config')) {
            fs.mkdir(path.join(rootDir,'config'),{ recursive: true }, (err) => { 
                if (err) { 
                    console.log(chalk.red('ERROR:')+` Directory config can't be created`) 
                }  
            });
        }
    }) 
    dbConfig()
} else if(type === 'create-api'){
    fs.readdirSync(path.join(rootDir),function(err,files){
        if(!files.includes('api')){
            fs.mkdirSync(path.join(rootDir,'api'),{ recursive: true });
        }
    })
    fs.readdir(path.join(rootDir,'api'),function(err,files){ 
        if(err){
            fs.mkdirSync(path.join(rootDir,'api'),{ recursive: true });
        }
        if(files && files.length!==0){
            var ques = [
                {
                    type: 'list',
                    name: 'modules',
                    message: "Enter Module Name:",
                    choices: files.map(a => { return {name: a,value: a}})
                }
            ]
            inquirer.prompt(ques).then(answers => {
                createApi(answers['modules'])
            })
        } else {
            console.log(chalk.black.bgYellowBright('WARNING:')+' There are no folders at '+rootDir+'/api, create module using "framework create-module"')
        }
    })
} else if(type === 'create-middleware'){
    fs.readdirSync(path.join(rootDir),function(err,files){
        if(!files.includes('api')){
            fs.mkdirSync(path.join(rootDir,'api'),{ recursive: true });
        }
    })
    fs.readdir(path.join(rootDir,'api'),function(err,files){
        if (err) {
            fs.mkdir(path.join(rootDir,'api'),{ recursive: true }, (err) => { 
                if (err) { 
                    console.log(chalk.red('ERROR:')+` Directory api can't be created`) 
                }  
            });
        } 
        if(files && files.length!==0){
            var ques = [
                {
                    type: 'list',
                    name: 'modules',
                    message: "Enter Module Name:",
                    choices: files.map(a => { return {name: a,value: a}})
                }
            ]
            inquirer.prompt(ques).then(answers => {
                createMiddleware(answers['modules'])
            })
        } else {
            console.log(chalk.black.bgYellowBright('WARNING:')+' There are no folders at '+rootDir+'/api, create module using "framework create-module"')
        }
    })
} else if(type === 'create-globalMiddleware'){
    fs.readdirSync(path.join(rootDir),function(err,files){
        if(!files.includes('api')){
            fs.mkdirSync(path.join(rootDir,'api'),{ recursive: true });
        }
    })
    fs.readdir(path.join(rootDir,'api'),function(err,files){
        if (err) {
            fs.mkdir(path.join(rootDir,'api'),{ recursive: true }, (err) => { 
                if (err) { 
                    console.log(chalk.red('ERROR:')+` Directory api can't be created`) 
                }  
            });
        } 
        if(files && files.length!==0){
            var ques = [
                {
                    type: 'list',
                    name: 'modules',
                    message: "Enter Module Name:",
                    choices: files.map(a => { return {name: a,value: a}})
                }
            ]
            inquirer.prompt(ques).then(answers => {
                createGlobalMiddleware(answers['modules'])
            })
        } else {
            console.log(chalk.black.bgYellowBright('WARNING:')+' There are no folders at '+rootDir+'/api, create module using "framework create-module"')
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

let devusername="root";
let devpassword=null;
let devdatabase="database_development";
let prousername="root";
let propassword=null;
let prodatabase="database_production";
let databaseJsonData=`{
  "development": {
    "username": "${devusername}",
    "password": "${devpassword}",
    "database": "${devdatabase}",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "username": "${prousername}",
    "password": "${propassword}",
    "database": "${prodatabase}",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  }
}`

function createStructure(){
    fs.mkdir(path.join(rootDir, 'api'),{ recursive: true }, (err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory api can't be created`) 
        }  
    });
    fs.mkdir(path.join(rootDir, 'config'), { recursive: true },(err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory config can't be created`) 
        }  
    });
    fs.mkdir(path.join(rootDir, 'core'),{ recursive: true }, (err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory core can't be created`) 
        } 
    });
    fs.mkdir(path.join(rootDir, 'crons'),{ recursive: true }, (err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory crons can't be created`)  
        } 
    });
    fs.mkdir(path.join(rootDir, 'db'),{ recursive: true }, (err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory db can't be created`)  
        } 
    });
    fs.mkdir(path.join(rootDir, 'dbLogs'),{ recursive: true }, (err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory dbLogs can't be created`)  
        } 
    });
    fs.mkdir(path.join(rootDir, 'db','models'),{ recursive: true }, (err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory db/models can't be created`)  
        } 
    });
    fs.mkdir(path.join(rootDir, 'db','migrations'),{ recursive: true }, (err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory db/migrations can't be created`) 
        } 
    });
    fs.mkdir(path.join(rootDir, 'db','seeders'),{ recursive: true }, (err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory db/seeders can't be created`)  
        } 
    });
    fs.mkdir(path.join(rootDir, 'functions'),{ recursive: true }, (err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory functions can't be created`)  
        } 
    });
    fs.mkdir(path.join(rootDir, 'middlewares'),{ recursive: true }, (err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory middlewares can't be created`) 
        } 
    });
    fs.mkdir(path.join(rootDir, 'src'),{ recursive: true }, (err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory src can't be created`)  
        } 
    });
    fs.mkdir(path.join(rootDir, 'uploads'),{ recursive: true }, (err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory uploads can't be created`)  
        } 
    });
    
        fs.appendFile(path.join(rootDir, '.env'),'', function(err, result) {
            if(err) console.log(chalk.red('ERROR:')+` File .env can't be created`) 
        })
    
    
        fs.appendFile(path.join(rootDir, 'core', 'connection.js'),'', function(err, result) {
            if(err) console.log(chalk.red('ERROR:')+` File core/connection.js can't be created`) 
        })
    
     
        fs.appendFile(path.join(rootDir, 'core', 'migrations.js'),'', function(err, result) {
            if(err) console.log(chalk.red('ERROR:')+` File core/migrations.js can't be created`) 
        })
    

        fs.appendFile(path.join(rootDir, 'core', 'routes.js'),'', function(err, result) {
            if(err) console.log(chalk.red('ERROR:')+` File core/routes.js can't be created`) 
        })

    
        fs.appendFile(path.join(rootDir, 'core', 'models.js'),'', function(err, result) {
            if(err) console.log(chalk.red('ERROR:')+` File core/models.js can't be created`) 
        })
    
    
        fs.appendFile(path.join(rootDir, 'core', 'services.js'),'', function(err, result) {
            if(err) console.log(chalk.red('ERROR:')+` File core/services.js can't be created`) 
        })
    
        fs.appendFile(path.join(rootDir, 'src', 'app.js'),'', function(err, result) {
            if(err) {console.log(chalk.red('ERROR:')+` File src/app.js can't be created`);}
        })

        fs.writeFile(path.join(rootDir,'config','database.json'),(databaseJsonData),function(err,result){
            if(err) {console.log(chalk.red('ERROR:')+` File config/database.json can't be created`);}
        })
    
    new Confirm({message: 'Do you want to config db right now?', default: false})
    .run()
    .then(function(answer){
        if(answer){
            dbConfig()
        }
    })
}

function dbConfig(){
    if(!fs.existsSync(rootDir+'/config'+'/database.json')) {
        fs.writeFileSync(rootDir+'/config/database.json',databaseJsonData)
    }
    new Confirm({message:'Do you want to setup development env?',default: false})
        .run()
        .then(function(answer){
            if(answer){
                setting = 'dev'
                createJSON(setting)
            } else {
                console.log("Go for production env setup...")
                setting = 'prod'
                createJSON(setting)
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
            databaseJsonData=`{
    "development": {
        "username": "${answers['username']}",
        "password": "${answers['password']}",
        "database": "${answers['database']}",
        "host": "${answers['host']}",
        "dialect": "${answers['dialect']}",
        "logging": ${answers['logging']}
    },
    "production": {
        "username": "${prousername}",
        "password": "${propassword}",
        "database": "${prodatabase}",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "logging": false
    }
}`
            // fs.writeFile(path.join(rootDir, 'config','database.json'),"{\"development\":{\"username\":\""+answers['username']+"\",\"password\":\""+answers['password']+"\",\"database\":\""+answers['database']+"\",\"host\":\""+answers['host']+"\",\"dialect\":\""+answers['dialect']+"\",\"logging\":"+answers['logging']+"}}", function(err, result) {
            //     if(err) console.log(chalk.red('ERROR:')+` File config/database.json can't be created`) 
            // })
            fs.writeFile(path.join(rootDir, 'config','database.json'),(databaseJsonData), function(err, result) {
                if(err) console.log(chalk.red('ERROR:')+` File config/database.json can't be created`) 
            })
        } 
        else if(setting === 'prod'){
            databaseJsonData=`{
    "development": {
        "username": "${devusername}",
        "password": "${devpassword}",
        "database": "${devdatabase}",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "logging": false
    },
    "production": {
        "username": "${answers['username']}",
        "password": "${answers['password']}",
        "database": "${answers['database']}",
        "host": "${answers['host']}",
        "dialect": "${answers['dialect']}",
        "logging": ${answers['logging']}
    }
}`
            fs.writeFile(path.join(rootDir, 'config','database.json'),(databaseJsonData), function(err, result) {
                if(err) console.log(chalk.red('ERROR:')+` File config/database.json can't be created`) 
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
            message: "Enter controller (in 'FileName.FunctionName' format): "
        },
        {
            type: 'input',
            name: 'middlewares',
            message: "Enter middlewares (FileName.FunctionName,FileName.FunctionName,..): "
        },
        {
            type: 'input',
            name: 'globalMiddleware',
            message: "Enter global middleware (FileName.FunctionName,FileName.FunctionName,..): "
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
        var pathh = answers['path'][0] === '/' ? answers['path'] : '/'+answers['path']
        var method = answers['method']
        actionConfigure(answers['action'],moduule)
        var middleware = middlewareConfigure(answers['middlewares'],moduule)
        var globalMiddleware = globalMiddlewareConfigure(answers['globalMiddleware'])
        var obj = {"path": pathh, "method": method, "action": answers['action'], "middlewares": middleware, "globalMiddleware": globalMiddleware , "public": answers['public'], "root": answers['root']}
        if(!fs.existsSync(path.join(rootDir,'api',moduule,'routes.json'))){
            fs.writeFileSync(path.join(rootDir,'api',moduule,'routes.json'),'')
        }
        var dataa;
        fs.readFile(path.join(rootDir, 'api',moduule,'routes.json'), (err, data) => {
            if (err) console.log(chalk.red('ERROR:')+' Error coming in reading the api/'+moduule+'/routes.json file');
            if(data.length===0){
                let d = []
                d.push(obj)
                fs.writeFile(path.join(rootDir, 'api',moduule,'routes.json'),JSON.stringify(d,null," "),'utf8', function(err, result) {
                    if(err) console.log(chalk.red('ERROR:')+' Error coming in writing the api/'+moduule+'/routes.json file');
                })
            } else {
                dataa = JSON.parse(data);
                if(Array.isArray(dataa)){
                    dataa.push(obj)
                    fs.writeFile(path.join(rootDir, 'api',moduule,'routes.json'),JSON.stringify(dataa),'utf8', function(err, result) {
                        if(err) console.log(chalk.red('ERROR:')+' Error coming in writing the api/'+moduule+'/routes.json file');
                    })
                } else {
                    var d = [];
                    d.push(dataa)
                    d.push(obj)
                    fs.writeFile(path.join(rootDir, 'api',moduule,'routes.json'),JSON.stringify(d,null," "),'utf8', function(err, result) {
                        if(err) console.log(chalk.red('ERROR:')+' Error coming in writing the api/'+moduule+'/routes.json file');
                    })
                }
            }
        });
    })
}

function actionConfigure(action,moduule){
    var fileName = action.toString().includes('.') && action.toString().split('.')[1] ?  action.toString().split('.')[0] : console.log(chalk.black.bgYellowBright('WARNING:')+' Controller is not defined in valid format')
        if(typeof fileName === 'object'){
            console.log(chalk.black.bgYellowBright('WARNING:')+' Controller is not defined in valid format')
            return ''
        }
        if(!fs.existsSync(path.join(rootDir,'api',moduule,'controllers',fileName+'.js'))){
            fs.readdir(path.join(rootDir,'api',moduule),function(err,files){
                if(!files.includes('controllers')){
                    fs.mkdir(path.join(rootDir, 'api', moduule, 'controllers'),{ recursive: true }, (err) => { 
                        if (err) { 
                            console.log(chalk.red('ERROR:')+' Directory api/'+moduule+'/controllers can\'t br created');
                        }  
                    });
                }
            })  
            let funName = action.toString().split('.')[1] 
            let obj = {}
            obj[funName]= (req,res)=>{}               
            fs.writeFile(path.join(rootDir,'api',moduule,'controllers',fileName+'.js'),`module.exports = {\n ${funName}: (req,res)=> {\n  console.log("This is function ${funName}")\n }\n}`,'utf8', function(err, result) {
                if(err) console.log(chalk.red('ERROR:')+' Error coming in writing the api/'+moduule+'/controllers/'+fileName+'.js file');
            })
        } else {
            fs.readFile(path.join(rootDir,'api',moduule,'controllers',action.split('.')[0]+'.js'),'utf8',(err,data)=>{
                if(data.length === 0 || !data.includes("module.exports")){
                    fs.writeFile(path.join(rootDir,'api',moduule,'controllers',action.split('.')[0]+'.js'),`module.exports = {\n ${action.split('.')[1]}: (req,res)=> {\n  console.log("This is function ${action.split('.')[1]}")\n }\n}`,'utf8', function(err, result) {
                        if(err) console.log(chalk.red('ERROR:')+' Error coming in writing the api/'+moduule+'/controllers/'+action.split('.')[0]+'.js file');
                    })
                }
                if(data.slice(-1)==='}'){
                    let str = data.slice(0, -1)
                    str += `,\n${action.toString().split('.')[1]}: (req,res)=> {\n  console.log("This is function ${action.toString().split('.')[1]}")\n }\n}`  
                    fs.writeFile(path.join(rootDir,'api',moduule,'controllers',action.toString().split('.')[0]+'.js'),str,'utf8',function(err,result){
                        if(err) console.log(chalk.red('ERROR:')+' Error coming in writing the api/'+moduule+'/controllers/'+action.split('.')[0]+'.js file');
                    })
                }
            })
        }
}

function middlewareConfigure(middlewares,moduule){
    if(middlewares.length === 0){
        return []
    }
    if(!middlewares.match(/[A-Za-z0-9]/) || !middlewares.includes('.') || middlewares.length === 0){
        console.log(chalk.black.bgYellowBright('WARNING:')+' Middleware is not defined in valid format')
        return []
    }
    if(!middlewares.toString().includes(',')){
        var middlewareArr = []
        middlewareArr.push(middlewares)
    } else {
        var middlewareArr = middlewares.toString().split(',')
    }
    let middleware = []
    for(m of middlewareArr){
        if(m.split('.')[0].length === 0 || m.split('.')[1].length === 0 || (!m.includes('.'))){
            console.log(chalk.black.bgYellowBright('WARNING:')+' Middleware is not defined in valid format')
            return []
        }
        middleware.push(m)
        if(!fs.existsSync(path.join(rootDir,'api',moduule,'middlewares',m.split('.')[0]+'.js'))){
            console.log("0")
            fs.readdir(path.join(rootDir,'api',moduule),function(err,files){
                if(!files.includes('middlewares')){
                    fs.mkdir(path.join(rootDir,'api',moduule,'middlewares'),{ recursive: true }, (err) => { 
                        if (err) { 
                            console.log(chalk.red('ERROR:')+' Directory api/'+moduule+'/middlewares can\'t be created');
                        } else {
                            let funName = m.split('.')[1] 
                            let obj = {}
                            obj[funName]= (req,res)=>{}               
                            fs.writeFile(path.join(rootDir,'api',moduule,'middlewares',m.split('.')[0]+'.js'),`module.exports = {\n ${funName}: (req,res)=> {\n  console.log("This is function ${funName}")\n }\n}`,'utf8', function(err, result) {
                                if(err) console.log(chalk.red('ERROR:')+' Error coming in writing the api/'+moduule+'/middlewares/'+m.split('.')[0]+'.js file');
                            })
                        }  
                    })
                } else {
                    let funName = m.split('.')[1] 
                    let obj = {}
                    obj[funName]= (req,res)=>{}               
                    fs.writeFile(path.join(rootDir,'api',moduule,'middlewares',m.split('.')[0]+'.js'),`module.exports = {\n ${funName}: (req,res)=> {\n  console.log("This is function ${funName}")\n }\n}`,'utf8', function(err, result) {
                        if(err) console.log(chalk.red('ERROR:')+' Error coming in writing the api/'+moduule+'/middlewares/'+m.split('.')[0]+'.js file');
                    })
                }
            })
        } else {
            console.log("1")
            fs.readFile(path.join(rootDir,'api',moduule,'middlewares',m.split('.')[0]+'.js'),'utf8',(err,data)=>{
                if(data.length === 0 || !data.includes("module.exports")){
                    fs.appendFile(path.join(rootDir,'api',moduule,'middlewares',m.split('.')[0]+'.js'),`module.exports = {\n ${m.split('.')[1]}: (req,res)=> {\n  console.log("This is function ${m.split('.')[1]}")\n }\n}`,'utf8', function(err, result) {
                        if(err) console.log(chalk.red('ERROR:')+' Error coming in reading the api/'+moduule+'/middlewares/'+m.split('.')[0]+'.js file');
                    })
                }
                if(data.slice(-1)==='}'){
                    let str = data.slice(0, -1)
                    str += `,\n${m.toString().split('.')[1]}: (req,res)=> {\n  console.log("This is function ${m.toString().split('.')[1]}")\n }\n}`  
                    fs.writeFile(path.join(rootDir,'api',moduule,'middlewares',m.toString().split('.')[0]+'.js'),str,'utf8',function(err,result){
                        if(err) console.log(chalk.red('ERROR:')+' Error coming in writing the api/'+moduule+'/middlewares/'+m.split('.')[0]+'.js file');
                    })
                }
            })
        }
    }
    return middleware
}

function globalMiddlewareConfigure(globalMiddleware){
    if(globalMiddleware.length === 0){
        return []
    }
    if(!globalMiddleware.match(/[A-Za-z0-9]/) || !globalMiddleware.includes('.')){
        console.log(chalk.black.bgYellowBright('WARNING:')+' globalMiddleware is not defined in valid format')
        return []
    }
    if(!globalMiddleware.toString().includes(',')){
        var middlewareArr = []
        middlewareArr.push(globalMiddleware)
    } else {
        var middlewareArr = globalMiddleware.toString().split(',')
    }
    let middleware = []
    for(m of middlewareArr){
        if(m.split('.')[0].length === 0 || m.split('.')[1].length === 0 || (!m.includes('.'))){
            console.log(chalk.black.bgYellowBright('WARNING:')+' Global Middleware is not defined in valid format')
            return []
        }
        middleware.push(m)
        if(!fs.existsSync(path.join(rootDir,'middlewares',m.split('.')[0]+'.js'))){
            fs.readdir(path.join(rootDir),function(err,files){
                if(!files.includes('middlewares')){
                    fs.mkdir(path.join(rootDir,'middlewares'),{ recursive: true }, (err) => { 
                        if (err) { 
                            console.log(chalk.red('ERROR:')+` Directory middlewares can't be created`)
                        } else {
                            let funName = m.split('.')[1] 
                            let obj = {}
                            obj[funName]= (req,res)=>{}               
                            fs.writeFile(path.join(rootDir,'middlewares',m.split('.')[0]+'.js'),`module.exports = {\n ${funName}: (req,res)=> {\n  console.log("This is function ${funName}")\n }\n}`,'utf8', function(err, result) {
                                if(err) console.log(chalk.red('ERROR:')+` File middlewares/${m.split('.')[0]}.js can't be created `+err)
                            })
                        } 
                    })
                } else {
                    let funName = m.split('.')[1] 
                    let obj = {}
                    obj[funName]= (req,res)=>{}               
                    fs.writeFile(path.join(rootDir,'middlewares',m.split('.')[0]+'.js'),`module.exports = {\n ${funName}: (req,res)=> {\n  console.log("This is function ${funName}")\n }\n}`,'utf8', function(err, result) {
                        if(err) console.log(chalk.red('ERROR:')+` File middlewares/${m.split('.')[0]}.js can't be created `+err)
                    })
                }
            })
        } else {
            fs.readFile(path.join(rootDir,'middlewares',m.split('.')[0]+'.js'),'utf8',(err,data)=>{
                if(data.length === 0 || !data.includes("module.exports")){
                    fs.writeFile(path.join(rootDir,'middlewares',m.split('.')[0]+'.js'),`module.exports = {\n ${m.split('.')[1]}: (req,res)=> {\n  console.log("This is function ${m.split('.')[1]}")\n }\n}`,'utf8', function(err, result) {
                        if(err) console.log(chalk.red('ERROR:')+` File middlewares/${m.split('.')[0]}.js can't be created`)
                    })
                }
                if(data.slice(-1)==='}'){
                    let str = data.slice(0, -1)
                    str += `,\n${m.toString().split('.')[1]}: (req,res)=> {\n  console.log("This is function ${m.toString().split('.')[1]}")\n }\n}`  
                    fs.writeFile(path.join(rootDir,'middlewares',m.toString().split('.')[0]+'.js'),str,'utf8',function(err,result){
                        if(err) console.log(chalk.red('ERROR:')+` File middlewares/${m.split('.')[0]}.js can't be created`)
                    })
                }
            })
        }
    }
    return middleware
}

function createMiddleware(moduule){
    fs.readdir(path.join(rootDir,'api',moduule),(err,files)=>{
        if(!files.includes('middlewares')){
            fs.mkdirSync(path.join(rootDir,'api',moduule,'middlewares'),{recursive: true})
        }
    })
    let jsonData = require(path.join(rootDir,'api',moduule,'routes.json'))
    // let jsonData = fs.readFileSync(path.join(rootDir,'api',moduule,'routes.json'))
    let queChoice = []
    Object.values(jsonData).forEach(obj=> {
        queChoice.push("path: "+obj['path']+", action: "+obj['action'])
    })
    if(queChoice.length !== 0){
        let ques = [
            {
                type: 'list',
                name: 'apis',
                message: "Enter api name:",
                choices: queChoice
            },
            {
                type: 'input',
                name: 'middleware',
                message: 'Enter name of middleware:',
            }
        ]
        inquirer.prompt(ques).then(answers => {
            if(answers['middleware'].length === 0){
                return []
            }
            if(!answers['middleware'].match(/[A-Za-z0-9]/) || !answers['middleware'].includes('.') || answers['middleware'].length === 0){
                console.log(chalk.black.bgYellowBright('WARNING:')+' Middleware is not defined in valid format')
                return []
            }
            let pathh = answers['apis'].toString().split(',')[0].split(': ')[1]
            let action = answers['apis'].toString().split(',')[1].split(': ')[1]
            Object.values(jsonData).forEach(obj=> {
                if(obj['path'] === pathh && obj['action'] === action){
                    if(obj['middlewares'] === "" || obj['middlewares'].length===0){
                        let ar = []
                        if(answers['middleware'].includes(',')){
                            obj['middlewares'] = answers['middleware'].split(',')
                        } else {
                            ar.push(answers['middleware'])
                            obj['middlewares'] = ar
                        }
                    } else if(Array.isArray(obj['middlewares']) && answers['middleware'].includes(',')){
                        obj['middlewares'] = obj['middlewares'].concat(answers['middleware'].split(','))
                    } else if(Array.isArray(obj['middlewares'])){
                        obj['middlewares'].push(answers['middleware']) 
                    } else {
                        let arr = []
                        arr.push(obj['middlewares'])
                        arr.push(answers['middleware'])
                    }
                }
            })
            fs.writeFileSync(path.join(rootDir,'api',moduule,'routes.json'),JSON.stringify(jsonData))
            middlewareConfigure(answers['middleware'],moduule)
        })
    } else {
        console.log(chalk.black.bgYellowBright('WARNING:')+' There is no api. Create api with "framework create-api"')
    }
}

function createGlobalMiddleware(moduule){
    fs.readdir(path.join(rootDir),(err,files)=>{
        if(!files.includes('middlewares')){
            fs.mkdirSync(path.join(rootDir,'middlewares'),{recursive: true})
        }
    })
    let jsonData = require(path.join(rootDir,'api',moduule,'routes.json'))
    let queChoice = []
    Object.values(jsonData).forEach(obj=> {
        queChoice.push("path: "+obj['path']+", action: "+obj['action'])
    })
    if(queChoice.length !== 0){
        let ques = [
            {
                type: 'list',
                name: 'apis',
                message: "Enter api name:",
                choices: queChoice
            },
            {
                type: 'input',
                name: 'middleware',
                message: 'Enter name of global middleware:',
            }
        ]
        inquirer.prompt(ques).then(answers => {
            if(answers['middleware'].length === 0){
                return []
            }
            if(!answers['middleware'].match(/[A-Za-z0-9]/) || !answers['middleware'].includes('.') || answers['middleware'].length === 0){
                console.log(chalk.black.bgYellowBright('WARNING:')+' Global Middleware is not defined in valid format')
                return []
            }
            let pathh = answers['apis'].toString().split(',')[0].split(': ')[1]
            let action = answers['apis'].toString().split(',')[1].split(': ')[1]
            Object.values(jsonData).forEach(obj=> {
                if(obj['path'] === pathh && obj['action'] === action){
                    if(obj['globalMiddleware'] === "" || obj['globalMiddleware'].length===0){
                        let ar = []
                        if(answers['middleware'].includes(',')){
                            obj['globalMiddleware'] = answers['middleware'].split(',')
                        } else {
                            ar.push(answers['middleware'])
                            obj['globalMiddleware'] = ar
                        }
                    } else if(Array.isArray(obj['globalMiddleware']) && answers['middleware'].includes(',')){
                        obj['globalMiddleware'] = obj['globalMiddleware'].concat(answers['middleware'].split(','))
                    } else if(Array.isArray(obj['globalMiddleware'])){
                        obj['globalMiddleware'].push(answers['middleware']) 
                    } else {
                        let arr = []
                        arr.push(obj['globalMiddleware'])
                        arr.push(answers['middleware'])
                    }
                }
            })
            fs.writeFileSync(path.join(rootDir,'api',moduule,'routes.json'),JSON.stringify(jsonData))
            globalMiddlewareConfigure(answers['middleware'],moduule)
        })
    } else {
        console.log(chalk.black.bgYellowBright('WARNING:')+' There is no api. Create api with "framework create-api"')
    }
}

function objToString (obj) {
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += p + ':' + obj[p] + '\n';
        }
    }
    return str;
}