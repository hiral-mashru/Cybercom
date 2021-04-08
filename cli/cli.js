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
            createModule(m)
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
    fs.readdir(path.join(rootDir),function(err,files){
        if(!files.includes('api')){
            fs.mkdirSync(path.join(rootDir,'api'),{ recursive: true });
        }
    })
    fs.readdir(path.join(rootDir,'api'),function(err,files){ 
        if(err){
            fs.mkdirSync(path.join(rootDir,'api'),{ recursive: true });
        }
        if(files.length === 0){
            console.log(chalk.black.bgYellowBright('WARNING:')+' There are no folders at '+rootDir+'/api')
        }
        files.push("Want_New_module?")
        // if(files && files.length!==0){
            var ques = [
                {
                    type: 'list',
                    name: 'modules',
                    message: "Enter Module Name:",
                    choices: files.map(a => { return {name: a,value: a}})
                }
            ]
            inquirer.prompt(ques).then(answers => {
                if(answers['modules'] === 'Want_New_module?'){
                    let q = [{
                        type: 'input',
                        name: 'mdl',
                        message: "Enter new module: ",
                        validate: function( value ) {
                          if (value.length) {
                            return true;
                          } else {
                            return 'Enter new module: ';
                          }
                        }
                      }]
                    inquirer.prompt(q).then(ans=>{
                        createModule(ans['mdl'])
                        createApi(ans['mdl'])
                    })
                } else {
                    createApi(answers['modules'])
                }
            })
        // } else {
            // console.log(chalk.black.bgYellowBright('WARNING:')+' There are no folders at '+rootDir+'/api, create module using "framework create-module"')
        // }
    })
} else if(type === 'create-middleware'){
    fs.readdir(path.join(rootDir),function(err,files){
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
    fs.readdir(path.join(rootDir),function(err,files){
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
} else if(type === 'help'){
    console.log(chalk.black.bgYellowBright('framework init')+' => It creates the whole folder structure and also will ask for database configuration.')
    console.log(chalk.black.bgYellowBright('framework create-module <moduleName>')+' => It creates module consistes of controllers,services,middlewares files and folders with routes.json file.')
    console.log(chalk.black.bgYellowBright('framework create-api')+' => It generates the api in given module.')
    console.log(chalk.black.bgYellowBright('framework create-middleware')+' => It generates the middleware in given module.')
    console.log(chalk.black.bgYellowBright('framework create-globalMiddleware')+' => It generates the global middleware in given module.')
    console.log(chalk.black.bgYellowBright('framework db-config')+' => It does configuration of database.')
}
// else if(type === 'github'){
//     download('hiral-mashru/boilerplate-structure', '', function (err) {
//         console.log(err ? 'Error' : 'Success')
//     })
// }
else {
    console.log(chalk.black.bgYellowBright('WARNING:')+' Enter correct command. Need help ? Go for "framework help"')
}

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
    if(!fs.existsSync(rootDir+'/middlewares/middleware.js')) {
        fs.writeFile(path.join(rootDir,'middlewares','middleware.js'),`module.exports = {\n middleware: (req,res,next)=> {\n  console.log("This is function global middleware")\n  next();\n }\n}`, function(err, result) {
            if(err) console.log(chalk.red('ERROR:')+` File /middlewares/middleware.js can't be created`) 
        })
    }
        
    fs.appendFile(path.join(rootDir,'.gitignore'),`node_modules/`, function(err, result) {
        if(err) console.log(chalk.red('ERROR:')+` File .gitignore can't be created`) 
    })
    
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
        fs.mkdirSync(rootDir+'/config', {recursive: true})
        fs.writeFileSync(rootDir+'/config/database.json',databaseJsonData)
    }
    new Confirm({message:'Do you want to setup development env?'})
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
          message: "Enter username: ",
          validate: function( value ) {
            if (value.length) {
              return true;
            } else {
              return 'Enter the username: ';
            }
          }
        },
        {
            type: 'password',
            name: 'password',
            message: "Enter password: "
        },
        {
            type: 'input',
            name: 'database',
            message: "Enter database name: ",
            validate: function( value ) {
                if (value.length) {
                  return true;
                } else {
                  return 'Enter dataase name:';
                }
              }
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
        "host": "${answers['host'] || '127.0.0.1'}",
        "dialect": "${answers['dialect'] || 'mysql'}",
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
        "host": "${answers['host'] || '127.0.0.1'}",
        "dialect": "${answers['dialect'] || 'mysql'}",
        "logging": ${answers['logging']}
    }
}`
            fs.writeFile(path.join(rootDir, 'config','database.json'),(databaseJsonData), function(err, result) {
                if(err) console.log(chalk.red('ERROR:')+` File config/database.json can't be created`) 
            })
        }
    })
}

