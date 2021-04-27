const { program } = require('commander');
const pkgConfig = require('./package.json') 
const { init } = require('./core/init')
const { green, red } = require('chalk');
const dbConfig = require('./helpers/dbConfig');
const create_module = require('./core/create_module')
const createApi = require('./core/create_api')

program.version(pkgConfig.version).description(pkgConfig.description)

// framework init
program.command('init').description('To initialize the basic setup.').action(()=>{
    init()
          .then((result)=>{
              if(result){
                  console.log(green('Setup is ready.'))
              }
          })
          .catch((err)=>{
              console.log(red('ERROR: ')+err)
          });
})

// framework db-config
program.command('db-config').description('To configure the database.').action(()=>{
    dbConfig()
})

program.command('create-module <module...>').description('Name of module').action((modulle)=>{
      create_module(modulle)
  })

program.command('create-api').description('To create api.').action(()=>{
    createApi()
})

program.parse(process.argv);
