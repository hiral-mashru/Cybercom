var cron = require('node-cron');

module.exports = {
  task : cron.schedule('* * * * * *', () => {
      console.log('running a task every second');
    }),
  task2: cron.schedule('* * * * *',()=>{
    console.log('running a task every minute...')
  })
}