function createModule(m){
    let fls = fs.readdirSync(rootDir+'/api')
    if(fls.includes(m)){
        console.log(chalk.black.bgYellowBright('WARNING:')+' '+rootDir+'/api/'+m+' already exists.')
    } else {
    fs.mkdir(rootDir+'/api/'+m,{ recursive: true }, (err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory ${m} can't be created`) 
        } 
    });
    fs.mkdir(rootDir+'/api/'+m+'/controllers',{ recursive: true }, (err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory ${m}/controllers can't be created`) 
        }  
    });
    fs.mkdir(rootDir+'/api/'+m+'/middlewares',{ recursive: true }, (err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory ${m}/middlewares can't be created`)  
        }  
    });
    fs.mkdir(rootDir+'/api/'+m+'/services',{ recursive: true }, (err) => { 
        if (err) { 
            console.log(chalk.red('ERROR:')+` Directory ${m}/services can't be created`)  
        } 
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
        fs.writeFile(path.join(rootDir, 'api', m, 'middlewares',m+'.js'),`module.exports = {\n ${m}: (req,res,next)=> {\n  console.log("This is function ${m}")\n  next();\n }\n}`, function(err, result) {
            if(err) console.log(chalk.red('ERROR:')+` File ${m}/middlewares/${m}.js can't be created`) 
        })
    }
    if(!fs.existsSync(rootDir+'/api/'+m+'/services/'+m+'.js')) {
        fs.writeFile(path.join(rootDir, 'api', m, 'services',m+'.js'),`module.exports = {\n ${m}: (req,res)=> {\n  console.log("This is function ${m}")\n }\n}`, function(err, result) {
            if(err) console.log(chalk.red('ERROR:')+` File ${m}/services/${m}.js can't be created`) 
        })
    }
}
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
            choices: [{name: 'get', value: 'get'},{name: 'post', value: 'post'},{name: 'put', value: 'put'},{name: 'patch', value: 'patch'},{name: 'delete', value: 'delete'}]
        },
        {
            type: 'input',
            name: 'action',
            message: "Enter controller (in 'FileName.FunctionName' format): ",
            validate: function( value ) {
                if (value.length) {
                  return true;
                } else {
                  return "Enter controller (in 'FileName.FunctionName' format): ";
                }
            }
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
            message: "API's access would be Public? : ",
            default: true
        },
        {
            type: 'confirm',
            name: 'root',
            message: "Call from root? ",
            default: false
        }
    ]
    inquirer.prompt(questions).then(answers => {
        var pathh = answers['path'][0] === '/' ? answers['path'] : '/'+answers['path']
        var method = answers['method']
        checkPath(moduule,pathh,answers['root'],method).then((jsonData)=>{
            for(obj of jsonData){
                if(obj['path']===pathh && obj['root']===answers['root'] && obj['method']===method){
                    console.log(chalk.black.bgYellowBright('WARNING:')+' This path has been used already..')
                    return '';
                }
            } 
            let act = actionConfigure(answers['action'],moduule)
            if(act===0){
                return ''
            }
            var middleware = middlewareConfigure(answers['middlewares'],moduule)
            if(middleware === ''){
                return ''
            }
            var globalMiddleware = globalMiddlewareConfigure(answers['globalMiddleware'])
            if(globalMiddleware === ''){
                return ''
            }
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
    })
}

async function checkPath(moduule,pathh,root,method){
    return new Promise((resolve,reject)=>{
    let jsonData = require(path.join(rootDir,'api',moduule,'routes.json'))
    resolve(jsonData)
})
}

function actionConfigure(action,moduule){
    if(action.length === 0){
        return 0
    }
    if(!action.match(/[A-Za-z0-9]/) || !action.includes('.') || action.length === 0){
        console.log(chalk.black.bgYellowBright('WARNING:')+' Action is not defined in valid format')
        return 0
    }
        if(!fs.existsSync(path.join(rootDir,'api',moduule,'controllers',fileName+'.js'))){
            fs.readdir(path.join(rootDir,'api',moduule),function(err,files){
                if(!files.includes('controllers')){
                    fs.mkdir(path.join(rootDir, 'api', moduule, 'controllers'),{ recursive: true }, (err) => { 
                        if (err) { 
                            console.log(chalk.red('ERROR:')+' Directory api/'+moduule+'/controllers can\'t br created');
                            return 0
                        }  
                    });
                }
            })  
            let funName = action.toString().split('.')[1] 
            let obj = {}
            obj[funName]= (req,res)=>{}               
            fs.writeFile(path.join(rootDir,'api',moduule,'controllers',fileName+'.js'),`module.exports = {\n ${funName}: (req,res)=> {\n  console.log("This is function ${funName}")\n }\n}`,'utf8', function(err, result) {
                if(err) {console.log(chalk.red('ERROR:')+' Error coming in writing the api/'+moduule+'/controllers/'+fileName+'.js file'); return 0;}
            })
        } else {
            
            fs.readFile(path.join(rootDir,'api',moduule,'controllers',action.split('.')[0]+'.js'),'utf8',(err,data)=>{
                if(data.length === 0 || !data.includes("module.exports")){
                    fs.writeFile(path.join(rootDir,'api',moduule,'controllers',action.split('.')[0]+'.js'),`module.exports = {\n ${action.split('.')[1]}: (req,res)=> {\n  console.log("This is function ${action.split('.')[1]}")\n }\n}`,'utf8', function(err, result) {
                        if(err) {console.log(chalk.red('ERROR:')+' Error coming in writing the api/'+moduule+'/controllers/'+action.split('.')[0]+'.js file'); return 0;}
                    })
                } else {
                    let apiData = require(path.join(rootDir,'api',moduule,'controllers',answers['action'].split('.')[0]+'.js'))
                    for(i in (apiData)){
                        if(i.toString().toLowerCase() === answers['action'].split('.')[1].toString().toLowerCase()){
                            console.log(chalk.black.bgYellowBright('WARNING:')+' api '+answers['action'].split('.')[1]+' name is already exists in '+answers['action'].split('.')[0]+'.js')
                            return 0
                        }
                    }
                    if(data.slice(-1)==='}'){
                        let str = data.slice(0, -1)
                        str += `,\n${action.toString().split('.')[1]}: (req,res)=> {\n  console.log("This is function ${action.toString().split('.')[1]}")\n }\n}`  
                        fs.writeFile(path.join(rootDir,'api',moduule,'controllers',action.toString().split('.')[0]+'.js'),str,'utf8',function(err,result){
                            if(err) {console.log(chalk.red('ERROR:')+' Error coming in writing the api/'+moduule+'/controllers/'+action.split('.')[0]+'.js file'); return 0;}
                        })
                    }
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
        if(m.split('.')[0] === '' || m.split('.')[1] === '' || (!m.includes('.'))){
            console.log(chalk.black.bgYellowBright('WARNING:')+' Middleware is not defined in valid format')
            return []
        }
        middleware.push(m)
        if(!fs.existsSync(path.join(rootDir,'api',moduule,'middlewares',m.split('.')[0]+'.js'))){
            let files = fs.readdirSync(path.join(rootDir,'api',moduule))
                if(!files.includes('middlewares')){
                    fs.mkdirSync(path.join(rootDir,'api',moduule,'middlewares'),{ recursive: true })
                }
                let funName = m.split('.')[1]                
                fs.writeFileSync(path.join(rootDir,'api',moduule,'middlewares',m.split('.')[0]+'.js'),`module.exports = {\n ${funName}: (req,res,next)=> {\n  console.log("This is function ${funName}")\n  next();\n }\n}`,'utf8')
            
        } else {
            let data = fs.readFileSync(path.join(rootDir,'api',moduule,'middlewares',m.split('.')[0]+'.js'),'utf8')
            if(data.length === 0 || !data.includes("module.exports")){
                fs.appendFileSync(path.join(rootDir,'api',moduule,'middlewares',m.split('.')[0]+'.js'),`module.exports = {\n ${m.split('.')[1]}: (req,res,next)=> {\n  console.log("This is function ${m.split('.')[1]}")\n  next();\n }\n}`,'utf8')
            } else {
                let middlewareData = require(path.join(rootDir,'api',moduule,'middlewares',m.split('.')[0]+'.js'))
                for(j in (middlewareData)){
                    if(j.toString().toLowerCase() === m.split('.')[1].toString().toLowerCase()){
                        console.log(chalk.black.bgYellowBright('WARNING:')+' '+m.split('.')[1]+' middleware is already exists in '+m.split('.')[0]+'.js')
                        return ''
                    }
                }
                if(data.toString().charAt(data.length-1)==='}'){
                    const lastParanthesis=data.toString().lastIndexOf('}')
                    let str = data.slice(0,lastParanthesis);
                    str += `,\n${m.toString().split('.')[1]}: (req,res,next)=> {\n  console.log("This is function ${m.toString().split('.')[1]}")\n  next();\n }\n}`  
                    fs.writeFileSync(path.join(rootDir,'api',moduule,'middlewares',m.toString().split('.')[0]+'.js'),str,'utf8')
                }
            }   
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
        if(m.split('.')[0] === '' || m.split('.')[1] === '' || (!m.includes('.'))){
            console.log(chalk.black.bgYellowBright('WARNING:')+' Global Middleware is not defined in valid format')
            return []
        }
        middleware.push(m)
        if(!fs.existsSync(path.join(rootDir,'middlewares',m.split('.')[0]+'.js'))){
            let files = fs.readdirSync(path.join(rootDir))
                if(!files.includes('middlewares')){
                    fs.mkdirSync(path.join(rootDir,'middlewares'),{ recursive: true })
                }
                let funName = m.split('.')[1]                
                fs.writeFileSync(path.join(rootDir,'middlewares',m.split('.')[0]+'.js'),`module.exports = {\n ${funName}: (req,res,next)=> {\n  console.log("This is function ${funName}")\n  next();\n }\n}`,'utf8')
            
        } else {
            let data = fs.readFileSync(path.join(rootDir,'middlewares',m.split('.')[0]+'.js'),'utf8')
            if(data.length === 0 || !data.includes("module.exports")){
                fs.appendFileSync(path.join(rootDir,'middlewares',m.split('.')[0]+'.js'),`module.exports = {\n ${m.split('.')[1]}: (req,res,next)=> {\n  console.log("This is function ${m.split('.')[1]}")\n  next();\n }\n}`,'utf8')
            } else {
                let middlewareData = require(path.join(rootDir,'middlewares',m.split('.')[0]+'.js'))
                for(j in (middlewareData)){
                    if(j.toString().toLowerCase() === m.split('.')[1].toString().toLowerCase()){
                        console.log(chalk.black.bgYellowBright('WARNING:')+' '+m.split('.')[1]+' global middleware is already exists in '+m.split('.')[0]+'.js')
                        return ''
                    }
                }
                if(data.toString().charAt(data.length-1)==='}'){
                    var lastParanthesis=data.toString().lastIndexOf('}')
                    let str = data.slice(0,lastParanthesis);
                    str += `,\n${m.toString().split('.')[1]}: (req,res,next)=> {\n  console.log("This is function ${m.toString().split('.')[1]}")\n  next();\n }\n}`  
                    fs.writeFileSync(path.join(rootDir,'middlewares',m.toString().split('.')[0]+'.js'),str,'utf8')
                }
            }
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
    let queChoice = []
    Object.values(jsonData).forEach(obj=> {
        queChoice.push("path: "+obj['path']+", action: "+obj['action']+", method:"+obj['method'])
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
                    if(!('middlewares' in obj) || obj['middlewares'] === "" || obj['middlewares'].length===0){
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
        queChoice.push("path: "+obj['path']+", action: "+obj['action']+", method:"+obj['method'])
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
                    if(!('globalMiddleware' in obj) || obj['globalMiddleware'] === "" || obj['globalMiddleware'].length===0){
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