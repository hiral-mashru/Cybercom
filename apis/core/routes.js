const { readdirSync } = require('fs')
const chalk = require('chalk')
const fs = require('fs')

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

const apis = getDirectories(__dirname + '/../api');

var finalPublicRoutes = [];
var finalProtectedRoutes = [];
var routes = {};
for(let key in apis){
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
}

for(let key in apis){
    if(fs.existsSync(`../api/${apis[key]}/routes.json`)){
        routes = require(`../api/${apis[key]}/routes.json`)
        for(route in routes){
            var ctrlArr = routes[route].action.split('.')
            if(ctrlArr.length != 2 || !routes[route].path || !routes[route].method){
                console.log(chalk.yellow(`There is an problem with API : '${apis[key]}' ROUTE PATH: ${routes[route].path} METHOD: ${routes[route].method}`))
            } else {
    
            }
        }
    } else {
        console.log(chalk.yellow(`PATH: ../api/${apis[key]}/routes.json is not available`))
    }
}

module.exports = {
    public: finalPublicRoutes,
    protected: finalProtectedRoutes 
}