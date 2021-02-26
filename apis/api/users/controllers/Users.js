const users = require('../../../db/models')

module.exports = {
    findAll: async (req, res) => {
        res.json({
            status: 1
        })
    },
    insert: async (req, res) => {
        users.create({
            "name" : "heer",
            "email" : "heer@gmail.com"
        }).then(()=>{
            res.json({
                status: 1,
                data: "inserted"
            })
        })
    }
}