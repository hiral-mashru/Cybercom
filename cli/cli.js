#!/usr/bin/env node
var Spinner = require('cli-spinner').Spinner;
const fs = require('fs');
const path = require('path')
const fetch = require('node-fetch')
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
    if(modulle.length === 0){
        console.log(chalk.black.bgYellowBright('WARNING:')+' Provide module name...')
        return
    }
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
            fs.mkdir(path.join(rootDir,'api'),{ recursive: true }, (err) => { 
                if (err) { 
                    return console.error(err); 
                }  
            });
        } 
        if(files){
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
        console.log(typeof answers['action'])
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
            if (err) console.log(chalk.red('ERROR:')+' Error coming in reading the routes.json file');
            if(data.length===0){
                let d = []
                d.push(obj)
                fs.writeFile(path.join(rootDir, 'api',moduule,'routes.json'),JSON.stringify(d,null," "),'utf8', function(err, result) {
                    if(err) console.log('error', err);
                })
            } else {
                dataa = JSON.parse(data);
                if(Array.isArray(dataa)){
                    dataa.push(obj)
                    fs.writeFile(path.join(rootDir, 'api',moduule,'routes.json'),JSON.stringify(dataa),'utf8', function(err, result) {
                        if(err) console.log('error', err);
                    })
                } else {
                    var d = [];
                    d.push(dataa)
                    d.push(obj)
                    fs.writeFile(path.join(rootDir, 'api',moduule,'routes.json'),JSON.stringify(d,null," "),'utf8', function(err, result) {
                        if(err) console.log('error', err);
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
                            return console.error(err); 
                        }  
                    });
                }
            })  
            let funName = action.toString().split('.')[1] 
            let obj = {}
            obj[funName]= (req,res)=>{}               
            fs.writeFile(path.join(rootDir,'api',moduule,'controllers',fileName+'.js'),`module.exports = {\n ${funName}: (req,res)=> {\n  console.log("This is function ${funName}")\n }\n}`,'utf8', function(err, result) {
                if(err) console.log('error', err);
            })
        } else {
            // let fileData = (require(path.join(rootDir,'api',moduule,'controllers',fileName+'.js')))
            // console.log(fileData['l'])
            // fileData[action.toString().split('.')[1]] = ()=>{console.log("yeyy")}
            // console.log("fldt",JSON.stringify(fileData))
            var text = Object.create(null);
            fs.readFile(path.join(rootDir,'api',moduule,'controllers',fileName+'.js'),'utf8',(err,data)=>{
                // text = JSON.parse(data);
                eval(`text = {${data}}`);
                console.log("ddd",text, typeof text)
            })
        }
}

function middlewareConfigure(middlewares,moduule){
    if(!middlewares.match(/[A-Za-z0-9]/) || !middlewares.includes('.') || middlewares.length === 0){
        console.log(chalk.black.bgYellowBright('WARNING:')+' Middleware is not defined in valid format')
        return ''
    }
    if(!middlewares.toString().includes(',')){
        var middlewareArr = []
        middlewareArr.push(middlewares)
    } else {
        var middlewareArr = middlewares.toString().split(',')
    }
    console.log("mm",middlewareArr)
    let middleware = []
    for(m of middlewareArr){
        if(m.split('.')[0].length === 0 || m.split('.')[1].length === 0 || (!m.includes('.'))){
            console.log(chalk.black.bgYellowBright('WARNING:')+' Middleware is not defined in valid format')
            return ''
        }
        middleware.push(m)
        if(!fs.existsSync(path.join(rootDir,'api',moduule,'middlewares',m.split('.')[0]+'.js'))){
            fs.readdir(path.join(rootDir,'api',moduule),function(err,files){
                if(!files.includes('middlewares')){
                    fs.mkdir(path.join(rootDir,'api',moduule,'middlewares'),{ recursive: true }, (err) => { 
                        if (err) { 
                            return console.error(err); 
                        }  
                    })
                }
            })
            let funName = m.split('.')[1] 
            let obj = {}
            obj[funName]= (req,res)=>{}               
            fs.writeFile(path.join(rootDir,'api',moduule,'middlewares',m.split('.')[0]+'.js'),`module.exports = {\n ${funName}: (req,res)=> {\n  console.log("This is function ${funName}")\n }\n}`,'utf8', function(err, result) {
                if(err) console.log('error', err);
            })
        } else {

        }
    }
    return middleware
}

function globalMiddlewareConfigure(globalMiddleware){
    if(!globalMiddleware.match(/[A-Za-z0-9]/) || !globalMiddleware.includes('.') || globalMiddleware.length === 0){
        console.log(chalk.black.bgYellowBright('WARNING:')+' globalMiddleware is not defined in valid format')
        return ''
    }
    if(!globalMiddleware.toString().includes(',')){
        var middlewareArr = []
        middlewareArr.push(globalMiddleware)
    } else {
        var middlewareArr = globalMiddleware.toString().split(',')
    }
    console.log("mm",middlewareArr)
    let middleware = []
    for(m of middlewareArr){
        if(m.split('.')[0].length === 0 || m.split('.')[1].length === 0 || (!m.includes('.'))){
            console.log(chalk.black.bgYellowBright('WARNING:')+' Golabal Middleware is not defined in valid format')
            return ''
        }
        middleware.push(m)
        if(!fs.existsSync(path.join(rootDir,'middleware',m.split('.')[0]+'.js'))){
            fs.readdir(path.join(rootDir),function(err,files){
                if(!files.includes('middleware')){
                    fs.mkdir(path.join(rootDir,'middleware'),{ recursive: true }, (err) => { 
                        if (err) { 
                            return console.error(err); 
                        }  
                    })
                }
            })
            let funName = m.split('.')[1] 
            let obj = {}
            obj[funName]= (req,res)=>{}               
            fs.writeFile(path.join(rootDir,'middleware',m.split('.')[0]+'.js'),`module.exports = {\n ${funName}: (req,res)=> {\n  console.log("This is function ${funName}")\n }\n}`,'utf8', function(err, result) {
                if(err) console.log('error', err);
            })
        } else {

        }
    }
    return middleware
}
