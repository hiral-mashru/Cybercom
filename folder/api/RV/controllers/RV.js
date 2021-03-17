'use strict';
// const funn = setup.functions["funcFile"]["func1"]
const studentModel = require('../../../db/models').students
const Op = require('sequelize').Op
module.exports = {
    welcome: (req,res) => {
        var params = "Hiral"
        res.status(200).json({
            status: 1,
            message: "Welcome",
            data: setup.functions["funcFile"]["func2"](params),
            service: setup.services["RV"]["serve"]["service1"](params)
        })
    },
    globall: setup.functions["funcFile"]["func1"],
    getData: (req,res,next) => {
        studentModel.findAll({
            where: {
                email: {
                    [Op.eq]: req.body.email
                }
            }
        }).then(data=>{
            if(data){
                res.json({
                    data: data
                })
            } else {
                next()
            }
        })
    }, 
    insert: (req,res,next)=>{
        studentModel.create({
            name: req.body.name,
            email: req.body.email
        }).then(user=>{
            // res.status(500).send('Something broke')
            res.status(200).json({
                status: 1,
                message: "Student created successfully"
            })
        }).catch(e=>{
            const err = new Error(e.name+" : "+setup.findErr(e.errors,'message'))
            err.status = 500
            next(err)
            // res.json({
            //     e: e
            // })
        })
    }
}
