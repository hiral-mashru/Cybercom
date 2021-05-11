const Students = setup.models['students']

module.exports = {
    // If you need to get your instance in sync, you can use the methodreload. It will 
    // fetch the current data from the database and overwrite the attributes of the model 
    // on which the method has been called on.
    reload: (req,res)=> {
        Students.findOne({ where: { name: 'user' } }).then(person => {
            person.name = 'jane'
            console.log(person.name) // 'jane'
          
            person.reload().then(() => {
              res.send(person.name) // 'user'
            })
        })
    }
,
    increment: (req,res)=> {
        Students.findByPk(1).then(user => {
            return user.increment(/*'my-integer-field', 'my-very-other-field' , {by: 2}*/
            {
                'int1':    2,
                'int2': 3
              }
            )
        }).then(user => {
            user.reload().then(()=>{
                res.send(user)
            })
            // Postgres will return the updated user by default (unless disabled by setting { returning: false })
            // In other dialects, you'll want to call user.reload() to get the updated instance...
        })
    }
,
    decrement: (req,res)=> {
        Students.findByPk(1).then(user => {
            return user.decrement(/*'my-integer-field', 'my-very-other-field' , {by: 2}*/
            {
                'my-integer-field':    2,
                'my-very-other-field': 3
              }
            )
        }).then(user => {
            user.reload().then(()=>{
                res.send(user)
            })
            // Postgres will return the updated user by default (unless disabled by setting { returning: false })
            // In other dialects, you'll want to call user.reload() to get the updated instance...
        })
    }
}