const { readdirSync } = require('fs')
const chalk = require('chalk')
const fs = require('fs')

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

const apis = getDirectories(__dirname + '/../api');

var publicRoutes = [];
var protectedRoutes = [];
var routes = {};
var path = []

// var finalPublicRoutes = []
// var finalProtectedRoutes = []
// for(let key in apis){
//     routes = {};
//     routes = require(`../api/${apis[key]}/routes.json`);//1
//     for(let route in routes){ //2
//         // console.log(route)
//         var controllerArray = routes[route].action.split('.');
//         if(controllerArray.length != 2 || !routes[route].path || !routes[route].action){
//             throw `There is an problem with API : '${apis[key]}' ROUTE PATH: ${routes[route].path} METHOD: ${routes[route].method}`;
//         }
//         routes[route].path = '/'+(apis[key]+routes[route].path);//3
//         // console.log("pathh",apis[key] )
//         var controllerName = controllerArray[0];
//         var functionName = controllerArray[1];
//         var func = (require(`../api/${apis[key]}/controllers/${controllerName}`))[functionName];
//         if(!func){
//             throw `There is an problem with API : '${apis[key]}' ACTION: '${functionName}' was not found.`;
//         }
//         routes[route].action = func;
//         if(routes[route].public){
//             finalPublicRoutes.push(routes[route]);
//         } else {
//             finalProtectedRoutes.push(routes[route]);
//         }
//     }
// }

//for..of takes value, for..in takes key
for(let key in apis){
    if(fs.existsSync(__dirname+'/../api/'+apis[key]+'/routes.json')){
        routes = require(`../api/${apis[key]}/routes.json`)
        for(let route in routes){
            var letters = /^[A-Za-z]+$/;
            if(!route.match(letters) && Array.isArray(routes)){
                var controllerlArr = routes[route].action.split('.')
                if(controllerlArr.length != 2 || !routes[route].path || !routes[route].method || routes[route].path.charAt(0) != '/' ){
                    console.log(chalk.black.bgYellowBright('WARNING:')+`There is an problem with API : '${apis[key]}' ROUTE PATH: ${routes[route].path} METHOD: ${routes[route].method}`)
                } else {
                    // routes[route].path = '/'+apis[key]+routes[route].path
                    if(!path.includes(routes[route].path)){
                        path.push(routes[route].path)
                    } else {
                        path.push('/'+apis[key]+routes[route].path)
                        routes[route].path = '/'+apis[key]+routes[route].path
                    }
                    // console.log(routes[route].path)
                    var controllerName, funName 
                    [controllerName, funName] = [controllerlArr[0],controllerlArr[1]]
                    var func = (require(`../api/${apis[key]}/controllers/${controllerName}`))[funName]
                    if(!func){
                        console.log(chalk.black.bgYellowBright('WARNING:')+`There is an problem with API : '${apis[key]}' ACTION: '${funName}' was not found.`)
                    } else {
                        routes[route].action = func;
                        if('middleware' in routes[route] && Array.isArray(routes[route].middleware)){
                            var middlewareFun = []
                            var middleware = []
                            for(let a of routes[route].middleware) {
                                // console.log("a",a)
                                var middlewareArr = a.split('.')
                                var middlewareName, middlewareFunName
                                [middlewareName,middlewareFunName] = [middlewareArr[0],middlewareArr[1]]
                                middleware.push(middlewareName)
                                if(!(require(`../api/${apis[key]}/middleware/${middlewareName}`))[middlewareFunName]){
                                    
                                }
                                middlewareFun.push((require(`../api/${apis[key]}/middleware/${middlewareName}`))[middlewareFunName])
                            }
                            routes[route].middleware = middlewareFun
                            // console.log(routes[route].middleware)
                        } 
                        if(routes[route].public){
                            publicRoutes.push(routes[route])
                        } else {
                            protectedRoutes.push(routes[route])
                        }
                    }
                } 
            } else {
                console.log(chalk.black.bgYellowBright('WARNING:')+"not valid sorry!!")
            }
        }
    } else {
        console.log(chalk.black.bgYellowBright('WARNING:')+`PATH: ${__dirname}/../api/${apis[key]}/routes.json is not available`) // 1
    }
}

// console.log("rr",path)

module.exports = {
    public: publicRoutes,
    protected: protectedRoutes 
}