const fs=require('fs');
const path=require('path');
const apis=fs.readdirSync(path.join(__dirname,'..','api'),{withFileTypes:true})
.filter(dirent=>dirent.isDirectory())
.map(dirent=>dirent.name);


let moduleFunction={};
for(let api of apis){
    moduleFunction[api]={};
    const files=fs.readdirSync(path.join(__dirname,'..','api',api,'functions'),{withFileTypes:true})
    .filter(dirent=>dirent.isFile())
    .map(dirent=>dirent.name)
    

    for(let file of files){
        const fileName=file.split('.')[0];
        moduleFunction[api][fileName]={};
        const {...func}=require(path.join(__dirname,'..','api',api,'functions',fileName));
        for(let key in func){
            moduleFunction[api][fileName][key]=func[key];
        }
    }
}


setup.modulefunctions=moduleFunction;
module.exports=moduleFunction;
